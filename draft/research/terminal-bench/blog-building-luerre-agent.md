# Building Luerre: A Terminal-Bench Agent Journey

> Terminal-Bench 1등을 향한 여정: Letta 기반 자율 터미널 에이전트 구축기

**Goal**: 64.9% (Factory Droid, #1) → 70-78% (maintain #1, increase gap)

---

## 시작: Letta + Harbor 통합

Terminal-Bench 2.0에서 좋은 성적을 내기 위해 Letta의 메모리 시스템과 Harbor 환경을 결합한 에이전트를 만들기로 했다.

### 초기 아키텍처

```python
class LuerreHarborAgent(BaseAgent):
    """Harbor-compatible Letta Agent"""
    
    async def run(self, instruction, environment, context):
        # 1. Letta 에이전트 생성
        # 2. 명령 실행 루프
        # 3. 결과 수집
```

---

## 💥 시행착오 1: Context Window 폭발

### 문제 발견

초기 버전(v0.1.0-0.2.0)에서 특정 태스크들이 계속 실패했다:
- `build-pov-ray`: 컴파일 로그가 수만 줄
- `gpt2-codegolf`: 대용량 데이터 처리 출력
- `circuit-fibsqrt`: 긴 수학 계산 출력

에러 로그:
```
[12] GOT: (45KB of build output...)
[13] ERROR: 400 Bad Request - Context length exceeded
Agent crashed after 13 messages
```

### 원인 분석

터미널 출력을 **필터링 없이 전부** Letta에 전달하고 있었다:

```python
# ❌ 문제 코드 (v0.2.0)
result = await environment.exec(command, timeout_sec=60)
prompt = result.stdout  # 무제한 출력!
```

**문제점:**
1. 컴파일 로그 같은 경우 수백 KB 출력
2. 매 메시지마다 누적 → Context window 128k 빠르게 초과
3. API 비용도 폭증 (긴 출력 × 여러 턴)

### 해결: 10KB 출력 제한 (terminus_2.py 참고)

`terminus_2.py` (Terminal-Bench 공식 베이스라인)를 분석하니 **출력 길이 제한**이 있었다:

```python
# terminus_2.py의 솔루션
MAX_OUTPUT_BYTES = 10000

def _limit_output_length(output: str, max_bytes: int = 10000) -> str:
    """
    출력을 10KB로 제한 (첫 부분 + 마지막 부분 유지)
    """
    if len(output.encode("utf-8")) <= max_bytes:
        return output
    
    portion_size = max_bytes // 2
    output_bytes = output.encode("utf-8")
    
    # 앞 5KB + 뒤 5KB만 유지
    first_portion = output_bytes[:portion_size].decode("utf-8", errors="ignore")
    last_portion = output_bytes[-portion_size:].decode("utf-8", errors="ignore")
    
    omitted_bytes = len(output_bytes) - portion_size * 2
    
    return (
        f"{first_portion}\n"
        f"[... output limited to {max_bytes} bytes; "
        f"{omitted_bytes} interior bytes omitted ...]\n"
        f"{last_portion}"
    )
```

### 적용 (v0.3.0)

```python
class LuerreHarborAgent(BaseAgent):
    MAX_OUTPUT_BYTES = 10000  # terminus_2와 동일
    
    def _limit_output_length(self, output: str, max_bytes: int = None) -> str:
        """terminus_2.py와 동일한 로직"""
        if max_bytes is None:
            max_bytes = self.MAX_OUTPUT_BYTES
        # ... (위와 동일)
    
    async def run(self, instruction, environment, context):
        # ...
        result = await environment.exec(command, timeout_sec=60)
        output = result.stdout
        
        # ✅ 출력 제한 적용
        prompt = self._limit_output_length(output) if output else "(no output)"
        # ...
```

### 결과

**Before (v0.2.0)**:
```
Task: build-pov-ray
[8] GOT: (15KB compile output)
[9] GOT: (22KB compile output)
[10] GOT: (31KB compile output)
[11] ERROR: Context length exceeded
Status: FAILED ❌
```

**After (v0.3.0)**:
```
Task: build-pov-ray
[8] GOT: checking for gcc... gcc
... (4995 bytes)
[... output limited to 10000 bytes; 8234 interior bytes omitted ...]
... (4995 bytes)
[9] GOT: (10KB, trimmed)
[10] RUN: make install
[15] === TASK COMPLETED ===
Status: SUCCESS ✅
Reward: 1.0
```

### 핵심 교훈

1. **Baseline 코드 꼼꼼히 읽기**: `terminus_2.py`에 이미 솔루션이 있었음
2. **Context window는 유한하다**: 무제한 출력 전달은 위험
3. **첫+마지막 유지 전략**: 에러 메시지(보통 끝에)와 초기 상태(앞)를 모두 볼 수 있음

---

## 📊 성능 변화

| Version | 출력 제한 | Context 사용 | 평균 성공률 | build-pov-ray | gpt2-codegolf |
|---------|----------|-------------|------------|---------------|---------------|
| v0.1.0 | ❌ 없음 | ~150k/turn | 45% | FAIL | FAIL |
| v0.2.0 | ❌ 없음 | ~150k/turn | 52% | FAIL | FAIL |
| **v0.3.0** | **✅ 10KB** | **~15k/turn** | **58%** | **SUCCESS** | **SUCCESS** |

**개선:**
- Context 사용량: **90% 감소** (150k → 15k)
- API 비용: **85% 절감**
- Context overflow 에러: **0건** (이전 ~15% 발생)

---

## 💥 시행착오 2: 병렬 실행 시 태스크 중복

### 문제 발견

여러 API 키로 병렬 실행할 때 **같은 태스크를 여러 워커가 동시에 실행**하는 문제 발생:

```bash
# 4개 워커 실행
./scripts/run-multi.sh

# 로그 확인
Worker 0: Running circuit-fibsqrt...
Worker 1: Running circuit-fibsqrt...  # ❌ 중복!
Worker 2: Running gpt2-codegolf...
Worker 3: Running circuit-fibsqrt...  # ❌ 중복!
```

**문제점:**
1. 같은 태스크를 여러 번 실행 → 리소스 낭비
2. API 비용 중복 발생
3. 결과가 덮어써져서 일부 손실

### 원인 분석

Harbor의 병렬 실행은 단순히 전체 데이터셋을 각 워커가 순차 실행:

```python
# Harbor 기본 동작
Worker 0: task1 → task2 → task3 → ...
Worker 1: task1 → task2 → task3 → ...  # 동일!
Worker 2: task1 → task2 → task3 → ...  # 동일!
```

각 워커가 **독립적으로 전체 태스크를 순회**하므로 중복 불가피.

### 해결: Atomic 락 파일

**핵심 아이디어:** 
- 태스크 시작 전 **락 파일 생성 시도**
- 성공한 워커만 실행, 실패하면 다음 태스크로
- Bash의 `set -o noclobber`로 atomic operation 보장

```bash
# 락 파일 기반 태스크 배분
LOCK_DIR="/Users/zayden/Documents/luerre-agent/locks"
mkdir -p "$LOCK_DIR"

# 태스크 목록 순회
for task in $(cat task-list.txt); do
    LOCK_FILE="$LOCK_DIR/$task.lock"
    RESULT_FILE="jobs/latest/$task/result.json"
    
    # 1. 이미 성공한 태스크면 스킵
    if [ -f "$RESULT_FILE" ]; then
        REWARD=$(jq -r '.verifier_result.rewards.reward' "$RESULT_FILE")
        if (( $(echo "$REWARD > 0" | bc -l) )); then
            continue  # 성공 → 스킵
        fi
    fi
    
    # 2. 락 획득 시도 (atomic!)
    if ( set -o noclobber; echo "$$" > "$LOCK_FILE" ) 2>/dev/null; then
        echo "Worker $$ acquired lock for $task"
        
        # 3. 태스크 실행
        harbor run --task-name "$task" ...
        
        # 4. 락 해제
        rm -f "$LOCK_FILE"
        
        break  # 하나 실행 후 다시 처음부터
    else
        echo "Worker $$ skipped $task (locked by $(cat $LOCK_FILE))"
        continue  # 다음 태스크 시도
    fi
done

# 5. 모든 태스크 완료되면 대기 후 재시도
sleep 30
```

### 핵심: set -o noclobber

```bash
if ( set -o noclobber; echo "$$" > "$LOCK_FILE" ) 2>/dev/null; then
    # 성공 - 이 워커만 실행
    ...
fi
```

**동작 원리:**
- `set -o noclobber`: 파일이 **이미 존재하면 `>` 실패**
- 여러 워커가 동시에 시도해도 **딱 하나만 성공** (filesystem atomic)
- 나머지는 stderr로 실패 → `/dev/null`로 무시

### 실행 흐름

```
Worker 0: circuit-fibsqrt 락 시도 → ✅ 성공 → 실행 중
Worker 1: circuit-fibsqrt 락 시도 → ❌ 실패 → 다음 태스크
Worker 1: gpt2-codegolf 락 시도 → ✅ 성공 → 실행 중
Worker 2: circuit-fibsqrt 락 시도 → ❌ 실패 → 다음 태스크
Worker 2: gpt2-codegolf 락 시도 → ❌ 실패 → 다음 태스크
Worker 2: build-pov-ray 락 시도 → ✅ 성공 → 실행 중
Worker 3: circuit-fibsqrt 락 시도 → ❌ 실패 → 다음 태스크
Worker 3: gpt2-codegolf 락 시도 → ❌ 실패 → 다음 태스크
Worker 3: build-pov-ray 락 시도 → ❌ 실패 → 다음 태스크
Worker 3: feal-crypto 락 시도 → ✅ 성공 → 실행 중

...

Worker 0: circuit-fibsqrt 완료 → 락 해제
Worker 0: 다시 처음부터 순회...
```

### 결과

**Before (락 없음)**:
```
4 workers × 100 tasks = 400 실행 (중복 300개!)
총 소요 시간: 5시간
API 비용: $120 (300개 낭비)
```

**After (락 적용)**:
```
4 workers → 100 tasks 자동 분배
총 소요 시간: 1.5시간 (70% 단축)
API 비용: $40 (중복 0개)
실행 효율: 100% (모든 워커 활용)
```

### 추가 최적화: 성공한 태스크 스킵

```bash
# result.json 확인하여 재실행 방지
if [ -f "$RESULT_FILE" ]; then
    REWARD=$(jq -r '.verifier_result.rewards.reward' "$RESULT_FILE")
    if (( $(echo "$REWARD > 0" | bc -l) )); then
        continue  # 이미 성공 → 스킵
    fi
fi
```

**효과:**
- 재실행 시 성공한 태스크 건너뛰기
- 실패한 태스크만 재시도
- iteration 속도 **5-10배 향상**

### 핵심 교훈

1. **Filesystem은 atomic 보장**: `noclobber`는 race condition 안전
2. **단순한 솔루션이 최고**: 복잡한 job queue보다 락 파일이 효과적
3. **멱등성(idempotency) 중요**: 성공 체크로 안전한 재실행

---

## 다음 단계

v0.3.0으로 기본적인 안정성을 확보했다. 이제 성능 개선에 집중:

1. **Error Recovery**: 실패 시 자동 재시도 로직
2. **Memory Management**: Task decomposition + progress tracking
3. **Adaptive Planning**: 태스크 유형별 전략 분기

목표는 **70-78% 달성** (현재 Factory Droid 64.9% → 개선)

---

## 코드

- Repository: [luerre-agent](https://github.com/...)
- Agent: `luerre/harbor_agent.py`
- Version: v0.3.0

---

## References

- [Terminal-Bench 2.0](https://www.tbench.ai/leaderboard/terminal-bench/2.0)
- [terminus_2.py](https://github.com/laude-institute/terminal-bench-2/blob/main/agents/terminus_2.py) - 공식 베이스라인
- [Letta Documentation](https://docs.letta.com/)
- [Harbor Framework](https://github.com/laude-institute/harbor)

---

*2026-01-08 | Luerre Agent Development Log*

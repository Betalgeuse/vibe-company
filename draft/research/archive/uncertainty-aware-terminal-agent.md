# 리서치 주제: Uncertainty-Aware Terminal Agent

## 가설

> **"LLM의 토큰 확률 분포(logprobs)를 활용한 불확실성 기반 의사결정 시스템을 Terminal Agent에 적용하면, 기존 전략 대비 독립적으로 +5-8% 성능 향상을 달성할 수 있다"**

### 가설 세부 분해
1. **Best-of-N 최적화**: Self-Certainty 기반 응답 선택으로 +3-5% 향상
2. **Action Routing**: 불확실성 기반 동적 경로 선택으로 +2-3% 향상
3. **Backtracking 개선**: 실패 시 대안 확률 탐색으로 +2-4% 향상

---

## 배경

### 왜 이 주제인가?

**핵심 인사이트**: LLM은 매 토큰 생성 시 확률 분포(logprobs)를 계산하지만, 대부분의 에이전트 시스템은 이 정보를 버림

```
토큰 생성 시 내부 상태:
├── "git" → 0.75 (선택됨)
├── "cd"  → 0.15
├── "ls"  → 0.08
└── "rm"  → 0.02
```

이 확률 정보 활용 시:
- **확률 분산** (entropy 높음) → "불확실" → 추가 정보 수집 또는 검증
- **확률 집중** (entropy 낮음) → "확신" → 바로 실행
- **실패 후** → 두 번째/세 번째 확률의 대안 탐색

### 현재 상황은?

| 순위 | Agent | 정확도 |
|------|-------|--------|
| 1 | Factory Droid | 64.9% |
| 2 | Ante | 64.7% |
| 3 | Junie CLI | 64.3% |

**Gap**: 1위와 2위 차이가 0.2%에 불과 → 작은 개선도 순위 변동 가능

### 기존 접근법의 한계는?

| 기존 접근법 | 한계점 |
|-------------|--------|
| **Self-Consistency** | 다수결 기반, 연속 점수 미활용 |
| **Reward Models** | 추가 모델 필요, 계산 비용 높음 |
| **단순 Temperature** | 불확실성 분포 무시 |
| **고정 Retry** | 상황 무관하게 동일 전략 |

---

## 기존 전략과의 관계

### 독립성/시너지 분석

| 기존 전략 | 중첩 여부 | 시너지 가능성 | 설명 |
|-----------|-----------|---------------|------|
| **Memory-Augmented** | ❌ 독립 | ⭐⭐⭐ 높음 | Memory 저장 결정에 confidence 활용 가능 |
| **Error Recovery** | 🔶 부분 중첩 | ⭐⭐⭐ 높음 | Recovery 시점 결정에 uncertainty 활용 |
| **Cross-Domain Transfer** | ❌ 독립 | ⭐⭐ 중간 | 패턴 선택에 confidence routing 적용 |
| **Adaptive Planning** | 🔶 부분 중첩 | ⭐⭐⭐ 높음 | 계획 분기점에서 uncertainty 기반 결정 |

### 핵심 차별화 포인트

```
기존 전략: "무엇(What)을 할 것인가"에 집중
본 연구:   "얼마나 확신(How Certain)하는가"에 집중 → Orthogonal Dimension
```

**예상 시너지 효과**:
- Error Recovery + Uncertainty: Recovery 필요 시점 조기 감지 (+1-2%)
- Memory + Uncertainty: 중요 컨텍스트 우선 저장 (+0.5-1%)

---

## 핵심 연구 기반

### 1. Self-Certainty (arXiv 2502.18581, 2025.12)
- **핵심**: LLM 확률 분포로 응답 품질 평가, reward model 불필요
- **결과**: Best-of-N에서 reward model과 유사 성능
- **적용 가능성**: ⭐⭐⭐ 직접 적용 가능

### 2. Soft Self-Consistency (arXiv 2402.13212, 2024.02)
- **핵심**: 연속 스코어링으로 majority voting 대체
- **결과**: 샘플 50% 감소, 성공률 1.3-6.6% 향상
- **적용 가능성**: ⭐⭐⭐ 직접 적용 가능

### 3. Holistic Trajectory Calibration (OpenReview 2025.09)
- **핵심**: 에이전트 전체 궤적에서 신뢰도 보정
- **결과**: AUROC 20% 향상
- **적용 가능성**: ⭐⭐ 아키텍처 수정 필요

### 4. UniCR (arXiv 2509.01455, 2025.09)
- **핵심**: 신뢰도 + 거부(refusal) 결정 통합
- **결과**: ECE, Brier score 개선, hallucination 감소
- **적용 가능성**: ⭐⭐⭐ 직접 적용 가능

### 5. SAUP - Uncertainty Propagation (ACL 2025)
- **핵심**: 다단계 의사결정에서 불확실성 전파 추적
- **결과**: AUROC 20% 향상
- **적용 가능성**: ⭐⭐ 복잡한 구현 필요

### 6. Self-Backtracking (arXiv 2502.04404, 2025.02)
- **핵심**: LLM이 자체적으로 백트래킹 시점 결정
- **결과**: 추론 성능 40% 향상
- **적용 가능성**: ⭐⭐ Training 필요

---

## Research Questions

### RQ1: Best-of-N 최적화 효과
> **"Self-Certainty 기반 응답 선택이 Terminal-Bench 태스크에서 기존 majority voting 대비 얼마나 효과적인가?"**

**검증 방법**:
- Terminal-Bench 89개 태스크 중 20개 샘플링
- N=5 응답 생성 후 3가지 방법 비교:
  1. Random selection (baseline)
  2. Majority voting (self-consistency)
  3. Self-Certainty scoring
- 성공률 및 필요 샘플 수 측정

**예상 결과**: +3-5% 성공률 향상, 샘플 30-50% 절감

---

### RQ2: Uncertainty-Based Action Router 효과
> **"불확실성 기반 동적 전략 선택이 단일 전략 대비 성능을 개선하는가?"**

**검증 방법**:
```python
def uncertainty_router(action_logprobs):
    entropy = calculate_entropy(action_logprobs)
    if entropy > HIGH_THRESHOLD:
        return "gather_more_info"  # 추가 정보 수집
    elif entropy < LOW_THRESHOLD:
        return "execute_directly"   # 직접 실행
    else:
        return "verify_then_execute"  # 검증 후 실행
```
- Terminal-Bench debugging/file operation 태스크에서 테스트
- 고정 전략 vs 동적 라우팅 비교

**예상 결과**: +2-3% 성공률, 특히 복잡한 태스크에서 개선

---

### RQ3: Backtracking 개선 효과
> **"실패 시 logprobs 기반 대안 탐색이 단순 재시도 대비 효과적인가?"**

**검증 방법**:
```python
def alternative_exploration(failed_action, original_logprobs):
    # 첫 번째 선택 실패 시 두 번째 확률 후보로 시도
    alternatives = sorted(original_logprobs, key=lambda x: x.prob, reverse=True)
    for alt in alternatives[1:3]:  # top-2, top-3 시도
        if execute(alt.action).success:
            return alt.action
    return None
```
- 실패 케이스 분석 및 대안 성공률 측정

**예상 결과**: Recovery rate +15-25% 향상

---

### RQ4: Terminal-Bench 특화 최적화
> **"Terminal/코딩 태스크에서 어떤 uncertainty signal이 가장 효과적인가?"**

**검증 방법**:
- 다양한 uncertainty signal 비교:
  1. Token-level entropy
  2. Sequence-level perplexity
  3. Semantic dispersion (UniCR 방식)
  4. Command-specific confidence
- 태스크 유형별 (debugging, file ops, git ops) 성능 측정

**예상 결과**: Command-specific confidence가 가장 효과적 (특히 위험 명령어)

---

## 잠재적 가치

| 가치 유형 | 예상 수준 | 근거 |
|-----------|-----------|------|
| **성능 향상** | +5-8% (64.9% → 70-73%) | 독립적 개선, 기존 전략과 시너지 |
| **계산 효율** | 샘플 30-50% 절감 | Soft-SC 논문 결과 기반 |
| **안전성 향상** | 위험 명령어 실행 전 검증 | High uncertainty → 추가 확인 |
| **학술적 가치** | 중간 | Terminal Agent 특화 연구 부재 |
| **재사용성** | 높음 | 다른 agent 시스템에 범용 적용 가능 |

### ROI 분석

```
투자: 2-3주 구현 + 1주 실험
기대 수익:
├── Terminal-Bench 순위 상승 가능성: 높음
├── 논문/블로그 발행 가치: 중간
└── 범용 agent 개선 기법으로 확장: 높음
```

---

## 구현 로드맵

### Phase 0: 환경 세팅 + 기초 분석 (2-3일)
- [ ] Harbor Framework 환경 구축
- [ ] OpenAI/Anthropic API logprobs 접근 방법 확인
- [ ] Terminal-Bench 샘플 태스크 20개 선정
- [ ] 기존 Factory Droid 실패 패턴 분류

### Phase 1: Self-Certainty Best-of-N (1주)
```python
# 핵심 구현
def self_certainty_score(response, model):
    """Self-Certainty 논문 기반 구현"""
    tokens = tokenize(response)
    logprobs = model.get_logprobs(response)
    
    # 분포 집중도 측정
    certainty = -sum(p * log(p) for p in logprobs) / len(tokens)
    return certainty

def best_of_n_selection(responses, model):
    scores = [self_certainty_score(r, model) for r in responses]
    return responses[argmax(scores)]
```
- [ ] Self-Certainty 스코어링 구현
- [ ] N=3,5,7 비교 실험
- [ ] Terminal-Bench 샘플 제출 → **+3% 이상 확인**
- **Go/No-Go**: +2% 미만이면 Phase 2로 즉시 전환

### Phase 2: Uncertainty-Based Router (1주)
```python
# 핵심 구현
class UncertaintyRouter:
    def __init__(self, high_thresh=2.0, low_thresh=0.5):
        self.high_thresh = high_thresh
        self.low_thresh = low_thresh
    
    def route(self, action_logprobs):
        entropy = self.calculate_entropy(action_logprobs)
        
        if entropy > self.high_thresh:
            return Strategy.GATHER_INFO
        elif entropy < self.low_thresh:
            return Strategy.EXECUTE
        else:
            return Strategy.VERIFY_FIRST
```
- [ ] Entropy 기반 라우터 구현
- [ ] 태스크 유형별 threshold 튜닝
- [ ] Terminal-Bench 제출 → **누적 +5% 이상 확인**

### Phase 3: Alternative Exploration (1주)
```python
# 핵심 구현
class AlternativeExplorer:
    def on_failure(self, failed_action, original_logprobs):
        """실패 시 확률 기반 대안 탐색"""
        alternatives = self.get_top_k_alternatives(original_logprobs, k=3)
        
        for alt in alternatives:
            if alt.action != failed_action:
                result = self.try_action(alt.action)
                if result.success:
                    return result
        
        return self.fallback_strategy()
```
- [ ] Logprobs 기반 대안 추출 구현
- [ ] 실패 케이스별 대안 성공률 분석
- [ ] Terminal-Bench 제출 → **누적 +7% 이상 확인**

### Phase 4: 통합 + 최적화 (3-5일)
- [ ] 기존 전략 (Memory, Error Recovery)과 통합 테스트
- [ ] Hyperparameter 최적화
- [ ] 최종 Terminal-Bench 제출
- [ ] 결과 문서화

---

## 대안 전략 (Plan B/C)

| Plan | 조건 | 전략 |
|------|------|------|
| **Plan B** | Phase 1에서 +2% 미달 | UniCR 방식으로 전환 (refusal 메커니즘 추가) |
| **Plan C** | 특정 태스크만 효과 | 해당 태스크 유형 특화 (예: debugging only) |
| **Plan D** | Logprobs 접근 제한 | Verbalized confidence 방식으로 대체 |

---

## 핵심 질문 (다음 단계용)

1. **API 접근성**: OpenAI/Anthropic API에서 logprobs를 어떤 granularity로 얻을 수 있는가?
2. **Latency 영향**: Uncertainty 계산 추가 시 응답 시간 증가는 얼마나 되는가?
3. **터미널 특화**: 코딩/터미널 명령어에서 가장 informative한 uncertainty signal은 무엇인가?

---

## 리서치 난이도: 중간
- 핵심 알고리즘은 기존 논문에서 검증됨
- Terminal Agent 특화 적용은 새로운 시도
- Logprobs 접근 방법에 따라 난이도 변동

## 예상 소요 시간: 3-4주
- Phase 0: 2-3일
- Phase 1-3: 각 1주
- Phase 4: 3-5일

---

## 참고 문헌

### 핵심 참조
1. [Self-Certainty for Best-of-N](https://arxiv.org/abs/2502.18581) - Best-of-N 최적화 기법
2. [Soft Self-Consistency](https://arxiv.org/abs/2402.13212) - 연속 스코어링 방법
3. [UniCR](https://arxiv.org/abs/2509.01455) - 신뢰도 + 거부 통합
4. [SAUP](https://aclanthology.org/2025.acl-long.302/) - 다단계 불확실성 전파
5. [Holistic Trajectory Calibration](https://openreview.net/forum?id=6YMFsGFabM) - 궤적 신뢰도 보정

### 추가 참조
6. [Self-Backtracking](https://arxiv.org/abs/2502.04404) - 자체 백트래킹
7. [Tree Search for LM Agents](https://openreview.net/forum?id=kpL66Mvd2a) - 트리 탐색 기법
8. [CARGO Routing](https://arxiv.org/html/2509.14899v1) - 신뢰도 기반 라우팅

---

*Generated by research-topic-explorer | 2026-01-07*

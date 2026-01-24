# 심층 리서치 결과: Terminal-Bench 1등 달성 전략

## 원본 가설
> "Skill Learning + Context Rot 방지 + Recovery-Aware Engineering + Cross-Domain Skill Transfer 사중 결합을 통해 Terminal-Bench 2.0에서 67-72% 달성 가능 (Factory Droid 64.9% + 2-7%p 상회)"

---

## 핵심 인사이트

### 가설 지지 증거

#### 1. **Factory Droid 아키텍처 상세 분석**
- **출처**: [Factory AI Terminal-Bench Blog](https://factory.ai/news/terminal-bench), [How Droid Handles 7M Tokens](https://www.youtube.com/watch?v=hRbeRKOT-XU)
- **신뢰도**: 높음 (1위 에이전트 공식 문서)
- **요약**:
  - **Anchor Point Compression**: 메시지 히스토리에 전략적으로 앵커 포인트를 마킹하여 압축 시작점 지정. 최적 140k 토큰 윈도우 유지
  - **Incremental Summarization**: 전체 대화 재요약 대신 새로 드롭된 메시지만 점진적으로 요약
  - **Context-as-Resource 철학**: 컨텍스트를 단발성이 아닌 지속 관리 대상으로 취급
  - **7M 토큰 세션 처리**: Context Reset 없이 장시간 세션 지속 가능
  - **모델 불가지론적 설계**: GPT-5.2, Claude Opus 4.5 등 다양한 모델에서 최상위 성능

#### 2. **Letta Code 200줄 구현 분석**
- **출처**: [Letta Terminal-Bench Blog](https://www.letta.com/blog/terminal-bench), [Letta Code GitHub](https://github.com/letta-ai/letta-code)
- **신뢰도**: 높음 (오픈소스 검증)
- **요약**:
  - **42.5% 달성** (200줄 미만 코드로 오픈소스 1위)
  - **Memory Blocks 구조**:
    - `task_description`: Read-only 태스크 설명
    - `todo_list`: Agent가 자율적으로 업데이트하는 동적 계획
  - **Stateful SDK 활용**: Letta의 stateful agents SDK로 효과적인 컨텍스트 관리
  - **최소한의 Scaffolding**: 복잡한 파이프라인 없이 핵심 메모리 관리에 집중

#### 3. **Skill Learning 구체적 알고리즘**
- **출처**: [Letta Skill Learning Blog](https://www.letta.com/blog/skill-learning)
- **신뢰도**: 높음 (학술적 검증 + 실험 결과)
- **요약**:
  - **2단계 학습 프로세스**:
    1. **Reflection 단계**: 
       - 태스크 수행 후 성과 평가
       - 솔루션 정확성 검증
       - 추론 논리 검토
       - 반복 패턴 및 에러 식별
    2. **Creation 단계**:
       - Reflection 인사이트 기반 새 Skill 생성
       - Anthropic의 skill-creator 활용
       - 접근법 및 함정 가이드 작성
  - **성과**: Terminal-Bench 2.0에서 **36.8% 상대 향상 (15.7%p 절대)**
  - **조건**: trajectory + feedback 데이터 모두 필요
  - **모델 불가지론적**: 다른 모델이 생성한 Skill도 활용 가능

#### 4. **PALADIN 알고리즘 상세**
- **출처**: [arXiv:2509.25238](https://arxiv.org/abs/2509.25238)
- **신뢰도**: 높음 (학술 논문, peer-reviewed)
- **요약**:
  - **문제 정의**: Tool-augmented LLM agents의 실행 시간 오류 (timeout, API 예외 등)
  - **핵심 방법론**:
    - 50,000+ recovery-annotated trajectories로 훈련
    - Systematic failure injection + expert demonstrations
    - LoRA-based fine-tuning (기본 능력 유지하면서 recovery 능력 향상)
  - **추론 시 작동**:
    - Execution-time 에러 감지
    - 55개 failure exemplar bank에서 유사 케이스 검색
    - 적절한 recovery action 실행
  - **성과**:
    - Recovery Rate: **32.76% → 89.68%** (57%p 향상)
    - CRITIC 대비 **13.3% 우수**
    - Unseen tool API에서도 **95.2% recovery 유지**

#### 5. **SAMULE Multi-level Reflection**
- **출처**: [ACL 2025 EMNLP Main](https://aclanthology.org/2025.emnlp-main.839/)
- **신뢰도**: 높음 (최상위 학회 논문)
- **요약**:
  - **3단계 반성 합성 (Multi-Level Reflection Synthesis)**:
    1. **Single-Trajectory Learning (Micro)**: 개별 시도에서 상세 에러 수정
    2. **Intra-Task Learning (Meso)**: 동일 태스크 다중 시도에서 에러 분류체계 구축
    3. **Inter-Task Learning (Macro)**: 다른 태스크의 유사 에러에서 전이 가능한 인사이트 추출
  - **Foresight-based Reflection**: 예측 vs 실제 결과 비교를 통한 선제적 적응
  - **성과**: TravelPlanner, NATURAL PLAN, Tau-bench에서 기존 reflection 방법 대비 **현저한 성능 향상**

#### 6. **Context Rot 방지 전략**
- **출처**: [Chroma Research](https://research.trychroma.com/context-rot), [Anthropic Blog](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- **신뢰도**: 높음 (산업 연구)
- **요약**:
  - **Context Rot 정의**: 입력 토큰 증가에 따른 LLM 성능 저하 (토큰 한도 내에서도 발생)
  - **심각성**: 4,000 토큰에서 정확도 **70-75% → 55-60%** 급락
  - **방지 전략**:
    1. **Context Compaction**: 가역적 방법, 중복 제거 (파일 경로만 유지 등)
    2. **Summarization**: 손실적 방법, 히스토리 요약 (128k 토큰 임계값)
    3. **Just-in-Time Context Retrieval**: 필요시에만 관련 정보 로드
    4. **Multi-Agent Architecture**: 서브 태스크별 컨텍스트 분리
    5. **Structured Note-Taking**: 핵심 정보 구조화된 메모로 유지

---

### 가설 반박 증거

#### 1. **효과 중첩 문제**
- **출처**: 논리적 분석
- **신뢰도**: 중간
- **요약**:
  - Skill Learning, Context Engineering, Recovery가 동일 실패 케이스를 타겟할 가능성
  - 단순 합산 시 과대 추정 위험
  - **권장**: 50% 중첩 보정 적용

#### 2. **한계 효용 체감**
- **출처**: [Terminal-Bench 2.0 Leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.0)
- **신뢰도**: 중간 (추론 기반)
- **요약**:
  - 현재 상위권(60%+)은 "쉬운 태스크 완료, 어려운 태스크만 남은 상태"
  - 추가 1%p 개선이 기하급수적으로 어려워질 가능성
  - Hard 태스크 평균 정확도: **16%** (Easy: 65% 대비)

#### 3. **구현 복잡도**
- **출처**: 기술 분석
- **신뢰도**: 중간
- **요약**:
  - PALADIN 수준 구현 시 50,000+ recovery trajectories 필요
  - SAMULE 3단계 reflection은 상당한 엔지니어링 투자 요구
  - 단기간 완전 구현 현실성 의문

---

## 구현 로드맵

### Phase 0: 환경 세팅 및 기초 분석 (1주)

```markdown
1. Harbor Framework 설치
   - pip install harbor
   - Docker 환경 확인
   - Terminal-Bench 2.0 oracle solutions 검증

2. 기존 에이전트 분석
   - Factory Droid (가능하면 리버스 엔지니어링)
   - Letta Code 소스 분석 (200줄 구현)
   - 실패 로그 50-100개 수동 분석

3. 실패 패턴 분류
   - Context Rot 기인 비율 측정
   - Recovery 가능한 실패 비율
   - Skill로 해결 가능한 패턴 식별
```

### Phase 1: Core Architecture (2주)

```markdown
1. Memory-First Agent 구현
   - Letta SDK 기반 stateful agent 생성
   - Memory Blocks 구조:
     * task_description (read-only)
     * todo_list (writable)
     * error_log (writable)
     * learned_skills (read-only, 동적 로드)

2. Context Compression 구현
   - Anchor Point 기반 압축
   - Incremental Summarization (새 메시지만)
   - 목표: 140k 토큰 윈도우 유지

3. Basic Recovery Logic
   - 에러 감지 훅
   - 단순 재시도 (exponential backoff)
   - 대안 명령어 시도
```

### Phase 2: Skill Learning 통합 (2주)

```markdown
1. Reflection 파이프라인
   - 태스크 완료 후 자동 평가
   - 성공/실패 패턴 추출
   - 에러 분류

2. Skill Creation 시스템
   - Anthropic skill-creator 패턴 적용
   - Markdown 기반 Skill 저장
   - 도메인별 Skill 폴더 구조

3. Skill Selection 메커니즘
   - 태스크 분석 → 관련 Skill 자동 로드
   - Skill 우선순위 알고리즘
   - Skill unmounting (컨텍스트 효율)
```

### Phase 3: Advanced Recovery (1주)

```markdown
1. Failure Exemplar Bank 구축
   - Terminal-Bench 특화 실패 패턴 수집
   - 성공적 recovery 사례 저장
   - 유사도 기반 검색

2. Multi-level Reflection (간소화 버전)
   - Single-Trajectory: 개별 에러 수정
   - Intra-Task: 동일 태스크 패턴
   - (Macro는 Phase 4로 연기)
```

### Phase 4: 최적화 및 제출 (1주)

```markdown
1. A/B 테스트
   - 개별 요소 vs 결합 효과 비교
   - 중첩률 실측

2. 하이퍼파라미터 튜닝
   - 압축 임계값 최적화
   - Skill 로드 타이밍
   - Recovery 재시도 횟수

3. Terminal-Bench 제출
   - Harbor를 통한 평가 실행
   - 결과 분석 및 반복
```

---

## Terminal-Bench 특화 Skill 목록

### Task Categories별 필수 Skill

| 카테고리 | 난이도 분포 | 핵심 Skill |
|----------|-------------|------------|
| System Administration | Easy-Hard | 서비스 관리, 권한 설정, 프로세스 제어 |
| Security | Medium-Hard | TLS 인증서, 해시 크래킹, 권한 감사 |
| File Operations | Easy-Medium | 파일 검색, 텍스트 처리, 압축/해제 |
| Network Configuration | Medium-Hard | 서버 설정, 방화벽, DNS |
| Data Science/ML | Easy-Hard | 모델 훈련, MLflow, 데이터 분석 |
| Build/Compile | Medium-Hard | 커널 빌드, 의존성 관리 |

### 우선순위 Skill (ROI 기준)

```markdown
1. [HIGH] Error Recovery Patterns
   - Timeout 대응: 비동기 실행, polling
   - Permission denied: sudo, 권한 변경 시퀀스
   - Command not found: 패키지 설치 자동화

2. [HIGH] Process Management
   - Background 프로세스 추적
   - 완료 대기 (wait, poll)
   - 좀비 프로세스 정리

3. [MEDIUM] File System Navigation
   - 효율적 검색 (find, grep, ripgrep)
   - 경로 추적 및 심볼릭 링크
   - 대용량 파일 처리

4. [MEDIUM] Network Diagnostics
   - 연결 테스트
   - 포트 확인
   - 서비스 상태 확인

5. [LOW] Domain-Specific
   - Git 고급 작업
   - Docker/Container 관리
   - 데이터베이스 작업
```

---

## 데이터 포인트

| 지표 | 수치 | 출처 | 연도 |
|------|------|------|------|
| Terminal-Bench 2.0 태스크 수 | 89개 | tbench.ai | 2025 |
| Factory Droid 1위 점수 | 64.9% | tbench.ai leaderboard | 2025 |
| Letta Code 점수 (Claude Opus 4.5) | 59.1% | tbench.ai leaderboard | 2025 |
| Skill Learning 향상률 | 36.8% (상대) | Letta Blog | 2025 |
| PALADIN Recovery Rate | 89.68% | arXiv | 2025 |
| Context Rot 성능 저하 | 15-20%p | Chroma Research | 2025 |
| Easy Task 평균 정확도 | 65% | Vals AI | 2025 |
| Hard Task 평균 정확도 | 16% | Vals AI | 2025 |
| Letta Code 구현 줄 수 | <200줄 | Letta Blog | 2025 |
| Factory Droid 토큰 윈도우 | 140k | Factory AI | 2025 |
| Factory Droid 최대 세션 | 7M 토큰 | Factory AI | 2025 |

---

## 레퍼런스 목록

### 필수 참고
1. [Letta Skill Learning](https://www.letta.com/blog/skill-learning) - Reflection + Creation 2단계 학습, 36.8% 향상 입증
2. [PALADIN Paper](https://arxiv.org/abs/2509.25238) - 89.68% recovery rate, 50k+ trajectories 훈련
3. [Factory Droid Terminal-Bench](https://factory.ai/news/terminal-bench) - 1위 에이전트 설계 철학
4. [Context Rot Research](https://research.trychroma.com/context-rot) - LLM 성능 저하 원인 분석
5. [Harbor Framework](https://harborframework.com/) - Terminal-Bench 공식 평가 환경
6. [SAMULE Paper](https://aclanthology.org/2025.emnlp-main.839/) - Multi-level Reflection 프레임워크

### 추가 참고
1. [Letta Terminal-Bench Agent](https://www.letta.com/blog/terminal-bench) - 200줄 구현 가이드
2. [Letta Code GitHub](https://github.com/letta-ai/letta-code) - 오픈소스 구현
3. [Terminal-Bench 2.0 Leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.0) - 현재 순위
4. [Factory Context Compression](https://factory.ai/news/compressing-context) - Incremental Summarization
5. [MemGPT Architecture](https://docs.letta.com/guides/agents/architectures/memgpt) - Memory Blocks 상세
6. [Harbor Running Guide](https://harborframework.com/docs/running-tbench) - 평가 제출 방법

---

## 리서치 갭 (추가 조사 필요)

- [ ] Terminal-Bench 실패 케이스 중 Context Rot 직접 원인 비율 측정 (예상: 30-50%)
- [ ] Factory Droid의 Skill Learning 존재 여부 확인 (공개 정보 부재)
- [ ] PALADIN 55개 failure exemplar의 Terminal-Bench 적용 가능성
- [ ] Skill Learning과 Recovery의 시너지 효과 정량화 (중첩률 측정 필요)
- [ ] Hard Task (16% 정확도) 특화 전략 개발
- [ ] Cross-Domain Skill Transfer의 Terminal-Bench 적용 가능성

---

## 가설 수정 제안

> **수정된 가설**: "Skill Learning + Context Compression + Recovery-Aware Engineering의 **점진적 통합**을 통해, 각 요소의 효과를 개별 측정하고 중첩을 최소화하면서 Terminal-Bench 2.0에서 **67-70%** 달성 가능 (Factory Droid 64.9% + 2-5%p)"

**수정 이유**:
1. Hard Task의 극히 낮은 정확도(16%)를 고려하면, 상위권에서의 개선은 점점 어려워짐
2. 50% 중첩 보정 적용 시 현실적인 목표는 +2-5%p
3. Cross-Domain Transfer는 Phase 2 이후 장기 목표로 분리 권장

---

## 핵심 실행 권장사항

### 즉시 실행 (Day 1-3)
1. Harbor 환경 세팅 + Letta Code fork
2. Terminal-Bench 2.0 샘플 태스크 10개 수동 분석
3. 실패 패턴 초기 분류

### 단기 우선순위 (Week 1-2)
1. Context Compression 먼저 구현 (가장 명확한 효과)
2. Memory Blocks 기반 Todo List 시스템
3. Basic Error Recovery (재시도 + 대안 명령)

### 중기 목표 (Week 3-4)
1. Skill Learning 파이프라인 (Reflection → Creation)
2. 도메인별 Skill Bank 구축
3. 벤치마크 첫 제출

---

*심층 리서치 완료 | 2026-01-07*
*연구 출처: 학술 논문 (arXiv, ACL), 기업 블로그 (Factory, Letta, Anthropic), 오픈소스 (GitHub), 벤치마크 공식 사이트 (tbench.ai)*

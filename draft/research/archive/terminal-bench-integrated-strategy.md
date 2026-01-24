# 리서치 주제: Terminal-Bench 1등 통합 전략

## 가설
> **"Skill Learning (36.8%) + Context Rot 방지 (15-20%p 손실 방지) + Recovery-Aware Engineering (89.68%) + Cross-Domain Skill Transfer (SMT 기반)를 계층적으로 통합하면, 오픈소스 에이전트로 Terminal-Bench 2.0에서 67-72% 달성 가능 (Factory Droid 64.9% 상회)"**

### 핵심 통찰
- 4가지 전략은 **서로 다른 실패 모드**를 타겟함
- 단순 합산이 아닌 **계층적 파이프라인**으로 결합 시 시너지 극대화
- 1인 실행 가능한 MVP로 검증 후 확장

---

## 배경

### 왜 이 주제인가?
1. **Terminal-Bench는 AI Agent의 실전 능력 평가 표준**
   - Stanford + Laude Institute 공동 개발
   - 80+ human-verified 태스크 (코딩, 빌드, 디버깅, 시스템 관리)
   - 실제 엔지니어링 워크플로우 반영

2. **오픈소스 1위 가치**
   - 현재 1위: Factory Droid (GPT-5.2) 64.9% - 상용
   - 오픈소스 최고: Letta Code (Claude Opus 4.5) 59.1%
   - 오픈소스로 1위 달성 시 커뮤니티 영향력 + 연구 가치

3. **4가지 전략의 개별 효과는 입증됨**
   - Skill Learning: 36.8% 상대 향상 (Letta)
   - Context Rot 방지: 15-20%p 손실 예방 (Chroma)
   - PALADIN: 89.68% recovery rate
   - Cross-Domain Transfer: 도메인 간 5-40% 향상 가능

### 현재 상황은?

| 순위 | Agent | Model | 정확도 | 특징 |
|------|-------|-------|--------|------|
| 1 | Factory Droid | GPT-5.2 | **64.9%** | Multi-layered Context |
| 2 | Ante | Gemini 3 Pro | 64.7% | - |
| 3 | Factory Droid | Claude Opus 4.5 | 63.1% | - |
| 4 | Junie CLI | Gemini 3 Flash | 64.3% | - |
| 10 | Letta Code | Claude Opus 4.5 | 59.1% | Skill Learning |

**격차 분석**:
- Letta → 1위: 5.8%p 필요
- Skill Learning만으로 15.7%p 절대 향상 → 충분하지 않음 (74.8%는 과대추정)
- 복수 전략 통합 필요

### 기존 접근법의 한계는?

1. **개별 전략 적용**: 중첩 효과로 인해 합산 효과 50%만 실현
2. **순차적 개선**: 각 전략이 동일한 easy case를 해결
3. **아키텍처 통합 부재**: 전략 간 충돌 가능성

---

## 통합 전략 아키텍처

### 4가지 전략의 역할 분담

```
┌───────────────────────────────────────────────────────────────────────┐
│                    TERMINAL-BENCH TASK LIFECYCLE                       │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Task 수신]                                                           │
│      │                                                                 │
│      ▼                                                                 │
│  ┌─────────────────────────────────────────┐                          │
│  │ Phase 1: CROSS-DOMAIN SKILL TRANSFER    │ ← Cold Start 해결        │
│  │ • 태스크 구조 분석                        │                          │
│  │ • 유사 도메인 패턴 검색                   │                          │
│  │ • SMT 기반 전략 매핑                      │                          │
│  └─────────────────────────────────────────┘                          │
│      │                                                                 │
│      ▼                                                                 │
│  ┌─────────────────────────────────────────┐                          │
│  │ Phase 2: SKILL LEARNING (Main Loop)     │ ← 핵심 성능 향상          │
│  │ • Reflection: 과거 경험 평가              │                          │
│  │ • Creation: 새 스킬 생성                  │                          │
│  │ • Application: 스킬 기반 실행             │                          │
│  └─────────────────────────────────────────┘                          │
│      │                                                                 │
│      ├──── [Success] ──── ▶ Task Complete                             │
│      │                                                                 │
│      ▼ [Failure/Error]                                                │
│  ┌─────────────────────────────────────────┐                          │
│  │ Phase 3: RECOVERY-AWARE ENGINEERING     │ ← 실패 복구              │
│  │ • Error 분류 (PALADIN taxonomy)          │                          │
│  │ • 유사 failure case 검색                  │                          │
│  │ • Recovery action 실행                   │                          │
│  └─────────────────────────────────────────┘                          │
│      │                                                                 │
│      ├──── [Recovered] ──── ▶ Skill Learning으로 재진입               │
│      │                                                                 │
│      ▼ [Still Failing]                                                │
│  ┌─────────────────────────────────────────┐                          │
│  │ Phase 4: CONTEXT ROT PREVENTION         │ ← 품질 유지              │
│  │ • Context 길이 모니터링                   │                          │
│  │ • 중요도 기반 Pruning                     │                          │
│  │ • Hierarchical Summarization             │                          │
│  │ • Retry with fresh context               │                          │
│  └─────────────────────────────────────────┘                          │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

### 전략별 타겟 실패 모드

| 전략 | 타겟 실패 모드 | 기대 효과 | 중첩 리스크 |
|------|---------------|----------|------------|
| Cross-Domain Transfer | Cold Start, 처음 보는 유형 | +2-5%p | 낮음 |
| Skill Learning | 반복 패턴 미활용, 경험 망각 | +6-9%p | 중간 |
| Recovery-Aware | Tool failure, API timeout | +2-4%p | 낮음 |
| Context Rot Prevention | Long-context 성능 저하 | +4-6%p | 중간 |

### 통합 시 시너지

1. **Cross-Domain → Skill Learning**
   - Cross-Domain이 초기 전략 제공 → Skill Learning이 도메인 특화 스킬로 정제
   - Cold Start 없이 빠른 학습 시작

2. **Skill Learning → Recovery**
   - 실패 시 Recovery 발동 → 복구 후 Skill Learning으로 재진입
   - 실패 경험도 스킬로 학습

3. **Recovery → Context Rot Prevention**
   - Recovery 반복 시 Context 누적 → Context Pruning으로 품질 유지
   - 무한 루프 방지

---

## 잠재적 가치

| 가치 유형 | 예상 수준 | 근거 |
|-----------|-----------|------|
| **연구 영향력** | 높음 | Terminal-Bench 1위 = 업계 주목, 논문 발표 가능 |
| **오픈소스 가치** | 높음 | 상용 도구와 경쟁 가능한 오픈소스 에이전트 |
| **실용성** | 높음 | 실제 개발 환경에서 사용 가능한 에이전트 |
| **수익화 가능성** | 중간 | 오픈코어 모델, 컨설팅, SaaS 가능 |
| **학습 가치** | 높음 | 4가지 최신 AI Agent 기법 통합 경험 |

---

## MVP 범위 (1인 실행 가능)

### Phase 1: 기반 구축 (1주)
**목표**: 검증 환경 + 최소 Skill Learning

1. **환경 세팅**
   - Harbor Framework 설치 (Terminal-Bench 평가 환경)
   - Letta Code fork & local 실행
   - Baseline 측정 (현재 성능 확인)

2. **Skill Learning MVP**
   - Letta의 기존 Skill Learning 코드 분석
   - 최소 구현: Reflection + Creation 루프
   - 10개 태스크로 기본 테스트

3. **Output**
   - 작동하는 Skill Learning 에이전트
   - Baseline vs MVP 비교 결과

### Phase 2: Recovery + Context 통합 (1주)
**목표**: 실패 복구 + Context 관리

1. **Recovery-Aware Engineering (간소화)**
   - PALADIN의 핵심 아이디어만 구현
   - Error taxonomy: 5가지 핵심 유형
   - Recovery bank: 10개 recovery 패턴
   - LoRA fine-tuning 생략 → Prompt 기반 접근

2. **Context Rot Prevention (간소화)**
   - Context 길이 모니터링
   - 4,000 토큰 이상 시 경고
   - 단순 Pruning: 오래된 정보 제거
   - 실패 시 Fresh context로 재시작

3. **Output**
   - Recovery가 통합된 에이전트
   - Context 관리가 포함된 에이전트

### Phase 3: Cross-Domain + 최적화 (1주)
**목표**: Cold Start 해결 + 성능 최적화

1. **Cross-Domain Skill Transfer (간소화)**
   - 5개 도메인 쌍 매핑 정의
     - DB Transaction → Terminal Error Recovery
     - CI/CD Retry → Command Retry
     - Network Backoff → Agent Backoff
     - File System Cache → Context Cache
     - Git Branching → Solution Branching
   - Prompt에 Cross-Domain 힌트 추가
   - MMD 기반 유사도 측정 생략 → 규칙 기반

2. **통합 파이프라인**
   - 4가지 전략 순차 연결
   - 전략 간 handoff 로직 구현
   - 전체 파이프라인 테스트

3. **Output**
   - 통합된 에이전트
   - Terminal-Bench 제출 결과

### Phase 4: 검증 및 반복 (ongoing)
**목표**: 벤치마크 제출 + 개선

1. **벤치마크 제출**
   - Terminal-Bench 2.0 공식 제출
   - 결과 분석 및 문서화

2. **반복 개선**
   - 실패 케이스 분석
   - 추가 스킬 생성
   - 하이퍼파라미터 튜닝

---

## 예상 효과

| 전략 | 개별 효과 | 중첩 보정 | 누적 효과 | 예상 점수 |
|------|----------|----------|----------|----------|
| Baseline (Letta) | - | - | - | 59.1% |
| + Skill Learning | +15.7%p | ×100% | +15.7%p | 74.8%* |
| + Recovery-Aware | +3%p | ×70% | +2.1%p | - |
| + Context Rot | +5%p | ×70% | +3.5%p | - |
| + Cross-Domain | +3%p | ×90% | +2.7%p | - |
| **보정 총합** | - | - | **+7-12%p** | **66-71%** |

*주: Letta의 36.8% 상대 향상은 trajectory+feedback 조건에서 달성. 실제 구현 시 50-70% 수준 예상.

### 보수적 예측

| 시나리오 | 예상 점수 | 근거 |
|----------|----------|------|
| **낙관** | 70-72% | 모든 전략 최대 효과 |
| **현실** | 67-69% | 50% 중첩 보정, 일부 전략 underperform |
| **보수** | 64-66% | 전략 충돌, 구현 이슈 |
| **목표** | 65%+ | 1위 달성 (Factory 64.9%) |

---

## 리스크 및 대안

### 리스크 매트릭스

| 리스크 | 확률 | 영향 | 대응 |
|--------|------|------|------|
| 전략 간 중첩이 예상보다 큼 | 중 | 중 | A/B 테스트로 실측, 전략 우선순위 재조정 |
| Recovery 구현 복잡도 과소평가 | 중 | 중 | PALADIN 핵심만 추출, prompt 기반 접근 |
| Context Rot이 Terminal-Bench에서 비중 낮음 | 저 | 중 | 실패 로그 분석으로 사전 검증 |
| 모델 비용 과다 | 중 | 저 | Claude Haiku/GPT-4o-mini로 초기 개발 |
| 1위가 더 개선됨 | 중 | 고 | 빠른 실행, 차별화 전략 추가 |

### 대안 전략

1. **Plan B: 단일 전략 집중**
   - Skill Learning만 완벽하게 구현
   - 59.1% + 15%p = 74%+ 가능 (이론)
   - 리스크: Letta 연구 재현이 어려울 수 있음

2. **Plan C: 모델 업그레이드**
   - GPT-5.2 또는 Claude Opus 5 사용
   - 에이전트 개선 없이 모델만으로 경쟁
   - 리스크: 비용 증가, 차별화 어려움

3. **Plan D: Multi-Agent 접근**
   - 전문화된 sub-agent 조합
   - 복잡도 증가하나 확장성 확보
   - Phase 5 이후 검토

---

## 핵심 질문 (다음 단계용)

1. **Terminal-Bench 실패 케이스 중 각 전략이 해결 가능한 비율은?**
   - 실패 로그 50-100개 수동 분석 필요
   - Context Rot vs Error Recovery vs Skill 부재 비율 확인

2. **Letta의 Skill Learning을 최소한으로 재현하는 데 필요한 구현량은?**
   - 200줄 구현 claims 검증
   - 핵심 로직 vs 부가 기능 분리

3. **Cross-Domain Transfer의 MMD 측정 없이 규칙 기반으로 효과가 있을까?**
   - 2개 도메인 쌍 파일럿 필요
   - 성공 시 확대, 실패 시 전략 제외

---

## 리서치 난이도: 중간-높음
- **기술적 난이도**: 4가지 전략 통합은 복잡하나 각 전략은 문서화됨
- **시간 투자**: MVP 3주, 최적화 지속
- **불확실성**: 중첩 효과, 구현 복잡도 사전 측정 어려움

## 예상 소요 시간
- **MVP**: 3주 (풀타임)
- **검증 및 제출**: 1주
- **반복 개선**: ongoing (주 10시간)
- **총 초기 투자**: 4주

---

## 핵심 레퍼런스

### 필수 참고
1. [Letta Skill Learning](https://www.letta.com/blog/skill-learning) - 36.8% 상대 향상 입증
2. [Context Rot Research](https://research.trychroma.com/context-rot) - Context 길이별 성능 하락
3. [PALADIN Paper](https://arxiv.org/abs/2509.25238) - 89.68% recovery rate
4. [Factory Droid Architecture](https://factory.ai/news/terminal-bench) - 1위 에이전트 설계
5. [Structure Mapping Theory](https://groups.psych.northwestern.edu/gentner/papers/Gentner83.2b.pdf) - Cross-Domain 전이 이론

### 구현 참고
- [Harbor Framework](https://github.com/laude-institute/harbor) - Terminal-Bench 평가 환경
- [Letta Terminal-Bench Agent](https://github.com/letta-ai/letta-terminalbench) - 200줄 구현
- [Apex2 Agent](https://github.com/heartyguy/Apex2-Terminal-Bench-Agent) - 1위 달성 ablation study

---

## 최종 코멘트

> **판정: 실행 권장**
>
> 4가지 전략의 개별 효과는 학술 연구로 입증됨. 통합 시 중첩 효과로 인해 단순 합산은 불가능하나,
> 계층적 파이프라인으로 설계 시 각 전략이 서로 다른 실패 모드를 커버.
>
> MVP 3주 투자로 검증 가능하며, 성공 시 오픈소스로 Terminal-Bench 1위 달성 가능.
> 실패해도 4가지 최신 AI Agent 기법 통합 경험 축적.
>
> **다음 단계**: Terminal-Bench 실패 로그 분석 → 각 전략 커버리지 확인 → 우선순위 결정

---

*Generated by research-topic-explorer | 2026-01-07*

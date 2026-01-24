# Terminal-Bench 1등 달성 통합 전략 연구

## 📊 Research Score & Verdict

| 항목 | 점수 | 코멘트 |
|------|------|--------|
| 가설 견고성 | 21/30 | 7개 허점 중 1개 해결, 5개 부분 해결, 1개 미해결 |
| 증거 품질 | 19/25 | 실제 연구 기반, Terminal-Bench 특화 사례 부재 |
| 실행 가능성 | 18/25 | Solo Developer 사례 확인, 4-6주 현실적 수정 |
| 가치 명확성 | 14/20 | 70-78% 달성 시 Top 3 진입 가능 |
| **총점** | **72/100** | |

**Verdict: CONDITIONAL (조건부 통과)**

---

## Hypothesis (가설)

### 보수적 가설 (권장)
> **"Memory-Augmented Architecture + Error Recovery Training 조합을 우선 적용하면 Terminal-Bench 2.0에서 64.9% → 70-75% 달성 가능"**

### 중간 가설
> "4가지 전략 + 실패 모드 분석 선행 → 72-78%"

### 낙관적 가설
> "모든 전략 독립 작동 + Factory 미적용 → 75-82%"

---

## 현재 상황

| 순위 | Agent | Model | 정확도 |
|------|-------|-------|--------|
| 1 | **Factory Droid** | GPT-5.2 | **64.9%** |
| 2 | Ante | Gemini 3 Pro | 64.7% |
| 3 | Junie CLI | Gemini 3 Flash | 64.3% |
| 10 | Letta Code | Claude Opus 4.5 | 59.1% |

**목표**: 70-78% 달성 → Top 3 진입 또는 1위

---

## Cross-Domain Analogies

### Problem Abstraction
```yaml
abstract_problem:
  - Context Rot → "Information Decay in Sequential Processing"
  - 명령어 실패 복구 → "Failure Recovery in Multi-Step Execution"
  - 새로운 태스크 적응 → "Skill Transfer to Novel Tasks"
```

### Top Cross-Domain Solutions

| 순위 | 소스 도메인 | 패턴 | 기대 효과 | Transfer Risk |
|-----|-----------|------|----------|---------------|
| 1 | **HFT Order Book** | Priority Eviction | Context Rot 40-60% 감소 | Low (0.15) |
| 2 | **Database WAL** | Checkpoint Recovery | Error Recovery +20-30% | Low (0.20) |
| 3 | **Microservices** | Circuit Breaker + Retry | Recovery Rate +25-35% | Low (0.18) |
| 4 | **Game AI HTN** | Hierarchical Task Network | Novel Task +15-25% | Medium (0.35) |

---

## Supporting Evidence (가설 지지 증거)

### 1. Skill Learning
- **출처**: [Letta Skill Learning](https://www.letta.com/blog/skill-learning)
- **결과**: 36.8% 상대 향상 (Terminal-Bench 2.0)
- **수정**: 아키텍처 패턴 전이로 **10-15% 기대**

### 2. Recovery-Aware Engineering
- **출처**: [PALADIN](https://arxiv.org/abs/2509.25238)
- **결과**: Recovery Rate 32.76% → 89.68%
- **검증**: [Recovery-Bench](https://www.letta.com/blog/recovery-bench) - RR ↔ Task Completion 상관관계 입증

### 3. Context Rot 방지
- **출처**: [Chroma Research](https://research.trychroma.com/context-rot)
- **결과**: 4k 토큰에서 15-20%p 손실 방지
- **적용**: Anchor Point Compression, Memory Blocks

### 4. Capability Saturation 연구
- **출처**: [Scaling Agent Systems](https://arxiv.org/html/2512.08296v1)
- **핵심**: 45% 초과 시 조정 수익 감소 → 실패 모드 기반 계산 필요

### 5. Compound AI Systems
- **출처**: [arXiv 2502.14815](https://arxiv.org/abs/2502.14815)
- **핵심**: 모듈형 전략 조합 시 5-70% 향상 가능 (다른 실패 모드 타겟 시)

---

## Counter Evidence (가설 반박 증거)

### 1. Cross-Domain Transfer 미검증
- Terminal-Bench 특화 적용 사례 부재
- **대응**: 효과 하향 (5-10% → 2-5%), MVP에서 후순위화

### 2. Factory 베이스라인 블랙박스
- Factory가 이미 유사 기법 적용 가능성
- **대응**: 차별화 영역 집중 (Memory + Recovery)

### 3. 효과 중첩
- 동일 실패 케이스 타겟 시 max(A,B)에 가까움
- **대응**: 30-50% 중첩 보정 적용

---

## 수정된 예상 효과

| 요소 | 기존 예상 | 수정된 예상 | 근거 |
|------|----------|------------|------|
| Memory-Augmented | +10-15% | **+5-10%** | 아키텍처 패턴만 전이 |
| Error Recovery | +10% | **+5-8%** | Recovery Opportunity 제한적 |
| Cross-Domain | +5-10% | **+2-5%** | 검증 부재, 후순위화 |
| Adaptive Planning | +5-8% | **+3-5%** | Terminal-Bench 미검증 |
| **중첩 보정** | 50% | **30-50%** | Capability Saturation |
| **총 기대 효과** | +15-25% | **+8-15%** | |
| **예상 최종 점수** | 75-80%+ | **70-78%** | |

---

## Action Items

### 보완 필요 사항 (CONDITIONAL 판정)

#### 1. 전략 우선순위 명확화 (필수)
- [ ] 순차적 적용 로드맵 수립
- **권장 순서**: Error Recovery → Memory-Augmented → Adaptive Planning → Cross-Domain

#### 2. 조기 검증 마일스톤 (필수)
- [ ] **Week 1**: Error Recovery 단독 적용 → 최소 +3% 향상 확인
- [ ] 미달 시 Plan B/C 전환 결정

#### 3. Factory 베이스라인 분석 (권장)
- [ ] Factory Droid 실패 패턴 분류
- [ ] Error Recovery/Memory 중 더 큰 갭 확인

#### 4. Cross-Domain Transfer 후순위화 (권장)
- [ ] MVP에서 제외
- [ ] 다른 3가지로 목표 달성 후 추가 검토

---

## 실행 로드맵

### Phase 0: 환경 세팅 + 분석 (1주)
- [ ] Harbor Framework 환경 구축
- [ ] Terminal-Bench 2.0 89개 태스크 실패 모드 분석
- [ ] Factory Droid 실패 패턴 분류

### Phase 1: Error Recovery (1주)
- [ ] PALADIN 스타일 Recovery 로직 구현
- [ ] Terminal-Bench 제출 → +3% 이상 확인
- [ ] **Go/No-Go 결정**

### Phase 2: Memory-Augmented (1주)
- [ ] Memory Blocks 아키텍처 적용
- [ ] Context Compression 통합
- [ ] Terminal-Bench 제출 → 누적 +6% 이상 확인

### Phase 3: Adaptive Planning (1주)
- [ ] 태스크 유형별 전략 분기
- [ ] Hierarchical Planning 적용
- [ ] Terminal-Bench 제출 → 누적 +8% 이상 확인

### Phase 4: 최적화 + Cross-Domain (1-2주)
- [ ] 하이퍼파라미터 튜닝
- [ ] Cross-Domain 패턴 선별 적용
- [ ] 최종 제출

---

## 대안 전략 (Plan B/C/D)

| Plan | 조건 | 전략 |
|------|------|------|
| **Plan B** | Week 1에서 +3% 미달 | Recovery Training 단독 집중 |
| **Plan C** | 특정 태스크 유형만 향상 | 해당 유형 특화 (예: debugging, file operations) |
| **Plan D** | 전체 접근 실패 | Factory Droid 포크 후 fine-tuning |

---

## 핵심 레퍼런스

### 필수 참고
1. [Scaling Agent Systems](https://arxiv.org/html/2512.08296v1) - Capability Saturation, 45% 임계값
2. [Recovery-Bench](https://www.letta.com/blog/recovery-bench) - RR ↔ Task Completion 상관관계
3. [PALADIN](https://arxiv.org/html/2509.25238v1) - 89.68% Recovery Rate
4. [Failures in Automated Issue Solving](https://arxiv.org/html/2509.13941v1) - 실패 모드 분류 (3 phases, 9 categories)
5. [Compound AI Systems](https://arxiv.org/html/2506.04565v1) - 모듈형 조합 효과

### 추가 참고
- [Letta Memory Benchmarking](https://www.letta.com/blog/benchmarking-ai-agent-memory) - 74% 달성
- [Factory Droid Technical Report](https://factory.ai/news/code-droid-technical-report) - 아키텍처 정보
- [Hell or High Water](https://arxiv.org/abs/2508.11027) - 외부 실패 대응
- [Terminal-Bench 2.0](https://www.tbench.ai/leaderboard/terminal-bench/2.0) - 최신 리더보드

---

## 리서치 갭 (TODO)

- [ ] Terminal-Bench 2.0 89개 태스크 실패 모드 분포 분석
- [ ] Factory Droid의 실제 memory management 구현 여부
- [ ] Cross-Domain Transfer의 Terminal-Bench 특화 적용 실험
- [ ] PALADIN 스타일 training의 Terminal-Bench 적용 데이터

---

## 최종 코멘트

> **72점 (CONDITIONAL)** - 리서치 품질은 양호하나, 실행 계획의 구체성과 조기 검증 체계가 부족합니다.
> 
> 4가지 전략을 동시에 추진하기보다, **Error Recovery → Memory 순으로 단계적 검증**하는 린(Lean) 접근을 권장합니다.
> 
> Week 1에서 +3% 미만일 경우 Plan B로 전환하는 명확한 기준을 설정하면 **PASS로 전환 가능**합니다.

---

*Generated by research-idea pipeline with Cross-Domain Abstraction | 2026-01-07*

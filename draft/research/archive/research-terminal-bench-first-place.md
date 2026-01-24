# Terminal-Bench 1등 달성 연구 계획

## 📊 Research Score & Verdict

| 항목 | 점수 | 코멘트 |
|------|------|--------|
| 가설 견고성 | 22/30 | 5개 허점 중 3개 완전 해결, 2개 부분 해결 |
| 증거 품질 | 21/25 | 다양하고 신뢰할 수 있는 출처, 직접 실험 데이터 부재 |
| 실행 가능성 | 18/25 | 삼중 결합 전략 명확, 상당한 엔지니어링 투자 필요 |
| 가치 명확성 | 17/20 | 측정 가능한 목표, 성공 범위가 다소 넓음 |
| **총점** | **78/100** | |

**Verdict: CONDITIONAL (조건부 통과)**

---

## Hypothesis (가설)

> **"Skill Learning + Context Rot 방지 + Recovery-Aware Engineering + Cross-Domain Skill Transfer 사중 결합을 통해 Terminal-Bench 2.0에서 67-72% 달성 가능 (Factory Droid 64.9% + 2-7%p 상회)"**

### 추가 가설: Cross-Domain Skill Transfer
> "Structure Mapping Theory 기반 Cross-Domain Abstraction을 Skill Learning에 적용하면, 도메인 내 Skill 뿐 아니라 유사 구조의 다른 도메인 해결책도 전이하여 추가 5-15% 향상 가능"

---

## 현재 상황

| 순위 | Agent | Model | 정확도 |
|------|-------|-------|--------|
| 1 | **Factory Droid** | GPT-5.2 | **64.9%** |
| 2 | Ante | Gemini 3 Pro | 64.7% |
| 3 | Factory Droid | Claude Opus 4.5 | 63.1% |
| 10 | Letta Code | Claude Opus 4.5 | 59.1% |

**격차**: 59.1% → 64.9% = 5.8%p 필요

---

## Supporting Evidence (가설 지지 증거)

### 1. Skill Learning 효과 입증
- **출처**: [Letta Skill Learning Blog](https://www.letta.com/blog/skill-learning)
- **결과**: Terminal-Bench 2.0 전체에서 **36.8% 상대 향상 (15.7%p 절대)**
- **방법**: Reflection + Creation 2단계 학습, trajectory + feedback 조건

### 2. Context Rot 현상 확인
- **출처**: [Chroma Research](https://research.trychroma.com/context-rot)
- **결과**: 4,000 토큰에서 정확도 **70-75% → 55-60%로 급락**
- **영향**: 15-20%p 성능 손실 발생

### 3. Recovery-Aware Engineering 효과
- **출처**: [PALADIN arXiv](https://arxiv.org/abs/2509.25238)
- **결과**: Recovery rate **32.76% → 89.68%**
- **방법**: 50,000+ recovery-annotated trajectories, LoRA fine-tuning

### 4. Factory Droid 아키텍처 분석
- **출처**: [Factory Droid Blog](https://factory.ai/news/terminal-bench)
- **특징**:
  - Multi-layered Context Architecture
  - Context-as-Resource 철학
  - Model-agnostic framework
  - 계층적 프롬프팅 (Tool → System → Notification)

### 5. Cross-Domain Skill Transfer (신규)
- **출처**: [Structure Mapping Theory](https://groups.psych.northwestern.edu/gentner/papers/Gentner83.2b.pdf) (Gentner, 1983)
- **핵심**: 관계적 구조 매핑을 통한 도메인 간 지식 전이
- **적용 예시**:
  - DB Transaction Recovery → Terminal Task Error Recovery
  - CI/CD Pipeline Retry → Command Retry Strategy
  - Network Protocol Backoff → Agent Backoff
- **기대 효과**: Skill 전이 효율 +20-30%, Cold Start 해결
- **참고**: [Cross-Domain Abstraction 연구](research-cross-domain-abstraction.md)

---

## Counter Evidence (가설 반박 증거)

### 1. 효과 중첩 가능성
- Skill Learning과 Context Engineering이 동일 실패 케이스를 타겟할 수 있음
- 단순 합산 불가, **50% 중첩 보정 필요**

### 2. Context Rot 비중 불확실
- Terminal-Bench 실패 중 Context Rot 기인 비율: **30-50% 추정** (측정 필요)

### 3. 1등과의 격차 성격
- 5.8%p 격차가 "쉬운 태스크는 다 풀고, 어려운 태스크만 남은 상태"일 가능성
- 한계 효용 체감으로 개선이 급격히 어려워질 수 있음

---

## 수정된 예상 효과

| 요소 | 기대 효과 | 근거 |
|------|----------|------|
| Skill Learning | +6-9%p 절대 | Letta 연구, trajectory+feedback 조건 |
| Context Rot 방지 | +4-6%p 절대 | Chroma 연구 기반 추정 |
| Recovery-Aware | +2-4%p 절대 | PALADIN 89.68% recovery |
| Cross-Domain Transfer | +2-5%p 절대 | SMT 기반, Cold Start 해결 |
| **총 효과 (50% 중첩 보정)** | **+7-12%p** | |
| **예상 최종 점수** | **67-72%** | Factory 64.9% + 2-7%p |

---

## Action Items

### Phase 0: 검증 (1주)
- [ ] Terminal-Bench 실패 로그 50-100개 수동 분석
- [ ] Context Rot 기인 실패 비율 확정
- [ ] 성공 기준 명확화: 최소 67%, 목표 70%+

### Phase 1: MVP 구현 (2-3주)
- [ ] Harbor Framework 환경 세팅
- [ ] Letta Fork + Skill Learning 기본 프레임워크 적용
- [ ] PALADIN 스타일 Recovery 로직 단순화 버전 구현
- [ ] Context Rot 방지 전략 적용

### Phase 2: 검증 및 최적화 (1주)
- [ ] 단독 vs 결합 효과 A/B 테스트
- [ ] 중첩률 실측 후 기대값 재계산
- [ ] 벤치마크 제출 및 결과 분석

### Phase 3: 반복 개선 (ongoing)
- [ ] 실패 태스크 분석 → 추가 Skill 생성
- [ ] 하이퍼파라미터 튜닝
- [ ] 모델 선택 최적화

---

## 핵심 레퍼런스

### 필수 참고
1. [Letta Skill Learning](https://www.letta.com/blog/skill-learning) - 36.8% 상대 향상 입증
2. [Context Rot Research](https://research.trychroma.com/context-rot) - Context 길이별 성능 하락 분석
3. [PALADIN](https://arxiv.org/abs/2509.25238) - 89.68% recovery rate 달성
4. [Factory Droid Architecture](https://factory.ai/news/terminal-bench) - 1위 에이전트 설계 철학
5. [Harbor Framework](https://github.com/laude-institute/harbor) - Terminal-Bench 평가 환경

### 추가 참고
- [Letta Terminal-Bench Agent](https://github.com/letta-ai/letta-terminalbench) - 200줄 구현
- [Terminal-Bench 2.0 Leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.0)
- [SAMULE Multi-level Reflection](https://arxiv.org/abs/2509.20562)
- [Anthropic Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

---

## 리서치 갭 (TODO)

- [ ] Terminal-Bench 실패 케이스 중 Context Rot 직접 원인 비율 측정
- [ ] Skill Learning과 Recovery-Aware Engineering의 조합 효과 측정
- [ ] Factory Droid의 구체적인 error recovery 메커니즘 분석
- [ ] Multi-agent orchestration의 Terminal-Bench 적용 가능성
- [ ] Cross-Domain Skill Transfer Pilot: 2개 도메인 쌍에서 구조 매핑 테스트
- [ ] Safe Transfer Pipeline 검증: MMD 기반 유사도 측정 → 전이 성공률 상관관계

---

## 최종 코멘트

> 연구 방향성은 견고하며, 1등(Factory Droid) 분석을 통해 실행 가능한 청사진 확보.
> 부분 해결된 허점들은 "알 수 없는 것"이 아니라 "측정 안 한 것"이므로
> 파일럿 단계에서 해소 가능. **보완 후 즉시 실행 권장.**

---

*Generated by research-idea pipeline | 2026-01-07*

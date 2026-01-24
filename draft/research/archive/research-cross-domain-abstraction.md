# Cross-Domain Structural Abstraction 연구

## 📊 Research Score & Verdict

| 항목 | 점수 | 코멘트 |
|------|------|--------|
| 가설 견고성 | 22/30 | 5개 허점 중 2개 해결, 3개 부분 해결 |
| 증거 품질 | 19/25 | AlphaGeometry, NSCL 등 고품질 레퍼런스 |
| 실행 가능성 | 18/25 | Safe Transfer Pipeline 구체화됨 |
| 가치 명확성 | 15/20 | 조건부 성능 향상 타겟 명확 |
| **총점** | **74/100** | |

**Verdict: CONDITIONAL (조건부 통과)**

---

## Hypothesis (가설)

> **"구조적 유사성이 충분한 도메인 쌍에서 Safe Transfer Pipeline + 구조화된 유추 능력으로 5-40% 조건부 성능 향상 가능. Novel/OOD 추론에서는 효과 제한적."**

---

## 핵심 개념: Structure Mapping Theory

```
┌─────────────────────────────────────────────────────────────┐
│              STRUCTURAL ANALOGY PATTERNS                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [HFT Order Book]           [LLM Context Memory]            │
│  ├── Sliding Window         ├── Context Window              │
│  ├── Priority Eviction      ├── Importance-based Pruning    │
│  ├── Level Aggregation      ├── Hierarchical Summary        │
│  └── Delta Updates          └── Incremental Context         │
│                                                              │
│  [Microservices]            [AI Agent]                       │
│  ├── Circuit Breaker        ├── Error Recovery              │
│  ├── Retry with Backoff     ├── Adaptive Retry              │
│  └── Graceful Degradation   └── Fallback Strategy           │
│                                                              │
│  [Database]                 [RAG System]                     │
│  ├── B-tree Index           ├── Hierarchical Retrieval      │
│  ├── LRU/LFU Cache          ├── Context Eviction            │
│  └── Query Optimization     └── Retrieval Optimization      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Supporting Evidence (가설 지지 증거)

### 1. Structure Mapping Theory (SMT)
- **출처**: Gentner (1983), 40년 검증된 인지과학 모델
- **핵심**: 유추는 표면적 유사성이 아닌 **관계적 구조(relational structure)**의 매핑
- **원리**: 관계 우선 매핑, 체계성(Systematicity), 구조적 일관성

### 2. Cross-Domain Transfer 실증
- **Nature 2021**: 39개 데이터셋 중 27개에서 유의미한 향상
- **NeuroImage 2025**: MRI 도메인 적응 63%→99% 정확도
- **Geneformer**: NLP/CV 기법을 생물학 네트워크 예측에 적용 성공

### 3. 실제 패턴 전이 성공
| 패턴 | Source Domain | Target Domain | 결과 |
|------|---------------|---------------|------|
| Sliding Window | HFT Order Book | LLM Context | KV Cache 50% 감소 |
| Circuit Breaker | Microservices | AI Agent | SHIELDA 36종 예외 처리 |
| LRU/LFU | Database Cache | LLM Pruning | NACL 95% 성능 유지 |

### 4. Neuro-Symbolic AI 성공
- **AlphaGeometry**: 신경망 + 심볼릭 결합으로 수학 올림피아드 해결
- **NSCL (MIT-IBM)**: 시각적 추론 성공
- **167편 NeSy 논문** (2020-2024 systematic review)

---

## Counter Evidence (가설 반박 증거)

### 1. Negative Transfer 문제
- 도메인 유사도 낮으면 **성능 하락** 발생
- 50+ 완화 기법 존재하나 완벽한 예방 불가

### 2. LLM 유추 능력 한계
- **ARC-AGI-2**: Pure LLM = 0%, GPT-5.2 = 53-54% (인간 100%)
- 장문맥 유추, Novel 추론에서 취약

### 3. Surface vs Structural 혼동
- 표면적으로 유사해 보이지만 구조적으로 다른 패턴에 무리하게 전이 시 실패

---

## Safe Transfer Pipeline

```
┌─────────────────────────────────────────────────────────┐
│              SAFE TRANSFER PIPELINE                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Step 1: Domain Similarity 측정                          │
│  ├── MMD (Maximum Mean Discrepancy)                     │
│  ├── DVD (Document Vector Distance)                     │
│  └── Transfer Gap 추정                                   │
│                                                          │
│  Step 2: Gap별 전략 선택                                 │
│  ├── Low Gap (MMD < 0.3): Full Transfer                 │
│  ├── Medium Gap (0.3-0.6): REFINE/Filtering 적용        │
│  └── High Gap (> 0.6): Transfer 포기 or Distant Transfer│
│                                                          │
│  Step 3: 실행 및 검증                                    │
│  ├── A/B 테스트                                          │
│  └── Negative Transfer 모니터링                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 수정된 예상 효과

| 조건 | 예상 향상 | 근거 |
|------|----------|------|
| **최적 조건** (Low Gap) | 15-40% | MRI 사례, Nature 데이터 |
| **평균 조건** (Medium Gap) | 5-15% | Transfer gap 연구 |
| **비적합 조건** (High Gap) | -10% ~ +5% | Negative Transfer 포함 |

---

## 적용 방안

### 1. Terminal-Bench (Cross-Domain Skill Transfer)

```
현재 Skill Learning:
  Terminal Task A → Skill A'
  
개선된 Skill Learning:
  Terminal Task A 
  → 구조 추출: [Sequential Process, Error Recovery]
  → 유사 패턴 검색: Database Transaction, CI/CD Pipeline
  → 다른 도메인 검증 기법 적용
```

**예상 효과**: Skill 전이 효율 +20-30%, Cold Start 해결

### 2. Research Ideation (Cross-Domain Solution Discovery)

```
Input: 문제 P (도메인 A)
Step 1: 구조적 분해 → [제약조건, 최적화 목표]
Step 2: 구조 유사 문제 검색 (도메인 B, C, D)
Step 3: 검증된 해결책 매핑
Step 4: 도메인 A 맥락으로 적응
Output: Novel solution S'
```

**예상 효과**: 아이디어 품질 2-3배 향상

---

## Action Items

### 보완 필요 사항 (CONDITIONAL 판정)

1. **예측 범위 구체화**
   - [ ] MMD 지표와 성능 향상 상관관계 모델링
   - [ ] 조건-결과 매핑: "MMD < 0.3 → 15-25%, MMD 0.3-0.6 → 5-15%"

2. **Pilot 실험 정의 (48시간 내 실행 가능)**
   - [ ] 2개 도메인 쌍 선정
   - [ ] MMD 기반 예측 vs 실제 성능 비교

3. **Concrete Use Case 선정**
   - [ ] Option A: Context Management (HFT Order Book → LLM Context)
   - [ ] Option B: Error Recovery (Microservices → AI Agent)

---

## 핵심 레퍼런스

### 필수 참고
1. [Structure-Mapping Theory](https://groups.psych.northwestern.edu/gentner/papers/Gentner83.2b.pdf) - Gentner (1983)
2. [A Survey on Negative Transfer](https://arxiv.org/pdf/2009.00909) - NT 방지 알고리즘 종합
3. [LLMs as Analogical Reasoners](https://arxiv.org/abs/2310.01714) - LLM 유추 기법
4. [ARC Prize 2025 Results](https://arcprize.org/blog/arc-prize-2025-results-analysis) - LLM 추론 한계
5. [Neuro-Symbolic AI Review](https://arxiv.org/abs/2501.05435) - NeSy 통합 현황

### 추가 참고
- [AlphaGeometry](https://gregrobison.medium.com/neuro-symbolic-ai) - NeSy 성공 사례
- [REFINE](https://arxiv.org/abs/2505.11771) - Negative transfer 방지
- [Geneformer](https://www.nature.com/articles/s41586-023-06139-9) - Cross-domain 생물학 적용

---

## 리서치 갭 (TODO)

- [ ] SMT를 직접 구현한 AI 시스템 성능 벤치마크
- [ ] 비-CS 도메인 간 추상적 구조 전이 사례
- [ ] 실패 사례의 정량적 분석
- [ ] Multi-hop Cross-domain Reasoning (A→B→C)

---

## 최종 코멘트

> Cross-Domain Abstraction은 이론적으로 검증되고 실증 사례도 존재하는 유망한 연구 방향.
> 단, 무분별한 적용은 Negative Transfer 위험. Safe Transfer Pipeline 필수.
> Terminal-Bench와 Research Ideation 모두에 적용 가능하나, 
> Pilot 실험을 통해 조건별 효과를 검증한 후 확대 적용 권장.

---

*Generated by research-idea pipeline | 2026-01-07*

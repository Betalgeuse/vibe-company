# Safe Transfer Pipeline

Cross-Domain 전이 시 Negative Transfer를 방지하기 위한 검증 파이프라인.

## 배경

### Negative Transfer 문제
- 도메인 유사도가 낮을 경우 전이 시 **성능 하락** 발생
- 단순 전이는 위험 → **사전 검증 필수**

### 참고 연구
- [A Survey on Negative Transfer](https://arxiv.org/pdf/2009.00909) - 50+ 방지 알고리즘
- [REFINE](https://arxiv.org/abs/2505.11771) - 이론적 증명 포함

---

## 파이프라인 구조

```
┌─────────────────────────────────────────────────────────────┐
│              SAFE TRANSFER PIPELINE                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │   Stage 1   │───▶│   Stage 2   │───▶│   Stage 3   │      │
│  │  Similarity │    │  Gap Class  │    │  Strategy   │      │
│  │  Assessment │    │  ification  │    │  Selection  │      │
│  └─────────────┘    └─────────────┘    └─────────────┘      │
│         │                  │                  │              │
│         ▼                  ▼                  ▼              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │ MMD / DVD   │    │ Low/Med/High│    │ Full/Partial│      │
│  │ Score       │    │ Gap Label   │    │ /Skip       │      │
│  └─────────────┘    └─────────────┘    └─────────────┘      │
│                                                              │
│                    ┌─────────────┐                          │
│                    │   Stage 4   │                          │
│                    │ Validation  │                          │
│                    │   & A/B     │                          │
│                    └─────────────┘                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Stage 1: Domain Similarity Assessment

### 측정 방법

#### 1. Maximum Mean Discrepancy (MMD)
```
도메인 간 분포 차이를 커널 함수로 측정

MMD²(X, Y) = E[k(x,x')] - 2E[k(x,y)] + E[k(y,y')]

- MMD ≈ 0: 분포 유사 (전이 적합)
- MMD >> 0: 분포 상이 (전이 위험)
```

#### 2. Document Vector Distance (DVD)
```
텍스트 도메인의 경우 문서 임베딩 거리 사용

DVD = cosine_distance(embed(domain_a), embed(domain_b))

- DVD < 0.3: 높은 유사도
- DVD 0.3-0.6: 중간 유사도
- DVD > 0.6: 낮은 유사도
```

#### 3. Structural Similarity (SMT 기반)
```yaml
structural_similarity:
  relation_match: 0.5  # 관계 유형 일치도 (가중치 50%)
  constraint_match: 0.3  # 제약조건 일치도 (가중치 30%)
  entity_role_match: 0.2  # 엔티티 역할 일치도 (가중치 20%)
```

### Prompt for Assessment
```markdown
## Domain Similarity 평가

### 소스 도메인
{source_domain_description}

### 타겟 도메인
{target_domain_description}

### 평가 항목
1. **구조적 유사성**: 두 도메인의 문제 구조가 얼마나 유사한가?
   - 동일한 관계 유형 (인과, 순서, 제약)?
   - 유사한 상태 공간?
   - 비슷한 제약조건?

2. **의미적 유사성**: 개념/용어가 얼마나 대응되는가?

3. **해결책 전이 가능성**: 소스 해결책이 타겟에서 작동할 가능성?

### 출력
```yaml
similarity_assessment:
  structural_similarity: 0.X  # 0-1
  semantic_similarity: 0.X    # 0-1
  transfer_feasibility: 0.X   # 0-1
  overall_score: 0.X          # 가중 평균
  rationale: "평가 근거"
```
```

---

## Stage 2: Gap Classification

### 분류 기준

| Gap Level | Similarity Score | 특징 | 예시 |
|-----------|------------------|------|------|
| **Low** | > 0.7 | 거의 동일 구조 | DB Cache → LLM KV Cache |
| **Medium** | 0.4 - 0.7 | 유사하나 적응 필요 | Microservices → AI Agent |
| **High** | < 0.4 | 상이한 구조 | 음악 이론 → 금융 모델 |

### 분류 결정 트리
```
IF structural_similarity > 0.7:
    gap = "low"
ELIF structural_similarity > 0.4:
    IF semantic_similarity > 0.5:
        gap = "medium"
    ELSE:
        gap = "high"
ELSE:
    gap = "high"
```

---

## Stage 3: Strategy Selection

### Gap별 전략

#### Low Gap (Full Transfer)
```yaml
strategy: "full_transfer"
actions:
  - 해결책 직접 적용
  - 용어만 도메인에 맞게 매핑
  - 최소한의 적응
expected_improvement: "15-40%"
negative_transfer_risk: "< 5%"
```

#### Medium Gap (Partial Transfer)
```yaml
strategy: "partial_transfer"
actions:
  - 핵심 아이디어만 추출
  - 도메인 특화 수정 적용
  - REFINE 알고리즘 사용 (residual feature integration)
  - 단계적 적용 및 모니터링
expected_improvement: "5-15%"
negative_transfer_risk: "10-20%"
```

#### High Gap (Skip or Inspiration Only)
```yaml
strategy: "skip_or_inspiration"
actions:
  - 직접 전이 금지
  - 영감/아이디어 수준으로만 참고
  - 독립적 해결책 개발 권장
expected_improvement: "0-5% (불확실)"
negative_transfer_risk: "> 20%"
```

### Prompt for Strategy Selection
```markdown
## 전이 전략 선정

### Gap 분류 결과
{gap_classification}

### 후보 해결책
{candidate_solutions}

### 전략 결정
Gap Level에 따라 적절한 전략을 선정하세요:

1. **Low Gap**: Full Transfer 권장
   - 직접 적용 방안 제시
   
2. **Medium Gap**: Partial Transfer 권장
   - 추출할 핵심 아이디어
   - 필요한 적응 사항
   - 모니터링 포인트
   
3. **High Gap**: Skip 권장
   - 영감으로만 활용할 요소
   - 대안적 접근법

### 출력
```yaml
transfer_strategy:
  gap_level: "low|medium|high"
  strategy: "full_transfer|partial_transfer|skip"
  actions: ["액션1", "액션2"]
  core_idea_to_extract: "핵심 아이디어"
  adaptations_needed: ["적응1", "적응2"]
  monitoring_points: ["모니터링1", "모니터링2"]
  expected_improvement: "X-Y%"
  risk_level: "low|medium|high"
```
```

---

## Stage 4: Validation & A/B Testing

### 검증 프로세스

```
┌─────────────────────────────────────────────────────────────┐
│                    VALIDATION LOOP                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Baseline 측정                                            │
│     └── 현재 성능 기록                                       │
│                                                              │
│  2. 소규모 적용 (Pilot)                                      │
│     └── 전체의 10-20%에만 적용                              │
│                                                              │
│  3. A/B 비교                                                 │
│     ├── A: Baseline (전이 없음)                             │
│     └── B: 전이 적용                                         │
│                                                              │
│  4. 결과 분석                                                │
│     ├── 성능 향상 확인                                       │
│     ├── Negative Transfer 감지                              │
│     └── 통계적 유의성 검증                                  │
│                                                              │
│  5. 결정                                                     │
│     ├── 향상 시: Full rollout                               │
│     ├── 무변화: 추가 적응 시도                              │
│     └── 하락 시: Rollback                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Negative Transfer 감지 지표

| 지표 | 정상 범위 | 경고 | 위험 |
|------|----------|------|------|
| 성능 변화 | +5% 이상 | 0~+5% | 마이너스 |
| 실패율 변화 | 감소 | 동일 | 증가 |
| 예외 발생률 | 감소 | 동일 | 증가 |

### Rollback 기준
```yaml
rollback_triggers:
  - condition: "performance_drop > 5%"
    action: "immediate_rollback"
  - condition: "error_rate_increase > 10%"
    action: "immediate_rollback"
  - condition: "no_improvement_after_3_iterations"
    action: "abandon_transfer"
```

---

## 통합 Prompt

```markdown
## Safe Transfer 전체 검증

### 입력
- 소스 도메인: {source_domain}
- 타겟 도메인: {target_domain}
- 후보 해결책: {candidate_solution}

### 검증 수행

#### Step 1: Similarity Assessment
[Domain Similarity 평가 수행]

#### Step 2: Gap Classification
[Gap Level 분류]

#### Step 3: Strategy Selection
[전이 전략 선정]

#### Step 4: Validation Plan
[검증 계획 수립]

### 최종 출력
```yaml
safe_transfer_result:
  similarity_score: 0.X
  gap_level: "low|medium|high"
  strategy: "full_transfer|partial_transfer|skip"
  recommendation: "proceed|cautious|abort"
  validation_plan:
    pilot_scope: "10-20%"
    success_criteria: "X% improvement"
    rollback_trigger: "Y% degradation"
  expected_outcome: "Z% improvement with W% confidence"
```
```

---

## 성공 지표

| 지표 | 목표 |
|------|------|
| Low Gap 전이 성공률 | > 90% |
| Medium Gap 전이 성공률 | > 60% |
| High Gap 전이 시도율 | < 10% (대부분 Skip) |
| Negative Transfer 발생률 | < 10% |
| 전체 평균 향상 | 5-15% |

---

*Safe Transfer Pipeline v1.0 | 2026-01-07*

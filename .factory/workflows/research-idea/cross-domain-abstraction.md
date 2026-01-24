# Cross-Domain Abstraction Workflow

research-idea 파이프라인에서 Cross-Domain Structural Analogy를 실제로 수행하는 워크플로우.

## 이론적 기반

### Structure Mapping Theory (Gentner, 1983)
```
핵심 원리:
1. 관계 우선 매핑 - 객체 속성보다 관계가 우선
2. 체계성(Systematicity) - 고차원 관계(인과관계)가 더 중요
3. 구조적 일관성 - 1:1 대응 유지
```

## 실행 프로세스

```
┌─────────────────────────────────────────────────────────────┐
│         CROSS-DOMAIN ABSTRACTION WORKFLOW                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Step 1: Problem Abstraction (문제 추상화)                   │
│  ├── 구체적 문제 → 추상 패턴 변환                            │
│  ├── 핵심 관계 추출 (인과, 순서, 제약)                       │
│  └── 제약조건/목표/상태공간 분해                             │
│                                                              │
│  Step 2: Pattern Matching (패턴 매칭)                        │
│  ├── 추상 패턴 → 알려진 패턴 DB 검색                        │
│  ├── 구조적 유사도 점수 계산                                 │
│  └── Top-K 유사 패턴 선정                                   │
│                                                              │
│  Step 3: Cross-Domain Search (도메인 간 탐색)               │
│  ├── 유사 패턴이 해결된 다른 도메인 탐색                    │
│  ├── 검증된 해결책 수집                                      │
│  └── 도메인 유사도 평가 (MMD/DVD)                           │
│                                                              │
│  Step 4: Safe Transfer Validation (전이 검증)               │
│  ├── Negative Transfer 위험 평가                            │
│  ├── Gap 분류 (Low/Medium/High)                             │
│  └── 전이 전략 선택                                          │
│                                                              │
│  Step 5: Solution Adaptation (해결책 적응)                   │
│  ├── 타 도메인 해결책 → 현재 도메인 맥락 변환               │
│  ├── 용어/제약조건 매핑                                      │
│  └── 적용 가능성 검증                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Analogical Prompting 구현

### Step 1: Problem Abstraction Prompt

```markdown
## 문제 추상화

주어진 문제를 분석하여 추상적 구조로 변환하세요.

### 입력 문제
{problem_description}

### 추상화 작업
1. **핵심 엔티티**: 이 문제의 주요 객체/개념은?
2. **관계 추출**: 엔티티 간 관계는? (인과, 순서, 포함, 제약)
3. **제약조건**: 해결책이 만족해야 할 조건은?
4. **최적화 목표**: 무엇을 최대화/최소화하는가?
5. **상태 공간**: 가능한 상태와 전이는?

### 출력 형식
```yaml
abstract_pattern:
  name: "[패턴명]"
  entities: ["엔티티1", "엔티티2"]
  relations:
    - type: "causal|sequential|constraint|contains"
      from: "엔티티1"
      to: "엔티티2"
      description: ""
  constraints: ["제약1", "제약2"]
  objective: "최적화 목표"
  state_space: "상태 공간 설명"
```
```

### Step 2: Pattern Matching Prompt

```markdown
## 패턴 매칭

추상화된 문제를 알려진 패턴과 매칭하세요.

### 추상 패턴
{abstract_pattern}

### 알려진 패턴 목록
| Pattern | 설명 | 적용 도메인 |
|---------|------|-------------|
| Sliding Window | 고정 크기 윈도우로 데이터 처리 | HFT, LLM, Stream |
| Priority Eviction | 우선순위 기반 제거 | Cache, Memory, Context |
| Hierarchical Storage | 계층적 저장/검색 | DB, RAG, Skill Memory |
| Circuit Breaker | 실패 시 차단/복구 | Microservices, Agent |
| Retry with Backoff | 점진적 재시도 | Network, API, Agent |
| Fan-out/Fan-in | 분산 처리 후 집계 | MapReduce, Multi-Agent |
| Checkpoint Recovery | 체크포인트 기반 복구 | DB, CI/CD, Agent State |
| Incremental Update | 변경분만 업데이트 | CDC, Context, Cache |

### 매칭 작업
1. 가장 유사한 패턴 3개 선택
2. 각 패턴과의 구조적 유사도 점수 (0-1)
3. 매칭 근거 설명

### 출력 형식
```yaml
matched_patterns:
  - pattern: "[패턴명]"
    similarity: 0.X
    rationale: "매칭 근거"
    source_domains: ["도메인1", "도메인2"]
```
```

### Step 3: Cross-Domain Search Prompt

```markdown
## Cross-Domain 해결책 탐색

매칭된 패턴이 성공적으로 적용된 다른 도메인을 탐색하세요.

### 매칭된 패턴
{matched_patterns}

### 현재 문제 도메인
{current_domain}

### 탐색 작업
각 패턴에 대해:
1. 이 패턴이 성공적으로 적용된 다른 도메인 찾기
2. 해당 도메인의 구체적 해결책 수집
3. 논문/블로그/GitHub 레퍼런스 수집
4. 도메인 간 유사도 평가 (Low/Medium/High gap)

### 출력 형식
```yaml
cross_domain_solutions:
  - source_domain: "[소스 도메인]"
    pattern: "[패턴명]"
    solution_name: "[해결책 이름]"
    description: "해결책 설명"
    reference: "[URL 또는 논문명]"
    domain_gap: "low|medium|high"
    transfer_risk: "low|medium|high"
```
```

### Step 4: Safe Transfer Validation Prompt

```markdown
## 전이 안전성 검증

Cross-domain 해결책의 전이 가능성을 검증하세요.

### 후보 해결책
{cross_domain_solutions}

### 현재 도메인 특성
{current_domain_context}

### 검증 작업
각 후보에 대해:
1. **구조적 정렬**: 소스-타겟 도메인 간 구조가 실제로 유사한가?
2. **Negative Transfer 위험**: 전이 시 성능 하락 가능성은?
3. **적응 난이도**: 해결책을 현재 도메인에 맞추는 데 필요한 수정은?
4. **기대 효과**: 성공 시 예상 향상률은?

### Gap별 전략
- **Low Gap (유사도 높음)**: Full Transfer 권장
- **Medium Gap**: 부분 적응 필요, 주의 적용
- **High Gap**: 전이 비권장, 영감만 참고

### 출력 형식
```yaml
transfer_validation:
  - solution: "[해결책명]"
    structural_alignment: "high|medium|low"
    negative_transfer_risk: "high|medium|low"
    adaptation_difficulty: "easy|moderate|hard"
    expected_improvement: "X-Y%"
    recommendation: "proceed|cautious|skip"
    rationale: "판단 근거"
```
```

### Step 5: Solution Adaptation Prompt

```markdown
## 해결책 적응

검증된 Cross-domain 해결책을 현재 도메인에 맞게 변환하세요.

### 선택된 해결책
{validated_solution}

### 소스 도메인 컨텍스트
{source_domain_context}

### 타겟 도메인 컨텍스트
{target_domain_context}

### 적응 작업
1. **용어 매핑**: 소스 도메인 용어 → 타겟 도메인 용어
2. **제약조건 변환**: 소스 제약 → 타겟 제약
3. **구현 변환**: 소스 구현 방식 → 타겟 구현 방식
4. **검증 방법**: 적응된 해결책의 효과 측정 방법

### 출력 형식
```yaml
adapted_solution:
  original:
    domain: "[소스 도메인]"
    solution: "[원본 해결책]"
  adapted:
    domain: "[타겟 도메인]"
    solution: "[적응된 해결책]"
  mapping:
    terms:
      "[소스 용어]": "[타겟 용어]"
    constraints:
      "[소스 제약]": "[타겟 제약]"
  implementation_steps:
    - step: 1
      action: "[구현 단계]"
  validation_method: "[검증 방법]"
  expected_outcome: "[기대 결과]"
```
```

## 통합 실행 예시

### 입력 예시
```yaml
problem:
  domain: "LLM Context Management"
  description: "긴 대화에서 초기 지시사항을 잊어버림"
  constraints: ["토큰 한계 128K", "실시간 응답 필요"]
```

### 예상 출력
```yaml
cross_domain_solution:
  source_domain: "HFT Order Book"
  pattern: "Priority Eviction + Hierarchical Storage"
  original_solution: "Level-based aggregation with hot/warm/cold tiers"
  adapted_solution:
    name: "Tiered Context Management"
    description: |
      1. Hot Tier: 최근 N턴 + 시스템 프롬프트 (항상 유지)
      2. Warm Tier: 중요 정보 요약본 (압축 저장)
      3. Cold Tier: 전체 히스토리 (필요시 검색)
    implementation:
      - 중요도 점수 계산 (recency + relevance)
      - 티어 간 승격/강등 로직
      - 요약 생성 트리거 조건
  expected_improvement: "Context Rot 50% 감소"
  reference: "NACL (ACL 2024), Lethe (arXiv 2025)"
```

## @analogy-finder Droid 연동

이 워크플로우는 `@analogy-finder` droid가 실행합니다.

```json
{
  "droid": "@analogy-finder",
  "workflow": "cross-domain-abstraction",
  "steps": [
    "problem_abstraction",
    "pattern_matching", 
    "cross_domain_search",
    "safe_transfer_validation",
    "solution_adaptation"
  ]
}
```

## 성공 지표

| 지표 | 목표 |
|------|------|
| 유효한 Cross-domain 해결책 발견 | 최소 1개 |
| Transfer 성공률 (Low/Medium Gap) | > 70% |
| 적응된 해결책의 실제 효과 | 5-15% 향상 |
| Negative Transfer 발생률 | < 10% |

---

*Cross-Domain Abstraction Workflow v1.0 | 2026-01-07*

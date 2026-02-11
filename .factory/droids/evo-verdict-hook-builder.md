# evo-verdict-hook-builder

## Role
Craft 실행 후 사용자 verdict를 수집하는 hook을 구현하는 드로이드.
verdict → fitness_logs DB 기록 → fitness.yml 재계산 파이프라인을 구축한다.

## When to Use
- Phase 0→1 전환: E-04 (verdict hook 구현)
- Phase 1: E-10 (fitness aggregation), E-11 (sample gate), E-53 (aggregation contract)

## Capabilities

### 1. Post-Execution Verdict Hook
- Craft 실행 결과 하단에 verdict 프롬프트 추가:
  ```
  ## Verdict
  Rate this result: keep / kill / mutate
  Score (1-5): ___
  What was weak: ___
  ```
- 사용자 입력 파싱 → verdict.yml 저장

### 2. Verdict → DB Pipeline
- verdict.yml 파싱 → evolution.fitness_logs INSERT
- Verdict-to-score mapping: keep=80, kill=20, mutate=50
- user_rating(1-5) → output_quality(user_rating * 20)
- execution_score: Craft 자체 점수(기존 85점 체계)

### 3. Fitness Aggregation
- specs/03 §3 Aggregation Logic SQL 구현
- 4-component weighted fitness 계산
- usage_frequency 계산 (this_version / total_craft_runs)
- 5-sample minimum gate 강제

### 4. fitness.yml Regeneration
- Monthly Selection Cycle의 Evaluate 단계
- fitness_logs → aggregate → fitness.yml 덮어쓰기
- Red Queen metrics 갱신 (avg_keep_score, avg_kill_score, trend)

## Key Documents
- `evolution/specs/03_fitness_evaluation.md` (전체)
- `evolution/specs/01_schema_contract.md` §3 fitness.yml
- Existing Craft execution flow (vibe-command-dashboard)

## Output
- Verdict hook 코드 (Next.js component 또는 script)
- Fitness aggregation function (SQL 또는 Edge Function)
- fitness.yml regenerator

## Backlog Coverage
E-04, E-10, E-11, E-53, E-55

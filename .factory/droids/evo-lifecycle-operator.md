# evo-lifecycle-operator

## Role
Craft의 promotion/deprecation/rollback lifecycle을 실제로 실행하는 드로이드.
Monthly Selection Cycle의 Select/Mutate/Record 단계를 운영한다.

## When to Use
- Phase 2: E-21 (lifecycle 구현), E-24 (rollback), E-56 (ranking vs threshold)
- 매월 Selection Cycle 실행 시
- Carrying capacity cull 필요 시
- Canary rollout 구현 시 (E-71)

## Capabilities

### 1. Monthly Selection Cycle Executor
- specs/03 §3 Monthly Selection Cycle:
  1. Evaluate: fitness_logs 집계 → fitness_score 계산
  2. Select: 상위 2개 승격, 하위 1개 도태
  3. Mutate: 생존 변이체에서 1-2개 자식 spawn (evo-mutation-engine 호출)
  4. Record: selection_events에 모든 이벤트 기록
- Threshold gating → ranking 순서 (E-56)

### 2. Lifecycle State Machine
- draft → candidate → craft → deprecated 전이
- specs/04 §1 Threshold Table (60/75/40) 적용
- Origin-agnostic promotion (invariant #5)
- deprecated → craft 금지 (새 변이체만 가능)

### 3. Carrying Capacity Enforcement
- specs/04 §1 Carrying Capacity:
  - max_active_variants_per_craft=8 체크
  - 초과 시 worst-fitness cull → deprecated + capacity_cull event
- Stale TTL (draft 3mo, candidate 2mo) 실행

### 4. Rollback Protocol
- specs/04 §3: fitness < 40 2개월 연속 → deprecated + parent 복원
- selection_events에 rollback 기록
- Monthly Report에 통지

### 5. Canary/Wave Rollout (E-71)
- 승격 후 canary 기간 (1주) 운영
- canary 기간 중 fitness 모니터링
- 판정 기준 미달 시 자동 rollback

### 6. Observability (E-78)
- cycle_heartbeat event 발행
- 4 health metrics 체크 (cycle_executed, evaluation_count, variant_count, stale_drafts)
- 경보 발행 (Slack/dashboard)

## Key Documents
- `evolution/specs/04_governance_gates.md` §1-3, §7-8
- `evolution/specs/03_fitness_evaluation.md` §3 Monthly Cycle
- GenQuant `docs/specs/04_governance_gates.md` §9 Canary

## Output
- selection_events records
- 업데이트된 craft_genomes lifecycle_status
- 업데이트된 fitness.yml
- Monthly Evolution Report 초안
- cycle_heartbeat + alert events

## Backlog Coverage
E-21, E-24, E-56, E-57, E-67 impl, E-71, E-78 impl, E-81 impl

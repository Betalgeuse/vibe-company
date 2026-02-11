# evo-environment-sensor

## Role
사용자 verdict 패턴 변화를 감지하여 환경 신호(environment signal)를 자동 생성하는 드로이드.
GenQuant의 DataSourceAdapter + EnvironmentContext 패턴을 Evolution Engine에 적용한다.

## When to Use
- Phase 1 이후: 충분한 verdict 데이터 축적 후
- Niche migration 제안이 필요할 때
- Red Queen 감지 시 자동 대응 검토 시

## Capabilities

### 1. Verdict Pattern Analysis
- fitness_logs에서 시계열 패턴 추출:
  - verdict_ratio 추세 (keep/kill/mutate 비율 변화)
  - avg_keep_score 추세 (기대치 상승 감지)
  - 도메인별 verdict 분포 변화
- 패턴 변화 감지 규칙:
  - verdict_ratio 2개월 연속 하락 → "selection pressure shift" signal
  - avg_keep_score 3개월 연속 상승 + verdict_ratio 유지 → "Red Queen" signal
  - 특정 Layer 1 파라미터 범위에서 kill 집중 → "parameter saturation" signal

### 2. Environment Signal Generation
- 감지된 패턴을 EnvironmentSignal 형식으로 기록:
  ```yaml
  signal_type: "verdict_pattern_shift"
  effective_at: "2026-04-01"
  confidence: 0.75
  payload:
    pattern: "red_queen"
    affected_craft: "biz-idea"
    recommendation: "niche_migration_review"
  ```
- selection_events에 event_type='environment_signal' 기록

### 3. Niche Migration Recommendation
- 환경 신호 기반 Layer 2 변경 제안:
  - "biz-idea의 zero_to_one 프레임워크에서 keep ratio 하락 → blue_ocean 전환 검토"
  - specs/02 §1C Niche Migration Flow 트리거 조건 판정
- 사용자에게 Monthly Report로 제안 (자동 실행 아님)

### 4. Adaptive Slot Priority Update
- 환경 변화 감지 시 NK slot priority 재계산 트리거
- specs/02 §1A Slot Selection Procedure 재실행 제안
- E-70 (Adaptive Mutable Slot Selection) 런타임 지원

## Key Documents
- `evolution/specs/03_fitness_evaluation.md` §5 Red Queen
- `evolution/specs/02_evolution_runtime.md` §1C Niche Migration
- GenQuant `docs/specs/02_evolution_runtime.md` §4.11 DataSourceAdapter

## Output
- Environment signal records (selection_events)
- Monthly Report에 포함될 환경 분석 섹션
- Niche migration 제안서 (사용자 승인 필요)

## Backlog Coverage
신규 (GenQuant Gap #2: Environment Context 자동화 부재)

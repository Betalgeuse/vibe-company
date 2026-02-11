# evo-mutation-engine

## Role
NK slot mutation, crossover, Level 3 skeleton generation을 실제 코드로 구현하는 드로이드.
specs/02의 설계를 동작하는 Python/TypeScript 구현으로 변환한다.

## When to Use
- Phase 2: E-20 (NK mutation engine), E-23 (crossover), E-26 (origin-agnosticism)
- Phase 2: E-22 (Level 3 skeleton generation), E-25 (safety pipeline)
- NK 변이 + Level 3 병렬 실행 구조 구축 시

## Capabilities

### 1. NK Mutation Engine
- specs/02 §1.1 구현:
  - 5개 mutable_slots 중 1-2개 무작위 선택
  - range 내 ±10% 변이 (정수 ±1)
  - K-dependency 확인 + optional co-mutation
- Capability Registry guard(§1B) validate_mutation() 실행
- 결과 genome.yml 생성 (generation+1, parent_version 기록)

### 2. Crossover Engine
- specs/02 §1.2 구현:
  - 두 생존 Craft의 Layer 1 슬롯 조합
  - 무작위 또는 적합도 가중 교차점 선택
  - Layer 2 동일 환경 내에서만 교차 (invariant #4)
- 자식은 draft 상태로 진입

### 3. Level 3 LLM Skeleton Generation
- specs/02 §2.1-2.3 구현:
  - LLM에 기존 Craft genome + fitness 히스토리 제공
  - 완전히 새로운 프롬프트 구조 생성
  - Safety pipeline: structure validation → dry-run → candidate entry
  - No fast-track (5-sample gate 면제 없음)

### 4. Level 3 → NK Handoff
- specs/02 §2.4 구현:
  - 승격된 Level 3 skeleton의 Layer 1 파라미터를 NK 최적화 대상으로 전환
  - 새 NK slot assignment 실행 (§1A 6-step)

### 5. Simulation Sandbox (E-79)
- 과거 verdict 데이터 기반 100+ 세대 시뮬레이션
- Fitness 수렴 곡선 + 다양성 유지 검증
- Phase 2 진입 전 seed genome 도출

## Key Documents
- `evolution/specs/02_evolution_runtime.md` (전체)
- `evolution/specs/03_fitness_evaluation.md` §1 origin-agnosticism
- GenQuant `docs/specs/02_evolution_runtime.md` §4.5 evolution_engine.py

## Output
- Mutation/crossover/Level3 실행 코드
- 생성된 genome.yml (draft 상태)
- selection_events 기록 (mutate/crossover/spawn_variant)
- Simulation report (E-79)

## Backlog Coverage
E-20, E-22, E-23, E-25, E-26, E-27, E-60, E-79

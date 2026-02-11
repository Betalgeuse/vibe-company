# evo-genome-seeder

## Role
기존 active Craft들의 genome.yml + fitness.yml을 생성하고, DB에 seed하는 드로이드.
Craft 프롬프트를 분석하여 Layer 1/Layer 2 파라미터를 추출하고, NK slot 할당을 수행한다.

## When to Use
- Phase 0 구현: E-02 (genome.yml 생성), E-03 (fitness.yml 생성), E-06 (NK slot 할당)
- 새로운 Craft가 추가될 때
- Niche migration으로 Layer 2가 변경될 때

## Capabilities

### 1. Craft 분석 → genome.yml 생성
- `craft/{role}/{command}/` 하위의 command.md를 읽음
- 프롬프트에서 Layer 1 파라미터 후보 추출 (점수 가중치, threshold, 분석 깊이 등)
- Layer 2 파라미터 식별 (평가 프레임워크, 페르소나, 지식 소스, 출력 템플릿)
- specs/01 genome.yml Full Schema 형식으로 생성

### 2. NK Slot 할당
- specs/02 §1A Slot Selection Procedure 실행
- 추출된 Layer 1 파라미터 중 range가 넓은 5개를 mutable_slots로 선정
- K=2 dependency 할당 (의미적 연관 기반)
- Capability Registry(hot_mutable/frozen/immutable) 동시 생성

### 3. fitness.yml 생성
- 초기 baseline: fitness_score=50, sample_count=0
- lifecycle status=craft (기존 운영 중 Craft이므로)
- Red Queen metrics 초기화

### 4. DB Seed
- genome.yml → evolution.craft_genomes INSERT
- genome_data JSONB에 전체 genome.yml 내용 저장
- founder genome (parent_version=null, generation=1)

## Key Documents
- `evolution/specs/01_schema_contract.md` §3 genome.yml/fitness.yml
- `evolution/specs/02_evolution_runtime.md` §1A Slot Selection, §1B Capability Registry
- `craft/` 디렉토리 (분석 대상)

## Output
- `craft/{role}/{command}/{version}/genome.yml`
- `craft/{role}/{command}/{version}/fitness.yml`
- craft_genomes INSERT 실행 로그

## Backlog Coverage
E-02, E-03, E-06

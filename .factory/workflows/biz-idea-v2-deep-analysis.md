# Biz-Idea Pipeline V2: Deep Analysis

**Purpose**: 1인 기업 신사업 아이디어 발굴 및 **실행 가능 수준** 검증

**V1 → V2 Changes**:
- ✅ B2C 기술 검증 추가 (VLA 필요성, 재료 선택)
- ✅ Supply chain 분석 추가 (하청 구조, 레퍼런스 경로)
- ✅ 빠른 exit 전략 추가 (볼트온, cross-domain M&A)
- ✅ "Discovery call" naive plan 제거

---

## Execution Flow

### Step 0: Input Parsing & Pre-Validation

**Input**: User's business idea or domain

**Actions**:
```yaml
parse_input:
  - Extract: Domain, B2B/B2C, Target market, Tech requirements
  - Flag keywords: "Physical AI", "Dubai Cookie", "대기업 고객", "VLA 데이터"
  
pre_validation:
  - [ ] Global-first? (한국만 타겟 = REJECT)
  - [ ] ARR $150K+ possible?
  - [ ] 전문가 의존도 체크 (세무/법률/의료 = REJECT)
```

**Output**: Validated input → Proceed to Step 1

---

### 🆕 Step 0.5: Agent Failure Handling (V2.1)

**Problem**: Task agents often fail with "No output"

**Solution**: Fallback to direct research

```yaml
agent_failure_protocol:
  
  detection:
    - IF Task agent returns "No output" or error
    - IF response is truncated/incomplete
  
  fallback_actions:
    step_1_market_research:
      primary: "Run @agents in parallel"
      fallback: |
        IF agents fail:
        1. Direct WebSearch: "[Business idea] market size"
        2. Direct WebSearch: "[Business idea] competitors"
        3. Direct WebSearch: "[Key company mentioned] official site"
        4. Synthesize results manually
        
    step_2_mvp_design:
      primary: "@opus-solo-founder-mvp-architect"
      fallback: |
        IF agent fails:
        1. Use previous results
        2. Apply V2 enhancements manually
        
  quality_check:
    - Minimum 3 WebSearch results per key claim
    - Verify all company names with official URLs
```

---

### Step 1: Market Research (병렬 3 agents)

#### Agent 1: @niche-market-hunter
**Focus**: 시장 기회 크기 + ICP

**Output**:
- TAM/SAM/SOM
- Target customers (구체적 회사명 3-5개)
- Pricing estimate

#### Agent 2: @reference-scout
**Focus**: 글로벌 경쟁사 분석

**Output**:
- Top 10+ 경쟁사
- Copy vs Differentiate
- REJECT 조건 체크

#### Agent 3 (NEW): @supply-chain-mapper
**Trigger**: IF B2B + 대기업 target
**Focus**: 하청 구조 + 레퍼런스 경로

**Output**:
- Tier 1-4 supply chain map
- 접근 가능한 첫 고객 (Tier 4 스타트업 3-5개)
- Bottom-up 레퍼런스 빌딩 로드맵

**Fan-in**: Merge 3개 agent outputs → `market-research-synthesis.md`

---

### Step 1.5 (NEW): Technical Feasibility (B2C only)

**Trigger**: IF B2C Physical Product (예: Dubai Cookie)

#### Agent 4 (NEW): @technical-feasibility-validator-b2c
**Focus**: 기술 과잉 방지

**Critical Questions**:
- [ ] VLA 데이터가 정말 필요한가? (vs 토크 센서)
- [ ] 비전 시스템 필요한가? (vs 비비전)
- [ ] 재료 선택 타당한가? (비뉴턴 vs 강체)
- [ ] 디저트가 최적 카테고리인가? (PMF 검증)
- [ ] MVP 복잡도 <30점? (1인 6개월 가능)

**Output**: 
- Technical feasibility report
- Alternative recommendations (더 쉬운 방법)
- REJECT 권고 (복잡도 >40점)

**Quality Gate**:
```yaml
pass_criteria:
  - MVP 복잡도 <30점
  - VLA/비전 필요성 justified
  - PMF 명확 (고객이 원함)
  
fail_action:
  - IF 복잡도 >40: REJECT
  - IF 30-40: Provide alternative (더 쉬운 재료/방법)
```

---

### Step 2: MVP Design

#### Agent 5: @opus-solo-founder-mvp-architect
**Input**: 
- Market research synthesis
- Technical feasibility (if B2C)
- Supply chain map (if B2B)

**Enhanced Instructions** (V2):
```yaml
b2b_specific:
  - 바로 대기업 X → Tier 4 먼저 공략
  - Discovery call 의존 X → Bottom-up 레퍼런스 경로
  - 예: "TYM에게 바로" → "TYM 하청 스타트업 3개 먼저"
  
b2c_specific:
  - Technical feasibility report 반영
  - 더 쉬운 alternative 우선 (강체 > 비뉴턴)
  - 센서만으로 충분하면 VLA 제거
```

**Output**: MVP design with:
- Product spec (기술적 타당성 검증된)
- Go-to-market (supply chain 고려된)
- Cost estimate
- **레퍼런스 빌딩 경로 포함** (Tier 4 → 3 → 2)

**Quality Gate**:
```yaml
completeness_threshold: 0.8
required_sections:
  - Product spec
  - Differentiation (글로벌 니치)
  - Automation strategy (80%+)
  - **Reference building path** (NEW)
  - **Realistic timeline** (12-18mo sales cycle 반영)
  
on_fail: Retry with feedback
```

---

### Step 2.5 (NEW): Acquisition Path Design

#### Agent 6 (NEW): @acquisition-path-designer
**Focus**: 18-24개월 빠른 exit 경로

**Actions**:
1. **Acquirer shortlist** (구체적 회사 5개)
   - Naive X: "Scale AI가 인수"
   - Realistic ✓: "Atria AI (80%), Boston Dynamics (70%), PE Roll-up (60%)"

2. **볼트온 분석**
   - 대기업 M&A 이력 (최근 3년)
   - 인수 기업의 독립성 (High = 볼트온 가능성 높음)
   - 타이밍: 인수 후 1-2년차 = **지금**

3. **Cross-domain M&A**
   - K-beauty 볼트온 전략
   - Agriculture automation
   - PE roll-up

4. **12-Month Roadmap** (역산)
   ```
   Month 12: Acquisition ($5M-20M)
     ↑
   Month 9: 레퍼런스 2-3개
     ↑
   Month 6: Acquirer CTO meeting
     ↑
   Month 3: Tier 4 pilot
   ```

**Output**:
- Acquirer shortlist (5개, 확률 포함)
- Bolt-on timing 분석
- 12-month roadmap (역산)
- Cross-domain pivot options

---

### Step 2.75 (NEW): Fact-Check Gate

**Purpose**: Critic이 공격하기 전 basic facts 검증

**Actions**:
```yaml
fact_check:
  trigger: "BEFORE Round 1 critique"
  
  basic_facts_to_verify:
    - "Mentioned companies exist? (WebSearch)"
    - "Market size numbers real? (Source check)"
    - "Technologies mentioned valid? (Quick research)"
  
  method:
    - Use WebSearch for each company/org mentioned
    - Verify URLs exist
    - Check basic legitimacy
  
  output:
    verified_facts:
      - "[Fact]: VERIFIED (source)"
      - "[Fact]: UNVERIFIED (no source found)"
      - "[Fact]: FALSE (contradicting evidence)"
  
  quality_gate:
    - IF >50% facts UNVERIFIED → Flag to critic
    - IF any fact FALSE → Immediate feedback to Opus
```

**Example**:
```yaml
fact_check_example:
  claim: "TYM AI² Consortium (30+ members)"
  action: "WebSearch: 'TYM AI² Consortium'"
  result: "✅ VERIFIED - https://group.tym.world/en/all-latest-news/launch-1st-korea-ai2-consortium"
  status: "Consortium exists (10+ members confirmed, not 30+)"
```

---

### Step 3: Validation Loop (3 Rounds)

#### Round 1: Critic Attack

**Agent**: @codex-devils-advocate-validator

**⚠️ NEW Rule: Evidence-Based Critique Only**

**Critic MUST**:
1. Receive fact-check report BEFORE attacking
2. Only attack UNVERIFIED or FALSE facts
3. For VERIFIED facts, attack execution/feasibility (not existence)

**Enhanced Attacks** (V2):
```yaml
technical_attacks:
  - "VLA 필요 없는데 왜 VLA?"
  - "비뉴턴 액체 왜 선택? 강체가 2배 쉬운데?"
  - "디저트가 최선? PMF 증거는?"
  
supply_chain_attacks:
  - "바로 Hyundai에게? 어떻게 접근?"
  - "Discovery call만 의지? Tier 4 경로는?"
  - "레퍼런스 어떻게 쌓을 건데?"
  
acquisition_attacks:
  - "Scale AI가 인수? 왜?"
  - "볼트온 타이밍 맞나?"
  - "Cross-domain 가능성은?"
```

**Output**: 
- Score (typically 40-60/100)
- 7-10 critical weaknesses
- Evidence requirements

#### Round 2: Defender Response

**Agent**: @opus-solo-founder-mvp-architect (defense mode)

**Enhanced Defense** (V2):
```yaml
technical_defense:
  - Cite: @technical-feasibility-validator report
  - Show: "VLA 불필요 → 센서만 사용"
  - Show: "비뉴턴 → 강체 pivot (복잡도 -15점)"
  
supply_chain_defense:
  - Cite: @supply-chain-mapper report
  - Show: "Tier 4 스타트업 5개 식별"
  - Show: "Bottom-up 로드맵 (3-6-12개월)"
  
acquisition_defense:
  - Cite: @acquisition-path-designer report
  - Show: "Atria AI 80% (볼트온 타이밍)"
  - Show: "K-beauty pivot 가능 (60%)"
```

**Output**:
- Revised business plan
- Evidence-based defense
- Honest concessions

#### Round 3: Final Verdict

**Agent**: @codex-devils-advocate-validator

**Enhanced Scoring** (V2):
```yaml
score_categories:
  hypothesis_robustness: /30
    - Technical feasibility (B2C)
    - Supply chain realism (B2B)
    - Acquisition path (exit)
    
  evidence_quality: /25
    - Technical validation data
    - Tier 4 customer list
    - Acquirer shortlist with 확률
    
  feasibility: /25
    - MVP 복잡도 <30점
    - 1인 + automation 80%+
    - 레퍼런스 경로 realistic
    
  value_clarity: /20
    - 고객 가치 명확
    - Vision 연결
```

**Exit Conditions**:
```yaml
pass: "score >= 85 AND no_critical_unresolved"
  → Save to /Users/zayden/Documents/assets/idea-{project-name}.md
  
conditional: "60 <= score < 85 AND phase_0_plan_exists"
  → Proceed to Phase 0 validation (3 months)
  
reject: "score < 60 OR critical_unresolved"
  → Log failure reason, restart with pivot
```

---

## Adaptive Parameters

```yaml
initial_temperature: 0.3
retry_temperature_decay: 0.1
min_temperature: 0.05

completeness_threshold: 0.8
max_retries: 3

# V2 New
technical_feasibility_threshold: 30  # MVP 복잡도
supply_chain_depth: 4  # Tier 1-4
acquisition_shortlist_min: 3  # 최소 인수 후보
```

---

## Success Criteria (V2)

### PASS (Score ≥85)
```yaml
requirements:
  technical:
    - [ ] MVP 복잡도 <30점 (if B2C)
    - [ ] VLA 필요성 justified OR removed
    - [ ] 재료 선택 타당 (강체 우선)
    
  supply_chain:
    - [ ] Tier 4 고객 3-5개 식별 (if B2B)
    - [ ] Bottom-up 레퍼런스 경로 명확
    - [ ] "Discovery call만" 의존 제거
    
  acquisition:
    - [ ] Acquirer shortlist 3-5개 (확률 포함)
    - [ ] 볼트온 타이밍 분석
    - [ ] Cross-domain pivot 가능
    
  execution:
    - [ ] 12-month roadmap (역산)
    - [ ] Realistic timeline (12-18mo sales cycle)
    - [ ] Phase 0 validation gate
```

### CONDITIONAL (60-84)
```yaml
requirements:
  - [ ] Phase 0 validation plan (3 months)
  - [ ] Kill switches 명확
  - [ ] Pivot options 2+개
  
proceed_to:
  - Phase 0 (network building, technical prototype)
  - IF Phase 0 fails → STOP
```

### REJECT (<60)
```yaml
reasons:
  - MVP 복잡도 >40점 (기술 과잉)
  - 공급망 접근 불가능 (no Tier 4)
  - 인수 경로 없음 (naive "누군가 인수")
  - 한국만 타겟
  - 전문가 의존도 높음
```

---

## Output Structure

```
/Users/zayden/Documents/assets/biz-idea/{project-name}/

research-outputs/
├── 01-market-opportunity-analysis.md (niche-market-hunter)
├── 02-competitive-landscape.md (reference-scout)
├── 03-supply-chain-map.md (supply-chain-mapper) ← NEW
├── 04-technical-feasibility.md (technical-validator, if B2C) ← NEW
├── 05-mvp-design.md (opus-solo-founder)
├── 06-acquisition-path.md (acquisition-path-designer) ← NEW
├── ROUND1-CRITIQUE.md
├── ROUND2-DEFENSE.md
├── ROUND3-FINAL-VERDICT.md
└── INTEGRATED-BUSINESS-PLAN.md

if PASS:
  → /Users/zayden/Documents/assets/idea-{project-name}.md
  
if CONDITIONAL:
  → /Users/zayden/Documents/assets/biz-idea/{project-name}/PHASE0-PLAN.md
```

---

## V1 vs V2 Comparison

| Aspect | V1 (Old) | V2 (New) |
|--------|----------|----------|
| **B2C 기술 검증** | ❌ 없음 | ✅ technical-feasibility-validator |
| **VLA 필요성** | 가정 | ✅ 검증 (vs 센서) |
| **재료 선택** | 가정 | ✅ 검증 (비뉴턴 vs 강체) |
| **Supply Chain** | "대기업 접근" | ✅ Tier 1-4 매핑 |
| **레퍼런스 경로** | "Discovery call" | ✅ Bottom-up (Tier 4 → 3 → 2) |
| **Exit 전략** | "Scale AI 인수" | ✅ 볼트온 분석 (Atria AI 80%) |
| **Cross-domain** | ❌ 없음 | ✅ K-beauty, Agriculture pivot |
| **Timeline** | 비현실적 ($150K Year 1) | ✅ Realistic (12-18mo cycle) |

---

## Critical Improvements (사용자 피드백 반영)

### 1. B2C 기술 과잉 방지
**Before**: "Dubai Cookie = VLA + 비전 데이터"
**After**: "VLA 필요 없음. 토크 센서 + PID 충분. 복잡도 -15점."

### 2. 재료 선택 검증
**Before**: "비뉴턴 액체 (쿠키)"
**After**: "강체 (아이스크림) 권장. 2배 쉬움. MVP 난이도 34 → 16점."

### 3. 디저트 적합성
**Before**: "디저트 = 고마진"
**After**: "PMF 검증 필요. Juice Bar 같은 대안 검토."

### 4. B2B Supply Chain
**Before**: "TYM에게 바로 접근"
**After**: "TYM 하청 스타트업 3-5개 먼저. Tier 4 → 3 → 2 순서."

### 5. 레퍼런스 경로
**Before**: "Discovery call 요청"
**After**: "Tier 4 pilot → Tier 3 소개 → Tier 2 escalation (6-12-18개월)"

### 6. Exit 전략
**Before**: "18개월 후 Scale AI 인수"
**After**: "Atria AI (인수 후 1-2년차) 볼트온 80% 확률. K-beauty pivot 60%."

---

## 🚀 Ready to Execute

**Usage**:
```yaml
system_notification:
  command: "biz-idea-v2"
  workflow: "biz-idea-v2-deep-analysis"
  input: "[User's business idea or domain]"
```

**Expected Outcome**:
- V1보다 20-30점 높은 score (더 realistic)
- 기술 과잉 제거 (VLA → 센서)
- 접근 가능한 첫 고객 (Tier 4 구체적)
- 빠른 exit 경로 (볼트온 타이밍)

---

*V2 Created: 2026-01-10*  
*Based on: Physical AI case study feedback*  
*Key Changes: Technical validation, Supply chain mapping, Acquisition path*

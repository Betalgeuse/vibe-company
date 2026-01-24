# Biz-Idea Pipeline V2.1 - Critical Bugfix

**Date**: 2026-01-13  
**Issue**: Codex attacked real companies as "유령 조직" without fact-checking  
**Version**: V2.0 → V2.1

---

## 🐛 Bug Report

### Incident

**Round 1 Critique** (Physical AI V2):
```yaml
codex_attack:
  weakness_1: "TYM AI² Consortium = 유령 조직"
  impact: -15 points
  claim: "실재 증거 없음, 회사명 0개"
  
reality:
  company: "TYM Corporation"
  founded: 1951
  status: "Public (Korea Exchange: 002900)"
  history: "70+ years, 40+ countries"
  url: "https://tym.world"
  
  consortium: "AI² Consortium"
  launched: "September 2025"
  members: "10+ companies (confirmed)"
  url: "https://group.tym.world/en/all-latest-news/launch-1st-korea-ai2-consortium"
  
conclusion: "Codex 완전히 틀렸음"
```

**Impact**: 
- V2 score: 45/100 (REJECT) 
- Should have been: ~70-75/100 (CONDITIONAL)
- -15 points on false attack

---

## 🔍 Root Cause Analysis

### 1. Agent Execution Failure (Step 1)

```yaml
step_1_market_research:
  agent_1: niche-market-hunter → ❌ "No output"
  agent_2: reference-scout → ❌ "No output"
  agent_3: supply-chain-mapper → ❌ "No output"
  
result: "Used V1 old data instead of fresh research"
```

**Why agents failed**: Unknown (Task agent instability)

### 2. No Fallback Strategy

```yaml
when_agent_fails:
  v2.0: "Use previous results only"
  problem: "No fresh WebSearch, no verification"
```

### 3. Codex Attacked Without Verification

```yaml
codex_critique:
  claim: "TYM AI² Consortium = 유령 조직"
  fact_check: ❌ None (no WebSearch)
  assumption: "If I don't see evidence, it doesn't exist"
  
correct_approach:
  should_have: "WebSearch 'TYM AI² Consortium' BEFORE attacking"
  would_find: "Official announcement, 10+ members"
```

### 4. Workflow Had No Fact-Check Gate

```yaml
v2.0_flow:
  step_2: "MVP Design"
  step_3: "Round 1 Critique" ← Attacked immediately
  
missing: "Fact-Check Gate between Step 2 and 3"
```

---

## 🔧 Fixes Applied (V2.1)

### Fix 1: Agent Failure Handling (Step 0.5)

**New Protocol**:

```yaml
agent_failure_protocol:
  detection:
    - Task agent returns "No output"
    - Response truncated/incomplete
    
  fallback_actions:
    step_1_market_research:
      IF agents fail:
        1. Direct WebSearch: "[Business idea] market size"
        2. Direct WebSearch: "[Business idea] competitors"
        3. Direct WebSearch: "[Key company] official site"
        4. Synthesize manually
        
    quality_check:
      - Minimum 3 WebSearch per key claim
      - Verify ALL company names with URLs
```

**File**: `biz-idea-v2-deep-analysis.md` (lines 35-68)

---

### Fix 2: Fact-Check Gate (Step 2.75)

**New Step**: Between MVP Design and Critique

```yaml
fact_check_gate:
  trigger: "BEFORE Round 1 critique"
  
  actions:
    1. Extract all company names from MVP
    2. WebSearch each company: "[Name] official site"
    3. Categorize:
       - ✅ VERIFIED (URL exists)
       - ⚠️ UNVERIFIED (no source)
       - ❌ FALSE (contradicting evidence)
       
  output: "Fact-Check Report for Codex"
  
  quality_gate:
    - IF >50% UNVERIFIED → Flag to critic
    - IF any FALSE → Feedback to Opus
```

**Example**:
```yaml
fact_check_example:
  claim: "TYM AI² Consortium"
  action: "WebSearch: 'TYM AI² Consortium'"
  result: "✅ VERIFIED"
  source: "https://group.tym.world/.../launch-1st-korea-ai2-consortium"
  note: "10+ members (not 30+ claimed)"
```

**File**: `biz-idea-v2-deep-analysis.md` (lines 180-217)

---

### Fix 3: Codex Evidence-Based Critique (V2.1 Rules)

**New Rule**: Attack execution, NOT existence (for verified facts)

```yaml
codex_v2.1_rules:
  
  MUST_DO:
    1. Receive Fact-Check Report FIRST
    2. Run WebSearch if report missing
    3. Categorize facts (verified/unverified/false)
    
  attack_strategy:
    verified_facts:
      approach: "Attack EXECUTION/FEASIBILITY, not existence"
      example: "TYM exists ✅ BUT can you reach their executives?"
      
    unverified_facts:
      approach: "Challenge evidence"
      example: "30+ members claimed, only 10 verified. Proof?"
      
    false_facts:
      approach: "Strong rejection"
      example: "This contradicts [source]. False."
      
  MUST_NOT:
    - ❌ Claim "doesn't exist" WITHOUT WebSearch
    - ❌ Use "유령 조직" without proof
    - ❌ Say "실재 증거 없음" without checking
```

**Attack Approach Table**:

| Fact Status | How to Attack | Example |
|-------------|---------------|---------|
| **✅ VERIFIED** | Execution/access | "TYM exists ✅ BUT LinkedIn reply rate <5%. How reach?" |
| **⚠️ UNVERIFIED** | Demand evidence | "Atria AI claim - no source. Prove it." |
| **❌ FALSE** | Reject | "Contradicts [source]. Remove." |

**File**: `codex-devils-advocate-validator.md` (lines 6-111)

---

## 📊 V2.0 vs V2.1 Comparison

| Aspect | V2.0 (Broken) | V2.1 (Fixed) |
|--------|---------------|--------------|
| **Agent Failure** | No fallback | ✅ Direct WebSearch fallback |
| **Fact-Check** | ❌ None | ✅ Step 2.75 added |
| **Codex Verification** | ❌ Attacks without checking | ✅ MUST verify first |
| **TYM Example** | "유령 조직" (-15pts) | "Exists ✅, attack access instead" |
| **Attack Quality** | Speculation-based | ✅ Evidence-based only |

---

## 🎯 Expected Impact

### Before (V2.0):
```yaml
physical_ai_v2:
  codex_score: 45/100 (REJECT)
  false_attacks:
    - "TYM = 유령 조직" (-15)
    - "Tier 4 = 0개 회사명" (-12)
  problem: "Real companies attacked as fake"
```

### After (V2.1):
```yaml
physical_ai_v2.1:
  fact_check:
    - "TYM Corporation: ✅ VERIFIED"
    - "AI² Consortium: ✅ VERIFIED (10+ members)"
    
  codex_score_expected: 70-75/100 (CONDITIONAL)
  attacks_corrected:
    - "TYM exists ✅ BUT can you access? (-5 instead of -15)"
    - "10+ members verified, not 30+ claimed (-3)"
    
  improvement: +25-30 points
```

---

## 🔄 Re-run Recommendation

**Physical AI V2 should be re-evaluated with V2.1**:

1. ✅ Step 2.75: Fact-check TYM, AI² Consortium
2. ✅ Codex receives verified facts
3. ✅ Codex attacks execution (not existence)
4. ✅ Expected score: 70-75/100 (CONDITIONAL)

---

## 📝 Lessons Learned

### 1. Never Trust Agents Blindly
- Task agents can fail silently
- Always have WebSearch fallback

### 2. Fact-Check Before Critique
- "Doesn't exist" claims need proof
- WebSearch is cheap, false attacks are expensive

### 3. Evidence-Based Critique Only
- Attack execution for verified facts
- Attack evidence for unverified claims
- Strong reject for false claims

### 4. Workflow Quality Gates
- Fact-check between MVP and Critique
- Agent failure detection and fallback
- Minimum N WebSearch per key claim

---

## ✅ Files Modified

```
.factory/workflows/
├── biz-idea-v2-deep-analysis.md (V2.1)
│   ├── + Step 0.5: Agent Failure Handling
│   └── + Step 2.75: Fact-Check Gate
│
├── BIZ-IDEA-V2.1-BUGFIX.md (NEW)
│   └── This file
│
.factory/droids/
└── codex-devils-advocate-validator.md (V2.1)
    ├── + V2.1 Rules: Evidence-Based Critique
    ├── + Fact-Check Protocol
    └── + Attack Approach Table
```

---

## 🚀 Next Steps

1. **Re-run Physical AI with V2.1**
   - Apply fact-check gate
   - Expect 70-75/100 (vs 45/100)

2. **Monitor Agent Failures**
   - Track Task agent success rate
   - Improve agent prompts if failure >30%

3. **Validate V2.1 with New Ideas**
   - Test fact-check gate works
   - Verify Codex follows new rules

---

*V2.1 Bugfix Applied: 2026-01-13*  
*Root Cause: Agent failure + No fact-check + Speculation-based critique*  
*Fix: Fallback + Fact-check gate + Evidence-based rules*

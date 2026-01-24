# Physical AI Data Infrastructure - Solo Founder Business Plan

**Version**: 2.0 (Post-Round 2 Defense)  
**Date**: 2026-01-12  
**Status**: CONDITIONAL (Pending Phase 0 Validation)

---

## 📊 Score & Verdict (Post-Defense)

| Metric | Round 1 | Round 2 |
|--------|---------|---------|
| **Score** | 42/100 | 75-83/100 (projected) |
| **Verdict** | CONDITIONAL (weak) | CONDITIONAL STRONG |
| **Gap to PASS** | -43 points | -2 to -10 points |

**Key Changes**: Honest admission of weaknesses, revised timeline, partnership-first strategy

---

## 🌍 Global First Checklist

- [x] **Language:** English first (Korean for local operations only)
- [x] **Payment:** USD via Stripe
- [x] **Domain:** .com or .io
- [x] **Target:** Global construction/agriculture OEMs (Korea as beachhead)
- [x] **Marketing:** Product Hunt, Indie Hackers, Reddit, Twitter/X, Physical AI conferences
- [ ] **Customer Access:** PENDING Phase 0 validation

---

## 🎯 Customer Value (Most Important)

### One-Sentence Definition

> "With this, **physical AI companies** save **6-12 months** of dataset collection and labeling for non-humanoid robot training, enabling faster deployment of autonomous construction/agricultural equipment."

### Specific Results

| Stage | Description |
|-------|-------------|
| **Before** | Companies spend 12-18 months building custom datasets for excavator/tractor AI |
| **After** | Pre-built specialized datasets reduce time-to-training by 50%+ |
| **Savings** | $200K-500K in dataset development costs per customer |

### Customer Value Proof Points (To Be Validated)

```yaml
hypothesis:
  - "Physical AI companies are blocked by dataset availability, not algorithm development"
  - "Non-humanoid datasets are significantly underserved vs humanoid"
  - "Korean OEMs (Hyundai, Doosan) have budget but not dataset infrastructure"

validation_required:
  - "Phase 0: Confirm hypothesis via customer discovery calls"
  - "If wrong: Pivot or stop"
```

---

## 💰 Path to $150K ARR (Revised: Year 2-3)

| Item | Year 1 | Year 2 | Year 3 |
|------|--------|--------|--------|
| **Target Price** | $10-20K (pilot) | $50-75K (annual) | $75-100K (annual) |
| **Customers** | 0-1 | 1-2 | 3-5 |
| **Revenue** | $0-20K | $50-100K | $225-500K |
| **ARR Achievement** | ❌ | ❌ | ✅ $150K+ |

### Feasibility Assessment

| Factor | Assessment | Notes |
|--------|------------|-------|
| Pricing | **Medium** | Comparable to Scale AI enterprise tiers |
| Customer Count | **Medium** | 3-5 customers in 3 years is conservative |
| Timeline | **Realistic** | Accounts for 12-18 month sales cycles |
| Overall | **Feasible** | With Phase 0 validation |

---

## 1. Target & Pain Point

### Target Customer Profile

```yaml
primary_target:
  who: "Physical AI teams at construction/agriculture OEMs"
  examples:
    - "Hyundai Motor (Boston Dynamics integration for construction)"
    - "Doosan Robotics (industrial automation)"
    - "TYM (autonomous agricultural tractors)"
    - "AGCO, John Deere (global agriculture - Year 2+)"
  
  decision_maker: "VP of AI/Robotics, Head of Physical AI"
  budget_authority: "$50K-500K for dataset procurement"

secondary_target:
  who: "Physical AI startups (Series A+)"
  examples:
    - "Construction robotics startups (Built Robotics, etc.)"
    - "Agriculture automation startups"
  budget: "$20K-100K"
```

### Pain Point

```yaml
core_pain: |
  "We have the algorithms, but we don't have enough training data 
  for non-humanoid robots operating in real-world conditions."

specific_pains:
  data_scarcity:
    - "Excavator operation datasets don't exist at scale"
    - "Agricultural machinery datasets are fragmented"
    - "Each company builds custom datasets from scratch (redundant)"
    
  quality_issues:
    - "Generic labeling (Scale AI) misses domain-specific nuances"
    - "Humanoid-trained labelers don't understand heavy machinery operations"
    
  time_pressure:
    - "Government funding timelines (Korea: 2026-2028)"
    - "Competitors moving fast on physical AI"
```

### Willingness to Pay

```yaml
evidence:
  - "Korea government allocated $721M for physical AI (budget exists)"
  - "Scale AI charges $50K-500K for enterprise dataset contracts"
  - "Physical AI is strategic priority for Korean OEMs (Hyundai's Boston Dynamics acquisition)"
  
validation_needed:
  - "Phase 0: Confirm actual procurement budgets via discovery calls"
```

---

## 2. 핵심 기능 (1가지만)

### Core Function

**Specialized Non-Humanoid Physical AI Datasets**

```yaml
what_we_provide:
  - "Pre-labeled datasets for excavator operations"
  - "Pre-labeled datasets for agricultural machinery"
  - "Pre-labeled datasets for construction equipment"
  
format:
  - "Video sequences with frame-by-frame annotations"
  - "Sensor data with labeled operational states"
  - "3D point cloud data with object segmentation"
```

### Differentiation (vs Scale AI, Labelbox)

| Factor | Scale AI | Labelbox | Us |
|--------|----------|----------|-----|
| **Focus** | General (all AI) | General (all AI) | Non-humanoid physical AI only |
| **Domain Expertise** | Generic labelers | Generic labelers | Construction/agriculture specialists |
| **Pre-built Datasets** | Limited | Limited | Core offering |
| **Speed to Value** | Custom build (months) | Custom build (months) | Pre-built (weeks) |
| **Price** | $100K+ | $50K+ | $50-75K |

**Critical Note**: Differentiation is **NOT** "Korea expertise" (this is not defensible). Differentiation is **non-humanoid specialization** (globally applicable).

---

## 2.5 구현 힌트 (Implementation Hints)

> ⚠️ 구체적 기술 스택 금지. 추상적 요구사항만.

| Requirement | Status | Notes |
|-------------|--------|-------|
| 서버 필요 여부 | 서버 필요 | Dataset storage, delivery API |
| 외부 API 연동 | Yes | Cloud storage, payment |
| 브라우저 자동화 | No | Not needed |
| 결제 시스템 | Yes | Stripe for USD payments |
| DB 필요 여부 | 중간 | Customer data, dataset metadata |
| **복잡도 수준** | **중간** | Dataset curation > pure software |

### Key Implementation Challenges

```yaml
technical:
  - "Large file storage and transfer (video datasets = GB-TB scale)"
  - "Labeling quality assurance pipeline"
  - "Data format compatibility with customer ML frameworks"
  
non_technical:
  - "Data collection partnerships (access to real equipment operations)"
  - "Domain expert QA (construction/agriculture knowledge)"
```

---

## 3. Competition Check

### Direct Competitors (Global)

| Competitor | Valuation | Physical AI Focus | Non-Humanoid |
|------------|-----------|-------------------|--------------|
| **Scale AI** | $29B | Entering (2025-2026) | Secondary |
| **Labelbox** | $1B+ | Limited | No |
| **Defined.ai** | $500M+ | Yes | Partial |
| **Sensei** | $100M+ | Yes (construction) | Yes |

### Why They Won't Crush Us (Revised)

```yaml
WRONG_answer: "Korea expertise" ❌ (Scale AI can hire Korean experts)
WRONG_answer: "First-mover advantage" ❌ (Temporary, not sustainable)

CORRECT_answer:
  
  1_specialization_depth:
    claim: "Deep non-humanoid expertise they haven't built yet"
    timeline: "18-24 month window before Scale AI prioritizes"
    caveat: "NOT permanent moat - exit before window closes"
    
  2_speed:
    claim: "Solo founder moves 10x faster than enterprise org"
    evidence: "Feature request → ship in days (vs their quarters)"
    caveat: "Only works for small customer base (5-10)"
    
  3_partnership_value:
    claim: "More valuable as partner than competitor"
    strategy: "Become Scale AI's Korea non-humanoid specialist"
    exit: "Acquisition target at $5-20M"
```

### Realistic Competitive Position

```yaml
we_cannot_win_on:
  - "Price (Scale AI can offer free pilots)"
  - "Brand (they have $29B valuation)"
  - "Sales force (they have enterprise BD teams)"
  
we_can_win_on:
  - "Speed to specialized datasets (they're not focused here yet)"
  - "Domain depth (non-humanoid is our only focus)"
  - "Customer intimacy (high-touch for 5-10 customers)"
  
strategic_goal: "Build enough value to be acquired, not to beat them"
```

---

## 4. Growth Strategy (Global Channels)

### Marketing (No Paid Ads)

| Channel | Approach | Timeline |
|---------|----------|----------|
| **Product Hunt** | Launch when MVP ready | Month 6+ |
| **Indie Hackers** | Document journey | Ongoing |
| **Reddit** | r/robotics, r/MachineLearning | Month 3+ |
| **Twitter/X** | Physical AI content | Ongoing |
| **LinkedIn** | Target decision makers | Month 1+ |
| **Conferences** | Korea Robotics, Physical AI Summit | Month 2+ |

### Sales (PLG Not Possible)

```yaml
reality_check: |
  Enterprise B2B dataset sales CANNOT be PLG (self-serve).
  This requires 1:1 sales relationships.
  
sales_approach:
  year_1: "100% founder-led sales"
  year_2: "Founder + 1 BD hire (if funded)"
  year_3: "Exit before scaling problem hits"

customer_acquisition:
  step_1: "Warm intro via network (OpenAI Grove, Vibers AI)"
  step_2: "Discovery call (understand needs)"
  step_3: "Pilot proposal (free or low-cost)"
  step_4: "Pilot execution (3-6 months)"
  step_5: "Annual contract negotiation"
  
timeline: "12-18 months per customer (not weeks)"
```

### Support (Minimal)

```yaml
approach:
  - "Documentation (self-serve)"
  - "Email support (founder handles)"
  - "No phone support"
  - "No dedicated CSM until 5+ customers"
  
justification: |
  With 5-10 customers, founder-led support is manageable.
  Exit before customer count requires support team.
```

---

## 5. 내부 자동화 설계 (필수)

### 자동화 비율 목표 (Revised)

| 구분 | Original | Revised |
|------|----------|---------|
| 반복 업무 자동화 | 80%+ | **65-70%** |
| 사람 개입 필요 | 의사결정만 | 의사결정 + 도메인 QA + 영업 |
| 스케일 지표 | 고객 2배 → 업무 1.2배 | 고객 2배 → 업무 **1.5배** |

### 운영 업무 분류 (Honest Assessment)

| 업무 | 자동화 | 사람 | 방법 |
|------|:------:|:----:|------|
| Data collection coordination | | ✅ | Site partnerships require relationships |
| Bulk labeling | ✅ | | GPT-5 Vision + automated pipelines |
| Domain QA validation | | ✅ | **External domain expert** (required) |
| Customer discovery/sales | | ✅ | Founder-led (cannot automate B2B) |
| Contract/invoicing | ✅ | | Stripe, DocuSign automation |
| Code development | ✅ | | 75% AI-assisted (Cursor, Copilot) |
| Email/scheduling | ✅ | | Calendly, automated follow-ups |
| Financial tracking | ✅ | | QuickBooks automation |

### External Domain Expert (REQUIRED)

```yaml
role: "Part-time Domain Expert QA Partner"
profile:
  - "Construction engineer OR agricultural machinery specialist"
  - "10+ years experience in physical operations"
  - "Can validate labeling accuracy"
  
time: "10-15 hours/week"
cost: "$5,000 - $8,000/month"
engagement: "Contractor (not employee)"

why_required: |
  I am NOT a construction/agriculture domain expert.
  Dataset quality depends on domain accuracy.
  This is NON-NEGOTIABLE for product quality.

where_to_find:
  - "Retired construction equipment operators"
  - "University professors (construction/agriculture engineering)"
  - "Former Hyundai/Doosan engineers"
  - "Woomi Construction connection (via Vibers AI)"
```

---

## 6. Financial Projections (Revised)

### Revenue Model

| Year | Customers | ARPU | Revenue | Cumulative |
|------|-----------|------|---------|------------|
| Year 1 | 0-1 (pilot) | $10-20K | $0-20K | $0-20K |
| Year 2 | 1-2 | $50-75K | $50-100K | $50-120K |
| Year 3 | 3-5 | $75-100K | $225-500K | $275-620K |

### Cost Structure

| Item | Monthly | Annual | Notes |
|------|---------|--------|-------|
| Founder living | $5,000 | $60,000 | Minimal salary |
| Domain expert | $6,500 | $78,000 | Required from Month 4+ |
| Cloud/infrastructure | $500 | $6,000 | Dataset storage |
| Software tools | $300 | $3,600 | AI tools, SaaS |
| Travel/conferences | $500 | $6,000 | Customer meetings |
| **Total** | **$12,800** | **$153,600** | Year 1 burn |

### Funding Requirements

```yaml
runway_needed: "18-24 months"
total_funding: "$100,000 - $150,000"

sources:
  personal_savings: "$50,000"
  korea_gov_grants: "$20,000 - $50,000"
    - "Physical AI proof-of-concept programs"
    - "중소벤처기업부 R&D 지원"
  angel_investors: "$50,000 - $100,000"
    - "OpenAI Grove network"
    - "Korea startup angels"
    
break_even: "Year 3 (not Year 1)"
```

---

## 7. Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Phase 0 fails** (no customer access) | Medium | Critical | STOP project, don't proceed to MVP |
| **Scale AI enters Korea aggressively** | Medium | High | Pivot to partnership/acquisition target |
| **Domain expert not found** | Low | High | Expand search to universities, retired professionals |
| **Government funding delayed** | Medium | Medium | Target private companies instead |
| **Burnout (50-60 hour weeks)** | High | Medium | Set Month 9 checkpoint, hire help after first revenue |

---

## 8. Exit Strategy

### Primary Exit: Acquisition by Scale AI (or Similar)

```yaml
timeline: "18-36 months"
target_acquirers:
  - "Scale AI (most likely)"
  - "Labelbox"
  - "Strategic (Hyundai, Doosan)"
  
acquisition_value: "$5,000,000 - $20,000,000"
  
what_makes_us_acquirable:
  - "3-5 Korean OEM customers (hard to get)"
  - "Non-humanoid dataset IP"
  - "Domain expertise (team, not just founder)"
  - "Korea market entry for acquirer"
```

### Secondary Exit: Partnership

```yaml
model: "White-label provider for Scale AI Korea"
structure: "Revenue share (30% of Scale AI's Korea non-humanoid revenue)"
timeline: "12-24 months"
```

### Tertiary: Independence

```yaml
model: "Remain independent, serve non-Scale AI customers"
probability: "Low"
rationale: "Difficult to compete long-term without scale"
```

---

## 9. Phase 0 Validation Checklist (MUST COMPLETE FIRST)

**Before investing significant time/money:**

| # | Milestone | Timeline | Go/No-Go |
|---|-----------|----------|----------|
| 1 | 50 outreach attempts (LinkedIn, email) | Month 1-2 | Track response rate |
| 2 | 1 warm intro OR 1 discovery call | Month 3 | **If 0: STOP** |
| 3 | Domain expert identified | Month 2 | If none: STOP |
| 4 | $100K funding confirmed | Month 2 | If <$50K: STOP |
| 5 | OpenAI Grove decision | Month 1-2 | If rejected: Alternative network path |

### Phase 0 Success Criteria

```yaml
minimum_viable_validation:
  - "At least 1 scheduled discovery call with potential customer"
  - "Domain expert committed (even tentatively)"
  - "Funding runway of 12+ months confirmed"
  
if_all_pass: "Proceed to Phase 1 (MVP development)"
if_any_fail: "STOP and reassess. Do not proceed."
```

---

## 10. Vision Alignment (Clarified)

### Long-Term Vision

> "Physical AI automation will eliminate mundane physical labor. Datasets are the foundation that enables this automation."

### My Role in the Vision

```yaml
positioning: "Infrastructure provider - picks and shovels of physical AI revolution"

connection_chain:
  1: "I provide construction/agriculture datasets"
  2: "Hyundai/TYM/Doosan build autonomous equipment using my data"
  3: "Workers are liberated from dangerous/repetitive tasks"
  
my_contribution: "Essential to the chain, but 2 steps removed from end user"
```

### Honest Assessment

```yaml
direct_consumer_impact: "Low (B2B infrastructure, not consumer product)"
ecosystem_impact: "High (enables physical AI companies)"
mission_alignment: "Medium (indirect path to 'liberating 80%')"
```

---

## Summary: Revised vs Original

| Element | Original Plan | Revised Plan |
|---------|---------------|--------------|
| Year 1 Revenue | $150K | $0-20K |
| Break-even | Year 1 | Year 3 |
| Automation | 80% | 65-70% |
| Team | Solo | Solo + Domain Expert |
| Exit Strategy | Growth/IPO | Acquisition ($5-20M) |
| Work Hours | 40/week | 50-60/week |
| Funding | None | $100-150K |
| Validation | Assumed | Phase 0 required |
| Competitive Position | Beat Scale AI | Partner/acquired by Scale AI |
| B2C (Dubai Cookie) | Included | REMOVED |

---

## Final Verdict

```yaml
score: "75-83/100 (CONDITIONAL STRONG)"

proceed_if:
  - "Phase 0 validation passes"
  - "Funding secured"
  - "Domain expert found"
  
stop_if:
  - "0 customer responses after 50 outreach"
  - "No domain expert available"
  - "Funding <$50K"

recommendation: |
  Execute Phase 0 (3 months).
  Only proceed to MVP if validation milestones met.
  Plan for acquisition exit, not independence.
```

---

*Business Plan v2.0*  
*Post-Round 2 Defense*  
*2026-01-12*

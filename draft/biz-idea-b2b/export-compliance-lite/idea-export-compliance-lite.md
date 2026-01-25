# Export Compliance Lite

> B2B SaaS for SMB Tech Companies - Automated Export Screening

**Pipeline Version**: biz-idea-b2b v2.0  
**Created**: 2026-01-25  
**Final Verdict**: ✅ **PASS (89/100)**

---

## Executive Summary

Export Compliance Lite는 SMB 테크 기업(10-200명)을 위한 수출 컴플라이언스 자동화 SaaS입니다. 수동 스크리닝에 주 10시간 이상 소요하고, 위반 시 $500K+ 벌금 리스크를 가진 기업을 타겟으로 합니다.

### Cold War Lesson Connection
냉전시대 CoCom(대공산권수출통제위원회)이 진입장벽이자 신뢰받는 공급업체의 해자였듯, 현대의 수출 컴플라이언스(BIS Entity List, UFLPA)는 B2B 기업의 경쟁 우위입니다. 자동화된 컴플라이언스 = 현대판 CoCom 해자.

---

## Scores Summary

| 평가 항목 | 점수 | 상태 |
|----------|------|------|
| **Market ICP** | 19/20 | ✅ PASS |
| **GTM Fit** | 27/30 | ✅ PASS |
| **Unit Economics** | 25/25 | ✅ PASS |
| **Validation Score** | 89/100 | ✅ PASS |
| **Final Verdict** | **PASS** | 🚀 Proceed |

---

## 1. SMB ICP Analysis (19/20)

### Target Customer Profile

```yaml
target_icp:
  industry: "SaaS, Hardware, Electronics, Tech Services"
  company_size: "10-200 employees"
  typical_revenue: "$5M-$100M"
  geography: "US-based, selling internationally"
  
buyer_persona:
  primary: "Compliance Manager / Operations Lead"
  secondary: "Legal Counsel / CFO"
  decision_authority: "Team Lead / Dept Head ($5-15K budget)"
  
buying_committee:
  size: "1-2 decision makers"
  procurement: "Credit card or simple contract"
  approval_time: "5-8 weeks"
```

### Market Sizing

| Metric | Value |
|--------|-------|
| TAM | $150-200M (US SMB export compliance) |
| SAM | $75M (tech companies 10-200 employees) |
| SOM (Year 1) | $500K (100 customers × $5K ACV) |
| Growth Rate | 15-20% CAGR |

### Pain Points Quantified

| Pain | Impact |
|------|--------|
| Manual DPL screening | 10+ hours/week |
| Violation risk | $500K+ per BIS violation |
| Enterprise tool cost | $50K+ (Visual Compliance) |
| HS code errors | 5-15% shipment delays |
| UFLPA compliance | Mandatory Jan 2025+ |

---

## 2. GTM Strategy Fit (27/30)

### Recommended Model: Hybrid PLG + Self-Serve

```yaml
gtm_model:
  primary: "Product-Led Sales (PLG)"
  secondary: "Self-Serve with Sales Assist"
  
funnel:
  - stage: "Visitor → Free Signup"
    conversion: "8-12%"
  - stage: "Free → Activated"
    conversion: "60%"
  - stage: "Activated → Paid"
    conversion: "12-15%"
    
sales_motion:
  phase_1: "Founder-led demos (5-8/week)"
  phase_2: "Content flywheel + inbound"
  phase_3: "SDR + paid channels"
```

### Channel Fit

| Channel | CAC | Priority |
|---------|-----|----------|
| Content SEO (compliance guides) | $400-600 | P1 |
| LinkedIn (export compliance groups) | $800-1,200 | P1 |
| Trade show (export compliance events) | $1,500-2,000 | P2 |
| Referral program | $200-400 | P2 |
| Google Ads | $1,500-2,500 | P3 |

### Sales Cycle Analysis

- **Claimed**: 1-3 months
- **Realistic**: 5-8 weeks
- **Complexity**: Low-Medium (compliance urgency drives speed)
- **Verdict**: ✅ Acceptable for SMB B2B

---

## 3. Unit Economics Analysis (PASS)

### Core Metrics

| Metric | Value | Benchmark | Verdict |
|--------|-------|-----------|---------|
| **ACV** | $5,500 | $3K-30K | ✅ |
| **CAC (Blended)** | $1,200-1,500 | <6mo ACV | ✅ |
| **LTV:CAC** | 8-12:1 | ≥3:1 | ✅✅ Excellent |
| **Payback** | 2.7-3.5 months | ≤6 months | ✅ |
| **Gross Margin** | 75-80% | ≥75% | ✅ |
| **Monthly Churn** | 2-3% | ≤5% | ✅ |
| **NRR** | 105-115% | ≥95% | ✅ |

### Scenario Analysis

| Scenario | Churn | CAC | LTV:CAC | Verdict |
|----------|-------|-----|---------|---------|
| Pessimistic | 5% | $2,000 | 2.7:1 | ⚠️ Marginal |
| **Realistic** | 3% | $1,250 | **10:1** | ✅ PASS |
| Optimistic | 2% | $800 | 33.9:1 | 🚀 Exceptional |

---

## 4. MVP Spec (SMB-Ready)

### Core Features (MVP)

| Feature | Must-Have | Build Time | Time-to-Value |
|---------|-----------|------------|---------------|
| Denied Party List Screening | ✅ | 3 weeks | <2 minutes |
| HS Code AI Assistant | ✅ | 4 weeks | <5 minutes |
| UFLPA Compliance Check | ✅ | 2 weeks | <2 minutes |
| Audit Log & Export | ✅ | 1 week | Immediate |
| Onboarding Wizard | ✅ | 2 weeks | 5 minutes |
| CSV Bulk Upload | ✅ | 1 week | <10 minutes |

**Total MVP Build**: 14-16 weeks

### Tech Stack

```yaml
frontend: "Next.js 14 + Tailwind"
backend: "Node.js / Python FastAPI"
database: "PostgreSQL + Redis"
infrastructure: "Vercel / AWS"
integrations:
  - "BIS Denied Persons List API"
  - "UN Sanctions List"
  - "OFAC SDN List"
  - "HS Code Database"
```

### Pricing Tiers

| Tier | Price | Limits | Target |
|------|-------|--------|--------|
| **Free** | $0 | 50 screens/mo, 1 user | Lead gen |
| **Starter** | $199/mo | 500 screens/mo, 5 users | Small teams |
| **Pro** | $499/mo | Unlimited, 20 users, API | Growing companies |
| **Enterprise** | Custom | Custom, SSO, dedicated | Large SMB |

---

## 5. Onboarding & Activation Flow

### 4-Stage Flow (5 minutes total)

```
Stage 1: Signup (30 sec)
→ Email + Company name
→ No credit card required

Stage 2: Setup Wizard (2 min)
→ Industry selection
→ Export destinations
→ Product categories

Stage 3: First Screen (2 min)
→ Upload sample customer
→ Run DPL screening
→ See immediate results ← AHA MOMENT

Stage 4: Upgrade Prompt
→ Show value delivered
→ Upgrade CTA
```

### Activation Metric

- **Primary**: First Successful Screen within 24 hours
- **Target**: 60% of signups
- **Secondary**: 3+ screens in first week (indicates habit formation)

---

## 6. Validation Score (89/100)

### Scoring Breakdown

| Category | Max | Score | Details |
|----------|-----|-------|---------|
| **Market Opportunity** | 25 | 25 | Clear ICP, $75-150M TAM, high growth |
| **GTM Feasibility** | 25 | 21 | Viable PLG, realistic CAC, 5-8 week cycle |
| **Unit Economics** | 25 | 25 | 8-12:1 LTV:CAC, 2.7mo payback, 75% GM |
| **Competitive Moat** | 25 | 18 | Clear differentiation, time-based moat |
| **TOTAL** | 100 | **89** | ✅ PASS |

### Unresolved Issues

None critical. All weaknesses mitigated:

1. ~~Sales cycle longer than claimed~~ → 5-8 weeks acceptable
2. ~~CAC higher than estimated~~ → 8-12:1 LTV:CAC still excellent
3. ~~TAM overstated~~ → $75-150M still 10x addressable Year 1
4. ~~Competitive response~~ → 12-18 month first-mover window

---

## 7. Final Verdict

### ✅ PASS — Proceed to Launch

**Recommendation**: Execute 90-day launch plan

| Week | Milestone |
|------|-----------|
| 1-4 | MVP development + sales collateral |
| 5-8 | Beta cohort (5-10 design partners) |
| 9-12 | Official launch, 3-5 paid customers |
| 12+ | Scale to 10+ customers, $50K MRR |

### Year 1 Projections

| Metric | Target |
|--------|--------|
| Customers | 50 |
| ARR | $275K |
| MRR (Month 12) | $25K |
| LTV:CAC | 10:1 |

### Exit Potential

- **Timeline**: 3-4 years
- **Likely Acquirers**: Descartes Systems, E2Open, Thomson Reuters
- **Estimated Valuation**: $25-35M (8x ARR)

---

## Appendix: Cold War Lesson Application

### Historical Pattern
```
CoCom (1949-1994)
├── Controlled exports to Communist bloc
├── 45-year compliance regime
├── Created "trusted supplier" status
└── Companies with compliance = competitive moat
```

### Modern Application
```
Export Compliance 2.0 (2024+)
├── BIS Entity List (US-China decoupling)
├── UFLPA (Uyghur Forced Labor Prevention Act)
├── Escalating enforcement ($500K+ penalties)
└── SMB compliance automation = new moat
```

### Why This Matters
- 냉전시대 CoCom 컴플라이언스가 수십년 계약 독점의 기반이었듯
- 현대 수출 컴플라이언스 자동화는 B2B 기업의 신뢰 기반 경쟁 우위
- 고객사가 Enterprise 고객에게 판매할 때 컴플라이언스 인증이 필수 요건화

---

*Generated by biz-idea-b2b pipeline v2.0*

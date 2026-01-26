# MVP Design: Middle Market AP/AR Automation Platform

**Project Name:** FlowFin (working title)  
**Tagline:** "AP/AR Automation Built for the Middle Market"  
**Date:** 2026-01-26

---

## 1. ICP Definition (Ideal Customer Profile)

### Target Company Profile
- **Company Size:** 100-500 employees (focus on lower end of middle market for MVP)
- **Revenue Range:** $50M-250M annually
- **Invoice Volume:** 500-2,000 invoices/month
- **Industries (Priority Order):**
  1. **Manufacturing** (predictable workflows, multiple vendors)
  2. Professional Services (consulting, engineering firms)
  3. Distribution/Wholesale
- **Geography:** North America (US focus, Canada secondary)
- **Tech Maturity:** Using ERP (NetSuite, Sage Intacct, or QuickBooks Enterprise)

### Buyer Personas

**Economic Buyer: CFO**
- Age: 45-60
- Pain: Cash flow unpredictability, cost pressure, compliance risk
- Goal: Reduce DSO by 20%, cut AP processing costs by 50%
- Decision Criteria: ROI, implementation time, integration with existing ERP

**Champion: AP/AR Manager**
- Age: 35-50
- Pain: Manual data entry, chasing approvals, reconciliation errors, audit prep
- Goal: Automate 80% of invoice processing, eliminate manual follow-ups
- Success Metric: Hours saved per week, error reduction

**End Users: Accounting Staff (3-10 people)**
- Pain: Repetitive data entry, context switching between systems
- Goal: Simple UI, mobile access for approvals
- Adoption Factor: Ease of use, training time

**Potential Blocker: IT/Security Manager**
- Concern: Data security, ERP integration reliability, vendor lock-in
- Need: SOC 2 compliance, API documentation, SLA guarantees

### Buying Committee & Decision Process
- **Committee Size:** 3-4 people (CFO, Controller/AP Manager, IT)
- **Decision Timeline:** 3-6 months (budget cycles, vendor evaluation)
- **Procurement Process:** RFP optional, prefer pilot/trial approach
- **Deal Killers:** Long implementation, hidden costs, poor ERP integration

### Sales Cycle Estimate
**Total: 4-5 months**
1. Outreach → Discovery: 2-4 weeks
2. Demo → Technical evaluation: 3-4 weeks
3. Pilot/Trial (1 department): 4-6 weeks
4. Contract negotiation: 2-3 weeks
5. Full implementation: 4-6 weeks

---

## 2. Product Spec (MVP)

### Core Value Proposition
**"Process 80% of invoices with zero human touch, in 4 weeks, at 70% cost savings"**

### MVP Features (What's IN)

#### A. Invoice Processing (AP Focus)
1. **Intelligent Capture**
   - Email forwarding (invoices@customer.flowfin.com)
   - PDF/image upload via web dashboard
   - Mobile app for photo capture
   - AI extraction: vendor, amount, date, line items, PO number

2. **Automated Matching & Routing**
   - 3-way match (PO → Receipt → Invoice)
   - Auto-route for approval based on rules (amount thresholds, GL codes)
   - Exception handling queue for mismatches

3. **Approval Workflows**
   - Email/Slack/Teams approval links (no login required)
   - Mobile app for approvals on-the-go
   - Escalation rules (auto-approve after X days, or escalate to manager)
   - Delegation support

4. **Payment Scheduling**
   - Optimize payment timing (take discounts, respect terms)
   - Batch payment file generation (ACH, wire, check)
   - Payment status tracking

5. **ERP Integration**
   - Real-time sync with NetSuite, Sage Intacct, or QuickBooks Enterprise
   - Bi-directional: pull POs, push approved invoices
   - GL code mapping

#### B. Accounts Receivable (Light MVP)
1. **Invoice Generation & Sending**
   - Template-based invoice creation from ERP data
   - Auto-send via email with payment link
   - Payment reminders (3-day, 7-day, 14-day overdue)

2. **Payment Tracking**
   - Dashboard showing aging (current, 30, 60, 90+ days)
   - Auto-update when payments received
   - Simple collections workflow (flag for manual follow-up)

#### C. Reporting & Analytics
1. **AP Metrics**
   - Processing time per invoice
   - Approval bottlenecks
   - Early payment discounts captured
   - Cost per invoice (benchmark against industry)

2. **AR Metrics**
   - Days Sales Outstanding (DSO)
   - Collection effectiveness
   - Customer payment behavior patterns

3. **Cash Flow Forecasting**
   - 30/60/90-day payables outlook
   - 30/60/90-day receivables forecast
   - Simple cash runway visualization

#### D. Compliance & Audit
1. **Audit Trail**
   - Complete history of invoice (received → approved → paid)
   - User actions logged with timestamps
   - Document retention (7 years)

2. **Duplicate Detection**
   - AI-powered duplicate invoice prevention
   - Flag suspicious patterns (same amount, same vendor, short timeframe)

### Explicit Exclusions (What's OUT of v1)

❌ Multi-entity consolidation (single entity only)  
❌ Multi-currency (USD only)  
❌ Procurement module (PO creation - must come from ERP)  
❌ Vendor portal (vendors can't login to check payment status)  
❌ Advanced fraud detection (basic duplicate check only)  
❌ Custom OCR training (use pre-trained models)  
❌ On-premise deployment (cloud-only)  
❌ White-label/reseller program  
❌ Direct bank integration (use files/API to ERP)

### Technical Architecture (High-Level)

**Stack:**
- **Frontend:** React (web dashboard), React Native (mobile app)
- **Backend:** Node.js/Python (FastAPI)
- **Database:** PostgreSQL (transactional), Redis (caching)
- **AI/ML:** OpenAI GPT-4 for document extraction, Claude for workflow intelligence
- **Infrastructure:** AWS (ECS for compute, S3 for storage, RDS for DB)
- **Integrations:** REST APIs for ERP connections

**Security:**
- SOC 2 Type II (target by month 12)
- Encryption at rest (AES-256) and in transit (TLS 1.3)
- Role-based access control (RBAC)
- SSO support (SAML, OAuth)

**Key Integrations Needed:**
1. **ERP Systems (must-have):**
   - NetSuite (SuiteScript API)
   - Sage Intacct (Web Services API)
   - QuickBooks Enterprise (QBO API)

2. **Communication (nice-to-have):**
   - Email (SendGrid)
   - Slack, Microsoft Teams (approval notifications)

### User Workflows

**Workflow 1: AP Invoice Processing (Happy Path)**
1. Vendor emails invoice → System captures & extracts data
2. AI matches to PO, verifies amounts
3. System auto-routes to AP Manager for approval
4. Manager approves via email link (5 seconds)
5. Invoice scheduled for payment per terms
6. Payment file generated on payment date
7. Sync to ERP as paid

**Workflow 2: AP Exception Handling**
1. Invoice received with no PO or mismatch
2. System flags exception, routes to AP specialist
3. Specialist reviews, manually assigns GL codes or requests clarification
4. Once resolved, enters normal approval flow

**Workflow 3: AR Invoice Send & Track**
1. Invoice created in ERP
2. System pulls invoice data, formats using template
3. Auto-sends to customer with payment link
4. Tracks open status, sends reminders per schedule
5. Customer pays → updates ERP

---

## 3. Pricing & Unit Economics

### Pricing Model: Hybrid (Base + Usage)

**Tier 1: Starter ($1,200/month)**
- Up to 200 invoices/month (AP + AR combined)
- 5 user seats included
- 1 ERP integration
- Email support
- **Target Customer:** 100-200 employees, $50-100M revenue

**Tier 2: Growth ($2,500/month)**
- Up to 500 invoices/month
- 15 user seats included
- 2 ERP integrations
- Slack/Teams integration
- Priority email + chat support
- **Target Customer:** 200-400 employees, $100-200M revenue

**Tier 3: Business ($4,500/month)**
- Up to 1,500 invoices/month
- Unlimited user seats
- 3 ERP integrations
- Dedicated customer success manager
- Phone support + SLA (4-hour response)
- Custom approval workflows
- **Target Customer:** 400-1000 employees, $200-500M revenue

**Overage Pricing:** $2 per invoice beyond plan limit

**Annual Contract Incentive:** 15% discount (2 months free)

### ACV Calculation

**Target Customer Mix:**
- 30% Starter: $1,200 x 12 = $14,400
- 50% Growth: $2,500 x 12 = $30,000
- 20% Business: $4,500 x 12 = $54,000

**Blended ACV:** ~$32,000 (close to $35K target)

### ROI Justification (Growth Tier Example)

**Customer Costs Before FlowFin:**
- AP processing: 1,000 invoices/month x $20/invoice = $20,000/month
- AR follow-ups: 30 hours/month x $50/hr = $1,500/month
- **Total:** $21,500/month = $258,000/year

**Customer Costs With FlowFin:**
- FlowFin subscription: $2,500/month = $30,000/year
- Reduced AP processing: 1,000 invoices x $6/invoice = $6,000/month
- Reduced AR time: 10 hours/month x $50/hr = $500/month
- **Total:** $30,000 + $78,000 = $108,000/year

**Savings:** $258,000 - $108,000 = **$150,000/year**  
**ROI:** 500% or 5:1  
**Payback Period:** 2.4 months

### Unit Economics

**LTV (Lifetime Value):**
- Avg Contract: $32,000/year
- Gross Margin: 75% (after COGS: AI costs, infrastructure, support)
- Churn: 10% annually (90% retention)
- LTV = $32,000 x 0.75 / 0.10 = **$240,000**

**CAC (Customer Acquisition Cost):**
- **Sales-assisted motion:**
  - AE salary + commission: $150K OTE / 12 deals/year = $12,500
  - Marketing cost per SQL: $2,000
  - Demo-to-close rate: 25%
  - **CAC = ($12,500 + $2,000) / 0.25 = $58,000**

**LTV/CAC Ratio:** $240,000 / $58,000 = **4.1x** ✅ (target: >3x)

**Payback Period:** $58,000 / ($32,000 x 0.75 / 12) = **29 months** ⚠️ (target: <12 months)

**Note:** Payback is long, but acceptable for B2B SaaS with high retention. Can improve with:
- Self-serve motion for Starter tier (reduce CAC)
- Annual upfront payment (improve cash flow)
- Expansion revenue from overage (increase ACV)

**Gross Margin Breakdown:**
- Revenue: $32,000
- COGS:
  - AI costs (document processing): $3,000
  - Infrastructure: $2,000
  - Customer support (0.1 FTE): $3,000
  - **Total COGS:** $8,000
- **Gross Margin:** ($32,000 - $8,000) / $32,000 = **75%** ✅

---

## 4. GTM Strategy

### Primary GTM Motion: Sales-Assisted with Product-Led Trial

**Positioning:** "Get 80% of invoices processed automatically in 4 weeks, guaranteed"

### Customer Acquisition Channels (Priority Order)

**1. Outbound Sales (Primary - Year 1)**
- **Target:** 2-3 AEs focused on specific verticals (Manufacturing)
- **Approach:** 
  - Buy list of CFOs at 100-500 employee manufacturing companies
  - Cold email sequence (5 touches) + LinkedIn outreach
  - Offer: "Free AP audit - we'll analyze your invoice data and show exact savings"
- **Conversion Funnel:**
  - Outreach → Discovery call (20% response)
  - Discovery → Demo (50% conversion)
  - Demo → Pilot (40% conversion)
  - Pilot → Paid (60% conversion)
  - **Overall:** 2.4% outreach-to-close
- **Quota:** 1 deal/month per AE (12/year)

**2. Content Marketing + SEO (Secondary - Month 6+)**
- **Topics:** "middle market AP automation", "NetSuite invoice automation", "reduce DSO manufacturing"
- **Assets:** 
  - ROI calculator (capture leads)
  - Industry reports ("State of Middle Market Finance Automation")
  - Case studies (anonymized pilot results)
- **Goal:** 20 MQLs/month by month 12

**3. Partner Channel (Future - Month 12+)**
- **Partners:** NetSuite implementation partners, accounting firms (RSM, BDO)
- **Model:** Referral fee (10-15% of first-year ACV)
- **Goal:** 20% of deals from partners by year 2

### Sales Process

**Stage 1: Discovery (30 min call)**
- Qualify: invoice volume, ERP system, current pain level
- Offer: Free AP audit (send us 100 invoices, we'll show savings)

**Stage 2: AP Audit Results (30 min presentation)**
- Show: current cost per invoice, error rate, time waste
- Present: projected savings with FlowFin
- Offer: 4-week pilot (one department, 50-100 invoices)

**Stage 3: Pilot (4 weeks)**
- Setup: 1 week (integrate ERP, configure workflows)
- Run: 3 weeks (process real invoices, measure results)
- Review: Show metrics (time saved, accuracy, cost per invoice)
- **Success Criteria:** 80% invoices processed with <2% errors

**Stage 4: Contract Negotiation**
- Pricing: Annual contract (15% discount) or monthly
- SLA: Implementation complete in 4 weeks or 1 month free
- Pilot customers: 20% discount for first year

**Stage 5: Implementation & Onboarding (4-6 weeks)**
- Week 1: ERP integration setup
- Week 2: Data migration, user training
- Week 3: Go-live with support
- Week 4: Optimization, workflow tuning
- **Milestone:** Customer processing 80% of invoices through FlowFin

### Demo-to-Close Targets
- **Demo → Pilot:** 40%
- **Pilot → Paid:** 60%
- **Overall Demo → Close:** 24%

### Onboarding Strategy
- **Goal:** Time-to-value <4 weeks (customer sees first automated invoice approved)
- **Approach:**
  - Dedicated implementation specialist (not AE)
  - Weekly check-ins during pilot
  - Training: 2-hour webinar + recorded videos
  - Success milestones: Day 7 (first invoice processed), Day 21 (80% automation rate)

### Expansion/Upsell Motion
1. **Invoice volume growth:** Auto-upgrade to next tier when hitting limit
2. **Add AR module:** Upsell 6 months after AP stable ($500/month add-on)
3. **Additional entities:** +$300/month per entity
4. **Professional services:** Workflow consulting at $200/hour

---

## 5. Competition Check

### Direct Competitors

**Bill.com**
- **Positioning:** AP/AR for SMB (10-100 employees)
- **Pricing:** $45-79/user/month
- **Strengths:** Simple, established, integrations
- **Weaknesses:** Limited features for mid-market, per-user pricing gets expensive
- **Differentiation:** FlowFin has richer approval workflows, better AI, flat pricing

**Tipalti**
- **Positioning:** Global payments for enterprises (1000+ employees)
- **Pricing:** Enterprise (undisclosed, estimated $100K+)
- **Strengths:** Multi-currency, tax compliance, scale
- **Weaknesses:** Overkill for mid-market, complex, expensive
- **Differentiation:** FlowFin is 1/3 the cost, 4-week implementation vs 6 months

**AvidXchange**
- **Positioning:** AP automation for mid-market
- **Pricing:** Undisclosed, estimated $50-75K annually
- **Strengths:** Established, vertical focus (some industries)
- **Weaknesses:** Expensive, slow implementation
- **Differentiation:** FlowFin is 40% cheaper, faster implementation, better UX

### Indirect Competitors

**ERP Native Tools (NetSuite, Sage Intacct)**
- **Why customers don't use:** Rigid workflows, poor UX, no AI
- **Why we win:** Better UX, AI automation, faster setup

**Manual Processes (Excel + Email)**
- **Why customers stick with it:** Free, familiar
- **Why we win:** ROI (save $150K/year for $30K cost)

### Differentiation Strategy: "10x Better for the Middle Market"

**We are 10x better than:**
1. **Bill.com:** Richer features (approval workflows, AI intelligence, cash forecasting)
2. **Manual processes:** 70% cost savings, 80% time savings, 90% fewer errors
3. **ERP tools:** Modern UX, mobile-first, AI-powered

**We are NOT:**
- Cheaper than Bill.com (we're premium)
- Simpler than Tipalti (we're right-sized)
- As customizable as ERP (we're opinionated)

**Competitive Moats to Build:**
1. **Vertical expertise:** Deep manufacturing workflow knowledge
2. **ERP integration quality:** Best NetSuite integration in the market
3. **AI models:** Proprietary training on invoice data → better accuracy
4. **Customer success:** White-glove onboarding, sub-4-week implementation
5. **Usage-based pricing:** Transparent, aligns with customer value

---

## 6. Cost Estimate (First 18 Months)

### Team Composition

**Months 1-6 (Seed stage):**
- 1 x Founder/CEO (product, sales)
- 1 x Technical Co-founder (eng lead)
- 1 x Full-stack engineer
- 1 x Part-time designer (contract)
- **Total:** 2.5 FTE

**Months 7-12 (Launch & Early Sales):**
- Add: 1 x AE (sales)
- Add: 1 x Full-stack engineer
- Add: 1 x Customer success (part-time)
- **Total:** 5.5 FTE

**Months 13-18 (Scale):**
- Add: 1 x AE (sales)
- Add: 1 x Marketing lead
- Add: 1 x Full-stack engineer
- **Total:** 8.5 FTE

### Cost Breakdown

| Category | Months 1-6 | Months 7-12 | Months 13-18 | Total |
|----------|-----------|------------|-------------|-------|
| **Salaries** | $300K | $450K | $600K | $1,350K |
| **Infrastructure** (AWS, AI APIs) | $10K | $25K | $50K | $85K |
| **Software/Tools** | $5K | $10K | $15K | $30K |
| **Customer Acquisition** | $20K | $100K | $200K | $320K |
| **Legal/Accounting** | $15K | $15K | $20K | $50K |
| **Office/Misc** | $10K | $15K | $20K | $45K |
| **Total** | **$360K** | **$615K** | **$905K** | **$1,880K** |

### Runway Requirements

**Total 18-month burn:** $1,880K (~$1.9M)  
**Buffer (25%):** $470K  
**Target raise:** **$2.4M seed round**

### Revenue Projection (Conservative)

| Month | Customers | MRR | ARR |
|-------|-----------|-----|-----|
| 6 | 0 (pilot) | $0 | $0 |
| 9 | 2 | $5K | $60K |
| 12 | 5 | $12.5K | $150K |
| 15 | 10 | $27K | $324K |
| 18 | 18 | $50K | $600K |

**Note:** Assumes 1.5 deals/month by month 18 (2 AEs at 75% quota)

---

## 7. Success Metrics

### North Star Metric
**"Invoices Processed Autonomously (No Human Touch)"**
- Target: 80% of invoices require zero human intervention
- Why: Directly measures value delivered (automation)

### Leading Indicators

**Product:**
- Invoice processing accuracy (>98%)
- Time-to-first-value (<7 days from signup)
- User activation rate (% of users who approve 10+ invoices in first month)

**Sales:**
- SQLs generated per month
- Demo → Pilot conversion (>40%)
- Pilot → Paid conversion (>60%)
- Sales cycle length (<5 months)

**Customer Success:**
- Invoices processed per customer (increasing = usage growth)
- NPS score (>50)
- Feature adoption rate (% using mobile app, AR module)
- Expansion revenue (% of revenue from upsells)

**Financial:**
- MRR growth rate (>20% month-over-month in year 1)
- Customer churn (<10% annually)
- LTV/CAC ratio (>3x)
- Gross margin (>70%)

### 12-Month Milestones

**Month 3:** MVP launched, first pilot customer  
**Month 6:** 3 pilot customers, product-market fit validation  
**Month 9:** First 2 paying customers, $60K ARR  
**Month 12:** 5 paying customers, $150K ARR, hire AE #2  

**Success Definition:** 5+ paying customers with >90% retention and NPS >40 by month 12

---

## Risk Assessment & Mitigation

### Top Risks

**1. ERP Integration Complexity**
- **Risk:** Integration breaks, customers can't use product
- **Mitigation:** Focus on 1 ERP (NetSuite) for first 10 customers, hire integration specialist early

**2. Long Sales Cycle**
- **Risk:** Takes 9-12 months to close deals, burn cash before revenue
- **Mitigation:** Offer paid pilots ($5K/month), accelerate with free AP audit upfront

**3. Low Demo-to-Close Rate**
- **Risk:** Product doesn't resonate, hard to prove ROI
- **Mitigation:** Free AP audit shows exact savings before demo, focus on measurable pilot outcomes

**4. High CAC/Long Payback**
- **Risk:** Can't afford to scale sales team
- **Mitigation:** Layer in self-serve for Starter tier by month 9, partner channel by month 12

**5. AI Accuracy Issues**
- **Risk:** Invoice extraction errors frustrate users
- **Mitigation:** Human review queue for low-confidence extractions, measure accuracy weekly

---

## Next Steps (Immediate Actions)

**Week 1-2:**
1. Validate ICP with 10 customer discovery calls (manufacturing CFOs)
2. Build landing page with AP audit offer, test outbound messaging
3. Prototype invoice extraction (test with 100 real invoices)

**Week 3-4:**
4. Technical spike: NetSuite API integration feasibility
5. Design core UX (invoice queue, approval flow)
6. Pricing validation (show pricing to 5 prospects, gauge reaction)

**Month 2:**
7. Build alpha version (invoice capture + extraction + approval)
8. Recruit 2 design partners (free in exchange for feedback)
9. Incorporate feedback, iterate

**Month 3:**
10. Launch beta with 3 pilot customers ($1K/month pilot pricing)
11. Measure: accuracy, time-to-value, customer satisfaction
12. Decide: build vs pivot based on pilot results

---

**END OF MVP DESIGN**

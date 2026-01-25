# CollectIQ - B2B SaaS Business Plan
## AI-Powered Accounts Receivable Automation for SMB Finance Teams

---

## 📊 Score & Verdict (Pre-Codex)
- **B2B Viability Score:** Pending Codex validation
- **Unit Economics:** Pending detailed analysis
- **Verdict:** Ready for Codex Round 1 review

---

## Executive Summary

### One-Liner
> "CollectIQ is an AI-native AR automation platform for B2B SaaS companies (50-150 emp) that reduces DSO by 10-15 days and setup time from 4 weeks to 1 day, with 1-click Xero/QBO integration and $3-6K ACV pricing."

### Key Metrics Target
| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers | 25-30 | 75-100 | 200+ |
| ACV | $4.5K | $5.5K | $6.5K |
| ARR | $112.5K | $450K | $1.3M |
| Churn | 5% month | 3% month | 2% month |

---

## 1. B2B ICP Definition

### Target Segment
| 항목 | 정의 |
|------|------|
| **Industry** | B2B SaaS (recurring revenue model preferred) |
| **Company Size** | 50-150 employees |
| **Revenue Range** | $5-50M ARR |
| **Geography** | US Primary, UK Secondary (Xero strength), EU expansion Y2 |
| **Tech Stack** | Xero or QuickBooks Online (primary), Stripe/Zapier capable |
| **Current Pain** | 40-50 day DSO, $310K-640K annual AR manual costs |

### Buying Committee
| Role | Title | Pain Point | Success Metric |
|------|-------|------------|----------------|
| **Economic Buyer** | CFO/Finance Director | Cash flow tied up, unpredictable DSO | Reduce DSO by 10+ days, improve cash conversion |
| **Champion** | VP Finance / Accounts Receivable Manager | Manual dunning, low collection rates | 30% fewer manual reminders, automated workflows |
| **End Users** | AR Specialist, Finance Team (2-3 people) | Repetitive invoice tracking, phone calls | Dashboard visibility, 80% payment automation |
| **Blockers** | Security/Compliance Officer | Data security, PCI concerns | SOC2 path, encrypted data, audit logs |

### Trigger Events (When They Buy)
1. **Series A/B Funding** → 3-4x revenue growth expected, DSO becomes critical bottleneck
2. **VP Finance Hire** → New mandate to modernize, implement tech stack improvements
3. **Quarterly Cash Crunch** → DSO > 45 days creates urgency; CFO seeks immediate solution
4. **Accounting Software Upgrade** → Xero/QBO migration opportunity; tech stack refresh
5. **Compliance Deadline** → GAAP revenue recognition timing pressures

---

## 2. Value Proposition

### ROI Statement
> "With CollectIQ, B2B SaaS companies reduce DSO by 10-15 days through AI-powered payment prediction and automated dunning, saving $50K-150K annually in freed working capital and AR team productivity."

### Quantified Value
| Metric | Before | After | Annual Impact |
|--------|--------|-------|----------------|
| **DSO (Days)** | 45-50 | 30-35 | 10-15 day reduction |
| **Working Capital Tied Up** | $625K (50 days × $12.5K/day ARR) | $375K (30 days) | **$250K freed** |
| **Manual Reminder Hours/Week** | 15-20 hrs/week | 2-3 hrs/week | **$65K/year saved** (at $50/hr loaded) |
| **Payment Error Rate** | 5-8% (late/missed) | <2% | **Reduce risk by $35K-50K annually** |
| **Collection Rate** | 92% | 97% | **$150K-300K new cash recovered** |
| **Time to Payment Visibility** | Next-day reporting | Real-time | Improve forecasting accuracy by 40% |

### Competitive Differentiation
| vs Competitor | Their Weakness | CollectIQ Strength |
|---------------|----------------|--------------------|
| **Bill.com** | 50% automation, 2-4 week setup, $5-8K ACV, manual escalation | AI prediction + auto-escalation, 1-day setup, $3-6K ACV, 70%+ automation |
| **Chaser** | UK-focused, long sales cycle, requires demos, 60-80% automation | Global from day 1, self-serve, 70%+ automation, lower cost |
| **Spreadsheets/Manual** | No visibility, high error rate, slow collections | Real-time AI insights, <4 hour setup, predictive analytics |
| **NetSuite/SAP AR Module** | Enterprise-only, $500K+ implementation | SMB-friendly, affordable, rapid deployment |

---

## 3. Product Spec (MVP)

### Core Features (MVP - 8 Week Launch)

#### P0 (Critical - Week 1-4)
| Feature | Description | Priority | Week | Complexity |
|---------|-------------|----------|------|------------|
| **Xero Integration** | Real-time invoice sync from Xero; OAuth login; bi-directional payment marking | P0 | 1-2 | H |
| **QBO Integration** | Real-time invoice sync from QuickBooks Online; OAuth login; payment updates | P0 | 2-3 | H |
| **Invoice Dashboard** | Real-time list of unpaid invoices, aging reports, DSO calculation, overdue count | P0 | 1 | M |
| **Payment Prediction Model** | ML model: predict likely payment date based on invoice age, customer history, industry | P0 | 2-4 | H |
| **AI Reminder Sequencing** | Smart dunning: email/SMS based on payment likelihood, optimal timing, soft/firm tone | P0 | 3 | H |
| **Customer Payment Portal** | Self-serve portal: view invoices, pay online (Stripe), download statements | P0 | 3 | M |
| **Email Campaign Builder** | Template-based reminder campaigns; customizable tone/frequency; one-click send | P0 | 3 | M |
| **DSO Tracking & Reporting** | Real-time DSO, aging buckets (0-30, 30-60, 60+), comparative trend analysis | P0 | 1 | M |
| **User Management** | Basic RBAC: Owner, Finance Manager, AR Specialist roles | P0 | 2 | M |

#### P1 (High Priority - Week 4-6)
| Feature | Description | Priority | Week | Complexity |
|---------|-------------|----------|------|------------|
| **SMS Reminders** | Automated SMS payment reminders via Twilio integration | P1 | 4-5 | M |
| **Stripe Integration** | Accept payments in portal; auto-reconciliation with Xero/QBO | P1 | 5 | M |
| **Slack Notifications** | Real-time alerts: overdue invoices, payment received, payment milestone | P1 | 4 | L |
| **Mobile Portal** | Responsive design for customer portal on mobile; one-click payment | P1 | 6 | M |
| **Basic API** | REST API for invoice queries, reminder sending, customer lookups | P1 | 6 | M |
| **Payment Terms Customization** | Set custom payment terms per customer; auto-adjust reminders | P1 | 5 | M |
| **Early Payment Incentives** | Configure discount for early payment (e.g., 2% 10 Net 30); auto-apply in calculations | P1 | 5 | L |

#### P2 (Roadmap - Week 7+)
| Feature | Description | Priority | Week | Complexity |
|---------|-------------|----------|------|------------|
| **Invoice Financing** | Partner with Stripe Capital or TrippleFunds for early invoice payout | P2 | 8+ | H |
| **Machine Learning Improvement** | Expand prediction model with industry-specific ML; dunning A/B testing | P2 | 8+ | H |
| **Credit Risk Scoring** | Pre-invoice risk assessment based on customer payment history + external data | P2 | 8+ | H |
| **Collections Workflow Automation** | Multi-step workflows: escalation rules, assignment to team members, task management | P2 | 8+ | M |
| **SAP Concur Integration** | Integration for expense reconciliation tie-in to AR | P2 | 12+ | M |
| **Accounting Integration Expansion** | NetSuite, Sage Intacct, Microsoft Dynamics 365 | P2 | 12+ | H |

### Enterprise-Ready Foundation (MVP includes architecture for)

- [x] **Multi-tenant architecture** - Designed from day 1; customer data isolation
- [x] **Role-based access control (RBAC)** - Basic: Owner, Finance Manager, AR Specialist in MVP
- [x] **SSO/SAML** - Roadmap P1 (Week 6); architecture supports
- [x] **Audit logging** - All user actions logged; essential for SOC2
- [x] **Data export** - CSV/Excel export of invoices, DSO reports
- [x] **API-first design** - REST API in P1; GraphQL roadmap
- [x] **SOC2 readiness path** - Encrypted data at rest/transit, audit logs, access controls in MVP

### Integration Requirements (MVP)
| Integration | Priority | Complexity | Why Needed |
|-------------|----------|------------|------------|
| **Xero API** | P0 | H | 40% of target market uses Xero; partnership channel requires |
| **QuickBooks Online API** | P0 | H | 50% of target uses QBO; US market expansion critical |
| **Stripe API** | P1 | M | Payment collection; core value stream |
| **Twilio SMS** | P1 | M | SMS reminders; 30% higher open rate than email |
| **Slack Webhooks** | P1 | L | Notifications; team adoption driver |
| **SendGrid Email** | P0 | L | Reliable email delivery for reminders |

### Product Architecture Overview
```
┌─────────────────────────────────────────────────────────────┐
│ Frontend (React/Next.js SPA)                                 │
│ ├─ Auth + Dashboard (Invoice Overview)                      │
│ ├─ Invoice Management & Aging Reports                       │
│ ├─ AI Reminder Builder & Scheduler                          │
│ ├─ Customer Portal (Public, No Auth)                        │
│ └─ Settings (User Mgmt, Integrations)                       │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────────┐
│ Backend API (Node.js/Python FastAPI)                        │
│ ├─ Auth Service (OAuth + JWT)                               │
│ ├─ Invoice Service (Fetch, Sync, Update)                    │
│ ├─ Payment Service (Stripe integration)                     │
│ ├─ ML/Prediction Service (Payment prediction model)         │
│ ├─ Notification Service (Email, SMS, Slack)                 │
│ └─ Reporting Service (DSO, Aging, Custom reports)           │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌───────▼──────┐  ┌──────▼──────┐  ┌─────▼──────┐
│ PostgreSQL   │  │  Redis      │  │ S3 Storage │
│ (Invoices,   │  │ (Cache,     │  │ (Docs,     │
│  Customers)  │  │  Sessions)  │  │ Exports)   │
└──────────────┘  └─────────────┘  └────────────┘
```

---

## 4. Pricing Model

### Pricing Strategy
| Tier | Target ICP | Price | Monthly Usage | Includes |
|------|-----------|-------|----------------|----------|
| **Starter** | SMB 10-50 emp, <$5M ARR | $299/month | <500 invoices/month | Xero/QBO sync, AI reminders, 1 user, DSO dashboard, Email campaigns |
| **Growth** | Mid-Market 50-150 emp, $5-50M ARR | $699/month | 500-2K invoices/month | All Starter + SMS/Slack, Stripe portal, 5 users, API access, Custom templates |
| **Enterprise** | 150+ emp, $50M+ ARR | Custom ($1500+/month) | 2K+ invoices/month | All Growth + SSO/SAML, dedicated success, advanced ML, integrations, SLA |

### Pricing Rationale
- **Value-based**: Starter saves $20K/yr (time), Growth saves $65K/yr (freed capital + time), Enterprise saves $150K+/yr
- **Competitive**: 40-50% below Bill.com ($5-8K ACV/yr = $500-650/mo min), at parity with Chaser ($7-8K ACV)
- **Expansion path**: 
  - Per-seat upgrades (Growth tier includes 5, +$50/seat)
  - Invoice volume overage ($0.02/invoice beyond tier limit)
  - Add-on features (Early payment discounts, credit risk scoring)

### Freemium Strategy Consideration
**Option A (Adopted):** Entry-level free tier (Micro: <100 invoices/month, Xero/QBO sync only)
- Reduces friction for SMBs testing
- Allows self-serve signup
- Converts to Starter at ~30-40% rate after 30 days
- Drives viral loops (accountant recommendations)

**Option B (Rejected):** Freemium-only model (no paid required, upsell on add-ons)
- Conflict with $3-6K ACV target
- CAC too high; not viable for Founder-led sales

### Annual Commitment Discount
- 15% discount for annual prepay → $254/mo (Starter), $594/mo (Growth)
- Drives more predictable cash flow; improves retention signals

---

## 5. Unit Economics

### Revenue Model
| Metric | Value | Calculation | Notes |
|--------|-------|-------------|-------|
| **Target ACV** | $4,500 | 60% Growth ($699/mo × 12), 30% Starter ($299/mo × 12), 10% Enterprise ($1500/mo avg) | Blended average |
| **Avg Customers/Cohort** | 10 | Initial 10 design partner customers in first 3 months | Conservative for validation |
| **Expansion Revenue Year 1** | 5% | Per-seat upsells + invoice overages | Low in MVP phase |
| **Expansion Revenue Year 2** | 15% | Add-on features + tier upgrades + larger accounts | Feature expansion drives growth |

### Acquisition Cost
| Item | Cost | Notes |
|------|------|-------|
| **LinkedIn Sales Navigator** | $80/month | Prospecting, list building, InMail |
| **Email Tools (Outreach)** | $200/month | Personalized outreach, tracking, analytics |
| **Design Partner Incentive** | $5K total | Free access + implementation support for first 10 |
| **Founder Sales Time** | $600/week | 20 hours @ $30/hr effective cost (opportunity cost lower) |
| **Per-Lead Cost** | $500 | 100 leads/month, 2-3 close to paid trial |
| **Per-Demo Cost** | $800 | 20 qualified demos/month; ~3-4 close to paid |
| **Per-Deal Cost (Closed)** | $2,500 | 8-10 closed per month = $20-25K/month acq cost |
| **Total CAC (Blended)** | **$2,500** | First 30 customers; improves to $1,200 in Year 2 with word-of-mouth |

### Retention & Expansion
| Metric | Estimate | Rationale |
|--------|----------|-----------|
| **Gross Churn Rate** | 5%/month | SMB churn baseline; 60% save DSO money (sticky), 40% experiment/churn |
| **Net Churn Rate** | -3%/month (expansion) | 8% expansion revenue from per-seat upgrades, overage fees |
| **Expansion Revenue / Retained Customers** | 8-10% | Gradual tier upgrades + feature add-ons in Y1 |
| **Avg Customer Lifetime** | 20 months | 1 / 5% churn = 20 months; paid for 1.67 years |
| **Revenue Retention Rate** | 105% | 100% - 5% churn + 10% expansion = 105% MRR growth from cohort |

### Unit Economics Summary (Year 1 - First 10 Customers)
| Metric | Value | Benchmark | Status | Notes |
|--------|-------|-----------|--------|-------|
| **LTV** | $22,500 | $45K target | ⚠️ Below target | 20-month lifetime × $4,500 ACV × 105% NRR |
| **CAC** | $2,500 | $1,500 max | ⚠️ High in Y1 | Design partner program artificially inflates; improves to $1,200 in Y2 |
| **LTV:CAC Ratio** | **9:1** | ≥3:1 | ✅ **Healthy** | Well above 3:1 threshold; indicates unit economics viability |
| **Payback Period** | **6.7 months** | ≤18mo | ✅ **Excellent** | Breakeven in 6-7 months; reinvest quickly |
| **Gross Margin** | **85%** | ≥70% | ✅ **Strong** | SaaS margins on Xero/QBO sync; hosting + ML ops cost ~15% |
| **Magic Number** | **2.2x** | ≥0.75 target | ✅ **Strong** | (MRR added this month - MRR added last month) / Sales spend |

**Year 2 Projection (30 Customers):**
- ACV increases to $5,200 (tier mix shift + expansion)
- CAC decreases to $1,200 (word-of-mouth + partnerships)
- LTV:CAC → 15:1
- ARR: $156K

**Year 3 Projection (75+ Customers):**
- ACV: $5,500
- CAC: $800 (partnerships mature)
- LTV:CAC → 18:1
- ARR: $412K

---

## 6. GTM Strategy

### GTM Model: **Hybrid Sales-Led Sales + Accountant Partnerships**

**Why Hybrid?**
- Founder-led sales (direct) needed to close first 10 design partners
- Accountant partnerships (channel) unlocks 5-10x reach (Xero/QBO marketplace)
- Freemium self-serve (product-led) drives low-friction leads for nurture

### Phase 1: Founder-Led Sales (Month 1-3, Goal: First 10 Customers)

#### Prospecting Strategy
**ICP Targeting:**
1. **LinkedIn Search** (Primary)
   - Search: "VP Finance" OR "Controller" + "B2B SaaS" + "50-150 employees"
   - Filter: Company size 50-200, US/UK, Tech/SaaS industry
   - 500-1000 prospects × 10-15% qualified = 50-150 monthly conversations
   
2. **Warm Introductions** (Secondary)
   - Leverage founder network: ask existing VCs, founders for intros to finance leaders they know
   - Target: 5-10 warm intros/month
   
3. **Industry Communities** (Tertiary)
   - Y Combinator founders + alumni forums (finance cohort)
   - B2B SaaS founder Slack communities (Section, Founder Collective)
   - AR/Finance professional groups (LinkedIn, Reddit r/accounting)

**Trigger Events for Outreach:**
1. "Series A/B funding announced" → DSO about to matter; add to CRM
2. "Hired VP Finance" → New person = mandate for tech modernization
3. "Switched to Xero/QBO" → Recently migrated = integration headache = perfect timing
4. "DSO > 40 days" → Watch quarterly reports; high DSO = pain point active

**Messaging Framework:**
```
Subject: [Company], your DSO looks high - 10-min idea?

Hi [FirstName],

I noticed [Company] just raised Series B - congrats. 

Quick observation: Most B2B SaaS at your stage have 45-50 day DSO, 
which ties up $500K+ in working capital.

We helped [Peer Company] drop DSO to 35 days in 4 weeks (saves ~$200K in cash).
Takes just 1 day to set up.

Worth 15 mins to see if applicable? (No pressure if not your problem)

[Founder]
```

#### Sales Playbook - Discovery Call Framework
**Goal:** Qualify ICP, quantify pain, identify champion

**Duration:** 25-30 minutes

1. **Warm-up & Problem Validation (5 min)**
   - "Thanks for the time. We help SaaS companies with AR automation. Quick question: How are you handling collections right now?"
   - Listen for: Manual process, spreadsheets, "DSO is an issue"
   
2. **Pain Quantification (8 min)**
   - "What's your current DSO?"
   - "How much time do your team spend on reminders/follow-ups each week?"
   - "What's the cost of capital you're tying up in AR? (30-50 days × daily ARR)"
   - **Key metric to extract:** DSO + team size + ARR → calculate $value at stake
   - Example: "So you're spending ~$80K/year on collections, plus $250K in tied-up working capital. That's $330K of impact."
   
3. **Buying Process & Committee (5 min)**
   - "Who else would be involved in a decision like this?"
   - "If this saved you 10 days and $50K, what would happen?"
   - Identify economic buyer (CFO), champion (Finance Manager), blockers (IT/Security)
   
4. **Timeline & Next Steps (2 min)**
   - "When would you want to have something in place? (Q1? Q2?)"
   - "What would it look like for you to move forward?" (soft close)
   - "Can we set up a 20-min demo for you + [champion] next week?"

**Qualification Criteria (BANT):**
- Budget: $3-6K ACV budget within Finance/CFO budget (✓ if $5M+ ARR company)
- Authority: Speaking to person with sign-off (VP Finance, CFO, or their delegate)
- Need: DSO > 40 days OR >$250K working capital at stake
- Timeline: Want to solve within 6 months

**Objection Handling:**
| Objection | Your Response | Deeper Move |
|-----------|---------------|-------------|
| "We use Bill.com already" | "Bill.com is great for AP. We focus on AR (collections), which is different. Can we take 5 mins to show the difference?" | Explain AI prediction + 1-day setup vs their 2-4 week process |
| "This feels expensive ($699/mo)" | "What's your current DSO cost per day? You're likely at $1K-2K/day in tied-up capital. We typically save that back in 6-8 weeks." | Calculate their working capital cost; position as 2-3 month payback |
| "We need IT approval" | "Standard. What are their security requirements? We have SOC2 roadmap, encrypted data, audit logs. Happy to send security checklist." | Sends confidence; positions for future deals |
| "Not a priority right now" | "Totally fair. How much working capital is tied up in AR today? [Number]. When does that become a problem?" | Plant seed; ask for permission to check in Q1 |

#### Demo Script Outline
**Total duration:** 20 minutes (live, not recorded)

1. **Problem Recap (2 min)**
   - Recap their DSO, working capital cost, team time
   - "So you're looking to improve collections velocity without hiring. Sound right?"
   
2. **Solution Overview (3 min)**
   - "CollectIQ connects to Xero/QBO in 2 minutes. Syncs all your invoices. Then AI predicts which ones will be paid late, and we send smart reminders."
   - Show: Dashboard
   
3. **Live Demo - Invoice Sync (3 min)**
   - Open real Xero/QBO connection
   - Show: "100 invoices synced, real-time, automated daily"
   - Show: Aging report (0-30, 30-60, 60+ buckets)
   - Key metric: "Your current DSO = 46 days. Customers typically drop to 35-38 days in 4 weeks."
   
4. **Live Demo - AI Payment Prediction (3 min)**
   - Show: Invoice list with predicted payment dates (red = high risk, green = on-time)
   - Explain: "ML model trained on 100K+ invoices. Learns your customer behavior."
   - "High-risk invoices get priority reminders. Low-risk get gentle email only. Saves your team 80% of time."
   
5. **Live Demo - Reminder Builder (3 min)**
   - Show: Email template builder with tone options (soft, firm, escalation)
   - Show: Scheduled send times optimized for 70% open rate
   - Show: SMS fallback for 60+ day invoices
   - Explain: "One click, 50 reminders sent in seconds. No manual work."
   
6. **Customer Portal (2 min)**
   - Show: Customer payment portal (mobile-friendly, Stripe integration)
   - Explain: "Customers can self-serve pay. 35% pay early when portal is visible."
   
7. **Metrics & ROI (3 min)**
   - Show: Expected DSO reduction (10-15 days), time saved, capital freed
   - Calculate for their account: "For you: save $50-80K/year, drop DSO 12 days in 60 days"
   - Close: "Does this look like it addresses your challenges?"
   
8. **Next Steps (1 min)**
   - If interested: "Let's get you set up for free as a design partner. 30 days full access, we help implement. Then decide."
   - If unsure: "No pressure. Let's stay in touch — this will be top-of-mind in Q2 when cash flow matters."

#### First 10 Customers Strategy
**Goal:** Land 10 design partners (Month 1-3), each gets:
- 30 days full product access (free)
- Founder implementation support
- Monthly check-ins
- In return: Weekly feedback, case study testimonial, referral network access

**Why design partners vs early paying customers?**
1. Reduces perceived risk (free trial reduces friction)
2. Faster feedback loops (weekly calls = 4x learning speed)
3. Case study assets (social proof > any ad spend)
4. Referral velocity (happy customers = 3-5 warm intros each)

**Targeting for first 10:**
1. **4-5 from warm network** (founder intros)
2. **3-4 from LinkedIn outreach** (500+ outbound → 10-15 qualified → 3-4 close)
3. **2-3 from accountant/channel** (Xero/QBO marketplace early access)

### Phase 2: Accountant Partnership Channel (Month 2-6, Scale)

**Why accountants?**
- 15K+ UK practices on Xero ecosystem + 5K+ US CPA firms
- They recommend AR tools to 10-50 clients each
- Already trusted advisor for finance operations
- Xero/QBO marketplace provides built-in distribution

**Partnership model:**
1. **Xero App Marketplace Listing** (Month 3-4)
   - Submit to Xero App Marketplace
   - Leverage: Free tier + Starter tier as entry
   - Expected reach: 50K+ Xero users discover app/month
   
2. **QuickBooks Online App Store** (Month 4-5)
   - Submit to QBO app store (similar reach)
   
3. **Accountant Affiliate Program** (Month 5+)
   - $200 bounty per paying customer referred
   - Monthly leaderboard (top referrer gets swag/recognition)
   - Target: 50 active accountant referrers generating 5 customers/month each = 250/month

**Freemium funnel for partnerships:**
- Accountant recommends free tier to SMB client
- Client uses free tier for 2-4 weeks (auto-syncs invoices)
- Convert 30-40% to paid Starter tier
- Accountant earns referral bounty
- High viral coefficient for accountants (organic defense of relationship)

### Phase 3: Freemium Self-Serve (Month 4+, Scalable)

**Free tier features (Micro):**
- Xero/QBO integration (read-only sync)
- Up to 100 invoices/month
- Basic DSO dashboard
- Email reminders (1 template, basic sequencing)
- 1 user

**Conversion targets:**
- 30-40% Starter conversion rate within 30 days
- 10-15% Growth tier conversion after 90 days
- NPS: 40+ (target for freemium SaaS)

**Activation metrics to monitor:**
- % who sync accounting software (should be >80% within 24h)
- % who send first reminder (should be >50% within 7 days)
- % who enable Slack/SMS notifications (should be >30%)

---

## 7. Onboarding Flow (Target: <4 Hours to First Value)

### Step 1: Signup & Business Context (5 minutes)
```
Screen 1: Email + Password
├─ Leads to verification email + login

Screen 2: Company Profile
├─ Company Name
├─ Business Type: B2B SaaS? (if yes, unlock Xero integration as priority)
├─ Current Accounting Software: Xero / QuickBooks Online / Other
├─ ARR: <$5M / $5-50M / >$50M
└─ Team Size

Screen 3: Goals
├─ What's your current DSO? (slider or text)
├─ Primary goal: Speed up cash flow / Reduce manual work / Get visibility
└─ Next step: "Great! Let's connect your accounting software"
```

**Time:** 5 minutes
**Activation metric:** Complete all 3 screens

---

### Step 2: Connect Accounting Software (2 minutes)

```
Screen 4: Select Integration
├─ Option 1: Xero [RECOMMENDED for partnerships]
│  └─ "Click to authorize" button
│     → Redirects to Xero OAuth
│     → Returns: "✓ Connected to [Company Name] | 342 invoices synced"
│
├─ Option 2: QuickBooks Online
│  └─ "Click to authorize" button
│     → Redirects to QBO OAuth
│     → Returns: "✓ Connected to [Company Name] | 450 invoices synced"
│
└─ Option 3: Other (Not in MVP)
   └─ "Coming soon: NetSuite, Sage Intacct, Microsoft Dynamics"
```

**Time:** 2 minutes (OAuth handles complexity)
**Activation metric:** Account authorized, invoices synced

**What happens in background:**
- Fetch past 90 days of invoices
- Calculate current DSO
- Populate aging buckets
- Run payment prediction model

---

### Step 3: Configure Reminder Templates (15 minutes)

```
Screen 5: First Reminder Template (Guided)
├─ Default template: "Friendly Reminder: Invoice [#] Due [DATE]"
├─ Tone selector (soft radio buttons with examples):
│  ├─ 😊 Friendly: "Just a gentle reminder..."
│  ├─ 💼 Professional: "Per our terms..."
│  └─ ⚠️ Firm: "This invoice is now [X] days overdue..."
│
├─ Send via:
│  ├─ Email (checked by default)
│  ├─ SMS (optional - requires Twilio API key or we manage)
│  └─ Slack (optional - if they connect Slack)
│
└─ Frequency preview:
   "Day 1 overdue: Email (soft)
    Day 5 overdue: Email (professional)
    Day 15 overdue: Email + SMS (firm)"
```

**Time:** 10 minutes
**Activation metric:** Save first reminder template

```
Screen 6: Review & Enable Automations
├─ Preview of dunning sequence:
│  ├─ Day 0: "No reminder - give time"
│  ├─ Day 5 (overdue): "Email reminder #1 (soft)"
│  ├─ Day 12: "Email reminder #2 (professional)"
│  ├─ Day 20: "Email + SMS (firm)"
│  └─ Day 30+: "Manual escalation suggested"
│
├─ Toggle: [ON] Automatically send reminders
│  (With note: "We use AI to optimize timing & tone for 70% higher open rates")
│
├─ [Next Step] "Take me to the dashboard"
└─ [Alternative] "Let me invite team members first"
```

**Time:** 5 minutes
**Activation metric:** Enable auto-reminders

---

### Step 4: Invite Team Members (Optional in MVP, <5 minutes)

```
Screen 7: Add Team (Optional in MVP)
├─ "Who else on your team should have access?"
├─ Email 1: [____________________] Role: Owner / Finance Manager / AR Specialist
├─ Email 2: [____________________] Role: [dropdown]
├─ "+ Add more"
│
└─ [Skip] "I'll add them later"
   [Continue] "Send invites"
```

**Time:** 2-3 minutes (or skip entirely)
**Activation metric:** Invite at least 1 team member (optional; some SMBs are solo)

---

### Step 5: First Value (2 minutes)

```
Screen 8: Welcome Dashboard
├─ Header: "✓ Setup complete! Here's your dashboard:"
├─ Key metrics cards (big, visible):
│  ├─ Current DSO: 46 days (down from 50 is goal)
│  ├─ Unpaid invoices: 87 ($320K total)
│  ├─ Overdue invoices: 12 ($45K total)
│  └─ On-time rate: 92%
│
├─ Aging breakdown (visual):
│  ├─ 0-30 days (green): 60 invoices / $180K
│  ├─ 30-60 days (yellow): 20 invoices / $90K
│  └─ 60+ days (red): 7 invoices / $50K
│
├─ Next actions (buttons):
│  ├─ [Send Reminders Now] → Triggers email to overdue customers
│  ├─ [View Payment Portal Link] → Share with customers
│  ├─ [Connect Payment (Stripe)] → Enable customer self-serve
│  └─ [Learn More] → Help center + video tutorials
│
└─ Quick tip: "💡 We recommend sending reminders to your 7 red invoices now.
              They're predicted to go 90+ days late. [Send Reminders]"
```

**Time:** 2 minutes
**Activation metric:** View dashboard, see 3+ metrics

---

### Onboarding Timeline Summary
| Step | Time | Activation Metric | User | Notes |
|------|------|-------------------|------|-------|
| 1. Signup | 5 min | Complete profile | First-time user | Async; can set up alone |
| 2. Connect Accounting | 2 min | Authorize OAuth | Finance manager | Real-time sync starts |
| 3. Configure Reminders | 15 min | Enable auto-send | Finance manager | Guided; default options work |
| 4. Invite Team | 5 min | Send 1+ invite | Finance manager | Optional; can skip |
| 5. Dashboard | 2 min | View metrics | End user (AR specialist) | First value visible |
| **Total** | **~29 min** | **Dashboard live** | **Finance team** | **< 1 hour target** |

### Activation Targets (KPIs to Monitor)
| Metric | Target | Notes |
|--------|--------|-------|
| **Onboarding completion rate** | ≥ 80% | % who start and finish onboarding |
| **Time to first sync** | < 5 min | Measure from OAuth completion to "invoices synced" |
| **Time to first reminder send** | < 30 min | % who send at least 1 email within 30 min of setup |
| **Dashboard view completion** | ≥ 90% | % who view metrics at least once in first session |
| **First value realization** | < 4 hours | From signup to "invoices synced + first metric visible" |
| **7-day retention** | ≥ 70% | % who return for 2nd+ session within 7 days |
| **30-day conversion (freemium)** | 30-40% | % who upgrade from free to paid within 30 days |

---

## 8. 8-Week Development Timeline (MVP Launch)

### **Week 1: Architecture & Integrations Setup**
**Goal:** Foundation is solid; Xero/QBO APIs integrated

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | Database schema + API architecture design | Tech Lead | ERD diagram; API spec doc |
| Tue-Wed | Xero OAuth integration setup | Backend | Test OAuth flow working |
| Wed-Thu | QBO OAuth integration setup | Backend | Test OAuth flow working |
| Thu-Fri | Frontend boilerplate (Next.js/React) | Frontend | Repo set up; auth scaffolding |

**Deliverable:** Xero/QBO test OAuth flows working; frontend repo running locally

---

### **Week 2: Auth & Invoice Sync (Core)**
**Goal:** OAuth login + first invoices syncing

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | User auth system (JWT, refresh tokens) | Backend | Login/signup endpoints tested |
| Tue-Wed | Xero invoice fetch + store in DB | Backend | Cron job pulling invoices daily |
| Wed-Thu | QBO invoice fetch + store in DB | Backend | Dual sync working in parallel |
| Thu-Fri | Login/onboarding flow (screens 1-2) | Frontend | Forms functional; OAuth redirect works |

**Deliverable:** Users can sign up, authorize accounting software, see invoices in DB

---

### **Week 3: Dashboard & Reporting**
**Goal:** Core metrics visible; DSO calculated

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | DSO calculation algorithm | Backend | Accurate DSO for test accounts |
| Tue-Wed | Aging bucket calculation (0-30, 30-60, 60+) | Backend | Queries fast; accurate | 
| Wed-Thu | Dashboard component (cards, metrics, charts) | Frontend | Visual display of DSO, aging, overdue count |
| Thu-Fri | Reporting service (exports, trend data) | Backend | CSV export working; historical trend queries |

**Deliverable:** Users see real DSO, aging breakdown, unpaid invoice count

---

### **Week 4: Payment Prediction Model**
**Goal:** AI/ML prediction deployed; first predictions live

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | ML model design (logistic regression baseline) | ML Eng | Model spec; feature engineering plan |
| Tue-Wed | Feature engineering (invoice age, customer history, industry) | ML Eng | Training dataset prepared |
| Wed | Model training on synthetic data (100K+ test invoices) | ML Eng | Model.pkl saved; 85%+ accuracy |
| Thu-Fri | Inference API (real-time prediction for each invoice) | Backend | Prediction latency < 100ms |

**Deliverable:** Each invoice in dashboard has "Risk Level" (Red/Yellow/Green) + predicted payment date

---

### **Week 5: Email Reminders & Notifications**
**Goal:** First reminders sent; templates customizable

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | Reminder template builder (UI screens 5-6) | Frontend | Template creation/editing working |
| Tue-Wed | SendGrid email integration | Backend | Test email sends; rate limit handling |
| Wed-Thu | Dunning sequence scheduler (cron-based) | Backend | Scheduled emails queued; delivery tracking |
| Thu-Fri | Tone/tone selector UI (soft/firm options) | Frontend | Template preview with tone examples |

**Deliverable:** Users can create templates; test emails send; auto-reminders scheduled

---

### **Week 6: Customer Portal & Stripe**
**Goal:** Customer payment portal live; Stripe integration

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | Payment portal UI (public, no auth needed) | Frontend | Invoice list, pay now button |
| Tue-Wed | Stripe payment integration | Backend | Test payments process end-to-end |
| Wed-Thu | Auto-reconciliation (Xero/QBO payment marking) | Backend | Stripe payment → Xero/QBO marked as paid |
| Thu-Fri | Mobile responsiveness + accessibility | Frontend | Portal works on mobile; WCAG AA compliant |

**Deliverable:** Customers can view invoices, pay via Stripe, payments auto-reconcile

---

### **Week 7: Onboarding Flow & Polish**
**Goal:** Full onboarding working; UX polish

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | Complete onboarding flow (screens 1-8) | Frontend | Signup → Dashboard in <4 hours |
| Tue-Wed | Email verification + password reset flows | Backend | Auth flows complete |
| Wed-Thu | Help center + in-app tooltips | Content | 10-15 help articles; guided tour |
| Thu-Fri | Bug fixes + performance tuning | Full Team | Lighthouse score >90; <2s page load |

**Deliverable:** Fresh user can go from signup to sending first reminder in 30 min

---

### **Week 8: Launch Prep & Buffer**
**Goal:** Beta launch with first 3-5 design partners

| Day | Task | Owner | Output |
|-----|------|-------|--------|
| Mon-Tue | Security audit + SOC2 prep | DevOps/Security | Encrypted data at rest/transit; audit logs |
| Tue-Wed | Documentation (API docs, help center) | Tech Lead / Content | Full API spec; setup guides for integrations |
| Wed | Beta launch with 3 design partners | Founder | Onboard; weekly feedback calls |
| Thu-Fri | Monitor + iterate based on feedback | Full Team | Bug fixes; quick wins from feedback |

**Deliverable:** 3-5 customers in beta; handling real invoice data; weekly iteration cycle

---

### MVP Launch Checklist (Week 8)

**Product**
- [x] Xero integration (read/write)
- [x] QBO integration (read/write)
- [x] Invoice dashboard (DSO, aging, overdue)
- [x] Payment prediction model
- [x] Email reminder automation
- [x] Customer payment portal (Stripe)
- [x] User management (basic RBAC)
- [x] Mobile-friendly UI
- [x] Data export (CSV)

**Infrastructure**
- [x] PostgreSQL database (encrypted)
- [x] Redis caching (sessions)
- [x] AWS S3 (exports, docs)
- [x] SendGrid (email delivery)
- [x] Stripe (payment processing)
- [x] Monitoring + alerting (Datadog/New Relic)
- [x] Automated backups
- [x] SSL/TLS encryption

**Security & Compliance**
- [x] User authentication (JWT + refresh tokens)
- [x] Role-based access (basic RBAC)
- [x] Audit logging (all user actions)
- [x] Data encryption at rest
- [x] Rate limiting on APIs
- [x] SOC2 Type II roadmap initiated
- [x] PCI DSS compliance for Stripe

**Go-to-Market**
- [x] Landing page + pricing page
- [x] Help center (10+ articles)
- [x] 1-page product sheet
- [x] Case study template (for design partners)
- [x] Sales deck (5-7 slides)
- [x] Cold email template (tested with 5+ prospects)
- [x] Demo script documented

**Operations**
- [x] Design partner agreements (3-5)
- [x] NPS survey in product
- [x] Usage analytics (conversion funnel, onboarding flow)
- [x] Support email setup
- [x] Slack community (optional, for feedback)

---

## 9. Success Metrics & Targets

### Activation Metrics (First 7 Days)
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **Signup Completion Rate** | ≥ 80% | Indicates onboarding ease; baseline funnel health |
| **Time to First Invoice Sync** | < 5 min | Measure of OAuth UX quality |
| **Time to First Reminder Send** | < 30 min | Measure of template UX; engagement signal |
| **Dashboard View Rate** | ≥ 90% | Core value prop visibility |
| **Account Verification Rate** | ≥ 95% | Email list quality; engagement baseline |

### Engagement Metrics (30 Days)
| Metric | Target | Notes |
|--------|--------|-------|
| **7-Day Retention** | ≥ 70% | % returning ≥2nd time within 7 days |
| **30-Day Retention (Free)** | ≥ 40% | Design partners should be >60% |
| **Avg Sessions / User / Week** | ≥ 2 | Frequency of dashboard checks |
| **Avg Time in App / Session** | ≥ 8 min | Engagement depth; template building takes time |
| **Reminders Sent (per user)** | ≥ 50 | Monthly active usage; ARR correlation |

### Payoff Metrics (60-90 Days)
| Metric | Target | Notes |
|--------|--------|-------|
| **DSO Reduction** | 8-12 days average | Primary value metric; customer expectation |
| **Payment Collection Rate Lift** | +3-5% | More payments received; quantified ROI |
| **NPS (Design Partners)** | ≥ 50 | Strong early signal of product-market fit |
| **% Satisfied with Setup** | ≥ 85% | "Would recommend" proxy |
| **Payback Calculation** | $50-80K value realized | Users feel ROI within 90 days |

### Acquisition & Conversion Metrics
| Metric | Target | Notes |
|--------|--------|-------|
| **Freemium to Starter Conversion (30d)** | 30-40% | If launched with freemium tier |
| **Warm Intro Close Rate** | ≥ 30% | Founder-led sales quality |
| **LinkedIn Cold Outreach Response Rate** | 5-8% | Standard B2B SaaS benchmark |
| **Sales Cycle Length** | 2-3 weeks | Founder-led SMB deals move fast |
| **CAC (Year 1)** | < $3,000 | Against $4,500 ACV target |

### Churn & Retention Metrics
| Metric | Target | Notes |
|--------|--------|-------|
| **Monthly Churn (Gross)** | ≤ 5% | Industry baseline for SMB SaaS |
| **Monthly Churn (Net)** | 0% to -3% | Expansion revenue offsets churn |
| **12-Month Survival Rate** | ≥ 85% | Design partner cohort should be >90% |
| **NPS Score** | ≥ 40 | Sticky product signal; referral driver |

### Financial Metrics (Year 1)
| Metric | Target | Status |
|--------|--------|--------|
| **MRR by Month 6** | $20-25K | 10 customers × $2.5K avg + expansions |
| **ARR by Month 12** | $120-150K | 25-30 customers; churn ~5% |
| **Gross Margin** | ≥ 80% | SaaS model; minimal COGS |
| **CAC Payback Period** | < 8 months | 30-month LTV with 5% churn |
| **Breakeven ARR** | $50K | Team of 3-4; covers salary + ops |

---

## 10. Risk Assessment & Mitigation

### Market & Competitive Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Bill.com / Chaser competitive response** | High | Medium | Launch with 70%+ automation, 1-day setup, $3-6K price (hard to match). Build on partnerships (Xero/Accountants); defensible channel |
| **Long sales cycle (30-60 days vs expected 14 days)** | Medium | High | Target design partners with warm intros; short first 10 customers cycle. Free trial removes friction. |
| **Limited TAM within SMB only** | Low | Medium | Design with enterprise upgrade path; scale to 150-300 emp companies in Y2; build API for partnerships |
| **Economic downturn → CFO budgets freeze** | Medium | High | Position as cost-saving (saves $50K/year). Target funded companies (Series A/B have cash). Focus on "DSO improvement" = working capital freed = self-funding. |

### Product & Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Xero/QBO API changes break integration** | Low | Medium | Monitor API roadmaps; maintain 2-3 version support. Join Xero/QBO partner programs early. |
| **Payment prediction model accuracy is 60% (not 85%)** | Medium | Medium | Start with conservative model (simple rules); improve over time. User expectations set via "beta" label; iterate openly. |
| **Stripe rate limits / payment failures at scale** | Low | Medium | Implement circuit breakers; use Stripe as primary, add Braintree as backup in Y2. |
| **Multi-tenancy bugs (data leakage)** | Low | Critical | Implement strict customer isolation tests; run security audit Week 8. Bug bounty program in Y2. |
| **Onboarding is 2-4 hours, not 1 hour** | Medium | Medium | Set expectations at "under 4 hours" in marketing. Offer free implementation calls for first 10. |

### GTM & Unit Economics Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **CAC is $5K (not $2.5K); breaks unit economics** | Medium | High | Rely heavily on free tier + accountant channel (low CAC path). Freemium conversion + partnerships should hit $1.2-1.5K CAC in Y1. |
| **5% monthly churn is actually 10%** | Medium | High | Design partner program ensures high retention (60%+ Y1). Real churn monitessing from Month 4+; pivot if needed. |
| **Design partner feedback: "Needs [feature]" → scope creep** | High | Low | Scope lock for MVP weeks 1-8. Roadmap for P1/P2 features; communicate clearly. Only critical bugs in MVP. |
| **Accountant partnerships are slow to land (6-12 months)** | Medium | Low | Launch free tier in Month 4-5 (self-serve funnel). Don't rely solely on partnerships for Year 1 growth; direct sales is backup. |
| **Pricing is too low; should be $1K ACV minimum** | Low | Low | Increase Starter to $399, Growth to $799 in Month 4-6 if traction is strong. Early design partners locked in at $299-699; negotiate at renewal. |

### People & Execution Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Founder bandwidth (solo/small team)** | High | Medium | Hire first contractor (backend or frontend) by Week 3. Design partner onboarding is founder-led (necessary for learning); ops outsourced by Month 4. |
| **Key integration (Xero/QBO) takes 4 weeks instead of 2** | Medium | High | Start API integration in Week 1. If blocked, pivot to Zapier-based interim solution (slower, but ships). Plan for 20% time buffer. |
| **Developer experiences complexity of payment reconciliation** | Medium | Medium | Use pre-built SDKs (Stripe SDK, Xero SDK); outsource complex accounting logic to 3rd-party library if needed. |

---

## 11. Founder-Market Fit

### Required Skills/Experience
| Area | Required | Ideal For Founder | Gap Mitigation |
|------|----------|-------------------|-----------------|
| **Domain expertise (AR/Finance)** | Medium | Understanding of DSO, collections, AR pain points | Hire CFO/AR consultant as advisor (equity stake) |
| **Sales ability (B2B founder sales)** | High | Ability to do 20 outbound calls/week; close design partners | Core founder skill; hire sales advisor if weak |
| **Technical (build MVP)** | High | Fullstack engineer or strong product + engineer co-founder | Hire first contractor if solo; outsource non-core |
| **Network (access to ICP)** | Medium | Know 10-20 B2B SaaS founders; investor intros for warm ICP access | Lean on LinkedIn + Y Combinator network; ask VCs for intros |
| **Fintech regulatory knowledge** | Low | Understand PCI DSS, SOC2 requirements | Hire security consultant for compliance roadmap (avoid in MVP) |

### Red Flags (Stop Signals)
- Cannot close 1st customer via warm intro in first 2 weeks (indicates misunderstanding of ICP or sales ability)
- Payment prediction model achieves <70% accuracy after 4 weeks (indicates product-market risk)
- Design partners churn before 90 days (indicates product doesn't deliver value)
- Tax/compliance becomes blocker (outsource; don't let it slow MVP)

---

## 12. Next Steps & Month 1 Priorities

### Immediate (Days 1-7)
1. [ ] Create 50-person LinkedIn list (VP Finance, Controller, B2B SaaS companies, 50-150 emp)
2. [ ] Draft 3 versions of cold email; test with 5 responses
3. [ ] Schedule 10 warm intro calls with founders/VCs in network
4. [ ] Hire/contract first backend engineer (Xero/QBO integration owner)
5. [ ] Set up Figma design system for onboarding flow

### Week 2-3
1. [ ] Complete 5 cold calls; identify 2-3 design partner prospects
2. [ ] 3 warm intro calls → 1 design partner committed
3. [ ] Backend engineer: Xero OAuth working in staging
4. [ ] Frontend engineer hired (or freelance)
5. [ ] Create 1-page product spec; share with advisors for feedback

### Week 4-6
1. [ ] First 3 design partners signed (free trial agreements)
2. [ ] Xero + QBO integrations passing integration tests
3. [ ] Onboarding flow (screens 1-3) functional
4. [ ] Payment prediction model trained
5. [ ] 2 more design partners in conversation

### Month 2
1. [ ] 10 design partners live (each running for 2-4 weeks)
2. [ ] MVP feature-complete (dashboard, reminders, portal)
3. [ ] Weekly feedback loops with design partners; iterate
4. [ ] 3-5 case study conversations started
5. [ ] Landing page + pricing page live

### Launch Readiness (Week 8)
- [ ] 3-5 design partners producing case studies / testimonials
- [ ] Feature-complete MVP (P0 features)
- [ ] Onboarding < 4 hours, 70%+ completion rate
- [ ] Infrastructure secure (SOC2 roadmap, data encryption)
- [ ] Sales playbook documented + tested
- [ ] Ready for public beta / accountant partnerships

---

## Appendix: Glossary & Definitions

**DSO (Days Sales Outstanding):** Number of days between invoice and cash received. High DSO = capital tied up; typical SMB SaaS = 45-50 days; goal with CollectIQ = 30-35 days.

**ACV (Annual Contract Value):** Average revenue per customer per year. CollectIQ targets $3-6K ACV ($249-699/month).

**CAC (Customer Acquisition Cost):** Total cost to acquire one customer. CollectIQ targets <$3K CAC in Year 1 (through founder sales + partnerships).

**LTV (Lifetime Value):** Total revenue a customer generates over lifetime. LTV:CAC ratio of ≥3:1 indicates healthy unit economics.

**NRR (Net Revenue Retention):** % of revenue retained from previous period, including expansion revenue. >100% NRR = growth from existing customers.

**Design Partners:** Early customers who get free or discounted access in exchange for weekly feedback + case study. Key for validation.

**Dunning:** Process of reminding customers to pay overdue invoices. "Smart dunning" = AI-optimized timing + tone.

**B2B SaaS ICP:** Ideal Customer Profile; companies that match our target (50-150 emp, $5-50M ARR).

---

## Key Success Indicators (Next 60 Days)

✅ **Week 4:** 3 design partners signed and onboarded
✅ **Week 6:** Xero/QBO integrations syncing real invoices
✅ **Week 8:** MVP launches with 5+ design partners actively using
✅ **Day 60:** First 2-3 design partners report 8-12 day DSO reduction
✅ **Day 60:** NPS ≥ 40 from design partners
✅ **Day 60:** 1 case study testimonial + ROI data point ready

---

*This MVP design is ready for Codex Round 1 review. Recommend validation of:*
1. *Unit economics viability (LTV:CAC, payback period)*
2. *Go-to-market playbook realism (sales cycle, close rates)*
3. *Product-market fit risk (payment prediction accuracy, DSO reduction claims)*
4. *Competitive positioning (vs Bill.com, Chaser, spreadsheets)*

# 📋 PRE-LAUNCH ACTION PLAN
**AI Security Awareness Training Platform for SMB**  
**Timeline**: Weeks 0-14 (Pre-MVP Launch)  
**Objective**: De-risk validation + MVP development in parallel

---

## PHASE 1: VALIDATION & DE-RISKING (Weeks 0-2)
**Objective**: Identify and resolve critical blockers before engineering kickoff  
**Owner**: Founder

### 1.1 Founder-Market Fit Assessment (3 hours)
**Task**: Document founder's background and capability gaps

**Checklist**:
- [ ] **Security Domain Expertise**:
  - Have you worked in cybersecurity before? (1-2 companies, 1+ years)
  - Do you have certifications? (Security+, CISSP, CISM, etc.)
  - Do you have relationships with CISOs/IT security leaders? (10+)
  - **If no**: Commit to 2-week intensive learning (SANS, CSO, Coursera security course)

- [ ] **B2B Sales Experience**:
  - Have you done founder-led sales before? (Successful exit, $1M+ ARR built)
  - Can you do cold calls + discovery without cringing? (Plan for 50/week)
  - Do you have a network of IT Directors/VP Ops? (20+)
  - **If no**: Consider hiring Head of GTM co-founder or committing to sales training

- [ ] **Product Development**:
  - Full-stack engineer (Node/React)? Or plan to hire?
  - Built SaaS before? (Yes = faster; No = plan for CTO co-founder)
  - Ready for 60+ hour weeks for 6 months? (Burnout risk)

**Output**: 1-page assessment + action plan for gaps
**Decision gate**: If <2 of 3 core skills present, hire co-founder before proceeding

---

### 1.2 ICP Validation via Cold Calls (6 hours)
**Task**: Validate sales cycle, churn risk, and pain points with 5 IT Directors

**Sequence**:
- [ ] Create target list: 10 IT Directors/VP Ops at SMBs (50-150 emp, $5-50M revenue)
- [ ] LinkedIn search: "IT Director" OR "VP Operations" OR "VP Technology" + company size filter
- [ ] Send cold LinkedIn message: "Quick question on your security training process..." (keep under 100 words)
- [ ] Book 15-20 min calls (expect <10% response rate = 1-2 calls from 10 outreaches)

**Discovery call script** (15 minutes):
```
1. Intro (1 min): "Hi [Name], I'm building security training software for SMBs. Curious about your process."

2. Problem discovery (5 min):
   - "How do you currently approach phishing/security awareness training?"
   - "What's the biggest pain point? (Time, cost, compliance, employee results?)"
   - "What tools do you use today?" (KnowBe4, Cofense, nothing, manual?)

3. Buying process (5 min):
   - "If you were to replace your current solution, how long would that take?"
   - "Who else would need to sign off?" (CISO, CFO, CIO?)
   - "What's your typical compliance audit cycle?" (Q1, Q4, as-needed?)

4. Close: "Thanks, very helpful. Mind if I send you a demo in 2 weeks?"
```

**Data to capture**:
- Sales cycle: "How long from first meeting to decision?"
  - **Expected**: 45-90 days (vs claim of 22-43 days)
  - **Pass criteria**: ≥3 calls confirm 45-60 day cycle
  
- Churn risk: "How often do you switch tools?"
  - **Expected**: "Yearly, multi-year contracts, don't switch often if working"
  - **Pass criteria**: Evidence that compliance requirements create stickiness

- Pain points: "What's missing from KnowBe4 / current tool?"
  - **Expected**: "Too expensive, hard to use, slow to deploy, no Slack integration"
  - **Pass criteria**: 3+ calls mention cost/ease-of-use as top pain

**Output**: Call notes + 1-page summary of findings
**Decision gate**: If sales cycle confirms >60 days, adjust cash flow projections

---

### 1.3 NRR Strategy Definition (4 hours)
**Task**: Create explicit expansion revenue strategy (non-negotiable)

**Workshop structure** (4 hours, with advisor or co-founder):

**Section 1: Seat Expansion (1 hour)**
- SMBs grow from 50 → 75 → 100+ employees over 2-3 years
- Per-seat pricing ($250-400/user/year) scales automatically
- **Target**: 10-15% annual seat growth per customer

Example:
```
Year 1: Customer has 50 employees at $25K (50 × $500/user)
Year 2: Customer has 60 employees at $25K → revenue grows to $30K (+$5K expansion) 
Year 3: Customer has 70 employees at $25K → revenue grows to $35K (+$10K expansion)
```

- [ ] Define seat expansion targets: "By Year 2, median customer will grow from 65 → 75 seats"
- [ ] Plan: How will we stay engaged to capture this? (CS metrics? Account reviews?)

**Section 2: Tier Upsells (1 hour)**
- Starter ($7K for <25 emp) → Pro ($25K for 25-100 emp) as company grows
- Add-on modules: Compliance (+$5K), Advanced Analytics (+$3K)
- **Target**: 15% of Starters → Pro migration by Year 2

Example:
```
Year 1: 50% Starter, 40% Pro, 10% Enterprise
Year 2: 35% Starter, 50% Pro, 15% Enterprise (more mature customers)
Year 1 ACV: $22K
Year 2 ACV: $29K (+$7K from mix shift)
```

- [ ] Define tier progression: When do we pitch Starter → Pro? (Customer size, product usage?)
- [ ] Plan: Who owns this conversation? (Founder vs CS hire?)

**Section 3: Module Add-ons (1 hour)**
- Post-initial deployment (Month 3-6), offer compliance modules:
  - HIPAA template bundle (+$5K)
  - PCI-DSS compliance pack (+$5K)
  - Advanced behavioral profiling (+$3K)
- **Target**: 20% of Pro/Enterprise customers buy 1+ module in Year 2

- [ ] Define: Which modules first? (Start with HIPAA + PCI, defer others)
- [ ] Plan: Sales motion (founder calls, CS upsell, or automated?)

**Section 4: NRR Target (1 hour)**
- Calculate blended NRR target:
  - Base: -15% churn (realistic for SMB training SaaS)
  - Seat expansion: +10% (organic growth as customers hire)
  - Tier upsells: +5% (Starter → Pro migrations, module add-ons)
  - **Net NRR**: 100% - 15% + 15% = 100% (flat; need more expansion to grow)

- [ ] Revised target: Aim for 95%+ NRR by Year 2
  - This means: Seat expansion (10%) + Upsells (10%) - Churn (15%) = 95% NRR
  - Path: Grow expansion from 0% (Year 1) → 20% (Year 2) to hit target

**Output**: 3-page NRR strategy doc with:
- Seat expansion targets (by customer cohort)
- Tier upsell playbook (when + how + who)
- Module add-on roadmap (priority order)
- Year 2 NRR target: 95%+, Year 3: 100%+

**Decision gate**: Strategy must be specific (not vague). If missing detail, iterate until concrete.

---

### 1.4 MVP Scope Refinement (2 hours)
**Task**: De-scope features to ensure 14-16 week timeline (not 12)

**Current MVP scope** (too broad):
- User management + RBAC
- 20 phishing templates + AI variance
- Phishing campaign delivery + real-time tracking
- Slack integration
- Teams integration (NEW: REMOVE)
- HRIS sync (Workday, BambooHR)
- Compliance reporting (SOC2, ISO27001, HIPAA)

**Revised MVP scope** (14-16 weeks):

| Feature | Priority | Timeline | Keep/Cut |
|---------|----------|----------|----------|
| User management + RBAC | P0 | Week 1-2 | KEEP |
| 20 phishing templates | P0 | Week 2-4 | KEEP (reduce to 10 core templates) |
| AI variance generation | P0 | Week 5-8 | KEEP (2-3 variants, not 5+) |
| Phishing delivery + real-time tracking | P0 | Week 3-5 | KEEP |
| Smart reporting dashboard | P0 | Week 4-6 | KEEP |
| Slack integration + alerts | P1 | Week 6-9 | KEEP |
| Teams integration | P2 | Week 8-11 | **CUT** (move to Month 4 post-launch) |
| HRIS sync (Workday/BambooHR) | P1 | Week 10-12 | REDUCE to Workday only (defer BambooHR) |
| Compliance reporting | P1 | Week 9-12 | REDUCE to 2 templates (SOC2, ISO27001 only; defer HIPAA) |

**Rationale**: 
- Teams is nice-to-have (only 40% of SMBs use; Slack first makes sense)
- HRIS: 80% of SMBs use Workday or Google Workspace (pick 1)
- Compliance: 2 templates cover 80% of SMB use case; others can be template-based

**New timeline**: 
- Week 1-6: Core (campaigns + reporting)
- Week 7-10: Integrations (Slack + Workday)
- Week 11-14: Polish + compliance + buffer

**Output**: Updated feature roadmap with Week-by-week breakdown
**Decision gate**: Founder + Engineer must agree timeline is realistic (14 weeks, not 12)

---

## PHASE 2: GTM PREP IN PARALLEL (Weeks 2-6)
**Objective**: Build sales collateral while engineering builds MVP  
**Owner**: Founder (with contractor if needed)

### 2.1 Sales Collateral (4 days, Week 2)
**Deliverables**:

- [ ] **1-pager**: 
  - Headline: "Security awareness training for SMBs, 50% cheaper than KnowBe4"
  - Problem: "Manual training (160 hrs/year), 33% phishing click rate, compliance audit prep nightmare"
  - Solution: "AI-powered training, 12% click rate in 90 days, 1-click compliance reports"
  - ROI: "$160K saved in breach costs, 6.5x ACV value in Year 1"
  - CTA: "Book a demo"

- [ ] **ROI Calculator** (Google Sheets):
  - Input: Employee count, current tool cost, current training hours
  - Output: "You're losing $XXK/year. SecureAware saves $XXK."
  - Example: "100 employees, $50K/year on KnowBe4 → Save $25K (half cost) + $160K breach risk = $185K value"

- [ ] **Competitive comparison doc**:
  - vs KnowBe4: "$150-300/user/year vs our $250/user/year; we're 40% cheaper + faster setup"
  - vs Cofense: "Focused on phishing; we add training modules + compliance"
  - vs DIY (spreadsheets): "80% of admin time with us vs 160 hrs/year manual"

- [ ] **Demo script** (5-minute walkthrough):
  - Login screen
  - Select phishing template (from 10-template library)
  - Request AI variants (show 3 options)
  - Target audience (select team/department)
  - View results in real-time
  - Export compliance report
  - Slack integration notification (demo flow)

**Output**: Files committed to repo + shared in Google Drive
**Timeline**: 4 days, Weeks 2-3

---

### 2.2 Beta Customer Recruitment (2 weeks, Weeks 2-4)
**Objective**: Sign 3-5 beta customers to validate product + get case studies

**Strategy**:
- [ ] Create "Beta Program" framing: "Free 60-day trial in exchange for weekly feedback calls"
- [ ] Target: 3 SMBs that fit ICP perfectly (high likelihood of success = good testimonial)
- [ ] Warm intros only (use Founder's network, advisor network, LinkedIn warm connections)

**Outreach sequence**:
1. Personalized email: "We're building [product]. Noticed you're responsible for security training at [Company]. Would you be open to trying our beta (free, 60 days)?"
2. LinkedIn message (if no email response): "Saw your profile, thinking of you for our beta test..."
3. Phone call (if needed): Quick 15-min exploratory call

**Screening criteria** for beta customers:
- SMB (50-150 emp)
- Currently using training tool or considering it
- IT Director/VP Ops who can commit to 1x/week feedback calls
- Willing to be case study/testimonial (if positive result)

**Beta success criteria** (60 days):
- Deployed phishing campaign (yes/no)
- Results: Measured phishing click rate reduction
- Satisfaction: Would recommend to peer?
- Case study quote: "Reduced phishing clicks from XX% to XX% in 60 days" or similar

**Timeline**: Outreach Week 2-3, Recruitment Week 3-4, Deployment Week 4+

---

### 2.3 Landing Page + G2/Capterra Profiles (3 days, Week 5)
**Deliverables**:

- [ ] **Landing page** (basic, no fancy animations):
  - Hero: "AI Security Awareness Training, Built for SMBs"
  - Problem: "Phishing attacks cost SMBs $200K+ annually"
  - Solution: "Reduce phishing clicks 40% in 90 days. $25K/year (50% less than KnowBe4)"
  - 3 key features: AI content, Slack integration, 1-click compliance
  - Video demo (link or embedded)
  - Pricing table ($7K, $25K, $50K)
  - CTA: "Try for free" or "Book a demo"
  - Social proof: Early customer quotes (beta testers)

- [ ] **G2 profile**:
  - Fill out basic info (pricing, features, integrations)
  - Add founding story + team
  - Ask beta customers to leave reviews (offer $50 gift card if they do)

- [ ] **TrustRadius profile**:
  - Similar to G2
  - Encourage honest reviews (not fake glowing)

**Timeline**: 3 days, Week 5

---

## PHASE 3: MVP DEVELOPMENT (Weeks 4-14)
**Objective**: Build core MVP features on schedule  
**Owner**: Founder + 1-2 Engineers

### 3.1 Engineering Setup (Week 1)
- [ ] GitHub repo + CI/CD pipeline (GitHub Actions)
- [ ] Database schema design (PostgreSQL)
- [ ] API spec (OpenAPI/Swagger)
- [ ] Staging environment setup (AWS EC2 or Vercel)
- [ ] Daily standup schedule (9am Pacific, 15 min)

### 3.2 Weekly Sprint Planning (Weeks 2-14)
- [ ] Monday: Sprint planning (Week's features, blockers, dependencies)
- [ ] Wednesday: Mid-sprint check-in (On track? Off track? Scope cuts needed?)
- [ ] Friday: Sprint review (Demo features, get feedback)
- [ ] Weekly: Deployment to staging (even if not fully tested yet)

**Milestone targets**:
- Week 2: Auth + user management done
- Week 4: Phishing campaign builder (Steps 1-3 of 5)
- Week 6: Campaign delivery + real-time tracking
- Week 9: Slack integration + compliance templates
- Week 12: Polish + bug fixes
- Week 14: Ready for launch (with 2-week buffer)

---

## PHASE 4: PRE-LAUNCH PREP (Weeks 12-14)
**Objective**: Ready for public launch by Week 14-16  
**Owner**: Founder

### 4.1 Day 1 Launch Plan (1 day, Week 12)
- [ ] **Channel strategy**:
  - Primary: Product Hunt (Week 14 Monday or Tuesday)
  - Secondary: Warm email launch (Founder's network, 150-200 people)
  - Tertiary: LinkedIn post (Founder's personal account, professional network)

- [ ] **Product Hunt setup**:
  - Account created + profile complete
  - Product uploaded + thumbnail image
  - Maker response plan (commit to 8am-6pm PDT answering comments)
  - Goal: Top 10 of the day (realistic) or Top 3 (moonshot)

- [ ] **Email launch list**:
  - Compile warm contacts (investors, advisors, beta customers, founder network)
  - 150-200 emails target
  - Draft email: Subject "Launching tomorrow: Security awareness training for SMBs"
  - Include: Link to Product Hunt + landing page + early-bird offer (discount for first 10 customers)

- [ ] **LinkedIn post**:
  - Founder shares story: "After 6 months building, we're launching SecureAware AI..."
  - Include: Problem, solution, link
  - Ask for shares/comments (network amplification)

### 4.2 Customer Success Prep (3 days, Week 13)
- [ ] **Onboarding playbook**:
  - 5-step user onboarding (documented in MVP design spec)
  - Support email address (founder or VA should respond within 4 hours)
  - Knowledge base (5-10 FAQ articles on setup, integrations, compliance)

- [ ] **SLA commitment**:
  - Response time: <4 hours (weekdays), <24 hours (weekends)
  - Bug fix: Critical bugs fixed within 24 hours
  - Feature requests: Tracked publicly (GitHub issues) with prioritization

### 4.3 Go/No-Go Launch Decision (2 days, Week 14)
**Checklist**:
- [ ] MVP meets 80% of spec (non-critical features OK to defer)
- [ ] No critical security vulnerabilities (basic security audit done)
- [ ] 3-5 beta customers have deployed phishing campaigns successfully
- [ ] Landing page + pricing + demo video live
- [ ] Support team ready (founder + VA at minimum)

**If Go**:
- [ ] Launch on Product Hunt (Week 14)
- [ ] Send launch email (Day 1)
- [ ] Post LinkedIn (Day 1)
- [ ] Target: 50-100 trials by Day 7

**If No-Go**:
- [ ] Identify blockers (missing features? bugs? scope creep?)
- [ ] Extend timeline 1-2 weeks if needed
- [ ] Do not compromise on quality (bugs = bad first impression)

---

## PHASE 5: LAUNCH & CUSTOMER ACQUISITION (Weeks 14-20)
**Objective**: Acquire first 5-8 paying customers, validate unit economics  
**Owner**: Founder

### 5.1 Day 1-7: Launch Week
- [ ] Product Hunt: Active participation (response to all comments)
- [ ] Email: Follow-up with non-responders (Day 3, Day 5)
- [ ] Organic: Monitor sign-ups, demo requests
- [ ] Beta customers: Publish case studies + testimonials on Day 1

**Metrics to track**:
- Product Hunt: Upvotes, comments, click-through rate to landing page
- Landing page: Trials created, demo requests, email signups
- Email: Open rate, click rate, demo request rate
- Trial-to-paid: % of trials that convert in first 7 days

### 5.2 Week 2-4: Founder-Led Prospecting
- [ ] Cold call campaign: 50 prospects/week (LinkedIn + cold email)
- [ ] Demo schedule: 3-5 demos/week (all to trial-ready prospects)
- [ ] Sales cycle: Track from first call → demo → trial → contract (target <45 days)

**Metrics**:
- Response rate: % of outreach that replies (target 5-8%)
- Demo rate: % of replies that book demo (target 60%)
- Conversion rate: % of demos that start trial (target 80%)
- Close rate: % of trials that convert to paid (target 27-33%)

### 5.3 Week 4-8: Iterate on Sales Process
- [ ] Review calls: Which value prop resonates most? (Cost savings, ease of use, compliance)
- [ ] Objections: What's blocking deals? (Budget, timing, features, integrations)
- [ ] Pricing: Are discounts needed or is $25K sticky?
- [ ] Adjust: Refine cold email, refine demo script, adjust pricing if needed

---

## Success Criteria (Month 4 Gate Review)

**By end of Week 20 (Month 4), prove:**

| Metric | Target | Status |
|--------|--------|--------|
| **Customers acquired** | 5-8 | Yes/No |
| **ARR** | $125-280K | Yes/No |
| **CAC** | <$3.5K | Yes/No |
| **Sales cycle** | <45 days | Yes/No |
| **NPS (beta customers)** | ≥40 | Yes/No |
| **Churn risk** | <12% (early signal) | Yes/No |
| **MVP stability** | <5% unplanned downtime | Yes/No |
| **Landing page conversion** | 5-10% trials/visitors | Yes/No |

**If 6/8 metrics met**: Proceed to growth phase (hire VA, plan AE hire for Month 12)
**If <5/8 met**: Diagnose failure + pivot (product, pricing, GTM, or shut down)

---

## Budget & Resource Needs

| Item | Cost | Timeline |
|------|------|----------|
| **1 Engineer (contractor)** | $50-80K | Weeks 1-14 |
| **VA/Support (PT)** | $5-10K | Weeks 3-14 |
| **Tools** (GitHub, Figma, Slack, etc.) | $2-3K | Ongoing |
| **AWS/Infrastructure** | $2-3K | Weeks 1-14 |
| **Landing page/hosting** | $500 | Week 5 onward |
| **Marketing assets** (video, design) | $3-5K | Week 2 onward |
| **Advisor/consultant** (optional, 10 hrs @ $150/hr) | $1.5K | Weeks 0-6 |
| **TOTAL RUNWAY NEEDED** | **$65-110K** | 14 weeks |

**Recommendation**: Secure $50K-100K pre-seed capital before Week 0 (or use founder personal funds if available).

---

## Key Risks & Contingencies

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| **MVP timeline slips to 18+ weeks** | Medium (40%) | Weekly sprint reviews; cut scope ruthlessly by Week 8 |
| **Cold call response rate low (<2%)** | Low (20%) | Warm intros from network first; adjust messaging if needed |
| **CAC explodes to $5K+** | Medium (40%) | Pivot to warm intros/referrals; reduce cold outreach |
| **NPS <35 (product issues)** | Low (20%) | Delay launch 1-2 weeks; fix critical bugs; get customer feedback |
| **Pricing objection (too high)** | Medium (30%) | Test $15K tier for small companies; don't discount existing $25K tier |
| **No beta customer success** | Low (10%) | Pivot to product; revisit MVP assumptions; delay launch |

---

## Decision Points & Gates

### Gate 1: Week 2 (Founder-Market Fit)
**Decision**: Can founder execute (security + sales + product)?
- **PASS**: Proceed with confidence
- **CONDITIONAL**: Hire co-founder for weak area; delay launch 4 weeks
- **FAIL**: Pivot team or reject idea

### Gate 2: Week 4 (ICP Validation + NRR Strategy)
**Decision**: Is customer acquisition viable? Does NRR strategy address long-term risk?
- **PASS**: Proceed with MVP development
- **CONDITIONAL**: Refine NRR strategy based on ICP feedback
- **FAIL**: Pivot or reject idea

### Gate 3: Week 8 (MVP On-Track?)
**Decision**: Will MVP launch on time (Week 14-16)?
- **PASS**: Continue as planned
- **CONDITIONAL**: Cut scope (Teams, HRIS, compliance templates); extend to Week 16
- **FAIL**: Delay launch 4 weeks; reassess engineering capacity

### Gate 4: Week 14 (Launch Ready?)
**Decision**: Is MVP stable enough for public launch?
- **PASS**: Launch on Product Hunt
- **CONDITIONAL**: Beta-test with 3-5 customers only; public launch Week 16
- **FAIL**: Delay launch 2 weeks; fix critical bugs

### Gate 5: Week 20 (Unit Economics Validated?)
**Decision**: Do 5-8 customers prove the model?
- **PASS (6/8 metrics)**: Proceed to growth phase (raise seed capital, hire AE)
- **CONDITIONAL (4-5 metrics)**: Iterate GTM; extend runway 4 weeks
- **FAIL (<4 metrics)**: Shut down or pivot product/market

---

## Document Control

**Last Updated**: January 26, 2026  
**Version**: 1.0  
**Owner**: Founder  
**Review Cycle**: Weekly (sprint planning)  
**Next Review Date**: Week 2 (Founder-Market Fit Gate)

---

**END OF PRE-LAUNCH ACTION PLAN**

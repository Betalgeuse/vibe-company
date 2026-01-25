# Pilot Onboarding & Activation Strategy

## Pilot Program Overview

**Goal:** Get first 3 hedge fund customers actively using FinSurv within 4 weeks, validate signal accuracy and time-savings claim.

**Duration:** 4 weeks (28 days)
**Pilot Price:** $0 (free trial) or $5K one-time (for serious commitment)
**Success Criteria:** >70% weekly active usage, >5 alerts triggered/week, customer says "Would adopt if pilot succeeds"

---

## Week 1: Setup & Configuration (Days 1-7)

### Goal
Customer has platform access, first watchlist created, Slack integration live, receives first alerts.

### Day 1: Signup & Authentication (2 hours)

**Time:** 30 min customer time + 30 min Founder

**Customer Tasks:**
1. [ ] Sign up via Google OAuth (3 min)
2. [ ] Create Organization (1 min)
3. [ ] Accept Terms + Data Processing Agreement (5 min)
4. [ ] Founder walks through onboarding video (10 min)
5. [ ] Set notification preferences (email + Slack) (5 min)

**Founder Tasks:**
1. [ ] 30-min intro call covering:
   - Platform overview (5 min)
   - Data sources (price, news, regulatory) (5 min)
   - Timeline: What to expect weeks 1-4 (5 min)
   - Success criteria for pilot (5 min)
   - Next steps (5 min)

**Checklist:**
- [ ] User account created + verified email
- [ ] Org created + plan set to "pilot"
- [ ] Founder added as admin (for monitoring)
- [ ] Slack API token generated (for bot integration)
- [ ] Email delivery tested (send test alert)

**Deliverable:** Customer has functional login, Slack bot authorized

---

### Day 2: Watchlist Setup (1 hour)

**Time:** 45 min customer time (mostly self-serve) + 15 min Founder support

**Customer Tasks:**
1. [ ] Option A: Import CSV of holdings
   - [ ] Prepare CSV (symbol, # shares, entry price)
   - [ ] Upload to platform
   - [ ] System auto-maps 90% of symbols
   - [ ] Founder helps resolve unmapped symbols
   
2. [ ] OR Option B: Manual entry (if <20 symbols)
   - [ ] Add top 10-15 holdings via search box
   - [ ] Verify symbols are correct

3. [ ] Create "Main Watchlist" (all holdings)

4. [ ] Create "Quick Watch" (5-10 most-traded symbols)

**Founder Tasks:**
1. [ ] QA watchlist import (symbol mapping accuracy)
2. [ ] Verify data is live (show latest prices in dashboard)
3. [ ] Test alert signals trigger correctly (run 1 test alert)

**Checklist:**
- [ ] 20-50 symbols added successfully
- [ ] Price data flowing (live quotes showing)
- [ ] Watchlist appears in customer dashboard
- [ ] No symbol errors/mapping issues

**Deliverable:** Watchlist populated, customer sees live price data

---

### Day 3: Signal Configuration (2 hours)

**Time:** 1 hr customer time + 1 hr Founder support/training

**Customer Tasks:**
1. [ ] Founder presents signal options (pre-built vs custom):
   - **Price Signals** (SMA Crossover, Bollinger Bands, Gap detection)
   - **Sentiment Signals** (news spike, Reddit, Twitter)
   - **Regulatory Signals** (SEC 8-K, earnings date)

2. [ ] Select 5 signals to monitor:
   - [ ] Signal 1: SMA 20/50 Crossover (price momentum)
   - [ ] Signal 2: VIX > 30 (volatility spike)
   - [ ] Signal 3: News spike (2+ sources same topic)
   - [ ] Signal 4: SEC 8-K filing (regulatory)
   - [ ] Signal 5: Earnings date alert (calendar)

3. [ ] For each signal:
   - [ ] Set thresholds (if customizable, e.g., VIX > 25 vs > 30)
   - [ ] Choose alert channel (email, Slack, or both)
   - [ ] Set per-symbol or watchlist-wide

**Founder Tasks:**
1. [ ] Walk customer through signal types (30 min call)
   - Explain each signal, why it matters for their fund
   - Show examples of past signals (backtesting screenshots)
   - Help select 5 most relevant for their strategy

2. [ ] Backend: Enable signals in customer org
   - [ ] Activate data feeds (IEX, NewsAPI, SEC EDGAR)
   - [ ] Test signal triggers (manual backtest)

3. [ ] Set up customer Slack channel (e.g., `#finsurvey-alerts`)
   - [ ] Bot has permission to post
   - [ ] Bot displays rich alerts (symbol, price, change, action)

**Checklist:**
- [ ] 5 signals configured and active
- [ ] Thresholds appropriate for customer's strategy
- [ ] Slack integration verified (test alert posted)
- [ ] Email deliverability confirmed (test email sent)
- [ ] Customer understands signal mechanics

**Deliverable:** First real alerts start flowing (should be 3-5 during market hours by EOD)

---

### Days 4-7: First Week Activation

**Daily Activities (Customer Self-Directed):**
- [ ] Log in daily (goal: 4+ times/week)
- [ ] Check Dashboard home (see alerts summary)
- [ ] Acknowledge 1-2 alerts (click "Acknowledge" or emoji react in Slack)
- [ ] Optional: Add custom signal if inspired

**Founder Check-In (Day 5, 30 min call):**
1. How many alerts have they received? (target: 5+)
2. Are signals accurate? (no false positives?)
3. Any integration issues?
4. Questions about signal meanings?
5. Excitement level? (informal gauge of fit)

**Founder Maintenance:**
- [ ] Daily: Monitor alert volume (ensure 3-5 real signals/day)
- [ ] Daily: QA signal accuracy (no spurious alerts)
- [ ] If alert volume low: May need to lower thresholds
- [ ] If false positive rate high: Adjust signal parameters

**Checklist:**
- [ ] Customer has received 20+ real alerts
- [ ] >50% false positive rate → discuss and recalibrate
- [ ] Slack bot working reliably
- [ ] Customer used dashboard at least 4x

**Deliverable:** Customer actively using platform, receiving valuable alerts

---

## Week 2: Expansion & Deep Dive (Days 8-14)

### Goal
Customer uses multiple features beyond basic alerts. Measure time savings. Identify "can't live without" features.

### Day 8: Team Onboarding

**Goal:** Invite 1-2 colleagues to platform, test team collaboration

**Customer Tasks:**
1. [ ] Invite 1-2 team members (traders, analysts)
2. [ ] Set roles:
   - Admin: Can edit signals, add users
   - Analyst: Can acknowledge alerts, view reports
   - Viewer: Read-only dashboard access

3. [ ] Introduce team to Slack channel

**Founder Support:** 15-min call to explain roles + permissions

**Checklist:**
- [ ] 2-3 team members invited
- [ ] Roles assigned correctly
- [ ] Team members log in and verify access

**Deliverable:** Multi-user watchlist active

---

### Day 9-10: Signal Customization Workshop

**Goal:** Customer builds 1 custom signal beyond pre-built options

**Founder Conducts 1-hr Workshop:**
1. Walk through signal builder UI (15 min)
   - How to combine conditions (AND/OR logic)
   - Example: "Stock gaps >5% AND VIX is elevated → signal"

2. Customer sketches custom signal idea (10 min)
   - "For our long/short pairs, alert if correlation breaks" (example)
   - "Alert if a holding gets mentioned in Seeking Alpha + insider buying"

3. Founder builds signal in real-time (20 min)
   - OR: Customer builds with Founder guidance

4. Test signal + iterate (15 min)

**Deliverable:** 1 custom signal live and tested

---

### Days 11-13: Time Savings Measurement

**Founder Sends Survey (Async):**

> **Question 1:** This past week, how much time did you spend on market monitoring?
> - Before: _____ hrs/week
> - Using FinSurv: _____ hrs/week
> - Time saved: _____ hrs/week

> **Question 2:** Which signals were most valuable?
> - [ ] MA Crossover
> - [ ] Volatility spike
> - [ ] News alerts
> - [ ] Regulatory
> - [ ] Custom signal

> **Question 3:** What would make this 10x better?
> - [open text]

> **Question 4:** NPS: On a scale of 0-10, how likely are you to recommend FinSurv to a peer?

**Follow-Up Call (Day 13, 30 min):**
- Review survey responses
- Discuss "10x better" feedback
- Quantify time savings (goal: 6-8 hrs/week reduction)
- Identify must-have features for production

**Checklist:**
- [ ] Survey completed
- [ ] Time savings documented
- [ ] Feedback recorded (for product roadmap)
- [ ] NPS captured (target: ≥7)

**Deliverable:** Validated time-savings claim and feature feedback

---

## Week 3: Scale & Complexity (Days 15-21)

### Goal
Customer integrates FinSurv into workflow, manages multi-watchlist scenarios, tests advanced features.

### Days 15-17: Portfolio Segmentation

**Customer Creates Watchlists by Strategy:**
1. [ ] Watchlist 1: "Tech Long Bias" (10 holdings)
2. [ ] Watchlist 2: "Healthcare Shorts" (5 holdings)
3. [ ] Watchlist 3: "Macro Hedges" (indices, currencies, commodities)

**For Each Watchlist:**
- [ ] Set different signals (e.g., tech favors volatility, macro favors macro data)
- [ ] Route alerts to different Slack channels (#tech-alerts, #health-alerts, etc.)

**Founder QA:** Verify watchlist architecture makes sense for customer

---

### Days 18-20: Advanced Sentiment Integration

**Goal:** Customer taps into news + social sentiment (differentiator vs TradingView)

**Demo Session (30 min):**
1. [ ] Show news spike detection (e.g., 3+ outlets covering a stock same day)
2. [ ] Show social sentiment (Reddit/Twitter mentions spike)
3. [ ] Customer enables sentiment for 5-10 key positions

**Result:** Customer receives 2-5 additional sentiment alerts/week

---

### Day 21: Regulatory Alerts & Compliance

**Goal:** Show Form PF foundation (roadmap item)

**Founder Presents:**
1. [ ] "Here's what we track for compliance:"
   - SEC 8-K filings (real-time)
   - Insider trading transactions
   - Earnings date alerts

2. [ ] "Phase 2 (Year 2): Form PF auto-summary"
   - Top 10 holdings tracker
   - Position changes log (audit trail)
   - Compliance reporting dashboard

3. [ ] Customer validates audit trail for 1 position trade

**Checklist:**
- [ ] Customer sees audit log for 1 symbol
- [ ] Regulatory alerts appear
- [ ] Customer excited about Form PF roadmap

---

## Week 4: Decision & Transition (Days 22-28)

### Goal
Gather final feedback, negotiate production contract, prepare for launch.

### Days 22-24: Feedback & Polish

**Founder Conducts Final 1-hr Interview:**

1. **Overall Impression:**
   - "What's your honest gut feeling about FinSurv?"
   - "Would you recommend to a peer hedge fund?"

2. **Time Savings Validation:**
   - "How many hours/week are you saving?"
   - "Is it sustainable or temporary honeymoon phase?"

3. **Must-Have Features (for production contract):**
   - "Which 3-5 features are absolutely critical?"
   - "What features can wait until Year 2?"

4. **Objections & Concerns:**
   - "What worries you most about using this in production?"
   - "What compliance concerns remain?"

5. **Pricing & Terms:**
   - "At $30K/year, is the ROI clear?"
   - "Would you prefer annual or monthly billing?"
   - "Do you need 5+ seats or is 3 enough?"

**Founder Action Items:**
- [ ] Document all feedback
- [ ] Prioritize critical features for post-pilot release
- [ ] Prepare pricing proposal (customized if needed)

---

### Day 25: Production Proposal

**Founder Sends Proposal Document (1-pager):**

```markdown
# FinSurv Production Proposal

## Customer: [Fund Name]
## Pilot Period: [Dates]
## Proposed Start: [Month X]

### Pilot Results Summary
- Time saved: __8 hrs/week
- Signals triggered: __450+ over 4 weeks
- Active users: __3
- NPS: __8/10
- Must-have features: __[list]

### Proposed Production Contract
- **Term:** 12 months
- **Price:** $30K/year (Starter tier, 3 seats)
- **Optional Upsells:**
  - Additional seats: $1.5K/seat/year
  - Advanced sentiment: $5K/year
  - Custom integrations: $50-100/hr

### Implementation Timeline
- **Week 1:** Final config + team training
- **Week 2-4:** Go-live + first month support
- **Ongoing:** Monthly business reviews

### Support & SLA
- Email support: 24-hour response time
- Slack integration: 24/7 monitoring
- Monthly update calls: Every 1st Tuesday

### Next Steps
1. Review proposal (by [date])
2. Legal review (1-2 weeks)
3. Contract signature (by [date])
4. Go-live (by [date])

---

Questions? [Founder name] - [email] - [phone]
```

**Founder Actions:**
- [ ] Customize pricing if customer negotiates
- [ ] Prepare legal docs (MSA, DPA) for signature
- [ ] Schedule contract review call with customer

---

### Days 26-27: Negotiation & Closing

**Possible Negotiation Points:**

| Objection | Response |
|-----------|----------|
| "Can you do $20K instead of $30K?" | "Starter plan is $20K. You need Pro tier (10 seats) for your team. Meet in middle: $25K with 5 seats?" |
| "Monthly billing instead of annual?" | "We can do month-to-month at $3K/mo, but annual locks in lower rate ($2.5K/mo = $30K)." |
| "You need to integrate with our broker first" | "We have IB + CenterPoint templates. 2-week implementation. Part of onboarding cost ($5K included in first-year)." |
| "Waiting to see if this survives the quarter" | "Understood. Can we commit to Jan-March (3-month trial) at $10K? Then convert to annual in April?" |

**Founder Close Tactics:**
1. **Loss aversion:** "If you don't adopt, you'll be back to 10 hrs/week manual work"
2. **Proof:** "Your team saved 30+ hours this month. That's $7.5K in value"
3. **Scarcity:** "I have 2 other pilots waiting in queue. If you're serious, let's formalize by [date]"
4. **Risk reversal:** "30-day money-back guarantee if you don't see promised time savings"

---

### Day 28: Pilot Closure & Transition

**Final Founder Call (30 min):**

1. [ ] Celebrate success (quantify metrics)
2. [ ] Congratulate customer on decision
3. [ ] Outline contract next steps
4. [ ] Introduce CS Manager (if hired) or schedule ongoing check-ins
5. [ ] Plan go-live date

**Contract Closure:**
- [ ] Customer signs MSA (Master Service Agreement)
- [ ] Customer signs DPA (Data Processing Agreement)
- [ ] First payment collected (annual or first month)
- [ ] Contract filed

**Handoff to Post-Pilot Phase:**
- [ ] Schedule weekly check-in calls (first month)
- [ ] Create customer success playbook (for CS manager)
- [ ] Set KPIs for production phase

**Checklist:**
- [ ] Contract signed
- [ ] Payment received
- [ ] Customer success roadmap created
- [ ] Team trained on customer's custom config
- [ ] Go-live date scheduled

---

## Pilot Success Metrics

### Activation & Engagement (Must Hit)

| Metric | Target | Owner | How Measured |
|--------|--------|-------|--------------|
| **Weekly Active Users** | >3/5 team members | Founder | Login frequency |
| **Alert Volume** | >5 alerts/week | Founder | Alert logs query |
| **Signal Diversity** | >3 signal types used | Founder | Alert type breakdown |
| **Slack Integration** | 100% of alerts routed | Founder | Slack message logs |
| **Customization Rate** | >1 custom signal created | Founder | Custom signal count |

### Value Delivery (Must Hit)

| Metric | Target | Owner | How Measured |
|--------|--------|-------|--------------|
| **Time Savings** | 6-8 hrs/week reduced | Founder | Customer survey |
| **Signal Accuracy** | <20% false positive rate | Founder | Manual QA review |
| **Feature Fit** | 5+ must-have features identified | Founder | Customer interview |
| **Risk Acceptance** | No compliance blockers | Founder | Customer feedback |
| **ROI Clarity** | Customer sees $30K/yr value | Founder | ROI calculator |

### Business Metrics (Must Hit)

| Metric | Target | Owner | How Measured |
|--------|--------|-------|--------------|
| **NPS (Pilot)** | ≥7/10 | Founder | End-of-pilot survey |
| **Willingness to Pay** | $30K ACV accepted | Founder | Contract negotiation |
| **Contract Signature** | 100% pilot → contract | Founder | Legal closure |
| **Expansion** | 1+ seat additions | Founder | Contract seats |
| **Referral** | "Would recommend to peer" | Founder | NPS question 2 |

---

## Pilot Failure Scenarios & Recovery

| Issue | Symptom | Recovery Action | Escalation |
|-------|---------|-----------------|------------|
| **Low Engagement** | <2 logins/week by Day 14 | Call customer, identify friction, simplify, re-engage | Consider extending to 6 weeks |
| **False Alert Storm** | >50% false positive rate | Recalibrate thresholds, apologize, reduce sensitivity | Offer Starter plan free month |
| **Integration Failure** | Slack alerts not flowing | Debug + fix within 24 hrs | Revert to email-only temporarily |
| **Data Quality Issue** | Signals systematically wrong | Partner with data vendor, audit signal logic | Escalate to Founder's advisor |
| **Compliance Concern** | Customer has legal question | Engage CCO advisor or law firm within 48 hrs | Consider pilot extension for legal review |
| **No Product-Market Fit** | Customer won't sign at $30K | Pivot to advisory engagement ($5-10K) + free continued platform | Learn and document feedback |

---

## Pilot Contracts & Legal

### Key Contract Terms (MVP)

**Pilot Agreement:**
- Free pilot (or $5K one-time fee)
- 4 weeks (28 days) duration
- Data usage: Customer data retained, deleted upon request at end of pilot
- No SLA (best-effort support)
- Non-binding → optional production contract

**Production MSA (Master Service Agreement):**
- 12-month term, auto-renewing
- $30K annual cost (chosen tier)
- SLA: 99.5% uptime, 24-hr support response
- Data security: Encryption at rest + transit, SOC2 roadmap
- Termination: 30-day notice to cancel

**Data Processing Agreement (DPA):**
- GDPR-compliant data handling
- Role: FinSurv = processor, Customer = controller
- Sub-processors: AWS (data), Slack (alerts), SendGrid (email)
- Data deletion upon request

---

## Post-Pilot (After Day 28)

### Transition to Production

**Month 2 (Go-Live Month):**
- [ ] Final security audit
- [ ] Data migration from pilot to production DB
- [ ] Production Slack workspace setup
- [ ] Customer team training (live session)
- [ ] Monitoring setup (alerts for customer account)

**Month 3 (First Month Live):**
- [ ] Weekly check-in calls
- [ ] Bug fix prioritization
- [ ] Performance optimization
- [ ] First expansion conversation (additional seats/features)

**Month 4+:**
- [ ] Transition to monthly business reviews
- [ ] Customer success playbook handoff (if CS manager hired)
- [ ] Feature feedback integration into roadmap

---

## Pilot Timeline (Visual)

```
Week 1 (Setup):
  Day 1: Signup + Founder call (30 min)
  Day 2: Watchlist import (1 hr)
  Day 3: Signal config (1 hr)
  Days 4-7: First usage + Founder check-in

Week 2 (Expansion):
  Day 8: Team onboarding (30 min)
  Days 9-10: Custom signal workshop (1 hr)
  Days 11-13: Time savings survey + call
  
Week 3 (Scale):
  Days 15-17: Watchlist segmentation
  Days 18-20: Sentiment integration
  Day 21: Regulatory alerts demo
  
Week 4 (Decision):
  Days 22-24: Final feedback interview
  Day 25: Production proposal sent
  Days 26-27: Negotiation & closing
  Day 28: Contract signed + go-live scheduled

Total Founder Time Investment: ~8-10 hours over 4 weeks
```

---

## Pilot Success Stories (Messaging)

### Pilot Announcement (Email to Customer)

```
Subject: Welcome to FinSurv Pilot! 🚀

Hi [Customer Name],

We're thrilled to have [Fund Name] join our pilot program for FinSurv, 
the real-time market surveillance platform built for emerging hedge funds.

Over the next 4 weeks, you'll discover how we cut market monitoring time 
from 10 hours/week to 2 hours/week—without missing critical signals.

Here's what to expect:

📅 WEEK 1: Setup & Configuration
- Get on the platform, add your holdings, configure alerts
- Goal: Receive your first alerts by EOD Day 3

📈 WEEK 2: Expansion & Measurement
- Bring your team in, customize signals, measure time savings
- Goal: Capture "aha moment" + quantify time saved

🔧 WEEK 3: Advanced Features
- Build custom watchlists, tap into sentiment/regulatory data
- Goal: Unlock SMB-specific power features

✅ WEEK 4: Decision Time
- Finalize feedback, negotiate production contract
- Goal: Sign up for Year 1

Questions? My door is always open: [email] or [phone]

Let's go,
[Founder Name]
---
P.S. First alert bonus: I'll send you $100 in platform credits if your 
first custom signal generates a trade opportunity in the first week. 🎁
```

---

**Status:** Ready for pilot launch  
**Version:** 1.0  
**Last Updated:** 2026-01-25

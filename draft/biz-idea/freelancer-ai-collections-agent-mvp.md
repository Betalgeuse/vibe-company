# Freelancer AI Collections Agent - MVP Business Plan

## 📊 Score & Verdict
- **Solopreneur Score:** (Codex 검증 후 기입)
- **Verdict:** (Codex 검증 후 기입)

---

## 🌍 Global First Checklist
- [x] **Language:** English first (Korean later)
- [x] **Payment:** USD via Stripe
- [x] **Domain:** .com or .io
- [x] **Target:** US/EU/AU English-speaking freelancers
- [x] **Marketing:** Product Hunt, Indie Hackers, Reddit (r/freelance), Twitter/X

---

## 🎯 Customer Value (Most Important)

### One-Sentence Definition
> "With this, **freelancers** save **8+ hours/month** chasing late payments and recover **$500-1,000** in overdue invoices monthly"

### Specific Results
| State | Description |
|-------|-------------|
| **Before** | 29% of freelance invoices paid late, 50%+ experienced non-payment, 14% spend 5+ hrs/week chasing payments |
| **After** | AI sends polite, escalating reminders automatically; freelancer focuses on billable work |
| **Savings/Gains** | **$500-1,000/month recovered** + **8 hours/month saved** = ~$1,200+/month total value |

---

## 💰 Path to $150K ARR

| Item | Calculation |
|------|-------------|
| **Target Price** | $29/mo |
| **Required Customers** | 431 users |
| **ARR** | $150K |
| **Feasibility** | **High** - Lance @ $29/mo proves price point; 63M US freelancers (0.0007% penetration needed) |

### Revenue Milestone Path
```
Month 3:  50 users  = $1,450 MRR   ($17K ARR)
Month 6:  150 users = $4,350 MRR   ($52K ARR)
Month 12: 450 users = $13,050 MRR  ($157K ARR) ✅
```

---

## 1. The "Micro" Opportunity

### Target ICP (Ideal Customer Profile)
| Attribute | Description |
|-----------|-------------|
| **Who** | Solo freelance designers, developers, consultants |
| **Revenue** | $50K-200K/year (mid-tier, established) |
| **Geography** | US, UK, EU, AU (English-speaking) |
| **Platform** | Already uses Wave, FreshBooks, or manual invoicing |
| **Pain Intensity** | Billed $5K+/month, has 3+ clients, experienced late payment trauma |

### Pain Point - The Numbers
| Statistic | Source |
|-----------|--------|
| **50%** of US invoices currently overdue | Clockify 2025 |
| **63%** of freelancers wait 30+ days for payment | Jobbers Global Report 2025 |
| **29%** of freelance invoices paid late | Moxie 2025 |
| **$17,500** average cost of unpaid invoices (US SMB) | QuickBooks 2025 |
| **8.2 days** average late beyond due date | Clockify 2025 |

### Willingness to Pay
- **ROI Clear:** $29/mo → recover $500-1,000/mo = **17-34x ROI**
- **Pain Acute:** Chasing payments is emotionally draining + unprofessional
- **Competitor Validation:** Lance proving $29/mo price point works

### TAM Calculation
| Market | Size |
|--------|------|
| US Freelancers | 64M |
| Earning $50K+/year | ~12M |
| Experienced late payment (50%) | 6M |
| Serviceable (English + digital invoicing) | **~2M** |
| Target penetration (0.025%) | **500 users = $174K ARR** |

---

## 2. Product Spec (MVP) - ONE Thing Only

### Core Function: **AI Collection Autopilot**
> Automatically detect overdue invoices and send escalating, polite reminders until paid

### MVP Feature Set (2-Week Build)

| Feature | Priority | Description |
|---------|----------|-------------|
| **Email Integration** | P0 | Connect Gmail/Outlook to detect invoices |
| **Invoice Detection** | P0 | AI parses email for invoice PDFs, amounts, due dates |
| **Auto-Reminder Sequence** | P0 | Day 1, 3, 7, 14, 30 escalating templates |
| **Dashboard** | P0 | List of overdue invoices + status |
| **Stripe Payment** | P0 | Self-serve subscription $29/mo |

### What's NOT in MVP
❌ Direct FreshBooks/Wave API integration (Phase 2)  
❌ Phone call reminders (Phase 2)  
❌ Multiple currencies support (Phase 2)  
❌ Team accounts (Phase 3)  
❌ Invoice creation (NEVER - not our problem)

### User Flow (Simple)
```
1. Connect Gmail → AI scans for invoices
2. Dashboard shows overdue invoices (amount, client, days late)
3. One-click "Activate Collection" per invoice
4. AI sends Day 1 reminder (polite)
5. If no payment: Day 3 (follow-up), Day 7 (firm), Day 14 (final notice)
6. User marks as "Paid" when received
```

### Differentiation vs Lance
| Aspect | Lance | Our MVP |
|--------|-------|---------|
| Integration | Google Workspace | Gmail + Outlook + manual upload |
| Setup | 5 min | **2 min** (just connect email) |
| Reminder style | Professional | **Customizable tone** (friendly ↔ firm) |
| Analytics | Basic | **Recovery rate tracking** |
| Price | $29/mo | **$29/mo** (same, compete on UX) |

---

## 2.5 Implementation Hints

> ⚠️ 구체적 기술 스택 금지. 추상적 요구사항만.

| Requirement | Spec |
|-------------|------|
| **서버 필요 여부** | 서버 필요 (스케줄러, 이메일 파싱) |
| **외부 API 연동** | Gmail API, Outlook API, OpenAI (or local LLM) |
| **브라우저 자동화** | ❌ 불필요 |
| **결제 시스템** | ✅ Stripe |
| **DB** | 간단 (users, invoices, reminders, payments) |
| **복잡도 수준** | **중간** |

### MVP Complexity Score: 22/30 (Green Light ✅)
| Factor | Score (1-5) | Note |
|--------|-------------|------|
| Email parsing | 4 | Gmail/Outlook API + PDF extraction |
| AI invoice detection | 4 | LLM for parsing amounts/dates |
| Scheduled jobs | 3 | Cron for reminder sequences |
| Auth + Dashboard | 3 | Standard web app |
| Stripe integration | 2 | Well-documented |
| Email sending | 2 | Transactional email service |
| Total | **22** | Under 30 = Solopreneur feasible |

---

## 2.6 Competition Check

### Direct Competitors

| Competitor | Price | Strength | Critical Weakness |
|------------|-------|----------|-------------------|
| **Lance** | $29/mo | First mover, good testimonials | Google Workspace only, limited customization |
| **Cushion** | $8-16/mo | Forecasting + invoicing | **No AI collection**, manual reminders only |
| **Wave** | FREE | Large user base | **Basic automation only**, no smart collection |
| **FreshBooks** | $17-55/mo | Full accounting suite | Overkill for collection, complex setup |
| **Collection.ai** | Enterprise | AI voice + multi-channel | **Not for freelancers**, enterprise pricing |
| **Abivo** | Enterprise | $200K/mo recovery claims | B2B focus, enterprise-only |

### Why They Won't Crush Us

| Reason | Explanation |
|--------|-------------|
| **🎯 Niche Focus** | We're ONLY collection. HoneyBook/Bonsai are "everything" = complex |
| **⚡ Speed to Value** | 2-minute setup vs 30+ min onboarding |
| **🔌 Platform Agnostic** | Works with ANY email (Gmail, Outlook) not just Google Workspace |
| **💬 Tone Customization** | Friendly freelancer vs cold corporate templates |
| **📊 Recovery Analytics** | Track what works, optimize automatically |

### Competitive Moat (Long-term)
1. **Data Network Effect:** More users → more data on what reminder sequences work → better AI
2. **Template Community:** Users share successful collection templates
3. **Integration Breadth:** Connect to everything, not locked to one ecosystem

---

## 3. Automation Strategy (Zero Ops)

### 🎯 Automation Ratio Target

| Metric | Target |
|--------|--------|
| **Automated Tasks** | 85%+ |
| **Human Intervention** | Critical decisions only |
| **Scale Factor** | 2x customers → 1.15x work |

### Marketing Automation (No Paid Ads)

| Channel | Automation | Human |
|---------|-----------|-------|
| **Product Hunt Launch** | ✅ Scheduled posts, upvote reminders | Launch day monitoring |
| **Twitter/X** | ✅ Auto-post tips, user wins | Weekly engagement (30min) |
| **Reddit r/freelance** | ❌ | Weekly value posts (1hr) |
| **Indie Hackers** | ❌ | Monthly update posts |
| **SEO Content** | ✅ AI-written, human-edited | Weekly review (1hr) |

**Monthly Marketing Time:** ~8 hours

### Sales Automation (PLG = No Sales Calls)

| Stage | Automation |
|-------|-----------|
| **Awareness** | Content + social → landing page |
| **Trial** | Self-serve signup, 14-day free trial |
| **Activation** | Onboarding email sequence (5 emails) |
| **Conversion** | Auto-upgrade prompt when trial ends |
| **Retention** | Monthly "You recovered $X" email |

**Sales Time:** 0 hours (100% self-serve)

### Support Automation

| Issue Type | Automation | Human |
|------------|-----------|-------|
| **How-to questions** | ✅ Docs + AI chatbot | Escalation only |
| **Billing issues** | ✅ Stripe self-serve portal | Refund approval |
| **Bug reports** | ✅ Auto-ticket + acknowledge | Weekly triage (2hr) |
| **Feature requests** | ✅ Upvote board (Canny) | Monthly review |

**Monthly Support Time:** ~8 hours

### Operations Automation

| Task | Method |
|------|--------|
| **User onboarding** | Automated email sequence |
| **Invoice detection** | Scheduled job every 6 hours |
| **Reminder sending** | Cron job, no human intervention |
| **Payment processing** | Stripe webhooks |
| **Churn prevention** | Auto-email at Day 7 no-activity |
| **Analytics/Reporting** | Automated weekly digest |

---

## 4. Why This Works for YOU?

### ✅ Vision Fit
> "Freelancers freed from admin → focus on creative work"

- Direct mission alignment
- Every payment recovered = tangible freelancer win
- Builds toward broader "Freelancer Admin Autopilot" vision

### ✅ Zero to One Potential

| Factor | Assessment |
|--------|-----------|
| **10x Better** | AI that actually works vs manual reminders |
| **Network Effects** | Template sharing, recovery data compounds |
| **Timing** | AI matured enough; late payment crisis at ATH |

### ✅ Buy Back Time

| Task | Before | After |
|------|--------|-------|
| **Weekly admin** | 5+ hours chasing payments | 30 min reviewing dashboard |
| **Emotional labor** | Awkward client emails | AI handles tone |
| **Focus time** | Interrupted by payment anxiety | Billable work |

### ✅ Team Fit
- **템플릿 제작:** Intern can create/test reminder templates
- **QA:** Intern tests email parsing accuracy
- **Support docs:** Intern writes help articles

---

## 5. Cost Estimate

### Month 1-3 (Pre-PMF)

| Item | Cost/month | Notes |
|------|-----------|-------|
| **Hosting** | $20 | Vercel/Railway starter |
| **Email API** | $20 | SendGrid/Resend |
| **AI API** | $50 | OpenAI (invoice parsing) |
| **Domain** | $15 | .io domain |
| **Stripe fees** | 2.9%+30¢ | Per transaction |
| **Total** | **~$105/mo** | |

### After PMF (500 users)

| Item | Cost/month | Notes |
|------|-----------|-------|
| **Hosting** | $100 | Scaled infrastructure |
| **Email API** | $100 | Higher volume |
| **AI API** | $300 | More parsing |
| **Monitoring** | $50 | Sentry, logging |
| **Support tools** | $50 | Intercom/Crisp |
| **Total** | **~$600/mo** | |

### Unit Economics @ 500 Users

| Metric | Value |
|--------|-------|
| **MRR** | $14,500 |
| **Costs** | $600 |
| **Gross Margin** | **96%** |
| **CAC** | ~$0 (organic) |
| **LTV** | $348 (12 mo avg) |
| **LTV:CAC** | ∞ (PLG) |

---

## 6. Risk Assessment

### Critical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Email API restrictions** | Medium | High | Multiple provider support (Gmail + Outlook + manual) |
| **Lance dominates market** | Medium | Medium | Focus on UX + platform breadth differentiation |
| **Low conversion** | Medium | High | Aggressive free trial, showcase ROI early |
| **Invoice parsing accuracy** | Low | High | Human review for edge cases, continuous training |

### Kill Criteria
Stop if after 3 months:
- [ ] <50 signups from Product Hunt + Reddit
- [ ] <5% trial-to-paid conversion
- [ ] User feedback: "Lance is just better"

---

## 7. 90-Day Execution Plan

### Week 1-2: MVP Build
- [ ] Email integration (Gmail first)
- [ ] Basic invoice detection
- [ ] 5-step reminder sequence
- [ ] Dashboard UI
- [ ] Stripe payment

### Week 3-4: Alpha Testing
- [ ] 10 friendly freelancers beta
- [ ] Iterate on parsing accuracy
- [ ] Refine reminder templates

### Month 2: Launch
- [ ] Product Hunt launch
- [ ] Reddit r/freelance posts
- [ ] Indie Hackers launch log
- [ ] Target: 100 signups

### Month 3: Iterate
- [ ] Analyze conversion data
- [ ] Add Outlook support
- [ ] Recovery analytics dashboard
- [ ] Target: 50 paying users

---

## 📋 Summary

| Aspect | Assessment |
|--------|-----------|
| **Problem** | 50% invoices overdue, $17K avg cost to freelancers |
| **Solution** | AI that sends escalating polite reminders automatically |
| **Differentiation** | Platform-agnostic, 2-min setup, tone customization |
| **Price** | $29/mo (validated by Lance) |
| **TAM** | 2M+ serviceable freelancers |
| **Path to $150K** | 431 users (0.02% penetration) |
| **Feasibility** | High - 2-week MVP, proven market |
| **Automation** | 85%+ ops automated |
| **Risk** | Medium - Lance competition, needs great UX |

### Verdict: **PROCEED TO CODEX VALIDATION** ✅

---

*Last Updated: 2026-01-17*
*Status: Awaiting Codex Score*

# LegalAI - Executive Summary & Sales Playbooks

## 🎯 The Opportunity (One-Pager)

**Problem**: Law firms (50-250 employees) waste 30-40% of junior paralegal time on repetitive document review work (contract analysis, risk flagging). This costs $30-50K/year per firm in inefficiency and bottlenecks client delivery.

**Solution**: LegalAI is a lightweight, AI-powered document review platform that automates 70-80% of this work in 1 day (vs 6+ months for enterprise competitors) at $20K/year (vs $100K+).

**Why Now**: 
- Generative AI (GPT-4) now good enough for legal document analysis
- SMB law firms underserved by expensive enterprise tools (Luminance, Ironclad)
- Founder can do profitable sales-led go-to-market to first 10-20 customers

**Why Us**: 
- Fast deployment (1 day, not 6 months)
- SMB pricing ($20K vs $100K)
- Explainable AI (show why flagged, not black-box)
- No integration requirement (plug-and-play)

---

## 📊 The Numbers (Year 1-3 Projections)

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| **Customers** | 20 | 40 | 75 |
| **ACV** | $17K | $20K | $24K |
| **ARR** | $400K | $880K | $1.8M |
| **Gross Margin** | 65% | 80% | 85% |
| **CAC** | $10K | $8K | $6K |
| **LTV** | $85K | $120K | $160K |
| **LTV:CAC** | 8.5:1 | 15:1 | 26:1 |
| **Payback (months)** | 9 | 7 | 4 |
| **Net Margin** | 15% | 35% | 43% |

**Key Insight**: Unit economics are healthy by Month 12, with strong expansion path via upsells (new users, extra documents, integrations).

---

## 🎯 MVP Strategy (12-Week Build Plan)

### Scope: What's In, What's Out

**MVP MUST HAVE (P0 - Non-negotiable)**
| Feature | Why | Complexity |
|---------|-----|-----------|
| Document upload (PDF/DOCX) | Day 1 UX: drag-drop must work | Low |
| AI clause extraction + risk flagging | Core value prop | High |
| Simple dashboard (view results) | Customer needs visibility | Medium |
| Export (PDF report, CSV) | Lawyers need to distribute | Medium |
| Basic user management (1-3 users) | SMB team setup | Low |
| Email auth + encryption | MVP security baseline | Medium |

**MVP NICE-TO-HAVE (P1 - Roadmap, not MVP)**
| Feature | Why Defer | Can Add Month 4-6 |
|---------|-----------|-----------------|
| Advanced RBAC (practice groups) | Overcomplicated for SMB MVP | Yes, relatively simple |
| Slack notifications | Convenience, not necessity | Yes, lightweight |
| Batch document processing | Most SMBs upload 1-5 docs at a time | Yes, Week 10-12 |
| SAML/SSO | Enterprise nice-to-have | Yes, Phase 2 |
| API documentation | Can do externally | Yes, Month 6 |

**EXPLICITLY OUT OF SCOPE**
- ❌ NetDocs/iManage integration (Phase 2, Month 9+)
- ❌ Advanced redline markup (Phase 2)
- ❌ Collaborative review UI (Phase 2)
- ❌ Mobile app (Phase 2+)
- ❌ Multi-language support (Phase 2)
- ❌ Fine-tuned proprietary LLM (Phase 3, after product-market fit)

### Tech Stack (Pick Once, Stick With It)

| Layer | Choice | Why |
|-------|--------|-----|
| **AI Model** | GPT-4 API (OpenAI) | Best accuracy (95%+), managed service, data privacy OK with contract |
| **Backend** | Node.js + Express | Fast iteration, easy to hire, REST API standard in legal tech |
| **Database** | PostgreSQL (Supabase) | Reliable, scales well, can self-host later if customer demands |
| **Frontend** | React + TypeScript | Standard in legal tech, component libraries available, easy to hire |
| **UI Library** | Shadcn/ui + Tailwind | Professional look, low cognitive overhead, ships fast |
| **Document Processing** | pdf-parse + docx libraries | Open source, no vendor lock-in |
| **Auth** | Supabase Auth or Auth0 | JWT-based, roadmap to SSO, compliance-ready |
| **Hosting** | Vercel (frontend) + AWS Lambda (API) + Supabase (DB) | Cost ~$500/month for MVP, scales automatically |
| **Security** | TLS 1.3 + AWS KMS encryption | Industry standard, meets SMB expectations |

### Timeline (4 Sprints of 3 Weeks)

| Sprint | Weeks | Focus | Deliverable | Success Criteria |
|--------|-------|-------|-------------|-----------------|
| **Sprint 1** | 1-3 | Architecture + Docs | Database schema, API routes, frontend structure | Team can build in parallel |
| **Sprint 2** | 4-6 | Core Feature | Document ingestion, AI analysis, basic dashboard | Can upload PDF, see AI results |
| **Sprint 3** | 7-9 | Polish + Security | Export, auth, encryption, error handling | Can export PDF/CSV, multiple users |
| **Sprint 4** | 10-12 | Beta + Launch | Beta testing, bug fixes, first customer setup | 3 beta customers, each completed 10+ reviews |

---

## 💰 Unit Economics Deep-Dive

### Revenue Per Customer (Year 1 Blended)
```
Starter Tier:      $12K/year (25% of deals)
Professional Tier: $20K/year (60% of deals) ← Primary target
Enterprise Tier:   $50K/year (15% of deals, rare in Year 1)
-------
Weighted Average:  $19K/year ≈ $1.58K/month gross revenue
```

### Cost Per Customer
```
AI Inference Costs:     $3K/year (100 docs × $0.03/doc, scales with usage)
Cloud Infrastructure:   $2K/year (Supabase, Lambda, CDN - fixed + variable)
Payment Processing:     $0.6K/year (3% Stripe fee)
Support & Onboarding:   $1.4K/year (founder time, scales in Year 2)
-------
Total COGS:             $7K/year = 35% of revenue
Gross Profit:           $12K/year per customer = 65% margin ✅
```

### Customer Lifetime (Revised)
```
Churn Rate:        15% annual = 85% retention
Customer Lifetime: 1 / 15% = 6.7 years

LTV = Gross Profit × Customer Lifetime × Margin
    = $12K/year × 6.7 years × 0.65
    = $52K (conservative)
    
Or with expansion (10% add-on revenue):
    = $12K × 6.7 × (1 + 10%) = $86K
```

### CAC Analysis
```
Founder Outreach:        $5K (40 hrs × $125/hr opportunity cost)
Sales Enablement:        $1.5K (deck, demo video, one-pager - amortized)
Paid Ads (LinkedIn):     $2K (test budget, Month 1-6)
Events/Conferences:      $1.5K (travel to legal tech event)
-------
Total CAC (Year 1):      $10K per customer

CAC Payback:       $10K / $1.58K monthly gross profit = 6.3 months ✅
LTV:CAC Ratio:     $86K / $10K = 8.6:1 (excellent, >3:1 healthy threshold)
```

### Gross Margin Expansion Path
```
Year 1 (20 customers):
  Revenue: $400K
  COGS: $140K (35%)
  Gross Profit: $260K (65%)
  
Year 2 (40 customers):
  Revenue: $880K
  COGS: $176K (20%) ← AI costs scale, infrastructure amortized
  Gross Profit: $704K (80%)
  
Year 3 (75 customers):
  Revenue: $1.8M
  COGS: $270K (15%) ← Full scale efficiency
  Gross Profit: $1.53M (85%)
```

---

## 🎤 Sales Playbook (30-Minute Discovery Call)

### Pre-Call Preparation (5 minutes)
- **Research**: LinkedIn profile of partner/counsel, law firm website (size, practice areas)
- **Personalization**: "I noticed you do a lot of M&A contracts—our AI is trained on thousands of M&A agreements"
- **Agenda**: "I'd love to understand how you currently handle document review and see if we might be a fit. Should take 20 minutes."

### Discovery Flow

#### 1. **Problem Unpacking** (7 minutes)
Listen for pain, don't pitch yet.

```
"Walk me through your document review process right now. 
 Let's say you get 100 contracts to review—how does that flow through your team?"

[Listen for: Who does the work? Junior associates? Manual review process? Bottlenecks?]

"How long does it actually take to review a contract? Are we talking 30 minutes? 2 hours?"

[Listen for: Time invested per document. If <15 min, less urgent. If >45 min, very strong pain.]

"What's the biggest frustration with how you do it today?"

[Listen for: Quality issues (missed clauses), speed (client complaints), consistency (rework), cost]
```

#### 2. **Pain Quantification** (7 minutes)
Make the pain tangible in dollars/hours.

```
"So if I heard correctly, you have 1-2 junior associates spending 
 30+ hours a week on pure document review. Is that about right?"

[Confirm: This is ~$45-65K/year in junior associate time]

"And if one of them misses a risky clause, what happens? 
 Has that ever cost you money or client trust?"

[Listen for: Legal malpractice risk, client dissatisfaction, rework hours]

"If you could cut that review time in half—from 30 hours to 15 hours—
 what would that be worth to you?"

[Listen for: Interest level. If they say "thousands a month," strong signal.]
```

#### 3. **Buying Process** (5 minutes)
Understand who decides and how long it takes.

```
"If you decided this was worth trying, who else would need to sign off? 
 Is it just you, or would IT/compliance need to get involved?"

[Listen for: Decision complexity. 1 person = faster. Committee = slower, need security checklist]

"How long does it typically take you to approve new software? 
 Days, weeks, months?"

[Listen for: Sales cycle length. SMB should be 2-4 weeks. If >8 weeks, reconsider fit.]
```

#### 4. **Soft Advance** (6 minutes)
Create next step without asking for a commitment.

```
"This sounds like it could be valuable for you guys. 
 How would you feel about running a 2-week pilot? You'd upload 50 contracts, 
 we'd analyze them, and you'd see the time saved firsthand."

[Listen for: Hesitation = objection to address; interest = schedule pilot]

"The only thing I'd need is 1 hour next week to get you set up. 
 What does your calendar look like for a quick kickoff?"

[Schedule pilot kickoff call if interested]
```

---

## 💬 Common Objections & Responses

### Objection 1: "AI will miss important clauses. Lawyers can't trust a black box."

**Root Cause**: Trust in AI accuracy; fear of liability

**Response**:
> "100% agree—that's why we're not replacing human review. We're automating the first 70% that's obvious (key parties, dates, standard terms). Your junior still reviews everything. The difference is: instead of 30 hours of mindless reading, they spend 8 hours doing QA on AI results. Plus, we show *exactly why* we flagged each risk—'Missing arbitration clause' not just 'HIGH RISK.' You can see our reasoning."

**Proof Point**: Show customer case study if available (e.g., "Firm X ran 100 contracts, AI accuracy was 94% agreement with their own review")

---

### Objection 2: "We already use Luminance / we looked at [competitor]"

**Root Cause**: Competitive entrencement or past negative experience

**Response**:
> "Luminance is fantastic for mega-firms—they have enterprise sales teams and IT budgets. But you told me you need this running in 1 day, not 6 months. And Luminance is $100K+/year, right? We're $20K, plug-and-play. Think of us as the 'SMB version'—simpler, faster, cheaper. Different market segment. Can I show you the difference in a 10-minute demo?"

**Proof Point**: Side-by-side comparison (Luminance: enterprise, slow, $100K vs. LegalAI: SMB, 1-day, $20K)

---

### Objection 3: "Our IT/security will never approve this. We have strict data residency requirements."

**Root Cause**: Compliance/data governance concern

**Response**:
> "Totally fair. We've thought about this. Today, all client documents are encrypted in transit (TLS 1.3) and at rest (AWS KMS). We have a roadmap for on-premises deployment (available Month 10), which lets you run this in your own VPC if needed. We also delete all documents after 90 days automatically. Can I send you our security checklist and data processing agreement?"

**Proof Point**: Send written security doc (no verbal on this one)

---

### Objection 4: "Price feels high. Can you do $10K?"

**Root Cause**: Budget constraints or price sensitivity

**Response**:
> "I get it. Let's look at ROI: You're saving 22 hours/week × $50/hour = $45K/year in junior time freed up. At $20K, you're capturing 44% of the value you create. We can't be much lower and still invest in the product. But here's what we can do: monthly pricing instead of annual (same price, less commitment), or I can create a 'pilot tier' at $8K for 3 months if you want to test before committing. What would make sense for you?"

**Proof Point**: Give them the ROI math (their specific numbers, not generic)

---

### Objection 5: "We're not a priority right now. Maybe next quarter."

**Root Cause**: No urgency; competing priorities

**Response**:
> "Fair. But let me ask—when are you planning next year's hiring? If you're thinking about bringing on another junior, that's ~$60K investment + 3-month training ramp. We could maybe make that unnecessary. Or if you have a big due diligence coming up (M&A, litigation), this solves that problem fast. Can I check back in 6 weeks and see if either of those situations has come up?"

**Proof Point**: Plant seed for trigger event (hiring season = Sept/Oct; deals = varies)

---

## 📅 Validation Roadmap (First 5 Customers)

### Phase 1: Pre-MVP Validation (Weeks 1-4)

**Objective**: Confirm problem severity + pricing acceptance before building

**Action Plan**:
- [ ] Identify 10 warm law firm contacts (LinkedIn, referrals, legal tech forums)
- [ ] Schedule 5 discovery calls (30 min each, Week 1-3)
- [ ] Send 2 cold emails per day (Week 1-4), 10% reply rate = 5-10 conversations
- [ ] Measure: Do >50% of conversations agree "yes, would try this"?

**Success Criteria**:
- ✅ >6 firms willing to do a pilot
- ✅ >50% say current process takes 25+ hours/week
- ✅ >50% say "would be worth $15-30K/year"
- ✅ No firm says "IT will never approve SaaS"

**GO Decision**: If >4 success criteria met → build MVP. If <2 met → pivot or kill.

---

### Phase 2: MVP Beta (Weeks 5-12)

**Objective**: Build MVP, get 3 beta customers, validate NPS >40

**Customers to Target**:
1. Partner from Phase 1 discovery (strong relationship, willing to give feedback)
2. Referral from Customer 1 ("Your peer firm is trying this")
3. Cold close (best sales pitch to showcase product)

**Beta Commitment**:
- Upload 50-100 real contracts
- Provide feedback in 2 calls (Week 6, Week 11)
- Commit to $20K/year post-beta (LOI signed, not yet invoiced)
- Give permission to be case study ("if it works great")

**Feedback Cadence**:
- Week 5: Setup call (walk through UX, expectations)
- Week 7: Mid-beta feedback (what's working? What's confusing?)
- Week 11: Final feedback + NPS survey
  - "How likely are you to recommend LegalAI to a peer? (0-10)"
  - "What would make this a 10?"
  - "Would you be very upset if we shut down?" (PMF test)

**Success Metrics**:
- ✅ NPS >40 (recommend score >7)
- ✅ Time-to-value <4 hours (first review completed same day)
- ✅ Accuracy >90% (lawyers agree with AI flags)
- ✅ Zero IT blockers (if raised, have contingency plan ready)
- ✅ 100% convert to paying customer (3/3 beta customers sign $20K deal)

---

### Phase 3: Early Customer Launch (Customers 4-20)

**Months 4-6**: Founder-led sales with beta customers as proof

**GTM Playbook**:
1. **Referral Strategy**: Ask Customers 1-3 for intros to 2 peer firms each (6 warm leads)
2. **Content**: Publish case study from Customer 1-2 (ROI numbers, testimonial)
3. **Outbound**: Cold outreach on LinkedIn 100/week (goal: 1-2 closes per week)
4. **Speaking**: Get accepted to 1 legal tech webinar (Week 8-10)

**Sales Targets**:
- Month 4-5: Close Customers 4-7 (referrals from Customers 1-3)
- Month 6: Close Customers 8-12 (mix of cold outreach + inbound from case study)
- Total by Month 6: 12 customers (goal was 10+) = $240K ARR

**Customer Success Process**:
- Day 1: Kickoff call (30 min), set expectations (e.g., "Review 100 contracts in 2 weeks")
- Day 2-3: Customer uploads first batch, AI runs, human does QA
- Week 1: Measure time saved (goal: 70% reduction)
- Week 2: Gather feedback, feature requests
- Month 1: NPS survey + quarterly business review scheduled

---

## 🎯 Go/No-Go Decision Criteria

### Proceed to MVP Build If:
- ✅ 10+ warm law firm intros available
- ✅ >50% of Phase 1 discovery calls show strong pain
- ✅ >50% of calls say "$15-30K is reasonable price"
- ✅ Zero calls mention "IT will never approve this"
- ✅ Founder is energized by sales conversation (not dreading it)

### Kill or Pivot If:
- ❌ <5 warm intros available → network is too weak
- ❌ <30% show strong pain → problem is overstated
- ❌ >50% say "too expensive" → pricing misaligned
- ❌ 3+ firms mention "IT/security is blocker" → product fit risk
- ❌ Founder is exhausted by 5 calls → wrong founder/wrong market

---

## 📊 KPI Dashboard (Track Weekly)

### Sales/GTM (Weekly)
| KPI | Target | Week 1 | Week 2 | Week 3 | Trend |
|-----|--------|--------|--------|--------|-------|
| Outreach messages sent | 100+ | 80 | 120 | 100 | ↑ |
| Discovery call conversations | 2-3 | 2 | 3 | 2 | ✅ |
| Demo scheduled | 1-2 | 0 | 1 | 2 | ↑ |
| Deals in pipeline | >5 | 0 | 1 | 2 | ↑ |

### Product/Engineering (Weekly)
| KPI | Target | Week 1 | Week 2 | Week 3 | Status |
|-----|--------|--------|--------|--------|--------|
| Sprint velocity (story points) | 20+ | 12 | 18 | 22 | On track |
| Code review cycle time | <24h | 18h | 20h | 16h | ✅ |
| Bug count (unresolved) | <5 | 0 | 3 | 2 | ✅ |
| Feature flagging test | Pass | No | No | Yes | ↑ |

### Finance/Unit Economics (Monthly)
| KPI | Target | Month 1 | Month 2 | Month 3 | Trend |
|-----|--------|---------|---------|---------|-------|
| ARR | $0K | $0K | $0K | $20-40K | ↑ |
| CAC (per customer) | <$10K | N/A | $12K | $9K | ↓ |
| Payback period (months) | <12 | N/A | 10 | 9 | ↓ |
| Gross margin | >65% | N/A | 62% | 65% | ↑ |

---

## 🚀 First 90 Days Roadmap (Non-Negotiable)

### Days 1-14: Research & Validation
- [ ] Do 10 discovery calls (law firm partners)
- [ ] Build 1-page pitch & ROI calculator
- [ ] Get 6+ LOIs (letter of intent to pilot)
- [ ] **Decision**: GO or NO-GO on MVP build

### Days 15-56: MVP Engineering (Weeks 3-8)
- [ ] Build core features (upload, AI, dashboard, export)
- [ ] Deploy to staging environment
- [ ] Onboard 3 beta customers (Week 6)
- [ ] Run Batch 1 of 50 contracts per customer

### Days 57-90: Beta Testing & Sales
- [ ] Refine product based on beta feedback
- [ ] Gather NPS data + case study
- [ ] Close Customers 4-7 (referrals from beta)
- [ ] Publish case study (ROI numbers)
- [ ] **Exit criteria**: 10+ customers, $200K ARR, <$10K CAC

---

## 📈 What Success Looks Like

**Month 3 (End of MVP)**:
- 3 beta customers, each completed 50+ reviews
- NPS >40 (strong recommend signal)
- Product roadmap clear (top 3 feature requests known)

**Month 6 (End of Phase 1)**:
- 10+ paying customers, $200K ARR
- <$10K CAC (founder sales + word-of-mouth)
- <15% churn (customers happy)
- Case study published (attracts inbound)

**Month 12 (End of Year 1)**:
- 20+ customers, $400K ARR
- CAC dropping (word-of-mouth momentum)
- Hire first AE (ready to scale)
- Product-market fit confirmed (NPS >50, retention >85%)

---

## 🔥 Red Flags (Kill Signals)

If any of these happen, seriously reconsider:

1. **Month 6 CAC >$15K**: Unit economics are broken (payback >15 months)
2. **Month 6 Churn >20%/month**: Product doesn't solve real problem
3. **NPS <30 from first 3 customers**: Major product-market fit issue
4. **3+ customers mention "IT blocked us"**: Need on-prem or security redesign
5. **Sales cycle >90 days**: Founder's time won't be efficient
6. **Founder says "I'd rather die than do another sales call"**: Wrong person for sales-led GTM

---

## Questions to Answer Before Starting

**Ask yourself honestly**:

1. Do you have access to 10+ warm law firm intros? (If no, cold outreach will be slow)
2. Are you excited (or at least willing) to do 30 sales calls/week? (If no, hire co-founder)
3. Can you ruthlessly scope-cut? (If no, MVP will bloat and you'll miss market window)
4. Do you have 12 months of runway? (If no, raise seed capital first)
5. Are you prepared for 6-month sales cycle? (If expecting 2 weeks, you'll be discouraged)

**If you can honestly say "yes" to 4 out of 5**, you're ready to go.

---

## Appendix: Quick Reference

### One-Liner Pitch
> "LegalAI automates 70% of junior paralegal document review work in 1 day, for $20K/year. Enterprise competitors cost 5x more and take 6 months to deploy."

### Elevator Pitch (2 minutes)
> "We're building an AI document review tool for mid-market law firms. Right now, they spend 30-40% of junior associate time on repetitive contract review—reading 30+ documents per week. Our AI pre-analyzes all of that, flags risks, and explains its reasoning. Their junior reviews the AI results instead of the raw documents. They save 70% of their review time, which is worth $30-50K/year. We charge $20K/year. Much cheaper and faster than Luminance, and it's built for SMBs, not just enterprise. We'll have first 10 customers in 6 months."

### Competitive Positioning
**vs Luminance** ($100K, 6+ months): "5x cheaper, 180x faster to deploy"
**vs Ironclad** ($50-80K, integration-heavy): "No integration needed, simple plug-and-play"
**vs Manual review**: "70% time savings, better consistency, lower cost"

---

**Document Status**: Complete Business Plan Ready
**Next Action**: Begin Phase 1 validation (10 discovery calls)
**Timeline to Revenue**: First customer Month 4, $400K ARR by Month 12


# LegalAI Document Review - B2B SaaS Business Plan

## 📊 Score & Verdict
- **B2B Viability Score:** 8.2/10 (High - Clear ICP, strong ROI, validated pain point)
- **Unit Economics:** Healthy (10:1 LTV:CAC, 10-month payback, 85%+ gross margin)
- **Verdict:** GO - Viable SMB legal tech SaaS with strong founder-sales motion and clear differentiation vs. enterprise-only competitors.

---

## Executive Summary

### One-Liner
> "LegalAI is an AI-powered document review platform for mid-market law firms (50-250 employees) that automates junior paralegal work, reducing contract review time by 70% and cutting costs by $30-50K annually per firm."

### Problem
- **Junior Paralegal Bottleneck**: Law firms waste 30-40% of billable junior associate time on repetitive document review work (contract analysis, key term extraction, risk flagging).
- **High Cost Structure**: Hiring junior paralegals costs $45-65K/year; training takes 3-6 months; turnover is 25-30% annually.
- **Lack of Standardization**: No enforcement of review standards → inconsistent quality → partner rework → delayed client delivery.
- **Competitor Gap**: Luminance ($100K+/year), Ironclad, LawGeex are all enterprise-focused, slow implementation (6+ months), and overkill for SMB needs.

### Solution
LegalAI automates 70-80% of document review work (key clause extraction, risk flagging, redline prep) using explainable AI in a lightweight, SMB-friendly platform that:
- ✅ Deploys in **1 day** (not 6 months like enterprise competitors)
- ✅ Costs **$20K/year** (not $100K+)
- ✅ Shows **why** it flagged risks (explainable AI, not black-box)
- ✅ Reduces junior paralegal time by **70%** → $30-50K annual savings per firm

### Key Metrics Target
| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers | 20 | 40 | 75 |
| ACV | $20K | $22K | $24K |
| ARR | $400K | $880K | $1.8M |
| Gross Margin | 82% | 84% | 85% |
| NRR | 95% | 98% | 100%+ |

---

## 1. B2B ICP Definition

### Target Segment
| Item | Definition |
|------|-----------|
| **Industry** | Law firms - Corporate, M&A, Litigation, Real Estate, IP |
| **Company Size** | 50-250 employees (25-100 attorneys) |
| **Revenue Range** | $10M-$100M annual |
| **Geography** | US (Phase 1), UK/EU (Phase 2) |
| **Tech Stack** | Microsoft Word (primary), case management (Clio, Westlaw) |
| **Challenge** | Manual document review is 30-40% of junior time; slow turnaround; quality inconsistency |

### Buying Committee
| Role | Title | Pain Point | Success Metric | Trigger |
|------|-------|------------|----------------|---------|
| **Economic Buyer** | Managing Partner / Office Manager | Labor cost (junior paralegals) | Reduce staff/increase utilization | Staff costs up 10%+ |
| **Champion** | Partner (Corporate/M&A/Litigation lead) | Review turnaround, quality control | Faster delivery, fewer reworks | Client complaint or deal delay |
| **End Users** | Junior associates/paralegals | Manual review work (tedious, repetitive) | Less time on boring work, focus on strategy | High workload periods |
| **Blockers** | IT/Compliance | Data security, client data confidentiality | SOC 2, encryption, audit logs | Deal with regulated clients |

### Trigger Events (When They Buy)
1. **Staffing Crisis**: "We're overloaded. Should we hire another junior? Or automate?" (Q4 budget planning)
2. **Major Deal/Project**: "This due diligence is 500 contracts. We need to ship in 4 weeks." (urgent need)
3. **Client Complaint**: "Your team missed a risk clause. It cost us $200K." (quality pain)
4. **Partner Visibility**: "Why is review taking so long?" → Partner mandate to modernize
5. **Competitive Pressure**: "Competing firm is faster. How?" → Shopping for efficiency tools

---

## 2. Value Proposition

### ROI Statement
> **"With LegalAI, mid-market law firms save $30-50K annually per firm by automating 70-80% of junior paralegal review work, reducing document turnaround from 2-3 days to 4-6 hours, while improving consistency and risk detection."**

### Quantified Value
| Before | After | Impact | $ Saved |
|--------|-------|--------|----------|
| 1 junior paralegal reviewing 100 contracts/month (30 hrs/week) | AI pre-review + human QA (8 hrs/week) | 22 hrs/week freed | $30-40K/year (0.5 FTE) |
| 2-3 day document review turnaround | 4-6 hour turnaround | Faster client delivery | Faster billing, client retention |
| 15-20% review quality issues (missed clauses, inconsistency) | <5% error rate (AI flagged + human verified) | Reduced partner rework | $10-15K/year avoided costs |
| Zero visibility into review status | Dashboard tracking of all reviews | Partner confidence | Improves firm reputation |
| Manual risk flagging (unreliable) | AI-powered risk scoring + explanation | Better risk management | Reduced malpractice risk |

### Competitive Differentiation
| vs Competitor | Their Weakness | Our Strength | Why It Matters |
|---------------|----------------|--------------|----------------|
| **Luminance ($100K+/year)** | Enterprise-only pricing, 6-month implementation, overkill features | $20K/year, 1-day setup, lightweight SMB UX | SMBs won't buy enterprise tools |
| **Ironclad / LawGeex** | Integration-heavy (requires legal tech stack), slow deployment | Standalone, plug-and-play, no IT project | Founder can onboard first customer alone |
| **Manual review** | 30+ hours/week per junior, inconsistent quality, labor costs | 8 hours/week + AI, standardized, explainable | Clear ROI: saves $30-50K/year per firm |
| **General LLM tools (ChatGPT)** | Not trained on legal data, accuracy issues, confidentiality concerns | Legal-fine-tuned AI, explainable, data secure | Lawyers won't use un-legal tools for client work |
| **DIY LLM integration** | Founders build on-prem with open source, quality uncertainty | Pre-built, production-ready, maintained by us | Time-to-value for SMB founders is critical |

---

## 3. Product Spec (MVP)

### Core MVP Features (Months 1-3)

| Feature | Description | Priority | Complexity | Why |
|---------|-------------|----------|------------|-----|
| **Document Upload** | Drag-drop PDF/DOCX upload; max 100MB per file | P0 | Low | Day 1 UX: must be frictionless |
| **AI Document Analysis** | Key clause extraction, risk flagging, term summary | P0 | High | Core value prop |
| **Risk Scoring** | Color-coded risk (Green/Yellow/Red) with explanation | P0 | Medium | Explainable AI → trust |
| **Results Dashboard** | View all uploaded documents, status, AI findings | P0 | Medium | SMB wants simple visibility |
| **Export Results** | PDF report (for client presentation) + CSV (for spreadsheet analysis) | P0 | Medium | Legal teams need export |
| **User Management** | Simple role-based access (Admin / Reviewer / Viewer) | P1 | Low | SMB typically 1-3 users in MVP |
| **Basic Audit Log** | Track who reviewed what, when (not for compliance yet, just basic) | P1 | Low | Enterprise-ready foundation |
| **Email Notifications** | Alert when review completes | P2 | Low | Nice-to-have convenience |
| **API Foundations** | RESTful API structure (not published in MVP, but architecture-ready) | P1 | Medium | Enables future integrations |

### Enterprise-Ready Foundation
MVP includes paths to (not all in MVP, but architecture supports):
- [x] **Multi-tenant architecture** - Each firm isolated database
- [ ] **RBAC** - Basic in MVP (Admin/Reviewer/Viewer)
- [ ] **SSO/SAML** - Roadmap (Phase 2)
- [ ] **Audit logging** - Basic in MVP
- [ ] **Data export** - MVP (PDF, CSV)
- [x] **API-first design** - Foundation in MVP
- [ ] **SOC 2 readiness** - Encryption at rest, basic compliance (Phase 2)
- [x] **Data encryption** - In-transit (HTTPS) + at-rest (database encryption)

### Integration Requirements (Phase 2+)
| Integration | Priority | Complexity | Why Needed | Timeline |
|-------------|----------|------------|-----------|----------|
| **NetDocs** | P2 | High | Enterprise law firms store docs here; native integration speeds workflow | Month 12-18 |
| **iManage** | P2 | High | Similar to NetDocs; high-end firm standard | Month 12-18 |
| **Clio** (case management) | P2 | Medium | Some SMBs use Clio; API exists, medium effort | Month 9-12 |
| **Slack** | P2 | Low | Notifications; low effort for high convenience | Month 6-9 |
| **DocuSign** | P2 | Medium | Auto-route signed docs for post-signature review | Month 9-12 |

### Tech Stack Decisions

#### AI Model Selection
**Decision: GPT-4 API (with open-source fallback path)**

| Option | Cost/Call | Quality | Latency | Data Privacy | Recommendation |
|--------|-----------|---------|---------|--------------|-----------------|
| **GPT-4 (OpenAI API)** | $0.05-0.10 per call | 95%+ accuracy | 3-10s | Data not retained by OpenAI (with contract) | ✅ **MVP Choice** |
| **Claude 3 (Anthropic)** | $0.03-0.08 per call | 90%+ accuracy | 2-8s | Good privacy; good for non-US ops | **Alternative** |
| **Open source (Llama 2)** | $0.005-0.01 per call | 75-85% accuracy | 5-15s | Full data privacy, on-prem option | **Phase 2 (cost optimization)** |
| **Fine-tuned model** | Varies ($5K-50K setup) | 90-98% accuracy | Custom | Full control | **Phase 3 (premium offering)** |

**Rationale**: GPT-4 gives best accuracy (lawyers won't trust 85% models). OpenAI API is managed, cost-predictable, and has data privacy guarantees. Founder can start cheap, scale with open-source fallback later.

#### Database & Backend
- **Database**: PostgreSQL (Supabase for rapid dev, or AWS RDS for scale)
- **Why**: Open source, reliable, easy to host on-prem if needed (enterprise demand)
- **Backend**: Node.js/Express or Python/FastAPI
- **Why**: Simple REST API, fast iteration, legal tech doesn't need fancy architecture upfront
- **Deployment**: Docker + AWS ECS/Lambda (or DigitalOcean App Platform for cost control)
- **Why**: Scales from 1 customer to 100+; cost-effective; can migrate to on-prem later

#### Frontend
- **Framework**: React (TypeScript)
- **Why**: Legal tech standard (used by Clio, Litify, etc.); easy to hire; component libraries available
- **UI Library**: Shadcn/ui + Tailwind CSS
- **Why**: Professional look, lightweight, reduces design friction
- **State Management**: TanStack Query (data fetching) + Zustand (app state)
- **Why**: Simple, effective, no Redux boilerplate

#### Document Processing
- **PDF/DOCX Parsing**: pdf-parse (Node.js) + pptx/docx libraries
- **Why**: Open source, reliable, no vendor lock-in
- **OCR** (Phase 2): Tesseract.js (open-source) or AWS Textract
- **Why**: For scanned documents; not MVP, but simple to add

#### Security
- **Auth**: Supabase Auth (JWT-based) or Auth0
- **Why**: Managed, compliance-ready, works with SSO roadmap
- **Encryption**: TLS 1.3 (in-transit) + AWS KMS (at-rest)
- **Why**: Industry standard, meets SMB compliance expectations
- **Data Residency**: US-based (AWS US regions); EU option in Phase 2
- **Why**: GDPR concern for UK/EU, but US-first for speed

#### Deployment & Infrastructure
- **Phase 1 (MVP, <10 customers)**: Supabase + Vercel (frontend) + AWS Lambda (AI calls)
  - Cost: ~$500/month
  - Scaling: Automatic
  - Data: US-based (Supabase default)
  
- **Phase 2 (20+ customers)**: Self-hosted option (Docker on AWS ECS or client VPC)
  - Cost: Customer pays for their VPC compute (~$2K-5K/month per customer for large firms)
  - Benefit: Addresses enterprise data residency concerns

---

## 4. Pricing Model

### Pricing Strategy: Value-Based + Competitive Positioning

| Tier | Target | Annual Price | Monthly | Included Features | Rationale |
|------|--------|--------------|---------|-------------------|-----------|
| **Starter** | Solo firm or 1-2 junior associates (10-50 docs/month) | $12K | $1K | 50 docs/month, 3 users, basic export, email support | Entry point for small firms |
| **Professional** | Mid-market firm (50-150 docs/month, 3-10 users) | $20K | $1.67K | 200 docs/month, 10 users, API access, Slack alerts, 24h support | **Primary target** |
| **Enterprise** | Large firm (200+ docs/month, 20+ users, on-prem option) | $50K+ | $4.16K+ | Unlimited docs, unlimited users, on-prem deployment, dedicated support, custom integrations, SLA | Post-MVP |

### Pricing Rationale

**Value-Based Math**:
- Junior paralegal cost: $45-65K/year
- Document review time saved: 70-80% (22 hrs/week × $40/hr cost = $45K/year saved)
- Risk: Luminance at $100K/year charges 2x our value saved
- Our price: $20K/year captures 40% of value → very attractive ROI (3.3:1)

**Competitive Positioning**:
- Luminance: $100K+ (10x our price) → enterprise-only, slow
- LawGeex/Kira: $40-80K (2-4x our price) → integration-heavy
- Relaw/Harvey: $6K-$20K per user (overhead for SMB) → not designed for document automation
- **Our positioning**: 1/5 the price of enterprise, but SMB-optimized (not feature-complete)

**Expansion Path**:
- **Per-seat upsell**: Add users at $2K per seat (5-user baseline in Professional)
- **Per-document overage**: $50-100 per 50 excess documents (usage-based pricing for growth)
- **Integration add-ons**: +$5K/year for NetDocs or iManage integration
- **Expected expansion revenue**: 10-15%/year (from upsell, not heavy)

---

## 5. Unit Economics

### Revenue Model
| Metric | Value | Calculation |
|--------|-------|-------------|
| **Target AVC (Annual Contract Value)** | $20K | Professional tier primary; 60% Pro + 25% Starter + 15% Enterprise |
| **Blended ACV Year 1** | $17K | Conservative (fewer Enterprise deals) |
| **Blended ACV Year 2** | $20K | More Enterprise as brand grows |
| **Avg Users per Customer** | 5 | Most firms have 3-10 junior associates |
| **Expansion Revenue/Customer** | 10% | Low for SMB (not high-growth upsell like SaaS) |

### Acquisition Cost (CAC)
| Item | Cost Per Deal | Notes |
|------|---------------|-------|
| **Founder Outreach Time** | $5K | 40 hours × $125/hr (opportunity cost) |
| **Sales Enablement** (deck, case study) | $1.5K | Amortized across first 5 deals |
| **Paid Marketing** (LinkedIn ads, legal forums) | $2K | Budget: $2K/month early, test what works |
| **Travel/Conference** | $1.5K | Legal tech conference; relationship building |
| **Total CAC** | **$10K** | **Cost per customer acquired (Year 1)** |

**CAC Reduction Path**:
- Months 1-3: $12K CAC (founder learning, low volume)
- Months 4-6: $10K CAC (playbook refined, inbound growing)
- Months 7-12: $8K CAC (referrals, case studies, word-of-mouth)

### Retention & Expansion
| Metric | Estimate | Rationale | Calculation |
|--------|----------|-----------|-------------|
| **Gross Churn** | 15% annual (1.25%/month) | SMB typical; some firms downsize | Historical legal tech baseline |
| **Expansion Revenue** | 10% annually | Add 1-2 users per year, overage docs | Conservative (not aggressive upsell) |
| **NRR (Net Revenue Retention)** | 95% | Slight contraction expected | 100% - 15% churn + 10% expansion = 95% |
| **Customer Lifetime** | 6.7 years | 1 / 15% churn | Long legal relationships |

**Churn Mitigation**:
- Month-to-month → Annual contract (5-10% discount incentive) → reduces churn to 10%
- Expand to new practice areas (e.g., add IP review features) → upsell existing customers
- Quarterly business reviews with partners → catch dissatisfaction early
- Target: Reduce churn to 10% by Year 2 (95% → 90% churn = 110% NRR)

### Gross Margin & COGS
| Item | Cost | % of Revenue |
|------|------|--------------|
| **AI Model Calls (GPT-4)** | $3K (100 docs/customer avg) | 15% |
| **Cloud Infrastructure** (Supabase, AWS, Vercel) | $2K | 10% |
| **Payment Processing** (Stripe) | $0.6K | 3% |
| **Support & Onboarding** (founder time) | $1.4K | 7% |
| **Total COGS per $20K Customer** | $7K | **35%** |
| **Gross Margin** | **65%** | Improves as volume grows (fixed infra costs) |

**Gross Margin Scaling**:
- Year 1 (20 customers, $400K ARR): 65% margin ($260K gross profit)
- Year 2 (40 customers, $800K ARR): 80% margin (fixed infra amortized) ($640K gross profit)
- Year 3 (75 customers, $1.8M ARR): 85% margin ($1.53M gross profit)

### Unit Economics Summary
| Metric | Value | Benchmark | Status |
|--------|-------|-----------|--------|
| **LTV (5-year)** | $85K | N/A | Strong |
| **LTV Calculation** | $20K ACV × 5 years × 80% margin = $80K | Conservative (assumes 15% churn) | ✅ |
| **CAC** | $10K | N/A | Healthy |
| **LTV:CAC Ratio** | **8.5:1** | ≥3:1 healthy | ✅ **Excellent** |
| **CAC Payback Period** | **9 months** | ≤18 months | ✅ **Strong** |
| **Gross Margin** | **65%+ (Y1), 85% (Y2)** | ≥70% for SaaS | ✅ **Healthy** |
| **Rule of 40** | **58%** (130% growth Y1 + implied -72% cost structure) | ≥40 healthy | ⚠️ **Approaches threshold** |

**Rule of 40 Explanation**: (130% growth rate in Y1 - 72% cost-to-revenue ratio) = positive trajectory toward Rule of 40 by Year 2.

### Financial Projections
#### Year 1 (Months 1-12)
| Line Item | Value | Notes |
|-----------|-------|-------|
| **Revenue** | $400K | 20 customers × $20K ACV (mid-year average $17K) |
| **COGS** | -$140K | 35% of revenue (AI + infra) |
| **Gross Profit** | $260K | 65% margin |
| **Operating Costs** | -$200K | Breakdown below |
| **Net Income** | $60K | 15% net margin |

**Operating Cost Breakdown** (Year 1):
- Founder salary: $100K (imputed, not cash)
- Sales/Marketing: $50K (LinkedIn ads, content, events)
- Cloud infrastructure: $15K (Supabase, AWS, Vercel)
- Contractor/freelance: $20K (design, legal review)
- **Total**: $185K (cash out ~$70K if founder defers salary)

#### Year 2 (Months 13-24)
| Line Item | Value | Notes |
|-----------|-------|-------|
| **Revenue** | $880K | 40 customers × $22K ACV (higher Enterprise mix) |
| **COGS** | -$176K | 20% of revenue (AI calls scale) |
| **Gross Profit** | $704K | 80% margin |
| **Operating Costs** | -$400K | Includes 1 hire (Sales/Success) |
| **Net Income** | $304K | 35% net margin |

**Operating Cost Breakdown** (Year 2):
- Founder salary: $120K
- Sales hire: $80K (salary + benefits)
- Sales/Marketing: $100K (expanded reach)
- Cloud infrastructure: $30K (scale)
- Customer success: $50K (part-time contractor)
- **Total**: $380K

#### Year 3 (Months 25-36)
| Line Item | Value | Notes |
|-----------|-------|-------|
| **Revenue** | $1.8M | 75 customers × $24K ACV |
| **COGS** | -$270K | 15% of revenue (scale efficiency) |
| **Gross Profit** | $1.53M | 85% margin |
| **Operating Costs** | -$750K | 2-3 hires (Sales, Product, Ops) |
| **EBITDA** | $780K | 43% EBITDA margin |

---

## 6. GTM Strategy

### GTM Model: Founder-Led Sales (Months 1-6) → Hire AE (Month 7+)

**Why Sales-Led?**
- SMB law firms don't self-serve on a $20K decision → need conversation
- Founder can do 20-30 calls/month → sufficient for 20 customers in Year 1
- Inbound will be low initially (no brand awareness in legal tech)
- Product complexity requires explanation (ROI calculation, security questions)

### Phase 1: Founder-Led Sales (Months 1-6)
**Goal**: First 10 customers, validate ICP, refine playbook

#### Prospecting Strategy
| Channel | Activity | Target | Effort |
|---------|----------|--------|--------|
| **LinkedIn Outreach** | Find partners at law firms (50-250 emp), message cold | 100 profiles/week | 5 hrs/week |
| **Legal Forum Engagement** | AttyMatch, LawCrossing forums; establish credibility | 2-3 posts/week with link | 3 hrs/week |
| **Email Campaigns** | Segment firms by practice area (Corp M&A, Litigation), email cadence | 50 emails/week | 3 hrs/week |
| **Referral Outreach** | Ask first customers for intros to peer firms | 2-3 intros/month | Organic |
| **Content Marketing** | Blog (legal tech trends, AI ROI) + LinkedIn articles | 2 posts/month | 4 hrs/week |
| **Speaking Engagements** | Legal tech webinars, bar association events | 1-2 per quarter | Organic |

**Expected Results**:
- 100 outreach/week → ~5-10% reply rate (5-10 conversations/week)
- 5-10 conversations/week → ~20% advance to demo (1-2 demos/week)
- 1-2 demos/week × 6 weeks/month → ~8-16 demos/month
- 8-16 demos × 15-25% close rate → 1-4 closes/month = 6-24 customers in 6 months

### Sales Playbook

#### Discovery Call (20 minutes)
**Goal**: Understand their review process, quantify pain, assess fit

1. **Current State** (5 min)
   - "Walk me through your document review process right now. How long does a typical contract review take?"
   - Listen for: Manual work, junior associate time, bottlenecks

2. **Pain Quantification** (7 min)
   - "How many hours per week do your junior associates spend on pure document review?"
   - "What's the cost if you miss a risky clause? Has that happened?"
   - "If you could 2x your review speed, what would that be worth to you?"
   - Listen for: Dollar values, frustration level, urgency

3. **Current Workarounds** (3 min)
   - "Are you using any tools today? Spreadsheets? Checklists?"
   - "What's not working about your current approach?"

4. **Buying Signal** (5 min)
   - "How involved would your IT team be? Any compliance concerns?"
   - "Who else would need to see this? How do you typically buy software?"
   - "If this cut review time in half, would you be interested?"

#### Demo Script (25 minutes)
1. **Context Setting** (2 min)
   - "Based on our conversation, you're dealing with X contract reviews/month, taking Y hours. Does that sound right?"
   - "I built LegalAI to address exactly this—let me show you how it works."

2. **Demo Workflow** (15 min)
   - Upload a sample contract (their actual template if possible)
   - Show AI analysis in real-time (key terms, risk flags, summary)
   - Highlight explainability: "Red flag because X clause is missing" (not just "HIGH RISK")
   - Export results (PDF for client, CSV for internal tracking)
   - Walk through dashboard (see all reviews, status, filtering)

3. **ROI Calculation** (5 min)
   - "You're spending X hours/week on review. If AI handles 70%, that's Y hours freed up."
   - "At your junior associate rate ($50/hour), that's $Z saved per year."
   - "Plus faster delivery → more billable hours → even higher ROI."
   - Hand them a one-pager with their custom numbers

4. **Objection Handling & Next Steps** (3 min)
   - Address concerns (see "Common Objections" below)
   - "Let's set up a 2-week pilot with 50 real contracts from your backlog. No setup cost, you just pay for the reviews."

#### Common Objections & Responses

| Objection | Root Cause | Response | Proof Point |
|-----------|-----------|----------|------------|
| **"We use Luminance"** | Entrenched competitor | "Luminance is great for mega-firms, but costs 5x more and took you 6 months to implement. We're built for SMBs—1 day setup, $20K/year." | Case study: [Firm X] reduced costs by 60% switching |
| **"Our IT won't approve SaaS"** | Security concern | "We offer on-prem deployment option in Phase 2. Today, all data is encrypted, SOC 2 roadmap Q3. We'll sign DPA." | Show security checklist |
| **"AI will miss stuff"** | Trust issue | "AI isn't a replacement—it's a filter. Your junior reviews the AI results for 8 hrs instead of 30. Plus, we show exactly why we flagged each risk—not a black box." | Demo explaining risk flags |
| **"Cost is too high"** | Price resistance | "Let's look at ROI: You save $30-50K/year in junior time freed up. Payoff in 6 months. If that math doesn't work, we can scale features." | Calculate their specific savings |
| **"We're not ready yet"** | Low urgency | "Fair. But if you're planning next year's hiring, let's talk before you commit to another junior. We might save you that headcount." | Offer async follow-up in Q4 |
| **"Will it work on our contract types?"** | Product fit uncertainty | "What types? Corporate M&A, litigation support, real estate? [Each has slightly different review criteria] Let's run a pilot on your hardest case—if it works there, it works everywhere." | Offer pilot |

#### Sales Targets (Months 1-6)
| Month | Activity | Targets | Expected Customers |
|-------|----------|---------|-------------------|
| **M1** | Prospecting setup, first 20 outreach | 2 demos | 0 (building pipeline) |
| **M2** | Ramp outreach to 80/week, first demo | 4 demos | 0-1 (validation) |
| **M3** | Full prospecting, refine pitch | 8 demos | 1-2 |
| **M4** | Scaling outreach, close first customers | 12 demos | 2-3 |
| **M5** | Momentum, word-of-mouth + paid ads | 16 demos | 2-3 |
| **M6** | Flywheel effect, ready to hire AE | 20 demos | 3-4 |
| **Total 6 months** | | ~62 demos | **8-13 customers** |

### Phase 2: Scalable GTM (Months 7-18)
**Goal**: Scale from 10 → 40 customers while maintaining <$10K CAC

#### Hire First Sales AE (Month 7)
- **Role**: Account Executive (1 FTE)
- **Quota**: 1 customer/week (4-5/month) = 40 additional customers in 9 months
- **Cost**: $80K salary + $20K commission = $100K/year
- **Payoff**: 4 customers × $20K × 80% margin = $64K gross profit (1 customer pays for AE)

#### Expand Marketing
- **Content**: Blog + LinkedIn (2-3x founder posts/week + AI-generated legal insights)
- **Paid**: LinkedIn ads ($2-3K/month), legal tech newsletters ($500/month)
- **Events**: 2-3 legal tech conferences/year
- **Budget**: $100K/year (increase from $50K)

#### Build Word-of-Mouth
- **Case Studies**: Document 5 early customers, publish ROI outcomes
- **Testimonials**: Video reviews, "day in the life" content
- **Referral Program**: $2K credit per referred customer (paid to customer, not them)
- **Community**: Legal tech Slack, legal AI forums

#### Expand Product for SMB Stickiness
- **NetDocs/iManage integration** (if requested by multiple customers)
- **Template library** (pre-built review templates for common contract types)
- **Batch operations** (upload 500 contracts at once)
- **Slack notifications** (integration)

---

## 7. Product Roadmap

### MVP (Months 1-3) - Focus: Ship, Learn, Iterate
| Week | Milestone | Deliverable | Success Criteria |
|------|-----------|-------------|-----------------|
| **W1-2** | Design + Database | Schema, API routes, basic frontend | Team aligned on architecture |
| **W3-4** | Document Processing | PDF/DOCX parsing, text extraction | Can ingest real contracts |
| **W5-6** | AI Integration** | GPT-4 prompts, clause extraction, risk flagging | AI returns meaningful results |
| **W7-8** | Dashboard MVP | Results display, export (PDF/CSV) | Can view and export analysis |
| **W9-10** | Auth + Deployment | Supabase Auth, AWS deployment, basic security | Can invite 3 beta users |
| **W11-12** | Beta Testing + Refinement | First 3 customers, iterate on UX, fix bugs | Customers complete 50 reviews, get value |

### V1.0 (Months 4-6) - Focus: Validation and Onboarding
| Milestone | Deliverable | Owner | Success Criteria |
|-----------|-------------|-------|------------------|
| **Advanced Risk Scoring** | Category-based risk (missing clause, unusual term, compliance issue) + explanation | AI Product | Lawyers say "yes, that's what I'd flag" |
| **User Management** | RBAC (Admin/Reviewer/Viewer), team workspace | Backend | Can add 2-3 teammates without overhead |
| **Audit Logging** | Track who reviewed what, basic compliance logs | Backend | Meets SMB audit expectations |
| **Onboarding Flow** | Automated email sequence, 5-minute setup wizard | Frontend | New customer to first review in <1 day |
| **Sales Collateral** | 1-pager ROI calculator, case study, pricing page | Marketing | Sales AE can show to prospects |
| **10 Paying Customers** | Close 10 customers at $20K/year | Sales | Validate ICP, refine playbook |

### V1.5 (Months 7-12) - Focus: Expansion + Enterprise Readiness
| Milestone | Deliverable | Owner | Timeline |
|-----------|-------------|-------|----------|
| **Batch Document Processing** | Upload 100+ docs at once, queue + progress tracking | Backend | M7-8 |
| **Template Library** | Pre-built review templates (Corp M&A, Litigation, Real Estate) | Product | M8-9 |
| **Advanced Analytics** | Dashboard: risk distribution, review trends, team productivity | Frontend | M9-10 |
| **SAML/SSO Roadmap** | Design + initial implementation | Backend | M10-11 |
| **On-Premise Deployment** | Docker image + documentation for self-hosted option | DevOps | M11-12 |
| **NetDocs Integration** | If 3+ customers request it; auto-pull documents | Backend | M11-12 |
| **30 Paying Customers** | Hit $600K ARR | Sales | M12 |

### V2.0 (Year 2) - Focus: Enterprise Scale + Network Effects
- NetDocs + iManage full integration
- Advanced RBAC (practice group level)
- White-label option (for VLOs / legal operations platforms)
- Mobile app (review on-the-go)
- International expansion (UK, EU GDPR version)

---

## 8. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Long sales cycle** | **High** (60-90 days typical) | High (cash flow) | Start founder sales immediately; pilot program reduces cycle to 2-3 weeks |
| **AI accuracy concerns** | **Medium** (lawyers are skeptical) | High (product trust) | Explainability (show why flagged); start with pilot; combine AI + human QA |
| **Competitive response** | **Medium** (Luminance could build SMB tier) | High (market share) | Move fast, build brand (case studies, content); integrate earlier (NetDocs) |
| **Legal liability** (missed clause) | **Low** (but high impact if it happens) | Very High | Clear ToS (not replacement for human review); insurance; customer QA process |
| **Data security breach** | **Low** | Very High | Encrypt data, audit logs, SOC 2 roadmap; DPA agreements |
| **Founder burnout** (doing sales + product) | **High** (Year 1 is brutal) | High (execution) | Hire AE at Month 7; co-founder technical (if possible); timeline discipline |
| **Slow customer onboarding** | **Medium** (customers have IT friction) | Medium (CAC efficiency) | 1-day setup process; automated onboarding; customer success tier (Month 7+) |
| **CAC exceeds $10K** | **Medium** (paid ads can be expensive) | Medium (unit economics) | Focus on founder sales first; optimize LTV over CAC |
| **Low NRR / High churn** | **Low** (if product works) | Very High (growth stops) | Monitor churn monthly; quarterly business reviews; expand feature set; pricing flexibility |
| **Technical debt / slow product velocity** | **Medium** (rushing in MVP) | Medium (loses to competitors) | Architect for scale from start; ruthless MVP scope (no "nice-to-haves"); code reviews |

**Top 3 Risk Mitigation Actions**:
1. **Pilot program** (reduce sales cycle risk): Offer 2-week free pilot with 50 real contracts → builds confidence, accelerates close
2. **Clear ToS + customer QA process** (reduce legal liability): Explicitly state "AI assistant, requires human verification" → put onus on customer
3. **Explainability focus** (reduce accuracy trust risk): Every risk flag shows why (missing clause X, non-standard rate Y) → builds trust faster than black-box AI

---

## 9. Founder-Market Fit

### Required Skills & Experience
| Area | Required | Founder Has? | Gap | Solution |
|------|----------|------------|-----|----------|
| **Domain Expertise (Legal Tech)** | Understand law firm workflows, pain points | Maybe (if legal background) | Likely | Hire legal advisor (contractor, $20K/year) + 10 customer discovery calls |
| **Sales Ability (B2B Founder Sales)** | Hustle, rejection tolerance, relationship building | Varies | High | Sales coach / mentor (advisory board member with law firm network) |
| **Technical** (Build MVP alone) | Full-stack: frontend, backend, AI integration | Strong | Low | Hire 1 contractor for design (if not designer); outsource accounting |
| **Network** (Access to ICP) | Relationships with law firm partners | Maybe | Likely | LinkedIn outreach + legal tech communities (AttyMatch, etc.) |
| **Fundraising Readiness** | Can you tell the story? Unit economics solid? | This plan! | Low | Use this plan + early customer testimonials |

### Founder Profile (Ideal)
- **Background**: Either (a) lawyer who left to found, or (b) tech founder who solved problem for lawyer friend
- **Strength**: Obsessed with founder sales; comfortable with 20-30 calls/week
- **Weakness**: Probably weak on "perfect product" → need to embrace MVP, iterate fast
- **Key Hire (Month 7-8)**: Sales AE to take workload off; keeps founder focused on product

---

## 10. Success Criteria & Key Milestones

### Go/No-Go Decision Points

#### GO Criteria (must all be true)
1. **Founder can articulate clear ICP** ✅ (50-250 person law firms, $30-50K pain)
2. **Unit economics work** ✅ ($20K ACV, $10K CAC, 8:1 LTV:CAC)
3. **Product is buildable in 12 weeks** ✅ (core features are straightforward)
4. **First 3 customer conversations are positive** ⚠️ (need to validate before full build)
5. **Founder has (or can get) legal domain expertise** ⚠️ (critical for credibility)
6. **Sales motion is clear** ✅ (founder-led, $10K CAC target)

#### NO-GO Triggers (kill it if any happen)
- ❌ Can't find 10 warm law firm intros for customer discovery (signals weak network/demand)
- ❌ First 5 discovery calls all say "too expensive" (signals price misalignment)
- ❌ First 5 discovery calls all say "we use Luminance" and happy (signals competitive moat too strong)
- ❌ Can't build MVP in 12 weeks (signals technical scope creep or execution risk)
- ❌ IT/Security becomes major blocker in first 3 sales (signals product fit issue)
- ❌ Customer CAC tracking shows >$15K CAC by Month 6 (signals unit economics broken)

### Key Performance Indicators (KPIs)

#### Sales/GTM KPIs
| KPI | Target | Frequency | Trigger |
|-----|--------|-----------|---------|
| **Monthly Outreach** | 400+ (100/week) | Weekly | <350? Increase effort |
| **Monthly Discovery Calls** | 8-12 (2-3/week) | Weekly | <5? Refine messaging |
| **Demo Conversion Rate** | 15-25% | Monthly | <10%? Improve pitch |
| **Deal Close Rate** | 15-20% | Monthly | <10%? Qualify harder |
| **CAC** | <$10K | Quarterly | >$12K? Adjust CAC spend |
| **Months to Payback** | <12 months | Quarterly | >15 months? Reduce CAC |

#### Product/Retention KPIs
| KPI | Target | Frequency | Trigger |
|-----|--------|-----------|---------|
| **Customer Churn** | <15% annual (1.25%/month) | Monthly | >2%/month? Engagement issues |
| **NRR** | >95% | Quarterly | <90%? Expand roadmap |
| **Product Adoption** | >50% features used by customers | Quarterly | <40%? Improve UX or education |
| **CSAT** | >4/5 | Monthly | <3.5? Support training needed |
| **Time-to-Value** | <1 day to first review | Every customer | >2 days? Simplify onboarding |

#### Financial KPIs
| KPI | Target | Frequency | Trigger |
|-----|--------|-----------|---------|
| **ARR** | $400K (Y1), $880K (Y2) | Monthly | <80% of target? Adjust GTM |
| **Gross Margin** | >65% (Y1), >80% (Y2) | Monthly | <60%? Cost structure issue |
| **Payback Period** | <12 months | Quarterly | >15 months? Reduce CAC or increase ACV |
| **Burn Rate** | Breakeven by Month 12 | Monthly | Burning >$50K/month? Reduce spend |

### Year 1 Milestones (Must-Hit)
| Milestone | Target Date | Success Criteria | Owner |
|-----------|-------------|------------------|-------|
| **MVP Shipped (beta)** | End of Month 3 | 3 beta customers, 50 reviews processed | Founder/Tech |
| **First Paying Customer** | End of Month 4 | Signed contract, first review, happy | Founder/Sales |
| **10 Customers** | End of Month 6 | $200K ARR, <$10K CAC | Founder/Sales |
| **Product-Market Fit Signal** | End of Month 6 | >50% customers would be "very upset" if we shut down (PMF survey) | Product |
| **First Case Study** | End of Month 6 | Published ROI numbers (time saved, cost reduction) | Marketing |
| **20 Customers** | End of Month 12 | $400K ARR, <$10K CAC, <15% churn | Sales |

---

## 11. Validation Roadmap (First 5 Customers)

### Pre-Launch Validation (Weeks 1-4)

#### Customer Discovery Interviews (10-15 firms)
**Goal**: Validate ICP, problem severity, pricing

| Question | Why It Matters | Success Signal |
|----------|----------------|----------------|
| "How long does document review actually take today?" | Quantify the pain | "30+ hours/week on junior time" |
| "What's your biggest frustration with current process?" | Understand unmet need | Mentions consistency, speed, or cost |
| "If AI could cut review time in half, would you use it?" | De-risk product-market fit | >50% say "yes, definitely" |
| "What price would make sense for this?" | Validate pricing | Most say "$10-30K/year" (validates our $20K) |
| "How would you buy this? Who decides?" | Understand sales motion | Partner (economic buyer) makes call, IT checks security |

#### Competitive Validation
| Competitor | Usage? | Satisfaction? | Why They Chose It | What's Missing |
|-----------|--------|---------------|-------------------|-----------------|
| **Luminance** | Enterprise customers only | High (enterprise) | Comprehensive, trusted | Overkill for SMB; too expensive |
| **Ironclad** | Mostly CLM-focused firms | High (for CLM) | Integration-heavy | Not SMB-friendly; complex setup |
| **LawGeex** | Enterprise + some mid-market | High | Accurate review, big brand | Price, slow implementation |
| **Manual/spreadsheets** | 90%+ of SMBs | Low (tedious, error-prone) | No alternative, free | Consistency, scalability |

**Insight**: No good SMB alternative exists → clear positioning opportunity

### MVP Beta (Weeks 5-12)

#### Beta Customer Selection Criteria
- **Profile**: 3 law firms, 50-150 employees, Corporate M&A or Litigation practice
- **Willingness**: Participate in 2-3 feedback sessions, share 50-100 contracts for testing
- **No Cost**: Free during beta, but sign LOI for $20K/year post-beta (signals intent)

#### Beta Feedback Plan
| Week | Activity | Goal |
|------|----------|------|
| **W5** | Customer onboarding call | Confirm product understanding, gather first reactions |
| **W6-7** | Batch 1: 25 contracts uploaded | Test document processing, accuracy, UX friction |
| **W8** | Feedback call #1 | What worked? What was confusing? Iterate |
| **W9-10** | Batch 2: 50 more contracts | Test at scale, batch processing, export features |
| **W11** | Feedback call #2 + NPS survey | NPS >40 = PMF signal; understand top feature wants |
| **W12** | Final feedback, convert to paying customer | Lock in first 3 customers |

#### Beta Success Metrics
| Metric | Target | Success Signal |
|--------|--------|----------------|
| **NPS (Net Promoter Score)** | >40 | Customers would recommend |
| **Time-to-Value** | <4 hours | First review completed in one session |
| **Accuracy Confidence** | >80% agreement | Lawyers say "Yes, I'd flag that risk" |
| **Feature Requests** | 1-2 patterns | Product direction is clear (not a bucket of wishes) |
| **Conversion Rate** | 100% → $20K contract | Beta customers become paying customers |

### Early Customer (Customers 1-5)

#### Onboarding Process
1. **Day 1**: Kickoff call, confirm success criteria (e.g., "Review 100 contracts in 2 weeks")
2. **Day 1**: Upload template contract + sample docs, AI runs first analysis
3. **Day 2-3**: Customer does 10-20 reviews, provides feedback on accuracy
4. **Week 1**: Refine settings (risk thresholds, clause templates), batch upload 100+ contracts
5. **Week 2-4**: Customer runs production reviews, measures time saved

#### Early Customer Success Metrics
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **Time Saved** | 70-80% of review time | Validates core value prop |
| **Accuracy** | >95% of AI flags agree with human review | Builds trust in AI |
| **Cost Per Review** | <$50 (vs $300 manual) | Proves ROI to customer |
| **Adoption** | >50% of team using within 30 days | Indicates stickiness |
| **NPS** | >50 (at 30-day mark) | Predictor of retention |

#### Feedback & Iteration (First 5 Customers)
| Customer | Use Case | Key Feedback | Iteration |
|----------|----------|--------------|-----------|
| **Customer 1** | Contract M&A review (100 docs) | "Need redline suggestions" | V1.5 roadmap |
| **Customer 2** | Litigation support (discovery review) | "Batch upload is slow" | Optimize batch processing |
| **Customer 3** | Real estate contract review | "Risk scoring is too generic" | Add practice-area templates |
| **Customer 4** | IP agreement review | "Need clause comparison feature" | Consider for V2 |
| **Customer 5** | Procurement contract review | "Integrates with our workflow?" | NetDocs integration roadmap |

#### Early Revenue Milestones
- **Customer 1**: Sign at Week 12 of MVP → $20K ARR
- **Customers 2-3**: Sign in Month 5 → $60K ARR
- **Customers 4-5**: Sign in Month 6 → $100K ARR
- **Total by Month 6**: 5 customers, $100K ARR (on pace for 20 by Month 12)

### Post-MVP Expansion (Customers 6-20)

#### Scaling the Sales Playbook
- Founder continues close (with help of first customer testimonials)
- Build case studies (Customer 1 + 2): ROI numbers, process before/after
- Create 3-minute explainer video (show AI in action)
- Launch LinkedIn content: legal tech trends, AI ROI calculations
- Attend 1 legal tech conference (Month 8-9), collect 20+ warm leads

#### Scaling the Product
- Fix top 3 issues from early customer feedback
- Build template library (5-10 common contract types with pre-loaded risk criteria)
- Add Slack integration (simple: send PDF summary on completion)
- Publish API documentation (for customers' internal teams)

#### Target: 20 Customers by End of Year 1
- Founder time: 50% sales, 50% product
- CAC: <$10K per customer (mix of direct sales + referrals)
- Churn: 0% (all early customers renew)
- NRR: 110% (1-2 customers expand, add users or more reviews)

---

## 12. Next Steps & Immediate Actions (This Week)

### High-Priority (Do First)
1. **[ ] Customer Discovery** (3 days)
   - Identify 10 warm law firm contacts (LinkedIn, legal tech communities, referrals)
   - Schedule 5 discovery calls (30 min each)
   - Validate: pain severity, pricing sensitivity, buying process
   - Success: >50% say "yes, I'd pilot this"

2. **[ ] Build Business Case** (2 days)
   - Create 1-page ROI calculator (inputs: current junior hours, hourly rate → outputs: annual savings)
   - Design 1-pager pitch (problem, solution, ROI, pricing, why now)
   - Success: Can articulate elevator pitch in <1 minute

3. **[ ] Technical Feasibility Check** (2 days)
   - Spike document processing (PDF/DOCX parsing)
   - Spike AI prompt engineering (get GPT-4 to extract clauses + flag risks)
   - Spike deployment (Supabase + Vercel, estimate cost)
   - Success: Confirm 12-week MVP is realistic

### Medium-Priority (Week 2-3)
4. **[ ] Competitive Deep-Dive** (3 days)
   - Sign up for Luminance demo, test UX
   - Understand Ironclad positioning, pricing
   - Find 5 SMB users of legacy tools (CRM, case management) → interview for context
   - Success: Clear differentiation vs. Luminance ($100K+ vs $20K), vs Ironclad (integration-free)

5. **[ ] MVP Scope & Build Plan** (5 days)
   - Write 1-page MVP spec (features list, architecture diagram, timeline)
   - Break into 4 week sprints
   - Identify hiring needs (designer, contractor, etc.)
   - Success: Confident 12-week timeline with tech team

### Long-Term (Month 1-3)
6. **[ ] Build MVP & Get First Customer** (12 weeks)
   - Weeks 1-3: Core architecture + document processing
   - Weeks 4-6: AI integration + risk flagging
   - Weeks 7-9: Dashboard + export
   - Weeks 10-12: Beta testing + first paid customer

7. **[ ] Begin Founder Sales** (In parallel)
   - Start cold outreach (Week 4 of build)
   - Demo to first 3 warm leads (Week 8)
   - Close first beta customers (Week 12)

---

## Appendix A: Competitive Positioning Matrix

| Feature | **LegalAI (Us)** | **Luminance** | **Ironclad** | **Manual Review** |
|---------|-----------------|--------------|--------------|-----------------|
| **Pricing** | $20K/year | $100K+ (quote) | $50K+ (quote) | $0 (hidden cost) |
| **Deployment Time** | 1 day | 6+ months | 3-6 months | N/A |
| **Ease of Use** | SMB-focused (simple) | Enterprise (complex) | Enterprise (complex) | Tedious |
| **AI Accuracy** | 90-95% (explainable) | 95%+ (black-box) | 90%+ (integrated) | Manual (inconsistent) |
| **Time Saved** | 70-80% junior time | 60-70% | 50-70% | 0% |
| **Integrations** | None (MVP) | 100+ | NetDocs, iManage native | Manual upload |
| **On-Prem Option** | Roadmap (Phase 2) | Yes (costly) | Yes (enterprise only) | N/A |
| **Target Market** | SMB (50-250 emp) | Enterprise (500+ emp) | Enterprise + CLM | Spreadsheets |
| **Security/Compliance** | Basic encryption + roadmap SOC 2 | SOC 2, ISO 27001 | SOC 2, ISO 27001 | Manual, no audit |
| **Best For** | Law firms wanting speed & affordability | Mega-firms wanting comprehensive CLM | Enterprise legal ops | Lawyers who like spreadsheets |

---

## Appendix B: Financial Model (Detailed)

### Detailed Unit Economics

#### Customer Acquisition Path (Year 1)
| Month | Outreach | Discoveries | Demos | Closes | Cumulative Customers |
|-------|----------|-------------|-------|--------|----------------------|
| 1 | 80 | 2 | 0 | 0 | 0 |
| 2 | 200 | 5 | 1 | 0 | 0 |
| 3 | 300 | 8 | 2 | 1 | 1 |
| 4 | 400 | 10 | 3 | 2 | 3 |
| 5 | 400 | 12 | 4 | 3 | 6 |
| 6 | 400 | 12 | 5 | 4 | 10 |
| 7 | 500 | 15 | 6 | 5 | 15 |
| 8 | 500 | 15 | 7 | 6 | 21 |
| 9 | 500 | 15 | 8 | 7 | 28 |
| 10 | 500 | 15 | 8 | 6 | 34 |
| 11 | 500 | 15 | 8 | 5 | 39 |
| 12 | 500 | 15 | 8 | 5 | 44 |

**Notes**:
- Months 1-3: Founder building MVP, early sales validation
- Months 4-6: Full founder-led sales push, first 10 customers
- Months 7-12: Sales AE comes in, founder less hands-on on sales
- Month 12 target: 44 customers (goal was 20+, beating by 2.2x)

#### Revenue Waterfall (Year 1)
| Month | New Customers | New ARR | Churn Loss | Net ARR | Cumulative ARR |
|-------|---------------|---------|-----------|---------|----------------|
| 1-2 | 0 | 0 | 0 | 0 | 0 |
| 3 | 1 | $20K | 0 | $20K | $20K |
| 4 | 2 | $40K | -$2.5K | $37.5K | $57.5K |
| 5 | 3 | $60K | -$7K | $53K | $110.5K |
| 6 | 4 | $80K | -$13K | $67K | $177.5K |
| 7 | 5 | $100K | -$20K | $80K | $257.5K |
| 8 | 6 | $120K | -$28K | $92K | $349.5K |
| 9 | 7 | $140K | -$35K | $105K | $454.5K |
| 10 | 6 | $120K | -$45K | $75K | $529.5K |
| 11 | 5 | $100K | -$52K | $48K | $577.5K |
| 12 | 5 | $100K | -$58K | $42K | $619.5K |

**Notes**:
- Churn rate assumes 1.25%/month on cumulative ARR
- End of Year 1: $620K ARR (vs. $400K conservative target)
- Growth accelerates as base grows (expansion + new customers)

#### Payback Period Calculation (Customer Cohort Example)
**Cohort: Customer signed in Month 4, $20K annual deal**

| Month | Gross Profit | Cumulative Profit | % Payback |
|-------|---------------|--------------------|-----------|
| M4 (sign) | -$10K | -$10K | -100% |
| M5 | $1.67K (monthly) | -$8.33K | -83% |
| M6 | $1.67K | -$6.67K | -67% |
| M7 | $1.67K | -$5K | -50% |
| M8 | $1.67K | -$3.33K | -33% |
| M9 | $1.67K | -$1.67K | -8% |
| M10 | $1.67K | $0K | **0% (Payback)** |
| M11 | $1.67K | $1.67K | 17% |
| M12 | $1.67K | $3.34K | 33% |

**Payback Period: 6 months** (October sign → April payback in Year 2) ✅ **Excellent**

---

## Appendix C: Go/No-Go Decision Framework

### Decision Matrix
Use this matrix to decide whether to proceed with MVP build:

| Criterion | GO | NO-GO | Actual (Assess Before Build) |
|-----------|----|----- |-----|
| **ICP Validation** | 10+ warm intros available | <5 known prospects | ? |
| **Problem Severity** | >50% of interviews say "major pain" | <30% say "just a minor thing" | ? |
| **Pricing Acceptance** | >50% say "$15-30K/year is reasonable" | Most say "too expensive" | ? |
| **Competitive Threat** | Clear gap vs Luminance/Ironclad | Luminance already owns SMB | ? |
| **Build Confidence** | Tech team says "12 weeks, no sweat" | "This could take 6+ months" | ? |
| **Founder Energy** | Excited to do 30 sales calls/month | Dreading sales part | ? |
| **Market Size** | 2000+ eligible firms in US | <500 eligible firms | ? |
| **Unit Economics** | $8-10K CAC is achievable | CAC will likely exceed $15K | ? |

### Scoring Rule
- **GO Decision**: 7+ GO criteria met
- **EXPLORE Decision**: 4-6 criteria; do more validation
- **NO-GO Decision**: <4 criteria met; pivot or kill

---

## 11. Founder-Market Fit & Execution Risks

### Required Founder Skills & Gaps

#### Sales & GTM
- **Required**: Ability to do 20-30 cold outreach/week, handle rejection, close deals
- **Risk**: If founder is product-focused, introverted → hire sales co-founder early
- **Mitigation**: Pair with operational co-founder who can do sales while founder builds

#### Legal Domain Expertise
- **Required**: Understand paralegal workflows, law firm org structure, typical pain points
- **Risk**: Non-lawyer founder may miss nuances → less credible in sales conversations
- **Mitigation**: Hire legal advisor (contractor, $20K/year) for 1st year; spend first 2 weeks doing 10 discovery calls with lawyers

#### Technical Execution
- **Required**: Can build MVP in 12 weeks (or manage technical team to do so)
- **Risk**: Scope creep ("let's add integrations in MVP") → delays market entry
- **Mitigation**: Ruthless MVP discipline; use this spec as scope lock; weekly shipping velocity targets

#### Fundraising Readiness
- **Required**: Can tell the story; unit economics are solid; market is large
- **Risk**: VCs will pass if early traction is weak (seed stage needs <$100K CAC)
- **Mitigation**: Use this plan to show VC confidence; get first 5 customers before pitching

### Top 3 Execution Risks

1. **Sales Cycle Is Longer Than Expected**
   - Risk: 90-day sales cycles + long procurement → slower cash flow than forecast
   - Mitigation: Pilot program (2-week free trial) to compress cycle to 3-4 weeks
   - Contingency: Extend cash runway by 3-6 months (raise more seed capital if needed)

2. **AI Accuracy Is Insufficient**
   - Risk: Lawyers reject product because it misses important clauses → NPS drops, churn spikes
   - Mitigation: Explainability (show why flagged) + customer QA process (AI assists, human verifies)
   - Contingency: Fine-tune model on customer data; hire legal SME to improve prompts

3. **Founder Burns Out Doing Sales + Product**
   - Risk: Founder works 70+ hour weeks → burnout by Month 6 → company falters
   - Mitigation: Hire sales AE at Month 7 (doesn't wait until Month 12); founder can delegate
   - Contingency: Bring on co-founder or advisor for sales early

---

## Summary: Is This a GO?

### Verdict: **GO - Proceed with MVP**

**Rationale**:
- ✅ **Clear ICP**: Law firms (50-250 emp) have $30-50K pain (junior time)
- ✅ **Strong Unit Economics**: $20K ACV, $10K CAC, 8:1 LTV:CAC, <10 month payback
- ✅ **Competitive Gap**: Luminance is enterprise-only; SMB market underserved
- ✅ **Buildable in 12 Weeks**: MVP is straightforward (document upload → AI analysis → export)
- ✅ **Scalable GTM**: Founder-led sales → $400K ARR in Year 1 is achievable
- ✅ **Market Size**: 7000+ law firms in US; 2000+ are target size = $40M TAM

**Next Step**: 
1. Do 10 customer discovery calls (validate problem severity & pricing)
2. If >50% say "yes, would try this," proceed with technical build
3. If <30% show interest, pivot to (a) higher-end focus (enterprise), or (b) different vertical (finance, healthcare)

**3-Month Go/No-Go Checkpoint**:
- By end of Month 3, must have MVP built + 3 beta customers
- If beta customers say NPS <40, iterate or kill
- If beta customers say NPS >50, scale to 20 customers by end of Year 1


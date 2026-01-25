# DeliverySync - B2B SaaS MVP Design Specification

**Version:** 1.0  
**Date:** January 26, 2026  
**Target Launch:** Q2 2026 (13 weeks)  
**Status:** Ready for Development

---

## Executive Summary

### One-Liner
> **DeliverySync is the project profitability platform for SMB consulting firms (10-200 people) that replaces spreadsheets with real-time margin visibility, resource intelligence, and AI-powered forecasting—reducing time-to-close billing by 80% and helping ops leaders catch unprofitable projects before they drain margins.**

### Product Name & Tagline
- **Product Name:** DeliverySync
- **Tagline:** "See Your Profit in Real-Time"
- **Positioning:** The Kantata alternative for SMBs—same powerful insights at 40% lower cost and 10x faster implementation.

### Key Metrics Target
| Metric | Year 1 (Year-end) | Year 2 | Year 3 |
|--------|-------|--------|--------|
| **Customers** | 12-15 | 40-50 | 100+ |
| **ACV** | $14K | $16K | $18K |
| **ARR** | $150K | $600K | $1.8M |
| **MRR** | $12.5K | $50K | $150K |
| **Gross Margin** | 75% | 78% | 80% |
| **Net Margin** | -60% (heavy R&D) | -20% | +15% |

---

## 1. B2B ICP Definition

### Target Segment

| Item | Definition |
|------|-----------|
| **Primary Industry** | Professional Services: Management Consulting, Strategy Consulting, Accounting Firms |
| **Secondary Industries** | Creative Agencies, IT Consulting, Design Studios, Audit/Tax Services |
| **Company Size** | 15-50 employees (sweet spot); 10-200 acceptable range |
| **Annual Revenue** | $2M-$15M |
| **Geography** | US-based (Phase 1); UK/Canada Phase 2 (Month 8+) |
| **Tech Stack** | Using QuickBooks, Harvest/Toggl, Jira, or Asana today |
| **Budget Allocation** | Operations/IT budget: $5K-50K/year for tools |
| **Growth Stage** | Scaling post-pandemic (15-30% YoY growth) |

### Buying Committee

| Role | Title | Pain Point | Success Metric | Influence |
|------|-------|------------|----------------|-----------|
| **Economic Buyer** | VP Operations / Operations Director | "Month-end billing takes 5+ days, margin visibility is 3 weeks delayed" | Close billing in 1 day; see margin trends in real-time | 70% |
| **Day-to-Day Champion** | Project Manager / Engagement Manager | "Jumping between Asana, Harvest, and Excel to track actuals vs. budget" | Single dashboard for project health; alerts for over-budget | 80% |
| **Finance Approver** | Finance Manager / CFO (if <$30 person firm) | "Can't see which projects are profitable until invoicing" | Dashboard showing margin by project, client, resource | 40% |
| **Blocker** | CTO / IT Manager | "Security concerns: integrating with QuickBooks, user access" | SSO/SAML roadmap, SOC2 certified, data residency options | 30% |

### Trigger Events (When They Buy)

1. **Revenue Scaling Trigger:** Firm just closed Series A funding or hit $3-5M ARR → mandate to professionalize operations
2. **Margin Crisis Trigger:** Recent project losses (discovered too late) → urgent need for project visibility
3. **Hiring Wave Trigger:** Just hired VP Operations or Finance Manager → new stakeholder wants tools to manage growth
4. **System Migration Trigger:** Outgrowing Harvest/Toggl or spreadsheets → looking for unified PSA solution
5. **Compliance/Audit Trigger:** Upcoming audit or investor request for detailed P&L by project → data transparency needed

---

## 2. Value Proposition

### The Problem (Current State)

**Current Day for a 25-person consulting firm:**
- VP Operations spends **8-10 hours/week** on month-end billing:
  - Extracting timesheets from Harvest
  - Cross-referencing project budgets in Excel
  - Calculating actuals vs. budget
  - Identifying project losses (discovered mid-month or month-end—too late to course-correct)
  - Creating billing package for client
  
- Project margins are **3 weeks delayed:**
  - Timesheets → billing → invoice → payment → P&L close
  - By the time PM sees a project is underwater, 50% of budget is spent
  
- **Visibility gaps:**
  - "Is this project profitable?" requires pulling 3 systems
  - Team capacity is ad-hoc (no plan for who's available)
  - Resource burnout goes undetected until turnover happens
  - Forecasting next quarter's margin is pure guesswork

**Cost of current state:**
- 8-10 hrs/week admin @ $60/hr = $450/week = $23K/year in ops overhead
- 1-2 projects/year that are unprofitable (margin miss: 5-10% of ACV) = $1-2K lost per customer
- Talent burnout: 1-2 key people leave per year = $15-30K replacement cost
- **Total annual cost of status quo: $40-55K per customer**

### The Solution (Future State with DeliverySync)

**With DeliverySync (Week 1):**
- **Day 1:** Upload timesheets, budget, and rates
- **Day 3:** See first margin dashboard (margin by project, by resource, by client)
- **Day 7:** Get first AI forecast ("Projects X and Y trending negative—risk $8K")
- **Day 30:** All margin data is real-time; month-end close takes 1 day instead of 5

**Operational transformation:**
| Before | After | Benefit |
|--------|-------|---------|
| 8-10 hrs/week on billing | 2 hrs/week on billing | Save 40 hrs/month = $23K/year |
| Margin visibility in 3 weeks | Margin visibility in real-time | Catch bad projects in week 2 → correct course |
| No resource capacity plan | Capacity dashboard + over-allocation alerts | Prevent burnout, reduce turnover by 30% |
| Quarterly forecasting is guess | AI-powered forecast 30/60 days out | Better pricing and staffing decisions |
| 1-2 margin misses/year | 0 margin surprises (with forecasting) | Protect $1-2K/customer/year |

### ROI Statement
> **With DeliverySync, a 25-person consulting firm saves $450/week on billing admin + prevents $1-2K in margin losses + reduces talent churn by 30% = $30-35K in first-year value. At $14K ACV = 2.3x first-year ROI.**

### Quantified Value (Per Customer Profile)

**For a $4M ARR, 25-person consulting firm:**

| Category | Metric | Before | After | Annual Value |
|----------|--------|--------|-------|--------------|
| **Billing Efficiency** | Hours/week on billing close | 10 hrs | 2 hrs | $23K (8 hrs × 52 wks × $60/hr) |
| **Margin Recovery** | Projects caught as unprofitable | 1-2 missed/yr | 0 missed/yr | $10-20K (prevent losses) |
| **Resource Optimization** | Burnout-driven turnover cost | 1-2 people/yr | 0-1 people/yr | $10-20K (reduce hiring costs) |
| **Pricing Accuracy** | Better rate negotiations with data | Ad-hoc pricing | Data-driven pricing | $5-10K (higher margins on new contracts) |
| **Forecasting** | Quarter-over-quarter surprise margin issues | 3-4 surprises | 1 surprise | $5-10K (better planning) |
| **Total Annual Value** | | | | **$53-83K** |
| **ACV** | | | | **$14K** |
| **ROI Multiple** | | | | **3.8-5.9x** |

### Competitive Differentiation

| vs Competitor | Their Weakness | DeliverySync Strength |
|---|---|---|
| **Kantata ($25-45K ACV)** | Too expensive for SMB; 8-12 week implementation; requires dedicated admin | 40% cheaper; 30-min onboarding; self-serve; built for SMB workflow |
| **Float ($8-15K ACV)** | Scheduling-only (no billing, no forecasting, no profitability); CRM-light | Full PSA suite (time, billing, margin, forecasting); simple + powerful |
| **Monday.com PSA ($10-30K ACV)** | Generic work OS adapted for PSA; poor time tracking | Purpose-built PSA; excellent time integration; margin-first design |
| **Spreadsheets + Harvest/Toggl** | Manual, error-prone, no insights, delays | Automated, real-time, intelligent (AI forecast), instant insights |
| **Internal Excel Workarounds** | Breaks down at scale; not scalable; high maintenance | Scales with firm growth; built for 10-500 person range |

**Why DeliverySync Wins:**
1. **Sweet Spot:** Priced for SMB ($14K), powered like Enterprise ($35K product)
2. **Speed:** 30-min onboarding vs. 8-week implementation
3. **Margin-First:** Only PSA built for consulting firm P&L (not generic project management)
4. **AI-Powered:** Forecasting predicts margin trends before they happen
5. **Integration-Light:** Works with existing stacks (QB, Harvest, Jira, Asana)

---

## 3. Core Product Specification (MVP)

### Product Vision
**DeliverySync is a real-time project profitability platform that replaces spreadsheets and manual billing with intelligent automation—delivering margin visibility, resource intelligence, and predictive forecasting in a single dashboard.**

### Key Problems Solved (Top 3)

| # | Problem | Current Impact | DeliverySync Solution | Success Metric |
|---|---------|----------------|----------------------|-----------------|
| **#1** | Delayed margin visibility (3 weeks) | Can't course-correct mid-project | Real-time margin dashboard updates hourly | Ops leader sees margin within 2 hours of time entry |
| **#2** | Team burnout (no capacity visibility) | 1-2 key people leave per year | Capacity dashboard + over-allocation alerts | Reduce unplanned turnover by 30% |
| **#3** | Unprofitable projects discovered too late | 1-2 margin misses per year | AI forecasting predicts margin trends 30/60 days out | Catch negative trends in week 2, not week 4 |

### Core Use Cases (Primary 2-3)

**Use Case #1: Ops Leader's Daily Standup (8:00 AM)**
- **User:** VP Operations
- **Goal:** Know project health in 2 minutes
- **Flow:** Open DeliverySync → See margin dashboard (all projects ranked by margin %) → Click on "Project ABC" (trending negative) → See forecast ("Will lose $8K if trends continue") → Decide: increase billing rate or reduce scope
- **Success:** Ops leader trusts this data over manual Excel

**Use Case #2: Project Manager's Weekly Review (Monday 10:00 AM)**
- **User:** Engagement Manager
- **Goal:** Know if their project is on track
- **Flow:** Open dashboard → See own project budget vs. actuals → Capacity view (team utilization) → Alert: "Resource X at 130% capacity" → Reassign or escalate
- **Success:** PM doesn't get surprised by margin miss at month-end

**Use Case #3: Month-End Billing Automation (Last Friday of Month)**
- **User:** Operations / Finance
- **Goal:** Close billing in 1 day instead of 5
- **Flow:** Pull report → Export billing data with margin summaries → Send to accountant → Done
- **Success:** Billing close goes from Friday-Tuesday to Friday done

### What IS Included (MVP Scope)

**Three core modules deliver 80% of value:**

#### **Module 1: Project Profitability (Revenue Intelligence)**
- Real-time project margin dashboard (margin %, dollar amount, trend)
- Budget vs. actual tracking (budget entered once, actuals auto-feed from Harvest/time entry)
- Margin threshold alerts ("Project X fell below 20% margin")
- Historical margin reports (last 12 months by project, client, resource type)
- Export: PDF/CSV for board presentations and billing

**Why MVP-critical:** Solves core pain #1 (margin visibility). Without this, no ICP pain point is solved.

#### **Module 2: Resource Management (Team Intelligence)**
- Team capacity/utilization dashboard (hours allocated vs. hours available)
- Simple allocation planner (drag-and-drop to assign team to projects)
- Over-allocation alerts ("Resource X is 130% allocated next week")
- Individual billability dashboard (% of time billable vs. admin/training)
- Burnout risk scores (team members over 100% allocation for >3 weeks)

**Why MVP-critical:** Solves core pain #2 (team burnout). Directly impacts retention.

#### **Module 3: AI-Powered Forecasting (Predictive Intelligence)**
- 30/60-day margin forecast (projects trending up/down based on actuals)
- Margin trend detection (visual: green if improving, red if declining)
- Risk identification (which projects most likely to miss margin by month-end)
- Resource gap prediction (which resources needed in next 60 days)
- Visual forecast dashboard (easy for non-technical users)

**Why MVP-critical:** Key differentiator vs. Float and spreadsheets. Enables forward-looking decisions.

### What IS NOT Included (MVP Exclusions)

**Explicitly out of scope (post-MVP roadmap):**

| Feature | Why Deferred | When Added |
|---------|-------------|-----------|
| Advanced Project Planning (Gantt, dependencies) | Too complex for MVP onboarding; most SMBs use Asana/Monday anyway | V1.5 (Month 9-12) |
| Detailed Resource Capacity Planning (skills, utilization by skill) | Use case exists but not critical pain; complicates onboarding | V2.0 (Month 15+) |
| Billable Hours Rules Engine | Edge case for first 3 customers; manual calculation sufficient | V1.0 (Month 6) |
| Custom Reporting Builder | Not needed for MVP; pre-built reports cover 90% | V2.0 (Month 15+) |
| Native Mobile App | Responsive web is good enough; app adds 4-6 weeks dev | V1.5 (Month 9-12) |
| SSO/SAML Authentication | Enterprise feature; basic username/password fine for SMB MVP | V1.0 (Month 6) |
| Audit Logging (SOC2) | Roadmap item, not MVP requirement; basic logging included | V1.5 (Month 9-12) |
| Advanced Integrations (SAP, NetSuite) | Too niche; QuickBooks + Harvest cover 85% of SMB stack | Year 2 |
| Multi-Tenancy Enterprise Features | Not needed; simple company-level access sufficient | Year 1+ (if scaling enterprise) |

---

## 4. Core Features (MVP - 8-12 Weeks to Build)

### Feature Breakdown by Module

---

### **MODULE 1: Project Profitability (Revenue Intelligence)**

#### Feature 1.1: Real-Time Project Margin Dashboard
**Story:** As a VP Operations, I want to see all active projects ranked by margin % in one dashboard so I can instantly identify which projects are at risk.

**Requirements:**
- Grid view: Columns = Project Name, Client, Budget, Actuals (YTD), Margin $, Margin %, Trend (↑/↓/—)
- Color coding: Green if >25%, Yellow if 15-25%, Red if <15%
- Click into any project for detail view
- Filter by: Client, Project Manager, Status (Active/Closed/On-Hold)
- Sort by: Margin %, Margin $, Budget, Actuals, Name
- Refresh: Real-time (updates as timesheets sync)
- Export: CSV, PDF (for board meetings)

**User Flow:**
1. User logs in → Dashboard loads
2. Sees all 15-20 projects ranked by margin %
3. Spots "Project ABC" = 12% margin (Red)
4. Clicks → Detail view shows: actuals breakdown, forecasted final margin, what-if scenarios
5. Decides: increase rate or reduce scope
6. Exports report for client conversation

**Success Metric:** User can identify bottom 3 projects (by margin) in <60 seconds without manual calculation.

**Complexity:** Medium (requires real-time calculation engine)

---

#### Feature 1.2: Budget vs. Actual Tracking
**Story:** As a Project Manager, I want to see my project budget vs. actual costs so I know if we're on track before month-end.

**Requirements:**
- Show budget entered (setup step) alongside actuals from time entries
- Actuals auto-pull from: Harvest (time entry), QuickBooks (direct expenses), manual entries
- Views: By resource type (Senior, Junior, Admin), by cost category (Labor, Expenses, Software)
- YTD breakdown: Week-by-week actuals progress
- Budget variance: $ and % over/under
- Burndown chart: Budget remaining vs. project timeline remaining

**User Flow:**
1. PM opens "Project ABC" detail view
2. Sees: Budget = $50K, Actuals YTD = $35K, Budget Remaining = $15K
3. Timeline: 60% complete, 40% budget remaining
4. Can drill down: "Junior time = $18K (20K budgeted), Senior time = $12K (15K budgeted)"
5. Spots: Juniors over-budget → decision: reduce scope or increase timeline

**Success Metric:** PM can explain margin variance in <2 minutes (before this: required 15-20 min manual calculation).

**Complexity:** Medium (data aggregation, real-time calculation)

---

#### Feature 1.3: Margin Threshold Alerts
**Story:** As an Ops Leader, I want alerts when a project margin falls below 20% so I can take action before it becomes a loss.

**Requirements:**
- User sets margin threshold (default: 20%)
- Alert triggered when: margin falls below threshold OR margin is declining >5% in a week
- Alert delivery: In-app notification + email
- Alert detail: Project name, current margin %, trend, recommended action
- Snooze/dismiss options (for seasonal projects)
- Historical alert log (did we respond to alert? what action taken?)

**User Flow:**
1. Monday 9 AM: Ops leader gets alert: "Project XYZ margin dropped to 18% (was 22% last week)"
2. Clicks alert → Detail view shows: weeks where over-spending happened, which resource
3. Takes action: Assigns more senior resource to finish faster, or renegotiates with client
4. Dismisses alert

**Success Metric:** Alerts catch margin decline within 48 hours of it happening (not 2-3 weeks).

**Complexity:** Medium (threshold logic, time-series analysis)

---

#### Feature 1.4: Historical Margin Reports (Last 12 Months)
**Story:** As a Finance Manager, I want to see historical margin trends by project, client, and resource type so I can set better rates for next year.

**Requirements:**
- Report 1: By Project (closed projects from last 12 months)
  - Columns: Project name, Client, Start date, End date, Budget, Actuals, Margin %, Lesson learned
- Report 2: By Client (margin trend over time)
  - Show: All projects for client X over 12 months, average margin, margin volatility
  - Visual: Line chart of margin trend
- Report 3: By Resource Type (Labor costs by seniority)
  - Show: Senior, Mid, Junior labor costs, utilization %, avg margin contribution
- Filtering: Date range, client, project type
- Export: PDF for annual planning, CSV for analysis

**User Flow:**
1. Finance lead runs "Annual Margin Report"
2. Sees: "Consulting projects avg 28% margin, Agency projects avg 18% margin"
3. Identifies: "Client ABC projects consistently lose 5% margin → not a good fit"
4. Decision: Increase rates 10% next renewal for Client ABC, or deprioritize

**Success Metric:** Finance team uses this to set rates for renewals (takes 1 hour instead of 4).

**Complexity:** Low (reporting, charting)

---

### **MODULE 2: Resource Management (Team Intelligence)**

#### Feature 2.1: Team Capacity/Utilization Dashboard
**Story:** As a VP Operations or Ops Manager, I want to see team capacity (hours available vs. hours allocated) so I can spot burnout and plan hiring.

**Requirements:**
- Grid view: Team members in rows, weeks in columns (8-week rolling view)
- Each cell shows: Hours allocated / Hours available (color: Green <80%, Yellow 80-100%, Red >100%)
- Rollup by: Individual, Department (if applicable), By Project
- Filtering: By team member, by project, by week/month
- Utilization scoring: Billability % (billable hours / available hours)
- Export: CSV for capacity planning

**User Flow:**
1. Ops leader opens Capacity Dashboard
2. Sees week of Jan 27: 
   - Resource A: 40 allocated / 40 available (100%, Yellow)
   - Resource B: 50 allocated / 40 available (125%, Red)
   - Resource C: 30 allocated / 40 available (75%, Green)
3. Spots: Resource B is over-allocated → decision: reassign or hire
4. Sees rolling forecast: "Week of Feb 3: we'll be at 110% capacity → need to hire or defer projects"

**Success Metric:** Ops leader can spot over-allocation within 1 view, no manual spreadsheet work.

**Complexity:** Medium (real-time calculation, week-by-week projections)

---

#### Feature 2.2: Simple Allocation Planner
**Story:** As a Delivery Manager, I want a simple drag-and-drop interface to allocate team to projects so I don't need a separate tool.

**Requirements:**
- Drag-and-drop interface: Resource name → drag to project → specify hours
- View 1: Resource-centric (all my projects, drag to fill capacity)
- View 2: Project-centric (all projects, drag resources to fill)
- Constraints: Can't over-allocate beyond available hours (soft warning, not hard block)
- Recurrence: Can mark allocation as repeating (e.g., "Resource X allocated to Project ABC every week")
- Conflicts: Highlight if resource is allocated to overlapping times
- Save: One-click to commit allocation; email notification to resource

**User Flow:**
1. PM opens Project ABC
2. Sees: "Need 200 hours senior time, 100 hours junior time"
3. Checks Capacity Dashboard → sees Resource A free, Resource B at 90%
4. Drags: Resource A → 150 hours, Resource B → 50 hours, Resource C (new person) → 100 hours
5. System alerts: "Assigning new person C not yet trained on this project"
6. Confirms and saves → team gets notified

**Success Metric:** Allocation takes 5 min instead of 30 min (no email chains, no spreadsheets).

**Complexity:** Medium (drag-and-drop UI, conflict detection)

---

#### Feature 2.3: Over-Allocation Alerts
**Story:** As an Operations Leader, I want alerts when a team member is allocated >100% so I can rebalance before burnout.

**Requirements:**
- Alert trigger: Resource is >100% allocated for >2 consecutive weeks
- Alert content: Who is over-allocated, by how much, on which projects, which PM to contact
- Alert recipient: Ops leader, PM, optionally the resource
- Recommendation: "Resource X is 120% allocated; recommend: assign Y hours of project ABC to Resource Z"
- Burnout risk scoring: If >100% for >4 weeks → "High burnout risk"
- Response tracking: Did we rebalance? How?

**User Flow:**
1. Monday morning: Ops leader gets alert: "Resource A allocated 125% next week (30 hrs over capacity)"
2. Email/Slack notification
3. Clicks alert → See which projects are causing over-allocation
4. Takes action: Move some hours from Project ABC (deadline flexible) to Project XYZ (deadline fixed)
5. Update allocation → alert dismissed

**Success Metric:** Over-allocation caught before resource burns out; prevent churn.

**Complexity:** Medium (threshold logic, time-series)

---

#### Feature 2.4: Individual Billability Dashboard
**Story:** As a PM, I want to see which team members spend most time on billable vs. admin work so I can adjust allocation.

**Requirements:**
- Billability %: Hours billable / Total hours worked
- Breakdown: By project (billable), by category (Training, Admin, Vacation, PTO)
- Filters: By time period (week, month, quarter, year)
- Benchmarks: Show industry average (e.g., "80% billability is healthy for consulting")
- Visualize: Pie chart of billability, line chart of trend
- Export: CSV for performance review

**User Flow:**
1. Resource A views own dashboard:
   - January billability: 72% (35 billable hrs, 9 admin hrs, 4 training hrs)
   - January benchmark: 80%
   - Trend: Declining from 78% in December
2. Sees why: "2 days on company all-hands, 1 day sales training"
3. Can adjust: Talk to PM about spreading admin work

**Success Metric:** PM uses this in performance reviews; resource understands billability target.

**Complexity:** Low (simple calculation, tracking)

---

### **MODULE 3: AI-Powered Forecasting (Predictive Intelligence)**

#### Feature 3.1: 30/60-Day Margin Forecast
**Story:** As an Ops Leader, I want to see forecasted project margins 30 and 60 days out so I can make proactive decisions about pricing and scope.

**Requirements:**
- Forecast model: Based on current actuals trend (burn rate analysis)
- For each active project: Forecasted final margin if trends continue
- Scenarios: Show optimistic (slower burn) and pessimistic (faster burn) paths
- Confidence interval: "This forecast is 75% confident (based on 3 weeks of data)"
- Update frequency: Recalculate daily as new time entries come in
- Visual: Green if forecast margin >25%, Yellow if 15-25%, Red if <15%

**User Flow:**
1. Ops leader opens Forecast tab
2. Sees: "Project ABC: Current margin 20%, Forecasted final margin 12% (will lose $6K if trends continue)"
3. Confidence: 85% (4 weeks of data)
4. Sees the burn rate: "Spending at $8K/week, only $4K/week budgeted remaining"
5. Options: (a) increase rate with client, (b) reduce scope, (c) allocate more efficient team
6. Takes action: Increases billable rate 15% → re-runs forecast → now shows 20% final margin

**Success Metric:** Forecast accuracy >80% (within 10% of actual final margin); ops leader acts on forecast before month-end.

**Complexity:** High (ML model, time-series forecasting, scenario modeling)

---

#### Feature 3.2: Margin Trend Detection
**Story:** As a Project Manager, I want a visual indicator (up/down/stable) of margin trend so I can see at a glance if my project is improving or declining.

**Requirements:**
- Trend arrow: ↑ (improving >5% vs. last week), ↓ (declining >5%), — (stable)
- Trend card: Shows margin last week, this week, % change
- Benchmark: Is trend better/worse than similar projects?
- Root cause analysis: Which factors drove the trend? (e.g., "Senior allocation increased → margin improving")
- Timeframe: Compare week-over-week, month-over-month, rolling 30-day

**User Flow:**
1. PM checks Project ABC dashboard
2. Sees margin trend: ↓ (was 25% last week, 18% this week)
3. Drills in: "Margin declined due to: +8 junior hours (lower billing rate)"
4. Decision: "This is planned; will improve next week when senior takes over"

**Success Metric:** PM understands margin trend without doing manual calculations.

**Complexity:** Medium (trend analysis, root cause decomposition)

---

#### Feature 3.3: Risk Identification (Projects Trending Negative)
**Story:** As an Ops Leader, I want early alerts on projects trending toward loss so I can intervene before it's too late.

**Requirements:**
- Risk scoring: 1-10 scale based on margin decline velocity + forecast accuracy
- Alert trigger: Risk score >7 (project >80% likely to miss margin target)
- Alert content: Project name, current margin, forecasted margin, days until project end, recommended action
- Early warning: Alert issued when project is 50% complete (if trending negative) so there's still time to fix
- Historical accuracy: "We've caught X risky projects this year; Y% were actually at risk"

**User Flow:**
1. Wednesday afternoon: Ops leader gets alert: "Project XYZ Risk Score 8/10 (trending toward loss)"
2. Forecast: "Will end at -2% margin (loss $3K) if trends continue. 28 days left."
3. Recommended actions: "Reduce scope by 40 hours, or increase rate 8%, or allocate more senior resource"
4. PM decides: "Add 1 senior day/week" → Reforecast shows now +5% margin
5. Alert resolved

**Success Metric:** Catch 80% of margin-miss projects before they close; prevent losses.

**Complexity:** High (risk scoring, predictive model, recommendation engine)

---

#### Feature 3.4: Resource Gap Prediction
**Story:** As an Ops Leader, I want to know which resources are needed in the next 60 days so I can plan hiring or ramp training.

**Requirements:**
- Forecast: Based on projects in pipeline (expected to start)
- Gap analysis: Hours needed vs. hours available (by seniority level)
- Skill gaps: Any skills in demand that team lacks?
- Timeline: "In 60 days, will need 3 more senior consultants"
- Hiring recommendation: "Start recruiting now; takes 4-6 weeks to hire and onboard"
- Capacity planning: Show how hiring decision impacts margin (pay more for senior, but increase billing rate)

**User Flow:**
1. Ops leader runs Resource Gap report (60-day view)
2. Sees: "Pipeline projects need 500 senior hours, have 300 available (gap: 200 hours)"
3. Options: Hire 1 senior consultant ($120K/year) vs. subcontract ($150/hour = $30K for 200 hours)
4. Runs what-if: "If hire, total labor cost increases $120K; can bill additional $180K → net +$60K"
5. Decision: Hire 1 senior, subcontract 100 hours

**Success Metric:** Ops team uses this for quarterly hiring plans; no surprise resource shortages.

**Complexity:** High (pipeline forecasting, skill matching, financial modeling)

---

## 5. SMB Onboarding Flow (Critical for Conversion)

### Onboarding Goal
**Success Metric:** 80% of free trial signups complete onboarding and see their first margin dashboard within 30 minutes.

---

### **Phase 1: Pre-Signup (Landing Page)**

**Objective:** Convince prospect this is built for them in <3 minutes.

**Content:**
- Headline: "See Your Project Profit in Real-Time"
- Subheading: "Kantata costs $35K. Float doesn't show margin. DeliverySync shows margin, capacity, and forecast for $14K."
- Visual: 30-second animated GIF of dashboard
- Social proof: "Used by 50+ consulting firms" + 2-3 logo tiles (will have after launch)
- CTA: "Start Free Trial (30 days, no credit card)"
- FAQ: "Do you integrate with QuickBooks?", "How long does setup take?", "Is our data secure?"

---

### **Phase 2: Trial Signup (5 minutes)**

**Objective:** Collect minimal info, get them in the product fast.

**Fields:**
- Email
- Company name
- Company size (10-50, 51-100, 101-200, 200+)
- Primary tool today (Harvest / Toggl / Manual / Other)
- Any specific pain point (dropdown: Margin visibility, Resource burnout, Forecasting)

**On Submit:**
- Send welcome email: "Welcome to DeliverySync! Here's your 30-day roadmap."
- Redirect to product → Auto-login
- Show onboarding modal (can dismiss, but shown on first login)

---

### **Phase 3: Guided Onboarding Inside Product (25 minutes)**

**Step 1: Welcome Tour (3 minutes)**
- Interactive 3-minute video walkthrough
- Covers: Dashboard overview, where to find key features
- Can skip, but recommended
- Available anytime via Help menu

**Step 2: Company Setup (5 minutes)**
- Form: Company name, fiscal year start date, primary billing currency
- Question: "How many active projects right now?" (helps calibrate demo data)
- Question: "What do you use for time tracking?" (options: Harvest, Toggl, Manual, Jira, Asana, Other)

**Step 3: Import Data (10 minutes)**

**Option A: Manual Import (CSV)**
- Template 1: Projects (Project Name, Client, Budget, Start Date, End Date, PM Name, Billing Rate)
  - Pre-filled example: "Demo Project Alpha", expected to take 5 min to fill in 1-2 real projects
- Template 2: Team (Name, Title, Role: Senior/Mid/Junior, Email, Hourly Rate)
  - Pre-filled example: 3 sample team members
- Template 3: Actual Hours (Project, Resource, Hours, Date, Notes)
  - Can start with month-to-date data
  - Note: "You can manually enter for now; we'll auto-sync from Harvest next"

**Option B: Harvest Integration (Recommended)**
- If Harvest selected: "Authorize Harvest" (one-click OAuth)
- System automatically pulls: Projects, team members, time entries
- Setup time: 2 min
- Note: "Demo data is already loaded; replace with your real Harvest data"

**Option C: QuickBooks Integration (Optional)**
- If QB selected: "We can pull billing rates and past projects from QB"
- Setup: One-click OAuth
- Time: 2 min
- Note: "This is optional for MVP; you can manually enter rates"

**Success State:** User has entered data for at least 1 real project + 3 team members + 2 weeks of hours.

---

### **Step 4: First Dashboard View (5 minutes)**

**On Completion of Data Import:**
- System calculates first margin dashboard
- Show: "Project ABC: 23% margin, $15K budget, $11.5K actuals, on track"
- Highlight: "This is your margin insight. It updates in real-time as hours are logged."
- Call-to-action: "Explore your other projects →" or "View team capacity →"
- Guided tour of 3 key tabs:
  - Profitability (explain margin %)
  - Resources (explain capacity %)
  - Forecast (explain 30-day outlook)

---

### **Step 5: Training & Support (2 minutes)**

**In-App Resources:**
- Help icon (?) on every dashboard → Context-specific tips
- Knowledge base link: "Learn more about margin calculation"
- Video library: "5 videos, <3 min each" covering:
  - "How to read the margin dashboard" (1:30)
  - "Setting up alerts" (1:45)
  - "Interpreting the forecast" (2:00)
  - "Best practices for project profitability" (2:30)
  - "Troubleshooting data imports" (2:15)
- Offer: "Schedule 20-min onboarding call with our team" (Calendly link)

---

### **Step 6: Confirmation & Follow-up**

**Confirmation Screen:**
- "Great! Your dashboard is ready. You now have:"
  - ✅ Real-time project margins
  - ✅ Team capacity view
  - ✅ 30-day forecast
- CTA: "Explore dashboard" or "I'll come back later"
- Email sent: "Your DeliverySync dashboard is live"

**Follow-up Sequence (If They Don't Log Back In):**
- Day 3: "Check out your margin trends" (email + Slack if connected)
- Day 7: "Your first forecast is ready" (email)
- Day 10: "Let's make sure you're getting value" (onboarding specialist reaches out for 20-min check-in)
- Day 20: "Your trial ends in 10 days—let's discuss" (sales conversation)

---

### **Onboarding Success Metrics**

| Metric | Target | How Measured |
|--------|--------|--------------|
| Signup completion rate | 90%+ | % who complete signup form |
| Data import completion | 80%+ | % who enter ≥1 project + ≥3 team members |
| First login-to-dashboard time | <25 min | Time from signup to seeing margin dashboard |
| Trial-to-paid conversion | 60%+ | % of trial signups who become paid customers |
| Day 7 active rate | 70%+ | % of trial signups active by day 7 |
| Time to "Aha moment" | <24 hrs | When user can articulate margin savings |
| Support requests during trial | <2/customer | Indicates product clarity |

---

## 6. Pricing Model (MVP-Stage)

### Pricing Strategy

**Positioning:** "Premium SMB pricing—70% of Kantata, 80% more features than Float, 100% built for SMB."

---

### **Tiered Pricing (Annual Billing Preferred)**

| Tier | Monthly | Annual (20% discount) | Target Customer | Includes |
|------|---------|------|---|---|
| **Starter** | $399 | $3,588 | 1-15 person firm | 1 workspace, up to 10 projects, 3 users, basic integrations (CSV + Harvest), monthly margin reports, basic alerts |
| **Professional** | $799 | $7,192 | 15-50 person firm (Sweet Spot) | Unlimited workspaces, up to 100 projects, unlimited users, all integrations (Harvest + QB + Jira + Asana), real-time forecasting, advanced alerts, email support |
| **Enterprise** | $1,999 | $17,992 | 50-200 person firm | Everything in Professional + custom integrations, dedicated onboarding, priority email support, quarterly business reviews, API access, SAML/SSO roadmap |

**Add-ons (Post-MVP):**
- Additional custom integrations: $200/integration/month
- Dedicated onboarding (4 hours): $500
- Custom reporting: $100/report

---

### **ACV Calculation (For Year 1 Revenue Target)**

**Assumption: Mix of customers across tiers**

| Tier | Conversion % | Annual Price | Contribution |
|------|-------------|--------------|--------------|
| Starter (1-15 person) | 20% | $3,588 | $718 |
| Professional (15-50 person) | 70% | $7,192 | $5,034 |
| Enterprise (50+ person) | 10% | $17,992 | $1,799 |
| **Blended ACV** | | | **$7,551** |

**However:** Most early customers are Professional tier (sweet spot) + some upsell to Enterprise by month 6.

**Revised Assumption (More realistic):**
- Month 1-3: Mostly Starter + Professional mix → ACV $6K
- Month 4-6: Professional takes 75% share → ACV $8K  
- Month 7-12: Professional + some Enterprise upsell → ACV $12-14K
- **Year 1 Average ACV: $9.6K**
- **Year 1 Target ARR: $150K** ÷ ACV $9.6K = **15-16 customers** (achievable per GTM analysis)

---

### **Pricing Rationale**

#### **Why These Tiers?**
1. **Starter ($3,588/year):** Entry-level for micro-firms or first-time adoption. Below replacement cost of 1 day/week of billing admin. Low friction to trial and buy.
2. **Professional ($7,192/year):** Sweet spot for 15-50 person firms (ICP). ACV ~$7K = breakeven on CAC in 2.5 months. Includes all core features (no gatekeeping).
3. **Enterprise ($17,992/year):** For firms scaling beyond 50. Includes dedicated onboarding (critical at this size). Custom integrations. SAML/SSO (security requirement).

#### **Why These Price Points?**
- **Kantata ($25-45K/year):** Too expensive for SMB market; positions DeliverySync as 60-70% cost alternative
- **Float ($8-15K/year):** Lacks margin, forecasting, billing. DeliverySync Professional ($7,192) is in their range but with 10x more features
- **Spreadsheets + Harvest ($0):** DeliverySync ROI is $30-35K saved → pricing captures 20-25% of value created (very healthy for B2B SaaS)
- **Market comparison:** Other SMB tools (Asana, Monday.com) price at $10-30K. DeliverySync is competitive for the value delivered.

#### **Why Annual Billing (20% discount)?**
- Cash flow: Enables $3.6K per Professional customer upfront (helps runway)
- Retention lock-in: Annual commitment reduces month-to-month churn
- Standard in B2B SaaS: Customers expect it
- Flexibility: Allow monthly option for skeptical trials, but incentivize annual

---

### **Expansion & Upsell Path**

**Initial:** Customer buys Professional tier ($7,192/year)

**Month 3-6 Upsell Triggers:**
- "You've added 5 more team members → move to Enterprise for unlimited users"
- "You have 75+ projects → upgrade to Enterprise"
- "You want API access for custom integration → Enterprise add-on"

**Expected Expansion Revenue:**
- Starter → Professional: 30% convert after 6 months ($3.6K revenue increase)
- Professional → Enterprise: 20% convert after 12 months ($10.8K revenue increase)
- **Net Revenue Retention Year 1:** 110-120% (healthy for SMB SaaS)

---

### **Free Trial Mechanics**

- **Duration:** 30 days (standard for B2B SaaS with 8-12 week sales cycle)
- **Full Feature Access:** All Professional tier features (removes friction to trial)
- **No Credit Card Required:** Lower conversion barrier
- **Auto-Downgrade:** After 30 days, trial account downgrades to limited Starter view (not deleted)
- **Re-engagement:** Day 25 email: "Your trial ends in 5 days. Let's discuss next steps" (Sales call offer)
- **Early Conversion:** Can convert to paid before day 30 (e.g., day 15 if sold)

---

## 7. Technical Architecture (MVP)

### Frontend Stack

**Technology Recommendation: React + TypeScript + TailwindCSS**

**Why:**
- **React:** Fastest iteration for SMB MVP (component-based, large ecosystem)
- **TypeScript:** Type safety reduces bugs (important for financial calculations)
- **TailwindCSS:** Rapid styling (faster than building custom design system)
- **Justification:** Already proven in 100+ B2B SaaS products; excellent for SMB use cases

**Key Packages:**
- **State Management:** Zustand (lightweight) or Redux Toolkit (if complexity grows)
- **Data Fetching:** React Query (for real-time updates, caching)
- **Charts:** Recharts or Chart.js (margin trends, forecasts)
- **Tables:** TanStack React Table (sortable, filterable grids)
- **Auth:** Auth0 or Firebase (easy SMB sign-up)
- **UI Components:** Headless UI + custom TailwindCSS (faster than Material-UI)
- **Testing:** Vitest + React Testing Library (fast, focused)

**Deployment:** Vercel (Next.js) for auto-scaling, serverless, zero-config.

---

### Backend Stack

**Technology Recommendation: Node.js + Express + PostgreSQL**

**Why:**
- **Node.js + Express:** Fast to build, JavaScript everywhere (easier hiring)
- **PostgreSQL:** Excellent for financial data (ACID transactions, strong consistency)
- **Serverless optional:** Can start traditional server, migrate to serverless later

**Key Packages:**
- **API Framework:** Express.js + Typescript
- **ORM:** TypeORM or Prisma (for rapid development)
- **Database:** PostgreSQL (cloud-hosted: AWS RDS, or PlanetScale for MySQL alternative)
- **Authentication:** JWT + Passport.js
- **Real-Time Updates:** WebSockets (Socket.io) for margin dashboard live refresh
- **Job Queue:** Bull (Redis-backed) for async tasks (import processing, forecasting)
- **Validation:** Zod or Joi (schema validation)
- **Testing:** Jest + Supertest

**Deployment:** AWS EC2 or Heroku (both support Node.js, easy scaling).

---

### AI/Forecasting Component

**Technology Recommendation: OpenAI API (GPT-4 or similar) + Custom Time-Series Model**

**Why:**
- **OpenAI API:** No custom ML engineering needed for MVP; use LLM for intelligent recommendations
- **Time-Series Forecasting:** Custom model for margin trends (can be simple: exponential smoothing, gradient boosting)
- **Hybrid Approach:** Use LLM for narrative (e.g., "Project X trending negative due to senior allocation increase"), use custom model for numerical forecast

**Architecture:**
1. **Forecasting Engine** (Backend)
   - Input: Historical actuals (last 3-4 weeks)
   - Process: Exponential smoothing or ARIMA model (Python, scikit-learn)
   - Output: Margin forecast 30/60 days out + confidence interval
   - Refresh: Nightly (or real-time if margin changes >10%)

2. **Recommendation Engine** (Backend)
   - Input: Project details, current actuals, forecast
   - Process: OpenAI API prompt: "Given this project data, what actions would improve margin?"
   - Output: Narrative recommendations (e.g., "Increase senior allocation", "Reduce scope by 40 hours")

3. **Risk Scoring** (Backend)
   - Input: Margin trend, forecast confidence, days remaining
   - Process: Rule-based scoring (simple rules for MVP)
   - Output: Risk score 1-10 + alert recommendation

**Cost Estimate:**
- OpenAI API: ~$500-1K/month (for 100+ customers at MVP scale)
- Time-series modeling: Can use free libraries (statsmodels, scikit-learn)
- Custom development: 2-3 weeks for forecasting engine

---

### Database Schema (MVP)

**Core Tables:**

```
-- Users & Auth
users
  id (PK)
  email
  password_hash
  first_name, last_name
  company_id (FK)
  role (admin, user, viewer)
  created_at, updated_at

companies
  id (PK)
  name
  fiscal_year_start
  subscription_tier (starter, pro, enterprise)
  subscription_status (active, trial, cancelled)
  trial_end_date
  created_at, updated_at

-- Core Business Objects
projects
  id (PK)
  company_id (FK)
  name
  client_id (FK)
  budget_total ($)
  start_date
  end_date
  status (active, closed, on_hold)
  billing_rate_override (if different from default)
  created_at, updated_at

time_entries
  id (PK)
  project_id (FK)
  resource_id (FK)
  hours
  date
  billable (boolean)
  notes
  source (harvest, manual, jira, asana)
  sync_id (external system ID)
  created_at, updated_at

resources (team members)
  id (PK)
  company_id (FK)
  name
  email
  seniority_level (senior, mid, junior, contractor)
  billing_rate ($)
  capacity_hours_per_week
  created_at, updated_at

resource_allocation
  id (PK)
  resource_id (FK)
  project_id (FK)
  allocated_hours
  start_date, end_date
  notes
  created_at, updated_at

project_expenses
  id (PK)
  project_id (FK)
  description
  amount ($)
  date
  category (software, travel, other)
  created_at, updated_at

-- Calculations (cached for performance)
project_margins (materialized view or cached table)
  id (PK)
  project_id (FK)
  calculated_date
  budget_total ($)
  actuals_total ($)
  margin_dollar ($)
  margin_percent (%)
  margin_trend (↑/↓/—)
  forecast_final_margin (%)
  forecast_confidence (0-100%)

-- Alerts & Notifications
alerts
  id (PK)
  company_id (FK)
  alert_type (margin_threshold, over_allocation, risk_score)
  project_id (FK, nullable)
  resource_id (FK, nullable)
  message
  severity (critical, warning, info)
  read (boolean)
  created_at
  updated_at

-- Integration Tracking
integrations
  id (PK)
  company_id (FK)
  platform (harvest, quickbooks, jira, asana)
  api_key_encrypted
  last_sync_date
  sync_status (active, failed, paused)
  created_at, updated_at
```

---

### API Endpoints (RESTful)

**Core APIs (V1):**
```
Authentication
  POST /auth/signup
  POST /auth/login
  POST /auth/logout
  GET /auth/me
  POST /auth/refresh-token

Projects
  GET /projects (filtered, paginated)
  GET /projects/:id
  POST /projects
  PUT /projects/:id
  DELETE /projects/:id

Time Entries
  GET /projects/:id/time-entries
  POST /projects/:id/time-entries
  PUT /time-entries/:id
  DELETE /time-entries/:id

Resources
  GET /resources
  GET /resources/:id
  POST /resources
  PUT /resources/:id

Dashboards
  GET /dashboards/profitability (margin dashboard data)
  GET /dashboards/capacity (team capacity data)
  GET /dashboards/forecast (30/60-day forecast)

Alerts
  GET /alerts
  PUT /alerts/:id (mark as read)
  POST /alerts/subscribe (subscribe to alert type)

Integrations
  POST /integrations/harvest/auth
  POST /integrations/quickbooks/auth
  GET /integrations/status
  POST /integrations/:id/sync
```

---

### Integrations (MVP)

**Must-Have (MVP Requirement):**

1. **Harvest Integration (Time Tracking)**
   - Auto-sync: Time entries every 4 hours
   - Data: Projects, team members, time entries, billable rates
   - Use: OAuth 2.0 (Harvest API v2)
   - Development time: 1 week
   - Alternative: CSV import (fallback for non-Harvest users)

2. **CSV Import (Fallback)**
   - Templates: Projects, Team, Time Entries
   - Auto-mapping: Smart column detection
   - Validation: Error reporting for missing/invalid data
   - Re-import: Support updating existing data (useful for month-end close)
   - Development time: 1 week

3. **QuickBooks Integration (Optional, Post-Beta)**
   - Auto-sync: Project budgets, expenses, billing rates
   - Use: QuickBooks OAuth or API
   - Development time: 2-3 weeks (defer to V1.0)
   - Fallback: Manual entry of budgets/rates

**Nice-to-Have (Post-MVP, Month 6+):**
- Jira integration (pull project/issue data)
- Asana integration (pull project/task data)
- Slack integration (alerts via Slack)
- Zapier (for power users)
- Stripe (billing integration)

---

### Data Security & Compliance (MVP Roadmap)

**MVP (Week 1-12):**
- ✅ HTTPS encryption in transit
- ✅ Password hashing (bcrypt)
- ✅ JWT token-based auth
- ✅ Basic RBAC (admin/user/viewer roles)
- ✅ Data validation (input sanitization)
- ✅ Rate limiting (API throttling)

**V1.0 (Month 6+):**
- [ ] SOC2 Type 2 path (start collecting logs)
- [ ] Audit logging (all data changes tracked)
- [ ] GDPR compliance (data export, deletion)
- [ ] SSO/SAML (for Enterprise tier)
- [ ] Data residency options (EU, US regions)

---

### Performance Targets (MVP)

| Metric | Target | Technique |
|--------|--------|-----------|
| Page load time | <2 seconds | CDN, code splitting, image optimization |
| Dashboard refresh | <500ms | WebSocket real-time updates, cached calculations |
| API response time | <200ms | Database indexing, query optimization, caching |
| Uptime | 99.5% | AWS RDS for DB, Vercel/Heroku for app, monitoring |

---

## 8. SMB-Specific Design Decisions

### 1. Minimal Configuration (Pre-Built Templates)

**Challenge:** SMBs don't want to spend 2 weeks configuring the system (unlike Enterprise).

**Solution:** Pre-built industry templates with sensible defaults.

**Implementation:**
- During signup, ask: "What type of firm are you?"
  - Option A: Management Consulting
  - Option B: Creative Agency
  - Option C: Accounting/Audit Firm
  - Option D: IT Consulting
  - Option E: Other

- Pre-populate:
  - Resource types & default billing rates (Senior: $200/hr, Mid: $125/hr, Junior: $75/hr)
  - Project templates (e.g., "Strategy Project", "Audit Project", "Design Project")
  - Margin thresholds (Alert if <20%)
  - Capacity assumptions (40 billable hours/week)

- User can customize after, but 80% of SMBs use defaults as-is.

**Time saved:** 30 min → 5 min setup

---

### 2. Mobile-First Dashboard (Responsive)

**Challenge:** Ops leader wants to check project margin on-the-go (weekend call with client).

**Solution:** Responsive web design (not native app for MVP).

**Implementation:**
- Dashboard redesigns for mobile:
  - Profitability: Swipeable cards (one project per card, margin %), not grid
  - Capacity: Horizontal scroll, key metrics only (name, % allocated)
  - Forecast: Visual summary (trend arrow + risk score), tap for details
- Touch-friendly: Large buttons, simple navigation
- Fast load: <2 seconds on 4G
- Offline mode (future): Cache last dashboard view for offline access

**Trade-off:** Not as powerful as desktop, but covers 80% of use cases.

---

### 3. Export & Reporting (PDF/Excel)

**Challenge:** Finance team needs to present margin data to board/owner in PDF.

**Solution:** One-click PDF export for key reports.

**Reports Available:**
1. Monthly Margin Summary (PDF)
   - All projects, margin %, trend, forecast
   - Client logo (if uploaded)
   - Page 2: By-resource breakdown
   - Page 3: Forecast summary
   
2. Board Dashboard (PDF)
   - Executive summary: Total ARR, total margin, margin trend
   - Top 5 projects by margin %
   - Resource utilization summary
   - Forecast for next quarter

3. Detailed Margin Report (Excel)
   - All projects, all fields, all time periods
   - Suitable for import into other tools

**Implementation:** Use a PDF library (pdf-lib or react-pdf) + template system.

**Development time:** 1 week

---

### 4. Data Privacy & Security (GDPR/SOC2 Readiness)

**Challenge:** Finance teams handle sensitive project data; want security assurance.

**Solution:** Strong security in MVP + SOC2 roadmap.

**MVP Includes:**
- HTTPS encryption (TLS 1.2+)
- Password hashing (bcrypt, 12 rounds)
- JWT auth (secure tokens)
- Data isolation by company (no cross-tenant access)
- Automatic session timeout (30 min inactivity)
- IP whitelisting (for Enterprise tier)

**SOC2 Roadmap (Month 6+):**
- Audit logging of all data access
- Encryption at rest (database, backups)
- Regular penetration testing
- Incident response plan
- Annual SOC2 Type 2 audit

**GDPR Compliance:**
- Data export (XLSX/CSV)
- Right to deletion (wipe company data)
- Data residency (US or EU)
- Privacy policy + DPA ready

**Messaging:** "DeliverySync is built with security-first principles. SOC2 Type 2 planned for Q3 2026."

---

### 5. Support Model (In-App Help + Email)

**Challenge:** SMBs don't need 24/7 support, but want quick response for critical issues.

**Solution:** Tiered support (in-app + email, no live chat for MVP).

**Support Channels:**
1. **In-App Help:**
   - Help icon (?) on every page
   - Context-specific tips (e.g., hover over "Margin %" → explain calculation)
   - Video library (5 videos, <3 min each)
   - FAQ section (searchable)

2. **Email Support:**
   - Response SLA: 24 hours (business days)
   - Support email: support@deliversync.com
   - Knowledge base link in every email

3. **Onboarding Call (Included in Professional/Enterprise):**
   - Calendly link in onboarding
   - 20-30 min call with specialist to set up
   - Recorded for team knowledge base
   - Optional for Starter tier

4. **No live chat (defer to Month 6+):**
   - Too resource-intensive for MVP
   - Email + videos sufficient for SMB
   - Can add live chat once Customer Success hire is made

---

## 9. Success Metrics (Post-MVP Launch)

### Onboarding Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Signup Completion Rate** | 90%+ | % of users who complete signup form |
| **Data Import Completion** | 80%+ | % who import ≥1 project + ≥3 team members |
| **Time-to-Dashboard** | <25 min | Time from signup to viewing margin dashboard |
| **Help Video Completion** | 60%+ | % who watch at least 1 training video |
| **Support Requests During Trial** | <2 per customer | Low = good product clarity |

### Activation & Engagement Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Day 7 Active Rate** | 70%+ | % of trial signups active by day 7 |
| **Day 30 Active Rate** | 50%+ | % of trial signups active by day 30 |
| **Feature Adoption (Week 1)** | Profitability: 90%, Resources: 60%, Forecast: 40% | % of activated users using each module |
| **Time to "Aha Moment"** | <24 hrs | When user can articulate margin savings |
| **Weekly Active Users (WAU)** | 80%+ of paid | % of customers active in a given week |

### Conversion Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Trial-to-Paid Conversion** | 60%+ | % of trial signups who become paid customers |
| **Free Trial Duration** | 15-20 days avg | Days from signup to conversion |
| **Conversion by Tier** | Starter: 40%, Pro: 70%, Enterprise: 80% | % converting by tier |
| **Sales Cycle (Months 1-3)** | 8-12 weeks | Time from first touch to close |

### Retention & Health Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Monthly Churn Rate** | <5% | % of customers who cancel each month |
| **Net Revenue Retention** | 110%+ by Month 6 | (Expansion - Churn) / Starting MRR |
| **Customer Health Score** | 70+ / 100 | Based on usage, feedback, health indicators |
| **NPS (Net Promoter Score)** | 40+ | Post-launch survey at Month 3 |
| **Support Quality (Satisfaction)** | 90%+ | % of support requests resolved satisfactorily |

### Unit Economics Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **CAC (Customer Acquisition Cost)** | <$5K for Founder-led | Total sales/marketing spend ÷ customers acquired |
| **LTV (Customer Lifetime Value)** | >$60K | ACV × Average customer lifetime |
| **LTV:CAC Ratio** | >3:1 | Indicates profitability of acquisition |
| **Payback Period** | <6 months | Months until CAC is recovered |
| **Gross Margin** | 75%+ | (Revenue - COGS) / Revenue |

---

## 10. Risk Assessment & Mitigation (MVP-Specific)

### Risk #1: Data Quality & Import Problems
**Severity:** High  
**Likelihood:** 70% (SMB data is messy)

**Risk:** User tries to import data from QuickBooks/Harvest but has inconsistencies (missing projects, misaligned resources). Onboarding fails.

**Mitigation:**
1. **Validation Rules:** Import process validates data (alert: "5 resources found, only 3 have rates—set defaults?")
2. **Template Examples:** Pre-filled templates show expected format
3. **Fallback to Manual:** If import fails, can manually enter data (slower but works)
4. **Demo Data:** Option to populate with sample data to explore UI while real data imports
5. **Support:** Email support available to help debug import issues

---

### Risk #2: Feature Creep / Scope Expansion
**Severity:** High  
**Likelihood:** 80% (common in startups)

**Risk:** During development, pressure to add features (SSO, reporting builder, Slack integration). Extends timeline past 12 weeks → late launch.

**Mitigation:**
1. **Hard Scope Cutoff:** Week 9, lock features. No new additions.
2. **Clear Roadmap:** Communicate what's MVP vs. V1.0 vs. V2.0 (manage expectations)
3. **Weekly Sprint Reviews:** Review scope against timeline (red flag if slipping)
4. **Beta Customers:** Get early feedback to validate priorities (don't add features in vacuum)
5. **One-Thread Decision:** Founder has final say on scope changes (no design-by-committee)

---

### Risk #3: Complex Onboarding / High Drop-Off
**Severity:** Medium  
**Likelihood:** 60%

**Risk:** Onboarding takes >30 min or requires manual data entry; users give up before seeing value.

**Mitigation:**
1. **Onboarding Script:** Test with 10 users before launch; measure time-to-dashboard
2. **Auto-Fill Data:** When possible, pull from integrations (Harvest, QB) to skip manual entry
3. **Guided Tour:** Interactive walkthrough for first-time users (can skip, but recommended)
4. **Sample Data:** Populate demo data immediately so user can see dashboard working
5. **Support Call:** Offer 20-min onboarding call (included in Pro/Enterprise tier) to help users get started
6. **Metric Tracking:** Track drop-off by step; if any step >30% drop, prioritize fixing

---

### Risk #4: Forecasting Model Inaccuracy
**Severity:** Medium  
**Likelihood:** 50% (depends on data quality)

**Risk:** AI forecast is wildly inaccurate (predicts margin 28%, actual is 8%); user loses trust in product.

**Mitigation:**
1. **Simple Model (MVP):** Start with exponential smoothing (not complex ML). Easy to debug and explain.
2. **Confidence Interval:** Always show confidence % (e.g., "75% confident"). Helps user understand uncertainty.
3. **Threshold for Display:** Only show forecast if 3+ weeks of data (otherwise "not enough data to forecast").
4. **Weekly Recalibration:** Re-train model weekly as new data comes in; forecast improves over time.
5. **Beta Validation:** Test with 3-5 beta customers for 4 weeks before public launch.
6. **User Feedback Loop:** Allow users to mark "forecast was off—here's why" to improve model.

---

### Risk #5: Competitive Response (Kantata/Float Build Similar Feature)
**Severity:** Medium  
**Likelihood:** 40% (competitors move slowly)

**Risk:** Kantata releases "Kantata Lite" at $15K; Float adds forecasting. Positioning advantage evaporates.

**Mitigation:**
1. **Speed to Market:** Launch MVP at 12 weeks (get first customers before competitors respond)
2. **Founder Credibility:** Founder's GTM story (personal outreach) is hard to replicate
3. **Customer Love:** Focus on SMB satisfaction (NPS 40+) → referrals and case studies
4. **Brand Differentiation:** Position as "built BY SMB people FOR SMB people" (vs. enterprise vendors adapting downward)
5. **Roadmap Transparency:** Share roadmap with customers; keep 2-3 quarters ahead of competitors

---

## 11. Founder-Market Fit Assessment

### Required Skills/Experience

| Area | Required | Founder Has (to assess) | Gap Mitigation |
|------|----------|--------------------------|-------------------|
| **Domain Expertise (PSA/Consulting)** | Yes; understands project billing, margin dynamics | 1-3 years PSA experience or advisory board | Hire fractional advisor (4 hrs/month) if gap |
| **B2B Sales (Founder-led)** | Yes; can do 20-30 hrs/week of outbound | Track record of closing 1-3 deals in past | Sales mentor/coach (Month 1-3) if cold to sales |
| **Product/Technical (Build MVP)** | Yes for technical co-founder; can guide dev | Can write specs, doesn't need to code | Hire contract dev if founder is non-technical |
| **Network (Access to ICP)** | Yes; know 50+ consulting firm leaders | LinkedIn network, advisory relationships | Build network in Month 1-2 (20 hrs/week) |
| **Fundraising (Optional)** | No (can bootstrap or raise seed) | Plan: Self-fund MVP or raise $50-100K seed | Pitch deck + GTM plan ready by Month 3 |

**Verdict:** Founder must have at least 3/5 skills; can outsource the 4th.

---

## 12. 90-Day Development Roadmap

**Timeline: Week 1 → Week 13 (Launch)**

---

### **PHASE 1: Architecture & Foundation (Weeks 1-2)**

**Milestone:** Technical foundation complete; team onboarded

**Week 1 Tasks:**
- [ ] Set up development environment (GitHub, CI/CD, staging servers)
- [ ] Design database schema (finalize ERD, create migration scripts)
- [ ] Set up authentication (Auth0 or Firebase integration)
- [ ] Create API framework (Express.js + Typescript scaffold)
- [ ] Design system kickoff (TailwindCSS setup, component library started)

**Week 2 Tasks:**
- [ ] Implement user auth APIs (signup, login, logout, JWT tokens)
- [ ] Build company setup flow (name, fiscal year, tier selection)
- [ ] Create core data models (Projects, Resources, Time Entries in DB)
- [ ] Set up frontend scaffolding (React + Vite, folder structure)
- [ ] Begin Harvest integration planning (API scoping, OAuth flow design)

**Deliverables:**
- Staging environment running
- Basic auth working (can sign up, log in)
- Database migrations tested
- API documentation (OpenAPI/Swagger) started

**Success Metrics:**
- Team can deploy changes within 5 min
- Database queries <100ms
- Zero security warnings in code scan

---

### **PHASE 2: Core Features - Profitability Module (Weeks 3-6)**

**Milestone:** Project profitability dashboard live and calculating margins correctly

**Week 3-4: Project & Data Import**
- [ ] Build projects CRUD API (create, read, update, delete)
- [ ] Build time entries CRUD API
- [ ] Implement CSV import logic (validate, map, insert)
- [ ] Build Harvest OAuth integration (authenticate + sync projects/time)
- [ ] Create data mapping UI (CSV template + preview before import)

**Week 5: Profitability Dashboard**
- [ ] Build margin calculation engine (budget - actuals = margin)
- [ ] Create profitability dashboard UI (grid of projects, margin %, trend)
- [ ] Implement filtering & sorting (by margin, client, PM, status)
- [ ] Add detail view (click project → see full margin breakdown)
- [ ] Implement refresh logic (real-time updates as time entries sync)

**Week 6: Reports & Export**
- [ ] Build historical margin reports (by project, by client, by resource)
- [ ] Implement PDF export (margin dashboard)
- [ ] Implement CSV export (detailed data)
- [ ] Add charting (margin trends over time)

**Deliverables:**
- Profitability dashboard live
- Import working for Harvest + CSV
- Users can see correct margin calculations
- Reports generating correctly

**Success Metrics:**
- Margin calculations 100% accurate (validated with 3-5 manual checks)
- Import time <10 min for 100 time entries
- Dashboard loads in <1 second

**Testing:**
- Unit tests: Margin calculation logic (edge cases: negative budgets, no time entries)
- Integration tests: CSV import → margin dashboard
- Manual testing: With real Harvest account

---

### **PHASE 3: Core Features - Resources Module (Weeks 7-8)**

**Milestone:** Team capacity/utilization dashboard live

**Week 7: Capacity Tracking**
- [ ] Build resources CRUD (add team members, set billing rates)
- [ ] Implement capacity calculation (allocated hours vs. available hours)
- [ ] Build capacity dashboard UI (grid: team members × weeks, % allocated)
- [ ] Implement allocation planner UI (drag-and-drop assign hours)
- [ ] Add over-allocation alerts (>100% flagged in red)

**Week 8: Billability & Insights**
- [ ] Build billability calculation (billable % = billable hours / total hours)
- [ ] Create individual billability dashboard
- [ ] Implement resource detail view (capacity, allocation, billability)
- [ ] Add email notifications for over-allocation
- [ ] Build burnout risk scoring (red flag if >100% for 4+ weeks)

**Deliverables:**
- Capacity dashboard live
- Allocation planner working
- Billability tracking working
- Alerts firing correctly

**Success Metrics:**
- Capacity calculations match manual verification
- Drag-and-drop allocation intuitive (usable in <3 min)
- Alerts sent within 30 min of threshold crossed

**Testing:**
- Unit tests: Capacity calculation (edge cases: part-time employees, overlapping allocations)
- Integration tests: Add team → allocate → capacity dashboard shows correctly
- Manual testing: With internal team + beta customers

---

### **PHASE 4: Core Features - Forecasting Module (Weeks 9-10)**

**Milestone:** AI-powered forecast live

**Week 9: Forecasting Engine**
- [ ] Build forecasting model (exponential smoothing or ARIMA)
- [ ] Implement model training (daily re-train as new data arrives)
- [ ] Create margin forecast calculation (project final margin 30/60 days out)
- [ ] Build risk scoring logic (1-10 scale based on margin decline + forecast)
- [ ] Integrate OpenAI API (for recommendation text generation)

**Week 10: Forecast UI & Alerts**
- [ ] Build forecast dashboard (all projects with forecast margin, risk score, trend arrow)
- [ ] Create project forecast detail view (scenario modeling: "what if we add 2 senior days?")
- [ ] Implement risk alerts (email when risk score >7)
- [ ] Add forecast chart visualization (current margin vs. forecast margin over time)
- [ ] Build recommendation card (AI-generated action items)

**Deliverables:**
- Forecast dashboard live
- Forecasts calculating daily
- Risk alerts firing correctly
- AI recommendations generating

**Success Metrics:**
- Forecast accuracy >75% (within 15% of actual final margin)
- Model re-trains in <5 min
- Users act on 30%+ of AI recommendations

**Testing:**
- Backtesting: Compare forecast accuracy on historical projects (3 month lookback)
- Unit tests: Forecasting model (edge cases: insufficient data, project end date reached)
- Integration tests: Time entry sync → forecast recalculation
- A/B testing: With beta customers (simple forecast vs. complex forecast)

---

### **PHASE 5: Onboarding & UX Polish (Weeks 11-12)**

**Milestone:** Smooth 30-min onboarding, help content complete

**Week 11: Guided Onboarding**
- [ ] Build onboarding wizard (signup → company setup → data import → first dashboard view)
- [ ] Implement in-app help (help icon on each page, context-specific tips)
- [ ] Record training videos (5 × <3 min each, covering key features)
- [ ] Create knowledge base (FAQ, troubleshooting, best practices)
- [ ] Implement product tour (first-time user walkthrough)

**Week 12: Polish & Beta Testing**
- [ ] UI refinement (responsive design, mobile optimization)
- [ ] Performance optimization (dashboard <1 sec load, API <200ms response)
- [ ] Bug fixes from beta testing (internal + external testers)
- [ ] Security audit (OWASP top 10, data validation, auth review)
- [ ] Pricing + billing flow implementation (Stripe integration, subscription management)

**Deliverables:**
- Onboarding flow end-to-end
- Help content complete
- Beta testing feedback incorporated
- Pricing page live
- Marketing site live (landing page + signup)

**Success Metrics:**
- Onboarding completion >85%
- Time-to-dashboard <30 min
- Help videos have >60% completion rate
- Zero security vulnerabilities in scan

**Testing:**
- User testing: 10 external users go through onboarding; measure success rate + time
- Security testing: Penetration test, OWASP scan, code review
- Performance testing: Load test dashboard with 100+ projects
- Compatibility testing: Chrome, Safari, Firefox (latest versions)

---

### **PHASE 6: Launch Preparation & Go-Live (Week 13)**

**Milestone:** MVP live to public; Founder-led sales begin

**Pre-Launch Checklist:**
- [ ] All 12 weeks of development features tested
- [ ] Database backup & disaster recovery plan in place
- [ ] Monitoring & alerting set up (Sentry for errors, DataDog for performance)
- [ ] Support email configured (support@deliversync.com)
- [ ] Customer onboarding checklist written for Founder
- [ ] Sales playbook finalized (discovery call script, objection handling, demo flow)
- [ ] Landing page traffic test (can handle 100+ visitors/day)
- [ ] First beta customers set up (3 early adopters testing before public)

**Week 13 Activities:**
- [ ] Deploy to production
- [ ] Send invite to beta customers + external advisors
- [ ] Monitor stability (on-call for 48 hours post-launch)
- [ ] Collect feedback from beta (feedback form, short survey)
- [ ] Refine onboarding based on beta feedback (if critical issues)
- [ ] Begin Founder-led outreach (50+ LinkedIn messages to target ICP)
- [ ] Set up metrics dashboard (track signups, conversions, churn)

**Launch Go-Live Success Criteria:**
- Zero critical bugs post-launch (e.g., data loss, security issues)
- Dashboard loads <2 sec for all users
- Onboarding completes for 80%+ of users
- First paying customer closes within 2 weeks post-launch
- Customer support SLA met (email response <24 hrs)

---

### **Development Team Composition**

**For 12-week MVP build:**

1. **Tech Lead / Full-Stack Engineer** (1 FTE)
   - Owns backend API architecture + frontend integration
   - 5-10 years experience
   - Cost: $120-150K annually (or $10-12.5K/mo for 3 months)

2. **Frontend Engineer** (1 FTE)
   - Owns dashboard UI, data visualization, responsive design
   - 3-7 years experience
   - Cost: $100-130K annually (or $8-11K/mo for 3 months)

3. **DevOps / Infrastructure** (0.5 FTE, part-time or contractor)
   - Sets up deployment, monitoring, databases
   - Cost: $50-70K annually (or $4-6K/mo)

4. **QA / Testing** (0.5 FTE, part-time)
   - Test automation, manual testing, performance testing
   - Cost: $40-60K annually (or $3-5K/mo)

5. **Founder/Product Lead** (1 FTE)
   - Product specs, design direction, customer feedback
   - Working with engineers on scope/timeline
   - Also starts Founder-led sales in weeks 9-12

**Total Cost: $25-35K for 3-month sprint** (contract/part-time rates)

**Alternative (Lean):** 1 Full-stack + 1 Frontend + Founder = $18-22K for MVP

---

### **Risk Mitigation During Development**

| Risk | Mitigation |
|------|-----------|
| Key engineer leaves mid-sprint | Document architecture, pair programming, knowledge sharing |
| Feature takes longer than estimated | Weekly scope review, hard cutoff at Week 9, defer nice-to-haves |
| Forecasting model doesn't work | Start with simple model (exponential smoothing), validate with 3-5 beta customers |
| Integration (Harvest, QB) breaks | Build CSV import as fallback, test integrations weekly |
| Performance issues after launch | Load test in week 11, database indexing, caching strategy |
| Security vulnerabilities found | Code review + security scan in week 12, bug bounty program |

---

## Summary: MVP Timeline at a Glance

```
Week 1-2:  Architecture & Auth (DB, API, user signup)
Week 3-4:  Project + Import (CSV + Harvest integration)
Week 5-6:  Profitability Dashboard (margin calculations, reports)
Week 7-8:  Resources Dashboard (capacity, allocation, billability)
Week 9-10: Forecasting (AI model, risk scoring, recommendations)
Week 11-12: Onboarding + Polish (wizard, help, mobile optimization)
Week 13:   Launch + Go-Live (beta customers, begin sales)

Total: 13 weeks to MVP
MVP Ready: Mid/Late Q2 2026
```

---

## Appendix: Key Assumptions

**Market Assumptions:**
- PSA market continues growing 12%+ CAGR
- SMB firms adopt PSA tools faster post-pandemic
- $12-25K ACV is acceptable for SMB consulting segment
- 60% trial-to-paid conversion achievable with strong product + onboarding

**Product Assumptions:**
- Forecasting model can be accurate within 15% (backtesting validated)
- Integrations (Harvest, QB) APIs remain stable
- SMBs prefer modern, simple UI over enterprise complexity
- 30-min onboarding is achievable (validated with 10 beta users)

**GTM Assumptions:**
- Founder can commit 25-30 hrs/week to sales (months 1-6)
- ICP (VP Ops at 15-50 person consulting firms) is reachable via LinkedIn/email
- 8-12 week sales cycle is achievable (validated with GTM analysis)
- First customer closes by Month 3

**Financial Assumptions:**
- Gross margin 75%+ (SaaS infrastructure cost is low)
- CAC stays <$5K with Founder-led outbound
- ACV grows from $9.6K (Year 1) → $12-14K (by Month 12) via upsell
- $150K ARR by Month 12 = 12-16 customers (realistic based on sales velocity)

---

**Document Version:** 1.0  
**Last Updated:** January 26, 2026  
**Status:** Ready for Development (Approved for Q2 2026 Launch)  
**Next Step:** Begin Phase 1 (Week 1) - Architecture & Foundation

# DeliverySync - 90-Day MVP Development Roadmap

**Version:** 1.0  
**Date:** January 26, 2026  
**Timeline:** Week 1 → Week 13 (Go-Live)  
**Team Size:** 2-3 developers + 1 founder/PM

---

## Phase Overview

```
PHASE 1 (Weeks 1-2):    Architecture & Foundation       [SETUP]
PHASE 2 (Weeks 3-6):    Profitability Module            [CORE VALUE]
PHASE 3 (Weeks 7-8):    Resources Module                [TEAM INTELLIGENCE]
PHASE 4 (Weeks 9-10):   Forecasting Module              [DIFFERENTIATION]
PHASE 5 (Weeks 11-12):  Onboarding & Polish             [LAUNCH READINESS]
PHASE 6 (Week 13):      Launch & Go-Live                [FOUNDER SALES BEGIN]
```

---

## PHASE 1: Architecture & Foundation (Weeks 1-2)

**Goal:** Solid technical foundation; team can build features on top.  
**Complexity:** 🟡 Medium  
**Risk:** 🔴 High (foundational decisions impact entire project)

---

### Week 1: Development Environment & Database

**Team:** Tech Lead (FTE) + DevOps (0.5 FTE)

#### Monday-Wednesday: Environment Setup & Deployment Infrastructure

**Tasks:**
- [ ] GitHub repository created + branch strategy (main, develop, feature/*)
- [ ] CI/CD pipeline configured (GitHub Actions)
  - Automated tests on every PR
  - Staging deployment on merge to develop
  - Production deployment approval required for main
- [ ] Development environment setup (Docker Compose)
  - PostgreSQL container
  - Redis container
  - Node.js + npm ready
  - .env.local template
- [ ] Staging server provisioned (AWS EC2 or Heroku)
  - Can deploy new versions with one command
  - Database backups automated
- [ ] Monitoring & alerting setup (Sentry, CloudWatch)

**Deliverables:**
- Developers can run `docker-compose up` and have full stack locally
- Commit to GitHub → auto-deploys to staging
- Production infrastructure ready (not deployed to yet)

**Success Metrics:**
- Zero manual setup steps needed for new team member
- Deployment time: <5 minutes
- Zero configuration issues in first 3 days

---

#### Thursday-Friday: Database Schema & Migrations

**Tasks:**
- [ ] PostgreSQL schema designed (see Technical Architecture doc for full schema)
  - Core tables: companies, users, projects, resources, time_entries
  - Relationship diagram reviewed and approved
- [ ] Database migrations created (using TypeORM or Prisma)
  - Each migration is reversible
  - Seed data for local testing
- [ ] Indexes defined (company_id, project_id, resource_id, dates)
  - Query optimization plan
- [ ] Database connection pool configured (25-50 connections)
- [ ] Backup & restore process tested
  - Daily automatic snapshots (AWS RDS)
  - Restore test successful

**Deliverables:**
- Database running locally and on staging
- Schema matches spec document
- Migrations tracked in version control

**Testing:**
- [ ] Create 100 projects, 1000 time entries → query <100ms
- [ ] Test all foreign key constraints
- [ ] Verify index effectiveness with EXPLAIN PLAN

---

### Week 2: Authentication & API Foundation

**Team:** Tech Lead (FTE) + Frontend Engineer (starts ramping up)

#### Monday-Wednesday: User Auth & Session Management

**Tasks:**
- [ ] Auth0 or Firebase account created (OAuth provider)
- [ ] JWT token generation/validation implemented
  - Token expiry: 1 hour
  - Refresh token: 7 days (secure cookie)
- [ ] Password hashing (bcrypt, 12 rounds) for local auth (fallback)
- [ ] User signup API endpoint
  ```
  POST /api/v1/auth/signup
  Body: { email, password, company_name, first_name, last_name }
  Response: { user, company, token }
  ```
- [ ] User login API endpoint
  ```
  POST /api/v1/auth/login
  Body: { email, password }
  Response: { token, refresh_token }
  ```
- [ ] Auth middleware for protected endpoints
  - Validates JWT
  - Extracts user_id, company_id
  - Enforces role-based access control (RBAC)

**Deliverables:**
- Can sign up → get JWT token
- Can login → token refreshes before expiry
- Protected endpoints reject unauthenticated requests

**Testing:**
- [ ] Unit tests: Token generation, expiry, refresh
- [ ] Integration tests: Signup flow end-to-end
- [ ] Security: JWT signature validation, token tampering detection

---

#### Thursday-Friday: API Scaffold & Response Structure

**Tasks:**
- [ ] Express.js app structure
  - /routes (auth, projects, time-entries, etc.)
  - /controllers (business logic)
  - /services (database queries)
  - /middleware (auth, error handling)
  - /tests (unit + integration)
- [ ] Error handling middleware
  - Standardized error response: `{ code, message, details }`
  - HTTP status codes (400, 401, 403, 404, 500)
  - Sentry integration for errors
- [ ] Request validation middleware
  - Zod or Joi schemas
  - Validates request body, params, query
- [ ] Rate limiting middleware
  - 100 requests/minute per IP (configurable)
  - Prevents abuse
- [ ] CORS configuration (allow frontend domain)

**Deliverables:**
- Basic API returning JSON responses
- Consistent error format
- API documentation started (OpenAPI/Swagger)

**Testing:**
- [ ] 10 sample endpoints tested (return proper error codes)
- [ ] Rate limiting verified
- [ ] Swagger docs auto-generated

---

### Phase 1 Go-Live Criteria

**Must Complete Before Moving to Phase 2:**
- ✅ Team can locally develop without setup issues
- ✅ Database schema matches spec
- ✅ Auth working (signup, login, logout, refresh)
- ✅ CI/CD pipeline deploying to staging
- ✅ API error handling consistent
- ✅ Zero critical bugs in staging

**Known Risks & Mitigations:**
| Risk | Mitigation |
|------|-----------|
| Database schema changes mid-development | Lock schema in Week 2; use migrations for changes |
| Auth library incompatibility | Choose Auth0 (easy) vs. Firebase (fewer options) early |
| API design doesn't match frontend needs | Daily sync: Frontend Engineer reviews API contracts |

---

## PHASE 2: Profitability Module (Weeks 3-6)

**Goal:** Core profitability dashboard calculating and displaying project margins.  
**Complexity:** 🟡 Medium-High  
**Risk:** 🟠 Medium (margin calculation accuracy critical)

This is the MVP-critical module. If this isn't perfect, product fails.

---

### Week 3: Projects CRUD & CSV Import

**Team:** Tech Lead (FTE) + Frontend Engineer (FTE)

#### Monday-Tuesday: Projects CRUD API

**Tasks:**
- [ ] Projects CRUD endpoints
  ```
  POST   /api/v1/projects
         Body: { name, client_name, budget_total, start_date, end_date, pm_id }
         Response: { project }
  
  GET    /api/v1/projects
         Query: ?status=active&client_id=123&page=1&limit=50
         Response: { projects: [], total: 500, page: 1 }
  
  GET    /api/v1/projects/:id
         Response: { project, margin_data, team_allocation }
  
  PUT    /api/v1/projects/:id
         Body: { name, budget_total, status, ... }
         Response: { project }
  
  DELETE /api/v1/projects/:id
         Response: { success: true }
  ```
- [ ] Project model in database
  - name, client_name, budget_total, start_date, end_date, status, pm_id
  - Validations: budget_total > 0, end_date > start_date
- [ ] Filtering & pagination
  - Filter by: status, client, PM, date range
  - Sort by: name, budget, margin (when calculated)
  - Default: 50 per page, max 500

**Deliverables:**
- Postman collection with all project endpoints
- Database has sample projects
- Tests: 10 unit tests + integration tests

---

#### Wednesday-Friday: CSV Import & Data Validation

**Tasks:**
- [ ] CSV import endpoint
  ```
  POST /api/v1/projects/import
       Body: { csv_file, source: 'csv', template_type: 'projects' }
       Response: { job_id, status: 'in_progress' }
  ```
- [ ] CSV templates (Excel files)
  - Projects template: name, client, budget, start_date, end_date
  - Resources template: name, email, seniority, billing_rate, capacity_per_week
  - Time entries template: project_name, resource_name, hours, date
- [ ] Import validation
  - Check for missing required fields
  - Validate dates (start_date < end_date)
  - Validate numbers (budget > 0, hours > 0)
  - Smart column matching (auto-detect "Project Name" = "name" field)
- [ ] Async import processing (Bull job queue)
  - Large imports don't block API
  - Progress tracking: "Processed 100/1000 rows"
  - Error reporting: List of invalid rows with reasons
- [ ] Data mapping & insertion
  - Match CSV rows to existing records (if updating)
  - Create new records if not found
  - Transaction: All or nothing (rollback on error)

**Deliverables:**
- CSV templates distributed to customers
- Import takes <2 min for 100 projects
- Error rate <1% (accurate validation)

**Testing:**
- [ ] Import 100 projects → all created correctly
- [ ] Import with missing fields → validation errors reported
- [ ] Import with duplicate projects → handled gracefully
- [ ] Concurrent imports → no data conflicts

---

### Week 4: Time Entries & Margin Calculation Engine

**Team:** Tech Lead (FTE) + Frontend Engineer (FTE)

#### Monday-Wednesday: Time Entries CRUD & Import

**Tasks:**
- [ ] Time entries API endpoints
  ```
  POST   /api/v1/projects/:projectId/time-entries
         Body: { resource_id, hours, billable, date_worked, notes, source }
         Response: { time_entry }
  
  GET    /api/v1/projects/:projectId/time-entries
         Query: ?resource_id=123&date_from=2026-01-01&date_to=2026-01-31
         Response: { time_entries: [] }
  
  PUT    /api/v1/time-entries/:id
         Body: { hours, billable, notes }
         Response: { time_entry }
  
  DELETE /api/v1/time-entries/:id
         Response: { success: true }
  ```
- [ ] Harvest integration (OAuth + API)
  - User clicks "Connect Harvest"
  - OAuth redirect → Harvest login
  - Callback → store access token (encrypted)
  - Fetch projects, team members, time entries from Harvest API
  - Hourly sync (or on-demand)
- [ ] CSV bulk import for time entries
  - Same as projects, but for time data
  - Match resource names to existing resources
  - Date validation (can't be in future)

**Deliverables:**
- Time entries can be added manually or imported from Harvest
- Harvest sync working (daily)
- <100 time entries imported in <1 minute

---

#### Thursday-Friday: Margin Calculation Engine (Core Logic)

**Tasks:**
- [ ] Margin calculation formula
  ```
  For each project:
    budget_total = from project
    actuals_labor = SUM(time_entries.hours * resource.billing_rate)
    actuals_expenses = SUM(expenses)
    total_actuals = actuals_labor + actuals_expenses
    margin_dollar = budget_total - total_actuals
    margin_percent = (margin_dollar / budget_total) * 100
  ```
- [ ] Margin calculation service (TypeScript)
  - Takes project_id
  - Queries all time entries + expenses
  - Calculates margin
  - Returns: margin_dollar, margin_percent, margin_trend
- [ ] Trend detection (week-over-week)
  - Compare this week's margin % to last week
  - If change > 5%: mark as "up" or "down"
  - Otherwise: "stable"
- [ ] Caching strategy
  - Calculate margin
  - Store in project_margins table (materialized view)
  - Refresh: nightly + on-demand when time entry added
  - Cache in Redis (1 hour TTL)
- [ ] Trigger recalculation on time entry changes
  - When time entry created/updated/deleted
  - Async job: Recalculate margin, update cache
  - Broadcast via WebSocket (see Week 4 Friday)

**Deliverables:**
- Margin calculation accurate for all projects
- Performance: <100ms per project calculation
- Tests: Edge cases (zero budget, no time entries, negative values)

**Testing:**
- [ ] Unit tests: 20+ test cases (edge cases, negative scenarios)
  - Project with no time entries → 0 actuals, margin = budget
  - Project over-budget → negative margin
  - Project exactly on budget → 0% margin
- [ ] Integration tests: 5 projects, 100 time entries
  - Calculate margins → verify against manual Excel calculation
  - Accuracy: ±$0.01 (accounting precision)

---

### Week 5: Profitability Dashboard UI

**Team:** Frontend Engineer (FTE) + Tech Lead (0.5 FTE for API support)

#### Monday-Wednesday: Dashboard Grid & Visualization

**Tasks:**
- [ ] Profitability dashboard API
  ```
  GET /api/v1/dashboards/profitability
      Query: ?status=active&sort_by=margin_percent
      Response: {
        projects: [{
          id, name, client_name, budget, actuals,
          margin_dollar, margin_percent, margin_trend,
          forecast_margin, forecast_confidence
        }],
        summary: {
          total_budget, total_actuals, total_margin,
          avg_margin_percent, top_project, bottom_project
        }
      }
  ```
- [ ] React component: ProjectGrid
  - Table with columns: Name, Client, Budget, Actuals, Margin $, Margin %, Trend
  - Sortable: Click column header
  - Filterable: By status, client, PM
  - Color coding: Green (>25%), Yellow (15-25%), Red (<15%)
  - Responsive: Mobile-friendly (swipeable cards)
- [ ] React component: ProjectDetail (click project → detail view)
  - Project name, client, budget breakdown
  - Chart: Budget vs. Actuals (stacked bar)
  - Margin calculation breakdown (Labor $, Expenses $, Margin $)
  - Timeline: Project progress (days complete / days remaining)
  - Team allocation for this project
- [ ] Summary card (top of dashboard)
  - Total budget, total actuals, total margin
  - Average margin %, highest/lowest project
  - Visual: Large numbers + sparkline (trend)

**Deliverables:**
- Dashboard loads in <1 second
- Responsive on desktop + mobile
- All sorting & filtering working

**Testing:**
- [ ] Component tests: Verify renders, sorting, filtering
- [ ] Visual regression tests: Compare to design mockups
- [ ] Performance: <1s load with 100 projects, 1000 time entries

---

#### Thursday-Friday: Export & Reporting

**Tasks:**
- [ ] PDF export (monthly margin summary)
  - Report template: Header (company logo, month/year), Projects table, Summary stats
  - Library: react-pdf or html-to-pdf
  - Download as "DeliverySync_Margin_Report_Jan2026.pdf"
- [ ] CSV export (detailed margin data)
  - All projects, all fields (margins, actuals, team breakdown)
  - For import into Excel or other tools
- [ ] Historical margin reports API
  ```
  GET /api/v1/reports/margin-by-project
      Query: ?start_date=2026-01-01&end_date=2026-01-31
      Response: { reports: [ { project, margin_history } ] }
  ```
- [ ] Margin chart (line chart over time)
  - X-axis: Date
  - Y-axis: Margin %
  - One line per project
  - Hover: See exact margin %

**Deliverables:**
- PDF export working (tested with 3 sample reports)
- CSV export opens in Excel
- Reports accessible from dashboard (export button)

---

### Week 6: Integration & Testing

**Team:** Tech Lead (FTE) + QA (0.5 FTE)

#### Monday-Wednesday: Harvest Integration

**Tasks:**
- [ ] OAuth flow fully implemented
  - User clicks "Connect Harvest" in settings
  - Redirect to Harvest → login
  - Callback → token stored encrypted in database
  - "Connected" indicator in UI
- [ ] Harvest API sync
  - Fetch projects from Harvest → match to DeliverySync projects
  - Fetch resources (team members) from Harvest → create/update in DeliverySync
  - Fetch time entries from Harvest → sync to DeliverySync hourly
- [ ] Sync error handling
  - If sync fails: Retry 3x, alert admin via email
  - Display sync status in UI (last synced: 2 hours ago)
  - User can manually trigger sync
- [ ] Data mapping
  - Harvest project ID → DeliverySync project ID
  - Handle renames, deletions, archived projects
  - Idempotent: Re-sync doesn't duplicate data

**Deliverables:**
- Harvest connected + syncing
- Time entries auto-pulling from Harvest
- Performance: Sync 100 time entries in <30 seconds

**Testing:**
- [ ] Connect real Harvest account → verify data match
- [ ] Sync 500 time entries → no duplicates, performance acceptable
- [ ] Disconnect + reconnect → data remains consistent

---

#### Thursday-Friday: Quality Assurance & Bug Fixes

**Tasks:**
- [ ] User acceptance testing (UAT) with founder
  - Create 3 sample projects
  - Add 20 time entries
  - Verify margin calculations match Excel
  - Check dashboard rendering
- [ ] Performance testing
  - Load test: 100 projects + 1000 time entries → dashboard <2s load
  - Database query analysis (EXPLAIN PLAN for slow queries)
  - Add indexes if needed
- [ ] Security testing
  - Try accessing other company's data (RBAC test)
  - SQL injection attempts (input validation test)
  - JWT token manipulation (auth test)
- [ ] Bug fixes
  - Fix any issues found in UAT/performance/security testing
  - Target: Zero P1 bugs, <5 P2 bugs

**Deliverables:**
- Dashboard fully functional + tested
- Performance acceptable
- Security baseline met

---

### Phase 2 Go-Live Criteria

**Must Complete Before Moving to Phase 3:**
- ✅ Margin dashboard displays all projects with accurate calculations
- ✅ CSV import working for projects + time entries
- ✅ Harvest integration syncing data hourly
- ✅ PDF/CSV export working
- ✅ Dashboard loads <2 seconds with 100 projects
- ✅ Zero data integrity issues (margins match manual calculations)
- ✅ Responsive design working on mobile

**Known Issues & Workarounds:**
| Issue | Workaround | Timeline |
|-------|-----------|----------|
| QuickBooks integration not ready | CSV import of budgets sufficient for MVP | Month 6 |
| Advanced filtering slow | Pagination at 50 items, users can filter | Performance optimization Month 4 |
| Forecast not included yet | "Coming soon" placeholder | Week 9 |

---

## PHASE 3: Resources Module (Weeks 7-8)

**Goal:** Team capacity dashboard + allocation planner.  
**Complexity:** 🟡 Medium  
**Risk:** 🟡 Medium (drag-and-drop UX tricky)

---

### Week 7: Team Capacity Tracking

**Team:** Frontend Engineer (FTE) + Tech Lead (0.5 FTE)

#### Monday-Wednesday: Capacity API & Data Model

**Tasks:**
- [ ] Capacity calculation API
  ```
  GET /api/v1/capacity/overview
      Query: ?start_week=2026-01-27&weeks=8
      Response: {
        weeks: [{
          week_start: '2026-01-27',
          total_available_hours: 160,  // 4 people * 40 hrs/week
          total_allocated_hours: 136,
          utilization_percent: 85,
          by_resource: [
            { resource_id, name, available: 40, allocated: 36, utilization: 90 }
          ]
        }]
      }
  ```
- [ ] Capacity calculation logic
  - For each resource: available_hours = capacity_hours_per_week
  - For each week: allocated_hours = SUM(allocations where week overlaps)
  - utilization_percent = (allocated_hours / available_hours) * 100
  - Over-allocation flag: if > 100%
- [ ] Resource allocation data model
  - allocation: { resource_id, project_id, allocated_hours, start_date, end_date }
  - Can span multiple weeks
  - Editable after creation

**Deliverables:**
- Capacity API returning correct calculations
- 8-week rolling capacity view
- Tested with 10 resources, 20 projects

---

#### Thursday-Friday: Capacity Dashboard UI

**Tasks:**
- [ ] Capacity grid component
  - Rows: Resources (team members)
  - Columns: Weeks (8-week view)
  - Cell: Hours allocated / Available (e.g., "36 / 40")
  - Color: Green <80%, Yellow 80-100%, Red >100%
- [ ] Summary card
  - Team utilization: 85% (total allocated / total available)
  - Over-allocated count: 2 people >100%
  - Forecast: Next week utilization
- [ ] Drill-down: Click resource → See allocations for that person
  - List of projects allocated
  - Edit/delete individual allocations
  - Add new allocation

**Deliverables:**
- Capacity dashboard displays correctly
- Color coding working
- Responsive design

---

### Week 8: Allocation Planner & Alerts

**Team:** Frontend Engineer (FTE) + Tech Lead (0.5 FTE)

#### Monday-Wednesday: Allocation Planner (Drag-and-Drop)

**Tasks:**
- [ ] Allocation API endpoints
  ```
  POST   /api/v1/allocations
         Body: { resource_id, project_id, allocated_hours, start_date, end_date }
         Response: { allocation }
  
  PUT    /api/v1/allocations/:id
         Body: { allocated_hours, start_date, end_date }
         Response: { allocation }
  
  DELETE /api/v1/allocations/:id
         Response: { success: true }
  ```
- [ ] Drag-and-drop component (UI)
  - View 1: Resource-centric (all my projects)
    - Drag from unallocated pool → project row
    - Specify hours
  - View 2: Project-centric (all projects)
    - Drag from resource pool → project row
    - Specify hours
- [ ] Allocation constraints
  - Can't allocate more than resource capacity (soft warning)
  - Can't overlap allocations to same project (optional hard constraint)
  - Visual conflict indicator if over-capacity
- [ ] Save & notification
  - Save button → API call
  - Success toast: "Allocation saved"
  - Email notification to allocated resource (optional, post-MVP)

**Deliverables:**
- Drag-and-drop allocation working (tested with 5 users)
- Validation preventing impossible allocations
- API accepting/storing allocations correctly

**Testing:**
- [ ] Allocate resource → capacity updates
- [ ] Over-allocate → warning shown
- [ ] Delete allocation → capacity updates
- [ ] Concurrent allocations → no conflicts

---

#### Thursday-Friday: Over-Allocation Alerts & Billability

**Tasks:**
- [ ] Over-allocation alerts
  ```
  POST /api/v1/alerts/subscribe
       Body: { alert_type: 'over_allocation', threshold: 100 }
       Response: { subscription }
  ```
  - Trigger when resource >100% for 2+ weeks
  - Alert message: "Resource X is 125% allocated next week"
  - Include: Which projects causing over-allocation, which PM to contact
  - Delivery: Email + in-app notification
- [ ] Billability dashboard API
  ```
  GET /api/v1/resources/:id/billability
      Query: ?start_date=2026-01-01&end_date=2026-01-31
      Response: {
        billable_hours: 160,
        admin_hours: 20,
        training_hours: 5,
        billability_percent: 88,  // 160 / (160+20+5)
        by_week: [ { week, billable, admin, training } ]
      }
  ```
- [ ] Billability tracking
  - Track time entry types: billable, admin, training, pto
  - Calculate % billable per resource
  - Show trend (improving, stable, declining)
- [ ] Individual billability view (resource sees own)
  - "My billability this month: 85%"
  - Benchmark: "Industry average: 80%"
  - Can see breakdown by week

**Deliverables:**
- Alerts firing when over-allocation detected
- Billability calculations working
- Individual resources can see own billability

---

### Phase 3 Go-Live Criteria

**Must Complete Before Moving to Phase 4:**
- ✅ Capacity dashboard showing team utilization
- ✅ Allocation planner working (drag-and-drop)
- ✅ Over-allocation alerts firing correctly
- ✅ Billability tracking implemented
- ✅ Resources can see their own capacity & billability
- ✅ No performance issues with 20 resources

---

## PHASE 4: Forecasting Module (Weeks 9-10)

**Goal:** AI-powered margin forecast + risk scoring.  
**Complexity:** 🔴 High  
**Risk:** 🔴 High (ML model accuracy critical)

---

### Week 9: Forecasting Model & Engine

**Team:** Tech Lead (FTE) + Data Engineer / ML person (0.5 FTE, can be contractor)

#### Monday-Tuesday: Forecasting Model (Python Backend)

**Tasks:**
- [ ] Develop forecasting model (Python)
  - Input: Project actuals (last 4 weeks)
  - Model: Exponential smoothing or ARIMA
  - Output: Margin forecast 30/60 days out + confidence interval
- [ ] Model training pipeline
  - Nightly job: Fetch all projects' time entries
  - Re-train model with latest data
  - Serialized model stored in Redis + S3
  - Re-training takes <5 minutes per 100 projects
- [ ] Forecast accuracy validation
  - Backtest on historical projects (3-month lookback)
  - Compare forecast vs. actual final margin
  - Target: >75% accuracy (within 15% error)
- [ ] Confidence interval calculation
  - Based on RMSE (root mean square error)
  - Confidence = 100% - (margin_of_error / final_margin * 100)
  - Minimum 50%, maximum 95%

**Deliverables:**
- Forecasting model trained + validated
- Accuracy >75% on historical data
- Training takes <5 min for 100 projects

**Testing:**
- [ ] Backtest on 10 historical projects
  - Compare forecast (made at week 2) vs. actual (week 12)
  - Accuracy measured
- [ ] Edge cases: Zero budget, no data, negative margin projects

---

#### Wednesday-Friday: Risk Scoring & Recommendation Engine

**Tasks:**
- [ ] Risk scoring logic
  ```
  risk_score = function(final_margin_percent, days_remaining, confidence):
    if final_margin < 0:
      risk_score = 10  # Critical
    elif final_margin < 10%:
      risk_score = 8
    elif final_margin < 20%:
      risk_score = 6
    else:
      risk_score = 3
    
    # Adjust for urgency
    if days_remaining < 7 and margin < 20%:
      risk_score = min(10, risk_score + 2)
    
    # Adjust for confidence
    if confidence < 60%:
      risk_score = max(risk_score - 2, 1)  # Less confident → lower score
    
    return risk_score
  ```
- [ ] Recommendation engine (OpenAI API)
  - Input: Project data, margin trend, burn rate
  - Prompt: "Given this project [name] with margin [X]% trending [up/down], what should we do?"
  - Output: Narrative recommendation
  - Examples: "Increase billable rate 10%", "Reduce scope by 40 hours", "Allocate more senior resource"
- [ ] Integration with OpenAI API
  - Cost estimate: ~$0.01 per recommendation (GPT-4)
  - Batching: Generate recommendations daily for all projects
  - Caching: Store recommendation in DB to avoid re-calling

**Deliverables:**
- Risk scoring working for all projects
- AI recommendations generating
- Cost <$100/month for 100+ projects

**Testing:**
- [ ] Risk score ranges for various margin levels
- [ ] Recommendations make sense (no nonsense output)
- [ ] OpenAI API error handling (fallback to default recommendation)

---

### Week 10: Forecast Dashboard & Alerts

**Team:** Frontend Engineer (FTE) + Tech Lead (0.5 FTE)

#### Monday-Wednesday: Forecast Dashboard UI

**Tasks:**
- [ ] Forecast dashboard API
  ```
  GET /api/v1/dashboards/forecast
      Response: {
        projects_at_risk: [{
          id, name, current_margin_percent, forecast_final_margin_percent,
          forecast_confidence, risk_score, days_remaining,
          recommendation, trend_arrow
        }],
        resource_gaps: [{
          skill_level, hours_needed_60d, hours_available,
          gap_hours, hiring_recommendation
        }]
      }
  ```
- [ ] Forecast dashboard components
  - Projects at Risk section: Cards ranked by risk_score (highest first)
    - Card shows: Project name, current margin, forecast margin, risk level (1-10)
    - Color: Green if low risk, Yellow if medium, Red if high
    - Click card → detailed view
  - Resource Gap section: Forecast hiring needs
  - AI Recommendation card: "Try reducing scope by 40 hours to get margin to 25%"
- [ ] Detailed forecast view (click project)
  - Current margin: 18%
  - Forecasted margin: 8% (in 30 days)
  - Burn rate: $3K/week
  - Days remaining: 28
  - Confidence: 82%
  - Chart: Margin trend (actual + forecast)
  - AI recommendation: Narrative text
  - What-if scenarios (click to simulate)

**Deliverables:**
- Forecast dashboard live
- Projects at risk highlighted
- Confidence displayed with forecast

---

#### Thursday-Friday: Scenario Modeling & Alerts

**Tasks:**
- [ ] What-if scenario modeling (simple)
  - User adjusts: Billing rate, Hours scope, Resource allocation
  - System re-forecasts on-the-fly
  - Shows: "If you increase rate 10%, margin will be 18% (was 8%)"
  - Don't persist to database (exploratory only)
- [ ] Risk alerts
  ```
  POST /api/v1/alerts/subscribe
       Body: { alert_type: 'risk_score', threshold: 7 }
       Response: { subscription }
  ```
  - Trigger when risk_score > 7 (project likely to miss margin)
  - Alert includes: Project, current margin, forecast margin, recommendation
  - Delivery: Email + in-app + Slack (optional)
  - Example: "⚠️ Project ABC trending toward loss. Forecast margin: 8%. Consider reducing scope."
- [ ] Resource gap alerts
  - "In 60 days, will need 3 more senior consultants"
  - Hiring recommendation: "Start recruiting now; takes 4-6 weeks"
  - Financial impact: Hiring costs $120K/year but can bill additional $180K

**Deliverables:**
- What-if scenarios working (reactive, no persistence)
- Risk alerts firing
- Resource gap forecasting displayed

---

### Phase 4 Go-Live Criteria

**Must Complete Before Moving to Phase 5:**
- ✅ Forecast model >75% accuracy (validated on historical data)
- ✅ Forecast dashboard displaying projects at risk
- ✅ Risk alerts firing when projects trending negative
- ✅ AI recommendations generating (quality check passed)
- ✅ Resource gap predictions working
- ✅ Performance: Forecast recalculation <30 seconds for 100 projects

---

## PHASE 5: Onboarding & Polish (Weeks 11-12)

**Goal:** Smooth 30-minute onboarding; help content complete; beta customer feedback incorporated.  
**Complexity:** 🟡 Medium  
**Risk:** 🟡 Medium (user onboarding critical for trial-to-paid conversion)

---

### Week 11: Guided Onboarding Flow & Help Content

**Team:** Frontend Engineer (FTE) + Content/Product (founder, 0.5 FTE)

#### Monday-Wednesday: Onboarding Wizard

**Tasks:**
- [ ] Onboarding flow (3 steps)
  - Step 1 (5 min): Welcome + Company Setup
    - Input: Company name, fiscal year start, industry (dropdown)
    - Pre-populate with defaults (Senior $200/hr, Mid $125/hr, etc.)
  - Step 2 (10 min): Data Import
    - Option A: CSV upload (projects template)
    - Option B: Harvest auth (pull projects + resources)
    - Show progress bar: "Importing 15 projects..."
  - Step 3 (5 min): First Dashboard View
    - "Great! Your dashboard is ready."
    - Show margin dashboard with imported data
    - Highlight: "Project ABC margin: 23% (on track)"
    - Call-to-action: "Explore your team capacity" or "View forecast"
- [ ] In-app help content
  - Help icon (?) on every dashboard page
  - Context-specific tips: Hover over "Margin %" → tooltip "Margin = Budget - Actuals"
  - Link to knowledge base articles
  - Link to video tutorials
- [ ] Video library
  - Record 5 videos (<3 min each)
    1. "Dashboard overview" (1:30)
    2. "How to interpret margin %" (1:45)
    3. "Setting up alerts" (2:00)
    4. "Forecast: What it means" (2:15)
    5. "Best practices for profitability" (2:30)
  - Host on Vimeo or YouTube (unlisted)
  - Embed in knowledge base

**Deliverables:**
- Onboarding flow end-to-end working
- Help content accessible from dashboard
- 5 training videos recorded + embedded

**Testing:**
- [ ] Onboarding completion: 10 test users → measure time + success rate
  - Target: >80% complete onboarding in <30 min
- [ ] Help content: Click help icon → loads relevant tip
- [ ] Videos: Play successfully, no loading issues

---

#### Thursday-Friday: Onboarding Personalization & Email Sequence

**Tasks:**
- [ ] Personalization during onboarding
  - Ask at signup: "Which pain point brought you here?" (dropdown)
    - Margin visibility
    - Team burnout
    - Forecasting
  - Tailor onboarding based on answer
    - If "Margin visibility": Highlight dashboard, show margin alerts setup
    - If "Team burnout": Highlight capacity view, over-allocation alerts
    - If "Forecasting": Highlight forecast tab, show scenario modeling
- [ ] Post-onboarding email sequence (automated)
  - Day 1: "Welcome to DeliverySync! Here's your getting started guide" (email)
  - Day 3: "Check out your first margin insights" (email + notification)
  - Day 7: "Your forecast is ready—here's what it means" (email)
  - Day 10: "Let's make sure you're getting value" (Calendly link for 20-min call)
  - Day 20: "Your trial ends in 10 days—let's discuss" (Sales email)

**Deliverables:**
- Personalized onboarding flow working
- Email automation configured (SendGrid or similar)
- Calendly integration for support calls

---

### Week 12: Polish & Pre-Launch Testing

**Team:** Tech Lead (FTE) + Frontend Engineer (FTE) + QA (0.5 FTE)

#### Monday-Wednesday: Bug Fixes & Performance Optimization

**Tasks:**
- [ ] User acceptance testing (internal + 2-3 beta customers)
  - Create real projects
  - Add real time entries
  - Verify margins, capacity, forecast
  - Note any issues (bugs, confusing UX)
- [ ] Performance optimization
  - Database query optimization (indexes, EXPLAIN PLAN review)
  - Frontend code splitting (lazy load modules)
  - Image optimization (compress, WebP format)
  - CSS optimization (unused styles removal)
- [ ] Mobile responsiveness
  - Test on iPhone + Android
  - Verify touch interactions (drag-and-drop works on mobile)
  - Font sizes readable on small screens
  - Performance on 4G network
- [ ] Bug fixes (P1/P2 only)
  - Target: Zero P1 bugs, <5 P2 bugs in staging
  - Not fixing: "Nice to have" features (defer to V1.0)

**Deliverables:**
- All critical bugs fixed
- Performance acceptable on 4G network
- Mobile experience working

**Testing:**
- [ ] Lighthouse score: >80 for performance
- [ ] Page load time: <3 seconds on 4G
- [ ] No console errors in production build

---

#### Thursday-Friday: Security Audit & Monitoring Setup

**Tasks:**
- [ ] Security audit (self-assessment)
  - ✅ HTTPS enabled
  - ✅ Passwords hashed (bcrypt)
  - ✅ JWT tokens validated
  - ✅ RBAC enforced
  - ✅ Input validation (no SQL injection)
  - ✅ CSRF protection (for forms)
  - ✅ Rate limiting (prevent abuse)
  - ✅ Error messages don't leak info
  - No plan to hire external pentester for MVP (add Month 6+)
- [ ] Monitoring & alerting
  - Sentry configured (error tracking)
  - DataDog or CloudWatch configured (performance metrics)
  - Uptime monitoring (StatusPage.io)
  - Slack alerts for critical issues
- [ ] Backup & disaster recovery
  - Database backups: Daily, 30-day retention
  - Backup restoration tested (can restore in <1 hour)
  - Runbook: "If production is down, here's what to do"
- [ ] Production checklist
  - [ ] Domain configured (deliversync.com)
  - [ ] SSL certificate installed
  - [ ] Email service set up (support@, noreply@)
  - [ ] Monitoring alerts configured
  - [ ] Team has access to production (limited permissions)
  - [ ] Logging enabled for all critical operations

**Deliverables:**
- Security audit passed
- Monitoring live (alerts working)
- Backup & recovery tested
- Production ready

---

### Phase 5 Go-Live Criteria

**Must Complete Before Week 13 Launch:**
- ✅ Onboarding flow <30 min average completion time
- ✅ Dashboard fully functional + responsive
- ✅ Help content + video library live
- ✅ Email automation configured
- ✅ All P1/P2 bugs fixed
- ✅ Performance acceptable (Lighthouse >80)
- ✅ Security audit passed
- ✅ Monitoring + alerting live
- ✅ 2-3 beta customers signed up + feedback incorporated
- ✅ Landing page + signup live
- ✅ Pricing page + billing flow tested

---

## PHASE 6: Launch & Go-Live (Week 13)

**Goal:** MVP live to public; Founder-led sales begin.  
**Risk:** 🔴 High (production issues can damage reputation)

---

### Week 13: Launch Execution

#### Monday-Tuesday: Pre-Launch Checklist

**Tasks:**
- [ ] Final production deployment
  - Deploy from main branch to production
  - Database migrations run successfully
  - All services healthy (API, frontend, background jobs)
  - Backup successful
- [ ] Smoke testing (on production)
  - Create test account → sign up
  - Create project → add time entries
  - Verify margins calculated
  - Check dashboard loads
  - Try all major features
- [ ] Production monitoring live
  - All dashboards populated with real data
  - Alerts configured + tested
  - On-call rotation: Who handles issues 24/7 this week?
- [ ] Communication plan
  - Email to beta customers: "MVP live today"
  - Social media: Announce launch (LinkedIn, Twitter)
  - Landing page updated: "Now live" badge
- [ ] Founder sales kickoff
  - Email templates ready (cold outreach)
  - CRM configured (HubSpot or Pipedrive)
  - 50+ prospects identified for outreach
  - Demo script practiced

**Deliverables:**
- MVP live on production
- Monitoring + alerting active
- Founder ready to start selling

#### Wednesday-Friday: Post-Launch Stability

**Tasks:**
- [ ] Monitor for critical issues
  - API error rate <0.5%
  - Database response time <200ms
  - No data loss or corruption
  - WebSocket connections stable
- [ ] Customer support ready
  - Support email responding within 2 hours
  - Help content + videos accessible
  - Onboarding calls available (Calendly)
- [ ] Feedback collection
  - In-app feedback form (simple 3-question survey)
  - Email to beta customers: "How's it going? Any issues?"
  - GitHub issues for feature requests
- [ ] Iteration based on feedback
  - If critical issues: Fix immediately
  - If user confusion: Update help content
  - If feature requests: Add to roadmap (not MVP)

**Success Metrics:**
- Zero critical bugs post-launch
- Onboarding completion rate >80%
- Founder closes first customer by end of week 13 or week 14
- Customer support SLA met (email response <24 hours)

---

## Development Team & Responsibilities

### Team Composition

**Tech Lead / Full-Stack Engineer (1 FTE)**
- Owns backend architecture + API design
- Pair programs with frontend engineer
- Code review + quality gate
- DevOps + deployment
- Debugging production issues
- 5-10 years experience
- Cost: $120-150K/year (or $10-12.5K/month for 3 months)

**Frontend Engineer (1 FTE)**
- Owns dashboard UI + user experience
- React components + state management
- Mobile responsiveness
- Performance optimization
- User testing + iteration
- 3-7 years experience
- Cost: $100-130K/year (or $8-11K/month for 3 months)

**DevOps / Infrastructure (0.5 FTE, part-time)**
- Database setup + backups
- CI/CD pipeline configuration
- Server provisioning
- Monitoring + alerting
- Cost: $50-70K/year (or $4-6K/month for 3 months)

**QA / Testing (0.5 FTE, part-time)**
- Test automation
- Manual testing of critical paths
- Performance testing
- Security testing
- Cost: $40-60K/year (or $3-5K/month for 3 months)

**Founder / Product Lead (1 FTE)**
- Product specs + design direction
- Customer feedback + prioritization
- Stakeholder management
- Founder-led sales (weeks 9-13+)

### Total Development Cost
**$25-35K for 3-month MVP sprint** (using contract/part-time rates)

---

## Risk Management & Contingencies

### Top Development Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Forecast model inaccurate (<70%) | Medium (40%) | High | Start with simple model; validate early with 3 beta customers |
| Margin calculation bugs | Medium (50%) | Critical | Unit tests covering 20+ edge cases; manual verification with Excel |
| Performance degradation post-launch | Medium (30%) | High | Load test week 12; database indexing optimization |
| Team member leaves mid-sprint | Low-Medium (20%) | High | Documentation; pair programming; knowledge sharing |
| Scope creep (features added beyond MVP) | High (70%) | High | Hard cutoff at week 9; defer all "nice to haves" |
| Integration (Harvest, QB) breaks | Low (15%) | Medium | Build CSV fallback; test integrations weekly |
| Database corruption / data loss | Low (10%) | Critical | Automated backups; restore test weekly |

### Contingency Plans

**If forecast model <70% accurate:**
- Use simpler model (exponential smoothing instead of ARIMA)
- Show confidence intervals prominently (manage expectations)
- Collect user feedback: "Was forecast accurate?"
- Improve model in V1.0 (post-launch)

**If schedule slips 1-2 weeks:**
- Cut lower-priority features (e.g., QuickBooks integration → defer to V1.0)
- Extend sprint: Extend launch to week 15
- Add contractor if needed

**If critical bug found post-launch:**
- Hotfix deployed within 2 hours
- Customer communication: "We've fixed the issue"
- Root cause analysis: Prevent similar bugs

---

## Weekly Sync & Reporting

### Team Standup (3x/week, 15 min)
- What did we ship this week?
- What are we building this week?
- Any blockers?
- Velocity check: On schedule?

### Sprint Review (Friday, 30 min)
- Demo new features to founder
- Gather feedback
- Update roadmap if needed

### Metrics Tracking
| Metric | Target | Current | Notes |
|--------|--------|---------|-------|
| On-time delivery | 95% | Track weekly | Feature completions vs. plan |
| Code quality | <1 bug per 1K LOC | Monitor via tests | Unit test coverage >80% |
| Performance | <1s page load | Monitor via DataDog | 95th percentile |
| Uptime | 99.5% | Monitor post-launch | Downtime <2.5 hrs/month |

---

## Summary Timeline

```
WEEK 1-2:    Architecture & Auth (Database, API scaffold, user signup)
WEEK 3-4:    Projects + Margin Calc (Core value proposition)
WEEK 5-6:    Profitability Dashboard (Primary UI + reports)
WEEK 7-8:    Resources Module (Capacity + allocation planner)
WEEK 9-10:   Forecasting (AI model + risk scoring + recommendations)
WEEK 11-12:  Onboarding + Polish (Help, videos, bug fixes)
WEEK 13:     Launch (Go-live + Founder-led sales kickoff)

Total: 13 weeks to MVP launch
Expected: Mid/Late Q2 2026
```

---

**Document Version:** 1.0  
**Status:** Ready for Development  
**Last Updated:** January 26, 2026  
**Next Step:** Assemble team + begin Week 1

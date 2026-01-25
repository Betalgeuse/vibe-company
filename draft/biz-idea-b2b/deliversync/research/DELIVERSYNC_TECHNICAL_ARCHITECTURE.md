# DeliverySync - Technical Architecture & System Design

**Version:** 1.0  
**Date:** January 26, 2026  
**Purpose:** Technical blueprint for MVP development (12 weeks)

---

## 1. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    USER LAYER                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────┐         ┌──────────────────────┐    │
│  │  Web Browser     │         │  Mobile (Responsive) │    │
│  │  (React App)     │         │  (Same React App)    │    │
│  │                  │         │                      │    │
│  │  - Dashboard     │         │  - Key metrics only  │    │
│  │  - Forms         │         │  - Touch optimized   │    │
│  │  - Charts        │         │                      │    │
│  └────────┬─────────┘         └──────────┬───────────┘    │
│           │                              │                │
└───────────┼──────────────────────────────┼────────────────┘
            │                              │
            │ HTTPS                        │ HTTPS
            │                              │
┌───────────┼──────────────────────────────┼────────────────┐
│           │    PRESENTATION / API LAYER  │                │
├───────────┼──────────────────────────────┼────────────────┤
│           │                              │                │
│  ┌────────▼──────────────────────────────▼────────┐       │
│  │         Vercel / Netlify (CDN)                 │       │
│  │  - Static assets (JS, CSS, images)            │       │
│  │  - NextJS server-side rendering (optional)    │       │
│  └────────────────────────────────────────────────┘       │
│                                                           │
│  ┌───────────────────────────────────────────────┐       │
│  │   API Server (Node.js + Express + Typescript) │       │
│  │   Deployment: AWS EC2 or Heroku               │       │
│  │                                               │       │
│  │  ┌─────────────────────────────────────────┐ │       │
│  │  │  REST API Endpoints                     │ │       │
│  │  │  - /auth/* (signup, login, tokens)      │ │       │
│  │  │  - /projects/* (CRUD)                   │ │       │
│  │  │  - /time-entries/* (CRUD)               │ │       │
│  │  │  - /resources/* (CRUD)                  │ │       │
│  │  │  - /dashboards/profitability            │ │       │
│  │  │  - /dashboards/capacity                 │ │       │
│  │  │  - /dashboards/forecast                 │ │       │
│  │  │  - /alerts/* (CRUD, subscribe)          │ │       │
│  │  │  - /integrations/* (auth, sync)         │ │       │
│  │  │  - /reports/* (export, generate)        │ │       │
│  │  └─────────────────────────────────────────┘ │       │
│  │                                               │       │
│  │  ┌─────────────────────────────────────────┐ │       │
│  │  │  Business Logic                         │ │       │
│  │  │  - Margin calculation engine            │ │       │
│  │  │  - Capacity/utilization calculation     │ │       │
│  │  │  - Forecasting model                    │ │       │
│  │  │  - Risk scoring logic                   │ │       │
│  │  │  - Recommendation generation            │ │       │
│  │  │  - Alert triggers                       │ │       │
│  │  └─────────────────────────────────────────┘ │       │
│  │                                               │       │
│  │  ┌─────────────────────────────────────────┐ │       │
│  │  │  Job Queue (Bull + Redis)               │ │       │
│  │  │  - Async data processing                │ │       │
│  │  │  - CSV import processing                │ │       │
│  │  │  - Daily forecasting recalc             │ │       │
│  │  │  - Email notifications                  │ │       │
│  │  │  - Integration syncs                    │ │       │
│  │  └─────────────────────────────────────────┘ │       │
│  │                                               │       │
│  │  ┌─────────────────────────────────────────┐ │       │
│  │  │  Authentication & Middleware            │ │       │
│  │  │  - JWT token validation                 │ │       │
│  │  │  - Role-based access control (RBAC)     │ │       │
│  │  │  - Rate limiting                        │ │       │
│  │  │  - Input validation & sanitization      │ │       │
│  │  │  - Error handling                       │ │       │
│  │  └─────────────────────────────────────────┘ │       │
│  │                                               │       │
│  │  ┌─────────────────────────────────────────┐ │       │
│  │  │  External Integrations                  │ │       │
│  │  │  - Harvest API (OAuth, sync)            │ │       │
│  │  │  - QuickBooks API (OAuth, sync)         │ │       │
│  │  │  - OpenAI API (recommendations)         │ │       │
│  │  │  - Slack Webhooks (alerts)              │ │       │
│  │  │  - Email Service (SendGrid/SES)         │ │       │
│  │  └─────────────────────────────────────────┘ │       │
│  │                                               │       │
│  └───────────────────────────────────────────────┘       │
│                                                           │
└───────────────────────────────────────────────────────────┘
            │                              │
            │ SQL + Redis                  │ WebSocket
            │                              │
┌───────────┼──────────────────────────────┼────────────────┐
│           │      DATA LAYER              │                │
├───────────┼──────────────────────────────┼────────────────┤
│           │                              │                │
│  ┌────────▼──────────────────┐           │                │
│  │   PostgreSQL Database     │           │                │
│  │   (AWS RDS or Cloud SQL)  │           │                │
│  │                           │           │                │
│  │  ┌─────────────────────┐  │           │                │
│  │  │  Core Tables:       │  │           │                │
│  │  │  - users            │  │           │                │
│  │  │  - companies        │  │           │                │
│  │  │  - projects         │  │           │                │
│  │  │  - time_entries     │  │           │                │
│  │  │  - resources        │  │           │                │
│  │  │  - allocations      │  │           │                │
│  │  │  - margins (cached) │  │           │                │
│  │  │  - alerts           │  │           │                │
│  │  │  - integrations     │  │           │                │
│  │  └─────────────────────┘  │           │                │
│  │                           │           │                │
│  │  Indexes: project_id,      │           │                │
│  │  company_id, resource_id   │           │                │
│  │  (Optimized for queries)   │           │                │
│  │                           │           │                │
│  └───────────────────────────┘           │                │
│                                          │                │
│  ┌──────────────────────────┐            │                │
│  │   Redis Cache            │            │                │
│  │   (ElastiCache or Cloud) │            │                │
│  │                          │            │                │
│  │  - Session tokens        │            │                │
│  │  - Margin calculations   │            │                │
│  │  - Capacity views        │            │                │
│  │  - Job queue (Bull)      │            │                │
│  │                          │            │                │
│  └──────────────────────────┘            │                │
│                                          │                │
│  ┌──────────────────────────┐            │                │
│  │   WebSocket Server       │◄───────────┘                │
│  │   (Socket.io + Redis)    │                              │
│  │                          │                              │
│  │  Real-time updates:      │                              │
│  │  - Dashboard refresh     │                              │
│  │  - Margin recalc         │                              │
│  │  - Alerts broadcast      │                              │
│  │                          │                              │
│  └──────────────────────────┘                              │
│                                                           │
└───────────────────────────────────────────────────────────┘
            │                              
            │ Backup                       
            │                              
┌───────────┼────────────────────────────────────────────────┐
│           │    INFRASTRUCTURE / BACKUP LAYER               │
├───────────┼────────────────────────────────────────────────┤
│           │                                                │
│  ┌────────▼──────────────┐     ┌──────────────────────┐   │
│  │  Database Backups     │     │  Disaster Recovery   │   │
│  │  (AWS RDS Snapshots)  │     │  (Multi-region prep) │   │
│  │  - Daily automated    │     │  (Post-MVP)          │   │
│  │  - 30-day retention   │     │                      │   │
│  │  - Point-in-time      │     │                      │   │
│  │    restore available  │     │                      │   │
│  └───────────────────────┘     └──────────────────────┘   │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Monitoring & Logging                               │ │
│  │  - Sentry (error tracking)                          │ │
│  │  - DataDog (performance monitoring)                 │ │
│  │  - CloudWatch (AWS logs)                            │ │
│  │  - Slack alerts (critical issues)                   │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack Details

### Frontend

**Core Stack:**
```
React 18                    // UI library
TypeScript                  // Type safety
Vite                       // Build tool (faster than Create React App)
TailwindCSS                // Styling
Next.js (optional)         // Server-side rendering if needed
```

**Libraries:**
```
react-query                // Data fetching & caching
zustand                    // State management
react-hook-form            // Form handling
recharts                   // Charting library
tanstack/react-table       // Advanced tables (sortable, filterable)
axios                      // HTTP client
socket.io-client           // WebSocket client
date-fns                   // Date handling
zod / joi                  // Validation
```

**Testing:**
```
Vitest                     // Unit test framework
React Testing Library      // Component testing
Playwright                 // E2E testing
```

**Deployment:**
```
Vercel                     // Easiest for Next.js
OR
Netlify                    // Alternative, similar features
```

---

### Backend

**Core Stack:**
```
Node.js 18+                // Runtime
Express.js 4               // REST API framework
TypeScript                 // Type safety
PostgreSQL 14+             // Database
Redis 7+                   // Caching & job queue
```

**Libraries:**
```
TypeORM or Prisma          // ORM for database access
Passport.js                // Authentication strategy
jsonwebtoken               // JWT handling
bcryptjs                   // Password hashing
bull                       // Job queue with Redis
socket.io                  // WebSocket server
axios                      // HTTP client for external APIs
dotenv                     // Environment config
winston or pino            // Logging
```

**Testing:**
```
Jest                       // Unit test framework
Supertest                  // HTTP testing
```

**Deployment:**
```
AWS EC2                    // Traditional server, easy to scale
OR
Heroku                     // Simpler management, higher cost
OR
DigitalOcean              // Middle ground cost/ease
```

---

### Data & Cache

**Primary Database:**
```
PostgreSQL 14+
- ACID transactions (important for financial data)
- Strong consistency
- Excellent JSON support (for nested configs)
- Mature ecosystem
- Cost-effective
```

**Caching Layer:**
```
Redis 7+
- Session management
- Calculated data (margin cache)
- Job queue (Bull)
- Real-time publish/subscribe (WebSocket)
- Fast in-memory reads (<1ms)
```

**Cloud Providers:**
```
Database:   AWS RDS, Google Cloud SQL, or Supabase
Redis:      AWS ElastiCache, Heroku Redis, or Upstash
```

---

### AI/Forecasting

**Forecasting Model:**
```
Python 3.9+                // For ML work
scikit-learn               // Exponential smoothing, ARIMA
pandas                     // Data manipulation
joblib                     // Model serialization
```

**Recommendation Engine:**
```
OpenAI API (GPT-4)         // Text generation for recommendations
OR
Anthropic Claude API       // Alternative (similar cost/quality)
```

**Integration Pattern:**
```
1. Train forecasting model in Python (nightly, background job)
2. Serialize model → Redis or S3
3. API loads model → runs prediction
4. OpenAI API call for narrative recommendation
5. Return forecast + recommendation to frontend
```

---

## 3. Database Schema (Detailed)

```sql
-- ============================================
-- AUTHENTICATION & COMPANY MANAGEMENT
-- ============================================

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  fiscal_year_start INT (month, 1-12),
  subscription_tier VARCHAR(50) NOT NULL 
    CHECK (subscription_tier IN ('starter', 'pro', 'enterprise')),
  subscription_status VARCHAR(50) NOT NULL 
    CHECK (subscription_status IN ('active', 'trial', 'cancelled')),
  trial_started_at TIMESTAMP,
  trial_ends_at TIMESTAMP,
  subscription_started_at TIMESTAMP,
  subscription_renews_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_companies_slug ON companies(slug);
CREATE INDEX idx_companies_status ON companies(subscription_status);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) NOT NULL 
    CHECK (role IN ('admin', 'user', 'viewer')),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE UNIQUE INDEX idx_users_email_company ON users(email, company_id);
CREATE INDEX idx_users_company ON users(company_id);
CREATE INDEX idx_users_role ON users(role);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(255) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);

-- ============================================
-- CORE BUSINESS OBJECTS
-- ============================================

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  client_name VARCHAR(255),
  budget_total DECIMAL(12, 2) NOT NULL,
  budget_currency VARCHAR(3) DEFAULT 'USD',
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(50) NOT NULL 
    CHECK (status IN ('active', 'closed', 'on_hold')),
  project_manager_id INT REFERENCES users(id),
  billing_rate_override DECIMAL(8, 2),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_projects_company ON projects(company_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_dates ON projects(start_date, end_date);
CREATE INDEX idx_projects_pm ON projects(project_manager_id);

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  seniority_level VARCHAR(50) NOT NULL 
    CHECK (seniority_level IN ('senior', 'mid', 'junior', 'contractor')),
  billing_rate DECIMAL(8, 2) NOT NULL,
  capacity_hours_per_week DECIMAL(5, 2) DEFAULT 40.0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_resources_company ON resources(company_id);
CREATE INDEX idx_resources_active ON resources(is_active);

CREATE TABLE time_entries (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  resource_id INT NOT NULL REFERENCES resources(id),
  hours DECIMAL(5, 2) NOT NULL,
  billable BOOLEAN DEFAULT true,
  date_worked DATE NOT NULL,
  notes TEXT,
  source VARCHAR(50) DEFAULT 'manual' 
    CHECK (source IN ('harvest', 'manual', 'jira', 'asana', 'quickbooks')),
  external_id VARCHAR(255),
  external_sync_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_time_entries_project ON time_entries(project_id);
CREATE INDEX idx_time_entries_resource ON time_entries(resource_id);
CREATE INDEX idx_time_entries_date ON time_entries(date_worked);
CREATE INDEX idx_time_entries_source ON time_entries(source);

CREATE TABLE resource_allocations (
  id SERIAL PRIMARY KEY,
  resource_id INT NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
  project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  allocated_hours DECIMAL(5, 2) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  recurring BOOLEAN DEFAULT false,
  recurring_pattern VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_allocations_resource ON resource_allocations(resource_id);
CREATE INDEX idx_allocations_project ON resource_allocations(project_id);
CREATE INDEX idx_allocations_dates ON resource_allocations(start_date, end_date);

CREATE TABLE project_expenses (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  description VARCHAR(255) NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  expense_date DATE NOT NULL,
  category VARCHAR(50) 
    CHECK (category IN ('software', 'travel', 'equipment', 'other')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_expenses_project ON project_expenses(project_id);
CREATE INDEX idx_expenses_date ON project_expenses(expense_date);

-- ============================================
-- CALCULATED DATA (MATERIALIZED / CACHED)
-- ============================================

CREATE TABLE project_margins (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  budget_total DECIMAL(12, 2),
  actuals_labor DECIMAL(12, 2),
  actuals_expenses DECIMAL(12, 2),
  margin_dollar DECIMAL(12, 2),
  margin_percent DECIMAL(5, 2),
  margin_trend VARCHAR(10) CHECK (margin_trend IN ('up', 'down', 'stable')),
  forecast_final_margin_percent DECIMAL(5, 2),
  forecast_final_margin_confidence INT,
  days_spent INT,
  days_remaining INT,
  hours_spent DECIMAL(8, 2),
  hours_remaining DECIMAL(8, 2),
  -- Refresh strategy: calculated nightly + on-demand when time entry added
  last_refresh_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_margins_project ON project_margins(project_id);
CREATE INDEX idx_margins_date ON project_margins(calculated_at);

-- ============================================
-- ALERTS & NOTIFICATIONS
-- ============================================

CREATE TABLE alerts (
  id SERIAL PRIMARY KEY,
  company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  alert_type VARCHAR(50) NOT NULL 
    CHECK (alert_type IN ('margin_threshold', 'over_allocation', 'risk_score')),
  project_id INT REFERENCES projects(id),
  resource_id INT REFERENCES resources(id),
  message TEXT NOT NULL,
  severity VARCHAR(50) NOT NULL 
    CHECK (severity IN ('critical', 'warning', 'info')),
  is_read BOOLEAN DEFAULT false,
  user_id INT REFERENCES users(id),
  action_taken VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_alerts_company ON alerts(company_id);
CREATE INDEX idx_alerts_user ON alerts(user_id);
CREATE INDEX idx_alerts_read ON alerts(is_read);
CREATE INDEX idx_alerts_created ON alerts(created_at);

CREATE TABLE alert_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  alert_type VARCHAR(50) NOT NULL,
  delivery_method VARCHAR(50) NOT NULL 
    CHECK (delivery_method IN ('email', 'slack', 'in_app')),
  threshold_value INT,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_subscriptions_user_alert ON 
  alert_subscriptions(user_id, alert_type, delivery_method);

-- ============================================
-- INTEGRATIONS
-- ============================================

CREATE TABLE integrations (
  id SERIAL PRIMARY KEY,
  company_id INT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  platform VARCHAR(50) NOT NULL 
    CHECK (platform IN ('harvest', 'quickbooks', 'jira', 'asana', 'slack')),
  platform_account_id VARCHAR(255),
  api_key_encrypted VARCHAR(500),
  access_token_encrypted VARCHAR(500),
  refresh_token_encrypted VARCHAR(500),
  last_sync_at TIMESTAMP,
  last_sync_status VARCHAR(50) 
    CHECK (last_sync_status IN ('success', 'failed', 'in_progress')),
  last_sync_error TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_integrations_company ON integrations(company_id);
CREATE INDEX idx_integrations_platform ON integrations(platform);

CREATE TABLE integration_sync_logs (
  id SERIAL PRIMARY KEY,
  integration_id INT NOT NULL REFERENCES integrations(id) ON DELETE CASCADE,
  sync_start TIMESTAMP NOT NULL,
  sync_end TIMESTAMP,
  status VARCHAR(50) 
    CHECK (status IN ('success', 'failed', 'in_progress')),
  records_synced INT,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sync_logs_integration ON integration_sync_logs(integration_id);
CREATE INDEX idx_sync_logs_date ON integration_sync_logs(sync_start);
```

---

## 4. API Endpoints (REST)

### Authentication
```
POST   /api/v1/auth/signup
       Body: { email, password, company_name }
       Response: { user, company, token }

POST   /api/v1/auth/login
       Body: { email, password }
       Response: { user, token, refresh_token }

POST   /api/v1/auth/logout
       Headers: Authorization: Bearer <token>
       Response: { success: true }

POST   /api/v1/auth/refresh
       Body: { refresh_token }
       Response: { token, refresh_token }

GET    /api/v1/auth/me
       Headers: Authorization: Bearer <token>
       Response: { user, company }
```

### Projects
```
GET    /api/v1/projects
       Query: ?status=active&client_id=123&page=1&limit=50
       Response: { projects: [], total: 500, page: 1 }

GET    /api/v1/projects/:id
       Response: { project, margin_data, team_allocation }

POST   /api/v1/projects
       Body: { name, client_name, budget_total, start_date, end_date, pm_id }
       Response: { project }

PUT    /api/v1/projects/:id
       Body: { name, budget_total, status, ... }
       Response: { project }

DELETE /api/v1/projects/:id
       Response: { success: true }

GET    /api/v1/projects/:id/margin-history
       Query: ?start_date=2026-01-01&end_date=2026-01-31
       Response: { margins: [] }
```

### Time Entries
```
GET    /api/v1/projects/:projectId/time-entries
       Query: ?resource_id=123&date_from=2026-01-01&date_to=2026-01-31
       Response: { time_entries: [] }

POST   /api/v1/projects/:projectId/time-entries
       Body: { resource_id, hours, billable, date_worked, notes }
       Response: { time_entry }

PUT    /api/v1/time-entries/:id
       Body: { hours, billable, notes }
       Response: { time_entry }

DELETE /api/v1/time-entries/:id
       Response: { success: true }

POST   /api/v1/time-entries/bulk-import
       Body: { source: 'csv', data: [...] }
       Response: { job_id, status, imported: 100, errors: [] }
```

### Resources & Capacity
```
GET    /api/v1/resources
       Response: { resources: [] }

POST   /api/v1/resources
       Body: { name, email, seniority_level, billing_rate, capacity_hours_per_week }
       Response: { resource }

PUT    /api/v1/resources/:id
       Body: { ...fields }
       Response: { resource }

GET    /api/v1/resources/:id/allocations
       Query: ?start_week=2026-01-27&weeks=12
       Response: { allocations: [], utilization_percent: 85 }

GET    /api/v1/capacity/overview
       Query: ?start_week=2026-01-27&weeks=8
       Response: {
         weeks: [{
           week_start: '2026-01-27',
           total_available_hours: 160,
           total_allocated_hours: 136,
           utilization_percent: 85,
           by_resource: [...]
         }]
       }

POST   /api/v1/allocations
       Body: { resource_id, project_id, allocated_hours, start_date, end_date }
       Response: { allocation }

PUT    /api/v1/allocations/:id
       Body: { allocated_hours, start_date, end_date }
       Response: { allocation }

DELETE /api/v1/allocations/:id
       Response: { success: true }
```

### Dashboards
```
GET    /api/v1/dashboards/profitability
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

GET    /api/v1/dashboards/capacity
       Query: ?start_week=2026-01-27&weeks=8
       Response: {
         by_week: [{
           week_start, total_hours, allocated_hours, 
           utilization_percent, by_resource: [...]
         }]
       }

GET    /api/v1/dashboards/forecast
       Response: {
         projects_at_risk: [{
           id, name, current_margin, forecast_margin,
           risk_score, days_remaining, recommendation
         }],
         resource_gaps: [{
           skill_level, hours_needed, hours_available,
           gap_hours, hiring_recommendation
         }]
       }
```

### Alerts
```
GET    /api/v1/alerts
       Query: ?type=margin_threshold&unread=true&limit=20
       Response: { alerts: [], unread_count: 5 }

PUT    /api/v1/alerts/:id
       Body: { is_read: true, action_taken: "Reduced scope" }
       Response: { alert }

POST   /api/v1/alerts/subscribe
       Body: { alert_type: 'margin_threshold', delivery_method: 'email' }
       Response: { subscription }

DELETE /api/v1/alerts/:id
       Response: { success: true }
```

### Integrations
```
GET    /api/v1/integrations
       Response: { integrations: [] }

POST   /api/v1/integrations/harvest/auth
       Body: { redirect_url }
       Response: { auth_url }

POST   /api/v1/integrations/harvest/callback
       Body: { code, state }
       Response: { integration }

POST   /api/v1/integrations/:id/sync
       Response: { job_id, status: 'in_progress' }

GET    /api/v1/integrations/:id/sync-status
       Query: ?job_id=abc123
       Response: { status, records_synced, next_sync_in_minutes }

DELETE /api/v1/integrations/:id
       Response: { success: true }
```

### Reports & Export
```
GET    /api/v1/reports/margin-summary
       Query: ?start_date=2026-01-01&end_date=2026-01-31&format=pdf
       Response: PDF file or JSON data

GET    /api/v1/reports/resource-utilization
       Query: ?start_date=2026-01-01&end_date=2026-01-31&format=csv
       Response: CSV file or JSON data

POST   /api/v1/projects/:id/export-margin-detail
       Body: { format: 'pdf' or 'csv' }
       Response: Exported file
```

---

## 5. Real-Time Updates with WebSockets

**Use Case:** Margin dashboard updates in real-time as team members log hours.

```javascript
// Client (React)
import io from 'socket.io-client';

const socket = io('https://api.deliversync.com', {
  auth: { token: localStorage.getItem('token') }
});

// Subscribe to project margin updates
socket.on('project:margin-updated', (data) => {
  // data = { project_id, new_margin, trend, timestamp }
  // Update React state → re-render dashboard
});

socket.on('project:forecast-updated', (data) => {
  // data = { project_id, forecast_margin, risk_score }
});

socket.on('alert:new', (data) => {
  // data = { alert_id, type, message, severity }
  // Show toast notification
});

// Server (Node.js + Socket.io)
io.on('connection', (socket) => {
  const userId = socket.handshake.auth.userId;
  const companyId = socket.handshake.auth.companyId;

  // Join company room
  socket.join(`company:${companyId}`);

  // When time entry added → recalculate margin → broadcast
  // (triggered from API endpoint)
});

// When API receives new time entry:
const addTimeEntry = async (req, res) => {
  const { projectId, resourceId, hours, date } = req.body;
  
  // 1. Save to database
  const entry = await TimeEntry.create(...);
  
  // 2. Recalculate margin
  const margin = await calculateProjectMargin(projectId);
  
  // 3. Broadcast to all users in company
  io.to(`company:${companyId}`).emit('project:margin-updated', {
    project_id: projectId,
    new_margin: margin,
    timestamp: new Date()
  });
  
  res.json(entry);
};
```

---

## 6. Forecasting Architecture

```
┌─────────────────────────────────────────┐
│  Time Entry Added (API)                 │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Trigger: Job Added to Queue            │
│  "forecast-recalc:project:123"          │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Background Worker (Bull + Redis)       │
│  1. Fetch project actuals (last 4 wks)  │
│  2. Run forecasting model               │
│  3. Calculate risk score                │
│  4. Call OpenAI for recommendation      │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Save Results to Database               │
│  - project_margins.forecast_margin      │
│  - project_margins.forecast_confidence  │
│  - alerts (if risk_score > 7)           │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Broadcast via WebSocket                │
│  "project:forecast-updated"             │
│  Emit to all users in company           │
└─────────────────────────────────────────┘
```

**Forecasting Model (Python):**
```python
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_percentage_error

def forecast_project_margin(project_id: int, days_ahead: int = 30):
    """
    Forecast project margin for next N days based on current actuals trend.
    
    Args:
        project_id: Project to forecast
        days_ahead: Days to forecast (30 or 60)
    
    Returns:
        {
            forecast_margin_percent: float,
            forecast_confidence: int (0-100),
            risk_score: int (1-10),
            recommendation: str
        }
    """
    # 1. Fetch actuals (last 4 weeks)
    actuals = get_project_actuals(project_id, days=28)
    if len(actuals) < 7:
        return None  # Not enough data
    
    # 2. Calculate daily burn rate
    daily_actuals = actuals['daily_cost']  # $ spent per day
    daily_budget = actuals['daily_budget']  # $ budget per day
    daily_margin = daily_budget - daily_actuals
    
    # 3. Fit ARIMA model
    model = ARIMA(daily_margin, order=(1, 0, 1))
    fit = model.fit()
    
    # 4. Forecast
    forecast = fit.get_forecast(steps=days_ahead).summary_frame()
    forecasted_margin = forecast['mean'].sum()  # Sum of forecasted daily margins
    current_margin = actuals['current_margin']
    final_margin = current_margin + forecasted_margin
    
    # 5. Calculate confidence (based on RMSE)
    rmse = fit.mse ** 0.5
    margin_of_error = rmse * 2  # 95% confidence interval
    confidence = max(50, min(95, 100 - int(margin_of_error / final_margin * 100)))
    
    # 6. Risk scoring
    days_remaining = actuals['days_remaining']
    margin_percent = (final_margin / actuals['budget']) * 100
    
    if margin_percent < 0:
        risk_score = 10  # Critical
    elif margin_percent < 10:
        risk_score = 8
    elif margin_percent < 20:
        risk_score = 6
    else:
        risk_score = 3
    
    # Adjust for time: if near end and still low, more urgent
    if days_remaining < 7 and margin_percent < 20:
        risk_score = min(10, risk_score + 2)
    
    return {
        'forecast_margin_percent': round(margin_percent, 1),
        'forecast_confidence': confidence,
        'risk_score': risk_score,
        'recommendation': generate_recommendation(actuals, margin_percent)
    }
```

---

## 7. Security Architecture

**Authentication Flow:**
```
Client Login Request
  │
  ├─→ /api/v1/auth/login (POST)
  │      └─→ Verify email + password (bcrypt)
  │      └─→ Generate JWT token (exp: 1 hour)
  │      └─→ Generate refresh token (exp: 7 days, stored in secure cookie)
  │      └─→ Return tokens + user data
  │
└─→ Subsequent API Calls
     Header: Authorization: Bearer <JWT>
        └─→ Middleware validates token signature
        └─→ Extract user_id, company_id from JWT
        └─→ Verify user.company_id matches request.company_id
        └─→ Check role-based permissions
        └─→ Allow/deny request
```

**RBAC (Role-Based Access Control):**
```
Admin:
  - Create/delete projects
  - Manage team resources
  - View all company data
  - Configure integrations
  - Manage billing
  
User:
  - View projects (own + assigned)
  - Create time entries (own + assigned to team)
  - View dashboards (all)
  - Cannot delete projects
  - Cannot manage billing
  
Viewer:
  - Read-only access to dashboards
  - Cannot create/edit anything
  - Cannot access integrations
```

**Data Protection:**
```
In Transit:
  - HTTPS/TLS 1.2+ for all traffic
  - Certificate pinning (optional, for mobile)

At Rest:
  - API keys encrypted with KMS (Key Management Service)
  - Passwords hashed with bcrypt (12 rounds)
  - Database encryption at rest (RDS, Cloud SQL)
  - Backup encryption (same as primary DB)

Data Isolation:
  - Multi-tenant: Every query filters by company_id
  - Shared database, isolated data
  - No cross-tenant data leakage (enforced at DB level)
```

---

## 8. Performance & Scalability

**Caching Strategy:**
```
Cache Layer 1: Redis (in-memory)
  - Session tokens (1 hour TTL)
  - Calculated margins (updated hourly or on-demand)
  - Capacity views (updated when allocation changes)
  - 95% cache hit rate for dashboards

Cache Layer 2: Browser Cache
  - Static assets (CSS, JS, images) - 1 year TTL
  - API responses - conditional caching (ETag)
  - Service worker for offline capability (future)
```

**Database Optimization:**
```
Indexes (MVP):
  - company_id (all tables) - fast multi-tenant queries
  - project_id (time_entries, expenses, margins)
  - resource_id (time_entries, allocations)
  - date fields (time_entries, margins)
  - status fields (projects, integrations)

Query Optimization:
  - N+1 queries eliminated with JOINs
  - SELECT only needed columns (not SELECT *)
  - Pagination for large result sets (default 50, max 500)
  - Connection pooling (25-50 connections)

Materialized Views:
  - project_margins table (updated nightly + on-demand)
  - Avoids expensive calculations on every dashboard load
  - Trade-off: 1-2 hour stale data vs. sub-second response time
```

**API Performance Targets:**
```
Dashboard Load: <1 second
  - Optimized query joins
  - Redis cache hit
  - CDN-delivered frontend

Margin Calculation: <200ms
  - Pre-calculated in cache
  - Or realtime with indexed queries

Forecast Update: <500ms
  - Model loaded from Redis
  - Quick matrix multiplication
  - OpenAI call parallel in background

Alert Firing: <5 seconds
  - Rule evaluation
  - Email/Slack notification sent async
  - User sees alert in-app immediately
```

**Scalability Plan (Post-MVP):**
```
Stage 1 (MVP, Month 1-3):
  - Single Node.js server
  - Single PostgreSQL database
  - Redis for caching
  - Sufficient for <100 customers

Stage 2 (Month 4-6):
  - Load balancer (Nginx)
  - 2-3 Node.js servers
  - RDS read replicas (for reporting)
  - Database connection pooling

Stage 3 (Month 7-12):
  - Auto-scaling groups (Kubernetes or ECS)
  - RDS multi-AZ failover
  - CloudFront CDN
  - Separate read/write databases (if needed)

Stage 4 (Year 2):
  - Microservices (forecasting, integration sync)
  - Message queue (SQS/RabbitMQ) for async jobs
  - Event streaming (Kafka) for real-time features
```

---

## 9. Monitoring & Observability

**Tools:**
```
Error Tracking:    Sentry
Performance:       DataDog (or New Relic)
Logging:           CloudWatch (AWS) or Stackdriver (GCP)
Uptime:            StatusPage.io
Alerts:            PagerDuty (future) or Slack (MVP)
```

**Key Metrics to Track:**
```
Availability:
  - API uptime (target: 99.5%)
  - Database uptime (target: 99.9%)
  - Frontend uptime (target: 99.9%)

Performance:
  - API response time (p50, p95, p99)
  - Dashboard load time
  - Forecast calculation time
  - Database query time (slow log)

Business:
  - Signups/day
  - Trial-to-paid conversion
  - Active users/day
  - Feature adoption rate
  - Support ticket count
  - Customer NPS
```

**Alerts:**
```
Critical:
  - API error rate >1%
  - Database CPU >80%
  - API response time p95 >2s
  - Forecast model fails to run

Warning:
  - API response time p95 >1s
  - Error rate >0.1%
  - Disk usage >70%
  - Cache hit rate drops <80%
```

---

## Summary: Technology Stack At-A-Glance

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | React + TypeScript + TailwindCSS | Modern, fast, great DX |
| **API Server** | Node.js + Express + TypeScript | Single language, fast to build |
| **Database** | PostgreSQL | ACID, consistency, mature |
| **Cache** | Redis | Fast, in-memory, job queue |
| **Auth** | JWT + bcrypt | Stateless, secure, scalable |
| **Real-Time** | WebSocket (Socket.io) | Live dashboard updates |
| **Forecasting** | Python + scikit-learn + OpenAI | Proven ML, easy integration |
| **Deployment** | Vercel (frontend) + AWS EC2 (backend) | Easy scaling, managed services |
| **Monitoring** | Sentry + DataDog + CloudWatch | Comprehensive observability |
| **Testing** | Jest + Vitest + Playwright | Fast, reliable, comprehensive |

---

**Document Version:** 1.0  
**Status:** Ready for Development  
**Last Updated:** January 26, 2026

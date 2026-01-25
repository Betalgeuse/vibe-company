# Technical Architecture & Implementation Roadmap

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                          FinSurv Architecture                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│   React SPA     │ (Dashboard, Watchlist, Alerts, Settings)
│  + TailwindCSS  │
│  + TypeScript   │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────────────────────┐
│   API Gateway + Load Balancer   │ (AWS ALB / CloudFlare)
│  (Rate limiting, Auth, Logging) │
└────────┬────────────────────────┘
         │
    ┌────┴──────┬────────────┐
    ▼           ▼            ▼
┌────────┐  ┌────────┐  ┌────────┐
│REST    │  │Webhook │  │GraphQL │
│API     │  │Events  │  │(future)│
│/v1/*   │  │        │  │        │
└────┬───┘  └────┬───┘  └────────┘
     │           │
     └─────┬─────┘
           ▼
    ┌─────────────────────┐
    │  Node.js Express    │ (Business Logic)
    │  + TypeScript       │ - Auth Service
    │                     │ - Alert Engine
    │                     │ - Signal Processor
    └────────┬────────────┘
             │
    ┌────────┼──────────┐
    │        │          │
    ▼        ▼          ▼
┌────────┐ ┌───────┐ ┌──────────┐
│PostgreSQL│ │Redis │ │Bull Queue│
│(Metadata)│ │(Cache)│ │(Jobs)    │
└────────┘ └───────┘ └────┬─────┘
                          │
                  ┌───────┴────────┐
                  ▼                ▼
            ┌──────────┐    ┌────────────┐
            │Slack Bot │    │Email Agent │
            │Integration│   │(SendGrid)  │
            └──────────┘    └────────────┘

┌─────────────────────────────────────────────────────────────┐
│           Data Ingestion Layer (Background Jobs)            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  IEX Cloud (Price)  NewsAPI  SEC EDGAR  Redis (Cache)      │
│       ▼                ▼          ▼         ▼               │
│  ┌──────────────────────────────────────────────┐           │
│  │   Lambda / Cron Job Runner (AWS or K8s)     │           │
│  │   - Update price feed (every minute)         │           │
│  │   - Fetch news (every 30 min)               │           │
│  │   - Check SEC 8-K (every 6 hours)           │           │
│  │   - Process signals (real-time from events) │           │
│  └──────────────────────────────────────────────┘           │
│                          ▼                                  │
│                    TimescaleDB                              │
│                 (Time-series DB)                            │
│          Store price/signal history                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────┐
│  Third-Party Integrations            │
├──────────────────────────────────────┤
│ Slack API        → Alert delivery    │
│ SendGrid API     → Email delivery    │
│ Stripe API       → Billing (Future)  │
│ Auth0 / Cognito  → SSO (Future)      │
│ Datadog          → Monitoring        │
│ Sentry           → Error tracking    │
└──────────────────────────────────────┘
```

---

## Technology Stack (MVP)

### Frontend (Web Application)

| Layer | Technology | Why Chosen |
|-------|-----------|-----------|
| **Framework** | React 18+ | Fast, component-driven, large ecosystem |
| **Language** | TypeScript | Type safety, fewer runtime errors |
| **Styling** | TailwindCSS + Headless UI | Rapid UI dev, consistent design system |
| **Charting** | Recharts or Chart.js | Lightweight, real-time capable |
| **HTTP Client** | Axios | Simple REST client, interceptors |
| **State Management** | React Context + Zustand | No Redux boilerplate, sufficient for SMB scale |
| **Build Tool** | Vite | Fast HMR, modern ESM |
| **Testing** | Vitest + React Testing Library | Unit + integration tests, 70%+ coverage |

**Key Libraries:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "axios": "^1.6.0",
    "recharts": "^2.10.0",
    "zustand": "^4.4.0",
    "react-hot-toast": "^2.4.0",
    "date-fns": "^3.0.0"
  }
}
```

### Backend (API Server)

| Layer | Technology | Why Chosen |
|-------|-----------|-----------|
| **Runtime** | Node.js 18 LTS | JavaScript everywhere, fast I/O, great ecosystem |
| **Framework** | Express.js | Lightweight, minimal overhead, industry standard |
| **Language** | TypeScript | Type safety, same language as frontend |
| **Database** | PostgreSQL + TimescaleDB | ACID compliance, time-series extension, JSON support |
| **Cache Layer** | Redis | Sub-millisecond lookups, pub/sub for real-time |
| **Job Queue** | Bull (Redis-backed) | Async job processing, retry logic |
| **Auth** | JWT (short-lived) + Refresh tokens | Stateless, scales horizontally |
| **Validation** | Zod | Runtime type validation |
| **Logging** | Winston | Structured logging, transport to DataDog |
| **Testing** | Jest + Supertest | Unit + integration tests, mocking |

**Key Packages:**
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "pg": "^8.11.0",
    "redis": "^4.6.0",
    "bull": "^4.11.0",
    "jsonwebtoken": "^9.1.0",
    "zod": "^3.22.0",
    "axios": "^1.6.0",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.7.0",
    "supertest": "^6.3.0",
    "@types/node": "^20.10.0"
  }
}
```

### Infrastructure & Deployment

| Component | Technology | Why Chosen |
|-----------|-----------|-----------|
| **Containerization** | Docker + Docker Compose | Local dev environment, CI/CD integration |
| **Orchestration** | AWS ECS or self-managed K8s | Start ECS (simpler), migrate to K8s if needed |
| **App Server** | AWS EC2 (t3.medium) | Cost-effective, reliable |
| **Database** | AWS RDS PostgreSQL | Managed, automated backups, easy scaling |
| **Time-Series DB** | TimescaleDB (on RDS) | PostgreSQL extension, perfect for time-series |
| **Cache** | AWS ElastiCache (Redis) | Managed, high availability |
| **Storage** | AWS S3 | CSV uploads, export files |
| **DNS** | Route 53 | AWS native, good reliability |
| **Monitoring** | DataDog + CloudWatch | Distributed tracing, logs, metrics, alerts |
| **Error Tracking** | Sentry | Real-time error notifications, stack traces |
| **CI/CD** | GitHub Actions | GitHub native, free for open-source |

### Development Tools

| Tool | Purpose |
|------|---------|
| Git + GitHub | Version control, CI/CD |
| Postman / Bruno | API testing |
| pgAdmin | Database administration |
| Swagger UI | API documentation |
| Linter | ESLint + Prettier | Code quality |
| Pre-commit hooks | Husky | Prevent bad commits |

---

## Data Models

### Core Tables (PostgreSQL)

```sql
-- Organizations (Multi-tenancy)
CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    plan ENUM ('pilot', 'starter', 'professional', 'enterprise'),
    max_symbols INTEGER DEFAULT 500,
    max_seats INTEGER DEFAULT 3,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    subscription_status ENUM ('active', 'paused', 'cancelled')
);

-- Users (with RBAC)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role ENUM ('admin', 'analyst', 'viewer') DEFAULT 'analyst',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP,
    UNIQUE(org_id, email)
);

-- Watchlists (Per org)
CREATE TABLE watchlists (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    is_shared BOOLEAN DEFAULT TRUE,
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Watchlist Symbols
CREATE TABLE watchlist_symbols (
    id SERIAL PRIMARY KEY,
    watchlist_id INTEGER NOT NULL REFERENCES watchlists(id) ON DELETE CASCADE,
    symbol VARCHAR(10) NOT NULL,
    quantity NUMERIC,
    entry_price NUMERIC,
    added_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(watchlist_id, symbol)
);

-- Alert Templates (Signal definitions)
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    watchlist_id INTEGER REFERENCES watchlists(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    signal_type ENUM (
        'ma_crossover',
        'volatility_spike',
        'gap_detection',
        'news_spike',
        'regulatory_filing',
        'custom'
    ) NOT NULL,
    condition JSONB NOT NULL, -- e.g., {"type": "sma", "fast": 20, "slow": 50}
    threshold FLOAT,
    enabled BOOLEAN DEFAULT TRUE,
    channels JSONB NOT NULL, -- ["email", "slack"]
    slack_channel_id VARCHAR(50),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Alert Execution Log (Audit trail)
CREATE TABLE alert_logs (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    alert_id INTEGER NOT NULL REFERENCES alerts(id) ON DELETE CASCADE,
    symbol VARCHAR(10) NOT NULL,
    triggered_at TIMESTAMP NOT NULL,
    signal_details JSONB NOT NULL, -- {"price": 234.50, "ma20": 234.20, "ma50": 233.80}
    alert_status ENUM ('triggered', 'acknowledged', 'snoozed', 'dismissed'),
    acknowledged_by INTEGER REFERENCES users(id),
    acknowledged_at TIMESTAMP,
    snoozed_until TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX(org_id, triggered_at DESC),
    INDEX(symbol, triggered_at DESC)
);

-- Price Data (TimescaleDB Hypertable for time-series)
CREATE TABLE price_data (
    symbol VARCHAR(10) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    source VARCHAR(50),
    open FLOAT,
    high FLOAT,
    low FLOAT,
    close FLOAT,
    volume BIGINT,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (symbol, timestamp)
);

-- Convert to hypertable for automatic partitioning
SELECT create_hypertable(
    'price_data',
    'timestamp',
    if_not_exists => TRUE
);

-- News Data
CREATE TABLE news_items (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    headline VARCHAR(500) NOT NULL,
    source VARCHAR(100),
    url TEXT,
    sentiment_score FLOAT, -- -1 to +1
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX(symbol, published_at DESC)
);

-- Sentiment Events
CREATE TABLE sentiment_events (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    source ENUM ('reddit', 'twitter', 'news'),
    event_type ENUM ('spike', 'shift', 'surge'),
    mentions_count INTEGER,
    sentiment_delta FLOAT, -- Change from baseline
    detected_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX(symbol, detected_at DESC)
);

-- Regulatory Events
CREATE TABLE regulatory_events (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    event_type ENUM ('8k_filing', 'insider_transaction', 'earnings_date'),
    event_details JSONB, -- Filing URL, details, etc
    announced_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX(symbol, announced_at DESC)
);

-- Audit Log (For compliance)
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    org_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    action VARCHAR(255), -- 'alert_created', 'alert_triggered', 'user_acknowledged'
    resource_type VARCHAR(50), -- 'alert', 'watchlist', 'user'
    resource_id INTEGER,
    details JSONB,
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX(org_id, created_at DESC)
);
```

---

## API Design (REST + OpenAPI)

### Authentication

```
POST /api/v1/auth/signup
Body: { email, password, organization_name }
Response: { access_token, refresh_token, user }

POST /api/v1/auth/login
Body: { email, password }
Response: { access_token, refresh_token, user }

POST /api/v1/auth/refresh
Body: { refresh_token }
Response: { access_token }

GET /api/v1/auth/me
Headers: Authorization: Bearer {access_token}
Response: { user, org }
```

### Watchlist Endpoints

```
GET /api/v1/watchlists
Response: { watchlists: [{id, name, symbol_count, ...}] }

POST /api/v1/watchlists
Body: { name, description }
Response: { watchlist }

GET /api/v1/watchlists/:id
Response: { watchlist, symbols: [{symbol, quantity, price}] }

POST /api/v1/watchlists/:id/symbols
Body: { symbols: ["AAPL", "MSFT"], csv_import?: File }
Response: { imported_count, failed_symbols }

DELETE /api/v1/watchlists/:id/symbols/:symbol
Response: { success: true }
```

### Alert Endpoints

```
GET /api/v1/alerts
Query: { watchlist_id?, signal_type?, limit, offset }
Response: { alerts: [{id, name, signal_type, enabled, ...}], total }

POST /api/v1/alerts
Body: { 
    watchlist_id,
    name,
    signal_type,
    condition,
    threshold,
    channels: ["email", "slack"],
    slack_channel_id
}
Response: { alert }

GET /api/v1/alerts/:id/logs
Query: { limit, offset, symbol }
Response: { logs: [{triggered_at, signal_details, acknowledged_at, ...}], total }

POST /api/v1/alerts/:id/acknowledge
Body: { log_id }
Response: { acknowledged_at }

POST /api/v1/alerts/:id/snooze
Body: { log_id, snooze_minutes: 60 }
Response: { snoozed_until }
```

### Market Data Endpoints

```
GET /api/v1/symbols/:ticker/price
Query: { interval: "1m" | "1h" | "1d", limit: 100 }
Response: { prices: [{timestamp, open, high, low, close, volume}] }

GET /api/v1/symbols/:ticker/technicals
Query: { indicators: "sma,rsi,bollinger" }
Response: { indicators: { sma: {...}, rsi: {...} } }

GET /api/v1/symbols/:ticker/news
Query: { limit: 20, offset: 0 }
Response: { news: [{headline, source, sentiment, url, published_at}] }

GET /api/v1/symbols/:ticker/regulatory
Query: { event_types: "8k,insider" }
Response: { events: [{event_type, details, announced_at}] }
```

### Reports Endpoints

```
GET /api/v1/reports/dashboard
Response: {
    active_alerts_count,
    triggered_this_week,
    top_symbols,
    signal_effectiveness: { by_type, by_watchlist }
}

GET /api/v1/reports/monthly
Response: {
    position_summary: { top_10: [...] },
    activity_log: { trades, rebalances, alerts_triggered },
    signal_performance: { roi_by_signal, win_rate }
}

POST /api/v1/reports/export
Body: { format: "csv" | "json", report_type: "positions" | "alerts" }
Response: { file_url }
```

### Audit & Compliance

```
GET /api/v1/audit-logs
Query: { action?, resource_type?, date_from, date_to, limit, offset }
Headers: Authorization: Bearer {access_token} (Admin only)
Response: { logs: [{user, action, resource, timestamp, details}], total }
```

---

## MVP Development Timeline (9 Weeks)

### Week 1-3: Backend + Data Pipeline (3 weeks)

**Week 1: Project Setup + Auth**
- [ ] Project boilerplate (Node.js + Express, TypeScript config)
- [ ] PostgreSQL schema creation (organizations, users, watchlists, alerts)
- [ ] JWT auth implementation (signup, login, token refresh)
- [ ] RBAC middleware (admin, analyst, viewer roles)
- [ ] Docker setup (local dev, docker-compose.yml)
- [ ] Test infrastructure (Jest, Supertest)

**Week 2: Core API + Data Ingestion**
- [ ] Watchlist CRUD endpoints
- [ ] Symbol search + import (CSV parsing)
- [ ] Price data ingestion pipeline (IEX Cloud API)
- [ ] Alert template CRUD
- [ ] Redis caching layer (price lookups, org settings)
- [ ] TimescaleDB setup + time-series data model

**Week 3: Signal Processing + Alert Logic**
- [ ] Signal processor engine (MA crossover, volatility, gap detection)
- [ ] News aggregation (NewsAPI integration)
- [ ] SEC EDGAR scraper (8-K filings)
- [ ] Alert triggering logic (evaluate conditions, store in alert_logs)
- [ ] Bull queue setup (job scheduling, retries)
- [ ] Audit logging middleware

**End of Week 3 Deliverables:**
- ✅ All API endpoints (90% complete)
- ✅ Data pipeline flowing
- ✅ Signal triggers working (manual testing)
- ✅ Database fully populated with schema

---

### Week 4-5: Frontend Dashboard (2 weeks)

**Week 4: Core UI + Navigation**
- [ ] React app scaffold (Vite, TypeScript)
- [ ] Layout template (sidebar nav, main content area)
- [ ] Auth pages (signup, login, password reset)
- [ ] Context/Zustand setup (auth state, org state)
- [ ] Tailwind styling + component library
- [ ] API client + interceptors (Axios + JWT refresh)

**Week 5: Dashboard Pages**
- [ ] Dashboard home (summary cards, recent alerts)
- [ ] Watchlist page (list, create, edit, delete)
- [ ] Alerts page (create, enable/disable, logs)
- [ ] Alert logs viewer (trigger history, acknowledge, snooze)
- [ ] Settings page (user profile, notification preferences)
- [ ] Charting integration (Recharts for price trends)

**End of Week 5 Deliverables:**
- ✅ All frontend pages functional
- ✅ API integration complete
- ✅ Responsive design (desktop first)
- ✅ Error handling + loading states

---

### Week 6-8: Integration + Testing (3 weeks)

**Week 6: Slack Integration + Email**
- [ ] Slack bot setup (OAuth, permissions)
- [ ] Alert delivery to Slack channels (real-time)
- [ ] Email alerts (SendGrid integration)
- [ ] Webhook support (Phase 1 basic, Phase 2 expansion)
- [ ] Frontend "Connect Slack" UI
- [ ] Test Slack/Email notifications end-to-end

**Week 7: Testing + Bug Fixes**
- [ ] Unit tests (API handlers, signal logic, auth)
- [ ] Integration tests (API flow, database)
- [ ] Frontend component tests (Dashboard, Watchlist)
- [ ] E2E tests (Cypress: auth → create watchlist → receive alert)
- [ ] Load testing (BullMQ under 100 concurrent alerts)
- [ ] Security audit (OWASP, SQL injection, XSS)

**Week 8: Performance + Monitoring**
- [ ] Optimize database queries (indexes, query plans)
- [ ] Redis caching strategies
- [ ] Frontend bundle optimization (code splitting, lazy loading)
- [ ] DataDog setup (APM, logs, metrics, alerting)
- [ ] Sentry integration (error tracking, alerts)
- [ ] Uptime monitoring (Uptime Robot)

**End of Week 8 Deliverables:**
- ✅ All features integrated and tested
- ✅ Alert latency < 100ms
- ✅ Dashboard load < 2 seconds
- ✅ >70% test coverage
- ✅ Monitoring + alerting active

---

### Week 9: Polish + Documentation (1 week)

**Week 9: Final Polish**
- [ ] Bug fixes (QA pass, customer feedback from early beta)
- [ ] Documentation (API docs, Swagger UI, README)
- [ ] Deployment automation (CI/CD, Docker, AWS)
- [ ] Security hardening (helmet, CORS, rate limiting)
- [ ] Compliance documentation (SOC2 roadmap, DPA template)
- [ ] Launch checklist (backup, disaster recovery, runbooks)

**End of Week 9 Deliverables:**
- ✅ MVP production-ready
- ✅ API documented (OpenAPI/Swagger)
- ✅ Deployment automated (GitHub Actions → AWS)
- ✅ Team runbooks + troubleshooting guide

---

## Deployment & Operations (MVP)

### Development Environment

```bash
# Local setup (5 min)
git clone <repo>
cd finsurvey-backend
cp .env.example .env
docker-compose up -d
npm install && npm run dev

# Runs on localhost:3000 (API) + localhost:3001 (Frontend)
```

### Production Deployment (AWS)

```
┌─────────────────────────────────────────────┐
│         GitHub Actions (CI/CD)              │
│  - On push to main: build + test + deploy  │
└────────────────┬────────────────────────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
    Build Docker    Run Tests
    Images          (Jest + E2E)
        │                 │
        └────────┬────────┘
                 ▼
        Deploy to AWS ECS
        - Frontend (S3 + CloudFront)
        - API (ECS Fargate)
        - Database (RDS)
        - Cache (ElastiCache)
```

### Infrastructure as Code (Terraform)

```hcl
# terraform/main.tf
provider "aws" {
  region = "us-east-1"
}

# RDS PostgreSQL + TimescaleDB
resource "aws_db_instance" "postgres" {
  allocated_storage    = 100
  db_name              = "finsurvey"
  engine               = "postgres"
  engine_version       = "15"
  instance_class       = "db.t3.medium"
  username             = "admin"
  password             = var.db_password
  skip_final_snapshot  = false
  
  # Extensions for TimescaleDB
  db_parameter_group_name = "custom-postgres-15"
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "finsurvey-redis"
  engine               = "redis"
  engine_version       = "7.0"
  node_type            = "cache.t3.small"
  num_cache_nodes      = 1
  port                 = 6379
  parameter_group_name = "default.redis7"
}

# ECS Fargate for API
resource "aws_ecs_service" "api" {
  name            = "finsurvey-api"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 2
  launch_type     = "FARGATE"
  
  network_configuration {
    subnets          = var.private_subnets
    security_groups  = [aws_security_group.ecs.id]
    assign_public_ip = false
  }
}

# S3 + CloudFront for Frontend
resource "aws_s3_bucket" "frontend" {
  bucket = "finsurvey-frontend-prod"
}

resource "aws_cloudfront_distribution" "frontend" {
  origin {
    domain_name = aws_s3_bucket.frontend.bucket_regional_domain_name
    origin_id   = "finsurvey-s3"
  }
  
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "finsurvey-s3"
    
    viewer_protocol_policy = "redirect-to-https"
  }
  
  enabled = true
}
```

### Monitoring & Alerting

**DataDog Dashboard:**
- API response time (p50, p95, p99)
- Error rate (4xx, 5xx by endpoint)
- Database query performance
- Redis latency + eviction rate
- Alert triggering latency
- Slack delivery success rate

**Sentry Alerts:**
- Error spike (>10 per minute)
- New error types
- High-severity issues (500s)

**Custom Alerts:**
- Alert latency > 100ms
- Signal false positive rate > 20%
- Database CPU > 80%
- Redis memory > 80%

---

## Security Checklist (MVP)

### Authentication & Authorization

- [✅] JWT tokens (short-lived: 15 min)
- [✅] Refresh tokens (long-lived: 7 days, httpOnly)
- [✅] Password hashing (bcrypt, 10 rounds)
- [✅] RBAC (3 roles: admin, analyst, viewer)
- [✅] Rate limiting (5 login attempts / 15 min per IP)
- [✅] Session invalidation on logout

### Data Security

- [✅] Encryption in transit (TLS 1.3)
- [✅] Encryption at rest (AES-256 for sensitive fields)
- [✅] Multi-tenant isolation (org_id in every query)
- [✅] SQL injection prevention (parameterized queries)
- [✅] CORS policy (whitelist specific origins)
- [✅] CSRF tokens on state-changing requests

### Audit & Compliance

- [✅] Audit logging (all user actions)
- [✅] Data retention policy (7-year hedge fund standard)
- [✅] Data deletion on request (GDPR compliance)
- [✅] DPA (Data Processing Agreement) template
- [✅] Privacy policy + Terms of Service

### Infrastructure

- [✅] Helmet.js (security headers)
- [✅] Rate limiting (API-wide 100 req/min per user)
- [✅] DDoS protection (CloudFlare)
- [✅] Backup strategy (automated daily to S3)
- [✅] Disaster recovery plan (RTO: 4 hrs, RPO: 1 hr)

### Phase 2 (Year 2)

- [ ] SOC2 Type II certification
- [ ] SSO/SAML support
- [ ] Advanced encryption (key rotation)
- [ ] Penetration testing
- [ ] Compliance audit (annual)

---

## Operational Runbooks

### Incident Response

**Alert Latency High (>200ms)**
1. [ ] Check BullMQ queue depth (Redis)
2. [ ] Check database connection pool
3. [ ] Check API pod CPU/memory
4. [ ] Scale ECS tasks if needed
5. [ ] Notify customers (status page)

**Database Performance Degraded**
1. [ ] Check slow query log (DataDog)
2. [ ] Identify problematic query
3. [ ] Add index if needed
4. [ ] Roll back if recent schema change

**Signal False Positive Rate >20%**
1. [ ] Check signal logic (thresholds)
2. [ ] Compare with historical data
3. [ ] Adjust parameters (lower sensitivity)
4. [ ] Notify affected customers

**Slack Delivery Failing**
1. [ ] Check Slack API rate limits
2. [ ] Verify bot permissions
3. [ ] Check network (VPC routing)
4. [ ] Fallback to email delivery

---

## Success Criteria (MVP Complete)

### Functionality

- ✅ All P0 features working end-to-end
- ✅ All P1 features partially (UI exists, backend 90%)
- ✅ Alert latency < 100ms (trigger to Slack)
- ✅ Dashboard load < 2 seconds
- ✅ API response time < 500ms (p95)

### Quality

- ✅ >70% test coverage (unit + integration)
- ✅ No critical bugs (backlog of non-critical only)
- ✅ Security audit passed
- ✅ Performance tested under 100 concurrent users

### Operational

- ✅ Deployment automated (CI/CD)
- ✅ Monitoring + alerting active
- ✅ Backup + disaster recovery tested
- ✅ Runbooks documented
- ✅ On-call rotation defined

### Documentation

- ✅ API docs (OpenAPI/Swagger)
- ✅ Database schema (ERD)
- ✅ Architecture decision records (ADRs)
- ✅ Deployment guide
- ✅ Troubleshooting runbooks

---

**Status:** Ready for development  
**Version:** 1.0  
**Last Updated:** 2026-01-25  
**Next Phase:** Pilot deployment (Week 10-12)

# CollectIQ - Tech Stack & Architecture Specification

## 🏗️ System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend Layer (React/Next.js)          │
│  ├─ Auth Dashboard (JWT-protected)                              │
│  ├─ Invoice Management & Aging Reports                          │
│  ├─ AI Reminder Builder & Scheduler                             │
│  ├─ Customer Portal (Public, No Auth)                           │
│  ├─ Settings (User Mgmt, Integrations, Webhooks)                │
│  └─ Mobile-Responsive UI (Tailwind CSS)                         │
└──────────────────────────────────────────┬──────────────────────┘
                                           │ REST API + WebSockets
┌──────────────────────────────────────────▼──────────────────────┐
│                  Backend API Layer (Node.js/FastAPI)            │
│  ├─ Auth Service (OAuth 2.0, JWT, Refresh Tokens)              │
│  ├─ Invoice Service (Fetch, Sync, Store, Update)               │
│  ├─ Payment Service (Stripe API, Portal Management)            │
│  ├─ Prediction Service (ML Model Inference)                    │
│  ├─ Notification Service (Email, SMS, Slack, Webhooks)         │
│  ├─ Reporting Service (DSO, Aging, Trend Analysis)             │
│  ├─ Integration Service (Xero, QBO API managers)               │
│  └─ Audit & Compliance Layer (Logging, Data Governance)        │
└──────────────────────────────────────────┬──────────────────────┘
                    │                      │                      │
        ┌───────────┼──────────────┬───────┼──────────┬───────────┤
        │           │              │       │          │           │
   ┌────▼──┐  ┌────▼────┐  ┌─────▼──┐ ┌──▼────┐ ┌──▼──┐  ┌─────▼─┐
   │ PostSQL│  │ Redis   │  │ S3/GCS │ │Stripe │ │ Xero│  │ QBO   │
   │ (Data) │  │ (Cache) │  │(Export)│ │ API   │ │ API │  │ API   │
   └────────┘  └─────────┘  └────────┘ └───────┘ └─────┘  └───────┘
```

---

## 💻 Technology Stack Recommendations

### Frontend
| Component | Technology | Why | Alternative |
|-----------|-----------|-----|-------------|
| Framework | Next.js 14+ (React) | SSR, API routes, fast deployment | Remix, SvelteKit |
| UI Library | Shadcn/ui + Tailwind CSS | Accessible, pre-built components, rapid dev | Material-UI, Chakra |
| State Management | TanStack Query (React Query) | Server-side state; perfect for data fetching | Zustand (if minimal state) |
| Forms | React Hook Form | Lightweight, integrates with TypeScript | Formik, Zod validation |
| Charts | Recharts | Simple dashboards (DSO trend, aging report) | Chart.js, Apache ECharts |
| Icons | Lucide React | Clean, customizable, accessible | Heroicons, Bootstrap Icons |
| **Language** | **TypeScript** | Type safety, better DX, fewer bugs | JavaScript (not recommended) |

**Key Libraries:**
```json
{
  "next": "^14.0",
  "react": "^18.0",
  "react-query": "^3.39",
  "react-hook-form": "^7.45",
  "zod": "^3.22",
  "tailwindcss": "^3.3",
  "shadcn-ui": "^0.4",
  "axios": "^1.4",
  "date-fns": "^2.30",
  "recharts": "^2.8"
}
```

**Deployment:**
- Vercel (Recommended for Next.js, free tier, auto-scaling)
- AWS Amplify (alternative, slightly more complex)

---

### Backend API
| Component | Technology | Why | Alternative |
|-----------|-----------|-----|-------------|
| **Framework** | **Node.js + Express.js** (or **FastAPI** if Python) | Fast, event-driven, huge ecosystem | FastAPI for ML/async; Django for full-featured |
| Language | TypeScript (Node) or Python 3.10+ (FastAPI) | Type safety, performance, readability | JavaScript (not for prod), Go (overkill) |
| ORM | Prisma (Node) / SQLAlchemy (Python) | Type-safe queries, auto-migrations | TypeORM, Sequelize |
| Validation | Zod (Node) / Pydantic (Python) | Schema validation, type inference | Joi, Cerberus |
| Authentication | jsonwebtoken + passport (Node) / FastAPI + PyJWT (Python) | Industry-standard; OAuth 2.0 compatible | Auth0 (external), Firebase Auth |
| Task Queue | Bull (Redis-backed, Node) / Celery (RabbitMQ, Python) | Async jobs (email, dunning, syncing) | Temporal, Apache Airflow (overkill) |
| Logging | Winston (Node) / Python logging + ELK | Centralized logs; compliance + debugging | Bunyan, Log4j |

**Node.js Stack (Recommended for Speed):**
```json
{
  "express": "^4.18",
  "typescript": "^5.0",
  "prisma": "^5.0",
  "passport": "^0.6",
  "jsonwebtoken": "^9.0",
  "bull": "^4.11",
  "axios": "^1.4",
  "stripe": "^13.0",
  "nodemailer": "^6.9",
  "dotenv": "^16.3"
}
```

**Python FastAPI Stack (Alternative, Better for ML):**
```
fastapi==0.103.0
sqlalchemy==2.0
pydantic==2.3
sqlalchemy-async==0.21
redis==5.0
celery==5.3
python-jose==3.3
passlib==1.7
stripe==5.4
```

---

### Database
| Component | Technology | Why | Alternative |
|-----------|-----------|-----|-------------|
| **Primary DB** | **PostgreSQL 14+** | ACID, JSONB for flexible schema, PostGIS for future geo | MySQL (less feature-rich), MongoDB (eventual consistency risk) |
| **Cache Layer** | **Redis 6+** | In-memory caching, sessions, rate limiting, job queue | Memcached (simpler), DynamoDB (AWS-only) |
| **Data Warehouse** | **BigQuery** (Google) or **Snowflake** | Analytics, cohort analysis, reporting (Month 6+) | Redshift, ClickHouse |

**PostgreSQL Schema (MVP):**
```sql
-- Core tables
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  org_id UUID NOT NULL,
  role ENUM('owner', 'manager', 'specialist'),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE organizations (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  xero_tenant_id VARCHAR(255),
  qbo_realm_id VARCHAR(255),
  payment_portal_url VARCHAR(255),
  stripe_account_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  invoice_number VARCHAR(100),
  customer_id UUID,
  amount DECIMAL(12,2),
  issued_date DATE,
  due_date DATE,
  paid_date DATE NULL,
  status ENUM('draft', 'sent', 'paid', 'overdue'),
  predicted_payment_date DATE,
  payment_risk_level ENUM('low', 'medium', 'high'),
  last_synced_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(org_id, invoice_number)
);

CREATE TABLE reminders (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  invoice_id UUID REFERENCES invoices(id),
  reminder_type ENUM('email', 'sms', 'slack'),
  tone ENUM('soft', 'professional', 'firm'),
  scheduled_at TIMESTAMP,
  sent_at TIMESTAMP NULL,
  open_count INT DEFAULT 0,
  click_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE customers (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  name VARCHAR(255),
  email VARCHAR(255),
  payment_history JSONB,
  avg_payment_days INT,
  total_invoices INT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  action VARCHAR(255),
  entity_type VARCHAR(100),
  entity_id UUID,
  old_value JSONB,
  new_value JSONB,
  timestamp TIMESTAMP DEFAULT NOW()
);
```

**Indexing Strategy:**
```sql
CREATE INDEX idx_invoices_org_status ON invoices(org_id, status);
CREATE INDEX idx_invoices_due_date ON invoices(due_date);
CREATE INDEX idx_reminders_org_scheduled ON reminders(org_id, scheduled_at);
CREATE INDEX idx_audit_logs_org_timestamp ON audit_logs(org_id, timestamp);
```

---

### Integrations & External APIs

| Service | Integration | Priority | Notes |
|---------|-------------|----------|-------|
| **Xero** | OAuth 2.0 + REST API | P0 | Fetch invoices, mark paid, read customer data |
| **QuickBooks Online** | OAuth 2.0 + REST API | P0 | Fetch invoices, mark paid, read customer data |
| **Stripe** | Stripe.js (frontend) + REST API (backend) | P0 | Payment processing in portal |
| **SendGrid** | REST API (transactional email) | P0 | Email reminder delivery |
| **Twilio** | REST API (SMS) | P1 | SMS reminders for overdue (60+ days) |
| **Slack** | Webhooks + OAuth (Slack App) | P1 | Notifications for overdue invoices, payments received |
| **AWS S3** | AWS SDK | P0 | Store exports, PDFs, documents |
| **Datadog** (monitoring) | APM SDK | P1 | Performance monitoring, error tracking |

**API Rate Limit Handling:**
```javascript
// Example: Xero rate limit = 60 requests/min
const xeroRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 60 seconds
  max: 60,
  message: 'Too many requests to Xero API'
});

// Implement circuit breaker for upstream APIs
const circuitBreaker = new CircuitBreaker(async () => {
  return await xeroApi.getInvoices();
}, {
  timeout: 5000,
  errorThreshold: 50,
  resetTimeout: 30000
});
```

---

### Machine Learning (Payment Prediction Model)

| Component | Technology | Why | Alternative |
|-----------|-----------|-----|-------------|
| **Model Framework** | scikit-learn (simple) / XGBoost (better accuracy) | Fast training, interpretable, production-ready | TensorFlow (overkill), PyTorch (overkill) |
| **Training** | Python + Jupyter Notebooks | Data exploration, model iteration | MLflow (if managing multiple versions) |
| **Inference Server** | FastAPI + ONNX Runtime or TensorFlow Serving | Low-latency predictions (<100ms) | Seldon, KServe |
| **Model Registry** | MLflow or DVC | Version control, experiment tracking | Weights & Biases, Neptune |

**Model Architecture (MVP):**

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
import joblib

# Features for prediction
features = [
    'invoice_age_days',          # Days since invoice issued
    'customer_avg_payment_days', # Avg days to pay (historical)
    'invoice_amount_percentile', # Is this a large/small invoice for them?
    'customer_invoice_count',    # How many invoices do they have?
    'payment_history_score',     # 0-100: on-time vs late history
    'day_of_week_issued',        # Day invoices tend to be paid (Tue vs Fri)
    'month_of_year'              # Seasonal effects
]

# Training data: Historical invoices with outcome (paid on-time Y/N)
# Target: 1 = will pay late (60+ days), 0 = will pay on-time

model = LogisticRegression(max_iter=1000)
# Alternative: RandomForestClassifier(n_estimators=100, max_depth=10)

model.fit(X_train[features], y_train)

# Inference for new invoice
def predict_payment_risk(invoice_dict):
    X = pd.DataFrame([invoice_dict])
    X = scaler.transform(X)
    
    prob = model.predict_proba(X)[0][1]  # Probability of late payment
    
    if prob > 0.7:
        return 'high'  # Red: aggressive reminders
    elif prob > 0.4:
        return 'medium'  # Yellow: moderate reminders
    else:
        return 'low'  # Green: gentle reminders
        
# Save model
joblib.dump(model, 'payment_risk_model.pkl')
```

**Inference API (FastAPI):**
```python
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load('payment_risk_model.pkl')

@app.post('/predict-risk')
async def predict_risk(invoice: Invoice):
    risk_level = predict_payment_risk(invoice.dict())
    return {
        'invoice_id': invoice.id,
        'risk_level': risk_level,
        'recommended_tone': get_recommended_tone(risk_level)
    }
```

**Accuracy Target for MVP:**
- 85%+ accuracy in predicting late vs on-time
- ROC-AUC ≥ 0.80

**Retraining Schedule:**
- Initial: Synthetic data + anonymized customer data
- Month 1-2: Real data from first 10 design partners
- Month 3+: Monthly retraining (growing dataset)

---

### Deployment & Infrastructure

| Component | Technology | Why | Cost Estimate |
|-----------|-----------|-----|----------------|
| **Hosting (Backend)** | AWS EC2 (t3.micro) or Heroku | Scalable, reliable, auto-scaling | $20-50/month (free tier) |
| **Database** | AWS RDS (PostgreSQL) | Managed, backups, high availability | $15-30/month (free tier) |
| **Cache** | ElastiCache (Redis) or Upstash | Managed Redis, simple integration | $10-20/month (serverless cheaper) |
| **CDN** | CloudFlare | DDoS protection, fast static delivery | Free/paid |
| **Email Service** | SendGrid | Reliable, high delivery rate, analytics | Free tier 100 emails/day |
| **Storage** | AWS S3 | Document storage, backups, exports | <$1/month (MVP scale) |
| **Monitoring** | Datadog or New Relic | APM, error tracking, alerts | Free tier or $20-50/month |
| **CI/CD** | GitHub Actions | Free with GitHub, simple workflows | Free |

**Deployment Strategy:**
```yaml
# GitHub Actions CI/CD
name: Deploy to AWS
on: [push to main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test
      - run: npm run lint
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - run: docker build -t collectiq:latest .
      - run: docker push to ECR
      - run: AWS CodeDeploy to EC2
```

**Infrastructure as Code (Terraform):**
```hcl
# Example: Provision RDS + EC2 + S3
provider "aws" { region = "us-east-1" }

resource "aws_db_instance" "postgres" {
  allocated_storage    = 20
  engine              = "postgres"
  instance_class      = "db.t3.micro"
  username            = var.db_user
  password            = var.db_password
  skip_final_snapshot = false
}

resource "aws_ec2_instance" "api_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  key_name      = aws_key_pair.deployer.key_name
}

resource "aws_s3_bucket" "exports" {
  bucket = "collectiq-exports"
}
```

---

### Security & Compliance

| Layer | Implementation | Details |
|-------|-----------------|---------|
| **Data Encryption (In Transit)** | TLS 1.3 (HTTPS/WSS) | All API calls encrypted |
| **Data Encryption (At Rest)** | AES-256 (AWS KMS or application-level) | Database + S3 encrypted |
| **Authentication** | OAuth 2.0 (Xero/QBO login) + JWT | Industry-standard; RFC 6749 compliant |
| **Authorization** | Role-based access control (RBAC) | 3 roles: Owner, Manager, Specialist |
| **API Security** | Rate limiting, CORS, input validation | 1000 req/min per API key |
| **Audit Logging** | All user actions logged (immutable) | Retention: 7 years (compliance) |
| **PCI DSS** | Stripe handles payment data (never touch it) | Level 1 compliance via Stripe |
| **SOC2 Type II** | Start Year 1, complete Year 2 | Encrypted data, access logs, incident response |

**Example: JWT Token Validation**
```javascript
const jwtOptions = {
  secret: process.env.JWT_SECRET,
  expiresIn: '15m',
  refreshExpiresIn: '7d'
};

// Middleware to verify token
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('No token');
  
  jwt.verify(token, jwtOptions.secret, (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
});
```

---

### Development Workflow & Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **Git** | Version control | Branching: main, staging, feature branches |
| **GitHub** | Repository + Issues + Actions | Project management + CI/CD |
| **VS Code** | Editor | Extensions: Prettier, ESLint, GitLens |
| **Postman/Insomnia** | API testing | Document endpoints, test integration |
| **Docker** | Containerization | Dev environment consistency, deployment |
| **Docker Compose** | Local dev setup | PostgreSQL, Redis, API all run locally |
| **Prisma Studio** | Database GUI | Visual DB management during development |

**Local Development Setup:**
```bash
# Clone repo
git clone https://github.com/collectiq/collectiq.git

# Install dependencies
npm install

# Start local services (Docker Compose)
docker-compose up

# Run migrations
npx prisma migrate deploy

# Start dev server
npm run dev  # Runs on http://localhost:3000
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: password
    ports:
      - '5432:5432'
  
  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
  
  api:
    build: ./backend
    ports:
      - '3001:3001'
    depends_on:
      - postgres
      - redis
    environment:
      DATABASE_URL: postgresql://postgres:password@postgres:5432/collectiq
```

---

## 📊 Performance Targets

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **API Response Time (p95)** | <500ms | Datadog APM |
| **Dashboard Load Time** | <2s | Lighthouse, WebPageTest |
| **Invoice Sync Latency** | <5 min (real-time) | Transaction logs |
| **Payment Portal Load Time** | <1.5s | Lighthouse (public route) |
| **Prediction Inference Time** | <100ms | CloudWatch logs |
| **Email Delivery Rate** | >99.5% | SendGrid analytics |
| **Uptime SLA** | 99.9% | Datadog uptime monitor |

---

## 🔄 Data Sync & Webhooks

### Incoming Webhooks (From Xero/QBO)
```javascript
// Xero sends webhook when invoice is created/updated
app.post('/webhooks/xero', async (req, res) => {
  const { tenantId, invoices } = req.body;
  
  // Verify signature
  const verified = verifyXeroSignature(req);
  if (!verified) return res.status(401).send('Unauthorized');
  
  // Update local database
  for (const invoice of invoices) {
    await db.invoice.upsert({
      where: { xero_invoice_id: invoice.id },
      update: { amount: invoice.total, due_date: invoice.dueDate },
      create: { /* ... */ }
    });
  }
  
  // Trigger dunning logic if necessary
  await triggerDunningCheck(tenantId);
  
  res.status(200).send('OK');
});
```

### Outgoing Webhooks (To Xero/QBO when reminder sent)
```javascript
// When payment is marked paid in CollectIQ, update Xero
async function markInvoicePaid(invoiceId, paymentDate) {
  const invoice = await db.invoice.findUnique({ where: { id: invoiceId } });
  
  // Update Xero
  await xeroApi.markInvoicePaid({
    tenantId: invoice.org.xero_tenant_id,
    invoiceId: invoice.xero_invoice_id,
    paymentDate: paymentDate
  });
  
  // Update local DB
  await db.invoice.update({
    where: { id: invoiceId },
    data: { status: 'paid', paid_date: paymentDate }
  });
  
  // Send webhook to customer's Slack (if connected)
  if (invoice.org.slack_webhook_url) {
    await slack.send({
      webhook_url: invoice.org.slack_webhook_url,
      text: `✅ Invoice ${invoice.invoice_number} marked paid`
    });
  }
}
```

---

## 💰 Cost Estimate (Year 1, MVP Scale)

| Service | Cost/Month | Notes |
|---------|-----------|-------|
| **AWS EC2 (t3.micro)** | $10 | Shared instance; upgrade to t3.small ($20) at Month 6 |
| **AWS RDS (db.t3.micro)** | $20 | PostgreSQL managed; backup included |
| **AWS S3** | <$1 | Storage + data transfer <50GB/month |
| **ElastiCache (Redis, cache.t3.micro)** | $15 | Session + job queue caching |
| **Vercel (Frontend)** | Free | Free tier for static next.js deployment |
| **SendGrid** | $20 | 100K emails/month; current limit 10-20K |
| **Stripe** | 2.9% + $0.30/txn | Payment processing fees (only on customer payments) |
| **Twilio (SMS)** | $5-10 | $0.0075 per SMS; budget $100/month initial |
| **Datadog (Monitoring)** | $15 | Free tier; upgrade at Month 6 |
| **GitHub** | Free | Public or private repo (free for small teams) |
| **Domain + SSL** | $15 | collectiq.com; auto-renewal |
| **Slack** | Free | Basic plan; upgrade if needed |
| **Miscellaneous** | $20 | Miscellaneous tools, API keys, testing services |
| **Total/Month** | **~$131** | **Scales to $200-300 at Month 6** |

**Break-even:** 10 paying customers × $300/month average = $3K/month revenue >> $200/month ops cost

---

## 🚀 Technology Timeline

| Phase | Weeks | Focus | Key Decisions |
|-------|-------|-------|---------------|
| **Foundation** | 1-2 | Database schema, auth, API setup | PostgreSQL vs MySQL? → Postgres. OAuth vs custom auth? → OAuth. |
| **Integrations** | 2-4 | Xero/QBO OAuth, invoice sync | Webhook vs polling? → Both (webhook primary, polling backup). |
| **Core Features** | 4-6 | Dashboard, prediction model, reminders | Send-as-service vs 3rd party? → SendGrid. ML framework? → scikit-learn. |
| **Portal & Polish** | 6-8 | Customer payment portal, onboarding UX | Frontend framework? → Next.js. Styling? → Tailwind + shadcn. |
| **Launch & Scale** | 8+ | Monitoring, performance, security audit | APM tool? → Datadog free tier. Infrastructure as code? → Terraform. |

---

## ✅ MVP Feature Checklist vs Tech Stack

| Feature | Backend | Frontend | Database | External |
|---------|---------|----------|----------|----------|
| Xero OAuth login | Express + passport | Next.js auth page | users table | Xero API |
| Invoice sync | Cron job (Bull) + Xero SDK | Dashboard component | invoices table | Xero Webhook |
| DSO calculation | SQL query (window functions) | Recharts | invoices (indexed) | - |
| Payment prediction | FastAPI model inference | Risk level badge | invoices.risk_level | scikit-learn .pkl |
| Email reminders | Bull job + SendGrid | Template builder UI | reminders table | SendGrid API |
| Customer portal | Express route + JWT | React SPA (public) | invoices (read-only) | Stripe.js |
| Payment collection | Stripe webhook handler | Stripe.js embed | transactions table | Stripe API |
| Slack notifications | Webhook sender | - | org.slack_webhook_url | Slack API |

---

## 🔍 Code Quality & Standards

**Linting & Formatting:**
```bash
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin

# .eslintrc.json
{
  "extends": ["plugin:@typescript-eslint/recommended"],
  "rules": { "no-console": "warn", "prefer-const": "error" }
}

# .prettierrc
{ "semi": true, "singleQuote": true, "trailingComma": "es5" }
```

**Testing Strategy:**
- **Unit Tests:** Jest + React Testing Library (frontend), Jest (backend)
- **Integration Tests:** Supertest (API endpoints)
- **E2E Tests:** Cypress (customer portal, onboarding flow)
- **Coverage Target:** ≥70% for MVP

```bash
npm run test:unit  # Jest
npm run test:integration  # Supertest
npm run test:e2e  # Cypress
npm run coverage  # Generate coverage report
```

---

*This tech stack is optimized for speed-to-market, scalability, and team collaboration. All technologies are open-source or have generous free tiers. Can be deployed to production in Week 8 of MVP timeline.*

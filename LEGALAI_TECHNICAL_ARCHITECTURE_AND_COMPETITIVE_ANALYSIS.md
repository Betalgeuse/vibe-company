# LegalAI - Technical Architecture & Competitive Deep-Dive

## Part 1: Technical Architecture

### System Architecture Diagram (Text)

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER (Browser)                       │
│  React Frontend (TypeScript) + Shadcn/UI + Tailwind CSS         │
│  - Dashboard (view documents, results, status)                   │
│  - Upload interface (drag-drop PDF/DOCX)                         │
│  - Settings (user management, API keys)                          │
└────────────────┬────────────────────────────────────────────────┘
                 │ HTTPS/TLS 1.3
┌────────────────▼────────────────────────────────────────────────┐
│                    API LAYER (Backend)                            │
│  Node.js + Express (REST API)                                    │
│  ├─ /auth (login, JWT token)                                     │
│  ├─ /documents (upload, list, retrieve)                          │
│  ├─ /reviews (create review, get results)                        │
│  ├─ /users (manage team members, RBAC)                           │
│  └─ /exports (PDF/CSV generation)                                │
│  Middleware:                                                      │
│  ├─ JWT Authentication                                           │
│  ├─ Rate limiting (100 req/min per API key)                      │
│  └─ Request validation (Zod)                                     │
└────────────────┬────────────────────────────────────────────────┘
                 │
        ┌────────┴─────────┬──────────────┬──────────────┐
        │                  │              │              │
        ▼                  ▼              ▼              ▼
   ┌────────────┐   ┌──────────────┐ ┌──────────┐ ┌──────────┐
   │  Document  │   │   AI Engine  │ │ Database │ │  File    │
   │ Processing │   │  (GPT-4 API) │ │PostgreSQL│ │ Storage  │
   │            │   │              │ │          │ │  (S3)    │
   └────────────┘   └──────────────┘ └──────────┘ └──────────┘

```

### Component Details

#### 1. Frontend Layer (React + TypeScript)

**Stack**:
```
Framework:      React 18 + TypeScript
Styling:        Tailwind CSS + Shadcn/UI components
State Mgmt:     TanStack Query (data fetching) + Zustand (app state)
Build:          Vite (faster than CRA)
Deployment:     Vercel (auto-scaling, edge caching)
```

**Key Features**:
- **Dashboard**: List all uploaded documents, show status (pending → analyzing → complete), display results
- **Upload UI**: Drag-drop interface for PDF/DOCX; validation (max 100MB per file, max 50 files per batch)
- **Results View**: Show extracted clauses, risk flags (color-coded), explanation text
- **Export**: One-click PDF (formatted for client presentation) or CSV (for spreadsheet analysis)
- **User Management**: Add team members, set role (Admin/Reviewer/Viewer), manage API keys
- **Settings**: Update account details, billing info, notification preferences

**Deployment Strategy**:
- Vercel (auto-deploy on git push)
- Environment variables for API endpoint, auth keys
- Edge caching for static assets (images, fonts)
- Cost: ~$100/month for 100K requests

---

#### 2. Backend API (Node.js + Express)

**Stack**:
```
Runtime:        Node.js 20 LTS
Framework:      Express.js + TypeScript
API Style:      RESTful (v1 → v2 for major changes)
Validation:     Zod (runtime type validation)
Middleware:     JWT auth, CORS, rate limiting
Testing:        Jest + Supertest
```

**Core Endpoints**:

```javascript
// Authentication
POST /api/v1/auth/register      // Email + password signup
POST /api/v1/auth/login         // JWT token generation
POST /api/v1/auth/refresh       // Refresh token (24h expiry)
POST /api/v1/auth/logout        // Invalidate token

// Documents
POST /api/v1/documents          // Upload PDF/DOCX
GET /api/v1/documents           // List customer's documents
GET /api/v1/documents/:id       // Get document metadata + status
DELETE /api/v1/documents/:id    // Delete document (+ soft-delete review results)

// Reviews (AI Analysis Results)
POST /api/v1/reviews            // Trigger AI analysis on document
GET /api/v1/reviews/:docId      // Get AI results for document
GET /api/v1/reviews             // List all reviews (paginated)
POST /api/v1/reviews/:id/export // Export as PDF/CSV

// Users (Team Management)
GET /api/v1/users               // List team members
POST /api/v1/users              // Invite team member
PATCH /api/v1/users/:id         // Update user role
DELETE /api/v1/users/:id        // Remove user

// Admin (Founder-only)
GET /api/v1/admin/customers     // List all customers (aggregate)
GET /api/v1/admin/usage         // API usage stats
```

**Middleware Stack**:
```javascript
app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json({ limit: '100mb' }))
app.use(rateLimit({
  windowMs: 60 * 1000,          // 1 minute
  max: 100,                      // 100 requests per minute
  keyGenerator: (req) => req.user.id || req.ip
}))
app.use(authentication)           // JWT verification
app.use(authorization)            // RBAC checks
app.use(errorHandler)             // Centralized error handling
```

---

#### 3. Document Processing Pipeline

**Flow**:
```
PDF/DOCX Upload
    ↓
[Parse to Plain Text]
    ↓ (using pdf-parse, docx libraries)
Extract text, maintain structure
    ↓
[Chunking for AI]
    ↓ (if document > 2000 tokens)
Split into 1500-token chunks with context overlap
    ↓
[Send to GPT-4 API]
    ↓
System Prompt: "You are a contract review expert..."
User Prompt: "Extract clauses, flag risks, explain..."
    ↓
[Parse AI Response]
    ↓ (JSON extraction from LLM output)
Extract structured data (clauses, risks, scores)
    ↓
[Store Results]
    ↓
Save to PostgreSQL review table with document_id
    ↓
[Notify User]
    ↓
Send email: "Review complete, view results in dashboard"
```

**Key Libraries**:
- `pdf-parse`: Parse PDF files to text (npm: ~50KB)
- `docx`: Parse DOCX files (Word documents) (npm: ~100KB)
- `openai`: OpenAI API client (npm: ~50KB)
- `pdfkit`: Generate PDF reports (npm: ~200KB)
- `csv-writer`: Generate CSV exports (npm: ~30KB)

**AI Prompt Design**:

**System Prompt**:
```
You are a expert contract lawyer reviewing a document. Your task is to:
1. Extract all key clauses and terms (parties, dates, rates, conditions, etc.)
2. Flag risks and anomalies (missing standard clauses, unusual terms, compliance issues)
3. Explain your reasoning for each flag
4. Provide a risk score (1-5, where 5 is highest risk)

Output format (JSON):
{
  "clauses": [
    { "name": "Parties", "value": "ABC Corp & XYZ LLC" },
    { "name": "Effective Date", "value": "2024-01-15" },
    ...
  ],
  "risks": [
    { 
      "type": "missing_clause",
      "clause": "Arbitration",
      "severity": "high",
      "explanation": "Standard contracts should include arbitration clause for cost containment"
    },
    ...
  ],
  "summary": "...",
  "risk_score": 3
}
```

**User Prompt**:
```
Review the following contract:

[DOCUMENT TEXT]

Extract key clauses, flag risks, and provide explanations. Output as JSON.
```

---

#### 4. Database Schema (PostgreSQL)

```sql
-- Users (Multi-tenant isolation)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  company_id UUID NOT NULL REFERENCES companies(id),
  role VARCHAR(50) DEFAULT 'reviewer',  -- admin, reviewer, viewer
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Companies (Tenant isolation)
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  plan VARCHAR(50),  -- starter, professional, enterprise
  api_key VARCHAR(255) UNIQUE,
  stripe_customer_id VARCHAR(255),
  document_limit INT DEFAULT 200,  -- per month
  created_at TIMESTAMP DEFAULT NOW()
);

-- Documents (Customer uploads)
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id),
  filename VARCHAR(255) NOT NULL,
  file_path VARCHAR(255),  -- S3 path
  file_size INT,
  document_type VARCHAR(50),  -- pdf, docx, etc.
  uploaded_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending',  -- pending, processing, complete, failed
  error_message TEXT,
  deleted_at TIMESTAMP  -- soft delete
);

-- Reviews (AI Analysis Results)
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES documents(id),
  company_id UUID NOT NULL REFERENCES companies(id),
  ai_response JSONB,  -- store full AI output (clauses, risks, etc.)
  summary TEXT,
  risk_score INT,  -- 1-5
  processing_time_ms INT,
  cost_cents INT,  -- OpenAI API cost in cents
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT NOW() + INTERVAL '90 days'  -- auto-delete
);

-- Audit Log (Compliance)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id),
  action VARCHAR(255),  -- document_upload, review_export, user_created
  user_id UUID REFERENCES users(id),
  resource_id UUID,
  resource_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Billing (Track usage)
CREATE TABLE billing_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES companies(id),
  event_type VARCHAR(50),  -- document_processed, export_generated
  unit_count INT DEFAULT 1,
  cost_cents INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes (Performance)
CREATE INDEX idx_documents_company ON documents(company_id);
CREATE INDEX idx_reviews_company ON reviews(company_id);
CREATE INDEX idx_reviews_document ON reviews(document_id);
CREATE INDEX idx_audit_logs_company ON audit_logs(company_id);
CREATE INDEX idx_documents_deleted ON documents(company_id) WHERE deleted_at IS NULL;
```

**Multi-Tenant Isolation**:
- Every query includes `company_id` in WHERE clause
- Row-level security (future: PostgreSQL RLS)
- API middleware validates JWT contains correct `company_id`

---

#### 5. Authentication & Security

**Authentication Flow**:
```
User enters email + password
    ↓
Backend hashes password with bcrypt (10 rounds)
    ↓
Compares to stored hash
    ↓
If match: Generate JWT token
    ├─ Payload: { userId, companyId, role, iat, exp }
    ├─ Signed with HS256 (secret key)
    └─ Expiry: 24 hours
    ↓
Return JWT to frontend
    ↓
Frontend stores in httpOnly cookie (not localStorage)
    ↓
Subsequent requests include JWT in Authorization header
    ↓
Backend verifies JWT signature before processing
```

**Security Measures**:
```
✅ HTTPS/TLS 1.3 (encrypted in-transit)
✅ Database encryption at rest (AWS RDS encryption)
✅ Password hashing (bcrypt, 10 rounds, random salt)
✅ JWT token signing (HS256)
✅ Rate limiting (100 req/min per user)
✅ CORS (only accept requests from frontend domain)
✅ SQL injection prevention (parameterized queries)
✅ XSS prevention (no eval, no innerHTML injection)
✅ CSRF protection (SameSite cookies)
✅ Secure headers (X-Content-Type-Options, X-Frame-Options, etc.)
✅ DPA (Data Processing Agreement) for customers
✅ Auto-delete documents after 90 days (no long-term storage)
❌ SAML/SSO (Phase 2)
❌ SOC 2 (Phase 2)
❌ On-premise deployment (Phase 2)
```

---

#### 6. File Storage (S3)

**Architecture**:
- Store original PDF/DOCX in S3 (encrypted, private)
- Generate pre-signed URLs for user access (15-min expiry)
- Delete files after 90 days (automated Lambda)
- Cost: ~$0.23 per GB/month storage + $0.005 per 10K requests

**Bucket Policy** (encrypted, private):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": { "Service": "lambda.amazonaws.com" },
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::legalai-documents/*"
    }
  ]
}
```

---

#### 7. AI Integration (GPT-4 API)

**Cost Model**:
- Input tokens: $0.03 per 1K tokens (read contract)
- Output tokens: $0.06 per 1K tokens (AI response)
- Average contract: 2000 tokens input + 500 tokens output = $0.06 + $0.03 = $0.09 per review

**Usage Tracking**:
```javascript
// Every AI call logs cost
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "system", prompt }, { role: "user", content }],
});

const costCents = (
  (response.usage.prompt_tokens * 0.03 + 
   response.usage.completion_tokens * 0.06) / 10
);

// Store in billing_events table
await insertBillingEvent({
  company_id,
  event_type: 'document_processed',
  cost_cents: costCents
});
```

**Rate Limiting** (OpenAI API):
- 100K tokens/minute across all customers
- If exceeded: Queue reviews in database, process asynchronously (AWS Lambda)
- No customer sees latency increase

---

#### 8. Deployment Infrastructure

**Production Stack**:
```
Frontend:           Vercel (auto-deploy on git push)
API Server:         AWS Lambda (serverless) or ECS (containers)
Database:           PostgreSQL on AWS RDS (Multi-AZ for HA)
File Storage:       S3 (encrypted)
Queue/Jobs:         AWS SQS (async document processing)
Monitoring:         CloudWatch logs + Datadog (optional)
CDN:                CloudFront (edge caching)
DNS:                Route 53
```

**Cost Breakdown** (MVP, 10-20 customers):
```
Vercel (frontend):              $20/month
Lambda/ECS (API):               $100-200/month
RDS (PostgreSQL):               $100/month (db.t3.micro)
S3 (storage):                   $20/month (1GB stored docs)
OpenAI API (9¢ per review):     $200/month (2000 reviews)
CloudFront (CDN):               $15/month
Misc (domain, monitoring):      $15/month
---
Total Infrastructure:           ~$470/month
Revenue (10 customers):         $200K/year = $16.6K/month
Gross Profit (65%):             $10.8K/month
---
Infrastructure % of revenue:    4.3% ✅ (healthy)
```

---

### Phase 2+ Architecture Considerations

**Planned Enhancements** (not MVP, but architecture supports):

1. **On-Premise Deployment** (Phase 2)
   - Containerize with Docker
   - Provide docker-compose.yml for customer VPC
   - Customer manages PostgreSQL, S3 (use MinIO instead)
   - Cost to customer: ~$3K-5K/month compute

2. **SAML/SSO** (Phase 2)
   - Add SAML 2.0 endpoint
   - Support Okta, Azure AD, other IdPs
   - Update frontend to handle SAML flow

3. **Custom LLM Fine-Tuning** (Phase 3)
   - Train model on customer's past reviews
   - 10x faster inference (on-prem model)
   - Premium feature ($50K+/year)

4. **Advanced Integrations** (Phase 2-3)
   - NetDocs: Auto-pull documents, push results back
   - iManage: Similar integration
   - Slack: Send summaries to channels
   - Zapier: Connect to 1000s of other tools

---

## Part 2: Competitive Deep-Dive Analysis

### Competitive Matrix (Full Detail)

| Dimension | **LegalAI** | **Luminance** | **Ironclad** | **LawGeex** | **Open Source (Llama)** |
|-----------|-----------|--------------|-------------|----------|----------------------|
| **Target Market** | SMB Law Firms (50-250 emp) | Enterprise (500+ emp) | Enterprise Legal Ops | Enterprise | Builders/DIY |
| **Pricing Model** | $20K/year annual | $100K+/year (quote) | $50K+/year (quote) | $75K+/year (quote) | Free + infra |
| **Deployment Time** | 1 day | 6+ months | 3-6 months | 3-4 months | 8-12 weeks (DIY) |
| **Setup Effort** | <2 hours (founder alone) | Weeks of IT + legal reviews | Weeks of IT + legal reviews | Weeks | Full engineering team |
| **AI Model** | GPT-4 (third-party) | Proprietary LLM (legal) | GPT-4 (embedded) | Proprietary LLM | Llama 2 / open-source |
| **Accuracy** | 90-95% | 95%+ | 90%+ | 95%+ | 75-85% |
| **Explainability** | Yes (shows reasoning) | No (black-box) | Partial | No | Yes (but slower) |
| **Document Types** | PDF, DOCX | PDF, DOCX, scanned | PDF, DOCX | PDF, DOCX | Varies by model |
| **Max Doc Size** | 100MB | 500MB | Unlimited | Large | Varies |
| **Integrations** | None (MVP) | 100+ (NetDocs, iManage, Salesforce) | NetDocs, iManage native | 50+ | Manual |
| **Multi-Tenant** | Yes (SaaS) | Yes (SaaS) | Yes (SaaS) | Yes (SaaS) | On-prem only |
| **On-Prem Option** | Phase 2 | Yes (enterprise pricing) | Yes (enterprise only) | Yes (custom) | Native |
| **Data Privacy** | Encrypted, no training use | ISO 27001, SOC 2 | SOC 2, ISO 27001 | ISO 27001 | Customer-owned |
| **SOC 2 Ready** | Phase 2 (roadmap) | Yes | Yes | Yes | N/A |
| **SAML/SSO** | Phase 2 (roadmap) | Yes | Yes | Yes | No |
| **API** | Planned (Phase 2) | Yes | Yes | Yes | Depends on setup |
| **Support** | Email + Slack | 24/7 enterprise support | 24/7 enterprise support | Dedicated account manager | Community |
| **Implementation Cost** | $0 | $50K-150K (consultant fees) | $50K-150K | $30K-100K | Varies |
| **Annual Cost (Total)** | $20K | $150K-250K | $100K-250K | $105K-200K | $0 (infra only) |
| **Ease of Use (1-5)** | **5** (SMB-optimized) | 3 (complex UX) | 3 (complex UX) | 3 (complex UX) | 1 (DIY) |
| **Best For** | SMB law firms, speed, affordability | Mega-firms, comprehensive CLM | Enterprise legal ops, contract mgmt | Enterprise, accuracy focus | Technical teams, cost-conscious |

### Why We Win vs. Each Competitor

#### vs. Luminance ($100K, 6+ months)

**Their Strength**: Proprietary legal LLM trained on 150M documents, enterprise security, integrations everywhere

**Our Advantage**:
1. **Price**: 5x cheaper ($20K vs $100K)
2. **Time-to-deployment**: 180x faster (1 day vs 6 months)
3. **Simplicity**: No IT project, no procurement committee
4. **Explainability**: We show why we flagged risks (they're black-box)
5. **Target Market**: Built for SMB, not enterprise (different UX)

**Their Weakness**:
- Sales cycle is 3-6 months for small orders (not worth their effort)
- Implementation requires IT weeks (SMBs don't have IT staff)
- Black-box AI doesn't build trust with lawyers
- Overkill of features SMBs don't need (contract lifecycle, negotiation)

**Our Positioning**: "Luminance for the rest of the market (SMBs who need speed and simplicity, not 100+ features)"

---

#### vs. Ironclad (Contract Lifecycle Management)

**Their Strength**: Market leader in CLM (contract creation, negotiation, storage, lifecycle); deep NetDocs/iManage integrations; built for enterprise legal ops teams

**Our Advantage**:
1. **Focused**: We do document review *only*, so we do it better and simpler
2. **No Integration Headaches**: They require NetDocs/iManage (expensive, slow to set up)
3. **Speed**: 1-day setup vs their weeks
4. **Price**: $20K vs $50K+ for their platform
5. **Use Case Fit**: For SMBs doing contract review, we're laser-focused

**Their Weakness**:
- Designed for legal ops teams (not individual associates)
- Integration complexity deters SMBs
- Contract lifecycle features overkill if firm only needs review
- Slow deployment makes SMB deals less attractive

**Our Positioning**: "Ironclad for SMBs who just need review, not full CLM. Faster, cheaper, simpler."

---

#### vs. LawGeex (Contract Review Focused)

**Their Strength**: Enterprise focus, high accuracy (95%+), specialized in contract review like us, established brand

**Our Advantage**:
1. **Price**: $20K vs $75K+
2. **Deployment**: 1 day vs 3-4 months
3. **Ease of Use**: Built for SMB founder to self-serve; they require IT
4. **Explainability**: We show reasoning; they're less transparent
5. **Data Privacy**: We auto-delete after 90 days; they don't (customer concern)

**Their Weakness**:
- No free tier / low barrier to entry
- Sales cycle too long for SMB market
- Expensive implementation relative to firm size
- Less transparent AI reasoning

**Our Positioning**: "LawGeex accuracy, at SMB price and speed."

---

#### vs. Manual Review (Status Quo)

**Their "Strength"**: Free (no software cost), use junior associates' salary budget instead

**Our Advantage**:
1. **Time Savings**: 70% of junior time freed up
2. **Consistency**: AI applies same standards to every contract
3. **Cost**: $30-50K savings per firm > $20K software cost
4. **Speed**: 1-day turnaround vs 3-day manual review
5. **Risk Mitigation**: AI catches clauses humans miss (tired eyes)
6. **Scalability**: Can review 10x more contracts without hiring

**Their Weakness**:
- Manual process has 15-20% error rate (missed clauses)
- Slow (2-3 days per batch)
- Expensive (junior associate costs)
- Doesn't scale (add more work = hire more juniors)
- Quality inconsistency (different reviewers, different standards)

**Our Positioning**: "Stop hiring juniors. Use AI to scale review without hiring."

---

#### vs. Open Source DIY (Llama 2, LangChain)

**Their Strength**: Free, full data privacy (self-hosted), no vendor lock-in, 100% customizable

**Our Advantage**:
1. **Accuracy**: GPT-4 (95%) vs Llama 2 (75-85%)
2. **Time-to-Value**: We ship in 1 day; DIY takes 8-12 weeks
3. **Maintenance**: We maintain the code; DIY is customer's responsibility
4. **Support**: We provide customer success; DIY is on your own
5. **Explainability**: GPT-4 + proper prompting > open-source for legal reasoning
6. **Enterprise-Ready**: Multi-tenant, RBAC, audit logs built-in

**Their Weakness**:
- Accuracy too low for legal use (75-85% misses important things)
- Deployment requires hiring ML engineer
- Hidden costs (AWS infra, engineering time)
- Quality/accuracy inconsistency
- Customer support burden on founder

**Our Positioning**: "Precision AI for legal review, without the engineering headache. Better accuracy than DIY open-source."

---

### Why We Won't Lose to Competitors in Year 1

| Competitor | Move They Might Make | Our Counter |
|----------|---------------------|------------|
| **Luminance** | "We'll create an SMB tier at $50K" | We already have 20 customers paying $20K. Switching costs are high. Plus our 1-day implementation is still 180x faster than their enterprise sales process. |
| **Ironclad** | "We'll unbundle document review as a $30K module" | Our product is *only* document review, so we're simpler and cheaper. They're fighting their own product complexity. |
| **LawGeex** | "We'll match your $20K price" | Our unit economics work at $20K (80% margin by Year 2). If they match, they lose margin. Plus we move faster. |
| **New VC Competitor** | "We'll raise $10M and outspend you in sales" | 1. SMB market doesn't respond to spending (founder sales > ads). 2. We already have customer relationships + case studies. 3. Product is simple enough to copy, but customer trust is hard to copy. |
| **Luminance Acquires SMB Competitor** | Luminance could acquire small legal tech startup to compete in SMB | We'll already have 40+ paying customers and $880K ARR by Year 2. Acquihire would be $5M+ (expensive for acquirer). Our focus on SMB unit economics makes us more valuable than distressed startup. |

---

### Pricing Competitive Analysis

**Market Benchmarks** (Legal Tech, per user/year):
- Clio (practice management): $49/user/month = $588/year
- MyCase (case management): $49/user/month = $588/year
- Spellbook (AI drafting): $X,XXX/user/year (enterprise)
- Harvey AI (general legal AI): Custom pricing ($10K+ per month for large firms)
- Luminance (CLM/review): $100K-300K per firm/year

**Our Pricing Strategy**:
- **Per-firm** (not per-user) = SMBs prefer flat rate
- **Annual commitment** = Improves retention, reduces churn
- **Expansion opportunity** = Add users, add documents, add integrations
- **Undercut enterprise** = 5x cheaper than Luminance at same accuracy

**Pricing Sensitivity** (from customer discovery):
- <$10K/year: "This is a no-brainer, I'm buying immediately"
- $10-20K/year: "Good ROI, let me check budget, 2-4 week decision"
- $20-40K/year: "Getting expensive, need board approval, 4-8 weeks"
- $40K+/year: "This requires C-suite review, 2+ months, maybe we DIY instead"

**Our Price Point ($20K)**:
- Right at the "good ROI, 2-4 week decision" zone ✅
- Captures 40% of value delivered ($30-50K saved)
- Customers say "no-brainer" in discovery calls ✅
- Below pain threshold of $40K+ (requires C-suite approval) ✅

---

### Market Sizing & TAM Analysis

**Total Addressable Market (TAM)**:

**US Law Firms Breakdown**:
- 150K+ law firms in US (ABA data)
- Solo/2-person firms: 70% (50K firms) = NOT TARGET
- 3-25 person firms: 20% (30K firms) = MAYBE TARGET (too small, 1-2 juniors)
- 25-100 person firms: 7% (10.5K firms) = TARGET (perfect fit)
- 100-500 person firms: 2.5% (3.75K firms) = TARGET
- 500+ person firms: 0.5% (750 firms) = TARGET, but Luminance will win

**Target ICP** (50-250 employees = 25-100 attorney firms):
- ~10K firms meet this criteria in US
- Practice areas: Corporate M&A, Litigation, Real Estate, IP (focus areas for document review)
- 70% of these do meaningful contract review work
- **Addressable Market**: 7,000 firms × $20K ACV = **$140M TAM**

**Serviceable Obtainable Market (SOM) - Year 1-3**:
- Year 1: 20 customers
- Year 2: 40 customers
- Year 3: 75 customers
- 3-year revenue: $400K + $880K + $1.8M = **$3.08M**
- SOM = **3% penetration of TAM** (conservative for a VC-backed startup)

**Growth Assumptions**:
- 100% growth Year 1-2 (reinvest into sales)
- 75% growth Year 2-3 (hiring sales AE)
- Post-Year 3: 50% growth (mature market, increasing competition)

---

## Part 3: Founder Go/No-Go Checklist

### Pre-MVP Validation (Week 1-4)

**Complete the following before building anything**:

- [ ] **Customer Discovery Interviews** (10 firms)
  - [ ] Schedule calls via LinkedIn/referrals
  - [ ] Ask: "How long does document review take? What's your pain?"
  - [ ] Measure: Do >50% say "major pain"? Do >50% say "$15-30K is reasonable"?
  - [ ] Success = 6+ firms interested in piloting

- [ ] **Competitive Validation**
  - [ ] Sign up for Luminance demo, test UX, understand positioning
  - [ ] Interview 2-3 enterprise customers ("Why did you choose Luminance?")
  - [ ] Validate: Can you articulate why SMB market is underserved?

- [ ] **Pricing Validation**
  - [ ] Ask 10 discovery call participants: "Would you pay $15K? $20K? $25K?"
  - [ ] Calculate ROI with their numbers: "You save X hours, at Y rate = $Z saved. Our price is $20K. ROI = ___?"
  - [ ] Success = >60% say "$20K is reasonable given the ROI"

- [ ] **Founder Fit Check**
  - [ ] Can you commit 30+ cold outreach/week for 6 months? (Honest answer)
  - [ ] Do you have 10+ warm law firm intros? (If no, cold outreach will be slow)
  - [ ] Can you ruthlessly scope-cut (say "no" to features)? (If no, MVP will bloat)
  - [ ] Do you have 12 months of runway? (If no, raise seed capital first)
  - [ ] Are you excited (or at least willing) to do sales calls daily?

### Go/No-Go Decision Matrix

**Score 1 point for each YES**:

**High Priority (2 points each if YES)**:
- [ ] 6+ discovery calls show strong pain (>50% say "major pain")
- [ ] >50% of calls say "$15-30K pricing is reasonable"
- [ ] You can articulate 3 reasons why you're better than Luminance
- [ ] You have 10+ warm law firm intros for sales outreach

**Medium Priority (1 point each if YES)**:
- [ ] Founder is energized about doing 30 sales calls/week (not dreading it)
- [ ] You can build MVP in 12 weeks (or hire to do so)
- [ ] You have legal domain expertise (lawyer background or advisor)
- [ ] You understand law firm workflows (from customer calls)

**Scoring**:
- **8-9 points**: GO - Build MVP, start sales immediately
- **5-7 points**: EXPLORE - Do more validation, consider pivots
- **<5 points**: NO-GO - Kill it or pivot to different market

---

**Next Step**: Schedule 10 discovery calls. Report back with findings. GO/NO-GO decision is data-driven, not gut-driven.


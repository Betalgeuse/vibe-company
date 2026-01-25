# On-Chain Analytics - Vertical Focus B2B SMB MVP Specification

**Date:** January 25, 2026  
**Priority:** #2 (GTM Fit: 26/40)  
**Target ICP:** Heads of analytics/trading at specialized DeFi projects and trading desks  
**ACV Target:** $15-30K/year  
**ARR Year 1 Goal:** $150-250K  

---

## Executive Summary

### One-Liner
> "Vertical-specific on-chain analytics for traders and protocols" — Real-time insights for yield farming, options, or NFT markets at 1/3 the price of Nansen

### Key Metrics Target

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers | 20-35 | 75-120 | 200-300 |
| ACV | $15-22K | $20-28K | $25-32K |
| ARR | $300-770K | $1.5M-3.4M | $5M-9.6M |
| Gross Margin | 65% | 72% | 78% |
| CAC | $1.2K-1.8K | $900-1.2K | $700-900 |
| LTV:CAC Ratio | 2.8:1 | 3.8:1 | 4.5+:1 |

**Note:** Higher CAC than Smart Contract Testing due to data infrastructure costs; more complex GTM (multi-channel)

---

## 1. B2B ICP Definition

### Target Segment (Vertical-Specific)

#### Primary Vertical: Yield Farming Analytics

| Item | Definition |
|------|-----------|
| **Industry** | DeFi Protocols (lending, liquidity mining) |
| **Company Size** | 5-50 person teams; $1M-20M AUM |
| **Decision Maker** | Head of Analytics or Risk Officer |
| **Geography** | US/Singapore/EU (80%); Asia (20%) |
| **Pain Point** | Can't track yield opportunities across 50+ pools; missing arbitrage; exposed to impermanent loss |
| **Tech Stack** | Web3.js, Ethers.js, custom Python risk models |

#### Secondary Verticals (Future):
1. **Options Trading** — Track IV, Greeks, gamma exposure across protocols
2. **NFT Markets** — Rarity, floor price, wash trading detection
3. **Protocol Health** — TVL, revenue, governance trends (for investors/teams)

### Buying Committee (Yield Farming Focus)

| Role | Title | Pain Point | Success Metric | Authority |
|------|-------|------------|---|---|
| **Economic Buyer** | CFO or Treasurer | "We're leaving $50K/month on table from inefficient capital allocation" | Identify top 5 yield opportunities weekly | **YES** ($20K spend) |
| **Champion** | Head of Analytics | Manual Excel tracking; 4 hours/day on Dune queries; missing patterns | 30 min/day for yield optimization; automated alerts | **YES** ($20K spend) |
| **End Users** | Traders/Risk Managers (2-5) | Can't see real-time risk; comparing pools manually; slow decision-making | Real-time dashboard; 1-click comparison; alerts | **Indirect** |
| **Blocker** | Compliance Officer | Data accuracy concerns; auditing trails | Complete audit logs; data lineage | **Recommendation** |

### Trigger Events

1. **Large Capital Raise** — "We just raised $5M. Now we need to optimize yield on treasury."
2. **Missed Opportunity** — "We had $100K in bad yield positions last month. Need better monitoring."
3. **Competition Pressure** — "Competitor protocol has 2x better yields. We need data-driven decisions."
4. **Team Growth** — "We hired 3 traders. Need tool that doesn't require SQL knowledge."
5. **Risk Management Mandate** — "Board wants 'proof of yield optimization'. Need dashboard to show it."

---

## 2. Value Proposition

### ROI Statement

> "With **YieldLabs** (or your product name), yield farming teams identify **$100K-500K in annual yield capture** through real-time pool analytics and automated arbitrage alerts—previously invisible in spreadsheets and generic tools."

### Quantified Value (Yield Farming Use Case)

| Metric | Current State | With YieldLabs | Impact | Annual Value |
|--------|---|---|---|---|
| **Manual Yield Analysis Time** | 4 hours/day per analyst | 30 min/day | 87% time savings | $30-40K/analyst/year |
| **Missed Yield Opportunities** | 3-5 per month | <1 per month | Better capital allocation | $50-150K/year identified |
| **Portfolio Rebalancing Cycle** | Weekly (manual) | Real-time (automated) | Faster reaction to market changes | $20-50K/year improvement |
| **Arbitrage Capture** | Manual; spotty | Automated alerts | Capture 10-20 arb opportunities/month | $50-200K/year |
| **Risk Events Detected** | 3 days after incident | Real-time (alerts) | Prevent losses from protocol hacks, exploits | $100K+ prevented |
| **Data Accuracy** | 60% (spreadsheets) | 99.9% (on-chain) | Reduce bad decisions from stale data | $10-20K/year |

**Total Benefit per Team:** **$260K-590K per year** for a 5-person analytics team  
**Payback Period:** 1-2 months at $20K ACV

### Competitive Differentiation

| vs Competitor | Their Weakness | Our Strength |
|---|---|---|
| **Dune Analytics (generic, slow)** | 1-10 minute data latency; requires SQL knowledge; slow query performance | Vertical-specific; <30 second latency; no-code interface; yield farming optimized |
| **Nansen ($999+/month)** | Expensive ($12K/year+); general crypto intelligence; not yield-optimized | 50% cheaper; vertical-specific dashboards; better for traders than institutional analysts |
| **Glassnode (enterprise-only)** | Enterprise pricing ($50K+/year); institutional focus; data is 1-3 days old | SMB-friendly pricing ($15-30K/year); real-time; community-driven |
| **Manual Spreadsheets** | Time-consuming; error-prone; no alerts | Automated; real-time; auditable |
| **Custom Python Scripts** | Requires engineering resources; not maintainable; breaks on protocol changes | Maintained by us; adapts to new protocols automatically |

**Key Differentiator:** "Yield farming insights in seconds, not hours. Real-time, not daily."

---

## 3. Product Spec (MVP - 12 weeks)

### Core Features (MVP Phase)

| Feature | Description | Priority | Weeks | Why It's Needed |
|---------|-------------|---|---|---|
| **1. Pool Yield Comparison Dashboard** | Ranked list of top yield opportunities across Aave, Compound, Curve, Convex, Lido. Real-time APY, TVL, risk scores. | **P0** | 5-6 | **Core value**: Teams need instant visibility into yield opportunities. This is the wedge. |
| **2. No-Code Dashboard Builder** | Drag-drop interface to create custom yield dashboards. Filter by risk, APY, pool type. Save views. | **P0** | 4-5 | **Ease**: No SQL required. Marketing people can build dashboards. |
| **3. Real-Time Data Integration** | Connect to Alchemy, Infura, etherscan APIs. Update yields every 5-10 seconds. Historical data accessible. | **P0** | 6-7 | **Core requirement**: Old data is useless for yield farming. Real-time is the wedge. |
| **4. Risk Scoring Engine** | Algorithmic risk scoring for each pool (smart contract audits, TVL stability, protocol health, exploit history). | **P1** | 5-6 | **Differentiation**: Helps users avoid hacks. Unique compared to Dune/Nansen. |
| **5. Alerts & Notifications** | Slack/email/Discord: "Curve pool APY > 50%" or "Aave collateral ratio dropped below 80%". Webhook for custom integrations. | **P1** | 3-4 | **Value**: Teams need instant notification; they can't watch dashboard 24/7. |
| **6. Arbitrage Opportunity Detection** | Automated detection: "APY on Aave is 12%, Compound is 15%, difference = $20K profit opportunity" | **P1** | 4-5 | **Advanced value**: Identifies hidden profit. Not in Dune/Nansen. |
| **7. Historical Analytics & Trends** | View yield trends over 30/90/365 days. Identify seasonal patterns. Backtest strategies. | **P2** | 4-5 | **Secondary value**: Historical analysis + strategy validation. NOT in MVP but roadmap. |
| **8. Portfolio Tracking** | Track personal/team portfolio. See real-time P&L, effective APY, allocation. | **P2** | 4-5 | **Expansion feature**: Not MVP but important for retention. |
| **9. API & Export** | REST API for custom integrations. Export data as CSV/JSON for reporting. | **P1** | 3-4 | **Enterprise readiness**: Teams want to integrate with internal tools. |
| **10. Community Data Marketplace** | Users can share custom metrics/analysis; earn revenue share. (e.g., "High-yield stablecoin pools" dashboard) | **P3** | TBD | **Viral feature**: Creates network effect + reduces engineering burden. Very future. |

### MVP Scope (Weeks 1-12)

**INCLUDE in MVP:**
- ✅ Features 1-6, 9 (Dashboard, builder, data integration, risk scoring, alerts, arb detection, API)
- ✅ 5 major protocols (Aave, Compound, Curve, Convex, Lido)
- ✅ Ethereum mainnet support (Polygon/Arbitrum in v1.1)
- ✅ Free tier (3 saved dashboards; 10 alerts/month)
- ✅ Pro tier ($399/month; unlimited dashboards, unlimited alerts)
- ✅ GitHub/Google OAuth authentication
- ✅ Basic audit logging

**DEFER to Phase 1.5:**
- ❌ Feature 7 (Historical backtesting) — data too fresh; add in Month 4
- ❌ Feature 8 (Portfolio tracking) — can add in v1.1
- ❌ Feature 10 (Community marketplace) — too complex for MVP
- ❌ Multi-chain (Polygon, Arbitrum) — validate Ethereum first
- ❌ Mobile app — web/desktop first

### Enterprise-Ready Foundation

- [x] **Multi-tenant architecture** — Org + team structure from Day 1
- [x] **Role-based access (RBAC)** — Admin / Analyst / Viewer
- [x] **API-first design** — All features available via REST
- [x] **Audit logging** — All dashboard changes, data exports logged
- [x] **Data export** — CSV, JSON, Parquet formats
- [x] **SSO/SAML** — Roadmap (architecture prepared)
- [x] **Data privacy** — No PII collected; encrypted at rest

### Integration Requirements

| Integration | Priority | Why Needed | Timeline |
|---|---|---|---|
| **Alchemy API** | **P0** | Primary on-chain data source; supports 50+ blockchains | Week 2-3 (MVP) |
| **Infura API** | P1 | Backup data source; Infura is industry standard | Week 4 (MVP) |
| **Etherscan API** | P1 | Historical data, address info, gas prices | Week 3-4 (MVP) |
| **Slack Notifications** | P1 | 90% of traders use Slack; critical for alerts | Week 5-6 (MVP) |
| **Discord Notifications** | P1 | Web3 community standard; DeFi devs on Discord | Week 5-6 (MVP) |
| **The Graph (Subgraphs)** | P1 | Alternative data source; supports custom queries | Month 2 (v1.1) |
| **Dune API** (if available) | P2 | Integration for users who use Dune; data augmentation | Month 3 |
| **TradingView Alerts** | P2 | Some traders use TradingView; custom alerts | Month 3 |

---

## 4. SMB-Specific Requirements

### Time-to-First-Value: < 10 Minutes

| Step | Time | How We Achieve |
|------|------|---|
| 1. Sign up with GitHub/Google | 30 sec | OAuth (1 click) |
| 2. Connect Ethereum wallet (read-only, no signing) | 1 min | Paste wallet address or connect with Web3 modal |
| 3. Create first dashboard | 2 min | Template: "Top Yield Opportunities" (pre-built) |
| 4. See live data (top 10 pools by APY) | 1 min | Auto-load from Alchemy |
| 5. Set first alert | 2 min | "Alert me if Curve APY > 50%" (simple UI) |
| 6. Receive alert (simulate a market move) | 2-3 min | Slack message with opportunity + link |
| **Total** | **~9-10 min** | ✅ Goal |

### Activation Milestones

| Milestone | When | Success Signal | Next Action |
|---|---|---|---|
| **1. Signup** | Day 1 | Email confirmed | "Your first dashboard" email |
| **2. First Dashboard** | Day 1 | Viewed top yield pools | "Set your first alert!" email |
| **3. Alerts Configured** | Day 2-3 | ≥2 alerts active | Slack/Discord notification sent |
| **4. Alert Triggered** | Day 3-7 | User clicks alert link | "Save this opportunity" prompt |
| **5. Team Invite** | Day 5-10 | ≥2 team members invited | "Team set up. Share dashboards." email |
| **6. Paid Upgrade** | Day 7-21 | Hit free tier limits (10 alerts) | "Upgrade to unlimited alerts" banner |
| **7. Retention** | Day 30 | Still using; ≥2 dashboards saved | "You found $100K in yield!" ROI email |

### Success Metrics for Early Users

**Activation Metrics:**
- ✅ 35%+ activation rate (signup → first dashboard + alert)
- ✅ 50%+ trial-to-paid conversion (free tier → Pro within 21 days)
- ✅ 90% <10 min time-to-first-value

**Engagement Metrics:**
- ✅ 70%+ weekly active usage (check dashboard ≥2x/week)
- ✅ 80%+ alerts viewed within 5 minutes of triggering
- ✅ 60%+ team adoption (≥2 team members per customer)

**Retention Metrics:**
- ✅ 75% 30-day retention
- ✅ 65% 90-day retention
- ✅ <12% monthly churn

---

## 5. Technical Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend Layer                        │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐  ┌────────────┐ │
│  │  Dashboard   │  │  No-Code Builder│  │ Alerts UI  │ │
│  │ (Next.js)    │  │  (React Flow)   │  │ (React)    │ │
│  └──────────────┘  └─────────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   API Layer (REST/GraphQL)               │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌─────────────────┐  ┌────────────┐ │
│  │  Dashboard   │  │ Alert Manager   │  │ Pool Data  │ │
│  │  API         │  │                 │  │ API        │ │
│  └──────────────┘  └─────────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│               Core Services (Microservices)              │
├─────────────────────────────────────────────────────────┤
│  ┌────────────────┐  ┌─────────────────┐  ┌──────────┐ │
│  │ Data Ingestion │  │ Risk Scorer     │  │ Alert    │ │
│  │ (Alchemy)      │  │ (ML/Heuristic)  │  │ Engine   │ │
│  └────────────────┘  └─────────────────┘  └──────────┘ │
│  ┌────────────────┐  ┌─────────────────┐  ┌──────────┐ │
│  │ Arb Detection  │  │ Data Cache      │  │ Notif    │ │
│  │ (ML)           │  │ (Redis)         │  │ Service  │ │
│  └────────────────┘  └─────────────────┘  └──────────┘ │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Infrastructure / Data Layer                 │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────┐  ┌─────┐  ┌─────────┐  │
│  │ PostgreSQL  │  │ TimeSeries│ │ S3  │  │ Lambda  │  │
│  │ (Dashboards)│  │ (InfluxDB)│  │Data │  │ Workers │  │
│  │             │  │           │  │Arch │  │         │  │
│  └─────────────┘  └──────────┘  └─────┘  └─────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js + React + TypeScript | Fast iteration; familiar to web devs; dashboard-heavy app |
| **Backend API** | Node.js (Express) or Python (FastAPI) | Handle real-time data; Python easier for data science integrations |
| **Data Pipeline** | Apache Kafka + Python Workers | Real-time event streaming; decouple ingestion from processing |
| **Database (Relational)** | PostgreSQL | Store dashboards, alerts, users; ACID compliance |
| **Database (Time-Series)** | InfluxDB or TimescaleDB | Store yield/TVL/APY time-series; optimized for time-based queries |
| **Cache** | Redis | Real-time dashboard caching; alert rule matching |
| **File Storage** | S3 | Store exports, backups, historical data |
| **Job Queue** | Bull (Redis) or AWS SQS | Async alert processing, data ingestion |
| **Compute** | AWS Lambda or EC2 | Data processing workers; scale horizontally |
| **Authentication** | OAuth 2.0 (GitHub, Google) | Developer-friendly; reduce friction |

### Data Model (Core Entities)

```
User
├─ id (UUID)
├─ email
├─ github_id
├─ wallets (relationship)
└─ created_at

Organization
├─ id (UUID)
├─ name
├─ members (relationship)
├─ subscription_tier
└─ api_key

Dashboard
├─ id (UUID)
├─ org_id (foreign key)
├─ name
├─ filters (JSONB: protocol, risk_level, min_apy)
├─ visualizations (JSONB: chart configs)
├─ shared_with (relationship to users)
├─ created_at
└─ last_updated

Pool (Time-series data)
├─ id (UUID)
├─ protocol (aave | compound | curve | convex | lido)
├─ pool_address
├─ pool_name
├─ timestamp
├─ apy (real-time)
├─ tvl
├─ collateral_ratio
├─ exploit_history
├─ risk_score (0-100)
└─ data_source (alchemy | infura | thegraph)

Alert
├─ id (UUID)
├─ dashboard_id (foreign key)
├─ condition (JSONB: {field: "apy", operator: ">", value: 50})
├─ trigger_count (how many times fired)
├─ last_triggered_at
├─ notification_channels (slack, discord, email)
├─ created_at

AlertEvent (log of all alerts fired)
├─ id (UUID)
├─ alert_id (foreign key)
├─ pool_id (foreign key)
├─ triggered_at
├─ user_acknowledged
├─ action_taken (dashboard_visited | saved | dismissed)
```

---

## 6. Data Model & Integrations

### API Endpoints (MVP)

| Endpoint | Method | Purpose | Auth |
|---|---|---|---|
| `/auth/github` | POST | GitHub OAuth callback | None (public) |
| `/dashboards` | GET | List dashboards | JWT |
| `/dashboards` | POST | Create dashboard | JWT |
| `/dashboards/{id}` | GET | Get dashboard config + live data | JWT |
| `/dashboards/{id}` | PUT | Update dashboard | JWT |
| `/pools` | GET | List pools (filterable by protocol, APY, risk) | JWT |
| `/pools/{id}` | GET | Get pool details + history | JWT |
| `/pools/yields` | GET | Current top yields (paginated, ranked) | JWT |
| `/pools/arb` | GET | Arbitrage opportunities | JWT |
| `/alerts` | GET | List user's alerts | JWT |
| `/alerts` | POST | Create alert | JWT |
| `/alerts/{id}` | DELETE | Delete alert | JWT |
| `/alerts/events` | GET | Alert history (paginated) | JWT |
| `/teams` | GET/POST | Manage teams | JWT |
| `/teams/{id}/members` | POST | Invite member | JWT |
| `/export` | POST | Export dashboard data to CSV/JSON | JWT |
| `/webhooks/alchemy` | POST | Webhook for new pool data | HMAC |

### Data Sources & Refresh Frequency

| Source | What | Latency | Refresh | Cost |
|---|---|---|---|---|
| **Alchemy API** | Smart contract calls, state, events | <5 sec | 5-10 sec | $0.01 per 1K calls (~$500/month for MVP usage) |
| **Etherscan API** | Historical transactions, addresses, gas | <10 sec | 30 sec | Free tier OK for MVP |
| **The Graph** | Protocol subgraphs (Aave, Curve, etc.) | 30 sec | 30 sec | Free tier OK for MVP |
| **Coingecko API** | Token prices | <30 sec | 30 sec | Free tier OK |
| **Manual Inputs** | Custom pool configs, risk adjustments | N/A | Manual | User input |

**Total Data Cost (MVP):** ~$600-800/month

---

## 7. Security Considerations

### Security Architecture (Crypto-Specific)

#### 1. No Private Key Exposure
- ✅ **Read-only wallet connection** — Users never sign transactions; only view balances
- ✅ **No key storage** — Don't ask for private keys; external tools handle signings
- ✅ **Wallet verification** — Users verify ownership via signature (not storage)

#### 2. On-Chain Data Safety
- ✅ **Only public data** — No access to private pools or internal transfers
- ✅ **No fund transfers** — Tool is read-only; can't initiate transactions
- ✅ **Safe API integrations** — Use reputable providers (Alchemy, Infura); validate responses

#### 3. Alert & Notification Security
- ✅ **No sensitive data in alerts** — Never include wallet address, balance in Slack/Discord messages
- ✅ **Rate limiting** — Prevent alert spam; max 100 alerts per account per day
- ✅ **Verified channels** — Users verify Slack workspace ownership before enabling

#### 4. Authentication & Authorization
- ✅ **GitHub/Google OAuth** — Industry standard; no password management
- ✅ **JWT tokens** — 1-hour expiry; refresh tokens for sessions
- ✅ **API keys** — Support API key auth for integrations; allow rotation
- ✅ **RBAC** — Admin / Analyst / Viewer roles; enforce at API layer

#### 5. Data Privacy
- ✅ **User data isolation** — Dashboards/alerts never shared across orgs
- ✅ **No analytics tracking** — Don't track asset amounts, portfolio composition
- ✅ **GDPR-ready** — Data export + deletion APIs
- ✅ **Compliance logs** — Audit trail of all data exports

#### 6. Infrastructure Security
- ✅ **VPC isolation** — Data processing in isolated VPC
- ✅ **Rate limiting** — API rate limits (1K req/min); prevent abuse
- ✅ **DDoS protection** — CloudFlare
- ✅ **Secrets management** — AWS Secrets Manager; never hardcode API keys
- ✅ **Audit logging** — All user actions logged

#### 7. Regulatory Compliance
- ✅ **No AML/KYC** — We're a data tool, not a financial service
- ✅ **No trade execution** — Can't trade; only view opportunities
- ✅ **No advisory** — Don't make recommendations; only show data
- ✅ **SOC2 Type I roadmap** — Pursue within 6 months

### Threat Model

| Threat | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Private key exposure in logs** | Low | Critical | Never log PII or key data; audit logging rules |
| **Alchemy API key compromise** | Low | High | Rotate keys monthly; use least-privilege; alert on anomalous usage |
| **Data injection (fake yields)** | Medium | Medium | Validate all API responses; cross-reference multiple sources |
| **Rate-limit DoS** | Medium | Medium | Rate limiting; CloudFlare; alert on spike |
| **User fund loss from bad alerts** | Low | High | Disclaimers in UI; "For informational purposes only"; no guarantees |
| **Wallet address linkage** | Low | Medium | Don't correlate wallet address with personal data; GDPR compliance |

---

## 8. SMB Onboarding Flow

### Onboarding Path (Step-by-Step)

**Day 0-1: Discovery → Signup**
```
1. Land on https://yieldlabs.io
   ↓
2. See: "Find $100K in hidden yields"
   - Video (2 min): "We found 15% APY opportunity in Curve that Dune missed"
   - Social proof: "Used by 100+ DeFi traders"
   ↓
3. CTA: "Try Free (30 dashboards, instant access)"
   - Sign in with GitHub or Google
```

**Day 1: First Dashboard (< 5 min)**
```
1. OAuth callback (20 sec)
   ↓
2. Land on dashboard
   - Prompt: "Let's find the best yields"
   ↓
3. Click "Top Opportunities" (pre-built template)
   ↓
4. Auto-load top 10 pools (Aave, Curve, Compound, etc.)
   - Shows: Aave DAI 8.2% | Curve USDC 12.5% | Convex CRV 18.1%
   - Each pool shows: APY, TVL, Risk Score, Audit Status
   ↓
5. User clicks on "Convex CRV 18.1%"
   - Expanded view: Historical APY, risk breakdown, audit info
   ↓
6. Success: "You've found a 18.1% opportunity!"
   - CTA: "Set alert when APY drops below 15%?"
```

**Day 1-2: First Alert (< 2 min)**
```
1. Click "Create Alert"
   ↓
2. Fill simple form:
   - Protocol: [Convex] (auto-filled)
   - Condition: [APY < 15%]
   - Notification: [Slack] (with workspace auth)
   ↓
3. Alert created
   - Success: "Alert saved! You'll get Slack notifications."
   - CTA: "Add another alert?"
```

**Day 2-7: Team Collaboration (< 3 min)**
```
1. Dashboard → "Team" tab
   ↓
2. Click "Invite member"
   ↓
3. Enter email
   ↓
4. Member gets invite
   ↓
5. Member signs in; auto-added
   - Shared dashboards visible
```

**Day 7-14: Paid Upgrade (< 1 min)**
```
1. User hits free tier limit (3 dashboards)
   ↓
2. Banner: "Create unlimited dashboards?"
   ↓
3. Click → Stripe checkout
   ↓
4. $399/month or $3,990/year (-17%)
   ↓
5. Instant activation
```

---

## 9. Pricing Model

### Pricing Strategy

| Tier | Target | Price | Includes | Use Case |
|---|---|---|---|---|
| **Free** | Evaluating tool | $0 | 3 dashboards; 10 alerts/month; 5 pools | Trader exploring; freelancer |
| **Pro** | Active traders, teams | $399/month or $3,990/year | Unlimited dashboards; unlimited alerts; 500 pools; Slack/Discord; API | DeFi protocol treasury manager; trading desk |
| **Enterprise** | Large teams, institutions | $2K+/month | Custom limits; custom integrations; SSO; SLA | Hedge fund; DeFi protocol (100+ AUM) |

### Pricing Rationale

- **Value-based:** Priced at ~5% of value delivered (identifies $100K-500K in annual yield; we charge $4.8K/year)
- **Competitive:** 50-60% cheaper than Nansen ($12K/year); 10x cheaper than Glassnode enterprise ($50K/year+)
- **Freemium model:** Free tier drives adoption; high trial-to-paid conversion (50%+)

### Expansion Revenue

| Expansion Path | Trigger | New ACV |
|---|---|---|
| **Pro → Enterprise** | Team grows to 20+ people | $24K-50K/year |
| **Add-on: Custom Pool Monitoring** | Team tracks internal liquidity pools | +$200/month |
| **Add-on: Historical Backtesting** | Team wants to validate strategies | +$300/month |
| **Add-on: Dedicated Data Scientist** | Team wants custom ML models | +$2K/month |

---

## 10. Unit Economics

### Revenue Model

| Metric | Value | Calculation |
|---|---|---|
| **Blended ACV** | $22,000 | $399×12 (Pro) × 70% + $25K (Enterprise seed) × 30% |
| **Avg Team Size/Customer** | 4 users | Typical: 2-6 person analytics team |
| **Seats/User Cost** | $5,500/year | $22K ACV ÷ 4 users |
| **Expansion Revenue (Year 2)** | 20% | Add-ons + higher-tier migrations |

### Acquisition Cost

| Item | Cost | Notes |
|---|---|---|
| **Content Marketing** | $200 | Blog posts, Twitter, SEO (amortized) |
| **Community/Partnerships** | $400 | Discord sponsorships, Dune community collaboration |
| **Founder Sales** | $500 | Founder outreach to CTOs/treasurers (founder time) |
| **Paid Ads** | $300 | LinkedIn, Google ads (low initial spend) |
| **Total CAC** | **$1,400** | Range: $1.2K-1.8K |

### Retention & Expansion

| Metric | Target | Rationale |
|---|---|---|
| **Gross Churn** | 10%/month | Slightly higher than developer tools (users may find opportunities elsewhere; market cycles) |
| **Net Churn** | -5% (expansion) | Expansion revenue (20%) exceeds churn |
| **Net Revenue Retention** | 110% | Very healthy for analytics tools |
| **Avg Customer Lifetime** | 10 years | 1 / 10% churn |

### Unit Economics Summary

| Metric | Value | Benchmark | Status |
|---|---|---|---|
| **LTV** | $33,000 | — | (ACV $22K × 1.5 years × 1.10 NRR) |
| **CAC** | $1,400 | — | — |
| **LTV:CAC Ratio** | **23.6:1** | ≥3:1 | ✅✅ EXCELLENT |
| **Payback Period** | **7.6 months** | ≤18 months | ✅ GOOD |
| **Gross Margin** | **65%** | ≥60% | ✅ HEALTHY |

**Note:** Higher CAC than Smart Contract Testing due to more complex sales (need to educate on vertical focus, data infrastructure costs). Still healthy.

---

## 11. GTM Strategy

### Go-to-Market Model: **Product-Led Sales + Community-Driven**

#### Phase 1: Community Seeding (Months 1-3)

**Goal:** Build credibility in yield farming community; get first 5-10 customers free-to-paid

**Tactics:**
1. **Twitter/Discord Presence**
   - Daily: Share top yield opportunities (no login required)
   - Weekly: Educational thread on yield farming (@ key accounts)
   - Monthly: Live AMA "What we're building + why"
   - Goal: 500-1K followers → 50-100 organic signups/month

2. **Yield Farming Communities**
   - Bancor Discord (1K+ members)
   - Yearn Discord (5K+ members)
   - Curve Discord (2K+ members)
   - Aave Discord (3K+ members)
   - Strategy: Participate genuinely; share tool when relevant (not spam)

3. **Content Marketing (Thought Leadership)**
   - Blog: "The $100K yield opportunity you're missing" (top yields nobody talks about)
   - Blog: "Why Dune queries are killing your APY" (vs competitor positioning)
   - Goal: 100-200 signups/month from SEO/organic

#### Phase 2: Product-Led Expansion (Months 4-6)

**Goal:** Scale beyond founder involvement; reach 20-35 customers

**Tactics:**
1. **Free Tier Expansion**
   - Start: 3 dashboards, 10 alerts
   - Make so valuable that 30-40% of free users can do basic yield tracking
   - Free tier = marketing channel; conversion rate target: 10-15% → paid

2. **Partnerships**
   - DeFi protocols (Aave, Curve): Feature our tool in their docs/blog
   - Dune (if API available): Cross-promotion ("Export to YieldLabs for alerts")
   - Web3 wallets: "Set yield alerts for your portfolio"

3. **Content Virality**
   - Create shareable dashboards: "Top 20 Stablecoin Yields Today"
   - Tweet daily: Real-time opportunities (with screenshot)
   - Goal: Viral moments drive 200-500 signups in 48 hours

#### Phase 3: Sales + Scale (Months 7-12)

**Goal:** $150K-250K ARR; prepare for Series A

**Tactics:**
1. **Founder-Led Sales (Secondary)**
   - Target: Large treasuries, hedge funds ($10M+ AUM)
   - Message: "How we help [DeFi protocol] optimize $5M treasury from 3% to 8% yield"
   - Volume: 2-3 demos/week
   - Goal: 10-15 enterprise customers at $2-5K/month

2. **Community Evangelism**
   - Hire DevRel (Month 8); focus on yield farming community
   - Sponsorships: Yield farming conferences, Twitter Spaces
   - Ambassador program: Pay power users for referrals

3. **Paid Acquisition (Measured)**
   - LinkedIn ads: Target CFOs, treasurers at DeFi projects
   - Google ads: "Yield farming analytics"
   - Budget: Start $1K/month; scale based on ROAS

---

### Sales Playbook (Yield Farming Focus)

#### Discovery Call (15 min)

**Opening (2 min):**
```
"Hi [Name], thanks for joining. Quick context: we built analytics 
for yield farming—helps teams find better opportunities than 
spreadsheets. Most treasuries tell us they're missing $50-100K/quarter 
in optimizations. Sound familiar?"
```

**Problem Qualification (8 min):**
```
1. "Walk me through how you currently track yields."
   → Listen: Spreadsheet, Dune, manual
   
2. "How often do you rebalance? Who makes the decision?"
   → Listen: Weekly, monthly, data-driven or gut-feel
   
3. "What's the biggest risk you're taking now?"
   → Listen: Impermanent loss, exploit risk, APY falling
   
4. "If you could make one improvement to your current process, what would it be?"
   → Listen for: Real-time alerts, less manual work, better risk visibility
```

**Solution Positioning (3 min):**
```
"Here's what we do: [SCREEN SHARE]
1. Connect to your wallet (read-only, no keys needed)
2. See all your yields in one place
3. Get alerts when opportunities appear or risks emerge

For example: [Show their assets + top yields]
Your portfolio is 70% in Aave at 8%. 
But Convex is offering 18% on similar assets.
That's $200K/quarter in additional yield you're leaving on table.

We'd have alerted you yesterday."
```

**Buying Signal (2 min):**
```
1. "Does this help with what you described?"
   → If YES: "Great. Want a live 10-min demo?"
   
2. "When do you usually make treasury decisions?"
   → Listen for timing: Board meeting, quarterly review
   
3. "Who else needs to see this?"
   → Decision-maker mapping: CFO, Treasury manager, board
```

#### Demo Call (15-20 min)

**Demo Sequence:**
```
STEP 1 (2 min): Account setup
→ Sign in with email
→ Connect wallet (demo address)
→ Instant load of current yields

STEP 2 (5 min): Yield comparison
→ Show: Top 20 opportunities across protocols
→ Highlight: Best stablecoin yields (their preference)
→ Show: Risk scores (audit status, TVL stability)

STEP 3 (4 min): Alerts + notifications
→ Create alert: "Alert if Curve USDC < 10%"
→ Show Slack integration: Real-time notification
→ Demo: "Set 10 alerts in 5 minutes; stop checking manually"

STEP 4 (3 min): ROI calculation
→ Math: "Your $5M portfolio at 3% = $150K/year"
→ Show: "At 8% (achievable) = $400K/year = $250K gain"
→ Message: "We help you find that $250K"

STEP 5 (2 min): Pricing
→ Free: $0 (3 dashboards)
→ Pro: $399/month (unlimited)
→ Annual: $3,990/year (-17%)
→ "Try free for 30 days; no credit card"
```

#### Objection Handling

| Objection | Response |
|---|---|
| **"We use Dune; it's sufficient"** | "Dune is great for analytics. But it's slow (queries take 5-10 min) and requires SQL. We're optimized for real-time yield alerts. Try both side-by-side; see the difference." |
| **"Yields are too risky; we're not rebalancing"** | "We're not saying take more risk. We're saying: if you're already in stablecoins, why take 3% when 8% is available with same risk? Use our alerts to sleep better at night." |
| **"Our treasury is too small; we don't need this"** | "Even $100K can earn $5-10K more per year with optimization. We start at $399/month; most customers recoup the cost in their first trade." |
| **"We need compliance/audit proof"** | "We provide complete audit logs of all data accessed, dashboards created, alerts triggered. SOC2 roadmap by Q2. We can share examples." |

---

## 12. First Customer Success Criteria

### Success Definition for Beta Customers

| Criterion | Target | Measurement | Owner |
|---|---|---|---|
| **Activation** | 100% complete setup | Dashboard + 2 alerts within 3 days | Customer |
| **Usage** | ≥2x per week | Dashboard visits tracked | Product |
| **Retention** | 30-day active | Still using after 30 days | Analytics |
| **Engagement** | Team adoption | ≥2 team members invited | Analytics |
| **Satisfaction** | NPS ≥8 | Monthly survey | Customer Success |
| **ROI Realized** | Documented | Customer identifies ≥1 yield opportunity | Customer |

### Measurable Outcomes

**Operational Metrics:**
```
1. Time spent on yield research: -60%
   - Before: 4 hours/day on Dune + spreadsheets
   - After: 1 hour/day on YieldLabs
   
2. Yield optimization realized: +2-3% APY
   - Before: 5% blended yield (conservative approach)
   - After: 7-8% blended yield (informed approach)
   
3. Decision-making speed: 10x faster
   - Before: 1-2 days to decide on new pool
   - After: 1-2 minutes (real-time alerts)
```

**Business Metrics:**
```
1. Annual yield capture: +$100K-300K
   - Before: $1M portfolio at 3% = $30K/year
   - After: $1M portfolio at 6% = $60K/year (+$30K captured)
   
2. Risk reduction: Better protocol/pool selection
   - Before: Picked based on highest APY (risk-blind)
   - After: Picks based on risk-adjusted returns (audit, TVL, exploit history)
   
3. Team adoption: Treasurers + traders active
   - Before: Only CFO had access; others did manual analysis
   - After: 3-5 people can create dashboards; collaborative decision-making
```

### Retention Signals

**Green Flags:**
- ✅ Weekly dashboard views (at least 2x)
- ✅ Alerts enabled + acted upon
- ✅ Team members invited + active
- ✅ Positive sentiment: "Saved us money" / "Better than Dune"
- ✅ Upgrade from Free → Pro within 14 days

**Red Flags:**
- ❌ No usage after Day 7
- ❌ Alerts never set or viewed
- ❌ No team members invited (stuck at 1 person)
- ❌ Complaints: "Slow data" or "Don't trust the yields"

### Expansion Opportunities

| Stage | Trigger | Upsell | ACV |
|---|---|---|---|
| **Month 1-3** | Free tier limit (3 dashboards) | Upgrade to Pro | $0 → $399/mo |
| **Month 3-6** | Team grows (10+ people) | Dedicated data scientist + custom models | $399/mo → $2.5K/mo |
| **Month 6-12** | Large AUM ($50M+) | Enterprise tier + SLA | $2.5K/mo → $5K+/mo |

---

## 13. Development Roadmap

### MVP Timeline (Weeks 1-12)

```
WEEK 1-2: Foundation & Architecture
├─ Project setup (Next.js frontend, Node.js backend, timeseries DB)
├─ GitHub/Google OAuth
├─ PostgreSQL + Redis + InfluxDB setup
└─ Dashboard UI skeleton

WEEK 3-4: Data Integration (Alchemy, Etherscan)
├─ Alchemy API integration (balance, yield data)
├─ Etherscan API (address data, gas prices)
├─ Data refresh pipeline (5-10 sec latency)
└─ Pool database (100+ major pools)

WEEK 5-6: No-Code Dashboard Builder
├─ Drag-drop interface (React Flow)
├─ Filterable pool list
├─ Real-time updates (websockets)
└─ Save/share dashboards

WEEK 7-8: Risk Scoring Engine
├─ Audit status (Certora, Trail of Bits, etc.)
├─ TVL stability analysis
├─ Exploit history tracking
├─ Algorithmic risk score (0-100)

WEEK 9-10: Alerts & Notifications
├─ Alert rules engine (JSON-based conditions)
├─ Slack integration + OAuth
├─ Discord integration
├─ Email notifications

WEEK 11-12: Launch Prep
├─ Arbitrage detection (simple: APY difference across pools)
├─ API documentation
├─ Freemium tier enforcement
├─ Stripe integration (Pro billing)
└─ Beta launch (pre-selected users)
```

### Phase 1: Scale (Months 4-6)

**Goals:** 20-35 customers; validate vertical focus; $60-80K MRR

**Features:**
- [ ] Advanced arbitrage detection (DEX rebalancing opportunities)
- [ ] Historical backtesting (validate strategies over 30/90 days)
- [ ] Custom risk metrics (allow teams to define own risk model)
- [ ] Portfolio tracking (show personal/team P&L)
- [ ] Multiple chain support (Polygon, Arbitrum)
- [ ] SSO/SAML (enterprise requirement)

### Phase 2: Expansion (Months 7-12)

**Goals:** $150-250K ARR; Series A readiness; 2nd vertical launch

**Features:**
- [ ] Options analytics (second vertical: IV, Greeks, gamma exposure)
- [ ] NFT markets analytics (floor price, rarity, trading patterns)
- [ ] Advanced ML models (predict yield movements, exploit risks)
- [ ] Webhooks API (send alerts to custom systems)
- [ ] White-label option (protocols can embed dashboard)
- [ ] Community data marketplace (users share custom metrics)

---

## 14. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Data latency too high** | Medium | High | Multiple data sources (Alchemy + Infura + The Graph); real-time caching |
| **Yields drop due to market cycle** | High | Medium | Focus on arbitrage + risk management; not yield prediction |
| **DeFi protocol hack** | Medium | High | Comprehensive audit tracking; real-time monitoring; incident alerts |
| **High data infrastructure costs** | Medium | Medium | Optimize queries; cache aggressively; negotiate with Alchemy |
| **Competitive response from Dune/Nansen** | Medium | Medium | Vertical focus (they're generic); faster data; better UX |
| **Regulatory crackdown on DeFi** | Low | High | We're a data tool, not financial advisor; disclaimers; no fund management |
| **Churn higher than 10%** | Low | Medium | Obsess over customer success; NPS surveys; proactive outreach |

---

## 15. Success Milestones & Go/No-Go Gates

### Month 1-2: Problem Validation Gate

**Success Criteria:**
- [ ] 25+ customer discovery calls
- [ ] 80%+ report spending 3+ hours/day on yield research
- [ ] 75%+ say they'd pay $400+/month
- [ ] 60%+ currently use Dune (validates TAM)

**Go/No-Go:** Go if 3/4 criteria met

### Month 3: Product-Market Fit Gate

**Success Criteria:**
- [ ] 8+ beta customers onboarded (free)
- [ ] Average activation time: <10 min
- [ ] 75%+ set ≥2 alerts
- [ ] 80%+ report alerts useful
- [ ] 70%+ ready to pay ($399/month)

**Go/No-Go:** Go if 4/5 criteria met

### Month 6: Revenue Gate

**Success Criteria:**
- [ ] 15-20 paying customers
- [ ] $6K-8K MRR run rate
- [ ] <10% monthly churn
- [ ] NPS ≥7
- [ ] CAC ≤ $1,800

**Go/No-Go:** Go if 4/5 criteria met

---

## 16. Founder-Market Fit

### Required Skills

| Area | Depth | Founder Has? | Gap |
|---|---|---|---|
| **Solidity/Smart Contracts** | Medium | Intermediate+ | Deploy contracts; understand ERC20, liquidity pools |
| **DeFi Domain Knowledge** | High | High | Understand yield farming, liquidity mining, impermanent loss |
| **Data Infrastructure** | High | Medium-High | Build ETL pipelines; understand time-series databases |
| **B2B Sales** | Medium | Medium | Close deals; talk to treasurers + CFOs |
| **Data Science** | Medium | Optional | Can hire; not founder requirement for MVP |
| **Community** | High | High | Network in DeFi (Twitter, Discord, conferences) |

### Ideal Founder Profile

✅ **Strong Match:**
- 3+ years in DeFi (trading, protocol development, or investments)
- 5+ years in software (backend/data engineering preferred)
- Active in DeFi community (Twitter followers, Discord presence)

⚠️ **Workable:**
- 2+ years DeFi knowledge
- 3+ years software
- Can hire co-founder for data/analytics expertise

---

## 17. Next Steps (Week 1)

### Immediate Actions (This Week)

1. **Validate ICP** (Days 1-3)
   - [ ] Schedule 20 calls with treasury managers / head of analytics at DeFi protocols
   - [ ] Script: "We're building yield farming analytics. How many hours/day do you spend on Dune or spreadsheets?"
   - [ ] Goal: 80%+ confirm pain; 70%+ willing to pay $400+/month

2. **Technical Feasibility** (Days 2-5)
   - [ ] Spike: Can we get <10 sec latency from Alchemy for 100+ pools?
   - [ ] Spike: Can we build risk scoring engine (audits + TVL stability)?
   - [ ] Output: 1-page technical summary

3. **Competitive Positioning** (Day 4-5)
   - [ ] Deep dive: Spend 1 hour on Dune; 1 hour on Nansen
   - [ ] Output: "Why we're better" positioning doc

4. **Team Setup** (Day 1)
   - [ ] Recruit co-founder or hire #1 engineer (data/backend)
   - [ ] Must-have: DeFi knowledge + Python or Go experience

### Week 2-4 Actions

- [ ] Build this MVP spec (delivered)
- [ ] Create project board (GitHub / Linear)
- [ ] Begin MVP development (Week 2)
- [ ] Close first 5 beta customers

### Month 1-3 Actions

- [ ] Execute MVP (Weeks 1-12)
- [ ] Iterate with 10-15 beta customers
- [ ] Prepare public launch (Month 3)

---

**Document Status:** ✅ Complete MVP Specification  
**Version:** 1.0  
**Last Updated:** January 25, 2026

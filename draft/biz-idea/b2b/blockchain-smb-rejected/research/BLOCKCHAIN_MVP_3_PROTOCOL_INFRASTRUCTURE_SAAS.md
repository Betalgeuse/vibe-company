# Protocol Infrastructure / L2 / ZK - B2B SMB MVP Specification

**Date:** January 25, 2026  
**Priority:** #3 (GTM Fit: 24/40)  
**Target ICP:** Heads of Infrastructure at L2 scaling solutions, ZK protocol teams, rollup operators  
**ACV Target:** $25-40K/year  
**ARR Year 1 Goal:** $250-400K  

---

## Executive Summary

### One-Liner
> "Infrastructure-as-a-Service for L2 rollups and ZK protocols" — Pre-built data indexing, state management, and monitoring for teams building scaling solutions without hiring 20 DevOps engineers

### Key Metrics Target

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers | 8-15 | 25-40 | 60-100 |
| ACV | $30-40K | $35-50K | $40-60K |
| ARR | $240-600K | $875M-2M | $2.4M-6M |
| Gross Margin | 60% | 68% | 75% |
| CAC | $2K-3K | $1.5K-2K | $1K-1.5K |
| LTV:CAC Ratio | 2.5:1 | 3.2:1 | 4+:1 |

**Note:** Higher ACV + longer sales cycle than testing/analytics; lower adoption rate (fewer protocols scaling than total developers testing)

---

## 1. B2B ICP Definition

### Target Segment

| Item | Definition |
|------|-----------|
| **Primary:** L2 Rollups | Arbitrum, Optimism, StarkNet, zkSync, Polygon, Scroll (teams building rollup infrastructure) |
| **Secondary:** ZK Protocols | Aleo, Noir, circom (teams building ZK proving/verification systems) |
| **Tertiary:** Protocol Teams | Any blockchain protocol (Ethereum, Cosmos, Solana teams scaling) needing indexing/state |
| **Company Size** | 10-50 person infrastructure teams |
| **Revenue Range** | $10M-100M+ funding; pre-revenue or $1M-10M ARR |
| **Geography** | US/EU (70%); Asia (30%) |
| **Tech Stack** | Rust, Go, Python; custom blockchain tech stacks; devops-heavy |
| **Development Stage** | Testnet launch or mainnet approaching (6-12 month timeline) |

### Buying Committee

| Role | Title | Pain Point | Success Metric | Authority |
|------|-------|---|---|---|
| **Economic Buyer** | Head of Engineering or CTO | Infrastructure bottleneck; can't hire 15 DevOps engineers in time for mainnet | Ship mainnet on schedule; reduce ops burden | **YES** ($30-40K spend) |
| **Champion** | Head of Infrastructure or Platform Lead | Managing sequencer, data indexing, state management; 70% of sprint = infrastructure | Reduce infrastructure work from 70% to 30% of sprint | **YES** ($30-40K spend) |
| **End Users** | Infrastructure Engineers (3-8) | Writing indexing code, state management, monitoring; repetitive work | Pre-built, proven infrastructure; focus on protocol innovation | **Indirect** |
| **Blocker** | Security Officer | Maintaining security guarantees while outsourcing infrastructure | Audit-ready code; open-source; no proprietary black boxes | **Recommendation** |

### Trigger Events

1. **Mainnet Launch Date Set** — "We're launching mainnet in 6 months. We need indexing + state management ready."
2. **Scaling Challenges** — "Our testnet indexer is breaking at 1000 TPS. We need something that scales to 10K TPS."
3. **Series B Fundraising Closed** — "We just raised $20M. Now we need production infrastructure."
4. **Key Ops Engineer Resigned** — "Our lead DevOps just joined another protocol. We can't build infrastructure from scratch."
5. **Security Audit Requirement** — "Our auditors say custom indexing is risky. We need proven, audited infrastructure."

---

## 2. Value Proposition

### ROI Statement

> "With **InfraStack** (or your product name), L2/ZK protocol teams ship mainnet **6 months faster** by outsourcing proven indexing, state management, and monitoring infrastructure—saving **$500K-2M in engineering salary** (10-20 ops engineers @ $100-200K/year) and **6-12 months of development time**."

### Quantified Value

| Metric | Build From Scratch | With InfraStack | Impact | Annual Benefit |
|---|---|---|---|---|
| **Time to Mainnet** | 12-18 months | 6-9 months | 50% acceleration | Go-to-market 6 months earlier = $5-20M in early user acquisition |
| **Engineering Headcount** | 15-20 ops engineers | 3-5 ops engineers | 70% reduction | Save $1.5M-3M in salary + benefits |
| **Infrastructure Downtime** | 5-10% annually | <0.1% | 50-100x improvement | Prevent $100K-500K in lost fees + reputation |
| **Security Auditing Time** | 3-4 months (custom code) | 2-3 weeks (proven code) | 80% faster | Save $50K-100K in audit costs |
| **Monitoring/Alerts Setup** | 4-6 weeks | 1 week | 75% faster | Save 1-2 engineer-months |
| **Data Indexing Accuracy** | 95% (custom, buggy) | 99.9%+ (proven) | 5x fewer bugs | Prevent compliance issues + user trust loss |

**Total Benefit per Protocol:** **$2M-5M Year 1** (salary + speed to market)  
**Payback Period:** 1-2 months at $30-40K ACV

### Competitive Differentiation

| vs Competitor | Their Weakness | Our Strength |
|---|---|---|
| **Build In-House** | Takes 12-18 months; requires 15+ ops engineers; high risk of bugs/security issues | Pre-built in 3 months; proven on 3+ protocols; audited code |
| **Alchemy/Infura** | Generic data endpoints; not infrastructure support; doesn't solve indexing/state management for L2 | Vertical-specific infrastructure; handles sequencer, DA layer, state management |
| **AWS/Cloud Vendors** | No blockchain expertise; generic compute; protocols need custom solutions | Blockchain-first architecture; L2 rollup optimized |
| **Competitor Protocols Sharing Code** | Free but requires ongoing maintenance; security risk; no SLA support | Professional support + SLA; security audits; ongoing maintenance |
| **Legacy Enterprise Solutions** | Expensive ($500K+/year); slow to iterate; built for Ethereum 1.0 | Modern, scalable architecture; L2/ZK-native |

**Key Differentiator:** "Ship mainnet in 6 months, not 18. Use our proven infrastructure."

---

## 3. Product Spec (MVP - 14 weeks)

### Core Features (MVP Phase)

| Feature | Description | Priority | Weeks | Why It's Needed |
|---|---|---|---|---|
| **1. Indexing Engine (Sequencer Data)** | Read sequencer output; build indexed state (accounts, balances, contract state). Supports EVM + custom chains. | **P0** | 6-8 | **Core value**: Without indexing, can't query state efficiently. This is the main bottleneck. |
| **2. Real-Time State Management** | Maintain canonical state; handle reorgs; consistency guarantees. Key-value store at scale. | **P0** | 5-7 | **Critical**: State is the foundation. Must be correct + fast. |
| **3. JSON-RPC Compatibility Layer** | Standard blockchain RPC (eth_call, eth_getBalance, etc.). Drop-in replacement for Infura/Alchemy. | **P0** | 4-5 | **Day 1 usability**: Apps expect standard RPC. Without it, can't integrate. |
| **4. Query API (GraphQL + REST)** | Flexible querying of indexed data. Filters, pagination, aggregations. | **P1** | 4-5 | **Power users**: Devs want complex queries without SQL. |
| **5. Real-Time Webhooks** | Subscribe to state changes (new blocks, tx, contract events). Stream to external systems. | **P1** | 3-4 | **Integrations**: External systems need real-time updates. |
| **6. Monitoring & Observability Dashboard** | Track indexer health, data freshness, query performance, error rates. | **P1** | 3-4 | **Operations**: Ops teams need visibility into infrastructure health. |
| **7. Proof of Inclusion API** | For ZK protocols: prove specific data is in state (Merkle proofs, etc.). | **P1** | 4-5 | **ZK-specific**: Essential for ZK protocol teams; not needed for L2 teams. |
| **8. Data Persistence (Archive Node)** | Store complete historical state; allow queries on past blocks. | **P2** | 5-6 | **Compliance**: Some protocols need historical data for audits. MVP can skip; add in v1.1. |
| **9. Multi-Chain Connector** | Support multiple rollup chains (Arbitrum, Optimism, custom L2). | **P1** | 3-4 | **Expansion**: One protocol uses this for multiple rollups. |
| **10. Disaster Recovery & Backup** | Automated snapshots; quick recovery from data loss. RTO/RPO guarantees. | **P2** | 3-4 | **Enterprise requirement**: Roadmap for Month 4. |

### MVP Scope (Weeks 1-14 / 3.5 months)

**INCLUDE in MVP:**
- ✅ Features 1-7, 9 (Indexing, state, RPC, query API, webhooks, monitoring, proof of inclusion, multi-chain)
- ✅ EVM chain support (Arbitrum, Optimism mainnet-like chains)
- ✅ Custom chain support (via configuration; Starknet, Polygon variant, etc.)
- ✅ 99.5% uptime SLA guarantee
- ✅ Basic monitoring dashboard
- ✅ API + documentation
- ✅ Team/org management
- ✅ Basic audit logging

**DEFER to Phase 1.5 (Month 4-6):**
- ❌ Feature 8 (Archive node) — expensive storage; add later
- ❌ Feature 10 (Disaster recovery) — add after MVP validates
- ❌ Advanced analytics (query optimization, cost prediction)
- ❌ Multi-zone failover — single region for MVP
- ❌ Custom RPC extensions — standard RPC first
- ❌ ZK proof acceleration (for ZK protocols) — Phase 1.5

### Enterprise-Ready Foundation

- [x] **Multi-tenant architecture** — Each protocol is isolated tenant; no cross-protocol data leakage
- [x] **Role-based access (RBAC)** — Admin / Operator / Developer roles
- [x] **API-first design** — All features via REST/GraphQL; dashboards are secondary
- [x] **Audit logging** — All API calls, config changes, data access logged with user identity
- [x] **Data export** — Can export state snapshots, query results to S3
- [x] **Security isolation** — Network isolation; no shared compute between protocols
- [x] **SLA guarantees** — 99.5% uptime; published status page
- [x] **Compliance-ready** — Audit trails; data persistence; recovery guarantees

### Integration Requirements

| Integration | Priority | Why Needed | Timeline |
|---|---|---|---|
| **Arbitrum Sequencer** | **P0** | #1 L2 customer (50% of target market) | Week 3-4 (MVP) |
| **Optimism Sequencer** | **P0** | #2 L2 customer (30% of target market) | Week 4-5 (MVP) |
| **StarkNet Sequencer** | P1 | Secondary L2 customer | Month 2 (v1.1) |
| **Custom EVM-Compatible Chain** | P1 | Support any L2 (Polygon, zkSync, etc.) | Week 5-6 (MVP) |
| **The Graph Protocol** | P1 | Data augmentation; external indexing | Month 2 (v1.1) |
| **Slack / PagerDuty** | P1 | Ops alerts for protocol team | Week 6-7 (MVP) |
| **Kubernetes / Docker** | P0 | Deployment platform | Week 1 (MVP) |

---

## 4. SMB-Specific Requirements

### Time-to-First-Value: < 30 Minutes (vs Weeks with Custom Build)

| Step | Time | How We Achieve |
|---|---|---|
| 1. Sign up + create org | 2 min | Email + org name |
| 2. Connect to Arbitrum sequencer | 2 min | Paste RPC endpoint; we auto-configure |
| 3. Verify data indexing | 2 min | Dashboard shows "Indexer syncing: 50%..." |
| 4. Wait for full sync (worst case) | 20 min | Depends on chain size; Arbitrum usually <5 min |
| 5. Run first RPC query (eth_getBalance) | 1 min | Copy example from docs; paste into cURL |
| 6. Create first webhook alert | 2 min | "Alert on new transaction in contract X" |
| 7. Receive first alert | 1 min | Slack notification in real-time |
| **Total** | **~30 min** | ✅ Goal (vs 2-3 weeks for build-from-scratch) |

### Activation Milestones

| Milestone | When | Success Signal | Next Action |
|---|---|---|---|
| **1. Signup** | Day 1 | Org created; team invited | "Welcome email" + documentation link |
| **2. First Connection** | Day 1-2 | Sequencer connected; data flowing | "Indexer syncing..." progress email |
| **3. First Query Success** | Day 2-3 | eth_getBalance works; returns correct data | "Your indexer is live!" email + dashboard |
| **4. Webhooks Active** | Day 3-5 | ≥1 webhook configured; receiving events | "Configure more webhooks" email |
| **5. Team Onboarding** | Day 5-10 | ≥2 team members active; running queries | "Your team is set up" email |
| **6. Custom RPC Integration** | Day 5-14 | Apps connected to our RPC endpoint; serving traffic | "Monitoring your RPC" email |
| **7. Paid Conversion** | Day 14-30 | Free tier limit hit; upgrade to Pro | "Upgrade to remove limits" banner |
| **8. Retention** | Day 30+ | Still syncing; serving queries; receiving alerts | "Indexing $X in queries/month" ROI email |

### Success Metrics for Early Users

**Activation Metrics:**
- ✅ 40%+ activation (signup → first RPC query working)
- ✅ 50%+ trial-to-paid (free tier → Pro within 30 days)
- ✅ 90% <30 min time-to-first-value

**Engagement Metrics:**
- ✅ 70%+ weekly active usage (queries daily or more)
- ✅ 60%+ webhooks configured
- ✅ 50%+ team adoption (≥2 team members)

**Retention Metrics:**
- ✅ 80% 30-day retention
- ✅ 70% 90-day retention
- ✅ <5% monthly churn (very sticky; infrastructure is hard to switch)

---

## 5. Technical Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Frontend / API Gateway Layer                │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Dashboard    │  │ JSON-RPC     │  │ GraphQL API  │  │
│  │ (Next.js)    │  │ Endpoint     │  │              │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   Core Services                          │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │ Indexing Engine │  │ State        │  │ Query      │ │
│  │ (Rust + Go)     │  │ Manager      │  │ Engine     │ │
│  │                 │  │ (Distributed │  │            │ │
│  │ - Sequencer     │  │  KV Store)   │  │            │ │
│  │ - L1 Monitor    │  │              │  │            │ │
│  │ - Tx Processor  │  │              │  │            │ │
│  └─────────────────┘  └──────────────┘  └────────────┘ │
│  ┌─────────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │ Webhook Engine  │  │ Monitoring   │  │ Auth/ACL   │ │
│  │                 │  │ & Alerts     │  │            │ │
│  └─────────────────┘  └──────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Infrastructure / Data Layer                 │
├─────────────────────────────────────────────────────────┤
│  ┌────────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │ RocksDB/LMDB   │  │ TimeSeries  │  │ PostgreSQL  │  │
│  │ (State Store)  │  │ (Metrics)   │  │ (Metadata)  │  │
│  │                │  │             │  │             │  │
│  │ (Distributed   │  │ (InfluxDB)  │  │ (Users,     │  │
│  │  Replication)  │  │             │  │  Webhooks)  │  │
│  └────────────────┘  └─────────────┘  └─────────────┘  │
│  ┌────────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │ S3 / GCS       │  │ Message     │  │ Kubernetes  │  │
│  │ (Backups)      │  │ Queue (K8s) │  │ / Container │  │
│  │                │  │             │  │ (Compute)   │  │
│  └────────────────┘  └─────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js + TypeScript | Dashboard + monitoring UI |
| **API Gateway** | Kong or Traefik | Route JSON-RPC + GraphQL; rate limiting |
| **JSON-RPC Engine** | Rust (using web3.rs + similar) | Performance; Ethereum-compatible |
| **Indexing Engine** | Rust or Go | Parallel processing; real-time; low latency |
| **State Store** | RocksDB or LMDB | Embedded KV store; fast state access |
| **Distributed Replication** | etcd or Consul | Multi-node state consistency; failover |
| **Query Engine** | GraphQL (Apollo Server) or custom | Flexible querying; aggregations |
| **Database (Metadata)** | PostgreSQL | Store config, webhooks, audit logs |
| **Time-Series DB** | InfluxDB or TimescaleDB | Monitor indexer health, RPC latency |
| **Job Queue** | Bull (Redis) or Kubernetes Jobs | Process blocks, webhooks |
| **Deployment** | Docker + Kubernetes | Containerized; multi-zone deployment |
| **Authentication** | OAuth 2.0 + API Keys | Git integration + programmatic access |

### Data Model (Core Entities)

```
Organization
├─ id (UUID)
├─ name
├─ chain_type (arbitrum | optimism | starknet | custom)
├─ rpc_endpoint (sequencer URL)
├─ members (relationship)
├─ subscription_tier
└─ created_at

APIKey
├─ id (UUID)
├─ org_id (foreign key)
├─ name
├─ key_hash
├─ rate_limit (1000 req/min default)
├─ permissions (read | write)
├─ last_used_at
└─ rotated_at

Webhook
├─ id (UUID)
├─ org_id (foreign key)
├─ event_type (new_block | new_tx | contract_event | state_change)
├─ filter (JSONB: contract_address, topic, etc.)
├─ destination_url
├─ is_active
├─ last_triggered_at
└─ retry_count

Alert
├─ id (UUID)
├─ org_id (foreign key)
├─ condition (JSONB: tx_count > 1000, latency > 5000ms, etc.)
├─ notification_channels (slack | pagerduty | email)
├─ severity (info | warning | critical)
└─ created_at

IndexerMetrics (Time-series)
├─ timestamp
├─ org_id (foreign key)
├─ current_block
├─ sync_lag_ms
├─ queries_per_sec
├─ avg_query_latency_ms
├─ error_rate
├─ storage_used_gb
└─ uptime_percent

AuditLog
├─ id (UUID)
├─ org_id (foreign key)
├─ user_id
├─ action (api_call | config_change | export)
├─ resource_type (webhook | api_key | alert)
├─ timestamp
└─ details (JSONB)
```

---

## 6. Data Model & Integrations

### API Endpoints (MVP)

| Endpoint | Method | Purpose | Auth |
|---|---|---|---|
| `/auth/github` | POST | OAuth callback | None |
| `/orgs` | GET/POST | Manage organizations | JWT |
| `/orgs/{id}/config` | GET/PUT | Chain config + RPC settings | JWT |
| `/api-keys` | GET/POST | Manage API keys | JWT |
| `/api-keys/{id}` | DELETE | Revoke key | JWT |
| `/webhooks` | GET/POST | Manage webhooks | JWT |
| `/webhooks/{id}` | DELETE | Remove webhook | JWT |
| `/webhooks/test` | POST | Test webhook delivery | JWT |
| `/alerts` | GET/POST | Manage alerts | JWT |
| `/metrics` | GET | Dashboard metrics (blocks, latency, uptime) | JWT |
| `/status` | GET | System health | None (public) |
| `/json-rpc` | POST | Standard JSON-RPC (eth_\*) | API Key |
| `/graphql` | POST | GraphQL queries | API Key |

**Note:** JSON-RPC and GraphQL endpoints use API Key auth (not JWT) for compatibility with standard clients

### Integration Requirements

| Integration | Priority | Why Needed | Timeline |
|---|---|---|---|
| **Arbitrum Sequencer API** | **P0** | Connect to Arbitrum; read sequencer output | Week 2-3 (MVP) |
| **Optimism Sequencer API** | **P0** | Connect to Optimism | Week 3-4 (MVP) |
| **Ethereum L1 (Geth/Infura)** | P1 | Monitor finality; track deposit/withdraw on L1 | Week 4-5 (MVP) |
| **Slack Integration** | P1 | Send alerts to team Slack | Week 5-6 (MVP) |
| **PagerDuty** | P1 | On-call escalation for infrastructure alerts | Week 6-7 (MVP) |
| **Custom Chain Config** | P1 | Support any L2 or custom blockchain | Week 5-6 (MVP) |
| **S3 / GCS Export** | P1 | Export state snapshots for backup/analysis | Week 7-8 (MVP) |
| **Prometheus Metrics** | P1 | Expose metrics for monitoring stacks | Month 2 (v1.1) |

---

## 7. Security Considerations (Infrastructure Critical)

### Security Architecture

#### 1. Tenant Isolation (Critical for Multi-Tenant)
- ✅ **Network isolation** — Each customer's indexer runs in isolated namespace/pod
- ✅ **Data isolation** — No cross-protocol state leakage; strict RBAC
- ✅ **Resource isolation** — CPU/memory limits per customer; prevent noisy neighbors
- ✅ **No shared secrets** — Each customer has own API keys; never reuse

#### 2. Private Key / Validator Security
- ✅ **No private key access** — Tool doesn't sign transactions; read-only
- ✅ **Validator isolation** — Don't touch validator keys or signing infrastructure
- ✅ **No transaction creation** — Can't initiate withdrawals, burns, or admin actions
- ✅ **No configuration changes** — Can't modify protocol parameters via this tool

#### 3. State Integrity
- ✅ **Cryptographic verification** — State changes verified against L1/L2 consensus
- ✅ **No unauthorized mutations** — Tool only indexes; never directly modifies state
- ✅ **Consistency guarantees** — ACID transactions; no partial state updates
- ✅ **Reorg handling** — Detect and handle L1/L2 reorgs; maintain consistency

#### 4. Access Control & Authentication
- ✅ **API key rotation** — Users can rotate keys; old keys disabled
- ✅ **Rate limiting** — Prevent abuse; 1000 req/min per key by default
- ✅ **Audit logging** — Log all API access; user identity tracked
- ✅ **RBAC** — Admin / Operator / Developer roles; enforce at API layer
- ✅ **OAuth 2.0** — Dashboard uses GitHub/Google OAuth; no password management

#### 5. Infrastructure Security
- ✅ **Network segmentation** — Separate VPC per region; no cross-region data flows
- ✅ **DDoS protection** — CloudFlare; rate limiting
- ✅ **Secrets management** — AWS Secrets Manager; never hardcode keys
- ✅ **Encryption in transit** — TLS 1.3 for all connections
- ✅ **Encryption at rest** — Encrypt databases, backups, secrets
- ✅ **Patch management** — Regular updates; zero-day response team

#### 6. Availability & Disaster Recovery
- ✅ **Multi-zone deployment** — Replicate across 3+ availability zones
- ✅ **Automated failover** — <30 second failover on zone failure
- ✅ **RTO/RPO guarantees** — 15 minute RTO; 1 minute RPO
- ✅ **Backup/restore** — Daily snapshots; test recovery monthly
- ✅ **Monitoring/alerts** — 24/7 monitoring; alert on any degradation

#### 7. Compliance & Auditability
- ✅ **SOC2 Type I (MVP)** — Achieve within 6 months
- ✅ **SOC2 Type II (Year 1)** — Achieve by Month 12
- ✅ **Audit logging** — Immutable logs of all actions; 1 year retention
- ✅ **Data retention** — Comply with customer requirements; erasure on demand
- ✅ **Compliance reports** — Provide audit reports to customers

### Threat Model

| Threat | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **State corruption** | Low | Critical | Cryptographic verification; multi-node consensus |
| **Cross-tenant data leak** | Low | Critical | Strict isolation; network segmentation; audit logs |
| **API key compromise** | Medium | High | Key rotation; rate limiting; audit alerts |
| **DDoS attack** | Medium | High | CloudFlare + rate limiting; multi-zone failover |
| **Sequencer downtime** | Low | High | Multi-zone failover; <30 sec failover |
| **Data loss** | Low | High | Daily backups; multi-region replication; RTO <15min |
| **Regulatory compliance failure** | Low | Medium | SOC2 audit; compliance monitoring; audit logs |

---

## 8. SMB Onboarding Flow

### Onboarding Path (Step-by-Step)

**Day 0-1: Discovery → Signup**
```
1. Protocol team visits https://infrastack.io
   ↓
2. See: "Ship mainnet in 6 months, not 18"
   - Logo: Arbitrum, Optimism, StarkNet (proof points)
   - Comparison: "Build in-house (18 months) vs InfraStack (6 months)"
   ↓
3. CTA: "Try Free (14 days, full features)"
   - Sign in with GitHub; create organization
```

**Day 1: Setup + First Sync (< 30 min)**
```
1. OAuth callback (20 sec)
   ↓
2. Land on dashboard
   - Prompt: "Which blockchain are you indexing?"
   - Options: [Arbitrum] [Optimism] [Custom L2] [Other]
   ↓
3. Select Arbitrum
   ↓
4. Paste Arbitrum sequencer RPC endpoint (or use default)
   ↓
5. Dashboard shows: "Indexer starting... syncing blocks"
   - Progress: "Block 100K of 500K (20%)"
   - ETA: "~15 minutes until fully synced"
   ↓
6. While syncing, show "Getting Started" guide
   - Copy JSON-RPC endpoint
   - Try example: curl -X POST https://[endpoint]/json-rpc -d '{"method":"eth_getBalance",...}'
   ↓
7. After sync: "Your indexer is ready!"
   - Show: Latest block, TPS, query latency
   - CTA: "Create your first webhook?"
```

**Day 1-2: Webhooks + Integration (< 5 min)**
```
1. Click "Create Webhook"
   ↓
2. Select event type:
   - [New Block] [New Transaction] [Contract Event] [State Change]
   ↓
3. Set filter (if applicable)
   - For "Contract Event": paste contract address, topic filter
   ↓
4. Enter destination URL (e.g., http://myapp.com/webhook)
   ↓
5. Click "Test Webhook"
   - InfraStack sends sample event
   - Shows: "Success! Received 200 response"
   ↓
6. Webhook active; real-time events flowing
```

**Day 2-7: Team Setup (< 3 min)**
```
1. Dashboard → "Team" tab
   ↓
2. Click "Invite member"
   ↓
3. Enter engineer email
   ↓
4. Engineer gets invite; signs in
   ↓
5. Auto-added to organization; can create API keys
```

**Day 7-14: Custom Integration (< 10 min)**
```
1. Protocol team integrates JSON-RPC endpoint into their app
   - Copy endpoint URL
   - Replace Infura/Alchemy URL with ours
   - Run tests; verify responses match
   ↓
2. Monitor in dashboard
   - "RPC Calls" chart shows: 1M calls/day, avg latency 250ms
   ↓
3. Set up alerts
   - "Alert if latency > 500ms"
   - "Alert if error rate > 1%"
   ↓
4. Team ready to launch mainnet
```

**Day 14-30: Paid Upgrade (< 1 min)**
```
1. Free trial about to expire; receive email reminder
   ↓
2. Click "Upgrade" in dashboard
   ↓
3. Select tier:
   - [Pro] $1,999/month
   - [Enterprise] Custom pricing
   ↓
4. Stripe checkout
   ↓
5. Instant activation; no service interruption
```

---

## 9. Pricing Model

### Pricing Strategy

| Tier | Target | Price | Includes | Use Case |
|---|---|---|---|---|
| **Free Trial** | Evaluation | $0 | 14 days; full features; then expires | Testing before commitment |
| **Pro** | Single L2 / protocol | $1,999/month or $19,999/year | 1 indexed chain; unlimited queries; 99.5% SLA; standard support | Single L2 team (Arbitrum, Optimism, etc.) |
| **Pro+ (Multi-Chain)** | Multiple L2s or protocols | $3,999/month | 3+ indexed chains; unlimited queries; 99.9% SLA; priority support | Protocol team running multiple L2s |
| **Enterprise** | Large-scale deployment | $10K+/month | Custom limits; dedicated infrastructure; custom SLA; 24/7 support; private deployment option | Large protocols (1B+ TVL) |

### Pricing Rationale

- **Value-based:** Priced at ~5-10% of cost to build in-house (saves $1.5M+ in engineering)
- **Competitive:** 10-20x cheaper than hiring ops engineers; cheaper than managed services
- **Sticky:** Once integrated, hard to switch; lock-in is natural (infrastructure product)

### Expansion Revenue

| Expansion Path | Trigger | New ACV |
|---|---|---|
| **Pro → Pro+** | Need to index 2nd chain (L3, testnet, etc.) | $1.999K → $3.999K/month |
| **Pro → Enterprise** | TVL grows; need 99.9% SLA; 24/7 support | $1.999K → $10K+/month |
| **Add-on: Archive Node** | Need historical data for compliance | +$1K/month |
| **Add-on: Custom RPC Extensions** | Need non-standard RPC methods | +$500/month |
| **Add-on: Managed Backup** | Need geo-redundant backups | +$300/month |

---

## 10. Unit Economics

### Revenue Model

| Metric | Value | Calculation |
|---|---|---|
| **Blended ACV** | $36,000 | $1,999×12 (Pro) × 60% + $3,999×12 (Pro+) × 25% + $12K (Enterprise) × 15% |
| **Avg Team Size/Customer** | 5 people | Typical: 3-8 engineers per protocol |
| **Per-Engineer Cost** | $7,200/year | $36K ACV ÷ 5 engineers |
| **Expansion Revenue (Year 2)** | 25% | Multi-chain expansion + SLA upgrades |

### Acquisition Cost

| Item | Cost | Notes |
|---|---|---|
| **Content Marketing** | $400 | Blog posts on L2 infrastructure (amortized) |
| **Founder Sales** | $1,500 | Founder outreach to L2 teams (4-6 hours per customer @ $250/hr) |
| **Conferences/Events** | $500 | ETH Denver, DevCon sponsorships |
| **Paid Ads** | $300 | LinkedIn ads to blockchain CTOs |
| **Total CAC** | **$2,700** | Range: $2K-3.5K |

### Retention & Expansion

| Metric | Target | Rationale |
|---|---|---|
| **Gross Churn** | 5%/month | Very low; infrastructure is sticky; hard to switch |
| **Net Churn** | -10% (expansion) | Strong expansion; teams add chains + upgrade SLA |
| **Net Revenue Retention** | 120% | Multi-chain expansion drives upsells |
| **Avg Customer Lifetime** | 20 years | Infrastructure is core business; 5% monthly churn = 20 year lifetime |

### Unit Economics Summary

| Metric | Value | Benchmark | Status |
|---|---|---|---|
| **LTV** | $57,600 | — | (ACV $36K × 1.6 years × 1.20 NRR) |
| **CAC** | $2,700 | — | — |
| **LTV:CAC Ratio** | **21.3:1** | ≥3:1 | ✅✅ EXCEPTIONAL |
| **Payback Period** | **9 months** | ≤18 months | ✅ GOOD |
| **Gross Margin** | **60%** | ≥50% for infrastructure | ✅ HEALTHY |

**Note:** Lower gross margin than testing/analytics due to infrastructure costs (compute, storage). Still very profitable.

---

## 11. GTM Strategy

### Go-to-Market Model: **Founder-Led Sales + Industry Partnerships**

#### Phase 1: Founder-Led Launch (Months 1-3)

**Goal:** Secure first 3-5 protocols; get case studies; build proof points

**Tactics:**
1. **Outbound to Known L2 Teams**
   - Target: Arbitrum, Optimism, StarkNet, Polygon, zkSync, Scroll teams
   - Approach: "We built infrastructure tool. You're launching mainnet in 6 months. Want to offload indexing/state?"
   - Volume: 20 outreach/month → 5 meetings/month → 1 customer/month

2. **Industry Events (In-Person)**
   - ETH Denver (Feb 2026): Demo booth; network with L2 teams
   - EthCC (Jul 2026): Technical talks + booth
   - DevCon (Nov 2026): Speaking slot + sponsor
   - Expected: 10-20 qualified meetings per event

3. **Trusted Advisors**
   - Leverage: Ethereum researchers, L2 experts, VC partners
   - Message: "Recommend InfraStack to protocol teams building mainnet"
   - Expected: 2-3 warm intros per month

#### Phase 2: Partnerships (Months 4-6)

**Goal:** Expand beyond founder outreach; scale through integrations

**Tactics:**
1. **Protocol Ecosystem Partnerships**
   - Arbitrum: Feature in developer docs; partner marketplace
   - Optimism: Same approach
   - Expected: 10-20 customers via partnership channels

2. **Accelerator Programs**
   - Y Combinator: Talk to new batch of blockchain founders
   - Other accelerators (Buidl Labs, Alliance DAO, etc.)
   - Expected: 5-10 customers/batch

3. **Content Marketing (Thought Leadership)**
   - Blog: "Why building L2 infrastructure is hard" (then position solution)
   - Technical deep-dives: Sequencer design, state management, etc.
   - Expected: 50-100 organic signups/month

#### Phase 3: Sales Team (Months 7-12)

**Goal:** $250-400K ARR; begin scaling sales

**Tactics:**
1. **Hire first AE** (Month 8)
   - Target: Blockchain infrastructure sales experience
   - Territory: US-based enterprise protocols

2. **Scale Founder Outreach**
   - Founder handles warm leads + strategic partnerships
   - AE handles enterprise qualification + close

3. **Community Building**
   - Developer Discord for InfraStack users
   - Monthly technical webinars ("How to scale an L2 sequencer")

---

### Sales Playbook (Protocol Infrastructure)

#### Discovery Call (25 min)

**Opening (3 min):**
```
"Hi [Name], thanks for taking the time. Quick context: 
We built infrastructure for L2 teams. You're building [Protocol] 
and launching mainnet in [6-12 months]. 
Most teams tell us they're 6+ months behind on indexing/state management.
Is that hitting you?"
```

**Problem Qualification (12 min):**
```
1. "Walk me through your current infrastructure plan."
   → Listen: "We're building custom indexer", "Using Alchemy", "Not decided yet"
   
2. "How many people are working on indexing/state?"
   → Listen: 3-5 people; 70% of sprint
   
3. "What's your mainnet launch date?"
   → Listen: Q2, Q3, etc.
   
4. "What's the biggest risk you're worried about?"
   → Listen: "Indexer bugs", "State corruption", "Scaling", "Security audit"
   
5. "If you could eliminate the indexing infrastructure work entirely, what would that unlock?"
   → Listen: "Ship 6 months earlier", "Move team to innovation"
```

**Solution Positioning (7 min):**
```
"Here's what we do: [SCREEN SHARE]

We provide production-grade indexing + state management. 
You connect your sequencer → we handle the rest:
- Real-time state indexing
- JSON-RPC compatibility (instant integration)
- Monitoring + alerts
- Disaster recovery
- Auditable, SOC2-ready

Your team goes from 70% infrastructure → 20% infrastructure. 
That's 3-4 engineers freed up to work on actual protocol innovation.

For [StarkNet/Arbitrum-style L2]: 
- Deployment: 2 weeks (vs 4-6 months building custom)
- Maintenance: 1 engineer (vs 5-6)
- Cost: $24K/year (vs $500K+ in eng salary)
- Risk: Zero (we've done this 5+ times)
```

**Buying Signal (3 min):**
```
1. "Does this solve what you described?"
   → If YES: "Perfect. Let me show you a demo."
   
2. "What's the timeline for deciding on infrastructure?"
   → Listen: "Decision in March", "Need something by May", etc.
   
3. "Who else should be involved?"
   → Engineering lead, CTO, infrastructure lead
```

#### Demo Call (25-30 min)

**Demo Sequence:**
```
STEP 1 (5 min): Account setup + config
→ "Let me create a test org and connect to [Arbitrum staging]"
→ Show: "Configuring indexer... connecting to sequencer"

STEP 2 (8 min): Indexing + state sync
→ Show: "Blocks indexed: 100K of 500K"
→ Show: "State syncing... 50% complete"
→ Explain: "Real data flowing; real protocol state"

STEP 3 (5 min): JSON-RPC endpoint
→ Show: Live dashboard with RPC endpoint
→ Run curl command: eth_getBalance
→ Show: "Response in 250ms; same format as Infura/Alchemy"
→ Explain: "Your apps integrate with 1-line code change"

STEP 4 (5 min): Monitoring + webhooks
→ Create webhook: "Alert on new large transactions"
→ Show: Real-time webhook events flowing
→ Show: Monitoring dashboard (latency, error rate, uptime)

STEP 5 (2 min): Disaster recovery + audit
→ Explain: "Daily snapshots; multi-zone failover; SOC2-ready"
→ Show: "Your data is backed up; can restore in <15 minutes"
```

#### Objection Handling

| Objection | Response |
|---|---|
| **"We're building custom indexer; it's almost done"** | "Custom indexing is expensive and risky. If you're 2-3 months from production, why not add one more month to integrate ours? Then pivot team to protocol innovation." |
| **"We use Alchemy/Infura; why do we need you?"** | "Alchemy/Infura are great for queries. But for L2 infrastructure, you need sequencer integration, state management, and disaster recovery. We're purpose-built for that." |
| **"We can't trust a third party with our infrastructure"** | "Understandable. We're: (1) Open-source code audit-ready, (2) SOC2 certified, (3) Multi-zone failover, (4) SLA-backed. Every major L2 team trusts third-party infrastructure (Infura, Alchemy, AWS). We're the same." |
| **"Too expensive; we'll build it in-house"** | "Totally fair. But: $24K/year vs $500K+ in engineering cost + 6 months of delay. Most teams choose us after calculating true cost of building. Happy to send ROI calc." |
| **"Need to evaluate other vendors first"** | "Smart. We're the only vertical-specific L2 infrastructure tool. Your other options are: (1) Build in-house, (2) Use generic Alchemy/Infura, (3) Use us. Want me to set up a benchmark comparison?" |

---

## 12. First Customer Success Criteria

### Success Definition for Beta Customers

| Criterion | Target | Measurement | Owner |
|---|---|---|---|
| **Activation** | 100% setup | Sequencer connected; data flowing; JSON-RPC working | Customer |
| **Usage** | ≥10M RPC calls/month | Query traffic in dashboard | Product |
| **Retention** | 30-day active | Still using after 30 days; no churn signals | Analytics |
| **Engagement** | Team adopted | ≥2 team members using daily | Dashboard usage |
| **Satisfaction** | NPS ≥8 | Monthly survey | Customer Success |
| **ROI Realized** | Documented | "We shipped 2 months earlier than planned" | Customer |

### Measurable Outcomes

**Operational Metrics:**
```
1. Time to production indexer: 3-4 weeks
   - Before: 4-6 months (custom build)
   - After: 2 weeks (setup + integration)
   - Savings: 3-4 months acceleration

2. Infrastructure team capacity: -70%
   - Before: 70% of sprint on indexing/state
   - After: 20% of sprint (monitoring only)
   - Freed up: 4-5 engineers for protocol work

3. Mainnet launch timeline: 6 months earlier
   - Before: 18-24 months
   - After: 12-18 months
   - Result: Capture Q3 market instead of Q4
```

**Business Metrics:**
```
1. Engineering cost saved: $500K-1M Year 1
   - Before: 8 engineers × $125K/year = $1M
   - After: 2 engineers + $24K/year = $274K
   - Savings: $726K

2. Time-to-market advantage: $10-50M value
   - 6 months earlier launch = first-mover advantage
   - Estimated: $10M+ in additional TVL/revenue
   
3. Team morale: Better retention
   - Engineers prefer protocol innovation vs infrastructure
   - Result: Lower churn; better talent attraction
```

### Retention Signals

**Green Flags:**
- ✅ Daily RPC query traffic
- ✅ Multiple team members using
- ✅ Webhooks configured for production
- ✅ Positive sentiment: "This saved us months"
- ✅ Decision to upgrade to Pro (paid tier)

**Red Flags:**
- ❌ No usage after Day 14
- ❌ Complaints: "Latency too high", "Queries wrong"
- ❌ No team members invited (stuck at 1 person)
- ❌ Team decided to build custom indexer instead

### Expansion Opportunities

| Stage | Trigger | Upsell | ACV |
|---|---|---|---|
| **Month 1-3** | Free trial expiring | Upgrade to Pro | $0 → $24K/year |
| **Month 3-6** | Adding L3 or testnet | Pro → Pro+ (multi-chain) | $24K → $48K/year |
| **Month 6-12** | TVL growth; compliance needs | → Enterprise + 99.9% SLA | $48K → $120K+/year |

---

## 13. Development Roadmap

### MVP Timeline (Weeks 1-14)

```
WEEK 1-2: Foundation & Core Architecture
├─ Project setup (Rust indexer, Node.js API, Kubernetes)
├─ Database schema (RocksDB for state, PostgreSQL for metadata)
├─ Basic dashboard UI
└─ GitHub OAuth setup

WEEK 3-4: Arbitrum Indexer
├─ Connect to Arbitrum sequencer RPC
├─ Parse transaction data; build indexed state
├─ Handle reorgs; maintain consistency
└─ Test on Arbitrum testnet

WEEK 5-6: Optimism Indexer
├─ Adapter for Optimism sequencer format
├─ Parallel sync with Arbitrum
├─ State consistency verification
└─ Test on Optimism testnet

WEEK 7-8: JSON-RPC Compatibility Layer
├─ Implement standard JSON-RPC methods (eth_*)
├─ Connect to indexed state; serve queries
├─ Query performance optimization
└─ Test with real client libraries (web3.js, ethers.js)

WEEK 9-10: Webhooks + Query API
├─ Webhook event delivery system
├─ GraphQL API for flexible queries
├─ Real-time subscriptions
└─ Rate limiting

WEEK 11-12: Monitoring + Dashboard
├─ Indexer health monitoring
├─ Performance metrics (latency, throughput)
├─ Alert configuration UI
└─ Status page

WEEK 13-14: Launch Prep
├─ Proof of Inclusion API (basic)
├─ Multi-chain connector configuration
├─ API documentation + examples
├─ Deployment to production (Kubernetes)
└─ Beta launch
```

### Phase 1: Scale (Months 4-6)

**Goals:** 5-8 protocols; $60-80K MRR; case studies

**Features:**
- [ ] Archive node (historical state storage)
- [ ] Advanced disaster recovery
- [ ] Multi-zone failover
- [ ] Custom RPC extensions
- [ ] Managed backups
- [ ] SSO/SAML (enterprise)

### Phase 2: Expansion (Months 7-12)

**Goals:** $250-400K ARR; Series A readiness; new L2s

**Features:**
- [ ] zkSync, Scroll, Starknet support
- [ ] Proof acceleration (for ZK protocols)
- [ ] Advanced analytics (query optimization, cost prediction)
- [ ] White-label option
- [ ] Enterprise managed services

---

## 14. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Sequencer format changes** | Medium | Medium | Modular architecture; quick adapter updates |
| **State corruption** | Low | Critical | Cryptographic verification; multi-node consensus; audit |
| **Customer infrastructure needs differ** | High | Medium | Vertical-specific (not generic); iterate with customers |
| **Long sales cycle** | High | Medium | Free trial removes friction; early traction proof |
| **High infrastructure costs** | Medium | Medium | Optimize compute; negotiate with providers |
| **Regulatory crackdown on L2s** | Low | Medium | We're infrastructure neutral; compliant regardless |
| **Competitor (Alchemy/Infura) adds feature** | Medium | Medium | Vertical specialization; better UX; lower cost |

---

## 15. Success Milestones & Go/No-Go Gates

### Month 1-2: Problem Validation Gate

**Success Criteria:**
- [ ] 15+ customer discovery calls with L2/ZK protocol teams
- [ ] 80%+ report 4+ months spent on indexing infrastructure
- [ ] 70%+ say they'd pay $24K+/year
- [ ] 60%+ have mainnet launch date in next 12 months

**Go/No-Go:** Go if 3/4 criteria met

### Month 3: Product-Market Fit Gate

**Success Criteria:**
- [ ] 3+ beta customers onboarded
- [ ] All 3 report "indexer working; data is accurate"
- [ ] ≥1 customer integrates JSON-RPC into production
- [ ] 100% activation rate (all betas went live)
- [ ] 100% ready to pay ($24K/month)

**Go/No-Go:** Go if 4/5 criteria met

### Month 6: Revenue Gate

**Success Criteria:**
- [ ] 5-8 paying customers
- [ ] $5-8K MRR run rate
- [ ] <5% monthly churn
- [ ] NPS ≥8
- [ ] 2-3 case studies ready for marketing

**Go/No-Go:** Go if 4/5 criteria met

---

## 16. Founder-Market Fit

### Required Skills

| Area | Depth | Founder Has? | Gap |
|---|---|---|---|
| **Blockchain Infrastructure** | Very High | Expert required | 10+ years in Ethereum/L2 infrastructure |
| **DevOps / Systems Design** | Very High | Expert required | Design highly available systems; Kubernetes expertise |
| **Go / Rust Programming** | High | Required | Build performance-critical indexers |
| **B2B Sales** | Medium | Medium | Close infrastructure deals |
| **Compliance / Security** | High | Optional | Can hire; auditing + SOC2 skills |
| **Startup DNA** | High | High | Navigate shipping fast vs security |

### Ideal Founder Profile

✅ **Strong Match:**
- 10+ years Ethereum/L2 infrastructure (Arbitrum, Optimism, or Infura-like role)
- 5+ years DevOps/systems engineering
- Experience shipping production infrastructure
- Network with L2 team leaders

⚠️ **Workable:**
- 5+ years blockchain knowledge
- 8+ years systems engineering
- Can hire co-founder with deep L2 expertise
- Willing to learn specific protocols

❌ **Not Recommended:**
- No infrastructure background
- No blockchain depth
- Solo founder without network
- No ops/DevOps experience

---

## 17. Next Steps (Week 1)

### Immediate Actions

1. **Validate ICP** (Days 1-3)
   - [ ] Schedule 15 calls with CTO/infrastructure leads at L2 projects
   - [ ] Script: "We're building infrastructure for L2 teams. How much time is your team spending on indexing/state management?"
   - [ ] Goal: 80%+ confirm pain; 70%+ willing to pay $24K+/year

2. **Technical Feasibility** (Days 2-5)
   - [ ] Spike: Can we index Arbitrum in <2 weeks?
   - [ ] Spike: Can we provide JSON-RPC compatibility layer?
   - [ ] Output: 1-page technical summary

3. **Competitive Analysis** (Day 4-5)
   - [ ] Deep dive: Alchemy infrastructure, Infura, The Graph
   - [ ] Output: "Why we're different" positioning

4. **Team Setup** (Day 1)
   - [ ] Recruit co-founder or hire #1 engineer (infrastructure/DevOps)
   - [ ] Must-have: 5+ years L2 infrastructure + Rust/Go

### Week 2-4 Actions

- [ ] Build MVP spec (delivered)
- [ ] Create project board
- [ ] Begin MVP development
- [ ] Close first 3 beta customers

### Month 1-3 Actions

- [ ] Execute MVP
- [ ] Prepare for launch (Month 3-4)

---

**Document Status:** ✅ Complete MVP Specification  
**Version:** 1.0  
**Last Updated:** January 25, 2026

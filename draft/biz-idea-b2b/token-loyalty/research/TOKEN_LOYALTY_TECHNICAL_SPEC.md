# 토큰 로열티 MVP - Technical Specification

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND LAYER                     │
├─────────────────────────────────────────────────────┤
│ • Web Admin Dashboard (React + Tailwind)            │
│ • Customer Token App (React PWA)                    │
│ • Embedded Wallet (Openfort SDK)                    │
└────────────┬────────────────────────────┬───────────┘
             │                            │
┌────────────▼─────────────────────────────▼───────────┐
│                 API LAYER (Express.js)               │
├─────────────────────────────────────────────────────┤
│ • Auth (JWT + Email OTP)                            │
│ • Customer Management                               │
│ • Token Logic (Issue/Redeem)                        │
│ • POS Webhooks (Square/Clover)                      │
│ • Blockchain Interactions                           │
└────────────┬────────────────────────────┬───────────┘
             │                            │
     ┌───────▼───────┐          ┌────────▼────────┐
     │   PostgreSQL  │          │  Polygon (RPC)  │
     │  + Redis      │          │  + Smart Contract
     └───────────────┘          └─────────────────┘
```

---

## 📦 Tech Stack (Detailed)

### Backend Stack

```typescript
// 1. Runtime & Framework
Node.js 18+ (LTS)
Express.js 4.18
TypeScript 5.x

// 2. Database & Caching
PostgreSQL 14+ (Supabase or self-hosted)
Redis 7.x (Upstash or self-hosted)
Prisma ORM (type-safe queries)

// 3. Authentication
jsonwebtoken (JWT)
nodemailer (Email OTP)
bcryptjs (Password hashing)

// 4. Blockchain
ethers.js v6 (Polygon RPC)
OpenZeppelin Contracts (ERC-20)
web3-eth (Transaction signing)

// 5. POS Integration
axios (HTTP client for webhooks)
node-cron (scheduled jobs)

// 6. Infrastructure
dotenv (environment config)
helmet (security headers)
morgan (logging)
cors (cross-origin)
```

### Frontend Stack

```javascript
// 1. Framework & UI
React 18
React Router v6
TypeScript
Tailwind CSS
Shadcn/UI (component library)

// 2. Web3
ethers.js v6
Openfort SDK (Embedded Wallet)
wagmi (optional, for advanced features)

// 3. API Client
axios
React Query (TanStack Query)

// 4. State Management
React Context API (simple)
Zustand (optional upgrade)

// 5. Build & Deploy
Vite (bundler)
Vercel (hosting)
```

### Blockchain

```solidity
Chain: Polygon Mainnet (MATIC)
Gas Fees: ~$0.01 per transaction
Confirmation: ~2-3 seconds

Reason:
- Very low fees (critical for SMB)
- Fast confirmation
- EVM compatible
- Large ecosystem
```

---

## 🗄️ Database Schema (Simplified)

### Core Tables

```sql
-- Users (Cafe Owners)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR,
  cafe_name VARCHAR,
  wallet_address VARCHAR, -- Polygon wallet
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Customers (End Users at Cafe)
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES users,
  email VARCHAR,
  name VARCHAR, -- optional
  total_tokens INT DEFAULT 0,
  total_spent_usd DECIMAL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Token Transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES users,
  customer_id UUID REFERENCES customers,
  type ENUM ('ISSUE', 'REDEEM', 'TRANSFER'),
  amount INT,
  source ENUM ('POS_PAYMENT', 'MANUAL', 'BONUS'),
  pos_transaction_id VARCHAR, -- Square/Clover ref
  blockchain_tx_hash VARCHAR, -- Polygon tx hash
  created_at TIMESTAMP
);

-- POS Integration Log
CREATE TABLE pos_webhooks (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES users,
  pos_system ENUM ('SQUARE', 'CLOVER'),
  webhook_data JSONB,
  processed BOOLEAN DEFAULT false,
  created_at TIMESTAMP
);
```

---

## 🔌 API Endpoints (Core)

### Authentication

```
POST /api/auth/signup
{
  "email": "owner@cafe.com",
  "name": "John Cafe Owner",
  "cafe_name": "My Coffee"
}
→ Send OTP to email

POST /api/auth/verify-otp
{
  "email": "owner@cafe.com",
  "otp": "123456"
}
→ JWT token + refresh token

POST /api/auth/logout
→ Invalidate token
```

### POS Integration

```
POST /api/business/:businessId/pos/connect
{
  "pos_system": "SQUARE",
  "api_key": "xxxx"
}
→ Validate + store encrypted

GET /api/business/:businessId/pos/status
→ {
  "connected": true,
  "system": "SQUARE",
  "last_sync": "2024-01-25T10:00:00Z"
}

POST /api/webhook/pos/square
(Called by Square webhook)
{
  "data": {
    "object": {
      "payment": { "id": "...", "amount_money": {...} }
    }
  }
}
→ Process payment, issue tokens
```

### Token Management

```
POST /api/customer/:customerId/tokens/issue
{
  "amount": 5,
  "reason": "purchase"
}
→ Mint tokens on blockchain + DB record

POST /api/customer/:customerId/tokens/redeem
{
  "qr_code": "abc123def456"
}
→ Verify QR + burn tokens on blockchain

GET /api/customer/:customerId/tokens/balance
→ {
  "balance": 10,
  "pending": 2, // unconfirmed on blockchain
  "last_transaction": "2024-01-25T10:00:00Z"
}
```

### Admin Dashboard

```
GET /api/business/:businessId/customers
?limit=20&offset=0&sort=-updated_at
→ [
  {
    "id": "uuid",
    "name": "John",
    "total_tokens": 15,
    "visits": 5,
    "last_visit": "2024-01-25"
  }
]

GET /api/business/:businessId/analytics
→ {
  "total_customers": 150,
  "active_customers": 45, // visited last 30 days
  "repeat_rate": 0.30, // 30% came back
  "tokens_issued": 500,
  "tokens_redeemed": 150
}

GET /api/business/:businessId/settings
POST /api/business/:businessId/settings
→ Update business config (token ratio, etc)
```

---

## 🔐 Security Checklist

### Authentication
- [ ] JWT with expiry (15min access, 7d refresh)
- [ ] Email OTP (6 digits, 10min TTL)
- [ ] Rate limiting on auth endpoints (5 attempts/min)
- [ ] bcryptjs for password hashing (if added later)

### Blockchain
- [ ] Private key never stored in code
- [ ] Use Relayer pattern for transaction signing
- [ ] Gas limit validation
- [ ] Nonce management for concurrent transactions

### API
- [ ] HTTPS only
- [ ] CORS headers configured
- [ ] Rate limiting (100 req/min per IP)
- [ ] Input validation (Joi or Zod)
- [ ] SQL injection prevention (Prisma ORM)

### Data
- [ ] Encrypt sensitive POS API keys (AES-256)
- [ ] Audit logging for all token transactions
- [ ] No logging of personal data (GDPR)
- [ ] Data export available (GDPR right to data)

---

## 🚀 Deployment Guide (MVP Phase)

### Backend Deployment (Railway or Render)

1. **GitHub Setup**
   ```bash
   git init
   git remote add origin https://github.com/...
   ```

2. **Environment Variables**
   ```bash
   # .env
   DATABASE_URL=postgresql://...
   REDIS_URL=redis://...
   JWT_SECRET=random_long_string
   POLYGON_RPC_URL=https://polygon-rpc.com
   SQUARE_API_KEY=xxx
   CLOVER_API_KEY=xxx
   EMAIL_API_KEY=sendgrid_key
   ```

3. **Deploy to Railway**
   ```bash
   npm install -g @railway/cli
   railway login
   railway init
   railway add --postgresql
   railway up
   ```

### Frontend Deployment (Vercel)

1. **Build**
   ```bash
   npm run build
   # outputs: dist/
   ```

2. **Deploy**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   # automatically detects React app
   ```

### Smart Contract Deployment (Polygon)

```solidity
// scripts/deploy.js
const CafeToken = await ethers.getContractFactory("CafeToken");
const contract = await CafeToken.deploy();
await contract.deployed();
console.log("Deployed to:", contract.address);
// Save address to .env for backend
```

```bash
npx hardhat run scripts/deploy.js --network polygon
```

---

## 📱 No-Wallet UX Implementation

### Problem: Traditional Web3 UX is terrible for SMBs

```
❌ Traditional Flow:
1. User installs MetaMask
2. Creates wallet
3. Saves seed phrase (lost!)
4. Gets frustrated
5. Leaves app
```

### Solution: Openfort Embedded Wallet

```
✅ Our Flow:
1. Email login (familiar)
2. User doesn't see wallet
3. Backend manages keys (Openfort handles)
4. User just sees "5 tokens"
5. Clicks "redeem" → Done
```

### Implementation Example

```typescript
// Frontend: Customer Token View
import { Openfort } from '@openfort/openfort';

export function CustomerTokens() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Openfort SDK handles everything
    const wallet = new Openfort({
      clientId: 'YOUR_CLIENT_ID'
    });
    
    // Just read balance - no wallet UI shown
    wallet.getTokenBalance().then(setBalance);
  }, []);

  return (
    <div>
      <h1>Your Tokens: {balance} 🎫</h1>
      <button onClick={handleRedeem}>Use Token</button>
      {/* That's it. User has no idea about blockchain */}
    </div>
  );
}

// Backend: Token Redeem
app.post('/api/tokens/redeem', async (req, res) => {
  // Backend signs transaction with cafe owner's key
  const cafeWallet = new Wallet(process.env.CAFE_PRIVATE_KEY);
  
  const tx = await cafeWallet.burnTokens(customerId, 1);
  await tx.wait();
  
  // Return simple confirmation
  res.json({ success: true, token_remaining: 9 });
});
```

---

## 🔄 POS Integration Details

### Square Integration Flow

```
1. User clicks "Connect Square"
   ↓
2. OAuth flow → API key stored (encrypted)
   ↓
3. We register webhook URL in Square
   ↓
4. Customer pays $10 in Square
   ↓
5. Square sends webhook:
   POST /webhook/square
   {
     "data": {
       "object": {
         "payment": {
           "id": "abc123",
           "amount_money": { "amount": 1000 }
         }
       }
     }
   }
   ↓
6. Our backend:
   a. Verify webhook signature
   b. Extract: amount ($10) + customer_id
   c. Issue: 1 token (10% = $1)
   d. Record in DB + blockchain
   ↓
7. Customer gets email:
   "🎉 1 token earned! Balance: 5 tokens"
```

### Clover Integration Flow (Similar)

```
POST /webhook/clover → Process payment → Issue tokens
```

---

## 📊 Performance Targets

| Metric | Target | Implementation |
|--------|--------|-----------------|
| **Page Load** | <2s | Vite + Code splitting |
| **API Response** | <500ms | Redis caching |
| **Blockchain Confirm** | <5s | Polygon fast chain |
| **Database Query** | <100ms | Indexes on common fields |
| **Concurrent Users** | 1000+ | Horizontal scaling |

---

## 🧪 Testing Plan (MVP)

### Unit Tests (40% code coverage minimum)

```typescript
// Token logic tests
describe('TokenManager', () => {
  it('should issue correct token amount', () => {
    const tokens = calculateTokens(100); // $100
    expect(tokens).toBe(10); // 10% = 10 tokens
  });

  it('should prevent double-spending', async () => {
    await issueTokens(customer, 10);
    await redeemTokens(customer, 10);
    expect(await getBalance(customer)).toBe(0);
  });
});
```

### Integration Tests (POS webhook)

```typescript
describe('Square Webhook', () => {
  it('should create transaction from Square payment', async () => {
    const response = await request(app)
      .post('/webhook/square')
      .send(mockSquarePayload);
    
    expect(response.status).toBe(200);
    expect(await getCustomerBalance(customerId)).toBe(10);
  });
});
```

### E2E Tests (Key user flows)

```typescript
describe('Customer signup to first token', () => {
  it('complete flow', async () => {
    // 1. Signup
    await signup('user@cafe.com');
    
    // 2. POS payment
    await simulateSquarePayment(100);
    
    // 3. Check balance
    const balance = await getBalance('user@cafe.com');
    expect(balance).toBe(10);
    
    // 4. Redeem
    await redeemToken(balance - 1);
    expect(await getBalance('user@cafe.com')).toBe(1);
  });
});
```

---

## 📈 Monitoring & Analytics

### Key Metrics to Track

```javascript
// sentry.io for error tracking
Sentry.captureException(error);

// PostHog or Mixpanel for analytics
posthog.capture('token_issued', {
  amount: 10,
  cafe_id: 'xyz',
  payment_method: 'square'
});

// Database logging
await db.eventLog.create({
  type: 'TOKEN_ISSUED',
  business_id,
  customer_id,
  amount,
  timestamp: new Date()
});
```

### Dashboard Alerts

- [ ] Daily: X tokens issued (sanity check)
- [ ] Weekly: New customers acquired
- [ ] Real-time: API errors > 1%
- [ ] Daily: Gas fees on Polygon (cost check)

---

## 🚀 MVP Launch Checklist

- [✅] Database schema finalized
- [✅] API endpoints designed
- [✅] Smart contract spec done
- [ ] Backend development
- [ ] Frontend development
- [ ] POS integration testing
- [ ] Security audit (light)
- [ ] Load testing (100 concurrent)
- [ ] Beta user onboarding
- [ ] Docs + API reference
- [ ] Support system (Discord/email)

---

## 📚 Development Resources

### Blockchain Learning
- Solidity: https://docs.soliditylang.org
- OpenZeppelin: https://docs.openzeppelin.com
- Polygon: https://docs.polygon.technology
- Hardhat: https://hardhat.org

### Web3 Libraries
- ethers.js: https://docs.ethers.org
- Openfort: https://docs.openfort.xyz
- web3.js: https://web3js.readthedocs.io

### Backend
- Express: https://expressjs.com
- Prisma: https://www.prisma.io
- PostgreSQL: https://www.postgresql.org

### Frontend
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev

---

## 🎯 Phase-wise Implementation Plan

### Week 1-2: Setup
- [ ] GitHub repo setup
- [ ] Database schema finalized
- [ ] Smart contract scaffolding (Hardhat)
- [ ] API spec documentation

### Week 3-4: Core Backend
- [ ] Auth system (JWT + OTP)
- [ ] User & Customer models
- [ ] Token logic (issue/redeem)
- [ ] POS webhook handler

### Week 5-6: Frontend
- [ ] Admin dashboard (React)
- [ ] Customer app (React)
- [ ] Openfort integration
- [ ] QR code generation/scanning

### Week 7: Testing & Launch
- [ ] Integration tests
- [ ] Beta user deployment
- [ ] Documentation
- [ ] Launch email sequence

---

**Status**: ✅ Technical spec complete - Ready for development


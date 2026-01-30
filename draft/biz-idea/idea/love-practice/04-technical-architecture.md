# Love Practice - Technical Architecture
## Complete System Design & Implementation Plan

**Version:** 1.0  
**Date:** 2026-01-31  
**Stack:** Next.js 14, Supabase, OpenAI GPT-4o, Vercel

---

## 🏗️ System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Next.js 14 (App Router) + React 18                  │   │
│  │  - Tailwind CSS + shadcn/ui                          │   │
│  │  - Zustand (State Management)                        │   │
│  │  - Framer Motion (Animations)                        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER (Next.js)                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  /api/auth/*        - Authentication                 │   │
│  │  /api/relationships/* - Relationship CRUD            │   │
│  │  /api/simulations/*  - Simulation Engine             │   │
│  │  /api/analysis/*     - MBTI Analysis                 │   │
│  │  /api/payments/*     - Stripe Integration            │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
              ↕                    ↕                  ↕
┌──────────────────┐  ┌──────────────────┐  ┌─────────────────┐
│  DATABASE        │  │  AI SERVICES     │  │  CACHE          │
│  (Supabase)      │  │  (OpenAI)        │  │  (Upstash)      │
│  - PostgreSQL    │  │  - GPT-4o        │  │  - Redis        │
│  - Auth          │  │  - Claude 3.5    │  │                 │
│  - Storage       │  │                  │  │                 │
└──────────────────┘  └──────────────────┘  └─────────────────┘
```

---

## 📦 Tech Stack Detailed

### Frontend

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR, RSC, optimal performance |
| **Language** | TypeScript 5.3+ | Type safety, better DX |
| **Styling** | Tailwind CSS 3.4 | Rapid UI development |
| **Components** | shadcn/ui | Accessible, customizable |
| **State** | Zustand | Lightweight, simple API |
| **Animation** | Framer Motion | Smooth UX transitions |
| **Forms** | React Hook Form + Zod | Validation + type safety |
| **Icons** | Lucide React | Modern, consistent |

### Backend

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **API** | Next.js API Routes | Serverless, co-located |
| **Database** | Supabase (PostgreSQL) | Auth + DB + Storage bundled |
| **ORM** | Prisma | Type-safe queries |
| **Auth** | Supabase Auth | Social login, JWT |
| **Storage** | Supabase Storage | User avatars, exports |
| **Cache** | Upstash Redis | Conversation state caching |

### AI/ML

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Persona LLM** | OpenAI GPT-4o | Best persona simulation |
| **Coaching LLM** | Claude 3.5 Sonnet | Superior analysis/feedback |
| **Embedding** | OpenAI text-embedding-3 | Semantic search (future) |
| **Orchestration** | LangChain (optional) | Multi-agent workflow |

### DevOps

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Hosting** | Vercel | Optimized for Next.js |
| **CI/CD** | GitHub Actions | Automated testing/deploy |
| **Monitoring** | Sentry | Error tracking |
| **Analytics** | PostHog | Product analytics |
| **Payments** | Stripe | Industry standard |

---

## 🗄️ Database Schema

### Complete Schema (PostgreSQL)

```sql
-- ============================================
-- USERS & AUTH (via Supabase Auth)
-- ============================================

-- users table은 Supabase가 자동 생성
-- auth.users에서 확장

CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Basic Info
  display_name TEXT,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  age INT CHECK (age >= 18 AND age <= 100),
  
  -- User Style
  communication_style TEXT CHECK (communication_style IN ('active', 'neutral', 'passive')),
  
  -- Subscription
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'premium')),
  credits INT DEFAULT 0,
  subscription_start TIMESTAMPTZ,
  subscription_end TIMESTAMPTZ,
  
  -- Metadata
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RELATIONSHIPS (유저의 타겟 상대)
-- ============================================

CREATE TABLE relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  
  -- Target Person Info
  nickname TEXT NOT NULL,
  mbti TEXT NOT NULL CHECK (mbti IN (
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  )),
  
  -- Relationship Status
  status TEXT NOT NULL CHECK (status IN ('som', 'early', 'stable', 'long', 'breakup')),
  
  -- Trust Score
  trust_score INT DEFAULT 50 CHECK (trust_score >= 0 AND trust_score <= 100),
  
  -- Recent Context
  recent_issue TEXT,
  notes TEXT,
  
  -- Metadata
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Indexes
  CONSTRAINT unique_active_relationship UNIQUE (user_id, is_active, nickname)
);

CREATE INDEX idx_relationships_user ON relationships(user_id);
CREATE INDEX idx_relationships_active ON relationships(user_id, is_active);

-- ============================================
-- SIMULATIONS (시뮬레이션 세션)
-- ============================================

CREATE TABLE simulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  relationship_id UUID NOT NULL REFERENCES relationships(id) ON DELETE CASCADE,
  
  -- Simulation Config
  scenario_type TEXT NOT NULL CHECK (scenario_type IN (
    'quick_practice',
    'deep_dive',
    'custom_scenario'
  )),
  scenario_description TEXT,
  
  -- Scores
  initial_trust_score INT NOT NULL,
  final_trust_score INT NOT NULL,
  trust_delta INT GENERATED ALWAYS AS (final_trust_score - initial_trust_score) STORED,
  
  -- Stats
  message_count INT DEFAULT 0,
  positive_actions INT DEFAULT 0,
  negative_actions INT DEFAULT 0,
  red_flags_triggered INT DEFAULT 0,
  
  -- Session Info
  duration_seconds INT,
  completed BOOLEAN DEFAULT FALSE,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX idx_simulations_relationship ON simulations(relationship_id);
CREATE INDEX idx_simulations_completed ON simulations(completed, created_at);

-- ============================================
-- MESSAGES (시뮬레이션 대화 내역)
-- ============================================

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  simulation_id UUID NOT NULL REFERENCES simulations(id) ON DELETE CASCADE,
  
  -- Message Content
  role TEXT NOT NULL CHECK (role IN ('user', 'ai')),
  content TEXT NOT NULL,
  
  -- Scoring (user messages only)
  trust_delta INT,
  feedback JSONB,
  
  -- Feedback Structure:
  -- {
  --   "category": "trust_factor" | "red_flag" | "neutral",
  --   "reason": "왜 이 점수인지",
  --   "suggestions": ["문구1", "문구2", "문구3"]
  -- }
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  sequence_number INT NOT NULL
);

CREATE INDEX idx_messages_simulation ON messages(simulation_id, sequence_number);
CREATE INDEX idx_messages_created ON messages(created_at);

-- ============================================
-- ANALYSIS REPORTS (관계 진단 리포트)
-- ============================================

CREATE TABLE analysis_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  relationship_id UUID NOT NULL REFERENCES relationships(id) ON DELETE CASCADE,
  
  -- Analysis Result
  report_type TEXT DEFAULT 'initial' CHECK (report_type IN ('initial', 'follow_up')),
  trust_factors JSONB NOT NULL,
  red_flags JSONB NOT NULL,
  recommendations JSONB,
  
  -- Structure:
  -- trust_factors: [{ "factor": "...", "weight": 10, "description": "..." }]
  -- red_flags: [{ "flag": "...", "severity": -8, "warning": "..." }]
  -- recommendations: [{ "title": "...", "description": "..." }]
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analysis_relationship ON analysis_reports(relationship_id);

-- ============================================
-- TRANSACTIONS (결제 내역)
-- ============================================

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  
  -- Transaction Info
  type TEXT NOT NULL CHECK (type IN ('subscription', 'credits', 'report')),
  amount_usd DECIMAL(10, 2) NOT NULL,
  credits_purchased INT,
  
  -- Payment Info
  stripe_payment_intent_id TEXT UNIQUE,
  stripe_subscription_id TEXT,
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_transactions_stripe ON transactions(stripe_payment_intent_id);

-- ============================================
-- USAGE TRACKING (크레딧 사용 내역)
-- ============================================

CREATE TABLE usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  
  -- Usage Info
  action TEXT NOT NULL CHECK (action IN ('analysis', 'simulation', 'report')),
  credits_used INT NOT NULL,
  
  -- Related Entity
  related_entity_id UUID,
  related_entity_type TEXT CHECK (related_entity_type IN ('simulation', 'analysis', 'report')),
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_usage_user ON usage_logs(user_id, created_at);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_relationships_updated_at
  BEFORE UPDATE ON relationships
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Deduct credits on usage
CREATE OR REPLACE FUNCTION deduct_credits(
  p_user_id UUID,
  p_credits INT,
  p_action TEXT
) RETURNS BOOLEAN AS $$
DECLARE
  current_credits INT;
BEGIN
  -- Get current credits
  SELECT credits INTO current_credits
  FROM user_profiles
  WHERE id = p_user_id;
  
  -- Check if enough credits
  IF current_credits < p_credits THEN
    RETURN FALSE;
  END IF;
  
  -- Deduct credits
  UPDATE user_profiles
  SET credits = credits - p_credits
  WHERE id = p_user_id;
  
  -- Log usage
  INSERT INTO usage_logs (user_id, action, credits_used)
  VALUES (p_user_id, p_action, p_credits);
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE analysis_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;

-- Policies: Users can only access their own data
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can view own relationships"
  ON relationships FOR ALL
  USING (user_id = auth.uid());

CREATE POLICY "Users can view own simulations"
  ON simulations FOR SELECT
  USING (
    relationship_id IN (
      SELECT id FROM relationships WHERE user_id = auth.uid()
    )
  );

-- (Similar policies for other tables...)
```

---

## 🔌 API Endpoints

### Authentication

```typescript
// POST /api/auth/signup
Request: {
  email: string;
  password: string;
  displayName: string;
  gender: 'male' | 'female' | 'other';
  age: number;
}
Response: {
  user: User;
  session: Session;
}

// POST /api/auth/signin
Request: {
  email: string;
  password: string;
}
Response: {
  user: User;
  session: Session;
}

// POST /api/auth/signout
Response: { success: boolean }
```

### Relationships

```typescript
// POST /api/relationships
Request: {
  nickname: string;
  mbti: MBTI;
  status: RelationshipStatus;
  recentIssue?: string;
}
Response: {
  relationship: Relationship;
  analysisReport: AnalysisReport;
}

// GET /api/relationships
Response: {
  relationships: Relationship[];
}

// GET /api/relationships/:id
Response: {
  relationship: Relationship;
  recentSimulations: Simulation[];
}

// PATCH /api/relationships/:id
Request: Partial<Relationship>
Response: { relationship: Relationship }

// DELETE /api/relationships/:id
Response: { success: boolean }
```

### Analysis

```typescript
// POST /api/analysis
Request: {
  relationshipId: string;
}
Response: {
  report: AnalysisReport;
  creditUsed: number;
}

// GET /api/analysis/:relationshipId
Response: {
  reports: AnalysisReport[];
}
```

### Simulations

```typescript
// POST /api/simulations/start
Request: {
  relationshipId: string;
  scenarioType: 'quick_practice' | 'deep_dive' | 'custom_scenario';
  scenarioDescription?: string;
}
Response: {
  simulation: Simulation;
  initialMessage: Message;
  creditUsed: number;
}

// POST /api/simulations/:id/message
Request: {
  content: string;
}
Response: {
  userMessage: Message;
  aiResponse: Message;
  feedback: {
    trustDelta: number;
    category: 'trust_factor' | 'red_flag' | 'neutral';
    reason: string;
    suggestions: string[];
  };
  currentTrustScore: number;
}

// POST /api/simulations/:id/complete
Response: {
  simulation: Simulation;
  summary: {
    trustDelta: number;
    positiveActions: number;
    negativeActions: number;
    redFlags: number;
    recommendations: string[];
  };
}

// GET /api/simulations/:id
Response: {
  simulation: Simulation;
  messages: Message[];
}

// GET /api/simulations/:id/export
Response: {
  transcript: string; // Formatted conversation
  format: 'txt' | 'pdf';
}
```

### User & Credits

```typescript
// GET /api/user/profile
Response: {
  profile: UserProfile;
}

// PATCH /api/user/profile
Request: Partial<UserProfile>
Response: { profile: UserProfile }

// GET /api/user/credits
Response: {
  credits: number;
  subscriptionTier: 'free' | 'premium';
}

// POST /api/user/credits/purchase
Request: {
  package: '10' | '30' | '70';
}
Response: {
  stripeUrl: string;
}
```

### Payments

```typescript
// POST /api/payments/create-checkout-session
Request: {
  type: 'subscription' | 'credits';
  plan?: 'premium_monthly';
  creditPackage?: '10' | '30' | '70';
}
Response: {
  sessionId: string;
  url: string;
}

// POST /api/payments/webhook (Stripe)
// Handles subscription events and credit purchases
```

---

## 🤖 AI Pipeline Architecture

### Conversation Flow

```
User Message Input
  ↓
1. MESSAGE PREPROCESSING
  - Sanitize input
  - Detect language
  - Extract intent
  ↓
2. CONTEXT RETRIEVAL
  - Get conversation history (last 10 messages)
  - Get relationship context
  - Get current trust score
  ↓
3. PERSONA SIMULATION (GPT-4o)
  System Prompt:
    - MBTI type persona
    - Current trust level
    - Conversation style
  User Prompt:
    - User's message
    - Context
  Output:
    - AI persona response
  ↓
4. SCORING ENGINE (Claude 3.5 Sonnet)
  System Prompt:
    - MBTI scoring rules
    - Trust factors & red flags
  User Prompt:
    - User's message
    - AI response
    - Context
  Output:
    - Trust delta (-10 to +10)
    - Category
    - Feedback reason
  ↓
5. SUGGESTION GENERATION (GPT-4o)
  System Prompt:
    - MBTI preferences
    - Better alternatives
  User Prompt:
    - User's message
    - Feedback
  Output:
    - 3 alternative messages
  ↓
6. RESPONSE ASSEMBLY
  - Combine AI response
  - Add feedback
  - Add suggestions
  - Update trust score
  ↓
7. CACHE & STORE
  - Cache conversation state (Redis)
  - Store messages (Supabase)
  ↓
Return to User
```

### Prompt Templates

**1. Persona Simulation Prompt**

```typescript
const personaSystemPrompt = (mbti: MBTI, trustScore: number, context: string) => `
You are simulating a ${mbti} person in a romantic relationship context.

# MBTI Profile
${mbtiDataset[mbti].description}

# Current Trust Level: ${trustScore}/100
${getTrustLevelDescription(trustScore)}

# Conversation Context
${context}

# Instructions
1. Respond EXACTLY as a ${mbti} person would in this situation
2. Your response should reflect the current trust level:
   - Low (0-30): Cold, guarded, short responses
   - Medium (31-60): Neutral, cautious engagement
   - High (61-80): Warm, open, longer responses
   - Very High (81-100): Affectionate, vulnerable, deep connection
3. Use appropriate Korean conversation style (반말/존댓말)
4. Include realistic Korean texting patterns (ㅋㅋ, ㅎㅎ, etc. based on MBTI)
5. Stay in character consistently

# Your ${mbti} Characteristics
Trust Factors: ${mbtiDataset[mbti].trustFactors.join(', ')}
Red Flags: ${mbtiDataset[mbti].redFlags.join(', ')}
Conversation Style: ${mbtiDataset[mbti].conversationStyle}

Respond naturally and authentically as this ${mbti} person would.
`;

const personaUserPrompt = (userMessage: string, history: Message[]) => `
# Conversation History
${history.map(m => `${m.role === 'user' ? 'Them' : 'You'}: ${m.content}`).join('\n')}

# Their Latest Message
${userMessage}

# Your Response
(Respond as the ${mbti} person naturally would)
`;
```

**2. Scoring Engine Prompt**

```typescript
const scoringSystemPrompt = (mbti: MBTI) => `
You are an expert MBTI relationship analyst. Your job is to evaluate how a user's message affects the trust level of a ${mbti} person.

# ${mbti} Trust Factors (Positive)
${mbtiDataset[mbti].trustFactors.map(f => `- ${f.factor} (weight: ${f.weight}): ${f.description}`).join('\n')}

# ${mbti} Red Flags (Negative)
${mbtiDataset[mbti].redFlags.map(f => `- ${f.flag} (severity: ${f.severity}): ${f.description}`).join('\n')}

# Scoring Rules
- Trust Delta Range: -10 (worst) to +10 (best)
- Consider: tone, intent, timing, authenticity, depth
- Neutral messages: -2 to +2
- Strong positive: +5 to +10
- Strong negative: -5 to -10

# Output Format (JSON)
{
  "trustDelta": number,
  "category": "trust_factor" | "red_flag" | "neutral",
  "reason": "Brief explanation in Korean",
  "analysis": {
    "tone": "...",
    "intent": "...",
    "mbtiAlignment": "..."
  }
}
`;

const scoringUserPrompt = (userMessage: string, context: string) => `
# Context
${context}

# User's Message
"${userMessage}"

# Your Task
Analyze this message and provide the trust score impact for a ${mbti} person.
`;
```

**3. Suggestion Generation Prompt**

```typescript
const suggestionSystemPrompt = (mbti: MBTI) => `
You are a relationship coach specializing in MBTI-based communication.

# Target MBTI: ${mbti}
Trust Factors: ${mbtiDataset[mbti].trustFactors.map(f => f.factor).join(', ')}

# Your Task
Given a user's message and feedback, provide 3 BETTER alternative messages that would appeal to ${mbti}.

# Alternative Styles
1. **적극적 (Bold)**: Direct, confident approach
2. **중립적 (Balanced)**: Moderate, safe approach
3. **소극적 (Subtle)**: Gentle, reserved approach

# Guidelines
- Each message should be natural Korean texting style
- Align with ${mbti} trust factors
- Avoid ${mbti} red flags
- Ready to copy-paste into KakaoTalk

# Output Format (JSON)
{
  "suggestions": [
    { "style": "적극적", "message": "..." },
    { "style": "중립적", "message": "..." },
    { "style": "소극적", "message": "..." }
  ]
}
`;
```

### AI Cost Estimation

| Operation | Model | Tokens | Cost per Call | Calls/Session | Cost/Session |
|-----------|-------|--------|---------------|---------------|--------------|
| Persona Response | GPT-4o | ~500 | $0.0075 | 15 | $0.1125 |
| Scoring | Claude 3.5 | ~300 | $0.0045 | 15 | $0.0675 |
| Suggestions | GPT-4o | ~200 | $0.003 | 15 | $0.045 |
| **Total** | - | - | - | - | **$0.225/session** |

**Monthly Cost Projection (Conservative):**
- 500 active users
- 4 sessions/month/user
- 2,000 total sessions
- **$450/month in AI costs**

**Revenue vs. Cost:**
- ARPU: $16/month
- AI cost per user: $0.90/month
- Gross margin: 94%+ (excluding other costs)

---

## 🔐 Security & Privacy

### Data Protection

1. **Encryption**
   - At rest: Supabase built-in encryption
   - In transit: HTTPS/TLS 1.3
   - Sensitive fields: Additional encryption layer

2. **Authentication**
   - JWT tokens (short-lived)
   - Refresh tokens (httpOnly cookies)
   - Rate limiting (100 req/min per user)

3. **Row Level Security (RLS)**
   - Users can only access their own data
   - Enforced at database level

4. **API Security**
   - CORS restrictions
   - Input validation (Zod schemas)
   - SQL injection protection (Prisma)

### Privacy Considerations

1. **User Data**
   - No real names required (nicknames only)
   - Conversations are private by default
   - Optional: Anonymous success story sharing

2. **AI Safety**
   - Content moderation (OpenAI moderation API)
   - Abuse detection
   - Disclaimer: "For entertainment purposes"

3. **Compliance**
   - GDPR-ready (data export, deletion)
   - Korean PIPA compliance
   - Terms of Service + Privacy Policy

---

## 📊 Monitoring & Analytics

### Error Tracking (Sentry)

```typescript
// Setup
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});

// Usage
try {
  await simulationService.processMessage(message);
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      simulation_id: simulationId,
      mbti_type: relationship.mbti,
    }
  });
  throw error;
}
```

### Product Analytics (PostHog)

**Key Events to Track:**

```typescript
// User Journey
posthog.capture('user_signed_up', { method: 'email' });
posthog.capture('onboarding_completed');
posthog.capture('relationship_created', { mbti: 'INFJ', status: 'som' });

// Simulation Usage
posthog.capture('simulation_started', { scenario_type: 'quick_practice' });
posthog.capture('message_sent', { trust_delta: -3 });
posthog.capture('simulation_completed', {
  trust_delta_total: 15,
  message_count: 12,
  red_flags: 1
});

// Monetization
posthog.capture('paywall_shown', { feature: 'deep_dive_simulation' });
posthog.capture('subscription_started', { plan: 'premium_monthly' });
posthog.capture('credits_purchased', { package: '30' });

// Engagement
posthog.capture('suggestion_copied', { style: 'balanced' });
posthog.capture('report_viewed');
```

**Funnels to Monitor:**

1. Signup → Onboarding → First Simulation → Repeat Usage
2. Free User → Paywall Hit → Purchase
3. Simulation Start → Message 5 → Message 10 → Completion

---

## 🚀 Deployment Strategy

### Infrastructure

```yaml
# Vercel Configuration
# vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["icn1"],  # Seoul region for Korean users
  "env": {
    "DATABASE_URL": "@database-url",
    "OPENAI_API_KEY": "@openai-key",
    "ANTHROPIC_API_KEY": "@anthropic-key",
    "STRIPE_SECRET_KEY": "@stripe-secret",
    "UPSTASH_REDIS_URL": "@redis-url"
  }
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main, staging]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Type check
        run: npm run type-check
      
      - name: Lint
        run: npm run lint
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Environment Variables

```bash
# .env.local (development)
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."

OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."

UPSTASH_REDIS_URL="redis://..."
UPSTASH_REDIS_TOKEN="..."

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

SENTRY_DSN="https://..."
NEXT_PUBLIC_POSTHOG_KEY="phc_..."
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 🧪 Testing Strategy

### Test Pyramid

```
        ┌─────────────┐
        │   E2E (10%) │  ← Playwright
        └─────────────┘
       ┌───────────────┐
       │ Integration   │  ← API route tests
       │    (30%)      │
       └───────────────┘
    ┌─────────────────────┐
    │   Unit Tests (60%)  │  ← Jest + RTL
    └─────────────────────┘
```

**Key Test Cases:**

```typescript
// Unit: MBTI Scoring Logic
describe('MBTIScorer', () => {
  it('should give +10 for INFJ trust factor match', () => {
    const message = "삶의 의미에 대해 생각해봤어.";
    const score = scorer.evaluate(message, 'INFJ');
    expect(score.trustDelta).toBeGreaterThan(7);
  });
  
  it('should give -10 for INFJ red flag', () => {
    const message = "ㅋㅋㅋ 그냥 놀자~";
    const score = scorer.evaluate(message, 'INFJ');
    expect(score.trustDelta).toBeLessThan(-7);
  });
});

// Integration: Simulation API
describe('POST /api/simulations/:id/message', () => {
  it('should process message and return feedback', async () => {
    const response = await request(app)
      .post('/api/simulations/123/message')
      .send({ content: "안녕하세요" })
      .expect(200);
      
    expect(response.body).toHaveProperty('aiResponse');
    expect(response.body).toHaveProperty('feedback');
    expect(response.body.feedback).toHaveProperty('trustDelta');
  });
});

// E2E: Complete Simulation Flow
describe('Simulation Flow', () => {
  it('should complete full simulation journey', async () => {
    // 1. Login
    await page.goto('/login');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="password"]', 'password');
    await page.click('button[type="submit"]');
    
    // 2. Create relationship
    await page.click('[data-testid="create-relationship"]');
    await page.fill('[name="nickname"]', '썸남');
    await page.selectOption('[name="mbti"]', 'INFJ');
    await page.click('button[type="submit"]');
    
    // 3. Start simulation
    await page.click('[data-testid="start-simulation"]');
    
    // 4. Send messages
    await page.fill('[name="message"]', '안녕! 오늘 뭐 했어?');
    await page.click('[data-testid="send-message"]');
    
    // 5. Verify feedback
    await expect(page.locator('[data-testid="feedback"]')).toBeVisible();
    await expect(page.locator('[data-testid="trust-score"]')).toContainText(/\d+\/100/);
  });
});
```

---

## 📈 Performance Optimization

### Strategies

1. **Next.js Optimizations**
   - Static page generation where possible
   - React Server Components for data fetching
   - Dynamic imports for heavy components
   - Image optimization (next/image)

2. **Database Query Optimization**
   - Proper indexing (already in schema)
   - Pagination (limit/offset)
   - Selective field fetching
   - Connection pooling (Supabase)

3. **Caching Strategy**
   - Redis for conversation state (TTL: 1 hour)
   - API route caching (static data)
   - Browser caching (stale-while-revalidate)
   - CDN caching (Vercel Edge)

4. **AI Response Optimization**
   - Streaming responses (OpenAI streaming)
   - Parallel requests (persona + scoring)
   - Response caching for common scenarios
   - Batch processing where possible

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **First Contentful Paint** | <1.5s | Lighthouse |
| **Time to Interactive** | <3s | Lighthouse |
| **API Response Time (p95)** | <500ms | Vercel Analytics |
| **AI Response Time (p95)** | <3s | Custom metric |
| **Database Query Time (p95)** | <100ms | Supabase logs |

---

## 🔄 State Management

### Zustand Store Structure

```typescript
// stores/useSimulationStore.ts
import { create } from 'zustand';

interface SimulationStore {
  // State
  currentSimulation: Simulation | null;
  messages: Message[];
  trustScore: number;
  isLoading: boolean;
  
  // Actions
  startSimulation: (relationshipId: string, scenarioType: string) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  completeSimulation: () => Promise<void>;
  reset: () => void;
}

export const useSimulationStore = create<SimulationStore>((set, get) => ({
  currentSimulation: null,
  messages: [],
  trustScore: 50,
  isLoading: false,
  
  startSimulation: async (relationshipId, scenarioType) => {
    set({ isLoading: true });
    const response = await fetch('/api/simulations/start', {
      method: 'POST',
      body: JSON.stringify({ relationshipId, scenarioType }),
    });
    const data = await response.json();
    set({
      currentSimulation: data.simulation,
      messages: [data.initialMessage],
      trustScore: data.simulation.initial_trust_score,
      isLoading: false,
    });
  },
  
  sendMessage: async (content) => {
    const { currentSimulation, messages } = get();
    if (!currentSimulation) return;
    
    set({ isLoading: true });
    
    // Optimistic update
    const userMessage: Message = {
      id: 'temp',
      role: 'user',
      content,
      created_at: new Date().toISOString(),
    };
    set({ messages: [...messages, userMessage] });
    
    // API call
    const response = await fetch(`/api/simulations/${currentSimulation.id}/message`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    
    set({
      messages: [
        ...messages.slice(0, -1),
        data.userMessage,
        data.aiResponse,
      ],
      trustScore: data.currentTrustScore,
      isLoading: false,
    });
  },
  
  completeSimulation: async () => {
    const { currentSimulation } = get();
    if (!currentSimulation) return;
    
    await fetch(`/api/simulations/${currentSimulation.id}/complete`, {
      method: 'POST',
    });
    
    get().reset();
  },
  
  reset: () => set({
    currentSimulation: null,
    messages: [],
    trustScore: 50,
    isLoading: false,
  }),
}));
```

---

## 📦 Project Structure

```
love-practice/
├── app/                    # Next.js App Router
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── relationships/
│   │   ├── simulations/
│   │   └── profile/
│   ├── api/               # API Routes
│   │   ├── auth/
│   │   ├── relationships/
│   │   ├── simulations/
│   │   ├── analysis/
│   │   └── payments/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── chat/              # Chat interface components
│   ├── relationship/      # Relationship-related components
│   └── layout/            # Layout components
├── lib/
│   ├── ai/
│   │   ├── persona.ts     # Persona simulation
│   │   ├── scorer.ts      # Scoring engine
│   │   └── suggestions.ts # Suggestion generator
│   ├── db/
│   │   ├── client.ts      # Supabase client
│   │   └── queries.ts     # Database queries
│   ├── mbti/
│   │   └── dataset.ts     # MBTI persona dataset
│   ├── stripe/
│   │   └── client.ts      # Stripe integration
│   └── utils.ts
├── stores/
│   ├── useSimulationStore.ts
│   ├── useUserStore.ts
│   └── useRelationshipStore.ts
├── types/
│   ├── database.ts        # Database types
│   ├── mbti.ts            # MBTI types
│   └── api.ts             # API types
├── prisma/
│   └── schema.prisma      # Database schema
├── public/
│   ├── images/
│   └── fonts/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.local
├── .env.production
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎯 Implementation Phases

### Phase 1: Foundation (Week 1-2)

- [ ] Project setup & configuration
- [ ] Database schema implementation
- [ ] Authentication flow
- [ ] Basic UI components

### Phase 2: Core Features (Week 3-4)

- [ ] Relationship CRUD
- [ ] MBTI dataset integration
- [ ] Persona simulation engine
- [ ] Scoring engine

### Phase 3: Simulation (Week 5-6)

- [ ] Chat interface
- [ ] Real-time feedback system
- [ ] Suggestion generation
- [ ] Session management

### Phase 4: Polish (Week 7-8)

- [ ] Payment integration
- [ ] Analytics setup
- [ ] Testing & bug fixes
- [ ] Performance optimization
- [ ] Beta launch preparation

---

**Next Step:** Begin implementation or create final consolidated service design document?

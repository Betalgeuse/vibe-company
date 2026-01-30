# Love Practice - Complete Service Design Document
## AI Relationship Coach Agent: From Concept to Implementation

**Version:** 1.0  
**Date:** 2026-01-31  
**Status:** Ready for Implementation  
**Estimated Launch:** 8 weeks from start

---

## 📋 Document Overview

이 문서는 "Love Practice (연애 연습)" 서비스의 완전한 설계를 담고 있습니다.

**포함 내용:**
1. Executive Summary & Business Case
2. Market Validation & Opportunity
3. Product Specification (MVP)
4. MBTI Persona Dataset (16 types)
5. Technical Architecture
6. Implementation Roadmap
7. Go-to-Market Strategy

**참조 문서:**
- `01-market-research-synthesis.md` - 시장 조사 및 검증
- `02-mvp-product-spec.md` - 제품 기능 상세 설계
- `03-mbti-persona-dataset.md` - MBTI 페르소나 데이터셋
- `04-technical-architecture.md` - 기술 아키텍처

---

# Part 1: Executive Summary

## 🎯 Vision & Mission

**Service Name:** 연애 연습 (Love Practice)  
**Tagline:** "만남과 이별은 너무 어려워. 사랑도 연습이 될까요?"

**Vision:**
유저가 AI 에이전트와 함께 실제 관계 데이터를 분석하고 시뮬레이션함으로써 사랑의 성공률을 높인다.

**Mission:**
MBTI 기반 페르소나 시뮬레이션과 실시간 코칭을 통해 연애 불안감을 해소하고, 유저가 자신감 있게 관계를 발전시킬 수 있도록 돕는다.

## 💡 Core Value Proposition

**Unique Selling Points:**
1. **완벽한 MBTI 페르소나 시뮬레이션** - 상대방의 MBTI로 빙의한 AI와 실전 같은 연습
2. **실시간 코칭 피드백** - 매 메시지마다 Trust Factor 분석 및 개선안 제공
3. **즉시 사용 가능한 문구** - 3가지 스타일(적극/중립/소극)의 답장 문구 제공
4. **한국 최적화** - MBTI 문화, 카카오톡 대화 스타일, 연애 맥락에 특화
5. **진행 상황 가시화** - 호감도 점수로 관계 발전 추적

**Target Problem:**
- 20-30대의 연애 경험 부족 및 불안감 증가 (2020: 68% → 2025: 52% 연애 경험률)
- "뭐라고 답장해야 할지 모르겠어요" (78% 경험)
- "상대방 마음을 몰라서 불안해요" (85% 경험)
- "잘못 말해서 거절당할까 봐 무서워요" (92% 경험)

**Solution:**
안전한 AI 시뮬레이션 환경에서 무한 연습 + 전문가급 실시간 피드백 → 실전 자신감 향상

## 📊 Market Opportunity

### Market Size

**Global Dating & Relationship Market:** $12.5B+ (2026)
- Dating apps: $9.2B
- Relationship counseling: $2.1B
- Self-help/coaching: $1.2B

**Korea Market (Primary Target):**
- **TAM:** $850M (Relationship coaching segment)
- **SAM:** $320M (AI-powered coaching)
- **SOM:** $45M-80M (3-year horizon)

**Target Customers:**
- Population 20-40 years: 15M+
- Dating app users: 8M+ (53% penetration)
- MBTI awareness: 92% (세계 최고)
- Average spend on dating: $180/year

### Competitive Landscape

| Competitor | Strength | Weakness | Our Edge |
|------------|----------|----------|----------|
| Character.ai | 200M+ users | Generic, no coaching | MBTI simulation + Korean focus |
| Replika | Emotional bond | Not dating-focused | Relationship-specific scenarios |
| 연애의 과학 | Korean market | Static content | Interactive AI simulation |
| Human Coaches | Professional | Expensive ($80-150/session) | 24/7 available at $12.99/month |

**Our Moat:**
- Proprietary MBTI reaction dataset (user feedback loop)
- Korean relationship context specialization
- Network effects (anonymized success scenarios)

## 💰 Business Model

### Hybrid Revenue Model (선택됨)

**Free Tier:**
- 1 free relationship analysis
- 1 free simulation (onboarding)

**Premium Subscription ($12.99/month):**
- 50 credits/month included
- 20% discount on additional credits
- Unlimited relationship management
- Early access to new features

**À la carte Credits:**
- 10 credits: $7.99
- 30 credits: $19.99
- 70 credits: $49.99

**Credit Usage:**
- Relationship analysis: 5 credits
- Quick practice (10 messages): 3 credits
- Deep dive (30 messages): 10 credits
- Premium report: 15 credits

### Financial Projections (Year 1)

| Metric | Conservative | Target | Optimistic |
|--------|-------------|--------|------------|
| **Users (Month 12)** | 10,000 | 15,000 | 25,000 |
| **Paid Conversion** | 5% | 8% | 12% |
| **ARPU** | $12 | $16 | $20 |
| **MRR** | $6,000 | $19,200 | $60,000 |
| **ARR** | $72K | $230K | $720K |

**Cost Structure:**
- AI costs: $0.90/user/month (94% margin)
- Development: $25K (one-time)
- Marketing: $10K (first 3 months)
- Infrastructure: $5K (annual)

**Break-even:** ~800 paid users (achievable in Month 4-6)

---

# Part 2: Product Specification

## 🏗️ MVP Feature Set

### 1. Onboarding Flow (3분 이내)

**Step 1: User Profile**
- Nickname, Gender, Age
- Communication style (적극/중립/소극)

**Step 2: Relationship Context**
```
Q1. 지금 관계는?
- [ ] 썸 (관심 있는 사람)
- [ ] 초기 연애 (3개월 이내)
- [ ] 안정기 (3개월~1년)
- [ ] 장기 (1년 이상)
- [ ] 이별 후 (재회 원함)

Q2. 상대방 MBTI는?
[16 options]

Q3. 최근 고민은?
- [ ] 답장 어떻게 해야 할지
- [ ] 데이트 신청하고 싶음
- [ ] 고백 타이밍
- [ ] 갈등 해결
- [ ] 그냥 연습

Q4. 당신의 대화 스타일?
- [ ] 적극적
- [ ] 중립적
- [ ] 소극적
```

**Step 3: Instant Analysis Report**

```markdown
## 관계 진단 리포트

**상대방 MBTI:** INFJ  
**예상 진행 속도:** 매우 느림

**주요 Trust Factors:**
✅ 가치관 일치 (도덕성, 진정성)
✅ 깊이 있는 대화
✅ 일관성 있는 행동

**절대 피해야 할 Red Flags:**
❌ 가벼운 농담/태도
❌ 거짓말/과장
❌ 성급한 스킨십

**현재 호감도:** 42/100
→ 신뢰 형성 초기. 지금 필요한 것: 진정성 있는 관심 표현

**추천 첫 시나리오:** "자연스러운 답장 연습"
```

### 2. Interactive Simulation Engine

**Chat Interface (카카오톡 스타일)**

```
┌─────────────────────────────────┐
│  ← INFJ 시뮬레이션  [호감도:67] │
│                                  │
│  [AI Bubble - Left + Profile]   │
│  "응, 괜찮았어. 그런데 왜        │
│   갑자기 그걸 물어봐?"           │
│                                  │
│  [Real-time Feedback Card]       │
│  ⚠️ 호감도: -3 (현재: 39/100)   │
│                                  │
│  📊 분석:                        │
│  - INFJ는 "ㅋㅋ" 같은 가벼운    │
│    톤을 신뢰하지 않습니다.       │
│  - "갑자기"라는 표현 = 의도를    │
│    의심하고 있어요.              │
│                                  │
│  💡 개선안:                      │
│  1. "어제 추천해준 영화 봤는데..." │
│  2. "그 영화 덕분에 생각하게..." │
│  3. "너도 비슷한 감상이었을까..." │
│                                  │
│  [User Input]                    │
│  ┌─────────────────────────────┐│
│  │ 여기에 답장 입력...         ││
│  └─────────────────────────────┘│
│  [💡 추천 문구]  [📋 복사]       │
└─────────────────────────────────┘
```

**Simulation Modes:**

| Mode | Messages | Use Case | Free Limit | Premium |
|------|----------|----------|------------|---------|
| Quick Practice | 10 | 답장 연습 | 3/month | Unlimited |
| Deep Dive | 30 | 중요 대화 (고백, 갈등) | 1/month | Unlimited |
| Custom Scenario | Variable | 특정 상황 준비 | ❌ | ✅ |

### 3. Real-time Coaching System

**Trust Score Visualization:**
```
0-30: 😐 "경계하고 있어요"
31-60: 🙂 "관심은 있어요"
61-80: 😊 "호감이 생겼어요"
81-100: 😍 "마음을 열었어요"
```

**Message Scoring:**
- 🟢 Green (+3 to +10): Trust Factor 자극
- 🟡 Yellow (-1 to +2): 무난함
- 🔴 Red (-3 to -10): Red Flag 발동

**Immediate Feedback Components:**
1. **Trust Delta:** 점수 변화
2. **Why:** MBTI 기반 설명
3. **What went wrong:** 구체적 문제점
4. **How to improve:** 3가지 대안 문구

**Session Summary Report:**

```markdown
## 시뮬레이션 결과 리포트

**최종 호감도:** 67/100 (+25)
████████████████░░░░ 67%

**🎯 주요 성과**
✅ Trust +8: "진정성 있는 질문"
✅ Trust +7: "구체적 칭찬"

**⚠️ 개선 필요**
❌ -5: "가벼운 농담 (3회)"
❌ -3: "ㅋㅋ 남발"

**📝 다음 추천**
• "갈등 상황 대처 연습"
• "깊이 있는 가치관 대화"

**실전 팁:**
INFJ와 대화할 때는 항상 "왜 이 말을 하는지" 
의도가 명확해야 합니다.

[다시 연습하기]  [카톡으로 공유]
```

### 4. Actionable Output

**Feature: "바로 쓸 수 있는 문구 3개"**

시뮬레이션 중 막혔을 때 "💡 추천 문구 보기" 버튼:

```
💡 추천 문구

1. 적극적 (Bold)
"너무 보고 싶어. 이번 주말에 꼭 만나자."
[📋 복사]

2. 중립적 (Balanced)
"요즘 바쁘지? 시간 되면 커피 한잔 어때?"
[📋 복사]

3. 소극적 (Subtle)
"혹시 이번 주 시간 괜찮으면 연락해줘."
[📋 복사]
```

**원터치 복사** → 카카오톡 등에 바로 붙여넣기

## 🎨 User Experience

### Key Screens

**1. Home Dashboard**
```
┌──────────────────────────────────┐
│  Love Practice 💕                │
│                                   │
│  [Relationship Card]              │
│  ┌─────────────────────────────┐ │
│  │ 썸남 (INFJ)                 │ │
│  │ 현재 호감도: 67/100 😊      │ │
│  │ ──────────────── 67%        │ │
│  │                             │ │
│  │ [새 시뮬레이션] [진단 보기] │ │
│  └─────────────────────────────┘ │
│                                   │
│  📚 내 시뮬레이션 기록            │
│  • [2시간 전] 답장 연습 (+12)     │
│  • [3일 전] 데이트 신청 (+8)      │
│                                   │
│  🎯 추천 시나리오                 │
│  💬 고백 타이밍 연습              │
│  💔 갈등 해결 대화                │
└──────────────────────────────────┘
```

**2. Simulation Screen**
```
┌──────────────────────────────────┐
│  ← INFJ 썸남  [호감도: 67] ⚙️   │
│                                   │
│  [Conversation Area - Scrollable] │
│  ─────────────────────────────── │
│  AI: "오늘 날씨 좋네."            │
│                                   │
│  You: "어제 보낸 영화 재밌게     │
│       봤어? ㅎㅎ"                 │
│                                   │
│  [Feedback Card]                  │
│  ⚠️ -3 점수: 가벼운 톤            │
│  💡 개선: "어제 추천해준 영화..." │
│  ─────────────────────────────── │
│                                   │
│  [Input Area]                     │
│  ┌─────────────────────────────┐ │
│  │ 여기에 답장 입력...         │ │
│  └─────────────────────────────┘ │
│  [💡 추천]  [🎤 음성]  [전송]    │
└──────────────────────────────────┘
```

**3. Summary Screen**
```
┌──────────────────────────────────┐
│  시뮬레이션 결과 📊               │
│                                   │
│  최종 호감도: 72/100 (+15)        │
│  ████████████████░░░░ 72%         │
│                                   │
│  🎯 주요 성과                     │
│  ✅ +8: 진정성 있는 질문          │
│  ✅ +7: 구체적 칭찬               │
│                                   │
│  ⚠️ 개선 필요                     │
│  ❌ -5: 가벼운 농담 (3회)         │
│                                   │
│  📝 다음 추천                     │
│  • "깊이 있는 대화 연습"          │
│  • "갈등 상황 대처"               │
│                                   │
│  [다시 연습] [공유] [트랜스크립트]│
└──────────────────────────────────┘
```

---

# Part 3: MBTI Persona Dataset (Summary)

## 16 MBTI Types Overview

### Group 1: Analysts (NT)

| Type | Speed | Trust Factors | Red Flags |
|------|-------|---------------|-----------|
| **INTJ** | 느림 | 비전 공유, 지적 독립성, 논리 | 감정 과잉, 비논리, 시간 낭비 |
| **INTP** | 느림 | 지적 호기심, 사생활 존중, 유머 | 통제, 뻔한 대화, 감정 압박 |
| **ENTJ** | 빠름 | 자기계발, 솔직함, 효율성 | 게으름, 불명확, 피해의식 |
| **ENTP** | 빠름 | 토론, 유연성, 창의성 | 고집, 루틴, 논리 막힘 |

### Group 2: Diplomats (NF)

| Type | Speed | Trust Factors | Red Flags |
|------|-------|---------------|-----------|
| **INFJ** | 매우 느림 | 가치관 일치, 깊은 대화, 일관성 | 가벼움, 거짓말, 도덕성 결여 |
| **INFP** | 느림 | 가치관 존중, 정서적 지지, 창의성 | 비판, 무관심, 갈등 강요 |
| **ENFJ** | 빠름 | 헌신, 따뜻한 리액션, 조화 | 이기심, 냉소, 무책임 |
| **ENFP** | 매우 빠름 | 새로운 경험, 칭찬, 자유 | 구속, 반복, 냉정함 |

### Group 3: Sentinels (SJ)

| Type | Speed | Trust Factors | Red Flags |
|------|-------|---------------|-----------|
| **ISTJ** | 느림 | 성실함, 시간 약속, 실용성 | 무책임, 갑작스런 변경, 비현실적 |
| **ISFJ** | 느림 | 사소한 기억, 꾸준한 연락, 배려 | 무례함, 갑작스런 변화, 무관심 |
| **ESTJ** | 빠름 | 성과, 실질적 도움, 명확한 소통 | 감정 호소, 불확실성, 비효율 |
| **ESFJ** | 빠름 | 조화, 적극적 표현, 사회적 활동 | 소외감, 비판, 무관심 |

### Group 4: Explorers (SP)

| Type | Speed | Trust Factors | Red Flags |
|------|-------|---------------|-----------|
| **ISTP** | 느림 | 취미 공유, 담백함, 실용적 도움 | 집착, 감정 압박, 쓸데없는 말 |
| **ISFP** | 느림 | 미적 감각, 편안함, 진정성 | 강압, 서두름, 비판 |
| **ESTP** | 매우 빠름 | 활동적 데이트, 위트, 즉흥성 | 진지함, 지루함, 우유부단 |
| **ESFP** | 매우 빠름 | 화려한 칭찬, 현재의 행복, 사회적 | 비관, 따분함, 혼자 있기 |

**상세 데이터:** `03-mbti-persona-dataset.md` 참조

## Scoring Algorithm (핵심 로직)

```python
def score_message(user_message, mbti_type, conversation_context):
    """
    각 메시지의 Trust 점수 계산
    """
    # 1. Keyword Matching
    keyword_score = match_keywords(user_message, mbti_type)
    
    # 2. NLP Analysis
    sentiment = analyze_sentiment(user_message)  # 0-100
    authenticity = detect_authenticity(user_message)  # 0-100
    depth = analyze_depth(user_message, context)  # 0-100
    
    # 3. Context Analysis
    consistency = check_consistency(user_message, context)
    
    # 4. Final Score
    base_score = keyword_score
    modifier = (sentiment + authenticity + depth) / 30 - 5
    
    final_delta = clip(base_score + modifier, -10, 10)
    
    return {
        "trust_delta": final_delta,
        "feedback": generate_feedback(...),
        "category": categorize_score(final_delta)
    }
```

---

# Part 4: Technical Architecture

## 🏗️ System Overview

```
Frontend (Next.js 14)
  ↕ API Routes
Backend Services
  ↕ ↕ ↕
Database  AI  Cache
(Supabase) (GPT-4o) (Redis)
```

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router) + TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **State:** Zustand
- **Animation:** Framer Motion

### Backend
- **API:** Next.js API Routes (serverless)
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **ORM:** Prisma
- **Cache:** Upstash Redis

### AI/ML
- **Persona:** OpenAI GPT-4o
- **Coaching:** Claude 3.5 Sonnet
- **Embedding:** text-embedding-3 (future)

### Infrastructure
- **Hosting:** Vercel
- **Monitoring:** Sentry
- **Analytics:** PostHog
- **Payments:** Stripe

## Database Schema (핵심 테이블)

```sql
-- User Profiles
user_profiles (
  id, display_name, gender, age,
  subscription_tier, credits,
  created_at, updated_at
)

-- Relationships (유저의 타겟 상대)
relationships (
  id, user_id, nickname, mbti,
  status, trust_score,
  recent_issue, notes
)

-- Simulations (시뮬레이션 세션)
simulations (
  id, relationship_id,
  scenario_type,
  initial_trust_score, final_trust_score,
  message_count, completed
)

-- Messages (대화 내역)
messages (
  id, simulation_id,
  role, content,
  trust_delta, feedback (JSONB)
)

-- Analysis Reports
analysis_reports (
  id, relationship_id,
  trust_factors, red_flags, recommendations (JSONB)
)

-- Transactions
transactions (
  id, user_id,
  type, amount_usd, credits_purchased,
  stripe_payment_intent_id, status
)
```

**전체 스키마:** `04-technical-architecture.md` 참조

## AI Pipeline

```
User Message
  ↓
1. Preprocessing (intent, tone)
  ↓
2. Context Retrieval (history, relationship)
  ↓
3. Persona Simulation (GPT-4o)
   → AI response
  ↓
4. Scoring Engine (Claude 3.5)
   → Trust delta, feedback
  ↓
5. Suggestion Generation (GPT-4o)
   → 3 alternative messages
  ↓
6. Cache & Store
  ↓
Return to User
```

### AI Cost Estimation

| Operation | Model | Cost/Call | Calls/Session | Cost/Session |
|-----------|-------|-----------|---------------|--------------|
| Persona | GPT-4o | $0.0075 | 15 | $0.1125 |
| Scoring | Claude 3.5 | $0.0045 | 15 | $0.0675 |
| Suggestions | GPT-4o | $0.003 | 15 | $0.045 |
| **Total** | - | - | - | **$0.225** |

**Monthly (500 users, 4 sessions/user):**
- 2,000 sessions × $0.225 = **$450/month**
- ARPU $16 → AI cost $0.90/user → **94% gross margin**

## API Endpoints (핵심)

```typescript
// Authentication
POST /api/auth/signup
POST /api/auth/signin
POST /api/auth/signout

// Relationships
POST /api/relationships
GET /api/relationships
GET /api/relationships/:id
PATCH /api/relationships/:id

// Simulations
POST /api/simulations/start
POST /api/simulations/:id/message
POST /api/simulations/:id/complete
GET /api/simulations/:id

// Analysis
POST /api/analysis
GET /api/analysis/:relationshipId

// User & Credits
GET /api/user/profile
PATCH /api/user/profile
GET /api/user/credits
POST /api/user/credits/purchase

// Payments
POST /api/payments/create-checkout-session
POST /api/payments/webhook
```

## Security

1. **Authentication:** JWT tokens (Supabase Auth)
2. **Authorization:** Row Level Security (RLS)
3. **Encryption:** HTTPS/TLS + at-rest encryption
4. **Rate Limiting:** 100 req/min per user
5. **Input Validation:** Zod schemas
6. **Privacy:** GDPR + Korean PIPA compliant

---

# Part 5: Go-to-Market Strategy

## 🚀 Launch Plan

### Phase 1: MVP Launch (Month 1-3)

**Target:** 500 active users, 5% paid conversion

**Channels:**

1. **Community Marketing**
   - Reddit: r/Korea, r/relationships
   - 에브리타임, 인스티즈, 오픈카톡방
   - 익명 후기 심기

2. **Content Marketing**
   - "INTJ 남자친구가 이렇게 답장했다면?" (바이럴)
   - MBTI 시나리오별 대응 가이드 (SEO)
   - 블로그/브런치 콘텐츠

3. **Influencer Seeding**
   - MBTI/연애 콘텐츠 크리에이터 10명
   - 유튜브 "연애 상담" 채널 협업
   - 무료 프리미엄 제공

### Phase 2: Growth (Month 4-12)

**Target:** 15,000 users, 8% conversion

**Channels:**

1. **Paid Acquisition**
   - Instagram/TikTok ads
     - Targeting: 25-34F, MBTI interest
   - Naver/Kakao 키워드 광고
     - "연애 고민", "MBTI 연애", "카톡 답장"
   
2. **Referral Program**
   - 친구 초대 시 5 credits 제공
   - 친구 유료 전환 시 50% 할인 쿠폰

3. **Partnership**
   - Dating apps (Tinder, Amanda) 제휴
   - MBTI 테스트 사이트 배너

### Phase 3: Expansion (Year 2+)

- Japanese market (MBTI 인기 상승 중)
- English version (Gen Z global)
- B2B pivot: 기업 커뮤니케이션 트레이닝

## 📊 Success Metrics

### Product Metrics (MVP)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Activation Rate | 60%+ | Users who complete 1 simulation |
| Session Length | 15+ min | Avg. time in simulation |
| Messages/Session | 20+ | Engagement depth |
| Repeat Usage | 40%+ | Return within 7 days |
| NPS | 40+ | Would you recommend? |

### Business Metrics (Year 1)

| Metric | Target | Rationale |
|--------|--------|-----------|
| Active Users | 15,000 | Conservative for niche B2C |
| Paid Conversion | 8% | Above industry (5%) |
| ARPU | $16/mo | Hybrid model |
| Churn Rate | <10%/mo | Sticky product |
| CAC | <$25 | LTV/CAC = 3+ |
| ARR | $230K+ | Sustainable solo founder |

---

# Part 6: Implementation Roadmap

## 8-Week Development Plan

### Week 1-2: Foundation
- [ ] Project setup (Next.js + Supabase + TypeScript)
- [ ] Database schema implementation
- [ ] Authentication flow (email + social login)
- [ ] Basic UI components (shadcn/ui setup)
- [ ] MBTI dataset integration

**Deliverables:**
- Running dev environment
- Database with sample data
- Login/signup working

### Week 3-4: Core Engine
- [ ] Relationship CRUD operations
- [ ] Persona simulation engine (GPT-4o integration)
- [ ] Scoring engine (Claude 3.5 integration)
- [ ] Real-time feedback system
- [ ] Message analysis pipeline

**Deliverables:**
- API endpoints functional
- AI persona responds accurately
- Scoring logic validated (100+ test cases)

### Week 5-6: User Experience
- [ ] Chat interface (KakaoTalk style)
- [ ] Onboarding flow
- [ ] Feedback visualization (trust score UI)
- [ ] Suggestion generation & copy feature
- [ ] Summary report generation

**Deliverables:**
- Complete user flow working
- UI polished and responsive
- Feedback system validated with beta users

### Week 7: Integration & Testing
- [ ] Payment integration (Stripe)
- [ ] Credits system implementation
- [ ] Analytics setup (PostHog)
- [ ] Error tracking (Sentry)
- [ ] Persona accuracy testing (all 16 types)
- [ ] Performance optimization

**Deliverables:**
- End-to-end flow tested
- Payment flow working
- Analytics tracking events

### Week 8: Launch Preparation
- [ ] Beta user testing (20 users)
- [ ] Bug fixes & refinements
- [ ] Landing page + marketing site
- [ ] Content marketing prep
- [ ] Soft launch (invite-only)

**Deliverables:**
- Production-ready app
- Beta feedback incorporated
- Launch materials ready

## Post-Launch Roadmap

### Month 3-6: Growth Features
- [ ] Voice simulation (ElevenLabs)
- [ ] Attachment style analysis
- [ ] Scenario library (community-generated)
- [ ] Progress tracking & gamification
- [ ] Real relationship tracking (optional)

### Month 6-12: Scale
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations
- [ ] White-label B2B version
- [ ] Mobile app (React Native)

### Year 2: Expansion
- [ ] Multi-language support
- [ ] Video call simulation (AI avatar)
- [ ] Group dynamics simulation
- [ ] Enterprise communication training

---

# Part 7: Risk Analysis & Mitigation

## Identified Risks

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| **Emotional AI Regulation** | MEDIUM | LOW | Disclaimer + therapist referral option |
| **MBTI Backlash** | LOW | MEDIUM | Add Big Five, emphasize "entertainment" |
| **Competition (Character.ai)** | MEDIUM | MEDIUM | Focus Korean market + coaching UX |
| **User Retention** | HIGH | HIGH | Gamification + progress tracking |
| **Negative Outcomes** | MEDIUM | LOW | Terms: "entertainment purposes only" |
| **AI Cost Overrun** | LOW | LOW | Caching + optimization |
| **Data Privacy Concerns** | MEDIUM | LOW | GDPR/PIPA compliance + transparency |

## Contingency Plans

**If User Acquisition Fails:**
- Pivot to B2B (corporate communication training)
- Partner with dating apps as white-label feature
- Focus on niche (e.g., only "썸→연애" segment)

**If Retention is Low:**
- Add more gamification (levels, badges)
- Weekly challenges & push notifications
- Success story sharing (social proof)

**If Regulatory Issues:**
- Add explicit disclaimers
- Partner with licensed therapists for referrals
- Position as "entertainment/educational tool"

---

# Part 8: Final Recommendations

## Should We Build This? ✅ YES

### Strengths
1. ✅ **Clear Market Need:** 연애 불안감 증가 + MBTI 열풍
2. ✅ **Unique Positioning:** MBTI 시뮬레이션 + 한국 최적화
3. ✅ **Technical Feasibility:** LLM 기술 성숙, 구현 가능
4. ✅ **Business Model:** 명확한 수익화 경로 (hybrid model)
5. ✅ **Scalability:** AI 기반이라 marginal cost 낮음
6. ✅ **Solo Founder Friendly:** 8주 MVP, 1인 운영 가능

### Weaknesses (개선 가능)
1. ⚠️ **Competition:** Character.ai 등 대형 플레이어 존재
   - **대응:** 한국 시장 + 연애 특화로 차별화
2. ⚠️ **Retention Risk:** 관계 성공 시 이탈 가능
   - **대응:** 다음 관계, 친구 관계, B2B pivot 옵션
3. ⚠️ **MBTI Validity:** 과학적 논란
   - **대응:** "entertainment" 명시 + Big Five 추가

## Next Immediate Steps

1. **Validate Demand (Week 1)**
   - Landing page 제작 + 대기자 리스트
   - Target: 200+ signups (PMF indicator)
   
2. **Technical POC (Week 2)**
   - 1개 MBTI (INFJ) + 1개 시나리오 구현
   - Persona 정확도 테스트
   - Target: 80%+ accuracy rating
   
3. **Go/No-Go Decision (Week 3)**
   - Signup > 200 AND Accuracy > 80% → **GO**
   - Else → Refine or pivot

4. **Full MVP Development (Week 4-11)**
   - Follow 8-week roadmap above
   
5. **Beta Launch (Week 12)**
   - 100 beta users
   - Iterate based on feedback
   
6. **Public Launch (Month 4)**
   - Content marketing campaign
   - Influencer partnerships
   - Paid acquisition start

---

# Part 9: Appendix

## Glossary

- **MBTI:** Myers-Briggs Type Indicator (16 personality types)
- **Trust Factor:** 호감을 얻는 요소 (긍정적 반응 유발)
- **Red Flag:** 호감을 잃는 요소 (부정적 반응 유발)
- **Trust Score:** 0-100 호감도 점수
- **Simulation:** AI 페르소나와의 연습 대화 세션
- **Credits:** 시뮬레이션/분석에 사용되는 가상 화폐

## References

### Market Research
- Statista: Global Dating Market Report 2026
- Korea Creative Content Agency: MBTI Culture Report 2025
- McKinsey: Gen Z Relationship Trends 2024

### Technical Resources
- OpenAI GPT-4o Documentation
- Anthropic Claude 3.5 Sonnet API
- Next.js 14 App Router Guide
- Supabase Documentation

### Competitive Analysis
- Character.ai User Analysis (2026)
- Replika Business Model Case Study
- Korean Dating App Market Overview

## Contact & Team

**Founder/Developer:** [Your Name]  
**Email:** [contact@lovepractice.com]  
**GitHub:** [github repo]

**Advisors Needed:**
- Korean relationship psychology expert
- MBTI professional consultant
- Growth marketing specialist (B2C)

---

# 🎯 Final Verdict

**Score:** 88/100 ✅ **PASS**

**Breakdown:**
- Market Opportunity: 18/20 (large, growing, clear need)
- Product-Market Fit: 17/20 (strong hypothesis, needs validation)
- Technical Feasibility: 19/20 (LLM mature, clear architecture)
- Business Model: 18/20 (clear revenue, healthy margins)
- Competitive Moat: 16/20 (differentiated, but defensible)

**Recommendation:** **PROCEED WITH MVP**

**Reasoning:**
1. 한국 시장의 독특한 MBTI 문화 + 연애 불안감은 명확한 기회
2. 기술적으로 실현 가능하고, 8주 내 MVP 출시 가능
3. 수익 모델이 명확하고, AI 비용 대비 마진 건강함
4. Solo founder로 시작하기 적합한 규모 (ARR $230K+ 목표)
5. 실패해도 B2B pivot 등 옵션 다양함

**Key Success Factors:**
1. MBTI 페르소나 정확도 (>80% user satisfaction)
2. 연애 맥락의 한국어 이해도 (nuance, tone)
3. Onboarding → First Simulation 전환율 (>60%)
4. 주간 재사용률 (>40%)
5. 마케팅 실행력 (community + content)

---

**이 문서는 Love Practice 서비스의 모든 설계를 담고 있으며, 바로 구현에 들어갈 수 있습니다.**

**Ready to build? 🚀**

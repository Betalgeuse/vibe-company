# Love Practice - MVP Product Specification
## AI Relationship Coach Agent: Detailed Feature Design

**Version:** 1.0  
**Date:** 2026-01-31  
**Target Launch:** 8 weeks from start

---

## 🎯 Product Vision

**Mission Statement:**
"사랑도 연습이 될까요?"라는 질문에 YES를 만들어주는 AI 기반 인터랙티브 연애 시뮬레이터

**Core Hypothesis:**
MBTI 페르소나 시뮬레이션 + 실시간 코칭 피드백 = 유저의 연애 성공률 증가 → 높은 engagement & retention

---

## 🏗️ MVP Feature Scope

### ✅ Phase 1: Core MVP (Must-Have)

#### 1. Onboarding Flow
**Goal:** 3분 이내에 첫 시뮬레이션 시작

**Steps:**
1. **User Profile Setup**
   - Input: Name (nickname), Gender, Age
   - Auto-assign: Agent gender (opposite of user)
   
2. **Relationship Context Input**
   ```
   Q1. 지금 관계는 어떤 상태인가요?
   - [ ] 썸 (관심 있는 사람이 있어요)
   - [ ] 초기 연애 (사귄 지 3개월 이내)
   - [ ] 안정기 (3개월~1년)
   - [ ] 장기 연애 (1년 이상)
   - [ ] 이별 후 (재회를 원해요)
   
   Q2. 상대방의 MBTI는?
   - [16 options with quick description]
   - "모르겠어요" → AI가 대화로 추정 (Phase 2)
   
   Q3. 최근 어떤 고민이 있나요? (선택)
   - [ ] 답장을 어떻게 해야 할지 모르겠어요
   - [ ] 데이트 신청을 하고 싶어요
   - [ ] 고백 타이밍을 잡고 싶어요
   - [ ] 갈등이 생겼어요
   - [ ] 그냥 연습하고 싶어요
   
   Q4. 당신의 대화 스타일은?
   - [ ] 적극적 (먼저 연락 많이 함)
   - [ ] 중립적
   - [ ] 소극적 (답장 위주)
   ```

3. **Relationship Analysis Report (1차 진단)**
   - Output 예시:
   ```markdown
   ## 관계 진단 리포트
   
   **상대방 MBTI:** INFJ  
   **예상 진행 속도:** 매우 느림 (Trust 쌓는 데 시간 필요)  
   **주요 Trust Factors:**
   - ✅ 가치관 일치 (도덕성, 진정성)
   - ✅ 깊이 있는 대화
   - ✅ 일관성 있는 행동
   
   **절대 피해야 할 Red Flags:**
   - ❌ 가벼운 농담/가벼운 태도
   - ❌ 거짓말이나 과장
   - ❌ 성급한 스킨십 암시
   
   **호감도 현재 추정치:** 42/100
   - 아직 신뢰 형성 초기 단계입니다.
   - 지금 필요한 것: 진정성 있는 관심 표현
   
   **추천 첫 시나리오:** "자연스러운 답장 연습"
   ```

#### 2. Interactive Simulation Engine

**Architecture:**
```
User Input → MBTI Persona Agent → Response Generation
                    ↓
              Scoring Engine → Real-time Feedback
                    ↓
              Trust Score Update → Visual Indicator
```

**Conversation Interface:**
- **Chat UI** (카카오톡 스타일)
  ```
  [User Bubble - Right]
  "어제 보낸 영화 재밌게 봤어? ㅎㅎ"
  
  [AI Response - Left + Persona Icon]
  "응, 괜찮았어. 그런데 왜 갑자기 그걸 물어봐?"
  
  [Real-time Feedback - Bottom Card]
  ⚠️ 호감도: -3 (현재: 39/100)
  
  📊 분석:
  - INFJ는 "ㅎㅎ" 같은 가벼운 톤을 신뢰하지 않습니다.
  - "갑자기"라는 표현 = 당신의 의도를 의심하고 있어요.
  
  💡 개선안:
  1. "어제 추천해준 영화 봤는데, 정말 좋더라. 특히 [구체적 장면]이 인상 깊었어."
  2. "그 영화 덕분에 [감정/생각]을 다시 생각하게 됐어. 고마워."
  3. "너도 비슷한 감상이었을까 궁금해서 물어봤어."
  ```

**Simulation Modes:**

| Mode | Description | Use Case | Free Tier Limit |
|------|-------------|----------|-----------------|
| **Quick Practice** | 10-message simulation | 답장 연습, 가벼운 대화 | 3 sessions/month |
| **Deep Dive** | 30-message simulation | 중요한 대화 (고백, 갈등 해결) | 1 session/month |
| **Scenario Builder** | 유저가 상황 커스터마이즈 | 특정 이벤트 준비 | Premium only |

**Persona Simulation Logic:**
```python
# Simplified Pseudo-code
class MBTIPersona:
    def __init__(self, mbti_type):
        self.mbti = mbti_type
        self.trust_level = 50  # 0-100
        self.conversation_history = []
        self.emotional_state = "neutral"
        
    def generate_response(self, user_message):
        # 1. Analyze user message
        intent = analyze_intent(user_message)
        tone = detect_tone(user_message)
        
        # 2. Check against MBTI rules
        reaction = self.mbti_ruleset.evaluate(intent, tone)
        
        # 3. Update trust score
        trust_delta = reaction['trust_delta']
        self.trust_level += trust_delta
        
        # 4. Generate contextual response
        response = self.llm_generate(
            persona=self.mbti,
            trust_level=self.trust_level,
            emotional_state=self.emotional_state,
            context=self.conversation_history[-5:]
        )
        
        return {
            "message": response,
            "trust_delta": trust_delta,
            "feedback": reaction['feedback'],
            "suggestions": self.generate_alternatives(user_message)
        }
```

#### 3. Real-time Coaching Feedback System

**Feedback Components:**

1. **Trust Score Indicator**
   - Visual: Progress bar + emoji
   - 0-30: 😐 "경계하고 있어요"
   - 31-60: 🙂 "관심은 있어요"
   - 61-80: 😊 "호감이 생겼어요"
   - 81-100: 😍 "마음을 열었어요"

2. **Message Scoring**
   - Green (+3 to +10): Trust Factor 자극
   - Yellow (-1 to +2): 무난함
   - Red (-3 to -10): Red Flag 발동

3. **Immediate Coaching**
   - Why this response? (MBTI 기반 설명)
   - What went wrong? (구체적 문제점)
   - How to improve? (3가지 대안 문구)

4. **Session Summary Report**
   ```markdown
   ## 시뮬레이션 결과 리포트
   
   **최종 호감도:** 67/100 (+25 from start)
   **주요 성과:**
   - ✅ 진정성 있는 질문으로 Trust +8
   - ✅ 구체적 칭찬으로 Trust +7
   
   **개선 필요:**
   - ⚠️ 3번의 Red Flag 발동 (성급한 스킨십 암시)
   - ⚠️ "ㅋㅋ" 남발로 가벼워 보임
   
   **다음 단계 추천:**
   - "갈등 상황 대처 연습" 시뮬레이션
   - "깊이 있는 가치관 대화" 연습
   
   **실전 팁:**
   INFJ와 대화할 때는 항상 "왜 이 말을 하는지" 의도가 명확해야 합니다.
   ```

#### 4. Actionable Output

**Feature: "바로 쓸 수 있는 문구 3개"**
- 시뮬레이션 중 막혔을 때 "💡 추천 문구 보기" 버튼
- 3가지 톤으로 제공:
  1. **적극적 (Bold):** "너무 보고 싶어. 이번 주말에 꼭 만나자."
  2. **중립적 (Balanced):** "요즘 바쁘지? 시간 되면 커피 한잔 어때?"
  3. **소극적 (Subtle):** "혹시 이번 주 시간 괜찮으면 연락해줘."

**Copy to Clipboard:**
- 원터치로 문구 복사
- 카카오톡 등에 바로 붙여넣기

---

### ⏳ Phase 2: Growth Features (Post-MVP, Month 3-6)

#### 1. Voice Simulation (음성 기반 시뮬레이션)
- ElevenLabs API 연동
- 상대방 성별/나이대에 맞는 음성
- 전화 통화 시뮬레이션

#### 2. Advanced Analysis
- **Attachment Style** (애착 유형) 추가
  - Secure, Anxious, Avoidant, Fearful-Avoidant
- **Big Five Personality** 통합
- 복합 분석: "INFJ + Anxious Attachment" 대응 전략

#### 3. Scenario Library
- 커뮤니티가 만든 시나리오 공유
- "이별 후 첫 연락" 같은 템플릿
- Upvote 시스템으로 best scenarios 큐레이션

#### 4. Progress Tracking & Gamification
- "연애 레벨" 시스템 (Lv.1 연애 새내기 → Lv.10 연애 고수)
- Achievement badges: "INTJ 정복자", "갈등 해결 마스터"
- Streak system: "7일 연속 연습 달성!"

#### 5. Real Relationship Tracking (선택적)
- 실제 관계 진행 상황 기록
- "시뮬레이션 vs. 실제" 비교 분석
- Success story sharing (익명)

---

### 🚫 Phase 3+: Future Expansion (Year 2+)

- Multi-language support (English, Japanese)
- Video call simulation (AI avatar)
- Group dynamics simulation (친구들 앞에서 소개팅)
- B2B pivot: 기업 커뮤니케이션 트레이닝

---

## 🎨 User Experience Design

### Key Screens (MVP)

#### 1. Home Screen
```
┌─────────────────────────────────┐
│  Love Practice 💕               │
│                                  │
│  [Profile Card]                  │
│  썸남/INFJ                       │
│  현재 호감도: 67/100 😊          │
│  ────────────────── 67%          │
│                                  │
│  [Quick Actions]                 │
│  🎯 새 시뮬레이션 시작           │
│  📊 관계 진단 다시 받기          │
│  📚 내 시뮬레이션 기록           │
│                                  │
│  [추천 시나리오]                 │
│  💬 "고백 타이밍 연습"           │
│  💔 "갈등 해결 대화"             │
│  📱 "자연스러운 답장"            │
└─────────────────────────────────┘
```

#### 2. Simulation Screen
```
┌─────────────────────────────────┐
│  ← INFJ 시뮬레이션  [호감도:67] │
│                                  │
│  [AI Bubble - Left]              │
│  "오늘 날씨 좋네."               │
│                                  │
│  [User Input Area]               │
│  ┌─────────────────────────────┐│
│  │ 여기에 답장 입력...         ││
│  └─────────────────────────────┘│
│  [💡 추천 문구]  [🎤 음성 입력] │
│                                  │
│  [Real-time Feedback Card]       │
│  ⚠️ 주의: INFJ는 뻔한 대화를    │
│  싫어합니다. 조금 더 깊이 있는   │
│  주제로 전환해보세요.            │
└─────────────────────────────────┘
```

#### 3. Feedback Summary Screen
```
┌─────────────────────────────────┐
│  시뮬레이션 결과 📊              │
│                                  │
│  최종 호감도: 72/100 (+15)       │
│  ████████████████░░░░ 72%        │
│                                  │
│  🎯 주요 성과                    │
│  ✅ Trust +8: "진정성 있는 질문" │
│  ✅ Trust +7: "구체적 칭찬"      │
│                                  │
│  ⚠️ 개선 필요                    │
│  ❌ -5: "가벼운 농담 (3회)"      │
│                                  │
│  📝 다음 추천                    │
│  • "깊이 있는 대화 연습"         │
│  • "갈등 상황 대처"              │
│                                  │
│  [다시 연습하기] [공유하기]      │
└─────────────────────────────────┘
```

---

## 🧠 MBTI Persona Engine (Enhanced)

### Master Dataset Structure

```json
{
  "mbti_type": "INFJ",
  "metadata": {
    "speed": "매우 느림",
    "openness": 25,
    "group": "Diplomats (NF)"
  },
  "trust_factors": [
    {
      "factor": "가치관 일치",
      "weight": 10,
      "keywords": ["도덕", "진정성", "의미", "목적"],
      "example": "삶의 의미를 찾는 게 중요하다고 생각해."
    },
    {
      "factor": "깊이 있는 대화",
      "weight": 8,
      "keywords": ["철학", "감정", "내면", "통찰"],
      "example": "그 영화가 주는 메시지가 뭐라고 생각해?"
    },
    {
      "factor": "일관성 있는 행동",
      "weight": 7,
      "keywords": ["약속", "신뢰", "책임"],
      "example": "말과 행동이 일치하는 사람을 좋아해."
    }
  ],
  "red_flags": [
    {
      "flag": "가벼운 태도",
      "severity": -8,
      "triggers": ["ㅋㅋㅋ", "별거 아냐", "그냥"],
      "reaction": "진지하지 않은 사람으로 인식",
      "example_response": "...그렇구나. (차갑게 응대)"
    },
    {
      "flag": "거짓말",
      "severity": -10,
      "triggers": ["과장", "모순", "변명"],
      "reaction": "즉시 신뢰 붕괴, 회복 거의 불가능",
      "example_response": "더 이상 대화하기 어려울 것 같아."
    }
  ],
  "conversation_style": {
    "opening": {
      "cold": "안녕. (간결하고 조심스러움)",
      "warm": "오늘 어땠어? (진심 어린 관심)"
    },
    "response_patterns": {
      "shallow_talk": {
        "probability": 0.2,
        "examples": ["그렇구나.", "응."]
      },
      "deep_talk": {
        "probability": 0.8,
        "examples": ["그 말이 왜 그렇게 생각하게 됐어?", "더 듣고 싶어."]
      }
    }
  },
  "scoring_rules": {
    "keyword_match": {
      "trust_factor_keyword": "+3 to +10",
      "red_flag_trigger": "-5 to -10",
      "neutral": "-1 to +2"
    },
    "message_analysis": {
      "authenticity_score": "0-100 (NLP sentiment analysis)",
      "depth_score": "0-100 (topic complexity)",
      "consistency_score": "0-100 (vs. conversation history)"
    }
  }
}
```

### Conversation Context Memory

**Short-term Memory (Session):**
- Last 10 messages
- Current emotional state
- Trust score trajectory

**Long-term Memory (Cross-session):**
- User's typical patterns
- Previously triggered red flags
- Successful strategies

---

## 🛠️ Technical Architecture (High-Level)

### Stack Recommendation

**Frontend:**
- **Framework:** Next.js 14 (App Router)
- **UI Library:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand (lightweight)
- **Animation:** Framer Motion
- **Deployment:** Vercel

**Backend:**
- **API:** Next.js API Routes (serverless)
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **AI/LLM:** OpenAI GPT-4o (persona simulation) + Claude 3.5 Sonnet (coaching feedback)
- **Caching:** Upstash Redis (conversation state)

**AI Pipeline:**
```
User Message 
  → Intent Classification (GPT-4o mini)
  → MBTI Persona Response (GPT-4o with custom system prompt)
  → Scoring Engine (Claude 3.5 Sonnet)
  → Feedback Generation (GPT-4o)
  → Cache Result (Redis)
```

**Data Schema (Simplified):**
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT,
  gender TEXT,
  age INT,
  created_at TIMESTAMP
);

-- Relationships (user's target person)
CREATE TABLE relationships (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  nickname TEXT,
  mbti TEXT,
  status TEXT, -- 'som', 'early', 'stable', 'long', 'breakup'
  trust_score INT DEFAULT 50,
  created_at TIMESTAMP
);

-- Simulations
CREATE TABLE simulations (
  id UUID PRIMARY KEY,
  relationship_id UUID REFERENCES relationships(id),
  scenario_type TEXT,
  initial_score INT,
  final_score INT,
  message_count INT,
  created_at TIMESTAMP
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  simulation_id UUID REFERENCES simulations(id),
  role TEXT, -- 'user' or 'ai'
  content TEXT,
  trust_delta INT,
  feedback JSONB,
  created_at TIMESTAMP
);
```

---

## 📊 Success Metrics (MVP)

### Product Metrics

| Metric | Target (Month 3) | Measurement |
|--------|------------------|-------------|
| **Activation Rate** | 60%+ | Users who complete 1 simulation after signup |
| **Session Length** | 15+ min | Avg. time in simulation |
| **Messages per Session** | 20+ | Engagement depth |
| **Repeat Usage** | 40%+ | Users who return within 7 days |
| **NPS** | 40+ | Would you recommend? |

### Business Metrics

| Metric | Target (Month 3) | Measurement |
|--------|------------------|-------------|
| **Signups** | 1,500 | Total registrations |
| **Paid Conversion** | 5%+ | Free → Paid within 30 days |
| **ARPU** | $12+ | Average revenue per user |
| **Churn** | <15%/mo | Monthly subscription cancellation |
| **CAC** | <$30 | Customer acquisition cost |

---

## 🚀 MVP Development Roadmap

### Week 1-2: Foundation
- [ ] Project setup (Next.js + Supabase)
- [ ] Auth flow (email/social login)
- [ ] Database schema design
- [ ] MBTI dataset preparation (16 types)

### Week 3-4: Core Engine
- [ ] Persona simulation engine (GPT-4o integration)
- [ ] Scoring logic implementation
- [ ] Real-time feedback system
- [ ] Message analysis pipeline

### Week 5-6: User Experience
- [ ] Onboarding flow UI
- [ ] Chat interface (KakaoTalk style)
- [ ] Feedback visualization
- [ ] Summary report generation

### Week 7: Polish & Testing
- [ ] Persona accuracy testing (100+ test cases per MBTI)
- [ ] UI/UX refinement
- [ ] Performance optimization
- [ ] Beta user testing (20 users)

### Week 8: Launch Prep
- [ ] Payment integration (Stripe)
- [ ] Analytics setup (PostHog)
- [ ] Landing page + marketing site
- [ ] Soft launch (invite-only)

---

## 💡 Differentiation Summary

| Feature | Love Practice | Character.ai | Replika | Human Coach |
|---------|--------------|--------------|---------|-------------|
| **MBTI Persona** | ✅ Perfect simulation | ❌ Generic | ❌ Generic | ⚠️ Varies |
| **Real-time Coaching** | ✅ Every message | ❌ None | ❌ None | ✅ Yes |
| **Actionable Output** | ✅ 3 ready-to-use messages | ❌ None | ❌ None | ⚠️ General advice |
| **Korean Optimization** | ✅ MBTI culture + 카톡 style | ❌ English-first | ❌ English-first | ⚠️ Cultural gap |
| **Progress Tracking** | ✅ Trust score visualization | ❌ None | ⚠️ Basic | ❌ Manual |
| **Cost** | $12.99/mo | $9.99/mo | $19.99/mo | $80-150/session |
| **Availability** | 24/7 instant | 24/7 instant | 24/7 instant | Schedule-dependent |

**Unique Value Proposition:**
"상대방의 MBTI로 완벽히 빙의한 AI와 연습하고, 바로 쓸 수 있는 문구를 받아가세요. 한국 연애 문화에 최적화된 유일한 연애 코치."

---

## 🎯 Next: Validation & Build

**Immediate Actions:**
1. Validate MVP assumptions with 20 target users (surveys/interviews)
2. Build technical proof-of-concept (1 MBTI type, 1 scenario)
3. Design high-fidelity mockups
4. Prepare beta launch plan

**Go/No-Go Decision Point (Week 4):**
- User interest validation: >70% "would pay" response
- Technical feasibility: Persona accuracy >80%
- Cost structure: LLM costs <$0.50 per simulation

---

**Conclusion:**
MVP는 명확한 scope와 실현 가능한 기술 스택으로 설계되었습니다. 핵심 가치인 "MBTI 시뮬레이션 + 실시간 코칭"에 집중하여 8주 내 출시 가능한 구조입니다.

**Next Step:** Technical Architecture Deep Dive & Persona Dataset Completion

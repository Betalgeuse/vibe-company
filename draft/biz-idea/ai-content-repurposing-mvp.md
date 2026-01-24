# AI Content Repurposing for Solo Creators - MVP Business Plan

## 📊 Score & Verdict (Codex Certified)
- **Solopreneur Score:** (Codex 검증 후 기입)
- **Verdict:** (Codex 검증 후 기입)

---

## 🌍 Global First Checklist
- [x] **Language:** English first (Korean later)
- [x] **Payment:** USD via Stripe
- [x] **Domain:** .com or .io
- [x] **Target:** US/EU/AU English speakers (Solo YouTubers, Podcasters, Course Creators)
- [x] **Marketing:** Product Hunt, Indie Hackers, Reddit, Twitter/X

---

## 📈 MVP Direction Options

| Option | MVP 방향 | 핵심 차별점 | 성공 확률 |
|--------|---------|------------|----------|
| **A** | YouTube → LinkedIn 특화 (B2B Creator) | 비즈니스 콘텐츠 크리에이터 타겟, LinkedIn 최적화 텍스트 변환 | **45%** |
| B | Podcast → Multi-format (Audio-first) | 팟캐스터 특화, 오디오→텍스트+쇼트 변환 | 35% |
| C | Course Creator → Promo Content | 교육 콘텐츠 → 마케팅 자료 자동 생성 | 30% |

**✅ 선택: Option A - YouTube → LinkedIn 특화**

> **Why:** LinkedIn 콘텐츠 제작 수요 급증 + B2B 크리에이터는 시간 가치 높음 (WTP $49/mo 충분)

---

## 1. The "Micro" Opportunity

### Target ICP (Ideal Customer Profile)
| 구분 | 상세 |
|------|------|
| **Primary** | Solo B2B YouTubers (5K-100K subscribers) creating business/tech content |
| **Secondary** | Business Podcasters repurposing for LinkedIn |
| **Tertiary** | Course Creators needing promotional clips |

### Pain Point
> "I spend 5+ hours/week manually creating LinkedIn posts, Twitter threads, and short clips from my YouTube videos. It's repetitive but necessary for growth."

**구체적 상황:**
- 영상 1개 촬영 후 편집에 8시간 → 업로드 후 추가 리퍼포징에 5시간
- LinkedIn, Twitter, Instagram 각 플랫폼별 최적화 필요
- 매주 반복되는 "노가다"로 핵심 창작 시간 부족

### TAM / SAM / SOM

| Metric | Size | 산출 근거 |
|--------|------|----------|
| **TAM** | $2.5B | Global creator economy tools market (content creation segment) |
| **SAM** | $250M | English-speaking solo creators with YouTube/Podcast (5M creators × $50/yr avg tool spend) |
| **SOM** | $500K | First 3 years: 1,000 paying users × $49/mo × 10% retention = ~850 active × $500/yr |

### Willingness to Pay
- **Why $49/mo works:** B2B creators earn $5K-50K/mo from content → $49 = <1% of income
- **ROI:** 10 hours saved × $50/hr (creator opportunity cost) = $500/mo value
- **10x ROI:** $500 value / $49 cost = 10.2x → Strong justification

---

## 2. Product Spec (MVP)

### Core Function (ONE Thing)
> **"Paste YouTube URL → Get 15+ LinkedIn-ready content pieces in 5 minutes"**

**Output Formats:**
1. LinkedIn carousel (10-slide PDF)
2. LinkedIn text post (3 variations)
3. Twitter/X thread (5-10 tweets)
4. Quote graphics (5 images with key quotes)
5. Short clip timestamps (top 5 moments for Shorts/Reels)
6. Blog post outline
7. Email newsletter draft

### MVP Scope (2주 내 구현)

| Week 1 | Week 2 |
|--------|--------|
| YouTube URL → Transcript extraction | LinkedIn post generator (3 variations) |
| AI summarization (key points) | Twitter thread generator |
| Basic web UI (URL input → results) | Stripe payment integration |
| | Landing page + waitlist |

### Differentiation vs Competitors
| Competitor | Their Focus | Our Differentiation |
|------------|-------------|---------------------|
| Repurpose.io ($35/mo) | Distribution automation | **Content creation** (not just distribution) |
| Opus Clip ($19/mo) | Short clip extraction | **Text content** for LinkedIn/Twitter (not video-only) |
| Munch ($49/mo) | Trend-optimized clips | **B2B LinkedIn focus** (not general social) |
| Castmagic ($24/mo) | Podcast transcription | **YouTube-first** + visual outputs |
| quso.ai ($29/mo) | General repurposing | **Specific workflow: YT→LinkedIn pipeline** |

**핵심 차별점:**
> "우리는 Video-to-Video가 아닌 **Video-to-Text-Content** 특화. LinkedIn에서 성과 내는 크리에이터를 위한 도구."

---

## 2.5 Implementation Hints

| 요구사항 | 체크 | 상세 |
|----------|:----:|------|
| 서버 필요 여부 | ⚠️ 서버 필요 | AI 모델 호출, 결과 저장 |
| 외부 API 연동 | ✅ 필요 | YouTube Data API, LLM API (OpenAI/Claude), Whisper |
| 브라우저 자동화 | ❌ 불필요 | API 기반 처리 |
| 결제 시스템 | ✅ 필요 | Stripe (USD) |
| DB 필요 여부 | 간단 | 사용자 계정, 생성 기록 (PostgreSQL/SQLite) |
| **복잡도 수준** | **중간** | MVP는 단순하나 AI 파이프라인 구축 필요 |

### Tech Consideration (No Specific Stack)
- 서버리스 or 경량 서버 (API 위주)
- 비동기 처리 필요 (영상 처리 시간 고려)
- CDN 불필요 (텍스트 출력 위주)
- Rate limiting 구현 (무료 tier 악용 방지)

---

## 2.6 Competition Check

### Direct Competitors (실제 확인됨)

| Competitor | Price | Focus | MRR/Traction |
|------------|-------|-------|--------------|
| **Repurpose.io** | $35-179/mo | Distribution automation | $5M ARR, 11 employees |
| **Opus Clip** | $15-29/mo | Video → Short clips | High traction, VC-backed |
| **Munch** | $10-49/mo | Trend-optimized clips | Growing |
| **Castmagic** | $24/mo | Podcast → content | Established |
| **quso.ai** | $29/mo | General repurposing | Competitor to Repurpose |
| **Meet Sona** | $24/mo | Interview → content | Niche |
| **Vidyo.ai** | $30-50/mo | Video clips | Established |
| **Distribution AI** | Unknown | Blog/Video → social | New entrant |

### Why They Won't Crush You

| Concern | Reality |
|---------|---------|
| "Repurpose.io가 기능 추가하면?" | Repurpose는 **distribution** 회사. Content creation은 DNA가 다름. 우리는 creation 특화. |
| "Opus Clip이 텍스트 추가하면?" | Opus는 **video-to-video** DNA. Text-first 제품 만들기 어려움 (다른 UX/모델 필요). |
| "왜 우리가 이길 수 있나?" | **Vertical focus**: "YouTube B2B Creator → LinkedIn" 이 정확한 워크플로우에 특화. Generalist는 못 따라옴. |

**진짜 차별점:**
1. **Workflow Specificity:** YT URL → LinkedIn-ready output (end-to-end)
2. **Output Quality:** B2B/Professional tone 최적화 (not casual social)
3. **Speed to Value:** 5분 내 15+ 콘텐츠 (경쟁사는 수동 편집 필요)

---

## 3. Automation Strategy (Zero Ops)

### Marketing Automation

| Channel | 자동화 방법 | 사람 개입 |
|---------|------------|----------|
| **Product Hunt** | 런칭 예약, 자동 응답 템플릿 | 런칭일 모니터링만 |
| **Twitter/X** | 일일 자동 포스팅 (Build in Public) | 주 1회 콘텐츠 계획 |
| **Reddit** | 관련 서브레딧 모니터링 알림 | 댓글 직접 작성 |
| **Indie Hackers** | 진행 상황 자동 업데이트 | 월 1회 상세 글 |
| **SEO Blog** | AI로 비교 글 생성 (vs competitors) | 최종 검토만 |

### Sales/Onboarding Automation

| 단계 | 자동화 | 방법 |
|------|:------:|------|
| Signup | ✅ | Self-serve (이메일 인증) |
| Onboarding | ✅ | 인앱 튜토리얼 + 이메일 시퀀스 |
| Payment | ✅ | Stripe Checkout (no-code) |
| Upgrade prompts | ✅ | 사용량 기반 자동 알림 |
| Churn prevention | ✅ | 미사용 시 이메일 자동 발송 |

### Support Automation

| 이슈 유형 | 자동화 | 방법 |
|----------|:------:|------|
| FAQ | ✅ | Chatbot + Help docs |
| Bug reports | ✅ | Form → Linear ticket 자동 생성 |
| Feature requests | ✅ | Canny/Upvoty 자동 수집 |
| Billing issues | ⚠️ | Stripe portal (90% self-serve) |
| Complex issues | ❌ | 이메일 직접 응대 (주 2시간 예상) |

### 자동화 비율 달성

| 구분 | 목표 | 예상 |
|------|------|------|
| 반복 업무 자동화 | 80%+ | **85%** |
| 사람 개입 필요 | 의사결정만 | 주 5시간 이하 |
| 스케일 지표 | 고객 2배 → 업무 1.2배 | **달성 가능** (서버 비용만 증가) |

---

## 4. Why This Works for YOU?

### Vision Fit
> "크리에이터가 콘텐츠의 본질(창작)에 집중할 수 있도록, 반복적인 편집/변환 노동을 AI로 제거한다."

- ✅ 직접 경험 가능한 문제 (콘텐츠 크리에이터라면 공감)
- ✅ 10년 후에도 유효한 문제 (콘텐츠 폭발적 증가 추세)
- ✅ 돈 벌면서 세상을 좋게 만드는 사업

### Zero to One Elements

| 요소 | 적용 |
|------|------|
| **10x Better Tech** | 영상 1개 → 15+ 콘텐츠 자동 변환 (수작업 5시간 → 5분) |
| **Economies of Scale** | AI API 비용은 사용량 증가 시 협상력 증가 → 마진 개선 |
| **Network Effects** | 약함 (but 템플릿 공유 커뮤니티로 보완 가능) |

### Buy Back Time
| 현재 | After |
|------|-------|
| 크리에이터: 주 5시간 리퍼포징 | → 30분 (검토만) |
| 운영자(나): 주 40시간 풀타임 필요? | → 주 10시간 (자동화 85%) |

---

## 5. Cost Estimate

### Month 1 (Pre-Revenue)

| 항목 | 비용 (USD) | 비고 |
|------|-----------|------|
| Domain + Hosting | $20 | Vercel/Railway free tier 활용 |
| LLM API (OpenAI/Claude) | $100 | 테스트 + 초기 사용자 |
| Whisper API | $50 | 영상 트랜스크립션 |
| Stripe | $0 | 거래 없음 |
| Marketing | $0 | Organic only |
| **Total** | **$170** | |

### After PMF (Month 6+, 100 paying users)

| 항목 | 비용 (USD) | 비고 |
|------|-----------|------|
| Hosting | $50 | Upgraded tier |
| LLM API | $800 | ~100 users × 8 videos/mo × $1/video |
| Whisper API | $200 | |
| Stripe fees | $150 | 3% of $4,900 MRR |
| Support tools | $30 | Crisp/Intercom free tier |
| **Total** | **$1,230** | |
| **MRR** | **$4,900** | 100 users × $49 |
| **Gross Margin** | **75%** | ($4,900 - $1,230) / $4,900 |

### Path to $150K ARR

| Milestone | Users | MRR | ARR | Timeline |
|-----------|-------|-----|-----|----------|
| Launch | 10 | $490 | $5.9K | Month 1 |
| PMF | 100 | $4.9K | $58.8K | Month 6 |
| Scale | 300 | $14.7K | **$176K** | Month 12 |

**핵심 가정:**
- Month 1-3: Product Hunt + Twitter로 100 signups, 10% conversion = 10 paid
- Month 4-6: Organic growth 20%/mo + referral
- Month 7-12: SEO + content marketing 효과 발현

---

## 💰 Path to $150K ARR Summary

| Item | Calculation |
|------|-------------|
| Target Price | **$49/mo** |
| Required Customers | **300** |
| ARR | **$176K** |
| Feasibility | **High** - 경쟁사 대비 차별화된 포지셔닝, B2B 크리에이터 WTP 충분 |

---

## 🎯 Customer Value (Most Important)

### One-Sentence Definition
> "With this, **B2B YouTubers/Podcasters** save **10+ hours/week** and gain **3x more LinkedIn engagement** from a single video."

### Specific Results
| Stage | Description |
|-------|-------------|
| **Before** | Spend 5 hours/week manually writing LinkedIn posts, Twitter threads, creating quote graphics from video content |
| **After** | Paste URL → Get 15+ ready-to-post content pieces in 5 minutes, review & publish |
| **Savings** | $500/month (10 hours × $50/hr opportunity cost) OR 40 hours/month freed for creation |

---

## [부록] 2주 MVP 구현 로드맵

### Week 1: Core Pipeline
```
Day 1-2: YouTube URL → Transcript extraction
Day 3-4: AI summarization (key points, quotes)
Day 5-6: Basic web UI (input → output display)
Day 7: Testing + bug fixes
```

### Week 2: Monetization + Launch
```
Day 8-9: LinkedIn post generator (3 variations)
Day 10: Twitter thread generator
Day 11: Stripe integration + pricing page
Day 12-13: Landing page + waitlist capture
Day 14: Soft launch (Twitter + Indie Hackers)
```

### 구현 힌트 (추상적)
- 서버리스 웹앱 + 비동기 job queue
- 외부 API: YouTube Data API, LLM API, Speech-to-Text API
- 간단한 DB: 사용자, 생성 기록, 구독 상태
- 결제: Stripe Checkout + Customer Portal

---

## ⚠️ Risk & Mitigation

| Risk | Probability | Mitigation |
|------|-------------|------------|
| AI API 비용 급증 | Medium | Usage-based pricing, 무료 tier 제한 (월 3회) |
| 경쟁사 기능 카피 | High | Speed + vertical focus로 선점, 커뮤니티 빌딩 |
| 낮은 전환율 | Medium | 무료 trial 최적화, onboarding 개선 |
| YouTube API 제한 | Low | Fallback: 사용자가 직접 transcript 업로드 옵션 |

---

## ✅ Go/No-Go Checklist

- [x] ARR $150K+ 달성 가능 (300 users × $49/mo)
- [x] 글로벌 시장 (Day 1 영어)
- [x] 고객 가치 명확 (10시간/주 절약)
- [x] 경쟁사 차별화 (Video→Text 특화, LinkedIn focus)
- [x] 2주 내 MVP 가능
- [x] 자동화 80%+ 달성 가능
- [x] Gross margin 70%+ 유지 가능

**Verdict: ✅ GO - MVP 개발 진행 권장**

# MVP Spec: LDR Virtual Date Night Planner

## 1. Executive Summary

**장거리 연애 커플이 시차와 거리를 넘어 의미 있는 가상 데이트를 쉽게 계획하고 실행할 수 있게 해주는 AI 기반 플랫폼.** 기존 솔루션이 단순 기능(타임존 트래커, 메시징)에 그치는 반면, 우리는 "데이트 경험 전체"를 자동화하여 LDR 커플의 관계 유지 성공률을 극대화한다.

---

## 📊 Score & Verdict (Codex Certified)
- **Solopreneur Score:** (Codex 검증 후 기입)
- **Verdict:** (Codex 검증 후 기입)

---

## 🌍 Global First Checklist
- [x] **Language:** English first (Korean later)
- [x] **Payment:** USD via Stripe
- [x] **Domain:** .com or .io (예: datenight.io, ldrdate.com)
- [x] **Target:** US/EU/AU English speakers (International LDR couples)
- [x] **Marketing:** Product Hunt, Indie Hackers, Reddit (r/LongDistance - 250K+ members), TikTok, Instagram

---

## 📈 MVP Direction Options

| Option | MVP 방향 | 핵심 차별점 | 성공 확률 |
|--------|---------|------------|----------|
| **A** | AI Date Night Generator (Full Experience) | 시차 자동 계산 + AI 맞춤 데이트 제안 + 실시간 동기화 활동 | **55%** |
| B | Timezone-Smart Scheduler Only | 시차 계산 + 양측 최적 시간 추천 (단순 기능) | 30% |
| C | Couple Activity Game Platform | 게임/퀴즈 플랫폼 (Lovingly 유사) | 25% |

**✅ 선택: Option A - AI Date Night Generator**

> **Why:** 시차 계산만으로는 차별화 부족. "데이트 전체 경험 자동화"가 10x 가치 제공. 경쟁사 부재로 선점 기회.

---

## 🎯 Customer Value (Most Important)

### One-Sentence Definition
> "With this, **LDR couples** save **3+ hours/week** on date planning and gain **2x more quality time** together despite time zones."

### Specific Results
| Stage | Description |
|-------|-------------|
| **Before** | LDR 커플은 시차 계산에 30분, 데이트 아이디어 찾기에 1시간, 동기화 준비에 30분 소비. 결국 피로감으로 데이트 빈도 감소 → 관계 위기 |
| **After** | 앱에서 2분 만에 완벽한 데이트 계획 수령. AI가 시차, 취향, 예산 고려한 맞춤 제안. 동기화된 활동 바로 시작 가능 |
| **Savings** | **월 12시간** (주 3시간 × 4주) 또는 **데이트 빈도 2배 증가** (월 2회 → 4회) |

---

## 💰 Path to $150K ARR

| Item | Calculation |
|------|-------------|
| Target Price | **$14.99/mo** (커플 1계정) |
| Required Customers | **835 커플** |
| ARR | **$150K** |
| Feasibility | **High** - Reddit r/LongDistance만 250K+, LDR 커플 수백만, 전용 도구 부재 |

### Unit Economics
| Metric | Value | 근거 |
|--------|-------|------|
| **CAC** | $15-25 | Organic (Reddit, TikTok) + 낮은 CPC ($0.50-1.00) |
| **LTV** | $120 | $14.99 × 8개월 평균 유지 (LDR 관계 평균 2년, 해소 후 churn) |
| **LTV:CAC** | 5-8x | Healthy ratio |
| **Payback** | 1-2개월 | 첫 결제로 CAC 회수 |

---

## 2. Product Spec

### 2.1 핵심 기능 (MVP - 3개월 내 구현)

| # | 기능 | 설명 | Priority |
|---|------|------|----------|
| 1 | **Smart Timezone Manager** | 양측 위치 입력 → 겹치는 시간대 자동 계산 + "골든 아워" 추천 | P0 |
| 2 | **AI Date Night Generator** | 취향, 예산, 시간, 관계 단계 입력 → 3개 맞춤 데이트 플랜 제안 | P0 |
| 3 | **Synced Activity Hub** | 동시 시청(Netflix/YouTube), 온라인 게임, 요리 따라하기 등 동기화된 활동 가이드 | P0 |
| 4 | **Countdown & Reminder** | 다음 데이트/만남까지 카운트다운 + 스마트 리마인더 | P1 |
| 5 | **Date Memory Journal** | 데이트 후 사진/메모 저장, 기념일 자동 알림 | P1 |

### 2.2 기술 스택 (1인 운영 최적화)

| Layer | Choice | 근거 |
|-------|--------|------|
| **Frontend** | Next.js (React) + PWA | 웹+모바일 동시 지원, 빠른 개발, PWA로 앱스토어 우회 |
| **Backend** | Supabase (PostgreSQL + Auth + Realtime) | BaaS로 백엔드 개발 시간 최소화, 실시간 동기화 내장 |
| **AI** | OpenAI GPT-4 API | 데이트 아이디어 생성, 개인화 추천 |
| **Hosting** | Vercel (Frontend) + Supabase (Backend) | 무료 tier 충분, 자동 스케일링 |
| **Payment** | Stripe | 글로벌 결제, 구독 관리 자동화 |
| **Email** | Resend | 트랜잭션 이메일, 리마인더 |

### 2.3 플랫폼 결정

**✅ Web First (PWA) → Mobile Later**

| 근거 | 설명 |
|------|------|
| **개발 속도** | 네이티브 앱 대비 3배 빠른 MVP 런칭 |
| **앱스토어 우회** | 리뷰 프로세스 없이 즉시 배포, 30% 수수료 회피 |
| **PWA 장점** | 홈화면 설치, 푸시 알림, 오프라인 기능 모두 지원 |
| **나중 전환** | PMF 확인 후 React Native로 전환 용이 |

---

## 3. 10x Differentiation

### 3.1 기존 솔루션 비교

| 기능 | Together Apart | VeryClose | Lovingly | **우리 (DateNight.io)** |
|------|---------------|-----------|----------|------------------------|
| 시차 계산 | ✅ 수동 입력 | ❌ | ❌ | ✅ **자동 + AI 최적 시간 제안** |
| 데이트 아이디어 | ❌ | ❌ | ⚠️ 일반 목록 | ✅ **AI 맞춤 생성 (무한)** |
| 동기화 활동 | ❌ | ❌ | ⚠️ 게임만 | ✅ **영화/요리/게임 통합** |
| 개인화 | ❌ | ❌ | ❌ | ✅ **취향 학습, 관계 단계 반영** |
| 리마인더 | ⚠️ 기본 | ❌ | ⚠️ 기본 | ✅ **스마트 (시차 고려)** |
| 추억 저장 | ❌ | ⚠️ 메시지만 | ❌ | ✅ **데이트 저널** |

### 3.2 10x Claim Statement

> **"우리는 기존 LDR 도구 대비 '데이트 계획 시간'에서 10배 낫다"**

| 비교 항목 | 기존 방식 (수동) | 우리 | 배수 |
|----------|-----------------|------|------|
| **데이트 계획 시간** | 2시간/회 | **5분/회** | **24x** |
| **아이디어 다양성** | 10-20개 (직접 검색) | **무한 (AI 생성)** | **∞** |
| **시차 계산 정확도** | 80% (수동, 실수 多) | **100% (자동)** | **1.25x** |
| **데이트 실행률** | 50% (계획만 하고 실행 X) | **85%+ (원클릭 시작)** | **1.7x** |

### 3.3 핵심 차별화 (Why 10x)

1. **End-to-End 자동화**: 시차 계산 → 아이디어 → 실행까지 원스톱
2. **AI 개인화**: "우리만의 데이트"를 무한 생성 (경쟁사는 정적 목록)
3. **동기화 경험**: 단순 알림이 아닌 "함께 하는 활동" 중심
4. **관계 성장 트래킹**: 데이트 히스토리 → 관계 건강 인사이트

### 3.4 독점 가능 요소

| 요소 | 설명 | 방어력 |
|------|------|--------|
| **LDR 특화 AI 모델** | LDR 커플 데이터로 fine-tune된 추천 모델 | Medium (데이터 축적 시간 필요) |
| **커뮤니티/Network Effect** | LDR 커플 커뮤니티 → 데이트 아이디어 공유 | Medium |
| **브랜드/SEO** | "LDR date ideas", "long distance date night" 키워드 선점 | High (선점 효과) |

---

## 4. Automation Strategy

### 4.1 AI 활용 방안

| 영역 | AI 활용 | 구현 방식 |
|------|--------|----------|
| **데이트 아이디어 생성** | GPT-4로 무한 맞춤 데이트 플랜 | 프롬프트 템플릿 + 사용자 프로필 |
| **개인화 추천** | 이전 데이트, 피드백 기반 학습 | 임베딩 + 유사도 검색 |
| **대화 스타터 생성** | 어색함 방지 대화 주제 제안 | 컨텍스트 기반 생성 |
| **기념일 서프라이즈** | 기념일 맞춤 이벤트 자동 제안 | 캘린더 연동 + 생성 |
| **고객 지원** | FAQ 챗봇 | Fine-tuned 모델 또는 RAG |

### 4.2 1인 운영 자동화 (80%+ 목표)

| 업무 | 자동화 | 사람 | 방법 |
|------|:------:|:----:|------|
| **회원가입/온보딩** | ✅ | | Supabase Auth + 인앱 튜토리얼 |
| **결제/구독 관리** | ✅ | | Stripe Customer Portal |
| **데이트 추천 생성** | ✅ | | AI 자동 생성 |
| **리마인더 발송** | ✅ | | Cron job + 이메일 자동화 |
| **버그 리포트 수집** | ✅ | | 폼 → Linear 자동 생성 |
| **FAQ 응대** | ✅ | | AI 챗봇 + Help docs |
| **기능 요청 수집** | ✅ | | Canny 자동 수집 |
| **복잡한 문의 응대** | | ✅ | 이메일 (주 2시간 예상) |
| **마케팅 콘텐츠** | ⚠️ | ✅ | AI 초안 → 검토 |
| **제품 방향 결정** | | ✅ | 전략적 의사결정 |

### 4.3 자동화 비율 달성

| 구분 | 목표 | 예상 달성 |
|------|------|----------|
| 반복 업무 자동화 | 80%+ | **85%** |
| 사람 개입 필요 | 의사결정만 | 주 5-8시간 |
| 스케일 지표 | 고객 2배 → 업무 1.2배 | ✅ (AI/서버 비용만 증가) |

---

## 5. 수익 모델

### 5.1 가격 구조 (Freemium)

| Tier | 가격 | 기능 |
|------|------|------|
| **Free** | $0 | 시차 계산, 월 2회 AI 데이트 제안, 기본 리마인더 |
| **Pro** | **$9.99/mo** | 무제한 AI 제안, 동기화 활동 전체, 데이트 저널, 우선 지원 |
| **Premium** | **$14.99/mo** | Pro + 맞춤 서프라이즈 플래너, 기념일 자동화, 관계 인사이트 대시보드 |

**연간 할인:** 20% (Pro: $95.88/yr, Premium: $143.88/yr)

### 5.2 가격 전략 근거

| 고려사항 | 분석 |
|----------|------|
| **경쟁사 가격** | Paired: $9.99/mo, Lovewick: $7.99/mo, Rizz: $6.99/mo |
| **ICP 지불 의향** | 설문 기준 $10-20/mo 수용 가능 |
| **커플 공유** | 1계정 2인 사용 → 실질 $5-7.5/인 (가성비 인식) |
| **LTV 최적화** | $9.99 vs $14.99 테스트 후 결정 (MVP는 $9.99 단일 tier로 시작) |

### 5.3 Unit Economics (상세)

**가정:** 
- 월 신규 가입: 500명
- Free → Pro 전환율: 8%
- 월 Churn: 5%
- 평균 구독 기간: 8개월

| Metric | Value |
|--------|-------|
| **MRR/User** | $12.49 (Pro/Premium 가중평균) |
| **Gross Margin** | 78% (AI API $1.50/user, 인프라 $1/user) |
| **CAC** | $20 (Reddit/TikTok organic + 소액 paid) |
| **LTV** | $100 ($12.49 × 8개월) |
| **LTV:CAC** | **5x** |
| **Payback** | **1.6개월** |

### 5.4 매출 프로젝션

| Milestone | 유료 유저 | MRR | ARR | Timeline |
|-----------|----------|-----|-----|----------|
| Launch | 30 | $375 | $4.5K | Month 1 |
| Traction | 150 | $1,875 | $22.5K | Month 3 |
| PMF | 500 | $6,250 | $75K | Month 6 |
| Scale | **1,000** | **$12,500** | **$150K** | Month 12 |

---

## 6. 3개월 런칭 로드맵

### Month 1: Foundation & Core MVP (주 50시간)

**Week 1-2: 기반 구축**
- [ ] 프로젝트 셋업 (Next.js + Supabase + Stripe)
- [ ] 인증 시스템 (이메일/소셜 로그인)
- [ ] 커플 연결 기능 (초대 코드)
- [ ] 기본 UI/UX 디자인 (Figma → 구현)

**Week 3-4: 핵심 기능 1차**
- [ ] Smart Timezone Manager 구현
- [ ] 시차 기반 "골든 아워" 계산 로직
- [ ] 기본 데이터베이스 스키마 설계
- [ ] 랜딩 페이지 + Waitlist

**Deliverable:** 동작하는 시차 계산기 + 랜딩 페이지

### Month 2: AI Integration & Core Features (주 50시간)

**Week 1-2: AI 데이트 생성기**
- [ ] OpenAI API 연동
- [ ] 데이트 아이디어 생성 프롬프트 엔지니어링
- [ ] 사용자 프로필 (취향, 예산, 관계 단계) 수집 UI
- [ ] 3개 맞춤 데이트 플랜 출력

**Week 3-4: 동기화 활동 & 결제**
- [ ] Synced Activity Hub 기본 기능
  - Netflix 파티 링크 생성 안내
  - 온라인 게임 추천 (2인용)
  - 동시 요리 레시피 추천
- [ ] Stripe 결제 연동
- [ ] Free/Pro tier 기능 분리

**Deliverable:** 결제 가능한 핵심 MVP

### Month 3: Polish & Launch (주 50시간)

**Week 1-2: 완성도 높이기**
- [ ] Countdown & Reminder 기능
- [ ] 데이트 저널 (사진/메모 저장)
- [ ] 푸시 알림 (PWA)
- [ ] 온보딩 플로우 개선
- [ ] 버그 수정 & 성능 최적화

**Week 3: Beta Launch**
- [ ] Reddit r/LongDistance에 베타 모집 글
- [ ] 초기 50명 베타 테스터 피드백 수집
- [ ] 크리티컬 이슈 수정

**Week 4: Public Launch**
- [ ] Product Hunt 런칭
- [ ] Indie Hackers 글 게시
- [ ] TikTok/Instagram 콘텐츠 시작
- [ ] 첫 유료 고객 확보 목표

**Deliverable:** 공개 런칭 + 첫 30명 유료 고객

---

## 7. 확장 경로 (Y1-Y3)

### Year 1: LDR Niche 100% 장악 ($150K ARR)

| Q | 목표 | 핵심 액션 |
|---|------|----------|
| Q1 | MVP 런칭 + PMF 탐색 | 베타 런칭, 피드백 루프, 핵심 기능 고도화 |
| Q2 | PMF 확인 + 성장 | Product Hunt, Reddit 마케팅, SEO 시작 |
| Q3 | 기능 확장 | 음성/영상 데이트 내장, 게임 통합 |
| Q4 | 1,000 유료 고객 | 리퍼럴 프로그램, 인플루언서 협업 |

**Y1 핵심 지표:**
- 유료 고객: 1,000명
- ARR: $150K
- NPS: 50+
- Churn: <5%/월

### Year 2: Adjacent Niche 확장 ($500K ARR)

| 확장 방향 | 설명 | TAM 추가 |
|----------|------|----------|
| **군인 커플** | 해외 파병 군인 + 가족 (큰 시장, 높은 WTP) | $500M |
| **유학생 커플** | 해외 유학 중 커플 | $200M |
| **출장 잦은 직장인** | 주중 LDR 상태 | $300M |
| **International Dating** | 온라인에서 만난 국제 커플 | $400M |

**Y2 핵심 액션:**
- 군인 커플 특화 기능 (보안 메시징, 시차 극대화 대응)
- B2B 파트너십 (군 복지 서비스, 대학교 등)
- 모바일 네이티브 앱 출시
- 다국어 지원 (스페인어, 포르투갈어)

### Year 3: Broader Couple Market ($1.5M ARR)

| 확장 방향 | 설명 |
|----------|------|
| **All Couples** | LDR 아닌 일반 커플로 확장 ("바쁜 커플의 데이트 플래너") |
| **Relationship Wellness** | 관계 건강 체크, 커플 상담 연결 |
| **Life Events** | 프로포즈 계획, 기념일 이벤트 자동화 |
| **Acquisition Target** | Match Group, Bumble 등 데이팅 앱 회사에 Exit |

**Y3 핵심 지표:**
- 유료 고객: 10,000명
- ARR: $1.5M
- Exit 가능성: Match Group, Bumble, 또는 독립 성장

---

## 8. 리스크 & 완화

| 리스크 | 확률 | 영향 | 완화 전략 |
|--------|------|------|----------|
| **낮은 전환율** (Free→Paid) | M | H | 가치 있는 Pro 기능 강화, A/B 테스트, 7일 무료 체험 |
| **높은 Churn** (LDR 종료 시) | H | M | 관계 유지 도구로 포지셔닝, LDR 성공 후 일반 커플 전환 유도 |
| **경쟁사 진입** (Paired 등) | M | M | 빠른 실행 + LDR 버티컬 집중으로 선점, 커뮤니티 락인 |
| **AI 비용 증가** | L | M | 캐싱, 응답 템플릿화, 사용량 기반 요금제 |
| **데이팅 앱 규제** | L | L | "데이팅"이 아닌 "관계 유지" 포지셔닝 |
| **PMF 실패** | M | H | 빠른 피봇 (예: 군인 커플 특화로 전환) |

---

## 9. Growth Strategy (Global Channels)

### 🌍 PLG/Self-Serve (메인 전략)

| 채널 | 전략 | 예상 효과 |
|------|------|----------|
| **Reddit** | r/LongDistance (250K), r/relationships 진정성 있는 참여 | High (핵심 ICP 집중) |
| **TikTok** | LDR 팁/밈 콘텐츠, "LDR date ideas" 시리즈 | High (바이럴 가능성) |
| **Instagram** | 감성 컨텐츠, LDR 커플 스토리 | Medium |
| **Product Hunt** | 런칭 + 업데이트마다 재런칭 | Medium (초기 트래픽) |
| **SEO** | "long distance date ideas", "LDR activities" 키워드 | High (장기 트래픽) |
| **Referral** | 커플이 다른 LDR 친구에게 추천 (양측 1개월 무료) | High (자연스러운 확산) |

### 📊 마케팅 자동화

| 채널 | 자동화 | 사람 개입 |
|------|--------|----------|
| Reddit | 키워드 알림 설정 | 직접 댓글 작성 |
| TikTok | 콘텐츠 예약 게시 | 콘텐츠 제작 |
| Email | 드립 캠페인 자동화 | 전략 수립 |
| SEO | AI 블로그 초안 생성 | 최종 검토/게시 |

---

## 10. 구현 힌트 (Implementation Hints)

> ⚠️ 구체적 라이브러리 명시는 최소화. 개발 시작 시 최신 도구 선택.

| 요구사항 | 체크 | 상세 |
|----------|:----:|------|
| 서버 필요 여부 | ⚠️ 서버리스/BaaS | Supabase로 대부분 해결 |
| 외부 API 연동 | ✅ 필요 | OpenAI (GPT-4), Timezone API, Stripe |
| 브라우저 자동화 | ❌ 불필요 | API 기반 |
| 결제 시스템 | ✅ 필요 | Stripe (USD) |
| DB 필요 여부 | 중간 | 사용자, 커플, 데이트 기록, 구독 (PostgreSQL) |
| 실시간 기능 | ✅ 필요 | 커플 간 동기화 (Supabase Realtime) |
| 푸시 알림 | ✅ 필요 | PWA Push 또는 OneSignal |
| **복잡도 수준** | **중간** | 3개월 MVP 가능, AI 연동이 핵심 |

---

## ✅ Go/No-Go Checklist

- [x] **ARR $150K+ 달성 가능**: 1,000 커플 × $12.50/mo
- [x] **글로벌 시장**: Day 1부터 영어, 국제 LDR 커플 타겟
- [x] **고객 가치 명확**: "3시간/주 절약, 데이트 빈도 2배"
- [x] **경쟁사 차별화**: 전용 도구 부재, AI 개인화로 10x
- [x] **3개월 내 MVP 가능**: 웹앱 + AI API 조합
- [x] **자동화 80%+ 달성 가능**: AI + BaaS 조합
- [x] **Gross margin 70%+ 유지 가능**: 78% 예상

---

## 🎯 Final Verdict

**✅ STRONG GO - MVP 개발 즉시 시작 권장**

### 핵심 성공 요인

1. **블루오션**: LDR 특화 데이트 플래너 전용 도구 부재
2. **열정적 커뮤니티**: Reddit r/LongDistance 250K+ 회원 (무료 마케팅 채널)
3. **높은 WTP**: 관계 유지에 높은 가치 부여, $10-20/mo 수용
4. **빠른 MVP**: 3개월 내 핵심 기능 런칭 가능
5. **스케일러블**: AI 기반으로 운영 비용 최소화

### 다음 단계

1. **Week 1**: 도메인 확보 (datenight.io 또는 ldrdate.com)
2. **Week 1**: 프로젝트 셋업 + 랜딩 페이지 배포
3. **Week 2**: Reddit r/LongDistance에 "빌딩 인 퍼블릭" 시작
4. **Month 1 End**: 시차 계산기 + AI 데이트 제안 MVP 완성

---

*"Making distance feel shorter, one date at a time."*

*- DateNight.io*

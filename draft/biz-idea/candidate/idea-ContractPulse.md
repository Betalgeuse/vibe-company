# ContractPulse - AI 계약 리마인더 & 갱신 관리 도구

## 📊 Score & Verdict (예상)
- **Solopreneur Score**: 88/100
- **Dev Time Estimate**: 3주
- **Verdict**: PASS

---

## 1. The "Micro" Opportunity

### 📌 한줄 설명
프리랜서와 1인 기업을 위한 AI 기반 계약 만료 알림 및 자동 갱신 관리 SaaS

### 🎯 Target Market
- **ICP (Ideal Customer Profile)**: 프리랜서, 에이전시, 컨설턴트, 1인 사업자
- **지역**: 한국 + 글로벌 (영어권)
- **규모**: 연간 5건 이상의 클라이언트 계약을 관리하는 개인/소규모 팀

### 💰 TAM Estimate
- 한국 프리랜서: 약 50만명 (통계청 2024)
- 미국 프리랜서: 약 7,200만명
- 타겟 가능 시장 (연 5건+ 계약 관리): 전체의 20% = 한국 10만명 + 미국 1,400만명
- 월 $15-29 가격대 → **월 MRR $2,100만+ 가능**

### 😫 핵심 Pain Point
> "계약 갱신 시기를 놓쳐서 레이트 인상 협상 기회를 잃거나, 갱신을 깜빡해서 수익이 끊겼어요"

Reddit r/freelance, r/consulting에서 반복 등장하는 불만:
- 스프레드시트로 계약 관리하다가 만료일 놓침
- Notion 캘린더에 넣어도 알림이 약함
- 갱신 협상 타이밍 최적화 어려움

---

## 2. Product Spec (MVP)

### 🔧 Core Functions
1. **계약서 업로드 & AI 파싱**: PDF/이미지 업로드 → AI가 계약 기간, 금액, 갱신 조건 자동 추출
2. **스마트 리마인더**: 만료 30/14/7/3일 전 이메일/슬랙/카톡 알림
3. **갱신 협상 타이밍 추천**: AI가 적절한 연락 시점과 협상 스크립트 제안
4. **대시보드**: 전체 계약 현황, 월별 수익 예측, 만료 예정 계약 한눈에

### 🆚 Differentiation (vs 경쟁)
| 기존 솔루션 | 문제점 | ContractPulse 차별화 |
|-------------|--------|---------------------|
| Notion/스프레드시트 | 수동 입력, 약한 알림 | AI 자동 파싱 + 강력한 멀티채널 알림 |
| DocuSign CLM | 너무 비쌈 ($25+/user) | 프리랜서 친화적 가격 ($15/월) |
| Calendly 리마인더 | 계약 특화 아님 | 계약 갱신 협상 워크플로우 특화 |

### 🛠️ Tech Stack
- **Frontend**: Next.js 14 + Tailwind CSS
- **Backend**: Supabase (Auth + DB + Storage)
- **AI**: OpenAI GPT-4o-mini (계약서 파싱)
- **알림**: Resend (이메일) + Slack API + 카카오 알림톡
- **인프라**: Vercel

---

## 2.5 Competition Check

### 🔍 Direct Competitors
- **PandaDoc**: 대기업 타겟, $19/월부터 시작하지만 복잡함
- **ContractSafe**: $299/월, 중견기업 대상
- **Ironclad**: 엔터프라이즈용, 가격 협상 필요

### 💪 Why They Won't Crush You
- 대형 CLM 도구들은 프리랜서 시장 무관심 (티켓 사이즈가 작음)
- 한국 시장 특화 (카카오 알림톡, 한글 계약서 파싱)는 경쟁자들이 없음
- 심플함이 차별화: 복잡한 기능 없이 "알림"에만 집중

---

## 3. Automation Strategy (Zero Ops)

### 🤖 Marketing Automation
- **SEO 콘텐츠**: "프리랜서 계약 관리 방법" 키워드 타겟팅
- **Reddit/IndieHackers BIP**: 런칭 시 커뮤니티 공유
- **Product Hunt 런칭**: 주간 Top 5 목표

### 🛒 Sales/Onboarding Automation
- 셀프서비스 온보딩 (가입 → 첫 계약 업로드 → 알림 설정까지 5분 이내)
- 이메일 드립 시퀀스 (Day 1, 3, 7, 14)
- Stripe 결제 자동화

### 📞 Support Automation
- Help Center (Notion/GitBook)
- AI 챗봇 (FAQ 응답)
- 월 1회 이하 고객 문의 예상 (단순한 제품)

---

## 4. Why This Works for YOU (상혁님)?

### ✅ Low Maintenance
- 핵심 가치가 "알림"이라 버그 발생 확률 낮음
- OpenAI API 호출 외에 복잡한 로직 없음
- 고객 2배 → 인프라 비용만 비례 증가 (노동 증가 X)

### ✅ Scalability
- 계약 1건 파싱 = GPT-4o-mini $0.002 이하
- Supabase 무료 티어로 1,000 유저까지 무료
- 글로벌 확장 용이 (UI 번역만 하면 됨)

### ✅ Viral Elements
- "내 계약 현황 공유" 이미지 생성 (SNS 바이럴)
- 레퍼럴 프로그램: 친구 초대 시 1개월 무료

---

## 5. Cost Estimate

| 항목 | Month 1 (MVP) | After PMF |
|------|---------------|-----------|
| Vercel Pro | $20 | $20 |
| Supabase Pro | $25 | $25 |
| OpenAI API | $10 | $50 |
| 도메인 | $15 | $0 |
| Resend (이메일) | $0 (무료티어) | $19 |
| **Total** | **$70** | **$114** |

---

## 6. Revenue Potential

### 💵 Pricing Model
- **Free**: 계약 3개까지, 이메일 알림만
- **Pro**: $15/월 - 무제한 계약, 슬랙/카톡 알림, AI 협상 스크립트
- **Team**: $29/월 - 팀 공유, 우선 지원

### 📈 Revenue Projection
- Month 3: 50 유료 유저 × $15 = **$750 MRR**
- Month 6: 200 유료 유저 × $17 (평균) = **$3,400 MRR**
- Month 12: 500 유료 유저 × $18 = **$9,000 MRR**

→ **연매출 2억 달성**: 유료 유저 약 1,000명 필요 (현실적)

---

## 7. Go-to-Market Strategy

### Week 1-2: MVP 개발
- Next.js + Supabase 세팅
- 계약서 업로드 → AI 파싱 → 리마인더 설정 기본 플로우

### Week 3: 런칭
- Product Hunt 런칭
- r/freelance, r/consulting 포스팅
- IndieHackers 런칭 공유

### Week 4+: Growth
- SEO 콘텐츠 발행 (주 1개)
- 초기 유저 피드백 기반 개선
- 레퍼럴 프로그램 시작

---

## 8. Risk Assessment

| 리스크 | 심각도 | 대응책 |
|--------|--------|--------|
| AI 파싱 정확도 낮음 | Medium | 수동 수정 UI 제공, GPT-4o로 업그레이드 |
| 유저 획득 어려움 | Medium | SEO + 커뮤니티 마케팅 집중 |
| 가격 민감도 | Low | Free 티어로 진입장벽 낮춤 |

---

## ✅ Final Verdict

**PASS** - 프리랜서들의 명확한 페인포인트, 낮은 개발 비용, 자동화 가능한 비즈니스 모델. 상혁님의 강점(에이전트 오케스트레이션, 바이브코딩)을 활용하여 2-3주 내 MVP 출시 가능.

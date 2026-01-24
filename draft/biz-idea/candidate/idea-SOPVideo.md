# SOPVideo.ai - AI SOP 비디오 자동 생성기

## 📊 Score & Verdict (예상)
- **Solopreneur Score**: 90/100
- **Dev Time Estimate**: 2.5주
- **Verdict**: PASS

---

## 1. The "Micro" Opportunity

### 📌 한줄 설명
화면 녹화 + 클릭 추적만으로 자동으로 SOP(표준작업절차서) 비디오와 문서를 생성하는 AI 도구

### 🎯 Target Market
- **ICP (Ideal Customer Profile)**: 
  - 소규모 팀 리더/매니저 (직원 교육용)
  - 프리랜서/VA (가상비서) 에이전시 (업무 인수인계)
  - 1인 창업가 (외주 줄 때 SOP 필요)
- **지역**: 글로벌 (영어권 우선)
- **규모**: 직원 1-50명 소규모 비즈니스

### 💰 TAM Estimate
- 미국 소규모 비즈니스: 약 3,300만개
- SOP 도구 니즈 있는 비율: 약 30% = 1,000만개
- 월 $19-49 가격대 → **월 MRR $1.9억+ 가능**

### 😫 핵심 Pain Point
> "Loom으로 녹화하면 영상은 있는데, 문서화된 SOP가 없어서 검색도 안되고 업데이트도 힘들어요"

Reddit r/smallbusiness, r/Entrepreneur에서 반복 등장:
- Loom 영상만 쌓이고 정리 안됨
- 텍스트 SOP 작성에 시간이 너무 오래 걸림
- 새 직원 온보딩 할 때마다 같은 설명 반복

---

## 2. Product Spec (MVP)

### 🔧 Core Functions
1. **스마트 녹화**: Chrome 확장 프로그램으로 화면 녹화 + 클릭/입력 자동 추적
2. **AI SOP 생성**: 녹화 완료 시 자동으로:
   - Step-by-step 텍스트 가이드 생성
   - 각 스텝별 스크린샷 추출
   - 보이스오버 스크립트 생성
3. **멀티 포맷 출력**: 
   - 비디오 (자막 + 보이스오버)
   - PDF 문서
   - Notion/Google Docs 내보내기
4. **SOP 라이브러리**: 팀 공유, 검색, 버전 관리

### 🆚 Differentiation (vs 경쟁)
| 기존 솔루션 | 문제점 | SOPVideo.ai 차별화 |
|-------------|--------|---------------------|
| Loom | 영상만 됨, 문서화 없음 | 영상 + 문서 동시 생성 |
| Scribe | 스크린샷만, 비디오 없음 | 영상 + 문서 + 보이스오버 |
| Tango | 복잡한 워크플로우 | 원클릭 녹화 → 완성 |

### 🛠️ Tech Stack
- **Chrome Extension**: Manifest V3, 화면녹화 API
- **Backend**: Next.js + Supabase
- **AI**: 
  - OpenAI Whisper (음성→텍스트)
  - GPT-4o-mini (스텝 정리, 가이드 생성)
  - ElevenLabs (보이스오버)
- **비디오 처리**: FFmpeg (서버리스)
- **인프라**: Vercel + Cloudflare R2 (영상 저장)

---

## 2.5 Competition Check

### 🔍 Direct Competitors
- **Scribe**: $29/월, 스크린샷 기반 가이드만 (비디오 X)
- **Tango**: $16/월, 비슷하지만 복잡함
- **Loom**: $15/월, 비디오만 (문서화 X)

### 💪 Why They Won't Crush You
- Scribe/Tango는 "비디오"가 약점, Loom은 "문서"가 약점
- SOPVideo.ai는 두 가지를 통합 → 유일한 올인원 솔루션
- AI 보이스오버로 무편집 영상 품질 업그레이드

---

## 3. Automation Strategy (Zero Ops)

### 🤖 Marketing Automation
- **SEO**: "how to create SOP video", "screen recording to documentation" 타겟
- **YouTube**: 제품 데모 영상 (제품 자체로 만든 SOP 쇼케이스)
- **AppSumo LTD**: 초기 유저 확보 + 피드백

### 🛒 Sales/Onboarding Automation
- Chrome 확장 설치 → 첫 녹화 → SOP 생성까지 3분 이내
- 인앱 튜토리얼 (제품으로 제품 온보딩 비디오 만듦)
- Stripe 자동 결제

### 📞 Support Automation
- AI 챗봇 (제품 사용법 FAQ)
- 커뮤니티 포럼 (유저끼리 템플릿 공유)
- 월 2-3회 이하 문의 예상

---

## 4. Why This Works for YOU (상혁님)?

### ✅ Low Maintenance
- 핵심 로직: 녹화 → AI 처리 → 출력
- 유저 인터랙션 최소 (녹화 시작/끝만)
- 에러 발생 시 재처리 버튼으로 셀프 해결

### ✅ Scalability
- 영상 처리는 서버리스 FFmpeg (사용량 기반 과금)
- AI 비용 $0.05/SOP 이하 (GPT-4o-mini + Whisper)
- Cloudflare R2 스토리지 = 초저가

### ✅ Viral Elements
- "Made with SOPVideo.ai" 워터마크 (무료 플랜)
- 팀 공유 시 자연스러운 바이럴
- ProductHunt 런칭 후 테크 미디어 픽업 가능성

---

## 5. Cost Estimate

| 항목 | Month 1 (MVP) | After PMF |
|------|---------------|-----------|
| Vercel Pro | $20 | $20 |
| Supabase Pro | $25 | $25 |
| OpenAI API | $20 | $100 |
| ElevenLabs | $5 | $22 |
| Cloudflare R2 | $5 | $30 |
| **Total** | **$75** | **$197** |

---

## 6. Revenue Potential

### 💵 Pricing Model
- **Free**: 월 5개 SOP, 워터마크 포함
- **Pro**: $19/월 - 무제한 SOP, 워터마크 제거, AI 보이스오버
- **Team**: $49/월 - 팀 공유, 브랜딩, 우선 지원

### 📈 Revenue Projection
- Month 3: 100 유료 유저 × $22 (평균) = **$2,200 MRR**
- Month 6: 400 유료 유저 × $25 = **$10,000 MRR**
- Month 12: 1,000 유료 유저 × $27 = **$27,000 MRR**

→ **연매출 2억 달성**: 유료 유저 약 700명 필요 (현실적)

---

## 7. Go-to-Market Strategy

### Week 1-2: MVP 개발
- Chrome 확장 (화면녹화 + 클릭 추적)
- AI 파이프라인 (Whisper → GPT → 문서화)
- 기본 대시보드

### Week 2.5: 베타 런칭
- IndieHackers 베타 공유
- r/Entrepreneur, r/smallbusiness 포스팅

### Week 3+: 정식 런칭
- Product Hunt 런칭
- AppSumo LTD 진행 고려
- YouTube 데모 영상

---

## 8. Risk Assessment

| 리스크 | 심각도 | 대응책 |
|--------|--------|--------|
| Chrome 확장 권한 이슈 | Medium | 최소 권한만 요청, 프라이버시 정책 명시 |
| 대용량 영상 처리 비용 | Medium | 길이 제한 (Free: 5분, Pro: 15분) |
| Scribe/Tango 기능 추가 | Low | 속도(AI 통합)로 차별화 유지 |

---

## ✅ Final Verdict

**PASS** - Loom과 Scribe 사이의 빈틈을 정확히 공략. AI 통합으로 원클릭 SOP 생성이라는 명확한 가치. Chrome 확장 + AI 파이프라인은 상혁님의 바이브코딩 강점과 잘 맞음. 2.5주 내 MVP 가능.

---

## 🌟 레퍼런스 분석

### 베낄 것
- **Loom**: 녹화 UX의 심플함
- **Scribe**: 스텝별 스크린샷 추출 방식
- **Tango**: 클릭 하이라이트 표시

### 차별화할 것
- 영상 + 문서 동시 생성 (유일함)
- AI 보이스오버로 무편집 품질
- 원클릭 Notion/Google Docs 내보내기

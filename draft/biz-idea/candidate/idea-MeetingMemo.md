# MeetingMemo.kr - 한국 중소기업용 AI 회의록 요약 & 액션아이템 추출기

## 📊 Score & Verdict (예상)
- **Solopreneur Score**: 86/100
- **Dev Time Estimate**: 2.5주
- **Verdict**: PASS

---

## 1. The "Micro" Opportunity

### 📌 한줄 설명
Zoom/Teams/Google Meet 회의 녹음 파일을 업로드하면 AI가 한국어에 최적화된 회의록과 액션아이템을 자동 생성하는 SaaS

### 🎯 Target Market
- **ICP (Ideal Customer Profile)**: 
  - 중소기업 팀 리더/PM
  - 스타트업 대표/창업가
  - 컨설턴트/프리랜서
  - 비서/행정 담당자
- **지역**: 한국 (한국어 특화)
- **규모**: 10-100인 규모 중소기업

### 💰 TAM Estimate
- 한국 중소기업 수: 약 700만개
- 주 2회 이상 회의하는 기업: 약 30% = 210만개
- 회의록 도구 니즈 있는 비율: 20% = 42만개
- 월 ₩19,000-49,000 가격대 → **월 MRR 80억원+ 가능**

### 😫 핵심 Pain Point
> "Otter.ai 써봤는데 한국어가 엉망이에요. 클로바노트는 그나마 낫지만 액션아이템 정리가 안돼요"

Blind/네이버 카페에서 반복 등장:
- 영어 기반 도구들은 한국어 인식 정확도 낮음
- 클로바노트는 전사만 되고 요약/액션아이템 부족
- 회의 끝나고 회의록 정리에 30분-1시간 추가 소요

---

## 2. Product Spec (MVP)

### 🔧 Core Functions
1. **스마트 전사 (Transcription)**:
   - Zoom/Teams/Google Meet 녹음 파일 업로드
   - OpenAI Whisper Large-v3 (한국어 최적화)
   - 화자 분리 (Speaker Diarization)
2. **AI 요약 & 액션아이템**:
   - 3줄 요약 (핵심 결정사항)
   - 액션아이템 자동 추출 (담당자, 기한)
   - 주요 논의 포인트별 정리
3. **팀 협업**:
   - 슬랙/Teams 자동 공유
   - 댓글/하이라이트 기능
   - 검색 가능한 회의록 라이브러리

### 🆚 Differentiation (vs 경쟁)
| 기존 솔루션 | 문제점 | MeetingMemo.kr 차별화 |
|-------------|--------|----------------------|
| Otter.ai | 한국어 부정확 | 한국어 최적화 프롬프트 |
| 클로바노트 | 요약/액션아이템 약함 | GPT-4o 기반 심층 분석 |
| Fireflies.ai | 비쌈 ($19/월), 한국어 부정확 | 합리적 가격 + 한국어 특화 |

### 🛠️ Tech Stack
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Supabase + Cloudflare Workers
- **AI**: 
  - OpenAI Whisper Large-v3 (전사)
  - GPT-4o-mini (요약/액션아이템)
- **화자분리**: pyannote.audio (오픈소스)
- **저장소**: Cloudflare R2
- **인프라**: Vercel

---

## 2.5 Competition Check

### 🔍 Direct Competitors
- **Otter.ai**: $16.99/월, 영어 최적화
- **Fireflies.ai**: $19/월, 글로벌이지만 한국어 부정확
- **클로바노트**: 네이버, 전사 위주 (요약 기능 약함)
- **콜라비노트**: 한국, 기능 제한적

### 💪 Why They Won't Crush You
- 글로벌 도구들은 한국어 시장 우선순위 낮음
- 클로바노트는 요약/액션아이템 기능 부족
- 한국어 특화 + GPT-4 요약 조합 = 유일한 포지션

---

## 3. Automation Strategy (Zero Ops)

### 🤖 Marketing Automation
- **블로그 SEO**: "회의록 자동화", "AI 회의록 작성" 키워드
- **LinkedIn 콘텐츠**: PM/리더 타겟 생산성 팁
- **Blind 마케팅**: "우리 회사 회의 시간 절약한 방법"

### 🛒 Sales/Onboarding Automation
- 셀프서비스 (가입 → 첫 회의 업로드 → 결과 확인 5분)
- 이메일 드립 (Day 1, 3, 7)
- 7일 무료 체험 → 자동 전환

### 📞 Support Automation
- Help Center (Notion)
- AI 챗봇 (FAQ)
- 슬랙 커뮤니티 (파워 유저 커뮤니티)

---

## 4. Why This Works for YOU (상혁님)?

### ✅ Low Maintenance
- 핵심 로직: 업로드 → Whisper → GPT → 출력
- API 기반이라 인프라 관리 최소
- 유저 피드백 기반 프롬프트 개선만 하면 됨

### ✅ Scalability
- Whisper + GPT-4o-mini 비용: 1시간 회의당 약 $0.50 이하
- 고객 증가 → API 비용만 선형 증가
- 글로벌 확장: 일본어/영어 프롬프트만 추가

### ✅ Viral Elements
- "이 회의록은 MeetingMemo.kr로 작성되었습니다" 푸터
- 팀 공유 시 자연스러운 바이럴
- 무료 플랜으로 입소문 유도

---

## 5. Cost Estimate

| 항목 | Month 1 (MVP) | After PMF |
|------|---------------|-----------|
| Vercel Pro | $20 | $20 |
| Supabase Pro | $25 | $25 |
| OpenAI API | $50 | $300 |
| Cloudflare R2 | $5 | $50 |
| **Total** | **$100** | **$395** |

---

## 6. Revenue Potential

### 💵 Pricing Model
- **Free**: 월 3시간 회의, 기본 전사만
- **Pro**: ₩19,000/월 - 월 20시간, 요약+액션아이템, 슬랙 연동
- **Team**: ₩49,000/월 - 무제한, 팀 공유, 우선 지원

### 📈 Revenue Projection
- Month 3: 150 유료 유저 × ₩25,000 (평균) = **₩375만 MRR**
- Month 6: 500 유료 유저 × ₩28,000 = **₩1,400만 MRR**
- Month 12: 1,200 유료 유저 × ₩30,000 = **₩3,600만 MRR**

→ **연매출 2억 달성**: 유료 유저 약 600명 필요 (현실적)

---

## 7. Go-to-Market Strategy

### Week 1-2: MVP 개발
- Whisper 전사 파이프라인
- GPT-4o 요약/액션아이템 추출
- 기본 대시보드

### Week 2.5: 베타 런칭
- 지인 스타트업 5곳 베타 테스트
- 피드백 기반 프롬프트 최적화

### Week 3+: 정식 런칭
- 블로그 SEO 콘텐츠 발행
- Blind/LinkedIn 마케팅
- Product Hunt 런칭 (한국 시간 맞춤)

---

## 8. Risk Assessment

| 리스크 | 심각도 | 대응책 |
|--------|--------|--------|
| Whisper 한국어 정확도 | Low | Whisper Large-v3 충분히 정확 |
| 클로바노트 기능 강화 | Medium | 액션아이템/슬랙 연동으로 차별화 |
| 기업 보안 우려 | Medium | 국내 서버 옵션, 데이터 삭제 정책 |

---

## ✅ Final Verdict

**PASS** - 한국어 회의록이라는 명확한 니치, 클로바노트 대비 요약/액션아이템으로 차별화. Whisper + GPT 조합으로 기술적 진입장벽 낮음. 2.5주 내 MVP 가능.

---

## 🌟 레퍼런스 분석

### 베낄 것
- **Otter.ai**: 화자별 전사 UI, 하이라이트 기능
- **Fireflies.ai**: 자동 회의 참여 기능 (향후)
- **Notion AI**: 액션아이템 추출 포맷

### 차별화할 것
- 한국어 최적화 프롬프트
- 슬랙/Teams 자동 공유 (한 번 설정 후 자동)
- 합리적 가격 (글로벌 대비 30% 저렴)

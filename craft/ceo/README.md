# CEO Command 가이드

**Last Updated:** 2026-01-25

---

## 📋 CEO가 사용하는 Commands

CEO는 비즈니스 전략과 아이디어 발굴에 집중합니다. 아래 Command는 그 과정을 자동화합니다.

### 사용 가능한 Commands

| Command | Version | 용도 | 타겟 |
|---------|---------|------|------|
| `biz-idea` | v1.0 | Micro-SaaS 아이디어 검증 | 1인 기업, 프리랜서, Prosumer |
| `biz-idea-b2b` | v2.0 | B2B SMB SaaS 아이디어 검증 | SMB (10-200명 기업) |

---

## 🚀 biz-idea Command (v1.0) - Micro-SaaS

### 무엇을 하는가?

**1인 기업/프리랜서를 위한 Micro-SaaS 아이디어를 발굴하고 검증하는 파이프라인**

### 언제 사용하는가?

- ✅ 새로운 Micro-SaaS 아이디어가 필요할 때
- ✅ PLG(Product-Led Growth) 셀프서비스 모델을 원할 때
- ✅ ACV $5K 이하, 개인 고객 대상일 때

### 언제 사용하지 않는가?

- ❌ 기업 대상 판매 (SMB, Mid-Market, Enterprise)
- ❌ ACV $10K 이상 계약
- ❌ Sales-Assisted GTM이 필요한 경우
→ **이 경우 `biz-idea-b2b` 사용**

### 어떻게 작동하는가?

```
┌─────────────────────────────────────────┐
│  biz-idea 파이프라인 (3단계)            │
├─────────────────────────────────────────┤
│                                         │
│  1단계: 시장 리서치 (병렬)              │
│     ├─ 니치 마켓 키워드 탐색            │
│     └─ 글로벌 레퍼런스 분석             │
│         ↓                               │
│  2단계: MVP 설계                        │
│     └─ 레퍼런스 기반 초안 작성          │
│         ↓                               │
│  3단계: 티키타카 검증 (3라운드)         │
│     ├─ Round 1: 약점 공격               │
│     ├─ Round 2: 반론 검증               │
│     └─ Round 3: 최종 판정               │
│         ↓                               │
│  결과: 85점 이상 → PASS                 │
│         85점 미만 → 다시                │
│                                         │
└─────────────────────────────────────────┘
```

### 사용 방법

```bash
# 1. 컨텍스트 제공
"AI 기반 일정 관리 SaaS 아이디어 검증하고 싶어. 타겟은 1인 창업자야."

# 2. command 실행
/biz-idea

# 자동으로 다음을 생성:
# 1. 시장 기회 분석
# 2. 경쟁자 분석
# 3. MVP 스펙
# 4. 차별화 전략
# 5. 자동화 전략
# 6. 비용 추정
# 7. 최종 점수 (85점 이상 = 추진 권장)
```

### 결과물

```
/Users/zayden/Documents/assets/craft/biz-idea/idea-{프로젝트명}.md

내용:
├─ Score & Verdict (점수 및 판정)
├─ The Micro Opportunity (시장 기회)
├─ Product Spec (MVP 스펙)
├─ Competition Check (경쟁 분석)
├─ Automation Strategy (자동화 전략)
└─ Cost Estimate (비용 추정)
```

### 실전 예시

**Input:**
```bash
# 컨텍스트 제공
"indie hacker를 위한 SEO 자동화 도구 아이디어 검증해줘"

# command 실행
/biz-idea
```

**Output (30분 후):**
```markdown
# Score: 88/100 ✅ PASS - 추진 권장

## The Micro Opportunity
1인 개발자들이 콘텐츠는 잘 만들지만 SEO에 약함
→ 자동 키워드 분석 + 메타태그 생성 도구

## Product Spec (MVP)
- GitHub 연동 블로그 스캔
- AI 키워드 분석 (ChatGPT)
- 메타태그 자동 생성
- 월 $29 구독

## Competition Check
- SEMrush: 너무 복잡함 (기업용)
- Ahrefs: 비쌈 ($99/월)
- 우리: 심플 + 저렴 + indie 특화

## Automation Strategy
- 고객 획득: Product Hunt 런칭 → X 바이럴
- 서비스 운영: GitHub Actions 자동화
- 지원: FAQ 챗봇 (OpenAI)

## Cost Estimate
- 초기: $500 (도메인, 호스팅, API)
- 월 운영: $50 (서버, API 비용)
- 손익분기점: 3명 고객
```

### 성공 기준

✅ **PASS (85점 이상)**:
- 추진 권장
- MVP 개발 시작 가능
- 레퍼런스와 차별화 전략 명확

❌ **FAIL (85점 미만)**:
- 재검토 필요
- 다른 키워드로 재시도
- 또는 아이디어 피봇

---

## 🎯 CEO의 biz-idea 활용법

### 주간 루틴에 통합

```markdown
## CEO 주간 아이디어 탐색 (금요일 오후 1시간)

1. X/Threads에서 트렌드 키워드 5개 수집
2. biz-idea로 각 키워드 검증
3. 85점 이상 나온 아이디어 1개 선정
4. 다음 주 팀 Weekly에서 공유
```

### Replacement Ladder와 연계

| Phase | biz-idea 활용 |
|-------|--------------|
| **Phase 0-1** | 직접 실행 불가 (시간 없음) |
| **Phase 2+** | 매주 금요일 1시간 탐색 |
| **Phase 4+** | AX Marketing에게 위임 |
| **Phase 5** | 전략적 방향만 제시 |

---

## 📊 측정 지표

### biz-idea craft 활용도

| 지표 | 목표 |
|------|------|
| 월 검증 아이디어 수 | 4개+ |
| PASS 비율 | 25%+ (4개 중 1개) |
| 실제 추진한 아이디어 | 분기당 1개 |
| 수익화 성공률 | 연 1개 |
| **Craft 축적** | 분기당 3개+ 검증된 craft |

---

## 💡 팁 & 트릭

### 좋은 키워드 vs 나쁜 키워드

**❌ 나쁜 예 (너무 넓음):**
```bash
"SaaS 아이디어 찾아줘"  # 너무 광범위
"AI 관련 아이디어"      # 구체성 부족
```

**✅ 좋은 예 (구체적):**
```bash
"indie hacker를 위한 SEO 자동화 도구 아이디어 검증해줘"
"1인 기업의 소셜미디어 예약 발행 SaaS 검증해줘"
"개발자를 위한 기술 블로그 자동 번역 서비스 어때?"
```

---

## 🚀 biz-idea-b2b Command (v2.0) - B2B SMB SaaS

### 무엇을 하는가?

**SMB(10-200명 기업) 대상 B2B SaaS 아이디어를 발굴하고 검증하는 파이프라인**

### 언제 사용하는가?

- ✅ SMB 기업 고객 대상 (10-200명 규모)
- ✅ ACV $3K-30K 계약
- ✅ Product-Led Sales (PLG + Light Sales)
- ✅ 빠른 Sales Cycle (1-3개월)

### biz-idea vs biz-idea-b2b

| 항목 | biz-idea (v1.0) | biz-idea-b2b (v2.0) |
|------|-----------------|---------------------|
| **타겟** | 1인 기업, 프리랜서 | SMB (10-200명 기업) |
| **ACV** | $0-5K | $3K-30K |
| **GTM** | PLG (100% Self-serve) | Product-Led Sales (PLG + Light Sales) |
| **TAM** | $10-50M | $50M-500M |
| **Sales Cycle** | 즉시-1주 | 1-3개월 |
| **핵심 지표** | MRR, Churn | ACV, CAC, LTV, NRR |
| **Pass 기준** | 85점 + Monopoly 20/25 | 80점 + Unit Economics PASS |

### 어떻게 작동하는가?

```
┌─────────────────────────────────────────┐
│  biz-idea-b2b 파이프라인 (6단계)        │
├─────────────────────────────────────────┤
│                                         │
│  Step 1:   SMB Market Research          │
│     ├─ SMB 버티컬 마켓 탐색             │
│     └─ SMB ICP 분석 (/20)               │
│         ↓                               │
│  Step 1.5: GTM Strategy Fit (/30)       │
│     └─ PLS / Founder-Led / Self-Serve+  │
│         ↓                               │
│  Step 2:   SMB MVP Design               │
│     └─ 빠른 온보딩 기반 설계            │
│         ↓                               │
│  Step 2.5: Unit Economics               │
│     └─ ACV, CAC, Payback ≤6mo           │
│         ↓                               │
│  Step 3:   Validation Loop (/100)       │
│     ├─ Round 1: SMB 약점 공격           │
│     ├─ Round 2: 반론 검증               │
│     └─ Round 3: 최종 판정               │
│         ↓                               │
│  Step 4:   Growth Readiness (Optional)  │
│                                         │
│  결과: 80점 이상 + Unit Econ PASS       │
│                                         │
└─────────────────────────────────────────┘
```

### 사용 방법

```bash
# 1. 컨텍스트 제공
"SMB 세일즈팀을 위한 AI 미팅 스케줄러 아이디어 검증해줘. B2B SaaS야."

# 2. command 실행
/biz-idea-b2b
```

### 결과물

```
/Users/zayden/Documents/assets/draft/biz-idea/b2b/idea-{프로젝트명}.md

내용:
├─ Executive Summary
├─ SMB ICP Analysis (/20)
├─ GTM Strategy Fit (/30)
├─ Unit Economics Analysis
├─ MVP Spec (SMB-Ready)
├─ Onboarding & Activation Flow
├─ Validation Score (/100)
└─ Final Verdict
```

---

## 🔗 관련 문서

- [biz-idea/v1.0/biz-idea.md](./biz-idea/v1.0/biz-idea.md) - Micro-SaaS 파이프라인 스펙
- [biz-idea-b2b/v2.0/biz-idea-b2b.md](./biz-idea-b2b/v2.0/biz-idea-b2b.md) - B2B SMB SaaS 파이프라인 스펙

## 📋 배포 방법

```bash
# .factory/commands로 복사 (폴더 없이 flat하게)
cp craft/ceo/biz-idea/v1.0/biz-idea.md .factory/commands/
cp craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md .factory/commands/
```

### ⚠️ 주의: `.factory/commands/` 하위에 폴더 생성 금지!
반드시 `{command}.md` 형태의 flat 파일만 배치해야 함.

---

*Last Updated: 2026-01-25*

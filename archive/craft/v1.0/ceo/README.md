# CEO Command 가이드

**Last Updated:** 2026-01-17

---

## 📋 CEO가 사용하는 Commands

CEO는 비즈니스 전략과 아이디어 발굴에 집중합니다. 아래 Command는 그 과정을 자동화합니다.

### 사용 가능한 Commands

| Command | 용도 | 언제 사용? |
|---------|------|----------|
| `biz-idea` | 신사업 아이디어 발굴 및 검증 | 새로운 수익원 탐색, 사이드 프로젝트 검증 |

---

## 🚀 biz-idea Command

### 무엇을 하는가?

**1인 기업 신사업 아이디어를 발굴하고 검증하는 완전 자동화된 파이프라인**

### 언제 사용하는가?

- ✅ 새로운 마이크로SaaS 아이디어가 필요할 때
- ✅ 현재 아이디어의 시장성을 검증하고 싶을 때
- ✅ 글로벌 경쟁자와 레퍼런스를 빠르게 분석하고 싶을 때

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
# 키워드로 아이디어 탐색
biz-idea "AI 기반 일정 관리"

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
biz-idea "indie hacker를 위한 SEO 자동화 도구"
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
biz-idea "SaaS"  # 너무 광범위
biz-idea "AI"    # 구체성 부족
```

**✅ 좋은 예 (구체적):**
```bash
biz-idea "indie hacker를 위한 SEO 자동화"
biz-idea "1인 기업의 소셜미디어 예약 발행"
biz-idea "개발자를 위한 기술 블로그 자동 번역"
```

### 병렬 실행 (시간 절약)

```bash
# 여러 키워드를 동시에 검증 (추천!)
biz-idea "키워드 1" &
biz-idea "키워드 2" &
biz-idea "키워드 3" &
wait

# 결과: 1.5시간 → 30분으로 단축!
```

---

## 🔗 관련 문서

- [biz-idea Command 상세](./biz-idea.md) - 전체 스펙
- [COMMAND-VISUALIZATION.md](../../../COMMAND-VISUALIZATION.md) - Flow 시각화
- [DASHBOARD-SOLUTION.md](../../../DASHBOARD-SOLUTION.md) - 대시보드 구축

---

*"아이디어는 많지만 시간은 부족한 CEO를 위한 자동화 파이프라인"*

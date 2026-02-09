# 07. Branding Basics (브랜딩 기초)

> **책임:** 프로토타입 완성 후 기본 브랜드 아이덴티티 구축

**Pre-requisite:** [06. Rapid Prototyping](../06-rapid-prototyping/) 완료

---

## 📋 Overview

프로토타입은 완성했지만 브랜딩이 없으면 "그냥 개발 샘플"처럼 보입니다.
이 섹션은 Junior AX Engineer가 **AI 도구로 30-60분 안에** 기본 브랜딩을 완성하는 가이드입니다.

**핵심 원칙:**
- ✅ AI 도구 우선 (ChatGPT, Midjourney, v0.dev 등)
- ✅ 레퍼런스 기반 (항상 3개 이상 수집)
- ✅ Time-boxed (각 작업 30-60분 완료)
- ✅ FCSR 80%+ 목표 (첫 시도 성공률)

---

## 🎯 Tasks

### ⭐ Task 1: Product Naming (제품명 선정)
> **소요 시간:** 30-45분  
> **도구:** ChatGPT, Claude, Gemini

**Files:**
- [outcome.md](./product-naming/outcome.md) - 목표와 측정 기준
- [course.md](./product-naming/course.md) - 단계별 실행 방법
- [checklist.md](./product-naming/checklist.md) - 실행 전 체크리스트

**Goal:** 기억하기 쉽고, 도메인 확보 가능한 제품명 선정

---

### ⭐ Task 2: Concept Definition (컨셉 정의)
> **소요 시간:** 30-45분  
> **도구:** ChatGPT, 레퍼런스 분석

**Files:**
- [outcome.md](./concept-definition/outcome.md)
- [course.md](./concept-definition/course.md)
- [checklist.md](./concept-definition/checklist.md)

**Goal:** 3-5개 키워드로 브랜드 정체성 명확화

---

### ⭐ Task 3: CI/Logo Design (CI/로고 제작)
> **소요 시간:** 45-60분  
> **도구:** Midjourney, DALL-E, Figma

**Files:**
- [outcome.md](./ci-logo-design/outcome.md)
- [course.md](./ci-logo-design/course.md)
- [checklist.md](./ci-logo-design/checklist.md)

**Goal:** 파비콘, 로고 (SVG + PNG) 제작 완료

---

### ⭐ Task 4: Tone & Manner (톤앤매너 설정)
> **소요 시간:** 30-45분  
> **도구:** ChatGPT, 레퍼런스 분석

**Files:**
- [outcome.md](./tone-and-manner/outcome.md)
- [course.md](./tone-and-manner/course.md)
- [checklist.md](./tone-and-manner/checklist.md)

**Goal:** 문체, 어조, 캐릭터 가이드라인 문서화

---

### ⭐ Task 5: Color Palette (컬러 팔레트)
> **소요 시간:** 30-45분  
> **도구:** Coolors.co, Adobe Color, Tailwind CSS

**Files:**
- [outcome.md](./color-palette/outcome.md)
- [course.md](./color-palette/course.md)
- [checklist.md](./color-palette/checklist.md)

**Goal:** Primary/Secondary/Accent 색상 선정 및 Tailwind 설정

---

### ⭐ Task 6: Typography (타이포그래피)
> **소요 시간:** 30-45분  
> **도구:** Google Fonts, Font Pair

**Files:**
- [outcome.md](./typography/outcome.md)
- [course.md](./typography/course.md)
- [checklist.md](./typography/checklist.md)

**Goal:** 제목/본문 폰트 선정 및 Next.js 적용

---

## 🚀 빠른 시작 (3시간 완성)

### Hour 1: 네이밍 & 컨셉
```bash
1. Product Naming (30분)
   - ChatGPT에게 5개 후보 요청
   - 도메인 확인
   - 최종 1개 선정

2. Concept Definition (30분)
   - 레퍼런스 3개 분석
   - 키워드 5개 추출
   - ChatGPT로 컨셉 문서 작성
```

### Hour 2: 비주얼 아이덴티티
```bash
3. CI/Logo Design (60분)
   - Midjourney 프롬프트 작성
   - 4개 생성 → 1개 선택
   - Figma에서 SVG로 정리
   - 파비콘 생성
```

### Hour 3: 스타일 가이드
```bash
4. Color Palette (30분)
   - Coolors.co에서 팔레트 생성
   - Tailwind config 업데이트

5. Typography (15분)
   - Google Fonts에서 선택
   - Next.js에 적용

6. Tone & Manner (15분)
   - 문체 가이드 작성
```

---

## 📊 Workflow

```
06. Rapid Prototyping 완료
    ↓
[Task 1] Product Naming ────┐
[Task 2] Concept Definition ├→ 브랜드 전략
    ↓                        │
[Task 3] CI/Logo Design ─────┤
[Task 4] Tone & Manner   ────┤
[Task 5] Color Palette   ────├→ 비주얼 아이덴티티
[Task 6] Typography      ────┘
    ↓
Next.js 프로젝트에 적용
    ↓
브랜딩 완료! 🎉
```

---

## 🎯 성공 기준

### 완료 체크리스트
- [ ] 제품명 확정 및 도메인 확보
- [ ] 브랜드 컨셉 문서 (1페이지)
- [ ] 로고 파일 (SVG, PNG 512x512, 파비콘)
- [ ] 색상 코드 (Primary, Secondary, Accent)
- [ ] 폰트 선정 및 적용 완료
- [ ] 톤앤매너 가이드 (1페이지)

### 측정 지표
| 지표 | Target |
|------|--------|
| 전체 소요 시간 | 3시간 이내 |
| FCSR (첫 시도 성공률) | 80%+ |
| 레퍼런스 수집 | 각 작업당 3개+ |
| 도구 활용 | AI 도구 100% 활용 |

---

## 🔗 Related Resources

### Internal Links
- [02. Reference-Based Development](../02-reference-based/find-references/) - 레퍼런스 찾는 법
- [06. Rapid Prototyping](../06-rapid-prototyping/) - 프로토타입 제작
- [Design References](../06-rapid-prototyping/design-references/) - 디자인 영감

### External Tools
| 카테고리 | 도구 | 용도 |
|----------|------|------|
| AI 텍스트 | ChatGPT, Claude | 네이밍, 컨셉, 톤앤매너 |
| AI 이미지 | Midjourney, DALL-E | 로고, 아이콘 생성 |
| 색상 | Coolors.co, Adobe Color | 컬러 팔레트 |
| 폰트 | Google Fonts, Font Pair | 타이포그래피 |
| 편집 | Figma | 로고 정리, 파비콘 생성 |

---

## 💡 Pro Tips

### 1. 레퍼런스 우선
```
❌ 바로 ChatGPT에게 "로고 만들어줘"
✅ 경쟁사/유사 서비스 3개 분석 → 패턴 파악 → AI에게 프롬프트
```

### 2. Time-boxing
```
각 작업마다 타이머 설정:
- Product Naming: 30분
- Logo Design: 60분
완벽보다 완성! MVP 브랜딩이 목표.
```

### 3. 일관성 유지
```
모든 결정을 한 문서에 기록:
docs/branding/brand-guide.md

나중에 다른 사람이 봐도 이해 가능하게.
```

### 4. 검증된 조합
```
색상 + 폰트 조합은 검증된 것만:
- Coolors.co의 인기 팔레트
- Font Pair의 추천 조합
```

---

## 🎓 Learning Path

### Week 1: 기본 브랜딩
```
Day 1: Product Naming + Concept Definition
Day 2: CI/Logo Design
Day 3: Color + Typography + Tone & Manner
```

### Week 2: 실전 적용
```
- 자신의 프로젝트에 브랜딩 적용
- FCSR 측정 시작
- 브랜드 가이드 문서 작성
```

### Week 3: 고도화
```
- 다양한 AI 도구 실험
- 레퍼런스 데이터베이스 구축
- 브랜딩 템플릿 제작
```

---

## 📈 Progress Tracking

**완성도:**
- 6개 Task 모두 ⭐ 완료
- 총 18개 파일 (각 Task당 outcome + course + checklist)

**예상 효과:**
- 프로토타입 → 브랜딩 완료: 1일 이내
- 외부에 보여줄 수 있는 수준 달성
- MVP 빠른 검증 가능

---

*"브랜딩 = MVP의 첫인상. AI로 3시간 안에 완성하자."*

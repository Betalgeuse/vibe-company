# 디자인 레퍼런스 찾기 - 실행 가이드

## 📚 Step-by-Step

### Step 1: 무엇을 찾을지 정의 (1분)

작업 전 답해야 할 질문:
```
1. 어떤 종류의 UI인가? (로그인, 대시보드, 랜딩 등)
2. 어떤 플랫폼인가? (웹, 모바일, 데스크톱)
3. 어떤 분위기인가? (모던, 미니멀, 화려함)
4. 타겟 사용자는? (B2B, B2C, 개발자 등)
```

---

### Step 2: 사이트별 검색 전략

#### Mobbin (실제 앱 패턴) - 가장 추천!
```
1. https://mobbin.com 접속
2. 검색창에 UI 종류 입력 (예: "onboarding", "checkout")
3. 필터: iOS/Android/Web 선택
4. 필터: 카테고리 선택 (Finance, E-commerce 등)
5. 마음에 드는 화면 저장
```

**검색 키워드 예시:**
- Login, Sign up, Onboarding
- Dashboard, Settings, Profile
- Checkout, Cart, Payment
- Search, Filters, Navigation

#### Dribbble (시각적 영감)
```
1. https://dribbble.com 접속
2. 검색: "[UI종류] UI design"
3. 필터: Shots → Product Design
4. Popular / Recent 토글하며 탐색
```

**검색 팁:**
- "dashboard UI" → 대시보드
- "mobile app login" → 모바일 로그인
- "SaaS landing page" → SaaS 랜딩

#### Behance (전체 케이스 스터디)
```
1. https://behance.net 접속
2. 검색: "[프로젝트 종류] UI UX"
3. 필터: UI/UX 카테고리 선택
4. 전체 프로젝트 흐름 참고
```

---

### Step 3: 레퍼런스 저장 & 정리

#### 폴더 구조 추천
```
/references
  /[프로젝트명]
    /login
      - ref1.png
      - ref2.png
    /dashboard
      - ref1.png
    /notes.md  ← 왜 선택했는지 메모
```

#### notes.md 작성 예시
```markdown
# 로그인 페이지 레퍼런스

## ref1.png (Spotify)
- 좋은 점: 심플한 폼, 소셜 로그인 배치
- 참고할 것: 버튼 색상 대비

## ref2.png (Notion)
- 좋은 점: 여백 활용, 일러스트 조합
- 참고할 것: 전체적인 레이아웃
```

---

### Step 4: 레퍼런스 활용법

#### AI 도구와 함께 사용
```
1. 레퍼런스 이미지 확보
2. v0.dev에 프롬프트 작성 시 참고
3. "Similar to [앱이름]'s login page" 추가

예시:
"Create a login page similar to Notion's style:
- Clean, minimal design
- Illustration on the left side
- Form on the right side
- Social login options below"
```

#### 팀 공유 시
```
1. Figma 파일에 레퍼런스 페이지 생성
2. 각 레퍼런스에 코멘트 추가
3. 어떤 점을 참고할지 명시
```

---

## 🎯 상황별 추천 사이트

| 상황 | 1순위 | 2순위 |
|------|-------|-------|
| 모바일 앱 UI | Mobbin | Screenlane |
| 웹 대시보드 | Dribbble | Behance |
| 랜딩 페이지 | Landbook | Godly |
| SaaS 제품 | SaaS Landing Page | Awwwards |
| 다크 모드 | Dark Mode Design | Dribbble |
| 전체 플로우 | Page Flows | Mobbin |

---

## ⚠️ 주의사항

1. **레퍼런스 ≠ 복사**
   - 구조와 패턴을 참고
   - 그대로 베끼지 않기

2. **시간 제한 두기**
   - 레퍼런스 찾기에 30분 이상 쓰지 않기
   - 3개 찾으면 시작하기

3. **최신 트렌드 확인**
   - 2-3년 된 레퍼런스는 주의
   - 최근 1년 이내 작업물 선호

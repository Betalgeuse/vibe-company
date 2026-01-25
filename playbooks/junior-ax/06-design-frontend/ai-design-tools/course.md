# AI 디자인 도구 활용 - 실행 가이드

## 📚 Step-by-Step

### Step 1: 도구 선택 (1분)

| 상황 | 추천 도구 |
|------|----------|
| React 컴포넌트 필요 | **v0.dev** |
| 전체 앱 프로토타입 | **Google Stitch** |
| Figma 디자인 필요 | **Galileo AI** |
| 손그림/스케치 있음 | **Uizard** |

---

### Step 2: v0.dev 사용법 (가장 추천)

#### 2-1. 접속 및 프롬프트 작성
```
https://v0.dev
```

#### 2-2. 효과적인 프롬프트 예시

**❌ 나쁜 예:**
```
로그인 페이지 만들어줘
```

**✅ 좋은 예:**
```
Create a login page with:
- Email and password input fields
- "Remember me" checkbox
- "Forgot password" link
- Social login buttons (Google, GitHub)
- Dark mode design
- Mobile responsive
```

#### 2-3. 코드 복사 및 적용
1. 생성된 결과에서 "Code" 탭 클릭
2. 필요한 컴포넌트 복사
3. 프로젝트에 붙여넣기
4. 의존성 설치 (shadcn/ui 등)

---

### Step 3: Google Stitch 사용법

#### 3-1. 접속
```
https://stitch.withgoogle.com
```

#### 3-2. 프롬프트 작성 팁
- **전체 앱 흐름** 설명
- **사용자 시나리오** 포함
- **화면 간 연결** 명시

**예시:**
```
Create an e-commerce app with:
1. Home page showing product grid
2. Product detail page with add to cart
3. Shopping cart with quantity adjustment
4. Checkout flow with payment form
```

#### 3-3. 결과 활용
- 인터랙티브 프로토타입으로 아이디어 검증
- 스크린샷으로 레퍼런스 확보
- 구조 참고하여 실제 개발

---

### Step 4: Galileo AI 사용법

#### 4-1. Figma 연동
- Galileo AI 계정 생성
- Figma 플러그인 설치
- 텍스트로 디자인 생성 → Figma로 내보내기

#### 4-2. 프롬프트 작성
```
Design a dashboard for analytics:
- Sidebar navigation
- Top stats cards (4 items)
- Line chart for trends
- Recent activity table
- Modern, clean design with blue accent
```

---

### Step 5: Uizard 사용법

#### 5-1. 이미지 업로드
- 손그림 스케치
- 경쟁사 앱 스크린샷
- 와이어프레임

#### 5-2. 변환 및 편집
1. 이미지 업로드
2. AI가 편집 가능한 디자인으로 변환
3. 드래그앤드롭으로 수정
4. 코드 또는 이미지로 내보내기

---

## 🎯 실전 워크플로우

```
1. 아이디어 정리 (무엇을 만들 것인가?)
     ↓
2. 레퍼런스 확인 (유사한 UI 찾기)
     ↓
3. AI 도구 선택 (상황에 맞는 도구)
     ↓
4. 프롬프트 작성 (구체적 + 제약조건)
     ↓
5. 생성 & 수정 (2-3회 반복 OK)
     ↓
6. 코드 추출 & 적용
```

---

## ⚠️ 주의사항

1. **저작권 확인**
   - AI 생성물의 상업적 사용 가능 여부 확인
   - 각 도구의 라이선스 정책 숙지

2. **코드 품질 검토**
   - 생성된 코드 그대로 사용하지 말고 검토
   - 접근성(a11y) 확인
   - 불필요한 코드 제거

3. **의존성 관리**
   - v0는 shadcn/ui 기반 - 프로젝트에 설치 필요
   - 사용하지 않는 패키지 제거

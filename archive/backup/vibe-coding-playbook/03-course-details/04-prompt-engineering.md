# Chapter 4: Prompt Engineering (AI에게 명령하는 법)

**명확한 명령으로 FCSR 80% 달성하기**

**[VIDEO: 완벽한 프롬프트 작성법 - Before & After 비교]**


## 핵심 원칙

**"AI는 친구가 아니라 직원입니다. 명확하게 지시하세요!"**

- 감정 표현 금지
- 애교 금지
- 명령만 하세요


---


## 비유로 이해하기

### 친구 vs 직원

```
❌ 친구한테 부탁하듯
"음... 로그인 기능 좀 만들어줄래? 예쁘게~"

✅ 직원한테 지시하듯
"로그인 페이지, Linear 스타일, TypeScript로 작성"
```

### 택시 기사에게 길 알려주기

```
❌ 나쁜 예
"음... 저기... 어디였더라... 시청 쪽으로 가주실 수 있을까요?"

✅ 좋은 예
"시청역 3번 출구 앞까지 가주세요"
```


---


## 황금 공식: 4가지 요소

```
┌─────────────────────────────────────────────┐
│  완벽한 명령의 4가지 요소                     │
├─────────────────────────────────────────────┤
│                                             │
│  1️⃣ [Context] 배경 설명                     │
│     → "지금 무슨 프로젝트인지"               │
│                                             │
│  2️⃣ [Action] 할 일                          │
│     → "정확히 뭘 만들어야 하는지"            │
│                                             │
│  3️⃣ [Constraint] 제약사항                   │
│     → "어떤 스타일, 어떤 규칙으로"           │
│                                             │
│  4️⃣ [Output] 결과물 형식                    │
│     → "어떤 파일로 만들지"                   │
│                                             │
└─────────────────────────────────────────────┘
```


---


## 실전 비교: 나쁜 예 vs 좋은 예

### ❌ 나쁜 예 (이렇게 하지 마세요!)

```
로그인 기능 좀 만들어 줄래? 예쁘게.
```

#### 문제점
- 🤔 어떤 프로젝트인지 모름
- 🤔 "예쁘게"가 뭔지 모호함
- 🤔 어떤 파일로 만들어야 할지 불명확
- 🤔 결과: AI가 엉뚱한 걸 만들 확률 90%

### ✅ 좋은 예 (이렇게 하세요!)

```
[Context] 
Next.js 프로젝트, Supabase로 인증 처리 중

[Action] 
이메일 로그인 페이지 만들기

[Constraint] 
- 디자인: Linear.app 스타일 참고
- 에러 발생 시 콘솔에 로그 출력
- TypeScript 사용

[Output] 
app/login/page.tsx 파일로 생성
```

#### 결과 비교

```
나쁜 명령 → AI가 헤맴 → 수정 5번 → 2시간 소요 😰
좋은 명령 → 한 번에 완성 → 수정 0번 → 10분 소요 😎
```


---


## 프롬프트 템플릿

### 기능 구현

```
[Context] {기술 스택, 현재 상태}
[Action] {구체적인 기능}
[Constraint] {제약사항, 스타일 가이드}
[Output] {파일 형식, 네이밍 규칙}
```

#### 예시

```
[Context] 
React + TypeScript 프로젝트, Zustand로 상태관리

[Action] 
사용자 프로필 수정 페이지 구현

[Constraint] 
- Notion 스타일의 깔끔한 UI
- 실시간 유효성 검사
- 변경사항 자동 저장
- 에러 토스트 메시지 표시

[Output] 
src/pages/ProfileEdit.tsx
src/components/ProfileForm.tsx
```


---


### 버그 수정

```
[Context] {에러 로그, 재현 단계}
[Action] {수정할 버그}
[Constraint] {회귀 테스트 필수}
[Output] {수정된 파일 및 테스트 코드}
```

#### 예시

```
[Context] 
Next.js 14, 로그인 후 리다이렉트 시 404 에러
에러: "Cannot GET /dashboard"
재현: 로그인 → 자동 리다이렉트 → 404

[Action] 
로그인 후 대시보드로 정상 이동하도록 수정

[Constraint] 
- Next.js router 사용
- 로그인 상태 확인 로직 유지
- 기존 라우팅 로직 영향 없어야 함

[Output] 
수정: app/login/page.tsx
추가: __tests__/login-redirect.test.tsx
```


---


### 리팩토링

```
[Context] {현재 코드 구조}
[Action] {리팩토링 목표}
[Constraint] {기능 동일성 보장}
[Output] {변경된 파일 리스트}
```

#### 예시

```
[Context] 
UserProfile 컴포넌트가 500줄, 하나의 파일에 모든 로직

[Action] 
컴포넌트를 작은 단위로 분리하여 재사용성 향상

[Constraint] 
- 기존 기능 100% 동일하게 유지
- TypeScript 타입 안정성 유지
- 기존 props 인터페이스 변경 없음

[Output] 
components/UserProfile/
  ├── index.tsx (메인)
  ├── ProfileHeader.tsx
  ├── ProfileInfo.tsx
  ├── ProfileActions.tsx
  └── types.ts
```


---


## 실전 Tips

### Tip 1: 구체적으로!

```
❌ "예쁘게 만들어줘"
✅ "Linear.app 스타일로, 여백은 16px, 폰트는 Inter"
```

### Tip 2: 예시 포함

```
✅ "다음과 비슷하게:
https://linear.app/login
- 이메일 입력란
- 패스워드 입력란
- 로그인 버튼 (파란색)"
```

### Tip 3: 파일 구조 명시

```
✅ "
src/
  components/
    LoginForm.tsx
  pages/
    login.tsx
  styles/
    login.module.css
"
```

### Tip 4: 에러 처리 명시

```
✅ "에러 발생 시:
- console.error로 로그 출력
- 사용자에게 토스트 메시지 표시
- 폼 상태는 유지"
```


---


## 핵심 차이표

| 나쁜 명령 | 좋은 명령 |
|---------|---------|
| 애교 많음 😊 | 감정 없음 🤖 |
| 모호함 🤔 | 명확함 ✅ |
| 선택권 줌 | 지시함 |
| 짧음 | 상세함 |
| "해줄래?" | "만들어" |


---


## FCSR 향상 전략

### Before (FCSR 40%)

```
프롬프트: "로그인 페이지 만들어줘"

결과:
- AI가 추측해서 만듦
- 스타일이 마음에 안 듦
- 파일 위치가 다름
- 재작업 필요

소요 시간: 2시간
```

### After (FCSR 80%)

```
프롬프트:
[Context] Next.js + Supabase
[Action] 이메일 로그인 페이지
[Constraint] Linear 스타일, TypeScript
[Output] app/login/page.tsx

결과:
- 한 번에 원하는 결과
- 스타일 정확함
- 파일 위치 정확
- 바로 사용 가능

소요 시간: 15분
```


---


## 체크리스트

프롬프트 작성 전:
- [ ] 4가지 요소 모두 포함했나?
- [ ] Context: 기술 스택 명시
- [ ] Action: 구체적인 작업
- [ ] Constraint: 스타일, 규칙
- [ ] Output: 파일명, 구조

프롬프트 작성 후:
- [ ] 감정 표현 제거
- [ ] "해줘", "please" 제거
- [ ] 모호한 표현 제거
- [ ] 구체적인 예시 포함


---


## 연습 문제

### 문제 1: 이 프롬프트 개선하기

```
❌ "회원가입 페이지 좀 만들어주세요"
```

<details>
<summary>정답 보기</summary>

```
✅ 
[Context] 
Next.js 14 + TypeScript, Supabase Auth 사용

[Action] 
이메일/비밀번호 회원가입 페이지 구현

[Constraint] 
- Vercel 스타일 참고
- 이메일 유효성 검사
- 비밀번호 8자 이상, 특수문자 포함
- 중복 가입 방지

[Output] 
app/signup/page.tsx
components/SignupForm.tsx
```
</details>


---


## 다음 단계

Prompt Engineering을 익혔다면:
1. [FCSR 측정](../04-measurement/fcsr-dashboard.md)으로 성과 확인
2. [Checklist](../02-4c-framework/checklist.md)로 품질 검증
3. 매일 연습하며 FCSR 80% 달성!

**Go Vibe, Stay Flow!** 🚀

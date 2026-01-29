# 프로젝트 구조 (Project Structure)

## 📁 표준 폴더 구조

```
frontend/
├── app/                         # 🔴 Next.js App Router
│   ├── (auth)/                  # Route Group - 인증 관련
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/             # Route Group - 대시보드
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── users/
│   │       ├── page.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   ├── api/                     # API Routes
│   │   └── auth/
│   │       └── route.ts
│   ├── layout.tsx               # Root Layout
│   ├── page.tsx                 # Home Page
│   ├── loading.tsx              # Loading UI
│   ├── error.tsx                # Error UI
│   └── not-found.tsx            # 404 Page
│
├── components/                  # 🟡 재사용 가능한 UI 컴포넌트
│   ├── ui/                      # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   └── ...
│   └── common/                  # 커스텀 공통 컴포넌트
│       ├── DataTable/
│       ├── PageHeader/
│       └── SearchBar/
│
├── features/                    # 🟢 기능별 모듈
│   ├── auth/
│   │   ├── components/          # 기능 전용 컴포넌트
│   │   ├── hooks/               # 기능 전용 훅
│   │   ├── api/                 # API 함수
│   │   └── stores/              # Zustand 스토어
│   ├── user/
│   └── product/
│
├── lib/                         # 🔵 유틸리티 및 설정
│   ├── api-client.ts            # Axios/Fetch 설정
│   ├── query-client.ts          # React Query 설정
│   └── utils.ts                 # 헬퍼 함수 (cn 등)
│
├── hooks/                       # ⚫ 전역 커스텀 훅
│   ├── use-toast.tsx
│   └── use-media-query.tsx
│
├── providers/                   # 🟣 전역 프로바이더
│   ├── query-provider.tsx
│   └── theme-provider.tsx
│
├── types/                       # 🟤 타입 정의
│   ├── api.ts
│   └── global.d.ts
│
├── styles/                      # 🟠 스타일
│   └── globals.css
│
├── public/                      # 정적 파일
├── next.config.js               # Next.js 설정
├── tailwind.config.ts           # Tailwind 설정
├── components.json              # shadcn/ui 설정
└── tsconfig.json
```

---

## 📍 폴더별 역할

### `app/` - 라우팅 & 페이지
- Next.js App Router의 파일 기반 라우팅
- **Server Component가 기본**
- Route Group `(폴더명)`으로 URL 영향 없이 레이아웃 공유

### `components/` - 재사용 UI
- `ui/`: shadcn/ui CLI로 추가한 컴포넌트
- `common/`: 여러 기능에서 공유하는 커스텀 컴포넌트

### `features/` - 기능 모듈
- 도메인별로 관련 코드를 묶음
- 각 기능은 독립적으로 components, hooks, api, stores 보유

### `lib/` - 유틸리티
- API 클라이언트 설정
- 공통 유틸 함수 (`cn()` 등)

### `hooks/` - 전역 훅
- 여러 기능에서 사용하는 공통 훅
- 기능 전용 훅은 `features/{기능}/hooks/`에 배치

### `providers/` - 전역 프로바이더
- QueryClientProvider, ThemeProvider 등
- `app/layout.tsx`에서 래핑

### `types/` - 타입 정의
- 전역 타입, API 응답 타입
- 기능별 타입은 `features/{기능}/types.ts`

---

## 🔍 컴포넌트 위치 결정 플로우

```
새 컴포넌트가 필요할 때
    │
    ▼
1. shadcn/ui에 있나?
    ├─ YES ──▶ npx shadcn-ui@latest add {컴포넌트}
    │          → components/ui/에 생성됨
    └─ NO ───▶ 2번으로
    
    ▼
2. 여러 기능에서 사용하나?
    ├─ YES ──▶ components/common/
    └─ NO ───▶ 3번으로
    
    ▼
3. 특정 기능에만 사용하나?
    ├─ YES ──▶ features/{기능}/components/
    └─ NO ───▶ 해당 페이지 폴더 내부
```

---

## 📝 예시: User 기능 구조

```
features/user/
├── components/
│   ├── UserList.tsx         # 사용자 목록 (Client Component)
│   ├── UserForm.tsx         # 사용자 폼
│   └── UserCard.tsx         # 사용자 카드
├── hooks/
│   ├── use-users.ts         # useQuery 훅
│   └── use-user-mutations.ts # useMutation 훅
├── api/
│   └── user-api.ts          # API 함수
├── stores/
│   └── user-store.ts        # Zustand 스토어 (필요 시)
└── types.ts                 # User 관련 타입
```

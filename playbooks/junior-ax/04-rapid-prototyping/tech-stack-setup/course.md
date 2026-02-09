# Tech Stack 표준화 - 실행 가이드

## 📚 Step-by-Step

### Step 1: 스택 선택 (1분)

```
질문: Figma 디자인이 있는가?

YES → next14-with-design (풀 아키텍처)
NO  → next14-no-design (빠른 프로토타입)
```

---

### Step 2: 필수 문서 읽기 (10분)

#### 모든 프로젝트 공통 (base/)
1. **[project-structure.md](../../../../docs/tech-stack/base/project-structure.md)** - 폴더 구조
2. **[naming-conventions.md](../../../../docs/tech-stack/base/naming-conventions.md)** - 네이밍 규칙
3. **[component-rules.md](../../../../docs/tech-stack/base/component-rules.md)** - 컴포넌트 규칙

#### 선택한 스택 문서
- **no-design**: [mock-db-pattern.md](../../../../docs/tech-stack/next14-no-design/mock-db-pattern.md)
- **with-design**: [architecture-layers.md](../../../../docs/tech-stack/next14-with-design/architecture-layers.md)

---

### Step 3: 프로젝트 셋업

#### Option A: no-design (Figma 없음)

```bash
# 1. 프로젝트 생성
npx create-next-app@latest my-prototype \
  --typescript --tailwind --eslint --app \
  --src-dir --import-alias "@/*"

cd my-prototype

# 2. shadcn/ui 초기화
npx shadcn-ui@latest init

# 3. 필수 패키지
npm install @tanstack/react-query zustand zod \
  react-hook-form @hookform/resolvers lucide-react

# 4. 기본 컴포넌트
npx shadcn-ui@latest add button input card label form toast

# 5. Mock DB 폴더 생성
mkdir -p lib/mock
```

#### Option B: with-design (Figma 있음)

```bash
# 1. 프로젝트 생성 (동일)
npx create-next-app@latest my-project \
  --typescript --tailwind --eslint --app \
  --src-dir --import-alias "@/*"

cd my-project

# 2. shadcn/ui 초기화
npx shadcn-ui@latest init

# 3. 필수 패키지
npm install @tanstack/react-query zustand zod \
  react-hook-form @hookform/resolvers lucide-react

# 4. 기본 컴포넌트 + 추가
npx shadcn-ui@latest add button input card label form toast \
  dialog dropdown-menu select table tabs avatar badge

# 5. 폴더 구조 생성
mkdir -p hooks services lib/api lib/stores lib/utils types
```

---

### Step 4: 필수 설정 파일

#### React Query Provider
```typescript
// providers/query-provider.tsx
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

#### Root Layout 수정
```typescript
// app/layout.tsx
import { QueryProvider } from "@/providers/query-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}
```

---

### Step 5: 첫 번째 기능 구현

#### 폴더 생성
```
features/
└── [기능명]/
    ├── components/     # UI 컴포넌트
    ├── hooks/          # React Query 훅
    └── api/            # API 함수 (또는 Mock DB 연결)
```

#### 예시: User 기능
```typescript
// features/user/api/user-api.ts
// no-design: mockDb 사용
// with-design: 실제 API 호출

// features/user/hooks/use-users.ts
// React Query 훅

// features/user/components/UserList.tsx
// UI 컴포넌트
```

---

## 🎯 스택 선택 의사결정 트리

```
프로젝트 시작
    │
    ├─ Figma 디자인 있음?
    │   ├─ YES ──▶ with-design
    │   │          ├─ 4-Layer 아키텍처
    │   │          ├─ 성능 최적화 필수
    │   │          └─ 완전한 테스트 구조
    │   │
    │   └─ NO ───▶ no-design
    │              ├─ Mock DB 사용
    │              ├─ 빠른 프로토타입
    │              └─ Vercel 데모 배포
    │
    └─ 공통 적용
        ├─ shadcn/ui 사용
        ├─ React Query + Zustand
        └─ TypeScript strict
```

---

## ⚠️ 주의사항

### 1. 문서 먼저 읽기
```
❌ 바로 코딩 시작
✅ base/ 규칙 → 선택한 스택 문서 → 코딩
```

### 2. 컴포넌트 중복 생성 금지
```
❌ 직접 Button 컴포넌트 만들기
✅ npx shadcn-ui@latest add button
```

### 3. Server/Client 구분
```
❌ 모든 곳에 "use client"
✅ 필요한 곳에만 "use client"
```

### 4. any 타입 금지
```
❌ function process(data: any) {}
✅ function process(data: UserData) {}
```

---

## 📚 참조 문서

| 문서 | 경로 |
|------|------|
| 스택 선택 가이드 | [docs/tech-stack/README.md](../../../../docs/tech-stack/README.md) |
| 프로젝트 구조 | [docs/tech-stack/base/project-structure.md](../../../../docs/tech-stack/base/project-structure.md) |
| 네이밍 규칙 | [docs/tech-stack/base/naming-conventions.md](../../../../docs/tech-stack/base/naming-conventions.md) |
| 컴포넌트 규칙 | [docs/tech-stack/base/component-rules.md](../../../../docs/tech-stack/base/component-rules.md) |
| Mock DB 패턴 | [docs/tech-stack/next14-no-design/mock-db-pattern.md](../../../../docs/tech-stack/next14-no-design/mock-db-pattern.md) |
| 4-Layer 아키텍처 | [docs/tech-stack/next14-with-design/architecture-layers.md](../../../../docs/tech-stack/next14-with-design/architecture-layers.md) |

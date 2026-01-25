# Quick Start - No Design 프로토타입

## 🚀 5분 안에 시작하기

### Step 1: 프로젝트 생성 (1분)

```bash
npx create-next-app@latest my-prototype --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd my-prototype
```

### Step 2: shadcn/ui 설정 (1분)

```bash
npx shadcn-ui@latest init

# 설정 선택
✔ Style: Default
✔ Base color: Slate
✔ CSS variables: Yes
```

### Step 3: 필수 패키지 설치 (1분)

```bash
npm install @tanstack/react-query zustand zod react-hook-form @hookform/resolvers lucide-react
```

### Step 4: 기본 컴포넌트 추가 (1분)

```bash
npx shadcn-ui@latest add button input card label form toast
```

### Step 5: Mock DB 설정 (1분)

```bash
mkdir -p lib/mock
```

`lib/mock/types.ts`, `lib/mock/seed-data.ts`, `lib/mock/mock-db.ts` 생성
(상세 코드는 [mock-db-pattern.md](./mock-db-pattern.md) 참조)

---

## 📁 초기 폴더 구조

```
src/
├── app/
│   ├── layout.tsx       # Root Layout + Providers
│   ├── page.tsx         # Home
│   └── globals.css
├── components/
│   └── ui/              # shadcn/ui 컴포넌트
├── features/
│   └── example/         # 첫 번째 기능
│       ├── components/
│       ├── hooks/
│       └── api/
├── lib/
│   ├── mock/            # Mock DB
│   ├── utils.ts         # cn() 유틸
│   └── query-client.ts  # React Query 설정
└── providers/
    └── query-provider.tsx
```

---

## 🔧 필수 설정 파일

### React Query Provider
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

### Root Layout
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

## ✅ 설정 완료 체크리스트

- [ ] Next.js 14 + TypeScript 프로젝트 생성
- [ ] shadcn/ui 초기화 완료
- [ ] React Query + Zustand 설치
- [ ] 기본 UI 컴포넌트 추가
- [ ] Mock DB 파일 생성
- [ ] QueryProvider 설정
- [ ] Root Layout에 Provider 적용

---

## 🎯 다음 단계

1. **기능 개발**
   - `features/` 폴더에 기능별 모듈 생성
   - Mock DB에 엔티티 추가
   - CRUD 구현

2. **UI 구성**
   - shadcn/ui 컴포넌트 활용
   - Tailwind로 스타일링

3. **Vercel 배포**
   - GitHub 연결
   - Vercel에서 Import
   - 자동 배포 설정

4. **Supabase 연결** (검증 완료 후)
   - API 레이어만 교체
   - 환경 변수 설정

---

## 📚 참고 문서

- [Mock DB 패턴](./mock-db-pattern.md)
- [공통 규칙 - 프로젝트 구조](../base/project-structure.md)
- [공통 규칙 - 네이밍](../base/naming-conventions.md)
- [공통 규칙 - 컴포넌트](../base/component-rules.md)

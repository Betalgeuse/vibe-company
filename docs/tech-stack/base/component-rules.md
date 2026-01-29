# 컴포넌트 작성 규칙 (Component Rules)

## 🔴 Server vs Client 컴포넌트

### 기본 원칙
```
app/ 폴더 내부 → 기본 Server Component
"use client" 선언 시 → Client Component
```

### 선택 기준

| Server Component 사용 | Client Component 사용 |
|----------------------|----------------------|
| 데이터 페칭이 필요한 페이지 | onClick, onChange 이벤트 |
| 백엔드 리소스 직접 접근 | useState, useEffect 훅 |
| 민감한 정보 처리 (API 키) | 브라우저 API (localStorage) |
| 정적 콘텐츠 | 실시간 상태 업데이트 |
| SEO가 중요한 페이지 | 서드파티 라이브러리 |

---

## 🚨 컴포넌트 생성 전 필수 확인

### 1단계: shadcn/ui 확인
```bash
# 이미 있는지 확인
components/ui/button.tsx    → Button
components/ui/dialog.tsx    → Dialog
components/ui/form.tsx      → Form
components/ui/select.tsx    → Select
components/ui/table.tsx     → Table
```

### 2단계: 공통 컴포넌트 확인
```bash
components/common/ 폴더 확인
- DataTable
- PageHeader
- SearchBar
- LoadingSpinner
```

### 3단계: 없을 때만 생성
```typescript
// ❌ 하지 마세요 - 이미 ui/button.tsx 있음
features/user/components/Button.tsx

// ✅ 이렇게 하세요
import { Button } from "@/components/ui/button"
```

---

## 📝 컴포넌트 작성 패턴

### Server Component (페이지)
```typescript
// app/users/page.tsx
import { Suspense } from "react"
import { UserList } from "@/features/user/components/UserList"
import { getUsers } from "@/features/user/api/user-api"

export const metadata = {
  title: "Users",
  description: "Manage users"
}

// async 함수로 서버에서 데이터 페칭
export default async function UsersPage({
  searchParams
}: {
  searchParams: { page?: string }
}) {
  const users = await getUsers({
    page: Number(searchParams.page) || 1
  })

  return (
    <div className="container mx-auto py-6">
      <Suspense fallback={<div>Loading...</div>}>
        <UserList initialData={users} />
      </Suspense>
    </div>
  )
}
```

### Client Component (인터랙티브)
```typescript
// features/user/components/UserList.tsx
"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/common/DataTable"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface UserListProps {
  initialData?: User[]
}

export function UserList({ initialData }: UserListProps) {
  const [page, setPage] = useState(1)
  const { toast } = useToast()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers({ page }),
    initialData,
    staleTime: 1000 * 60 * 5
  })

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId)
      toast({ title: "User deleted" })
      refetch()
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive"
      })
    }
  }

  return (
    <DataTable
      data={data?.users || []}
      columns={columns}
      onDelete={handleDelete}
    />
  )
}
```

---

## 🎨 스타일링 규칙

### Tailwind 클래스 사용
```typescript
// ✅ 올바른 사용
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">

// ❌ 인라인 스타일 금지
<div style={{ display: 'flex', padding: '16px' }}>

// ❌ CSS 모듈 금지
import styles from './Button.module.css'
```

### cn() 유틸리티로 클래스 병합
```typescript
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-6",
      className
    )}>
      {children}
    </div>
  )
}

// 사용
<Card className="mt-4">Content</Card>
```

---

## 📋 Props 규칙

### Props 타입 정의
```typescript
// 컴포넌트와 같은 파일에 정의
interface UserCardProps {
  user: User
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  className?: string
}

export function UserCard({ 
  user, 
  onEdit, 
  onDelete,
  className 
}: UserCardProps) {
  return (...)
}
```

### children Props
```typescript
interface LayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
}

export function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className="flex">
      {sidebar && <aside>{sidebar}</aside>}
      <main>{children}</main>
    </div>
  )
}
```

---

## ⚡ 성능 최적화

### React.memo 사용
```typescript
import { memo } from "react"

interface ItemProps {
  data: Item
  onClick: (id: string) => void
}

// 순수 컴포넌트에 memo 적용
export const Item = memo(function Item({ data, onClick }: ItemProps) {
  return (
    <div onClick={() => onClick(data.id)}>
      {data.name}
    </div>
  )
})
```

### useCallback으로 함수 메모이제이션
```typescript
const handleClick = useCallback((id: string) => {
  console.log("Clicked:", id)
}, [])

// 자식 컴포넌트에 전달
<Item onClick={handleClick} />
```

### useMemo로 계산 메모이제이션
```typescript
const filteredUsers = useMemo(() => {
  return users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase())
  )
}, [users, search])
```

---

## ❌ 금지 사항

### 1. 중복 컴포넌트 생성
```typescript
// ❌ 이미 있는 컴포넌트 다시 만들기
features/user/components/Button.tsx  // ui/button.tsx 있음

// ✅ 기존 컴포넌트 import
import { Button } from "@/components/ui/button"
```

### 2. 불필요한 "use client"
```typescript
// ❌ 상호작용 없는데 Client Component
"use client"
export function StaticContent() {
  return <div>Static text</div>
}

// ✅ Server Component로 유지
export function StaticContent() {
  return <div>Static text</div>
}
```

### 3. any 타입 사용
```typescript
// ❌ any 금지
function processData(data: any) {}

// ✅ 명확한 타입 정의
function processData(data: UserData) {}
```

### 4. export default 남용
```typescript
// ❌ 페이지 외에는 default export 지양
export default function UserCard() {}

// ✅ named export 사용
export function UserCard() {}
```

---

## ✅ 체크리스트

컴포넌트 작성 전:
- [ ] shadcn/ui에 있는지 확인
- [ ] components/common에 있는지 확인
- [ ] Server/Client 구분 결정

컴포넌트 작성 시:
- [ ] Props 타입 정의
- [ ] Tailwind 클래스 사용
- [ ] cn() 유틸리티 활용

컴포넌트 완성 후:
- [ ] 불필요한 "use client" 제거
- [ ] any 타입 없음 확인
- [ ] 메모이제이션 필요 여부 검토

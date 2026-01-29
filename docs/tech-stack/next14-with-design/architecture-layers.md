# 4-Layer 아키텍처

## 🏗 레이어 개요

```
┌─────────────────────────────────────────────┐
│  1️⃣ Presentation Layer (UI)                 │
│     components/, app/                       │
├─────────────────────────────────────────────┤
│  2️⃣ Business Logic Layer (Hook & Service)   │
│     hooks/, services/                       │
├─────────────────────────────────────────────┤
│  3️⃣ Data Access Layer (API & Store)         │
│     lib/api/, lib/stores/                   │
├─────────────────────────────────────────────┤
│  4️⃣ Utility Layer (Pure Functions)          │
│     lib/utils/                              │
└─────────────────────────────────────────────┘
```

---

## 1️⃣ Presentation Layer (UI)

### 책임
- 순수한 UI 렌더링
- 이벤트 emit
- **비즈니스 로직 금지**

### 올바른 예
```typescript
// components/features/user/UserCard.tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { memo } from "react"

interface UserCardProps {
  user: User
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  className?: string
}

export const UserCard = memo(function UserCard({
  user,
  onEdit,
  onDelete,
  className,
}: UserCardProps) {
  return (
    <div className={cn("p-4 border rounded-lg", className)}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <div className="flex gap-2 mt-4">
        <Button onClick={() => onEdit(user.id)}>Edit</Button>
        <Button variant="destructive" onClick={() => onDelete(user.id)}>
          Delete
        </Button>
      </div>
    </div>
  )
})
```

### 잘못된 예
```typescript
// ❌ UI 컴포넌트에 비즈니스 로직
const BadUserCard = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // API 호출 - 다른 레이어 책임!
    fetchUser(userId).then(setUser)
  }, [userId])

  return <div>{user?.name}</div>
}
```

---

## 2️⃣ Business Logic Layer

### 책임
- 비즈니스 규칙 적용
- 데이터 변환 및 가공
- UI 독립적인 로직

### Custom Hook
```typescript
// hooks/use-user-management.ts
import { useCallback } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { userApi } from "@/lib/api/user-api"
import { useToast } from "@/hooks/use-toast"

export const useUserManagement = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  const deleteMutation = useMutation({
    mutationFn: userApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      toast({ title: "User deleted successfully" })
    },
    onError: (error) => {
      toast({ title: "Failed to delete user", variant: "destructive" })
    },
  })

  const handleDelete = useCallback(
    (userId: string) => {
      if (confirm("Are you sure?")) {
        deleteMutation.mutate(userId)
      }
    },
    [deleteMutation]
  )

  return {
    handleDelete,
    isDeleting: deleteMutation.isPending,
  }
}
```

### Service
```typescript
// services/analytics.service.ts
export class AnalyticsService {
  calculateEngagement(messages: Message[]): EngagementMetrics {
    const totalMessages = messages.length
    const uniqueUsers = new Set(messages.map((m) => m.userId)).size
    const avgResponseTime = this.calculateAvgResponseTime(messages)

    return {
      messageCount: totalMessages,
      participantCount: uniqueUsers,
      avgResponseTimeMinutes: avgResponseTime,
      engagementRate: uniqueUsers / totalMessages,
    }
  }

  private calculateAvgResponseTime(messages: Message[]): number {
    // 비즈니스 로직...
    return 0
  }
}

export const analyticsService = new AnalyticsService()
```

---

## 3️⃣ Data Access Layer

### 책임
- 순수 데이터 CRUD
- API 통신
- 상태 저장소 관리

### API Client
```typescript
// lib/api/user-api.ts
import { User, CreateUserInput, UpdateUserInput } from "@/types/user"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const userApi = {
  getAll: async (): Promise<User[]> => {
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok) throw new Error("Failed to fetch users")
    return res.json()
  },

  getById: async (id: string): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    if (!res.ok) throw new Error("Failed to fetch user")
    return res.json()
  },

  create: async (data: CreateUserInput): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to create user")
    return res.json()
  },

  update: async (id: string, data: UpdateUserInput): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to update user")
    return res.json()
  },

  delete: async (id: string): Promise<void> => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    })
    if (!res.ok) throw new Error("Failed to delete user")
  },
}
```

### Zustand Store
```typescript
// lib/stores/auth-store.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => set({ user, token }),
      clearAuth: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
)
```

---

## 4️⃣ Utility Layer

### 책임
- 순수 함수
- 부작용 없음
- 재사용 가능

### 예시
```typescript
// lib/utils/format.ts
export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(amount)
}

// lib/utils/validation.ts
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
```

---

## 📋 레이어별 체크리스트

### Presentation Layer
- [ ] Props로만 데이터 받음
- [ ] 이벤트 핸들러는 외부에서 주입
- [ ] 비즈니스 로직 없음
- [ ] 독립적으로 테스트 가능

### Business Logic Layer
- [ ] UI 컴포넌트 import 없음
- [ ] 도메인 지식 포함
- [ ] 단위 테스트 가능

### Data Access Layer
- [ ] 순수 CRUD만
- [ ] 비즈니스 로직 없음
- [ ] 에러 핸들링 포함

### Utility Layer
- [ ] 순수 함수
- [ ] 부작용 없음
- [ ] 100% 테스트 커버리지

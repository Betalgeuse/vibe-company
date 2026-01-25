# Mock DB 패턴 (localStorage 기반)

## 🎯 목적

Vercel 서버리스 환경에서 Supabase 연결 전 **시연 가능한 프로토타입** 구현

```
데이터 흐름:
[초기 Seed 데이터] → [localStorage에 복사] → [CRUD 작업] → [브라우저에 유지]
```

---

## 📁 파일 구조

```
lib/mock/
├── types.ts        # 데이터 타입 정의
├── seed-data.ts    # 초기 시드 데이터
└── mock-db.ts      # Mock DB 클라이언트
```

---

## 🔧 구현

### 1. 타입 정의
```typescript
// lib/mock/types.ts
export interface MockData {
  users: User[]
  products: Product[]
  // 필요한 엔티티 추가
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
}
```

### 2. 시드 데이터
```typescript
// lib/mock/seed-data.ts
import { MockData } from "./types"

export const seedData: MockData = {
  users: [
    { 
      id: "1", 
      email: "demo@example.com", 
      name: "Demo User", 
      createdAt: new Date().toISOString() 
    },
    { 
      id: "2", 
      email: "admin@example.com", 
      name: "Admin", 
      createdAt: new Date().toISOString() 
    },
  ],
  products: [
    { id: "1", name: "Product A", price: 10000, description: "Demo product" },
    { id: "2", name: "Product B", price: 20000, description: "Another product" },
  ],
}
```

### 3. Mock DB 클라이언트
```typescript
// lib/mock/mock-db.ts
"use client"

import { MockData } from "./types"
import { seedData } from "./seed-data"

const STORAGE_KEY = "mock_db"

class MockDB {
  private getData(): MockData {
    if (typeof window === "undefined") {
      return seedData
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData))
      return seedData
    }
    return JSON.parse(stored)
  }

  private saveData(data: MockData): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }
  }

  // Read All
  findAll<K extends keyof MockData>(key: K): MockData[K] {
    return this.getData()[key]
  }

  // Read One
  findById<K extends keyof MockData>(
    key: K,
    id: string
  ): MockData[K][number] | null {
    const items = this.getData()[key] as { id: string }[]
    return items.find((item) => item.id === id) as MockData[K][number] | null
  }

  // Create
  create<K extends keyof MockData>(
    key: K,
    item: Omit<MockData[K][number], "id">
  ): MockData[K][number] {
    const data = this.getData()
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
    } as MockData[K][number]

    ;(data[key] as MockData[K][number][]).push(newItem)
    this.saveData(data)
    return newItem
  }

  // Update
  update<K extends keyof MockData>(
    key: K,
    id: string,
    updates: Partial<MockData[K][number]>
  ): MockData[K][number] | null {
    const data = this.getData()
    const items = data[key] as { id: string }[]
    const index = items.findIndex((item) => item.id === id)

    if (index === -1) return null

    items[index] = { ...items[index], ...updates }
    this.saveData(data)
    return items[index] as MockData[K][number]
  }

  // Delete
  delete<K extends keyof MockData>(key: K, id: string): boolean {
    const data = this.getData()
    const items = data[key] as { id: string }[]
    const index = items.findIndex((item) => item.id === id)

    if (index === -1) return false

    items.splice(index, 1)
    this.saveData(data)
    return true
  }

  // Reset (데모 리셋용)
  reset(): void {
    this.saveData(seedData)
  }
}

export const mockDb = new MockDB()
```

---

## 📝 사용 예시

### Feature API에서 사용
```typescript
// features/user/api/user-api.ts
"use client"

import { mockDb } from "@/lib/mock/mock-db"
import { User } from "@/lib/mock/types"

export const userApi = {
  getAll: (): User[] => {
    return mockDb.findAll("users")
  },

  getById: (id: string): User | null => {
    return mockDb.findById("users", id)
  },

  create: (data: Omit<User, "id">): User => {
    return mockDb.create("users", data)
  },

  update: (id: string, data: Partial<User>): User | null => {
    return mockDb.update("users", id, data)
  },

  delete: (id: string): boolean => {
    return mockDb.delete("users", id)
  },
}
```

### React Query 훅
```typescript
// features/user/hooks/use-users.ts
"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { userApi } from "../api/user-api"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => userApi.getAll(),
  })
}

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}
```

### 컴포넌트에서 사용
```typescript
// features/user/components/UserList.tsx
"use client"

import { useUsers, useDeleteUser } from "../hooks/use-users"
import { Button } from "@/components/ui/button"

export function UserList() {
  const { data: users, isLoading } = useUsers()
  const deleteUser = useDeleteUser()

  if (isLoading) return <div>Loading...</div>

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          {user.name}
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => deleteUser.mutate(user.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}
```

---

## 🔄 Supabase 마이그레이션

API 레이어만 교체하면 됨:

```typescript
// features/user/api/user-api.ts

// ❌ Before (Mock)
import { mockDb } from "@/lib/mock/mock-db"

export const userApi = {
  getAll: () => mockDb.findAll("users"),
}

// ✅ After (Supabase)
import { createClient } from "@/lib/supabase/client"

const supabase = createClient()

export const userApi = {
  getAll: async () => {
    const { data, error } = await supabase.from("users").select()
    if (error) throw error
    return data
  },
}
```

---

## 🔘 데모 리셋 버튼 (선택)

```typescript
// components/common/DemoResetButton.tsx
"use client"

import { Button } from "@/components/ui/button"
import { mockDb } from "@/lib/mock/mock-db"
import { useQueryClient } from "@tanstack/react-query"
import { RotateCcw } from "lucide-react"

export function DemoResetButton() {
  const queryClient = useQueryClient()

  const handleReset = () => {
    mockDb.reset()
    queryClient.invalidateQueries()
  }

  return (
    <Button variant="outline" size="sm" onClick={handleReset}>
      <RotateCcw className="w-4 h-4 mr-2" />
      Demo Reset
    </Button>
  )
}
```

---

## ⚠️ 제한사항

| 항목 | 설명 |
|------|------|
| SSR | Server Component에서 직접 호출 불가 |
| 데이터 격리 | 브라우저/기기마다 별도 데이터 |
| 시크릿 모드 | 종료 시 데이터 삭제 |
| 용량 | 약 5MB 제한 |
| 동시성 | 여러 탭 간 동기화 안됨 |

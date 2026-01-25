# 네이밍 규칙 (Naming Conventions)

## 📁 파일 & 폴더명

### 페이지/라우트 (app/)
```
소문자 + 하이픈 (kebab-case)

✅ 올바른 예:
app/user-profile/page.tsx
app/api/auth/[...nextauth]/route.ts
app/(dashboard)/settings/page.tsx

❌ 잘못된 예:
app/UserProfile/page.tsx
app/user_profile/page.tsx
```

### 컴포넌트 파일
```
PascalCase

✅ 올바른 예:
UserProfile.tsx
DataTable.tsx
AuthProvider.tsx

❌ 잘못된 예:
userProfile.tsx
data-table.tsx
auth_provider.tsx
```

### 비 컴포넌트 파일
```
kebab-case

✅ 올바른 예:
user-api.ts
auth-store.ts
format-utils.ts

❌ 잘못된 예:
userApi.ts
AuthStore.ts
```

### 훅 파일
```
use- 접두사 + kebab-case

✅ 올바른 예:
use-auth.ts
use-user-query.ts
use-media-query.ts

❌ 잘못된 예:
useAuth.ts
auth-hook.ts
```

---

## 🏷 변수 & 함수명

### React 컴포넌트
```typescript
PascalCase + 명사

✅ 올바른 예:
export function UserProfile() {}
export const ProductList = () => {}

❌ 잘못된 예:
export function userProfile() {}
export const getProductList = () => {}
```

### 일반 함수
```typescript
camelCase + 동사로 시작

✅ 올바른 예:
function fetchUserData() {}
const calculateTotal = () => {}
const formatDate = (date: Date) => {}

❌ 잘못된 예:
function FetchUserData() {}
const userData = () => {}
```

### 변수
```typescript
camelCase

✅ 올바른 예:
const userName = "John"
const isLoading = true
const userList = []

❌ 잘못된 예:
const UserName = "John"
const is_loading = true
```

### 상수
```typescript
SCREAMING_SNAKE_CASE

✅ 올바른 예:
const API_BASE_URL = "https://api.example.com"
const MAX_RETRY_COUNT = 3
const AI_AGENT_TYPES = ["chat", "analysis"]

❌ 잘못된 예:
const apiBaseUrl = "..."
const MaxRetryCount = 3
```

---

## 📝 타입 & 인터페이스

### Props 타입
```typescript
{컴포넌트명}Props

✅ 올바른 예:
interface UserProfileProps {
  userId: string
  onEdit?: (id: string) => void
}

interface ButtonProps {
  variant?: "primary" | "secondary"
  onClick: () => void
}
```

### 일반 타입
```typescript
PascalCase

✅ 올바른 예:
interface User {
  id: string
  name: string
  email: string
}

type UserRole = "admin" | "user" | "guest"

interface ApiResponse<T> {
  data: T
  status: "success" | "error"
}
```

### Zod 스키마
```typescript
{이름}Schema

✅ 올바른 예:
const userSchema = z.object({...})
const createUserSchema = z.object({...})
const loginFormSchema = z.object({...})

// 타입 추출
type User = z.infer<typeof userSchema>
type CreateUserInput = z.infer<typeof createUserSchema>
```

---

## 🪝 훅 네이밍

### Query 훅
```typescript
use{엔티티}(s) 또는 use{엔티티}Query

✅ 올바른 예:
const useUsers = () => useQuery({...})
const useUser = (id: string) => useQuery({...})
const useUserQuery = (id: string) => useQuery({...})
```

### Mutation 훅
```typescript
use{동작}{엔티티}

✅ 올바른 예:
const useCreateUser = () => useMutation({...})
const useUpdateUser = () => useMutation({...})
const useDeleteUser = () => useMutation({...})
```

### 상태 훅
```typescript
use{상태명}

✅ 올바른 예:
const useModal = () => {...}
const useToast = () => {...}
const useMediaQuery = (query: string) => {...}
```

---

## 🗂 Zustand Store

```typescript
use{도메인}Store

✅ 올바른 예:
export const useAuthStore = create<AuthState>()
export const useUserStore = create<UserState>()
export const useCartStore = create<CartState>()

// 사용
const { user, setUser } = useAuthStore()
```

---

## 📋 정리 표

| 대상 | 규칙 | 예시 |
|------|------|------|
| 페이지 파일 | kebab-case | `user-profile/page.tsx` |
| 컴포넌트 파일 | PascalCase | `UserProfile.tsx` |
| 유틸 파일 | kebab-case | `format-utils.ts` |
| 훅 파일 | use-kebab-case | `use-auth.ts` |
| 컴포넌트 | PascalCase | `function UserProfile()` |
| 함수 | camelCase | `fetchUserData()` |
| 변수 | camelCase | `userName` |
| 상수 | SCREAMING_SNAKE | `API_BASE_URL` |
| Props 타입 | {Name}Props | `UserProfileProps` |
| Zod 스키마 | {name}Schema | `userSchema` |
| Store | use{Name}Store | `useAuthStore` |

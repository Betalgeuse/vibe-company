# 성능 최적화 가이드

## 🎯 목표 지표

| 지표 | 목표 |
|------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| 번들 사이즈 (Main Chunk) | < 200KB |
| TypeScript 커버리지 | > 95% |

---

## 🔄 불필요한 리렌더 방지

### useShallow (Zustand)

```typescript
import { useShallow } from "zustand/react/shallow"

// ✅ 올바른 사용 - 필요한 상태만 구독
const UserProfile = () => {
  const { name, email } = useAppStore(
    useShallow((state) => ({
      name: state.user.name,
      email: state.user.email,
    }))
  )

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

// ✅ 배열 선택 시
const AIAgentList = () => {
  const agentNames = useAppStore(
    useShallow((state) => state.aiAgents.map((agent) => agent.name))
  )

  return (
    <ul>
      {agentNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

// ❌ 잘못된 사용 - 매번 새 객체 생성
const BadComponent = () => {
  // 이 객체는 매 렌더마다 새로 생성됨!
  const { name, email } = useAppStore((state) => ({
    name: state.user.name,
    email: state.user.email,
  }))
}
```

### React.memo

```typescript
import { memo } from "react"

// ✅ 순수 컴포넌트에 memo 적용
export const UserCard = memo(function UserCard({ 
  user, 
  onEdit 
}: UserCardProps) {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>Edit</button>
    </div>
  )
})

// ✅ 커스텀 비교 함수
export const ComplexCard = memo(
  ({ user, settings }: Props) => {
    return <div>{/* ... */}</div>
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.settings.theme === nextProps.settings.theme
    )
  }
)
```

### useCallback

```typescript
// ✅ 자식에게 전달하는 함수는 useCallback
const ParentComponent = () => {
  const [filter, setFilter] = useState("")

  const handleItemClick = useCallback((id: string) => {
    console.log("Clicked:", id)
  }, [])

  const handleFilteredClick = useCallback(
    (id: string) => {
      console.log("Filter:", filter, "ID:", id)
    },
    [filter] // filter가 변경될 때만 재생성
  )

  return (
    <>
      <ChildComponent onClick={handleItemClick} />
      <FilteredComponent onClick={handleFilteredClick} />
    </>
  )
}
```

### useMemo

```typescript
// ✅ 비용이 큰 계산에 useMemo
const DataVisualization = ({ rawData, filters }: Props) => {
  const processedData = useMemo(() => {
    return rawData
      .filter((item) => filters.includes(item.category))
      .map((item) => ({
        ...item,
        score: expensiveCalculation(item.value),
      }))
      .sort((a, b) => b.score - a.score)
  }, [rawData, filters])

  const chartConfig = useMemo(
    () => ({
      width: 800,
      height: 400,
      margin: { top: 20, right: 30, bottom: 20, left: 20 },
    }),
    [] // 상수이므로 빈 배열
  )

  return <Chart data={processedData} config={chartConfig} />
}
```

---

## 📦 코드 스플리팅

### Dynamic Import

```typescript
import dynamic from "next/dynamic"

// ✅ 무거운 컴포넌트 동적 로딩
const HeavyChart = dynamic(
  () => import("@/components/features/HeavyChart"),
  {
    loading: () => <div>Loading chart...</div>,
    ssr: false, // 클라이언트에서만 렌더링
  }
)

// ✅ 조건부 로딩
const AdminPanel = dynamic(() => import("@/components/AdminPanel"))

export default function Dashboard({ isAdmin }: { isAdmin: boolean }) {
  return (
    <div>
      <MainContent />
      {isAdmin && <AdminPanel />}
    </div>
  )
}
```

### Route-based Splitting

```typescript
// Next.js App Router는 자동으로 라우트별 스플리팅
// app/dashboard/page.tsx → 별도 청크
// app/settings/page.tsx → 별도 청크
```

---

## 🖼 이미지 최적화

### Next.js Image

```typescript
import Image from "next/image"

// ✅ 올바른 사용
export function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      loading="lazy"           // 기본값
      placeholder="blur"
      blurDataURL="data:image/..."
      sizes="(max-width: 768px) 100vw, 400px"
    />
  )
}

// ✅ Fill 모드 (반응형)
export function HeroImage({ src }: { src: string }) {
  return (
    <div className="relative w-full h-64">
      <Image
        src={src}
        alt="Hero"
        fill
        className="object-cover"
        priority  // LCP 이미지에 사용
      />
    </div>
  )
}
```

---

## 📊 데이터 로딩 최적화

### Parallel Data Fetching

```typescript
// app/dashboard/page.tsx
export default async function DashboardPage() {
  // ✅ 병렬 페칭
  const [users, products, analytics] = await Promise.all([
    getUsers(),
    getProducts(),
    getAnalytics(),
  ])

  return (
    <div>
      <UserSection users={users} />
      <ProductSection products={products} />
      <AnalyticsSection data={analytics} />
    </div>
  )
}
```

### React Query 최적화

```typescript
// ✅ Stale Time 설정
const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,      // 5분간 fresh
    gcTime: 30 * 60 * 1000,        // 30분간 캐시 유지
    refetchOnWindowFocus: false,
  })
}

// ✅ Prefetching
const queryClient = useQueryClient()

const handleHover = () => {
  queryClient.prefetchQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  })
}
```

### Suspense & Streaming

```typescript
// app/dashboard/page.tsx
import { Suspense } from "react"

export default function DashboardPage() {
  return (
    <div>
      <Header />  {/* 즉시 렌더링 */}
      
      <Suspense fallback={<UsersSkeleton />}>
        <UsersSection />  {/* 스트리밍 */}
      </Suspense>
      
      <Suspense fallback={<ChartSkeleton />}>
        <AnalyticsChart />  {/* 스트리밍 */}
      </Suspense>
    </div>
  )
}
```

---

## 📋 성능 체크리스트

### 개발 시
- [ ] useShallow 적용 (Zustand 사용 시)
- [ ] memo, useCallback, useMemo 필요 시 적용
- [ ] 이미지는 next/image 사용
- [ ] 무거운 컴포넌트 dynamic import

### 배포 전
- [ ] 번들 사이즈 분석 (`next build && next analyze`)
- [ ] Lighthouse 점수 확인
- [ ] Core Web Vitals 확인
- [ ] 불필요한 의존성 제거

### 모니터링
- [ ] Vercel Analytics 연동
- [ ] 에러 트래킹 설정 (Sentry 등)
- [ ] 주간 성능 리포트 확인

---

## 🔧 유용한 도구

| 도구 | 용도 |
|------|------|
| `@next/bundle-analyzer` | 번들 사이즈 분석 |
| React DevTools Profiler | 리렌더 분석 |
| Lighthouse | 전체 성능 측정 |
| why-did-you-render | 불필요한 리렌더 감지 |

# 컴포넌트 라이브러리 활용 - 실행 가이드

## 📚 Step-by-Step

### Step 1: 라이브러리 선택 기준

| 상황 | 추천 |
|------|------|
| 커스텀 자유도 중요 | **shadcn/ui** |
| 빠른 개발 속도 | **DaisyUI** |
| 접근성 필수 | **Radix UI** |
| 애니메이션 많음 | **Magic UI + Framer Motion** |
| Vue 프로젝트 | **Headless UI** |

---

### Step 2: shadcn/ui 설치 (가장 추천)

#### 2-1. 초기 설정
```bash
# Next.js 프로젝트에서
npx shadcn-ui@latest init

# 설정 선택
✔ Would you like to use TypeScript? yes
✔ Which style would you like to use? Default
✔ Which color would you like to use as base color? Slate
✔ Where is your global CSS file? app/globals.css
✔ Would you like to use CSS variables? yes
```

#### 2-2. 컴포넌트 추가
```bash
# 필요한 컴포넌트만 선택적 설치
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu

# 여러 개 한번에
npx shadcn-ui@latest add button input card
```

#### 2-3. 사용 예시
```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Sign In</Button>
    </form>
  )
}
```

---

### Step 3: 애니메이션 컴포넌트 추가

#### Magic UI 설치
```bash
npm install framer-motion clsx tailwind-merge
```

#### 사용 예시 (Magic UI에서 복사)
```tsx
// 공식 사이트에서 코드 복사 후 components/magicui/ 폴더에 저장
import { AnimatedBeam } from "@/components/magicui/animated-beam"

export function Hero() {
  return (
    <div>
      <AnimatedBeam />
      <h1>Welcome</h1>
    </div>
  )
}
```

---

### Step 4: 아이콘 설정

#### Lucide Icons (shadcn 기본)
```bash
npm install lucide-react
```

```tsx
import { Search, Menu, X, ChevronRight } from "lucide-react"

export function Header() {
  return (
    <header>
      <Menu className="w-6 h-6" />
      <Search className="w-5 h-5" />
    </header>
  )
}
```

---

### Step 5: 테마 커스터마이징

#### shadcn/ui 색상 변경
```css
/* globals.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* 원하는 색상으로 변경 */
}

.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
}
```

#### 컴포넌트 스타일 수정
```tsx
// components/ui/button.tsx 직접 수정 가능
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // 새로운 variant 추가
        gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
      },
    },
  }
)
```

---

## 🎯 실전 조합 예시

### 로그인 페이지
```
필요한 컴포넌트:
- shadcn/ui: Button, Input, Card, Label
- lucide-react: Mail, Lock, Eye
```

### 대시보드
```
필요한 컴포넌트:
- shadcn/ui: Card, Table, Dropdown, Avatar
- Magic UI: AnimatedNumber (통계 수치)
- lucide-react: 각종 아이콘
```

### 랜딩 페이지
```
필요한 컴포넌트:
- shadcn/ui: Button, Card
- Magic UI: TextReveal, Marquee
- Aceternity: HeroHighlight, BackgroundBeams
```

---

## ⚠️ 주의사항

1. **과도한 설치 금지**
   - 사용할 컴포넌트만 설치
   - 비슷한 라이브러리 중복 설치 피하기

2. **버전 호환성 확인**
   - React 버전 확인
   - Tailwind 버전 확인 (v3 vs v4)

3. **번들 사이즈 관리**
   - Tree-shaking 지원 여부 확인
   - 불필요한 의존성 제거

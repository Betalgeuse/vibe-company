# Course: Typography 실행 가이드

## 📚 Step-by-Step (30-45분 완성)

### Step 1: 폰트 선정 (15분)

#### Google Fonts 탐색
```
1. https://fonts.google.com 접속
2. Categories 필터: Sans-serif
3. 인기 폰트 확인:
   - Inter (가장 보편적)
   - Roboto (구글 기본)
   - Poppins (모던)
   - Work Sans (클린)
```

#### Font Pair 활용
```
1. https://fontpair.co 접속
2. 검증된 조합 확인
3. 예시:
   - Inter (Body) + Playfair (Heading)
   - Roboto (Body) + Montserrat (Heading)
   - Work Sans (단일 폰트, 다양한 웨이트)
```

#### 추천 조합 (개발자 도구)
```
Option 1: 단일 폰트 (간단)
- Inter (모든 용도)
- Weight: 400 (본문), 600 (중간), 700 (제목)

Option 2: 조합 폰트 (고급)
- Heading: Poppins (모던, 강렬)
- Body: Inter (가독성)

Option 3: 기술적
- Heading: JetBrains Mono (개발자 느낌)
- Body: Inter
```

---

### Step 2: Next.js 적용 (15분)

#### next/font/google 사용 (추천)
```typescript
// app/layout.tsx
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

#### Tailwind Config 업데이트
```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
    },
  },
}
```

---

### Step 3: 타이포그래피 시스템 (10분)

#### Tailwind에 커스텀 폰트 클래스 추가
```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontSize: {
        // Headings
        'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Body
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
}
```

#### 사용 예시
```tsx
<h1 className="font-heading text-h1">제목 1</h1>
<h2 className="font-heading text-h2">제목 2</h2>
<p className="font-sans text-body">본문 텍스트</p>
```

---

### Step 4: 최적화 (5분)

#### Preload 설정 (자동)
```typescript
// next/font/google가 자동으로 처리:
- Preload 최적화
- FOUT (Flash of Unstyled Text) 방지
- 자동 CSS 변수 생성
```

#### Variable Font 사용
```typescript
// 파일 크기 최소화
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  // Variable font는 자동으로 모든 웨이트 포함
})
```

---

### Step 5: 문서화 (5분)

```markdown
# Typography

## Fonts
- **Heading**: Poppins (600, 700)
- **Body**: Inter (400, 600)

## Usage
```tsx
// Heading
<h1 className="font-heading text-h1">Title</h1>

// Body
<p className="font-sans text-body">Content</p>
```

## Scale
- h1: 56px / 3.5rem
- h2: 40px / 2.5rem
- h3: 32px / 2rem
- body: 16px / 1rem

## Weights
- Regular: 400 (본문)
- SemiBold: 600 (강조)
- Bold: 700 (제목)
```

---

## 💡 Pro Tips

### 1. 단일 폰트 권장
```
처음엔 Inter 하나만:
- 웨이트만 다르게 (400, 600, 700)
- 파일 크기 작음
- 일관성 높음
```

### 2. 한글 폰트
```
한글 필요시:
- Noto Sans KR (Google Fonts)
- Pretendard (로컬)

import { Noto_Sans_KR } from 'next/font/google'
```

### 3. 폰트 로딩 전략
```
display: 'swap'
→ 폰트 로딩 전 시스템 폰트 표시
→ 로딩 후 전환 (FOUT)

display: 'optional'
→ 로딩 느리면 시스템 폰트 유지
```

---

## ✅ 완료 기준

- [ ] 폰트 2개 선정
- [ ] Next.js 적용 완료
- [ ] Tailwind config 업데이트
- [ ] 테스트 페이지 확인
- [ ] 문서화 완료
- [ ] Git commit

**브랜딩 기초 모두 완료! 🎉**

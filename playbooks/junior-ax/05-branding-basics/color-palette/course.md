# Course: Color Palette 실행 가이드

## 📚 Step-by-Step (30-45분 완성)

### Step 1: 색상 선정 (10분)

#### Coolors.co로 팔레트 생성
```
1. https://coolors.co 접속
2. Generate 버튼 (Space bar)
3. 마음에 드는 색상 Lock (L 키)
4. 나머지 색상 재생성
5. 5-6개 선택
```

#### 로고 색상 기반
```
이미 로고가 있다면:
1. 로고의 Primary 색상 추출
2. Coolors.co에서 "From Image" 업로드
3. 자동 생성된 팔레트 확인
4. 보완 색상 선택
```

#### ChatGPT 활용
```
프롬프트:

"다음 브랜드의 컬러 팔레트를 추천해줘:
- 브랜드: [제품명]
- 컨셉: [키워드 3개]
- 산업: [B2B SaaS / Consumer App]
- 레퍼런스: Stripe, Linear, Notion

Primary, Secondary, Accent 색상을 Hex 코드로 제시해줘."
```

---

### Step 2: 음영 생성 (10분)

#### Tailwind Shades 사용
```
1. https://www.tailwindshades.com 접속
2. Primary 색상 Hex 코드 입력
3. 50-900 음영 자동 생성
4. 복사
```

#### 수동 생성 (Figma)
```
1. Primary 색상 사각형 생성
2. 50: 거의 흰색 (5% 색상)
3. 100-400: 점점 진하게
4. 500: Primary (기준)
5. 600-900: 더 진하게
6. Hex 코드 복사
```

---

### Step 3: Tailwind Config 업데이트 (10분)

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Primary
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // 기본
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Accent
        accent: {
          500: '#8b5cf6',  // 단일 색상
        },
      },
    },
  },
}
```

#### 검증
```bash
npm run dev
```

```tsx
// app/page.tsx
<div className="bg-primary-500 text-white p-4">
  Primary 500 Test
</div>
<div className="bg-accent-500 text-white p-4">
  Accent Test
</div>
```

---

### Step 4: 접근성 검증 (5분)

#### WebAIM Contrast Checker
```
1. https://webaim.org/resources/contrastchecker/ 접속
2. Foreground: 텍스트 색상 (#ffffff)
3. Background: 배경 색상 (#3b82f6)
4. 결과 확인:
   - Normal Text: 4.5:1 이상 ✅
   - Large Text: 3:1 이상 ✅
```

#### 주요 조합 체크
```
✅ 확인 필수:
- Primary-500 + White 텍스트
- Primary-600 + White 텍스트
- Gray-700 + White 배경
- Gray-900 + White 배경
```

---

### Step 5: 문서화 (5분)

```markdown
# Color Palette

## Primary (Blue)
- 50: #eff6ff - 배경
- 500: #3b82f6 - 버튼, 링크
- 700: #1d4ed8 - 호버

## Accent (Purple)
- 500: #8b5cf6 - CTA, 배지

## Usage
```tsx
// Button
<button className="bg-primary-500 hover:bg-primary-700">
  Click
</button>

// Badge
<span className="bg-accent-500 text-white">
  New
</span>
```

## Accessibility
모든 조합 WCAG AA 통과 ✅
```

---

## 💡 Pro Tips

### 1. 60-30-10 규칙
```
60%: Neutral (배경, 큰 영역)
30%: Primary (주요 요소)
10%: Accent (강조)
```

### 2. 색상 심리학
```
Blue: 신뢰, 전문성 (B2B)
Green: 성장, 안정 (Finance)
Purple: 창의성, 혁신 (Tech)
Red: 긴급, 열정 (Alert)
```

### 3. 다크 모드 고려
```
Primary-500 (라이트)
→ Primary-400 (다크)

자동 변환:
dark:bg-primary-400
```

---

## ✅ 완료 기준

- [ ] Primary 9단계 생성
- [ ] Tailwind config 업데이트
- [ ] 접근성 검증 완료
- [ ] 문서화 완료
- [ ] Git commit

**다음 단계:**
→ [Typography](../typography/)

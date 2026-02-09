# Checklist: Typography

> ⚠️ **30-45분 타임박스 체크리스트**

## ✅ 시작 전 준비 (3분)

- [ ] 타이머 45분 설정
- [ ] Google Fonts 탭 열기
- [ ] Font Pair 탭 열기 (선택)
- [ ] 브랜드 컨셉 확인

---

## ✅ Step 1: 폰트 선정 (15분)

### Heading 폰트
- [ ] Google Fonts 탐색
- [ ] 후보 3개 선택
- [ ] 최종 1개 결정
- [ ] 폰트명: _________

### Body 폰트
- [ ] 후보 3개 선택 (또는 Heading과 동일)
- [ ] 최종 1개 결정
- [ ] 폰트명: _________

### 검증
- [ ] 가독성 테스트 (긴 문장 읽기)
- [ ] 조합 테스트 (Heading + Body)
- [ ] 브랜드 컨셉과 일치?

**시간 체크:** 15분 경과 ⏱️

---

## ✅ Step 2: Next.js 적용 (15분)

### app/layout.tsx 수정
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

- [ ] Import 추가
- [ ] 폰트 초기화
- [ ] className 적용

### Tailwind Config
```javascript
fontFamily: {
  sans: ['var(--font-inter)'],
}
```

- [ ] 설정 추가
- [ ] npm run dev 재시작

### 테스트
```tsx
<h1 className="font-sans text-4xl font-bold">Test</h1>
<p className="font-sans">Body text test</p>
```

- [ ] 폰트 정상 표시?

**시간 체크:** 30분 경과 ⏱️

---

## ✅ Step 3: 타이포그래피 시스템 (10분)

### fontSize 설정 (선택)
- [ ] h1, h2, h3 크기 정의
- [ ] body, small 크기 정의
- [ ] Tailwind config 업데이트

### 테스트
- [ ] 각 크기 확인
- [ ] 가독성 검증

**시간 체크:** 40분 경과 ⏱️

---

## ✅ Step 4: 문서화 (5분)

- [ ] docs/branding/typography.md 생성
- [ ] 폰트 정보 기록
- [ ] 사용 예시 작성
- [ ] Git commit

**시간 체크:** 45분 완료! ✅

---

## 🚨 트러블슈팅

### ❌ 폰트가 안 바뀜
```
1. 브라우저 캐시 삭제
2. npm run dev 재시작
3. className 확인: font-sans?
```

### ❌ 한글이 깨짐
```
Noto Sans KR 추가:
import { Noto_Sans_KR } from 'next/font/google'
```

---

## 📊 완료 확인

- [ ] 폰트 선정 완료
- [ ] Next.js 적용 완료
- [ ] Tailwind config 완료
- [ ] 문서화 완료

**모든 브랜딩 기초 완료! 🎉🎉🎉**

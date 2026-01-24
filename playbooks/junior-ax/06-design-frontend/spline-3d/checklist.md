# Checklist: Spline 3D 통합

> ⚠️ **실행 직전 확인사항** - 5분 안에 완료하려면 체크!

## ✅ 사전 준비 (Spline에서)

### 1. Spline 프로젝트 확인
- [ ] Spline 계정 로그인 완료
- [ ] 3D 디자인 완성 (또는 템플릿 선택)
- [ ] 애니메이션 테스트 완료 (Spline 에디터에서)

### 2. Export 설정
- [ ] Export → "Get embed code" 클릭
- [ ] Public URL 복사 완료
- [ ] URL이 `https://prod.spline.design/...` 형식인가?

---

## ✅ 코드 통합 전 (React/Next.js)

### 3. 프로젝트 환경 확인
```bash
node --version
npm --version
```
- [ ] Node.js 18+ 설치됨?
- [ ] Next.js 프로젝트인가? (또는 React?)

### 4. 패키지 설치 여부 결정
**iframe 방식 (추천):**
- [ ] 추가 패키지 불필요 → 3번으로 건너뛰기

**@splinetool/react-spline 방식:**
```bash
npm install @splinetool/react-spline
```
- [ ] 패키지 설치 완료
- [ ] `package.json`에 추가됨 확인

### 5. 파일 위치 확인
- [ ] 어느 파일에 추가할지 결정했나?
  - `app/page.tsx` (홈페이지)
  - `components/Hero.tsx` (컴포넌트)
  - `app/product/page.tsx` (제품 페이지)

---

## ✅ 코드 작성 중

### 6. URL 확인 (중요!)
```jsx
// ⚠️ URL 복붙 전 재확인!
src="https://prod.spline.design/abc123def456/scene.splinecode"
```
- [ ] URL에 오타 없나?
- [ ] `https://` 로 시작하나?
- [ ] `/scene.splinecode`로 끝나나?

### 7. 반응형 설정
```jsx
<div className="w-full h-screen">
```
- [ ] `w-full` (가로 100%)
- [ ] `h-screen` 또는 고정 높이 설정
- [ ] 모바일에서는 높이 조정 필요한가?

### 8. 'use client' 지시어 (Next.js)
```jsx
'use client';  // ← 맨 위에 있나?
import Spline from '@splinetool/react-spline';
```
- [ ] `'use client'`가 파일 최상단에 있나?
- [ ] 세미콜론 있나?

---

## ✅ 실행 후 검증

### 9. 로컬 테스트
```bash
npm run dev
```
- [ ] 개발 서버 시작됨?
- [ ] 브라우저에서 접속: `http://localhost:3000`
- [ ] 3D 씬이 보이는가?
- [ ] 로딩 시간 3초 이내?

### 10. 인터랙션 테스트
- [ ] 마우스 드래그로 회전 가능?
- [ ] 애니메이션 작동?
- [ ] 클릭 이벤트 작동? (만약 설정했다면)

### 11. 반응형 테스트
```
개발자 도구 (F12) → Device Toolbar
```
- [ ] 데스크탑 (1920x1080) - 정상?
- [ ] 태블릿 (768x1024) - 정상?
- [ ] 모바일 (375x667) - 정상?

### 12. 성능 확인
```
개발자 도구 → Network 탭
```
- [ ] Spline 파일 크기 확인 (10MB 이하 권장)
- [ ] 로딩 시간 3초 이내?
- [ ] 메모리 사용량 과도하지 않나? (Task Manager)

---

## 🚨 트러블슈팅

### ❌ 3D 씬이 보이지 않음
**원인:** URL 오류 또는 'use client' 누락

**해결:**
```jsx
// 1. URL 재확인
// 2. 'use client' 추가
'use client';

// 3. 콘솔 에러 확인
// F12 → Console 탭
```

### ❌ "Hydration failed" 에러
**원인:** SSR(서버사이드 렌더링) 충돌

**해결:**
```jsx
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }  // ← 이 옵션 추가!
);
```

### ❌ 로딩이 너무 느림 (10초+)
**원인:** Spline 파일이 너무 큼

**해결:**
1. Spline 에디터로 돌아가기
2. Export Settings → Quality 낮추기
3. 불필요한 오브젝트 제거
4. 다시 export

### ❌ 모바일에서 화면 깨짐
**원인:** 고정 높이 설정

**해결:**
```jsx
// Before
<div className="h-screen">

// After
<div className="h-screen md:h-96">
// 모바일: 전체 높이, 데스크탑: 96 (384px)
```

---

## 📊 최종 확인

### 모든 항목 체크했나요?

**Spline 준비:**
- [ ] 1. Spline 프로젝트 확인 ✅
- [ ] 2. Public URL 복사 ✅

**코드 통합:**
- [ ] 3. 프로젝트 환경 확인 ✅
- [ ] 4. 패키지 설치 (필요시) ✅
- [ ] 5. 파일 위치 결정 ✅
- [ ] 6. URL 재확인 ✅
- [ ] 7. 반응형 설정 ✅
- [ ] 8. 'use client' 지시어 ✅

**검증:**
- [ ] 9. 로컬 테스트 ✅
- [ ] 10. 인터랙션 테스트 ✅
- [ ] 11. 반응형 테스트 ✅
- [ ] 12. 성능 확인 ✅

**12개 모두 체크되었다면 5분 안에 성공! 🎉**

---

## 💡 다음 단계

✅ Spline 3D 통합 완료 후:
1. [Figma to Code](../figma-to-code/) - 2D 디자인 구현
2. [CSS 트러블슈팅](../css-troubleshooting/) - 스타일 문제 해결

---

*"체크리스트 12개 = 5분 성공의 비결"*

# Checklist: Color Palette

> ⚠️ **30-45분 타임박스 체크리스트**

## ✅ 시작 전 준비 (3분)

- [ ] 타이머 45분 설정
- [ ] Coolors.co 탭 열기
- [ ] Tailwind Shades 탭 열기
- [ ] 로고 색상 확인 (있다면)
- [ ] Concept 키워드 확인

---

## ✅ Step 1: 색상 선정 (10분)

### Primary 색상
- [ ] Coolors.co에서 생성 또는
- [ ] 로고 색상 추출 또는
- [ ] ChatGPT 추천
- [ ] Hex 코드 기록: #______

### Accent 색상
- [ ] Primary 보완 색상 선택
- [ ] Hex 코드 기록: #______

### 검증
- [ ] 브랜드 컨셉과 일치?
- [ ] 경쟁사와 차별화?
- [ ] 시각적으로 조화로운가?

**시간 체크:** 10분 경과 ⏱️

---

## ✅ Step 2: 음영 생성 (10분)

### Tailwind Shades 사용
- [ ] Primary 색상 입력
- [ ] 50-900 음영 확인
- [ ] 복사

```javascript
primary: {
  50: '#______',
  100: '#______',
  200: '#______',
  300: '#______',
  400: '#______',
  500: '#______', // 기준
  600: '#______',
  700: '#______',
  800: '#______',
  900: '#______',
}
```

**시간 체크:** 20분 경과 ⏱️

---

## ✅ Step 3: Tailwind Config (10분)

- [ ] tailwind.config.ts 열기
- [ ] theme.extend.colors 수정
- [ ] npm run dev 재시작
- [ ] 테스트 페이지에서 확인

```tsx
// 테스트
<div className="bg-primary-500">Test</div>
<div className="bg-primary-700">Test</div>
<div className="bg-accent-500">Test</div>
```

- [ ] 모든 색상 정상 작동?

**시간 체크:** 30분 경과 ⏱️

---

## ✅ Step 4: 접근성 검증 (5분)

### WebAIM 체크
- [ ] Primary-500 + White: ___:1 (4.5:1 이상?)
- [ ] Primary-600 + White: ___:1
- [ ] Gray-700 + White: ___:1
- [ ] Gray-900 + White: ___:1

### 수정 필요시
- [ ] 대비 낮으면 더 어두운 음영 사용

**시간 체크:** 35분 경과 ⏱️

---

## ✅ Step 5: 문서화 (5-10분)

- [ ] docs/branding/colors.md 생성
- [ ] 색상 코드 기록
- [ ] 사용 예시 작성
- [ ] Git commit

**시간 체크:** 45분 완료! ✅

---

## 🚨 트러블슈팅

### ❌ Tailwind 색상 안 나타남
```
1. npm run dev 재시작
2. 브라우저 캐시 삭제 (Ctrl+Shift+R)
3. tailwind.config.ts 문법 확인
```

### ❌ 접근성 대비 낮음
```
Primary-500이 너무 밝으면:
→ Primary-600 또는 Primary-700 사용
```

---

## 📊 완료 확인

- [ ] Primary 9단계
- [ ] Accent 설정
- [ ] Tailwind config 업데이트
- [ ] 접근성 검증 통과
- [ ] 문서화 완료

**완료! 다음: [Typography](../typography/) 🎉**

# Tech Stack 표준화 - 실행 전 체크리스트

## ✅ 시작 전 확인

### 스택 선택
- [ ] Figma 디자인 유무 확인
- [ ] 적절한 스택 선택 완료
  - [ ] no-design (Figma 없음)
  - [ ] with-design (Figma 있음)

### 문서 읽기
- [ ] [docs/tech-stack/README.md](../../../../docs/tech-stack/README.md) 읽기 완료
- [ ] [base/project-structure.md](../../../../docs/tech-stack/base/project-structure.md) 읽기 완료
- [ ] [base/naming-conventions.md](../../../../docs/tech-stack/base/naming-conventions.md) 읽기 완료
- [ ] [base/component-rules.md](../../../../docs/tech-stack/base/component-rules.md) 읽기 완료
- [ ] 선택한 스택 문서 읽기 완료

---

## ✅ 프로젝트 셋업

### 공통 (모든 프로젝트)
- [ ] Next.js 14+ 프로젝트 생성
- [ ] TypeScript 설정 확인
- [ ] Tailwind CSS 설정 확인
- [ ] shadcn/ui 초기화 완료
- [ ] 필수 패키지 설치
  - [ ] @tanstack/react-query
  - [ ] zustand
  - [ ] zod
  - [ ] react-hook-form
  - [ ] @hookform/resolvers
  - [ ] lucide-react

### shadcn/ui 컴포넌트
- [ ] button
- [ ] input
- [ ] card
- [ ] label
- [ ] form
- [ ] toast

### Provider 설정
- [ ] QueryProvider 생성
- [ ] Root Layout에 Provider 적용
- [ ] Toaster 컴포넌트 추가

---

## ✅ no-design 전용

- [ ] lib/mock/ 폴더 생성
- [ ] lib/mock/types.ts 생성
- [ ] lib/mock/seed-data.ts 생성
- [ ] lib/mock/mock-db.ts 생성
- [ ] 시드 데이터 작성

---

## ✅ with-design 전용

- [ ] hooks/ 폴더 생성
- [ ] services/ 폴더 생성
- [ ] lib/api/ 폴더 생성
- [ ] lib/stores/ 폴더 생성
- [ ] lib/utils/ 폴더 생성
- [ ] types/ 폴더 생성

### 추가 컴포넌트 (필요 시)
- [ ] dialog
- [ ] dropdown-menu
- [ ] select
- [ ] table
- [ ] tabs
- [ ] avatar
- [ ] badge

---

## ✅ 개발 시 확인

### 컴포넌트 작성
- [ ] shadcn/ui에 있는지 먼저 확인
- [ ] components/common에 있는지 확인
- [ ] Server/Client 구분 결정
- [ ] Props 타입 정의
- [ ] Tailwind 클래스 사용

### 네이밍
- [ ] 파일명: kebab-case (비컴포넌트) / PascalCase (컴포넌트)
- [ ] 함수명: camelCase
- [ ] 상수: SCREAMING_SNAKE_CASE
- [ ] 타입: PascalCase

### 금지 사항
- [ ] any 타입 사용 안함
- [ ] 불필요한 "use client" 없음
- [ ] 중복 컴포넌트 없음
- [ ] CSS-in-JS 사용 안함

---

## 🔗 Quick Reference

### 명령어

```bash
# shadcn/ui 컴포넌트 추가
npx shadcn-ui@latest add [컴포넌트명]

# 여러 개 한번에
npx shadcn-ui@latest add button input card

# 개발 서버
npm run dev

# 빌드
npm run build
```

### 폴더 구조 (no-design)

```
src/
├── app/
├── components/ui/
├── features/[기능]/
├── lib/mock/
└── providers/
```

### 폴더 구조 (with-design)

```
src/
├── app/
├── components/
│   ├── ui/
│   ├── common/
│   └── features/
├── hooks/
├── services/
├── lib/
│   ├── api/
│   ├── stores/
│   └── utils/
├── types/
└── providers/
```

---

## 📚 문서 링크

| 문서 | 용도 |
|------|------|
| [tech-stack/README.md](../../../../docs/tech-stack/README.md) | 스택 선택 |
| [base/](../../../../docs/tech-stack/base/) | 공통 규칙 |
| [next14-no-design/](../../../../docs/tech-stack/next14-no-design/) | 빠른 프로토타입 |
| [next14-with-design/](../../../../docs/tech-stack/next14-with-design/) | 프로덕션 품질 |

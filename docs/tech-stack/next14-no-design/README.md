# Next.js 14 - No Design (빠른 프로토타입)

## 🎯 언제 사용하나?

- Figma 디자인 **없이** 개발
- 아이디어 검증 단계
- Vercel 데모 배포가 목표
- Supabase 연결 전 시연 필요

---

## 🔑 핵심 특징

### 1. localStorage 기반 Mock DB
- Vercel 서버리스에서도 데이터 유지
- 브라우저별 독립 데이터
- Supabase로 쉽게 마이그레이션

### 2. shadcn/ui로 빠른 UI
- 디자인 없이도 깔끔한 UI
- 복사해서 커스텀 가능
- 일관된 디자인 시스템

### 3. 최소한의 구조
- 복잡한 레이어 분리 X
- 빠르게 기능 구현에 집중
- 나중에 확장 가능

---

## 📁 권장 구조

```
frontend/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── [기능]/
│       └── page.tsx
├── components/
│   ├── ui/              # shadcn/ui
│   └── common/          # 공통 컴포넌트
├── features/
│   └── [기능]/
│       ├── components/
│       ├── hooks/
│       └── api/
├── lib/
│   ├── mock/            # 🔴 Mock DB (핵심)
│   │   ├── mock-db.ts
│   │   ├── seed-data.ts
│   │   └── types.ts
│   └── utils.ts
└── providers/
```

---

## 📚 관련 문서

| 문서 | 내용 |
|------|------|
| [mock-db-pattern.md](./mock-db-pattern.md) | localStorage Mock DB 구현 |
| [quick-start.md](./quick-start.md) | 빠른 시작 가이드 |
| [../base/](../base/) | 공통 규칙 (필수 읽기) |

---

## ⚠️ 주의사항

1. **프로덕션에서 사용 금지** - 데모/시연용
2. **브라우저 전용** - SSR에서 직접 호출 불가
3. **용량 제한** - localStorage 약 5MB
4. **시크릿 모드** - 데이터 유지 안됨

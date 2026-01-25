# Tech Stack 선택 가이드

## 🎯 목적
프로토타입/MVP 개발 시 **표준화된 기술 스택**으로 빠르게 시작하기

---

## 📊 스택 선택 의사결정

```
프로젝트 시작
    │
    ▼
┌─────────────────────────────┐
│  Figma 디자인이 있는가?      │
└─────────────────────────────┘
    │
    ├─ YES ──▶ next14-with-design/
    │          (풀 아키텍처, 레이어 분리)
    │
    └─ NO ───▶ next14-no-design/
               (Mock DB, 빠른 프로토타입)
```

---

## 📁 문서 구조

```
tech-stack/
├── README.md                 # 👈 현재 문서 (선택 가이드)
├── base/                     # 🔵 공통 규칙 (모든 프로젝트 적용)
│   ├── project-structure.md  # 폴더 구조
│   ├── naming-conventions.md # 네이밍 규칙
│   └── component-rules.md    # 컴포넌트 작성 규칙
├── next14-no-design/         # 🟢 Figma 없이 개발
│   ├── README.md             # 개요 및 특징
│   ├── mock-db-pattern.md    # localStorage Mock DB
│   └── quick-start.md        # 빠른 시작 가이드
└── next14-with-design/       # 🟣 Figma 디자인 기반
    ├── README.md             # 개요 및 특징
    ├── architecture-layers.md # 4-Layer 아키텍처
    └── performance.md        # 성능 최적화 가이드
```

---

## 🚀 빠른 시작

### Case 1: Figma 디자인 없이 빠른 프로토타입

**상황:**
- 아이디어 검증 단계
- 디자이너 없이 혼자 개발
- Vercel 데모 배포가 목표

**적용 문서:**
1. `base/` 전체 읽기
2. `next14-no-design/` 적용

**핵심 특징:**
- localStorage 기반 Mock DB
- shadcn/ui로 빠른 UI 구성
- Supabase 연결 전 시연 가능

---

### Case 2: Figma 디자인 기반 개발

**상황:**
- 디자이너와 협업
- Figma 시안 있음
- 프로덕션 품질 필요

**적용 문서:**
1. `base/` 전체 읽기
2. `next14-with-design/` 적용

**핵심 특징:**
- 4-Layer 아키텍처 (Presentation → Business → Data → Utility)
- Zustand + React Query 상태관리
- 성능 최적화 필수 적용

---

## 📋 공통 기술 스택

| 카테고리 | 기술 | 버전 |
|----------|------|------|
| Framework | Next.js (App Router) | 14+ |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3+ |
| UI Components | shadcn/ui | latest |
| State (Server) | TanStack Query | 5+ |
| State (Client) | Zustand | 4+ |
| Form | React Hook Form + Zod | latest |
| Icons | Lucide React | latest |

---

## ⚠️ 필수 준수 사항

### ✅ 반드시 해야 할 것
1. **base/ 규칙 먼저 읽기** - 모든 프로젝트 공통
2. **shadcn/ui 컴포넌트 우선 사용** - 직접 만들기 전 확인
3. **Server Component 기본** - Client는 필요할 때만
4. **TypeScript strict mode** - any 타입 금지

### ❌ 하지 말아야 할 것
1. **규칙 없이 시작** - 반드시 문서 확인 후 개발
2. **중복 컴포넌트 생성** - 기존 컴포넌트 확인
3. **CSS-in-JS 사용** - Tailwind만 사용
4. **Props drilling** - Zustand 또는 Context 사용

---

## 🔗 관련 링크

- [Junior AX Playbook - Tech Stack Setup](../../playbooks/junior-ax/06-design-frontend/tech-stack-setup/)
- [shadcn/ui 공식 문서](https://ui.shadcn.com)
- [Next.js App Router 문서](https://nextjs.org/docs/app)

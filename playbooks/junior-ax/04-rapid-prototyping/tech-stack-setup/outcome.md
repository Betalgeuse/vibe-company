# Tech Stack 표준화

## 🎯 목표
프로토타입/MVP 시작 시 **표준 기술 스택**으로 일관된 개발 환경 구축

## 📊 성공 지표
- [ ] 프로젝트 시작 시 올바른 스택 선택
- [ ] 공통 규칙 준수
- [ ] Supabase 마이그레이션 가능한 구조

## 🔧 핵심 결정

### 언제 어떤 스택?

| 상황 | 선택 | 문서 |
|------|------|------|
| Figma 디자인 **없음** | next14-no-design | [docs/tech-stack/next14-no-design/](../../../../docs/tech-stack/next14-no-design/) |
| Figma 디자인 **있음** | next14-with-design | [docs/tech-stack/next14-with-design/](../../../../docs/tech-stack/next14-with-design/) |

### 공통 스택 (모든 프로젝트)

| 카테고리 | 기술 |
|----------|------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Server State | TanStack Query |
| Client State | Zustand |
| Form | React Hook Form + Zod |
| Icons | Lucide React |

## ✅ 완료 조건
1. docs/tech-stack/README.md 읽기 완료
2. 프로젝트 상황에 맞는 스택 선택
3. base/ 공통 규칙 숙지
4. 선택한 스택의 quick-start 따라 환경 구축

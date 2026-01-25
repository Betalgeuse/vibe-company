# Next.js 14 - With Design (프로덕션 품질)

## 🎯 언제 사용하나?

- Figma 디자인 **있음**
- 디자이너와 협업
- 프로덕션 품질 필요
- 장기적으로 유지보수할 프로젝트

---

## 🔑 핵심 특징

### 1. 4-Layer 아키텍처
```
Presentation → Business → Data → Utility
```
- 각 레이어는 단일 책임
- 테스트 용이성 확보
- 유지보수성 극대화

### 2. 상태 관리 분리
- **Server State**: React Query (TanStack Query)
- **Client State**: Zustand
- **Local State**: useState/useReducer

### 3. 성능 최적화 필수
- useShallow로 불필요한 리렌더 방지
- React.memo, useCallback, useMemo 적극 활용
- 번들 사이즈 모니터링

---

## 📁 권장 구조

```
src/
├── app/                      # Next.js App Router
│   ├── (dashboard)/          # Route Group
│   │   ├── dashboard/page.tsx
│   │   └── layout.tsx
│   ├── api/                  # API Routes
│   └── layout.tsx
├── components/               # 🎨 Presentation Layer
│   ├── ui/                   # shadcn/ui
│   ├── common/               # 공통 컴포넌트
│   └── features/             # 기능별 복합 컴포넌트
├── hooks/                    # 🧠 Business Logic (Hooks)
├── services/                 # 🧠 Business Logic (Services)
├── lib/                      # 💾 Data Access Layer
│   ├── api/                  # API 클라이언트
│   ├── stores/               # Zustand 스토어
│   └── utils/                # ⚙️ Utility Layer
├── types/                    # 타입 정의
└── middleware.ts
```

---

## 📚 관련 문서

| 문서 | 내용 |
|------|------|
| [architecture-layers.md](./architecture-layers.md) | 4-Layer 아키텍처 상세 |
| [performance.md](./performance.md) | 성능 최적화 가이드 |
| [../base/](../base/) | 공통 규칙 (필수 읽기) |

---

## 🔄 데이터 흐름

```
User Action (UI)
    ↓
Custom Hook (Business Logic)
    ↓
Service (Business Rules)
    ↓
API Client (Data Fetch)
    ↓
Utils (Data Transformation)
    ↓
Store (State Update)
    ↓
UI Re-render
```

---

## ✅ 체크리스트

프로젝트 시작 전:
- [ ] Figma 디자인 시안 확인
- [ ] 디자인 시스템 (색상, 타이포) 정리
- [ ] API 스펙 확인

개발 시:
- [ ] 레이어 분리 준수
- [ ] 타입 안전성 보장
- [ ] 성능 최적화 적용

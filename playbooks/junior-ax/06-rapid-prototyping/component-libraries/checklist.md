# 컴포넌트 라이브러리 - 실행 전 체크리스트

## ✅ 프로젝트 시작 시

### 환경 확인
- [ ] React/Next.js 버전 확인
- [ ] Tailwind CSS 설치 여부
- [ ] TypeScript 사용 여부

### 라이브러리 선택
- [ ] 프로젝트 요구사항 정리
- [ ] 메인 컴포넌트 라이브러리 1개 선택
- [ ] 애니메이션 라이브러리 필요 여부 결정
- [ ] 아이콘 라이브러리 선택

---

## ✅ shadcn/ui 설치 체크

### 설치 전
- [ ] Next.js 13+ 또는 Vite + React 프로젝트
- [ ] Tailwind CSS 3.0+ 설치됨
- [ ] tsconfig.json paths 설정 확인

### 설치 명령어
```bash
npx shadcn-ui@latest init
```

### 기본 컴포넌트 설치
```bash
npx shadcn-ui@latest add button input card label
```

### 설치 후 확인
- [ ] `components/ui/` 폴더 생성됨
- [ ] `lib/utils.ts` 생성됨
- [ ] `tailwind.config.js` 업데이트됨
- [ ] 컴포넌트 import 테스트

---

## ✅ 컴포넌트 사용 체크

### 사용 전 확인
- [ ] 필요한 컴포넌트 목록 작성
- [ ] 해당 컴포넌트 설치 완료
- [ ] 의존성 모두 설치됨

### 코드 작성 시
- [ ] 올바른 경로에서 import
- [ ] Props 타입 확인
- [ ] 접근성 속성 유지

---

## ✅ 커스터마이징 체크

### 스타일 수정 시
- [ ] CSS 변수 위치 확인 (`globals.css`)
- [ ] 테마 색상 일관성 유지
- [ ] 다크모드 대응 확인

### 컴포넌트 수정 시
- [ ] 원본 백업 (주석 처리)
- [ ] variant 추가로 해결 가능한지 먼저 확인
- [ ] 수정 후 다른 사용처 영향 확인

---

## 🔗 Quick Links

### 컴포넌트 라이브러리
| 라이브러리 | URL |
|------------|-----|
| shadcn/ui | https://ui.shadcn.com |
| Radix UI | https://radix-ui.com |
| Headless UI | https://headlessui.com |
| DaisyUI | https://daisyui.com |

### 애니메이션
| 라이브러리 | URL |
|------------|-----|
| Magic UI | https://magicui.design |
| Aceternity UI | https://ui.aceternity.com |
| Framer Motion | https://framer.com/motion |

### 아이콘
| 라이브러리 | URL |
|------------|-----|
| Lucide | https://lucide.dev |
| Heroicons | https://heroicons.com |
| Phosphor | https://phosphoricons.com |

---

## 📝 필요 컴포넌트 체크 템플릿

```markdown
## 프로젝트: [이름]

### 기본 컴포넌트
- [ ] Button
- [ ] Input
- [ ] Label
- [ ] Card
- [ ] Dialog/Modal

### 네비게이션
- [ ] Dropdown Menu
- [ ] Navigation Menu
- [ ] Tabs

### 데이터 표시
- [ ] Table
- [ ] Avatar
- [ ] Badge

### 피드백
- [ ] Toast
- [ ] Alert
- [ ] Progress

### 아이콘 (lucide-react)
- [ ] 필요한 아이콘 목록:
```

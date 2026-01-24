# Junior AX Playbook
## Vibe Coding for Everyone

**Role:** Junior AX Engineer  
**Core Mission:** AI와 함께 첫 시도에 성공하기 (FCSR 80%+)

---

## 📂 구조

이 Playbook은 **Role → Responsibility → Task** 구조로 되어 있습니다.

```
각 Task마다:
├── outcome.md      # 🎯 이 일의 목표
├── course.md       # 📚 구체적인 실행 방법
└── checklist.md    # ✅ 실행 직전 확인사항
```

**⭐ = 완성된 Task (outcome + course + checklist)**

---

## 🎯 Responsibilities (책임 영역)

### 01. Vibe Coding Basics (기본 환경)
> **책임:** 환경 설정 및 기본 워크플로우 마스터

**Tasks:**
- ⭐ [Git Worktree 설정](./01-vibe-coding-basics/git-worktree-setup/) - 브랜치 전환 0초
- ⭐ [화면 분할 환경](./01-vibe-coding-basics/screen-split/) - 창 전환 0회
- 🔜 [No Context Switching](./01-vibe-coding-basics/no-context-switching/) - 몰입 유지

**목표:** 창 전환 없이 한 화면에서 모든 작업

---

### 02. Reference-Based Development (레퍼런스 기반)
> **책임:** 레퍼런스 기반 개발

**Tasks:**
- ⭐ [레퍼런스 찾기](./02-reference-based/find-references/) - 항상 3개 이상
- 🔜 [패턴 추출](./02-reference-based/extract-patterns/)

**목표:** 그냥 만들지 않고 항상 레퍼런스부터 - FCSR 80%+

---

### 03. Prompt Engineering (AI 명령)
> **책임:** AI에게 명확하게 명령하기

**Tasks:**
- ⭐ [4단계 프롬프트 작성](./03-prompt-engineering/4-step-prompt/) - Context-Action-Constraint-Output
- 🔜 [고급 Prompt 기법](./03-prompt-engineering/advanced/)

**목표:** FCSR 80% 달성 (첫 시도 성공률)

---

### 04. Custom Droid (자동화)
> **책임:** 반복 작업을 Droid로 자동화

**Tasks:**
- 🔜 [언제 만들까?](./04-custom-droid/when-to-create/) - 3회 반복 = Droid화
- 🔜 [Droid 생성하기](./04-custom-droid/create-droid/)
- 🔜 [Droid 템플릿](./04-custom-droid/droid-templates/)

**목표:** 3번 이상 반복되는 작업은 Droid화

---

### 05. Command & Flow (워크플로우)
> **책임:** Command 실행 및 워크플로우 관리

**Tasks:**
- 🔜 [Command 선택하기](./05-command-flow/select-command/)
- 🔜 [Draft 생성하기](./05-command-flow/create-draft/)
- 🔜 [Flow 시각화하기](./05-command-flow/visualize-flow/)

**목표:** Command → Draft → Archive 사이클 마스터

---

### 06. Design & Frontend (디자인 구현)
> **책임:** Figma, Spline 기반 프론트엔드 개발

**Tasks:**
- ⭐ [Spline 3D 통합](./06-design-frontend/spline-3d/) - 5분 안에 3D 추가
- 🔜 [Figma to Code](./06-design-frontend/figma-to-code/)
- 🔜 [CSS 트러블슈팅](./06-design-frontend/css-troubleshooting/)

**목표:** 디자인을 정확하게 코드로 구현

---

### 07. Infrastructure (인프라)
> **책임:** IaC 기반 인프라 관리 (선택)

**Tasks:**
- 📄 [Supabase 표준화](./07-infrastructure/supabase/) - Auth, DB, Storage 통합
- 🔜 [Terraform 기초](./07-infrastructure/terraform/)

**목표:** 클릭 금지, 모든 인프라는 코드로

---

### 08. Measurement & Tracking (측정)
> **책임:** FCSR 측정 및 지속적 개선

**Tasks:**
- ⭐ [FCSR 추적하기](./08-measurement/fcsr-tracking/) - 매일/주간/월간 측정

**목표:** 주간 FCSR 80% 달성 및 유지

---

### 09. Quick Start Guide (빠른 시작)
> **책임:** 신입 온보딩 3일 완성

**Tasks:**
- ⭐ [Day 1: 환경 설정](./09-quick-start/day1/) - 화면 분할 + Git Worktree
- 🔜 [Day 2: 첫 작업](./09-quick-start/day2/) - Reference + Prompt
- 🔜 [Day 3: 실전 적용](./09-quick-start/day3/) - FCSR 측정 시작

**목표:** 3일 안에 Vibe Coding 마스터

---

## 📊 The One Number: FCSR

**FCSR (First-Command Success Rate):** 첫 번째 명령 성공률

**계산 공식:**
```
FCSR = (첫 시도 성공 작업) / (전체 작업) × 100%

예: 10개 작업, 8개 성공 → FCSR = 80% ✅
```

**측정 방법:** [FCSR 추적하기](./08-measurement/fcsr-tracking/)

**목표:** 80% 이상 유지

---

## 🚀 빠른 시작

### Week 1 (환경 설정)
**Day 1:**
1. ⭐ [Git Worktree 설정](./01-vibe-coding-basics/git-worktree-setup/)
2. ⭐ [화면 분할](./01-vibe-coding-basics/screen-split/)

**Day 2-3:**
1. ⭐ [4단계 프롬프트](./03-prompt-engineering/4-step-prompt/)
2. ⭐ [레퍼런스 찾기](./02-reference-based/find-references/)

### Week 2 (실전 적용)
1. ⭐ [FCSR 측정 시작](./08-measurement/fcsr-tracking/)
2. 첫 작업: Reference → Prompt → 실행
3. FCSR 기록 시작

### Week 3-4 (마스터)
1. FCSR 80% 달성
2. ⭐ [Spline 3D 통합](./06-design-frontend/spline-3d/) (필요 시)
3. Custom Droid 생성 (반복 작업 발견 시)

---

## 📚 관련 문서

- [../../docs/company.md](../../docs/company.md) - 회사 비전
- [../../.factory/commands/junior-ax/](../../.factory/commands/junior-ax/) - 사용 가능한 Craft
- [vibe-coding-playbook.md (archive)](../../playbooks/_archive/vibe-coding-playbook.md.backup) - 전체 원본

---

## 📈 진행 상황

**완성된 Task:** 7개 ⭐  
**전체 파일:** 24개  
**커버리지:** vibe-coding-playbook 핵심 내용 ~60%

**완성 Task 목록:**
1. Git Worktree 설정
2. 화면 분할 환경
3. 레퍼런스 찾기
4. 4단계 Prompt
5. Spline 3D 통합
6. FCSR 추적
7. Day 1 Quick Start

---

*"Vibe Coding = AI와 함께 한 번에 성공하기"*

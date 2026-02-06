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

### 00. Setup (필수 설치) ⭐ NEW
> **책임:** 바이브코딩 도구 설치

**Tasks:**
- ⭐ [Claude Code 설치](./00-setup/claude-code-setup/) - AI 코딩 어시스턴트 (Factory Droid 사용)
- ⭐ [Gemini CLI 설치](./00-setup/gemini-cli-setup/) - 100만 토큰 컨텍스트 (긴 코드베이스)
- ⭐ [Factory AI 설치](./00-setup/factory-ai-setup/) - Droid & Command 사용

**목표:** 바이브코딩 환경 완성

**선택 가이드:**
| 상황 | 권장 도구 |
|------|----------|
| Factory Droid 사용 | Claude Code |
| 긴 코드베이스 분석 | Gemini (Aider) |
| 무료로 시작 | Gemini |

---

### 01. Vibe Coding Basics (기본 환경)
> **책임:** 환경 설정 및 기본 워크플로우 마스터

**Tasks:**
- ⭐ [Git 첫 설정](./01-vibe-coding-basics/git-first-setup/) - 계정 생성부터 클론까지
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
- ⭐ [4단계 프롬프트 작성](./03-prompt-engineering/4-step-prompt/) - Context-Action-Constraint-Output (수동)
- ⭐ [prompt-enhancer Skill](./03-prompt-engineering/using-prompt-enhancer/) - Skill로 프롬프트 자동 구조화
- 🔜 [고급 Prompt 기법](./03-prompt-engineering/advanced/)

**목표:** FCSR 80% 달성 (첫 시도 성공률)

**학습 순서:** 4-step 수동 작성 → Skill로 자동화

---

### 04. Custom Droid (자동화)
> **책임:** 반복 작업을 Droid로 자동화

**Tasks:**
- 🔜 [언제 만들까?](./04-custom-droid/when-to-create/) - 3회 반복 = Droid화
- 🔜 [Droid 생성하기](./04-custom-droid/create-droid/)
- 🔜 [Droid 템플릿](./04-custom-droid/droid-templates/)

**목표:** 3번 이상 반복되는 작업은 Droid화

> 💡 Skill 사용법은 [03. Prompt Engineering](./03-prompt-engineering/using-prompt-enhancer/)에서 다룹니다.

---

### 05. Command & Flow (워크플로우)
> **책임:** Command 실행 및 워크플로우 관리

**Tasks:**
- 🔜 [Command 선택하기](./05-command-flow/select-command/)
- 🔜 [Draft 생성하기](./05-command-flow/create-draft/)
- 🔜 [Flow 시각화하기](./05-command-flow/visualize-flow/)

**목표:** Command → Draft → Archive 사이클 마스터

---

### 06. Rapid Prototyping (빠른 프로토타이핑)
> **책임:** Next.js 풀스택 + AI 도구로 빠른 프로토타입 개발

**Tasks:**
- ⭐ [Tech Stack 표준화](./06-rapid-prototyping/tech-stack-setup/) - 표준 스택으로 프로젝트 시작 → [docs/tech-stack/](../../docs/tech-stack/)
- ⭐ [Spline 3D 통합](./06-rapid-prototyping/spline-3d/) - 5분 안에 3D 추가
- ⭐ [AI 디자인 도구](./06-rapid-prototyping/ai-design-tools/) - v0, Google Stitch로 5분 안에 프로토타입
- ⭐ [디자인 레퍼런스](./06-rapid-prototyping/design-references/) - Mobbin, Dribbble로 영감 수집
- ⭐ [컴포넌트 라이브러리](./06-rapid-prototyping/component-libraries/) - shadcn/ui, Magic UI 활용
- ⭐ [프로토타이핑 도구](./06-rapid-prototyping/prototyping-tools/) - Figma, Framer로 빠른 검증
- 🔜 [Figma to Code](./06-rapid-prototyping/figma-to-code/)
- 🔜 [CSS 트러블슈팅](./06-rapid-prototyping/css-troubleshooting/)

**목표:** 표준 풀스택 환경에서 프로토타입 빠르게 만들고 검증

---

### 07. Infrastructure (인프라)
> **책임:** IaC 기반 인프라 관리 (선택)

**Tasks:**
- ⭐ [Database Conventions](./07-infrastructure/database-conventions/) - PostgreSQL 네이밍 규칙 및 설계 패턴
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

### Day 0 (필수 설치)
1. ⭐ [Claude Code 설치](./00-setup/claude-code-setup/)
2. ⭐ [Factory AI 설치](./00-setup/factory-ai-setup/)
3. ⭐ [Git 첫 설정](./01-vibe-coding-basics/git-first-setup/)

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
2. ⭐ [Spline 3D 통합](./06-rapid-prototyping/spline-3d/) (필요 시)
3. Custom Droid 생성 (반복 작업 발견 시)

---

## 📚 관련 문서

- [../../docs/company.md](../../docs/company/company.md) - 회사 비전
- [../../.factory/commands/junior-ax/](../../.factory/commands/junior-ax/) - 사용 가능한 Craft
- [vibe-coding-playbook.md (archive)](../../playbooks/_archive/vibe-coding-playbook.md.backup) - 전체 원본

---

## 📈 진행 상황

**완성된 Task:** 15개 ⭐  
**전체 파일:** 42개  
**커버리지:** vibe-coding-playbook 핵심 내용 ~80%

**완성 Task 목록:**
1. Git 첫 설정
2. Git Worktree 설정
3. 화면 분할 환경
4. 레퍼런스 찾기
5. 4단계 Prompt
6. Skill 사용하기 (prompt-enhancer)
7. Spline 3D 통합
8. FCSR 추적
9. Day 1 Quick Start
10. AI 디자인 도구 (v0, Google Stitch, Galileo AI)
11. 디자인 레퍼런스 (Mobbin, Dribbble, Behance)
12. 컴포넌트 라이브러리 (shadcn/ui, Magic UI)
13. 프로토타이핑 도구 (Figma, Framer, Builder.io)
14. Tech Stack 표준화 (Next.js 14, shadcn/ui, React Query)
15. Database Conventions (PostgreSQL 네이밍 및 설계 패턴)

---

*"Vibe Coding = AI와 함께 한 번에 성공하기"*

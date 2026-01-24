# luerre AI Assets

**회사 전체 문서 및 Craft 저장소**

**Last Updated:** 2026-01-17

---

## 🎯 핵심 개념: Craft & Draft

```
┌─────────────────────────────────────────────────────────┐
│  Craft-Draft 시스템                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🛠️ Craft = 재사용 가능한 도구/기술                     │
│     → .factory/commands/ (Commands)                     │
│     → .factory/droids/ (Custom Droids)                  │
│     → 팀원들이 꺼내서 사용                              │
│                                                         │
│  📝 Draft = 작업 중인 결과물 (버전별 관리)              │
│     → draft/ 폴더에 저장                                │
│     → 버전별 폴더로 관리 (v1, v2, ...)                  │
│     → 개선하고 실험하는 공간                            │
│                                                         │
│  ✅ Archive/Craft = 검증 완료, 승인된 버전              │
│     → archive/craft/ 에 저장                            │
│     → 공식 레퍼런스가 됨                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**워크플로우:**
```
1. Craft 선택 → 2. Draft 생성 → 3. 반복 개선 → 4. Archive에 승인
     ↓               ↓                ↓               ↓
  도구 꺼내기     작업 중         피드백 반영      완성품 보관
```

---

## 📂 폴더 구조

```
assets/
├── 🛠️ .factory/           # Craft (재사용 가능한 도구)
│   ├── commands/          # Role별 Commands ⭐
│   │   ├── ceo/          # CEO craft (biz-idea 등)
│   │   ├── fde/    # FDE craft (research-idea 등)
│   │   ├── junior-ax/    # Junior AX craft (paper2code 등)
│   │   ├── lead-ax-engineer/
│   │   └── shared/       # 공통 craft (orchestrator 등)
│   ├── droids/           # Custom Droids (22개 전문가)
│   └── workflows/        # Workflow 정의
│
├── 📝 draft/             # 작업 중인 결과물 (버전별 관리)
│   ├── biz-idea/
│   │   ├── v1/          # 첫 번째 버전
│   │   ├── v2/          # 개선된 버전
│   │   └── latest/      # 최신 작업 중
│   ├── dashboard/
│   │   └── v1/
│   └── research/
│       └── v1/
│
├── 📘 playbooks/         # 일하는 방법론
│   ├── junior-ax-playbook.md              ⭐ 메인
│   ├── lead-ax-engineer-playbook.md
│   ├── ax-fde-playbook.md
│   ├── ceo-playbook.md
│   └── ...
│
├── 📚 docs/              # 회사 핵심 문서
│   ├── company.md                         ⭐ 비전, 가치관
│   ├── roles-and-metrics.md               ⭐ R&R, One Number
│   └── ...
│
├── 🗂️ archive/           # 완성된 Craft & 백업
│   ├── craft/           # 검증 완료된 공식 버전
│   │   ├── biz-idea-v1.0/
│   │   ├── biz-idea-v2.0/
│   │   └── paper2code-v1.0/
│   └── backup/          # 구버전 문서들
│       ├── vibe-coding-playbook.md.backup
│       └── company_vibers_backup.md
│
├── 🔧 scripts/           # 자동화 스크립트
│   └── init-vibe-framework.sh
│
├── 📄 .gitignore
└── 📖 README.md          # 이 파일
```

---

## 🎯 시작하기

### 1. 내 직무의 Playbook 읽기

**모든 직무 공통:**
- 📘 [junior-ax-playbook.md](./playbooks/junior-ax-playbook.md) ⭐ **필독!**
  - Vibe Coding 기본 방법론
  - FCSR, 4C Framework
  - Custom Droid & Command 사용법
  - 모든 직무가 활용 가능

**직무별 특화:**
- 🎩 [ceo-playbook.md](./playbooks/ceo-playbook.md) - CEO/창업자
- 🏗️ [ax-fde-playbook.md](./playbooks/ax-fde-playbook.md) - 설계자
- 👨‍💻 [lead-ax-engineer-playbook.md](./playbooks/lead-ax-engineer-playbook.md) - 리드 개발자
- 📋 [ax-admin-playbook.md](./playbooks/ax-admin-playbook.md) - 어드민
- 📢 [ax-marketing-playbook.md](./playbooks/ax-marketing-playbook.md) - 마케팅
- 💼 [ax-sales-playbook.md](./playbooks/ax-sales-playbook.md) - 세일즈

### 2. 회사 핵심 문서 이해

**필독 3대 문서:**
1. [company.md](./docs/company.md) - 회사의 Why, Vision, Core Values
2. [roles-and-metrics.md](./docs/roles-and-metrics.md) - 전체 직무 R&R과 One Number
3. [junior-ax-playbook.md](./playbooks/junior-ax-playbook.md) - 일하는 방법론

### 3. Custom Droid & Command 활용

**내 직무의 Command 확인:**
```bash
# CEO
ls .factory/commands/ceo/

# FDE
ls .factory/commands/fde/

# Engineer
ls .factory/commands/junior-ax-engineer/
ls .factory/commands/lead-ax-engineer/

# 모든 직무 공통
ls .factory/commands/shared/
```

**Custom Droid 확인:**
```bash
# 22개의 전문 Droid 활용 가능
ls .factory/droids/
```

---

## 🛠️ Craft 사용 방법

### 1. Craft 찾기

**사용 가능한 Craft (v1.0):**

```bash
# 전체 카탈로그 보기
cat CRAFT-CATALOG.md

# CEO Craft
ls .factory/commands/ceo/
→ biz-idea.md (신사업 아이디어 검증, 30분, 85점+)
→ README.md

# Junior AX Craft  
ls .factory/commands/junior-ax/
→ paper2code.md (논문→코드, 2시간, 75%)

# FDE Craft
ls .factory/commands/fde/
→ research-idea.md (기술 리서치, 1시간, 90%)

# 공통 Craft
ls .factory/commands/shared/
→ orchestrator.md (워크플로우 자동화, 5분, 95%)
```

**📊 상세 정보:** [CRAFT-CATALOG.md](CRAFT-CATALOG.md)  
**📦 버전 관리:** [archive/craft/](archive/craft/)

### 2. Craft 실행 → Draft 생성

```bash
# 예시: biz-idea craft 사용
biz-idea "AI 기반 일정 관리"

# Draft 자동 생성
draft/biz-idea/latest/
└── idea-{project-name}.md
```

### 3. Draft 개선 (버전 관리)

```bash
# 피드백 받고 개선
draft/biz-idea/
├── v1/          # 첫 시도
├── v2/          # 개선된 버전
└── latest/      # 현재 작업 중
```

### 4. Archive에 승인 (완성품)

```bash
# 검증 완료 후
mv draft/biz-idea/v2 archive/craft/biz-idea-v2.0

# 공식 레퍼런스가 됨
archive/craft/biz-idea-v2.0/
→ 팀 전체가 참조하는 베스트 프랙티스
```

---

## 📊 주요 개념

### The One Number

**각 직무마다 단 하나의 핵심 지표로 성과 측정**

| 직무 | One Number | 목표 |
|------|-----------|------|
| CEO | Phase별 변화 | Phase 5 도달 |
| AX FDE | Buyback Rate | $150+/h |
| Lead AX Engineer | 팀 배포 이슈 수 | 20개/주 |
| Junior AX | FCSR | 80%+ |
| Admin | 자동화된 업무 % | 80%+ |

자세한 내용: [roles-and-metrics.md](./docs/roles-and-metrics.md)

### FCSR (First-Command Success Rate)

**AI에게 한 번의 명령으로 원하는 결과를 얻는 비율**

```
FCSR = (첫 시도 성공 작업 수) / (전체 작업 수) × 100%

목표: 80% 이상
```

자세한 내용: [junior-ax-playbook.md](./playbooks/junior-ax-playbook.md)

### 4C Framework

**Vibe Coding의 4가지 핵심 요소**

1. **🎥 Camcorder** - 영상으로 보여주기
2. **📚 Course** - 매뉴얼화된 프로세스
3. **⏰ Cadence** - 언제, 얼마나 자주
4. **✅ Checklist** - 성공 기준

---

## 🚀 Craft 카탈로그

### CEO Craft

| Craft | 설명 | Draft 위치 |
|-------|------|-----------|
| `biz-idea` | 신사업 아이디어 발굴 및 검증 | `draft/biz-idea/` |

**사용법:**
```bash
biz-idea "indie hacker를 위한 SEO 자동화"
→ draft/biz-idea/latest/에 저장
```

### Junior AX Craft

| Craft | 설명 | Draft 위치 |
|-------|------|-----------|
| `paper2code` | 논문을 코드로 변환 | `draft/paper2code/` |

**사용법:**
```bash
paper2code "https://arxiv.org/abs/1234.5678"
→ draft/paper2code/latest/에 저장
```

### FDE Craft

| Craft | 설명 | Draft 위치 |
|-------|------|-----------|
| `research-idea` | 리서치 아이디어 탐색 및 검증 | `draft/research/` |

### 공통 Craft (All Roles)

| Craft | 설명 | Draft 위치 |
|-------|------|-----------|
| `orchestrator` | 전체 프로젝트 자동 실행 | `draft/orchestrator/` |

자세한 가이드: [.factory/commands/{role}/README.md](./.factory/commands/)

---

## 🤖 Custom Droid 활용

### 주요 Droids

| Droid | 용도 | 사용 예시 |
|-------|------|----------|
| `@niche-market-hunter` | 니치 마켓 탐색 | biz-idea에서 자동 호출 |
| `@paper-analyzer` | 논문 분석 | paper2code에서 자동 호출 |
| `@codex-devils-advocate` | 검증 및 비판 | 모든 아이디어 검증 |
| `@playbook-creator` | Playbook 생성 | 새 직무 추가 시 |

전체 목록: `.factory/droids/` 폴더 확인

---

## 📈 Draft & Archive 예시

### Draft (작업 중)

```bash
draft/biz-idea/
├── v1/                          # 첫 시도
│   └── physical-ai-data-infra/
├── v2/                          # 개선
│   └── indie-seo-automation/
└── latest/                      # 현재 작업 중
    └── new-idea-wip/
```

### Archive (완성품)

```bash
archive/craft/
├── biz-idea-v1.0/              # 공식 승인 버전
│   └── physical-ai-data-infra/ (85점 이상 검증 완료)
├── biz-idea-v2.0/              # 개선 버전
│   └── indie-seo-automation/
└── paper2code-v1.0/
    └── transformer-implementation/
```

**Archive 규칙:**
- 85점 이상 검증 통과
- 팀 리뷰 승인
- 공식 레퍼런스가 됨
- 다른 팀원들이 참고

---

## 🔗 외부 링크

- [Factory AI Docs](https://docs.factory.ai/) - Factory 공식 문서
- [Linear](https://linear.app/) - 이슈 관리
- [Supabase](https://supabase.com/) - 백엔드 표준

---

## 💡 빠른 팁

### 새 팀원 온보딩 (3단계)

**Day 1:**
1. [company.md](./docs/company.md) 읽기
2. [junior-ax-playbook.md](./playbooks/junior-ax-playbook.md) 읽기
3. 내 직무 Playbook 읽기

**Day 2:**
1. Custom Droid 살펴보기
2. Command 실행해보기
3. FCSR 측정 시작

**Day 3:**
1. 첫 작업 완료
2. Playbook 피드백 제공
3. 팀과 공유

### 자주 묻는 질문

**Q: Playbook을 어떻게 업데이트하나요?**
A: PR을 열거나 직접 수정 후 팀에 공유하세요. 살아있는 문서입니다.

**Q: Command가 작동하지 않으면?**
A: `.factory/commands/[role]/` 폴더의 README.md를 확인하세요.

**Q: 새로운 Droid를 만들고 싶어요.**
A: [junior-ax-playbook.md - Chapter 5](./playbooks/junior-ax-playbook.md#chapter-5-custom-droid-나만의-ai-워커-만들기)를 참고하세요.

---

## 📞 문의

- 회사 문서: [docs/](./docs/)
- Playbook: [playbooks/](./playbooks/)
- Command 가이드: [.factory/commands/](./factory/commands/)

---

*"Make people do what they love"*

*- luerre AI*

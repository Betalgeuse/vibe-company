# Craft Changelog

## v2.1 (2026-02-05)

**MVP 프로젝트 생성 Craft 추가**

### Added
- **Junior AX Craft:**
  - `mvp` (v1.0) - Draft 기반 MVP 프로젝트 생성
    - Draft 문서에서 요구사항 추출
    - Next.js 14 + shadcn/ui 표준 스택
    - GitHub 레포 자동 생성 (gh CLI)
    - private 레포에 submodule로 연결
    - playbooks/junior-ax/ 기반 Tech Stack

---

## v2.0 (2026-01-25)

**B2B SaaS 파이프라인 추가 + 폴더 구조 개편**

### Added
- **CEO Craft:**
  - `biz-idea-b2b` (v2.0) - B2B SaaS 아이디어 검증 파이프라인
    - 타겟: SMB → Mid-Market → Enterprise
    - ACV: $10K-100K+
    - GTM: Sales-Assisted / Hybrid
    - 핵심 지표: ACV, CAC, LTV:CAC, NRR
    - Pass 기준: 80점 + Unit Economics PASS

### Changed
- **폴더 구조 개편**: `{role}/{command}/{version}/{command}.md` 형태로 변경
  - 파일명이 command명과 동일 → `.factory/commands/`로 바로 복사 가능
  ```
  # Before
  craft/v1.0/ceo/biz-idea.md
  
  # After
  craft/ceo/biz-idea/v1.0/biz-idea.md
  craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md
  
  # 배포 방법
  cp craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md .factory/commands/
  ```

### New Droids
- `@b2b-market-hunter` - B2B 버티컬 마켓 발굴
- `@b2b-mvp-architect` - B2B MVP 설계 & Sales Playbook

### New Workflow
- `.factory/workflows/biz-idea-b2b-pipeline.md`

---

## v1.0 (2026-01-17)

**초기 버전 - 4개 Role, 5개 Craft**

### Added
- **CEO Craft:**
  - `biz-idea` (v1.0) - Micro-SaaS 아이디어 검증 파이프라인
    - 타겟: 1인 기업, 프리랜서, Prosumer
    - ACV: $0-5K
    - GTM: PLG (Self-serve)
    - Pass 기준: 85점 + Monopoly 20/25
  
- **Junior AX Craft:**
  - `paper2code` (v1.0) - 논문/문서 → 코드 변환
  
- **FDE Craft:**
  - `research-idea` (v1.0) - 기술 아이디어 리서치
  - `orchestrator` (v1.0) - FDE 워크플로우 자동화
  
- **Shared Craft:**
  - `orchestrator` (v1.0) - 전체 워크플로우 자동화

- **Lead AX Engineer Craft:**
  - `orchestrator` (v1.0) - AX 팀 워크플로우 자동화

---

*Last Updated: 2026-01-25*

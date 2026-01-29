# vibe-company

**1인 창업가를 위한 바이브 코딩 가이드북**

> *"바이브 코딩은 코딩을 배우는 게 아니다. 위임하는 법을 배우는 거다."*

코드를 한 줄도 몰라도 됩니다. 대신, AI에게 무엇을 시킬지 알면 됩니다.

---

## 🚀 지금 바로 시작하기

**이 README를 눈으로 읽지 마세요.** 에이전트의 시대입니다.

터미널을 열고 Droid 또는 Claude Code에 이렇게 말하세요:

```
https://github.com/Betalgeuse/vibe-company.git 클론하고, 
바이브코딩 시작하는 방법 알려줘
```

AI가 알아서 안내해줍니다. 모르는 건 계속 질문하세요.

> 💡 **Playbook에 없는 내용이 있나요?**  
> AI에게 "이거 playbook에 추가해줘"라고 말하면 자동으로 PR을 생성합니다.  
> PR은 민폐가 아닙니다. 부담 없이 보내주세요! (어차피 제가 리뷰합니다 😊)

---

## 🎯 이게 뭔가요?

혼자서 회사를 운영하고 싶은데, 뭐부터 해야 할지 모르겠다면?

**vibe-company**는 1인 창업자가 바로 사용할 수 있는 **회사 운영 풀 패키지**입니다:

- 📘 **Playbooks** - 역할별 일하는 방법론
- 🤖 **AI Commands & Droids** - 바이브코딩 자동화 도구
- 📄 **Templates** - 회사 문서 템플릿
- 🛠️ **Craft** - 검증된 워크플로우

---

## 🚀 시작하기

### 0. Factory AI (Droid) 설치 ⭐ 권장

이 레포의 Commands와 Droids를 사용하려면 **Factory AI**가 필요합니다.

👉 [Factory AI 설치 가이드](playbooks/junior-ax/00-setup/factory-ai-setup/course.md)

### 1. Playbook 읽기

| Playbook | 대상 |
|----------|------|
| **[Junior AX Playbook](playbooks/junior-ax/README.md)** | 바이브코딩 입문자 (필독!) |
| [CEO Playbook](playbooks/ceo/README.md) | 창업자/CEO |

### 2. Craft 사용하기

```bash
# 1. 컨텍스트 제공
"AI 기반 일정 관리 SaaS 아이디어 검증하고 싶어"

# 2. command 실행
/biz-idea
```

### 3. 기여하기 (PR)

검증된 Craft나 개선사항이 있다면 PR로 기여해주세요!

```bash
# Fork 후 작업
git clone https://github.com/YOUR_USERNAME/vibe-company.git
cd vibe-company

# 브랜치 생성
git checkout -b feature/my-new-droid

# 작업 후 PR 생성
git push origin feature/my-new-droid
# → GitHub에서 PR 생성
```

---

## 📂 폴더 구조

```
vibe-company/
├── 📘 playbooks/           # 역할별 일하는 방법론
│   ├── ceo/               # 창업자/CEO
│   ├── junior-ax/         # 바이브코딩 개발자
│   ├── fde/               # Forward Deployed Engineer
│   └── ...
│
├── 🤖 .factory/            # AI 자동화 도구
│   ├── commands/          # 역할별 Commands
│   └── droids/            # Custom Droids (28개)
│
├── 📄 templates/           # 문서 템플릿
│   ├── company.template.md
│   └── founder-profile.template.md
│
├── 🛠️ craft/              # 검증된 워크플로우 스냅샷
│
├── 📝 draft/              # 작업 중인 결과물
│
├── 🔒 private/            # 개인정보 (submodule, optional)
│
└── 📚 docs/               # 문서
```

---

## 🎭 역할 (Roles)

1인 회사도 여러 "모자"를 씁니다. 각 역할별 Playbook이 있습니다:

| 역할 | 설명 | Playbook |
|------|------|----------|
| **CEO** | 전략, 의사결정, 비전 | [playbooks/ceo/](playbooks/ceo/) |
| **Engineer** | 바이브코딩 개발 | [playbooks/junior-ax/](playbooks/junior-ax/) |
| **FDE** | 고객 대응, 요구사항 관리 | [playbooks/fde/](playbooks/fde/) |
| **Admin** | 행정, 문서, 일정 관리 | [playbooks/_archive/](playbooks/_archive/) |
| **Marketing** | 리드 생성, 콘텐츠 | [playbooks/_archive/](playbooks/_archive/) |
| **Sales** | 영업, 계약 | [playbooks/_archive/](playbooks/_archive/) |

---

## 🤖 바이브코딩 도구

### Commands

역할별로 자동화된 명령어:

```bash
# 1. 먼저 컨텍스트를 주고
"AI 기반 일정 관리 SaaS 아이디어 검증하고 싶어"

# 2. command 실행
/biz-idea

# 다른 예시:
"이 논문을 코드로 구현하고 싶어: https://arxiv.org/abs/1234.5678"
/paper2code

"프로젝트 초기 셋업 도와줘"
/orchestrator
```

### Custom Droids

28개의 전문 AI 에이전트:

| Droid | 용도 |
|-------|------|
| `@niche-market-hunter` | 니치 마켓 탐색 |
| `@codex-devils-advocate` | 아이디어 검증 & 비판 |
| `@playbook-creator` | Playbook 자동 생성 |
| `@b2b-mvp-architect` | B2B MVP 설계 |

전체 목록: `.factory/droids/`

---

## 📊 핵심 개념

### FCSR (First-Command Success Rate)

AI에게 한 번의 명령으로 원하는 결과를 얻는 비율

```
FCSR = (첫 시도 성공) / (전체 시도) × 100%
목표: 80% 이상
```

### 4C Framework

바이브코딩의 4가지 핵심 요소:

1. **🎥 Camcorder** - 영상으로 보여주기
2. **📚 Course** - 매뉴얼화된 프로세스
3. **⏰ Cadence** - 언제, 얼마나 자주
4. **✅ Checklist** - 성공 기준

### Craft & Draft

```
Craft = 검증된 워크플로우 (재사용 가능)
Draft = 작업 중인 결과물 (버전별 관리)

Craft 선택 → Draft 생성 → 반복 개선 → Craft에 승인
```

---

## 🤝 기여하기 (Contributing)

**바이브코딩 고수들의 검증된 Craft를 모읍니다!**

### Issue로 아이디어 공유

| Issue Template | 용도 |
|----------------|------|
| [😤 Pain Point](../../issues/new?template=pain-point.md) | 바이브코딩 불편함 제보 |
| [🤖 New Droid](../../issues/new?template=new-droid.md) | AI 에이전트 제안 |
| [⚡ New Command](../../issues/new?template=new-command.md) | 자동화 명령어 제안 |
| [🛠️ New Craft](../../issues/new?template=new-craft.md) | 워크플로우 제안 |

### PR로 직접 기여

1. **새로운 Command** - 유용한 자동화 명령어
2. **새로운 Droid** - 전문 AI 에이전트
3. **Playbook 개선** - 더 나은 방법론
4. **템플릿** - 유용한 문서 템플릿

자세한 가이드: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📖 참고 자료

- [Factory AI Docs](https://docs.factory.ai/) - Factory 공식 문서
- [The Embedded Entrepreneur](https://www.embeddedentrepreneur.com/) - 커뮤니티 기반 창업
- [Buy Back Your Time](https://www.buybackyourtime.com/) - Dan Martell의 시간 관리

---

## 📜 라이선스

MIT License - 자유롭게 사용하세요!

---

## ⭐ Star & Fork

유용하다면 Star 눌러주세요!

**1인 창업의 시작, vibe-company와 함께.**

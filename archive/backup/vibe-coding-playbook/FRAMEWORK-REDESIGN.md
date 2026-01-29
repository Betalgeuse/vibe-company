# 🚀 Vibe Coding Framework 재설계 제안

**문서에서 실행 가능한 프레임워크로**


## 💡 핵심 아이디어

### 현재 (문서만)
```
vibe-coding-playbook/
└── *.md 파일들만...
    → 읽기만 가능
    → 직접 구현해야 함
    → 적용이 어려움
```

### 제안 (실행 가능한 템플릿)
```
vibe-coding-framework/
├── 📚 문서
├── 🤖 실행 가능한 스크립트
├── ⚙️ 설정 파일들
├── 🎯 Droid들
└── 🔧 자동화 도구
    → 클론하면 즉시 사용!
```


---


## 🎯 3가지 제안 (난이도 순)


### 제안 1: Vibe Coding Starter Kit ⭐⭐⭐ (추천!)

**컨셉**: 클론하면 바로 Vibe Coding 시작!

```
vibe-coding-framework/
│
├── .factory/                          # Factory.ai 설정
│   ├── droids/
│   │   ├── vibe-code-reviewer.md      # 자동 코드 리뷰
│   │   ├── prompt-generator.md        # 프롬프트 자동 생성
│   │   └── fcsr-tracker.md            # FCSR 자동 측정
│   └── config.json
│
├── .github/
│   ├── workflows/
│   │   ├── ai-review.yml              # AI 자동 리뷰
│   │   ├── fcsr-report.yml            # 주간 리포트 자동 생성
│   │   └── convention-check.yml       # 컨벤션 자동 체크
│   └── PULL_REQUEST_TEMPLATE.md       # 4C 템플릿
│
├── .vscode/
│   ├── settings.json                  # 화면 분할 설정
│   ├── extensions.json                # 추천 익스텐션
│   └── snippets/                      # 프롬프트 스니펫
│
├── scripts/
│   ├── setup.sh                       # 초기 설정 (1분 완료)
│   ├── vibe-start.sh                  # 작업 시작
│   ├── ai-review.sh                   # AI 리뷰
│   └── fcsr-log.sh                    # FCSR 기록
│
├── config/
│   ├── .ai-config.json                # AI 설정
│   ├── .vibe-config.json              # Vibe Coding 설정
│   └── code-conventions/
│       ├── typescript.md              # TS 컨벤션
│       ├── react.md                   # React 컨벤션
│       └── python.md                  # Python 컨벤션
│
├── templates/
│   ├── prompts/                       # 프롬프트 템플릿
│   ├── git/                           # Git 템플릿
│   └── reports/                       # 리포트 템플릿
│
└── docs/                              # 기존 문서들
    └── vibe-coding-playbook/
```

**사용법**:
```bash
# 1. 클론
git clone <your-framework-repo>
cd vibe-coding-framework

# 2. 자동 설정 (1분)
./scripts/setup.sh

# 3. 작업 시작
./scripts/vibe-start.sh

# 끝! 바로 Vibe Coding 시작!
```

**장점**:
- ✅ 1분 안에 세팅 완료
- ✅ 모든 도구가 바로 실행 가능
- ✅ 팀원들도 쉽게 따라할 수 있음


---


### 제안 2: Vibe Coding CLI Tool ⭐⭐

**컨셉**: 명령어 하나로 모든 작업

```bash
# 설치
npm install -g @vibe/cli

# 사용
vibe init                  # 프로젝트에 Vibe Coding 적용
vibe start                 # 작업 시작 (화면 분할 + Git Worktree)
vibe prompt "로그인 구현"   # 프롬프트 자동 생성
vibe review                # AI 리뷰
vibe fcsr                  # FCSR 측정
vibe report                # 주간 리포트
```

**구조**:
```
vibe-cli/
├── bin/
│   └── vibe.js            # CLI 실행 파일
├── commands/
│   ├── init.js            # 초기화
│   ├── start.js           # 작업 시작
│   ├── prompt.js          # 프롬프트 생성
│   ├── review.js          # AI 리뷰
│   └── fcsr.js            # FCSR 측정
├── templates/             # 템플릿들
└── config/                # 기본 설정
```

**장점**:
- ✅ 설치 한 번으로 어디서나 사용
- ✅ 명령어가 직관적
- ✅ 다른 도구와 통합 쉬움


---


### 제안 3: Vibe Coding as a Service ⭐

**컨셉**: GitHub App으로 자동화

```
설치만 하면:
- PR 생성 시 자동 AI 리뷰
- FCSR 자동 측정 & 리포트
- 컨벤션 자동 체크
- 주간 리포트 자동 생성
```

**구조**:
```
vibe-github-app/
├── api/
│   ├── webhook.js         # GitHub 이벤트 수신
│   ├── ai-review.js       # AI 리뷰 로직
│   └── fcsr-tracker.js    # FCSR 측정
├── dashboard/             # 웹 대시보드
└── config/                # 설정
```

**장점**:
- ✅ 완전 자동화
- ✅ 팀 전체 적용 쉬움
- ✅ 중앙 관리 가능


---


## 🏆 최종 추천: 하이브리드 접근

**제안 1 + 제안 2 조합**

```bash
# 1. 프로젝트 템플릿 클론
git clone vibe-coding-framework my-project
cd my-project

# 2. CLI 설치
npm install -g @vibe/cli

# 3. 초기화
vibe init

# 4. 작업 시작
vibe start

# 5. 컨벤션 연동 (quant 프로젝트 참조)
vibe convention --from https://github.com/user/quant

# 6. AI 리뷰
vibe review --auto-apply

# 7. FCSR 측정
vibe fcsr log
```


---


## 📂 구체적 파일 구조


### `.factory/droids/vibe-code-reviewer.md`

```markdown
# vibe-code-reviewer

AI 코드 리뷰 + 컨벤션 체크 + 자동 적용

## System Prompt

당신은 Vibe Coding 전문가입니다.

다음을 확인하세요:
1. FCSR 원칙 준수 (4요소 프롬프트)
2. 코드 컨벤션 준수 (config/code-conventions/ 참조)
3. 4C Framework 적용 여부
4. Git Worktree 활용
5. Context Switching 최소화

컨벤션 참조:
{{file:config/code-conventions/typescript.md}}

PR Diff:
{{pr_diff}}

타당한 제안만 JSON으로:
{
  "valid_suggestions": [...],
  "auto_apply": true/false
}
```


### `scripts/setup.sh`

```bash
#!/bin/bash
# Vibe Coding Framework 자동 설정

echo "🚀 Vibe Coding Framework 설정 중..."

# 1. Git Worktree 설정
git worktree add ../$(basename $PWD)-main main

# 2. 화면 분할 설정 (.tmux.conf)
cp config/.tmux.conf ~/.tmux.conf

# 3. VS Code 설정
cp -r .vscode ~/your-project/

# 4. Pre-commit hook 설치
cp scripts/pre-commit .git/hooks/

# 5. Droid 활성화
codex droid install .factory/droids/*

echo "✅ 설정 완료! 'vibe start'로 시작하세요"
```


### `scripts/vibe-start.sh`

```bash
#!/bin/bash
# 작업 시작 자동화

# 1. 화면 분할
tmux new-session -d -s vibe
tmux split-window -h
tmux split-window -v

# 2. Git Worktree 확인
git worktree list

# 3. FCSR 로그 준비
touch .vibe/fcsr-log-$(date +%Y%m%d).json

# 4. AI 대기
echo "🤖 AI 준비 완료"
echo "✨ Vibe Coding 시작!"
```


### `config/.vibe-config.json`

```json
{
  "fcsr_target": 80,
  "ai_provider": "gemini",
  "auto_review": true,
  "conventions": {
    "source": "config/code-conventions/",
    "external_ref": "https://github.com/user/quant/CONVENTIONS.md"
  },
  "git": {
    "worktree_enabled": true,
    "auto_split": true
  },
  "screen": {
    "split_layout": "3-pane",
    "tool": "tmux"
  }
}
```


---


## 🎯 구현 우선순위

### Phase 1: 기본 템플릿 (1일)
1. ✅ 폴더 구조 생성
2. ✅ 기본 스크립트 (setup.sh, vibe-start.sh)
3. ✅ 설정 파일들
4. ✅ Droid 3개 (reviewer, prompt-gen, fcsr-tracker)

### Phase 2: 자동화 (2-3일)
5. GitHub Actions 워크플로우
6. Pre-commit hooks
7. 컨벤션 자동 체크

### Phase 3: CLI (1주)
8. NPM 패키지 생성
9. 명령어 구현
10. 배포


---


## 💬 어떤 방식으로 진행할까요?

**A. 제안 1 (Starter Kit)** - 가장 빠름, 즉시 사용 가능  
**B. 제안 2 (CLI)** - 중간, 더 편리함  
**C. 제안 3 (Service)** - 장기, 완전 자동화  
**D. 하이브리드 (1+2)** - 최고의 조합 🔥

**추천: D (하이브리드)**

먼저 Starter Kit 만들고, 나중에 CLI 추가하는 방식!


---


## 🚀 즉시 시작 가능한 것

지금 바로 만들 수 있는 것들:

1. ✅ `.factory/droids/` - Vibe Coding용 droid 3개
2. ✅ `scripts/` - setup.sh, vibe-start.sh, ai-review.sh
3. ✅ `config/` - 설정 파일들
4. ✅ `.github/workflows/` - AI 리뷰 자동화
5. ✅ `templates/` - 프롬프트, Git 템플릿

**지금 바로 시작할까요?** 🚀

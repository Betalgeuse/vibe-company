# 🔧 Git 관리 전략

**assets 레포 = Vibe Coding Framework 템플릿 저장소**


## 🎯 핵심 아이디어

```
assets/ (이 레포)
├── 📚 vibe-coding-playbook/     # 문서 (Git 관리 ✅)
├── 📝 *.example                 # 템플릿 (Git 관리 ✅)
└── 🔧 실제 사용 파일            # .gitignore (Git 관리 ❌)
```

**사용자 워크플로우:**
1. `git clone` assets 레포
2. `.example` 파일을 복사해서 실제 파일로 사용
3. 개인화된 설정/스크립트는 Git 추적 안 됨
4. 템플릿 업데이트는 `git pull`로 받기


---


## 📂 파일 구조 설계

```
/Users/zayden/Documents/assets/
│
├── .gitignore                           # 👇 개인 파일 제외
│
├── vibe-coding-playbook/                # 📚 문서 (관리 ✅)
│   └── ... (기존 구조)
│
├── .factory/                            # 🤖 Factory 설정
│   ├── droids/                          
│   │   ├── templates/                   # 템플릿 (관리 ✅)
│   │   │   ├── vibe-reviewer.example.md
│   │   │   ├── prompt-gen.example.md
│   │   │   └── fcsr-tracker.example.md
│   │   │
│   │   └── *.md                         # 실제 사용 (무시 ❌)
│   │       ├── vibe-reviewer.md         # .gitignore
│   │       ├── prompt-gen.md            # .gitignore
│   │       └── my-custom-droid.md       # .gitignore
│   │
│   ├── commands/                        # Command 파일
│   │   ├── templates/                   # 템플릿 (관리 ✅)
│   │   │   ├── vibe-review.example.json
│   │   │   ├── fcsr-log.example.json
│   │   │   └── prompt-gen.example.json
│   │   │
│   │   └── *.json                       # 실제 사용 (무시 ❌)
│   │       ├── vibe-review.json         # .gitignore
│   │       ├── fcsr-log.json            # .gitignore
│   │       └── my-command.json          # .gitignore
│   │
│   └── config.json                      # Factory 설정 (무시 ❌)
│
├── scripts/                             # 🔧 스크립트
│   ├── templates/                       # 템플릿 (관리 ✅)
│   │   ├── setup.example.sh
│   │   ├── vibe-start.example.sh
│   │   └── ai-review.example.sh
│   │
│   └── *.sh                             # 실제 사용 (무시 ❌)
│       ├── setup.sh                     # .gitignore
│       ├── vibe-start.sh                # .gitignore
│       └── my-workflow.sh               # .gitignore
│
├── config/                              # ⚙️ 설정
│   ├── templates/                       # 템플릿 (관리 ✅)
│   │   ├── .vibe-config.example.json
│   │   ├── .ai-config.example.json
│   │   └── conventions.example.md
│   │
│   └── *.json, *.md                     # 실제 사용 (무시 ❌)
│       ├── .vibe-config.json            # .gitignore
│       ├── .ai-config.json              # .gitignore
│       └── my-conventions.md            # .gitignore
│
├── .github/                             # 🤖 GitHub 자동화
│   └── workflows/
│       ├── templates/                   # 템플릿 (관리 ✅)
│       │   └── ai-review.example.yml
│       └── *.yml                        # 실제 사용 (무시 ❌)
│
└── biz-idea/, research/                 # 기존 폴더들 (관리 ✅)
```


---


## 📝 .gitignore 설계

```gitignore
# ============================================
# Vibe Coding Framework - 개인 파일 제외
# ============================================

# 실제 사용 스크립트 (템플릿만 관리)
scripts/*.sh
scripts/*.py
!scripts/templates/

# 실제 설정 파일 (템플릿만 관리)
config/*.json
config/*.yaml
config/*.md
!config/templates/

# Factory.ai - 실제 사용 파일 (템플릿만 관리)
.factory/droids/*.md
!.factory/droids/templates/

.factory/commands/*.json
!.factory/commands/templates/

.factory/config.json
!.factory/config.example.json

# 실제 GitHub Actions (템플릿만 관리)
.github/workflows/*.yml
!.github/workflows/templates/

# 개인 데이터
.vibe/                    # FCSR 로그 등
.local/                   # 개인 설정
*.local.*                 # 개인 파일

# 민감 정보
.env
.env.*
!.env.example
secrets/
*.key
*.pem

# IDE 설정 (개인화된 것)
.vscode/settings.json
!.vscode/settings.example.json

# 로그/캐시
logs/
*.log
.cache/
.tmp/

# OS
.DS_Store
Thumbs.db
```


---


## 🚀 사용자 워크플로우


### 1️⃣ 초기 설정 (처음 한 번)

```bash
# 1. assets 레포 클론
git clone <assets-repo> ~/vibe-framework
cd ~/vibe-framework

# 2. 초기화 스크립트 실행
./init-vibe-framework.sh

# 이 스크립트가 자동으로:
# - .example 파일들을 실제 파일로 복사
# - 개인 설정 폴더 생성
# - Git 설정 완료
```


### 2️⃣ 실제 파일 생성 (자동)

**`init-vibe-framework.sh`:**

```bash
#!/bin/bash
# Vibe Coding Framework 초기화

echo "🚀 Vibe Coding Framework 초기화 중..."

# 1. 템플릿에서 실제 파일 복사
copy_templates() {
  echo "📋 템플릿 복사 중..."
  
  # Scripts
  cp scripts/templates/setup.example.sh scripts/setup.sh
  cp scripts/templates/vibe-start.example.sh scripts/vibe-start.sh
  cp scripts/templates/ai-review.example.sh scripts/ai-review.sh
  
  # Config
  cp config/templates/.vibe-config.example.json config/.vibe-config.json
  cp config/templates/.ai-config.example.json config/.ai-config.json
  
  # Factory.ai - Droids
  for file in .factory/droids/templates/*.example.md; do
    filename=$(basename "$file" .example.md)
    cp "$file" ".factory/droids/$filename.md"
  done
  
  # Factory.ai - Commands
  for file in .factory/commands/templates/*.example.json; do
    filename=$(basename "$file" .example.json)
    cp "$file" ".factory/commands/$filename.json"
  done
  
  # Factory.ai - Config
  cp .factory/config.example.json .factory/config.json
  
  # GitHub Actions
  for file in .github/workflows/templates/*.example.yml; do
    filename=$(basename "$file" .example.yml)
    cp "$file" ".github/workflows/$filename.yml"
  done
  
  echo "✅ 템플릿 복사 완료"
  echo "   - Scripts: $(ls scripts/*.sh 2>/dev/null | wc -l) 개"
  echo "   - Droids: $(ls .factory/droids/*.md 2>/dev/null | wc -l) 개"
  echo "   - Commands: $(ls .factory/commands/*.json 2>/dev/null | wc -l) 개"
}

# 2. 개인 폴더 생성
create_personal_dirs() {
  mkdir -p .vibe/logs
  mkdir -p .vibe/fcsr
  mkdir -p .local/scripts
  mkdir -p .local/config
  
  echo "✅ 개인 폴더 생성 완료"
}

# 3. Git 설정
setup_git() {
  # .gitignore 확인
  if [ ! -f .gitignore ]; then
    echo "❌ .gitignore 파일이 없습니다"
    exit 1
  fi
  
  echo "✅ Git 설정 완료"
}

# 4. 실행 권한 부여
make_executable() {
  chmod +x scripts/*.sh
  chmod +x .local/scripts/*.sh
  
  echo "✅ 실행 권한 부여 완료"
}

# 실행
copy_templates
create_personal_dirs
setup_git
make_executable

echo ""
echo "🎉 Vibe Coding Framework 준비 완료!"
echo ""
echo "다음 단계:"
echo "  1. config/.vibe-config.json 편집 (개인 설정)"
echo "  2. ./scripts/setup.sh 실행 (환경 설정)"
echo "  3. ./scripts/vibe-start.sh 실행 (작업 시작)"
echo ""
```


### 3️⃣ 일상 사용

```bash
# 작업 시작
./scripts/vibe-start.sh

# AI 리뷰
./scripts/ai-review.sh 123

# FCSR 기록
./scripts/fcsr-log.sh "로그인 구현" success
```


### 4️⃣ 템플릿 업데이트

```bash
# 1. 최신 템플릿 받기
git pull origin main

# 2. 변경사항 확인
git diff HEAD~1 scripts/templates/

# 3. 필요한 것만 수동 복사
cp scripts/templates/new-feature.example.sh scripts/new-feature.sh
```


---


## 🔄 Git 브랜치 전략


### main 브랜치
- 템플릿 파일만
- 문서
- 예시 파일
- 안정적인 버전

### develop 브랜치
- 새로운 템플릿 개발
- 실험적 기능
- 테스트 중인 것

### 사용자 개인 브랜치 (없음!)
- 사용자는 fork 안 함
- clone만 하고 개인화
- 템플릿 업데이트는 pull로


---


## 📋 파일 분류표

| 파일 유형 | Git 관리 | 예시 |
|----------|---------|------|
| 📚 **문서** | ✅ O | vibe-coding-playbook/*.md |
| 📝 **템플릿** | ✅ O | */templates/*.example.* |
| 🔧 **실제 스크립트** | ❌ X | scripts/*.sh |
| ⚙️ **실제 설정** | ❌ X | config/*.json |
| 🤖 **실제 Droid** | ❌ X | .factory/droids/*.md |
| 🎯 **실제 Command** | ❌ X | .factory/commands/*.json |
| ⚙️ **Factory 설정** | ❌ X | .factory/config.json |
| 📊 **개인 데이터** | ❌ X | .vibe/, .local/ |
| 🔐 **민감 정보** | ❌ X | .env, secrets/ |


---


## 🎯 실제 적용 예시


### 프로젝트 A (TypeScript)

```bash
# 1. 클론
git clone ~/vibe-framework ~/projects/project-a/.vibe-framework

# 2. 초기화
cd ~/projects/project-a/.vibe-framework
./init-vibe-framework.sh

# 3. 개인화
# - config/.vibe-config.json 편집
# - scripts/에 프로젝트 전용 스크립트 추가
# - .factory/droids/에 커스텀 droid 추가

# 4. 사용
./scripts/vibe-start.sh
```


### 프로젝트 B (Python)

```bash
# 같은 템플릿, 다른 설정
git clone ~/vibe-framework ~/projects/project-b/.vibe-framework
cd ~/projects/project-b/.vibe-framework
./init-vibe-framework.sh

# Python용 설정으로 변경
# - config/.vibe-config.json에서 conventions: "python"
# - 나머지는 동일하게 사용
```


---


## 📦 배포 전략


### 버전 태그

```bash
# 주요 업데이트
git tag -a v1.0.0 -m "Vibe Framework v1.0"
git push origin v1.0.0

# 사용자는 특정 버전 사용 가능
git clone --branch v1.0.0 <repo>
```


### 릴리즈 노트

```markdown
# v1.0.0 (2026-01-17)

## New Templates
- AI Review workflow
- FCSR auto-tracker droid
- Prompt generator

## Breaking Changes
- config 파일 구조 변경 (.vibe-config.json)

## Migration Guide
1. 백업: cp config/.vibe-config.json config/.vibe-config.backup.json
2. 새 템플릿: cp config/templates/.vibe-config.example.json config/.vibe-config.json
3. 설정 이전: (수동)
```


---


## ✅ 체크리스트


### 레포 관리자 (당신)
- [ ] .gitignore 작성
- [ ] 템플릿 파일들 생성 (*.example.*)
- [ ] init-vibe-framework.sh 작성
- [ ] 문서 업데이트
- [ ] 버전 태그 생성

### 사용자
- [ ] 레포 클론
- [ ] init-vibe-framework.sh 실행
- [ ] 개인 설정 편집
- [ ] 작업 시작


---


## 🚀 즉시 시작

지금 바로 적용할 수 있는 것들:

1. **`.gitignore` 생성** (5분)
2. **템플릿 파일 만들기** (10분)
3. **`init-vibe-framework.sh` 작성** (10분)
4. **README 업데이트** (5분)

**총 30분이면 완성!**

**지금 바로 시작할까요?** 🚀

# Course: Git Worktree 설정 방법

## 📖 개념 이해

**Git Worktree = 같은 저장소의 여러 작업 공간**

비유:
```
일반 Git (checkout)    Git Worktree
─────────────────       ─────────────
하나의 방               여러 개의 방
옷장 하나               옷장 여러 개
옷 갈아입기 필요        각 방에 옷 준비됨
```

## 🛠️ 설정 단계

### 1단계: 현재 프로젝트 위치 확인

```bash
cd ~/projects/my-app
pwd
# 출력: /Users/username/projects/my-app
```

### 2단계: 작업 공간 생성

```bash
# main 브랜치용 작업 공간
git worktree add ../my-app-main main

# feature 브랜치용 작업 공간
git worktree add ../my-app-feature feature/new-login

# hotfix 브랜치용 작업 공간
git worktree add ../my-app-hotfix hotfix/critical-bug
```

**결과:**
```
~/projects/
├── my-app/           (원본)
├── my-app-main/      (main 브랜치)
├── my-app-feature/   (feature 브랜치)
└── my-app-hotfix/    (hotfix 브랜치)
```

### 3단계: 각 작업 공간 확인

```bash
# Worktree 목록 확인
git worktree list

# 출력:
# /Users/username/projects/my-app         abc1234 [main]
# /Users/username/projects/my-app-feature def5678 [feature/new-login]
# /Users/username/projects/my-app-hotfix  ghi9012 [hotfix/critical-bug]
```

### 4단계: 화면 분할 환경에서 사용

```bash
# tmux/iTerm 등에서 각 pane마다 다른 worktree 열기
# Pane 1:
cd ~/projects/my-app-main

# Pane 2:
cd ~/projects/my-app-feature

# Pane 3:
cd ~/projects/my-app-hotfix
```

## 🎯 실전 워크플로우

### 일반적인 시나리오

**상황:** main에서 작업 중, 긴급 버그 수정 필요

**Before (checkout 방식):**
```bash
git add .                    # 1. 현재 작업 저장
git commit -m "WIP"          # 2. 임시 커밋
git checkout hotfix          # 3. 브랜치 전환 (⏳ 대기)
# 버그 수정
git checkout main            # 4. 다시 전환 (⏳ 대기)
git reset HEAD~1             # 5. WIP 커밋 되돌리기
```
**시간:** 약 2-3분

**After (worktree 방식):**
```bash
# 다른 터미널/Pane으로 이동
cd ~/projects/my-app-hotfix  # 1. 즉시 이동
# 버그 수정
cd ~/projects/my-app-main    # 2. 다시 돌아오기
```
**시간:** 약 10초

## 🧹 정리 (작업 완료 후)

```bash
# Worktree 삭제
git worktree remove ../my-app-feature

# 또는 수동 삭제
rm -rf ../my-app-feature
git worktree prune
```

## 💡 고급 팁

### 자동화 스크립트

```bash
# ~/scripts/worktree-setup.sh
#!/bin/bash

PROJECT_NAME=$1
BRANCH=$2

cd ~/projects/$PROJECT_NAME
git worktree add ../${PROJECT_NAME}-${BRANCH} $BRANCH

echo "✅ Worktree 생성 완료: ${PROJECT_NAME}-${BRANCH}"
```

**사용:**
```bash
./worktree-setup.sh my-app feature/login
```

### VS Code에서 사용

```json
// .vscode/settings.json
{
  "window.title": "${rootName} [${activeEditorShort}]"
}
```

각 Worktree를 별도 VS Code 창으로 열기:
```bash
code ~/projects/my-app-main
code ~/projects/my-app-feature
```

## 🔗 관련 자료

- Git 공식 문서: https://git-scm.com/docs/git-worktree
- [화면 분할 설정](../screen-split/course.md)
- [No Context Switching](../no-context-switching/course.md)

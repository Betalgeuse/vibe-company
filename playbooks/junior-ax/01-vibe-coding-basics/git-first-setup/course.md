# Course: Git 첫 설정 방법

## 📖 Git이란?

**Git = 코드의 타임머신 + 협업 도구**

비유:
```
일반 파일 저장          Git 저장
───────────────         ─────────
파일.zip                버전 1, 2, 3...
덮어쓰기 ❌            모든 변경사항 저장 ✅
혼자만 사용            팀과 공유 가능
```

## 🛠️ 설정 단계

### 1단계: GitHub 계정 만들기

**1.1 GitHub 접속**
```
https://github.com 방문
```

**1.2 회원가입**
- 우측 상단 "Sign up" 클릭
- 이메일 입력 (예: your.email@gmail.com)
- 비밀번호 생성 (최소 15자 또는 8자+숫자+특수문자)
- 사용자명 입력 (예: danny-vibe-coder)
  - ⚠️ 이 이름은 공개되며 변경 가능

**1.3 이메일 인증**
- 받은 메일에서 인증 코드 입력
- "Create account" 클릭

**결과:**
```
✅ GitHub 계정 생성 완료
📧 이메일: your.email@gmail.com
👤 사용자명: danny-vibe-coder
```

---

### 2단계: Git 설치하기

#### 🪟 Windows 사용자

**2.1 Git 다운로드**
```
https://git-scm.com/download/win 방문
→ "64-bit Git for Windows Setup" 다운로드
```

**2.2 설치 실행**
- 다운로드한 파일 실행
- 설치 옵션은 **모두 기본값** 사용 (Next 연속 클릭)
- "Install" 클릭
- 완료 후 "Finish"

**2.3 설치 확인**
```bash
# PowerShell 또는 CMD 열기 (Win + R → cmd)
git --version

# 출력 예시:
# git version 2.45.0.windows.1
```

#### 🍎 Mac 사용자

**2.1 Homebrew로 설치 (권장)**
```bash
# Terminal 열기 (Cmd + Space → "Terminal" 입력)
brew install git
```

**또는 직접 다운로드:**
```
https://git-scm.com/download/mac 방문
```

**2.2 설치 확인**
```bash
git --version
# 출력: git version 2.45.0
```

---

### 3단계: Git 기본 설정

**3.1 사용자 정보 설정**
```bash
# 이름 설정 (GitHub 사용자명과 동일하게 추천)
git config --global user.name "danny-vibe-coder"

# 이메일 설정 (GitHub 가입 이메일)
git config --global user.email "your.email@gmail.com"
```

**3.2 설정 확인**
```bash
git config --global --list

# 출력:
# user.name=danny-vibe-coder
# user.email=your.email@gmail.com
```

---

### 4단계: 저장소 클론하기

**4.1 클론할 저장소 URL 복사**

GitHub에서:
1. 저장소 페이지 방문 (예: https://github.com/company/project)
2. 녹색 "Code" 버튼 클릭
3. HTTPS 탭에서 URL 복사
   ```
   https://github.com/company/project.git
   ```

**4.2 저장소를 저장할 위치 결정**

```bash
# Windows 권장 경로
cd C:\Users\YourName\projects

# Mac/Linux 권장 경로
cd ~/projects

# 폴더가 없다면 생성
mkdir projects
cd projects
```

**4.3 클론 실행**
```bash
git clone https://github.com/company/project.git

# 출력:
# Cloning into 'project'...
# remote: Enumerating objects: 100, done.
# remote: Counting objects: 100% (100/100), done.
# Receiving objects: 100% (100/100), done.
```

**4.4 클론된 저장소로 이동**
```bash
cd project
```

---

### 5단계: 경로 확인 및 테스트

**5.1 현재 위치 확인**
```bash
# Windows (PowerShell)
pwd
# 출력: C:\Users\YourName\projects\project

# Mac/Linux
pwd
# 출력: /Users/yourname/projects/project
```

**5.2 Git 작동 테스트**
```bash
git status

# 출력:
# On branch main
# Your branch is up to date with 'origin/main'.
# nothing to commit, working tree clean
```

**5.3 파일 목록 확인**
```bash
# Windows
dir

# Mac/Linux
ls -la
```

---

## 🎯 전체 흐름 요약

```bash
# 1. GitHub 계정 생성 (웹사이트)
# → https://github.com 에서 회원가입

# 2. Git 설치 확인
git --version

# 3. Git 설정
git config --global user.name "your-username"
git config --global user.email "your.email@gmail.com"

# 4. 작업 폴더로 이동
cd C:\Users\YourName\projects  # Windows
# 또는
cd ~/projects                   # Mac/Linux

# 5. 저장소 클론
git clone https://github.com/company/project.git

# 6. 저장소로 이동
cd project

# 7. 확인
git status
```

---

## 💡 자주 묻는 질문

### Q1: 저장소를 어디에 클론해야 하나요?

**권장 위치:**
```
Windows: C:\Users\YourName\projects\
Mac:     /Users/yourname/projects/
Linux:   /home/yourname/projects/
```

**피해야 할 위치:**
- ❌ 바탕화면 (Desktop)
- ❌ OneDrive/Google Drive (동기화 폴더)
- ❌ 시스템 폴더 (C:\Windows, /System 등)

### Q2: HTTPS vs SSH 어떤 걸 써야 하나요?

**첫 시작은 HTTPS 사용:**
```bash
# HTTPS (추천 - 초보자용)
git clone https://github.com/company/project.git

# SSH (나중에 - 고급 사용자용)
git clone git@github.com:company/project.git
```

HTTPS가 더 쉽고 설정이 간단합니다.

### Q3: 비공개 저장소는 어떻게 클론하나요?

**1. Personal Access Token 생성:**
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. repo 권한 체크
5. 생성된 토큰 복사 (⚠️ 한 번만 보임!)

**2. 클론 시 인증:**
```bash
git clone https://github.com/company/private-project.git
# Username: your-username
# Password: (여기에 토큰 붙여넣기)
```

### Q4: 여러 저장소를 관리하려면?

**폴더 구조 예시:**
```
C:\Users\YourName\projects\
├── company-project-1\
├── company-project-2\
├── personal-project\
└── learning-project\
```

각 프로젝트를 별도 폴더로 관리하세요.

---

## 🚨 트러블슈팅

### ❌ "git: command not found"
**원인:** Git이 설치되지 않았거나 PATH에 없음

**해결:**
1. Git 재설치
2. 터미널 재시작
3. 여전히 안되면:
   ```bash
   # Windows: 환경 변수 확인
   # 시스템 속성 → 환경 변수 → Path에 Git 경로 추가
   C:\Program Files\Git\cmd
   ```

### ❌ "Permission denied"
**원인:** 인증 실패 또는 권한 없음

**해결:**
1. 저장소가 공개인지 확인
2. 비공개라면 GitHub 계정으로 로그인했는지 확인
3. Personal Access Token 사용

### ❌ "fatal: destination path 'project' already exists"
**원인:** 같은 이름의 폴더가 이미 존재

**해결:**
```bash
# 다른 이름으로 클론
git clone https://github.com/company/project.git project-v2

# 또는 기존 폴더 삭제 (주의!)
rm -rf project  # Mac/Linux
rmdir /s project  # Windows
```

---

## 🔗 다음 단계

✅ Git 설정 완료 후:
1. [Git Worktree 설정하기](../git-worktree-setup/)
2. [화면 분할 환경 만들기](../screen-split/)
3. [첫 코드 수정해보기](../../02-reference-based/)

---

## 📚 추가 학습 자료

- **Git 기초:** https://git-scm.com/book/ko/v2
- **GitHub 가이드:** https://docs.github.com/ko/get-started
- **인터랙티브 튜토리얼:** https://learngitbranching.js.org/?locale=ko

---

*"Git은 처음이 어려워 보이지만, 배우면 평생 쓰는 도구입니다"*

# Checklist: Git 첫 설정

> ⚠️ **실행 직전 확인사항** - 모두 체크 후 진행하세요!

## ✅ 1단계: GitHub 계정 생성

### 준비물
- [ ] 사용할 이메일 주소 (Gmail, Outlook 등)
- [ ] 기억할 수 있는 강력한 비밀번호

### 확인 사항
- [ ] https://github.com 에 접속되는가?
- [ ] 사용자명이 중복되지 않는가? (초록색 체크 표시)
- [ ] 이메일 인증을 완료했는가?

**✅ 완료 확인:**
```
https://github.com/your-username 접속 시 프로필이 보이면 성공!
```

---

## ✅ 2단계: Git 설치

### Windows 사용자
- [ ] https://git-scm.com/download/win 에서 다운로드 완료
- [ ] 설치 파일을 실행했는가?
- [ ] 설치 옵션은 기본값으로 설정했는가?

### Mac 사용자
- [ ] Homebrew가 설치되어 있는가? (또는 직접 다운로드)
- [ ] `brew install git` 명령 실행 완료

### 공통 확인
```bash
git --version
```
- [ ] 버전 정보가 출력되는가? (예: git version 2.45.0)

**❌ 만약 "command not found" 에러:**
1. 터미널 재시작
2. Git 재설치
3. 환경 변수 PATH 확인

---

## ✅ 3단계: Git 기본 설정

### 명령 실행 전 확인
- [ ] GitHub 사용자명을 정확히 알고 있는가?
- [ ] GitHub 가입 이메일을 정확히 알고 있는가?

### 설정 명령
```bash
git config --global user.name "your-username"
git config --global user.email "your.email@gmail.com"
```

### 설정 확인
```bash
git config --global --list
```
- [ ] `user.name`이 올바르게 표시되는가?
- [ ] `user.email`이 올바르게 표시되는가?

---

## ✅ 4단계: 작업 폴더 준비

### 경로 결정
```bash
# Windows
cd C:\Users\YourName\projects

# Mac/Linux
cd ~/projects
```

- [ ] 현재 위치를 정확히 알고 있는가? (`pwd` 명령으로 확인)
- [ ] 충분한 디스크 공간이 있는가? (최소 5GB 권장)
- [ ] 폴더에 쓰기 권한이 있는가?

### 폴더 생성 (없다면)
```bash
mkdir projects
cd projects
```
- [ ] 폴더가 생성되었는가?

---

## ✅ 5단계: 저장소 클론

### 사전 확인
- [ ] 클론할 저장소 URL을 복사했는가?
  ```
  예: https://github.com/company/project.git
  ```
- [ ] 저장소가 공개인가, 비공개인가?
- [ ] 비공개라면 접근 권한이 있는가?

### 클론 명령
```bash
git clone https://github.com/company/project.git
```

### 클론 중 확인
- [ ] "Cloning into..." 메시지가 보이는가?
- [ ] 진행률이 100%까지 완료되었는가?
- [ ] 에러 메시지가 없는가?

### 클론 후 확인
```bash
cd project
ls -la    # Mac/Linux
dir       # Windows
```
- [ ] 프로젝트 파일들이 보이는가?
- [ ] `.git` 폴더가 있는가? (숨김 파일)

---

## ✅ 6단계: Git 작동 테스트

### 기본 명령 테스트
```bash
git status
```
- [ ] "On branch main" (또는 다른 브랜치명) 메시지가 보이는가?
- [ ] 에러가 없는가?

### 추가 확인
```bash
git log --oneline -5
```
- [ ] 최근 커밋 목록이 보이는가?

```bash
git remote -v
```
- [ ] origin 저장소 URL이 올바르게 표시되는가?

---

## 📊 최종 체크리스트

### 모든 항목 완료했나요?

**GitHub:**
- [ ] 1. GitHub 계정 생성 완료 ✅
- [ ] 2. 이메일 인증 완료 ✅

**Git 설치:**
- [ ] 3. Git 설치 완료 ✅
- [ ] 4. `git --version` 작동 ✅
- [ ] 5. 사용자 정보 설정 완료 ✅

**저장소 클론:**
- [ ] 6. 작업 폴더 생성 완료 ✅
- [ ] 7. 저장소 클론 완료 ✅
- [ ] 8. `git status` 작동 ✅

**8개 모두 체크되었다면 성공! 🎉**

---

## 🚨 자주 발생하는 문제

### ❌ "Permission denied (publickey)"
**원인:** SSH 키가 설정되지 않음

**해결:**
```bash
# HTTPS로 클론하기 (더 쉬움)
git clone https://github.com/company/project.git
```

### ❌ "Repository not found"
**원인:**
1. URL이 틀림
2. 비공개 저장소인데 권한 없음
3. 저장소가 삭제됨

**해결:**
1. URL 다시 확인
2. GitHub 계정 로그인 확인
3. 저장소 소유자에게 권한 요청

### ❌ "fatal: not a git repository"
**원인:** Git 저장소가 아닌 폴더에서 명령 실행

**해결:**
```bash
# 클론한 프로젝트 폴더로 이동
cd /path/to/project

# 또는 현재 폴더를 Git 저장소로 초기화
git init
```

### ❌ 인증 창이 반복해서 나타남
**원인:** 자격 증명이 저장되지 않음

**해결 (Windows):**
```bash
git config --global credential.helper wincred
```

**해결 (Mac):**
```bash
git config --global credential.helper osxkeychain
```

**해결 (Linux):**
```bash
git config --global credential.helper store
```

---

## 💡 성공 확인 최종 테스트

### 이 명령들이 모두 작동하면 완벽!

```bash
# 1. Git 버전 확인
git --version
# ✅ 버전 번호 출력

# 2. 설정 확인
git config --global user.name
# ✅ 사용자명 출력

# 3. 저장소 상태 확인
git status
# ✅ "On branch..." 출력

# 4. 원격 저장소 확인
git remote -v
# ✅ origin URL 출력

# 5. 브랜치 확인
git branch
# ✅ 현재 브랜치 출력 (앞에 * 표시)
```

**모두 작동한다면 축하합니다! 🎊**

---

## 🎯 다음 단계

✅ Git 첫 설정 완료 후:
1. **추천:** [Git Worktree 설정](../git-worktree-setup/) - 브랜치 전환 0초
2. [화면 분할 환경](../screen-split/) - 창 전환 없이 작업
3. [레퍼런스 찾기](../../02-reference-based/find-references/) - 코딩 시작

---

## 📞 도움이 필요할 때

### 팀에 물어보기
```
"Git 설치 후 [문제상황]이 발생합니다.
git --version 결과: [버전 또는 에러]
운영체제: [Windows/Mac/Linux]"
```

### 유용한 링크
- **GitHub 공식 가이드:** https://docs.github.com/ko/get-started
- **Git 공식 문서:** https://git-scm.com/book/ko/v2
- **Stack Overflow:** 에러 메시지 검색

---

*"첫 설정이 제대로 되면, 평생 편하게 쓸 수 있습니다"*

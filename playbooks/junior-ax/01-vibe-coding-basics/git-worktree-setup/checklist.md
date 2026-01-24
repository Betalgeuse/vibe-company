# Checklist: Git Worktree 설정

> ⚠️ **실행 직전 확인사항** - 모두 체크 후 진행하세요!

## ✅ 사전 확인 (Pre-flight)

### 1. Git 저장소 확인
```bash
git status
```
- [ ] 현재 디렉토리가 Git 저장소인가?
- [ ] Uncommitted 변경사항이 있다면 커밋 또는 stash 했는가?

### 2. 디스크 공간 확인
```bash
df -h .
```
- [ ] 프로젝트 크기의 2-3배 여유 공간이 있는가?
  - 작은 프로젝트: 1GB+
  - 중간 프로젝트: 5GB+
  - 큰 프로젝트: 10GB+

### 3. 브랜치 존재 확인
```bash
git branch -a
```
- [ ] 생성하려는 브랜치가 이미 존재하는가?
- [ ] 원격 브랜치라면 fetch 했는가?

---

## ✅ 실행 중 확인

### 4. 경로 확인
```bash
pwd
# 부모 디렉토리 확인
ls ..
```
- [ ] 현재 위치를 정확히 알고 있는가?
- [ ] `../project-name` 경로가 올바른가?
- [ ] 같은 이름의 폴더가 이미 존재하지 않는가?

### 5. Worktree 생성 명령 확인
```bash
# 실행 전 명령 다시 확인!
echo "git worktree add ../my-app-feature feature/new-login"
```
- [ ] 폴더 이름이 명확한가? (나중에 찾기 쉬운가?)
- [ ] 브랜치 이름이 정확한가?
- [ ] 오타가 없는가?

---

## ✅ 실행 후 검증

### 6. Worktree 생성 확인
```bash
git worktree list
```
- [ ] 새 Worktree가 목록에 보이는가?
- [ ] 경로가 올바른가?
- [ ] 브랜치 이름이 맞는가?

### 7. 실제 작동 테스트
```bash
cd ../my-app-feature
git status
```
- [ ] 디렉토리 이동이 되는가?
- [ ] `git status`가 정상 작동하는가?
- [ ] 올바른 브랜치에 있는가?
- [ ] `.git` 파일이 있는가? (심볼릭 링크 확인)

---

## 🚨 트러블슈팅

### ❌ "fatal: 'xyz' is already checked out"
**원인:** 해당 브랜치가 이미 다른 Worktree에서 사용 중

**해결:**
```bash
git worktree list          # 어디서 사용 중인지 확인
git worktree remove <path> # 기존 Worktree 제거
```

### ❌ "fatal: invalid reference"
**원인:** 브랜치가 존재하지 않음

**해결:**
```bash
git fetch                  # 원격에서 가져오기
git branch -a              # 브랜치 확인
git worktree add ../path origin/branch-name  # 원격 브랜치 지정
```

### ❌ 폴더가 이미 존재
**원인:** 동일한 이름의 디렉토리가 이미 있음

**해결:**
```bash
rm -rf ../existing-folder  # 주의! 확인 후 삭제
# 또는 다른 이름 사용
git worktree add ../my-app-feature-v2 feature/new-login
```

---

## 📊 최종 확인

### 모든 항목 체크했나요?

- [ ] 1. Git 저장소 확인 ✅
- [ ] 2. 디스크 공간 확인 ✅
- [ ] 3. 브랜치 존재 확인 ✅
- [ ] 4. 경로 확인 ✅
- [ ] 5. 명령 재확인 ✅
- [ ] 6. Worktree 생성 확인 ✅
- [ ] 7. 작동 테스트 ✅

**7개 모두 체크되었다면 성공! 🎉**

---

## 💡 다음 단계

✅ Git Worktree 설정 완료 후:
1. [화면 분할 설정하기](../screen-split/)
2. [No Context Switching 실천하기](../no-context-switching/)

---

*"체크리스트를 건너뛰면 나중에 2배의 시간을 낭비합니다"*

# Checklist: 첫날 환경 설정

> ⚠️ **Day 1 종료 전 확인사항** - 오늘 다 끝내고 퇴근!

## ✅ 오전 (09:00-12:00)

### 1. 화면 분할 설정 (1.5시간)
- [ ] VS Code 또는 iTerm2 설치
- [ ] 3분할 레이아웃 구성
- [ ] 키보드 단축키 암기
- [ ] Alt+Tab 없이 1시간 작업 테스트

### 2. Git Worktree 설정 (1.5시간)
```bash
# 테스트 프로젝트 생성
mkdir ~/test-vibe && cd ~/test-vibe
git init

# Worktree 연습
git worktree add ../test-main main
git worktree add ../test-feature feature

# 확인
git worktree list
```
- [ ] Worktree 개념 이해
- [ ] 3개 작업 공간 만들기 성공
- [ ] 각 폴더로 이동하며 테스트

---

## ✅ 오후 (13:00-17:00)

### 3. Reference 찾기 연습 (1시간)
**과제: "로그인 페이지" 레퍼런스 3개 찾기**
- [ ] Linear 로그인 분석
- [ ] Vercel 로그인 분석
- [ ] Supabase 로그인 예시 분석
- [ ] 공통 패턴 노트 정리

### 4. 첫 작업 실습 (2시간)
**실습: 간단한 로그인 페이지 만들기**

```
Task: Next.js로 Linear 스타일 로그인 페이지 생성
```

**4단계 Prompt 작성:**
- [ ] Context: 프로젝트 환경 명시
- [ ] Action: Linear 레퍼런스 첨부
- [ ] Constraint: 기술 스택 지정
- [ ] Output: 파일 경로 명시

**실행:**
- [ ] AI에게 명령
- [ ] 결과 확인
- [ ] 실행 테스트
- [ ] 성공 여부 기록

### 5. 정리 및 복습 (1시간)
```markdown
## Day 1 회고

### 배운 것:
- 화면 분할로 창 전환 0회
- Git Worktree로 브랜치 전환 0초
- Reference 기반으로 첫 작업 성공

### 어려웠던 것:
- [예: Tmux 단축키 암기]

### 내일 할 것:
- Day 2: 실전 작업 시작
- FCSR 측정 시작
```
- [ ] 회고 작성 완료
- [ ] 어려웠던 점 정리
- [ ] 내일 계획 수립

---

## 🚨 트러블슈팅

### ❌ "화면 분할이 안 돼요"
**해결:**
```
1. VS Code: 파일 열고 Cmd+\
2. iTerm: Cmd+D (수직), Cmd+Shift+D (수평)
3. Tmux: Ctrl+b % (수직), Ctrl+b " (수평)
```

### ❌ "Git Worktree가 이해 안 가요"
**비유:**
```
책 한 권을 여러 책갈피로 표시
→ 각 책갈피 = 각 Worktree
→ 동시에 여러 페이지 볼 수 있음
```

### ❌ "첫 작업이 실패했어요"
**정상입니다!**
```
첫날 FCSR: 20-30% 정상
목표: 2주 후 80% 달성

실패해도 괜찮습니다. 
중요한 건 과정을 이해하는 것!
```

---

## 📊 최종 확인

### Day 1 체크리스트

**오전:**
- [ ] 1. 화면 분할 ✅
- [ ] 2. Git Worktree ✅

**오후:**
- [ ] 3. Reference 찾기 ✅
- [ ] 4. 첫 작업 실습 ✅
- [ ] 5. 회고 작성 ✅

**5개 모두 체크 = Day 1 완료! 🎉**

---

## 💡 내일 (Day 2)

**Day 2 미리보기:**
1. 실전 작업 시작
2. 4C Framework 적용
3. FCSR 측정 시작
4. Prompt Engineering 연습

**준비물:**
- 오늘 만든 환경
- Reference 노트
- 편안한 마음 😊

---

*"완벽한 첫날은 없다. 중요한 건 올바른 방향!"*

# Checklist: 4단계 Prompt Engineering

> ⚠️ **AI 명령 직전 확인사항** - 4단계 모두 있나요?

## ✅ 프롬프트 작성 전

### 1. Reference 준비
- [ ] 비슷한 기능 예시 3개 찾았나?
- [ ] Reference URL 준비되었나?
- [ ] 스크린샷/코드 저장했나?

### 2. Tech Stack 확인
```bash
# 현재 프로젝트 확인
cat package.json | grep "dependencies"
```
- [ ] 프레임워크 버전 확인 (Next.js 14? 15?)
- [ ] 사용 중인 라이브러리 파악
- [ ] 제약사항 명확히 파악

---

## ✅ 프롬프트 4단계 체크

### 3. Context (배경) 작성
```
현재 상황:
- [ ] 프로젝트 종류 명시 (Next.js/React/Vue?)
- [ ] 버전 명시 (Next.js 14, React 18 등)
- [ ] 기존 코드 구조 설명
```

**예시:**
```
✅ 좋은 Context:
"Next.js 14 App Router, TypeScript, Supabase 사용 중"

❌ 나쁜 Context:
"Next.js 프로젝트"
```

### 4. Action (할 일) 작성
```
명확한 작업:
- [ ] 동사로 시작 ("생성해줘", "수정해줘")
- [ ] Reference 첨부 ("Linear처럼", "Vercel처럼")
- [ ] 구체적 기능 명시
```

**예시:**
```
✅ 좋은 Action:
"Linear (linear.app/login)처럼 로그인 페이지 생성"

❌ 나쁜 Action:
"로그인 만들어줘"
```

### 5. Constraint (제약사항) 작성
```
제약 조건:
- [ ] 사용할 라이브러리 지정
- [ ] 사용하지 말아야 할 것 명시
- [ ] 스타일 가이드 지정
```

**예시:**
```
✅ 좋은 Constraint:
"제약: Supabase Auth만, OAuth 제외, shadcn/ui 사용"

❌ 나쁜 Constraint:
(없음)
```

### 6. Output (결과물) 작성
```
기대하는 결과:
- [ ] 파일 경로 명시
- [ ] 파일 형식 지정
- [ ] 추가 요청사항 명시
```

**예시:**
```
✅ 좋은 Output:
"결과: app/login/page.tsx, 테스트 코드 포함"

❌ 나쁜 Output:
(없음)
```

---

## ✅ 명령 실행 전

### 7. 최종 검토
```markdown
[ ] 1. Context: 배경 명시 ✅
[ ] 2. Action: Reference + 구체적 작업 ✅
[ ] 3. Constraint: 기술 스택 + 제약 ✅
[ ] 4. Output: 파일 경로 + 형식 ✅
```

### 8. 프롬프트 예시 확인
```
❌ 나쁜 예:
"로그인 기능 만들어줘"

✅ 좋은 예:
"Context: Next.js 14, TypeScript, Supabase
Action: Linear (linear.app/login)처럼 Magic Link 로그인
Constraint: Supabase Auth, shadcn/ui, OAuth 제외
Output: app/login/page.tsx, auth hook 포함"
```
- [ ] 4단계 모두 포함되었나?
- [ ] 구체적인가?
- [ ] Reference 첨부되었나?

---

## ✅ 명령 실행 후

### 9. 결과 확인
- [ ] 원하는 결과가 나왔나?
- [ ] 파일이 생성되었나?
- [ ] 에러가 없나?

### 10. FCSR 기록
```
명령: [프롬프트 요약]
첫 시도 성공: ✅ / ❌
재시도 횟수: [N]회
개선점: [메모]
```
- [ ] 첫 시도에 성공했나?
- [ ] 실패 시 어느 단계가 문제였나?
- [ ] 다음에는 어떻게 개선할지 기록했나?

---

## 🚨 트러블슈팅

### ❌ "결과가 원하는 것과 달라요"
**원인:** Action이 애매하거나 Constraint 부족

**해결:**
```
1. Reference URL 명시적으로 첨부
2. "이것처럼" → "이것의 [구체적 부분]처럼"
3. Constraint에 "하지 말아야 할 것" 추가
```

### ❌ "AI가 엉뚱한 라이브러리를 사용해요"
**원인:** Constraint에 기술 스택 명시 안 함

**해결:**
```
Constraint에 추가:
"제약: 반드시 Supabase 사용, Firebase 사용 금지"
```

### ❌ "파일이 엉뚱한 곳에 생성돼요"
**원인:** Output에 경로 명시 안 함

**해결:**
```
Output에 추가:
"결과: app/login/page.tsx (정확히 이 경로)"
```

---

## 📊 최종 확인

### 모든 항목 체크했나요?

**준비:**
- [ ] 1. Reference 준비 ✅
- [ ] 2. Tech Stack 확인 ✅

**4단계:**
- [ ] 3. Context 작성 ✅
- [ ] 4. Action 작성 ✅
- [ ] 5. Constraint 작성 ✅
- [ ] 6. Output 작성 ✅

**실행:**
- [ ] 7. 최종 검토 ✅
- [ ] 8. 예시 확인 ✅

**결과:**
- [ ] 9. 결과 확인 ✅
- [ ] 10. FCSR 기록 ✅

**10개 모두 체크 = 완벽한 프롬프트! 🎉**

---

## 💡 다음 단계

✅ Prompt Engineering 완료 후:
1. [Custom Droid 생성](../../04-custom-droid/create-droid/) - 반복 작업 자동화
2. [Command & Flow](../../05-command-flow/select-command/) - 작업 템플릿화

---

*"4단계 프롬프트 = FCSR 80% 보장"*

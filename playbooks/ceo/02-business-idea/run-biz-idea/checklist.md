# Checklist: biz-idea Craft 실행

> ⚠️ **실행 직전 확인사항** - 30분 안에 완료하려면 체크!

## ✅ 사전 준비

### 1. 환경 확인
```bash
cd /Users/zayden/Documents/assets
pwd
```
- [ ] assets 폴더에 있는가?
- [ ] `draft/biz-idea/` 폴더가 존재하는가?

### 2. Craft 존재 확인
```bash
ls .factory/commands/ceo/
```
- [ ] `biz-idea.md` 파일이 보이는가?
- [ ] Command가 설치되어 있는가?

### 3. 키워드 준비
- [ ] 키워드가 구체적인가? (5단어 이상)
- [ ] 타겟이 명확한가? (누구를 위한?)
- [ ] 문제가 명확한가? (어떤 Pain Point?)

**자가 테스트:**
```
질문: 이 키워드로 구글 검색 시 비슷한 서비스가 나오는가?
✅ 나온다 → 좋은 키워드 (시장 존재)
❌ 안 나온다 → 키워드 수정 필요 (시장 불명확)
```

---

## ✅ 실행 중 확인

### 4. 명령 재확인
```bash
# ⚠️ 실행 전 명령 다시 보기!
echo 'biz-idea "indie hacker를 위한 SEO 자동화"'
```
- [ ] `biz-idea` 명령이 맞는가?
- [ ] 키워드에 따옴표 있는가?
- [ ] 오타 없는가?

### 5. 실행 시작
```bash
biz-idea "indie hacker를 위한 SEO 자동화"
```
- [ ] 에러 없이 시작되었는가?
- [ ] 진행 상황이 보이는가?
- [ ] 예상 시간: 20-30분

### 6. 대기 중 할 일
- [ ] ☕ 커피 마시기
- [ ] 📧 이메일 확인
- [ ] 📊 대시보드 리뷰
- [ ] ❌ 다른 중요한 일 시작 (금지!)
  - → 30분 후 돌아와야 함

---

## ✅ 결과 확인

### 7. Draft 생성 확인
```bash
ls draft/biz-idea/latest/
```
- [ ] 새 파일이 생성되었는가?
- [ ] 파일 이름이 `idea-*.md` 형식인가?
- [ ] 파일 크기가 0KB 이상인가?

### 8. 점수 확인
```bash
head -5 draft/biz-idea/latest/idea-*.md
```
- [ ] 첫 줄에 점수가 보이는가?
- [ ] `Score: XX/100` 형식인가?
- [ ] PASS/CONDITIONAL/FAIL 표시가 있는가?

### 9. 필수 섹션 확인
```bash
grep -E "^## " draft/biz-idea/latest/idea-*.md
```
- [ ] The Micro Opportunity
- [ ] Product Spec (MVP)
- [ ] Competition Check
- [ ] Automation Strategy
- [ ] Cost Estimate

**5개 섹션 모두 있는가?**

---

## ✅ 점수별 액션

### 10-A. 85점 이상 (PASS ✅)

- [ ] 점수 85점 이상 확인
- [ ] MVP 스펙이 구체적인가?
- [ ] 경쟁 차별화가 명확한가?
- [ ] 비용이 현실적인가?

**다음 단계:**
```bash
# 1. 버전 폴더 생성
mkdir -p draft/biz-idea/v1

# 2. 파일 이동
mv draft/biz-idea/latest/idea-* draft/biz-idea/v1/

# 3. 팀 공유 준비
# - Weekly 미팅 아젠다 추가
# - Linear 이슈 생성
# - MVP 개발 리소스 검토
```

### 10-B. 60-84점 (CONDITIONAL ⚠️)

- [ ] Critic의 약점 지적 읽기
- [ ] 치명적 결함이 있는가?
- [ ] 수정 가능한가?

**다음 단계:**
```
1. 키워드 수정 고려
   - 타겟을 더 구체화
   - Pain Point를 더 명확하게
   
2. 재실행 여부 결정
   - 수정 후 재시도 (1회)
   - 또는 다른 아이디어로 전환
```

### 10-C. 60점 미만 (FAIL ❌)

- [ ] 왜 낮은 점수인지 Critic 피드백 확인
- [ ] 시장 자체에 문제가 있는가?
- [ ] 경쟁이 너무 치열한가?

**다음 단계:**
```
1. Draft 보관 (학습용)
   mkdir -p draft/biz-idea/rejected
   mv draft/biz-idea/latest/idea-* draft/biz-idea/rejected/

2. 새 키워드로 재시작
   - 완전히 다른 방향
   - 또는 니치를 더 좁히기
```

---

## 🚨 트러블슈팅

### ❌ "Command not found: biz-idea"
**원인:** Craft가 설치되지 않음

**해결:**
```bash
ls .factory/commands/ceo/biz-idea.md
# 파일이 있는지 확인

# Factory CLI 재시작 또는 재설치
```

### ❌ 30분 넘게 실행 중
**원인:** API 응답 느림 또는 네트워크 문제

**해결:**
```bash
# 1. 프로세스 확인
ps aux | grep biz-idea

# 2. 1시간 넘으면 종료
kill <PID>

# 3. 재실행
biz-idea "키워드"
```

### ❌ 결과 파일이 비어있음
**원인:** 실행 중 에러 발생

**해결:**
```bash
# 로그 확인
cat ~/.factory/logs/biz-idea.log

# 에러 메시지 복사해서 팀에 공유
# 또는 다른 키워드로 재시도
```

---

## 📊 최종 확인

### 모든 항목 체크했나요?

**사전 준비:**
- [ ] 1. 환경 확인 ✅
- [ ] 2. Craft 존재 확인 ✅
- [ ] 3. 키워드 준비 ✅

**실행:**
- [ ] 4. 명령 재확인 ✅
- [ ] 5. 실행 시작 ✅
- [ ] 6. 대기 중 할 일 ✅

**결과:**
- [ ] 7. Draft 생성 확인 ✅
- [ ] 8. 점수 확인 ✅
- [ ] 9. 필수 섹션 확인 ✅
- [ ] 10. 점수별 액션 실행 ✅

**10개 모두 체크 + 85점 이상 = 추진! 🚀**

---

## 💡 다음 단계

✅ biz-idea 실행 완료 후:
1. [85점 이상 아이디어 선정](../select-ideas/) - 여러 결과 비교
2. [MVP 초안 작성](../draft-mvp/) - 실제 개발 시작
3. [Archive에 승인](../approve-to-archive/) - 공식 문서화

---

*"30분 투자로 4일의 시행착오 예방"*

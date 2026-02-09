# Contributing to vibe-company

> ⚠️ **서비스 관련 문서(love-practice, financial-analyzer 등의 브랜딩/마케팅/기획)는 이 레포가 아닌 `vibe-company-private` 레포에 넣어주세요!**
> 이 레포는 **Public**이므로 전세계 누구나 볼 수 있습니다.
> 자세한 기준은 `private/REPO-GUIDE.md`를 참고하세요.

**바이브코딩 고수들의 검증된 Craft를 모읍니다!**

---

## 🎯 기여 목표

vibe-company는 커뮤니티가 함께 만드는 1인 창업 템플릿입니다.

**우리가 찾는 것:**
- 실제로 사용해보고 검증된 워크플로우
- 바이브코딩 고수들의 노하우
- 1인 창업자에게 실질적으로 도움이 되는 도구

---

## 📦 기여할 수 있는 것

### 1. Commands (명령어)

`.factory/commands/` 폴더에 새로운 자동화 명령어 추가

**예시:**
```markdown
# my-command.md

## 목적
한 줄 설명

## 사용법
my-command "입력값"

## 예상 결과
- 결과물 1
- 결과물 2

## 프롬프트
...
```

### 2. Custom Droids (AI 에이전트)

`.factory/droids/` 폴더에 새로운 전문 에이전트 추가

**요구사항:**
- 명확한 역할 정의
- 구체적인 프롬프트
- 사용 예시

### 3. Playbooks (방법론)

`playbooks/` 폴더에 새로운 역할 또는 개선된 방법론

**좋은 Playbook:**
- 실제 경험 기반
- 구체적인 예시 포함
- FCSR 측정 가능

### 4. Templates (템플릿)

`templates/` 폴더에 유용한 문서 템플릿

---

## 🔄 PR 프로세스

### 1. Fork & Branch

```bash
# Fork 후
git clone https://github.com/YOUR_USERNAME/vibe-company.git
cd vibe-company
git checkout -b feature/my-contribution
```

### 2. 변경 작업

```bash
# 파일 추가/수정
# 테스트 (실제로 사용해보기)
```

### 3. Commit

```bash
git add .
git commit -m "feat(commands): add my-awesome-command

- 목적: ...
- 테스트 결과: ...
"
```

### 4. PR 생성

```bash
git push origin feature/my-contribution
# GitHub에서 PR 생성
```

---

## ✅ PR 체크리스트

PR 생성 전 확인해주세요:

- [ ] **실제 사용 테스트** - 직접 사용해보셨나요?
- [ ] **문서화** - 사용법이 명확하게 작성되었나요?
- [ ] **예시** - 구체적인 예시가 포함되어 있나요?
- [ ] **개인정보 제거** - 민감한 정보가 포함되어 있지 않나요?

---

## 🏷️ Commit Convention

```
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
refactor: 리팩토링
chore: 기타 변경
```

**예시:**
```
feat(droids): add market-research-agent
docs(playbooks): improve junior-ax onboarding guide
fix(commands): fix biz-idea prompt typo
```

---

## 🎖️ Craft 인증

**검증된 Craft**는 다음 기준을 충족해야 합니다:

1. **사용 실적** - 최소 3회 이상 실제 사용
2. **재현 가능** - 다른 사람도 같은 결과를 얻을 수 있음
3. **문서화** - 사용법이 명확함
4. **리뷰 통과** - 다른 바이브코더의 리뷰

인증된 Craft는 `craft/` 폴더에 버전별로 보관됩니다.

---

## 💬 커뮤니케이션

- **Issue** - 버그 리포트, 기능 제안
- **Discussion** - 질문, 아이디어 논의
- **PR** - 직접 기여

---

## 📜 라이선스

기여하신 내용은 MIT License로 공개됩니다.

---

**함께 만들어가는 vibe-company, 여러분의 기여를 기다립니다! 🚀**

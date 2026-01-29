# Checklist: Factory AI 설치 전 확인사항

## ⚡ 실행 직전 체크리스트

### 필수 조건
- [ ] 인터넷 연결 확인
- [ ] GitHub 계정 있음 (Factory 로그인용)
- [ ] Node.js 설치됨 (npm 사용 시)
  ```bash
  node --version  # v18 이상 권장
  ```

### 프로젝트 준비
- [ ] vibe-company repo 클론됨
  ```bash
  ls .factory/droids/  # Droid 파일들이 있어야 함
  ```

---

## ✅ 설치 완료 확인

```bash
# 1. .factory 폴더 확인
ls .factory/
# ✅ droids/, commands/, skills/ 폴더가 있으면 성공

# 2. Droid 파일 확인
ls .factory/droids/ | head -5
# ✅ .md 파일들이 있으면 성공

# 3. Claude Code에서 Droid 테스트
claude
# > @niche-market-hunter "테스트"
# ✅ Droid가 응답하면 성공
```

---

## 🚫 흔한 실수

- ❌ 프로젝트 루트가 아닌 곳에서 Droid 호출
- ❌ .factory 폴더를 .gitignore에 추가 (공유 안 됨)
- ❌ Droid 파일 형식 오류 (## Role, ## Instructions 필수)

---

## 📋 Droid 체크리스트

vibe-company에 포함된 주요 Droid:

- [ ] `niche-market-hunter-microsaas-scout.md`
- [ ] `codex-devils-advocate-validator.md`
- [ ] `b2b-mvp-architect.md`
- [ ] `playbook-creator.md`
- [ ] `research-deep-diver.md`

---

*체크리스트 모두 확인 후 [course.md](./course.md)로 진행*

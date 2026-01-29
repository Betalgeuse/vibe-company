# Checklist: Claude Code 설치 전 확인사항

## ⚡ 실행 직전 체크리스트

### 필수 조건
- [ ] 인터넷 연결 확인
- [ ] Anthropic 계정 있음 (없으면 https://console.anthropic.com 에서 생성)
- [ ] Node.js 설치됨 (npm 사용 시)
  ```bash
  node --version  # v18 이상 권장
  ```

### Mac 사용자
- [ ] Homebrew 설치됨 (권장)
  ```bash
  brew --version
  ```
- [ ] 또는 npm 사용 가능
  ```bash
  npm --version
  ```

### Windows 사용자
- [ ] Node.js 설치됨
  ```bash
  node --version
  npm --version
  ```
- [ ] PowerShell 또는 CMD 사용 가능

---

## ✅ 설치 완료 확인

```bash
# 1. 버전 확인
claude --version
# ✅ 버전 번호가 출력되면 성공

# 2. 인증 확인
claude
# ✅ 프롬프트가 나타나면 성공

# 3. 간단한 테스트
claude -p "Hello, Claude!"
# ✅ 응답이 오면 성공
```

---

## 🚫 흔한 실수

- ❌ Node.js 없이 npm install 시도
- ❌ API Key를 따옴표 없이 설정
- ❌ 터미널 재시작 안 하고 환경변수 사용 시도

---

*체크리스트 모두 확인 후 [course.md](./course.md)로 진행*

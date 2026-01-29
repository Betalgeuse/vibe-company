# Checklist: Gemini CLI 설치 전 확인사항

## ⚡ 실행 직전 체크리스트

### 필수 조건
- [ ] 인터넷 연결 확인
- [ ] Google 계정 있음
- [ ] Python 3.9 이상 설치됨 (Aider 사용 시)
  ```bash
  python3 --version
  ```

### Aider 사용 시 (권장)
- [ ] pip 또는 pipx 사용 가능
  ```bash
  pip --version
  # 또는
  pipx --version
  ```

### API Key 준비
- [ ] Gemini API Key 발급 완료
  - https://aistudio.google.com/apikey 방문
  - "Create API Key" 클릭
  - 키 복사해두기

---

## ✅ 설치 완료 확인

```bash
# 1. Aider 버전 확인
aider --version
# ✅ 버전 번호가 출력되면 성공

# 2. API Key 확인
echo $GEMINI_API_KEY
# ✅ 키가 출력되면 성공

# 3. Gemini 연결 테스트
aider --model gemini/gemini-2.0-flash-exp
# ✅ 프롬프트가 나타나면 성공

# 4. 간단한 테스트
# > Hello, Gemini!
# ✅ 응답이 오면 성공
```

---

## 🚫 흔한 실수

- ❌ Google AI Studio에서 API Key 발급 안 함
- ❌ 환경 변수 설정 후 터미널 재시작 안 함
- ❌ Python 버전이 3.9 미만

---

## 📋 모델 선택 가이드

| 용도 | 권장 모델 |
|------|----------|
| 빠른 작업 | `gemini/gemini-2.0-flash-exp` |
| 복잡한 코딩 | `gemini/gemini-2.0-pro-exp` |
| 안정성 중시 | `gemini/gemini-1.5-pro` |

---

*체크리스트 모두 확인 후 [course.md](./course.md)로 진행*

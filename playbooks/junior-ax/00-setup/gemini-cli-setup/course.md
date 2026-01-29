# Course: Gemini CLI 설치 방법

## 📖 Gemini CLI란?

**Gemini CLI = Google의 AI 코딩 어시스턴트**

- Google의 Gemini 2.5 Pro 모델 사용
- 100만 토큰 컨텍스트 윈도우 (긴 코드베이스 분석 가능)
- 무료 사용 가능 (Google 계정만 있으면 됨)
- 오픈소스 (Apache 2.0 라이선스)

## 🛠️ 설치 단계

### 1단계: Node.js 확인

**1.1 Node.js 버전 확인**
```bash
node --version
# v18 이상 필요
```

**Node.js가 없다면:**
```bash
# Mac (Homebrew)
brew install node

# Windows
# https://nodejs.org 에서 LTS 버전 다운로드
```

---

### 2단계: Gemini CLI 설치

**2.1 npm으로 전역 설치**
```bash
npm install -g @anthropic-ai/claude-code  # 잠깐! 이건 Claude
npm install -g @anthropic-ai/claude-code  # 아래가 Gemini

# Gemini CLI 설치
npm install -g @anthropic-ai/claude-code  # ❌ 이건 Claude
```

**실제 Gemini CLI 설치:**
```bash
# 방법 1: npx로 바로 실행 (설치 불필요)
npx https://github.com/anthropics/anthropic-quickstarts

# 방법 2: Google의 공식 Gemini CLI
npm install -g @anthropic-ai/claude-code  # ← 이건 Claude임

# Gemini는 아직 공식 CLI가 없음
# 대신 aider 또는 aichat 사용 권장
```

**⚠️ 2025년 1월 기준:**
Google의 공식 Gemini CLI는 아직 없습니다. 대안을 사용하세요:

---

### 대안 1: Aider (권장)

**Gemini 모델을 지원하는 AI 코딩 도구**

```bash
# 설치
pip install aider-chat

# 또는
pipx install aider-chat

# Gemini API Key 설정
export GEMINI_API_KEY="your-api-key"

# 실행
aider --model gemini/gemini-2.0-flash-exp
```

**Gemini API Key 발급:**
1. https://aistudio.google.com/apikey 방문
2. "Create API Key" 클릭
3. 키 복사

---

### 대안 2: aichat

**다양한 AI 모델을 지원하는 CLI 도구**

```bash
# Mac
brew install aichat

# 또는 cargo로 설치
cargo install aichat

# 설정
aichat --model gemini

# API Key 입력 프롬프트가 나타남
```

---

### 대안 3: Google AI Studio 웹

**CLI가 아닌 웹 인터페이스**

```
https://aistudio.google.com
```

- 무료
- 100만 토큰 컨텍스트
- 파일 업로드 가능

---

## 🎯 Aider + Gemini 설정 (권장)

### 전체 설정 과정

```bash
# 1. Python 확인
python3 --version  # 3.9 이상

# 2. Aider 설치
pip install aider-chat

# 3. Gemini API Key 발급
# https://aistudio.google.com/apikey

# 4. 환경 변수 설정
echo 'export GEMINI_API_KEY="your-api-key"' >> ~/.zshrc
source ~/.zshrc

# 5. 실행
cd ~/projects/my-project
aider --model gemini/gemini-2.0-flash-exp
```

### Aider 주요 명령어

```bash
# 기본 실행 (현재 디렉토리)
aider

# Gemini 모델 지정
aider --model gemini/gemini-2.0-flash-exp

# 특정 파일만 작업
aider src/main.py src/utils.py

# 읽기 전용 파일 추가
aider --read README.md

# 자동 커밋 비활성화
aider --no-auto-commits
```

### Aider 내부 명령어

```
/add <file>      # 파일 추가
/drop <file>     # 파일 제거
/ls              # 추가된 파일 목록
/diff            # 변경사항 보기
/undo            # 마지막 변경 취소
/help            # 도움말
/quit            # 종료
```

---

## 💡 팁

### Claude vs Gemini 언제 사용?

| 상황 | 권장 도구 |
|------|----------|
| 일반 코딩 | Claude Code |
| 긴 코드베이스 분석 | Gemini (100만 토큰) |
| 무료로 시작 | Gemini |
| Factory Droid 사용 | Claude Code |

### Gemini 모델 선택

| 모델 | 특징 |
|------|------|
| `gemini-2.0-flash-exp` | 빠름, 일반 작업용 |
| `gemini-2.0-pro-exp` | 복잡한 추론, 코딩 |
| `gemini-1.5-pro` | 안정적, 긴 컨텍스트 |

---

## 🚨 트러블슈팅

### ❌ "GEMINI_API_KEY not found"

**해결:**
```bash
# API Key 확인
echo $GEMINI_API_KEY

# 없으면 설정
export GEMINI_API_KEY="your-api-key"

# 영구 설정 (zsh)
echo 'export GEMINI_API_KEY="your-key"' >> ~/.zshrc
source ~/.zshrc
```

### ❌ "Rate limit exceeded"

**해결:**
- 무료 티어는 분당 요청 제한 있음
- 잠시 후 다시 시도
- 또는 유료 API 사용

### ❌ Aider 설치 실패

**해결:**
```bash
# pipx 사용 (권장)
pip install pipx
pipx install aider-chat

# 또는 가상환경에서
python -m venv aider-env
source aider-env/bin/activate
pip install aider-chat
```

---

## 🔗 다음 단계

✅ Gemini 설정 완료 후:
1. [Claude Code 설치](../claude-code-setup/) - Factory Droid 사용
2. [Git 첫 설정](../../01-vibe-coding-basics/git-first-setup/)
3. [화면 분할 환경](../../01-vibe-coding-basics/screen-split/)

---

## 📚 추가 자료

- **Aider 공식 문서:** https://aider.chat
- **Google AI Studio:** https://aistudio.google.com
- **Gemini API 문서:** https://ai.google.dev/docs

---

*"Gemini = 100만 토큰으로 긴 코드베이스 분석"*

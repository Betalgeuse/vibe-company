# Course: Claude Code 설치 방법

## 📖 Claude Code란?

**Claude Code = 터미널에서 실행하는 AI 코딩 어시스턴트**

- Anthropic의 Claude AI를 터미널에서 직접 사용
- 파일 읽기/쓰기, 코드 실행, Git 작업 등 가능
- 바이브코딩의 핵심 도구

## 🛠️ 설치 단계

### 1단계: Anthropic 계정 생성

**1.1 Anthropic 콘솔 접속**
```
https://console.anthropic.com 방문
```

**1.2 회원가입/로그인**
- Google 계정 또는 이메일로 가입
- 이메일 인증 완료

**결과:**
```
✅ Anthropic 계정 생성 완료
```

---

### 2단계: Claude Code 설치

#### 🍎 Mac 사용자

**2.1 Homebrew로 설치 (권장)**
```bash
# Terminal 열기 (Cmd + Space → "Terminal")
brew install claude-code
```

**또는 npm으로 설치:**
```bash
npm install -g @anthropic-ai/claude-code
```

#### 🪟 Windows 사용자

**2.1 npm으로 설치**
```bash
# PowerShell 또는 CMD 열기
npm install -g @anthropic-ai/claude-code
```

**Node.js가 없다면:**
```
https://nodejs.org 에서 LTS 버전 다운로드 및 설치
```

#### 🐧 Linux 사용자

```bash
npm install -g @anthropic-ai/claude-code
```

---

### 3단계: 설치 확인

```bash
claude --version

# 출력 예시:
# claude-code version 1.x.x
```

---

### 4단계: 인증 설정

**4.1 첫 실행 시 자동 인증**
```bash
claude

# 브라우저가 열리며 Anthropic 로그인 요청
# 로그인 후 터미널로 돌아오면 인증 완료
```

**4.2 수동 인증 (API Key 사용)**
```bash
# API Key 발급: https://console.anthropic.com/settings/keys
export ANTHROPIC_API_KEY="sk-ant-..."

# 또는 .bashrc / .zshrc에 추가
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.zshrc
source ~/.zshrc
```

---

### 5단계: 첫 테스트

**5.1 기본 대화**
```bash
claude

# Claude Code 시작됨
# > 안녕하세요! 무엇을 도와드릴까요?
```

**5.2 프로젝트 디렉토리에서 시작**
```bash
cd ~/projects/my-project
claude

# 현재 디렉토리의 파일들을 인식하고 작업 가능
```

**5.3 빠른 질문**
```bash
claude -p "package.json에서 dependencies 목록 보여줘"
```

---

## 🎯 핵심 명령어

```bash
# 기본 시작
claude

# 특정 디렉토리에서 시작
claude --cwd /path/to/project

# 한 줄 질문
claude -p "질문 내용"

# 도움말
claude --help
```

---

## 💡 팁

### 프로젝트별 설정

`.claude/settings.json` 파일로 프로젝트별 설정 가능:
```json
{
  "model": "claude-sonnet-4-20250514",
  "maxTokens": 4096
}
```

### 자주 쓰는 alias 설정

```bash
# ~/.zshrc 또는 ~/.bashrc에 추가
alias c="claude"
alias cc="claude --cwd"
```

---

## 🚨 트러블슈팅

### ❌ "command not found: claude"

**원인:** 설치 안 됨 또는 PATH 문제

**해결:**
```bash
# npm 전역 경로 확인
npm root -g

# PATH에 추가 (Mac/Linux)
export PATH="$PATH:$(npm root -g)/../bin"
```

### ❌ "Authentication failed"

**원인:** API Key 문제 또는 인증 만료

**해결:**
```bash
# 재인증
claude auth login

# 또는 API Key 재설정
export ANTHROPIC_API_KEY="새로운-키"
```

### ❌ "Rate limit exceeded"

**원인:** API 사용량 초과

**해결:**
- Anthropic 콘솔에서 사용량 확인
- 잠시 후 다시 시도
- 필요시 요금제 업그레이드

---

## 🔗 다음 단계

✅ Claude Code 설치 완료 후:
1. [Factory AI 설치](../factory-ai-setup/) - Droid 사용을 위해
2. [Git 첫 설정](../../01-vibe-coding-basics/git-first-setup/)
3. [화면 분할 환경](../../01-vibe-coding-basics/screen-split/)

---

## 📚 추가 자료

- **공식 문서:** https://docs.anthropic.com/claude-code
- **Claude 모델 정보:** https://www.anthropic.com/claude

---

*"Claude Code = 바이브코딩의 시작"*

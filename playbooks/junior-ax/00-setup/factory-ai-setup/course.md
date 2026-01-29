# Course: Factory AI 설치 방법

## 📖 Factory AI란?

**Factory AI = AI 코딩 에이전트 플랫폼**

- Custom Droid (전문 AI 에이전트) 생성 및 사용
- Command (자동화 워크플로우) 실행
- 팀과 Droid/Command 공유
- Claude의 command, subagents 형식과 호환

> 💡 Factory는 독립적인 플랫폼입니다. Claude Code와 별개로 동작하며, Claude의 command/subagents 형식을 그대로 가져와 사용할 수 있습니다.

## 🛠️ 설치 단계

### 1단계: Factory 계정 생성

**1.1 Factory 웹사이트 접속**
```
https://app.factory.ai 방문
```

**1.2 회원가입**
- GitHub 계정으로 로그인 (권장)
- 또는 이메일로 가입

**결과:**
```
✅ Factory 계정 생성 완료
```

---

### 2단계: Factory CLI 설치

#### 🍎 Mac 사용자

**Homebrew로 설치 (권장)**
```bash
brew install factory-ai/tap/factory
```

#### 🪟 Windows / 🐧 Linux 사용자

```bash
# npm으로 설치
npm install -g factory-cli
```

---

### 3단계: 설치 확인

```bash
# Factory 버전 확인
factory --version

# Factory 설정 확인
ls ~/.factory/
```

---

### 4단계: 인증 설정

**4.1 Factory 로그인**
```bash
# Factory 웹에서 로그인 후 CLI 연동
claude

# 또는 설정에서 Factory 연동
# Settings > Integrations > Factory AI
```

**4.2 프로젝트에 .factory 폴더 확인**
```bash
cd ~/projects/vibe-company
ls .factory/

# 출력:
# droids/
# commands/
# skills/
```

---

### 5단계: Droid 테스트

**5.1 Droid 목록 확인**
```bash
ls .factory/droids/

# 출력 예시:
# niche-market-hunter-microsaas-scout.md
# codex-devils-advocate-validator.md
# b2b-mvp-architect.md
# ...
```

**5.2 Droid 호출 테스트**

Claude Code 내에서:
```
@niche-market-hunter "1인 창업자를 위한 SaaS 아이디어"
```

또는 Task 도구 사용:
```
Task 도구로 niche-market-hunter droid 호출
```

---

## 🎯 핵심 개념

### Droid vs Command vs Skill

| 구분 | 설명 | 위치 |
|------|------|------|
| **Droid** | 전문 AI 에이전트 | `.factory/droids/` |
| **Command** | 자동화 워크플로우 | `.factory/commands/` |
| **Skill** | 재사용 가능한 기능 | `.factory/skills/` |

### Droid 파일 구조

```markdown
# droid-name.md

## Role
이 Droid의 역할

## Instructions
구체적인 지시사항

## Output Format
출력 형식
```

---

## 💡 팁

### 자주 쓰는 Droid

| Droid | 용도 |
|-------|------|
| `@niche-market-hunter` | 니치 마켓 탐색 |
| `@codex-devils-advocate` | 아이디어 검증 |
| `@b2b-mvp-architect` | MVP 설계 |
| `@playbook-creator` | Playbook 생성 |

### Custom Droid 만들기

```bash
# .factory/droids/ 폴더에 새 파일 생성
touch .factory/droids/my-custom-droid.md

# 또는 Claude Code에서
"새로운 Droid 만들어줘: SEO 분석 전문가"
```

---

## 🚨 트러블슈팅

### ❌ Droid가 인식되지 않음

**원인:** .factory 폴더가 없거나 경로 문제

**해결:**
```bash
# 프로젝트 루트에서 확인
ls -la .factory/droids/

# 없다면 vibe-company에서 복사
cp -r /path/to/vibe-company/.factory .
```

### ❌ "Permission denied"

**원인:** 파일 권한 문제

**해결:**
```bash
chmod -R 755 .factory/
```

### ❌ Droid 응답이 이상함

**원인:** Droid 파일 형식 오류

**해결:**
- Droid 파일의 Markdown 형식 확인
- `## Role`, `## Instructions` 섹션 필수

---

## 🔗 다음 단계

✅ Factory AI 설치 완료 후:
1. [Git 첫 설정](../../01-vibe-coding-basics/git-first-setup/)
2. [Droid 사용법](../../04-custom-droid/)
3. [Command 실행](../../05-command-flow/)

---

## 📚 추가 자료

- **Factory 공식 문서:** https://docs.factory.ai
- **Droid 작성 가이드:** https://docs.factory.ai/droids

---

*"Factory AI = Droid로 반복 작업 자동화"*

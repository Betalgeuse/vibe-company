# 🤖 AI PR Review 자동화

**AI에게 코드 리뷰 받고 자동으로 적용하기**

**[VIDEO: AI PR Review 완전 자동화 - 처음부터 끝까지]**


## 💡 핵심 아이디어

```
전통적 PR 리뷰              AI 자동 리뷰
      ↓                         ↓
사람이 일일이 리뷰         AI가 즉시 리뷰
      ↓                         ↓
기다리는 시간               대기 시간 0
      ↓                         ↓
수동으로 반영               자동으로 적용
```


---


## 🚀 Quick Start (3단계)

### 1단계: PR 생성하고 AI 리뷰 요청

```bash
# PR 생성
gh pr create --title "로그인 기능 추가" --body "Supabase 인증 구현"

# AI 리뷰 요청 (Gemini Code Assistant)
gh pr review --ai gemini
```

### 2단계: AI 리뷰 결과 읽기

```bash
# 리뷰 내용 확인
gh pr view --comments

# 또는
gh pr review list
```

### 3단계: 타당한 것만 자동 적용

```bash
# AI 리뷰 기반 자동 수정
gh pr apply-suggestions --auto
```


---


## 📖 상세 가이드


### Method 1: Gemini Code Assistant (추천!)

#### 설치

```bash
# GitHub CLI 설치
brew install gh

# Gemini extension 설치
gh extension install google/gh-gemini
```

#### 사용법

```bash
# 1. PR 생성
gh pr create \
  --title "feat: 사용자 프로필 API 추가" \
  --body "GET /api/user/:id 엔드포인트 구현"

# 2. AI 리뷰 요청
gh gemini review

# 3. 리뷰 결과 확인
gh pr view

# 4. 타당한 제안만 적용
gh gemini apply --interactive
```

#### 자동화 스크립트

```bash
#!/bin/bash
# ai-review.sh

# PR 번호 받기
PR_NUMBER=$1

if [ -z "$PR_NUMBER" ]; then
  echo "Usage: ./ai-review.sh <PR_NUMBER>"
  exit 1
fi

# 1. AI 리뷰 실행
echo "🤖 AI 리뷰 시작..."
gh gemini review $PR_NUMBER

# 2. 리뷰 결과 파싱
SUGGESTIONS=$(gh pr view $PR_NUMBER --json comments --jq '.comments[] | select(.author.login == "gemini-code-assist-bot")')

# 3. 타당성 체크 (AI가 판단)
echo "🧠 타당성 검증 중..."
VALID_SUGGESTIONS=$(echo "$SUGGESTIONS" | gh gemini validate)

# 4. 자동 적용
if [ ! -z "$VALID_SUGGESTIONS" ]; then
  echo "✅ 타당한 제안 적용 중..."
  gh gemini apply --suggestions "$VALID_SUGGESTIONS"
  
  # 커밋
  git add .
  git commit -m "fix: AI 리뷰 반영"
  git push
  
  echo "✅ 완료!"
else
  echo "ℹ️  적용할 제안 없음"
fi
```

#### 실행

```bash
chmod +x ai-review.sh
./ai-review.sh 123  # PR 번호 123
```


---


### Method 2: Claude/GPT API 직접 사용

#### 스크립트

```python
#!/usr/bin/env python3
# ai_pr_review.py

import os
import subprocess
import anthropic  # or openai

def get_pr_diff(pr_number):
    """PR diff 가져오기"""
    result = subprocess.run(
        f"gh pr diff {pr_number}",
        shell=True,
        capture_output=True,
        text=True
    )
    return result.stdout

def get_ai_review(diff):
    """AI에게 리뷰 요청"""
    client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))
    
    prompt = f"""
    다음 PR diff를 리뷰해주세요.
    
    리뷰 기준:
    1. 버그 가능성
    2. 성능 이슈
    3. 보안 문제
    4. 코드 스타일
    5. 베스트 프랙티스
    
    타당한 제안만 JSON 형식으로:
    {{
      "suggestions": [
        {{
          "file": "파일명",
          "line": 라인번호,
          "issue": "문제점",
          "fix": "수정 방법",
          "valid": true/false,
          "reason": "타당성 이유"
        }}
      ]
    }}
    
    PR Diff:
    {diff}
    """
    
    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}]
    )
    
    return message.content[0].text

def apply_suggestions(suggestions):
    """타당한 제안만 적용"""
    for suggestion in suggestions:
        if suggestion['valid']:
            print(f"✅ Applying: {suggestion['issue']}")
            # 파일 수정 로직
            apply_fix(
                suggestion['file'],
                suggestion['line'],
                suggestion['fix']
            )
        else:
            print(f"⏭️  Skipping: {suggestion['issue']}")

def apply_fix(file, line, fix):
    """실제 파일 수정"""
    # TODO: 파일 라인별 수정 구현
    pass

if __name__ == "__main__":
    import sys
    
    pr_number = sys.argv[1]
    
    # 1. PR diff 가져오기
    print(f"📖 PR #{pr_number} 읽는 중...")
    diff = get_pr_diff(pr_number)
    
    # 2. AI 리뷰 받기
    print("🤖 AI 리뷰 중...")
    review = get_ai_review(diff)
    
    # 3. 타당한 것만 적용
    print("✅ 제안 적용 중...")
    import json
    suggestions = json.loads(review)['suggestions']
    apply_suggestions(suggestions)
    
    print("✨ 완료!")
```

#### 사용법

```bash
# 의존성 설치
pip install anthropic

# 실행
export ANTHROPIC_API_KEY="your-key"
python ai_pr_review.py 123
```


---


### Method 3: GitHub Actions로 자동화

#### `.github/workflows/ai-review.yml`

```yaml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: AI 리뷰 실행
        uses: google/gemini-code-assist-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          gemini-api-key: ${{ secrets.GEMINI_API_KEY }}
          auto-apply: true
          only-valid: true
      
      - name: 변경사항 커밋
        if: steps.ai-review.outputs.changes-made == 'true'
        run: |
          git config --global user.name "AI Bot"
          git config --global user.email "bot@example.com"
          git add .
          git commit -m "fix: AI 리뷰 반영"
          git push
```

#### 설정

```bash
# Secrets 추가
gh secret set GEMINI_API_KEY
```


---


## 🎯 실전 예시

### 예시 1: 로그인 기능 PR

```bash
# 1. PR 생성
gh pr create --title "feat: 로그인 기능" --body "Supabase 인증"

# 2. AI 리뷰
gh gemini review

# 3. AI 피드백 예시:
# ✅ "비밀번호 해싱 추가 필요" → 타당함, 적용
# ❌ "변수명 userId를 id로 변경" → 불필요, 무시
# ✅ "에러 핸들링 추가" → 타당함, 적용

# 4. 타당한 것만 자동 적용
gh gemini apply --valid-only

# 5. 결과
✅ 비밀번호 해싱 추가됨
✅ 에러 핸들링 추가됨
⏭️  변수명 변경 무시됨
```

### 예시 2: 버그 수정 PR

```bash
# AI가 발견한 이슈들
# - 메모리 누수 (타당함) ✅
# - 타입 안정성 (타당함) ✅
# - 스타일 가이드 (불필요) ❌

# 타당한 것만 자동 적용
./ai-review.sh 456

# 결과:
✅ 메모리 누수 수정
✅ 타입 추가
⏭️  스타일 변경 무시
```


---


## 💡 AI 판단 기준

### 자동 적용 (타당함)

```
✅ 버그 가능성
✅ 보안 이슈
✅ 성능 문제
✅ 타입 안정성
✅ 에러 핸들링
✅ 메모리 누수
```

### 무시 (불필요)

```
❌ 코드 스타일만
❌ 네이밍만 변경
❌ 주석 추가만
❌ 주관적 의견
❌ 기능 변경 제안
```


---


## 🔧 설정 파일

### `.ai-review-config.json`

```json
{
  "provider": "gemini",
  "model": "gemini-1.5-pro",
  "autoApply": true,
  "validOnly": true,
  "criteria": {
    "bugs": true,
    "security": true,
    "performance": true,
    "style": false,
    "naming": false
  },
  "excludeFiles": [
    "*.test.ts",
    "*.md",
    "package-lock.json"
  ]
}
```


---


## 📊 효과 측정

### Before (수동 리뷰)

```
PR 생성 → 사람 기다림 (1-2일) → 리뷰 → 수동 반영
총 소요 시간: 2일
```

### After (AI 자동)

```
PR 생성 → AI 즉시 리뷰 (1분) → 자동 적용
총 소요 시간: 5분
```

**시간 절약: 99%** 🚀


---


## 🚨 주의사항

### ⚠️ 항상 확인 필요

```
중요한 변경:
- 보안 관련
- 데이터베이스 마이그레이션
- API 변경
- 배포 스크립트

→ AI 적용 후 사람이 최종 확인!
```

### ✅ 안전한 자동 적용

```
안전한 변경:
- 타입 추가
- 에러 핸들링
- 로깅 추가
- 주석 추가

→ 자동 적용해도 OK
```


---


## 📚 관련 자료

- [Gemini Code Assist 공식 문서](https://cloud.google.com/gemini/docs/code-assist)
- [GitHub CLI 가이드](https://cli.github.com/)
- [FCSR 측정](../04-measurement/fcsr-dashboard.md)


---


## 체크리스트

설정:
- [ ] GitHub CLI 설치
- [ ] Gemini extension 설치
- [ ] API 키 설정
- [ ] 설정 파일 생성

사용:
- [ ] PR 생성
- [ ] AI 리뷰 요청
- [ ] 타당성 확인
- [ ] 자동 적용
- [ ] 최종 검증


---


## 다음 단계

AI PR Review를 시작했다면:
1. [Quick Start](../01-getting-started/quick-start.md)로 다른 자동화도 배우기
2. [FCSR 측정](../04-measurement/fcsr-dashboard.md)으로 효과 확인
3. 팀에 공유하기

**Go Vibe, Stay Flow!** 🚀

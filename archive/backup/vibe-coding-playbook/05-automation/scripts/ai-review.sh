#!/bin/bash
# AI PR Review 자동화 스크립트
# 사용법: ./ai-review.sh <PR_NUMBER>

set -e

# 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# PR 번호 확인
PR_NUMBER=$1

if [ -z "$PR_NUMBER" ]; then
  echo -e "${RED}❌ PR 번호를 입력하세요${NC}"
  echo "사용법: ./ai-review.sh <PR_NUMBER>"
  exit 1
fi

echo -e "${BLUE}🤖 AI PR Review 시작...${NC}"
echo ""

# 1. PR diff 가져오기
echo -e "${YELLOW}📖 PR #${PR_NUMBER} 읽는 중...${NC}"
DIFF=$(gh pr diff $PR_NUMBER)

if [ -z "$DIFF" ]; then
  echo -e "${RED}❌ PR을 찾을 수 없습니다${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Diff 로드 완료${NC}"
echo ""

# 2. AI 리뷰 요청 (Gemini 또는 Claude)
echo -e "${YELLOW}🧠 AI 리뷰 요청 중...${NC}"

# Gemini 사용 (gh extension 설치 필요)
if gh extension list | grep -q "gh-gemini"; then
  echo "  → Gemini Code Assistant 사용"
  gh gemini review $PR_NUMBER
  
elif command -v anthropic &> /dev/null; then
  echo "  → Claude API 사용"
  # Claude API 호출 (별도 구현 필요)
  echo "$DIFF" | claude-review
  
else
  echo -e "${RED}❌ AI 도구가 설치되지 않았습니다${NC}"
  echo ""
  echo "다음 중 하나를 설치하세요:"
  echo "  1. Gemini: gh extension install google/gh-gemini"
  echo "  2. Claude: pip install anthropic"
  exit 1
fi

echo -e "${GREEN}✅ AI 리뷰 완료${NC}"
echo ""

# 3. 리뷰 결과 확인
echo -e "${YELLOW}📋 리뷰 결과 확인 중...${NC}"
gh pr view $PR_NUMBER --comments

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ AI PR Review 완료!${NC}"
echo ""
echo "다음 단계:"
echo "  1. gh pr view $PR_NUMBER  # 전체 리뷰 보기"
echo "  2. gh gemini apply --interactive  # 제안 적용"
echo ""

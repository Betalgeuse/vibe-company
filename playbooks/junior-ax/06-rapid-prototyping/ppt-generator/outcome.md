# AI 도구 탐색 & 실행 (PPT Generator 사례)

## 🎯 목표

X(트위터), GitHub 등에서 발견한 AI 도구를 **터미널 에이전트(Claude Code, Cursor 등)에게 그대로 먹여서** 설치부터 실행까지 완료한다.

## 핵심 메시지

> 도구 자체가 중요한 게 아니라, **"발견 → 에이전트에게 위임 → 실행"** 이 워크플로우가 중요하다.

## 이 태스크에서 배우는 것

1. X/GitHub에서 트렌드 AI 도구를 빠르게 발견하는 법
2. README의 설치 가이드를 에이전트에게 그대로 복붙하는 법
3. 에이전트가 알아서 설치/에러 해결/실행하는 과정을 지켜보는 법

## 측정 기준

| 항목 | 기준 |
|------|------|
| 도구 발견 → 실행 완료 | 30분 이내 |
| 직접 코딩/디버깅 | 0줄 (에이전트가 전부 처리) |
| 결과물 | 동작하는 결과물 확보 |

## 사례: NanoBanana PPT Skills

이 폴더의 예시는 아래 과정으로 만들어졌다:

1. X에서 "NanoBanana PPT" 트렌드 발견
2. GitHub README의 설치 가이드를 Claude Code에 복붙
3. 에이전트가 클론 → venv → 의존성 설치 → API 키 설정 → 호환성 에러 자동 수정
4. 슬라이드 플랜 JSON만 전달하면 20장 PPT 자동 생성

```text
결과물:
examples/vibe-coding-seminar/
├── images/slide-01~20.png   # AI가 생성한 슬라이드 이미지
├── index.html               # 브라우저 뷰어
└── vibe-coding-seminar.json # 슬라이드 플랜 (이것만 사람이 작성)
```

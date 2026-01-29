# 📚 Course (매뉴얼화된 의식의 흐름)

**단계별 상세 가이드**

영상으로 보여주고, 이제 글로 상세하게 설명합니다.


## 💡 Course의 목적

영상(Camcorder)만으로는 부족합니다:
- 빠르게 넘어간 부분을 확인하고 싶을 때
- 특정 단계만 다시 보고 싶을 때
- 인쇄해서 옆에 두고 보고 싶을 때

→ 문서로 된 상세 매뉴얼이 필요합니다!


## 📖 Course 구조

```
┌────────────────────────────────────────┐
│  Course = 따라하기 매뉴얼               │
├────────────────────────────────────────┤
│                                        │
│  Chapter 1: Git & Environment          │
│    → 환경 설정의 기초                   │
│                                        │
│  Chapter 2: Workflow & Debugging       │
│    → 작업 흐름과 문제 해결              │
│                                        │
│  Chapter 3: Architecture & Stack       │
│    → 기술 스택과 구조                   │
│                                        │
│  Chapter 4: Prompt Engineering         │
│    → AI에게 명령하는 법                │
│                                        │
└────────────────────────────────────────┘
```


## 📚 4개 Chapter 소개


### Chapter 1: Git & Environment

**주제**: 작업 환경의 기초

**다루는 내용**:
- Git 기본 개념 (게임 세이브 비유)
- Git Worktree 설정 (여러 작업 동시에)
- 화면 분할 규칙 (창 전환 없이)

**누구에게 필요한가요?**
- 프로젝트 시작하는 모든 사람
- Git을 써본 적 없는 초보자
- 작업 환경을 개선하고 싶은 사람

[자세히 보기 →](../03-course-details/01-git-environment.md)


---


### Chapter 2: Workflow & Debugging

**주제**: 효율적인 작업 흐름

**다루는 내용**:
- Reference 먼저 찾기
- 디버깅 원칙 (감이 아닌 데이터)
- Context Switching 방지

**누구에게 필요한가요?**
- 개발 속도를 높이고 싶은 사람
- 버그 해결에 시간이 오래 걸리는 사람
- 체계적인 작업 방식을 원하는 사람

[자세히 보기 →](../03-course-details/02-workflow-debugging.md)


---


### Chapter 3: Architecture & Stack

**주제**: 기술 스택 선택과 구조

**다루는 내용**:
- IaC (Infrastructure as Code) 필수
- Supabase 표준화
- CSS 트러블슈팅

**누구에게 필요한가요?**
- 새 프로젝트를 시작하는 사람
- 기술 스택을 고민하는 사람
- 인프라를 코드로 관리하고 싶은 사람

[자세히 보기 →](../03-course-details/03-architecture-stack.md)


---


### Chapter 4: Prompt Engineering

**주제**: AI에게 명령하는 기술

**다루는 내용**:
- 4요소 템플릿 (Context, Action, Constraint, Output)
- 나쁜 예 vs 좋은 예
- 프롬프트 유형별 템플릿

**누구에게 필요한가요?**
- AI 도구를 사용하는 모든 사람
- FCSR을 높이고 싶은 사람
- 명확한 지시 방법을 배우고 싶은 사람

[자세히 보기 →](../03-course-details/04-prompt-engineering.md)


---


## 🎯 학습 순서 추천


### 🆕 완전 초보자

```
1주차: Chapter 1 (Git & Environment)
  → 환경 세팅부터 시작

2주차: Chapter 4 (Prompt Engineering)
  → AI 사용법 익히기

3주차: Chapter 2 (Workflow & Debugging)
  → 작업 흐름 개선

4주차: Chapter 3 (Architecture & Stack)
  → 기술 스택 이해
```


### 🔧 중급 개발자

```
1주차: Chapter 4 (Prompt Engineering)
  → 즉시 FCSR 개선 가능

2주차: Chapter 2 (Workflow & Debugging)
  → 작업 속도 향상

3주차: Chapter 1 (Git & Environment)
  → 환경 최적화

4주차: Chapter 3 (Architecture & Stack)
  → 기술 스택 고도화
```


### 🚀 고급 개발자

관심 있는 Chapter부터 자유롭게!
- 모든 개념을 이미 알고 있다면 실전 팁만 흡수
- 팀에 적용할 부분 골라서 도입


---


## 📝 매뉴얼 작성 가이드


### 좋은 매뉴얼의 조건

#### ✅ 명확함
- 전문 용어는 설명 추가
- 각 단계는 구체적으로
- "적당히", "약간"같은 모호한 표현 금지

#### ✅ 완결성
- 전제 조건 명시
- 필요한 도구/권한 나열
- 예상 소요 시간 표시

#### ✅ 검증 가능
- 각 단계마다 확인 방법
- 성공/실패 판단 기준
- 트러블슈팅 포함


### 매뉴얼 템플릿

```markdown
# [작업명] 가이드

## 개요
[이 작업이 무엇인지, 왜 필요한지]

## 전제 조건
- [ ] 필요한 권한
- [ ] 설치해야 할 도구
- [ ] 사전 지식

## 단계별 가이드

### Step 1: [첫 단계]
**설명**: [무엇을 하는지]
**명령어**:
'''bash
[실제 명령어]
'''
**확인**: [성공했는지 확인하는 방법]

### Step 2: [다음 단계]
[반복...]

## 트러블슈팅
**문제 1**: [자주 발생하는 문제]
**해결**: [해결 방법]

## 체크리스트
- [ ] [확인 항목 1]
- [ ] [확인 항목 2]
'''
```


---


## 💡 작성 Tips


### Tip 1: 실제로 해보면서 작성
- 상상으로 쓰지 말고 직접 실행하며 기록
- 걸리는 시간도 실측

### Tip 2: 타인에게 테스트
- 작성자가 아닌 사람이 따라 해보게 하기
- 막히는 부분 수정

### Tip 3: 스크린샷 활용
- 중요한 화면은 캡처
- 클릭할 버튼은 빨간 박스 표시

### Tip 4: 자주 업데이트
- 과정이 바뀌면 즉시 수정
- 버전 관리 (v1.0, v1.1...)


---


## 📚 관련 자료

- [Camcorder 영상 촬영](./camcorder.md) - 매뉴얼 보완용 영상
- [Checklist 작성법](./checklist.md) - 매뉴얼 검증 기준
- [실전 예시](../appendix/examples/) - 잘 작성된 매뉴얼 예시


## 다음 단계

각 Chapter를 상세히 학습하세요:

1. [Git & Environment](../03-course-details/01-git-environment.md)
2. [Workflow & Debugging](../03-course-details/02-workflow-debugging.md)
3. [Architecture & Stack](../03-course-details/03-architecture-stack.md)
4. [Prompt Engineering](../03-course-details/04-prompt-engineering.md)

**Go Vibe, Stay Flow!** 🚀

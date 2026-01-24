# Biz Idea Droid 개선을 위한 레퍼런스

> **목적:** deepcode(Devin)를 벤치마크해서 만든 것처럼, biz idea 파이프라인을 개선할 레퍼런스 정리

---

## 🎯 핵심 벤치마크 레퍼런스

### 1. Devin AI (Cognition Labs) - 에이전트 아키텍처

**URL:** https://devin.ai

**핵심 인사이트:**
| 요소 | Devin 방식 | 우리 적용 |
|------|----------|----------|
| **자율 실행** | 계획 → 실행 → 검증 → 수정 루프 | Codex 3라운드 반박 시스템과 유사 |
| **도구 통합** | IDE, 브라우저, 터미널 직접 제어 | WebSearch, FetchUrl 적극 활용 |
| **Human-in-the-loop** | 필요시만 사람 개입 | Orchestrator가 REJECT 시 피드백 요청 |
| **작업 분해** | 큰 작업 → 작은 verifiable 단위로 | Step 1→1.5→2→3 파이프라인 |

**베낄 것:**
- [ ] 각 스텝 완료 후 **체크포인트 저장** (롤백 가능)
- [ ] 실패 시 **자동 재시도 + 다른 접근법** 시도
- [ ] **진행 상황 실시간 리포팅**

---
### 2. Multi-Agent Orchestration Patterns

**레퍼런스:**
- LangGraph (LangChain) - 그래프 기반 워크플로우
- CrewAI - 역할 기반 팀 구조
- Anthropic Multi-Agent Research System

**핵심 인사이트:**

| 패턴 | 설명 | 우리 적용 |
|------|------|----------|
| **Coordinator-Worker** | 중앙 조율자가 작업 분배 | Orchestrator → Hunter/Scout/Opus/Codex |
| **Parallel Execution** | 독립 작업 동시 실행 | Step 1 (Hunter) + Step 1.5 (Scout) 병렬화 가능 |
| **Iterative Refinement** | 피드백 루프로 품질 개선 | Codex 3라운드 시스템 |
| **Specialized Agents** | 각 에이전트가 전문 영역 담당 | 현재 구조와 일치 |

**베낄 것:**
- [ ] **Step 1 + Step 1.5 병렬 실행** (시간 단축)
- [ ] **Context 압축** - 각 에이전트에 필요한 정보만 전달
- [ ] **Fallback 전략** - 실패 시 대체 에이전트/방법

---
### 3. The Mom Test - 고객 검증 프레임워크

**저자:** Rob Fitzpatrick
**URL:** https://www.momtestbook.com

**핵심 원칙:**
1. **아이디어가 아닌 고객의 삶을 물어라**
2. **일반 의견이 아닌 구체적 경험을 물어라**
3. **유도 질문 금지**

**우리 적용 - Codex 검증 강화:**

| Mom Test 원칙 | 현재 Codex | 개선안 |
|--------------|-----------|--------|
| "좋은 아이디어야?" X | 기능 위주 검증 | **"고객이 실제로 이 문제로 돈을 썼나?"** 질문 추가 |
| 구체적 경험 | 추상적 가치 평가 | **경쟁사 실제 리뷰에서 Pain Point 추출** |
| 유도 질문 금지 | 긍정 편향 가능 | **"이 아이디어가 실패하는 이유"부터 시작** |

**베낄 것:**
- [ ] Codex에 **"고객이 현재 이 문제에 얼마를 쓰고 있나?"** 검증 추가
- [ ] **경쟁사 리뷰 분석** - G2/Capterra 부정 리뷰에서 Pain Point 추출
- [ ] **Commitment 검증** - "무료면 쓰겠다" vs "돈 내고도 쓰겠다" 구분

---
### 4. Y Combinator 아이디어 검증 프로세스

**URL:** https://www.ycombinator.com/library/7x-how-to-get-and-test-ideas

**핵심 프레임워크:**
```
1. 개인적으로 겪은 문제에서 시작
2. "왜 내가 이 문제를 풀기에 적합한가?" 질문
3. 빠르게 MVP 만들어서 테스트
4. 초기 사용자 피드백으로 반복 개선
```

**우리 적용:**

| YC 원칙 | 현재 파이프라인 | 개선안 |
|--------|---------------|--------|
| 개인 경험 기반 | 트렌드 기반 탐색 | **상혁님 강점 매칭 점수** 추가 |
| "왜 나인가?" | 일부 검증 | **Unfair Advantage 필수 섹션** |
| 빠른 MVP | 개발 기간 추정 | **2주 내 런칭 가능 여부** 체크 |

**베낄 것:**
- [ ] Hunter에 **"상혁님이 직접 겪은 문제인가?"** 가산점
- [ ] Opus에 **Unfair Advantage 섹션** 필수화
- [ ] Codex에 **"2주 내 첫 유료 고객 가능?"** 체크 추가

---
### 5. IdeaProof.io - AI 비즈니스 검증 플랫폼

**URL:** https://ideaproof.io

**기능:**
- AI 기반 시장 분석
- 경쟁사 인사이트 자동 생성
- 투자자용 비즈니스 플랜 생성

**베낄 것:**
- [ ] **TAM/SAM/SOM 자동 계산** - 웹 검색으로 시장 규모 데이터 수집
- [ ] **경쟁사 강도 점수화** - 단순 나열이 아닌 점수로 표현
- [ ] **투자자 피치 요약** 자동 생성

---
### 6. Prelaunch.com - 사전 검증 플랫폼

**URL:** https://prelaunch.com

**핵심 기능:**
- **Deposit 시스템** - 관심 표명이 아닌 실제 결제 의향 검증
- **AI 인터뷰어** - 고객 피드백 자동 수집
- **200M+ 잠재 고객 풀** 접근

**베낄 것:**
- [ ] Codex에 **"사전 결제 의향 검증 가능한가?"** 체크
- [ ] **랜딩페이지 → 대기자 → 유료 전환** 퍼널 설계 필수화

---
## 📊 개선 우선순위

### P0 (즉시 적용)

| 개선 항목 | 대상 Droid | 레퍼런스 |
|----------|-----------|----------|
| 경쟁사 최소 10개 분석 필수 | Reference Scout | 이미 적용 ✅ |
| 마케팅/세일즈 CAC/LTV 검증 | Codex | 이미 적용 ✅ |
| 전문가 의존성 필터링 | Hunter, Codex | 이미 적용 ✅ |

### P1 (다음 스프린트)

| 개선 항목 | 대상 Droid | 레퍼런스 |
|----------|-----------|----------|
| Step 1 + 1.5 병렬 실행 | Orchestrator | LangGraph |
| 경쟁사 리뷰 분석 (G2/Capterra) | Reference Scout | Mom Test |
| "고객이 현재 이 문제에 쓰는 돈" 검증 | Codex | Mom Test |
| Unfair Advantage 섹션 필수화 | Opus | YC Framework |

### P2 (향후 개선)

| 개선 항목 | 대상 Droid | 레퍼런스 |
|----------|-----------|----------|
| 체크포인트 저장 + 롤백 | Orchestrator | Devin |
| TAM/SAM/SOM 자동 계산 | Opus | IdeaProof |
| 투자자 피치 요약 자동 생성 | Opus | IdeaProof |
| 실패 시 자동 다른 접근법 시도 | Orchestrator | Devin |

---
## 🔧 구체적 Droid 수정 제안

### Orchestrator 수정

```markdown
## 병렬 실행 (신규)
- Step 1 (Hunter) + Step 1.5 (Scout) 동시 실행
- 두 결과 merge 후 Step 2 진행

## 체크포인트 (신규)
- 각 Step 완료 시 중간 결과 저장
- REJECT 시 이전 Step으로 롤백 가능

## Fallback 전략 (신규)
- Step 실패 시:
  1. 다른 키워드로 재시도
  2. 다른 검색 쿼리로 재시도
  3. 3회 실패 시 사용자에게 방향 질문
```

### Codex 수정

```markdown
## Mom Test 검증 (신규)
- "고객이 현재 이 문제에 얼마를 쓰고 있나?"
- "무료 대안 사용 중인가? 왜 돈을 내려 할까?"
- "경쟁사 부정 리뷰에서 발견된 Pain Point는?"

## Commitment 레벨 검증 (신규)
| 레벨 | 설명 | 판정 |
|------|------|------|
| 관심 | "좋아 보여요" | ❌ 불충분 |
| 시간 투자 | "베타 테스트 참여할게요" | 🟡 보통 |
| 돈 투자 | "지금 결제할게요" | ✅ 검증됨 |
```

### Reference Scout 수정

```markdown
## 경쟁사 리뷰 분석 (신규)
- G2, Capterra에서 경쟁사별 부정 리뷰 5개+ 수집
- 공통 불만 패턴 추출
- "이 불만을 우리가 해결할 수 있는가?" 평가

## 경쟁 강도 점수 (신규)
| 점수 | 의미 |
|------|------|
| 1-3 | 블루오션 (경쟁사 거의 없음) |
| 4-6 | 적정 경쟁 (차별화 가능) |
| 7-10 | 레드오션 (진입 어려움) |
```

---
## 📚 추가 참고 자료

1. **Anthropic Multi-Agent Research System**
   - URL: https://www.anthropic.com/engineering/multi-agent-research-system
   - 핵심: Lead agent가 subagent 오케스트레이션

2. **LangGraph Multi-Agent Workflows**
   - URL: https://blog.langchain.com/langgraph-multi-agent-workflows/
   - 핵심: 그래프 기반 상태 관리

3. **First Round Review - Startup Validation Tactics**
   - URL: https://review.firstround.com/unconventional-tactics-for-validating-your-startup-idea
   - 핵심: "고객이 아닌 동료 창업자에게 물어라"

4. **Lenny's Newsletter - How to Validate Your Startup Idea**
   - URL: https://www.lennysnewsletter.com/p/validating-your-startup-idea
   - 핵심: Flexport, Vanta 사례 기반 검증법

---
*Last Updated: 2026-01-07*


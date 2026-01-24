# Architect Hub - Product Requirements Document

**Version:** 1.0  
**Date:** 2026-01-17  
**Author:** Vibers Inc Product Team  
**Status:** Draft

---

## Executive Summary

### The Problem
외주 업체가 망하는 핵심 이유:
- **Scope Creep:** "이것도 해주세요" → 계약은 5천만원인데 1억어치 일함
- **소통 오류:** 고객 "우리가 원한 건 이게 아닌데요?"
- **관리 오버헤드:** 회의록 정리 2시간 + Linear 이슈 작성 2시간 = 하루 4시간

### The Solution
**Architect Hub**: 회의에서 Linear까지 한 번에 연결하는 프로젝트 관리 플랫폼

```
회의 입력 → AI QA 생성 → 양측 승인 → Dashboard 저장 → Linear 자동 발행
  10분        5분          24시간       즉시           즉시
```

### Success Metrics
- ✅ Architect 업무 시간 **50% 절감** (4시간 → 30분)
- ✅ Scope Creep **80% 방지** (추가 요청 자동 감지)
- ✅ 고객 만족도(NPS) **70+** (진행 상황 투명성)

---

## Problem Statement

### Current Pain Points

**For Architect:**
```
❌ 회의 후 기억 의존: "고객이 정확히 뭐라고 했더라?"
❌ 수동 문서화: 회의록 정리 2시간 소요
❌ 중복 확인: "이거 범위에 포함이에요?"
❌ Linear 이슈 작성: 회의 내용 → CACO 변환 2시간
❌ 진행 상황 공유: 매일 "지금 몇 %인가요?" 질문
```

**For Customer:**
```
❌ 블랙박스: "지금 어디까지 됐는지 모르겠어요"
❌ 불안감: "우리가 요청한 거 제대로 되고 있나?"
❌ 추가 비용 불명확: "이거 추가 비용인가요?"
```

**For Developer:**
```
❌ 불명확한 이슈: "배경을 모르겠어요"
❌ 요구사항 변경: "아까는 A라고 했는데 왜 B로 바뀌었죠?"
```

### Cost of Inaction
- **시간 낭비:** Architect 1명당 주 16시간 (월 64시간 = 8일)
- **수익성 악화:** 시간당 단가 50% 하락
- **재계약 실패:** 고객 불만족으로 일회성 프로젝트
- **팀 번아웃:** 야근과 반복 작업으로 이탈

---

## Target Users

### Primary: AX Architect (Main User)

**Profile:**
- 회사: Vibers Inc
- 역할: 고객 프로젝트 총괄
- 책임: 요구사항 관리, 팀 배정, 진행 관리

**Jobs to be Done:**
1. 회의 내용을 정확하게 기록하고 구조화
2. 고객 요구사항을 개발팀이 이해할 수 있게 전달
3. Scope를 명확히 하고 추가 요청 구분
4. 프로젝트 진행 상황을 고객에게 투명하게 공유

**Current Workflow:**
```
1. 고객 회의 (1-2시간)
2. 회의록 작성 (2시간)
3. Linear 이슈 생성 (2시간)
4. 고객에게 이메일 보고 (30분)
5. 개발자 질문 답변 (1시간)
---
총 6.5시간 / 프로젝트당
```

### Secondary: Customer Decision Maker

**Profile:**
- 직급: 임원, 팀장급
- 고민: "돈 쓰는 게 맞는지" 불안

**Needs:**
- 진행 상황 실시간 확인
- 요구사항이 제대로 반영되었는지 검증
- 추가 비용 발생 시 사전 알림

### Tertiary: Developer

**Profile:**
- 역할: Linear 이슈 기반 개발
- 고민: 불명확한 이슈로 시간 낭비

**Needs:**
- 명확한 Context (왜 이걸 만드는지)
- 구체적인 Action (정확히 뭘 만들지)
- Reference (비슷한 예시)

---

## Core Features

### Feature 1: Progress Bar (고객 여정 시각화)

**Purpose:** 프로젝트가 어느 단계인지 한눈에 파악

**5 Stages:**
```
[Discovery] ──●── [Proposal] ────○── [Development] ────○── [Delivery] ────○── [Handoff]
   완료            진행중 (40%)         대기                  대기              대기
```

**각 Stage별 정의:**

| Stage | 설명 | 완료 조건 |
|-------|------|----------|
| Discovery | 고객 문제 파악 | 첫 회의 + QA 승인 |
| Proposal | 제안서 및 견적 | 계약 체결 |
| Development | 실제 개발 | 모든 Linear 이슈 완료 |
| Delivery | 테스트 및 전달 | UAT 통과 |
| Handoff | 인수인계 | 문서 전달 + 교육 완료 |

**Progress Calculation:**
```javascript
// 자동 계산 로직
progress = (completedIssues / totalIssues) * 100

// Stage 전환 조건
if (allQAsApproved) stage = 'Proposal'
if (contractSigned) stage = 'Development'
if (allIssuesDone) stage = 'Delivery'
if (handsoffComplete) stage = 'Handoff'
```

**UI Elements:**
- 🟢 Green: 완료
- 🟡 Yellow: 진행중
- ⚪ Gray: 대기
- 🔴 Red: 지연 (예상 기간 초과)

---

### Feature 2: Meeting Intelligence (회의 → QA 자동 생성)

**Purpose:** 회의 내용을 구조화된 QA(Question & Answer)로 변환

**Input Options:**
1. 회의 녹음 파일 (mp3, wav) → Whisper API로 텍스트 변환
2. 회의록 직접 입력 (텍스트)
3. Slack 대화 복사 붙여넣기

**AI Processing:**
```
회의 내용 입력
      ↓
GPT-4가 핵심 추출
      ↓
QA 형식으로 변환
```

**QA Template:**
```markdown
## Meeting Summary
**Date:** 2026-01-17
**Participants:** 고객사 김팀장, Vibers 신대표, 김CTO
**Duration:** 1시간 30분

## Q&A

### Q1: 고객이 해결하려는 문제는?
**A1:** 
현재 오프라인 FC(금융컨설턴트)만 존재하여 온라인 고객이 이탈하고 있음.
온라인에서도 오프라인 FC 수준의 전문 상담을 제공해야 함.

**Scope:** ✅ 원래 범위
**Category:** Problem Definition

---

### Q2: 우리가 제공할 솔루션은?
**A2:**
멀티 에이전트 시스템(MAS) 기반 AI 금융 컨설턴트
- RAG 에이전트: 상품 정보 검색
- 추천 에이전트: 개인화 상품 추천
- 컴플라이언스 에이전트: 규제 준수 검증

**Scope:** ✅ 원래 범위
**Category:** Solution Design

---

### Q3: 범위(Scope)는 어디까지?
**A3:**
**Phase 1 (이번 계약):**
- ✅ RAG 에이전트 구현
- ✅ 상품 추천 에이전트
- ✅ 기본 컴플라이언스 체크

**제외 (Phase 2):**
- ❌ 실시간 채팅 UI
- ❌ 음성 인식
- ❌ 모바일 앱

**Scope:** ✅ 원래 범위
**Category:** Scope Definition

---

### Q4: 기술 스택은?
**A4:**
- Backend: Python FastAPI + Supabase
- AI: OpenAI GPT-4 + RAG (Pinecone)
- Frontend: Next.js 14 (고객사 기존 시스템 연동)

**Scope:** ✅ 원래 범위
**Category:** Technical Specification
```

**AI Prompt (내부):**
```
당신은 AX Architect의 보조 AI입니다.
회의 내용을 분석하여 구조화된 QA를 생성하세요.

[회의 내용]
{transcript}

[생성 규칙]
1. 핵심 질문 5-10개 추출
2. 각 질문에 명확한 답변 작성
3. Scope 여부 표시 (✅ 원래 범위 / ⚠️ 추가 요청)
4. Category 분류 (Problem/Solution/Scope/Technical/Timeline)
5. 애매한 부분은 "🔴 확인 필요" 표시

[출력 형식]
Markdown, Q&A 형식
```

**User Actions:**
- ✏️ Edit: QA 내용 수정
- 🗑️ Delete: 불필요한 QA 삭제
- ➕ Add: QA 수동 추가
- 🔄 Regenerate: AI 재생성

---

### Feature 3: Approval Workflow (양측 승인 시스템)

**Purpose:** 요구사항을 고객과 회사 양측이 명확히 승인

**Workflow:**
```
QA 생성 완료
      ↓
┌─────┴─────┐
│           │
▼           ▼
고객 승인   내부 승인
대기       대기
│           │
✅          ✅
│           │
└─────┬─────┘
      ↓
대시보드 저장
(확정된 요구사항)
      ↓
Linear 발행 가능
```

#### 3.1 Customer Approval (고객 승인)

**Approval Link 생성:**
```
https://architect-hub.vibers.ai/approve/{project_id}/{token}
```

**고객이 보는 화면:**
```
┌────────────────────────────────────────────────┐
│  Vibers Inc 프로젝트 확인 요청                    │
├────────────────────────────────────────────────┤
│  안녕하세요, 삼성생명 김팀장님                     │
│                                                │
│  2026-01-17 회의 내용을 정리했습니다.             │
│  아래 내용이 맞는지 확인 부탁드립니다.             │
│                                                │
│  ─────────────────────────────────────────     │
│                                                │
│  Q1: 해결하려는 문제                             │
│  온라인 고객을 위한 AI 상담 서비스               │
│                                                │
│  Q2: 제공할 솔루션                               │
│  멀티 에이전트 시스템(MAS)                       │
│  - RAG 에이전트                                 │
│  - 상품 추천 에이전트                            │
│  - 컴플라이언스 에이전트                         │
│                                                │
│  Q3: 범위 (Scope)                               │
│  ✅ Phase 1: 위 3개 에이전트만                   │
│  ❌ 제외: 실시간 채팅 UI, 음성 인식              │
│                                                │
│  ─────────────────────────────────────────     │
│                                                │
│  💬 수정 요청이 있으시면 댓글을 남겨주세요!        │
│                                                │
│  [댓글 1개]                                     │
│  김팀장: "Q3에 모바일 앱도 포함 가능한가요?"      │
│    → 신대표: "Phase 2로 분리 제안드립니다"       │
│                                                │
│  [ ✅ 승인합니다 ]  [ 💬 댓글 추가 ]            │
└────────────────────────────────────────────────┘
```

**기능:**
- 읽기 전용 (수정 불가)
- 댓글로 질문/수정 요청 가능
- 승인 버튼 클릭 시 타임스탬프 기록
- 이메일/슬랙으로 알림

#### 3.2 Internal Approval (내부 승인)

**Who:** Architect + CTO (2단계)

**Architect 검토 항목:**
```
[ ] Context가 명확한가?
[ ] Solution이 실현 가능한가?
[ ] Scope가 명확히 정의되었는가?
[ ] 예상 공수가 현실적인가? (인력/시간)
[ ] 기술 스택이 우리 역량에 맞는가?
```

**CTO 검토 항목:**
```
[ ] 기술적 리스크는?
[ ] 인프라 비용 예상은?
[ ] 보안/규제 이슈는?
[ ] 레퍼런스/유사 사례 있는가?
```

**Approval UI:**
```
┌────────────────────────────────────────────────┐
│  내부 검토: 삼성생명 AI FC 프로젝트               │
├────────────────────────────────────────────────┤
│                                                │
│  [QA 내용 표시]                                 │
│                                                │
│  ─────────────────────────────────────────     │
│                                                │
│  ✅ Architect 승인 완료 (신대표, 2026-01-17)    │
│                                                │
│  ⏳ CTO 승인 대기 중...                          │
│                                                │
│  [내부 메모]                                    │
│  - 유사 사례: 콘텐츠 테크놀로지스 (성공)         │
│  - 예상 공수: 6주 (2명)                         │
│  - 리스크: 금융 규제 컴플라이언스 (관리 필요)    │
│                                                │
│  [ ✅ 승인 ]  [ ❌ 반려 ]  [ 💬 질문하기 ]      │
└────────────────────────────────────────────────┘
```

#### 3.3 Approval States

| State | 설명 | 다음 액션 |
|-------|------|----------|
| Draft | QA 작성 중 | Architect 검토 |
| Pending Customer | 고객 승인 대기 | 고객 응답 대기 |
| Pending Internal | 내부 승인 대기 | CTO 검토 |
| Approved | 양측 승인 완료 | Linear 발행 |
| Rejected | 반려 | 재작성 |
| On Hold | 보류 | 추가 논의 |

---

### Feature 4: Smart Dashboard (프로젝트 현황판)

**Purpose:** 모든 정보를 한 화면에

**Main Dashboard:**
```
┌────────────────────────────────────────────────────────────────┐
│  Architect Hub                  🔔 3     👤 신대표     ⚙️      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  프로젝트 선택: [삼성생명 AI FC ▼]                               │
│                                                                │
│  ┌─────────────────────── Progress ─────────────────────────┐ │
│  │                                                           │ │
│  │  Discovery ──●── Proposal ──●── Development ──○── ...    │ │
│  │    완료          완료         진행중 (35%)                  │ │
│  │                                                           │ │
│  │  📊 35% Complete (7/20 tasks)                            │ │
│  │  📅 예상 완료: 2026-03-15 (2주 지연 예상)                  │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌─────────────────────── Scope ─────────────────────────┐   │
│  │                                                         │   │
│  │  ✅ 원래 범위: 10개 기능 (5,000만원)                      │   │
│  │  ⚠️  추가 요청: 3개 기능 (+1,500만원) → 승인 대기        │   │
│  │                                                         │   │
│  │  [상세 보기]                                            │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                │
│  ┌──────────── Recent Activities ─────────────┐              │
│  │                                             │              │
│  │  🎙️  2026-01-17  Kickoff Meeting           │              │
│  │     QA 생성 완료 → 고객 승인 대기            │              │
│  │     [상세]                                  │              │
│  │                                             │              │
│  │  📋  2026-01-16  제안서 제출                │              │
│  │     고객사 검토 중                           │              │
│  │     [상세]                                  │              │
│  │                                             │              │
│  └─────────────────────────────────────────────┘              │
│                                                                │
│  ┌──────────── Action Required ───────────────┐              │
│  │                                             │              │
│  │  ⚠️  고객 승인 필요: 3개 요구사항            │              │
│  │     [승인 요청 전송]                         │              │
│  │                                             │              │
│  │  ⚠️  Linear 이슈 생성 대기: 2개              │              │
│  │     [자동 생성]                              │              │
│  │                                             │              │
│  └─────────────────────────────────────────────┘              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Scope Tracker:**
```
┌────────────────────────────────────────────────┐
│  Scope Management                              │
├────────────────────────────────────────────────┤
│                                                │
│  원래 계약 범위 (Original Scope)                │
│  ✅ RAG 에이전트 구현                           │
│  ✅ 상품 추천 엔진                              │
│  ✅ 컴플라이언스 체크                           │
│  ... (총 10개)                                 │
│                                                │
│  💰 계약 금액: 5,000만원                        │
│  👥 예상 공수: 6주 (2명)                        │
│                                                │
│  ─────────────────────────────────────────     │
│                                                │
│  추가 요청 (Change Requests)                    │
│  ⚠️  [2026-01-17] 모바일 앱 추가                │
│     예상 비용: +800만원 (3주)                   │
│     상태: 고객 승인 대기                        │
│     [승인] [거절] [협의]                        │
│                                                │
│  ⚠️  [2026-01-18] 실시간 채팅 UI                │
│     예상 비용: +700만원 (2주)                   │
│     상태: 내부 검토 중                          │
│                                                │
│  ─────────────────────────────────────────     │
│                                                │
│  💡 Scope 변경 누적                             │
│  원래: 5,000만원 → 현재: 6,500만원 (+30%)       │
│                                                │
└────────────────────────────────────────────────┘
```

**Timeline View:**
```
Week 1  Week 2  Week 3  Week 4  Week 5  Week 6
  │       │       │       │       │       │
  ●───────●───────○───────○───────○───────○  Discovery
  │       │       │       │       │       │
          ●───────●───────●───────○───────○  Development
                          │       │       │
                          ●───────●───────○  Testing

● 완료  ○ 예정  ⚠️ 지연
```

---

### Feature 5: Linear Integration (자동 이슈 발행)

**Purpose:** 승인된 요구사항을 자동으로 Linear 이슈로 변환

**Workflow:**
```
승인된 QA
      ↓
AI가 CACO 형식으로 변환
      ↓
Linear API 호출
      ↓
이슈 생성 완료
      ↓
Dashboard에 링크 표시
```

**CACO Transformation:**

**Input (QA):**
```
Q: RAG 에이전트 구현
A: 상품 DB를 벡터화하고 사용자 질문에 맞는 상품 검색
```

**Output (Linear Issue):**
```
Title: [AI] RAG 에이전트 구현 - 상품 검색 기능

Description:
[Context]
고객사(삼성생명)는 온라인 고객에게 오프라인 FC 수준의 상담 제공 필요.
현재 상태: 상품 DB 존재, 검색 로직 없음.
목표: 사용자 질문에 맞는 상품을 정확히 검색.

[Action]
1. 상품 DB를 Pinecone에 벡터화 (임베딩)
2. 사용자 질문을 임베딩으로 변환
3. 코사인 유사도 기반 Top 3 상품 검색
4. 컨텍스트와 함께 GPT-4에 전달

[Constraint]
- Tech Stack: Python FastAPI + Pinecone + OpenAI
- 응답 시간: 2초 이내
- 정확도: Top 3 중 관련 상품 포함률 90% 이상
- 보안: 고객 개인정보 로그 금지

[Output]
- api/agents/rag_agent.py (RAG 로직)
- api/vectorize.py (임베딩 처리)
- tests/test_rag.py (유닛 테스트)
- 성능 테스트 결과 (100 queries 평균 응답 시간)

[Reference]
- 유사 사례: 콘텐츠 테크놀로지스 인플루언서 검색
- Pinecone Docs: https://docs.pinecone.io/
- OpenAI Embeddings: https://platform.openai.com/docs/guides/embeddings

Labels: feature, ai, backend, rag
Priority: High
Estimate: 8 points (3-5 days)
Assignee: @김개발자
```

**AI Prompt (내부):**
```
당신은 Linear 이슈 작성 전문가입니다.

[프로젝트 컨텍스트]
고객사: 삼성생명
프로젝트: AI FC (금융 컨설턴트)
기술 스택: Python FastAPI, Pinecone, OpenAI, Supabase
기간: 6주

[승인된 QA]
{qa_content}

[변환 규칙]
1. CACO 형식 필수 (Context, Action, Constraint, Output)
2. Context는 "왜"를 설명 (비즈니스 배경)
3. Action은 step-by-step (번호 매기기)
4. Constraint는 구체적 (성능, 보안, 기술)
5. Output은 측정 가능 (파일명, 테스트 기준)
6. Reference는 3개 이상
7. Estimate는 Fibonacci (1, 2, 3, 5, 8, 13)

[출력]
Linear에 바로 붙여넣을 수 있는 Markdown 형식
```

**Manual Override:**
- Architect가 AI 생성 이슈 검토
- 수정 후 Linear 발행
- 또는 자동 발행 (품질 신뢰 시)

**Sync:**
- Linear 이슈 상태 변경 → Dashboard 자동 업데이트
- Dashboard Progress 계산에 반영

---

## Technical Architecture

### Tech Stack

**Frontend:**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **State:** TanStack Query (React Query)
- **Charts:** Recharts (Progress visualization)

**Backend:**
- **Database:** Supabase PostgreSQL
- **Auth:** Supabase Auth
- **Realtime:** Supabase Realtime (live updates)
- **Functions:** Supabase Edge Functions (serverless)

**AI/ML:**
- **QA Generation:** OpenAI GPT-4
- **Transcription:** OpenAI Whisper API
- **Embeddings:** OpenAI text-embedding-3-small

**Integrations:**
- **Linear API:** Issue creation/sync
- **Slack API:** Notifications (Phase 2)
- **Email:** SendGrid (approval links)

**Infrastructure:**
- **Hosting:** Vercel (Next.js)
- **Database:** Supabase Cloud
- **CDN:** Vercel Edge Network
- **Monitoring:** Sentry + Vercel Analytics

### Database Schema

```sql
-- Projects
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  customer_id UUID REFERENCES customers(id),
  architect_id UUID REFERENCES users(id),
  status TEXT CHECK (status IN ('discovery', 'proposal', 'development', 'delivery', 'handoff')),
  progress_percentage INTEGER DEFAULT 0,
  original_budget DECIMAL(12, 2),
  additional_budget DECIMAL(12, 2) DEFAULT 0,
  estimated_weeks INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Meetings
CREATE TABLE meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  date DATE NOT NULL,
  duration_minutes INTEGER,
  recording_url TEXT,
  transcript TEXT,
  generated_qa JSONB, -- AI 생성 QA 저장
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Requirements (QA)
CREATE TABLE requirements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID REFERENCES meetings(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT CHECK (category IN ('problem', 'solution', 'scope', 'technical', 'timeline')),
  scope_type TEXT CHECK (scope_type IN ('original', 'additional')) DEFAULT 'original',
  additional_cost DECIMAL(10, 2) DEFAULT 0,
  customer_approved BOOLEAN DEFAULT FALSE,
  customer_approved_at TIMESTAMPTZ,
  internal_approved BOOLEAN DEFAULT FALSE,
  internal_approved_at TIMESTAMPTZ,
  internal_approved_by UUID REFERENCES users(id),
  linear_issue_id TEXT, -- Linear 이슈 ID
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Approvals
CREATE TABLE approvals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  requirement_id UUID REFERENCES requirements(id) ON DELETE CASCADE,
  approval_type TEXT CHECK (approval_type IN ('customer', 'internal')),
  approved BOOLEAN DEFAULT FALSE,
  approved_by UUID REFERENCES users(id),
  approved_at TIMESTAMPTZ,
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Linear Issues
CREATE TABLE linear_issues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  requirement_id UUID REFERENCES requirements(id),
  linear_issue_id TEXT UNIQUE, -- Linear의 이슈 ID
  linear_issue_number INTEGER, -- Linear의 이슈 번호
  title TEXT NOT NULL,
  caco_content TEXT, -- CACO 형식 저장
  status TEXT CHECK (status IN ('backlog', 'todo', 'in_progress', 'done', 'canceled')),
  priority TEXT CHECK (priority IN ('urgent', 'high', 'medium', 'low')),
  estimate INTEGER, -- Story points
  assignee_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Comments (고객 피드백)
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  requirement_id UUID REFERENCES requirements(id) ON DELETE CASCADE,
  author_type TEXT CHECK (author_type IN ('customer', 'architect', 'team')),
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT CHECK (role IN ('architect', 'developer', 'cto')) DEFAULT 'developer',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Customers
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### API Endpoints

**Authentication:**
```
POST   /api/auth/login          # Supabase Auth
POST   /api/auth/logout
GET    /api/auth/me
```

**Projects:**
```
GET    /api/projects            # List all projects
POST   /api/projects            # Create new project
GET    /api/projects/:id        # Get project detail
PATCH  /api/projects/:id        # Update project
DELETE /api/projects/:id        # Delete project
```

**Meetings:**
```
GET    /api/meetings?project_id=xxx    # List meetings
POST   /api/meetings                   # Create meeting
POST   /api/meetings/:id/generate-qa   # AI QA 생성
PATCH  /api/meetings/:id               # Update meeting
DELETE /api/meetings/:id               # Delete meeting
```

**Requirements:**
```
GET    /api/requirements?meeting_id=xxx   # List requirements
POST   /api/requirements                  # Create requirement
PATCH  /api/requirements/:id              # Update requirement
DELETE /api/requirements/:id              # Delete requirement
POST   /api/requirements/:id/approve     # Approve (customer or internal)
```

**Linear Integration:**
```
POST   /api/linear/create-issue          # Create Linear issue from requirement
POST   /api/linear/sync                  # Sync Linear status to DB
GET    /api/linear/issues?project_id=xxx # List Linear issues
```

**Approvals:**
```
GET    /api/approvals/:token             # Customer approval page (public)
POST   /api/approvals/:token/submit      # Submit customer approval
GET    /api/approvals/pending            # List pending approvals (internal)
POST   /api/approvals/:id/approve        # Internal approval
```

### AI Workflow (Supabase Edge Function)

**Function: `generate-qa`**
```typescript
// supabase/functions/generate-qa/index.ts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { meetingId, transcript } = await req.json()
  
  // 1. Call OpenAI GPT-4
  const qaResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: `당신은 AX Architect의 보조 AI입니다.
          회의 내용을 분석하여 구조화된 QA를 생성하세요.
          
          [생성 규칙]
          1. 핵심 질문 5-10개 추출
          2. 각 질문에 명확한 답변 작성
          3. Scope 여부 표시 (✅ 원래 범위 / ⚠️ 추가 요청)
          4. Category 분류 (problem/solution/scope/technical/timeline)
          5. 애매한 부분은 "🔴 확인 필요" 표시`
        },
        { role: 'user', content: transcript }
      ],
      response_format: { type: 'json_object' }
    })
  })
  
  const qaData = await qaResponse.json()
  
  // 2. Parse and save to DB
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_KEY')!
  )
  
  const qas = JSON.parse(qaData.choices[0].message.content)
  
  for (const qa of qas.questions) {
    await supabase.from('requirements').insert({
      meeting_id: meetingId,
      question: qa.question,
      answer: qa.answer,
      category: qa.category,
      scope_type: qa.scope_type
    })
  }
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

**Function: `create-linear-issue`**
```typescript
// supabase/functions/create-linear-issue/index.ts

serve(async (req) => {
  const { requirementId } = await req.json()
  
  // 1. Get requirement data
  const supabase = createClient(...)
  const { data: requirement } = await supabase
    .from('requirements')
    .select('*, meetings(*, projects(*))')
    .eq('id', requirementId)
    .single()
  
  // 2. Generate CACO format with GPT-4
  const cacoResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: `당신은 Linear 이슈 작성 전문가입니다.
          QA를 CACO 형식(Context, Action, Constraint, Output)으로 변환하세요.`
        },
        { 
          role: 'user', 
          content: `
            프로젝트: ${requirement.meetings.projects.name}
            Q: ${requirement.question}
            A: ${requirement.answer}
          `
        }
      ]
    })
  })
  
  const caco = await cacoResponse.json()
  
  // 3. Create Linear issue
  const linearResponse = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      'Authorization': Deno.env.get('LINEAR_API_KEY')!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        mutation CreateIssue($input: IssueCreateInput!) {
          issueCreate(input: $input) {
            issue {
              id
              number
              title
            }
          }
        }
      `,
      variables: {
        input: {
          teamId: 'TEAM_ID',
          title: `[AI] ${requirement.question}`,
          description: caco.choices[0].message.content,
          priority: 2, // High
          estimate: 5
        }
      }
    })
  })
  
  const linearData = await linearResponse.json()
  const issue = linearData.data.issueCreate.issue
  
  // 4. Save to DB
  await supabase.from('linear_issues').insert({
    requirement_id: requirementId,
    linear_issue_id: issue.id,
    linear_issue_number: issue.number,
    title: issue.title,
    caco_content: caco.choices[0].message.content,
    status: 'backlog'
  })
  
  // 5. Update requirement
  await supabase
    .from('requirements')
    .update({ linear_issue_id: issue.id })
    .eq('id', requirementId)
  
  return new Response(JSON.stringify({ success: true, issue }))
})
```

---

## User Flows

### Flow 1: Discovery to Development

```
Architect가 고객과 첫 회의
          ↓
프로젝트 생성 (Discovery 단계)
          ↓
회의록 입력 (텍스트 or 녹음)
          ↓
[Generate QA] 버튼 클릭
          ↓
AI가 5-10개 QA 자동 생성
          ↓
Architect 검토 및 수정
          ↓
[Send for Approval] 클릭
          ↓
┌─────────┴─────────┐
│                   │
고객 이메일 발송    내부 검토 요청
│                   │
고객 승인 링크 클릭  CTO 검토
│                   │
고객 승인 ✅        CTO 승인 ✅
│                   │
└─────────┬─────────┘
          ↓
대시보드에 "Approved" 표시
          ↓
[Create Linear Issues] 클릭
          ↓
AI가 CACO 형식으로 이슈 생성
          ↓
Linear에 자동 발행
          ↓
팀원에게 할당
          ↓
프로젝트 단계 자동 변경: Development
```

### Flow 2: Scope Change Request

```
개발 중 고객이 추가 요청
          ↓
Architect가 새 회의 생성
          ↓
회의록에 "추가 요청" 기록
          ↓
AI QA 생성 시 "⚠️ 추가 요청" 자동 감지
          ↓
예상 비용/기간 입력
          ↓
Scope Tracker에 표시
          ↓
고객 승인 요청 (추가 비용 명시)
          ↓
고객 승인 or 거절
          ↓
승인 시: Linear 이슈 생성
거절 시: "Out of Scope" 표시
```

### Flow 3: Customer Self-Service

```
고객이 프로젝트 상황 궁금
          ↓
Dashboard URL 접속
(read-only, 비밀번호 불필요)
          ↓
Progress Bar 확인 (35%)
          ↓
"Development 진행중" 확인
          ↓
Scope Tracker에서 원래 범위 확인
          ↓
Linear 이슈 현황 확인 (7/20 완료)
          ↓
예상 완료일 확인
          ↓
안심하고 기다림 (전화/이메일 불필요)
```

---

## MVP Scope (Phase 1: 6주)

### Must Have (필수)

**Week 1-2: Foundation**
- ✅ Supabase 프로젝트 세팅
- ✅ Next.js 14 + TypeScript 보일러플레이트
- ✅ Shadcn UI 설치 (Linear 스타일)
- ✅ Database schema 생성
- ✅ Authentication (Architect 로그인)

**Week 3-4: Core Features**
- ✅ 프로젝트 생성/조회
- ✅ Progress Bar (5 stages)
- ✅ 회의 입력 + AI QA 생성 (GPT-4)
- ✅ QA 편집 (CRUD)

**Week 5-6: Approval & Dashboard**
- ✅ 고객 승인 링크 (public page)
- ✅ 내부 승인 (Architect + CTO)
- ✅ Dashboard (프로젝트 현황)
- ✅ Linear 이슈 수동 생성 (CACO 템플릿 복사)

### Nice to Have (Phase 2)

**Week 7-8: Automation**
- Linear 이슈 자동 생성 (AI → Linear API)
- Linear 양방향 동기화 (status sync)

**Week 9-10: Intelligence**
- 회의 녹음 → 자동 텍스트 (Whisper)
- Scope Creep 자동 감지 (AI alert)
- 예상 비용 자동 계산

**Week 11-12: Collaboration**
- 슬랙 알림 (승인 요청, 이슈 완료)
- 댓글 기능 (고객 피드백)
- 팀 초대 (여러 Architect)

### Won't Have (Not Now)

- ❌ Gantt Chart
- ❌ 예산/수익 트래킹
- ❌ 타임 트래킹
- ❌ 파일 첨부
- ❌ 버전 관리 (QA diff)

---

## Success Metrics

### Primary KPIs

**1. Architect Time Savings**
- **목표:** 50% 절감
- **측정:**
  - Before: 회의록 2시간 + Linear 2시간 = 4시간
  - After: 회의 입력 10분 + QA 리뷰 20분 = 30분
  - **절감: 87.5%** (목표 초과 달성)

**2. Scope Creep Prevention**
- **목표:** 80% 방지
- **측정:**
  - 추가 요청 발생 시 자동 감지율
  - 추가 비용 명시 및 고객 승인 획득률

**3. Customer Satisfaction (NPS)**
- **목표:** 70+
- **측정:** 프로젝트 완료 후 설문조사
  - "진행 상황을 투명하게 확인할 수 있었나요?"
  - "요구사항이 정확히 반영되었나요?"

### Secondary Metrics

**4. Linear Issue Quality (ICS)**
- **목표:** 85% 이상
- **측정:** 개발자가 추가 질문 없이 작업 시작 가능한 비율

**5. Approval Speed**
- **목표:** 평균 24시간 이내
- **측정:** 승인 요청 → 고객 승인 완료 시간

**6. Re-contract Rate**
- **목표:** 60% → 80% 증가
- **측정:** Phase 1 완료 후 Phase 2 계약 체결 비율

### Vanity Metrics (참고용)

- 생성된 QA 개수
- 프로젝트 개수
- Linear 이슈 개수
- 대시보드 조회수

---

## Go-to-Market Strategy

### Phase 0: Internal Dogfooding (Week 1-6)

**Target:** Vibers Inc 내부 3개 프로젝트
- 삼성생명 AI FC
- 콘텐츠 테크놀로지스 인플루언서 마케팅
- 신규 프로젝트 1개

**Goal:**
- 실제 사용하며 버그 발견
- 피드백 수집
- 사용성 개선

### Phase 1: Beta Launch (Week 7-12)

**Target:** Vibers Inc 모든 프로젝트
- Architect 전원 사용
- 고객사에 Dashboard 공개

**Goal:**
- 80% 이상 만족도
- FCSR 80% 달성
- 재계약률 70% 달성

### Phase 2: External Sales (Week 13+)

**Target:** 다른 외주/컨설팅 업체
- 국내 AX 컨설팅 업체 10개
- IT 외주 개발사 20개

**Pricing:**
```
Free Tier
- 1 프로젝트
- 기본 기능
- Linear 수동 생성

Pro Tier - $99/month
- 무제한 프로젝트
- AI QA 생성
- Linear 자동 생성
- 우선 지원

Enterprise - Custom
- Multi-team
- SSO
- API access
- Dedicated support
```

**Marketing:**
- 블로그: "외주 업체가 망하는 이유와 해결책"
- Case Study: "Vibers가 Architect 시간을 50% 줄인 방법"
- 데모 영상: YouTube
- 컨퍼런스: 국내 스타트업 밋업

---

## Risk Assessment

### Technical Risks

**Risk 1: AI QA 품질 낮음**
- **Impact:** High
- **Probability:** Medium
- **Mitigation:**
  - Architect 검토 필수 (자동 승인 금지)
  - 초기엔 템플릿 제공 (AI 보조 역할만)
  - 승인된 QA로 학습 데이터 개선

**Risk 2: Linear API Rate Limiting**
- **Impact:** Medium
- **Probability:** Low
- **Mitigation:**
  - Queue 시스템 (순차 발행)
  - Webhook으로 sync (polling 최소화)

**Risk 3: OpenAI API 비용 급증**
- **Impact:** Medium
- **Probability:** Medium
- **Mitigation:**
  - GPT-4 Turbo 사용 (저렴)
  - Caching으로 중복 요청 방지
  - 월 $500 예산 설정 (알림)

### Business Risks

**Risk 4: 고객이 승인 링크 안 봄**
- **Impact:** High
- **Probability:** Medium
- **Mitigation:**
  - 이메일/슬랙 리마인더 (3일마다)
  - 모바일 친화적 UI
  - "승인 안 하면 작업 시작 안 됨" 명시

**Risk 5: Architect가 안 쓰면?**
- **Impact:** High
- **Probability:** Low
- **Mitigation:**
  - 내부 강제 사용 정책
  - 인센티브 (시간 절감 보너스)
  - 지속적 UX 개선

**Risk 6: 경쟁사 출현**
- **Impact:** Medium
- **Probability:** Low (초기 시장)
- **Mitigation:**
  - 빠른 MVP 출시 (First Mover)
  - Vibers 사례로 입증
  - Network Effect (고객사 데이터 누적)

---

## Implementation Roadmap

### Phase 1: MVP (Week 1-6)

| Week | Milestone | Deliverables |
|------|-----------|--------------|
| 1 | Foundation | Supabase setup, Next.js boilerplate |
| 2 | Auth & Schema | Login, DB tables, seed data |
| 3 | Core UI | Dashboard, Project page, Meeting page |
| 4 | AI Integration | GPT-4 QA generation, CACO template |
| 5 | Approval Flow | Customer link, Internal approval |
| 6 | Testing & Deploy | Bug fixes, Vercel deploy, dogfooding |

### Phase 2: Automation (Week 7-10)

| Week | Milestone | Deliverables |
|------|-----------|--------------|
| 7 | Linear API | Auto issue creation, CACO AI generation |
| 8 | Sync | Linear status → Dashboard progress |
| 9 | Notifications | Slack webhook, Email reminders |
| 10 | Multi-project | Support 5+ projects, search/filter |

### Phase 3: Intelligence (Week 11-14)

| Week | Milestone | Deliverables |
|------|-----------|--------------|
| 11 | Whisper | Meeting recording → auto transcript |
| 12 | Scope AI | Auto-detect change requests, cost estimate |
| 13 | Analytics | Project health score, profitability |
| 14 | Beta Launch | External pilot (3 companies) |

### Phase 4: Scale (Week 15+)

- Team collaboration (multiple Architects)
- Customer portal (self-service)
- API for external integrations
- Enterprise features (SSO, audit logs)

---

## Team & Resources

### Required Team (MVP)

**Product:**
- 1x Product Owner (Architect 겸임 가능)

**Development:**
- 1x Full-stack Developer (Next.js + Supabase)
- 1x AI Engineer (GPT-4 integration, prompt engineering)

**Design:**
- 0.5x Product Designer (Linear 스타일 참고, 커스터마이징 최소)

**Total:** 2.5명 FTE

### Estimated Cost (6주 MVP)

| Item | Cost | Notes |
|------|------|-------|
| Development | $30K | 2.5명 x 6주 x $2K/week |
| Infrastructure | $500 | Supabase Pro, Vercel Pro |
| OpenAI API | $500 | GPT-4 + Whisper |
| Tools | $200 | Figma, Linear, Slack |
| **Total** | **$31.2K** | ~4천만원 |

---

## Appendix

### A. CACO Template Example

```markdown
Title: [Category] Feature Name - Brief Description

[Context]
고객사: {회사명}
프로젝트: {프로젝트명}
현재 상태: {무엇이 있고 무엇이 없는지}
비즈니스 목표: {왜 이게 필요한지}

[Action]
1. {첫 번째 단계}
2. {두 번째 단계}
3. {세 번째 단계}
4. {네 번째 단계}

[Constraint]
- Tech Stack: {기술 스택}
- Performance: {성능 요구사항}
- Security: {보안 요구사항}
- Design: {디자인 가이드}
- Timeline: {예상 소요 시간}

[Output]
- {파일명 1} (설명)
- {파일명 2} (설명)
- {테스트 결과} (측정 기준)
- {문서} (필요 시)

[Reference]
- {유사 사례}
- {공식 문서}
- {우리 프로젝트 예시}

Labels: {label1}, {label2}
Priority: {urgent|high|medium|low}
Estimate: {1|2|3|5|8|13} points
Assignee: @{개발자}
```

### B. Approval Email Template

**Subject:** [Vibers] 프로젝트 요구사항 확인 요청 - {프로젝트명}

```
안녕하세요, {고객사} {담당자}님

{날짜} 회의 내용을 정리하여 보내드립니다.
아래 링크에서 내용을 확인하시고, 맞다면 "승인" 버튼을 클릭해주세요.

🔗 확인 링크: https://architect-hub.vibers.ai/approve/{token}

승인해주시면 다음 단계로 진행하겠습니다:
1. 개발팀에 작업 할당
2. Linear 이슈 생성
3. 개발 시작

수정 요청이 있으시면 링크 내에서 댓글로 남겨주세요.

감사합니다.

Vibers Inc
신대표 드림
```

### C. FAQ

**Q1: 고객이 승인을 안 하면?**
A: 3일마다 리마인더 발송. 승인 전까진 개발 시작 안 함 (Scope 명확화 필수).

**Q2: AI가 QA를 잘못 생성하면?**
A: Architect가 수정 후 승인 요청. 학습 데이터로 누적하여 품질 개선.

**Q3: Linear 없는 회사는?**
A: Phase 2에서 Jira, GitHub Issues 등 추가 연동 고려.

**Q4: 보안은?**
A: Supabase Row Level Security로 프로젝트별 접근 제어. 고객 승인 링크는 JWT 토큰 기반.

**Q5: 가격은?**
A: 내부 사용 무료. 외부 판매 시 Pro $99/month.

---

## Conclusion

**Architect Hub**는 외주 업체가 망하는 핵심 이유(Scope Creep, 소통 오류, 관리 오버헤드)를 소프트웨어로 해결합니다.

**핵심 가치:**
- 회의에서 Linear까지 **한 번에 연결**
- 고객과의 소통을 **투명하게**
- Scope를 **명확하게**
- Architect 시간을 **50% 절감**

**Next Steps:**
1. 이 PRD 검토 및 피드백 (1주)
2. MVP 개발 시작 (6주)
3. 내부 Dogfooding (3주)
4. Beta Launch (고객사 공개)

**"회의록 정리 2시간 → 10분으로."**

---

**문서 버전 관리:**
- v1.0 (2026-01-17): Initial draft
- v1.1 (예정): 피드백 반영
- v2.0 (예정): MVP 완성 후 업데이트

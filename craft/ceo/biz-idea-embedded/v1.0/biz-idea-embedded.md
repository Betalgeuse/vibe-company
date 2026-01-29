{
  "command": "biz-idea-embedded",
  "role": "ceo",
  "action": "invoke_pipeline",
  "objective": "Audience-First 신사업 아이디어 발굴 (The Embedded Entrepreneur 방법론)",
  "version": "1.0",
  "methodology": "Arvid Kahl - The Embedded Entrepreneur",
  
  "philosophy": {
    "core_principle": "Audience First, Product Second",
    "key_insight": "아이디어를 만들고 고객을 찾지 말고, 고객을 먼저 찾고 그들의 문제를 해결하라",
    "anti_pattern": "키워드 → AI가 아이디어 생성 → 숫자 추정 검증",
    "target_pattern": "창업자 프로필 → 커뮤니티 발견 → 실제 문제 관찰 → 솔루션 co-create"
  },

  "execution_flow": [
    {
      "step": 0,
      "id": "founder_profile",
      "name": "Founder Profile Input",
      "type": "interactive_input",
      "description": "창업자 자신에 대한 정보 수집",
      "required": true,
      
      "input_sections": {
        "professional_background": {
          "title": "💼 직업/전문성",
          "questions": [
            {
              "id": "current_job",
              "question": "현재 직업/역할은?",
              "example": "스타트업 PM, 프리랜서 개발자, 대기업 마케터",
              "why": "현재 가장 잘 아는 도메인"
            },
            {
              "id": "past_jobs",
              "question": "과거 경력은? (최근 5년)",
              "example": "금융권 백엔드 개발 2년, 이커머스 PM 3년",
              "why": "숨겨진 도메인 지식 발굴"
            },
            {
              "id": "expertise",
              "question": "남들보다 잘 아는 분야는?",
              "example": "결제 시스템, SEO, B2B 영업, 데이터 분석",
              "why": "unfair advantage 파악"
            }
          ]
        },
        
        "community_activity": {
          "title": "🌐 커뮤니티 활동",
          "questions": [
            {
              "id": "online_communities",
              "question": "활동하는 온라인 커뮤니티는? (URL 포함)",
              "example": "r/SaaS, Indie Hackers, 디스콰이엇, 특정 Slack/Discord",
              "why": "이미 embedded된 커뮤니티 파악"
            },
            {
              "id": "social_follows",
              "question": "트위터/링크드인에서 주로 팔로우하는 사람들은?",
              "example": "SaaS 창업자들, AI 연구자들, 마케터들",
              "why": "관심 분야의 tribe 파악"
            },
            {
              "id": "content_consumption",
              "question": "정기적으로 보는 뉴스레터/팟캐스트/유튜브는?",
              "example": "GeekNews, 요즘IT, My First Million 팟캐스트",
              "why": "깊이 관여하는 분야 파악"
            }
          ]
        },
        
        "pain_and_spending": {
          "title": "😤 고통 & 💰 지출",
          "questions": [
            {
              "id": "recent_frustrations",
              "question": "최근 '이거 왜 이렇게 불편해?'라고 느낀 것 3가지는?",
              "example": "회의록 정리, 고객 문의 답변, 리포트 작성, 일정 조율",
              "why": "직접 겪은 문제 = 가장 잘 이해하는 문제"
            },
            {
              "id": "past_pain",
              "question": "전 직장/프로젝트에서 가장 짜증났던 반복 업무는?",
              "example": "수동 데이터 입력, 승인 대기, 보고서 포맷팅",
              "why": "다른 사람도 겪을 가능성 높은 문제"
            },
            {
              "id": "current_subscriptions",
              "question": "현재 유료로 쓰는 SaaS/도구는?",
              "example": "Notion $10/월, Figma $15/월, ChatGPT $20/월",
              "why": "돈 쓸 의향 있는 분야"
            },
            {
              "id": "wished_tools",
              "question": "'이런 도구 있으면 좋겠다'고 생각한 것은?",
              "example": "Slack 메시지 자동 요약, 미팅 액션아이템 추출",
              "why": "직접적인 아이디어 힌트"
            }
          ]
        },
        
        "personal_context": {
          "title": "🎯 개인 맥락",
          "questions": [
            {
              "id": "available_time",
              "question": "주당 사이드 프로젝트에 쓸 수 있는 시간은?",
              "example": "주 10시간, 주 20시간, 풀타임 가능",
              "why": "현실적인 MVP 범위 설정"
            },
            {
              "id": "skills",
              "question": "직접 할 수 있는 것은? (코딩/디자인/마케팅/영업)",
              "example": "프론트엔드 가능, 디자인 Figma로 간단히, 콜드메일 경험 있음",
              "why": "MVP 실행 가능성"
            },
            {
              "id": "network",
              "question": "연락 가능한 잠재 고객이 있나? 몇 명?",
              "example": "전 직장 동료 PM 10명, 스타트업 대표 5명",
              "why": "초기 고객 확보 가능성"
            },
            {
              "id": "motivation",
              "question": "왜 창업/사이드 프로젝트를 하고 싶나?",
              "example": "수익 다각화, 퇴사 준비, 재미, 특정 문제 해결",
              "why": "지속 가능성 판단"
            }
          ]
        }
      },
      
      "output": "founder_profile.yaml"
    },
    
    {
      "step": 1,
      "id": "audience_discovery",
      "name": "Audience Discovery (5A Framework)",
      "description": "Arvid Kahl의 5단계 Audience Discovery",
      "input_from": ["founder_profile"],
      
      "framework": {
        "name": "5A Framework",
        "source": "The Embedded Entrepreneur",
        "steps": [
          {
            "id": "awareness",
            "name": "Awareness",
            "question": "내가 속한/속할 수 있는 tribe는?",
            "action": "창업자 프로필에서 후보 커뮤니티 3-5개 도출",
            "output": "candidate_tribes[]"
          },
          {
            "id": "affinity",
            "name": "Affinity",
            "question": "이 tribe의 성공을 얼마나 바라는가?",
            "scoring": {
              "q1": "이들이 성공하면 얼마나 기쁜가? (1-10)",
              "q2": "이들의 문제가 의미있게 느껴지나? (1-10)",
              "q3": "이 분야에서 5년 일할 수 있나? (1-10)",
              "threshold": "≥20/30"
            },
            "output": "affinity_scores[]"
          },
          {
            "id": "opportunity",
            "name": "Opportunity",
            "question": "이 tribe가 겪는 흥미로운 문제가 있나?",
            "action": "커뮤니티에서 반복되는 불만/질문/요청 관찰",
            "signals": [
              "같은 질문이 반복됨",
              "기존 솔루션에 불만이 많음",
              "수동으로 해결하는 사람이 많음",
              "'~하는 도구 없나요?' 질문"
            ],
            "output": "problem_signals[]"
          },
          {
            "id": "appreciation",
            "name": "Appreciation",
            "question": "이 문제에 돈을 쓸 의향이 있나?",
            "validation": [
              "이미 유료 솔루션을 쓰고 있나?",
              "대안에 얼마를 쓰고 있나?",
              "문제 해결에 시간을 얼마나 쓰나?",
              "해결 안 되면 어떤 손해가 있나?"
            ],
            "output": "willingness_to_pay"
          },
          {
            "id": "addressability",
            "name": "Addressability (Size)",
            "question": "시장이 충분히 큰가?",
            "metrics": [
              "커뮤니티 멤버 수",
              "관련 subreddit 구독자",
              "LinkedIn 검색 결과 수",
              "유사 SaaS의 고객 수"
            ],
            "threshold": "최소 1,000명+ 잠재 고객",
            "output": "market_size_estimate"
          }
        ]
      },
      
      "output": "{name}-audience-discovery.md"
    },
    
    {
      "step": 2,
      "id": "community_embedding",
      "name": "Community Embedding (Problem Observation)",
      "description": "선택한 커뮤니티에서 실제 문제 관찰",
      "input_from": ["audience_discovery"],
      
      "observation_sources": {
        "reddit": {
          "action": "관련 subreddit에서 'frustrated', 'help', 'looking for', 'alternative' 검색",
          "collect": "최근 6개월 인기 게시물 중 문제/요청 관련 20개+"
        },
        "twitter": {
          "action": "관련 키워드로 불만/질문 트윗 수집",
          "collect": "engagement 높은 불만 트윗 10개+"
        },
        "communities": {
          "action": "Slack/Discord/포럼에서 반복되는 질문 관찰",
          "collect": "FAQ에 없지만 자주 묻는 질문 5개+"
        },
        "reviews": {
          "action": "경쟁 제품 리뷰에서 불만 수집",
          "platforms": ["G2", "Capterra", "ProductHunt"],
          "collect": "별점 2-3점 리뷰의 불만 사항"
        }
      },
      
      "problem_categorization": {
        "categories": [
          {
            "type": "workflow_friction",
            "description": "기존 워크플로우의 비효율",
            "example": "수동 복사-붙여넣기, 여러 도구 오가기"
          },
          {
            "type": "missing_feature",
            "description": "기존 도구에 없는 기능",
            "example": "'Notion에 X 기능 있으면 좋겠다'"
          },
          {
            "type": "price_pain",
            "description": "기존 솔루션이 너무 비쌈",
            "example": "'$50/월은 너무 비싸서 수동으로 함'"
          },
          {
            "type": "learning_curve",
            "description": "기존 도구가 너무 복잡",
            "example": "'Salesforce는 좋은데 설정이 너무 어려워'"
          }
        ]
      },
      
      "output": {
        "file": "{name}-pain-points.md",
        "required_fields": [
          "problem_statement",
          "source_url",
          "frequency (how often mentioned)",
          "intensity (how frustrated)",
          "current_solution (what they do now)"
        ]
      }
    },
    
    {
      "step": 3,
      "id": "problem_validation",
      "name": "Problem Validation",
      "description": "발견한 문제 중 가장 유망한 1개 선택 및 검증",
      "input_from": ["community_embedding"],
      
      "selection_criteria": {
        "scoring": [
          {"criterion": "Frequency", "question": "얼마나 자주 언급되나?", "weight": 25},
          {"criterion": "Intensity", "question": "얼마나 심각하게 느끼나?", "weight": 25},
          {"criterion": "Willingness to Pay", "question": "돈 내고 해결하려 하나?", "weight": 25},
          {"criterion": "Founder Fit", "question": "내가 이 문제를 잘 이해하나?", "weight": 25}
        ],
        "threshold": "≥70/100"
      },
      
      "validation_actions": {
        "lightweight": [
          "커뮤니티에 '이 문제 겪는 분?' 질문 올리기",
          "트위터에 문제 공감 트윗 올려서 반응 확인",
          "지인 5명에게 문제 공감 여부 물어보기"
        ],
        "medium": [
          "Landing page 만들어서 이메일 수집 (목표: 50명)",
          "문제 관련 블로그 글 써서 반응 확인",
          "짧은 설문 돌리기 (목표: 30 응답)"
        ]
      },
      
      "output": "{name}-problem-validation.md"
    },
    
    {
      "step": 4,
      "id": "solution_direction",
      "name": "Solution Direction",
      "description": "검증된 문제에 대한 솔루션 방향 설정",
      "input_from": ["problem_validation"],
      
      "solution_principles": {
        "embedded_workflow": {
          "question": "기존 워크플로우에 자연스럽게 끼워넣을 수 있나?",
          "bad": "새로운 습관을 만들어야 함",
          "good": "이미 하는 행동에 10초만 추가"
        },
        "immediate_value": {
          "question": "첫 사용에서 바로 가치를 느끼나?",
          "bad": "설정에 30분, 가치 체감에 1주일",
          "good": "가입 후 2분 안에 '오!' 순간"
        },
        "simple_pricing": {
          "question": "가격이 명확하고 납득 가능한가?",
          "bad": "복잡한 usage-based, enterprise 문의",
          "good": "$X/월, 취소 자유"
        }
      },
      
      "competitor_analysis": {
        "questions": [
          "현재 사람들이 쓰는 대안은?",
          "대안의 가격은?",
          "대안에 대한 주요 불만은?",
          "우리가 10배 나을 수 있는 점은?"
        ]
      },
      
      "output": "{name}-solution-direction.md"
    },
    
    {
      "step": 5,
      "id": "mvp_and_action",
      "name": "2-Week MVP + Action Plan",
      "description": "2주 안에 만들 수 있는 최소 검증 단위 + 이번 주 할 일",
      "input_from": ["solution_direction"],
      
      "mvp_scope": {
        "principle": "검증에 필요한 최소한만 만든다",
        "time_budget": "2주 (주 10시간 기준 = 20시간)",
        "feature_limit": "핵심 기능 1개만",
        "tech_approach": "가장 빠른 방법 (no-code 우선)"
      },
      
      "action_plan": {
        "this_week": {
          "description": "이번 주에 할 3가지",
          "examples": [
            "커뮤니티에 문제 공감 글 올리기",
            "Landing page 만들기 (Carrd/Framer)",
            "잠재 고객 5명에게 DM 보내기"
          ]
        },
        "success_metric": {
          "description": "2주 후 성공 기준",
          "examples": [
            "이메일 대기자 50명",
            "유료 결제 의향 표명 5명",
            "문제 인터뷰 완료 10명"
          ]
        }
      },
      
      "output": [
        "{name}-mvp-2week.md",
        "{name}-action-plan.md"
      ]
    }
  ],
  
  "output": {
    "directory": "/Users/zayden/Documents/assets/draft/biz-idea-embedded/{project-name}/",
    "files": [
      "{name}-founder-profile.yaml",
      "{name}-audience-discovery.md",
      "{name}-pain-points.md",
      "{name}-problem-validation.md",
      "{name}-solution-direction.md",
      "{name}-mvp-2week.md",
      "{name}-action-plan.md"
    ]
  },
  
  "success_criteria": {
    "audience_fit": "Affinity Score ≥20/30",
    "problem_fit": "Problem Score ≥70/100",
    "validation": "최소 1개 lightweight validation 완료",
    "action": "이번 주 할 일 3가지 명확"
  }
}

---

# biz-idea-embedded (V1.0)

Audience-First 신사업 아이디어 발굴 파이프라인  
**Based on: The Embedded Entrepreneur by Arvid Kahl**

## 핵심 철학

> **"아이디어를 만들고 고객을 찾지 말고, 고객을 먼저 찾고 그들의 문제를 해결하라"**

| 기존 방식 (Product-First) | Embedded 방식 (Audience-First) |
|--------------------------|-------------------------------|
| 아이디어 → 제품 → 고객 찾기 | **고객 → 문제 → 솔루션** |
| AI가 아이디어 생성 | 창업자가 커뮤니티에서 발견 |
| 숫자 추정으로 검증 | 실제 반응으로 검증 |
| 6개월 후 PMF 확인 | 2주 만에 관심 확인 |

## Pipeline Overview

```
Step 0: Founder Profile Input (필수)
        "나는 누구인가?"
            ↓
Step 1: Audience Discovery (5A Framework)
        "내가 도울 수 있는 tribe는?"
            ↓
Step 2: Community Embedding
        "이들의 진짜 문제는?"
            ↓
Step 3: Problem Validation
        "돈 낼 만한 문제인가?"
            ↓
Step 4: Solution Direction
        "어떻게 해결할까?"
            ↓
Step 5: 2-Week MVP + Action Plan
        "이번 주 뭐 할까?"
```

---

## Step 0: Founder Profile Input

### 💼 직업/전문성
- 현재 직업/역할은?
- 과거 경력은? (최근 5년)
- 남들보다 잘 아는 분야는?

### 🌐 커뮤니티 활동
- 활동하는 온라인 커뮤니티는? (URL 포함)
- 트위터/링크드인에서 주로 팔로우하는 사람들은?
- 정기적으로 보는 뉴스레터/팟캐스트/유튜브는?

### 😤 고통 & 💰 지출
- 최근 '이거 왜 이렇게 불편해?'라고 느낀 것 3가지는?
- 전 직장/프로젝트에서 가장 짜증났던 반복 업무는?
- 현재 유료로 쓰는 SaaS/도구는?
- '이런 도구 있으면 좋겠다'고 생각한 것은?

### 🎯 개인 맥락
- 주당 사이드 프로젝트에 쓸 수 있는 시간은?
- 직접 할 수 있는 것은? (코딩/디자인/마케팅/영업)
- 연락 가능한 잠재 고객이 있나? 몇 명?
- 왜 창업/사이드 프로젝트를 하고 싶나?

---

## Step 1: Audience Discovery (5A Framework)

| 단계 | 질문 | 통과 기준 |
|------|------|----------|
| **Awareness** | 내가 속한 tribe는? | 후보 3-5개 도출 |
| **Affinity** | 이들의 성공을 바라는가? | ≥20/30 점 |
| **Opportunity** | 흥미로운 문제가 있나? | 문제 신호 5개+ |
| **Appreciation** | 돈 낼 의향이 있나? | 기존 지출 확인 |
| **Addressability** | 시장이 충분한가? | 1,000명+ 잠재고객 |

---

## Step 2-5: 문제 발견 → 검증 → 액션

### 문제 관찰 소스
- Reddit (r/SaaS, r/startups, 업종별 subreddit)
- Twitter/X (불만 트윗, 질문 트윗)
- 커뮤니티 (Slack, Discord, 포럼)
- 리뷰 사이트 (G2, Capterra, ProductHunt)

### 문제 선택 기준 (/100)
| 기준 | 배점 |
|------|------|
| Frequency (자주 언급) | 25 |
| Intensity (심각하게 느낌) | 25 |
| Willingness to Pay | 25 |
| Founder Fit | 25 |

### 2주 MVP 원칙
- 핵심 기능 **1개만**
- **20시간** 이내 개발
- No-code 우선 (Carrd, Framer, Airtable, Make)
- 검증 목표: **이메일 50명** 또는 **인터뷰 10명**

---

## Output Structure

```
draft/biz-idea-embedded/{project-name}/
├── {name}-founder-profile.yaml      # Step 0: 창업자 프로필
├── {name}-audience-discovery.md     # Step 1: 5A 분석 결과
├── {name}-pain-points.md            # Step 2: 발견한 문제들
├── {name}-problem-validation.md     # Step 3: 선택 & 검증
├── {name}-solution-direction.md     # Step 4: 솔루션 방향
├── {name}-mvp-2week.md              # Step 5: 2주 MVP 스펙
└── {name}-action-plan.md            # Step 5: 이번 주 할 일
```

---

## Usage

```
/biz-idea-embedded

# 대화형으로 프로필 입력 후 진행
```

## vs biz-idea-b2b

| 항목 | biz-idea-b2b | biz-idea-embedded |
|------|--------------|-------------------|
| **입력** | 키워드 | 창업자 프로필 |
| **아이디어 소스** | AI 생성 | 커뮤니티 관찰 |
| **검증 방식** | AI 숫자 추정 | 실제 커뮤니티 반응 |
| **결과물** | 분석 보고서 6개 | Action Plan + MVP |
| **다음 단계** | "Score 82 PASS" | "이번 주 이거 해" |
| **적합한 상황** | B2B 시장 분석 | 사이드 프로젝트 시작 |

---

## ⚠️ OUTPUT RULES (MUST FOLLOW)

### 1. 폴더 먼저 생성
```bash
mkdir -p /Users/zayden/Documents/assets/draft/biz-idea-embedded/{project-name}/
```

### 2. 파일명 규칙
모든 파일은 `{project-name}-{type}.md` 형식

### 3. 루트 파일 생성 금지
❌ `/Users/zayden/Documents/assets/ANALYSIS.md`
✅ `/Users/zayden/Documents/assets/draft/biz-idea-embedded/{project}/`

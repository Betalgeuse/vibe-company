---
name: prompt-enhancer
description: Transform vague or brief user prompts into clear, detailed, and effective prompts using a structured template. Always use Plan Mode to get user validation before execution. Specialized for Claude Code feature development prompts.
---

# Prompt Enhancer v2.0

## Overview

This skill helps transform vague, brief, or unclear user prompts into well-structured, detailed prompts that lead to better outcomes. **This skill operates in Plan Mode**: always present the enhanced prompt to the user for validation before execution.

**Special Focus**: When the prompt is about feature development or code implementation, use the Feature Development Template with strict principles.

## When to Use This Skill

Apply prompt enhancement when:
- User provides a very brief request (< 10 words) without context
- Request lacks clear success criteria or expected output format
- Task complexity suggests more details would improve results
- User explicitly asks to "enhance", "improve", or "make better" their prompt
- Ambiguous requests that could be interpreted multiple ways
- **Feature development or code implementation requests** (always use Feature Development Template)

**Do NOT use when:**
- User provides already detailed, clear prompts following the template structure
- User explicitly prefers concise interaction
- Task is genuinely simple and requires no elaboration

## Critical Principle: Plan Mode

**ALWAYS operate in Plan Mode:**

1. **Never execute immediately** - Present the enhanced prompt first
2. **Get explicit approval** - Ask "Does this capture your requirements? Should I proceed with this plan?"
3. **Allow iteration** - Be ready to refine based on user feedback
4. **Show the structure** - Display the enhanced prompt in a clear, readable format
5. **Wait for confirmation** - Only proceed after user approves

## Feature Development Template

**When to use**: Any request involving code implementation, feature development, bug fixes, or system modifications.

**Role**: You are the world's best Claude Code prompt engineer.

### Template Structure

```markdown
<문제 정의>
[현재 무엇이 문제인지 - 구체적으로 설명]
[Why is this a problem? What impact does it have?]
</문제 정의>

<목표>
- [ ] 구현할 기능 1 (구체적으로)
- [ ] 구현할 기능 2 (구체적으로)
- [ ] 구현할 기능 3 (구체적으로)
</목표>

<비목표>
- 목표를 달성하기 위해 굳이 불필요한 UI를 변경하거나 수정하지 않는다
  * 예: 비즈니스 로직 변경 시 꼭 필요한 경우가 아니라면 UI 수정 금지
- [이 작업에서 명시적으로 하지 않을 것 1]
- [이 작업에서 명시적으로 하지 않을 것 2]
- [범위를 벗어나는 것들]
</비목표>

<성공 기준>
- [어떤 상태가 되면 완료인지 - 측정 가능하게]
- [테스트 방법 또는 검증 방법]
- [예상되는 결과물]
</성공 기준>

<실행 계획>
99.9% 정확도로 문제를 해결하기 위한 단계별 계획을 세워주세요:

1. [단계 1 - 구체적인 작업]
2. [단계 2 - 구체적인 작업]
3. [단계 3 - 구체적인 작업]
...

각 단계에서:
- 어떤 파일을 수정할 것인지
- 어떤 함수/컴포넌트를 변경할 것인지
- 예상되는 영향 범위는 무엇인지
</실행 계획>
```

### Mandatory Principles for Feature Development

**These principles MUST be included in every <비목표> section:**

1. **UI 변경 최소화 원칙**
   - 목표 달성을 위해 굳이 불필요한 UI를 변경하거나 수정하지 않는다
   - 비즈니스 로직 변경 시 꼭 필요한 경우가 아니라면 UI 수정을 하지 않는다
   - 예시: "백엔드 API 로직만 수정하고, 프론트엔드는 기존 UI 유지"

2. **범위 제한**
   - 요청된 기능 외의 추가 기능 개발 금지
   - 리팩토링은 최소한으로 (필요한 경우에만)

3. **영향 최소화**
   - 기존 동작하는 코드 변경 최소화
   - 다른 기능에 영향을 주지 않도록 격리

### Information Gathering Process

If the user's request lacks sufficient information to fill the template, ask targeted questions:

**Phase 1 - Problem Understanding:**
- "What exactly is not working or missing right now?"
- "What is the impact of this problem?"
- "Who is affected by this?"

**Phase 2 - Goal Clarification:**
- "What specific functionality needs to be implemented?"
- "Are there multiple sub-features or just one main feature?"
- "What is the priority order if there are multiple goals?"

**Phase 3 - Scope Definition:**
- "What should we explicitly NOT do in this task?"
- "Should we modify the UI for this change?"
- "Are there any related features that should be excluded?"

**Phase 4 - Success Criteria:**
- "How will we know this is done correctly?"
- "What should the end result look like?"
- "How should this be tested?"

**Phase 5 - Technical Context:**
- "Which files or components are involved?"
- "What is the current tech stack?"
- "Are there any constraints or dependencies?"

### Enhancement Workflow for Feature Development

**Step 1: Initial Analysis**
```
User request: [original prompt]

Analysis:
- Problem clarity: [clear/unclear/missing]
- Goals defined: [yes/partial/no]
- Scope bounded: [yes/no]
- Success criteria: [yes/no]
- Technical context: [sufficient/insufficient]
```

**Step 2: Information Gathering (if needed)**
```
I need more information to create an effective plan. Let me ask a few questions:

[Ask 2-3 most critical questions from the phases above]
```

**Step 3: Present Enhanced Prompt**
```
Based on your requirements, here's the structured prompt:

[Display the filled template]

---

**Validation Questions:**
1. Does this accurately capture your problem and goals?
2. Are the non-goals appropriate (especially the UI modification principle)?
3. Are the success criteria clear and measurable?
4. Should I proceed with creating a 99.9% accurate execution plan?

Please review and let me know if any adjustments are needed.
```

**Step 4: Wait for Approval**
- Do NOT proceed until user explicitly approves
- Be ready to iterate on any section
- If user approves, then create the detailed execution plan

**Step 5: Execution Plan Creation**
```
Great! Now I'll create a 99.9% accurate execution plan:

[Detailed step-by-step plan with file names, functions, expected changes]
```

## Enhancement Framework

### 1. Analyze the Original Prompt

Identify what's missing:
- **Context**: Background information, project details, domain knowledge
- **Constraints**: Requirements, limitations, preferences, restrictions
- **Specifications**: Format, style, length, structure expectations
- **Success Criteria**: How to measure if the result is satisfactory
- **Examples**: Sample inputs/outputs that clarify expectations

### 2. Enhancement Patterns

#### Pattern A: Task Clarification
**Original**: "Write a function"
**Enhanced**: "Write a Python function named `calculate_total` that takes a list of numbers and returns their sum. Include error handling for non-numeric inputs and add docstring documentation following Google style."

#### Pattern B: Context Addition
**Original**: "Analyze this data"
**Enhanced**: "Analyze the sales data from Q3 2024 focusing on: 1) Revenue trends by product category, 2) Regional performance comparison, 3) Customer acquisition vs retention metrics. Provide insights with visualizations and actionable recommendations for Q4 strategy."

#### Pattern C: Format Specification
**Original**: "Explain machine learning"
**Enhanced**: "Explain machine learning concepts in a 500-word blog post targeted at non-technical business executives. Use analogies to everyday business processes, avoid jargon, and include 2-3 concrete business use cases. Structure with: introduction, core concepts, applications, and conclusion."

#### Pattern D: Constraint Definition
**Original**: "Create a website"
**Enhanced**: "Create a single-page portfolio website using HTML, CSS, and vanilla JavaScript (no frameworks). Requirements: responsive design for mobile/desktop, dark mode toggle, smooth scrolling navigation, sections for About/Projects/Contact, and load time under 2 seconds. Use modern CSS Grid/Flexbox for layout."

#### Pattern E: Output Structure
**Original**: "Research competitors"
**Enhanced**: "Research top 5 competitors in the project management software space. For each competitor provide: 1) Key features and pricing, 2) Target market and positioning, 3) Strengths and weaknesses, 4) Market share estimates. Conclude with a comparison matrix and strategic recommendations. Format as a markdown report with sections and tables."

### 3. Enhancement Process

When enhancing a prompt, follow these steps:

**Step 1: Acknowledge the original request**
Show you understand the user's basic intent.

**Step 2: Identify gaps**
Internally note what information is missing (don't overwhelm user with questions).

**Step 3: Make reasonable assumptions**
Based on common patterns and best practices, infer likely requirements.

**Step 4: Present enhanced version**
Offer the improved prompt with clear structure.

**Step 5: Confirm or iterate**
Ask if the enhancement captures their intent or needs adjustment.

### 4. Enhancement Template

Use this template structure for consistent enhancements:

```
[Clear Action Verb] + [Specific Subject] + [Context/Background]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Constraints:
- [Constraint 1]
- [Constraint 2]

Expected Output:
- [Format specification]
- [Length/scope]
- [Style/tone]

Success Criteria:
- [Measurable outcome 1]
- [Measurable outcome 2]
```

## Key Principles

1. **Specificity over generality**: Add concrete details, not vague elaborations
2. **Actionable over descriptive**: Focus on what needs to be done, not just explained
3. **Constrained over open-ended**: Define boundaries to guide execution
4. **Structured over freeform**: Organize information in clear sections
5. **Example-driven**: Include samples when they clarify expectations

## Common Enhancement Patterns

### For Code Requests
Add: language, function name, input/output types, error handling, documentation style, performance requirements

### For Writing Requests
Add: audience, tone, length, structure, format, key points to cover, style guide

### For Analysis Requests
Add: data scope, metrics to calculate, visualization types, insight depth, output format

### For Creative Requests
Add: style reference, constraints, dimensions/length, mood/tone, target audience

### For Research Requests
Add: scope boundaries, depth level, source requirements, output structure, time period

## Examples in Action

### Example 1: Feature Development Request (PRIMARY USE CASE)

**User Request:**
```
"Add login functionality"
```

**Phase 1: Information Gathering**
```
I'll help you create a structured prompt for this feature. Let me ask a few clarifying questions:

1. **Problem Definition**: What's currently preventing users from logging in? Is there no authentication system at all, or is something broken?

2. **Goals**: What should the login functionality include?
   - Email/password authentication?
   - Social login (Google, GitHub)?
   - Remember me functionality?
   - Password reset?

3. **Scope**: Should this include:
   - UI changes (login form, buttons)?
   - Backend API changes?
   - Database changes?

4. **Success Criteria**: How will we test this works correctly?
```

**User Response:**
```
"We have no auth system. Just need email/password login with JWT tokens. 
Backend is Node.js/Express, frontend is React. Need login form and protected routes."
```

**Phase 2: Present Enhanced Prompt**
```
Based on your requirements, here's the structured prompt:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<문제 정의>
현재 애플리케이션에 인증 시스템이 전혀 없어서 사용자 구분이 불가능하고, 
보호된 리소스에 대한 접근 제어를 할 수 없습니다.
이로 인해 사용자별 데이터 관리가 불가능하고 보안이 취약한 상태입니다.
</문제 정의>

<목표>
- [ ] 이메일/비밀번호 기반 사용자 인증 시스템 구현
- [ ] JWT 토큰 기반 인증 로직 구축 (Node.js/Express)
- [ ] React 로그인 폼 UI 구현
- [ ] Protected Route 설정으로 인증된 사용자만 접근 가능하게 만들기
- [ ] 로그인 상태 유지 (localStorage에 토큰 저장)
</목표>

<비목표>
- 목표를 달성하기 위해 굳이 불필요한 UI를 변경하거나 수정하지 않는다
  * 기존 페이지들의 레이아웃이나 디자인은 변경하지 않음
  * 로그인 폼과 필수 네비게이션 요소만 추가
- 회원가입 기능은 이번 작업에서 제외 (추후 별도 작업)
- 소셜 로그인 (Google, GitHub 등)은 제외
- 비밀번호 찾기/재설정 기능은 제외
- 다중 인증(MFA)은 제외
- 역할 기반 권한 관리(RBAC)는 제외
</비목표>

<성공 기준>
- 사용자가 올바른 이메일/비밀번호로 로그인 시 JWT 토큰을 받고 인증된 상태가 됨
- 잘못된 인증 정보로 로그인 시도 시 적절한 에러 메시지 표시
- 로그인 후 protected routes에 접근 가능
- 로그인하지 않은 사용자가 protected routes 접근 시 로그인 페이지로 리다이렉트
- 새로고침 후에도 로그인 상태 유지 (토큰이 유효한 경우)
- 로그아웃 시 토큰이 제거되고 로그인 페이지로 이동

테스트 방법:
1. 올바른 credentials로 로그인 → 성공
2. 잘못된 credentials로 로그인 → 에러 메시지
3. Protected route 접근 → 인증 없으면 리다이렉트
4. 로그아웃 → 토큰 삭제 확인
5. 페이지 새로고침 → 로그인 상태 유지
</성공 기준>

<실행 계획>
99.9% 정확도로 문제를 해결하기 위한 단계별 계획:

**Backend (Node.js/Express):**
1. 필요한 패키지 설치
   - jsonwebtoken (JWT 생성/검증)
   - bcrypt (비밀번호 해싱)

2. User 모델 생성 (models/User.js)
   - email (unique)
   - password (hashed)

3. 인증 API 엔드포인트 (routes/auth.js)
   - POST /api/auth/login
     * 이메일/비밀번호 검증
     * JWT 토큰 생성 및 반환
   - POST /api/auth/logout (optional, client-side 처리 가능)

4. JWT 검증 미들웨어 (middleware/auth.js)
   - 토큰 파싱 및 검증
   - 유효하지 않은 토큰 처리

5. Protected routes에 미들웨어 적용

**Frontend (React):**
6. AuthContext 생성 (context/AuthContext.js)
   - 로그인 상태 관리
   - 토큰 저장/조회 함수
   - 로그인/로그아웃 함수

7. Login 컴포넌트 생성 (components/Login.js)
   - 이메일/비밀번호 입력 폼
   - 로그인 API 호출
   - 에러 처리

8. ProtectedRoute 컴포넌트 생성 (components/ProtectedRoute.js)
   - 인증 상태 확인
   - 미인증 시 /login으로 리다이렉트

9. API 클라이언트 설정 (utils/api.js)
   - Axios interceptor로 모든 요청에 JWT 헤더 추가

10. 기존 라우팅 업데이트 (App.js)
    - /login 경로 추가
    - Protected routes를 ProtectedRoute로 감싸기

**영향 범위:**
- 새 파일: 8개 (backend 4개, frontend 4개)
- 수정 파일: 2개 (App.js, package.json)
- 기존 기능 영향: 없음 (순수 추가 작업)
</실행 계획>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Validation Questions:**
1. Does this accurately capture your problem and goals?
2. Are the non-goals appropriate (especially the UI modification principle)?
3. Are the success criteria clear and measurable?
4. Should I proceed with implementing this plan?

Please review and let me know if any adjustments are needed.
```

**Step 3: Wait for Approval**
```
User: "Yes, looks good! One change - let's add password reset to the goals."

Response: "I'll update the goals and adjust the plan accordingly. Here's the revised version..."
```

### Example 2: Code Task (Non-Feature Development)

**Original**: "Write a function"
**Enhanced**: "Write a Python function named `calculate_total` that takes a list of numbers and returns their sum. Include error handling for non-numeric inputs and add docstring documentation following Google style."

### Example 3: Data Task

**Original**: "Analyze sales"
**Enhanced**: "Analyze Q3 sales data to identify: 1) Top 10 performing products by revenue, 2) Month-over-month growth trends, 3) Underperforming categories, 4) Regional performance disparities. Create visualizations (bar charts for products, line graph for trends, heatmap for regions). Provide executive summary with 3-5 actionable insights and recommendations. Output as interactive HTML dashboard."

## Anti-Patterns to Avoid

❌ **Over-elaboration**: Don't add unnecessary complexity to genuinely simple tasks
❌ **Assumption overload**: Don't make too many assumptions without user confirmation
❌ **Format rigidity**: Leave room for creative interpretation when appropriate
❌ **Technical jargon**: Keep enhancements accessible to the user's knowledge level
❌ **Scope creep**: Don't expand the task beyond user's original intent

## User Interaction Guidelines

When presenting an enhanced prompt:

1. **Be transparent**: "I've enhanced your prompt to add more specificity..."
2. **Show both versions**: Let user see the transformation
3. **Invite feedback**: "Does this capture what you need, or should I adjust?"
4. **Iterate quickly**: Be ready to refine based on user feedback
5. **Respect preferences**: If user prefers the original, respect that choice

## References

For more detailed examples and advanced patterns, see:
- `references/feature_development_guide.md` - Complete guide for feature development prompts (READ THIS FIRST for code tasks)
- `references/prompt_patterns.md` - Comprehensive pattern library for all domains
- `references/domain_templates.md` - Domain-specific enhancement templates

**Priority**: For any feature development or code implementation request, ALWAYS read `feature_development_guide.md` first.

# Course: Content Strategy 실행 가이드

## 📚 Step-by-Step (45분 완성)

### Step 1: 스토리 정의 (10분)

**제품 스토리 템플릿 작성:**

```markdown
## My Product Story

**Problem (문제):**
[타겟]이 [상황]에서 [고통]을 겪음

**Solution (솔루션):**
[제품]은 [방법]으로 [해결]

**Journey (여정):**
- 시작: [언제/왜 시작]
- 과정: [개발 과정 하이라이트]
- 현재: [현재 상태]
- 미래: [다음 계획]

**Unique Angle (독특한 관점):**
[경쟁사와 다른 점, 나만의 스토리]
```

**예시: AI Code Review Tool**
```markdown
**Problem:**
스타트업 개발자들이 코드 리뷰에 하루 2시간씩 소비

**Solution:**
AI가 5분 안에 자동 리뷰, 80% 이슈 사전 발견

**Journey:**
- 시작: 2개월 전, 우리 팀의 고통에서 출발
- 과정: 5번의 프로토타입 실패, GPT-4 활용 시도
- 현재: Beta 테스트 20개 팀
- 미래: Slack 통합, IDE 플러그인

**Unique Angle:**
대기업용 도구는 복잡함 → 스타트업용 Simple & Fast
```

---

### Step 2: ChatGPT로 20개 아이디어 생성 (15분)

#### 프롬프트 템플릿

```
당신은 소셜 미디어 콘텐츠 전략가입니다.
아래 제품의 2주 런칭 캘린더를 작성해주세요.

[제품 정보]
- 제품: [제품명 및 설명]
- 타겟: [타겟 사용자]
- 핵심 가치: [주요 이점]
- 스토리: [Step 1에서 작성한 스토리]

[플랫폼]
주력: [선정한 플랫폼]

[요구사항]
1. 2주간 (14일) 콘텐츠 아이디어 20개
2. 7가지 콘텐츠 유형 골고루 포함:
   - Launch Announcement
   - Behind-the-Scenes
   - Feature Highlight
   - User Testimonial
   - Milestone
   - Learning/Insight
   - Problem-Solution

3. Week 1 (Pre-Launch): 런칭 기대감 조성
4. Week 2 (Launch Week): Day 0 런칭, 이후 momentum 유지

[출력 형식]
표로 정리:
| Day | Date | Content Type | Topic | Platform | Time |

**추가 요청:**
- 각 Topic은 구체적으로 (예: "Behind-the-Scenes" X → "Debugging nightmare: 4 hours on a typo" O)
- Best posting time 포함 (AM/PM)
- 연결된 스토리로 구성
```

#### ChatGPT 결과 예시

| Day | Date | Content Type | Topic | Platform | Time |
|-----|------|--------------|-------|----------|------|
| -7 | Mon | Behind-the-Scenes | "Starting my 14-day launch journey" | Twitter/X | 9AM |
| -6 | Tue | Problem-Solution | "Why code reviews take 2h/day" | Reddit | 10AM |
| -5 | Wed | Learning | "3 lessons from prototyping" | Twitter/X, LinkedIn | 2PM |
| -4 | Thu | Behind-the-Scenes | "Breaking change: refactoring hell" | Twitter/X | 10AM |
| -3 | Fri | Feature Highlight | "Preview: AI review in 5min" | Twitter/X | 11AM |
| -2 | Sat | Behind-the-Scenes | "Final testing before launch" | Twitter/X | 3PM |
| -1 | Sun | Launch Teaser | "Launching tomorrow 🚀" | All | 8PM |
| 0 | Mon | Launch Announcement | "🚀 [Product] is LIVE!" | All | 12AM PST |
| 1 | Tue | Milestone | "First 24h: 87 users!" | Twitter/X | 10AM |
| 2 | Wed | Feature Highlight | "How AI detects code smells" | LinkedIn | 11AM |
| 3 | Thu | User Testimonial | "Beta tester: 'Saved 10h/week'" | Twitter/X, PH | 2PM |
| 4 | Fri | Behind-the-Scenes | "Week 1 lessons: what worked" | Twitter/X | 3PM |
| 5 | Sat | Milestone | "Week 1: 150 users, 500 reviews" | All | 10AM |
| 6 | Sun | Learning | "5 insights from launching" | LinkedIn | 4PM |

---

### Step 3: 플랫폼별 최적화 (10분)

#### 같은 Topic, 다른 버전

**Topic:** "First 24h: 87 users!"

**Twitter/X (짧고 감성적):**
```
🎉 87 users in 24 hours!

To everyone who signed up:
Thank you. Seriously.

Your feedback is shaping the product.
Keep it coming! 💬

#Day1 #BuildInPublic
```

**LinkedIn (전문적, 데이터 중심):**
```
Launch Day Update: 87 Early Adopters in 24 Hours

What we learned:
✅ 3 most requested features
✅ 2 critical bugs (fixed overnight)
✅ 12 testimonials received

The journey from idea to launch taught us:
[1-2 paragraph 인사이트]

Thank you to our early supporters. 
Your trust drives us to build better.

#ProductLaunch #Startup #AI
```

**ProductHunt (커뮤니티 감사):**
```
Update: 24 hours since launch 🚀

Thanks to this amazing community:
- 87 users signed up
- 23 upvotes (and counting!)
- Incredible feedback

We're reading every comment.
Keep the suggestions coming!

What feature should we build next? 👇
```

---

### Step 4: 우선순위 설정 (5분)

#### Must-Post (필수 포스트)

```
□ Day -7: Journey 시작
□ Day -1: Launch Teaser
□ Day 0: Launch Announcement (모든 플랫폼)
□ Day 1: First Milestone
□ Day 3: User Testimonial
□ Day 5: Week 1 Recap
```

#### Should-Post (권장 포스트)

```
□ Day -5, -4, -2: Behind-the-Scenes (3개)
□ Day 2, 4: Feature Highlight (2개)
□ Day 6: Learning
```

#### Nice-to-Post (여유 있으면)

```
□ Additional Behind-the-Scenes
□ Extra Learning/Insights
□ Community Engagement Posts
```

---

### Step 5: 배치 작성 준비 (5분)

#### 초안 작성 도구 선택

**Option 1: Google Sheets**
```
Columns:
- Day
- Date
- Content Type
- Topic
- Platform
- Draft (초안)
- Status (Not Started / Drafted / Reviewed / Posted)
- Performance (Impressions, Engagement)
```

**Option 2: Notion**
```
Database:
- Content Calendar
  - Properties: Date, Type, Platform, Status, Performance
  - Views: Timeline, Board, Table
```

**Option 3: Markdown File**
```markdown
## Day -7: Behind-the-Scenes

**Topic:** Starting my 14-day launch journey  
**Platform:** Twitter/X  
**Time:** 9AM  
**Status:** ⭕ Not Started

**Draft:**
[초안 작성 위치]

**Performance:**
- Impressions: 
- Engagement: 
- Notes:
```

---

## 🎯 실전 예시

### 예시 1: SaaS 제품 (B2B)

**제품:** Team collaboration tool for remote workers  
**타겟:** 스타트업 팀

**Week 1 스토리 아크:**
```
Day -7: "Remote team chaos" (Problem)
Day -6: "Tried 5 tools, all failed" (Journey)
Day -5: "What if we built our own?" (Solution Start)
Day -4: "First prototype in 3 days" (Progress)
Day -3: "Beta testing with 3 teams" (Validation)
Day -2: "99% ready" (Anticipation)
Day -1: "Tomorrow we launch" (Teaser)
```

**콘텐츠 캘린더 (발췌):**

| Day | Content Type | Topic | Hook |
|-----|--------------|-------|------|
| -7 | Problem | Remote team chaos | "Our standup took 2 hours. Something had to change." |
| -5 | Behind-the-Scenes | Building MVP | "Day 1: Figma mockup. Day 2: First line of code. Day 3: Working prototype." |
| -3 | User Testimonial | Beta feedback | "Beta tester: 'Cut meeting time by 50%'" |
| 0 | Launch | LIVE! | "🚀 After 60 days, we're live. Meet [Product]." |

---

### 예시 2: 개발자 도구

**제품:** API testing tool  
**타겟:** Backend developers

**Week 2 스토리 아크:**
```
Day 0: Launch (Excitement)
Day 1: First users (Gratitude)
Day 2: Feature deep-dive (Education)
Day 3: User story (Social Proof)
Day 4: Lessons learned (Authenticity)
Day 5: Milestone (Momentum)
Day 6: Insights (Value)
```

**콘텐츠 믹스:**
- 50% Technical (How it works)
- 30% Behind-the-Scenes (Building in Public)
- 20% Social Proof (User testimonials, milestones)

---

## 💡 Pro Tips

### 1. Batch Content Creation
```
Time-Blocking:
- Week 1: 2시간으로 Week 1 콘텐츠 7개 초안 작성
- Week 2: Launch 후 매일 30분씩 다음날 포스트 작성

장점:
- 일관된 톤앤매너
- Context switching 최소화
- 스토리 흐름 자연스러움
```

### 2. Hook 라이브러리 구축
```
강력한 Hook 패턴:

1. 놀라움: "I spent 100 hours on [X]. Here's what I learned."
2. 호기심: "Why [popular thing] is wrong about [topic]"
3. 공감: "[타겟]이 겪는 [문제]. I was there."
4. 데이터: "[숫자] [결과] in [시간]. Here's how."
5. 스토리: "2 months ago, I [시작]. Today, [결과]."
```

### 3. 재활용 전략
```
1개 긴 콘텐츠 → 5개 짧은 콘텐츠

예: 블로그 포스트 "5 Lessons from Launching"
→ Twitter Thread (5 트윗)
→ LinkedIn Post (요약 + 링크)
→ Reddit Comment (커뮤니티별 맞춤)
→ ProductHunt Update (핵심만)
→ Newsletter (전체 내용)
```

### 4. 스토리텔링 구조
```
Before-During-After:

Before: "I was [상태]. [문제] was killing me."
During: "So I built [솔루션]. Here's how..."
After: "Now, [결과]. Here's what I learned."

감정 곡선:
- 시작: 공감 (문제)
- 중간: 긴장 (도전)
- 끝: 해결 (성공 + 교훈)
```

---

## ⚠️ 주의사항

### 흔한 실수

**1. 너무 완벽주의**
```
❌ 포스트마다 30분씩 다듬기
✅ 80% 완성도로 발행 → 피드백 → 개선
```

**2. 스토리 없는 나열**
```
❌ Feature 1, Feature 2, Feature 3...
✅ 문제 → 여정 → 해결 → 배움
```

**3. Engagement 무시**
```
❌ 포스트만 올리고 끝
✅ 댓글 30분 내 응답 → 관계 구축
```

**4. 플랫폼 특성 무시**
```
❌ Twitter 긴 글, LinkedIn 짧은 글
✅ Twitter 짧고 감성적, LinkedIn 길고 전문적
```

---

## 📋 완료 체크리스트

### 스토리 정의
- [ ] 제품 스토리 템플릿 작성 완료
- [ ] Problem-Solution-Journey 명확화
- [ ] Unique Angle 정의

### 아이디어 생성
- [ ] ChatGPT로 20개 아이디어 생성
- [ ] 7가지 콘텐츠 유형 골고루 포함
- [ ] Week 1/2 스토리 아크 연결

### 플랫폼 최적화
- [ ] 주력 플랫폼 2개 버전 작성
- [ ] 각 플랫폼 특성 반영
- [ ] Best posting time 설정

### 우선순위 설정
- [ ] Must-Post 6-8개 선정
- [ ] Should-Post 4-6개 선정
- [ ] Nice-to-Post 나머지

### 문서화
- [ ] docs/marketing/content-calendar.md 저장
- [ ] Google Sheets 또는 Notion 설정
- [ ] 다음 단계: Launch Post Creation

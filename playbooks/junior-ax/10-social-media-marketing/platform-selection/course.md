# Course: Platform Selection 실행 가이드

## 📚 Step-by-Step (30분 완성)

### Step 1: 제품 특성 정의 (5분)

**질문에 답하기:**
```
1. 제품 카테고리는?
   [ ] B2B SaaS
   [ ] B2C 개발자 도구
   [ ] AI/ML 제품
   [ ] 생산성 도구
   [ ] Niche 커뮤니티 제품
   [ ] 기타: _______

2. 타겟 사용자는?
   [ ] 개발자
   [ ] 디자이너
   [ ] 마케터
   [ ] 스타트업 창업자
   [ ] 프리랜서
   [ ] 기타: _______

3. 타겟이 주로 활동하는 곳은? (복수 선택)
   [ ] Twitter/X
   [ ] LinkedIn
   [ ] Reddit
   [ ] Discord
   [ ] Slack 커뮤니티
   [ ] 기타: _______

4. 제품의 핵심 강점은?
   [ ] 기술적 혁신
   [ ] 문제 해결
   [ ] 사용 편의성
   [ ] 가격 경쟁력
   [ ] 디자인
   [ ] 기타: _______
```

---

### Step 2: 레퍼런스 분석 (15분)

#### 유사 제품/경쟁사 조사

**찾는 방법:**
```bash
1. Google Search:
   "[제품 카테고리] + launched"
   예: "AI code review tool launched"

2. ProductHunt:
   - 카테고리별 Top Products 확인
   - 각 제품의 "Promoted on" 섹션 확인

3. Twitter/X:
   - #buildinpublic 검색
   - "#[카테고리]" 해시태그 검색
```

#### 분석 템플릿 (각 레퍼런스마다)

```markdown
## Reference 1: [제품명]

**플랫폼:** Twitter/X, ProductHunt, Reddit
**주력 플랫폼:** Twitter/X

**Twitter/X 활동:**
- Followers: 1,200
- Launch Thread: 152 likes, 23 retweets
- 주요 콘텐츠: Building in Public (개발 과정 공유)
- Engagement: 5-10% (높음)

**ProductHunt:**
- Rank: #3 Product of the Day
- Upvotes: 287
- Comments: 45

**Reddit:**
- 포스트: r/SideProject, r/webdev
- Upvotes: 45, 78
- Comments: 12, 23

**인사이트:**
- Twitter에서 2주간 Building in Public → ProductHunt 런칭
- Behind-the-scenes 콘텐츠가 가장 높은 Engagement
- Reddit은 기술적 세부사항 공유했을 때 반응 좋음
```

#### 빠른 분석 도구: ChatGPT 활용

**프롬프트:**
```
당신은 소셜 미디어 마케팅 전문가입니다.
아래 3개 제품의 소셜 미디어 전략을 비교 분석해주세요.

[제품 리스트]
1. [제품명 1] - [ProductHunt 링크]
2. [제품명 2] - [ProductHunt 링크]
3. [제품명 3] - [ProductHunt 링크]

[분석 항목]
1. 주력 플랫폼은 어디인가?
2. 각 플랫폼별 콘텐츠 전략은?
3. 어떤 플랫폼에서 가장 성공적인가?
4. 공통 패턴은?

표로 정리해주세요.
```

---

### Step 3: 플랫폼 점수 계산 (5분)

#### 점수표 작성

각 플랫폼을 5가지 기준으로 평가 (1-5점):

| 플랫폼 | 타겟 존재 | Promotion 가능 | 활성도 | 경쟁사 성공 | 운영 난이도 | 총점 |
|--------|-----------|----------------|--------|-------------|-------------|------|
| Twitter/X | 5 | 5 | 5 | 4 | 3 | **22** |
| LinkedIn | 3 | 4 | 4 | 3 | 4 | **18** |
| ProductHunt | 5 | 5 | 5 | 5 | 4 | **24** |
| Reddit | 4 | 2 | 5 | 3 | 2 | **16** |
| HackerNews | 4 | 2 | 4 | 2 | 1 | **13** |

**평가 기준:**

1. **타겟 존재 (5점)**
   - 5점: 타겟의 80%+ 활동
   - 3점: 타겟의 50% 활동
   - 1점: 타겟이 거의 없음

2. **Promotion 가능 (5점)**
   - 5점: Self-promotion 환영
   - 3점: 조건부 허용
   - 1점: Self-promotion 금지

3. **활성도 (5점)**
   - 5점: 매일 수천 개 포스트
   - 3점: 주간 수백 개 포스트
   - 1점: 활동 저조

4. **경쟁사 성공 (5점)**
   - 5점: 경쟁사 3개+ 성공
   - 3점: 경쟁사 1-2개 성공
   - 1점: 경쟁사 활동 없음

5. **운영 난이도 (5점, 역점수)**
   - 5점: 운영 매우 쉬움
   - 3점: 보통
   - 1점: 운영 매우 어려움

#### 예시: 개발자 도구 제품

```markdown
**제품:** AI Code Review Tool
**타겟:** 스타트업 개발자

점수표:
| 플랫폼 | 총점 | 선정 |
|--------|------|------|
| ProductHunt | 24 | ✅ 주력 |
| Twitter/X | 22 | ✅ 주력 |
| LinkedIn | 18 | ⭕ 보조 |
| Reddit | 16 | ❌ |
| HackerNews | 13 | ❌ |

**결정:** ProductHunt + Twitter/X (주력), LinkedIn (보조)
```

---

### Step 4: 최종 선정 (5분)

#### 선정 공식

```
주력 플랫폼 2개:
- 1순위: 총점 1위 (필수 런칭)
- 2순위: 총점 2위 (지속 운영)

보조 플랫폼 1개 (선택):
- 3순위: 총점 3위 (여유 있을 때)
```

#### 의사결정 가이드

**Case 1: 개발자 도구**
```
주력: Twitter/X (Building in Public) + ProductHunt (Launch Day)
보조: Reddit (r/webdev, r/programming)

이유:
- 개발자는 Twitter/X에서 가장 활발
- ProductHunt는 개발자 도구 런칭의 표준
- Reddit은 기술적 깊이 공유 시 효과적
```

**Case 2: B2B SaaS**
```
주력: LinkedIn (전문성) + Twitter/X (Reach)
보조: ProductHunt (얼리어답터)

이유:
- B2B 의사결정자는 LinkedIn에 집중
- Twitter/X는 브랜드 인지도 확대
- ProductHunt는 초기 사용자 확보
```

**Case 3: Niche 제품**
```
주력: Reddit (니치 커뮤니티) + Twitter/X
보조: ProductHunt

이유:
- Niche는 특정 서브레딧에서 시작
- Twitter/X로 확산
- ProductHunt는 검증용
```

---

### Step 5: 계정 준비 (추가 10분)

#### 프로필 최적화 체크리스트

**모든 플랫폼 공통:**
- [ ] 프로필 사진: 로고 (512x512px)
- [ ] 헤더/배너: 브랜드 이미지 (플랫폼별 사이즈)
- [ ] Bio/About: 한 문장 설명 + 링크
- [ ] 링크: 랜딩 페이지 또는 제품 URL
- [ ] 핀 고정: 중요 포스트 (있다면)

**Twitter/X:**
```
프로필:
- Name: [제품명]
- Username: @[제품명]
- Bio: [한 줄 설명] | [주요 기능] | [CTA]
  예: "AI-powered code reviews for startups | Save 5 hours/week | Try free →"
- Link: [랜딩 페이지]
- Header: 1500x500px (제품 스크린샷 또는 브랜드 이미지)
```

**LinkedIn:**
```
Company Page:
- Logo: 로고 (300x300px)
- Cover: 1128x191px
- Tagline: 120자 설명
- About: 2,000자 이내 (문제-솔루션-CTA)
- Industry: 선택
- Company Size: 선택
- Website: [랜딩 페이지]
```

**ProductHunt:**
```
Maker Profile:
- Avatar: 개인 사진 (신뢰성)
- Bio: 간단한 소개
- Twitter: 연결
- 이전 Launches: 있다면 추가
```

**Reddit:**
```
Profile:
- Avatar: 로고 또는 개인
- Bio: 간단 (과도한 promotion 금지)
- Karma 쌓기: Launch 전 커뮤니티 참여 (댓글 10+)
```

---

## 🎯 실전 예시

### 예시 1: AI Writing Tool

**제품:** AI 글쓰기 보조 도구  
**타겟:** 콘텐츠 마케터, 블로거

**Step 1: 제품 특성**
```
- 카테고리: B2C AI 도구
- 타겟: 마케터, 작가
- 주 활동 플랫폼: Twitter/X, LinkedIn
- 핵심 강점: 속도, 품질
```

**Step 2: 레퍼런스 분석**
```
1. Jasper AI
   - 주력: Twitter/X (10만 팔로워), LinkedIn
   - 전략: Use case 공유, Before/After
   
2. Copy.ai
   - 주력: Twitter/X (5만 팔로워), ProductHunt (#2)
   - 전략: Templates 공유, 팁

3. Writesonic
   - 주력: ProductHunt (#1), Twitter/X
   - 전략: Feature 런칭, 커뮤니티
```

**Step 3: 점수표**
```
| 플랫폼 | 총점 | 선정 |
|--------|------|------|
| Twitter/X | 23 | ✅ 주력 |
| ProductHunt | 22 | ✅ 주력 |
| LinkedIn | 19 | ⭕ 보조 |
```

**Step 4: 최종 결정**
```
주력: Twitter/X + ProductHunt
보조: LinkedIn

운영 계획:
- Twitter/X: 매일 포스트 (Tips, Use cases)
- ProductHunt: 2주 후 런칭
- LinkedIn: 주 2회 (긴 형식 콘텐츠)
```

---

### 예시 2: Developer Tool

**제품:** API 모니터링 도구  
**타겟:** 백엔드 개발자

**Step 1: 제품 특성**
```
- 카테고리: B2B 개발자 도구
- 타겟: 스타트업 개발자, DevOps
- 주 활동 플랫폼: Twitter/X, Reddit, HackerNews
- 핵심 강점: 기술적 혁신
```

**Step 2: 레퍼런스 분석**
```
1. Sentry
   - 주력: Twitter/X, HackerNews, Reddit
   - 전략: 기술 블로그, 오픈소스
   
2. Datadog
   - 주력: LinkedIn, Twitter/X
   - 전략: Case studies, 웨비나

3. Better Uptime
   - 주력: Twitter/X, ProductHunt (#1)
   - 전략: Building in Public
```

**Step 3: 점수표**
```
| 플랫폼 | 총점 | 선정 |
|--------|------|------|
| Twitter/X | 24 | ✅ 주력 |
| ProductHunt | 23 | ✅ 주력 |
| Reddit | 18 | ⭕ 보조 |
| HackerNews | 16 | ❌ (기술적 깊이 더 필요) |
```

**Step 4: 최종 결정**
```
주력: Twitter/X + ProductHunt
보조: Reddit (r/webdev, r/devops)

운영 계획:
- Twitter/X: 매일 (개발 과정 공유)
- ProductHunt: 3주 후 런칭
- Reddit: 주 1회 (기술 인사이트)
```

---

## 💡 Pro Tips

### 1. 플랫폼 간 시너지 활용
```
Twitter/X (Building in Public 2주)
    ↓
팔로워 50-100명 확보
    ↓
ProductHunt 런칭 (Twitter 팔로워에게 알림)
    ↓
ProductHunt 성공 → Twitter에 공유
    ↓
Twitter/X 팔로워 증가
    ↓
선순환
```

### 2. 시작은 하나에 집중
```
Week 1: Twitter/X만 집중
- 매일 포스트
- 알고리즘 학습
- 팔로워 확보

Week 2: ProductHunt 준비 시작
Week 3: ProductHunt 런칭
Week 4: Reddit 시작 (여유 있으면)
```

### 3. 플랫폼별 목적 명확히
```
Twitter/X: 브랜드 인지도 + 커뮤니티
ProductHunt: 한 번의 Big Launch + 사용자 확보
LinkedIn: 신뢰성 + B2B 네트워킹
Reddit: 피드백 + Niche 사용자
```

### 4. 측정 지표 설정
```
각 플랫폼마다:
- Primary Metric: 주요 지표 (예: Twitter Followers)
- Secondary Metric: 보조 지표 (예: Engagement Rate)
- Success Metric: 성공 기준 (예: 100 Followers in 2 weeks)
```

---

## ⚠️ 주의사항

### 흔한 실수

**1. 너무 많은 플랫폼**
```
❌ 5개 플랫폼 동시 시작
✅ 2개 집중 → 성공 후 확장
```

**2. 타겟 무시**
```
❌ "Instagram이 핫하니까 Instagram!"
✅ "우리 타겟은 개발자 → Twitter/X"
```

**3. 레퍼런스 분석 생략**
```
❌ 직감으로 선택
✅ 경쟁사 3개 분석 → 패턴 파악
```

**4. 플랫폼 특성 무시**
```
❌ 모든 플랫폼에 똑같은 콘텐츠
✅ 각 플랫폼 특성에 맞게 최적화
```

---

## 📋 완료 체크리스트

### 분석 단계
- [ ] 제품 특성 정의 완료
- [ ] 레퍼런스 3개 분석 완료
- [ ] 점수표 작성 완료

### 선정 단계
- [ ] 주력 플랫폼 2개 선정
- [ ] 보조 플랫폼 1개 선정 (선택)
- [ ] 선정 근거 문서화 (1페이지)

### 준비 단계
- [ ] 선정 플랫폼 계정 확인
- [ ] 프로필 최적화 완료
- [ ] 알림 설정 완료 (모바일 앱)

### 문서화
- [ ] docs/marketing/platform-selection.md 저장
- [ ] 다음 단계: Content Strategy

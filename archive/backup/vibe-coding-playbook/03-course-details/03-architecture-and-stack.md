# Chapter 3: Architecture & Stack (The Structure)

**올바른 기술 스택과 구조를 선택하세요**


## Infra: IaC (Infrastructure as Code) 필수

### 핵심 원칙

**무조건 IaC. 클릭으로 서버 띄우기 금지. 코드로 남겨야 자산이 된다.**

### 왜 IaC인가?

```
콘솔 클릭              코드로 관리
    ↓                      ↓
기록 안 남음           Git에 저장됨
    ↓                      ↓
재현 불가능            누구나 재현 가능
    ↓                      ↓
나만 알고 있음         팀 전체가 이해
```

### 권장 도구

#### Terraform (멀티 클라우드)
- AWS, GCP, Azure 모두 지원
- 선언적 구문
- 상태 관리 자동화

#### Pulumi (코드 우선)
- TypeScript, Python, Go 등으로 작성
- 프로그래밍 언어의 모든 기능 활용
- 타입 안전성

#### AWS CDK (AWS 전용)
- TypeScript/Python으로 AWS 리소스 정의
- AWS에 최적화
- CloudFormation 자동 생성


---


## 안티패턴 vs 올바른 방법

### ❌ 안티패턴

```
1. AWS Console 접속
2. EC2 클릭
3. Launch Instance 클릭
4. 설정 입력 (수동)
5. 완료
```

**문제점:**
- 기록이 안 남음
- 재현 불가능
- 실수하기 쉬움
- 팀원이 모름

### ✅ 올바른 방법

```hcl
# main.tf
resource "aws_instance" "app" {
  ami           = "ami-12345678"
  instance_type = "t3.micro"
  
  tags = {
    Name = "vibe-coding-server"
  }
}
```

```bash
# 한 줄로 인프라 생성
terraform apply
```

**장점:**
- Git에 기록
- 누구나 재현 가능
- 코드 리뷰 가능
- 자동화 가능


---


## Database: Supabase 표준화

### 왜 Supabase?

#### 1. 통합 플랫폼
- Auth, DB, Edge Function이 하나로
- 별도 설정 불필요
- 즉시 사용 가능

#### 2. SQL 직접 작성
- ORM 추상화 회피
- 성능 최적화 가능
- 복잡한 쿼리도 쉽게

#### 3. Real-time 기본 지원
- 별도 WebSocket 설정 불필요
- DB 변경 사항 실시간 반영
- 채팅, 알림 등 쉽게 구현

### Supabase 구성

```
Supabase
├── Database (PostgreSQL)
│   ├── 테이블 관리
│   ├── Row Level Security
│   └── 트리거/함수
│
├── Auth (인증)
│   ├── 이메일/비밀번호
│   ├── OAuth (Google, GitHub 등)
│   └── Magic Link
│
├── Storage (파일 업로드)
│   ├── 이미지
│   ├── 문서
│   └── 비디오
│
└── Edge Functions (Serverless)
    ├── API 엔드포인트
    ├── 크론 작업
    └── Webhook 처리
```

### 실전 예시

```typescript
// Supabase 클라이언트 생성
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
)

// 데이터 조회 (간단!)
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)

// Real-time 구독
supabase
  .from('messages')
  .on('INSERT', payload => {
    console.log('새 메시지:', payload.new)
  })
  .subscribe()
```


---


## Design System

### 1. Figma 활용

#### TalkToFigma 플러그인
- 디자인 토큰 자동 추출
- 컴포넌트 명세서 생성
- 코드와 디자인 동기화

#### 워크플로우
```
Figma 디자인
    ↓
TalkToFigma 추출
    ↓
디자인 토큰 (JSON)
    ↓
코드에 적용
```


---


## 2. CSS 트러블슈팅

### 문제: Tailwind가 안 먹힘

```jsx
// ❌ 작동 안 함
<div className="bg-blue-500">
  Content
</div>
```

### 해결: 강제 적용 (3단계)

#### 1단계: Tailwind 재시도
```jsx
// 클래스명 확인
<div className="bg-blue-500 text-white p-4">
```

#### 2단계: CSS Module
```jsx
// styles.module.css
.container {
  background-color: #3b82f6;
}

// Component
<div className={styles.container}>
```

#### 3단계: Inline Style (강제!)
```jsx
// 무조건 작동함
<div style={{ backgroundColor: '#3b82f6' }}>
  Content
</div>
```

### 핵심 원칙

> **보이는 것이 우선. 리팩토링은 나중에.**

```
완벽한 코드 < 당장 보이는 결과물
```


---


## 기술 스택 선택 가이드

### 프론트엔드

| 프로젝트 유형 | 추천 스택 |
|-------------|---------|
| 웹 앱 | Next.js + Tailwind |
| 모바일 앱 | React Native + Expo |
| 데스크탑 앱 | Electron + React |

### 백엔드

| 요구사항 | 추천 스택 |
|---------|---------|
| 빠른 프로토타입 | Supabase |
| 복잡한 로직 | Node.js + Express |
| 고성능 | Go + Gin |

### 인프라

| 클라우드 | 추천 IaC |
|---------|---------|
| AWS | Terraform or CDK |
| 멀티 클라우드 | Terraform |
| 간단한 배포 | Vercel/Netlify |


---


## 실전 세팅 예시

### Next.js + Supabase + Terraform

```bash
# 1. Next.js 프로젝트 생성
npx create-next-app@latest my-app --typescript

# 2. Supabase 설치
npm install @supabase/supabase-js

# 3. Terraform 초기화
terraform init

# 4. 인프라 배포
terraform apply

# 5. Next.js 배포
vercel deploy
```


---


## 체크리스트

기술 스택 선택:
- [ ] 프로젝트 요구사항 분석
- [ ] 팀 기술 스택 고려
- [ ] 학습 곡선 평가
- [ ] 커뮤니티 활성도 확인

IaC 적용:
- [ ] 모든 인프라를 코드로
- [ ] Git에 커밋
- [ ] 팀원들과 공유
- [ ] 문서화

CSS 처리:
- [ ] Tailwind 먼저 시도
- [ ] 안 되면 CSS Module
- [ ] 최종: Inline Style
- [ ] 나중에 리팩토링


---


## 흔한 실수

### 실수 1: 콘솔에서 수동 설정
**해결**: 처음부터 IaC로 시작

### 실수 2: ORM에만 의존
**해결**: SQL도 직접 작성할 수 있어야 함

### 실수 3: CSS 완벽주의
**해결**: 일단 보이게 만들고 나중에 정리


---


## 다음 단계

기술 스택을 익혔다면 [Prompt Engineering](./04-prompt-engineering.md)으로 AI 활용법을 배우세요!

**Go Vibe, Stay Flow!** 🚀

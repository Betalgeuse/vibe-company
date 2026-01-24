- **tmux** + **Vim/Neovim**
  - 최고 효율
  - 마우스 완전 배제 가능


### Chapter 2: Workflow & Debugging (The Flow)

#### Pre-work: Reference First

**원칙:** 유사한 성공 사례 3개 이상 분석 후 코딩 시작

**리서치 체크리스트:**
```
□ 이 기능을 구현한 서비스 3개 찾기
□ 각 서비스의 UX 패턴 스크린샷
□ 기술 스택 추정 (DevTools로 확인)
□ 공통 패턴 추출
□ 우리 프로젝트에 적용 가능한 요소 정리
```

#### Debugging 원칙

**1. 인간의 감에 의존하지 말 것**
- Comet/Codex 등 도구의 로그 분석 결과 신뢰
- "아마 이게 문제일 것 같은데..." → 금지
- 데이터와 로그가 말하게 하라

**2. 디버깅 중 대기 시간 활용**
```bash
# Pane 1: 디버깅 실행
npm run debug

# Pane 2: 로그 모니터링
tail -f debug.log

# Pane 3: 대기 시간 동안 문서 작업
vim README.md
```

**3. Context Switching 금지**
- 터미널 창 하나만 띄우고 멍하니 있지 말 것
- 디버깅이 돌아가는 동안 다른 Pane에서 병렬 작업


### Chapter 3: Architecture & Stack (The Structure)

#### Infra: IaC (Infrastructure as Code) 필수

**원칙:** 무조건 IaC. 클릭으로 서버 띄우기 금지. 코드로 남겨야 자산이 된다.

**권장 도구:**
- **Terraform** (멀티 클라우드)
- **Pulumi** (코드 우선)
- **AWS CDK** (AWS 전용)

**안티패턴:**
```
❌ AWS Console 접속 → EC2 클릭 → Launch Instance
```

**올바른 방법:**
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
terraform apply  # 한 줄로 인프라 생성
```

#### Database: Supabase 표준화

**이유:**
- Auth, DB, Edge Function 통합
- SQL 직접 작성 가능 (ORM 추상화 회피)
- Real-time 기본 지원

**구성:**
```
Supabase
├── Database (PostgreSQL)
├── Auth (이메일, OAuth, Magic Link)
├── Storage (파일 업로드)

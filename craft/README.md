# Craft

**승인된 Craft (도구/명령) 버전 관리**

---

## 📂 구조

```
craft/
├── {role}/
│   └── {command}/
│       └── {version}/
│           └── {command}.md    ← .factory/commands/에 바로 복사 가능
├── README.md
└── CHANGELOG.md
```

**예시:**
```
craft/
├── ceo/
│   ├── biz-idea/
│   │   └── v1.0/
│   │       └── biz-idea.md
│   └── biz-idea-b2b/
│       └── v2.0/
│           └── biz-idea-b2b.md
├── fde/
│   ├── research-idea/
│   │   └── v1.0/
│   │       └── research-idea.md
│   └── orchestrator/
│       └── v1.0/
│           └── orchestrator.md
├── shared/
│   └── orchestrator/
│       └── v1.0/
│           └── orchestrator.md
├── junior-ax/
│   └── paper2code/
│       └── v1.0/
│           └── paper2code.md
└── lead-ax-engineer/
    └── orchestrator/
        └── v1.0/
            └── orchestrator.md
```

**사용법:** craft에서 .factory/commands로 바로 복사
```bash
cp craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md .factory/commands/
```

---

## 🎯 Craft란?

**Craft = 재사용 가능한 도구/명령**

- Draft (작업 중) ≠ Craft (완성된 도구)
- Craft = 승인되어 프로덕션에서 사용 중인 버전
- `.factory/commands/` = 실행 가능한 최신 버전 (craft에서 복사)

### ⚠️ 중요: .factory/commands/ 구조 규칙

```
.factory/commands/
├── biz-idea.md           ✅ OK - flat 파일
├── biz-idea-b2b.md       ✅ OK - flat 파일
├── research-idea.md      ✅ OK - flat 파일
└── ceo/                  ❌ NO - 폴더 금지!
```

**`.factory/commands/` 하위에는 폴더가 있으면 안됨!** 반드시 flat한 `.md` 파일만 배치.

---

## 📦 Commands by Role

### CEO Craft

| Command | Version | 용도 | 타겟 |
|---------|---------|------|------|
| **biz-idea** | v1.0 | Micro-SaaS 아이디어 검증 | 1인 기업, 프리랜서, Prosumer |
| **biz-idea-b2b** | v2.0 | B2B SMB SaaS 아이디어 검증 | SMB (10-200명 기업) |

#### biz-idea vs biz-idea-b2b

| 항목 | biz-idea (v1.0) | biz-idea-b2b (v2.0) |
|------|-----------------|---------------------|
| **타겟** | 1인 기업, 프리랜서 | SMB (10-200명 기업) |
| **ACV** | $0-5K | $3K-30K |
| **GTM** | PLG (100% Self-serve) | Product-Led Sales (PLG + Light Sales) |
| **TAM** | $10-50M | $50M-500M |
| **Sales Cycle** | 즉시-1주 | 1-3개월 |
| **핵심 지표** | MRR, Churn | ACV, CAC, LTV, NRR |
| **Pass 기준** | 85점 + Monopoly 20/25 | 80점 + Unit Economics PASS |

### Junior AX Craft

| Command | Version | 용도 |
|---------|---------|------|
| **paper2code** | v1.0 | 논문/기술 문서를 코드로 변환 |

### FDE Craft

| Command | Version | 용도 |
|---------|---------|------|
| **research-idea** | v1.0 | 기술 아이디어 리서치 |
| **orchestrator** | v1.0 | FDE 워크플로우 자동화 |

### Shared Craft

| Command | Version | 용도 |
|---------|---------|------|
| **orchestrator** | v1.0 | 전체 워크플로우 자동화 |

### Lead AX Engineer Craft

| Command | Version | 용도 |
|---------|---------|------|
| **orchestrator** | v1.0 | AX 팀 워크플로우 자동화 |

---

## 🔄 버전 관리 규칙

### 새 버전 생성 시점
1. Major 변경 (breaking change)
2. 새로운 비즈니스 모델 타겟 (예: B2B 추가)
3. 중요 기능 추가/삭제

### 버전 생성 방법
```bash
cd /Users/zayden/Documents/assets

# 새 버전 폴더 생성 및 파일 복사
mkdir -p craft/ceo/biz-idea/v1.1
cp craft/ceo/biz-idea/v1.0/biz-idea.md craft/ceo/biz-idea/v1.1/biz-idea.md

# .factory/commands에 배포 (바로 복사)
cp craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md .factory/commands/

# 변경사항 기록
echo "## v2.0 (2026-01-25)" >> craft/CHANGELOG.md
echo "- Added: biz-idea-b2b (B2B SMB SaaS 파이프라인)" >> craft/CHANGELOG.md
```

---

## 📊 Craft 사용 통계

| Craft | 사용 빈도 | 성공률 | 평균 소요 시간 |
|-------|----------|--------|---------------|
| biz-idea | 주 1회 | 85% | 30분 |
| paper2code | 월 2회 | 75% | 2시간 |
| research-idea | 주 2회 | 90% | 1시간 |
| orchestrator | 일 1회 | 95% | 5분 |

*(업데이트: 2026-01-17)*

---

## 🚀 빠른 시작

### 1. Craft 찾기
```bash
# 모든 Craft 버전 목록
find craft -name "*.md" -path "*/v*"

# 역할별 Craft
ls craft/ceo/
ls craft/fde/
```

### 2. Craft 배포
```bash
# craft에서 .factory/commands로 복사 (파일명 그대로)
cp craft/ceo/biz-idea-b2b/v2.0/biz-idea-b2b.md .factory/commands/
```

### 3. 결과 확인
```bash
# Micro-SaaS 결과
ls draft/biz-idea/candidate/

# B2B SMB SaaS 결과
ls draft/biz-idea/b2b/
```

---

## 📚 Craft 개발 프로세스

```
1. 아이디어 → .factory/droids/ 에서 Custom Droid 생성
2. 테스트 → draft/에서 여러 번 실행
3. 검증 → Pass 기준 달성
4. 버전 생성 → craft/{role}/{command}/vX.X.md
5. 배포 → .factory/commands/로 복사
```

---

## 🔗 관련 문서

- [../.factory/commands/](../.factory/commands/) - 실행 가능한 최신 Command (craft에서 복사)
- [../.factory/droids/](../.factory/droids/) - Custom Droid 정의
- [../.factory/workflows/](../.factory/workflows/) - Workflow 스펙

## 📋 배포 체크리스트

```bash
# 1. craft에서 .factory/commands로 복사 (폴더 없이 flat하게)
cp craft/{role}/{command}/{version}/{command}.md .factory/commands/

# 2. 확인 (폴더 없이 .md 파일만 있어야 함)
ls .factory/commands/
# 출력 예시:
# biz-idea.md  biz-idea-b2b.md  research-idea.md  ...
```

### ⚠️ 주의사항
- `.factory/commands/` 하위에 **폴더 생성 금지**
- 반드시 `{command}.md` 형태의 flat 파일만 배치
- craft의 버전/role 구조는 배포 시 무시됨

---

## 📚 참고 도서

이 Craft들은 다음 책들의 개념을 녹여냈습니다:

| 책 | 저자 | Craft에 반영된 개념 |
|----|------|---------------------|
| **The Embedded Entrepreneur** | Arvid Kahl | 니치 마켓 탐색, 커뮤니티 기반 검증, ICP 분석 |
| **Buy Back Your Time** | Dan Martell | Replacement Ladder, 자동화 전략, 위임 프로세스 |
| **Zero to One** | Peter Thiel | Monopoly 점수, 차별화 전략, 0→1 vs 1→n 구분 |

### 책별 적용 위치

**The Embedded Entrepreneur**
- `biz-idea` → 니치 마켓 키워드 탐색, 커뮤니티 검증
- `@niche-market-hunter` → Audience-first 접근법

**Buy Back Your Time**
- `biz-idea` → Automation Strategy 섹션
- Playbooks → Replacement Ladder 기반 역할 위임

**Zero to One**
- `biz-idea` → Monopoly Score (/25), Competition Check
- `biz-idea-b2b` → 차별화 전략, 독점 가능성 평가

---

*Last Updated: 2026-01-29*

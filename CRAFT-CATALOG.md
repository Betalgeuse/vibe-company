# Craft Catalog (도구 카탈로그)

**현재 사용 가능한 모든 Craft (도구/명령)**

---

## 🎯 Craft란?

**Craft = 검증되어 반복 사용 가능한 도구/명령**

- 위치: `.factory/commands/`
- 특징: FCSR 80%+ 달성한 검증된 도구
- 사용법: 명령 실행 → Draft 생성 → 결과 확인

---

## 📦 CEO Craft (1개)

### biz-idea
**신사업 아이디어 자동 검증 파이프라인**

```bash
biz-idea "indie hacker를 위한 SEO 자동화"
```

**📊 스펙:**
- 소요 시간: 30분
- 성공 기준: 85점 이상
- 결과물: `draft/biz-idea/latest/idea-*.md`

**🎯 Output:**
1. The Micro Opportunity (시장 기회)
2. Product Spec (MVP 스펙)
3. Competition Check (경쟁 분석)
4. Automation Strategy (자동화 전략)
5. Cost Estimate (비용 추정)
6. 최종 점수 (/100)

**📖 상세:** [.factory/commands/ceo/biz-idea.md](.factory/commands/ceo/biz-idea.md)

---

## 📦 Junior AX Craft (1개)

### paper2code
**논문/기술 문서를 실행 가능한 코드로 변환**

```bash
paper2code "https://arxiv.org/abs/xxxx"
```

**📊 스펙:**
- 소요 시간: 2시간
- 성공률: 75%
- 결과물: `draft/paper2code/latest/`

**🎯 Output:**
1. 알고리즘 추출
2. 코드 구현 (Python/TypeScript)
3. 테스트 케이스
4. 사용 예시

**📖 상세:** [.factory/commands/junior-ax/paper2code.md](.factory/commands/junior-ax/paper2code.md)

---

## 📦 FDE Craft (1개)

### research-idea
**기술 아이디어 글로벌 레퍼런스 리서치**

```bash
research-idea "실시간 협업 에디터 아키텍처"
```

**📊 스펙:**
- 소요 시간: 1시간
- 성공률: 90%
- 결과물: `draft/research-idea/latest/`

**🎯 Output:**
1. 글로벌 Top 3 레퍼런스
2. 아키텍처 패턴 분석
3. 기술 스택 추천
4. 우리 프로젝트 적용 전략

**📖 상세:** [.factory/commands/FDE/research-idea.md](.factory/commands/FDE/research-idea.md)

---

## 📦 Shared Craft (1개)

### orchestrator
**여러 Craft를 연결하여 End-to-End 자동화**

```bash
orchestrator "biz-idea → research-idea → draft-mvp"
```

**📊 스펙:**
- 소요 시간: 5분 (설정) + 각 Craft 시간
- 성공률: 95%
- 결과물: `draft/orchestrator/latest/`

**🎯 Output:**
1. 파이프라인 다이어그램
2. 각 단계 결과물 통합
3. 최종 리포트

**📖 상세:** [.factory/commands/shared/orchestrator.md](.factory/commands/shared/orchestrator.md)

---

## 🔜 개발 예정 Craft

### Lead AX Engineer
- [ ] `code-review-auto` - 자동 코드 리뷰
- [ ] `refactor-legacy` - 레거시 코드 리팩토링

### AX Admin
- [ ] `weekly-report` - 주간 리포트 자동 생성
- [ ] `meeting-summary` - 회의록 자동 정리

### AX Sales
- [ ] `pitch-deck-gen` - 피치덱 자동 생성
- [ ] `customer-analysis` - 고객 분석 리포트

---

## 📊 Craft 비교표

| Craft | Role | 시간 | 성공률 | 난이도 | 사용 빈도 |
|-------|------|------|--------|--------|----------|
| biz-idea | CEO | 30분 | 85% | ⭐⭐ | 주 1회 |
| paper2code | Junior AX | 2시간 | 75% | ⭐⭐⭐ | 월 2회 |
| research-idea | FDE | 1시간 | 90% | ⭐⭐ | 주 2회 |
| orchestrator | Shared | 5분 | 95% | ⭐ | 일 1회 |

---

## 🚀 빠른 시작

### 1단계: Craft 선택
```bash
# 역할별로 찾기
ls .factory/commands/ceo/       # CEO용
ls .factory/commands/junior-ax/ # Junior AX용
ls .factory/commands/FDE/ # FDE용
ls .factory/commands/shared/    # 공용
```

### 2단계: Craft 실행
```bash
# 예: CEO가 biz-idea 실행
biz-idea "1인 개발자를 위한 자동 배포 도구"
```

### 3단계: 결과 확인
```bash
# Draft에서 결과 확인
cd draft/biz-idea/latest/
cat idea-*.md

# 점수 확인
head -1 idea-*.md
# Score: 88/100 ✅ PASS
```

### 4단계: 승인 (85점+)
```bash
# Archive로 이동
mkdir -p archive/approved/biz-idea/
mv draft/biz-idea/latest/idea-*.md archive/approved/biz-idea/
```

---

## 🛠️ Craft 개발 가이드

### 새 Craft 만드는 법

**1. 반복 작업 3회 이상 발견**
```
같은 작업을 3번 했다면 → Craft로 만들기!
```

**2. Custom Droid로 시작**
```bash
# Droid 생성
factory-cli create-droid "my-new-craft"
```

**3. Draft에서 테스트 (10회+)**
```bash
# 여러 케이스로 테스트
my-new-craft "케이스 1"
my-new-craft "케이스 2"
...

# FCSR 측정
성공: 8/10 = 80% ✅
```

**4. Commands로 승격**
```bash
# 80%+ 달성 시
mv .factory/droids/my-new-craft.md .factory/commands/역할/
```

**5. Archive 스냅샷**
```bash
# 월말에 버전 기록
cp -r .factory/commands/* archive/craft/v1.X/
```

---

## 📚 관련 문서

- [.factory/commands/](.factory/commands/) - 현재 최신 Craft 전체
- [archive/craft/](archive/craft/) - 승인된 Craft 버전 기록
- [README.md](README.md) - Craft-Draft-Archive 시스템 설명

---

## 📈 통계 (2026-01-17 기준)

- **총 Craft:** 4개
- **Role 커버리지:** 4개 (CEO, Junior AX, FDE, Shared)
- **평균 성공률:** 86%
- **평균 소요 시간:** 1시간
- **총 실행 횟수:** 142회
- **Draft 생성:** 89개
- **Archive 승인:** 34개

---

*"Craft = 한 번 만들면 평생 사용"*

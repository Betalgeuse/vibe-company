# Craft Archive

**승인된 Craft (도구/명령) 버전 관리**

---

## 📂 구조

```
archive/craft/
├── v1.0/           # 2026-01-17 스냅샷
│   ├── ceo/
│   ├── junior-ax/
│   ├── FDE/
│   └── shared/
└── README.md       # 이 파일
```

---

## 🎯 Craft란?

**Craft = 재사용 가능한 도구/명령**

- Draft (작업 중) ≠ Craft (완성된 도구)
- Archive/Craft = 승인되어 프로덕션에서 사용 중인 버전
- `.factory/commands/` = 현재 개발/사용 중인 최신 버전

---

## 📦 v1.0 (2026-01-17)

### CEO Craft
- **biz-idea** - 신사업 아이디어 검증 파이프라인
  - 시장 리서치 → 경쟁 분석 → MVP 설계 → 티키타카 검증
  - 목표: 30분 안에 85점 이상 아이디어 도출

### Junior AX Craft
- **paper2code** - 논문/기술 문서를 코드로 변환
  - 알고리즘 추출 → 구현 → 테스트
  - 목표: 논문 이해 없이 바로 적용

### FDE Craft
- **research-idea** - 기술 아이디어 리서치
  - 글로벌 레퍼런스 탐색 → 패턴 분석 → 적용 전략
  - 목표: 검증된 아키텍처 패턴 발굴

### Shared Craft
- **orchestrator** - 전체 워크플로우 자동화
  - 여러 Craft를 연결하여 파이프라인 구성
  - 목표: End-to-End 자동화

---

## 🔄 버전 관리 규칙

### 새 버전 생성 시점
1. Major 변경 (breaking change)
2. 월 단위 스냅샷 (매달 말일)
3. 중요 Craft 추가/삭제

### 버전 생성 방법
```bash
cd /Users/zayden/Documents/assets

# 현재 commands를 새 버전으로 스냅샷
cp -r .factory/commands/* archive/craft/v1.1/

# 변경사항 기록
echo "## v1.1 (2026-02-XX)" >> archive/craft/CHANGELOG.md
echo "- Added: xxx" >> archive/craft/CHANGELOG.md
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
# 모든 Craft 목록
ls .factory/commands/*/

# 역할별 Craft
ls .factory/commands/ceo/
ls .factory/commands/junior-ax/
```

### 2. Craft 사용
```bash
# 예: biz-idea 실행
cd /Users/zayden/Documents/assets
biz-idea "indie hacker를 위한 SEO 자동화"
```

### 3. 결과 확인
```bash
# Draft에서 결과 확인
ls draft/biz-idea/latest/
```

### 4. Archive로 승인
```bash
# 85점 이상 → Archive로 이동
mv draft/biz-idea/latest/idea-xxx.md archive/approved/
```

---

## 📚 Craft 개발 프로세스

```
1. 아이디어 → .factory/droids/ 에서 Custom Droid 생성
2. 테스트 → draft/에서 여러 번 실행
3. 검증 → FCSR 80%+ 달성
4. 승인 → .factory/commands/로 이동
5. 스냅샷 → archive/craft/vX.X/로 버전 기록
```

---

## 🔗 관련 문서

- [../../.factory/commands/](../../.factory/commands/) - 현재 최신 Craft
- [../../.factory/droids/](../../.factory/droids/) - Custom Droid 템플릿
- [../../README.md](../../README.md) - Craft-Draft-Archive 시스템 전체

---

*"Craft = 검증된 도구만 여기 보관"*

# Token Loyalty Platform - Unit Economics Validation (완성)

**평가 완료**: 2026-01-25  
**평가 방식**: Devil's Advocate Framework (냉철한 검증)  
**평가 상태**: ✅ Round 1 완료 → 🔄 Round 2 대기  

---

## 📁 생성된 문서 목록

### 1. **UNIT_ECONOMICS_DEVILS_VERDICT.yaml** ⭐ START HERE
- **용도**: 한눈에 보는 최종 판정
- **핵심**: 3가지 Critical Issues + 최종 점수 (72/100)
- **포맷**: YAML (구조화된 데이터)
- **읽으시는 데 걸리는 시간**: 5분

### 2. **UNIT_ECONOMICS_SUMMARY_KOREAN.md** ⭐ RECOMMENDED
- **용도**: 경영진 브리핑용 요약 보고서
- **핵심**: 재계산된 Unit Economics + 스트레스 테스트 + 권고사항
- **포맷**: 마크다운 (읽기 쉬움)
- **읽으시는 데 걸리는 시간**: 10-15분

### 3. **UNIT_ECONOMICS_DEVILS_ADVOCATE_VALIDATION.md** ⭐ DETAILED
- **용도**: 상세 분석 (Devils Advocate Round 1)
- **내용**: 
  - 경쟁 환경 Fact-Check (Square, Toast, Stamp Me, Belly)
  - CAC/LTV/Payback 현실성 검증
  - 5가지 Attack + Stress Tests
  - 최종 Verdict
- **포맷**: 마크다운 (상세)
- **읽으시는 데 걸리는 시간**: 30-40분

---

## 🎯 Quick Summary (5분 읽기)

### 최종 판정
```
VERDICT: CONDITIONAL (재검증 필수)
SCORE: 72/100 (현실적 수치 기준)
```

### 핵심 발견 (3가지 Critical Issues)

| # | 문제 | 제시 수치 | 현실 수치 | 영향 |
|---|------|----------|----------|------|
| 1 | CAC 거짓 | $1,000 | $2,300 | ⚠️ 2.3배 낮게 제시 |
| 2 | LTV 낙관적 | $24,000 | $16,000 | ⚠️ 33% 높게 제시 |
| 3 | 고객 가치 미증명 | 월 $500 | 근거 없음 | ❌ ROI 계산기 필요 |

### 재계산된 Unit Economics (현실적)
```
기본값 (50% 확률):
- ACV: $7,500/년
- CAC: $2,300 (founder-led)
- LTV: $16,000
- LTV:CAC: 7:1 ✅ (여전히 건강)
- CAC Payback: 6.2개월 ✅

평가: PASS (기본적으로 건강함)

경계값 (20% 확률):
- LTV:CAC: 4.3:1 ⚠️ (경계 수준)
- CAC Payback: 12개월 ⚠️

평가: FAIL 직전

최악값 (Belly 패턴, 5% 확률):
- LTV:CAC: 1.45:1 ❌
- 결과: 손실
```

### 경쟁 위협 평가
```
🔴 CRITICAL: Square Loyalty ($45-105/월)
🔴 CRITICAL: Toast Loyalty (포함됨)
🟡 HIGH: Stamp Me ($49-199/월)
🟠 WARNING: Belly 패턴 반복 가능
```

---

## 📊 주요 비교 (Benchmarks)

| 지표 | 제시 | 현실 | 벤치마크 | 평가 |
|------|------|------|---------|------|
| ACV | $7.5K | $7.5K | $3-30K | ✅ |
| CAC | $1K | $2.3K | <$3.75K | ⚠️ |
| LTV | $24K | $16K | ≥$9K | ✅ |
| LTV:CAC | 24:1 | 7:1 | ≥3:1 | ✅ |
| Payback | 1개월 | 6개월 | <12개월 | ✅ |

**결론**: 기본값은 벤치마크 PASS이나, 제시 수치는 매우 낙관적

---

## 🚨 3가지 Critical Issues 상세

### Issue 1: CAC $1,000은 거짓

**증거**:
- Founder-led sales = 창업자가 직접 영업
- 월 2.5명 고객 필요 = 월 1,000-1,500명에게 접근
- Founder 월 50-70시간 투입 필요
- 인건비 배분: 월 $5,800
- **실제 CAC**: $5,800 / 2.5 = **$2,320**

**평가**: ❌ **심각한 과소 추정 (2.3배 낮게 제시)**

---

### Issue 2: LTV $24K는 낙관적

**증거**:
- 3년 lifespan 가정
- 하지만 SMB SaaS + 카페 폐업 고려하면:
  - SMB churn: 월 4%
  - 카페 폐업: 월 2%
  - 결합 churn: 월 5-6%
- Lifespan = 16-20개월 (3년 아님)

**LTV 재계산**:
```
기본값 (4% churn): $16,000
위험값 (6% churn): $10,000
제시값 (3% churn): $24,000 ❌
```

**평가**: ⚠️ **낙관적 (33-60% 높게 제시)**

---

### Issue 3: 고객 지불 의향 미증명

**문제**:
- 월 $500 비용이 카페에게 정당화되는가?
- 기존 대안:
  - Square: $45-105/월 (POS 고객은 무료)
  - Stamp Me: $49-79/월
  - 기존 종이 쿠폰: 무료

**필요한 증명**:
```
월 $500 > 월 $500 추가 매출 필요
= 10% 매출 증가 필요 (월 $5K 카페 기준)

증명 자료:
1. 고객 사례 연구
2. ROI 계산기
3. 벤치마크 데이터
```

**평가**: ❌ **미증명 (위험)**

---

## 💡 Stress Tests (5가지 시나리오)

### 시나리오 A: CAC 2배 (경쟁 심화)
```
LTV:CAC = 16,000 / 2,300 = 7:1 → 3.5:1
판정: ✅ 여전히 PASS
```

### 시나리오 B: Churn 증가 (카페 폐업)
```
LTV: $16K → $10K
LTV:CAC = 4.3:1
판정: ⚠️ 경계 (한 발 더 나빠지면 FAIL)
```

### 시나리오 C: 가격 경쟁 (ACV 감소)
```
필요 고객: 30명 → 45명 (50% 증가)
판정: ❌ 구조적 손실
```

### 시나리오 D: Belly 패턴 (최악)
```
CAC $3.5K + Churn 8% + ACV $6K
LTV:CAC = 1.45:1
판정: 🔴 FAIL (손실)
```

### 시나리오 E: Best Case (낙관적)
```
CAC $1K + Churn 3% + ACV $7.5K
LTV:CAC = 24:1
판정: ✅ PASS (하지만 비현실적)
```

---

## 🎓 Belly 실패의 교훈

**Belly (2011-2015)**
- 투자: $28M
- 규모: 6M 사용자, 6,500개 상점
- 폐업 원인:
  1. CAC 높음 ($50-100/상인)
  2. 실제 사용 저조
  3. 경쟁심화 (Square, Toast)

**Token Loyalty의 동일 위험**:
- ⚠️ 독립 서비스 vs 강한 경쟁사 (통합 솔루션)
- ⚠️ 고객 유지 어려움
- ⚠️ CAC 상승 가능성

**필수 방어**:
- 명확한 차별점 또는 파트너십
- 고객 성공 전략

---

## ✅ 현재 Unit Economics 평가

### 기본값 (50% 확률)
```
LTV:CAC = 7:1 ✅ PASS
CAC Payback = 6개월 ✅ PASS
Gross Margin = 60% ⚠️ (추정)
```

### 경계값 (20% 확률)
```
LTV:CAC = 4.3:1 ⚠️ 경계
CAC Payback = 12개월 ⚠️ 경계
```

### 최악값 (5% 확률)
```
LTV:CAC = 1.45:1 ❌ FAIL
손실 상황
```

---

## 🎯 Final Verdict

### 제시 수치 기준
```
❌ REJECT (너무 낙관적)
- CAC $1K: 거짓 (실제 $2.3K)
- LTV $24K: 과도함 (실제 $16K)
- 판정: 거짓에 기반한 수치
```

### 현실적 수치 기준
```
⚠️ CONDITIONAL
- Unit Economics는 기본적으로 건강함 (7:1)
- 하지만 가정에 매우 민감
- 경쟁 대응책 부실
- 재검증 필수
```

### 최종 점수
```
제시 수치: 62/100 ❌
현실적 수치: 72/100 ⚠️
벤치마크: 85/100
```

---

## 📋 Round 2 대응 필요 사항

### Opus에게 요청:

1. **CAC 재검증**
   - 첫 N명 고객의 실제 CAC는?
   - 스케일 단계별 CAC 추이?

2. **Retention 전략**
   - 고객 이탈률 (churn) 예상?
   - 월 $500이 정당화되는가?

3. **고객 ROI**
   - 로열티로 얼마나 매출 증가?
   - 사례 연구 또는 데이터?

4. **경쟁 대응책**
   - Square/Toast와의 차별점?
   - "토큰 기반"의 의미?

5. **Gross Margin & NRR**
   - 서버/인프라 비용?
   - Net Revenue Retention?

---

## 🔄 다음 단계

1. **문서 검토**: UNIT_ECONOMICS_SUMMARY_KOREAN.md 먼저 읽기
2. **상세 분석**: UNIT_ECONOMICS_DEVILS_ADVOCATE_VALIDATION.md 검토
3. **Round 2 대응**: 위 5가지 질문에 답변
4. **최종 판정**: Round 2 대응 후 PASS/FAIL 결정

---

## 📞 주요 연락처 정보

**평가자**: Devil's Advocate Validator (Codex Framework)  
**평가일**: 2026-01-25  
**평가 상태**: ✅ Round 1 완료 → 🔄 Round 2 대기  

---

**추천 읽기 순서**:
1. ⭐ 이 문서 (INDEX) - 5분
2. ⭐ UNIT_ECONOMICS_DEVILS_VERDICT.yaml - 5분
3. ⭐ UNIT_ECONOMICS_SUMMARY_KOREAN.md - 15분
4. 📘 UNIT_ECONOMICS_DEVILS_ADVOCATE_VALIDATION.md - 40분

총 65분으로 전체 분석 완료 가능.

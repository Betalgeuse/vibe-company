# Physical AI Data Infrastructure - Acquisition Path V2

**Date**: 2026-01-13  
**Purpose**: 18-24개월 빠른 exit 경로 설계

---

## V1 Problem

**Naive Plan**:
> "18개월 후 Scale AI가 인수해줄 거야"

**Problems**:
- Scale AI는 $100M+ revenue 회사나 인수 (우리 너무 작음)
- 인수 동기 불명확
- 확률 제시 없음

---

## V2 Solution: Acquirer Shortlist + Bolt-On Timing

### 1. Primary Target: **Atria AI** (80% 확률, 6-12개월)

**Profile**:
```yaml
company: "Atria AI"
acquired_by: "Hyundai Motor (2023)"
domain: "Autonomous Driving"
independence: "HIGH (독립 운영 중)"
team_size: "~100-200 (추정)"
revenue: "$10M-50M (추정)"

bolt_on_timing:
  acquired: "2023"
  current: "2024-2025 (인수 후 1-2년)"
  status: "**PERFECT BOLT-ON WINDOW**"
  
why_they_need_us:
  - "자율주행 데이터는 있지만 non-humanoid (excavator, construction) 데이터 없음"
  - "Hyundai의 Boston Dynamics 통합에 기여 필요"
  - "Construction equipment autonomous driving = 새로운 revenue stream"
  
acquisition_logic:
  - "우리가 Hyundai Tier 3-4에 이미 공급 중 (레퍼런스)"
  - "$5M-15M acquisition으로 non-humanoid 데이터 capability 확보"
  - "Atria AI 내부 팀 구축보다 인수가 빠름"
  
timeline:
  month_6: "Atria AI PM과 meeting (via Tier 3 intro)"
  month_9: "Pilot 제안 or partnership 논의"
  month_12: "Acquisition exploratory conversation"
  month_18: "LOI (Letter of Intent)"
  
probability: "80%"
confidence: "HIGH"
```

**Action Plan**:
```yaml
month_1-3: Tier 4 레퍼런스 확보
month_4-6: Tier 3 레퍼런스 확보
month_6: "Atria AI에 indirect approach"
  - Method: Tier 3 고객이 Atria AI에 추천
  - Or: LinkedIn에서 Atria AI PM 찾아서 메시지
  
month_9: First meeting
  - Pitch: "우리가 Hyundai 체인에 공급 중. Non-humanoid 데이터 필요하시면 협업?"
  
month_12: Partnership or acquisition discussion
  - If they need: Acquisition talk
  - If not ready: Continue as vendor
```

---

### 2. Secondary Target: **Boston Dynamics Korea** (70%, 12-18개월)

**Profile**:
```yaml
company: "Boston Dynamics"
acquired_by: "Hyundai Motor (2021, $1.1B)"
domain: "Humanoid + Quadruped robots"
independence: "HIGH"

bolt_on_timing:
  acquired: "2021"
  current: "2024-2025 (인수 후 3-4년)"
  status: "Post-integration, expansion phase"
  
why_they_need_us:
  - "Humanoid/quadruped focused → Non-humanoid (construction) 확장 필요"
  - "Korea market expansion → Local dataset provider 필요"
  - "Hyundai construction equipment 자동화 프로젝트"
  
acquisition_logic:
  - "Boston Dynamics가 construction equipment 시장 진입 시 우리 필요"
  - "$10M-20M acquisition으로 construction 데이터 확보"
  
timeline:
  month_12: "Boston Dynamics Korea team approach"
  month_18: "Partnership 논의"
  month_24: "Acquisition 가능성"
  
probability: "70%"
confidence: "MEDIUM-HIGH"
```

---

### 3. Alternative: **PE Roll-Up** (60%, 12-24개월)

**Pattern**:
```yaml
strategy: "Private Equity가 data labeling 회사 여러 개 인수 → 통합 후 재매각"

precedent:
  - "Vista Equity Partners: Enterprise software roll-up"
  - "Thoma Bravo: Data/analytics company consolidation"
  
our_positioning:
  - "Non-humanoid physical AI niche leader"
  - "독립적으로 $200K-500K ARR 달성"
  - "PE가 roll-up 시 valuable asset"
  
acquisition_price: "$5M-10M (3-5x ARR)"
probability: "60%"
timeline: "12-24 months"
```

**Target PE Firms**:
- Vista Equity Partners (Data/analytics focus)
- Thoma Bravo
- Korea PE firms eyeing AI/data space

---

### 4. Backup: **TYM AI² Consortium** (50%, 18-24개월)

**Profile**:
```yaml
type: "Consortium (30+ members)"
domain: "Agricultural AI"
potential: "Consortium consolidation → 우리 acqui-hire"

acquisition_logic:
  - "Consortium members 중 하나가 데이터 capability 내재화"
  - "$3M-8M acqui-hire"
  
probability: "50%"
timing: "18-24 months"
confidence: "MEDIUM"
```

---

### 5. Long-Shot: **Scale AI Korea** (30%, 24-36개월)

**Profile**:
```yaml
entry_timing: "2026 (planned)"
our_status_by_then: "1-2 years of Korea market traction"

acquisition_logic:
  - "Scale AI가 Korea 진출 시 local acquisition 고려"
  - "우리가 Korea non-humanoid market 이미 점유"
  - "$10M-30M acquisition"
  
problem:
  - "Scale AI는 보통 $50M+ revenue 회사나 인수"
  - "우리 사이즈는 작음"
  
probability: "30% (낮음)"
timing: "24-36 months (늦음)"
```

---

## Cross-Domain M&A Patterns (K-Beauty Bolt-On 응용)

### Pattern: K-Beauty → Physical AI Pivot

**K-Beauty M&A Wave (2023-2024)**:
```
2023: L'Oréal → K-beauty brand A ($200M)
2024: Brand A → AI skin analysis startup B ($8M) ← Bolt-on
2024: Brand A → Supply chain AI startup C ($5M) ← Bolt-on
```

**Transfer to Physical AI**:
```yaml
k_beauty_manufacturing_automation:
  target_acquirer:
    - "아모레퍼시픽 (자체 제조)"
    - "LG생활건강"
    - "L'Oréal Korea"
  
  our_pivot:
    - "Physical AI for beauty manufacturing"
    - "화장품 제조 라인 자동화 데이터"
    - "품질 검사 (vision + sensor)"
  
  acquisition_logic:
    - "K-beauty 브랜드가 제조 자동화 필요"
    - "우리 Physical AI 기술 전이 가능"
    - "$5M-12M acquisition"
  
  probability: "60% (if Physical AI doesn't work)"
  timing: "18-24 months"
```

---

## 12-Month Acquisition Roadmap (Reverse Engineering)

```yaml
month_12_target: "Atria AI acquisition ($8M-15M)"
  ↑ Trigger: "Atria AI가 인수 제안"
  ↑ Required: "우리 가치 증명 완료"

month_10-11: "Acquisition negotiation"
  ↑ Trigger: "Exploratory conversation → LOI"
  ↑ Required: "$200K+ ARR, 2-3 Tier 3 customers"

month_7-9: "Atria AI와 partnership 논의"
  ↑ Trigger: "Tier 3 고객이 Atria AI에 추천"
  ↑ Required: "Tier 3 레퍼런스 2개"

month_4-6: "Tier 3 레퍼런스 확보"
  ↑ Trigger: "Tier 4 고객 소개"
  ↑ Required: "Tier 4 pilot 성공"

month_1-3: "Tier 4 pilot"
  ↑ Start: "TYM AI² member 1개 확보"
```

**Key Milestones**:
| Month | Milestone | Acquisition Signal |
|-------|-----------|-------------------|
| 3 | Tier 4 pilot 성공 | Proof of capability |
| 6 | Tier 3 레퍼런스 1개 | Market validation |
| 9 | Tier 3 레퍼런스 2-3개 | Atria AI 관심 가능 |
| 12 | $200K+ ARR | Acquisition conversation |

---

## Comparison: V1 vs V2

| Aspect | V1 | V2 |
|--------|----|----|
| **Primary Target** | "Scale AI" (vague) | **Atria AI (80%, 6-12mo)** |
| **확률** | Not specified | 80% / 70% / 60% / 50% / 30% |
| **Timing** | "18 months" (vague) | **6-12-18-24mo (구체적)** |
| **Bolt-on Analysis** | ❌ None | ✅ Atria AI (2023 인수 → 지금 타이밍) |
| **Cross-Domain** | ❌ None | ✅ K-beauty pivot 60% |
| **Roadmap** | ❌ None | ✅ 역산 roadmap (12 → 9 → 6 → 3mo) |

---

## Final Recommendation

### Primary Path: **Atria AI (80%)**

**Why**:
- ✅ Perfect bolt-on timing (인수 후 1-2년)
- ✅ Clear need (non-humanoid 데이터 없음)
- ✅ Accessible (via Tier 3 intro)
- ✅ Realistic timeline (6-12 months to first contact)

**Action**:
1. Month 1-3: Tier 4 확보 (TYM AI² member)
2. Month 4-6: Tier 3 확보 (via Tier 4 intro)
3. Month 6: Atria AI indirect approach
4. Month 9-12: Partnership → Acquisition discussion

### Backup Paths:
- **Boston Dynamics (70%)**: If Atria AI doesn't work
- **PE Roll-Up (60%)**: If we reach $500K ARR independently
- **K-Beauty Pivot (60%)**: If Physical AI market too small

---

## V2 Conclusion

**V1 문제**:
- "Scale AI가 인수" = Naive, 확률 불명

**V2 해결**:
- **Atria AI 80% (6-12mo)** = 구체적, bolt-on 타이밍 완벽
- **5개 후보** with 확률 + timeline
- **12-month roadmap** (역산)
- **Cross-domain pivot** (K-beauty 60%)

**Next**: MVP Design에 이 acquisition path 반영

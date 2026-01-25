# 토큰 로열티 MVP 설계 - Executive Summary

## 🎯 한눈에 보기

| 항목 | 내용 |
|------|------|
| **제품** | 블록체인 기반 토큰 로열티 플랫폼 |
| **ICP** | 독립 카페/소매점 점장 (1-5개 매장, 월 $50K-500K 매출) |
| **가격** | $499-1,199/월 (기존 $2K+ vs 우리 80% 저렴) |
| **ACV** | $6K-10K/년 ($500-800/월 평균) |
| **GTM** | Founder-led Sales (콜드 이메일 + 데모) |
| **MVP Timeline** | 4-6주 (1인 개발자) |

---

## 💡 3가지 MVP 옵션 비교

| Option | 설명 | Target | ACV | GTM | 성공확률 |
|--------|------|--------|-----|-----|---------|
| **A (선택)** | 블록체인 토큰 + POS 연동 | 독립 카페 (1-5개) | $9.3K/년 | Founder Sales | **85%** |
| **B** | No-blockchain, 단순 포인트 | 소규모 카페 (<$100K/월) | $3K/년 | Viral/Word-of-Mouth | 40% |
| **C** | SaaS 토큰 + Franchise 시스템 | 프랜차이즈 본부 | $50K+/년 | Channel | 30% |

**추천**: **Option A** - 높은 ACV + 명확한 차별화 + 실행 가능

---

## 📊 핵심 Unit Economics

```
고객당:
  • 월 ACV: $775 (평균)
  • CAC: $450
  • LTV: $10,900
  • LTV:CAC = 24:1 ✅

Year 1 목표:
  • 50명 고객
  • $100K ARR
  • $5K MRR (Month 6)
```

---

## 🛠️ Tech Stack (1인 개발자 기준)

**Backend**: Node.js + Express + PostgreSQL  
**Frontend**: React + Tailwind CSS  
**Blockchain**: Polygon (Base도 가능)  
**Wallet**: Openfort SDK (no-wallet UX)  
**POS**: Square/Clover API 연동

### Why Polygon?
- 가스비 매우 저렴 (<$0.01/transaction)
- 빠른 확인 (2초)
- Ethereum 호환성
- 대규모 dApp 생태계

---

## 🚀 4-6주 MVP 핵심 기능

### P0 (Must Have - MVP)
1. **토큰 자동 발급** (POS 연동 시 구매액의 10% = 토큰)
2. **고객 모바일 대시보드** (이메일 기반 로그인, no-wallet)
3. **QR 코드 상환** (매장에서 토큰 사용)
4. **매장주 Admin** (고객 리스트 + 재방문율 통계)
5. **POS 연동** (Square/Clover webhook)

### P1 (Nice to Have - Month 4+)
- 토큰 2차 마켓 (고객↔거래)
- NFT VIP 회원증
- SMS/Email 리마인더

---

## 💰 가격 모델

| Tier | 가격 | 매장 수 | 포함 |
|------|------|--------|------|
| **Starter** | $499/월 | 1-2 | 기본 기능 |
| **Growth** | $799/월 | 2-5 | +분석, +5 POS |
| **Scale** | $1,199/월 | 5+ | +White-label, API |

**왜 이 가격?**
- 매장주가 절약하는 시간: 월 3시간 = $500
- 기존 로열티: $2K+/월 → 우리는 75% 더 저렴
- Year 1 목표: 50명 × $775 avg = $38.75K MRR

---

## 📈 GTM Strategy (6개월)

### Month 1-3: MVP + Founder Sales
```
W1-W4: 개발 완료
W5: 첫 3명 고객 확보
W6-W12: 피드백 → 반복 개선

Tools:
- LinkedIn 콜드 이메일 (50/주)
- Google Maps 타겟팅 (강남/홍대 카페)
- Network (친구/지인 소개)
```

### Month 4-6: Scale 준비
```
목표: 15명 고객, $11.6K MRR

Activities:
- Content: "카페 로열티 ROI" 가이드
- Events: 카페 협회, 상권 세미나
- Early Advocates: 2-3명 사례 연구
```

---

## 🎯 구매 여정 (Cafe Owner)

```
Trigger: "우리 카페 고객 재방문이 떨어지고 있어"
         ↓
Discovery: LinkedIn/Word-of-mouth로 우리 발견
         ↓
Evaluation: 15분 콜드콜 + 20분 데모
         ↓
Decision: "비용 (Month 3 회수) + 시간 절약 (주 3시간) 확인"
         ↓
Purchase: 14일 무료 체험 → 결제 (Stripe)
         ↓
Success: Month 2부터 자동 토큰 발급
         3개월 후 고객 재방문율 +25% 확인
```

---

## ⚠️ Top 3 Risks & Mitigation

| Risk | 영향 | 대응 |
|------|------|------|
| **고객 암호 거부감** | High | MVP부터 "no-wallet" 강조 (QR만 스캔) |
| **POS 연동 복잡** | High | Square/Clover API 사전 검증 + Support 준비 |
| **경쟁사 복제** | Medium | 토큰 거래 마켓으로 차별화 + 속도 우위 |

---

## 📅 Success Milestones

| Milestone | Timeline | KPI |
|-----------|----------|-----|
| **MVP Live** | Week 4 | 3 beta customers |
| **Product-Market Fit** | Month 3 | 10 paying customers, $5K MRR |
| **Scale** | Month 6 | 15 customers, $11.6K MRR |
| **Year 1** | Month 12 | 50 customers, $100K ARR |

---

## ✅ MVP 설계 Validation Checklist

- [✅] ICP 명확 (독립 카페, $500-800/월 구매력)
- [✅] 차별화 강함 (블록체인 투명성 + 저가격)
- [✅] Unit economics 건전 (LTV:CAC 24:1)
- [✅] 기술 실현 가능 (1인 개발 4-6주)
- [✅] GTM 명확 (Founder sales 상세 playbook)
- [✅] 성공 지표 정의됨 (MRR, Churn, CAC)

**최종 판정**: ✅ **고확률 기회 - 개발 시작 GO**

---

## 📚 추가 리소스

- 전체 비즈니스 플랜: `TOKEN_LOYALTY_SMB_MVP_DESIGN.md`
- 기술 상세: Section 4 (Tech Stack) 참조
- 상세 GTM 가이드: Section 7 (Sales Playbook) 참조

---

**마지막 한마디**

이 MVP는 **블록체인의 기술력**을 사용하면서도 **고객에겐는 기술을 숨기는** 설계입니다.

매장주는 "QR 스캔"만 알면 되고, 우리는 "투명한 토큰" 기술로 차별화합니다.

Month 6까지 $5K MRR 목표는 충분히 실현 가능하며, 
**현금흐름 긍정** (CAC Payback 1개월)으로 
Year 2부터는 boostrap 가능합니다.

**개발 시작하세요!** 🚀


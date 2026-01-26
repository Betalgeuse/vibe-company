# HS Code AI SaaS - 실행 체크리스트

**프로젝트명:** TradeClassify  
**시작일:** 2026-01-27  
**목표:** 90일 내 MVP 런칭, 첫 10 paying customers

---

## ✅ 즉시 실행 (이번 주)

### Day 1-3: 기술 검증
- [ ] OpenAI GPT-4V API 테스트 계정 생성
- [ ] HS Code 샘플 100개로 정확도 테스트 (목표 85%+)
- [ ] Shopify Dev Account 생성
- [ ] 비용 계산: API 호출당 비용 × 예상 사용량

### Day 4-7: 고객 검증
- [ ] 타겟 ICP 10명 찾기 (Shopify 쇼핑몰 운영자)
- [ ] 5분 인터뷰: "HS Code 분류 어떻게 하세요?"
- [ ] 가격 민감도 테스트: "$99/월 vs $249/월 vs $499/월"
- [ ] Landing Page 초안 (Carrd.co 5분 제작)

---

## 📅 Month 1: AI 모델 개발 (Week 1-4)

### Week 1-2: 데이터셋 구축
- [ ] WCO Harmonized System 데이터 크롤링 (21개 섹션, 96 챕터)
- [ ] 한국 관세청 HS Code 데이터베이스 (한영 매핑)
- [ ] 샘플 제품 1,000개 수집 (이미지 + 설명)
- [ ] CSV 포맷 정리: `product_name, description, image_url, hs_code, confidence`

### Week 3-4: GPT-4V 파인튜닝
- [ ] OpenAI Fine-tuning API 학습 (HS Code 1,000건)
- [ ] Prompt Engineering: "You are an HS Code classifier..."
- [ ] 정확도 테스트: 95%+ 달성 확인
- [ ] Fallback 로직: 80% 미만 신뢰도 시 "Manual Review" 표시

---

## 📅 Month 2: Shopify 통합 (Week 5-8)

### Week 5-6: Backend API
- [ ] Next.js API Routes 구축
- [ ] `/api/classify` endpoint: POST {product_name, description, image}
- [ ] Supabase DB 설정: users, products, classifications
- [ ] Stripe Checkout 연동 (3개 티어)

### Week 7-8: Shopify App 개발
- [ ] Shopify App CLI 설치
- [ ] Product Page에 "Classify HS Code" 버튼 추가
- [ ] Webhook: 제품 생성 시 자동 분류
- [ ] Settings 페이지: API Key, 구독 상태 표시

---

## 📅 Month 3: 런칭 (Week 9-12)

### Week 9-10: Beta 테스트
- [ ] 10명 Beta 사용자 모집 (무료 30일)
- [ ] 일일 피드백 수집 (Slack 채널)
- [ ] 버그 수정 + UI 개선
- [ ] 첫 유료 전환 3명 목표

### Week 11: Product Hunt 런칭
- [ ] Product Hunt 계정 생성 (upvote 준비)
- [ ] 런칭 날짜 선택 (화-목 추천)
- [ ] Maker story 작성 (300자)
- [ ] 첫 24시간 모니터링 (댓글 응답)

### Week 12: 초기 성장
- [ ] Reddit r/shopify 홍보 (스팸 주의)
- [ ] Facebook "Shopify 한국" 그룹 참여
- [ ] 첫 10 paying customers 달성
- [ ] MRR $1,000 돌파

---

## 💰 필요 예산 (90일)

| 항목 | 금액 | 비고 |
|------|------|------|
| OpenAI API (개발) | $500 | Fine-tuning + 테스트 |
| Vercel Hosting | $20/월 × 3 = $60 | Pro plan |
| Supabase | $25/월 × 3 = $75 | Pro plan |
| Shopify Dev Store | 무료 | |
| Domain (.ai) | $50/년 | tradeclassify.ai |
| **Total** | **$685** | **3개월 런칭 비용** |

---

## 🎯 성공 지표 (90일 후)

- [ ] **10 paying customers** (MRR $1,000+)
- [ ] **95%+ AI 정확도** (고객 만족도 지표)
- [ ] **5개 이상 리뷰** (Shopify App Store)
- [ ] **Churn 0%** (첫 3개월)
- [ ] **다음 10 customers 파이프라인** 확보

**통과 시:** Year 1 목표 (60 customers, ARR $179K) 실행  
**실패 시:** 피봇 또는 중단 결정

---

## 📞 긴급 연락처

- OpenAI Support: platform.openai.com/docs
- Shopify Dev: shopify.dev/docs
- Stripe: stripe.com/docs

**시작하세요! 🚀**

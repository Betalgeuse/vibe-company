# Uncertainty-Aware Terminal Agent 연구

## 📊 Research Score & Verdict

| 항목 | 점수 | 코멘트 |
|------|------|--------|
| 가설 견고성 | 22/30 | 핵심 가설 해결, 예상 효과 현실적 하향 조정 |
| 증거 품질 | 17/25 | Semantic Entropy, Soft-SC 등 인용, Terminal-Bench 직접 검증 전무 |
| 실행 가능성 | 20/25 | Logprobs 의존성 제거, 비용 효율적 방법 발견 |
| 가치 명확성 | 14/20 | 성능 향상 목표 명확, Factory 차별화 가능 |
| **총점** | **73/100** | |

**Verdict: CONDITIONAL (조건부 통과)**

---

## Hypothesis (가설)

> **"Logprobs-free Uncertainty 측정 기법(Semantic Entropy, Linguistic Confidence)을 Terminal Agent에 적용하면 +2-5% 성능 향상 가능 (64.9% → 67-70%)"**

---

## 핵심 아이디어

### 문제
```
LLM의 한계:
├── 틀려도 자신있게 답변 (Overconfidence)
├── 모를 때도 일단 답변 (No abstention)
└── 확신 수준을 표현하지 않음

기존 에이전트:
├── 가장 높은 확률의 토큰만 선택
├── 확률 분포(logprobs) 정보 버림
└── 실패 후 같은 방법 반복
```

### 해결책
```
Uncertainty-Aware Approach:
├── 확률 분산 → "불확실" → 추가 정보 수집
├── 확률 집중 → "확신" → 바로 실행
└── 실패 후 → 다른 확률의 대안 탐색
```

---

## Cross-Domain Analogies

### Problem Abstraction
> "Noisy Oracle Decision Under Uncertainty"

### Top Cross-Domain Solutions

| 소스 도메인 | 패턴 | 해결책 | Transfer Risk |
|------------|------|--------|---------------|
| **LLM Conformal Prediction** | Abstention | Coverage guarantee + 불확실하면 거부 | Very Low (0.15) |
| **Finance Kelly Criterion** | Position Sizing | Confidence → 실행 강도 조절 | Low (0.25) |
| **Medical Selective Prediction** | θ-based 결정 | High/Medium/Low 3단계 분기 | Low (0.30) |
| **Bayesian Decision Theory** | Expected Utility | 불확실성 × 영향도 = 의사결정 | Low (0.20) |
| **Autonomous Vehicles** | Conservative Action | 불확실하면 멈춤/감속 | Low (0.25) |

### 적용 방안
```
Terminal Agent Action Router:
├── High Certainty (>0.8) → Execute (바로 실행)
├── Medium (0.5-0.8) → Best-of-N (샘플링 후 선택)
└── Low (<0.5) → Gather Info (정보 수집 먼저)
```

---

## Supporting Evidence (가설 지지 증거)

### 1. Logprobs-free Uncertainty 측정 가능
- **Semantic Entropy Probes**: 내부 hidden state에서 Uncertainty 추출
- **Linguistic Confidence**: 언어적 표현으로 확신 수준 측정
- **Semantic Volume**: 의미적 공간에서의 분산 측정
- **대응**: Anthropic Claude logprobs 미지원 문제 해결

### 2. Soft Self-Consistency 검증
- **출처**: [arXiv 2402.13212](https://arxiv.org/abs/2402.13212)
- **결과**: Bash 프로그램 작성에서 **+1.3% 성공률 향상**
- **방법**: 연속 스코어링으로 Best-of-N 개선

### 3. 비용 효율적 방법 존재
- **OSCA**: 25-128x 샘플링 비용 절감
- **Soft-SC**: 50% 비용 절감
- **Adaptive Stopping**: 불필요한 샘플링 조기 중단

### 4. LLM 비결정성이 오히려 필요성 증거
- Temperature=0에서도 15% 변동 → Uncertainty 측정 필수
- 완화 기법 존재: Batch normalization, Ensemble

---

## Counter Evidence (가설 반박 증거)

### 1. Terminal-Bench 직접 검증 전무
- **인정**: 파일럿 실험 필수
- **대응**: Week 0에 20개 케이스 테스트

### 2. 수치 근거 박약
- **인정**: 1.3% → 5-8% 확대는 과대평가
- **대응**: +2-5%로 하향 조정

### 3. Compound Effect 중첩
- **인정**: Soft-SC와 Best-of-N 중복 높음
- **대응**: Soft-SC 단독 적용 권장

---

## 수정된 예상 효과

| 요소 | 기존 예상 | 수정된 예상 | 근거 |
|------|----------|------------|------|
| Self-Certainty/Soft-SC | +3-5% | **+1-3%** | Bash 벤치마크 1.3% 기반 |
| Action Router | +2-3% | **+1-2%** | 보수적 추정 |
| Alternative Exploration | +2-4% | **+0-1%** | 중첩 보정 |
| **총합 (중첩 보정)** | +5-8% | **+2-5%** | |
| **예상 최종 점수** | 70-73% | **67-70%** | |

---

## 기존 전략과의 관계

| 전략 | 중첩 여부 | 시너지 |
|------|----------|--------|
| Memory-Augmented | ✅ 완전 독립 | 높음 - 다른 레이어 |
| Error Recovery | ⚠️ 부분 중첩 | 중간 - 실패 후 복구 vs 사전 방지 |
| Cross-Domain Transfer | ✅ 완전 독립 | 높음 - 다른 문제 해결 |
| Adaptive Planning | ⚠️ 부분 중첩 | 중간 - 계획 vs 실행 |

### 통합 시 예상 효과
```
기존 통합 전략: +8-15% (72점 CONDITIONAL)
Uncertainty 추가: +2-5% (독립적)
─────────────────────────────────────
통합 예상: +10-18% (70% 중첩 보정 시 +7-13%)
최종 목표: 64.9% + 7-13% = 72-78%
```

---

## Action Items

### 보완 필요 사항 (CONDITIONAL 조건)

#### Week 0: 파일럿 (필수, Go/No-Go 결정)
- [ ] Terminal-Bench 실패 케이스 20개 추출
- [ ] Linguistic Confidence 또는 Semantic Entropy 측정
- [ ] 개선 효과 측정
- [ ] **기준: +1% 이상 → PASS, 미만 → REJECT**

#### Week 1-2: 본격 구현 (PASS 시)
- [ ] Self-Certainty 모듈 개발
- [ ] Action Router 통합
- [ ] Soft-SC 적용
- [ ] Terminal-Bench 전체 평가

#### Week 3: 최적화
- [ ] Threshold 최적화 (High/Medium/Low 경계)
- [ ] 비용 효율 분석
- [ ] 최종 벤치마크 제출

---

## 구현 방법론

### 1. Linguistic Confidence (Logprobs 불필요)

```python
def measure_linguistic_confidence(response: str) -> float:
    """
    LLM 응답에서 언어적 확신 표현 추출
    """
    high_confidence_markers = [
        "I'm certain", "definitely", "clearly", 
        "obviously", "확실히", "분명히"
    ]
    low_confidence_markers = [
        "I think", "maybe", "perhaps", "might",
        "아마도", "~것 같다", "추정"
    ]
    
    # 마커 기반 점수 계산
    score = 0.5  # 기본값
    for marker in high_confidence_markers:
        if marker.lower() in response.lower():
            score += 0.1
    for marker in low_confidence_markers:
        if marker.lower() in response.lower():
            score -= 0.1
    
    return max(0, min(1, score))
```

### 2. Soft Self-Consistency

```python
def soft_self_consistency(task: str, n: int = 5) -> tuple[str, float]:
    """
    N개 샘플 생성 후 연속 스코어링으로 최선 선택
    """
    candidates = []
    for _ in range(n):
        response = llm.generate(task)
        confidence = measure_linguistic_confidence(response)
        candidates.append((response, confidence))
    
    # 의미적 클러스터링
    clusters = cluster_by_semantic_similarity(candidates)
    
    # 가장 큰 클러스터에서 가장 높은 confidence 선택
    best_cluster = max(clusters, key=len)
    best = max(best_cluster, key=lambda x: x[1])
    
    return best
```

### 3. Action Router

```python
def route_action(command: str, confidence: float) -> str:
    """
    확신 수준에 따른 행동 결정
    """
    HIGH_THRESHOLD = 0.8
    LOW_THRESHOLD = 0.5
    
    if confidence >= HIGH_THRESHOLD:
        return "EXECUTE"  # 바로 실행
    elif confidence >= LOW_THRESHOLD:
        return "BEST_OF_N"  # N개 샘플링 후 선택
    else:
        return "GATHER_INFO"  # 추가 정보 수집
```

---

## 핵심 레퍼런스

### 필수 참고
1. [Self-Certainty (arXiv 2502.18581)](https://arxiv.org/abs/2502.18581) - Logprobs 기반 Best-of-N
2. [Soft Self-Consistency (arXiv 2402.13212)](https://arxiv.org/abs/2402.13212) - Bash +1.3% 입증
3. [Semantic Entropy Probes](https://arxiv.org/abs/2406.15927) - Logprobs-free Uncertainty
4. [UniCR (arXiv 2509.01455)](https://arxiv.org/abs/2509.01455) - 신뢰도 + 거부 통합
5. [Survey on UQ for LLMs (ACM 2025)](https://dl.acm.org/doi/full/10.1145/3744238)

### 추가 참고
- [Holistic Trajectory Calibration](https://openreview.net/pdf/13e1b3445638eb34bf18995f66ea7e684dc0359f.pdf)
- [Rewarding Doubt (OpenReview 2025)](https://openreview.net/pdf?id=QbNrkBsXuP)
- [OSCA: Output-Space Calibration](https://arxiv.org/abs/2503.11922) - 25-128x 비용 절감

---

## 리서치 갭 (TODO)

- [ ] Terminal-Bench 특화 Uncertainty 분포 분석
- [ ] Bash vs General CLI 명령어 Uncertainty 차이
- [ ] Factory Droid의 Uncertainty 처리 방식 역공학
- [ ] Multi-turn 대화에서의 Uncertainty 누적 효과

---

## 최종 코멘트

> **73점 (CONDITIONAL)** - 연구 가설은 논리적으로 건전하며, Logprobs-free 대안 발견으로 실행 가능성 확보.
> 
> 단, **Terminal-Bench 직접 검증 데이터 부재**가 최대 약점.
> 
> **Week 0 파일럿에서 +1% 이상 개선 확인 시 PASS로 전환**, 본격 실행 가치 입증.

---

*Generated by research-idea pipeline with Cross-Domain Abstraction | 2026-01-07*

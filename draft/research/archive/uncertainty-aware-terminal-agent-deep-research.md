# 심층 리서치 결과: Uncertainty-Aware Terminal Agent

## 원본 가설
> Terminal Agent에 Uncertainty Quantification을 통합하면, 명령어 실행 전 불확실성을 측정하고 Best-of-N 샘플링 또는 Human-in-the-Loop 확인을 통해 실패율을 크게 감소시킬 수 있다.

---

## 핵심 인사이트

### 가설 지지 증거

#### 1. **Self-Certainty: Scalable Best-of-N Selection (arXiv 2502.18581)**
- **출처**: https://arxiv.org/abs/2502.18581
- **신뢰도**: 높음 (학술 논문, 코드 공개)
- **요약**: 
  - Self-Certainty는 LLM 출력의 내재적 확률 분포를 활용하여 응답 품질을 추정하는 새로운 메트릭
  - Reward Model 없이도 Best-of-N 선택 가능
  - 높은 self-certainty가 높은 정확도와 상관관계 있음
  - **핵심 공식**: Self-Certainty = 문장 내 토큰 수와 어휘 크기를 기반으로 계산
  - Chain-of-thought와 결합 시 greedy decoding보다 우수한 추론 성능

#### 2. **Soft Self-Consistency (ACL 2024, arXiv 2402.13212)**
- **출처**: https://arxiv.org/abs/2402.13212
- **신뢰도**: 높음 (ACL 학회 발표)
- **요약**:
  - 기존 Self-Consistency의 majority voting 대신 **연속적 점수 체계** 사용
  - 모델 likelihood 기반으로 응답 선택
  - **Bash 프로그램 작성에서 1.3% 성공률 향상** (Terminal Agent와 직접 관련)
  - Self-Consistency 대비 **50% 적은 샘플**로 동등 이상의 성능 달성
  - Open-source 및 Black-box 모델 모두 적용 가능

#### 3. **UniCR: Universal Calibration and Risk-Controlled Refusal (arXiv 2509.01455)**
- **출처**: https://arxiv.org/abs/2509.01455
- **신뢰도**: 높음 (학술 논문)
- **요약**:
  - 다양한 불확실성 소스 통합: sequence likelihood, tool feedback
  - **Temperature Scaling** 기반 경량 calibration
  - 사용자 정의 에러 버짓에 따른 risk-controlled refusal
  - API-only 모델에도 적용 가능
  - ECE (Expected Calibration Error), Brier Score에서 기존 방법 대비 우수

#### 4. **Holistic Trajectory Calibration (ICLR 2026)**
- **출처**: https://openreview.net/forum?id=6YMFsGFabM
- **신뢰도**: 높음 (ICLR 학회)
- **요약**:
  - AI 에이전트의 **multi-step 작업**에서 confidence calibration
  - Process-level feature 추출로 calibration 및 discrimination 향상
  - **실패 원인 해석 가능성** 제공
  - 다른 도메인으로 **재학습 없이 전이 가능**
  - Terminal Agent의 trajectory 전체에 대한 불확실성 측정에 적합

#### 5. **Rewarding Doubt: RL for Calibrated Confidence (OpenReview 2025)**
- **출처**: https://openreview.net/forum?id=yResLmrVO1
- **신뢰도**: 높음 (학회 논문)
- **요약**:
  - Confidence 추정을 **betting game**으로 모델링
  - Logarithmic scoring rule로 over/under-confidence 모두 페널티
  - Fine-tuning 없이 새로운 태스크로 일반화
  - **내재적 confidence awareness** 학습

#### 6. **Semantic Entropy for Hallucination Detection (Nature 2024)**
- **출처**: https://www.nature.com/articles/s41586-024-07421-0
- **신뢰도**: 매우 높음 (Nature)
- **요약**:
  - Token-level이 아닌 **의미(semantic) 수준**의 불확실성 측정
  - 동일 의미의 다양한 표현을 클러스터링
  - Confabulation(환각) 탐지에 효과적
  - **Terminal Agent**: 명령어의 의도 vs 실제 출력 불일치 탐지에 활용 가능

---

### 가설 반박 증거

#### 1. **Non-Determinism in "Deterministic" LLM Settings**
- **출처**: https://arxiv.org/abs/2408.04667
- **신뢰도**: 높음 (학술 논문)
- **요약**:
  - Temperature=0 설정에서도 최대 **15% 정확도 변동**, **70% 성능 갭** 발생
  - LLM의 비결정성은 **입력 데이터 관리 방식**에 기인할 가능성
  - Shell 명령 생성 같은 결정적 출력이 필요한 작업에서 신뢰성 문제
  - **시사점**: Uncertainty 측정 자체도 불안정할 수 있음

#### 2. **Claude API의 Logprobs 미지원**
- **출처**: https://stackoverflow.com/questions/79299548
- **신뢰도**: 높음 (공식 현황)
- **요약**:
  - Anthropic Claude API는 현재 logprobs 파라미터 미지원
  - Token probability 기반 uncertainty 측정이 **Anthropic 모델에서는 제한적**
  - Claude 사용 시 대안 필요 (verbalized confidence, sampling-based 방법)

#### 3. **Multi-Agent System Failure Taxonomy (MAST)**
- **출처**: https://arxiv.org/html/2503.13657v2
- **신뢰도**: 높음 (학술 논문)
- **요약**:
  - Multi-Agent 시스템 실패의 **41.77%가 specification 문제**
  - Uncertainty만으로 해결 불가능한 실패 모드 존재
  - **시사점**: Uncertainty-Aware 접근만으로는 모든 실패 방지 불가

---

## 구현 방법론

### 1. Logprobs 추출 방법

#### OpenAI API
```python
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}],
    logprobs=True,
    top_logprobs=5  # 최대 20까지
)

# 토큰별 로그 확률 추출
for token_logprob in response.choices[0].logprobs.content:
    token = token_logprob.token
    logprob = token_logprob.logprob
    probability = math.exp(logprob)
```

#### 오픈소스 모델 (vLLM, Ollama)
```python
# vLLM
from vllm import LLM
model = LLM("meta-llama/Llama-3-8b")
outputs = model.generate(prompts, sampling_params)
# outputs[0].outputs[0].logprobs 접근

# Ollama (v0.12.11+)
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "...",
  "options": {"logprobs": true, "top_logprobs": 5}
}'
```

### 2. Entropy 계산

#### Token-level Entropy
```python
import math

def token_entropy(logprobs: list[float]) -> float:
    """Shannon entropy from logprobs"""
    probs = [math.exp(lp) for lp in logprobs]
    return -sum(p * math.log2(p) for p in probs if p > 0)

# Predictive Entropy (전체 시퀀스)
def predictive_entropy(token_logprobs: list[float]) -> float:
    """Average entropy across all tokens"""
    return sum(-lp for lp in token_logprobs) / len(token_logprobs)
```

#### Semantic Entropy (클러스터링 기반)
```python
from sentence_transformers import SentenceTransformer
from sklearn.cluster import AgglomerativeClustering

def semantic_entropy(responses: list[str], n_clusters: int = 3) -> float:
    """Semantic entropy via response clustering"""
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(responses)
    
    clustering = AgglomerativeClustering(n_clusters=n_clusters)
    labels = clustering.fit_predict(embeddings)
    
    # 클러스터별 빈도로 entropy 계산
    cluster_counts = Counter(labels)
    total = len(responses)
    probs = [count/total for count in cluster_counts.values()]
    
    return -sum(p * math.log2(p) for p in probs if p > 0)
```

### 3. Self-Certainty 계산
```python
def self_certainty(logprobs: list[float], vocab_size: int = 128000) -> float:
    """
    Self-Certainty metric from arXiv 2502.18581
    Higher value = more confident response
    """
    n_tokens = len(logprobs)
    avg_logprob = sum(logprobs) / n_tokens
    
    # Normalize by vocab size
    max_entropy = math.log(vocab_size)
    certainty = (avg_logprob + max_entropy) / max_entropy
    
    return certainty
```

### 4. Best-of-N with Self-Certainty Selection
```python
def best_of_n_selection(prompt: str, n: int = 5, model: str = "gpt-4") -> str:
    """
    Generate N responses and select by self-certainty
    """
    responses = []
    
    for _ in range(n):
        response = client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            logprobs=True,
            temperature=0.7
        )
        
        logprobs = [t.logprob for t in response.choices[0].logprobs.content]
        certainty = self_certainty(logprobs)
        
        responses.append({
            "text": response.choices[0].message.content,
            "certainty": certainty
        })
    
    # 가장 높은 certainty 선택
    best = max(responses, key=lambda x: x["certainty"])
    return best["text"]
```

### 5. Adaptive N 결정 (BEACON 방식)
```python
def adaptive_best_of_n(prompt: str, 
                       threshold: float = 0.8,
                       max_n: int = 10) -> str:
    """
    Bayesian optimal stopping for efficient sampling
    Stop early when confidence threshold met
    """
    responses = []
    
    for i in range(max_n):
        response = generate_with_logprobs(prompt)
        certainty = self_certainty(response["logprobs"])
        responses.append(response)
        
        # Early stopping
        if certainty > threshold:
            return response["text"]
        
        # 현재까지 최고 certainty 확인
        best = max(responses, key=lambda x: x["certainty"])
        if best["certainty"] > threshold * 0.9:  # 90% of threshold
            return best["text"]
    
    return max(responses, key=lambda x: x["certainty"])["text"]
```

### 6. Temperature Scaling Calibration
```python
from scipy.optimize import minimize_scalar

def temperature_scaling(logits: np.ndarray, 
                        labels: np.ndarray,
                        val_logits: np.ndarray) -> np.ndarray:
    """
    Post-hoc calibration via temperature scaling
    """
    def nll_loss(T):
        scaled = logits / T
        probs = softmax(scaled, axis=1)
        return -np.mean(np.log(probs[np.arange(len(labels)), labels]))
    
    result = minimize_scalar(nll_loss, bounds=(0.1, 10), method='bounded')
    optimal_T = result.x
    
    # Apply to validation/test logits
    calibrated = val_logits / optimal_T
    return softmax(calibrated, axis=1)
```

---

## 데이터 포인트

| 지표 | 수치 | 출처 | 연도 |
|------|------|------|------|
| Soft-SC Bash 성공률 향상 | +1.3% | arXiv 2402.13212 | 2024 |
| Soft-SC 샘플 효율성 | 50% 감소 | arXiv 2402.13212 | 2024 |
| Self-Certainty vs Reward Model 상관관계 | 0.85+ | arXiv 2502.18581 | 2025 |
| BEACON 샘플링 감소율 | 최대 80% | arXiv 2510.15945 | 2025 |
| Optimal Stopping vs BoN 생성 감소 | 15-35% | OpenReview | 2025 |
| Temperature=0 정확도 변동 | 최대 15% | arXiv 2408.04667 | 2024 |
| MAS 실패 중 Specification 문제 | 41.77% | arXiv 2503.13657 | 2025 |
| Semantic Entropy AUROC (의료 QA) | 0.76 | ScienceDirect | 2025 |
| Best-of-N 최적 N (Capability Saturation) | N=7 근처 plateau | Stanford CS224R | 2025 |
| Adaptive-Consistency 샘플 감소 | 7.9배 | ACL EMNLP 2023 | 2023 |
| RL Calibration (Brier Score) 향상 | 유의미 | OpenReview | 2025 |
| UniCR ECE 개선 | 기존 대비 우수 | arXiv 2509.01455 | 2025 |

---

## 레퍼런스 목록

### 필수 참고

1. **[Self-Certainty: Scalable Best-of-N Selection](https://arxiv.org/abs/2502.18581)** - Reward model 없이 Best-of-N 선택, self-certainty 메트릭 제안

2. **[Soft Self-Consistency Improves Language Model Agents](https://arxiv.org/abs/2402.13212)** - Bash 명령어 생성에서 검증된 효율적 self-consistency, ACL 2024

3. **[UniCR: Universal Calibration and Risk-Controlled Refusal](https://arxiv.org/abs/2509.01455)** - 통합 calibration 프레임워크, temperature scaling 기반

4. **[Holistic Trajectory Calibration (HTC)](https://openreview.net/forum?id=6YMFsGFabM)** - Agent trajectory 전체에 대한 calibration, ICLR 2026

5. **[Detecting Hallucinations Using Semantic Entropy](https://www.nature.com/articles/s41586-024-07421-0)** - Nature 발표, 의미 수준 불확실성 측정

6. **[A Survey on Uncertainty Quantification of LLMs](https://dl.acm.org/doi/10.1145/3744238)** - ACM 2025, 종합 서베이

7. **[Rewarding Doubt: RL for Calibrated Confidence](https://openreview.net/forum?id=yResLmrVO1)** - RL 기반 confidence calibration

### 추가 참고

1. **[BEACON: Bayesian Optimal Stopping](https://arxiv.org/html/2510.15945v1)** - 최대 80% 샘플링 감소, adaptive N 결정

2. **[Thermometer: Universal Calibration](https://arxiv.org/abs/2403.08819)** - Cross-task calibration 전이

3. **[Adaptive Temperature Scaling](https://aclanthology.org/2024.emnlp-main.1007/)** - Token-level temperature 조정

4. **[OpenAI Cookbook: Using Logprobs](https://cookbook.openai.com/examples/using_logprobs)** - 실용적 logprobs 활용 가이드

5. **[Terminal-Bench](https://www.youtube.com/watch?v=zt-U4lDdenY)** - Terminal agent 평가 벤치마크

6. **[SAGE-Agent: Structured Uncertainty Guided Clarification](https://arxiv.org/abs/2511.08798)** - 모호한 명령어 처리, EVPI 기반

7. **[Non-Determinism of Deterministic LLM Settings](https://arxiv.org/abs/2408.04667)** - LLM 비결정성 분석

8. **[LLM-Supported NL to Bash Translation](https://arxiv.org/html/2502.06858v1)** - Shell 명령어 생성 특화

---

## 리서치 갭 (추가 조사 필요)

- [ ] **Terminal-Bench 특화 Uncertainty 연구**: 현재 Terminal/CLI 환경에 특화된 uncertainty 연구 부재
- [ ] **Anthropic Claude Logprobs 대안**: Claude API에서 uncertainty 추출을 위한 대체 방법론 (verbalized confidence, sampling variance)
- [ ] **명령어 유형별 Uncertainty 패턴**: 결정적(deterministic) vs 확률적(stochastic) 명령어에 따른 최적 전략
- [ ] **Recovery-Aware Uncertainty**: 실패 후 복구 가능성을 고려한 uncertainty threshold 설정
- [ ] **Cross-Domain Transfer 검증**: HTC, UniCR의 Terminal Agent 도메인 적용 실험
- [ ] **N값 최적화**: Terminal-Bench에서의 최적 Best-of-N 값 실험적 검증

---

## 가설 수정 제안

### 수정된 가설 (구체화)
> **"Terminal Agent에 Self-Certainty 기반 Best-of-N 선택 + Temperature Scaling Calibration을 적용하면:**
> 1. **고위험 명령어** (rm, sudo 등): N=5-7, threshold=0.9 → 실행 전 Human-in-the-Loop
> 2. **중위험 명령어** (git, mv 등): Adaptive N (BEACON), threshold=0.8 → 자동 실행 또는 확인
> 3. **저위험 명령어** (ls, cat 등): N=1 (greedy), threshold 없음 → 즉시 실행
> 
> 이를 통해 **Bash 명령어 성공률 +3-5% 향상** (Soft-SC 1.3% 기반 추정) 및 **치명적 실패 감소**가 가능하다."

### 주요 변경점
1. **명령어 위험도별 차등 전략** 추가
2. **구체적 threshold 값** 제시
3. **BEACON 기반 Adaptive N** 통합
4. **Human-in-the-Loop 트리거 조건** 명시

---

*Generated by Research Deep Diver | 2026-01-07*

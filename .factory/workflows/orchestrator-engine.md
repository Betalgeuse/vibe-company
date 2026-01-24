# Factory Orchestrator Engine

> DeepCode 아키텍처에서 차용한 멀티에이전트 오케스트레이션 패턴

## 핵심 패턴

### 1. ParallelLLM (Fan-out/Fan-in)

```yaml
parallel_execution:
  pattern: "fan_out_fan_in"
  description: |
    여러 에이전트가 동시에 작업 후 결과를 통합 에이전트가 합성
  
  fan_out:
    - 독립적인 분석 작업들을 병렬로 실행
    - 각 에이전트는 서로의 결과를 기다리지 않음
  
  fan_in:
    - 모든 병렬 작업 완료 후 통합 에이전트가 결과 합성
    - 충돌 해결 및 일관성 보장
```

### 2. Adaptive Token Management

```yaml
token_management:
  base_max_tokens: 40000
  retry_max_tokens: 32000
  
  adaptive_policy:
    retry_1: "base_max_tokens"
    retry_2: "retry_max_tokens * 0.9"
    retry_3: "retry_max_tokens * 0.8"
  
  temperature_decay:
    initial: 0.3
    per_retry_decrease: 0.15
    minimum: 0.05
```

### 3. Completeness Assessment (완성도 점수)

```yaml
completeness_check:
  enabled: true
  threshold: 0.8  # 80% 이상이면 완료
  
  scoring_criteria:
    required_sections: 0.5   # 필수 섹션 존재 여부
    structure_integrity: 0.2  # 구조 완전성
    last_line_check: 0.15    # 마지막 줄 truncation 체크
    minimum_length: 0.15     # 최소 길이 충족
  
  on_incomplete:
    action: "retry_with_adjusted_params"
    max_retries: 3
```

### 4. Quality Gates (품질 관문)

```yaml
quality_gates:
  pre_execution:
    - input_validation
    - context_completeness
  
  mid_execution:
    - output_length_check
    - structure_validation
  
  post_execution:
    - completeness_score >= 0.8
    - no_critical_errors
    - all_required_sections_present
```

### 5. Error Recovery

```yaml
error_recovery:
  strategies:
    truncation:
      detect: "incomplete output structure"
      action: "reduce tokens, retry"
    
    timeout:
      detect: "execution exceeds limit"
      action: "simplify prompt, retry"
    
    validation_fail:
      detect: "score < threshold"
      action: "feedback loop with critic"
  
  max_recovery_attempts: 3
  fallback: "return partial result with warning"
```

---

## Workflow 타입별 적용

### Type A: Sequential with Validation Loop (biz-idea)

```
Step 1 → Step 2 → Step 3 → [Validation Loop] → Output
                              ↓ fail
                           Step 2 (retry)
```

### Type B: Parallel Research with Synthesis (research-idea)

```
         ┌→ Explorer ─┐
Input →  │            ├→ Synthesizer → Validator → Output
         └→ Miner ────┘
```

### Type C: Full Pipeline with CodeRAG (paper2code)

```
Input → Analyzer → [Parallel Analysis] → Planner → Reference → Implementation
                   ├→ Concept         │
                   └→ Algorithm ──────┘
```

---

## 구현 규칙

1. **모든 droid는 JSON 구조화된 출력 필수**
2. **각 step은 이전 step 출력을 명시적으로 참조**
3. **완성도 점수 80% 미만 시 자동 재시도**
4. **Critical 오류 발생 시 즉시 중단 + 피드백**
5. **최종 결과는 지정 디렉토리에 MD 파일로 저장**

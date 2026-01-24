# Abstraction Pattern Database

Cross-Domain Abstraction에서 사용하는 검증된 패턴 DB.

## 패턴 목록

### 1. Sliding Window
```yaml
pattern:
  name: "Sliding Window"
  description: "고정 크기 윈도우로 데이터 스트림 처리"
  
  abstract_structure:
    entities: ["window", "data_stream", "boundary"]
    relations:
      - type: "contains"
        from: "window"
        to: "data_stream_subset"
      - type: "sequential"
        from: "old_data"
        to: "eviction"
    constraints: ["fixed_window_size", "fifo_or_priority"]
    
  domain_instances:
    - domain: "HFT Order Book"
      implementation: "최근 N개 주문만 active book에 유지"
      reference: "Hyperliquid Architecture"
      
    - domain: "LLM Context"
      implementation: "최근 N토큰만 attention window에 유지"
      reference: "Sliding Window Attention (arXiv 2025)"
      
    - domain: "Stream Processing"
      implementation: "Tumbling/Hopping window로 집계"
      reference: "Apache Flink, Kafka Streams"
      
    - domain: "Network Protocol"
      implementation: "TCP Sliding Window"
      reference: "RFC 793"
```

### 2. Priority Eviction
```yaml
pattern:
  name: "Priority Eviction"
  description: "우선순위 기반으로 항목 제거"
  
  abstract_structure:
    entities: ["cache", "items", "priority_score"]
    relations:
      - type: "ordering"
        from: "items"
        to: "priority_score"
      - type: "causal"
        from: "low_priority"
        to: "eviction"
    constraints: ["capacity_limit", "priority_function"]
    
  domain_instances:
    - domain: "Database Cache"
      implementation: "LRU, LFU, ARC 알고리즘"
      reference: "O'Neil et al. (1993)"
      
    - domain: "LLM KV Cache"
      implementation: "Attention score 기반 eviction"
      reference: "NACL (ACL 2024), Lethe (arXiv 2025)"
      
    - domain: "Memory Management"
      implementation: "Page replacement (LRU, Clock)"
      reference: "OS Textbooks"
      
    - domain: "CDN Cache"
      implementation: "Popularity + Recency 기반"
      reference: "Cloudflare, Fastly"
```

### 3. Hierarchical Storage
```yaml
pattern:
  name: "Hierarchical Storage"
  description: "계층별로 다른 저장/검색 전략"
  
  abstract_structure:
    entities: ["tiers", "data", "access_pattern"]
    relations:
      - type: "hierarchy"
        from: "hot_tier"
        to: "cold_tier"
      - type: "causal"
        from: "access_frequency"
        to: "tier_placement"
    constraints: ["tier_capacity", "promotion_demotion_rules"]
    
  domain_instances:
    - domain: "Database Index"
      implementation: "B-tree, LSM-tree 계층"
      reference: "RocksDB, LevelDB"
      
    - domain: "RAG Retrieval"
      implementation: "Hierarchical Indices (요약→상세)"
      reference: "HiRAG (arXiv 2025)"
      
    - domain: "Memory Hierarchy"
      implementation: "L1/L2/L3 Cache → RAM → SSD"
      reference: "Computer Architecture"
      
    - domain: "Context Management"
      implementation: "Hot(recent)/Warm(summary)/Cold(archive)"
      reference: "Factory Droid Architecture"
```

### 4. Circuit Breaker
```yaml
pattern:
  name: "Circuit Breaker"
  description: "실패 감지 시 차단, 복구 후 재개"
  
  abstract_structure:
    entities: ["circuit", "request", "failure_counter"]
    states: ["closed", "open", "half_open"]
    relations:
      - type: "state_transition"
        from: "closed"
        to: "open"
        trigger: "failure_threshold_exceeded"
      - type: "state_transition"
        from: "open"
        to: "half_open"
        trigger: "timeout_elapsed"
    constraints: ["failure_threshold", "recovery_timeout"]
    
  domain_instances:
    - domain: "Microservices"
      implementation: "Netflix Hystrix, Resilience4j"
      reference: "Release It! (Nygard)"
      
    - domain: "AI Agent"
      implementation: "Tool 실패 시 대안 전략으로 전환"
      reference: "SHIELDA (arXiv 2025)"
      
    - domain: "API Client"
      implementation: "Rate limit 도달 시 backoff"
      reference: "Cloud SDK Best Practices"
```

### 5. Retry with Backoff
```yaml
pattern:
  name: "Retry with Backoff"
  description: "실패 시 점진적 간격으로 재시도"
  
  abstract_structure:
    entities: ["operation", "retry_count", "delay"]
    relations:
      - type: "causal"
        from: "failure"
        to: "retry"
      - type: "exponential"
        from: "retry_count"
        to: "delay"
    constraints: ["max_retries", "max_delay", "jitter"]
    
  domain_instances:
    - domain: "Network Protocol"
      implementation: "TCP 재전송, Exponential Backoff"
      reference: "RFC 6298"
      
    - domain: "Cloud API"
      implementation: "AWS SDK Retry, gRPC Retry"
      reference: "Google Cloud Best Practices"
      
    - domain: "AI Agent"
      implementation: "Tool 호출 실패 시 재시도"
      reference: "PALADIN (arXiv 2025)"
```

### 6. Fan-out/Fan-in
```yaml
pattern:
  name: "Fan-out/Fan-in"
  description: "작업 분산 후 결과 집계"
  
  abstract_structure:
    entities: ["coordinator", "workers", "results"]
    relations:
      - type: "distribution"
        from: "coordinator"
        to: "workers"
      - type: "aggregation"
        from: "workers"
        to: "coordinator"
    constraints: ["parallelism_degree", "aggregation_function"]
    
  domain_instances:
    - domain: "MapReduce"
      implementation: "Map → Shuffle → Reduce"
      reference: "Dean & Ghemawat (2004)"
      
    - domain: "Multi-Agent AI"
      implementation: "Parallel agent execution → result synthesis"
      reference: "DeepCode ParallelLLM"
      
    - domain: "Microservices"
      implementation: "Scatter-Gather pattern"
      reference: "AWS Step Functions"
```

### 7. Checkpoint Recovery
```yaml
pattern:
  name: "Checkpoint Recovery"
  description: "주기적 상태 저장, 실패 시 복원"
  
  abstract_structure:
    entities: ["state", "checkpoint", "recovery_point"]
    relations:
      - type: "snapshot"
        from: "state"
        to: "checkpoint"
      - type: "restore"
        from: "checkpoint"
        to: "state"
    constraints: ["checkpoint_interval", "storage_cost"]
    
  domain_instances:
    - domain: "Database Transaction"
      implementation: "WAL (Write-Ahead Logging)"
      reference: "PostgreSQL, MySQL"
      
    - domain: "CI/CD Pipeline"
      implementation: "Stage artifacts, Resume from failure"
      reference: "GitHub Actions, GitLab CI"
      
    - domain: "AI Agent"
      implementation: "Task state 저장, 실패 시 rollback"
      reference: "Letta Memory Blocks"
      
    - domain: "ML Training"
      implementation: "Model checkpoint, Resume training"
      reference: "PyTorch, TensorFlow"
```

### 8. Incremental Update
```yaml
pattern:
  name: "Incremental Update"
  description: "변경분만 처리하여 효율 향상"
  
  abstract_structure:
    entities: ["base_state", "delta", "new_state"]
    relations:
      - type: "composition"
        from: ["base_state", "delta"]
        to: "new_state"
    constraints: ["delta_detection", "merge_strategy"]
    
  domain_instances:
    - domain: "Database CDC"
      implementation: "Change Data Capture (Debezium)"
      reference: "Debezium Documentation"
      
    - domain: "Version Control"
      implementation: "Git diff, Patch"
      reference: "Git Internals"
      
    - domain: "LLM Context"
      implementation: "Context diff, Incremental summarization"
      reference: "Anthropic Context Engineering"
      
    - domain: "Search Index"
      implementation: "Incremental indexing"
      reference: "Elasticsearch, Algolia"
```

## 패턴 유사도 계산

### 구조적 유사도 점수
```python
def structural_similarity(pattern_a, pattern_b):
    """
    Structure Mapping Theory 기반 유사도 계산
    """
    # 1. 관계 유형 매칭 (가중치 높음)
    relation_score = match_relations(
        pattern_a.relations, 
        pattern_b.relations
    )
    
    # 2. 제약조건 매칭
    constraint_score = match_constraints(
        pattern_a.constraints,
        pattern_b.constraints
    )
    
    # 3. 엔티티 역할 매칭 (가중치 낮음)
    entity_score = match_entity_roles(
        pattern_a.entities,
        pattern_b.entities
    )
    
    # SMT 원칙: 관계 > 제약 > 엔티티
    return (
        0.5 * relation_score +
        0.3 * constraint_score +
        0.2 * entity_score
    )
```

## 사용 방법

1. 문제를 추상화하여 `abstract_structure` 형식으로 표현
2. 각 패턴과 `structural_similarity` 계산
3. Top-K 패턴 선정
4. 해당 패턴의 `domain_instances`에서 해결책 탐색
5. Safe Transfer 검증 후 적응

---

*Pattern Database v1.0 | 2026-01-07*

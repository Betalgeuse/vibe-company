{
  "command": "paper2code",
  "action": "invoke_pipeline",
  "objective": "논문/기술 문서를 분석하여 실행 가능한 코드로 변환",
  "workflow": "paper2code",
  "orchestrator_config": ".factory/workflows/orchestrator-engine.md",
  
  "execution_flow": [
    {
      "step": 1,
      "id": "input_analysis",
      "droid": "@input-analyzer",
      "action": "입력 분류 및 메타데이터 추출",
      "input_types": ["url", "file", "text"],
      "output": "analyzed_input",
      "quality_gate": {
        "required_fields": ["input_type", "source_path", "metadata"],
        "on_fail": "ask_user_clarification"
      }
    },
    {
      "step": 2,
      "id": "document_processing",
      "droid": "@document-processor",
      "action": "문서 다운로드/변환 및 세그먼트 분할",
      "input_from": ["analyzed_input"],
      "output": "processed_document",
      "features": {
        "pdf_to_markdown": true,
        "smart_segmentation": true,
        "segment_size_threshold": 50000
      }
    },
    {
      "step": 3,
      "id": "parallel_analysis",
      "parallel": true,
      "agents": [
        {
          "droid": "@concept-analyzer",
          "action": "시스템 아키텍처 및 개념 분석",
          "output": "concept_analysis"
        },
        {
          "droid": "@algorithm-extractor",
          "action": "알고리즘/수식/구현 세부사항 추출",
          "output": "algorithm_analysis"
        }
      ],
      "fan_in": {
        "droid": "@code-planner",
        "action": "분석 결과 통합 및 구현 계획 수립",
        "output": "implementation_plan"
      },
      "quality_gate": {
        "completeness_threshold": 0.8,
        "required_sections": ["file_structure", "implementation_components", "validation_approach"],
        "on_incomplete": "retry_with_adjusted_tokens"
      }
    },
    {
      "step": 4,
      "id": "reference_mining",
      "droid": "@reference-miner",
      "action": "관련 GitHub 레포지토리 검색 및 분석",
      "input_from": ["implementation_plan"],
      "output": "reference_repos",
      "criteria": {
        "min_stars": 100,
        "max_repos": 5,
        "relevance_threshold": 0.7
      }
    },
    {
      "step": 5,
      "id": "code_indexing",
      "droid": "@code-indexer",
      "action": "레퍼런스 코드 인덱싱 (CodeRAG)",
      "input_from": ["reference_repos"],
      "output": "indexed_codebase",
      "features": {
        "semantic_indexing": true,
        "dependency_graph": true,
        "pattern_extraction": true
      }
    },
    {
      "step": 6,
      "id": "code_generation",
      "type": "iterative",
      "max_iterations": 3,
      "droid": "@code-generator",
      "action": "코드 생성 및 테스트",
      "input_from": ["implementation_plan", "indexed_codebase"],
      "output": "generated_code",
      "validation": {
        "syntax_check": true,
        "unit_tests": true,
        "integration_tests": false
      },
      "on_test_fail": "debug_and_retry"
    }
  ],
  
  "adaptive_params": {
    "base_max_tokens": 40000,
    "retry_max_tokens": 32000,
    "initial_temperature": 0.2,
    "retry_temperature_decay": 0.05,
    "min_temperature": 0.05,
    "completeness_threshold": 0.8,
    "max_retries": 3
  },
  
  "quality_gates": {
    "pre_execution": ["input_validation", "context_completeness"],
    "mid_execution": ["output_length_check", "structure_validation"],
    "post_execution": ["completeness_score", "no_critical_errors", "all_required_sections"]
  },
  
  "error_recovery": {
    "truncation": {
      "detect": "incomplete output structure",
      "action": "reduce tokens, retry"
    },
    "timeout": {
      "detect": "execution exceeds limit",
      "action": "simplify prompt, retry"
    },
    "validation_fail": {
      "detect": "score < threshold",
      "action": "feedback loop with analyzer"
    },
    "max_recovery_attempts": 3,
    "fallback": "return partial result with warning"
  },
  
  "success_criteria": {
    "code_completeness": 0.9,
    "test_pass_rate": 0.8,
    "pass_action": "save to /Users/zayden/Documents/assets/paper2code/{project-name}/",
    "partial_action": "save with TODO markers"
  },
  
  "output": {
    "directory": "/Users/zayden/Documents/assets/paper2code/",
    "structure": {
      "src/": "generated source code",
      "tests/": "generated test files",
      "docs/": "implementation notes",
      "README.md": "project overview and setup"
    },
    "artifacts": [
      "implementation_plan.yaml",
      "reference_analysis.md",
      "generation_log.md"
    ]
  }
}

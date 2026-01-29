{
  "command": "biz-idea",
  "action": "invoke_pipeline",
  "objective": "1인 기업 신사업 아이디어 발굴 및 검증 파이프라인",
  "workflow": "biz-idea",
  "orchestrator_config": ".factory/workflows/orchestrator-engine.md",
  
  "execution_flow": [
    {
      "step": 1,
      "id": "market_research",
      "parallel": true,
      "agents": [
        {
          "droid": "@niche-market-hunter-microsaas-scout",
          "action": "니치 마켓 키워드 탐색",
          "output": "keywords_with_probability"
        },
        {
          "droid": "@reference-scout-global-competitor-analyst",
          "action": "글로벌 레퍼런스 분석",
          "output": "competitor_analysis"
        }
      ],
      "fan_in": {
        "action": "merge_research_results",
        "output": "market_research_synthesis"
      }
    },
    {
      "step": 2,
      "id": "mvp_design",
      "droid": "@opus-solo-founder-mvp-architect",
      "action": "레퍼런스 기반 MVP 초안 작성",
      "input_from": ["market_research_synthesis"],
      "output": "mvp_draft",
      "quality_gate": {
        "completeness_threshold": 0.8,
        "required_sections": ["product_spec", "differentiation", "automation_strategy"],
        "on_fail": "retry_with_feedback"
      }
    },
    {
      "step": 3,
      "id": "validation_loop",
      "type": "iterative",
      "max_iterations": 3,
      "agents": {
        "critic": "@codex-devils-advocate-validator",
        "defender": "@opus-solo-founder-mvp-architect"
      },
      "rounds": [
        {"round": 1, "name": "attack", "goal": "find 3+ critical weaknesses"},
        {"round": 2, "name": "counter", "goal": "verify defense validity"},
        {"round": 3, "name": "verdict", "goal": "score >= 85 = PASS"}
      ],
      "exit_conditions": {
        "pass": "score >= 85 AND no_critical_unresolved",
        "fail": "iterations >= 3 OR critical_unresolved"
      }
    }
  ],
  
  "adaptive_params": {
    "initial_temperature": 0.3,
    "retry_temperature_decay": 0.1,
    "min_temperature": 0.05,
    "completeness_threshold": 0.8,
    "max_retries": 3
  },
  
  "success_criteria": {
    "score_threshold": 85,
    "pass_action": "save to /Users/zayden/Documents/assets/idea-{project-name}.md",
    "reject_action": "log failure reason, restart from step 1 with next keyword"
  },
  
  "output": {
    "directory": "/Users/zayden/Documents/assets/",
    "filename_pattern": "idea-{project-name}.md",
    "required_sections": [
      "Score & Verdict",
      "The Micro Opportunity", 
      "Product Spec (MVP)",
      "Competition Check",
      "Automation Strategy",
      "Cost Estimate"
    ]
  }
}

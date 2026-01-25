{
  "command": "research-idea",
  "action": "invoke_pipeline",
  "objective": "리서치 아이디어 탐색 및 Codex 티키타카 검증 파이프라인",
  "workflow": "research-idea",
  "orchestrator_config": ".factory/workflows/orchestrator-engine.md",
  
  "execution_flow": [
    {
      "step": 1,
      "id": "parallel_discovery",
      "parallel": true,
      "agents": [
        {
          "droid": "@research-topic-explorer",
          "action": "리서치 주제 탐색 및 기회 발굴",
          "output": "topic_hypothesis"
        },
        {
          "droid": "@research-deep-diver",
          "action": "심층 리서치 및 레퍼런스 수집",
          "output": "deep_insights"
        },
        {
          "droid": "@analogy-finder",
          "action": "Cross-domain structural analogy 탐색 (SMT 기반)",
          "output": "cross_domain_analogies"
        }
      ],
      "fan_in": {
        "action": "synthesize_research_with_analogies",
        "output": "research_synthesis"
      }
    },
    {
      "step": 2,
      "id": "tikitaka_validation",
      "type": "iterative_dialogue",
      "max_iterations": 3,
      "agents": {
        "researcher": "@research-deep-diver",
        "critic": "@codex-research-critic"
      },
      "dialogue_protocol": {
        "round_1": {
          "critic_action": "interrogation",
          "goal": "find 3+ hypothesis weaknesses",
          "output": "weaknesses_list"
        },
        "round_2": {
          "researcher_action": "defend",
          "critic_action": "counter_verify",
          "goal": "verify each defense",
          "output": "defense_evaluation"
        },
        "round_3": {
          "critic_action": "final_verdict",
          "goal": "score and actionable items",
          "output": "research_score_verdict"
        }
      },
      "exit_conditions": {
        "pass": "score >= 80 AND no_critical_unresolved",
        "conditional": "score 60-79, needs refinement",
        "fail": "score < 60 OR critical_unresolved"
      }
    }
  ],
  
  "adaptive_params": {
    "initial_temperature": 0.4,
    "retry_temperature_decay": 0.1,
    "min_temperature": 0.1,
    "completeness_threshold": 0.75,
    "max_retries": 2
  },
  
  "tikitaka_rules": {
    "max_rounds": 3,
    "min_critiques_per_round": 3,
    "pass_threshold": 80,
    "conditional_threshold": 60,
    "critical_weakness_instant_reject": true,
    "allow_researcher_counter": true
  },
  
  "success_criteria": {
    "score_threshold": 80,
    "pass_action": "save to /Users/zayden/Documents/assets/research-{topic-name}.md",
    "conditional_action": "save draft with TODO markers",
    "reject_action": "log failure, suggest pivot topics"
  },
  
  "output": {
    "directory": "/Users/zayden/Documents/assets/",
    "filename_pattern": "research-{topic-name}.md",
    "required_sections": [
      "Research Score & Verdict",
      "Hypothesis",
      "Cross-Domain Analogies",
      "Supporting Evidence",
      "Counter Evidence",
      "Action Items",
      "References"
    ]
  }
}

{
  "command": "biz-idea",
  "version": "2.0",
  "action": "invoke_pipeline",
  "objective": "1인 기업 신사업 아이디어 발굴 및 검증 파이프라인",
  "changelog": "v2.0: execution_mode 추가 (fast/careful), confirmation checkpoints 도입",
  
  "execution_mode": {
    "type": "fast | careful",
    "default": "fast",
    "trigger_keywords": {
      "fast": ["아이디어 찾아줘", "파이프라인 실행해줘", "biz-idea"],
      "careful": ["아이디어 찾아줘 careful", "신중하게 아이디어 탐색해줘", "biz-idea --careful"]
    },
    "description": {
      "fast": "자동 실행, 끝까지 논스톱. 빠른 탐색, 여러 아이디어 테스트에 적합",
      "careful": "각 Step 후 사용자 확인. 중요한 아이디어, 방향 검증 필요 시 사용"
    }
  },

  "confirmation_checkpoints": {
    "enabled_in": "careful",
    "checkpoints": [
      {
        "after_step": "1.5",
        "id": "reference_review",
        "question": "분석된 레퍼런스가 의도한 방향인가요?",
        "options": [
          {"label": "✅ 진행", "action": "continue"},
          {"label": "🔄 방향 수정", "action": "retry_step", "input_required": "어떤 방향으로 수정할까요?"},
          {"label": "❌ 다른 키워드", "action": "restart_from_step_1"}
        ]
      },
      {
        "after_step": "2",
        "id": "mvp_selection",
        "question": "MVP 방향 3개 중 어떤 것으로 진행할까요?",
        "options": [
          {"label": "Option A", "action": "select_option", "value": "A"},
          {"label": "Option B", "action": "select_option", "value": "B"},
          {"label": "Option C", "action": "select_option", "value": "C"},
          {"label": "🔄 다시 설계", "action": "retry_step"}
        ]
      },
      {
        "after_step": "3-R1",
        "id": "attack_review",
        "question": "공격 포인트가 타당한가요? 추가할 약점은?",
        "options": [
          {"label": "✅ 진행", "action": "continue"},
          {"label": "➕ 약점 추가", "action": "add_input", "input_required": "추가할 약점을 입력하세요"}
        ]
      },
      {
        "after_step": "3-R3",
        "id": "verdict_review",
        "question": "Verdict에 동의하시나요?",
        "options": [
          {"label": "✅ 저장", "action": "save"},
          {"label": "🔄 재검증 요청", "action": "restart_step_3"}
        ]
      }
    ],
    "rollback_policy": {
      "retry_step": "해당 Step만 재실행",
      "restart_from_step_1": "Step 1부터 새 키워드로 재시작",
      "restart_step_3": "Step 3 (Codex 검증) 전체 재시작"
    }
  },

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
      },
      "checkpoint": "reference_review"
    },
    {
      "step": 2,
      "id": "mvp_design",
      "droid": "@opus-solo-founder-mvp-architect",
      "action": "레퍼런스 기반 MVP 초안 작성 (3개 Option 제시)",
      "input_from": ["market_research_synthesis"],
      "output": "mvp_draft_options",
      "quality_gate": {
        "completeness_threshold": 0.8,
        "required_sections": ["product_spec", "differentiation", "automation_strategy"],
        "on_fail": "retry_with_feedback"
      },
      "checkpoint": "mvp_selection"
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
        {
          "round": 1,
          "name": "attack",
          "goal": "find 3+ critical weaknesses",
          "checkpoint": "attack_review"
        },
        {"round": 2, "name": "counter", "goal": "verify defense validity"},
        {
          "round": 3,
          "name": "verdict",
          "goal": "score >= 85 = PASS",
          "checkpoint": "verdict_review"
        }
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

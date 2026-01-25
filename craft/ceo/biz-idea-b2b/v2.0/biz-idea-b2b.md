{
  "command": "biz-idea-b2b",
  "role": "ceo",
  "action": "invoke_pipeline",
  "objective": "B2B SaaS 신사업 아이디어 발굴 및 검증 파이프라인",
  "version": "2.0",
  "workflow": "biz-idea-b2b",
  "workflow_spec": ".factory/workflows/biz-idea-b2b-pipeline.md",
  
  "target_business_model": {
    "type": "B2B SaaS (SMB-focused)",
    "characteristics": [
      "SMB 기업 대상 판매 (10-200명 규모)",
      "팀 단위 구매 (5-20 seats)",
      "ACV(연간계약가치) $3K-30K",
      "Product-Led Sales (PLG + Light Sales)",
      "1-3개월 Sales Cycle"
    ],
    "excluded": [
      "B2C/Prosumer SaaS",
      "1인 기업/프리랜서 타겟",
      "Enterprise (복잡한 구매 프로세스)",
      "ACV $50K+ (긴 세일즈 사이클)"
    ]
  },
  
  "execution_flow": [
    {
      "step": 1,
      "id": "market_research",
      "name": "B2B Market Research",
      "parallel": true,
      "agents": [
        {
          "droid": "@b2b-market-hunter",
          "action": "B2B 버티컬 마켓 탐색 + ICP 분석",
          "output": "b2b_market_opportunities"
        },
        {
          "droid": "@reference-scout-global-competitor-analyst",
          "action": "B2B SaaS 경쟁 분석 (CAC, LTV, Churn)",
          "output": "b2b_competitor_analysis"
        }
      ],
      "fan_in": {
        "action": "merge_b2b_research",
        "output": "b2b_market_synthesis"
      },
      "output_spec": {
        "b2b_icp_analysis": {
          "target_segment": "Industry + Company Size (SMB 10-200) + Role",
          "tam_size": "$50M-500M (SMB market)",
          "buying_committee": "1-2 decision makers (간단한 구매)",
          "budget_owner": "Team Lead / Department Head",
          "procurement_process": "신용카드 or 간단한 계약"
        },
        "scoring": {
          "market_size": "/10 (TAM $50M+)",
          "icp_clarity": "/10 (구체적 SMB 구매자)",
          "pass_threshold": "≥16/20"
        }
      }
    },
    {
      "step": 1.5,
      "id": "gtm_strategy_fit",
      "name": "GTM Strategy Fit Analysis",
      "droid": "@codex-devils-advocate-validator",
      "action": "B2B GTM 전략 적합성 분석",
      "input_from": ["b2b_market_synthesis"],
      "gtm_models": {
        "product_led_sales": {
          "description": "PLG + Light Sales Assist",
          "fit_for": "ACV $3K-15K, SMB",
          "founder_effort": "LOW-MEDIUM - Product 중심 + 간단한 데모"
        },
        "founder_led_sales": {
          "description": "Founder가 직접 데모/클로징",
          "fit_for": "ACV $10K-30K, SMB",
          "founder_effort": "MEDIUM - 주 5-10 데모콜"
        },
        "self_serve_plus": {
          "description": "셀프서비스 + 필요시 Sales 지원",
          "fit_for": "ACV $3K-10K, Tech-savvy SMB",
          "founder_effort": "LOW - 온보딩 자동화"
        }
      },
      "output": "gtm_fit_verdict",
      "scoring": {
        "sales_led_fit": "/10",
        "pls_fit": "/10",
        "channel_fit": "/10",
        "recommended_gtm": "Best fit model"
      }
    },
    {
      "step": 2,
      "id": "mvp_design",
      "name": "B2B MVP Design",
      "droid": "@b2b-mvp-architect",
      "action": "B2B SaaS MVP 설계 (SMB-ready, 빠른 온보딩)",
      "input_from": ["b2b_market_synthesis", "gtm_fit_verdict"],
      "output": "b2b_mvp_draft",
      "quality_gate": {
        "completeness_threshold": 0.8,
        "required_sections": [
          "product_spec",
          "smb_requirements",
          "pricing_model",
          "gtm_strategy",
          "onboarding_flow"
        ],
        "on_fail": "retry_with_feedback"
      }
    },
    {
      "step": 2.5,
      "id": "unit_economics",
      "name": "B2B Unit Economics Analysis",
      "droid": "@codex-devils-advocate-validator",
      "action": "B2B SaaS 핵심 지표 검증",
      "input_from": ["b2b_mvp_draft"],
      "metrics": {
        "acv": {
          "question": "Average Contract Value는?",
          "threshold": "$3K-30K (SMB sweet spot)"
        },
        "cac": {
          "question": "Customer Acquisition Cost는?",
          "benchmark": "CAC < 6 months ACV (SMB는 빠른 회수)"
        },
        "ltv_cac": {
          "question": "LTV:CAC ratio는?",
          "threshold": "≥3:1 (healthy), ≥4:1 (excellent)"
        },
        "payback_period": {
          "question": "CAC Payback Period는?",
          "threshold": "≤6 months (SMB 빠른 회수)"
        },
        "gross_margin": {
          "question": "Gross Margin은?",
          "threshold": "≥75% (자동화로 높은 마진)"
        },
        "nrr": {
          "question": "Net Revenue Retention 예상치는?",
          "threshold": "≥95% (SMB churn 고려), ≥105% (excellent)"
        }
      },
      "output": "unit_economics_score",
      "scoring": {
        "pass": "All metrics ≥ threshold",
        "conditional": "4-5 metrics pass",
        "reject": "< 4 metrics pass"
      }
    },
    {
      "step": 3,
      "id": "validation_loop",
      "name": "B2B Validation Loop",
      "type": "iterative",
      "max_iterations": 3,
      "agents": {
        "critic": "@codex-devils-advocate-validator",
        "defender": "@b2b-mvp-architect"
      },
      "rounds": [
        {
          "round": 1,
          "name": "attack",
          "goal": "find 3+ critical B2B weaknesses",
          "focus_areas": [
            "Sales cycle too long?",
            "CAC too high?",
            "Market too small?",
            "Competition too strong?",
            "Founder-market fit?"
          ]
        },
        {
          "round": 2,
          "name": "counter",
          "goal": "verify defense with B2B evidence"
        },
        {
          "round": 3,
          "name": "verdict",
          "goal": "final B2B viability scoring"
        }
      ],
      "scoring_breakdown": {
        "market_opportunity": {
          "max": 25,
          "criteria": ["TAM ≥$50M", "Clear SMB ICP", "Growing market"]
        },
        "gtm_feasibility": {
          "max": 25,
          "criteria": ["Self-serve or Light-touch", "Low CAC", "Quick sales cycle"]
        },
        "unit_economics": {
          "max": 25,
          "criteria": ["LTV:CAC ≥3:1", "Payback ≤6mo", "Gross margin ≥75%"]
        },
        "competitive_moat": {
          "max": 25,
          "criteria": ["Differentiation clear", "Switching cost", "Network effects"]
        }
      },
      "exit_conditions": {
        "pass": "score >= 80 AND unit_economics pass AND no_critical_unresolved",
        "conditional": "score 60-79",
        "fail": "score < 60 OR unit_economics fail"
      },
      "output": "b2b_validation_score"
    },
    {
      "step": 4,
      "id": "funding_readiness",
      "name": "Funding Readiness Check (Optional)",
      "trigger": "validation_loop PASS AND founder requests",
      "droid": "@codex-devils-advocate-validator",
      "action": "VC Fundability 체크리스트",
      "checklist": [
        {"id": "tam", "check": "TAM ≥$100M?"},
        {"id": "founder_fit", "check": "Founder가 ICP를 잘 아는가?"},
        {"id": "traction", "check": "Early customers or waitlist?"},
        {"id": "moat", "check": "제품 차별화 명확?"},
        {"id": "growth", "check": "Path to $5M ARR?"},
        {"id": "timing", "check": "Why now? Market tailwind?"}
      ],
      "output": "funding_readiness_score",
      "scoring": {
        "vc_fundable": "5-6 checks = Ready for seed",
        "bootstrap_first": "3-4 checks = Bootstrap to traction",
        "not_ready": "< 3 checks = Not VC-fundable yet"
      }
    }
  ],
  
  "final_verdict": {
    "pass_criteria": {
      "validation_score": "≥80/100",
      "unit_economics": "PASS",
      "gtm_fit": "Clear model identified",
      "founder_market_fit": "Validated"
    },
    "output_summary": {
      "scores": {
        "market_icp": "/20",
        "gtm_fit": "/30",
        "unit_economics": "PASS/CONDITIONAL/FAIL",
        "validation": "/100",
        "funding_readiness": "/6 (optional)"
      },
      "verdict": "PASS / CONDITIONAL / REJECT"
    }
  },
  
  "success_criteria": {
    "score_threshold": 80,
    "pass_action": "save all documents to /Users/zayden/Documents/assets/draft/biz-idea/b2b/{project-name}/",
    "reject_action": "save rejection summary to /Users/zayden/Documents/assets/draft/biz-idea/b2b/{project-name}-rejected/"
  },
  
  "output": {
    "directory": "/Users/zayden/Documents/assets/draft/biz-idea/b2b/{project-name}/",
    "folder_structure": {
      "description": "각 실행마다 프로젝트별 폴더 생성",
      "files": [
        "{project-name}-summary.md",
        "{project-name}-icp-analysis.md",
        "{project-name}-gtm-strategy.md",
        "{project-name}-unit-economics.md",
        "{project-name}-mvp-spec.md",
        "{project-name}-validation.md"
      ],
      "example": {
        "folder": "draft/biz-idea/b2b/ai-meeting-scheduler/",
        "contents": [
          "ai-meeting-scheduler-summary.md",
          "ai-meeting-scheduler-icp-analysis.md",
          "ai-meeting-scheduler-gtm-strategy.md",
          "ai-meeting-scheduler-unit-economics.md",
          "ai-meeting-scheduler-mvp-spec.md",
          "ai-meeting-scheduler-validation.md"
        ]
      }
    },
    "required_documents": [
      {
        "file": "{project-name}-summary.md",
        "sections": ["Executive Summary", "Final Verdict", "Key Metrics"]
      },
      {
        "file": "{project-name}-icp-analysis.md",
        "sections": ["SMB ICP Analysis (/20)", "Target Segment", "Buying Committee"]
      },
      {
        "file": "{project-name}-gtm-strategy.md",
        "sections": ["GTM Strategy Fit (/30)", "Recommended Model", "Sales Playbook Outline"]
      },
      {
        "file": "{project-name}-unit-economics.md",
        "sections": ["Unit Economics Analysis", "ACV", "CAC", "LTV:CAC", "Payback"]
      },
      {
        "file": "{project-name}-mvp-spec.md",
        "sections": ["MVP Spec (SMB-Ready)", "Core Features", "Onboarding Flow"]
      },
      {
        "file": "{project-name}-validation.md",
        "sections": ["Validation Score (/100)", "Attack/Defense Rounds", "Risk Assessment"]
      }
    ]
  }
}

---

# biz-idea-b2b (V2.0)

B2B SaaS 신사업 아이디어 발굴 및 검증 파이프라인

## vs Micro-SaaS Pipeline

| 항목 | Micro-SaaS (기존) | B2B SMB SaaS (신규) |
|------|-------------------|---------------------|
| **타겟** | 1인 기업, 프리랜서 | SMB (10-200명 기업) |
| **ACV** | $0-5K | $3K-30K |
| **GTM** | PLG (100% Self-serve) | Product-Led Sales (PLG + Light Sales) |
| **TAM** | $10-50M | $50M-500M |
| **Sales Cycle** | 즉시-1주 | 1-3개월 |
| **핵심 지표** | MRR, Churn | ACV, CAC, LTV, NRR |

## Pipeline Steps

```
Step 1    → SMB Market Research + ICP (/20)
Step 1.5  → GTM Strategy Fit (/30)
Step 2    → SMB MVP Design (빠른 온보딩)
Step 2.5  → Unit Economics Analysis
Step 3    → Validation Loop (/100)
Step 4    → Growth Readiness (Optional)
```

## Key Frameworks

1. **SMB ICP Framework**
   - Industry + Company Size (10-200) + Role
   - 1-2 Decision Makers
   - Team Lead / Dept Head 예산

2. **SMB Unit Economics**
   - ACV $3K-30K
   - LTV:CAC ≥ 3:1
   - Payback ≤ 6 months

3. **GTM Models**
   - Product-Led Sales (ACV $3K-15K)
   - Founder-Led Sales (ACV $10K-30K)
   - Self-Serve Plus (ACV $3K-10K)

## Pass Criteria

| 항목 | 기준 |
|------|------|
| Validation Score | ≥80/100 |
| Unit Economics | PASS |
| GTM Fit | Clear model |
| Payback | ≤6 months |

## Output Structure

각 실행마다 프로젝트별 폴더가 생성됩니다:

```
draft/biz-idea/b2b/
├── ai-meeting-scheduler/              # PASS 케이스
│   ├── ai-meeting-scheduler-summary.md
│   ├── ai-meeting-scheduler-icp-analysis.md
│   ├── ai-meeting-scheduler-gtm-strategy.md
│   ├── ai-meeting-scheduler-unit-economics.md
│   ├── ai-meeting-scheduler-mvp-spec.md
│   └── ai-meeting-scheduler-validation.md
└── blockchain-smb-rejected/           # REJECT 케이스
    └── blockchain-smb-rejection-summary.md
```

## Usage

```
/biz-idea-b2b [keyword]
/biz-idea-b2b "AI meeting scheduler for SMB sales teams"
```

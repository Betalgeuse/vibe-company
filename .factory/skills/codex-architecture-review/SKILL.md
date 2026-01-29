---
name: codex-architecture-review
description: Use Codex CLI (gpt-5.2-codex) to conduct iterative architecture reviews. Ideal for complex system design decisions requiring multiple rounds of expert feedback. (project)
---

# Codex Architecture Review Skill

## Overview

This skill leverages OpenAI Codex CLI to conduct multi-round architecture reviews for complex system designs. It's especially useful for:
- Trading system architecture validation
- Infrastructure design decisions
- Risk management system design
- Multi-layer system architecture

## Prerequisites

- Codex CLI installed (`/opt/homebrew/bin/codex`)
- OpenAI API access configured
- Model: `gpt-5.2-codex` (required for ChatGPT account users)

## Usage Pattern

### Basic Command

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "YOUR_PROMPT"
```

### Iterative Review Process (5 Rounds)

Each round builds on previous feedback. The pattern:

1. **Round 1**: Present initial architecture, ask for critical feedback
2. **Round 2**: Incorporate feedback, ask for additional issues
3. **Round 3**: Refine based on feedback, ask for specific improvements
4. **Round 4**: Add detailed specifications, validate thresholds
5. **Round 5**: Final review, ask for production-readiness assessment

## Example: Trading System Architecture Review

### Round 1 - Initial Proposal

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "Review this crypto trading architecture proposal:

PROBLEM: Current system uses Day/Night separation which is wrong for 24/7 crypto markets.

PROPOSED FIX: Continuous 4-Layer Architecture:
1. LAYER 1 - EXECUTION (24/7): Always-on trading with approved strategies
2. LAYER 2 - SHADOW VALIDATION: New strategies paper-trade for 7 days
3. LAYER 3 - RESEARCH PIPELINE: Event-driven, rate-limited to 10 experiments/hour
4. LAYER 4 - MARKET INTELLIGENCE: 3 Pillars monitoring, regime detection hourly

QUESTIONS:
1. Is this appropriate for crypto 24/7 markets?
2. What failure modes am I missing?
3. Should shadow validation be longer/shorter?

Provide detailed critical feedback."
```

### Round 2 - Incorporate Feedback

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "Review round 2/5 - Updated architecture based on your feedback.

KEY ADDITIONS:
1. Layer 0: Risk & Reconciliation (kill-switch, position sync every 10s)
2. Extended shadow validation: 14-30 days instead of 7
3. Tiered rate limiting: 10/hour baseline + 30/hour burst
4. Multi-venue arbitrage as separate risk class

QUESTIONS:
1. Is the Risk layer properly scoped?
2. Are promotion gates sufficient?
3. What specific metrics should trigger kill-switch?"
```

### Round 3 - Add Specifics

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "Review round 3/5 - Architecture v3 with specific thresholds.

KILL-SWITCH TRIGGERS:
- Drawdown: > max(3%, 5x 15m RV) in 15 minutes
- Margin: > 85% OR liquidation within 5 ticks
- Data staleness: > 5s while positions open

REGIME DETECTION:
- HMM with 2-hour persistence to confirm
- Bayesian Online Change Point Detection as backup

QUESTIONS:
1. Are kill-switch thresholds appropriate for crypto?
2. Is HMM + Bayesian ensemble sufficient?
3. Any remaining gaps?"
```

### Round 4 - Validate Formulas

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "Review round 4/5 - Architecture v4 with volatility-adaptive thresholds.

RV DEFINITION:
- RV = sqrt(sum of squared 1-min log returns over 15 min)
- Non-annualized, per-asset calculation
- Upper bound: max(3%, min(5x RV, 10%))

STATE MACHINE:
- NORMAL -> ELEVATED -> CRITICAL -> KILL
- Hysteresis: 30-min cooldown between downgrades

QUESTIONS:
1. Is 5x 15m RV appropriate for crypto?
2. Per-strategy 2% DD cap - too tight or loose?
3. SLO targets reasonable?"
```

### Round 5 - Final Assessment

```bash
codex exec -m gpt-5.2-codex --sandbox read-only "Review round 5/5 (FINAL) - Production readiness check.

FINAL ADDITIONS:
- Shock/Drift trigger separation with hysteresis
- Data quality gating with failover hierarchy
- Ensemble disagreement policy (agreement required for risk)
- Chaos testing schedule (weekly/monthly/quarterly)
- SLOs: kill-switch <500ms, reconciliation <10s

QUESTIONS:
1. Is this architecture now production-ready?
2. Any remaining critical gaps?
3. What would you prioritize for Phase 1 MVP?
4. Recommended order of implementation?"
```

## Key Findings from Reviews

### Common Critical Issues Identified

1. **Kill-switch underspecification**: Need volatility-adaptive thresholds
2. **Shadow validation too short**: 7 days insufficient, need 14-30 days
3. **Rate limiting inflexibility**: Need burst capacity for regime shifts
4. **State sync too slow**: 30s → 10s for fast markets
5. **Missing failure modes**: Exchange outages, data gaps, partial fills

### Recommended Additions

- Layer 0: Risk & Reconciliation as single source of truth
- Shock vs Drift trigger separation
- HMM + Bayesian ensemble for regime detection
- Multi-venue arbitrage as separate risk class
- Chaos testing cadence

## Options for Model

| Model | Availability | Notes |
|:---|:---|:---|
| `gpt-5.2-codex` | ChatGPT accounts | Recommended |
| `gpt-5.1-codex` | OpenAI API | Alternative |
| `o3` | OpenAI API | Higher reasoning |

## Timeout Considerations

- Default timeout: 180 seconds
- Complex reviews may need: 300 seconds
- Use `--timeout 300` for lengthy prompts

## Output Structure

Codex typically returns:
1. **Findings** (Critical/High/Medium/Low)
2. **Answers** to specific questions
3. **Assumptions** made during review
4. **Open Questions** for clarification
5. **Recommendations** for next steps

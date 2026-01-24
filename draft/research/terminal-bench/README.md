# Terminal-Bench 1등 달성 전략 연구

**연구 기간**: 2026-01-08 ~ 2026-01-10  
**최종 판정**: CONDITIONAL PASS (Week 0 Pilot 필수)

---

## 📊 Executive Summary

### 3단계 연구 진행

```
Phase 1: memvid vs letta 아키텍처 비교
  └─→ 결과: letta-hybrid (95/100 PASS)
         Target: 71% → 84%

Phase 2: letta-hybrid 최종 전략
  └─→ 결과: 95/100 (PASS)
         7주 구현 로드맵

Phase 3: Gemini 3 Flash 소형 모델 검증
  └─→ 결과: 76/100 (CONDITIONAL)
         Target: 64.3% → 70-78%
```

### 최종 권장 전략

**Option A: letta-hybrid + GPT-5.2** (95/100 PASS)
- Target: 84%
- Cost: High ($0.03/task)
- Timeline: 7주

**Option B: letta-hybrid + Gemini 3 Flash** (76/100 CONDITIONAL)
- Target: 70-78%
- Cost: Low ($0.05/task, 2-4x cheaper)
- Timeline: 7주
- **조건**: Week 0 pilot 64.3% → 68%+ 달성

---

## 📁 폴더 구조

```
terminal-bench/
├── README.md                          ← 이 파일
│
├── 01-memvid-letta-analysis/          ← Phase 1: 아키텍처 비교
│   ├── SUMMARY-memvid-letta-comparison.md          (Executive Summary)
│   ├── memvid-vs-letta-architecture-analysis.md    (상세 비교, 8000+ words)
│   ├── memvid-terminal-agent-analogies.md          (Cross-domain analogies)
│   └── memvid-terminal-quick-guide.md              (Quick implementation)
│
├── 02-gemini-flash-research/          ← Phase 3: Gemini 3 Flash 연구
│   ├── gemini-3-flash-strategy-research.md         (topic-explorer, 5800 words)
│   ├── gemini3-flash-terminal-bench-deep-research.md (deep-diver, 6500 words)
│   └── gemini-flash-defense-round2.md              (defender, 5500 words)
│
├── 03-final-strategy/                 ← Phase 2: 최종 전략
│   ├── FINAL-letta-hybrid-terminal-strategy.md     (95/100 PASS)
│   └── INTEGRATED-FINAL-STRATEGY.md                (통합 최종 전략, 이 파일 생성 예정)
│
├── archive-2026-01/                   ← 구 버전 아카이브
│   ├── research-terminal-bench-integrated-strategy.md (72/100)
│   ├── research-uncertainty-aware-terminal-agent.md (73/100)
│   ├── research-memvid-terminal-*  (Round 1-3 문서들)
│   └── ROUND*-*.md
│
└── post-analysis/                     ← 벤치마크 분석
    └── batch-20260108-232655/
        └── PATTERN_ANALYSIS.md
```

---

## 🎯 Quick Start Guide

### 1. 전체 이해하기 (30분)

**읽을 순서**:
```
1. README.md (이 파일)                              ← 5분
2. 01-memvid-letta-analysis/SUMMARY-*.md           ← 10분  
3. 03-final-strategy/FINAL-letta-hybrid-*.md       ← 15분
```

### 2. 상세 분석 (2-3시간)

**Deep Dive**:
```
1. memvid vs letta 아키텍처 (1시간)
   → 01-memvid-letta-analysis/memvid-vs-letta-architecture-analysis.md

2. letta-hybrid 7주 로드맵 (30분)
   → 03-final-strategy/FINAL-letta-hybrid-terminal-strategy.md

3. Gemini Flash 대안 검토 (1시간)
   → 02-gemini-flash-research/gemini-3-flash-strategy-research.md
```

### 3. 구현 시작 (Week 0)

**실행 단계**:
```
Week 0 (5일): Pilot Test
  ├─ letta Block 클래스 구현
  ├─ Char limits + XML metadata
  └─ 20 tasks 검증 → +3%p 이상 확인

Week 1-2: 핵심 패턴 (P1)
  ├─ WAL Recovery (optional, if needed)
  ├─ Immutable Frames (optional)
  └─ Time-Travel History

Week 3-7: 통합 및 최적화
```

---

## 📈 연구 결과 비교

| 연구 | 점수 | Target | Model | Cost | Status |
|------|------|--------|-------|------|--------|
| **Original** | 72/100 | 70-78% | GPT-5.2 | High | CONDITIONAL |
| **Uncertainty-Aware** | 73/100 | 67-70% | GPT-5.2 | High | CONDITIONAL |
| **memvid 단독** | 81/100 | 70-76% | GPT-5.2 | High | PASS |
| **letta-hybrid** | **95/100** | **84%** | GPT-5.2 | High | **PASS** ✅ |
| **Gemini Flash** | 76/100 | 70-78% | Flash | **Low** | CONDITIONAL |

### 결론

- **Best Performance**: letta-hybrid + GPT-5.2 (84%, 95/100 PASS)
- **Best Cost**: letta-hybrid + Gemini Flash (70-78%, 2-4x cheaper)

---

## 🔑 핵심 발견

### 1. letta vs memvid (Phase 1)

**Winner**: **letta** (Terminal-Bench에 더 적합)

| Dimension | memvid | letta | Winner |
|-----------|--------|-------|--------|
| Terminal-Bench Score | No data | 42.5% (검증) | **letta** |
| Implementation | 4-6주 (Rust) | 2-3주 (Python) | **letta** |
| Agent Mental Model | 복잡 (Frame IDs) | 단순 (edit blocks) | **letta** |
| Context Management | Smart Recall | **Char limits + metadata** | **letta** |

**Key Insight**: Context **overflow**가 주요 실패 원인 (memory **speed** 아님)

### 2. letta-hybrid 5대 패턴 (Phase 2)

| 우선순위 | Pattern | 출처 | 기간 | 효과 |
|---------|---------|------|------|------|
| **P1** 🔥 | Char-Limited Blocks | letta | 1주 | +4-6% |
| **P1** 🔥 | XML Metadata | letta | 3일 | +2-3% |
| **P2** ⚡ | Tag Archival + Skill Learning | letta | 1주 | +3-5% |
| **P2** ⚡ | Session Snapshots (JSON) | memvid-inspired | 3일 | +2-3% |
| **P3** | Time-Travel Restore | memvid-inspired | 2일 | +1-2% |

**Total**: +12-19% → 중첩 보정 → **+13%p net effect**

### 3. Gemini 3 Flash 검증 (Phase 3)

**실제 데이터**:
- Terminal-Bench: **64.3%** (Junie CLI, 3위)
- SWE-bench: **78.0%** (1위급)
- Factory Droid (GPT-5.2): **64.9%** (1위)

**예상 효과** (수정):
```
Original Claim: 86-90%
After Critique: 70-78%
Realistic: 72-75%
```

**Cost Advantage**: 2-4x cheaper → Best-of-N sampling 가능

---

## ⚠️ 주의사항

### Critical Issues Resolved

1. **Base Performance 혼동** (64.3% vs 71%)
   - ✅ 해결: 64.3% base 명확화

2. **Best-of-N 과대평가**
   - ✅ 해결: Deterministic task 한계 인정 (+5-10%p)

3. **Transfer Rate 오해석**
   - ✅ 해결: GPT-5.2가 실제로 더 높음 (86% > 82.4%)

4. **letta-hybrid 중복 계산**
   - ✅ 해결: Factory 대비 증분만 (+3-6%p)

### Remaining Risks

1. **GPT-5.2 Gap**: letta-hybrid 84% vs Gemini Flash 70-78% = -6~-14%p
2. **Week 0 Pilot 필수**: Flash 전략은 +3.7%p 이상 달성 필수
3. **Hard Tasks**: 모든 전략이 25% hard tasks에서 실패 (0%p 개선)

---

## 📋 Actionable Next Steps

### Immediate (이번 주)

**Option A 선택 시** (letta-hybrid + GPT-5.2):
```
✅ Week 0 환경 세팅
   └─ letta Block 클래스 구현
   └─ Terminal-Bench API 설정
   └─ Baseline 측정 (현재 성능)
```

**Option B 선택 시** (letta-hybrid + Gemini Flash):
```
✅ Week 0 Pilot Test
   └─ Gemini Flash API 설정
   └─ 20 tasks 실행
   └─ 64.3% → 68%+ 검증 (Go/No-Go)
```

### Week 1-2

```
✅ P1 패턴 구현
   ├─ Char-Limited Blocks
   ├─ XML Metadata
   └─ Overflow detection

✅ Terminal-Bench 제출
   └─ +6%p 이상 확인
```

### Week 3-7

```
✅ P2-P3 패턴 추가
✅ 통합 테스트
✅ 최종 제출
   └─ Target: 84% (Option A) or 75% (Option B)
```

---

## 📚 참고 문헌

### 핵심 레퍼런스

1. **letta 관련**
   - [Letta GitHub](https://github.com/letta-ai/letta)
   - [Letta Skill Learning](https://www.letta.com/blog/skill-learning) - +36.8% Terminal-Bench
   - [Terminal-Bench Leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.0) - Letta Code 42.5%

2. **memvid 관련**
   - [memvid GitHub](https://github.com/memvid/memvid)
   - [MV2_SPEC.md](https://github.com/memvid/memvid/blob/main/MV2_SPEC.md)

3. **Gemini 3 Flash 관련**
   - [Gemini 3 Flash Blog](https://blog.google/products/gemini/gemini-3-flash/) - 78% SWE-bench
   - [Junie CLI](https://www.tbench.ai/) - 64.3% Terminal-Bench

4. **Terminal-Bench 관련**
   - [Recovery-Bench](https://www.letta.com/blog/recovery-bench) - Context overflow 분석
   - [Context Rot Research](https://research.trychroma.com/context-rot)

---

## 🎯 Final Recommendation

### 권장: **Option A (letta-hybrid + GPT-5.2)**

**이유**:
1. ✅ Highest confidence (95/100 PASS)
2. ✅ Target 84% (1위 확정)
3. ✅ 7주 구현 가능
4. ✅ 실증 증거 풍부 (letta 42.5%)

**단점**:
- ❌ High cost ($0.03/task)
- ❌ Slow speed (1x)

### 대안: **Option B (letta-hybrid + Gemini Flash)**

**조건부 권장**:
- ✅ IF Week 0 pilot 성공 (64.3% → 68%+)
- ✅ Cost-sensitive use cases
- ✅ 실험 중심 환경 (많은 반복 필요)

**장점**:
- ✅ 2-4x cheaper
- ✅ 3x faster
- ✅ Best-of-N sampling 가능

**단점**:
- ❌ Lower confidence (76/100 CONDITIONAL)
- ❌ Target 70-78% (GPT-5.2 미달)
- ❌ Week 0 검증 필수

---

## 📞 Contact & Updates

**연구 완료**: 2026-01-10  
**다음 업데이트**: Week 0 pilot 결과 (예정)  
**문의**: 이 디렉토리에서 관련 문서 참조

---

**🚀 Ready to implement! Start with Week 0 pilot.**

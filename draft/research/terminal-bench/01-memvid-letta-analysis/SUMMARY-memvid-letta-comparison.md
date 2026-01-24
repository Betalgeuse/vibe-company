# memvid vs letta: Executive Summary

**Date**: 2026-01-09  
**Research Scope**: Architecture comparison for Terminal-Bench optimization  
**Full Report**: `memvid-vs-letta-architecture-analysis.md`

---

## TL;DR

**Winner for Terminal-Bench: letta**

- **letta**: 42.5% Terminal-Bench score (proven), simple mutable blocks, char limits prevent context overflow
- **memvid**: 0% Terminal-Bench data, complex immutable frames, over-engineered for CLI agents

**Recommendation**: Adopt letta-inspired hybrid - mutable blocks + snapshots, skip memvid's WAL/immutability

---

## Key Decision Points

| Factor | memvid | letta | Winner |
|--------|--------|-------|--------|
| **Terminal-Bench Performance** | No data | 42.5% (4th place) | **letta** ✅ |
| **Implementation Complexity** | High (Rust, 4-6 weeks) | Medium (Python, 2-3 weeks) | **letta** ✅ |
| **Agent Mental Model** | Complex (frame IDs, immutability) | Simple (edit like notes) | **letta** ✅ |
| **Context Management** | Frame-level smart recall | Char limits + metadata | **letta** ✅ |
| **Crash Recovery** | Custom WAL | Database WAL | **tie** ⚖️ |
| **Portability** | Single .mv2 file | Requires DB | **memvid** ✅ |

**Score: letta 5, memvid 1, tie 1**

---

## What to Implement (Week 0)

### ✅ Adopt from letta
1. **Mutable Blocks** with char limits (2000 chars/block)
2. **XML Compilation** with metadata (chars_current, chars_limit)
3. **Memory Tools**: `memory_replace()`, `memory_insert()`
4. **Tag-Based Archival** for skill learning (later)

### ✅ Adopt from memvid (Simplified)
1. **Session Snapshots** (JSON log, not complex .mv2 format)
2. **Time-Travel Restore** for debugging only

### ❌ Skip from memvid
1. ~~Custom WAL~~ (DB has it)
2. ~~Immutable Frames~~ (agents prefer mutable)
3. ~~Single-File Format~~ (irrelevant for benchmark)
4. ~~Codec Intelligence~~ (memory is tiny)

---

## Revised Pattern Priorities

| Priority | Pattern | Source | Effort | Impact |
|----------|---------|--------|--------|--------|
| **P1** 🔥 | Tiered Context (char limits) | letta | 1 week | **HIGH** - Prevents overflow |
| **P2** ⚡ | Session Snapshots | memvid-inspired | 3 days | MEDIUM - Debugging |
| **P2** ⚡ | Tag Archival + Skill Learning | letta | 1 week | MEDIUM - Error patterns |
| **P3** | Time-Travel Restore | memvid-inspired | 2 days | LOW - Debugging |
| **~~P4~~** | ~~Immutable Frames~~ | memvid | ~~2 weeks~~ | **SKIP** ❌ |
| **~~P4~~** | ~~Custom WAL~~ | memvid | ~~1 week~~ | **SKIP** ❌ |

**Time Saved**: 3 weeks by skipping memvid complexity

---

## Week 0 Pilot (Revised)

**Goal**: Implement letta-style context management, validate on Terminal-Bench

### Tasks (7 days)
- Days 1-2: Block class + char limits
- Days 3-4: XML compilation + metadata
- Day 5: Session snapshots (JSON)
- Days 6-7: Test on 20 Terminal-Bench tasks

### Success Metrics
- Context Overflow Rate: < 10% (baseline unknown)
- Task Success Rate: **73-75%** (+2-4% over 71% baseline)
- Avg Token Usage: < 10,000 (efficient compilation)

### Conservative Target Rationale
- Only 2/5 patterns implemented in Week 0
- No archival memory or skill learning yet
- Baseline already strong (71%)

---

## Why Letta Beats memvid for Terminal-Bench

### 1. Proven Performance
- **letta**: 42.5% Terminal-Bench (4th overall)
- **memvid**: No Terminal/CLI benchmarks

### 2. Simpler Mental Model
```python
# letta (agent-friendly)
memory_replace(label="todos", old_str="[ ] Step 5", new_str="[x] Step 5")

# memvid (agent-confusing)
# Create new frame, tombstone old frame, update frame ID references
```

### 3. Context Management
- **letta**: Char limits prevent overflow (Terminal-Bench's #1 failure)
- **memvid**: No explicit limits, relies on external pruning

### 4. Implementation Speed
- **letta**: Python, 2-3 weeks, reusable code
- **memvid**: Rust + FFI, 4-6 weeks, greenfield

### 5. Skill Learning
- **letta**: Tag-based archival enables 36.8% improvement
- **memvid**: No skill learning examples

---

## What memvid Does Better (But Doesn't Matter)

### ✅ Single-File Portability
- **memvid**: Everything in `.mv2` file
- **Why irrelevant**: Terminal-Bench runs in isolated containers, no sharing

### ✅ Sub-5ms Retrieval
- **memvid**: HNSW + Tantivy optimization
- **Why irrelevant**: CLI tasks have < 100 memories, any search is fast enough

### ✅ Perfect Audit Trail
- **memvid**: Immutable frames with checksums
- **Why irrelevant**: Terminal-Bench doesn't test forensics

### ✅ Crash Recovery
- **memvid**: Custom WAL with checkpoint
- **Why irrelevant**: Database WAL is sufficient, crashes are rare in benchmark

---

## Code Comparison

### Letta: Simple Block Update
```python
class Memory:
    blocks: List[Block] = [
        Block(label="plan", value="...", limit=2000)
    ]
    
    def compile(self) -> str:
        return f"""
<plan chars="{len(self.blocks[0].value)}/2000">
{self.blocks[0].value}
</plan>
"""

def memory_replace(label, old_str, new_str):
    block = memory.get_block(label)
    block.value = block.value.replace(old_str, new_str)
    if len(block.value) > block.limit:
        raise ValueError("Exceeds char limit")
```

### memvid: Complex Frame Management
```rust
struct Frame {
    frame_id: u64,
    payload: Vec<u8>,  // Compressed
    checksum: [u8; 32],  // SHA-256
    status: u8,  // 0=active, 1=tombstoned
}

// To "update" memory:
// 1. Create new frame with incremented frame_id
// 2. Set old frame status=1 (tombstone)
// 3. Write WAL entry
// 4. Update index pointers
// 5. Checkpoint if WAL 75% full
```

**Verdict**: letta's approach is 10x simpler for agents to reason about.

---

## Risk Assessment

### Low Risk ✅
- **PostgreSQL dependency**: Mitigated by SQLite fallback + Docker
- **Tag search limitations**: Mitigated by hybrid semantic + keyword search

### Medium Risk ⚠️
- **Mutable blocks consistency**: Mitigated by read-only flags + exact match
- **No custom WAL**: Mitigated by database WAL + session snapshots

### High Risk Avoided ✅
- **memvid complexity**: Would add 4-6 weeks, zero Terminal-Bench benefit
- **Immutability cognitive load**: Would confuse agents

---

## Expected Impact

### Week 0 (Context Management)
- **Baseline**: 71%
- **Target**: 73-75% (+2-4%)
- **Method**: Char limits prevent context overflow

### Week 8 (Full System)
- **Baseline**: 71%
- **Target**: 85-88% (+14-17%)
- **Methods**: Context + archival + skill learning + error recovery

### Comparison to letta's Performance
- **letta Code**: 42.5% (general CLI agent)
- **Our target**: 85%+ (specialized for Terminal-Bench)
- **Advantage**: Fine-tuned memory patterns for specific benchmark

---

## Citations

### Key Sources
1. [Letta Terminal-Bench Performance](https://www.letta.com/blog/terminal-bench) - 42.5% score
2. [Letta Skill Learning](https://www.letta.com/blog/skill-learning) - 36.8% improvement
3. [memvid GitHub](https://github.com/memvid/memvid) - Architecture details
4. [MV2 Spec](https://github.com/memvid/memvid/blob/main/MV2_SPEC.md) - File format
5. [Recovery-Bench](https://www.letta.com/blog/recovery-bench) - Context pollution study

### Benchmark Data
- Terminal-Bench 2.0 Leaderboard: Top score 58.75% (Droid CLI)
- letta Code: 42.5% (4th place)
- Context management identified as critical success factor

---

## Recommendation

**Adopt letta-hybrid architecture for Week 0 pilot**

### Implementation Order
1. Week 0: Block memory + char limits + snapshots → 73-75%
2. Week 1-2: Tag archival + search → 76-78%
3. Week 3-4: Skill learning (reflection + storage) → 79-82%
4. Week 5-6: Error recovery patterns → 82-85%
5. Week 7-8: Integration + tuning → 85-88%

### Key Success Factors
- ✅ Simple mutable blocks (agent-friendly)
- ✅ Char limits (prevent overflow)
- ✅ Tag-based archival (skill learning)
- ✅ Session snapshots (debugging)
- ❌ Skip memvid complexity (WAL, immutability, single-file)

**Confidence**: 85% (backed by letta's empirical 42.5% benchmark)

---

**Full analysis**: See `memvid-vs-letta-architecture-analysis.md` (8,000+ words)

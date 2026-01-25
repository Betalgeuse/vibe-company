# 🎨 Command 자동 시각화 가이드

**command 파일 → 자동으로 노드 다이어그램 생성**


## 💡 제안 (난이도 순)


### 제안 1: Mermaid.js (추천! ⭐⭐⭐)

**장점**:
- ✅ GitHub/VS Code에서 바로 보임
- ✅ 마크다운에 임베드 가능
- ✅ 추가 도구 불필요
- ✅ Git으로 버전 관리 가능

**단점**:
- ❌ 인터랙티브하지 않음 (클릭 불가)

#### 자동 생성 스크립트

```python
#!/usr/bin/env python3
# scripts/command-to-mermaid.py

import json
import yaml
import re
from pathlib import Path

def parse_command_file(file_path):
    """command.md 파일을 파싱하여 JSON 추출"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # JSON 블록 추출 (첫 번째 {...} 블록)
    json_match = re.search(r'\{[\s\S]*?\n\}', content)
    if json_match:
        return json.loads(json_match.group())
    return None

def generate_mermaid(command_data):
    """JSON 데이터를 Mermaid 다이어그램으로 변환"""
    
    lines = ["```mermaid", "graph TB"]
    
    # Start node
    lines.append(f'    START(["{command_data["command"]}<br/>시작"])')
    
    prev_step = "START"
    
    for step in command_data.get("execution_flow", []):
        step_id = step["id"]
        step_num = step["step"]
        
        # Parallel execution
        if step.get("parallel"):
            lines.append(f'    {step_id}_START{{{{병렬 실행}}}}')
            lines.append(f'    {prev_step} --> {step_id}_START')
            
            for i, agent in enumerate(step["agents"]):
                agent_id = f'{step_id}_agent{i}'
                droid_name = agent["droid"].replace("@", "")
                
                lines.append(f'    {agent_id}["{droid_name}<br/>{agent["action"]}"]')
                lines.append(f'    {step_id}_START --> {agent_id}')
                
                # Output
                lines.append(f'    {agent_id}_out[("{agent["output"]}")]')
                lines.append(f'    {agent_id} --> {agent_id}_out')
            
            # Fan-in
            if "fan_in" in step:
                fan_in_id = f'{step_id}_fanin'
                lines.append(f'    {fan_in_id}{{{{통합: {step["fan_in"]["action"]}}}}}')
                
                for i in range(len(step["agents"])):
                    lines.append(f'    {step_id}_agent{i}_out --> {fan_in_id}')
                
                prev_step = fan_in_id
        
        # Sequential execution
        else:
            droid_name = step.get("droid", "").replace("@", "")
            lines.append(f'    {step_id}["{droid_name}<br/>{step["action"]}"]')
            lines.append(f'    {prev_step} --> {step_id}')
            
            # Quality gate
            if "quality_gate" in step:
                gate_id = f'{step_id}_gate'
                lines.append(f'    {gate_id}{{{{{step["quality_gate"].get("on_fail", "검증")}}}}}')
                lines.append(f'    {step_id} --> {gate_id}')
                prev_step = gate_id
            else:
                prev_step = step_id
            
            # Output
            output = step.get("output", "")
            if output:
                lines.append(f'    {step_id}_out[("{output}")]')
                lines.append(f'    {prev_step} --> {step_id}_out')
                prev_step = f'{step_id}_out'
    
    # End node
    lines.append(f'    END([완료])')
    lines.append(f'    {prev_step} --> END')
    
    # Styling
    lines.append("")
    lines.append("    classDef startEnd fill:#e1f5e1,stroke:#4caf50,stroke-width:3px")
    lines.append("    classDef parallel fill:#fff3e0,stroke:#ff9800,stroke-width:2px")
    lines.append("    classDef agent fill:#e3f2fd,stroke:#2196f3,stroke-width:2px")
    lines.append("    classDef output fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px")
    lines.append("")
    lines.append("    class START,END startEnd")
    
    lines.append("```")
    
    return "\n".join(lines)

def update_command_file(file_path, diagram):
    """command.md 파일에 다이어그램 추가/업데이트"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 기존 다이어그램 제거
    content = re.sub(r'## 🎨 자동 생성 다이어그램[\s\S]*?(?=\n##|\Z)', '', content)
    
    # 새 다이어그램 추가
    diagram_section = f"\n\n## 🎨 자동 생성 다이어그램\n\n{diagram}\n"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content + diagram_section)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python command-to-mermaid.py <command-file.md>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    print(f"📖 파싱 중: {file_path}")
    command_data = parse_command_file(file_path)
    
    if not command_data:
        print("❌ JSON 데이터를 찾을 수 없습니다")
        sys.exit(1)
    
    print("🎨 다이어그램 생성 중...")
    diagram = generate_mermaid(command_data)
    
    print("📝 파일 업데이트 중...")
    update_command_file(file_path, diagram)
    
    print("✅ 완료!")
    print("\n생성된 다이어그램:")
    print(diagram)
```

#### 사용법

```bash
# 단일 파일
python scripts/command-to-mermaid.py .factory/commands/biz-idea.md

# 모든 command 파일 자동 업데이트
for file in .factory/commands/*.md; do
  python scripts/command-to-mermaid.py "$file"
done
```

#### Pre-commit Hook (자동화!)

```bash
# .git/hooks/pre-commit

#!/bin/bash
# Command 파일 수정 시 자동으로 다이어그램 생성

# 수정된 command 파일 찾기
changed_commands=$(git diff --cached --name-only | grep ".factory/commands/.*\.md$")

if [ -n "$changed_commands" ]; then
  echo "🎨 Command 다이어그램 자동 생성 중..."
  
  for file in $changed_commands; do
    if [ -f "$file" ]; then
      python3 scripts/command-to-mermaid.py "$file"
      git add "$file"  # 업데이트된 파일 재추가
    fi
  done
  
  echo "✅ 다이어그램 생성 완료"
fi
```

#### 결과 예시 (biz-idea.md)

```mermaid
graph TB
    START(["biz-idea<br/>시작"])
    START --> market_research_START
    
    market_research_START{{병렬 실행}}
    market_research_START --> market_research_agent0
    market_research_START --> market_research_agent1
    
    market_research_agent0["niche-market-hunter<br/>니치 마켓 키워드 탐색"]
    market_research_agent0 --> market_research_agent0_out
    market_research_agent0_out[("keywords_with_probability")]
    
    market_research_agent1["reference-scout<br/>글로벌 레퍼런스 분석"]
    market_research_agent1 --> market_research_agent1_out
    market_research_agent1_out[("competitor_analysis")]
    
    market_research_agent0_out --> market_research_fanin
    market_research_agent1_out --> market_research_fanin
    market_research_fanin{{통합: merge_research_results}}
    
    market_research_fanin --> mvp_design
    mvp_design["opus-solo-founder<br/>레퍼런스 기반 MVP 초안 작성"]
    mvp_design --> mvp_design_gate
    mvp_design_gate{{{retry_with_feedback}}}
    
    mvp_design_gate --> END
    END([완료])
    
    classDef startEnd fill:#e1f5e1,stroke:#4caf50,stroke-width:3px
    classDef parallel fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef agent fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
    
    class START,END startEnd
```


---


### 제안 2: React Flow (n8n 완벽 재현! ⭐⭐)

**장점**:
- ✅ n8n과 동일한 UX
- ✅ 드래그, 줌, 클릭 가능
- ✅ 노드 상세 정보 표시
- ✅ 실행 상태 시각화 가능

**단점**:
- ❌ 웹 앱 필요
- ❌ 추가 개발 시간 필요

#### 구조

```
vibe-flow-visualizer/
├── frontend/
│   ├── components/
│   │   ├── CommandFlow.tsx      # React Flow 컴포넌트
│   │   ├── NodeTypes.tsx        # 커스텀 노드들
│   │   └── Sidebar.tsx          # Command 목록
│   └── pages/
│       └── index.tsx
│
├── api/
│   └── parse-command.ts         # Command 파싱 API
│
└── package.json
```

#### 코드 예시

```typescript
// components/CommandFlow.tsx
import ReactFlow, { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

function parseCommandToNodes(commandData: any): { nodes: Node[], edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  // Start node
  nodes.push({
    id: 'start',
    type: 'input',
    data: { label: commandData.command },
    position: { x: 250, y: 0 }
  });
  
  let yOffset = 100;
  let prevNodeId = 'start';
  
  commandData.execution_flow.forEach((step: any, idx: number) => {
    if (step.parallel) {
      // 병렬 노드 생성
      const xOffset = 150;
      step.agents.forEach((agent: any, agentIdx: number) => {
        const nodeId = `${step.id}_${agentIdx}`;
        
        nodes.push({
          id: nodeId,
          type: 'agentNode',
          data: {
            label: agent.droid,
            action: agent.action,
            output: agent.output
          },
          position: { x: agentIdx * xOffset, y: yOffset }
        });
        
        edges.push({
          id: `${prevNodeId}-${nodeId}`,
          source: prevNodeId,
          target: nodeId,
          animated: true
        });
      });
      
      // Fan-in 노드
      const faninId = `${step.id}_fanin`;
      nodes.push({
        id: faninId,
        type: 'mergeNode',
        data: { label: step.fan_in.action },
        position: { x: 250, y: yOffset + 100 }
      });
      
      step.agents.forEach((agent: any, agentIdx: number) => {
        edges.push({
          id: `${step.id}_${agentIdx}-${faninId}`,
          source: `${step.id}_${agentIdx}`,
          target: faninId
        });
      });
      
      prevNodeId = faninId;
      yOffset += 200;
      
    } else {
      // 순차 노드
      nodes.push({
        id: step.id,
        type: 'default',
        data: {
          label: step.droid,
          action: step.action
        },
        position: { x: 250, y: yOffset }
      });
      
      edges.push({
        id: `${prevNodeId}-${step.id}`,
        source: prevNodeId,
        target: step.id
      });
      
      prevNodeId = step.id;
      yOffset += 100;
    }
  });
  
  // End node
  nodes.push({
    id: 'end',
    type: 'output',
    data: { label: '완료' },
    position: { x: 250, y: yOffset }
  });
  
  edges.push({
    id: `${prevNodeId}-end`,
    source: prevNodeId,
    target: 'end'
  });
  
  return { nodes, edges };
}

export function CommandFlow({ commandFile }: { commandFile: string }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  useEffect(() => {
    // Command 파일 로드 및 파싱
    fetch(`/api/parse-command?file=${commandFile}`)
      .then(res => res.json())
      .then(data => {
        const { nodes, edges } = parseCommandToNodes(data);
        setNodes(nodes);
        setEdges(edges);
      });
  }, [commandFile]);
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-left"
      />
    </div>
  );
}
```

#### 실행

```bash
# 설치
npm install reactflow

# 개발 서버
npm run dev

# http://localhost:3000
```


---


### 제안 3: VS Code Extension ⭐

**장점**:
- ✅ VS Code에서 바로 시각화
- ✅ 파일 저장 시 자동 업데이트
- ✅ 개발 환경과 통합

**단점**:
- ❌ Extension 개발 필요
- ❌ VS Code에서만 사용 가능

#### 구조

```
vibe-command-visualizer/
├── extension.ts           # Extension 메인
├── provider.ts            # Webview Provider
└── visualizer.html        # 시각화 HTML
```


---


### 제안 4: CLI Tool (간단! ⭐)

**장점**:
- ✅ 터미널에서 바로 확인
- ✅ ASCII 아트로 표시
- ✅ 설치 불필요

#### 코드 예시

```python
#!/usr/bin/env python3
# scripts/command-ascii.py

def generate_ascii_flow(command_data):
    """ASCII 아트로 플로우 생성"""
    
    lines = []
    lines.append("┌" + "─" * 50 + "┐")
    lines.append(f"│  {command_data['command']:^46}  │")
    lines.append("└" + "─" * 50 + "┘")
    lines.append("        │")
    lines.append("        ▼")
    
    for step in command_data.get("execution_flow", []):
        if step.get("parallel"):
            lines.append("    ╔═══════════════════════════╗")
            lines.append("    ║     병렬 실행             ║")
            lines.append("    ╚═══════════════════════════╝")
            lines.append("         │         │")
            lines.append("         ▼         ▼")
            
            for agent in step["agents"]:
                droid = agent["droid"].replace("@", "")
                lines.append(f"    [{droid}]")
            
            lines.append("         │         │")
            lines.append("         └────┬────┘")
            lines.append("              ▼")
            lines.append(f"         [통합: {step['fan_in']['action']}]")
        else:
            droid = step.get("droid", "").replace("@", "")
            lines.append(f"    [{droid}]")
            lines.append(f"    {step['action']}")
        
        lines.append("        │")
        lines.append("        ▼")
    
    lines.append("    [완료]")
    
    return "\n".join(lines)

# 사용
print(generate_ascii_flow(command_data))
```

#### 결과

```
┌──────────────────────────────────────────────────┐
│                   biz-idea                       │
└──────────────────────────────────────────────────┘
        │
        ▼
    ╔═══════════════════════════╗
    ║     병렬 실행             ║
    ╚═══════════════════════════╝
         │         │
         ▼         ▼
    [niche-market-hunter]  [reference-scout]
         │         │
         └────┬────┘
              ▼
         [통합: merge_results]
        │
        ▼
    [opus-solo-founder]
    레퍼런스 기반 MVP 초안
        │
        ▼
    [완료]
```


---


## 🏆 최종 추천

### 단기 (지금 바로): 제안 1 (Mermaid) + 제안 4 (ASCII)

```bash
# 1. Mermaid 다이어그램 자동 생성
python scripts/command-to-mermaid.py .factory/commands/biz-idea.md

# 2. Git hook 설치
cp scripts/pre-commit .git/hooks/

# 3. CLI로 빠르게 확인
python scripts/command-ascii.py .factory/commands/biz-idea.md
```

### 중기: 제안 2 (React Flow)

n8n 스타일 웹 UI 구축

### 장기: 제안 3 (VS Code Extension)

개발 환경 완전 통합


---


## 🚀 지금 바로 시작

어떤 방식으로 시작할까요?

**A. Mermaid 스크립트만** (10분) - 가장 빠름  
**B. Mermaid + Pre-commit Hook** (20분) - 자동화  
**C. React Flow 웹앱** (2-3시간) - n8n 스타일  
**D. 전부 다** (1일) - 완벽한 시각화

**추천: B (Mermaid + Hook)** - 실용적이고 자동화됨! 🔥

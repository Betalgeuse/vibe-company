# 🎨 Command Dashboard 솔루션

**팀 내 대시보드 - 읽기 전용 시각화**


## 🎯 요구사항

- ✅ Command 파일은 수정 안 됨
- ✅ 팀 내 대시보드에서 UI로만 표시
- ✅ 배포 가능
- ✅ n8n 스타일 노드 뷰


---


## 🏆 최적 솔루션: Next.js + React Flow

**추천 이유:**
- ✅ n8n과 동일한 UX
- ✅ Vercel 무료 배포 (1분!)
- ✅ GitHub 연동 자동 업데이트
- ✅ 팀원 모두 접근 가능


### 📂 프로젝트 구조

```
vibe-command-dashboard/
├── app/
│   ├── page.tsx                 # 메인 페이지
│   ├── [command]/
│   │   └── page.tsx             # Command 상세 페이지
│   └── api/
│       └── commands/
│           └── route.ts         # Command 파일 읽기 API
│
├── components/
│   ├── CommandFlow.tsx          # React Flow 시각화
│   ├── CommandList.tsx          # Command 목록
│   ├── NodeTypes/               # 커스텀 노드들
│   │   ├── AgentNode.tsx
│   │   ├── ParallelNode.tsx
│   │   └── MergeNode.tsx
│   └── Sidebar.tsx              # 사이드바
│
├── lib/
│   ├── parseCommand.ts          # Command 파싱
│   └── flowLayout.ts            # 자동 레이아웃
│
├── public/
│   └── commands/                # Command 파일들 (심볼릭 링크)
│       └── *.md
│
└── package.json
```


---


## 🚀 빠른 시작 (10분 완성!)


### 1단계: 프로젝트 생성 (2분)

```bash
# Next.js 프로젝트 생성
npx create-next-app@latest vibe-command-dashboard --typescript --tailwind --app

cd vibe-command-dashboard

# 필요한 패키지 설치
npm install reactflow elkjs gray-matter js-yaml
npm install -D @types/js-yaml
```


### 2단계: Command 파서 구현 (5분)

**`lib/parseCommand.ts`:**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CommandStep {
  step: number;
  id: string;
  parallel?: boolean;
  agents?: Array<{
    droid: string;
    action: string;
    output: string;
  }>;
  droid?: string;
  action?: string;
  output?: string;
  fan_in?: {
    action: string;
    output: string;
  };
}

export interface CommandData {
  command: string;
  objective: string;
  execution_flow: CommandStep[];
}

export function parseCommandFile(filePath: string): CommandData | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // JSON 블록 추출 (첫 번째 {...} 블록)
    const jsonMatch = fileContent.match(/\{[\s\S]*?\n\}/);
    
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    return null;
  } catch (error) {
    console.error('Error parsing command file:', error);
    return null;
  }
}

export function getAllCommands(commandsDir: string): string[] {
  try {
    const files = fs.readdirSync(commandsDir);
    return files.filter(f => f.endsWith('.md'));
  } catch (error) {
    console.error('Error reading commands directory:', error);
    return [];
  }
}
```


### 3단계: React Flow 컴포넌트 (10분)

**`components/CommandFlow.tsx`:**

```typescript
'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CommandData } from '@/lib/parseCommand';

interface CommandFlowProps {
  commandData: CommandData;
}

export function CommandFlow({ commandData }: CommandFlowProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const { nodes: generatedNodes, edges: generatedEdges } = 
      commandToFlow(commandData);
    
    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, [commandData]);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

function commandToFlow(commandData: CommandData): { 
  nodes: Node[]; 
  edges: Edge[] 
} {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  let yOffset = 0;
  const xCenter = 400;
  const yStep = 150;
  const xSpacing = 250;
  
  // Start node
  nodes.push({
    id: 'start',
    type: 'input',
    data: { 
      label: (
        <div className="text-center">
          <div className="font-bold">{commandData.command}</div>
          <div className="text-xs text-gray-500 mt-1">시작</div>
        </div>
      )
    },
    position: { x: xCenter, y: yOffset },
    style: {
      background: '#e1f5e1',
      border: '2px solid #4caf50',
      borderRadius: '12px',
      padding: '10px',
    },
  });
  
  yOffset += yStep;
  let prevNodeIds = ['start'];
  
  // Process each step
  commandData.execution_flow.forEach((step, stepIdx) => {
    if (step.parallel && step.agents) {
      // Parallel execution
      const parallelNodeIds: string[] = [];
      const agentCount = step.agents.length;
      const totalWidth = (agentCount - 1) * xSpacing;
      const startX = xCenter - totalWidth / 2;
      
      step.agents.forEach((agent, agentIdx) => {
        const nodeId = `${step.id}_${agentIdx}`;
        parallelNodeIds.push(nodeId);
        
        nodes.push({
          id: nodeId,
          data: {
            label: (
              <div className="text-center">
                <div className="font-bold text-blue-600">
                  {agent.droid.replace('@', '')}
                </div>
                <div className="text-xs mt-1">{agent.action}</div>
                <div className="text-xs text-gray-500 mt-1 bg-purple-100 rounded px-2 py-1">
                  → {agent.output}
                </div>
              </div>
            ),
          },
          position: { x: startX + agentIdx * xSpacing, y: yOffset },
          style: {
            background: '#e3f2fd',
            border: '2px solid #2196f3',
            borderRadius: '8px',
            padding: '12px',
            minWidth: '200px',
          },
        });
        
        // Connect from previous nodes
        prevNodeIds.forEach(prevId => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            animated: true,
            style: { stroke: '#2196f3' },
          });
        });
      });
      
      yOffset += yStep;
      
      // Fan-in merge node
      if (step.fan_in) {
        const mergeId = `${step.id}_merge`;
        
        nodes.push({
          id: mergeId,
          data: {
            label: (
              <div className="text-center">
                <div className="font-bold text-orange-600">통합</div>
                <div className="text-xs mt-1">{step.fan_in.action}</div>
              </div>
            ),
          },
          position: { x: xCenter, y: yOffset },
          style: {
            background: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '10px',
          },
        });
        
        // Connect from all parallel nodes
        parallelNodeIds.forEach(nodeId => {
          edges.push({
            id: `${nodeId}-${mergeId}`,
            source: nodeId,
            target: mergeId,
          });
        });
        
        prevNodeIds = [mergeId];
        yOffset += yStep;
      } else {
        prevNodeIds = parallelNodeIds;
      }
      
    } else {
      // Sequential step
      const nodeId = step.id;
      
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center">
              <div className="font-bold text-indigo-600">
                {step.droid?.replace('@', '') || 'Process'}
              </div>
              <div className="text-xs mt-1">{step.action}</div>
              {step.output && (
                <div className="text-xs text-gray-500 mt-1 bg-purple-100 rounded px-2 py-1">
                  → {step.output}
                </div>
              )}
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: '#f3e5f5',
          border: '2px solid #9c27b0',
          borderRadius: '8px',
          padding: '12px',
          minWidth: '200px',
        },
      });
      
      // Connect from previous nodes
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
        });
      });
      
      prevNodeIds = [nodeId];
      yOffset += yStep;
    }
  });
  
  // End node
  nodes.push({
    id: 'end',
    type: 'output',
    data: { label: '완료' },
    position: { x: xCenter, y: yOffset },
    style: {
      background: '#e1f5e1',
      border: '2px solid #4caf50',
      borderRadius: '12px',
      padding: '10px',
    },
  });
  
  prevNodeIds.forEach(prevId => {
    edges.push({
      id: `${prevId}-end`,
      source: prevId,
      target: 'end',
    });
  });
  
  return { nodes, edges };
}
```


### 4단계: 메인 페이지 (5분)

**`app/page.tsx`:**

```typescript
import { getAllCommands, parseCommandFile } from '@/lib/parseCommand';
import { CommandFlow } from '@/components/CommandFlow';
import path from 'path';

export default function Home() {
  // Command 파일들 읽기 (assets 레포에서)
  const commandsDir = path.join(process.cwd(), '../assets/.factory/commands');
  const commandFiles = getAllCommands(commandsDir);
  
  const commands = commandFiles.map(file => {
    const filePath = path.join(commandsDir, file);
    const data = parseCommandFile(filePath);
    return {
      name: file.replace('.md', ''),
      data,
    };
  }).filter(c => c.data !== null);
  
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            🎨 Vibe Command Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            팀 Command 파이프라인 시각화
          </p>
        </header>
        
        <div className="space-y-12">
          {commands.map(({ name, data }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-1">{data?.objective}</p>
              </div>
              
              {data && <CommandFlow commandData={data} />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```


---


## 🌐 배포 (1분!)


### Vercel 배포 (추천!)

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 배포
vercel

# 3. 완료!
# → https://vibe-command-dashboard.vercel.app
```

**특징:**
- ✅ GitHub 푸시 시 자동 배포
- ✅ 무료 SSL 인증서
- ✅ 글로벌 CDN
- ✅ 팀원 공유 가능


### GitHub Pages 배포

```bash
# 1. Static export 설정
# next.config.js
module.exports = {
  output: 'export',
  basePath: '/vibe-command-dashboard',
}

# 2. 빌드 및 배포
npm run build
gh-pages -d out
```


---


## 🎨 고급 기능 추가


### 1. 실시간 업데이트

```typescript
// app/api/commands/route.ts
export async function GET() {
  const commandsDir = '../assets/.factory/commands';
  const files = getAllCommands(commandsDir);
  
  const commands = files.map(file => {
    const data = parseCommandFile(path.join(commandsDir, file));
    return { name: file, data };
  });
  
  return Response.json(commands);
}

// 클라이언트에서 polling
useEffect(() => {
  const interval = setInterval(() => {
    fetch('/api/commands')
      .then(res => res.json())
      .then(setCommands);
  }, 5000); // 5초마다 업데이트
  
  return () => clearInterval(interval);
}, []);
```


### 2. 검색 & 필터

```typescript
const [search, setSearch] = useState('');
const filtered = commands.filter(c => 
  c.name.includes(search) || 
  c.data?.objective.includes(search)
);
```


### 3. 다크 모드

```typescript
// Tailwind dark mode
<div className="dark:bg-gray-900 dark:text-white">
```


---


## 📊 최종 구조

```
배포된 대시보드
├── https://your-team.vercel.app/
│   ├── /                        # 모든 command 목록
│   ├── /biz-idea               # 개별 command
│   ├── /paper2code
│   └── /research-idea
│
└── 자동 업데이트
    - GitHub push → Vercel 자동 재배포
    - Command 파일 수정 → 즉시 반영
```


---


## 💰 비용

| 방법 | 비용 | 배포 시간 |
|------|------|----------|
| **Vercel** | 무료 | 1분 |
| GitHub Pages | 무료 | 5분 |
| 자체 서버 | 변동 | 30분 |


---


## 🚀 즉시 시작

```bash
# 1. 프로젝트 생성 (2분)
npx create-next-app@latest vibe-command-dashboard --typescript --tailwind --app

# 2. 패키지 설치 (1분)
cd vibe-command-dashboard
npm install reactflow gray-matter

# 3. 코드 복사 (5분)
# 위의 코드들을 복사

# 4. 심볼릭 링크 (1분)
ln -s ../assets/.factory/commands public/commands

# 5. 로컬 테스트 (1분)
npm run dev
# → http://localhost:3000

# 6. 배포 (1분)
vercel
# → https://vibe-command-dashboard.vercel.app

# 총 11분 완성! ✨
```


---


## ✅ 결과

팀원들은:
- ✅ 브라우저에서 `https://your-dashboard.vercel.app` 접속
- ✅ 모든 command를 n8n 스타일로 시각화
- ✅ 드래그, 줌, 클릭으로 탐색
- ✅ Command 파일은 절대 수정 안 됨
- ✅ GitHub 푸시하면 자동 업데이트


**지금 바로 만들어드릴까요?** 🚀

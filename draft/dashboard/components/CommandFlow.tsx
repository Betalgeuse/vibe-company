'use client';

import { useEffect } from 'react';
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
  }, [commandData, setNodes, setEdges]);

  return (
    <div style={{ width: '100%', height: '600px' }} className="bg-gray-50 rounded-lg border-2 border-gray-200">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
        minZoom={0.2}
        maxZoom={2}
      >
        <Background color="#ddd" gap={16} />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.type === 'input' || node.type === 'output') return '#4caf50';
            if (node.id.includes('merge')) return '#ff9800';
            return '#2196f3';
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
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
  const yStep = 180;
  const xSpacing = 300;
  
  // Start node
  nodes.push({
    id: 'start',
    type: 'input',
    data: { 
      label: (
        <div className="text-center px-2">
          <div className="font-bold text-lg">{commandData.command}</div>
          <div className="text-xs text-gray-600 mt-1">시작</div>
        </div>
      )
    },
    position: { x: xCenter, y: yOffset },
    style: {
      background: 'linear-gradient(135deg, #e1f5e1 0%, #c8e6c9 100%)',
      border: '3px solid #4caf50',
      borderRadius: '16px',
      padding: '16px',
      minWidth: '180px',
      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    },
  });
  
  yOffset += yStep;
  let prevNodeIds = ['start'];
  
  // Process each step
  commandData.execution_flow.forEach((step) => {
    // Iterative validation loop (e.g., Codex vs Opus debate)
    if (step.type === 'iterative' && step.rounds) {
      const nodeId = step.id;
      const agents = step.agents as Record<string, string> | undefined;
      
      // Main iterative container node
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center px-3 py-2">
              <div className="font-bold text-amber-700 text-sm mb-2">
                🔄 {step.id.replace(/_/g, ' ').toUpperCase()}
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Max {step.max_iterations} iterations
              </div>
              {agents && (
                <div className="flex gap-2 justify-center mb-2">
                  {Object.entries(agents).map(([role, droid]) => (
                    <span key={role} className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-0.5">
                      {role}: {droid.replace('@', '')}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          border: '3px solid #f59e0b',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '280px',
          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
        },
      });
      
      // Connect from previous
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: { strokeWidth: 2 },
        });
      });
      
      yOffset += yStep;
      
      // Rounds visualization
      const roundsStartY = yOffset;
      step.rounds.forEach((round, idx) => {
        const roundId = `${nodeId}_round${round.round}`;
        const isAttack = round.name.toLowerCase().includes('attack');
        const isVerdict = round.name.toLowerCase().includes('verdict');
        
        let bgColor, borderColor, emoji;
        if (isAttack) {
          bgColor = 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)';
          borderColor = '#ef4444';
          emoji = '⚔️';
        } else if (isVerdict) {
          bgColor = 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)';
          borderColor = '#10b981';
          emoji = '⚖️';
        } else {
          bgColor = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
          borderColor = '#3b82f6';
          emoji = '🛡️';
        }
        
        nodes.push({
          id: roundId,
          data: {
            label: (
              <div className="text-center px-2 py-1">
                <div className="font-bold text-sm mb-1">
                  {emoji} Round {round.round}: {round.name}
                </div>
                <div className="text-xs text-gray-600">{round.goal}</div>
              </div>
            ),
          },
          position: { x: xCenter, y: yOffset },
          style: {
            background: bgColor,
            border: `2px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '8px',
            minWidth: '240px',
          },
        });
        
        // Connect rounds
        if (idx === 0) {
          edges.push({
            id: `${nodeId}-${roundId}`,
            source: nodeId,
            target: roundId,
            animated: true,
            style: { stroke: '#f59e0b', strokeWidth: 2 },
          });
        } else {
          const prevRoundId = `${nodeId}_round${step.rounds![idx - 1].round}`;
          edges.push({
            id: `${prevRoundId}-${roundId}`,
            source: prevRoundId,
            target: roundId,
            animated: true,
            style: { stroke: '#6b7280', strokeWidth: 2 },
          });
        }
        
        yOffset += 100;
      });
      
      // Exit conditions node
      if (step.exit_conditions) {
        const exitId = `${nodeId}_exit`;
        nodes.push({
          id: exitId,
          data: {
            label: (
              <div className="text-center px-2 py-1">
                <div className="font-bold text-xs text-gray-700 mb-1">Exit Conditions</div>
                <div className="text-xs text-green-700">✓ {step.exit_conditions.pass}</div>
                <div className="text-xs text-red-700">✗ {step.exit_conditions.fail}</div>
              </div>
            ),
          },
          position: { x: xCenter, y: yOffset },
          style: {
            background: '#f9fafb',
            border: '2px dashed #9ca3af',
            borderRadius: '8px',
            padding: '8px',
            minWidth: '260px',
          },
        });
        
        const lastRoundId = `${nodeId}_round${step.rounds[step.rounds.length - 1].round}`;
        edges.push({
          id: `${lastRoundId}-${exitId}`,
          source: lastRoundId,
          target: exitId,
          style: { strokeWidth: 2, strokeDasharray: '5,5' },
        });
        
        // Loop back edge (for retry)
        edges.push({
          id: `${exitId}-${nodeId}-loop`,
          source: exitId,
          target: nodeId,
          type: 'smoothstep',
          animated: true,
          label: 'retry',
          labelStyle: { fontSize: 10 },
          style: { stroke: '#f59e0b', strokeWidth: 1, strokeDasharray: '3,3' },
        });
        
        prevNodeIds = [exitId];
        yOffset += yStep;
      } else {
        const lastRoundId = `${nodeId}_round${step.rounds[step.rounds.length - 1].round}`;
        prevNodeIds = [lastRoundId];
        yOffset += 80;
      }
      
    } else if (step.elements && step.elements.length > 0) {
      // Scoring elements step (Zero to One - Monopoly Elements)
      const nodeId = step.id;
      const totalMaxScore = step.elements.reduce((sum, el) => sum + el.max_score, 0);
      
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center px-3 py-2">
              <div className="font-bold text-violet-700 text-sm mb-2">
                🎯 {step.name || step.action || 'Scoring'}
              </div>
              {step.framework && (
                <div className="text-xs text-gray-500 mb-2 italic">
                  {step.framework}
                </div>
              )}
              <div className="text-xs text-gray-700 mb-2 space-y-1">
                {step.elements.map((el) => (
                  <div key={el.id}>• {el.id}: /{el.max_score}</div>
                ))}
              </div>
              <div className="text-xs font-bold text-violet-600">
                Total: /{totalMaxScore}
              </div>
              {step.thresholds && (
                <div className="text-xs mt-2 space-y-0.5">
                  <div className="text-green-600">✓ {step.thresholds.pass}</div>
                  <div className="text-red-600">✗ {step.thresholds.reject}</div>
                </div>
              )}
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
          border: '3px solid #8b5cf6',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '240px',
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
        },
      });
      
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: { strokeWidth: 2 },
        });
      });
      
      prevNodeIds = [nodeId];
      yOffset += yStep;
      
    } else if (step.quadrants) {
      // Quadrant analysis step (Future Outlook Matrix)
      const nodeId = step.id;
      const quadrantCount = Object.keys(step.quadrants).length;
      
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center px-3 py-2">
              <div className="font-bold text-cyan-700 text-sm mb-2">
                🧭 {step.name || step.action || 'Matrix Analysis'}
              </div>
              {step.framework && (
                <div className="text-xs text-gray-500 mb-2 italic">
                  {step.framework}
                </div>
              )}
              <div className="text-xs text-gray-700">
                {quadrantCount} quadrants
              </div>
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
          border: '3px solid #06b6d4',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '220px',
          boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
        },
      });
      
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: { strokeWidth: 2 },
        });
      });
      
      prevNodeIds = [nodeId];
      yOffset += yStep;
      
    } else if (step.analysis) {
      // Analysis step (Power Law)
      const nodeId = step.id;
      
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center px-3 py-2">
              <div className="font-bold text-rose-700 text-sm mb-2">
                📊 {step.name || step.action || 'Analysis'}
              </div>
              {step.framework && (
                <div className="text-xs text-gray-500 mb-2 italic">
                  {step.framework}
                </div>
              )}
              <div className="text-xs text-gray-700">
                {Object.keys(step.analysis).length} questions
              </div>
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
          border: '3px solid #f43f5e',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '220px',
          boxShadow: '0 4px 12px rgba(244, 63, 94, 0.3)',
        },
      });
      
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: { strokeWidth: 2 },
        });
      });
      
      prevNodeIds = [nodeId];
      yOffset += yStep;
      
    } else if (step.checklist && step.checklist.length > 0) {
      // Checklist step (Built to Sell)
      const nodeId = step.id;
      const checklistCount = step.checklist.length;
      
      nodes.push({
        id: nodeId,
        data: {
          label: (
            <div className="text-center px-3 py-2">
              <div className="font-bold text-emerald-700 text-sm mb-2">
                📋 {step.name || step.action || 'Checklist'}
              </div>
              {step.framework && (
                <div className="text-xs text-gray-500 mb-2 italic">
                  {step.framework}
                </div>
              )}
              <div className="text-xs text-gray-700 mb-2">
                {checklistCount} checks
              </div>
              {step.scoring && (
                <div className="text-xs space-y-1">
                  <div className="text-green-600">✓ {step.scoring.pass}</div>
                  <div className="text-yellow-600">△ {step.scoring.conditional}</div>
                  <div className="text-red-600">✗ {step.scoring.fail}</div>
                </div>
              )}
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
          border: '3px solid #10b981',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '260px',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
        },
      });
      
      // Connect from previous
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: { strokeWidth: 2 },
        });
      });
      
      prevNodeIds = [nodeId];
      yOffset += yStep;
      
    } else if (step.parallel && step.agents && Array.isArray(step.agents)) {
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
              <div className="text-center px-3 py-2">
                <div className="font-bold text-blue-700 text-sm mb-2">
                  {agent.droid.replace('@', '')}
                </div>
                <div className="text-xs text-gray-700 leading-relaxed mb-2">
                  {agent.action}
                </div>
                <div className="text-xs bg-purple-100 text-purple-800 rounded-full px-3 py-1 font-medium">
                  → {agent.output}
                </div>
              </div>
            ),
          },
          position: { x: startX + agentIdx * xSpacing, y: yOffset },
          style: {
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            border: '3px solid #2196f3',
            borderRadius: '12px',
            padding: '12px',
            minWidth: '220px',
            boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
          },
        });
        
        // Connect from previous nodes
        prevNodeIds.forEach(prevId => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            animated: true,
            style: { 
              stroke: '#2196f3',
              strokeWidth: 2,
            },
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
              <div className="text-center px-3 py-2">
                <div className="font-bold text-orange-700 text-sm mb-1">🔀 통합</div>
                <div className="text-xs text-gray-700">{step.fan_in.action}</div>
              </div>
            ),
          },
          position: { x: xCenter, y: yOffset },
          style: {
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
            border: '3px solid #ff9800',
            borderRadius: '12px',
            padding: '12px',
            minWidth: '180px',
            boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
          },
        });
        
        // Connect from all parallel nodes
        parallelNodeIds.forEach(nodeId => {
          edges.push({
            id: `${nodeId}-${mergeId}`,
            source: nodeId,
            target: mergeId,
            style: {
              stroke: '#ff9800',
              strokeWidth: 2,
            },
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
            <div className="text-center px-3 py-2">
              <div className="font-bold text-indigo-700 text-sm mb-2">
                {step.droid?.replace('@', '') || 'Process'}
              </div>
              <div className="text-xs text-gray-700 leading-relaxed mb-2">
                {step.action}
              </div>
              {step.output && (
                <div className="text-xs bg-purple-100 text-purple-800 rounded-full px-3 py-1 font-medium">
                  → {step.output}
                </div>
              )}
            </div>
          ),
        },
        position: { x: xCenter, y: yOffset },
        style: {
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
          border: '3px solid #9c27b0',
          borderRadius: '12px',
          padding: '12px',
          minWidth: '220px',
          boxShadow: '0 4px 12px rgba(156, 39, 176, 0.3)',
        },
      });
      
      // Connect from previous nodes
      prevNodeIds.forEach(prevId => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          style: {
            strokeWidth: 2,
          },
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
    data: { 
      label: (
        <div className="text-center px-2">
          <div className="font-bold text-lg">✓ 완료</div>
        </div>
      )
    },
    position: { x: xCenter, y: yOffset },
    style: {
      background: 'linear-gradient(135deg, #e1f5e1 0%, #c8e6c9 100%)',
      border: '3px solid #4caf50',
      borderRadius: '16px',
      padding: '16px',
      minWidth: '180px',
      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    },
  });
  
  prevNodeIds.forEach(prevId => {
    edges.push({
      id: `${prevId}-end`,
      source: prevId,
      target: 'end',
      style: {
        strokeWidth: 2,
      },
    });
  });
  
  return { nodes, edges };
}

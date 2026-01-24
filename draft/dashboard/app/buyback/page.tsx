'use client';

import { useState } from 'react';

// Dan Martell's DRIP Matrix: Delegation, Replacement, Investment, Production
// Y축: Energy (Draining ↔ Energizing)
// X축: Value ($Low ↔ $High)

interface Task {
  id: string;
  name: string;
  quadrant: 'delegate' | 'replace' | 'invest' | 'produce';
  hoursPerWeek: number;
  currentOwner: 'CEO' | 'AX Admin' | 'AX Engineer' | 'Lead AX' | 'AX SA' | 'AI/자동화';
  targetOwner: 'CEO' | 'AX Admin' | 'AX Engineer' | 'Lead AX' | 'AX SA' | 'AI/자동화';
  targetDate: string;
  status: 'todo' | 'in_progress' | 'done';
}

const INITIAL_TASKS: Task[] = [
  // Delegate (Low $ + Draining) - 위임해야 할 일
  { id: '1', name: '일정 관리/캘린더', quadrant: 'delegate', hoursPerWeek: 3, currentOwner: 'CEO', targetOwner: 'AX Admin', targetDate: '2월', status: 'in_progress' },
  { id: '2', name: '이메일 1차 필터링', quadrant: 'delegate', hoursPerWeek: 5, currentOwner: 'CEO', targetOwner: 'AI/자동화', targetDate: '2월', status: 'todo' },
  { id: '3', name: '문서 정리/파일링', quadrant: 'delegate', hoursPerWeek: 2, currentOwner: 'CEO', targetOwner: 'AX Admin', targetDate: '3월', status: 'todo' },
  { id: '4', name: '회계/경비 처리', quadrant: 'delegate', hoursPerWeek: 2, currentOwner: 'CEO', targetOwner: 'AX Admin', targetDate: '3월', status: 'todo' },
  
  // Replace (High $ + Draining) - 대체해야 할 일
  { id: '5', name: '코드 리뷰', quadrant: 'replace', hoursPerWeek: 8, currentOwner: 'CEO', targetOwner: 'Lead AX', targetDate: '3월', status: 'in_progress' },
  { id: '6', name: '고객 요구사항 정리', quadrant: 'replace', hoursPerWeek: 6, currentOwner: 'CEO', targetOwner: 'AX SA', targetDate: '4월', status: 'todo' },
  { id: '7', name: 'QA/테스트', quadrant: 'replace', hoursPerWeek: 4, currentOwner: 'CEO', targetOwner: 'AX Engineer', targetDate: '3월', status: 'todo' },
  { id: '8', name: '반복 개발 작업', quadrant: 'replace', hoursPerWeek: 10, currentOwner: 'CEO', targetOwner: 'AX Engineer', targetDate: '2월', status: 'in_progress' },
  
  // Invest (Low $ + Energizing) - 투자해야 할 일
  { id: '9', name: '팀 1:1 미팅', quadrant: 'invest', hoursPerWeek: 2, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  { id: '10', name: '학습/리서치', quadrant: 'invest', hoursPerWeek: 3, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  { id: '11', name: '네트워킹/커뮤니티', quadrant: 'invest', hoursPerWeek: 2, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  
  // Produce (High $ + Energizing) - 생산해야 할 일 (CEO가 해야 할 일)
  { id: '12', name: '영업/클로징', quadrant: 'produce', hoursPerWeek: 8, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  { id: '13', name: '전략/비전 수립', quadrant: 'produce', hoursPerWeek: 4, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  { id: '14', name: '핵심 고객 관계', quadrant: 'produce', hoursPerWeek: 3, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
  { id: '15', name: '채용/팀빌딩', quadrant: 'produce', hoursPerWeek: 2, currentOwner: 'CEO', targetOwner: 'CEO', targetDate: '-', status: 'done' },
];

// Replacement Ladder 단계
const REPLACEMENT_LADDER = [
  { phase: 0, role: 'CEO가 모든 것', status: 'past', description: '창업 초기' },
  { phase: 1, role: 'AX Admin 위임', status: 'current', description: '행정/스케줄/문서' },
  { phase: 2, role: 'Delivery 위임', status: 'next', description: 'AX Engineer, Lead AX' },
  { phase: 3, role: 'Marketing 위임', status: 'future', description: 'AX Marketing' },
  { phase: 4, role: 'Sales 위임', status: 'future', description: 'AX Sales' },
  { phase: 5, role: 'CEO는 비전만', status: 'future', description: 'Leadership Only' },
];

const QUADRANT_INFO = {
  delegate: { 
    title: 'Delegate (위임)', 
    subtitle: 'Low $ + Draining',
    color: 'red',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-700',
    action: '즉시 위임하라'
  },
  replace: { 
    title: 'Replace (대체)', 
    subtitle: 'High $ + Draining',
    color: 'orange',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-700',
    action: '시스템/사람으로 대체'
  },
  invest: { 
    title: 'Invest (투자)', 
    subtitle: 'Low $ + Energizing',
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    action: '시간 투자 유지'
  },
  produce: { 
    title: 'Produce (생산)', 
    subtitle: 'High $ + Energizing',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-700',
    action: 'CEO 핵심 업무'
  },
};

export default function BuybackPage() {
  const [tasks] = useState<Task[]>(INITIAL_TASKS);
  
  const getTasksByQuadrant = (quadrant: Task['quadrant']) => 
    tasks.filter(t => t.quadrant === quadrant);
  
  const getTotalHours = (quadrant: Task['quadrant']) =>
    getTasksByQuadrant(quadrant).reduce((sum, t) => sum + t.hoursPerWeek, 0);
  
  const getCEOHours = () => 
    tasks.filter(t => t.currentOwner === 'CEO').reduce((sum, t) => sum + t.hoursPerWeek, 0);
  
  const getTargetCEOHours = () =>
    tasks.filter(t => t.targetOwner === 'CEO').reduce((sum, t) => sum + t.hoursPerWeek, 0);
  
  const delegateProgress = tasks.filter(t => 
    (t.quadrant === 'delegate' || t.quadrant === 'replace') && t.status === 'done'
  ).length / tasks.filter(t => t.quadrant === 'delegate' || t.quadrant === 'replace').length * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="text-6xl">⏰</span>
            <h1 className="text-5xl font-bold text-white">
              Buy Back Your Time
            </h1>
          </div>
          <p className="text-xl text-purple-200 mt-4 max-w-2xl mx-auto">
            Dan Martell's DRIP Matrix - CEO 시간 환매 계획
          </p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-red-100 text-sm font-medium mb-1">현재 CEO 주당 업무</div>
            <div className="text-4xl font-bold">{getCEOHours()}시간</div>
            <div className="text-red-200 text-sm mt-1">위임 필요</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-green-100 text-sm font-medium mb-1">목표 CEO 주당 업무</div>
            <div className="text-4xl font-bold">{getTargetCEOHours()}시간</div>
            <div className="text-green-200 text-sm mt-1">핵심 업무만</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-purple-100 text-sm font-medium mb-1">시간 환매량</div>
            <div className="text-4xl font-bold">{getCEOHours() - getTargetCEOHours()}시간</div>
            <div className="text-purple-200 text-sm mt-1">주당 절약</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-blue-100 text-sm font-medium mb-1">위임 진행률</div>
            <div className="text-4xl font-bold">{delegateProgress.toFixed(0)}%</div>
            <div className="mt-2 bg-blue-800/50 rounded-full h-2">
              <div className="bg-white rounded-full h-2" style={{ width: `${delegateProgress}%` }} />
            </div>
          </div>
        </div>

        {/* DRIP Matrix */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
            <h2 className="text-2xl font-bold text-white">📊 DRIP Matrix</h2>
            <p className="text-purple-100 mt-1">Delegate, Replace, Invest, Produce</p>
          </div>
          
          <div className="p-6">
            {/* Matrix Labels */}
            <div className="flex justify-center mb-4">
              <div className="text-center">
                <span className="text-gray-500 text-sm">← Low $ Value</span>
                <span className="mx-8 font-bold text-gray-700">💰 VALUE</span>
                <span className="text-gray-500 text-sm">High $ Value →</span>
              </div>
            </div>
            
            <div className="flex">
              {/* Y-axis label */}
              <div className="flex flex-col justify-center items-center w-8 mr-4">
                <span className="text-gray-500 text-sm transform -rotate-90 whitespace-nowrap">⚡ Energizing</span>
                <div className="h-32"></div>
                <span className="text-gray-500 text-sm transform -rotate-90 whitespace-nowrap">😩 Draining</span>
              </div>
              
              {/* Matrix Grid */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {/* Top Row: Invest | Produce */}
                {(['invest', 'produce'] as const).map((quadrant) => (
                  <div key={quadrant} className={`${QUADRANT_INFO[quadrant].bgColor} ${QUADRANT_INFO[quadrant].borderColor} border-2 rounded-xl p-4`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className={`font-bold ${QUADRANT_INFO[quadrant].textColor}`}>
                          {QUADRANT_INFO[quadrant].title}
                        </h3>
                        <p className="text-gray-500 text-xs">{QUADRANT_INFO[quadrant].subtitle}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${QUADRANT_INFO[quadrant].bgColor} ${QUADRANT_INFO[quadrant].textColor}`}>
                        {getTotalHours(quadrant)}h/주
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${QUADRANT_INFO[quadrant].textColor} mb-2`}>
                      → {QUADRANT_INFO[quadrant].action}
                    </p>
                    <ul className="space-y-1">
                      {getTasksByQuadrant(quadrant).map((task) => (
                        <li key={task.id} className="flex items-center justify-between text-sm">
                          <span className={task.status === 'done' ? 'text-gray-500' : 'text-gray-700'}>
                            {task.status === 'done' && '✅ '}
                            {task.status === 'in_progress' && '🔄 '}
                            {task.name}
                          </span>
                          <span className="text-gray-400 text-xs">{task.hoursPerWeek}h</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Bottom Row: Delegate | Replace */}
                {(['delegate', 'replace'] as const).map((quadrant) => (
                  <div key={quadrant} className={`${QUADRANT_INFO[quadrant].bgColor} ${QUADRANT_INFO[quadrant].borderColor} border-2 rounded-xl p-4`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className={`font-bold ${QUADRANT_INFO[quadrant].textColor}`}>
                          {QUADRANT_INFO[quadrant].title}
                        </h3>
                        <p className="text-gray-500 text-xs">{QUADRANT_INFO[quadrant].subtitle}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${QUADRANT_INFO[quadrant].bgColor} ${QUADRANT_INFO[quadrant].textColor}`}>
                        {getTotalHours(quadrant)}h/주
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${QUADRANT_INFO[quadrant].textColor} mb-2`}>
                      → {QUADRANT_INFO[quadrant].action}
                    </p>
                    <ul className="space-y-1">
                      {getTasksByQuadrant(quadrant).map((task) => (
                        <li key={task.id} className="flex items-center justify-between text-sm">
                          <div className="flex-1">
                            <span className={task.status === 'done' ? 'text-gray-500' : 'text-gray-700'}>
                              {task.status === 'done' && '✅ '}
                              {task.status === 'in_progress' && '🔄 '}
                              {task.name}
                            </span>
                            {task.targetOwner !== 'CEO' && (
                              <span className="ml-2 text-xs text-gray-400">
                                → {task.targetOwner} ({task.targetDate})
                              </span>
                            )}
                          </div>
                          <span className="text-gray-400 text-xs">{task.hoursPerWeek}h</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Replacement Ladder */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
            <h2 className="text-2xl font-bold text-white">🪜 Replacement Ladder</h2>
            <p className="text-orange-100 mt-1">단계별 위임 로드맵</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between">
              {REPLACEMENT_LADDER.map((step, idx) => (
                <div key={step.phase} className="flex-1 relative">
                  {/* Connector Line */}
                  {idx < REPLACEMENT_LADDER.length - 1 && (
                    <div className={`absolute top-6 left-1/2 w-full h-1 ${
                      step.status === 'past' ? 'bg-green-400' : 
                      step.status === 'current' ? 'bg-orange-400' : 'bg-gray-200'
                    }`} />
                  )}
                  
                  {/* Step Circle */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 ${
                      step.status === 'past' ? 'bg-green-500' :
                      step.status === 'current' ? 'bg-orange-500 ring-4 ring-orange-200' :
                      'bg-gray-300'
                    }`}>
                      {step.status === 'past' ? '✓' : step.phase}
                    </div>
                    <div className="mt-3 text-center">
                      <p className={`font-bold text-sm ${
                        step.status === 'current' ? 'text-orange-600' : 'text-gray-700'
                      }`}>
                        {step.role}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 위임 계획 테이블 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white">📋 위임 실행 계획</h2>
            <p className="text-blue-100 mt-1">Delegate + Replace 업무 상세</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">업무</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">주당 시간</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">현재</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">→</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">목표</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">목표일</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tasks
                  .filter(t => t.quadrant === 'delegate' || t.quadrant === 'replace')
                  .sort((a, b) => {
                    const order = { done: 2, in_progress: 0, todo: 1 };
                    return order[a.status] - order[b.status];
                  })
                  .map((task) => (
                    <tr key={task.id} className={task.status === 'done' ? 'bg-green-50' : ''}>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${task.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                          {task.name}
                        </span>
                        <span className={`ml-2 text-xs px-2 py-1 rounded ${QUADRANT_INFO[task.quadrant].bgColor} ${QUADRANT_INFO[task.quadrant].textColor}`}>
                          {task.quadrant}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-medium">{task.hoursPerWeek}h</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">{task.currentOwner}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">→</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">{task.targetOwner}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{task.targetDate}</td>
                      <td className="px-6 py-4 text-center">
                        {task.status === 'done' && <span className="text-green-600">✅ 완료</span>}
                        {task.status === 'in_progress' && <span className="text-orange-600">🔄 진행중</span>}
                        {task.status === 'todo' && <span className="text-gray-400">⏳ 예정</span>}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-50 transition"
          >
            ← Command Dashboard
          </a>
          <a 
            href="/financial" 
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-medium rounded-lg shadow hover:bg-gray-50 transition"
          >
            💰 Financial Projection
          </a>
        </div>
      </div>
    </main>
  );
}

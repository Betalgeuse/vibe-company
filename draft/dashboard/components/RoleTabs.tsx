'use client';

import { useState } from 'react';
import { CommandData } from '@/lib/parseCommand';
import { CommandFlow } from './CommandFlow';
import { RunCommandButton } from './RunCommandButton';

interface RoleTabsProps {
  commandsByRole: Record<string, Array<{ name: string; data: CommandData }>>;
  roleMeta: Record<string, { icon: string; label: string; color: string }>;
}

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string; tab: string; tabActive: string }> = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', tab: 'text-purple-600 hover:bg-purple-50', tabActive: 'bg-purple-600 text-white' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', tab: 'text-blue-600 hover:bg-blue-50', tabActive: 'bg-blue-600 text-white' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', tab: 'text-indigo-600 hover:bg-indigo-50', tabActive: 'bg-indigo-600 text-white' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', tab: 'text-green-600 hover:bg-green-50', tabActive: 'bg-green-600 text-white' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', tab: 'text-orange-600 hover:bg-orange-50', tabActive: 'bg-orange-600 text-white' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', tab: 'text-pink-600 hover:bg-pink-50', tabActive: 'bg-pink-600 text-white' },
  gray: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', tab: 'text-gray-600 hover:bg-gray-50', tabActive: 'bg-gray-600 text-white' },
};

export function RoleTabs({ commandsByRole, roleMeta }: RoleTabsProps) {
  const roles = Object.keys(commandsByRole);
  const [activeRole, setActiveRole] = useState(roles[0] || '');

  if (roles.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-lg">
        <span className="text-6xl mb-4 block">📭</span>
        <p className="text-gray-600 text-lg mb-2">Command 파일을 찾을 수 없습니다</p>
      </div>
    );
  }

  const activeCommands = commandsByRole[activeRole] || [];
  const meta = roleMeta[activeRole] || { icon: '📁', label: activeRole, color: 'gray' };
  const colors = COLOR_CLASSES[meta.color] || COLOR_CLASSES.gray;

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-xl shadow p-2">
        {roles.map((role) => {
          const m = roleMeta[role] || { icon: '📁', label: role, color: 'gray' };
          const c = COLOR_CLASSES[m.color] || COLOR_CLASSES.gray;
          const isActive = role === activeRole;
          const count = commandsByRole[role]?.length || 0;
          
          return (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive ? c.tabActive : c.tab
              }`}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isActive ? 'bg-white/30' : 'bg-gray-100'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Commands for Active Role */}
      <div className="space-y-6">
        {activeCommands.map(({ name, data }) => (
          <div key={name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Command Header */}
            <div className={`${colors.bg} ${colors.border} border-b p-5`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{meta.icon}</span>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>
                      {data.command || name}
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    {data.objective}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {data.workflow && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {data.workflow}
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {data.execution_flow.length} Steps
                  </span>
                  <RunCommandButton commandName={name} />
                </div>
              </div>
            </div>

            {/* Command Flow Visualization */}
            <div className="p-6">
              <CommandFlow commandData={data} />
            </div>

            {/* Execution Steps */}
            <div className="px-6 pb-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                실행 단계
              </h3>
              <div className="grid gap-2">
                {data.execution_flow.map((step) => (
                  <div key={step.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full ${colors.bg} ${colors.text} font-bold flex items-center justify-center text-sm border ${colors.border}`}>
                      {step.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{step.id}</span>
                        {step.parallel && (
                          <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs">
                            병렬
                          </span>
                        )}
                      </div>
                      {step.parallel && step.agents && Array.isArray(step.agents) ? (
                        <div className="mt-1 text-sm text-gray-500">
                          {step.agents.map((a, i) => (
                            <span key={i}>
                              <code className="text-blue-600">{a.droid}</code>
                              {i < (step.agents as Array<{droid: string}>).length - 1 && ' + '}
                            </span>
                          ))}
                        </div>
                      ) : step.type === 'iterative' && step.agents ? (
                        <div className="mt-1 text-sm text-gray-500">
                          {Object.entries(step.agents as Record<string, string>).map(([role, droid], i, arr) => (
                            <span key={role}>
                              <code className="text-amber-600">{role}</code>: <code className="text-blue-600">{droid.replace('@', '')}</code>
                              {i < arr.length - 1 && ' vs '}
                            </span>
                          ))}
                          {step.rounds && (
                            <span className="ml-2 text-xs text-gray-400">({step.rounds.length} rounds)</span>
                          )}
                        </div>
                      ) : step.elements ? (
                        <div className="mt-1 text-sm text-gray-500">
                          <code className="text-violet-600">🎯 {step.framework || 'Scoring'}</code>
                          <span className="ml-2 text-xs text-gray-400">({step.elements.length} elements, /{step.elements.reduce((s: number, e: {max_score: number}) => s + e.max_score, 0)})</span>
                        </div>
                      ) : step.quadrants ? (
                        <div className="mt-1 text-sm text-gray-500">
                          <code className="text-cyan-600">🧭 {step.framework || 'Matrix'}</code>
                          <span className="ml-2 text-xs text-gray-400">({Object.keys(step.quadrants).length} quadrants)</span>
                        </div>
                      ) : step.analysis ? (
                        <div className="mt-1 text-sm text-gray-500">
                          <code className="text-rose-600">📊 {step.framework || 'Analysis'}</code>
                          <span className="ml-2 text-xs text-gray-400">({Object.keys(step.analysis).length} questions)</span>
                        </div>
                      ) : step.checklist ? (
                        <div className="mt-1 text-sm text-gray-500">
                          <code className="text-emerald-600">📋 {step.framework || 'Checklist'}</code>
                          <span className="ml-2 text-xs text-gray-400">({step.checklist.length} checks)</span>
                        </div>
                      ) : step.droid ? (
                        <p className="mt-1 text-sm text-gray-500">
                          <code className="text-purple-600">{step.droid}</code>: {step.action}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

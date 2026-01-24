'use client';

import { useState } from 'react';

interface RunCommandButtonProps {
  commandName: string;
}

export function RunCommandButton({ commandName }: RunCommandButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const command = `codex run ${commandName}`;
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-3">
      {/* Codex Run 명령어 복사 */}
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
      >
        {copied ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            복사됨!
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Codex 실행 명령어 복사
          </>
        )}
      </button>

      {/* 명령어 표시 */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-green-400 font-mono text-sm rounded-lg border border-gray-700">
        <span className="text-gray-500">$</span>
        <code>codex run {commandName}</code>
      </div>
    </div>
  );
}

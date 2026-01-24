import { getCommandsByRole } from '@/lib/parseCommand';
import { CommandFlow } from '@/components/CommandFlow';
import { RunCommandButton } from '@/components/RunCommandButton';
import { RoleTabs } from '@/components/RoleTabs';
import path from 'path';

// 직무별 메타 정보
const ROLE_META: Record<string, { icon: string; label: string; color: string }> = {
  ceo: { icon: '👔', label: 'CEO', color: 'purple' },
  fde: { icon: '🚀', label: 'FDE', color: 'blue' },
  'junior-ax': { icon: '👨‍💻', label: 'Junior AX', color: 'green' },
  'ax-sales': { icon: '💼', label: 'AX Sales', color: 'orange' },
  general: { icon: '📦', label: 'General', color: 'gray' },
};

export default function Home() {
  const commandsDir = path.join(process.cwd(), '..', '..', '.factory', 'commands');
  const commandsByRole = getCommandsByRole(commandsDir);
  const totalCommands = Object.values(commandsByRole).flat().length;
  const roles = Object.keys(commandsByRole);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="text-5xl">🎨</span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              luerre AI Command Center
            </h1>
          </div>
          <p className="text-lg text-gray-600 mt-2">
            직무별 Command 파이프라인
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              ✓ {totalCommands} Commands
            </span>
            <a 
              href="/financial" 
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-medium hover:bg-orange-200 transition"
            >
              💰 Financial
            </a>
            <a 
              href="/buyback" 
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 transition"
            >
              ⏰ Buy Back Time
            </a>
          </div>
        </header>

        {/* Role Tabs */}
        <RoleTabs 
          commandsByRole={commandsByRole} 
          roleMeta={ROLE_META}
        />

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>luerre AI © 2025</p>
        </footer>
      </div>
    </main>
  );
}

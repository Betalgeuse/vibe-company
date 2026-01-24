import fs from 'fs';
import path from 'path';

export interface CommandStep {
  step: number;
  id: string;
  name?: string;
  parallel?: boolean;
  agents?: Array<{
    droid: string;
    action: string;
    output: string;
  }> | Record<string, string>;
  droid?: string;
  action?: string;
  output?: string;
  fan_in?: {
    action: string;
    output: string;
  };
  quality_gate?: {
    completeness_threshold?: number;
    required_sections?: string[];
    on_fail?: string;
  };
  // Iterative loop support
  type?: 'iterative';
  max_iterations?: number;
  rounds?: Array<{
    round: number;
    name: string;
    goal: string;
  }>;
  exit_conditions?: {
    pass?: string;
    fail?: string;
  };
  // Checklist support (Built to Sell)
  trigger?: string;
  framework?: string;
  checklist?: Array<{
    id: string;
    rule: string;
    check: string;
  }>;
  scoring?: {
    pass?: string;
    conditional?: string;
    fail?: string;
  };
  // Scoring elements support (Zero to One)
  elements?: Array<{
    id: string;
    question: string;
    max_score: number;
  }>;
  quadrants?: Record<string, {
    description: string;
    verdict: string;
  }>;
  analysis?: Record<string, {
    question: string;
  }>;
  thresholds?: {
    pass?: string;
    conditional?: string;
    reject?: string;
  };
  output_spec?: Record<string, unknown>;
  scoring_breakdown?: Record<string, {
    max: number;
    criteria: string[];
  }>;
}

export interface CommandData {
  command: string;
  role?: string;
  action: string;
  objective: string;
  workflow?: string;
  orchestrator_config?: string;
  execution_flow: CommandStep[];
}

export function parseCommandFile(filePath: string): CommandData | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // JSON 블록 추출 - 중첩된 중괄호 처리
    let braceCount = 0;
    let startIdx = -1;
    let endIdx = -1;
    
    for (let i = 0; i < fileContent.length; i++) {
      if (fileContent[i] === '{') {
        if (braceCount === 0) {
          startIdx = i;
        }
        braceCount++;
      } else if (fileContent[i] === '}') {
        braceCount--;
        if (braceCount === 0 && startIdx !== -1) {
          endIdx = i;
          break;
        }
      }
    }
    
    if (startIdx !== -1 && endIdx !== -1) {
      const jsonStr = fileContent.substring(startIdx, endIdx + 1);
      try {
        const data = JSON.parse(jsonStr);
        // execution_flow가 있는지 확인
        if (data.execution_flow && Array.isArray(data.execution_flow)) {
          return data;
        }
      } catch (parseError) {
        // JSON 파싱 오류는 스킵
        return null;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error reading command file:', error);
    return null;
  }
}

function getAllMdFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllMdFiles(filePath, fileList);
    } else if (file.endsWith('.md') && !file.includes('template') && !file.includes('README') && !file.includes('GUIDE')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

export function getAllCommands(commandsDir: string): Array<{ name: string; data: CommandData | null }> {
  try {
    if (!fs.existsSync(commandsDir)) {
      console.error('Commands directory not found:', commandsDir);
      return [];
    }

    const mdFiles = getAllMdFiles(commandsDir);
    
    return mdFiles.map(filePath => {
      const data = parseCommandFile(filePath);
      const relativePath = path.relative(commandsDir, filePath);
      const name = relativePath.replace('.md', '').replace(/\//g, ' / ');
      return {
        name,
        data,
      };
    }).filter(c => c.data !== null);
  } catch (error) {
    console.error('Error reading commands directory:', error);
    return [];
  }
}

// 직무(role)별로 그룹화된 커맨드 반환 (JSON 내 role 필드 기반)
export function getCommandsByRole(commandsDir: string): Record<string, Array<{ name: string; data: CommandData }>> {
  try {
    if (!fs.existsSync(commandsDir)) {
      console.error('Commands directory not found:', commandsDir);
      return {};
    }

    const result: Record<string, Array<{ name: string; data: CommandData }>> = {};
    
    // 루트의 모든 .md 파일 읽기
    const entries = fs.readdirSync(commandsDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.includes('README')) {
        const filePath = path.join(commandsDir, entry.name);
        const data = parseCommandFile(filePath);
        
        if (data) {
          const role = data.role || 'general';
          const name = path.basename(entry.name, '.md');
          
          if (!result[role]) {
            result[role] = [];
          }
          result[role].push({ name, data });
        }
      }
    }
    
    return result;
  } catch (error) {
    console.error('Error reading commands directory:', error);
    return {};
  }
}

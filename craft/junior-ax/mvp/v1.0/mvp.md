{
  "command": "mvp",
  "role": "junior-ax",
  "action": "create_mvp_project",
  "objective": "Draft 결과물을 기반으로 Next.js MVP 프로젝트 생성 및 submodule 연결",
  "version": "1.0",
  
  "input_requirements": {
    "draft_path": "draft/biz-idea/ 또는 draft/biz-idea-b2b/ 내 기획 문서",
    "project_name": "kebab-case 프로젝트명 (예: love-practice)",
    "github_org": "GitHub organization 또는 username (기본: Betalgeuse)"
  },

  "execution_flow": [
    {
      "step": 1,
      "id": "analyze_draft",
      "name": "Draft 분석",
      "action": "draft 문서에서 MVP 요구사항 추출",
      "extract": [
        "product_spec (제품 스펙)",
        "core_features (핵심 기능 3개 이내)",
        "tech_requirements (기술 요구사항)",
        "ui_references (UI 레퍼런스)"
      ],
      "output": "mvp_requirements"
    },
    {
      "step": 2,
      "id": "select_stack",
      "name": "Tech Stack 선택",
      "reference": "docs/tech-stack/README.md",
      "decision_tree": {
        "has_figma_design": {
          "yes": "next14-with-design (4-Layer 아키텍처)",
          "no": "next14-no-design (Mock DB 패턴)"
        }
      },
      "default_stack": {
        "framework": "Next.js 14+ (App Router)",
        "language": "TypeScript (strict)",
        "styling": "Tailwind CSS",
        "ui": "shadcn/ui",
        "state_server": "TanStack Query",
        "state_client": "Zustand",
        "form": "React Hook Form + Zod",
        "icons": "Lucide React"
      },
      "output": "selected_stack"
    },
    {
      "step": 3,
      "id": "scaffold_project",
      "name": "프로젝트 스캐폴딩",
      "actions": [
        "npx create-next-app@latest {project_name} --typescript --tailwind --eslint --app --src-dir",
        "cd {project_name} && npx shadcn@latest init",
        "필요한 shadcn 컴포넌트 설치"
      ],
      "structure": {
        "src/": {
          "app/": "Next.js App Router 페이지",
          "components/": "재사용 컴포넌트",
          "lib/": "유틸리티 함수",
          "hooks/": "커스텀 훅",
          "types/": "TypeScript 타입 정의"
        }
      },
      "output": "scaffolded_project"
    },
    {
      "step": 4,
      "id": "implement_core",
      "name": "핵심 기능 구현",
      "reference": "playbooks/junior-ax/06-rapid-prototyping/",
      "principles": [
        "Server Component 기본, Client는 필요할 때만",
        "shadcn/ui 컴포넌트 우선 사용",
        "any 타입 금지",
        "레퍼런스 기반 개발"
      ],
      "output": "implemented_mvp"
    },
    {
      "step": 5,
      "id": "create_repo",
      "name": "GitHub 레포 생성",
      "action": "gh repo create {github_org}/{project_name} --private",
      "fallback": {
        "if_gh_unavailable": "사용자에게 레포 생성 요청",
        "message": "다음 레포를 생성해주세요: https://github.com/{github_org}/{project_name}"
      },
      "output": "repo_url"
    },
    {
      "step": 6,
      "id": "push_and_submodule",
      "name": "Push 및 Submodule 연결",
      "actions": [
        "cd {project_path} && git init && git add . && git commit -m 'feat: {project_name} MVP 초기 코드'",
        "git remote add origin {repo_url}",
        "git push -u origin main",
        "cd {parent_repo}/private && git submodule add {repo_url} mvp/{project_name}"
      ],
      "output": "submodule_added"
    },
    {
      "step": 7,
      "id": "final_commit",
      "name": "최종 커밋",
      "action": "private 레포에 submodule 추가 커밋",
      "commit_message": "feat: add {project_name} MVP as submodule",
      "ask_user": "push 하시겠습니까? (y/n)"
    }
  ],

  "output_spec": {
    "project_location": "mvp/{project_name}/",
    "repo_url": "https://github.com/{github_org}/{project_name}",
    "submodule_status": "연결 완료",
    "next_steps": [
      "cd mvp/{project_name}",
      "npm run dev",
      "http://localhost:3000 확인"
    ]
  },

  "quality_checklist": {
    "before_push": [
      "npm run build 성공",
      "npm run lint 에러 없음",
      "TypeScript 에러 없음",
      ".env.example 포함 (민감정보 제외)",
      ".gitignore 적절히 설정"
    ]
  },

  "references": {
    "tech_stack": "docs/tech-stack/README.md",
    "playbook": "playbooks/junior-ax/README.md",
    "rapid_prototyping": "playbooks/junior-ax/06-rapid-prototyping/"
  }
}

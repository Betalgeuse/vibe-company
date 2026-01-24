# 🎨 Vibe Command Dashboard

**팀 Command 파이프라인을 n8n 스타일로 자동 시각화하는 대시보드**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/assets/tree/main/dashboard)


## 🎯 기능

- ✅ `.factory/commands/*.md` 파일 자동 파싱
- ✅ n8n 스타일 노드 다이어그램
- ✅ 드래그, 줌, 미니맵
- ✅ 병렬/순차 실행 시각화
- ✅ 실시간 업데이트 (GitHub push 시)
- ✅ 반응형 디자인


## 🚀 빠른 시작


### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 확인
# → http://localhost:3000
```


### Vercel 배포 (1분!)

```bash
# Vercel CLI 설치 (최초 1회)
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

또는 GitHub 연동:

1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 레포 선택
3. Root Directory를 `dashboard`로 설정
4. Deploy 클릭!

**자동 배포**: GitHub에 push하면 자동으로 재배포됩니다.


## 📂 구조

```
dashboard/
├── app/
│   └── page.tsx              # 메인 페이지
├── components/
│   └── CommandFlow.tsx       # React Flow 시각화
├── lib/
│   └── parseCommand.ts       # Command 파서
├── vercel.json               # Vercel 설정
└── package.json
```


## 🔧 작동 원리

1. **파싱**: `../.factory/commands/*.md` 파일에서 JSON 블록 추출
2. **변환**: JSON을 React Flow 노드/엣지로 변환
3. **렌더링**: n8n 스타일로 시각화
4. **자동 업데이트**: 파일 변경 시 즉시 반영


## 📝 Command 파일 형식

```markdown
{
  "command": "my-command",
  "objective": "설명",
  "execution_flow": [
    {
      "step": 1,
      "id": "step_id",
      "parallel": true,
      "agents": [
        {
          "droid": "@agent-name",
          "action": "작업 내용",
          "output": "출력 형식"
        }
      ],
      "fan_in": {
        "action": "통합 방법",
        "output": "최종 출력"
      }
    }
  ]
}
```


## 🎨 커스터마이징

### 색상 변경

`components/CommandFlow.tsx`에서:

```typescript
// 시작/종료 노드
background: 'linear-gradient(135deg, #e1f5e1 0%, #c8e6c9 100%)',
border: '3px solid #4caf50',

// 에이전트 노드
background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
border: '3px solid #2196f3',

// 병합 노드
background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
border: '3px solid #ff9800',
```


### 레이아웃 조정

`components/CommandFlow.tsx`에서:

```typescript
const yStep = 180;      // 세로 간격
const xSpacing = 300;   // 가로 간격 (병렬 노드)
const xCenter = 400;    // 중심 X 좌표
```


## 🌐 배포 URL

- **개발**: http://localhost:3000
- **프로덕션**: https://vibe-commands.vercel.app (예시)


## 📊 지원하는 Command 구조

- ✅ 순차 실행 (Sequential)
- ✅ 병렬 실행 (Parallel)
- ✅ Fan-in 병합 (Merge)
- ✅ Quality Gate
- ✅ 중첩 구조


## 🤝 기여

1. Command 파일 추가/수정
2. Git commit & push
3. 자동 배포 완료!


## 📄 라이센스

MIT License


## 🔗 링크

- [Vibe Coding Framework](../README.md)
- [Command 작성 가이드](../vibe-coding-playbook/04-measurement/fcsr.md)
- [React Flow Docs](https://reactflow.dev/)
- [Vercel Docs](https://vercel.com/docs)


---


**Made with ❤️ by Vibe Coding Framework**

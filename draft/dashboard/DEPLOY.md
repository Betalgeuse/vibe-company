# 🚀 배포 가이드

## 로컬 테스트

```bash
cd /Users/zayden/Documents/assets/dashboard
npm run dev
```

브라우저에서 확인: http://localhost:3000

---

## Vercel 배포 (추천!)

### 방법 1: CLI로 배포 (가장 빠름)

```bash
cd /Users/zayden/Documents/assets/dashboard

# 최초 1회만 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 방법 2: GitHub 연동 (자동 배포)

1. **GitHub에 푸시**
   ```bash
   cd /Users/zayden/Documents/assets
   git add dashboard
   git commit -m "Add command visualization dashboard"
   git push
   ```

2. **Vercel 대시보드**
   - https://vercel.com 접속
   - "New Project" 클릭
   - GitHub 레포 선택
   - **Root Directory**: `dashboard` 입력 ⚠️ 중요!
   - "Deploy" 클릭

3. **자동 배포 설정 완료!**
   - GitHub에 push → 자동으로 재배포
   - Command 파일 수정 → push → 자동 반영

---

## 환경 변수 (필요시)

Vercel 대시보드에서 설정:

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

---

## 배포 후 확인 사항

✅ https://your-dashboard.vercel.app 접속  
✅ 3개 Command 카드가 보이는지 확인  
✅ React Flow 다이어그램이 표시되는지 확인  
✅ "Codex 실행 명령어 복사" 버튼 작동 확인  
✅ 드래그, 줌 인터랙션 확인  

---

## 트러블슈팅

### CSS가 안 보여요
- 빌드 후 재배포: `vercel --prod --force`

### Command가 안 보여요
- `../.factory/commands/` 경로 확인
- JSON 문법 오류 확인 (orchestrator.md)

### 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 확인 후 수정
```

---

## 팀원 공유

배포 후 팀원들에게 URL 공유:

```
🎨 Vibe Command Dashboard
https://vibe-commands.vercel.app

Command 파이프라인을 시각화한 대시보드입니다.
각 Command의 "Codex 실행 명령어 복사" 버튼을 클릭하여
터미널에 붙여넣으면 바로 실행할 수 있습니다.
```

---

## 업데이트 방법

### Command 파일 수정 후

```bash
# 1. Command 파일 수정
vim ../.factory/commands/my-command.md

# 2. Git commit & push (GitHub 연동 시 자동 배포)
git add .
git commit -m "Update command"
git push

# 3. 또는 CLI로 재배포
cd dashboard
vercel --prod
```

자동으로 30초 안에 업데이트됩니다! 🚀

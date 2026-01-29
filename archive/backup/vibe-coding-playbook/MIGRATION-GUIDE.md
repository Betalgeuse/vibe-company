# 📦 Migration Guide

**단일 파일에서 폴더 구조로 마이그레이션**


## ✅ 완료된 작업

1. **폴더 구조 생성** ✅
   ```
   vibe-coding-playbook/
   ├── README.md (메인 인덱스)
   ├── 01-getting-started/
   ├── 02-4c-framework/
   ├── 03-course-details/
   ├── 04-measurement/
   ├── appendix/
   └── videos/
   ```

2. **핵심 파일 생성** ✅
   - Getting Started (fcsr.md, quick-start.md)
   - 4C Framework (overview, camcorder, course, cadence, checklist)
   - Measurement (fcsr-dashboard, weekly-report)
   - Appendix (tools, resources)

3. **원본 백업** ✅
   - `vibe-coding-playbook.md` → `vibe-coding-playbook.md.backup`


## 🚧 남은 작업

### 1. Course Details 내용 이동

원본 파일(`vibe-coding-playbook.md`)에서 다음 섹션들을 해당 파일로 복사하세요:

```bash
# Chapter 1: Git & Environment
원본 위치: "Chapter 1: Git & Environment (The Foundation)" 섹션
대상 파일: 03-course-details/01-git-and-environment.md

# Chapter 2: Workflow & Debugging
원본 위치: "Chapter 2: Workflow & Debugging (The Flow)" 섹션
대상 파일: 03-course-details/02-workflow-and-debugging.md

# Chapter 3: Architecture & Stack
원본 위치: "Chapter 3: Architecture & Stack (The Structure)" 섹션
대상 파일: 03-course-details/03-architecture-and-stack.md

# Chapter 4: Prompt Engineering
원본 위치: "Chapter 4: Prompt Engineering (AI에게 명령하는 법)" 섹션
대상 파일: 03-course-details/04-prompt-engineering.md
```

### 2. 영상 촬영 및 업로드

`videos/README.md` 파일의 체크리스트를 참고하여 영상을 촬영하고 업로드하세요.

### 3. 링크 검증

모든 내부 링크가 올바르게 연결되어 있는지 확인하세요:
```bash
# 링크 체크 도구 사용 (선택사항)
npx markdown-link-check vibe-coding-playbook/**/*.md
```


## 📂 새로운 폴더 구조 사용법

### 시작하기
```bash
# 메인 README부터 시작
cat vibe-coding-playbook/README.md

# 또는 직접 섹션으로 이동
cat vibe-coding-playbook/01-getting-started/fcsr.md
```

### 네비게이션
- 각 README 파일은 하위 문서로 연결
- 상대 경로로 링크되어 있음
- GitHub/GitLab에서 자동으로 렌더링됨


## 🎯 이점

### Before (단일 파일)
```
❌ 1000+ 줄의 거대한 파일
❌ 특정 섹션 찾기 어려움
❌ 동시 편집 충돌
❌ 느린 로딩
```

### After (폴더 구조)
```
✅ 섹션별로 분리된 파일
✅ 빠른 검색과 탐색
✅ 동시 편집 가능
✅ 빠른 로딩
✅ 버전 관리 용이
```


## 💡 팁

### 편집 시
1. 특정 섹션만 수정 가능
2. Git diff가 명확함
3. PR 리뷰가 쉬움

### 공유 시
1. 필요한 섹션만 공유 가능
2. 링크로 직접 접근 가능
3. 인쇄하기 좋음


## 🔄 원본 파일 유지

`vibe-coding-playbook.md.backup` 파일은 참고용으로 보관하세요.
- 내용 복사 시 참조
- 비교 및 검증
- 롤백 필요 시 사용


## 📞 문의

구조 개선 제안이나 질문이 있다면 이슈를 생성해주세요!


**Go Vibe, Stay Flow!** 🚀

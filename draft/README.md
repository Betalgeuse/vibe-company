# Draft

작업 중인 아이디어와 결과물을 관리하는 공간입니다.

## 구조

```
draft/
├── examples/              # 예시 (public)
│   └── sample-biz-idea/
└── [your-ideas]/          # 실제 아이디어는 private repo에서 관리
```

## 사용법

### 1. Private Repo 설정 (권장)

실제 아이디어는 private repo에서 관리하세요:

```bash
# private repo를 submodule로 연결
git submodule add https://github.com/YOUR_USERNAME/vibe-company-private.git private

# private/draft/ 에서 작업
```

### 2. 새 아이디어 시작

```bash
# 1. 먼저 컨텍스트 제공
"1인 창업자를 위한 SEO 자동화 도구 아이디어 검증하고 싶어"

# 2. command 실행
/biz-idea

# 결과물이 private/draft/biz-idea/에 생성됨
```

## 예시

`examples/` 폴더에서 draft 사용 예시를 확인하세요.

---

*아이디어는 경쟁력입니다. Private repo에서 관리하세요!*

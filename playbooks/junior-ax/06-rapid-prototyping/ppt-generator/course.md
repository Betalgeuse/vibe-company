# PPT Generator - 실행 가이드

## 📚 단계별 실행

### Step 1: 설치 (최초 1회)

```bash
# 1. 프로젝트 클론
git clone https://github.com/op7418/NanoBanana-PPT-Skills.git
cd NanoBanana-PPT-Skills

# 2. Python 가상환경 생성
python3 -m venv venv
source venv/bin/activate

# 3. 의존성 설치
pip install google-genai pillow python-dotenv

# 4. Gemini API 키 설정 (zsh 기준)
echo 'export GEMINI_API_KEY="YOUR_API_KEY"' >> ~/.zshrc
source ~/.zshrc
```

> API 키 발급: https://aistudio.google.com/apikey

### Step 2: 슬라이드 플랜 작성

`slides_plan.json` 파일을 만든다:

```json
{
  "title": "발표 제목",
  "total_slides": 5,
  "slides": [
    {
      "slide_number": 1,
      "page_type": "cover",
      "content": "Title: 발표 제목\nSubtitle: 부제목\n\n한 줄 설명"
    },
    {
      "slide_number": 2,
      "page_type": "content",
      "content": "핵심 내용\n\n- 포인트 1\n- 포인트 2\n- 포인트 3"
    },
    {
      "slide_number": 3,
      "page_type": "data",
      "content": "데이터 제목\n\n항목A: 80%\n항목B: 60%\n항목C: 45%"
    }
  ]
}
```

**page_type 종류:**
| 타입 | 용도 | 설명 |
|------|------|------|
| `cover` | 표지/마무리 | 큰 3D 오브젝트 + 제목 |
| `content` | 내용 | Bento 그리드 레이아웃 |
| `data` | 데이터/통계 | 분할 레이아웃 + 차트 |

### Step 3: 생성 실행

```bash
cd NanoBanana-PPT-Skills

# 기본 실행
./run.sh --plan slides_plan.json --style styles/gradient-glass.md --resolution 2K

# 또는 직접 실행
GEMINI_API_KEY="your-key" ./run.sh --plan slides_plan.json --style styles/gradient-glass.md
```

**옵션:**
| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--plan` | 슬라이드 플랜 JSON 파일 (필수) | - |
| `--style` | 스타일 파일 (필수) | - |
| `--resolution` | 해상도 (`2K` / `4K`) | `2K` |
| `--output` | 출력 디렉토리 | `outputs/TIMESTAMP` |

**스타일 종류:**
| 스타일 | 파일 | 분위기 |
|--------|------|--------|
| 글래스모피즘 | `styles/gradient-glass.md` | Apple Keynote 느낌, 고급스러운 테크 |
| 벡터 일러스트 | `styles/vector-illustration.md` | 따뜻한 플랫 디자인, 교육/브랜드 |

### Step 4: 결과 확인

```bash
# 브라우저에서 뷰어 열기
open outputs/TIMESTAMP/index.html
```

- 좌우 화살표로 페이지 이동
- PDF로 내보내기: 브라우저에서 Cmd+P → "PDF로 저장"

## 🎨 팁

### 좋은 슬라이드 플랜 작성법

1. **cover**: 핵심 메시지 한 줄 + 부제목
2. **content**: 항목 3-5개 이내, 짧은 키워드 중심
3. **data**: 숫자/퍼센트를 명시하면 차트로 시각화됨

### AI에게 플랜 작성 시키기

Claude나 ChatGPT에게 아래처럼 요청:

```
아래 목차로 PPT slides_plan.json을 만들어줘.
page_type은 cover, content, data 중 선택.
각 slide의 content는 핵심 키워드 중심으로 간결하게.

[목차 붙여넣기]
```

## ⚠️ 알려진 이슈

- `google-genai` 최신 버전에서 `image_size` 파라미터가 제거됨 → `generate_ppt.py`의 `ImageConfig`에서 `image_size=resolution` 라인 삭제 필요
- Python 3.9 경고가 뜨지만 동작에는 문제 없음
- 한 슬라이드당 약 30초 소요 (2K 기준)

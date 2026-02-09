# PPT Generator (AI PPT 생성)

## 🎯 목표

AI(Gemini)로 고퀄리티 PPT 이미지를 자동 생성한다.

## 측정 기준

| 항목 | 기준 |
|------|------|
| 소요 시간 | 20장 기준 10분 이내 |
| 결과물 | 16:9 비율 PNG 이미지 + HTML 뷰어 |
| 품질 | 렌더링된 글래스모피즘/벡터 스타일 슬라이드 |

## 필요 도구

| 도구 | 용도 | 비용 |
|------|------|------|
| [NanoBanana PPT Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | PPT 이미지 생성 | 무료 (오픈소스) |
| [Google AI Studio](https://aistudio.google.com/apikey) | Gemini API 키 발급 | 무료 |
| Python 3.8+ | 스크립트 실행 | 무료 |

## 결과물

```text
outputs/TIMESTAMP/
├── images/
│   ├── slide-01.png
│   ├── slide-02.png
│   └── ...
├── index.html          # 브라우저 뷰어
└── prompts.json        # 생성에 사용된 프롬프트 기록
```

# PPT Generator - 체크리스트

## ✅ 설치 전 확인

- [ ] Python 3.8+ 설치됨 (`python3 --version`)
- [ ] Git 설치됨 (`git --version`)
- [ ] Gemini API 키 발급 완료 (https://aistudio.google.com/apikey)

## ✅ 설치 확인

- [ ] NanoBanana-PPT-Skills 클론 완료
- [ ] Python venv 생성 완료
- [ ] `google-genai`, `pillow`, `python-dotenv` 설치 완료
- [ ] `GEMINI_API_KEY` 환경변수 설정 완료
- [ ] `./run.sh --help` 정상 출력 확인

## ✅ 슬라이드 플랜 작성

- [ ] JSON 파일 형식 확인 (`title`, `total_slides`, `slides` 배열)
- [ ] 각 슬라이드에 `slide_number`, `page_type`, `content` 포함
- [ ] `page_type`이 `cover` / `content` / `data` 중 하나
- [ ] `total_slides` 숫자와 실제 슬라이드 배열 길이 일치
- [ ] 첫 장과 마지막 장은 `cover` 타입 권장

## ✅ 생성 실행

- [ ] `--plan` 경로 정확한지 확인
- [ ] `--style` 경로 정확한지 확인 (`styles/gradient-glass.md` 또는 `styles/vector-illustration.md`)
- [ ] 생성 완료 후 `outputs/TIMESTAMP/images/` 에 PNG 파일 존재
- [ ] `outputs/TIMESTAMP/index.html` 브라우저에서 정상 열림

## ✅ 결과 공유

- [ ] 이미지 파일 확인 (16:9 비율)
- [ ] 필요 시 PDF 내보내기 (브라우저 Cmd+P → PDF 저장)
- [ ] 결과물 적절한 폴더에 정리

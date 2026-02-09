# Course: CI/Logo Design 실행 가이드

## 📚 Step-by-Step (45-60분 완성)

### Step 1: 컨셉 기반 프롬프트 작성 (10분)

#### 준비물
```
- Concept Definition에서 작성한 키워드
- 레퍼런스 3개
- 로고 유형 결정 (워드마크/레터마크/심볼)
```

#### Midjourney 프롬프트 템플릿
```
[로고 유형] logo for [제품명], [키워드 1], [키워드 2], [키워드 3], 
[색상 방향], minimalist, modern, vector, simple, flat design, 
white background, professional

--v 6 --s 250
```

#### 실전 예시
```
제품: CodeCraft (개발자 도구)
컨셉 키워드: Technical, Trustworthy, Clean

프롬프트:
"lettermark logo for CodeCraft, technical and trustworthy, 
clean geometric shapes, blue and purple gradient, 
minimalist, modern, vector, simple, flat design, 
white background, professional --v 6 --s 250"
```

#### 프롬프트 작성 팁
```
✅ 포함할 것:
- 로고 유형 (lettermark, symbol, wordmark)
- 브랜드 키워드 (minimalist, tech, friendly)
- 색상 방향 (blue, purple gradient)
- 스타일 (flat, modern, geometric)

❌ 피할 것:
- 너무 구체적인 지시 (정확히 이렇게)
- 복잡한 설명 (A이면서 B이고 C인)
- 브랜드명 스펠링 오류
```

---

### Step 2: Midjourney로 생성 (20분)

#### Midjourney 사용법
```bash
1. Discord에서 Midjourney 봇 접속
2. /imagine 명령어 입력
3. 프롬프트 붙여넣기
4. 대기 (1-2분)
5. 4개 결과 확인
```

#### 반복 개선
```
첫 생성 결과 확인:
- 너무 복잡한가? → "more minimal" 추가
- 색이 안 맞는가? → 색상 구체화
- 스타일이 다른가? → 레퍼런스 이미지 추가

V1, V2, V3, V4 버튼:
각 이미지 개별 Variation 생성

Upscale U1, U2, U3, U4:
선택한 이미지 고해상도 변환
```

#### 프롬프트 개선 예시
```
1차 시도:
"logo for CodeCraft, tech, blue"
→ 결과: 너무 복잡함

2차 시도:
"minimal lettermark logo CC, geometric, blue gradient"
→ 결과: 더 단순함 ✅

3차 시도 (Variation):
"minimal lettermark logo CC, geometric, blue to purple gradient, flat design"
→ 결과: Perfect! 🎉
```

#### Alternative: DALL-E 3 (ChatGPT Plus)
```
ChatGPT 프롬프트:

"다음 조건으로 로고를 디자인해줘:
- 제품: [제품명]
- 유형: 레터마크 로고
- 키워드: [키워드 3개]
- 색상: [색상 방향]
- 스타일: 미니멀, 모던, 플랫 디자인
- 배경: 흰색

4개 variation을 생성해줘."
```

---

### Step 3: 로고 선정 (10분)

#### 평가 기준표
```markdown
각 후보에 점수 부여 (1-5점):

| 후보 | 단순함 | 기억성 | 확장성 | 컨셉 일치 | 총점 |
|------|--------|--------|--------|-----------|------|
| A    | __/5   | __/5   | __/5   | __/5      | __/20 |
| B    | __/5   | __/5   | __/5   | __/5      | __/20 |
| C    | __/5   | __/5   | __/5   | __/5      | __/20 |
| D    | __/5   | __/5   | __/5   | __/5      | __/20 |
```

#### 빠른 테스트
```
1. 축소 테스트:
   - 32px로 축소했을 때 식별 가능한가?

2. 흑백 테스트:
   - Grayscale로 변환해도 인지 가능한가?

3. 배경 테스트:
   - 다크 배경에서도 작동하는가?

4. 5초 테스트:
   - 5초 보고 눈 감고 그릴 수 있는가?
```

---

### Step 4: 벡터화 및 정리 (15분)

#### Figma에서 정리

**Option A: Midjourney 이미지 트레이스**
```
1. Figma 새 프로젝트 생성
2. Midjourney 이미지 임포트
3. Pen Tool로 트레이스
4. 심플하게 정리
5. SVG Export
```

**Option B: Vectorizer.ai 사용 (빠름!)**
```
1. https://vectorizer.ai 접속
2. Midjourney 이미지 업로드
3. AI가 자동 벡터화
4. SVG 다운로드
5. Figma에서 색상/디테일 수정
```

**Option C: 직접 재제작 (추천)**
```
Figma에서:
1. Midjourney 이미지를 레퍼런스로
2. Shape Tool로 직접 제작
3. 완벽한 정렬 (pixel-perfect)
4. SVG Export

장점: 가장 깔끔한 결과
```

#### 파일 구조
```
public/images/logo/
├── logo.svg              # 메인 로고 (컬러, 투명 배경)
├── logo-white.svg        # 다크 모드용 (흰색)
├── logo-black.svg        # 라이트 모드용 (검정)
├── logo-512.png          # 큰 이미지용
├── icon.svg              # 아이콘만 (정사각형)
└── favicon/
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── favicon-192x192.png
```

---

### Step 5: 파비콘 생성 (5분)

#### Figma에서 파비콘 만들기
```
1. 로고의 심볼 부분만 추출
2. 192x192 캔버스에 배치
3. 중앙 정렬, 여백 확보
4. Export:
   - 192x192 (고해상도)
   - 32x32 (일반)
   - 16x16 (탭 아이콘)
```

#### Favicon Generator 사용 (더 빠름!)
```
1. https://realfavicongenerator.net 접속
2. 로고 PNG 업로드
3. 옵션 설정:
   - iOS/Android 아이콘
   - Windows 타일
   - Manifest 생성
4. 패키지 다운로드
5. public/ 폴더에 압축 해제
```

#### Next.js에 적용
```typescript
// app/layout.tsx
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}
```

---

## 🎯 실전 예시

### Case Study: Linear 로고

**컨셉:**
- 빠름, 정확함, 아름다움

**로고 디자인:**
- 기하학적 형태
- 퍼플-블루 그라데이션
- 심볼: 추상적인 화살표
- 워드마크: 커스텀 산세리프

**특징:**
- 다크 모드 최적화
- 애니메이션 적용 가능
- 심볼만으로도 인지 가능

**결과:**
→ "가장 아름다운 개발 도구"로 인정받음

---

## 💡 Pro Tips

### 1. 레퍼런스 기반 프롬프트
```
Midjourney에서:

"logo similar to Stripe but more [차별점], [키워드]"

예:
"logo similar to Stripe but more playful, 
geometric shapes, green and blue, minimalist --v 6"
```

### 2. 색상 코드 직접 지정
```
"logo with colors #3B82F6 and #8B5CF6, gradient"

→ Tailwind CSS 색상 그대로 사용 가능!
```

### 3. 여러 Variation 빠르게
```
/imagine [프롬프트] --v 6 --s 250
→ 4개 생성

각각 V 버튼 클릭 → 16개 variation
→ 총 20개 후보 (5분 안에)
```

### 4. 무드보드 활용
```
Figma/Pinterest에 레퍼런스 모음:
- 좋아하는 로고 10개
- 색상 팔레트
- 스타일 키워드

→ Midjourney에 이미지 링크 첨부
```

---

## 🚨 흔한 실수

### ❌ 실수 1: 너무 복잡함
```
증상: 그라데이션 + 그림자 + 테두리 + 패턴

해결:
"더 단순하게" 반복 요청
또는 Figma에서 요소 제거
```

### ❌ 실수 2: 축소 시 못 알아봄
```
증상: 32px에서 뭉개짐

해결:
- 선 굵기 증가
- 디테일 제거
- 여백 확보
```

### ❌ 실수 3: 배경색 의존
```
증상: 흰 배경에서만 작동

해결:
- 테두리 추가 (optional)
- 라이트/다크 버전 별도 제작
```

### ❌ 실수 4: SVG 없이 PNG만
```
증상: 확대 시 깨짐

해결:
- Vectorizer.ai로 벡터화
- 또는 Figma에서 재제작
```

---

## 📚 참고 자료

### AI 도구
- **Midjourney:** 최고 품질, $10/월
- **DALL-E 3:** ChatGPT Plus 포함
- **Stable Diffusion:** 무료, 설정 복잡

### 벡터화 도구
- **Vectorizer.ai:** AI 자동 벡터화
- **Figma:** 무료, 직접 제작
- **Adobe Illustrator:** 유료, 전문가용

### 파비콘 생성
- **RealFaviconGenerator:** 모든 플랫폼 지원
- **Favicon.io:** 간단한 텍스트/이모지 파비콘

### 로고 갤러리
- **LogoLounge:** 트렌드 분석
- **Dribbble:** 로고 디자인 레퍼런스
- **Behance:** 브랜딩 프로젝트

---

## ✅ 완료 기준

**45-60분 타임박스 완료 시:**
- [ ] AI로 로고 4개 생성
- [ ] 최종 1개 선정
- [ ] SVG 파일 확보
- [ ] PNG 512x512 생성
- [ ] 파비콘 3종 생성
- [ ] public/images/logo/ 저장
- [ ] Git commit

**다음 단계:**
→ [Color Palette](../color-palette/) - 로고 색상 기반 팔레트 확장

# Course: Spline 3D 통합 방법

## 📖 Spline이란?

**Figma의 3D 버전**

| Figma | Spline |
|-------|--------|
| 2D 디자인 | 3D 디자인 |
| 드래그 앤 드롭 | 드래그 앤 드롭 |
| Public URL | Public URL |
| iframe 임베드 | iframe 임베드 |

## 🛠️ 통합 3단계

### Step 1: Spline에서 3D 디자인 (3분)

```
1. https://spline.design 접속
2. 템플릿 선택 또는 빈 프로젝트
3. 드래그 앤 드롭으로 3D 오브젝트 추가
4. 애니메이션 추가 (선택)
5. Export → "Get embed code" 클릭
```

**결과:** Public URL 받기
```
https://prod.spline.design/abc123def456/scene.splinecode
```

### Step 2: React/Next.js에 통합 (1분)

**방법 A: iframe (가장 빠름!)**

```jsx
// app/page.tsx
export default function Home() {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://prod.spline.design/abc123def456/scene.splinecode"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
}
```

**방법 B: @splinetool/react-spline (더 많은 제어)**

```bash
npm install @splinetool/react-spline
```

```jsx
'use client';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Spline scene="https://prod.spline.design/abc123def456/scene.splinecode" />
    </div>
  );
}
```

**방법 C: 이벤트 제어 (인터랙티브)**

```jsx
'use client';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

export default function Home() {
  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  function triggerAnimation() {
    spline.current.emitEvent('mouseDown', 'Cube');
  }

  return (
    <>
      <button onClick={triggerAnimation}>
        Trigger 3D Animation
      </button>
      <Spline
        scene="https://prod.spline.design/abc123def456/scene.splinecode"
        onLoad={onLoad}
      />
    </>
  );
}
```

### Step 3: 성능 최적화 (1분)

```jsx
// Lazy loading
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { 
    ssr: false,  // 서버사이드 렌더링 비활성화
    loading: () => <div>Loading 3D...</div>
  }
);
```

## 🎯 실전 예시

### 제품 3D 뷰어

```jsx
// components/Product3D.tsx
'use client';
import Spline from '@splinetool/react-spline';

export function Product3D({ productId }) {
  const splineUrls = {
    'phone': 'https://prod.spline.design/iphone15/scene.splinecode',
    'laptop': 'https://prod.spline.design/macbook/scene.splinecode',
  };

  return (
    <div className="relative w-full h-96">
      <Spline scene={splineUrls[productId]} />
      
      {/* UI 오버레이 */}
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded">
        <h3 className="font-bold">360° 회전해서 보세요</h3>
        <p className="text-sm text-gray-600">드래그로 회전</p>
      </div>
    </div>
  );
}
```

### 랜딩 페이지 히어로

```jsx
// app/page.tsx
export default function Home() {
  return (
    <div className="relative h-screen">
      {/* 3D 배경 */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/hero/scene.splinecode" />
      </div>
      
      {/* 텍스트 오버레이 */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Make people do what they love
          </h1>
          <button className="bg-white text-black px-8 py-4 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
```

## 💡 고급 팁

### 반응형 처리

```jsx
'use client';
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export function ResponsiveSpline({ scene }) {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth < 768 ? '50vh' : '100vh');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height }}>
      <Spline scene={scene} />
    </div>
  );
}
```

### 로딩 상태 처리

```jsx
'use client';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export function SplineWithLoading({ scene }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
            <p>Loading 3D Scene...</p>
          </div>
        </div>
      )}
      
      <Spline 
        scene={scene}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
```

## 🔗 관련 자료

- Spline 공식: https://spline.design
- React 통합 문서: https://docs.spline.design/react
- 예시 갤러리: https://spline.design/community

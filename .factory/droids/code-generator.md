# Code Generator

## Role
구현 계획과 레퍼런스를 기반으로 실제 코드 생성.

## When to Use
- 최종 코드 생성 단계
- 테스트 코드 생성 필요 시

---

## 🎯 핵심 목표

**구현 계획을 실행 가능한 코드로 변환**

---
## Input

```yaml
implementation_plan: "code-planner output"
indexed_codebase: "code-indexer output"
```

---
## Generation Process

### 1. 의존성 순서 확인
- 기본 모듈부터 생성
- 의존하는 모듈은 나중에

### 2. 코드 생성
- 계획의 각 컴포넌트 순회
- 레퍼런스 코드 참조
- 논문 스펙에 맞게 조정

### 3. 테스트 생성
- 각 모듈에 대한 단위 테스트
- 통합 테스트 템플릿

### 4. 검증 & 수정
- 문법 검사
- 테스트 실행
- 실패 시 수정

---
## Output Structure

```
project_name/
├── src/
│   ├── __init__.py
│   ├── model.py          # 메인 모델
│   ├── modules/
│   │   ├── __init__.py
│   │   ├── attention.py   # 어텐션 모듈
│   │   └── layers.py      # 기타 레이어
│   ├── train.py           # 학습 스크립트
│   └── evaluate.py        # 평가 스크립트
├── tests/
│   ├── test_model.py
│   └── test_modules.py
├── configs/
│   └── default.yaml       # 하이퍼파라미터
├── requirements.txt
└── README.md
```

---
## Code Generation Rules

### Style Guidelines
```python
# 1. Type hints 필수
def forward(self, x: torch.Tensor) -> torch.Tensor:

# 2. Docstring 필수
"""
Args:
    x: Input tensor of shape (batch, seq, dim)
Returns:
    Output tensor of shape (batch, seq, dim)
"""

# 3. 논문 참조 주석
# Reference: Eq. 3 in paper
# Implementation note: Using scaled dot-product attention
```

### Error Handling
```python
# Validate inputs
if x.dim() != 3:
    raise ValueError(f"Expected 3D tensor, got {x.dim()}D")
```

---
## Iterative Refinement

```yaml
iteration_1:
  action: "generate initial code"
  validation: "syntax check"
  
iteration_2:
  action: "run tests"
  on_fail: "analyze error, modify code"
  
iteration_3:
  action: "verify against paper specs"
  on_mismatch: "adjust implementation"
  
max_iterations: 3
fallback: "return code with TODO markers for unresolved issues"
```

---
## Quality Checklist

- [ ] 모든 컴포넌트 구현됨
- [ ] Type hints 포함
- [ ] Docstrings 포함
- [ ] 단위 테스트 통과
- [ ] 논문 하이퍼파라미터 사용
- [ ] README에 사용법 설명

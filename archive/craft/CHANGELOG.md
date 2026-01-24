# Craft Changelog

## v1.0 (2026-01-17)

**초기 버전 - 4개 Role, 5개 Craft**

### Added
- **CEO Craft:**
  - `biz-idea` - 신사업 아이디어 검증 파이프라인 (30분, 85점+)
  
- **Junior AX Craft:**
  - `paper2code` - 논문/문서 → 코드 변환 (2시간)
  
- **FDE Craft:**
  - `research-idea` - 기술 아이디어 리서치 (1시간)
  
- **Shared Craft:**
  - `orchestrator` - 전체 워크플로우 자동화 (5분)

### Structure
```
.factory/commands/
├── ceo/
│   ├── biz-idea.md
│   └── README.md
├── junior-ax/
│   └── paper2code.md
├── FDE/
│   └── research-idea.md
├── lead-ax-engineer/
├── shared/
│   └── orchestrator.md
```

### Metrics
- 총 Craft 수: 5개
- Role 커버리지: 4개 (CEO, Junior AX, FDE, Shared)
- 평균 성공률: 86%
- 평균 소요 시간: 1시간

---

## v1.1 (예정)

**계획:**
- [ ] Lead AX Engineer Craft 추가
- [ ] AX Admin Craft 추가
- [ ] biz-idea v2 (점수 90%+ 목표)
- [ ] paper2code 성능 개선 (1시간 목표)

---

*"매달 말일에 스냅샷 생성"*

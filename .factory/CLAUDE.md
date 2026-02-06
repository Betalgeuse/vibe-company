# Project Guidelines

## Database Conventions

모든 DB 작업(테이블 생성, 마이그레이션, 스키마 변경)은 반드시 아래 컨벤션을 따를 것:

- 📖 **Full Guide**: `playbooks/junior-ax/07-infrastructure/database-conventions/course.md`
- ✅ **Checklist**: `playbooks/junior-ax/07-infrastructure/database-conventions/checklist.md`

### Quick Rules
- 테이블명: **복수형**, **snake_case** (`users`, `team_agents`)
- PK: `id BIGINT GENERATED ALWAYS AS IDENTITY`
- FK: `{table_singular}_id` (e.g., `user_id`)
- Boolean: `is_`, `has_`, `can_` prefix + DEFAULT 필수
- Timestamp: `created_at`, `updated_at` 필수
- Index: `idx_{table}_{column}`, Unique: `uniq_{table}_{column}`

## Supabase Project

- **Project**: luerre-ai (`engiuhhwosyypzdesyng`)
- **Region**: ap-northeast-2
- **Schemas**: `public`, `love_practice`, `financial`, `fraud`

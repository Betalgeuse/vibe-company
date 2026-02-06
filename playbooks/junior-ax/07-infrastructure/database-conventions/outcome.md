# Database Conventions (PostgreSQL)

## 🎯 Goal
Maintain **consistent database structure** for readability and maintainability across all projects

## 📊 Success Metrics
- [ ] All tables follow naming conventions
- [ ] Primary/Foreign keys properly defined
- [ ] Indexes created for query performance
- [ ] Lookup tables used for reference data

## 🔧 Core Decisions

### Naming Quick Reference

| Element | Pattern | Example |
|---------|---------|---------|
| Table | `snake_case`, plural | `users`, `team_agents` |
| Column | `snake_case` | `user_id`, `created_at` |
| Primary Key | `id` | `id BIGINT` |
| Foreign Key | `{table_singular}_id` | `user_id`, `team_id` |
| Boolean | `is_`, `has_`, `can_` | `is_active`, `has_permission` |
| Timestamp | `{action}_at` | `created_at`, `updated_at` |
| Index | `idx_{table}_{column}` | `idx_messages_channel_id` |
| Unique | `uniq_{table}_{column}` | `uniq_teams_slug` |
| Lookup Table | `{entity}_{types/statuses}` | `agent_roles`, `task_statuses` |

### Standard Table Template

```sql
CREATE TABLE {entities} (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    -- domain columns
    name VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    -- timestamps (always include)
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

## ✅ Completion Criteria
1. Read full conventions in [course.md](./course.md)
2. Use checklist before creating tables
3. Apply conventions to all new database work

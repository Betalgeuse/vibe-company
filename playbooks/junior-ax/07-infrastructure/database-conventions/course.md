# Database Conventions - Full Guide

## 📚 Overview

This guide defines PostgreSQL database design rules and naming conventions.
Consistent database structure improves code readability and maintainability.

---

## 1. Table Naming

### 1.1 Basic Rules

- **Plural nouns** (`user` ❌ → `users` ✅)
- **snake_case**
- **Clear, descriptive names**
- **Avoid abbreviations**

### 1.2 Table Types

| Type | Pattern | Example |
|------|---------|---------|
| Domain | `{entities}` | `users`, `teams`, `messages` |
| Join | `{entity1}_{entity2}s` | `channel_agents`, `meeting_participants` |
| Lookup | `{entity}_{types/statuses/roles}` | `agent_roles`, `task_statuses` |
| Relation | `{parent}_{child}s` | `team_agents`, `team_members` |
| Embedding | `{entity}_embeddings` | `message_embeddings` |

### 1.3 Examples

```sql
-- ✅ Good
CREATE TABLE users (...);
CREATE TABLE team_agents (...);
CREATE TABLE agent_roles (...);

-- ❌ Bad
CREATE TABLE user (...);              -- singular
CREATE TABLE TeamAgent (...);         -- CamelCase
CREATE TABLE agent_role (...);        -- Lookup should be plural
```

---

## 2. Column Naming

### 2.1 Basic Rules

- **snake_case**
- **Clear, descriptive names**
- **Boolean: `is_`, `has_`, `can_` prefix**

### 2.2 Column Types

| Type | Pattern | Example |
|------|---------|---------|
| Primary Key | `id` | `id` |
| Foreign Key | `{table_singular}_id` | `user_id`, `team_id` |
| Boolean | `is_{adj}`, `has_{noun}` | `is_active`, `has_permission` |
| Timestamp | `{action}_at` | `created_at`, `started_at` |
| JSONB | `{name}_data`, `{name}_details` | `plan_details`, `metadata` |

### 2.3 Example

```sql
-- ✅ Good
CREATE TABLE teams (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id BIGINT NOT NULL,
    name VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ❌ Bad
CREATE TABLE teams (
    teamId BIGINT PRIMARY KEY,           -- camelCase
    teamName VARCHAR(100) NOT NULL,      -- redundant prefix
    active BOOLEAN DEFAULT TRUE,         -- missing is_ prefix
    createdAt TIMESTAMP DEFAULT NOW()    -- camelCase
);
```

---

## 3. Primary Key Rules

### 3.1 Always Use BIGINT

- 64-bit integer (max 9,223,372,036,854,775,807)
- Safer than INT (32-bit)
- Future-proof

### 3.2 Use GENERATED ALWAYS AS IDENTITY

```sql
-- ✅ Good (PostgreSQL 10+)
CREATE TABLE users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    ...
);

-- ❌ Bad
CREATE TABLE users (
    id SERIAL PRIMARY KEY,               -- deprecated
    ...
);
```

### 3.3 UUID Exception

Only for external system integration (e.g., Supabase Auth):

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    auth_id UUID NOT NULL UNIQUE,        -- Supabase Auth integration
    ...
);
```

---

## 4. Foreign Key Rules

### 4.1 Naming

Format: `{referenced_table_singular}_id`

```sql
-- ✅ Good
CREATE TABLE team_agents (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    team_id BIGINT NOT NULL REFERENCES teams(id),
    role_id BIGINT NOT NULL REFERENCES agent_roles(id),
    ...
);

-- ❌ Bad
CREATE TABLE team_agents (
    team BIGINT NOT NULL REFERENCES teams(id),          -- missing _id
    agentRoleId BIGINT NOT NULL REFERENCES agent_roles(id),  -- camelCase
    ...
);
```

### 4.2 CASCADE Rules

| Situation | Rule | Use Case |
|-----------|------|----------|
| Delete children with parent | `ON DELETE CASCADE` | team_agents → teams |
| Prevent parent deletion | `ON DELETE RESTRICT` | default behavior |
| Set NULL on parent delete | `ON DELETE SET NULL` | optional relations |

```sql
-- Team deletion cascades to team_agents
CREATE TABLE team_agents (
    team_id BIGINT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    ...
);
```

---

## 5. Index Naming

### 5.1 Patterns

| Type | Pattern | Example |
|------|---------|---------|
| Single column | `idx_{table}_{column}` | `idx_messages_channel_id` |
| Composite | `idx_{table}_{col1}_{col2}` | `idx_dm_team_user_agent` |
| Unique | `uniq_{table}_{column}` | `uniq_teams_slug` |
| Partial | `idx_{table}_{col}_where_{cond}` | `idx_messages_user_where_not_null` |

### 5.2 Examples

```sql
-- ✅ Good
CREATE INDEX idx_messages_channel_id ON messages(channel_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_messages_sender_user_id ON messages(sender_user_id) 
    WHERE sender_user_id IS NOT NULL;

-- ❌ Bad
CREATE INDEX messages_channel_id ON messages(channel_id);  -- no prefix
CREATE INDEX idx_msgs_ch ON messages(channel_id);          -- abbreviation
```

---

## 6. Lookup Table Pattern

### 6.1 Structure

```sql
CREATE TABLE {entity}_{types/statuses/roles} (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    code VARCHAR(30) NOT NULL UNIQUE,    -- UPPER_SNAKE_CASE
    name VARCHAR(50) NOT NULL,           -- Display name
    description TEXT,                    -- Optional
    display_order SMALLINT DEFAULT 0     -- Sort order
);
```

### 6.2 Example

```sql
CREATE TABLE task_statuses (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    code VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    display_order SMALLINT DEFAULT 0
);

INSERT INTO task_statuses (code, name, display_order) VALUES
('PENDING', 'Pending', 1),
('IN_PROGRESS', 'In Progress', 2),
('COMPLETED', 'Completed', 3),
('CANCELLED', 'Cancelled', 4);
```

### 6.3 Code Column Rules

- **UPPER_SNAKE_CASE** (`CEO`, `IN_PROGRESS`)
- **Clear and descriptive**
- **Immutable** (changing requires migration)

---

## 7. Timestamp Rules

### 7.1 Standard Timestamps

Always include in domain tables:

```sql
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW()
```

### 7.2 Additional Timestamps

| Column | Purpose | Example Tables |
|--------|---------|----------------|
| `started_at` | Start time | meetings, tasks |
| `ended_at` | End time | meetings |
| `completed_at` | Completion | tasks, items |
| `approved_at` | Approval | tasks |
| `scheduled_at` | Scheduled | meetings |

---

## 8. Boolean Rules

### 8.1 Naming

| Pattern | Meaning | Example |
|---------|---------|---------|
| `is_{adjective}` | State | `is_active`, `is_default` |
| `has_{noun}` | Ownership | `has_permission`, `has_avatar` |
| `can_{verb}` | Permission | `can_edit`, `can_delete` |

### 8.2 Always Set Default

```sql
-- ✅ Good
is_active BOOLEAN DEFAULT TRUE
is_read BOOLEAN DEFAULT FALSE

-- ❌ Bad
is_active BOOLEAN                        -- no default
```

---

## 9. Constraints

### 9.1 Check Constraint

```sql
CREATE TABLE messages (
    sender_user_id BIGINT REFERENCES users(id),
    sender_agent_id BIGINT REFERENCES team_agents(id),
    
    -- Sender is either user OR agent, not both
    CONSTRAINT chk_message_sender CHECK (
        (sender_user_id IS NOT NULL AND sender_agent_id IS NULL) OR
        (sender_user_id IS NULL AND sender_agent_id IS NOT NULL)
    )
);
```

### 9.2 Unique Constraint

```sql
CREATE TABLE teams (
    slug VARCHAR(50) NOT NULL,
    CONSTRAINT uniq_teams_slug UNIQUE (slug)
);

CREATE TABLE team_agents (
    team_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    CONSTRAINT uniq_team_agents_team_role UNIQUE (team_id, role_id)
);
```

---

## 10. Vector Embeddings (pgvector)

### 10.1 Separate Table

```sql
-- Original table
CREATE TABLE messages (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    content TEXT NOT NULL
);

-- Embedding table (1:1)
CREATE TABLE message_embeddings (
    message_id BIGINT PRIMARY KEY REFERENCES messages(id) ON DELETE CASCADE,
    embedding VECTOR(1536) NOT NULL       -- OpenAI dimension
);

CREATE INDEX idx_message_embeddings_vector 
ON message_embeddings 
USING ivfflat (embedding vector_cosine_ops);
```

---

## 11. Migration Order

1. **Lookup tables** first
2. **Domain tables** (with FK references)
3. **Join tables**
4. **Indexes**
5. **Seed data**

```
migrations/
├── 001_create_lookup_tables.sql
├── 002_create_domain_tables.sql
├── 003_create_join_tables.sql
├── 004_create_indexes.sql
└── 005_seed_data.sql
```

---

## 12. Performance Tips

### Index Strategy

| Situation | Index Type |
|-----------|------------|
| FK lookups | B-tree |
| Sorting/range | B-tree |
| Vector similarity | IVFFlat |
| JSONB/text search | GIN |

```sql
-- FK index
CREATE INDEX idx_messages_channel_id ON messages(channel_id);

-- Sort index
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);

-- Partial index
CREATE INDEX idx_messages_sender_user_id 
ON messages(sender_user_id) 
WHERE sender_user_id IS NOT NULL;

-- JSONB GIN index
CREATE INDEX idx_tasks_plan_details 
ON tasks USING GIN (plan_details);
```

---

## 📚 Quick Reference

### ✅ Always Do

- Plural table names (`users`, not `user`)
- snake_case everywhere
- `BIGINT GENERATED ALWAYS AS IDENTITY` for PK
- `{table}_id` for FK
- `is_`, `has_`, `can_` for booleans
- `created_at`, `updated_at` timestamps
- `idx_`, `uniq_` prefixes for indexes
- Default values for booleans

### ❌ Never Do

- Singular table names
- camelCase or PascalCase
- `SERIAL` for PK
- Abbreviations in names
- Booleans without prefix
- Booleans without default
- Indexes without prefix

---

*Adapted from Cofoundos Database Conventions v1.0*

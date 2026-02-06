# Database Conventions Checklist

## ✅ Before Creating a Table

### Naming
- [ ] Table name is **plural** and **snake_case** (`users` ✅, `user` ❌)
- [ ] Column names are **snake_case** (`user_id` ✅, `userId` ❌)
- [ ] Boolean columns have `is_`, `has_`, or `can_` prefix
- [ ] Timestamp columns end with `_at`

### Primary Key
- [ ] Using `BIGINT` (not INT or SERIAL)
- [ ] Using `GENERATED ALWAYS AS IDENTITY`
- [ ] Column named `id`

### Foreign Keys
- [ ] Named as `{table_singular}_id`
- [ ] `REFERENCES` clause included
- [ ] `ON DELETE` behavior specified (CASCADE/RESTRICT/SET NULL)

### Timestamps
- [ ] `created_at TIMESTAMP DEFAULT NOW()` included
- [ ] `updated_at TIMESTAMP DEFAULT NOW()` included

### Booleans
- [ ] Default value specified (`DEFAULT TRUE` or `DEFAULT FALSE`)

---

## ✅ Before Creating an Index

- [ ] Index name follows `idx_{table}_{column}` pattern
- [ ] Unique index follows `uniq_{table}_{column}` pattern
- [ ] FK columns have indexes
- [ ] Frequently queried columns have indexes
- [ ] Partial index used where appropriate (WHERE clause)

---

## ✅ Lookup Table Checklist

- [ ] Table name: `{entity}_{types/statuses/roles}`
- [ ] Has `code VARCHAR(30) NOT NULL UNIQUE`
- [ ] Has `name VARCHAR(50) NOT NULL`
- [ ] Has `display_order SMALLINT DEFAULT 0`
- [ ] Code values are UPPER_SNAKE_CASE

---

## ✅ Quick Examples

### ✅ Good Table
```sql
CREATE TABLE teams (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT uniq_teams_slug UNIQUE (slug)
);

CREATE INDEX idx_teams_user_id ON teams(user_id);
```

### ❌ Bad Table
```sql
CREATE TABLE team (                          -- singular
    teamId SERIAL PRIMARY KEY,               -- camelCase, SERIAL
    userId INT NOT NULL,                     -- camelCase, INT
    teamName VARCHAR(100) NOT NULL,          -- redundant prefix
    active BOOLEAN,                          -- no is_ prefix, no default
    createdAt TIMESTAMP                      -- camelCase, no default
);
```

---

## 🚨 Common Mistakes

| Mistake | Fix |
|---------|-----|
| `CREATE TABLE user` | `CREATE TABLE users` (plural) |
| `userId BIGINT` | `user_id BIGINT` (snake_case) |
| `id SERIAL` | `id BIGINT GENERATED ALWAYS AS IDENTITY` |
| `active BOOLEAN` | `is_active BOOLEAN DEFAULT TRUE` |
| `REFERENCES users` | `REFERENCES users(id) ON DELETE CASCADE` |

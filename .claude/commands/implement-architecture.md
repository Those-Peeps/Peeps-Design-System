---
description: Implement the three-layer design language architecture (Phase 2)
---

# Implement Architecture - Phase 2

## Context

Read the design-language skill: `.claude/skills/design-language/SKILL.md`
Read the m3-tokens skill: `.claude/skills/m3-tokens/SKILL.md`
Read the full PRD: `docs/peeps-design-system-prd.md`

## Tasks

### 1. Create the contract

`src/contracts/design-language.contract.ts`
- DesignLanguageContract interface
- All type definitions from PRD

### 2. Create Peeps language implementation

`src/languages/peeps.language.ts`
- Implement DesignLanguageContract
- Use exact values from `docs/material-theme.json`
- Include both `semantic` (light) and `semanticDark`

### 3. Create transform function

`src/languages/transform.ts`
- `transformToPandaTheme(language)` function
- Returns `{ tokens, semanticTokens, textStyles }`
- Handle light/dark with `base` + `_dark` pattern

### 4. Create barrel export

`src/languages/index.ts`
- Export `peepsLanguage as activeLanguage`
- Export `transformToPandaTheme`

### 5. Update panda.config.ts

- Import from `./src/languages`
- Use `transformToPandaTheme(activeLanguage)` for theme

## Validation

```bash
pnpm build:panda
```

Check `styled-system/tokens/` has Peeps colors.

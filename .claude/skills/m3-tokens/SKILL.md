---
name: m3-tokens
description: Peeps color system based on Material Design 3, semantic tokens, and theme values from the project's Material Theme Builder export
---

# Peeps Token System (M3 Based)

## When to Use This Skill

- Implementing semantic color tokens
- Setting up light/dark theme switching
- Understanding M3 color roles
- Referencing the project's actual color values

## Source of Truth

All colors come from `docs/material-theme.json`, exported from Material Theme Builder.

**Peeps Brand Palette:**

| Color | Hex | Role |
|-------|-----|------|
| Deep Purple | #201E59 | Primary - brand identity |
| Cyan | #00D4FF | Secondary - accents, highlights |
| Golden Yellow | #F2CE1B | Tertiary - CTAs, actions |
| Orange | #F27405 | Warning states |
| Red-Orange | #F23005 | Error states |

## Key Color Values

### Light Theme (schemes.light)

```json
{
  "primary": "#4B4588",
  "onPrimary": "#FFFFFF",
  "primaryContainer": "#E2DFFF",
  "onPrimaryContainer": "#342E73",
  
  "secondary": "#006874",
  "onSecondary": "#FFFFFF",
  "secondaryContainer": "#97F0FF",
  "onSecondaryContainer": "#004F59",
  
  "tertiary": "#775A00",
  "onTertiary": "#FFFFFF",
  "tertiaryContainer": "#FFDF99",
  "onTertiaryContainer": "#5C4300",
  
  "surface": "#FEFBFF",
  "onSurface": "#1B1B1F",
  "surfaceVariant": "#E4E1EC",
  "onSurfaceVariant": "#47464F",
  
  "surfaceContainerLowest": "#FFFFFF",
  "surfaceContainerLow": "#F6F2F7",
  "surfaceContainer": "#F0ECF1",
  "surfaceContainerHigh": "#EAE7EC",
  "surfaceContainerHighest": "#E5E1E6",
  
  "outline": "#787680",
  "outlineVariant": "#C8C5D0",
  
  "error": "#BA1A1A",
  "onError": "#FFFFFF",
  "errorContainer": "#FFDAD6",
  "onErrorContainer": "#93000A"
}
```

### Dark Theme (schemes.dark)

```json
{
  "primary": "#C4C0FF",
  "onPrimary": "#2A2670",
  "primaryContainer": "#413B7F",
  "onPrimaryContainer": "#E2DFFF",
  
  "secondary": "#4FD8EB",
  "onSecondary": "#00363D",
  "secondaryContainer": "#004F59",
  "onSecondaryContainer": "#97F0FF",
  
  "tertiary": "#EEC02C",
  "onTertiary": "#3F2E00",
  "tertiaryContainer": "#5C4300",
  "onTertiaryContainer": "#FFDF99",
  
  "surface": "#1B1B1F",
  "onSurface": "#E5E1E6",
  "surfaceVariant": "#47464F",
  "onSurfaceVariant": "#C8C5D0",
  
  "surfaceContainerLowest": "#0F0F13",
  "surfaceContainerLow": "#1B1B1F",
  "surfaceContainer": "#201F23",
  "surfaceContainerHigh": "#2A292D",
  "surfaceContainerHighest": "#353438",
  
  "outline": "#918F99",
  "outlineVariant": "#47464F",
  
  "error": "#FFB4AB",
  "onError": "#690005",
  "errorContainer": "#93000A",
  "onErrorContainer": "#FFDAD6"
}
```

## Semantic Token Pattern in Panda CSS

```typescript
// In transform.ts or panda.config.ts

semanticTokens: {
  colors: {
    primary: {
      value: { base: '#4B4588', _dark: '#C4C0FF' }
    },
    onPrimary: {
      value: { base: '#FFFFFF', _dark: '#2A2670' }
    },
    surface: {
      value: { base: '#FEFBFF', _dark: '#1B1B1F' }
    },
    onSurface: {
      value: { base: '#1B1B1F', _dark: '#E5E1E6' }
    },
    // ... all semantic colors
  }
}
```

## Using Semantic Tokens in Recipes

```typescript
// Always use semantic names, never raw hex values
buttonRecipe = defineRecipe({
  variants: {
    variant: {
      filled: {
        bg: 'primary',           // ✅ Semantic
        color: 'onPrimary',      // ✅ Semantic
        // bg: '#201E59',        // ❌ Raw hex
      },
    },
  },
});
```

## Dark Mode Activation

```html
<!-- In HTML -->
<html data-theme="dark">

<!-- Or via class -->
<html class="dark">
```

```typescript
// In panda.config.ts conditions
conditions: {
  light: '[data-theme=light] &, .light &',
  dark: '[data-theme=dark] &, .dark &'
}
```

## M3 Color Role Usage Guide

| Role | Use For |
|------|---------|
| `primary` | Main action buttons, FABs, active states |
| `onPrimary` | Text/icons on primary color |
| `primaryContainer` | Less prominent primary elements |
| `secondary` | Secondary actions, less emphasis |
| `tertiary` | Accent, complementary elements |
| `surface` | Card backgrounds, sheets |
| `surfaceContainer*` | Elevated surfaces at different levels |
| `outline` | Borders, dividers |
| `error` | Error states, destructive actions |

## Files to Reference

- `docs/material-theme.json` - Complete export with all palettes
- `src/languages/peeps.language.ts` - Implementation (once created)

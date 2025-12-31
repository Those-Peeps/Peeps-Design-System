---
name: design-language
description: Three-layer aesthetic-agnostic architecture for swappable design systems
---

# Design Language Architecture

## When to Use This Skill

- Creating or modifying the contract interface
- Implementing a new design language (e.g., adding Fluent, Carbon)
- Understanding how tokens flow from language → Panda CSS
- Debugging theme/token issues

## The Three Layers

```
┌─────────────────────────────────────────────────────────┐
│ Layer 1: INFRASTRUCTURE (Never Changes)                │
├─────────────────────────────────────────────────────────┤
│ src/contracts/design-language.contract.ts              │
│ - DesignLanguageContract interface                     │
│ - ColorPalettes, SemanticColors types                  │
│ - Typography, Spacing, Shape, Elevation, Motion types  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ Layer 2: DESIGN LANGUAGE (Swappable)                   │
├─────────────────────────────────────────────────────────┤
│ src/languages/peeps.language.ts                        │
│ - Implements DesignLanguageContract                    │
│ - Contains actual token values from Peeps theme        │
│ - Defines semantic + semanticDark for theming          │
│                                                        │
│ src/languages/index.ts                                 │
│ - export { peepsLanguage as activeLanguage }           │
│ - CHANGE THIS ONE LINE to swap aesthetics              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ Layer 3: TRANSFORM → PANDA CSS                         │
├─────────────────────────────────────────────────────────┤
│ src/languages/transform.ts                             │
│ - transformToPandaTheme(language) function             │
│ - Returns { tokens, semanticTokens, textStyles }       │
│ - Used in panda.config.ts                              │
└─────────────────────────────────────────────────────────┘
```

## Contract Interface (Key Types)

```typescript
// src/contracts/design-language.contract.ts

export interface DesignLanguageContract {
  name: string;
  version: string;
  colors: ColorPalettes;        // Tonal palettes (0-100)
  semantic: SemanticColors;     // Light theme semantic tokens
  semanticDark?: SemanticColors; // Dark theme overrides
  typography: TypographyConfig;
  spacing: SpacingScale;
  shape: ShapeConfig;
  elevation: ElevationConfig;
  motion: MotionConfig;
}

export interface SemanticColors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  // ... all M3 semantic colors
  surface: string;
  onSurface: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
}
```

## Language Implementation Pattern

```typescript
// src/languages/peeps.language.ts

import type { DesignLanguageContract } from '../contracts/design-language.contract';

export const peepsLanguage: DesignLanguageContract = {
  name: 'Peeps Design Language',
  version: '1.0.0',
  
  colors: {
    primary: {
      0: '#000000',
      10: '#0D0C24',
      // ... from docs/material-theme.json palettes
      100: '#FFFFFF',
    },
    // secondary, tertiary, neutral, neutralVariant, error
  },
  
  semantic: {
    // Light theme - from docs/material-theme.json schemes.light
    primary: '#201E59',
    onPrimary: '#FFFFFF',
    surface: '#FEFBFF',
    onSurface: '#1B1B1F',
    // ...
  },
  
  semanticDark: {
    // Dark theme - from docs/material-theme.json schemes.dark
    primary: '#C4C0FF',
    onPrimary: '#2A2670',
    surface: '#1B1B1F',
    onSurface: '#E4E1E6',
    // ...
  },
  
  typography: { /* type scale */ },
  spacing: { /* spacing */ },
  shape: { /* shape scale */ },
  elevation: { /* elevation */ },
  motion: { /* motion */ },
};
```

## Transform Pattern

```typescript
// src/languages/transform.ts

import type { DesignLanguageContract } from '../contracts/design-language.contract';

export function transformToPandaTheme(language: DesignLanguageContract) {
  return {
    tokens: {
      colors: flattenPalettes(language.colors),
      fonts: {
        display: { value: language.typography.fonts.display },
        body: { value: language.typography.fonts.body },
      },
      // spacing, radii, shadows...
    },
    
    semanticTokens: {
      colors: Object.fromEntries(
        Object.entries(language.semantic).map(([key, value]) => [
          key,
          {
            value: {
              base: value,
              _dark: language.semanticDark?.[key] ?? value,
            },
          },
        ])
      ),
    },
    
    textStyles: transformTypography(language.typography.scale),
  };
}
```

## Files to Reference

- `docs/peeps-design-system-prd.md` - Full contract interface definition
- `docs/material-theme.json` - Peeps color values from Material Theme Builder

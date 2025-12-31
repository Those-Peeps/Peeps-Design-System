# @those-people/peeps-design-system

[![CI](https://github.com/Those-Peeps/Peeps-Design-System/actions/workflows/ci.yml/badge.svg)](https://github.com/Those-Peeps/Peeps-Design-System/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@those-people%2Fpeeps-design-system.svg)](https://www.npmjs.com/package/@those-people/peeps-design-system)

An aesthetic-agnostic design system built with Panda CSS and Ark UI. **Swap design languages by changing a single import.**

## ✨ Features

- 🎨 **Swappable Aesthetics** - Material Design 3 by default, but change the entire look with one import
- 🎯 **Zero Runtime CSS** - SSR-safe with Panda CSS
- ♿ **Accessible** - WAI-ARIA compliant via Ark UI
- 📦 **Tree-shakeable** - Only import what you need
- 🌙 **Dark Mode** - Built-in light/dark theme support
- 🔒 **Type-safe** - Full TypeScript support with strict mode
- ⚡ **Fast** - Optimized builds with code splitting

## 🚀 Technologies

- **Panda CSS** - Zero-runtime CSS-in-JS with token-first architecture
- **Ark UI** - Headless, accessible React components
- **React 19** - Latest React with Server Components support
- **TypeScript** - Strict type safety
- **Material Design 3** - Default design language (Peeps vibrant palette: Blue #5C9DF2, Yellow #F2E205, Orange #F29F05)
- **Storybook 8** - Component documentation
- **Vitest** - Unit testing with comprehensive coverage
- **tsup** - Build tool for ESM/CJS output

## 📦 Installation

```bash
npm install @those-people/peeps-design-system
# or
pnpm add @those-people/peeps-design-system
# or
yarn add @those-people/peeps-design-system
```

## 🎯 Quick Start

```tsx
import { Button, Card, IconButton } from '@those-people/peeps-design-system';
import '@those-people/peeps-design-system/styled-system';

function App() {
  return (
    <Card variant="elevated">
      <h2>Welcome to Peeps Design System</h2>
      <p>An aesthetic-agnostic design system</p>
      <Button variant="filled" size="md">
        Get Started
      </Button>
      <IconButton variant="tonal" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
    </Card>
  );
}
```

## 📖 Components

### Button

Material Design 3 button with 5 variants and 3 sizes.

```tsx
import { Button } from '@those-people/peeps-design-system';

<Button variant="filled" size="md" leftIcon={<Icon />}>
  Click me
</Button>
```

**Variants:** `filled` | `outlined` | `text` | `elevated` | `tonal`
**Sizes:** `sm` | `md` | `lg`

### Card

Container component with 3 variants and optional interactive state.

```tsx
import { Card } from '@those-people/peeps-design-system';

<Card variant="elevated" interactive>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Variants:** `elevated` | `filled` | `outlined`
**Interactive:** `true` | `false` (adds hover/click states)

### Dialog

Modal dialog component with customizable header, content, and actions.

```tsx
import { Dialog } from '@those-people/peeps-design-system';

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>Open Dialog</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>Dialog Title</Dialog.Header>
    <Dialog.Body>Dialog content goes here</Dialog.Body>
    <Dialog.Actions>
      <Button variant="text">Cancel</Button>
      <Button variant="filled">Confirm</Button>
    </Dialog.Actions>
  </Dialog.Content>
</Dialog>
```

### IconButton

Icon-only button with 4 variants and 3 sizes. Requires `aria-label` for accessibility.

```tsx
import { IconButton } from '@those-people/peeps-design-system';

<IconButton variant="filled" size="md" aria-label="Settings">
  <SettingsIcon />
</IconButton>
```

**Variants:** `standard` | `filled` | `tonal` | `outlined`
**Sizes:** `sm` | `md` | `lg`

### Input

Form input component with label and error state support.

```tsx
import { Input } from '@those-people/peeps-design-system';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email address"
/>
```

### Switch

Toggle switch component for binary choices.

```tsx
import { Switch } from '@those-people/peeps-design-system';

<Switch checked={enabled} onCheckedChange={setEnabled}>
  Enable notifications
</Switch>
```

## 🎨 Three-Layer Architecture

This design system uses an aesthetic-agnostic architecture:

```
Layer 1: Infrastructure (Unchanging)
├── Token pipeline
├── Build system (tsup, Storybook)
├── Component logic (Ark UI)
└── Type contracts

Layer 2: Design Language (Swappable)
├── Token values (colors, spacing, radii)
├── Semantic mappings
└── Motion patterns

Layer 3: Component Recipes (Derived)
├── Visual styling via Panda recipes
└── Variant definitions
```

### Swapping Design Languages

To change from Material 3 to another design language:

1. Create your language file (e.g., `fluent.language.ts`)
2. Update `src/languages/index.ts`:

```typescript
// Change this import to swap the entire aesthetic
export { fluentLanguage as activeLanguage } from './fluent.language';
```

3. Rebuild: `pnpm build:panda`

## 🎨 Peeps Color Palette

The Peeps design system uses a vibrant color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | #5C9DF2 | Primary actions, links, highlights |
| Yellow | #F2E205 | Secondary actions, warnings |
| Orange | #F29F05 | Tertiary accents, notifications |
| Red | #F20505 | Errors, destructive actions |
| Golden Orange | #F2B705 | Success states, confirmations |

All colors are implemented using Material Design 3's tonal palette system with WCAG AA accessibility compliance.

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm dev

# Run tests
pnpm test

# Type check
pnpm typecheck

# Build
pnpm build
```

## 🧪 Testing

The design system has comprehensive test coverage:

```bash
pnpm test          # Run tests in watch mode
pnpm test --run    # Run tests once
pnpm test --ui     # Open Vitest UI
```

**Test Coverage:**
- Unit tests for all 6 components
- Accessibility tests (jest-axe)
- 100% of components have tests

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Storybook on port 6006 |
| `pnpm build` | Build library (Panda + tsup) |
| `pnpm build:panda` | Generate styled-system |
| `pnpm build:lib` | Build library only |
| `pnpm build:storybook` | Build static Storybook |
| `pnpm test` | Run tests |
| `pnpm test:ui` | Open Vitest UI |
| `pnpm typecheck` | TypeScript validation |
| `pnpm lint` | ESLint |

## 🤝 Contributing

### Development Workflow

**⚠️ IMPORTANT: We use Changesets for version management. Never manually edit the version in `package.json`.**

#### For Team Members (Write Access)

1. **Create a feature branch from `main`:**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/my-feature  # or fix/bug-name, docs/readme-update
   ```

2. **Make your changes and test:**
   ```bash
   pnpm test --run      # Run tests
   pnpm typecheck       # Type check
   pnpm lint            # Lint code
   pnpm build           # Build package
   ```

3. **Create a changeset** (required for any code changes):
   ```bash
   pnpm changeset
   # Select change type:
   # - patch: Bug fixes (0.1.1 → 0.1.2)
   # - minor: New features (0.1.1 → 0.2.0)
   # - major: Breaking changes (0.1.1 → 1.0.0)
   # Write a brief summary of your changes
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   git push -u origin feature/my-feature
   ```

5. **Open a Pull Request to `main`:**
   - CI will run automatically (lint, test, typecheck, build)
   - Address any CI failures
   - Wait for review (if required)

6. **After your PR is merged:**
   - Changesets bot creates/updates a "Version Packages" PR automatically
   - When "Version Packages" PR is merged → package publishes to npm automatically via OIDC

#### For External Contributors (No Write Access)

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Peeps-Design-System.git
   ```

3. **Follow steps 1-5 above** (feature branch, changeset, commit)
4. **Open a Pull Request** from your fork to our `main` branch
5. **Wait for maintainer review** - we'll review and merge if approved

### Branch Protection

- ✅ `main` is protected - all changes require Pull Requests
- ✅ CI must pass before merging (lint, test, typecheck, build)
- ✅ Only maintainers can merge to `main`
- ✅ Releases only happen from `main` via automated workflow

### Release Process (Automated)

**You don't manually publish!** Our CI/CD handles it:

1. **Changesets accumulate** - Multiple PRs can add changesets
2. **"Version Packages" PR** - Created automatically when changesets exist
3. **Review changelog** - Check the auto-generated CHANGELOG.md
4. **Merge "Version Packages" PR** - Triggers automatic npm publish via OIDC
5. **Published!** - Package is live on npm with provenance

### What NOT to Do

❌ Don't manually edit version in `package.json` - use `pnpm changeset`
❌ Don't push directly to `main` - use Pull Requests
❌ Don't merge without CI passing - wait for checks
❌ Don't skip changesets - required for tracking changes
❌ Don't manually run `npm publish` - CI handles it

### Questions?

- See [`.claude/skills/npm-oidc-publishing/SKILL.md`](.claude/skills/npm-oidc-publishing/SKILL.md) for OIDC setup details
- See [`.github/PUBLISHING.md`](.github/PUBLISHING.md) for publishing documentation
- Ask in Discussions or open an Issue

## 📄 License

Apache-2.0 © Those People Agency

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@those-people/peeps-design-system)
- [GitHub Repository](https://github.com/Those-Peeps/Peeps-Design-System)
- [Storybook Documentation](https://those-peeps.github.io/Peeps-Design-System/) (coming soon)

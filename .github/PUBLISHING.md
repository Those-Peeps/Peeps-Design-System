# Publishing Guide

This package uses [Changesets](https://github.com/changesets/changesets) with GitHub Actions for automated npm publishing.

## Setup (One-time)

### 1. Configure npm Trusted Publishing (No tokens needed!)

This package uses npm's **Trusted Publishing with OIDC** - no npm tokens required in GitHub secrets!

**If publishing for the first time**, you'll need to configure trusted publishing on npm:

1. Publish the first version manually (one-time only):
   ```bash
   # Option 1: With OTP if you have 2FA set up
   npm publish --access public --otp=123456

   # Option 2: Or use a temporary token once
   ```

2. After the first publish, npm will recognize GitHub Actions from your repository

3. All future releases happen automatically via GitHub Actions with provenance!

### 2. Enable GitHub Actions

Make sure GitHub Actions are enabled in your repository settings.

## How It Works

### Creating a Release

1. **Make your changes** and commit them to a feature branch

2. **Create a changeset** describing what changed:
   ```bash
   pnpm changeset
   ```
   - Select the type of change (patch/minor/major)
   - Describe the changes for the changelog
   - Commit the changeset file

3. **Push and create a PR**:
   ```bash
   git push origin your-branch
   ```
   - Create a pull request to `main`

4. **Merge the PR**:
   - When merged, GitHub Actions will create a "Version Packages" PR
   - This PR updates version numbers and changelogs

5. **Merge the Version PR**:
   - When you merge the "Version Packages" PR, GitHub Actions will:
     - Build the package
     - Publish to npm automatically
     - Create a GitHub release

## Manual Publishing (Emergency)

If you need to publish manually:

```bash
# 1. Build
pnpm build

# 2. Publish (requires OTP code from authenticator app)
npm publish --access public --otp=123456
```

## Changeset Types

- **patch** (0.1.0 → 0.1.1): Bug fixes, small changes
- **minor** (0.1.0 → 0.2.0): New features, backwards compatible
- **major** (0.1.0 → 1.0.0): Breaking changes

## Example Workflow

```bash
# Feature branch
git checkout -b feat/add-tooltip-component

# Make changes
# ... add Tooltip component ...

# Create changeset
pnpm changeset
# Choose: minor
# Summary: "Add Tooltip component with Material Design 3 styling"

# Commit and push
git add .
git commit -m "feat: add Tooltip component"
git push origin feat/add-tooltip-component

# Create PR, get approved, merge

# GitHub Actions will:
# 1. Create "Version Packages" PR (0.1.0 → 0.2.0)
# 2. When merged → publish @those-people/peeps-design-system@0.2.0 to npm
```

## Troubleshooting

### "Permission denied" or "401 Unauthorized"
- Make sure the package has been published at least once manually
- Check that GitHub Actions has `id-token: write` permission (already configured)
- Verify the repository URL in package.json matches your GitHub repo

### "EOTP required"
- This happens on first publish if you have 2FA enabled
- Use your authenticator app code: `npm publish --access public --otp=123456`
- After the first manual publish, GitHub Actions will handle it automatically

### Workflow not triggering
- Make sure you've pushed to the `main` branch
- Check that GitHub Actions are enabled in repository settings
- Verify the workflow file is in `.github/workflows/release.yml`

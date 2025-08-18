# Storybook Visual Test (Vue 3 + TypeScript + Vite)

This project uses Storybook and Chromatic for visual regression testing. To keep secrets safe and maintainable, the Chromatic project token is read from an environment variable instead of being hardcoded.

## Getting Started

- Install dependencies: `npm install`
- Start Storybook: `npm run storybook`

## Chromatic Setup (no hardcoded tokens)

Chromatic requires a project token. Set it using the environment variable `CHROMATIC_PROJECT_TOKEN`.

1) Local development

- Copy `.env.example` to `.env`
- Fill in your token from Chromatic project settings

Example `.env`:

```bash
CHROMATIC_PROJECT_TOKEN=chpt_XXXXXXXXXXXXXXXX
```

Run Chromatic locally:

```bash
npm run chromatic
```

1) CI setup

- GitHub Actions: add a repository secret named `CHROMATIC_PROJECT_TOKEN` and ensure your workflow exports it in the environment before running `npm run chromatic`.
- GitLab CI: add a CI/CD variable `CHROMATIC_PROJECT_TOKEN` and make it available to the job running Chromatic.
- Other CI: set the environment variable in your CI provider's settings.

The npm script `chromatic` now resolves the token from the environment and does not expose it in source control.

## Scripts

- `dev`: Vite dev server
- `build`: Type checking + Vite build
- `preview`: Preview production build
- `storybook`: Run Storybook on port 6006
- `build-storybook`: Build static Storybook site
- `chromatic`: Publish Storybook to Chromatic (uses CHROMATIC_PROJECT_TOKEN)

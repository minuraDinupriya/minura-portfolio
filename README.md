# Minura Ranaweera | Software Engineering Portfolio

A portfolio for software engineering and full-stack internship applications in Sri Lanka from January 2027. Visitors can read project case studies, explore skills and experience, download a résumé, and get in touch.

**Status:** The current build is a functional preview of the content and navigation. The Figma visual implementation and motion are pending access to the Make export. There is no published site URL.

## Design source

[Build Minura’s Engineering Portfolio in Figma Make](https://www.figma.com/make/uRxWP3ae3vYJduuAduAn9J/Build-Minura%E2%80%99s-Engineering-Portfolio?t=1z8tp2yNTJier8vr-1) is the visual source of truth. The [design implementation notes](docs/design-implementation.md) explain what was accessible and how to verify the eventual port.

## Run locally

Use Node.js 24 and npm. The repository commits its npm lockfile.

```sh
npm ci
npm run dev
```

Open the local address Vite prints. There are no environment variables, database setup steps, or development credentials.

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the Vite development server        |
| `npm run build`        | Type-check and build the site to `dist/` |
| `npm run preview`      | Serve the built site locally             |
| `npm run lint`         | Run ESLint                               |
| `npm run typecheck`    | Check TypeScript without emitting code   |
| `npm run format:check` | Verify formatting                        |
| `npm run format`       | Apply Prettier formatting                |
| `npm test`             | Run Vitest unit and component tests      |
| `npm run test:watch`   | Run Vitest in watch mode                 |
| `npm run test:e2e`     | Run Playwright browser tests             |

For browser tests, run `npx playwright install chromium` once, then `npm run build` and `npm run test:e2e`. See the [testing strategy](docs/testing-strategy.md) for coverage and manual review.

## Architecture

The app uses React, strict TypeScript, Vite, React Router, and plain CSS. The portfolio reads its content from typed local modules and runs as a static site. Each feature owns its local state: a visitor’s skills selection and open menu do not require a global store. Project and résumé routes load on demand.

| Path              | Responsibility                                                  |
| ----------------- | --------------------------------------------------------------- |
| `src/app/`        | Routing, layout, navigation, and metadata                       |
| `src/features/`   | Profile sections, project cases, skills filter, and résumé page |
| `src/content/`    | Project descriptions, profile information, and skills           |
| `src/components/` | Shared presentation components                                  |
| `src/styles/`     | Responsive layout and accessibility styles                      |
| `public/`         | Downloadable résumé                                             |
| `tests/`          | Browser tests                                                   |
| `.github/`        | Quality checks, dependency updates, and pull request template   |
| `docs/`           | Architecture, testing, design, deployment, and interview notes  |

The [architecture notes](docs/architecture.md) explain the route, state, and hosting choices.

## Featured projects

- [TradeSphere](https://github.com/minuraDinupriya/tradesphere) — B2B commerce and inventory management.
- [Sri Lanka Smart Lost & Found](https://github.com/minuraDinupriya/smart-lost-and-found-sl) — multilingual reporting and return coordination.
- [FocusPilot](https://github.com/minuraDinupriya/focuspilot) — offline task and focus management.
- LumoSense — an Arduino study lamp. Its local case study is available without an external repository link.

## Quality and deployment

[GitHub Actions](.github/workflows/quality.yml) runs formatting, linting, type checking, Vitest, a production build, a dependency audit, and Playwright with accessibility checks on pull requests and pushes to `main`. [Dependabot](.github/dependabot.yml) checks npm packages and GitHub Actions for updates.

The app uses system fonts, local assets, and lazy detail routes to limit initial requests. No field performance measurements have been collected. Semantic landmarks, a skip link, visible focus, keyboard navigation, and a text résumé provide ways to use the portfolio across viewport sizes. Automated accessibility checks complement manual review.

[Vercel configuration](vercel.json) is included for an eventual static deployment. Follow the [deployment guide](docs/deployment.md) after the design and release review. Until then, the site requests that search engines skip indexing.

For an interview, start with the [walkthrough](docs/interview-walkthrough.md). The next priorities are the Figma port, visual comparison across viewport sizes, and a verified production URL.

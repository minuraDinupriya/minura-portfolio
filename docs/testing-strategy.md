# Testing strategy

The checks cover different failure modes. TypeScript and ESLint catch invalid types and code patterns. Vitest checks data and React behavior without needing a browser. Playwright tests the visitor’s paths through the built site in Chromium, including behavior affected by viewport size, focus, or routing. Axe checks for common accessibility issues in the browser; it cannot establish WCAG conformance by itself.

## Local checks

```sh
npm ci
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=high
npm audit --omit=dev --audit-level=moderate
npx playwright install chromium
npm run test:e2e
```

The Playwright suite exercises responsive navigation, case study routes, and other high-value visitor paths such as the résumé download. Add tests at the lowest level that can observe a behavior reliably; reserve browser cases for routing, focus, downloads, layout, and accessibility that depend on browser behavior.

Set `PLAYWRIGHT_CAPTURE=1` to write a homepage screenshot for each viewport under `test-results/`. For local checks with a preinstalled Microsoft Edge browser, set `PLAYWRIGHT_CHANNEL=msedge`; CI uses Playwright's Chromium.

## Manual review

- Navigate with the keyboard alone. Verify skip-link focus, the menu’s open and closed states, section navigation, case studies, and the route back to featured projects.
- Check desktop, tablet, and mobile for overflow, readable text, and controls that remain usable with zoom.
- Open the résumé PDF and verify the download contains the current public information. Follow external destinations and confirm that the email action uses the correct address.
- After the Figma port, compare the actual design at representative sizes and test with reduced motion enabled. If an effect depends on pointer or GPU support, verify its alternative as well.

## Continuous integration

The [quality workflow](../.github/workflows/quality.yml) installs dependencies from the lockfile, verifies code and the build, and runs Chromium tests. It fails for high or critical findings anywhere in the dependency tree, or for moderate and higher findings in runtime packages. The current lockfile has no reported runtime advisory. The moderate [minimatch advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) reaches the development lint tools; update them when they accept a fixed version. Successful runs retain viewport screenshots, and failed runs retain available Playwright reports and diagnostics for seven days. The workflow has read-only repository permissions and does not deploy.

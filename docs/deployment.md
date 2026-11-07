# Deployment

The build is prepared for static hosting on Vercel. There is no confirmed deployment or production URL. The current site has a `noindex` directive while the Figma port is pending.

## Prepare a review build

1. Run the [local checks](testing-strategy.md) and confirm the visual review is complete.
2. With access to the intended Vercel project, import the approved GitHub repository. Use Node.js 24 and keep the repository root as the project root.
3. Confirm the project uses the Vite preset, `npm ci` for installation, `npm run build` for building, and `dist/` as the output. These settings are in [`vercel.json`](../vercel.json). No environment variables are required.
4. In the preview, open `/`, `/projects/tradesphere`, and `/resume` directly and refresh each page. Check that the PDF is served as a PDF and downloads correctly. Verify that browser logs are clear of blocked resources and that the security headers apply.
5. Verify GitHub checks before the release is approved. When a production domain is confirmed, add its canonical URL and social sharing image, remove the interim `noindex` directive, then record the verified live URL in the README.

The rewrite rules match only the client-side page routes; the PDF and Vite assets are served directly. An unknown project slug on a rewritten route displays the app’s not-found state after the HTML loads. An unrelated URL requested directly can return the host’s 404 page. See Vercel’s [Vite hosting guide](https://vercel.com/docs/frameworks/frontend/vite) for its SPA routing behavior.

The headers disallow embedding and unexpected browser permissions, limit resource loading to this origin, and prevent content-type sniffing. If the final design requires assets from another origin or inline styles for motion, test that change in a preview and adjust the policy only for the specific need.

GitHub Actions does not use Vercel credentials or publish the site. Git-based previews and production promotion are managed by the Vercel project owner. If a release regresses, redeploy the last verified build from Vercel and fix the issue through a reviewed Git change.

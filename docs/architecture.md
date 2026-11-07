# Architecture

The portfolio is a client-rendered React application served from static files. Its public content changes through the repository; it has no accounts, server-side data, or form submissions. The email action opens the visitor’s mail client. This keeps hosting simple and avoids maintaining an API with no consumer.

## Routes and state

React Router maps `/` to the home sections, `/projects/:slug` to one shared case study view, and `/resume` to a readable résumé. The project and résumé modules load only when their routes are needed. A project route looks up a slug in typed content and shows a clear fallback when it cannot find the project. The URL holds the active page or section, so visitors can bookmark pages and use the browser history.

`AppShell` gives each route a common header, main landmark, and footer. The router handles scroll restoration. The shell moves focus to the new landmark or section heading after navigation so a keyboard user can continue from the destination. The header owns its menu state and the skills component owns its filter state; neither needs to persist across page loads.

## Editing content

Update `src/content/profile.ts` for identity, education, and experience; `src/content/skills.ts` for skill groups; and `src/content/projects.ts` for projects. The same project data serves the home list and case study route. Keep slugs stable after sharing URLs, and supply an external repository link only when one exists. The PDF in `public/` is a separate asset, so update it alongside career information when appropriate.

## Trade-offs

- **Static hosting:** A single build works without a server, accounts, or environment variables. The host must serve the SPA entry for direct requests to client-side routes.
- **Client-rendered metadata:** The home title, description, and Open Graph fields are in the initial HTML. Individual routes set their browser titles and descriptions when rendered. If case studies need distinct social previews, consider prerendering their HTML.
- **Small styling surface:** The interim layout uses CSS custom properties and system fonts. The Figma export will determine the final design tokens, assets, and motion requirements.
- **Minimal animation work:** There is no animation or 3D runtime in the current build. Add one only if the design needs it and the equivalent browser APIs would make the implementation harder to maintain.

The interim production build measured about 105 kB of gzip-compressed initial JavaScript and 1.1 kB of gzip-compressed CSS in Vite's build report. The two deferred route chunks are each under 1 kB gzip. Measure again after adding the Figma visuals and motion; bundle sizes alone do not establish visitor performance.

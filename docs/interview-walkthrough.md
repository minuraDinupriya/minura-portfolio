# Interview walkthrough

Start at the homepage and explain the audience: a recruiter can find the résumé and contact links quickly, while an engineer can open a case study and see a concrete technical decision. Tell the interviewer which commit you are showing and whether the Figma visual review is complete.

## Demo in five minutes

1. Open the site at a narrow viewport. Use the keyboard to open the menu and jump to Featured Projects. Point out that the URL changes and the heading receives focus.
2. Open TradeSphere. Explain its stock reservation and fulfillment behavior, then open the repository link for context. Keep the distinction clear: the case study describes TradeSphere; the portfolio does not run its services.
3. Reload the case study URL and return to Featured Projects. Explain how Vercel rewrites known page URLs to the same static entry while React Router selects the page.
4. Select a skills group, then show the résumé page and PDF download. The selection is local to one component; the downloadable file does not require an API.
5. Show the GitHub Actions workflow. Explain the difference between fast TypeScript and component checks and browser checks for navigation, keyboard focus, and accessibility.

## Decisions to explain

- **Why React and TypeScript?** Sections and case study views reuse the same components and content types. Strict checking catches missing or incompatible fields at development time. Runtime lookup still handles unknown slugs, since a URL is outside TypeScript’s control.
- **Why keep content separate?** A single project entry feeds both the summary and detail pages. Updating a project does not require editing both views. The résumé PDF is a separate artifact and needs updating alongside the source content.
- **Why static hosting?** The site presents public content and links; it does not collect submissions or need authentication. Static hosting removes server maintenance, while browser routing still gives each case study its own URL.
- **Why split the detail pages?** Visitors can use the home page without fetching the route views for the résumé or project details. System fonts avoid extra font requests. A build size and real-user measurements answer different questions; do not claim a Core Web Vitals result without measurements.
- **How did you handle accessibility?** Use native links and buttons, semantic page regions, a skip link, clear focus, and focus movement after route changes. Axe catches certain detectable issues. Keyboard use, content clarity, and the final motion experience still need manual review.
- **What would you build next?** Port the real Figma assets and motion, then test at multiple viewport sizes. For motion, favor transforms and opacity, stop any recurring work when it is no longer visible, and provide reduced-motion and touch behavior before adding complexity. Verify hosting and social metadata after the final domain is known.

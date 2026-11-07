# Design implementation

The visual reference is [the Figma Make project](https://www.figma.com/make/uRxWP3ae3vYJduuAduAn9J/Build-Minura%E2%80%99s-Engineering-Portfolio?t=1z8tp2yNTJier8vr-1). The Figma integration listed Make resources, including React source and image entries, but did not return the source or screenshots. That inventory establishes the project exists; it does not establish its layout, typography, colors, assets, or interactions. The current portfolio preserves the verified professional content and functional navigation in a temporary layout. It has not been visually compared to Figma.

## Porting the design once the export is available

1. Inspect the exported entry points, route definitions, styles, asset imports, and dependency versions before running anything from the export. Identify the primary routes, responsive breakpoints, and motion states.
2. Capture reference views at desktop, tablet, and mobile sizes. Record the exact viewport, interaction state, and reduced-motion setting for any comparisons.
3. Reuse the exported assets and recover the actual color, spacing, and type values. Keep content data separate from layout and adapt the verified routes and accessibility behavior to the reference structure.
4. Compare screenshots of the built site with the references. Check section geometry, text wrapping, image cropping, navigation, and any states that require hover, focus, or scrolling.
5. For design motion, verify that keyboard input works during transitions and that reduced motion leaves content and controls usable. Test touch alternatives for pointer effects and a fallback for any visual requiring GPU support.
6. Record visual deviations and their reasons, then run the release checks in the [deployment guide](deployment.md).

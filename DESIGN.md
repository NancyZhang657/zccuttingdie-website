# Design Notes

Use this file to record the site-specific design system generated from the `canvas-design` private skill and `canvas-designer` SubAgent. If the SubAgent is unavailable, record the main-Agent `canvas-design` fallback and the exact vendor paths read.

- Audience:
- Visual direction:
- Reference Sources:
  - `vendor/legokits-canvas/SYSTEM.md`:
  - `vendor/legokits-canvas/design-systems/reference/<system>/DESIGN.md`:
  - `vendor/legokits-canvas/craft/reference/anti-ai-slop.md`:
- Vendor Grounding:
  - Applies to: new sites, redesigns, and non-trivial visual changes.
  - skip reason for trivial/function-only work:
  - Selected design-system baseline:
  - Anti-ai-slop checks applied:
  - Intentional deviations:
- Color tokens:
- Typography:
- Components:
- Responsive behavior:
- Image assets:
  - Local images: placed under `src/assets/`, referenced via `import` or `import.meta.glob()`.
  - External images: CDN URLs (Unsplash, placeholder, user-provided).
  - Forbidden: bare string paths (`/assets/xxx.png`), `public/` directory images, dynamic concatenation.

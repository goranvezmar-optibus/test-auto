## Description

<!-- What does this PR do and why? Link the relevant ticket. -->

---

## General

- [ ] Code follows project conventions (TypeScript, Prettier, ESLint — `pnpm lint && pnpm typecheck`)
- [ ] Tests pass locally (`pnpm test`)
- [ ] No console errors or warnings introduced
- [ ] No hardcoded values that should come from theme tokens
- [ ] `auto` label set: `patch` / `minor` / `major` / `skip-release`
- [ ] Canary published and smoke-tested in a consumer app (if the change touches a public API)
- [ ] Breaking changes documented (if any then bump major version)

---

## Components

_Complete this section if the PR adds or modifies a component._

### Implementation

- [ ] Component is exported from `src/index.ts` as a named export
- [ ] Props are fully typed with TypeScript; Ride UI-original boolean props use `disabled`/`loading` naming (Base UI passthrough props keep their original name and types)
- [ ] `data-slot="<name>"` set on all underlying elements for easy CSS selection
- [ ] No inline `style={{}}` in `.tsx` — styles live in `.css.ts`
- [ ] Vanilla Extract styles live in a `*.css.ts` file using `recipe()` where variants are needed
- [ ] No empty/dead CSS code unless it is a variant that also impacts types
- [ ] Spread order doesn't let passed props overwrite internally computed ones
- [ ] RTL styles handled
- [ ] Light and Dark theme handled
- [ ] Props type extends Base UI component props (no re-declaring `disabled`, `onClick`, etc.)
- [ ] Exposes `render` prop (not `as`)

### Tests (`*.test.tsx`)

- [ ] Renders without errors
- [ ] All variants / prop combinations covered
- [ ] `render` prop alt-form tested (e.g. `<Component render={<li />} />`) if component accepts a render prop
- [ ] ARIA roles and attributes verified (e.g. `role`, `aria-orientation`, `aria-disabled`, `aria-expanded`, `aria-selected`, `aria-checked`, `aria-pressed`, `aria-label`/`aria-labelledby`, `aria-busy`)
- [ ] Edge cases covered (empty state, overflow, disabled, etc.)

### Storybook (`*.stories.tsx` + `*.mdx`)

- [ ] MDX documentation file created / updated with usage guidance
- [ ] One story per meaningful variant
- [ ] **Playground story** added for designers:
  - [ ] Only includes controls a designer can meaningfully interact with (no internal state props, callback refs, render props, etc.)
  - [ ] Any control that is conditional on another prop has a comment explaining the dependency
  - [ ] Default values in the playground reflect the component default values

---

## Icons

_Complete this section if the PR adds or modifies an SVG icon._

- [ ] SVG `viewBox` is `0 0 16 16` (16×16 grid)
- [ ] All paths use `fill="currentColor"` — no hardcoded color values
- [ ] No explicit `width` / `height` attributes on the `<svg>` element (size controlled by CSS)
- [ ] Icon is **mirrored in RTL**: specified below ↓  
       `Mirrors in RTL: Yes / No`  
       _(Mirror when the icon implies directionality, e.g. arrows, chevrons, play/back controls. Do **not** mirror symmetrical icons or icons that represent physical objects like a clock.)_
- [ ] Icon is accessible: `aria-hidden="true"` when decorative; `title` + `aria-labelledby` when meaningful
- [ ] Icon exported from the icons barrel file
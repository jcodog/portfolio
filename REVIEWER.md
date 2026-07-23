# Portfolio Review Guide

This document defines the review expectations and established decisions for `jcodog/portfolio`.

## Project intent

This is a modern personal portfolio for Jason and JCoNet LTD. It should demonstrate real software engineering, DevOps, product development, and technical design work without looking like a generic template or AI-generated developer portfolio.

Reviews should prioritise correctness, maintainability, accessibility, performance, and deliberate visual design.

## Architecture

The project uses a feature-oriented structure.

- `src/app` contains thin Next.js App Router route entry points and route metadata.
- `src/features` contains page-specific and product-specific composition, content, behaviour, and visuals.
- `src/components` contains genuinely generic and reusable components only.
- `src/lib` contains shared utilities that are used across multiple features.
- `src/styles/globals.css` contains global styling and design tokens.
- Feature-local configuration should remain with its feature until multiple features need it.

A route should normally render a feature shell rather than directly composing an entire page.

## Established stack decisions

- Package manager: Bun
- Lockfile: `bun.lock`
- Framework: Next.js 16 preview with App Router
- React: React 19
- Language: TypeScript 7
- Styling: Tailwind CSS 4
- Component primitives: shadcn with Base UI
- Icons: Tabler Icons
- Visual tooling: Three.js, React Three Fiber, Drei, Motion, and GSAP
- Hosting target: Vercel

Do not recommend switching package managers, replacing Base UI with Radix, introducing another component system, or moving away from the feature architecture without a concrete technical reason.

The Three.js, React Three Fiber, Drei, Motion, GSAP, and Three.js type packages are intentionally approved foundation dependencies for immediate follow-up work. Their presence alone should not be reported as an unused-dependency issue. Review their eventual use for bundle boundaries, client loading, cleanup, accessibility, and reduced-motion behaviour.

## Review priorities

### Correctness

Look for broken navigation, invalid states, hydration problems, unsafe assumptions, incorrect external-link handling, and errors introduced by client/server component boundaries.

### Accessibility

Check semantic landmarks, heading order, keyboard navigation, focus visibility, contrast, accessible names, reduced-motion support, and alternatives for decorative WebGL content.

Decorative canvases must not contain essential content and should be hidden from assistive technology.

### Performance

Pay particular attention to:

- unnecessary client components
- large eager imports
- Three.js or animation code loaded on routes that do not need it
- unbounded animation loops
- missing resource cleanup
- oversized textures or models
- layout shift
- poor mobile behaviour

Rich visual features should be dynamically loaded when appropriate and should degrade cleanly.

### Architecture

Flag feature-specific content or behaviour placed in `src/components`.

Flag generic reusable elements placed inside a feature when they are already needed by multiple features.

Do not request premature abstraction. Shared modules should have a real second consumer or a clear cross-feature responsibility.

### Scope

Keep reviews aligned with the stated pull request scope. Do not require unrelated pages or finished features in a foundation pull request.

Intentional follow-up work may be noted as a suggestion, but it should not be treated as a blocker unless the current change is broken or unsafe without it.

## Design guardrails

Avoid encouraging common template and AI-portfolio clichés, including:

- availability or status pill badges
- generic particle networks used only as decoration
- fake terminal windows
- excessive glowing blobs
- skill-pill walls
- large grids of identical rounded cards
- meaningless dashboard visuals
- generic future-facing marketing copy
- animation that competes with the work itself

The visual design should feel authored, restrained, technical, and specific to Jason, JCoNet LTD, and the projects being presented.

Three.js and motion should support storytelling or demonstrate meaningful technical skill. They should not be added merely because the packages are installed.

## Review severity

Use these levels consistently:

- **blocker**: unsafe to merge, broken build, security issue, data loss risk, or fundamental architectural violation
- **bug**: user-visible or functional defect that should be fixed before merge
- **suggestion**: worthwhile improvement that is not required for correctness
- **nit**: minor readability or consistency point

Do not present personal style preferences as bugs.

## Validation

Before merge, the branch should pass:

```bash
bun run format
bun run lint
bun run typecheck
bun run build
```

Reviewers should mention when CI is absent or incomplete, but local validation recorded by the author is acceptable until repository CI is introduced.

## Code style

Follow the existing formatter and lint configuration.

- Use TypeScript for application code.
- Prefer explicit, readable component props.
- Keep route files thin.
- Keep feature content close to the feature.
- Avoid unexplained magic values.
- Avoid abstractions that make simple composition harder to follow.
- Preserve accessible names for icon-only controls.

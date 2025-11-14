# Repository Guidelines

## Project Structure & Module Organization
- Root files: `README.md`, `AGENTS.md`, `.nojekyll`.
- Store‑specific assets live under directories like `sis/`.
  - `sis/main.js` – main storefront script for this store.
  - `sis/pictures/` – image assets referenced by the script.
- Treat each store folder as an independent “module”: changes in one store should not break others.

## Build, Test, and Development Commands
- There is no formal build step; assets are served as‑is.
- Recommended local preview (any static server is fine), for example:
  - `python -m http.server` (from the repo root) and open the generated URL.
- After changes to `main.js`, always reload the target storefront and check the browser console for errors.

## Coding Style & Naming Conventions
- JavaScript:
  - Match existing style in `sis/main.js`: 2‑space indentation, single quotes, semicolons.
  - Prefer small, pure helper functions and early returns.
  - Use descriptive names tied to the store or feature (e.g. `jfInitGalleryCarousel`, not `doStuff`).
- Keep DOM selectors and class names stable; avoid hard‑coding store‑specific text in multiple places.

## Testing Guidelines
- No automated test suite is configured.
- Expected verification:
  - Confirm the script loads without console errors.
  - Verify layout and behavior on desktop and mobile breakpoints.
  - For galleries/buttons, test open/close flows and navigation.

## Commit & Pull Request Guidelines
- Use Conventional Commit style where possible:
  - `feat(sis): add reviews gallery`
  - `fix(sis): adjust gallery height`
  - `chore: update README`
- Pull requests should:
  - Briefly describe the change and affected store(s).
  - Include before/after screenshots or a short walkthrough of the storefront behavior.
  - Note any manual checks performed (browser, device, or store URL).


# Theme Capsule

A multi-theme React + TypeScript + Vite showcase with instant theme switching, reusable templates, and themed pages (Home, Admin, Dashboard, Blog).

## What’s inside
- 11 themes with strong differentiation (Star Wars, Animal Crossing, Cyberpunk, Ghibli, Minimal, LEGO, Retro Arcade, Apple Vision, NASA Control, Medieval RPG, Cozy Café).
- Global ThemeSwitcher with token-based styling (colors, typography, radius, shadows, textures, animations).
- Template Library: copy-paste snippets per theme, style notes in EN/ZH, and live previews (templates, nav/sidebar, hero/card/form/table, chart, badges, empty states, steps, CTA, stats).
- Themed pages: Home marketing, Admin, Dashboard (charts with fake data, bars + line/tooltip), Blog list/detail with avatars and TOC, consistent headers.
- Sample style references in `sample_style.md` mapped into Template page “Style notes”.

## Getting started
```bash
npm install
npm run dev    # start locally
npm run build  # type-check + production build
npm run preview
```

## Key structure
- `src/index.css` + `src/themes/styles/*.css`: base tokens and per-theme CSS variables/backgrounds.
- `src/themes/*.json`: theme token definitions, registered via `src/core/theme-loader/themeRegistry.ts`.
- `src/core/theme-store`: applies tokens to `:root`, persists selection.
- Layouts/Pages: `src/layouts/*`, `src/pages/home`, `src/pages/admin`, `src/pages/dashboard`, `src/pages/blog`, `src/pages/templates`.
- Blog data: `src/pages/blog/blogData.ts` (avatars use placeholder SVG).
- Template Library: `src/pages/templates/templateLibrary.ts` (per-theme templates + style notes), `TemplatePage.tsx`.

## Add or edit a theme
1) Create `<name>.json` in `src/themes/` with primary tokens.
2) Add `<name>.css` in `src/themes/styles/` for extended vars/backgrounds.
3) Register in `src/core/theme-loader/themeRegistry.ts`.
4) (Optional) Add style notes in `templateLibrary.ts`.

## Notes
- Language toggle (EN/中文) lives on the Template page; it affects style notes/descriptions, not the code snippets.
- Charts use fake inline data for clear theme contrast.

## License
MIT (see package).***

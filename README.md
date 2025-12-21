# Theme Capsule

A multi-theme React + TypeScript + Vite showcase with instant theme switching, reusable templates, and themed pages (Home, Admin, Dashboard, Blog).

For 中文版 see [README.zh.md](README.zh.md).

<p align="center">
  <img src="public/style.webp" alt="Theme Capsule preview" width="880" />
</p>

## Why Theme Capsule Exists

Most of the time, we can build features just fine, but making a UI that *actually feels right* from the start is much harder.

For engineers without a design background, UI polish often ends up being:
- Done last
- Taking the most time
- Compromised into something “clean, but ordinary”

While experimenting with **vibe coding**, I stumbled upon an interesting realization:

> **If you give AI a *strong, opinionated theme* from the very beginning, the overall UI quality jumps dramatically.**

Star Wars, Animal Crossing, Ghibli, retro arcades, NASA control rooms—when the theme is clear, colors, typography, spacing, animations, and component shapes naturally fall into place.

The problem?
**There are almost no ready-to-use, front-end-friendly references for these kinds of themes.**

So I built **Theme Capsule**.

---

## What Is Theme Capsule?

Theme Capsule is not a UI framework. It’s not a design system either.

Think of it as a **theme exploration capsule**:

- Each capsule represents a bold, recognizable visual theme
- The same functional pages (Home / Admin / Dashboard / Blog) look entirely different under each theme
- Every theme is broken down into **understandable, copyable design tokens and component patterns**

You can use it as:

- **Inspiration** when you don’t know where to start with UI
- A **shared visual reference** when talking to AI about design
- A **head start** for building products that don’t look like default templates

---

## Who Is This For?

Theme Capsule might be useful if you:

- Are tired of building UIs that look like generic dashboards
- Want to use AI for design but struggle to describe visual style
- Want to compare how the same features feel across different visual languages
- Are building a side project, demo, or internal tool and want instant visual identity
- Are curious about design but don’t want to start from Figma or design systems

---

## How Can You Use It?

- **Switch themes and observe**  
  Quickly see which visual style fits your idea best

- **Copy templates into your project**  
  Cards, tables, dashboards, and blog layouts are all theme-aware

- **Use theme descriptions as AI prompts**  
  Each theme comes with clear design language, perfect for prompting

- **Experiment with visual identity**  
  See how the same product behaves in different worlds

---

## What’s the Goal?

Theme Capsule isn’t here to teach design. It’s here to make one thing easier:

> **Building UIs that don’t look like what you usually build.**

If it helps you find a visual direction faster, or makes you think, “wait—this actually looks different,” then the project has done its job.

---

## What’s inside
- 12 themes with strong differentiation (Star Wars, Animal Crossing, Cyberpunk, Ghibli, Minimal, LEGO, Retro Arcade, Apple Vision, NASA Control, Medieval RPG, Cozy Café, Linear, Supabase, Grafana).
- Global ThemeSwitcher with token-based styling (colors, typography, radius, shadows, textures, animations).
- Template Library: copy-paste snippets per theme, style notes in EN/ZH, and live previews (templates, nav/sidebar, hero/card/form/table, chart, badges, empty states, steps, CTA, stats).
- Themed pages: Home marketing, Admin, Dashboard (charts with fake data, bars + line/tooltip), Blog list/detail with avatars and TOC, consistent headers.
- Sample style references in `sample_style.md` mapped into Template page “Style notes”.

---

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
MIT (see package).

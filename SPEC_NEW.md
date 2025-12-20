# Multi-Theme Showcase – Updated SPEC

## Project Goal
Build a pure-frontend SPA that demonstrates instant theme switching across multiple page types (home, admin, dashboard, blog, template library). Show clear visual differentiation per theme and provide copy-paste templates for reuse.

## Tech Requirements
- Pure frontend (no backend, no DB)
- React + TypeScript + Vite
- Tailwind CSS + CSS variables for theme tokens
- Static assets only
- Deployable to GitHub Pages / Cloudflare Pages / Vercel

## Theme System
**Theme engine**
- Global store: `currentTheme`, `themeTokens`, `ThemeSwitcher`
- Applies tokens to `:root` with CSS vars; persists in `localStorage`
- Instant switch, no page reload

**Tokens (JSON per theme)**
```
primary
secondary
background
surface
text
accent
borderRadius
shadowStyle
fontFamily
animationStyle
```

**Theme packs (current)**
- Star Wars, Animal Crossing, Cyberpunk, Ghibli, Minimal
- LEGO, Retro Arcade, Apple Vision, NASA Control, Medieval RPG, Cozy Café
- Location: `src/themes/*.json` + `src/themes/styles/*.css`
- Registry: `src/core/theme-loader/themeRegistry.ts`

## Application Structure
```
src/
  core/theme-engine | theme-loader | theme-store
  components/common | dashboard | admin | blog
  layouts/frontend | admin | dashboard | blog
  pages/home | admin | dashboard | blog | templates
  themes/ (json + styles/) | store/
```

## Required Pages
1) Home (public marketing)
   - Navbar with ThemeSwitcher, hero, features, pricing cards, CTA
2) Admin
   - Sidebar nav, forms, tables, modals/alerts, CRUD-like UI
3) Dashboard
   - KPI cards, charts (fake data), table, sidebar
4) Blog
   - Post list, post detail, markdown styling, author box, tags, TOC/navigation
5) Template Library
   - Per-theme copy-paste snippets with live preview
   - Style notes (EN/ZH) pulled from spec and `sample_style.md`
   - Categories: nav/sidebar, hero/card/form/table, chart, badges, empty state, steps, CTA, stats
   - Language toggle affects descriptions; code snippets remain English

## Components (derive styles from tokens)
**Common**: Button, Input, Card, Modal, Table, Alert  
**Dashboard**: Chart container, KPI card, Data table  
**Admin**: Form inputs, Sidebar nav, CRUD list  
**Blog**: Post list/detail blocks, TagPill, AuthorBox, Markdown container  
**Templates**: Template cards with copy-to-clipboard, style notes block

## Theme Switching UX
- Global selector in header (all layouts)
- Persist selection; no server calls; immediate visual update

## Test Scenarios
- Switch theme on Home → layout/buttons/cards change
- Switch on Dashboard → chart colors/tooltip change
- Switch on Admin → tables & forms change
- Switch on Blog → typography/tags/meta change
- Switch on Templates → descriptions and previews change per theme/language

## Non-Functional
- Pure frontend, responsive, fast theme switching
- Lightweight build; runnable on static hosting

## Deliverables
- Working SPA with ≥11 themes
- All pages functional & visually distinct
- Clear theme engine architecture + registry
- Template library with copyable code and style notes
- Build script for deployment

## Optional Enhancements
- Theme import/export
- User-generated theme editor
- Additional presets
- Animated transitions during theme switch

## Definition of Done
- All pages implemented
- Global theme switching works and is persistent
- Components read CSS variables from tokens
- Template library usable for copy-paste
- Build/deploy script ready
- No backend required; runs fully in browser

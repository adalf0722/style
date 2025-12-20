# 📄 SPEC.md

```markdown
# Multi-Theme Showcase Website — SPEC

## 🎯 Project Goal
Build a purely frontend web application that demonstrates real-time visual theme switching across multiple types of pages (frontend, admin, dashboard, blog).  

The purpose is to showcase how drastically different UI styles and components can appear under various themes (Star Wars, Animal Crossing, Cyberpunk, Ghibli, Minimal).  

No backend. No database. All rendering and theme switching occur on the client.

---

## 🚀 Tech Requirements
- Pure Frontend only
- React + Vite (or alternative SPA framework)
- Tailwind CSS recommended for theme flexibility
- CSS variables for theme tokens
- No Node.js backend
- No database
- All assets should be static

Deployment targets:
- GitHub Pages OR Cloudflare Pages OR Vercel

---

## 🧩 Theme System Requirements

### Theme Engine
A global theme store manages:
- currentTheme
- themeTokens
- themeSwitcher UI

Theme switching should:
- apply instantly
- not trigger a full page reload
- update CSS variables dynamically

### Theme Tokens (must be customizable per theme)
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

### Theme Packs to include:
- Star Wars
- Animal Crossing
- Cyberpunk
- Ghibli
- Minimal

Theme packs should be defined as JSON files:
```

/themes/starwars.json
/themes/animal-crossing.json
...

```

---

## 🏗️ Application Structure

```

src/
├─ core/
│   ├─ theme-engine/
│   ├─ theme-loader/
│   └─ theme-store/
│
├─ components/
│   ├─ common/
│   ├─ dashboard/
│   ├─ admin/
│   └─ blog/
│
├─ layouts/
│   ├─ frontend/
│   ├─ admin/
│   ├─ dashboard/
│   └─ blog/
│
├─ pages/
│   ├─ home/
│   ├─ admin/
│   ├─ dashboard/
│   └─ blog/
│
├─ themes/
└─ store/

```

---

## 📄 Required Pages

### 1️⃣ Frontend Site (Public)
Contains:
- navbar
- hero banner
- features
- pricing cards
- contact button
- footer

### 2️⃣ Admin Panel
Contains:
- sidebar navigation
- form fields
- tables
- modals
- CRUD-like UI

### 3️⃣ Dashboard Page
Contains:
- metric cards
- charts (use placeholder if needed)
- table
- sidebar

### 4️⃣ Blog
Contains:
- blog post list
- blog post detail
- markdown content styling
- author component
- tags

---

## 🎨 Component Requirements

### Common Components
- Button
- Input
- Card
- Modal
- Table
- Alert

### Dashboard Components
- Chart container
- KPI card
- Data table

### Admin Components
- Form inputs
- Sidebar navigation
- CRUD list

### Blog Components
- PostCard
- TagPill
- AuthorBox
- MarkdownContainer

Every component must:
- derive its style from theme tokens
- visually change appearance under theme switching

---

## 🔄 Theme Switching UX

- Add a global theme selector (dropdown or panel)
- User selects a theme
- All pages update instantly
- Theme persists using localStorage
- No server requests required

Example:
```

<select>
  <option>Star Wars</option>
  <option>Animal Crossing</option>
  <option>Cyberpunk</option>
  <option>Ghibli</option>
  <option>Minimal</option>
</select>
```

---

## 🧪 Test Scenarios

* Switch theme on home page → layout + buttons + cards change
* Switch theme on dashboard → chart colors update
* Switch theme on admin → tables & forms update
* Switch theme on blog → typography & tags update

---

## 🔒 Non-Functional Requirements

* Pure frontend only
* No backend endpoints
* No database
* Lightweight & deployable on static hosting
* Fast theme switching
* Responsive design

---

## 🌟 Deliverables

* Fully working SPA
* At least 5 themes implemented
* All pages functional, visually distinct
* Clear theme engine architecture
* Deployable version + build script

---

## Optional Enhancements (nice to have, not required)

* Animation transitions during theme switching
* Import / Export theme token JSON
* User-created theme editor
* Additional theme presets

---

## Done Definition

* All pages implemented
* Theme switching works globally
* Components react to styles
* Deployment script prepared
* No backend required
* Runs fully in browser only

```

---


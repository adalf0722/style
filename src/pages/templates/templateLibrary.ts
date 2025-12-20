type TemplateCategory =
  | "Hero"
  | "Card"
  | "Form"
  | "Table"
  | "Nav"
  | "Sidebar"
  | "Stats"
  | "CTA"
  | "Chart"
  | "Steps"
  | "Badge"
  | "Empty";

export type TemplateItem = {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  code: string;
};

export type TemplateLanguage = "en" | "zh";

const baseCode = {
  nav: (themeLabel: string) => `<header class="card-surface text-text">
  <div class="flex items-center justify-between gap-4 px-6 py-4">
    <div class="flex items-center gap-3">
      <span class="text-lg font-semibold">${themeLabel}</span>
      <span class="rounded-theme border px-2 py-1 text-xs border-[var(--card-border)] bg-[var(--card-surface-color,var(--color-surface))]">Live</span>
    </div>
    <nav class="flex items-center gap-4 text-sm text-secondary">
      <a class="hover:text-primary" href="#">Overview</a>
      <a class="hover:text-primary" href="#">Playbooks</a>
      <a class="hover:text-primary" href="#">Settings</a>
    </nav>
    <button class="btn-base bg-primary text-background px-4 py-2 text-xs">Launch</button>
  </div>
</header>`,
  sidebar: (themeLabel: string) => `<aside class="panel-surface w-64 p-5 space-y-3">
  <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} menu</p>
  <ul class="space-y-2 text-sm">
    <li class="rounded-theme bg-primary/20 px-3 py-2 text-text">Dashboard</li>
    <li class="rounded-theme px-3 py-2 text-secondary hover:text-text">Templates</li>
    <li class="rounded-theme px-3 py-2 text-secondary hover:text-text">Settings</li>
  </ul>
</aside>`,
  hero: (themeLabel: string) => `<section class="card-surface p-8 flex flex-col gap-3">
  <p class="uppercase tracking-wide text-secondary text-xs">Hero / ${themeLabel}</p>
  <h1 class="text-3xl font-semibold text-text">Design once, ship ${themeLabel} vibes.</h1>
  <p class="text-secondary">Use theme tokens to keep spacing, color, and radii consistent.</p>
  <div class="flex gap-3">
    <button class="btn-base bg-primary text-background px-4 py-2">Primary Action</button>
    <button class="btn-base btn-ghost px-4 py-2">Ghost Action</button>
  </div>
</section>`,
  card: (themeLabel: string) => `<div class="card-surface p-5 space-y-3">
  <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} card</p>
  <h3 class="text-xl font-semibold text-text">Adaptive card shell</h3>
  <p class="text-secondary">Surfaces read vars like --card-border, --card-shadow, --card-texture.</p>
  <div class="flex flex-wrap gap-2">
    ${["Live", "Beta", "Warning"].map((label, i) => {
      const tone =
        i === 0
          ? "bg-primary text-background"
          : i === 1
            ? "bg-accent text-background"
            : "btn-ghost";
      return `<span class="btn-base px-3 py-1 text-[11px] ${tone}">${label}</span>`;
    }).join("")}
  </div>
  <div class="flex gap-2">
    <span class="rounded-full border px-2 py-1 text-xs border-[var(--card-border)]">Token-driven</span>
    <span class="rounded-full border px-2 py-1 text-xs border-[var(--card-border)]">Card</span>
  </div>
</div>`,
  form: (themeLabel: string) => `<form class="card-surface p-6 space-y-3">
  <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} form</p>
  <label class="block space-y-1">
    <span class="text-sm text-text">Email</span>
    <input class="w-full rounded-theme border px-3 py-2 bg-[var(--input-bg)] border-[var(--input-border)] text-text" placeholder="you@example.com" />
  </label>
  <label class="block space-y-1">
    <span class="text-sm text-text">Environment</span>
    <select class="w-full rounded-theme border px-3 py-2 bg-[var(--input-bg)] border-[var(--input-border)] text-text">
      <option>Staging</option>
      <option>Production</option>
    </select>
  </label>
  <button class="btn-base bg-primary text-background px-4 py-2 w-full">Submit</button>
</form>`,
  table: (themeLabel: string) => `<div class="card-surface p-5 space-y-3">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} table</p>
      <h4 class="text-lg font-semibold text-text">Channel performance</h4>
    </div>
    <span class="btn-base btn-ghost px-3 py-1 text-xs">Export</span>
  </div>
  <table class="w-full text-sm border-separate border-spacing-0">
    <thead class="text-secondary">
      <tr>
        <th class="text-left pb-2">Channel</th>
        <th class="text-left pb-2">Visitors</th>
        <th class="text-left pb-2">Conv%</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-2 border-b border-[var(--table-border)]">Organic</td>
        <td class="py-2 border-b border-[var(--table-border)]">12.4k</td>
        <td class="py-2 border-b border-[var(--table-border)]">4.2%</td>
      </tr>
      <tr>
        <td class="py-2 border-b border-[var(--table-border)]">Paid</td>
        <td class="py-2 border-b border-[var(--table-border)]">8.1k</td>
        <td class="py-2 border-b border-[var(--table-border)]">3.1%</td>
      </tr>
      <tr>
        <td class="py-2">Email</td>
        <td class="py-2">5.4k</td>
        <td class="py-2">2.6%</td>
      </tr>
    </tbody>
  </table>
</div>`,
  stats: () => `<div class="grid grid-cols-3 gap-3">
  ${["Visitors", "Signups", "Revenue"]
    .map(
      (label, i) => `<div class="card-surface p-4 space-y-1">
      <p class="text-xs uppercase tracking-wide text-secondary">${label}</p>
      <p class="text-2xl font-semibold text-text">${["24.8k", "3.1k", "$128k"][i]}</p>
      <p class="text-xs text-accent">+${["12%", "8%", "6%"][i]}</p>
    </div>`,
    )
    .join("")}
</div>`,
  cta: (themeLabel: string) => `<div class="card-surface p-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
  <div>
    <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} CTA</p>
    <h3 class="text-xl font-semibold text-text">Ready to launch your next drop?</h3>
    <p class="text-secondary">Copy this block to create a themed announcement or promo strip.</p>
  </div>
  <div class="flex gap-3">
    <button class="btn-base bg-primary text-background px-4 py-2">Book demo</button>
    <button class="btn-base btn-ghost px-4 py-2">Contact</button>
  </div>
</div>`,
  chart: (themeLabel: string) => `<div class="card-surface p-5 space-y-3">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} chart</p>
      <h4 class="text-lg font-semibold text-text">Traffic & Conversions</h4>
    </div>
    <span class="btn-base btn-ghost px-3 py-1 text-xs">View details</span>
  </div>
  <div class="grid grid-cols-[60px_1fr] gap-3 text-xs text-secondary items-end">
    <div class="space-y-4 text-right pr-2">
      <div>20k</div>
      <div>10k</div>
      <div>0</div>
    </div>
    <div class="grid grid-cols-3 gap-2">
    ${["Mon", "Tue", "Wed"].map((d, i) => {
      const height = [60, 90, 70][i];
      return `<div class="flex flex-col items-center gap-1">
        <div class="h-24 w-10 rounded-theme bg-[var(--button-ghost-bg)] relative overflow-hidden">
          <div class="absolute bottom-0 w-full rounded-theme bg-primary" style="height:${height}%"></div>
        </div>
        <span>${d}</span>
      </div>`;
    }).join("")}
    </div>
  </div>
  <div class="relative mt-2 h-24 rounded-theme bg-[var(--button-ghost-bg)] overflow-hidden">
    <svg viewBox="0 0 300 100" class="absolute inset-0">
      <polyline fill="url(#grad)" stroke="var(--color-text)" stroke-width="3" points="0,70 60,40 120,80 180,50 240,65 300,30" />
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.35" />
          <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <div class="absolute right-3 top-3 rounded-theme border border-[var(--card-border)] bg-[var(--color-surface)] px-3 py-2 text-[11px] text-text shadow-[var(--card-shadow)]">
      <div class="font-semibold">Wed</div>
      <div class="text-secondary">Visitors 15.6k</div>
      <div class="text-secondary">Conv 4.1%</div>
    </div>
  </div>
</div>`,
  steps: (themeLabel: string) => `<div class="card-surface p-5 space-y-3">
  <p class="text-xs uppercase tracking-wide text-secondary">${themeLabel} steps</p>
  <div class="flex flex-col gap-3">
    ${["Pick a theme", "Copy the matching template", "Ship and stay consistent"].map((label, i) => {
      const active = i === 1;
      return `<div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--card-border)] ${active ? "bg-primary text-background" : "bg-[var(--card-surface-color,var(--color-surface))] text-text"}">${i + 1}</span>
        <div class="flex-1">
          <p class="text-sm font-semibold text-text">${label}</p>
          <p class="text-xs text-secondary">${["Pick a theme", "Copy the matching template", "Ship and stay consistent"][i]}</p>
        </div>
      </div>`;
    }).join("")}
  </div>
</div>`,
  badge: (themeLabel: string) => `<div class="flex flex-wrap gap-2 card-surface p-4">
  ${["Live", "Beta", "New", themeLabel].map((label, i) => {
    const color = [ "bg-primary text-background", "bg-accent text-background", "btn-ghost", "bg-secondary text-background" ][i % 4];
    return `<span class="btn-base px-3 py-1 text-xs ${color}">${label}</span>`;
  }).join("")}
</div>`,
  empty: (themeLabel: string) => `<div class="card-surface p-6 text-center space-y-3">
  <div class="mx-auto h-12 w-12 rounded-full bg-[var(--button-ghost-bg)] flex items-center justify-center text-primary">◎</div>
  <h4 class="text-lg font-semibold text-text">No items yet</h4>
  <p class="text-sm text-secondary">Start with the ${themeLabel} template and add your first record.</p>
  <div class="flex justify-center gap-3">
    <button class="btn-base bg-primary text-background px-4 py-2">Create item</button>
    <button class="btn-base btn-ghost px-4 py-2">Import</button>
  </div>
</div>`,
};

const translations = {
  en: {
    descriptions: {
      nav: (themeLabel: string) =>
        `${themeLabel} nav bar showing text contrast and button styles.`,
      sidebar: () => `Sidebar example using panel surface and active state.`,
      hero: () => `Hero CTA showing background contrast and button corners.`,
      card: () => `Feature card using card-surface and highlight token.`,
      form: () => `Form block using input/table tokens for focus & border.`,
      table: () => `Lightweight report table with actions.`,
      stats: () => `Three metric cards contrasting primary/secondary with accent deltas.`,
      cta: () => `Reusable promo strip with primary/secondary actions.`,
      chart: () => `Bar + line chart with axes and tooltip.`,
      steps: () => `Three-step flow with active/idle states.`,
      badge: () => `Multi-tone badges using primary, accent, and ghost variants.`,
      empty: () => `Empty state card with actions and themed tone.`,
    },
  },
  zh: {
    descriptions: {
      nav: (themeLabel: string) =>
        `${themeLabel} 風格導覽列，展示文字對比與按鈕風格。`,
      sidebar: () => `側邊導覽示例，沿用 panel-surface 與 active 狀態。`,
      hero: () => `首屏 CTA，展示背景/文字對比與按鈕邊角。`,
      card: () => `以卡片展示核心特色，沿用 card-surface / highlight token。`,
      form: () => `表單控制用 input/table token，確保焦點與邊框跟著主題切換。`,
      table: () => `輕量報表表格，含操作行為。`,
      stats: () => `三欄指標卡，對比主副色並用 accent 表示增長。`,
      cta: () => `宣傳/促銷條，含主次按鈕與文案。`,
      chart: () => `長條 + 折線範例，含刻度與 tooltip。`,
      steps: () => `三步驟流程，示範 active / idle 狀態。`,
      badge: () => `多色標籤，使用主色、強調色與 ghost 變化。`,
      empty: () => `空狀態卡片，含動作按鈕與對應主題語氣。`,
    },
  },
};

const makeTemplates = (
  themeLabel: string,
  lang: TemplateLanguage,
): TemplateItem[] => {
  const t = translations[lang]?.descriptions ?? translations.en.descriptions;
  return [
    {
      id: `${themeLabel}-nav`.toLowerCase().replace(/\s+/g, "-"),
      title: "Top Navigation",
      description: t.nav(themeLabel),
      category: "Nav",
      code: baseCode.nav(themeLabel),
    },
    {
      id: `${themeLabel}-sidebar`.toLowerCase().replace(/\s+/g, "-"),
      title: "Sidebar",
      description: t.sidebar(),
      category: "Sidebar",
      code: baseCode.sidebar(themeLabel),
    },
    {
      id: `${themeLabel}-hero`.toLowerCase().replace(/\s+/g, "-"),
      title: "Hero CTA",
      description: t.hero(),
      category: "Hero",
      code: baseCode.hero(themeLabel),
    },
    {
      id: `${themeLabel}-card`.toLowerCase().replace(/\s+/g, "-"),
      title: "Feature Card",
      description: t.card(),
      category: "Card",
      code: baseCode.card(themeLabel),
    },
    {
      id: `${themeLabel}-form`.toLowerCase().replace(/\s+/g, "-"),
      title: "Form Block",
      description: t.form(),
      category: "Form",
      code: baseCode.form(themeLabel),
    },
    {
      id: `${themeLabel}-table`.toLowerCase().replace(/\s+/g, "-"),
      title: "Data Table",
      description: t.table(),
      category: "Table",
      code: baseCode.table(themeLabel),
    },
    {
      id: `${themeLabel}-stats`.toLowerCase().replace(/\s+/g, "-"),
      title: "Stats Row",
      description: t.stats(),
      category: "Stats",
      code: baseCode.stats(),
    },
    {
      id: `${themeLabel}-cta`.toLowerCase().replace(/\s+/g, "-"),
      title: "CTA Banner",
      description: t.cta(),
      category: "CTA",
      code: baseCode.cta(themeLabel),
    },
    {
      id: `${themeLabel}-chart`.toLowerCase().replace(/\s+/g, "-"),
      title: "Chart Block",
      description: t.chart(),
      category: "Chart",
      code: baseCode.chart(themeLabel),
    },
    {
      id: `${themeLabel}-steps`.toLowerCase().replace(/\s+/g, "-"),
      title: "Stepper",
      description: t.steps(),
      category: "Steps",
      code: baseCode.steps(themeLabel),
    },
    {
      id: `${themeLabel}-badge`.toLowerCase().replace(/\s+/g, "-"),
      title: "Badges",
      description: t.badge(),
      category: "Badge",
      code: baseCode.badge(themeLabel),
    },
    {
      id: `${themeLabel}-empty`.toLowerCase().replace(/\s+/g, "-"),
      title: "Empty State",
      description: t.empty(),
      category: "Empty",
      code: baseCode.empty(themeLabel),
    },
  ];
};

export const getTemplateLibrary = (lang: TemplateLanguage) => ({
  starwars: makeTemplates("Star Wars HUD", lang),
  "animal-crossing": makeTemplates("Animal Crossing", lang),
  cyberpunk: makeTemplates("Cyberpunk Neon", lang),
  ghibli: makeTemplates("Ghibli Nature", lang),
  minimal: makeTemplates("Minimal", lang),
  lego: makeTemplates("LEGO Block", lang),
  "retro-arcade": makeTemplates("Retro Arcade", lang),
  "apple-vision": makeTemplates("Apple Vision", lang),
  "nasa-control": makeTemplates("NASA Control", lang),
  "medieval-rpg": makeTemplates("Medieval RPG", lang),
  "cozy-cafe": makeTemplates("Cozy Café", lang),
});

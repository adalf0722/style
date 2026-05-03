import { useMemo, useState } from "react";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { FrontendLayout } from "../../layouts/frontend/FrontendLayout";
import { useTheme } from "../../core/theme-store";
import {
  getTemplateLibrary,
  styleNotes,
  type TemplateItem,
  type TemplateLanguage,
} from "./templateLibrary";

const LANG_KEY = "template-lang";

const getInitialLanguage = (): TemplateLanguage => {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === "zh" || saved === "en" ? saved : "en";
};

const uiCopy = {
  en: {
    eyebrow: "Template library",
    heading: "Theme templates you can copy-paste",
    sub: (name: string) =>
      `Current theme: ${name}. Templates auto-apply CSS variables, typography, and radii so you stay on-brand.`,
    styleTitle: "Style notes",
  },
  zh: {
    eyebrow: "模板庫",
    heading: "即拷即用的主題模板",
    sub: (name: string) =>
      `當前主題：${name}。以下模板會自動套用 CSS 變數、字體與半徑，直接拷貝即可維持同款風格。`,
    styleTitle: "風格說明",
  },
};

export const TemplatePage = () => {
  const [lang, setLang] = useState<TemplateLanguage>(getInitialLanguage);
  const { currentTheme } = useTheme();
  const [liveCodes, setLiveCodes] = useState<Record<string, string>>({});
  const [playgroundItem, setPlaygroundItem] = useState<TemplateItem | null>(null);

  const templates = useMemo(() => {
    const lib = getTemplateLibrary(lang);
    type TemplateLookup = ReturnType<typeof getTemplateLibrary>;
    return lib[currentTheme.id as keyof TemplateLookup] ?? lib.minimal;
  }, [currentTheme.id, lang]);

  const handleLangChange = (next: TemplateLanguage) => {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  };

  const copy = uiCopy[lang];
  const note = styleNotes[currentTheme.id] ?? styleNotes.minimal;
  const noteContent = note ? note[lang] : null;
  const getCurrentCode = (item: TemplateItem) =>
    liveCodes[item.id] ?? item.code;

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // ignore clipboard failures
    }
  };

  const buildExportDocument = (html: string, name?: string) => {
    const computed = getComputedStyle(document.documentElement);
    const fallbackVars: Record<string, string> = {
      "--radius-base": "12px",
      "--card-surface-color": "#ffffff",
      "--color-surface": "#ffffff",
      "--color-text": "#1f2933",
      "--card-border": "rgba(0,0,0,0.08)",
      "--card-shadow": "0 12px 28px rgba(0,0,0,0.15)",
      "--button-border": "rgba(0,0,0,0.08)",
      "--button-shadow": "0 8px 18px rgba(0,0,0,0.14)",
      "--color-primary": "#2d8f7c",
      "--color-secondary": "#6b7280",
      "--color-accent": "#f59e0b",
      "--color-background": "#f7f1e7",
      "--input-bg": "#ffffff",
      "--button-ghost-bg": "rgba(45,143,124,0.12)",
      "--button-shadow-hover": "0 10px 20px rgba(0,0,0,0.16)",
      "--button-shadow-active": "0 6px 14px rgba(0,0,0,0.16)",
      "--button-overlay": "none",
      "--button-sheen": "linear-gradient(120deg, rgba(255,255,255,0.38), transparent 60%)",
      "--card-border-width": "1px",
      "--button-border-width": "1px",
      "--card-shadow-hover": "0 16px 32px rgba(0,0,0,0.18)",
      "--card-highlight": "linear-gradient(135deg, rgba(255,255,255,0.32), transparent 65%)",
      "--card-highlight-opacity": "0.4",
      "--card-texture": "linear-gradient(120deg, rgba(255,255,255,0.24), transparent 70%)",
      "--card-texture-size": "240px 240px",
      "--bg-gradient": "linear-gradient(135deg, #f7f1e7 0%, #f3e8d3 50%, #f7f1e7 100%)",
      "--bg-gradient-opacity": "1",
      "--bg-pattern": "repeating-linear-gradient(135deg, rgba(45,143,124,0.08) 0 3px, transparent 3px 16px)",
      "--bg-pattern-size": "180px 180px",
      "--bg-pattern-opacity": "0.35",
      "--bg-overlay": "none",
      "--bg-overlay-size": "auto",
      "--bg-overlay-opacity": "1",
      "--bg-animation": "none",
      "--bg-overlay-animation": "none",
      "--table-border": "rgba(0,0,0,0.08)",
      "--input-border": "rgba(0,0,0,0.1)",
      "--animation-style": "180ms ease",
    };

    const resolve = (key: string, fallback?: string) => {
      const cssValue = computed.getPropertyValue(key).trim();
      if (cssValue) return cssValue;
      if (fallbackVars[key]) return fallbackVars[key];
      return fallback ?? "";
    };

    const tokens = {
      radius: resolve("--radius-base", "12px"),
      surface: resolve("--color-surface", "#141a2b"),
      cardSurface: resolve("--card-surface-color", resolve("--color-surface", "#141a2b")),
      text: resolve("--color-text", "#f5f7ff"),
      secondary: resolve("--color-secondary", "#7aa2ff"),
      accent: resolve("--color-accent", "#f472b6"),
      border: resolve("--card-border", "rgba(246,201,69,0.25)"),
      borderWidth: resolve("--card-border-width", "1px"),
      shadow: resolve("--card-shadow", "0 18px 40px rgba(12,14,24,0.55)"),
      shadowHover: resolve("--card-shadow-hover", "0 22px 50px rgba(6,8,18,0.6)"),
      buttonBorder: resolve("--button-border", "transparent"),
      buttonBorderWidth: resolve("--button-border-width", "1px"),
      buttonShadow: resolve("--button-shadow", "0 10px 24px rgba(246,201,69,0.25)"),
      buttonShadowHover: resolve("--button-shadow-hover", "0 14px 30px rgba(246,201,69,0.35)"),
      buttonShadowActive: resolve("--button-shadow-active", "0 6px 18px rgba(246,201,69,0.25)"),
      buttonOverlay: resolve("--button-overlay", "none"),
      buttonSheen: resolve("--button-sheen", "linear-gradient(120deg, rgba(255,255,255,0.35), transparent 60%)"),
      primary: resolve("--color-primary", "#f6c945"),
      background: resolve("--color-background", "#0b0f1a"),
      inputBg: resolve("--input-bg", "rgba(255,255,255,0.04)"),
      ghostBg: resolve("--button-ghost-bg", "rgba(246,201,69,0.12)"),
      cardTexture: resolve("--card-texture", "none"),
      cardTextureSize: resolve("--card-texture-size", "auto"),
      cardHighlight: resolve("--card-highlight", "none"),
      cardHighlightOpacity: resolve("--card-highlight-opacity", "0"),
      bgGradient: resolve("--bg-gradient", resolve("--color-background", "#0b0f1a")),
      bgGradientOpacity: resolve("--bg-gradient-opacity", "1"),
      bgPattern: resolve("--bg-pattern", "none"),
      bgPatternSize: resolve("--bg-pattern-size", "auto"),
      bgPatternOpacity: resolve("--bg-pattern-opacity", "1"),
      bgOverlay: resolve("--bg-overlay", "none"),
      bgOverlaySize: resolve("--bg-overlay-size", "auto"),
      bgOverlayOpacity: resolve("--bg-overlay-opacity", "1"),
      bgAnimation: resolve("--bg-animation", "none"),
      bgOverlayAnimation: resolve("--bg-overlay-animation", "none"),
      tableBorder: resolve("--table-border", resolve("--card-border", "#d5d9e2")),
      inputBorder: resolve("--input-border", resolve("--card-border", "#d5d9e2")),
      animation: resolve("--animation-style", "180ms ease"),
    };

    const withAlpha = (color: string, alpha: number) => {
      if (!color) return "";
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return "";
      ctx.fillStyle = color;
      const parsed = ctx.fillStyle;
      if (parsed.startsWith("rgb")) {
        const parts = parsed
          .replace(/rgba?\(/, "")
          .replace(")", "")
          .split(",")
          .map((p) => p.trim());
        const [r, g, b] = parts;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      return color;
    };

    const reset = `
*,*::before,*::after{box-sizing:border-box;}
body{margin:0;padding:24px;font-family:"Inter","Segoe UI",system-ui,-apple-system,sans-serif;background:${tokens.background};color:${tokens.text};background-image:${tokens.bgGradient},${tokens.bgPattern},${tokens.bgOverlay};background-size:cover,${tokens.bgPatternSize},${tokens.bgOverlaySize};background-repeat:no-repeat,repeat,repeat;}
a{text-decoration:none;color:inherit;}
button{font:inherit;cursor:pointer;}
code,pre,textarea{font-family:"JetBrains Mono","SFMono-Regular",ui-monospace,monospace;}
`;

    const utilities = `
/* Core components with resolved tokens */
.card-surface{position:relative;border-radius:${tokens.radius};background-color:${tokens.cardSurface};background-image:${tokens.cardTexture};background-size:${tokens.cardTextureSize};background-repeat:repeat;border:${tokens.borderWidth} solid ${tokens.border};box-shadow:${tokens.shadow};transition:${tokens.animation};overflow:hidden;}
.card-surface:hover{transform:translateY(-2px);box-shadow:${tokens.shadowHover};}
.card-surface::after{content:"";position:absolute;inset:0;pointer-events:none;background:${tokens.cardHighlight};opacity:${tokens.cardHighlightOpacity};}
.panel-surface{position:relative;border-radius:${tokens.radius};background-color:${tokens.cardSurface};background-image:${tokens.cardTexture};background-size:${tokens.cardTextureSize};background-repeat:repeat;border:${tokens.borderWidth} solid ${tokens.border};box-shadow:${tokens.shadow};transition:${tokens.animation};overflow:hidden;}
.btn-base{position:relative;border-radius:${tokens.radius};border:${tokens.buttonBorderWidth} solid ${tokens.buttonBorder};padding:0.5rem 1rem;box-shadow:${tokens.buttonShadow};background:${tokens.surface};color:${tokens.text};display:inline-flex;align-items:center;gap:8px;transition:${tokens.animation};overflow:hidden;background-image:${tokens.buttonOverlay};background-size:cover;}
.btn-base::after{content:"";position:absolute;inset:0;border-radius:inherit;background:${tokens.buttonSheen};opacity:0;transition:${tokens.animation};pointer-events:none;}
.btn-base:hover{transform:translateY(-1px);box-shadow:${tokens.buttonShadowHover};}
.btn-base:hover::after{opacity:0.7;}
.btn-base:active{transform:translateY(0);box-shadow:${tokens.buttonShadowActive};}
.btn-base:active::after{opacity:0.3;}
.btn-ghost{background:${tokens.ghostBg};color:${tokens.primary};border-color:${tokens.primary};}
.rounded-theme{border-radius:${tokens.radius};}
/* Typography */
.text-text{color:${tokens.text};}
.text-secondary{color:${tokens.secondary};}
.text-accent{color:${tokens.accent};}
.text-primary{color:${tokens.primary};}
.text-background{color:${tokens.background};}
.text-xs{font-size:12px;line-height:1.5;}
.text-sm{font-size:14px;line-height:1.5;}
.text-lg{font-size:18px;line-height:1.5;}
.text-xl{font-size:20px;line-height:1.5;}
.text-2xl{font-size:24px;line-height:1.4;}
.text-3xl{font-size:28px;line-height:1.3;}
.text-\\[11px\\]{font-size:11px;line-height:1.5;}
.font-semibold{font-weight:600;}
.uppercase{text-transform:uppercase;}
.tracking-wide{letter-spacing:0.08em;}
/* Colors & backgrounds */
.bg-primary{background:${tokens.primary};color:${tokens.background};}
.bg-primary\\/20{background:${withAlpha(tokens.primary,0.2)};color:${tokens.text};}
.bg-accent{background:${tokens.accent};color:${tokens.background};}
.bg-secondary{background:${tokens.secondary};color:${tokens.background};}
.bg-background{background:${tokens.background};color:${tokens.text};}
.bg-surface{background:${tokens.surface};color:${tokens.text};}
.bg-\\[var\\(--card-surface-color,var\\(--color-surface\\)\\)\\]{background:${tokens.cardSurface};}
.bg-\\[var\\(--color-surface\\)\\]{background:${tokens.surface};}
.bg-\\[var\\(--input-bg\\)\\]{background:${tokens.inputBg};}
/* Layout */
.flex{display:flex;}
.inline-flex{display:inline-flex;}
.block{display:block;}
.inline-block{display:inline-block;}
.flex-col{flex-direction:column;}
.flex-wrap{flex-wrap:wrap;}
.flex-1{flex:1 1 0%;}
.items-center{align-items:center;}
.items-start{align-items:flex-start;}
.items-end{align-items:flex-end;}
.justify-between{justify-content:space-between;}
.justify-center{justify-content:center;}
.justify-end{justify-content:flex-end;}
.gap-1{gap:4px;}
.gap-2{gap:8px;}
.gap-3{gap:12px;}
.gap-4{gap:16px;}
.gap-6{gap:24px;}
.px-2{padding-left:8px;padding-right:8px;}
.px-3{padding-left:12px;padding-right:12px;}
.px-4{padding-left:16px;padding-right:16px;}
.px-5{padding-left:20px;padding-right:20px;}
.px-6{padding-left:24px;padding-right:24px;}
.py-1{padding-top:4px;padding-bottom:4px;}
.py-2{padding-top:8px;padding-bottom:8px;}
.py-3{padding-top:12px;padding-bottom:12px;}
.py-4{padding-top:16px;padding-bottom:16px;}
.p-5{padding:20px;}
.p-6{padding:24px;}
.p-8{padding:32px;}
.m-0{margin:0;}
.mt-1{margin-top:4px;}
.mt-2{margin-top:8px;}
.mt-3{margin-top:12px;}
.mt-4{margin-top:16px;}
.mb-1{margin-bottom:4px;}
.mb-2{margin-bottom:8px;}
.mb-3{margin-bottom:12px;}
.mb-4{margin-bottom:16px;}
.w-full{width:100%;}
.w-64{width:256px;}
.w-12{width:48px;}
.w-10{width:40px;}
.h-full{height:100%;}
.h-24{height:96px;}
.h-12{height:48px;}
.text-center{text-align:center;}
.grid{display:grid;}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
.grid-cols-\\[60px_1fr\\]{grid-template-columns:60px 1fr;}
.space-y-1> :not(:first-child){margin-top:4px;}
.space-y-2> :not(:first-child){margin-top:8px;}
.space-y-3> :not(:first-child){margin-top:12px;}
.space-y-4> :not(:first-child){margin-top:16px;}
.border{border:${tokens.borderWidth} solid ${tokens.border};}
.border-b{border-bottom:${tokens.borderWidth} solid ${tokens.border};}
.border-dashed{border-style:dashed;}
.border-separate{border-collapse:separate;}
.border-spacing-0{border-spacing:0;}
.rounded-full{border-radius:9999px;}
.rounded-theme{border-radius:${tokens.radius};}
.overflow-hidden{overflow:hidden;}
.overflow-auto{overflow:auto;}
.shadow-card{box-shadow:${tokens.shadow};}
.shadow-\\[var\\(--card-shadow\\)\\]{box-shadow:${tokens.shadow};}
.hover\\:text-primary:hover{color:${tokens.primary};}
.hover\\:text-secondary:hover{color:${tokens.secondary};}
.hover\\:text-background:hover{color:${tokens.background};}
.hover\\:underline:hover{text-decoration:underline;}
.hover\\:text-text:hover{color:${tokens.text};}
.border-\\[var\\(--card-border\\)\\]{border:${tokens.borderWidth} solid ${tokens.border};}
.border-\\[var\\(--table-border\\)\\]{border:1px solid ${tokens.tableBorder};}
.bg-\\[var\\(--button-ghost-bg\\)\\]{background:${tokens.ghostBg};}
.text-\\[var\\(--color-text\\)\\]{color:${tokens.text};}
.text-\\[11px\\]{font-size:11px;line-height:1.5;}
.relative{position:relative;}
.absolute{position:absolute;}
.inset-0{inset:0;}
.right-3{right:12px;}
.top-3{top:12px;}
.bottom-0{bottom:0;}
.left-0{left:0;}
`;

    const doc = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name || "template"}</title>
  <style>
  ${reset}
  ${utilities}
  </style>
</head>
<body>
${html}
</body>
</html>`;

    return doc;
  };

  const handleDownload = (html: string, name: string) => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name || "template"}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const editedCount = Object.keys(liveCodes).length;
  const templateMetrics = [
    { label: "Templates", value: `${templates.length}` },
    { label: "Theme", value: currentTheme.name },
    { label: "Edited", value: `${editedCount}` },
  ];

  return (
    <FrontendLayout>
      <div className="space-y-8">
        <section className="panel-surface overflow-hidden p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                {copy.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text md:text-5xl">
                {copy.heading}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-secondary md:text-base">
                {copy.sub(currentTheme.name)}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 text-xs sm:items-end">
              <span className="font-semibold uppercase tracking-wide text-secondary">
                Lang
              </span>
              <div className="flex min-h-11 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-surface-color,var(--color-surface))] px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <label className="flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 text-secondary hover:text-text">
                  <input
                    type="radio"
                    name="template-lang"
                    value="en"
                    checked={lang === "en"}
                    onChange={() => handleLangChange("en")}
                    className="h-4 w-4 accent-[var(--color-primary)]"
                  />
                  EN
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 text-secondary hover:text-text">
                  <input
                    type="radio"
                    name="template-lang"
                    value="zh"
                    checked={lang === "zh"}
                    onChange={() => handleLangChange("zh")}
                    className="h-4 w-4 accent-[var(--color-primary)]"
                  />
                  中文
                </label>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {templateMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-theme border border-secondary bg-background px-4 py-3"
              >
                <p className="text-xs text-secondary">{metric.label}</p>
                <p className="mt-1 text-xl font-semibold text-text">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {noteContent && (
          <section className="panel-surface p-5 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  {copy.styleTitle}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-text">
                  {noteContent.title}
                </h2>
              </div>
              <span className="rounded-full border border-secondary bg-background px-3 py-1.5 text-xs font-semibold text-secondary">
                sample_style.md
              </span>
            </div>
            <ul className="mt-5 grid gap-3 text-sm text-secondary lg:grid-cols-2">
              {noteContent.bullets.map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-theme border border-secondary bg-background px-4 py-3"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-6">{line}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="grid min-w-0 gap-6 xl:grid-cols-2">
          {templates.map((item: TemplateItem) => {
            const currentCode = getCurrentCode(item);
            return (
              <Card key={item.id} className="relative flex min-w-0 flex-col gap-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full border border-secondary bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight text-text">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-secondary">
                      {item.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="min-h-11 px-3"
                    onClick={() => setPlaygroundItem(item)}
                  >
                    Playground
                  </Button>
                </div>

                <div className="grid flex-1 gap-4">
                  <div className="min-w-0 overflow-hidden rounded-theme border border-[var(--card-border)] bg-[var(--color-surface)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--card-border)] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        Editable code
                      </p>
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        <Button
                          variant="ghost"
                          className="min-h-9 px-3 py-1"
                          onClick={() => handleCopy(currentCode)}
                        >
                          Copy current
                        </Button>
                        <Button
                          variant="ghost"
                          className="min-h-9 px-3 py-1"
                          onClick={() =>
                            setLiveCodes((prev) => {
                              const next = { ...prev };
                              next[item.id] = item.code;
                              return next;
                            })
                          }
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                    <textarea
                      aria-label={`${item.title} template code`}
                      className="h-44 w-full resize-y bg-[var(--input-bg)] px-4 py-3 font-mono text-[12px] leading-relaxed text-text/90 outline-none"
                      value={currentCode}
                      onChange={(e) =>
                        setLiveCodes((prev) => ({
                          ...prev,
                          [item.id]: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="min-w-0 overflow-hidden rounded-theme border border-dashed border-[var(--card-border)] bg-background p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        Live preview
                      </p>
                      <Button
                        variant="ghost"
                        className="min-h-9 px-3 py-1 text-[11px]"
                        onClick={() => handleCopy(item.code)}
                      >
                        Copy original
                      </Button>
                    </div>
                    <div
                      className="preview-root overflow-auto"
                      dangerouslySetInnerHTML={{ __html: currentCode }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </section>

        {playgroundItem ? (
          <div className="fixed inset-0 z-50 bg-black/60 p-4">
            <div className="panel-surface relative mx-auto flex h-full max-h-[90vh] max-w-6xl flex-col gap-4 overflow-hidden p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-secondary pb-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    Playground
                  </p>
                  <h3 className="text-2xl font-semibold text-text">
                    {playgroundItem.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-6 text-secondary">
                    Live edit on the left, preview on the right. Export gives an
                    inline HTML file with resolved theme tokens.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <Button
                    variant="ghost"
                    className="min-h-9 px-3 py-1"
                    onClick={() => handleCopy(getCurrentCode(playgroundItem))}
                  >
                    Copy current
                  </Button>
                  <Button
                    variant="ghost"
                    className="min-h-9 px-3 py-1"
                    onClick={() =>
                      handleCopy(
                        buildExportDocument(
                          getCurrentCode(playgroundItem),
                          playgroundItem.title,
                        ),
                      )
                    }
                  >
                    Export inline HTML
                  </Button>
                  <Button
                    variant="ghost"
                    className="min-h-9 px-3 py-1"
                    onClick={() =>
                      handleDownload(
                        buildExportDocument(
                          getCurrentCode(playgroundItem),
                          playgroundItem.title,
                        ),
                        playgroundItem.title.replace(/\s+/g, "-").toLowerCase(),
                      )
                    }
                  >
                    Download .html
                  </Button>
                  <Button
                    variant="ghost"
                    className="min-h-9 px-3 py-1"
                    onClick={() => setPlaygroundItem(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>

              <div className="grid flex-1 gap-4 overflow-hidden md:grid-cols-2">
                <div className="flex flex-col overflow-hidden rounded-theme border border-[var(--card-border)] bg-[var(--color-surface)]">
                  <div className="border-b border-[var(--card-border)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-secondary">
                    Code
                  </div>
                  <textarea
                    aria-label={`${playgroundItem.title} playground code`}
                    className="h-full w-full flex-1 bg-[var(--input-bg)] px-4 py-3 font-mono text-[12px] leading-relaxed text-text/90 outline-none"
                    value={getCurrentCode(playgroundItem)}
                    onChange={(e) =>
                      setLiveCodes((prev) => ({
                        ...prev,
                        [playgroundItem.id]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex flex-col overflow-hidden rounded-theme border border-[var(--card-border)] bg-[var(--color-surface)]">
                  <div className="border-b border-[var(--card-border)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-secondary">
                    Preview
                  </div>
                  <div className="preview-root flex-1 overflow-auto p-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: getCurrentCode(playgroundItem),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </FrontendLayout>
  );
};

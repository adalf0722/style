import { useEffect, useMemo, useState } from "react";
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
  const [lang, setLang] = useState<TemplateLanguage>("en");
  const { currentTheme } = useTheme();

  const templates = useMemo(() => {
    const lib = getTemplateLibrary(lang);
    type TemplateLookup = ReturnType<typeof getTemplateLibrary>;
    return lib[currentTheme.id as keyof TemplateLookup] ?? lib.minimal;
  }, [currentTheme.id, lang]);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) as TemplateLanguage | null;
    if (saved === "zh" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (next: TemplateLanguage) => {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  };

  const copy = uiCopy[lang];
  const note =
    styleNotes[currentTheme.id] ??
    styleNotes.minimal;
  const noteContent = note ? note[lang] : null;

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // ignore clipboard failures
    }
  };

  return (
    <FrontendLayout>
      <div className="mb-10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-wide text-secondary">
            {copy.eyebrow}
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-secondary">Lang</span>
            <label className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-surface-color,var(--color-surface))] px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
              <span className="flex items-center gap-1 text-secondary hover:text-text cursor-pointer">
                <input
                  type="radio"
                  name="template-lang"
                  value="en"
                  checked={lang === "en"}
                  onChange={() => handleLangChange("en")}
                  className="h-4 w-4 accent-[var(--color-primary)]"
                />
                EN
              </span>
              <span className="flex items-center gap-1 text-secondary hover:text-text cursor-pointer">
                <input
                  type="radio"
                  name="template-lang"
                  value="zh"
                  checked={lang === "zh"}
                  onChange={() => handleLangChange("zh")}
                  className="h-4 w-4 accent-[var(--color-primary)]"
                />
                中文
              </span>
            </label>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-text">{copy.heading}</h1>
        <p className="max-w-3xl text-secondary">{copy.sub(currentTheme.name)}</p>
      </div>

      {noteContent && (
        <div className="mb-8 panel-surface p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-text">
              {copy.styleTitle} · {noteContent.title}
            </h3>
            <span className="text-xs text-secondary">Reference: sample_style.md</span>
          </div>
          <ul className="mt-3 grid gap-2 text-sm text-secondary lg:grid-cols-2">
            {noteContent.bullets.map((line, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {templates.map((item: TemplateItem) => (
          <Card key={item.id} className="relative flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-secondary">
                  {item.category}
                </div>
                <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
              <Button
                variant="ghost"
                className="px-3 py-1 text-xs"
                onClick={() => handleCopy(item.code)}
              >
                Copy code
              </Button>
            </div>

            <div className="rounded-theme border border-[var(--card-border)] bg-[var(--color-surface)] p-4 text-xs text-secondary">
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-text/90">
                {item.code}
              </pre>
            </div>

            <div className="rounded-theme border border-dashed border-[var(--card-border)] p-4">
              <p className="mb-2 text-xs uppercase tracking-wide text-secondary">
                Live preview
              </p>
              {/* eslint-disable-next-line react/no-danger */}
              <div
                className="preview-root"
                dangerouslySetInnerHTML={{ __html: item.code }}
              />
            </div>
          </Card>
        ))}
      </div>
    </FrontendLayout>
  );
};

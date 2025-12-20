import { useEffect, useMemo, useState } from "react";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { FrontendLayout } from "../../layouts/frontend/FrontendLayout";
import { useTheme } from "../../core/theme-store";
import {
  getTemplateLibrary,
  type TemplateLanguage,
  type TemplateItem,
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

const styleNotes: Record<
  string,
  { en: { title: string; bullets: string[] }; zh: { title: string; bullets: string[] } }
> = {
  "animal-crossing": {
    en: {
      title: "Animal Crossing Vibe",
      bullets: [
        "Warm pastel greens, sky blue, soft yellow; low-saturation hand-painted feel.",
        "Rounded cards (16–24px), wood grain, leaf/sticker buttons.",
        "Friendly rounded type (Nunito/Quicksand) with airy spacing.",
        "Tiny bounce/hover wobble for playfulness.",
      ],
    },
    zh: {
      title: "動物森友會風",
      bullets: [
        "溫暖粉綠、天空藍、柔和暖黃，低飽和手繪感。",
        "圓角卡片（16–24px）、木紋材質、葉子/貼紙按鈕。",
        "圓潤親和的字體（Nunito/Quicksand），留白充足。",
        "微縮放、輕微晃動的互動感。",
      ],
    },
  },
  starwars: {
    en: {
      title: "Star Wars HUD",
      bullets: [
        "Deep navy/black with gold + blue neon accents, high contrast.",
        "Hard edges, hologram/glass panels, scanline overlays.",
        "Futuristic type (Orbitron/Space Grotesk).",
        "Sweep/scanline animations for HUD feel.",
      ],
    },
    zh: {
      title: "星際 HUD",
      bullets: [
        "深色底搭配金/藍霓虹，高對比。",
        "硬邊框、全息/玻璃板、掃描線紋理。",
        "科幻字體（Orbitron/Space Grotesk）。",
        "掃描線、光束橫移的 HUD 動畫。",
      ],
    },
  },
  ghibli: {
    en: {
      title: "Ghibli Nature",
      bullets: [
        "Airy whites, sage greens, sky gold; watercolor softness.",
        "Soft icons, paper stickers, light borders.",
        "Serif + sans pairing (Merriweather + Nunito).",
        "Gentle drift/fade transitions.",
      ],
    },
    zh: {
      title: "吉卜力自然",
      bullets: [
        "通透白、鼠尾草綠、天空金，水彩柔和感。",
        "柔和圖示、紙感貼紙、細邊框。",
        "襯線+無襯線搭配（Merriweather+Nunito）。",
        "柔和漂浮/淡入淡出的轉場。",
      ],
    },
  },
  cyberpunk: {
    en: {
      title: "Cyberpunk Neon",
      bullets: [
        "Deep noir with magenta/cyan neon and rainbow accents.",
        "Glass, neon borders, glitch/scanline touches.",
        "Condensed/sci-fi type, sharp edges.",
        "Glitch flashes and sheen on hover.",
      ],
    },
    zh: {
      title: "電馭霓虹",
      bullets: [
        "深色底搭配洋紅/青色霓虹與炫彩點綴。",
        "玻璃質感、霓虹邊框、微量 glitch/掃描線。",
        "緊湊科幻字體，銳利邊角。",
        "hover 帶 glitch 閃動與光澤。",
      ],
    },
  },
  minimal: {
    en: {
      title: "Minimal",
      bullets: [
        "Crisp white/gray neutrals, light strokes.",
        "Thin borders, subtle texture, small radius.",
        "Inter/IBM Plex, tight tracking.",
        "Calm fade/scale on hover.",
      ],
    },
    zh: {
      title: "極簡",
      bullets: [
        "純白與淺灰中性調，乾淨筆觸。",
        "細邊框、輕紋理、小圓角。",
        "Inter/IBM Plex，緊湊字距。",
        "輕量淡入/縮放的互動。",
      ],
    },
  },
  lego: {
    en: {
      title: "LEGO Block",
      bullets: [
        "Bright primary reds/yellows/blues with playful contrast.",
        "Blocky studs, chunky rounded corners.",
        "Playful rounded type (Fredoka/Baloo).",
        "Micro-bounce on hover/press.",
      ],
    },
    zh: {
      title: "樂高積木",
      bullets: [
        "明亮紅黃藍主色，高飽和童趣感。",
        "積木凸點、厚實圓角。",
        "可愛圓潤字體（Fredoka/Baloo）。",
        "hover/press 有微彈跳。",
      ],
    },
  },
  "retro-arcade": {
    en: {
      title: "Retro Arcade",
      bullets: [
        "Black CRT backdrop with neon magenta/cyan/green.",
        "Pixel cues, grid/scanline overlays.",
        "Pixel font (Press Start 2P), chunky UI.",
        "CRT flicker and progressive reveal.",
      ],
    },
    zh: {
      title: "復古電玩",
      bullets: [
        "黑色 CRT 背景，洋紅/青/綠霓虹。",
        "像素元素、格線/掃描線覆蓋。",
        "像素字體（Press Start 2P），厚重按鈕。",
        "CRT 閃爍、漸進顯示動畫。",
      ],
    },
  },
  "apple-vision": {
    en: {
      title: "Spatial Minimal",
      bullets: [
        "Pure white/ice neutrals with soft blue/green mist.",
        "Large radii, frosted/glass layers, airy depth.",
        "Inter/IBM Plex clean typography.",
        "Smooth fades and parallax-like depth.",
      ],
    },
    zh: {
      title: "空間極簡",
      bullets: [
        "純白與冰感中性，淡藍/綠霧化。",
        "大圓角、毛玻璃層次、留白感。",
        "Inter/IBM Plex 清爽排版。",
        "順滑淡入與輕微景深移動。",
      ],
    },
  },
  "nasa-control": {
    en: {
      title: "Mission Control",
      bullets: [
        "Deep navy/black with cyan and caution amber accents.",
        "Tables, grids, data panels; utilitarian lines.",
        "IBM/Inter functional type.",
        "Pulse bars and sweep overlays for telemetry.",
      ],
    },
    zh: {
      title: "任務管控",
      bullets: [
        "深藍/黑底，青色與琥珀警示色點綴。",
        "表格、格線、數據面板，理性線條。",
        "IBM/Inter 功能導向字體。",
        "條形脈動與掃描覆蓋，呈現遙測感。",
      ],
    },
  },
  "medieval-rpg": {
    en: {
      title: "Medieval RPG",
      bullets: [
        "Rich browns and gold with muted greens.",
        "Shield frames, ornate borders, subtle parchment texture.",
        "Cinzel/Merriweather serif flair.",
        "Glow/pulse highlights for runic feel.",
      ],
    },
    zh: {
      title: "中古奇幻",
      bullets: [
        "濃郁棕金色調，帶低飽和綠。",
        "盾形框、裝飾邊框、紙張紋理。",
        "Cinzel/Merriweather 的古風襯線。",
        "微光暈與脈動，營造符文感。",
      ],
    },
  },
  "cozy-cafe": {
    en: {
      title: "Cozy Café",
      bullets: [
        "Latte browns, matcha greens, cream neutrals.",
        "Paper tags, soft corners, subtle grain.",
        "Baloo/Nunito friendly type.",
        "Slow fades with warm shadowing.",
      ],
    },
    zh: {
      title: "療癒咖啡館",
      bullets: [
        "拿鐵棕、抹茶綠、奶油中性色。",
        "紙質標籤、柔和圓角、細緞紋理。",
        "Baloo/Nunito 親和字體。",
        "緩慢淡入與溫暖陰影。",
      ],
    },
  },
};

export const TemplatePage = () => {
  const [lang, setLang] = useState<TemplateLanguage>("en");
  const { currentTheme } = useTheme();
  const templates = useMemo(() => {
    const lib = getTemplateLibrary(lang);
    type TemplateLookup = ReturnType<typeof getTemplateLibrary>;
    return (
      lib[currentTheme.id as keyof TemplateLookup] ??
      lib.minimal
    );
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

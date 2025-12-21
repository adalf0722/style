# Theme Capsule

一個多主題的 React + TypeScript + Vite 展示站，支援即時切換主題、可複製的模板庫，以及多個主題化頁面（Home / Admin / Dashboard / Blog）。

英文版： [README.md](README.md)

<p align="center">
  <img src="public/style.webp" alt="Theme Capsule 預覽圖" width="880" />
</p>

## 為什麼要做 Theme Capsule？
多數時候功能寫得出來，但「一開始就有對味的 UI」很難。沒有設計背景的工程師，UI 修飾常常：
- 最後才做、花最多時間、結果「乾淨但普通」。

在嘗試 **vibe coding** 時發現：如果一開始就給 AI 一個「強烈、明確的主題」，整體質感會大幅提升。但市面上幾乎沒有可直接拿來用的前端主題參考，所以做了 Theme Capsule。

## 這是什麼？
不是 UI 框架，也不是設計系統，而是一個 **主題探索膠囊**：
- 同一組功能頁（Home / Admin / Dashboard / Blog）在不同主題下完全不同。
- 每個主題拆成可理解、可複製的設計 token 與元件樣式。
- 可當靈感、AI 對話的視覺參照、或產品快速起手的外觀設定。

## 誰適合用？
- 厭倦千篇一律的 dashboard。
- 想用 AI 協助設計但不知怎麼描述風格。
- 想比較同一功能在不同視覺語言下的感覺。
- 做 side project/demo/內部工具，想快速有識別度。

## 怎麼用？
- **切換主題觀察**：快速找到合適的視覺。
- **複製模板**：卡片/表格/儀表板/Blog 佈局皆主題化。
- **拿主題說明當 Prompt**：每個主題都有清晰描述。
- **玩視覺身份**：看產品在不同世界的樣子。

---

## 內含哪些？
- 12 種強烈風格主題（星戰、動森、電馭、吉卜力、極簡、樂高、復古電玩、Apple Vision、NASA 控制、奇幻 RPG、咖啡館、Linear、Supabase、Grafana）。
- 全域 ThemeSwitcher：token 控制色彩、字體、圓角、陰影、紋理、動畫。
- 模板庫：每主題可複製程式碼與即時預覽，含中英風格說明（導覽/側欄、Hero/Card/Form/Table、圖表、徽章、空狀態、步驟、CTA、Stats）。
- 主題化頁面：首頁行銷、Admin、Dashboard（假數據長條+折線/tooltip）、Blog 清單/詳情（頭像、TOC、導覽）、一致導覽列。
- `sample_style.md` 風格要點已映射到模板頁「風格說明」。

## 開發與執行
```bash
npm install
npm run dev    # 本地開發
npm run build  # 型別檢查 + 正式建置
npm run preview
```

## 專案結構
- `src/index.css` + `src/themes/styles/*.css`：基礎 tokens 與各主題延伸 CSS 變數/背景。
- `src/themes/*.json`：主題 token；於 `src/core/theme-loader/themeRegistry.ts` 註冊。
- `src/core/theme-store`：套用 tokens 至 `:root` 並記憶選擇。
- Layout/Pages：`src/layouts/*`、`src/pages/home`、`src/pages/admin`、`src/pages/dashboard`、`src/pages/blog`、`src/pages/templates`。
- Blog 資料：`src/pages/blog/blogData.ts`（佔位頭像 SVG）。
- 模板庫：`src/pages/templates/templateLibrary.ts`（主題模板 + 風格說明）、`TemplatePage.tsx`。

## 新增/調整主題
1) 在 `src/themes/` 建立 `<name>.json` 定義主色/文字等 tokens。  
2) 在 `src/themes/styles/` 建立 `<name>.css` 補充背景、紋理、按鈕/卡片/表單等變數。  
3) 在 `src/core/theme-loader/themeRegistry.ts` 註冊。  
4) （可選）在 `templateLibrary.ts` 補上該主題的風格說明。  

## 提醒
- Template 頁的 EN/中文切換只影響說明文字，程式碼片段保持英文。  
- 圖表資料為假數據，目的是突出各主題視覺差異。  

## 授權
MIT（詳見套件描述）。

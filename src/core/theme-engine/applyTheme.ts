import type { ThemeTokens } from "./themeTypes";

const tokenToCssVar: Record<keyof ThemeTokens, string> = {
  primary: "--color-primary",
  secondary: "--color-secondary",
  background: "--color-background",
  surface: "--color-surface",
  text: "--color-text",
  accent: "--color-accent",
  borderRadius: "--radius-base",
  shadowStyle: "--shadow-style",
  fontFamily: "--font-family",
  animationStyle: "--animation-style",
};

export const applyThemeTokens = (tokens: ThemeTokens) => {
  const root = document.documentElement;
  (Object.keys(tokenToCssVar) as Array<keyof ThemeTokens>).forEach((key) => {
    root.style.setProperty(tokenToCssVar[key], tokens[key]);
  });
};

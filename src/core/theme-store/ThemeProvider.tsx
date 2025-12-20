import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { applyThemeTokens } from "../theme-engine/applyTheme";
import type { ThemeDefinition } from "../theme-engine/themeTypes";
import { themeRegistry } from "../theme-loader/themeRegistry";

type ThemeContextValue = {
  themes: ThemeDefinition[];
  currentTheme: ThemeDefinition;
  setTheme: (themeId: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "multi-theme-showcase-theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeId, setThemeId] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && themeRegistry.some((theme) => theme.id === stored)) {
      return stored;
    }
    return themeRegistry[0].id;
  });

  const currentTheme = useMemo(
    () => themeRegistry.find((theme) => theme.id === themeId) ?? themeRegistry[0],
    [themeId],
  );

  useEffect(() => {
    applyThemeTokens(currentTheme.tokens);
    document.documentElement.dataset.theme = currentTheme.id;
    localStorage.setItem(STORAGE_KEY, currentTheme.id);
  }, [currentTheme]);

  const value = useMemo(
    () => ({
      themes: themeRegistry,
      currentTheme,
      setTheme: setThemeId,
    }),
    [currentTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

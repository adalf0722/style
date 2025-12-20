export type ThemeTokens = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  accent: string;
  borderRadius: string;
  shadowStyle: string;
  fontFamily: string;
  animationStyle: string;
};

export type ThemeDefinition = {
  id: string;
  name: string;
  tokens: ThemeTokens;
};

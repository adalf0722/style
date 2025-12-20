export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        theme: "var(--radius-base)",
      },
      boxShadow: {
        theme: "var(--shadow-style)",
      },
      fontFamily: {
        theme: ["var(--font-family)"],
      },
    },
  },
  plugins: [],
};

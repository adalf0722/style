import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Dev uses "/" for convenience; production uses repo path for GitHub Pages.
export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "/style/" : "/";
  return {
    base,
    plugins: [react()],
  };
});

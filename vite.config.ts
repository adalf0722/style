import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Base can be overridden by env: VITE_BASE_PATH. Defaults:
// - "/" for dev
// - "/style/" for prod if no env set (replace if repo name differs)
export default defineConfig(({ mode }) => {
  const envBase = process.env.VITE_BASE_PATH;
  const base =
    envBase ||
    (mode === "production" ? "/style/" : "/");

  return {
    base,
    plugins: [react()],
  };
});

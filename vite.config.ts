import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Use repo path only when running in GitHub Actions; dev stays at "/".
const repoBase = "/style/"; // update if repo name changes

export default defineConfig(() => {
  const base = process.env.GITHUB_ACTIONS ? repoBase : "/";
  return {
    base,
    plugins: [react()],
  };
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base for GitHub Pages (repo name: style). Adjust if repo name changes.
export default defineConfig({
  base: "/style/",
  plugins: [react()],
})

import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: './',

  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  server: {
    proxy: {
      "/nekoapi": {
        target: "https://api.nekosapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nekoapi/, ""),
      },
    },
  },
})
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/catapi": {
        target: "https://api.thecatapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/catapi/, ""),
      },
    },
  },
});

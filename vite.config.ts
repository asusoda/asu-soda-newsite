import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  plugins: [
    react(),
    ViteImageOptimizer()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

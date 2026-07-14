import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "index.html",
        papers: "papers/index.html",
        foresightPaper: "papers/foresight-is-not-enough/index.html",
      },
    },
  },
});

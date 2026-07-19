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
        models: "papers/models/index.html",
        researchReasoningModel: "papers/models/qwen3-research-reasoning-json-rl/index.html",
        experiments: "experiments/index.html",
        riskRoutedExperiment: "experiments/risk-routed-heterogeneous-kv-memory/index.html",
        foresightPaper: "papers/foresight-is-not-enough/index.html",
        nedoqwenPaper: "papers/nedoqwen/index.html",
      },
    },
  },
});

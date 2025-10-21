import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/AWEBSITEG7/", // 👈 EXACT repo name + trailing slash
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        /* popup: "index.html",
        content: "src/content.js", */
        content: "index.html",
        app: "src/app.js",
      },
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
  },
});

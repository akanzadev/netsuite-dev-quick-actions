import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "index.html"),
        popupScript: resolve(__dirname, "src/popup.js"),
        content: resolve(__dirname, "src/content.js"),
        app: resolve(__dirname, "src/app.js"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'popupScript') {
            return 'src/popup.js';
          }
          return 'assets/[name].js';
        },
        format: "es",
      },
    },
  },
});

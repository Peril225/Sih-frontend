import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // vitePluginRequire({
    //   // @fileRegex RegExp
    //   // optional：default file processing rules are as follows
    //   // fileRegex:/(.jsx?|.tsx?|.vue)$/
    // }),
  ],
  server: {
    host: true,
    proxy: {
      // forward `/uploads/` endpoint to -> `http://localhost:5000/uploads/`
      "^/uploads": {
        target: "http://localhost:5173/",
      },
    },
  },
});

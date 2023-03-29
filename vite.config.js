import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // "@fullcalendar/interaction":
      //   "@fullcalendar/interaction/dist/esm/plugin/main.js",
    },
  },
  server: {
    proxy: {
      "/member": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/reserve": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/room": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/image": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/api/login": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },

      "/api/session": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import vueDevTools from "vite-plugin-vue-devtools";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "esnext"
  },
  plugins: [
    vue(),
    federation({
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js"
      },
      shared: ["vue"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        feed: resolve(import.meta.dirname, "feed/index.html"),
        post: resolve(import.meta.dirname, "post/index.html"),
        profile: resolve(import.meta.dirname, "profile/index.html"),
        register: resolve(import.meta.dirname, "register/index.html"),
        user: resolve(import.meta.dirname, "user/index.html"),
      },
    },
  },
});

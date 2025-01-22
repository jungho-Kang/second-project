import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    host: "0.0.0.0", // 모든 IP에서 접근 가능하도록 설정
    proxy: {
      "/api": {
        target: "http://112.222.157.156:5222",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

export default defineConfig({
  
  base: "./",

  plugins: [vue(), legacy()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    host: true, 
    port: 5173,
    allowedHosts: [
      '.ngrok-free.app', // เพิ่มบรรทัดนี้เพื่อให้ยอมรับทุกลิงก์จาก ngrok
      '.ngrok-free.dev'
    ]
  }
});
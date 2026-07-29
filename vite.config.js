import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // GLB / 3D model files ko asset treat karo
  assetsInclude: ["**/*.glb", "**/*.gltf"],

  // Contact backend proxy
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
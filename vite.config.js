import { defineConfig } from 'vite'
import tailwindcss from "tailwindcss";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    rollupOptions: {
      input: 'src/main.js',
      output: {
        entryFileNames: 'main.bundle.js', // <- nombre deseado
        format: 'iife',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})

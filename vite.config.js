import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteSingleFile()
    ],
    build: {
        target: 'esnext',
        assetsInlineLimit: 100000000,
        rollupOptions: {
          input: 'component.js',
          output: {
            entryFileNames: 'componenteBundle.js', // <- nombre deseado
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
});

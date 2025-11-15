import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'assets/built',
    assetsDir: '',
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'index.css',
      },
    },
  },
})

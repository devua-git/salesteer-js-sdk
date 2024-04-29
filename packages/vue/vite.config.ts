/// <reference types="vitest"/>

import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      name: 'Lib', // TODO: CHANGE_ME
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.mjs'
          case 'cjs':
            return 'index.cjs'
          case 'iife':
            return 'index.js'
          default:
            return 'index.js'
        }
      },
    },
    minify: false,
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          pinia: 'pinia',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
  },
})

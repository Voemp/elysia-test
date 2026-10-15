import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: { port: 4016 },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(import.meta.dirname, './src'),
    },
  },
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
})

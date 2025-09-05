import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'remove-favicon',
      transformIndexHtml(html) {
        return html.replace(/<link rel="icon"[^>]*>/, '')
      }
    }
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  },

  server: {
    port: 3000,
    open: true,
    host: true
  },

  preview: {
    port: 4173,
    host: true
  }
})
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
})
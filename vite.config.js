import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Dùng đường dẫn tương đối để chạy tốt trên mọi subpath (GitHub Pages)
})
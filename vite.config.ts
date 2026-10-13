import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from /L34Fun/, while local Vite uses /.
  base: process.env.GITHUB_ACTIONS ? '/L34Fun/' : '/',
})

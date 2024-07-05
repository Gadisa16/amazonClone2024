import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/amazonClone2024/amazon-clone/', // Set your desired base path (e.g., '/my-subdirectory/')
})

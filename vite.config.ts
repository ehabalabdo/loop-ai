import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Using './' allows the app to be deployed to any sub-path or domain
  // without breaking asset links.
  base: './', 
})
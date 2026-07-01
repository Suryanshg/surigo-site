import { defineConfig } from 'vite'

export default defineConfig({
  // This ensures assets are loaded relative to your repository name
  base: '/surigo-site/',
  build: {
    // Vite outputs the compiled site here
    outDir: 'dist'
  }
})
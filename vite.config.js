import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/products/yelpcamp/site': {
        target: 'https://yelp-camp-fzrm.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products\/yelpcamp\/site/, ''),
      },
      '/products/smartresumeanalyzer/site': {
        target: 'https://smartresumeanalyzer-anish07.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products\/smartresumeanalyzer\/site/, ''),
      },
      '/products/tvsearchapp/site': {
        target: 'https://tvsearchapp-anish07.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products\/tvsearchapp\/site/, ''),
      },
      '/products/artauctionportfolio/site': {
        target: 'https://online-art-auctioning-platform.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products\/artauctionportfolio\/site/, ''),
      },
    }
  }
})
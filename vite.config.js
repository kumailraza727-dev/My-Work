import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: 'a312df583b38.ngrok-free.app,all' // allows any public hostname (works with ngrok, localtunnel, etc.)
  }
})

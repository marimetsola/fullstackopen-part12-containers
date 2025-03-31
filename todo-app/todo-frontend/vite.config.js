import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js'
  },
  server : {
    port: 5173, // must be a port other than 5173
    host: true,
    watch: {
      usePolling: true,
    },
  }
})

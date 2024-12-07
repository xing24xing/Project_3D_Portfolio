import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split common libraries into separate chunks
          if (id.includes('node_modules')) {
            // Example: Split react and react-dom into their own chunk
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendors'
            }
          }
          // Return chunk name for custom chunking
          return null
        }
      }
    },
    chunkSizeWarningLimit: 3000, // Increases the size limit for chunk warnings
  },
})

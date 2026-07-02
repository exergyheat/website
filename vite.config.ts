import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      // manualChunks only applies to the client build; the SSR (prerender)
      // build externalizes react and would reject these entries
      output: isSsrBuild ? {} : {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', 'framer-motion']
        }
      }
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  assetsInclude: ['**/*.md'],
  ssr: {
    // CJS packages must be bundled into the prerender build; Node ESM can't
    // named-import from them when externalized
    noExternal: ['react-helmet-async']
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173
  }
}))

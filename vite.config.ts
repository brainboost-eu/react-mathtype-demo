import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const runtime = {
    host: 'localhost',
    port: 3000,
  }

  return {
    plugins: [react(), tsconfigPaths()],
    preview: runtime,
    server: runtime,
  }
})

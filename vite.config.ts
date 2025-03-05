import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const runtime = {
    host: 'localhost',
    port: 3000,
  }

  return {
    plugins: [react(), tsconfigPaths(), tailwindcss()],
    preview: runtime,
    server: runtime,
  }
})

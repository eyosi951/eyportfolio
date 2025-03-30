import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/eportfolio",
  css:{
    modules:{
      localsConvention: 'camelCase',
    },
  }
})

import { defineConfig } from 'vite'
<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite'
>>>>>>> 44a031bc27fd3b6c919d860a8d4e0e62bf109a01
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [ tailwindcss(),react()],
>>>>>>> 44a031bc27fd3b6c919d860a8d4e0e62bf109a01
})

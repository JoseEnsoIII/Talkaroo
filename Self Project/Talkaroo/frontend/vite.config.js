import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  root: '.',  // Use '.' if index.html is in the project root (remove root if unnecessary)
  build: {
    outDir: 'dist',  // Output folder
  },
});

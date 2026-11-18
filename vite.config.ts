import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleContactRequest } from './server/contactHandler.js'

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        handleContactRequest(req, res);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        handleContactRequest(req, res);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    contactApiPlugin(),
  ],
})

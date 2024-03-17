import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import svgrpligin from 'vite-plugin-svgr'
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
   build: {
       outDir: 'build',
   },
   plugins: [reactRefresh(), react(), 
    
    svgrpligin({ 
        svgrOptions: {
            icon: true
        },
        resolve: {
            alias: {
              "@": path.resolve(__dirname, "./src"),
              "compilerOptions": {
                "baseUrl": ".",
                "paths": {
                  "@/*": ["./*"]
                }
              }
            },
         
         },
     }),

],
});




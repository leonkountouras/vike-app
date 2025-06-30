import { build } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function buildApp() {
  console.log('Building client...')
  
  try {
    await build({
      root: __dirname,
      build: {
        outDir: 'dist/client',
        emptyOutDir: true
      }
    })
    
    console.log('Client build complete!')
    
    console.log('Building server...')
    await build({
      root: __dirname,
      build: {
        outDir: 'dist/server',
        emptyOutDir: true,
        ssr: true
      }
    })
    
    console.log('Server build complete!')
  } catch (err) {
    console.error('Build error:', err)
    process.exit(1)
  }
}

buildApp()
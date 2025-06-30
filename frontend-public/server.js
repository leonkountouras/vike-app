import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function startServer() {
  const app = express()
  
  // Enable CORS
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  }))
  
  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist')))
  
  // Handle all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
  
  const port = process.env.PORT || 12000
  app.listen(port, '0.0.0.0', () => {
    console.log(`Frontend server running at http://localhost:${port}`)
    console.log(`Frontend accessible at https://work-1-qrsolblshsmgtweg.prod-runtime.all-hands.dev`)
  })
}

startServer().catch(console.error)
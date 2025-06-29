const express = require('express')
const path = require('path')
const { createServer } = require('vite')

async function startServer() {
  const app = express()
  
  // Create Vite server in middleware mode
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa'
  })
  
  // Use vite's connect instance as middleware
  app.use(vite.ssrFixStacktrace)
  app.use(vite.middlewares)
  
  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist')))
  
  // Handle all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  
  const port = process.env.PORT || 12000
  app.listen(port, '0.0.0.0', () => {
    console.log(`Frontend server running at http://localhost:${port}`)
  })
}

startServer().catch(console.error)
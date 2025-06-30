import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 12001

// Enable CORS and iframe support
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('X-Frame-Options', 'ALLOWALL')
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// Serve static files
app.use(express.static(path.join(__dirname, 'pages')))

// Serve test files
app.get('/test-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'test-login.html'))
})

// Redirect all other requests to the backend
app.get('*', (req, res) => {
  res.redirect('https://work-2-qrsolblshsmgtweg.prod-runtime.all-hands.dev' + req.path)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Static server running at http://localhost:${port}`)
})
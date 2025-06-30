import express from 'express'
import { renderPage } from 'vike/server'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Import API routes
import { 
  register, 
  login, 
  getProfile, 
  authenticateToken, 
  validateRegister, 
  validateLogin,
  getAllUsers 
} from './api/auth.js'
import { 
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo, 
  getTodo, 
  toggleTodo, 
  getTodoStats,
  validateTodo,
  validateTodoUpdate 
} from './api/todos.js'
import { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProduct, 
  getProductStats,
  getCategories,
  deleteCategory,
  updateProductImage,
  getPublicProducts,
  getPublicCategories,
  validateProduct,
  validateProductUpdate,
  upload 
} from './api/products.js'

const isProduction = true // Force production mode to avoid WebSocket issues
const port = process.env.PORT || 12001

async function startServer() {
  const app = express()

  // Trust proxy for rate limiting
  app.set('trust proxy', 1)

  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: false, // Disable for development
    crossOriginEmbedderPolicy: false
  }))

  // Rate limiting with proper proxy configuration
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
      success: false,
      message: 'Too many requests, please try again later'
    },
    trustProxy: true
  })
  app.use('/api/', limiter)

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }))
  app.use(express.urlencoded({ extended: true, limit: '10mb' }))

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

  // API Routes (must be before Vite middleware)
  
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      success: true, 
      message: 'API is healthy',
      timestamp: new Date().toISOString()
    })
  })

  // Authentication routes
  app.post('/api/auth/register', validateRegister, register)
  app.post('/api/auth/login', validateLogin, login)
  app.get('/api/auth/profile', authenticateToken, getProfile)
  app.get('/api/auth/users', getAllUsers) // Debug route - remove in production

  // Todo routes (all protected)
  app.get('/api/todos', authenticateToken, getTodos)
  app.post('/api/todos', authenticateToken, validateTodo, createTodo)
  app.get('/api/todos/stats', authenticateToken, getTodoStats)
  app.get('/api/todos/:id', authenticateToken, getTodo)
  app.put('/api/todos/:id', authenticateToken, validateTodoUpdate, updateTodo)
  app.delete('/api/todos/:id', authenticateToken, deleteTodo)
  app.patch('/api/todos/:id/toggle', authenticateToken, toggleTodo)

  // Public routes (no authentication required)
  app.get('/api/products/public', getPublicProducts)
  app.get('/api/categories/public', getPublicCategories)
  
  // Product routes (all protected)
  app.get('/api/products', authenticateToken, getProducts)
  app.post('/api/products', authenticateToken, upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 10 }
  ]), validateProduct, createProduct)
  app.get('/api/products/stats', authenticateToken, getProductStats)
  app.get('/api/products/categories', authenticateToken, getCategories)
  app.delete('/api/products/categories', authenticateToken, deleteCategory)
  app.get('/api/products/:id', authenticateToken, getProduct)
  app.put('/api/products/:id', authenticateToken, upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 10 }
  ]), validateProductUpdate, updateProduct)
  app.delete('/api/products/:id', authenticateToken, deleteProduct)
  app.patch('/api/products/:id/image', authenticateToken, upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 10 }
  ]), updateProductImage)

  // Serve uploaded files
  app.use('/uploads', express.static('uploads'))

  // Serve test files (for development)
  app.get('/test-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-login.html'))
  })

  let vite
  if (isProduction) {
    // In production, serve static files
    app.use(express.static('dist/client'))
  } else {
    // In development, use Vite dev server with proper WebSocket configuration
    vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        hmr: false,
        cors: true,
        strictPort: true,
        watch: {
          usePolling: true
        }
      },
      appType: 'custom',
      root: __dirname
    })
    app.use(vite.middlewares)
  }

  // Vike middleware
  app.get('*', async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl
      }
      
      // In development, pass the Vite instance to renderPage
      if (!isProduction && vite) {
        pageContextInit.viteDevServer = vite
      }
      
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext
      
      if (!httpResponse) {
        return next()
      }
      
      const { body, statusCode, headers } = httpResponse
      
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode).send(body)
    } catch (err) {
      console.error('Error rendering page:', err)
      next(err)
    }
  })

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

startServer()
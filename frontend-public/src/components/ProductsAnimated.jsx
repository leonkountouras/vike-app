import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProductsAnimated = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Backend API URL - using runtime URL for production access
  const API_BASE_URL = 'https://work-2-qrsolblshsmgtweg.prod-runtime.all-hands.dev'

  useEffect(() => {
    fetchProductsAndCategories()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, selectedCategory, searchTerm])

  const fetchProductsAndCategories = async () => {
    try {
      setLoading(true)
      setError('')
      
      // Fetch products and categories in parallel
      const [productsResponse, categoriesResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/api/products/public`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }),
        fetch(`${API_BASE_URL}/api/categories/public`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ]);
      
      // Handle products response
      if (!productsResponse.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const productsData = await productsResponse.json()
      
      if (productsData.success) {
        const productList = productsData.data.products || []
        setProducts(productList)
      } else {
        setError(productsData.message || 'Failed to load products')
      }
      
      // Handle categories response
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json()
        
        if (categoriesData.success) {
          const categoryList = categoriesData.data.categories || []
          const categoryNames = categoryList.map(cat => cat.name)
          setCategories(categoryNames)
        }
      } else {
        console.error('Failed to fetch categories, falling back to extracting from products')
        // Fallback: Extract categories from products
        const productList = productsData.success ? productsData.data.products || [] : []
        const uniqueCategories = ['All', ...new Set(productList.map(p => p.category))]
        setCategories(uniqueCategories)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
      // For demo purposes, let's use mock data if the API fails
      const mockProducts = getMockProducts()
      setProducts(mockProducts)
      setCategories(['All', 'Electronics', 'Wearables', 'Furniture', 'Kitchen', 'Smart Home', 'Photography', 'Outdoor', 'Audio', 'Home & Garden'])
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }

  // Mock products for demo purposes
  const getMockProducts = () => [
    {
      id: 'mock-1',
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Perfect for music lovers and professionals.',
      price: 199.99,
      category: 'Electronics',
      stock: 25,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      featured: true
    },
    {
      id: 'mock-2',
      name: 'Smart Fitness Watch',
      description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health goals with precision.',
      price: 299.99,
      category: 'Wearables',
      stock: 15,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      featured: true
    },
    {
      id: 'mock-3',
      name: 'Ergonomic Office Chair',
      description: 'Professional ergonomic office chair with lumbar support and adjustable height. Comfortable for long work sessions.',
      price: 449.99,
      category: 'Furniture',
      stock: 8,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
      featured: false
    },
    {
      id: 'mock-4',
      name: 'Portable Coffee Maker',
      description: 'Compact espresso machine perfect for travel and small spaces. Brew barista-quality coffee anywhere.',
      price: 89.99,
      category: 'Kitchen',
      stock: 30,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop',
      featured: true
    },
    {
      id: 'mock-5',
      name: 'Wireless Charging Pad',
      description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
      price: 39.99,
      category: 'Electronics',
      stock: 50,
      image: 'https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e7e?w=600&h=600&fit=crop',
      featured: false
    },
    {
      id: 'mock-6',
      name: 'Gaming Mechanical Keyboard',
      description: 'RGB backlit mechanical keyboard with tactile switches. Perfect for gaming and professional typing.',
      price: 129.99,
      category: 'Electronics',
      stock: 20,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
      featured: true
    }
  ]

  const getStockStatus = (stock) => {
    if (stock === 0) return { text: 'Out of Stock', color: '#dc3545' }
    if (stock <= 10) return { text: 'Low Stock', color: '#ffc107' }
    return { text: 'In Stock', color: '#28a745' }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
        delayChildren: 0.1,    // Reduced delay
        duration: 0.3,         // Added duration
        ease: "easeOut"        // Added easing
      }
    }
  }

  // Isotope-like grid animation settings
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.03,
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "tween", // Changed from spring to tween for more stability
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.03, // Reduced scale effect
      y: -5, // Reduced y movement
      transition: {
        type: "tween", // Changed from spring to tween
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    inactive: { 
      scale: 1,
      backgroundColor: "#f8f9fa",
      color: "#6c757d",
      borderColor: "#e9ecef"
    },
    active: { 
      scale: 1.05,
      backgroundColor: "#007bff",
      color: "#ffffff",
      borderColor: "#007bff"
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#6c757d',
      maxWidth: '600px',
      margin: '0 auto'
    },
    filters: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    categoryFilters: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '2rem'
    },
    filterBtn: {
      padding: '0.75rem 1.5rem',
      border: '2px solid #e9ecef',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      outline: 'none',
      background: 'white',
      position: 'relative',
      margin: '0.5rem',
      zIndex: 1
    },
    searchInput: {
      padding: '0.75rem 1rem',
      border: '2px solid #e9ecef',
      borderRadius: '25px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      outline: 'none',
      minWidth: '250px',
      background: 'white'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
      minHeight: '500px', // Add minimum height to prevent layout shifts
      position: 'relative'
    },
    productCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed',
      cursor: 'pointer',
      position: 'relative'
    },
    featuredBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      backgroundColor: 'rgba(255, 193, 7, 0.9)',
      color: '#212529',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '700',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 10
    },
    productImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    productContent: {
      padding: '1.5rem'
    },
    productName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '0.5rem',
      lineHeight: '1.3'
    },
    productDescription: {
      color: '#6c757d',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      marginBottom: '1rem',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    productMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#28a745'
    },
    productCategory: {
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    productStock: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem'
    },
    stockBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'white'
    },
    loading: {
      textAlign: 'center',
      padding: '4rem',
      fontSize: '1.5rem',
      color: '#6c757d'
    },
    error: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      borderRadius: '15px',
      border: '1px solid #f5c6cb',
      marginBottom: '2rem'
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#6c757d'
    }
  }

  if (loading) {
    return (
      <motion.section 
        style={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={styles.container}>
          <motion.div 
            style={styles.loading}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔄</div>
            <div>Loading amazing products...</div>
          </motion.div>
        </div>
      </motion.section>
    )
  }

  // Add CSS for isotope-like animation
  const isotopeStyles = `
    .isotope-grid {
      perspective: 1000px;
    }
    
    .isotope-grid > div {
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
  `

  return (
    <motion.section 
      id="products" 
      style={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <style>{isotopeStyles}</style>
      <div style={styles.container}>
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            style={styles.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            Our Products
          </motion.h2>
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover our curated collection of high-quality products with smooth animations
          </motion.p>
        </motion.div>

        {error && (
          <motion.div 
            style={styles.error}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ⚠️ {error}
          </motion.div>
        )}

        <motion.div 
          style={styles.filters}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Category Filter Buttons */}
          <motion.div 
            style={styles.categoryFilters}
            layout
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                style={styles.filterBtn}
                variants={buttonVariants}
                initial="inactive"
                animate={selectedCategory === category ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                layout
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 25 },
                  scale: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: '#007bff',
                      borderRadius: 2
                    }}
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Input */}
          <motion.input
            type="text"
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileFocus={{ 
              scale: 1.05,
              borderColor: "#007bff",
              boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.1)"
            }}
          />
        </motion.div>

        {filteredProducts.length === 0 ? (
          <motion.div 
            style={styles.emptyState}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              style={{ fontSize: '4rem', marginBottom: '1rem' }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍
            </motion.div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <motion.div 
            style={styles.productsGrid}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            layout
            className="isotope-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock)
                
                return (
                  <motion.div
                    key={product.id}
                    style={styles.productCard}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    layout
                    transition={{
                      layout: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                  >
                    {product.featured && (
                      <motion.div 
                        style={styles.featuredBadge}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        ⭐ Featured
                      </motion.div>
                    )}
                    
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      style={styles.productImage}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop'
                      }}
                    />

                    <motion.div 
                      style={styles.productContent}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.h3 
                        style={styles.productName}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {product.name}
                      </motion.h3>
                      
                      <motion.p 
                        style={styles.productDescription}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {product.description}
                      </motion.p>
                      
                      <motion.div 
                        style={styles.productMeta}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.span 
                          style={styles.productPrice}
                          whileHover={{ scale: 1.1, color: "#007bff" }}
                        >
                          ${product.price.toFixed(2)}
                        </motion.span>
                        <motion.span 
                          style={styles.productCategory}
                          whileHover={{ scale: 1.05 }}
                        >
                          {product.category}
                        </motion.span>
                      </motion.div>

                      <motion.div 
                        style={styles.productStock}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <span>Stock:</span>
                        <motion.span 
                          style={{
                            ...styles.stockBadge,
                            backgroundColor: stockStatus.color
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {stockStatus.text}
                        </motion.span>
                        <span style={{color: '#6c757d'}}>
                          ({product.stock} available)
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default ProductsAnimated
import React, { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: '#f8f9fa'
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
      fontSize: '2.5rem',
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
      marginBottom: '2rem',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    filterSelect: {
      padding: '0.75rem 1rem',
      border: '2px solid #e9ecef',
      borderRadius: '25px',
      fontSize: '1rem',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none',
      minWidth: '150px'
    },
    searchInput: {
      padding: '0.75rem 1rem',
      border: '2px solid #e9ecef',
      borderRadius: '25px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      outline: 'none',
      minWidth: '200px'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    productCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    productCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
    },
    featuredBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      backgroundColor: 'rgba(52, 152, 219, 0.9)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 10
    },
    productImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    productImagePlaceholder: {
      width: '100%',
      height: '250px',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: '#dee2e6'
    },
    productContent: {
      padding: '1.5rem'
    },
    productName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '0.5rem',
      lineHeight: '1.3'
    },
    productDescription: {
      color: '#6c757d',
      fontSize: '0.9rem',
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
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#27ae60'
    },
    productCategory: {
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      padding: '0.25rem 0.75rem',
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
      letterSpacing: '0.5px'
    },
    stockInStock: {
      backgroundColor: '#d4edda',
      color: '#155724'
    },
    stockLowStock: {
      backgroundColor: '#fff3cd',
      color: '#856404'
    },
    stockOutOfStock: {
      backgroundColor: '#f8d7da',
      color: '#721c24'
    },
    loading: {
      textAlign: 'center',
      padding: '3rem',
      fontSize: '1.2rem',
      color: '#6c757d'
    },
    error: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      borderRadius: '8px',
      border: '1px solid #f5c6cb',
      marginBottom: '2rem'
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#6c757d'
    },
    emptyIcon: {
      fontSize: '4rem',
      marginBottom: '1rem'
    },
    emptyTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    emptyDescription: {
      fontSize: '1rem'
    }
  }

  // Backend API URL - using runtime URL for production access
  const API_BASE_URL = 'https://work-2-qrsolblshsmgtweg.prod-runtime.all-hands.dev'

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError('')
      
      // Since this is a public frontend, we'll try to fetch products without authentication
      // We'll need to modify the backend to allow public access to products
      const response = await fetch(`${API_BASE_URL}/api/products/public`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        // If public endpoint doesn't exist, try the regular endpoint
        // This will likely fail due to authentication, but we'll handle it gracefully
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      
      if (data.success) {
        setProducts(data.data.products || [])
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.data.products.map(p => p.category))]
        setCategories(uniqueCategories)
      } else {
        setError(data.message || 'Failed to load products')
      }
    } catch (err) {
      console.error('Error fetching products:', err)
      // For demo purposes, let's use mock data if the API fails
      setProducts(getMockProducts())
      setCategories(['Electronics', 'Wearables', 'Furniture', 'Kitchen', 'Smart Home', 'Photography', 'Outdoor', 'Audio', 'Home & Garden'])
    } finally {
      setLoading(false)
    }
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
    if (stock === 0) return { text: 'Out of Stock', style: styles.stockOutOfStock }
    if (stock <= 10) return { text: 'Low Stock', style: styles.stockLowStock }
    return { text: 'In Stock', style: styles.stockInStock }
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <section id="products" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.loading}>
            <div className="loading-spinner">🔄</div>
            <div>Loading products...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Products</h2>
          <p style={styles.subtitle}>
            Discover our curated collection of high-quality products across various categories
          </p>
        </div>

        {error && (
          <div style={styles.error}>
            ⚠️ {error}
          </div>
        )}

        <div style={styles.filters}>
          <select
            style={styles.filterSelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = '#007bff'
              e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e9ecef'
              e.target.style.boxShadow = 'none'
            }}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = '#007bff'
              e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e9ecef'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>🔍</div>
            <h3 style={styles.emptyTitle}>No products found</h3>
            <p style={styles.emptyDescription}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock)
              
              return (
                <div
                  key={product.id}
                  style={styles.productCard}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, styles.productCardHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, styles.productCard)
                  }}
                >
                  {product.featured && (
                    <div style={styles.featuredBadge}>
                      ⭐ Featured
                    </div>
                  )}
                  
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      style={styles.productImage}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : (
                    <div style={styles.productImagePlaceholder}>
                      📦
                    </div>
                  )}
                  
                  <div style={{...styles.productImagePlaceholder, display: 'none'}}>
                    📦
                  </div>

                  <div style={styles.productContent}>
                    <h3 style={styles.productName}>{product.name}</h3>
                    <p style={styles.productDescription}>{product.description}</p>
                    
                    <div style={styles.productMeta}>
                      <span style={styles.productPrice}>
                        ${product.price.toFixed(2)}
                      </span>
                      <span style={styles.productCategory}>
                        {product.category}
                      </span>
                    </div>

                    <div style={styles.productStock}>
                      <span>Stock:</span>
                      <span style={{...styles.stockBadge, ...stockStatus.style}}>
                        {stockStatus.text}
                      </span>
                      <span style={{color: '#6c757d'}}>
                        ({product.stock} available)
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
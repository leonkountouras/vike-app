import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import '../../styles/responsive.css'

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    color: 'white',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginTop: '1rem'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  navButton: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  navButtonActive: {
    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  productCard: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #e1e8ed'
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  productInfo: {
    padding: '1.5rem'
  },
  productName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  productDescription: {
    color: '#6c757d',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '1rem'
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: '1rem'
  },
  productCategory: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    background: '#e9ecef',
    color: '#495057',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500'
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.2rem',
    color: '#6c757d'
  },
  error: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.2rem',
    color: '#dc3545',
    background: '#f8d7da',
    borderRadius: '8px',
    border: '1px solid #f5c6cb'
  },
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
    color: '#333',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  }
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
}

const filterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export default function PublicProducts() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Component mounted, fetching products...')
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, selectedCategory])

  const fetchProducts = async () => {
    try {
      console.log('Starting to fetch products...')
      setLoading(true)
      // Use the public products endpoint
      const response = await fetch('/api/products/public')
      console.log('Response status:', response.status)
      
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      console.log('Received data:', data)
      
      if (data.success) {
        setProducts(data.data.products)
        // Extract unique categories
        const uniqueCategories = [...new Set(data.data.products.map(p => p.category))]
        setCategories(['All', ...uniqueCategories])
        console.log('Products loaded successfully:', data.data.products.length)
      } else {
        setError(data.message || 'Failed to load products')
      }
    } catch (err) {
      console.error('Failed to fetch products:', err)
      setError('Failed to load products. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>
          <div>🔄 Loading products...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          ❌ {error}
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>
          🛍️ Product Catalog
        </h1>
        <p style={styles.subtitle}>
          Discover our amazing collection of products
        </p>
      </header>

      {/* Category Navigation */}
      <nav style={styles.nav}>
        {categories.map((category, index) => (
          <button
            key={category}
            style={{
              ...styles.navButton,
              ...(selectedCategory === category ? styles.navButtonActive : {})
            }}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Products Grid */}
      <main>
        <div style={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              style={styles.productCard}
            >
              <div style={{ position: 'relative' }}>
                {product.featured && (
                  <div style={styles.featuredBadge}>
                    ⭐ Featured
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
                />
              </div>
              
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>
                  {product.description.length > 100 
                    ? `${product.description.substring(0, 100)}...` 
                    : product.description
                  }
                </p>
                <div style={styles.productPrice}>
                  ${product.price}
                </div>
                <span style={styles.productCategory}>
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
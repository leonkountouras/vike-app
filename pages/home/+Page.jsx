import React, { useState, useEffect } from 'react'
import '../../styles/responsive.css'

const styles = {
  // Layout styles
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  
  // Header styles
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  logoIcon: {
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  },
  
  // Desktop Navigation
  desktopNav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  },
  navLinkHover: {
    background: 'rgba(255,255,255,0.2)',
    transform: 'translateY(-2px)'
  },
  
  // Mobile Navigation
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem'
  },
  mobileNav: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '1rem 0',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  mobileNavOpen: {
    display: 'block'
  },
  mobileNavLink: {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '1rem 2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    transition: 'background 0.3s ease'
  },
  mobileNavLinkHover: {
    background: 'rgba(255,255,255,0.1)'
  },
  
  // Main content styles
  main: {
    flex: 1,
    padding: '3rem 0'
  },
  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  hero: {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    borderRadius: '16px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: '#6c757d',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  heroButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  },
  
  // Products section
  productsSection: {
    marginTop: '4rem'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '3rem'
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
  productCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
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
  },
  
  // Footer styles
  footer: {
    background: '#2c3e50',
    color: 'white',
    padding: '3rem 0 2rem',
    marginTop: 'auto'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ecf0f1'
  },
  footerLink: {
    color: '#bdc3c7',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease'
  },
  footerLinkHover: {
    color: '#ecf0f1'
  },
  footerBottom: {
    borderTop: '1px solid #34495e',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#bdc3c7'
  },
  
  // Loading and error states
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
    border: '1px solid #f5c6cb',
    margin: '2rem 0'
  },
  
  // Responsive styles
  '@media (max-width: 768px)': {
    desktopNav: {
      display: 'none'
    },
    hamburger: {
      display: 'block'
    },
    heroTitle: {
      fontSize: '2rem'
    },
    heroSubtitle: {
      fontSize: '1.1rem'
    },
    productsGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem'
    }
  }
}

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products/public')
      
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      
      if (data.success) {
        // Show only featured products or first 6 products
        const featuredProducts = data.data.products
          .filter(product => product.featured)
          .slice(0, 6)
        
        if (featuredProducts.length === 0) {
          // If no featured products, show first 6
          setProducts(data.data.products.slice(0, 6))
        } else {
          setProducts(featuredProducts)
        }
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleCardHover = (productId, isHovering) => {
    setHoveredCard(isHovering ? productId : null)
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          {/* Logo */}
          <a href="/" style={styles.logo}>
            <div style={styles.logoIcon}>🛍️</div>
            <span>ShopHub</span>
          </a>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="/public-products" style={styles.navLink}>Products</a>
            <a href="/about" style={styles.navLink}>About</a>
            <a href="/contact" style={styles.navLink}>Contact</a>
            <a href="/login" style={{...styles.navLink, background: 'rgba(255,255,255,0.2)'}}>Login</a>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            style={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav style={{
          ...styles.mobileNav,
          ...(mobileMenuOpen ? styles.mobileNavOpen : {})
        }}>
          <a href="/" style={styles.mobileNavLink}>Home</a>
          <a href="/public-products" style={styles.mobileNavLink}>Products</a>
          <a href="/about" style={styles.mobileNavLink}>About</a>
          <a href="/contact" style={styles.mobileNavLink}>Contact</a>
          <a href="/login" style={styles.mobileNavLink}>Login</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.mainContainer}>
          {/* Hero Section */}
          <section style={styles.hero}>
            <h1 style={styles.heroTitle}>Welcome to ShopHub</h1>
            <p style={styles.heroSubtitle}>
              Discover amazing products at unbeatable prices. 
              Your one-stop shop for everything you need.
            </p>
            <button 
              style={styles.heroButton}
              onClick={() => window.location.href = '/public-products'}
            >
              Shop Now
            </button>
          </section>

          {/* Featured Products Section */}
          <section style={styles.productsSection}>
            <h2 style={styles.sectionTitle}>Featured Products</h2>
            
            {loading && (
              <div style={styles.loading}>
                <div>🔄 Loading featured products...</div>
              </div>
            )}

            {error && (
              <div style={styles.error}>
                ❌ {error}
              </div>
            )}

            {!loading && !error && (
              <div style={styles.productsGrid}>
                {products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      ...styles.productCard,
                      ...(hoveredCard === product.id ? styles.productCardHover : {})
                    }}
                    onMouseEnter={() => handleCardHover(product.id, true)}
                    onMouseLeave={() => handleCardHover(product.id, false)}
                    onClick={() => window.location.href = `/product/${product.id}`}
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
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerContent}>
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>ShopHub</h3>
              <p style={{color: '#bdc3c7', lineHeight: '1.6'}}>
                Your trusted online marketplace for quality products 
                at competitive prices. Shop with confidence.
              </p>
            </div>
            
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Quick Links</h3>
              <a href="/" style={styles.footerLink}>Home</a>
              <a href="/public-products" style={styles.footerLink}>Products</a>
              <a href="/about" style={styles.footerLink}>About Us</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
            </div>
            
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Customer Service</h3>
              <a href="/help" style={styles.footerLink}>Help Center</a>
              <a href="/shipping" style={styles.footerLink}>Shipping Info</a>
              <a href="/returns" style={styles.footerLink}>Returns</a>
              <a href="/support" style={styles.footerLink}>Support</a>
            </div>
            
            <div style={styles.footerSection}>
              <h3 style={styles.footerTitle}>Connect</h3>
              <a href="#" style={styles.footerLink}>Facebook</a>
              <a href="#" style={styles.footerLink}>Twitter</a>
              <a href="#" style={styles.footerLink}>Instagram</a>
              <a href="#" style={styles.footerLink}>LinkedIn</a>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
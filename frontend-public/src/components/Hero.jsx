import React from 'react'

const Hero = () => {
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '6rem 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.3
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 1
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    },
    primaryButton: {
      backgroundColor: '#fff',
      color: '#667eea',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    },
    primaryButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '2px solid #fff',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease'
    },
    secondaryButtonHover: {
      backgroundColor: '#fff',
      color: '#667eea',
      transform: 'translateY(-2px)'
    },
    heroStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      display: 'block'
    },
    statLabel: {
      fontSize: '1rem',
      opacity: 0.9
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: '1.5rem',
      animation: 'bounce 2s infinite'
    }
  }

  const mediaStyles = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem !important;
      }
      .hero-subtitle {
        font-size: 1.1rem !important;
      }
      .hero-buttons {
        flex-direction: column !important;
        align-items: center !important;
      }
      .hero-button {
        width: 100% !important;
        max-width: 300px !important;
        justify-content: center !important;
      }
    }
  `

  const handleScrollToProducts = () => {
    const productsSection = document.querySelector('#products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <style>{mediaStyles}</style>
      <section id="home" style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">
              Welcome to ProductHub
            </h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              Discover amazing products from various categories. Quality, innovation, and style 
              come together in our carefully curated collection.
            </p>
            
            <div style={styles.heroButtons} className="hero-buttons">
              <button
                style={styles.primaryButton}
                className="hero-button"
                onClick={handleScrollToProducts}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.primaryButtonHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.primaryButton)
                }}
              >
                🛍️ Browse Products
              </button>
              <button
                style={styles.secondaryButton}
                className="hero-button"
                onClick={handleScrollToAbout}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.secondaryButtonHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.secondaryButton)
                }}
              >
                📖 Learn More
              </button>
            </div>

            <div style={styles.heroStats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>500+</span>
                <span style={styles.statLabel}>Quality Products</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Categories</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>10K+</span>
                <span style={styles.statLabel}>Happy Customers</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>24/7</span>
                <span style={styles.statLabel}>Customer Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.scrollIndicator}>
          ⬇️
        </div>
      </section>
    </>
  )
}

export default Hero
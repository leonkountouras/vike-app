import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const styles = {
    header: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #e9ecef'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#007bff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    navLinkHover: {
      backgroundColor: '#f8f9fa',
      color: '#007bff'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.5rem',
      gap: '4px',
      background: 'none',
      border: 'none',
      borderRadius: '4px'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      backgroundColor: '#333',
      borderRadius: '2px',
      transition: 'all 0.3s ease'
    },
    hamburgerLineOpen1: {
      transform: 'rotate(45deg) translate(6px, 6px)'
    },
    hamburgerLineOpen2: {
      opacity: 0
    },
    hamburgerLineOpen3: {
      transform: 'rotate(-45deg) translate(6px, -6px)'
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      borderRadius: '0 0 12px 12px',
      overflow: 'hidden',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 999
    },
    mobileNavLinks: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      margin: 0,
      padding: '1rem 0'
    },
    mobileNavLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      fontSize: '1.1rem',
      padding: '1rem 2rem',
      borderBottom: '1px solid #f8f9fa',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    mobileNavLinkHover: {
      backgroundColor: '#f8f9fa',
      color: '#007bff'
    },
    ctaButton: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 10px rgba(0, 123, 255, 0.3)'
    },
    ctaButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
    }
  }

  // Media query styles
  const mediaStyles = `
    @media (max-width: 768px) {
      .nav-links {
        display: none !important;
      }
      .hamburger {
        display: flex !important;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-menu {
        display: none !important;
      }
    }
  `

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <style>{mediaStyles}</style>
      <header style={styles.header}>
        <div className="container">
          <nav style={styles.nav}>
            <a href="#home" style={styles.logo} onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
              🛍️ ProductHub
            </a>
            
            {/* Desktop Navigation */}
            <ul style={styles.navLinks} className="nav-links">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    style={styles.navLink}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, styles.navLinkHover)
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.target.style, styles.navLink)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="http://localhost:12001/login"
                  style={styles.ctaButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, { ...styles.ctaButton, ...styles.ctaButtonHover })
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.ctaButton)
                  }}
                >
                  🔐 Admin Login
                </a>
              </li>
            </ul>

            {/* Hamburger Menu */}
            <button
              style={styles.hamburger}
              className="hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen1 : {})
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen2 : {})
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen3 : {})
                }}
              ></span>
            </button>

            {/* Mobile Menu */}
            <div style={styles.mobileMenu} className="mobile-menu">
              <ul style={styles.mobileNavLinks}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      style={styles.mobileNavLink}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                      onMouseEnter={(e) => {
                        Object.assign(e.target.style, styles.mobileNavLinkHover)
                      }}
                      onMouseLeave={(e) => {
                        Object.assign(e.target.style, styles.mobileNavLink)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li style={{ padding: '1rem 2rem' }}>
                  <a
                    href="http://localhost:12001/login"
                    style={styles.ctaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => {
                      Object.assign(e.target.style, { ...styles.ctaButton, ...styles.ctaButtonHover })
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.target.style, styles.ctaButton)
                    }}
                  >
                    🔐 Admin Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
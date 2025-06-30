import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      <motion.header 
        style={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <motion.nav 
            style={styles.nav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a 
              href="#home" 
              style={styles.logo} 
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🛍️ ProductHub
            </motion.a>
            
            {/* Desktop Navigation */}
            <motion.ul 
              style={styles.navLinks} 
              className="nav-links"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    style={styles.navLink}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    whileHover={{ 
                      scale: 1.1,
                      color: "#007bff",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="http://localhost:12001/login"
                  style={styles.ctaButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#0056b3",
                    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔐 Admin Login
                </motion.a>
              </motion.li>
            </motion.ul>

            {/* Hamburger Menu */}
            <motion.button
              style={styles.hamburger}
              className="hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen1 : {})
                }}
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen2 : {})
                }}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                style={{
                  ...styles.hamburgerLine,
                  ...(isMenuOpen ? styles.hamburgerLineOpen3 : {})
                }}
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  style={styles.mobileMenu} 
                  className="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.ul 
                    style={styles.mobileNavLinks}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <motion.a
                          href={item.href}
                          style={styles.mobileNavLink}
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                          whileHover={{ 
                            backgroundColor: "#f8f9fa",
                            color: "#007bff",
                            x: 10,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.label}
                        </motion.a>
                      </motion.li>
                    ))}
                    <motion.li 
                      style={{ padding: '1rem 2rem' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    >
                      <motion.a
                        href="http://localhost:12001/login"
                        style={styles.ctaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#0056b3",
                          boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🔐 Admin Login
                      </motion.a>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </motion.header>
    </>
  )
}

export default Header
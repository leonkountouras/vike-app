import React from 'react'

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      marginTop: 'auto',
      padding: '3rem 0 1rem 0'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    footerTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#3498db',
      marginBottom: '0.5rem'
    },
    footerText: {
      lineHeight: '1.6',
      color: '#bdc3c7'
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    footerLink: {
      color: '#bdc3c7',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    footerLinkHover: {
      color: '#3498db'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: '#34495e',
      color: '#ecf0f1',
      borderRadius: '50%',
      textDecoration: 'none',
      fontSize: '1.2rem',
      transition: 'all 0.2s ease'
    },
    socialLinkHover: {
      backgroundColor: '#3498db',
      transform: 'translateY(-2px)'
    },
    footerBottom: {
      borderTop: '1px solid #34495e',
      paddingTop: '1rem',
      textAlign: 'center',
      color: '#95a5a6',
      fontSize: '0.9rem'
    },
    footerBottomLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    footerBottomLink: {
      color: '#95a5a6',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'color 0.2s ease'
    }
  }

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerGrid}>
          {/* Company Info */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>🛍️ ProductHub</h3>
            <p style={styles.footerText}>
              Your premier destination for quality products. We showcase the best items 
              from various categories to help you find exactly what you're looking for.
            </p>
            <div style={styles.socialLinks}>
              <a
                href="#"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.socialLinkHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.socialLink)
                }}
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.socialLinkHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.socialLink)
                }}
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.socialLinkHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.socialLink)
                }}
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.socialLinkHover)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.socialLink)
                }}
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Quick Links</h3>
            <ul style={styles.footerLinks}>
              <li>
                <a
                  href="#home"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#about') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Categories</h3>
            <ul style={styles.footerLinks}>
              <li>
                <a
                  href="#products"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Furniture
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  style={styles.footerLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products') }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, styles.footerLinkHover)
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, styles.footerLink)
                  }}
                >
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Contact Info</h3>
            <div style={styles.footerText}>
              <p>📧 info@producthub.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Commerce Street<br />Business District, NY 10001</p>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={styles.footerBottomLinks}>
            <a
              href="#"
              style={styles.footerBottomLink}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.footerLinkHover)
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.footerBottomLink)
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={styles.footerBottomLink}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.footerLinkHover)
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.footerBottomLink)
              }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={styles.footerBottomLink}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.footerLinkHover)
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.footerBottomLink)
              }}
            >
              Cookie Policy
            </a>
          </div>
          <p>© {currentYear} ProductHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
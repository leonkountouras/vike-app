import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem'
    },
    contactInfo: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed'
    },
    contactForm: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '1.5rem',
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid #e9ecef'
    },
    contactIcon: {
      fontSize: '1.5rem',
      minWidth: '2rem'
    },
    contactDetails: {
      flex: 1
    },
    contactLabel: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '0.25rem'
    },
    contactValue: {
      fontSize: '0.95rem',
      color: '#6c757d',
      lineHeight: '1.5'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    formLabel: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '0.5rem'
    },
    formInput: {
      width: '100%',
      padding: '0.75rem',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      outline: 'none',
      fontFamily: 'inherit'
    },
    formTextarea: {
      width: '100%',
      padding: '0.75rem',
      border: '2px solid #e9ecef',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      outline: 'none',
      fontFamily: 'inherit',
      minHeight: '120px',
      resize: 'vertical'
    },
    submitButton: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      width: '100%',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
    },
    submitButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 123, 255, 0.4)'
    },
    submitButtonDisabled: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none'
    },
    submitMessage: {
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem',
      textAlign: 'center',
      fontWeight: '600'
    },
    submitMessageSuccess: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb'
    },
    submitMessageError: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb'
    },
    mapContainer: {
      marginTop: '3rem',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      border: '1px solid #e1e8ed',
      textAlign: 'center'
    },
    mapPlaceholder: {
      backgroundColor: '#f8f9fa',
      border: '2px dashed #dee2e6',
      borderRadius: '12px',
      padding: '3rem',
      color: '#6c757d',
      fontSize: '1.1rem'
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'info@producthub.com\nsupport@producthub.com'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (555) 123-4567\n+1 (555) 987-6543'
    },
    {
      icon: '📍',
      label: 'Address',
      value: '123 Commerce Street\nBusiness District\nNew York, NY 10001'
    },
    {
      icon: '🕒',
      label: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#007bff'
    e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)'
  }

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e9ecef'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Get In Touch</h2>
          <p style={styles.subtitle}>
            Have questions or need assistance? We're here to help you find the perfect products
          </p>
        </div>

        <div style={styles.content}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            {contactInfo.map((item, index) => (
              <div key={index} style={styles.contactItem}>
                <span style={styles.contactIcon}>{item.icon}</span>
                <div style={styles.contactDetails}>
                  <div style={styles.contactLabel}>{item.label}</div>
                  <div style={styles.contactValue}>
                    {item.value.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div style={styles.contactForm}>
            <h3 style={styles.sectionTitle}>Send us a Message</h3>
            
            {submitMessage && (
              <div 
                style={{
                  ...styles.submitMessage,
                  ...(submitMessage.includes('Thank you') 
                    ? styles.submitMessageSuccess 
                    : styles.submitMessageError)
                }}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={styles.formInput}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={styles.formInput}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={styles.formInput}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel} htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={styles.formTextarea}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting ? styles.submitButtonDisabled : {})
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    Object.assign(e.target.style, styles.submitButtonHover)
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    Object.assign(e.target.style, styles.submitButton)
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner">🔄</span>
                    Sending...
                  </>
                ) : (
                  <>
                    📤 Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div style={styles.mapContainer}>
          <h3 style={styles.sectionTitle}>Find Us</h3>
          <div style={styles.mapPlaceholder}>
            🗺️ Interactive map would be displayed here<br />
            <small>123 Commerce Street, Business District, New York, NY 10001</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
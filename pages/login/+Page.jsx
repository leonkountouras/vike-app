import React, { useState, useEffect } from 'react'
import { useAuth } from '../../components/AuthContext'
import '../../styles/responsive.css'
import '../../styles/wordpress.css'
import '../../styles/responsive-wp.css'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const { login, isAuthenticated, loading: authLoading } = useAuth()

  // Redirect if already authenticated (only after auth loading is complete)
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      window.location.href = '/products'
    }
  }, [isAuthenticated, authLoading])

  // Don't render the form if we're still checking auth or if user is authenticated
  if (authLoading) {
    return (
      <div className="wp-login-container">
        <div className="wp-login-form">
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            Loading...
          </div>
        </div>
      </div>
    )
  }

  if (isAuthenticated) {
    return (
      <div className="wp-login-container">
        <div className="wp-login-form">
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            Redirecting...
          </div>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email format is invalid'
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email is too long (max 100 characters)'
    } else if (formData.email.length < 5) {
      newErrors.email = 'Email is too short (min 5 characters)'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email contains invalid characters'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    } else if (formData.password.length > 50) {
      newErrors.password = 'Password is too long (max 50 characters)'
    } else if (!/\S+/.test(formData.password)) {
      newErrors.password = 'Password cannot contain only whitespace'
    } else if (/^\s|\s$/.test(formData.password)) {
      newErrors.password = 'Password cannot start or end with whitespace'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear previous errors and messages
    setErrors({})
    setMessage('')
    
    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      // Focus the first field with an error
      const firstErrorField = Object.keys(formErrors)[0]
      document.getElementById(firstErrorField)?.focus()
      return
    }

    // Set loading state
    setLoading(true)
    
    try {
      // Trim input values to prevent whitespace issues
      const trimmedEmail = formData.email.trim()
      const result = await login(trimmedEmail, formData.password)
      
      if (result.success) {
        // Show success message with screen reader announcement
        setMessage('Login successful! Redirecting...')
        
        // Add a slight delay before redirect for better user experience
        setTimeout(() => {
          window.location.href = '/products'
        }, 1000)
      } else {
        // Handle server validation errors
        if (result.errors && result.errors.length > 0) {
          const errorObj = {}
          result.errors.forEach(error => {
            errorObj[error.path] = error.msg
          })
          setErrors(errorObj)
          
          // Focus the first field with an error
          const firstErrorField = Object.keys(errorObj)[0]
          document.getElementById(firstErrorField)?.focus()
        } else {
          // Handle general error message
          setMessage(result.message || 'Invalid email or password')
        }
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Login error:', error)
      setMessage('An unexpected error occurred. Please try again.')
    } finally {
      // Always reset loading state
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f5f5f5',
      padding: '20px'
    }}>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="wp-skip-link">Skip to main content</a>
      
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        position: 'relative'
      }} id="main-content">
        {/* Credentials Box */}
        <div style={{
          backgroundColor: '#8BC34A',
          borderRadius: '15px',
          padding: '20px',
          color: 'white',
          marginBottom: '30px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ width: '120px', fontWeight: 'bold', fontSize: '18px' }}>Username:</div>
            <div style={{ fontSize: '18px' }}>AncoraThemes</div>
            <div style={{ marginLeft: 'auto' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '120px', fontWeight: 'bold', fontSize: '18px' }}>Password:</div>
            <div style={{ fontSize: '18px' }}>QWERTY987</div>
            <div style={{ marginLeft: 'auto' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} noValidate aria-label="Login form">
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Username or Email Address
          </h2>
          
          <div style={{ position: 'relative', marginBottom: '30px' }}>
            <div style={{ 
              position: 'absolute', 
              left: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#888'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/>
                <path d="M5 18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18V20H5V18Z" stroke="#888" strokeWidth="2"/>
              </svg>
            </div>
            
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '15px 15px 15px 55px',
                borderRadius: '50px',
                border: '1px solid #ddd',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Username or Email"
              disabled={loading}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
              autoFocus
              required
              maxLength={100}
              aria-required="true"
            />
            
            {errors.email && (
              <div 
                id="email-error" 
                style={{
                  color: '#e53935',
                  fontSize: '14px',
                  marginTop: '5px',
                  paddingLeft: '15px'
                }}
                role="alert"
              >
                {errors.email}
              </div>
            )}
          </div>

          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Password
          </h2>
          
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div style={{ 
              position: 'absolute', 
              left: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#888'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="#888" strokeWidth="2"/>
                <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#888" strokeWidth="2"/>
                <circle cx="12" cy="16" r="2" fill="#888"/>
              </svg>
            </div>
            
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '15px 15px 15px 55px',
                borderRadius: '50px',
                border: '1px solid #ddd',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
              placeholder="Password"
              disabled={loading}
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'password-error' : undefined}
              autoComplete="current-password"
              required
              minLength={6}
              maxLength={50}
              aria-required="true"
            />
            
            <div style={{ 
              position: 'absolute', 
              right: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#888',
              cursor: 'pointer'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#888" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/>
              </svg>
            </div>
            
            {errors.password && (
              <div 
                id="password-error" 
                style={{
                  color: '#e53935',
                  fontSize: '14px',
                  marginTop: '5px',
                  paddingLeft: '15px'
                }}
                role="alert"
              >
                {errors.password}
              </div>
            )}
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <input
              type="checkbox"
              id="remember"
              style={{
                width: '20px',
                height: '20px',
                marginRight: '10px'
              }}
            />
            <label htmlFor="remember" style={{ color: '#888', fontSize: '16px' }}>
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '50px',
              backgroundColor: '#1565C0',
              color: 'white',
              border: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
            aria-busy={loading ? 'true' : 'false'}
            aria-disabled={loading ? 'true' : 'false'}
          >
            {loading ? 'Logging in...' : 'LOG IN'}
          </button>

          {message && (
            <div 
              style={{
                padding: '10px 15px',
                borderRadius: '5px',
                marginBottom: '20px',
                backgroundColor: message.includes('successful') ? '#e8f5e9' : '#ffebee',
                color: message.includes('successful') ? '#2e7d32' : '#c62828',
                fontSize: '14px'
              }}
              role="alert"
              aria-live="assertive"
            >
              {message}
            </div>
          )}
          
          <div style={{ 
            textAlign: 'center',
            color: '#888',
            fontSize: '16px'
          }}>
            <a href="#" style={{ color: '#888', textDecoration: 'none' }}>
              Lost your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
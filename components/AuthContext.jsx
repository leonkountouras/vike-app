import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  // Validate token with server
  const validateToken = async (token) => {
    try {
      // Use absolute URL with the current origin
      const apiUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/api/auth/profile`
        : '/api/auth/profile';
        
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.ok
    } catch (error) {
      console.error('Token validation error:', error);
      return false
    }
  }

  // Check for existing token on mount (client-side only)
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('token')
      const savedUser = localStorage.getItem('user')
      
      if (savedToken && savedUser) {
        try {
          // Set a timeout to prevent infinite loading
          const timeoutId = setTimeout(() => {
            console.log('Token validation timed out, clearing stored data')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setLoading(false)
          }, 5000) // 5 second timeout
          
          // Validate token with server
          validateToken(savedToken)
            .then(isValid => {
              clearTimeout(timeoutId) // Clear the timeout
              if (isValid) {
                setToken(savedToken)
                setUser(JSON.parse(savedUser))
              } else {
                console.log('Token is invalid, clearing stored data')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
              }
              setLoading(false)
            })
            .catch(err => {
              clearTimeout(timeoutId) // Clear the timeout
              console.error('Error validating token:', err)
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              setLoading(false)
            })
          
          // Don't set loading to false here, wait for validation or timeout
          return
        } catch (error) {
          console.error('Error parsing saved user data:', error)
          // Clear invalid data
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    try {
      // Use absolute URL with the current origin
      const apiUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/api/auth/login`
        : '/api/auth/login';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        const { user, token } = data.data
        setUser(user)
        setToken(token)
        // Only use localStorage on client side
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
        }
        return { success: true }
      } else {
        return { success: false, message: data.message, errors: data.errors }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Network error. Please try again.' }
    }
  }

  const register = async (name, email, password) => {
    try {
      // Use absolute URL with the current origin
      const apiUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/api/auth/register`
        : '/api/auth/register';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (data.success) {
        const { user, token } = data.data
        setUser(user)
        setToken(token)
        // Only use localStorage on client side
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
        }
        return { success: true }
      } else {
        return { success: false, message: data.message, errors: data.errors }
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, message: 'Network error. Please try again.' }
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    // Only use localStorage on client side
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }

  const getAuthHeaders = (skipContentType = false) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    
    // Don't add Content-Type for FormData (browser will set it with boundary)
    if (!skipContentType) {
      headers['Content-Type'] = 'application/json'
    }
    
    return headers
  }

  // Handle API errors and auto-logout on invalid token
  const handleApiError = (response) => {
    if (response.status === 401 || response.status === 403) {
      console.log('Authentication failed, logging out')
      logout()
    }
  }

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    getAuthHeaders,
    handleApiError,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
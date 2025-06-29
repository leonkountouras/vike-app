import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../../components/AuthContext'
import Layout from '../../../../components/Layout'
import '../../../../styles/responsive.css'

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem'
  },
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
    color: '#6c757d'
  },
  breadcrumbLink: {
    color: '#3498db',
    textDecoration: 'none',
    transition: 'color 0.2s'
  },
  breadcrumbSeparator: {
    color: '#adb5bd'
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#3498db',
    textDecoration: 'none',
    marginBottom: '1rem',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.2s',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: '1px solid #e1e8ed',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  header: {
    marginBottom: '2rem',
    padding: '1.5rem',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #e1e8ed'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6c757d',
    fontSize: '1.1rem'
  },
  form: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #e1e8ed'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    fontSize: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    backgroundColor: '#fff'
  },
  inputFocus: {
    borderColor: '#3498db',
    boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.1)',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    backgroundColor: '#fff',
    minHeight: '120px',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    backgroundColor: '#fff'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e9ecef'
  },
  saveButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginLeft: 'auto'
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.2rem',
    color: '#6c757d'
  },
  error: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #f5c6cb',
    marginBottom: '1rem'
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #c3e6cb',
    marginBottom: '1rem'
  },
  imagePreview: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginTop: '0.5rem'
  },
  imagePlaceholder: {
    width: '200px',
    height: '200px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#6c757d',
    border: '2px dashed #dee2e6',
    marginTop: '0.5rem'
  }
}

export default function EditProductPage() {
  const { isAuthenticated, loading: authLoading, getAuthHeaders, handleApiError } = useAuth()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [productId, setProductId] = useState('')
  const [categories, setCategories] = useState([])
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    sku: '',
    featured: false,
    status: 'active'
  })
  
  const [productImages, setProductImages] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)

  useEffect(() => {
    // Get product ID from URL on client side
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/')
      const id = pathParts[pathParts.length - 2] // Get ID from /products/{id}/edit
      setProductId(id)
    }
  }, [])

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }
      return
    }

    if (isAuthenticated && productId) {
      fetchProduct()
      fetchCategories()
    }
  }, [isAuthenticated, authLoading, productId])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/products/${productId}`, {
        headers: getAuthHeaders()
      })

      if (!response.ok) {
        handleApiError(response)
        return
      }

      const data = await response.json()

      if (data.success) {
        const productData = data.data.product
        setProduct(productData)
        setFormData({
          name: productData.name || '',
          description: productData.description || '',
          price: productData.price?.toString() || '',
          category: productData.category || '',
          stock: productData.stock?.toString() || '',
          sku: productData.sku || '',
          featured: productData.featured || false,
          status: productData.status || 'active'
        })
        
        // Handle product images
        const images = [];
        
        // Add main image if it exists
        if (productData.image) {
          images.push({
            preview: productData.image,
            isExisting: true,
            path: productData.image
          });
        }
        
        // Add additional images if they exist
        if (productData.images && productData.images.length > 0) {
          // Skip the first image if it's the same as the main image
          const additionalImages = productData.images.filter(img => img !== productData.image);
          
          additionalImages.forEach(imagePath => {
            images.push({
              preview: imagePath,
              isExisting: true,
              path: imagePath
            });
          });
        }
        
        setProductImages(images);
        setSelectedImageIndex(0); // Set the main image as selected
      } else {
        setError(data.message || 'Failed to fetch product')
      }
    } catch (err) {
      console.error('Error fetching product:', err)
      setError('Failed to fetch product')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/products/categories', {
        headers: getAuthHeaders()
      })
      
      if (!response.ok) {
        handleApiError(response)
        return
      }
      
      const data = await response.json()
      
      if (data.success) {
        setCategories(data.data.categories)
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return
    
    files.forEach(file => {
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setProductImages(prevImages => [
          ...prevImages,
          {
            file: file,
            preview: reader.result,
            isNew: true
          }
        ])
      }
      reader.readAsDataURL(file)
    })
  }
  
  const handleMultipleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return
    
    files.forEach(file => {
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setProductImages(prevImages => [
          ...prevImages,
          {
            file: file,
            preview: reader.result,
            isNew: true
          }
        ])
      }
      reader.readAsDataURL(file)
    })
  }
  
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index)
  }
  
  const handleRemoveImage = (index, e) => {
    e.stopPropagation()
    
    setProductImages(prevImages => {
      const newImages = [...prevImages]
      newImages.splice(index, 1)
      
      // Adjust selected index if needed
      if (selectedImageIndex >= newImages.length) {
        setSelectedImageIndex(Math.max(0, newImages.length - 1))
      } else if (index === selectedImageIndex && newImages.length > 0) {
        // Keep the same selected index unless we removed the selected image
        setSelectedImageIndex(0)
      }
      
      return newImages
    })
  }
  
  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index)
  }
  
  const handleMouseLeave = () => {
    setHoveredImageIndex(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      // Create FormData object for multipart/form-data (needed for file uploads)
      const formDataObj = new FormData()
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })
      
      // Convert numeric fields
      formDataObj.set('price', parseFloat(formData.price))
      formDataObj.set('stock', parseInt(formData.stock))
      
      // Add featured image index
      formDataObj.append('featuredImageIndex', selectedImageIndex)
      
      // Add images if selected
      if (productImages.length > 0) {
        // Add the featured image first (the selected one)
        if (productImages[selectedImageIndex]) {
          const selectedImage = productImages[selectedImageIndex]
          
          if (selectedImage.isNew && selectedImage.file) {
            formDataObj.append('featuredImage', selectedImage.file)
          } else if (selectedImage.isExisting) {
            // If it's an existing image, send the path
            formDataObj.append('featuredImagePath', selectedImage.path)
          }
        }
        
        // Add all other new images
        productImages.forEach((img, index) => {
          if (index !== selectedImageIndex && img.isNew && img.file) {
            formDataObj.append('additionalImages', img.file)
          }
        })
        
        // Add paths of existing images that should be kept
        const existingImagePaths = productImages
          .filter((img, index) => index !== selectedImageIndex && img.isExisting)
          .map(img => img.path)
        
        if (existingImagePaths.length > 0) {
          formDataObj.append('existingAdditionalImages', JSON.stringify(existingImagePaths))
        }
        
        // Add the selected index as metadata
        formDataObj.append('featuredImageIndex', selectedImageIndex)
      }
      
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: getAuthHeaders(true), // Skip content-type for FormData
        body: formDataObj
      })

      if (!response.ok) {
        handleApiError(response)
        return
      }

      const data = await response.json()

      if (data.success) {
        setSuccess('Product updated successfully!')
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            window.location.href = `/products/${productId}`
          }
        }, 1500)
      } else {
        setError(data.message || 'Failed to update product')
      }
    } catch (err) {
      console.error('Error updating product:', err)
      setError('Failed to update product')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      })

      if (!response.ok) {
        handleApiError(response)
        return
      }

      const data = await response.json()

      if (data.success) {
        alert('Product deleted successfully!')
        if (typeof window !== 'undefined') {
          window.location.href = '/products'
        }
      } else {
        setError(data.message || 'Failed to delete product')
      }
    } catch (err) {
      console.error('Error deleting product:', err)
      setError('Failed to delete product')
    }
  }

  if (authLoading || loading) {
    return (
      <Layout>
        <div style={styles.loading}>
          <div>🔄 Loading product...</div>
        </div>
      </Layout>
    )
  }

  if (!product) {
    return (
      <Layout>
        <div style={styles.container}>
          <a href="/products" style={styles.backButton}>
            ← Back to Products
          </a>
          <div style={styles.error}>
            Product not found
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div style={styles.container}>
        {/* Breadcrumbs */}
        <div style={styles.breadcrumbs}>
          <a href="/" style={styles.breadcrumbLink}>Home</a>
          <span style={styles.breadcrumbSeparator}>/</span>
          <a href="/products" style={styles.breadcrumbLink}>Products</a>
          <span style={styles.breadcrumbSeparator}>/</span>
          <a href={`/products/${productId}`} style={styles.breadcrumbLink}>{product.name}</a>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span>Edit</span>
        </div>

        <a href={`/products/${productId}`} style={styles.backButton}>
          ← Back to Product
        </a>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Edit Product</h1>
          <p style={styles.subtitle}>Update product information and details</p>
        </div>

        {/* Messages */}
        {error && <div style={styles.error}>❌ {error}</div>}
        {success && <div style={styles.success}>✅ {success}</div>}

        {/* Edit Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Product Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
              required
              placeholder="Enter product name"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={styles.textarea}
              required
              placeholder="Enter product description"
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Price ($) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                style={styles.input}
                required
                min="0"
                step="0.01"
                placeholder="0.00"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Stock Quantity *</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                style={styles.input}
                required
                min="0"
                placeholder="0"
              />
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                style={styles.select}
                required
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home & Garden">Home & Garden</option>
                <option value="Sports">Sports</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
                <option value="Health">Health</option>
                <option value="Beauty">Beauty</option>
                <option value="Automotive">Automotive</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>SKU</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="Product SKU"
              />
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                style={styles.select}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  style={{ marginRight: '0.5rem' }}
                />
                Featured Product
              </label>
            </div>
          </div>

          {/* Product Images */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Product Images</label>
            <div style={{marginBottom: '1rem'}}>
              <div style={{
                width: '200px',
                height: '200px',
                border: '2px dashed #e9ecef',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem'
              }}>
                {productImages.length > 0 && selectedImageIndex < productImages.length ? (
                  <img 
                    src={productImages[selectedImageIndex].preview} 
                    alt="Featured Preview" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} 
                  />
                ) : (
                  <div style={{
                    color: '#6c757d',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    <p>No images available</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMultipleImageUpload}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer'
                      }}
                      multiple
                    />
                  </div>
                )}
              </div>
              
              <div style={{...styles.formGroup, marginTop: '1rem'}}>
                <label style={styles.label}>Featured Image</label>
                <p style={{fontSize: '0.9rem', color: '#6c757d', marginBottom: '0.5rem'}}>
                  Click on an image to set it as the featured image (main product image)
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '10px'
              }}>
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: index === selectedImageIndex ? '2px solid #28a745' : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: index === selectedImageIndex ? '0 0 0 2px rgba(40, 167, 69, 0.5)' : 'none'
                    }}
                    onClick={() => handleThumbnailClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {index === selectedImageIndex && (
                      <div style={{
                        position: 'absolute',
                        top: '5px',
                        left: '5px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        fontSize: '10px',
                        padding: '2px 5px',
                        borderRadius: '3px',
                        zIndex: 1
                      }}>Featured</div>
                    )}
                    <img 
                      src={image.preview} 
                      alt={`Thumbnail ${index + 1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} 
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: hoveredImageIndex === index ? 1 : 0,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        gap: '5px'
                      }}>
                        <button 
                          type="button"
                          style={{
                            backgroundColor: 'white',
                            color: '#333',
                            border: 'none',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                          onClick={(e) => handleRemoveImage(index, e)}
                          title="Remove image"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <label style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  border: '2px dashed #e9ecef',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#6c757d',
                  fontSize: '24px'
                }} title="Add more images">
                  +
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    multiple
                  />
                </label>
              </div>
              
              {productImages.length > 0 && (
                <div style={{marginTop: '1rem', fontSize: '0.9rem', color: '#28a745'}}>
                  {productImages.length} image(s) selected. The highlighted image will be used as the featured product image.
                </div>
              )}
            </div>
          </div>

          <div style={styles.buttonGroup}>
            <button
              type="submit"
              style={styles.saveButton}
              disabled={saving}
              onMouseEnter={(e) => !saving && (e.target.style.backgroundColor = '#218838')}
              onMouseLeave={(e) => !saving && (e.target.style.backgroundColor = '#28a745')}
            >
              {saving ? '💾 Saving...' : '💾 Save Changes'}
            </button>

            <a href={`/products/${productId}`} style={styles.cancelButton}>
              ❌ Cancel
            </a>

            <button
              type="button"
              style={styles.deleteButton}
              onClick={handleDelete}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              🗑️ Delete Product
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
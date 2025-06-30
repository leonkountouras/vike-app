import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../components/AuthContext'
import Layout from '../../../components/Layout'
import '../../../styles/responsive.css'

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '800px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '1.5rem',
    color: 'white',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  title: {
    fontWeight: 'bold',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  subtitle: {
    opacity: 0.9,
    marginTop: '0.5rem'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    marginBottom: '2rem',
    border: '1px solid #e1e8ed'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    minHeight: '150px',
    resize: 'vertical',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none'
  },
  imagePreview: {
    width: '100%',
    height: '200px',
    border: '2px dashed #e9ecef',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    overflow: 'hidden',
    position: 'relative'
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  previewPlaceholder: {
    color: '#6c757d',
    fontSize: '1rem',
    textAlign: 'center'
  },
  fileInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer'
  },
  thumbnailsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px'
  },
  thumbnailItem: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  thumbnailSelected: {
    border: '2px solid #28a745',
    boxShadow: '0 0 0 2px rgba(40, 167, 69, 0.5)'
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.2s ease'
  },
  thumbnailOverlayHover: {
    opacity: 1
  },
  thumbnailActions: {
    display: 'flex',
    gap: '5px'
  },
  thumbnailActionButton: {
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
  },
  thumbnailAddButton: {
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
  },
  featuredBadge: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '10px',
    padding: '2px 5px',
    borderRadius: '3px',
    zIndex: 1
  },
  imageUploadContainer: {
    marginBottom: '20px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem'
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  error: {
    color: '#dc3545',
    marginTop: '0.5rem',
    fontSize: '0.9rem'
  },
  success: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    border: '1px solid #c3e6cb'
  },
  categorySection: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  },
  categoryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  categoryTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  categoryInput: {
    width: '70%',
    padding: '0.5rem',
    border: '1px solid #e9ecef',
    borderRadius: '4px',
    fontSize: '0.9rem'
  },
  categoryButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  categoryList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem'
  },
  categoryItem: {
    backgroundColor: '#e9ecef',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  categoryCount: {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem'
  }
}

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    sku: '',
    stock: '',
    status: 'active'
  })
  
  const [productImages, setProductImages] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [categories, setCategories] = useState([])
  const [newCategory, setNewCategory] = useState('')
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null)
  
  const { isAuthenticated, loading: authLoading, getAuthHeaders, handleApiError } = useAuth()
  
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      window.location.href = '/login'
      return
    }
    
    if (isAuthenticated) {
      fetchCategories()
    }
  }, [isAuthenticated, authLoading])
  
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
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
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
            preview: reader.result
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
            preview: reader.result
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
  
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return
    
    // Check if category already exists
    if (categories.some(cat => cat.name.toLowerCase() === newCategory.toLowerCase())) {
      setError('Category already exists')
      return
    }
    
    // Create a product with the new category to add it to the system
    try {
      setLoading(true)
      
      // Create a minimal product with the new category
      const dummyProduct = {
        name: `Category Placeholder - ${newCategory}`,
        description: `This is a placeholder product for the ${newCategory} category.`,
        price: 0.01,
        category: newCategory,
        stock: 0,
        status: 'draft'
      }
      
      const formDataObj = new FormData()
      Object.entries(dummyProduct).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })
      
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: getAuthHeaders(true), // Skip content-type for FormData
        body: formDataObj
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create category')
      }
      
      // Update categories list
      await fetchCategories()
      
      // Set the new category as the selected category
      setFormData({
        ...formData,
        category: newCategory
      })
      
      setNewCategory('')
      setError('')
    } catch (err) {
      setError(err.message || 'Failed to add category')
    } finally {
      setLoading(false)
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      setError('')
      setSuccess('')
      
      // Validate form
      if (!formData.name) {
        setError('Product name is required')
        setLoading(false)
        return
      }
      
      if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
        setError('Valid price is required')
        setLoading(false)
        return
      }
      
      // Create FormData object
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })
      
      // Add images if selected
      if (productImages.length > 0) {
        // Add the featured image first (the selected one)
        if (productImages[selectedImageIndex]) {
          formDataObj.append('featuredImage', productImages[selectedImageIndex].file)
        }
        
        // Add all other images
        productImages.forEach((img, index) => {
          if (index !== selectedImageIndex) {
            formDataObj.append('additionalImages', img.file)
          }
        })
        
        // Add the selected index as metadata
        formDataObj.append('featuredImageIndex', selectedImageIndex)
      }
      
      // Submit form
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: getAuthHeaders(true), // Skip content-type for FormData
        body: formDataObj
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create product')
      }
      
      const data = await response.json()
      
      setSuccess('Product created successfully!')
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        sku: '',
        stock: '',
        status: 'active'
      })
      setProductImages([])
      setSelectedImageIndex(0)
      
      // Redirect to product list after a delay
      setTimeout(() => {
        window.location.href = '/products'
      }, 2000)
      
    } catch (err) {
      setError(err.message || 'Failed to create product')
    } finally {
      setLoading(false)
    }
  }
  
  if (authLoading) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <div>🔄 Loading...</div>
        </div>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <div style={styles.container} className="create-product-container">
        {/* Header */}
        <div style={styles.header} className="create-product-header">
          <div>
            <h1 style={styles.title}>➕ Create New Product</h1>
            <p style={styles.subtitle}>Add a new product to your inventory</p>
          </div>
        </div>
        
        {/* Form */}
        <div style={styles.formContainer} className="create-product-form">
          {success && <div style={styles.success}>{success}</div>}
          {error && <div style={styles.error}>{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="name">Product Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                style={styles.input}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                required
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                style={styles.textarea}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter product description"
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="price">Price *</label>
              <input
                type="number"
                id="price"
                name="price"
                style={styles.input}
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
                step="0.01"
                min="0"
                required
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                style={styles.select}
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              {/* Add new category section */}
              <div style={styles.categorySection}>
                <div style={styles.categoryHeader}>
                  <div style={styles.categoryTitle}>Add New Category</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    style={styles.categoryInput}
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Enter new category name"
                  />
                  <button
                    type="button"
                    style={styles.categoryButton}
                    onClick={handleAddCategory}
                    disabled={loading}
                  >
                    Add
                  </button>
                </div>
                
                {categories.length > 0 && (
                  <div style={styles.categoryList}>
                    {categories.map(category => (
                      <div key={category.name} style={styles.categoryItem}>
                        {category.name}
                        <span style={styles.categoryCount}>{category.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="sku">SKU</label>
              <input
                type="text"
                id="sku"
                name="sku"
                style={styles.input}
                value={formData.sku}
                onChange={handleInputChange}
                placeholder="Enter product SKU"
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                style={styles.input}
                value={formData.stock}
                onChange={handleInputChange}
                placeholder="Enter stock quantity"
                min="0"
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                style={styles.select}
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label}>Product Images</label>
              <div style={styles.imageUploadContainer}>
                <div style={styles.imagePreview}>
                  {productImages.length > 0 && selectedImageIndex < productImages.length ? (
                    <img 
                      src={productImages[selectedImageIndex].preview} 
                      alt="Featured Preview" 
                      style={styles.previewImage} 
                    />
                  ) : (
                    <div style={styles.previewPlaceholder}>
                      <p>Select or upload images to see preview</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleMultipleImageUpload}
                        style={styles.fileInput}
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
                
                <div style={styles.thumbnailsContainer}>
                  {productImages.map((image, index) => (
                    <div 
                      key={index}
                      style={{
                        ...styles.thumbnailItem,
                        ...(index === selectedImageIndex ? styles.thumbnailSelected : {})
                      }}
                      onClick={() => handleThumbnailClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {index === selectedImageIndex && (
                        <div style={styles.featuredBadge}>Featured</div>
                      )}
                      <img 
                        src={image.preview} 
                        alt={`Thumbnail ${index + 1}`} 
                        style={styles.thumbnailImage} 
                      />
                      <div 
                        style={{
                          ...styles.thumbnailOverlay,
                          ...(hoveredImageIndex === index ? styles.thumbnailOverlayHover : {})
                        }}
                      >
                        <div style={styles.thumbnailActions}>
                          <button 
                            type="button"
                            style={styles.thumbnailActionButton}
                            onClick={(e) => handleRemoveImage(index, e)}
                            title="Remove image"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <label style={styles.thumbnailAddButton} title="Add more images">
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
            
            <div style={styles.buttonContainer}>
              <button
                type="button"
                style={styles.cancelButton}
                onClick={() => window.location.href = '/products'}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={styles.submitButton}
                disabled={loading}
              >
                {loading ? '🔄 Creating...' : '✅ Create Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
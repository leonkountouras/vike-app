import React from 'react'

export default function Simple() {
  const handleClick = () => {
    alert('Button clicked! Client-side JavaScript is working.')
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Simple Test Page</h1>
      <p>This page tests basic client-side JavaScript functionality.</p>
      <button 
        onClick={handleClick}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Click me to test JavaScript
      </button>
      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('Inline script executed');
          window.addEventListener('load', function() {
            console.log('Window loaded');
          });
        `
      }} />
    </div>
  )
}
import React, { useState, useEffect } from 'react'

export default function Test() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Test component mounted')
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      console.log('Fetching data...')
      const response = await fetch('/api/products/public')
      console.log('Response received:', response.status)
      const result = await response.json()
      console.log('Data:', result)
      setData(result)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading test...</div>
  }

  return (
    <div>
      <h1>Test Page</h1>
      <p>Data loaded: {data ? 'Yes' : 'No'}</p>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}
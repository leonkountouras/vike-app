// Simple test to verify API connectivity
const API_BASE_URL = 'https://work-2-qrsolblshsmgtweg.prod-runtime.all-hands.dev';

async function testAPI() {
  try {
    console.log('Testing API connection...');
    const response = await fetch(`${API_BASE_URL}/api/products/public`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', {
      success: data.success,
      productCount: data.data?.products?.length || 0,
      firstProduct: data.data?.products?.[0]?.name || 'None'
    });
    
    return data;
  } catch (error) {
    console.error('API Test Failed:', error.message);
    return null;
  }
}

// Run the test
testAPI();
// composables/useProducts.js
export const useProducts = () => {
  const fetchNewArrivals = async () => {
    try {
      const { data, error } = await useFetch('/api/products/new-arrivals', {
        method: 'GET',
        baseURL: 'https://your-backend.com' // أو من .env
      })
      
      if (error.value) throw error.value
      return data.value
    } catch (err) {
      console.error('Error fetching products:', err)
      return []
    }
  }

  return {
    fetchNewArrivals
  }
}
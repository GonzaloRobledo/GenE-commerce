import React, { useState, useEffect } from 'react'

export const useFetch = url => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) throw res
        const json = await res.json()
        setProducts(json.products)
      } catch (err) {
        alert('ERROR')
      }
    }
    getProducts()
  }, [])

  return { products }
}

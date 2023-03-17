import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const CategoryFilter = () => {
  const { products, setFilters, filters } = useContext(ProductsContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const listCategories = new Set(products.map(el => el.category))
      setCategories([...listCategories])
    }
  }, [products])

  return (
    <div className='art-filters__form__category'>
      <h4>Category</h4>
      <p
        onClick={() => setFilters({ ...filters, category: 'all' })}
        className={`${filters.category == 'all' && 'markedCategory'}`}
      >
        All
      </p>
      {categories.length > 0 ? (
        categories.map(el => (
          <p
            key={el}
            onClick={() => setFilters({ ...filters, category: el })}
            className={`${filters.category == el && 'markedCategory'}`}
          >
            {el}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

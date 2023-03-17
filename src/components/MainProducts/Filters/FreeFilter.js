import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const FreeFilter = () => {
  const { filters, setFilters } = useContext(ProductsContext)

  return (
    <div className='art-filters__form__free'>
      <p>Free Shipping</p>
      <input
        type='checkbox'
        onChange={() => setFilters({ ...filters, free: !filters.free })}
      />
    </div>
  )
}

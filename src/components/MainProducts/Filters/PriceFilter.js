import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const PriceFilter = () => {
  const { products, filters, setFilters } = useContext(ProductsContext)

  const maxPrice = () => {
    const prices = new Set(products.map(el => el.price))
    const priceMax = Math.max(...prices)

    return products.length > 0 ? priceMax : 0
  }

  return (
    <div className='art-filters__form__price'>
      <h4>Price</h4>
      <p className='priceMax'>${filters.price || maxPrice()}</p>
      <input
        type='range'
        min='0'
        max={maxPrice()}
        onChange={e => setFilters({ ...filters, price: e.target.value })}
        value={filters.price || maxPrice()}
      />
    </div>
  )
}

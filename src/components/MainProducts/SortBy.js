import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export const SortBy = () => {
  const { setSortBy } = useContext(ProductsContext)

  const handleSortBy = e => {
    const value = e.target.value
    let valueSort = value.slice(value.indexOf('(') + 1, -1)
    setSortBy(valueSort)
  }

  return (
    <div className='sort-by'>
      <p>Sort By</p>
      <select onChange={handleSortBy}>
        <option>Price (Lowest)</option>
        <option>Price (Highest)</option>
        <option>Name (A-Z)</option>
        <option>Name (Z-A)</option>
      </select>
    </div>
  )
}

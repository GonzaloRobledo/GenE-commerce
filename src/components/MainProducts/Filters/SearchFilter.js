import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const SearchFilter = () => {
  const { setFilters, filters } = useContext(ProductsContext)

  const handleChange = e => setFilters({ ...filters, search: e.target.value })

  return (
    <input
      type='text'
      placeholder='Search'
      value={filters.search}
      onChange={handleChange}
    />
  )
}

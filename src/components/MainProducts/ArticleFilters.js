import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { CategoryFilter } from './Filters/CategoryFilter'
import { ColorsFilter } from './Filters/ColorsFilter'
import { CompanyFilter } from './Filters/CompanyFilter'
import { FreeFilter } from './Filters/FreeFilter'
import { PriceFilter } from './Filters/PriceFilter'
import { SearchFilter } from './Filters/SearchFilter'
import { initialFilters } from '../../context/ProductsContext'

export const ArticleFilters = () => {
  const { setFilters } = useContext(ProductsContext)

  return (
    <article className='art-filters'>
      <form className='art-filters__form'>
        <SearchFilter />
        <CategoryFilter />
        <CompanyFilter />
        <ColorsFilter />
        <PriceFilter />
        <FreeFilter />

        <input
          type='button'
          value='Clear Filters'
          className='btn-clear-filter'
          onClick={() => setFilters(initialFilters)}
        />
      </form>
    </article>
  )
}

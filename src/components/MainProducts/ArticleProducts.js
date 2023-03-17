import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { DisplayProducts } from './DisplayProducts'
import { ItemProduct } from './ItemProduct'
import { SortBy } from './SortBy'

export const ArticleProducts = () => {
  const { filterProducts, view } = useContext(ProductsContext)

  return (
    <article className='art-products'>
      <div className='art-products__data'>
        <DisplayProducts />
        <p className='quantity-found-products'>
          {filterProducts.length} Products found
        </p>
        <hr className='line' />
        <SortBy />
      </div>
      {filterProducts.length > 0 ? (
        <div className={`list-products ${view}`}>
          {filterProducts.map(el => (
            <ItemProduct key={el.id} product={el} conditionView={true} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  )
}

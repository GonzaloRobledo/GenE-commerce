import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { DisplayProducts } from './DisplayProducts'
import { ItemProduct } from './ItemProduct'
import { SortBy } from './SortBy'
import { useScreenSize } from '../../hooks/useScreenSize'

export const ArticleProducts = () => {
  const { filterProducts, view } = useContext(ProductsContext)
  const { width } = useScreenSize()

  return (
    <article className='art-products'>
      <div className='art-products__data'>
        {width <= 1000 ? (
          <div className='art-products__data__flex-info'>
            <DisplayProducts />
            <p className='quantity-found-products'>
              {filterProducts.length} Products found
            </p>
          </div>
        ) : (
          <>
            <DisplayProducts />
            <p className='quantity-found-products'>
              {filterProducts.length} Products found
            </p>
            <hr className='line' />
          </>
        )}
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

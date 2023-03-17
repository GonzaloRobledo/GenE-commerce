import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export const DisplayProducts = () => {
  const { handleView, view } = useContext(ProductsContext)

  return (
    <div className='view'>
      <p
        className={`${view == 'grid' && 'selected-view'}`}
        data-view='grid'
        onClick={handleView}
      >
        G
      </p>
      <p
        data-view='block'
        onClick={handleView}
        className={`${view == 'block' && 'selected-view'}`}
      >
        B
      </p>
    </div>
  )
}

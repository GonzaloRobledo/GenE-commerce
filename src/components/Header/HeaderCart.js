import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export const HeaderCart = () => {
  const { cart, handleToggleCart } = useContext(ProductsContext)

  return (
    <div className='shop-cart'>
      <h3>Cart</h3>
      <p onClick={handleToggleCart}>
        🛒<span> {cart.length}</span>
      </p>
    </div>
  )
}

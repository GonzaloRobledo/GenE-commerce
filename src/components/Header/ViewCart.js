import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { ItemCart } from './ItemCart'

export const ViewCart = () => {
  const { cart, refCart, handleToggleCart, clearCart } =
    useContext(ProductsContext)

  return (
    <section className='sec-view-cart' ref={refCart}>
      <article className='sec-view-cart__cart'>
        <div className='sec-view-cart__cart__close-title'>
          <h2>Cart</h2>
          <button onClick={handleToggleCart} className='btn-close-cart'>
            X
          </button>
        </div>
        <div className='sec-view-cart__cart__subtitles'>
          <h3>Product</h3>
          <h3>Subtotal</h3>
        </div>
        <div className='cart__items'>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map(el => (
                  <ItemCart key={el.id} item={el} />
                ))}
              </ul>
              <button className='btn-general clear-cart' onClick={clearCart}>
                Clear Cart
              </button>
              <button className='btn-general'>Buy</button>
            </>
          ) : (
            <p className='without-cart'>Sin elementos en el carrito</p>
          )}
        </div>
      </article>
    </section>
  )
}

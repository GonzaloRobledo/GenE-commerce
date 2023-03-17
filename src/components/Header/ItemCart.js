import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export const ItemCart = ({ item }) => {
  const { deleteAllItemToCart } = useContext(ProductsContext)

  return (
    <li className='item-cart'>
      <div className='item-cart__data'>
        <img src={item.img} alt={item.name} />
        <div className='item-cart__data__infoProd'>
          <h3 className='item-cart__data__infoProd__name'>{item.name}</h3>
          <p className='item-cart__data__infoProd__price'>${item.price}</p>
          <span className='item-cart__data__infoProd__quantity'>
            Quantity: x{item.quantityOrdered}
          </span>
        </div>
      </div>
      <div className='item-cart__subtotal'>
        <h4>${item.price * item.quantityOrdered}</h4>
        <button onClick={() => deleteAllItemToCart(item.id)}>🗑️</button>
      </div>
    </li>
  )
}

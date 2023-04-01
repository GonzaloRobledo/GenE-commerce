import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { NavLink } from 'react-router-dom'

export const InfoProduct = ({ product }) => {
  const { addToCart } = useContext(ProductsContext)
  const [quantityOrdered, setQuantityOrdered] = useState(1)

  const addQunatity = () => setQuantityOrdered(quantityOrdered + 1)

  const lessQuantity = () => {
    if (quantityOrdered > 1) setQuantityOrdered(quantityOrdered - 1)
  }

  const handleAddCart = () => {
    setQuantityOrdered(1)
    addToCart(product, quantityOrdered)
  }

  return (
    <section className='container-75 sec-infoProducts'>
      <NavLink to='/products' className='btn-general'>
        Back to products
      </NavLink>
      <article className='flex-infoProduct'>
        <div className='flex-infoProduct__img'>
          <img src={product.img} alt={product.name} />
        </div>
        <div className='flex-infoProduct__data'>
          <h2>{product.name}</h2>
          <h4>${product.price - 0.1}9</h4>
          <p className='flex-infoProduct__data__description'>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className='colors'>
            <h4>Colors:</h4>
            {product.colors.map((el, index) => (
              <div key={index} style={{ backgroundColor: el }}></div>
            ))}
          </div>

          <div className='quantity-ordered'>
            <p onClick={lessQuantity}>-</p>
            <span>{quantityOrdered}</span>
            <p onClick={addQunatity}>+</p>
          </div>
          <button className='btn-general' onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </article>
    </section>
  )
}

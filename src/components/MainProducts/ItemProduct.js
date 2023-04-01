import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router'
import { ProductsContext } from '../../context/ProductsContext'
import { FiSearch } from 'react-icons/fi'

export const ItemProduct = ({ product, conditionView }) => {
  const { view } = useContext(ProductsContext)
  const navigate = useNavigate()
  const refImg = useRef()

  const handleVisible = () => refImg.current.classList.toggle('visible')

  const navigateProd = () => navigate(`/products/${product.name}`)

  return (
    <article
      className={`item-products ${
        conditionView && view == 'block' && 'flex-product'
      }`}
    >
      <div
        className='item-products__img'
        onMouseOver={handleVisible}
        onMouseOut={handleVisible}
      >
        <img src={product.img} alt={product.name} />
        {(!conditionView || view == 'grid') && (
          <div className='lupa__container' ref={refImg} onClick={navigateProd}>
            <div>
              <FiSearch />
            </div>
          </div>
        )}
      </div>
      {!conditionView || view == 'grid' ? (
        <div className='item-products__name-price-grid'>
          <h3 className='item-products__name-price__name'>{product.name}</h3>
          <p className='item-products__name-price-grid__price'>
            ${product.price}
          </p>
        </div>
      ) : (
        <div className='item-products__name-price-block'>
          <h3 className='item-products__name-price__name'>{product.name}</h3>
          <p className='item-products__name-price__price'>${product.price}</p>
          <p className='item-products__name-price__description'>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic ...
          </p>
          <button className='btn-general'>Details</button>
        </div>
      )}
    </article>
  )
}

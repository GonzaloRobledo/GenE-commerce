import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ProductsContext } from '../../context/ProductsContext'
import { ItemProduct } from '../MainProducts/ItemProduct'

export const SectionFeaturedProducts = () => {
  const { products } = useContext(ProductsContext)
  const [featureds, setFeatureds] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (products.length > 0) {
      const filter = products.filter(el => el.featured)
      const threeFeatureds = [filter[0], filter[1], filter[2]]
      setFeatureds(threeFeatureds)
    }
  }, [products])

  const navigateProducts = () => navigate('/products')

  return (
    <section className='sec-featured'>
      <div className='container-75'>
        <h2 className='sec-featured__title'>Featured Products</h2>
        <div className='underline'></div>
        <div className='sec-featured__items'>
          {featureds.length > 0 ? (
            featureds.map(el => <ItemProduct key={el.id} product={el} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button className='btn-general' onClick={navigateProducts}>
          All products
        </button>
      </div>
    </section>
  )
}

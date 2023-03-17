import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { InfoProduct } from '../components/MainProduct/InfoProduct'
import { UbicationSection } from '../components/MainProducts/UbicationSection'
import { ProductsContext } from '../context/ProductsContext'

export const MainProduct = () => {
  const { name } = useParams()
  const { products } = useContext(ProductsContext)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (products.length > 0) {
      const productFind = products.find(el => el.name == name)
      setProduct(productFind)
    }
  }, [products])

  return (
    <main>
      <UbicationSection />
      {product && <InfoProduct product={product} />}
    </main>
  )
}

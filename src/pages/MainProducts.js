import React from 'react'
import { ArticleFilters } from '../components/MainProducts/ArticleFilters'
import { ArticleProducts } from '../components/MainProducts/ArticleProducts'
import { UbicationSection } from '../components/MainProducts/UbicationSection'

export const MainProducts = () => {
  return (
    <main>
      <UbicationSection />
      <section className='container-75 sec-filters-products'>
        <ArticleFilters />
        <ArticleProducts />
      </section>
    </main>
  )
}

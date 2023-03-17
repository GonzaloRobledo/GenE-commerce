import React from 'react'
import { SectionObjective } from '../components/MainHome/SecitonObjective'
import { SectionFeaturedProducts } from '../components/MainHome/SectionFeaturedProducts'
import { SectionIntro } from '../components/MainHome/SectionIntro'

export const MainHome = () => {
  return (
    <main>
      <SectionIntro />
      <SectionFeaturedProducts />
      <SectionObjective />
    </main>
  )
}

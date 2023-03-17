import React from 'react'
import { useNavigate } from 'react-router'
import { useScreenSize } from '../../hooks/useScreenSize'

export const SectionIntro = () => {
  const navigate = useNavigate()
  const { width } = useScreenSize()

  const navigateProducts = () => navigate('/products')

  return (
    <section className='sec-intro container-75'>
      <div className='sec-intro__description'>
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button className='btn-general' onClick={navigateProducts}>
          Shop Now
        </button>
      </div>
      {width > 1000 && (
        <div className='sec-intro__img'>
          <img
            src='https://i.pinimg.com/736x/ed/26/3b/ed263bd5a67f32e222d0b869f8c92710.jpg'
            alt='salaEstar'
          />
        </div>
      )}
    </section>
  )
}

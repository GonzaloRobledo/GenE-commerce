import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import logo from '../../images/logo.png'
import { HeaderCart } from './HeaderCart'
import { NavHeader } from './NavHeader'

export const BurgerMenu = () => {
  const { handleToggleMenu, refMenu } = useContext(ProductsContext)

  return (
    <div className='burgerMenu__container' ref={refMenu}>
      <div className='burgerMenu__container__img-close'>
        <img src={logo} alt='logo' />
        <button className='btn-close-menu' onClick={handleToggleMenu}>
          X
        </button>
      </div>
      <NavHeader />
      <HeaderCart />
    </div>
  )
}

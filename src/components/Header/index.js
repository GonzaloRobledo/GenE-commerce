import React, { useContext, useRef } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { useScreenSize } from '../../hooks/useScreenSize'
import logo from '../../images/logo.png'
import { BurgerMenu } from './BurgerMenu'
import { HeaderCart } from './HeaderCart'
import { NavHeader } from './NavHeader'
import { ViewCart } from './ViewCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const { width } = useScreenSize()
  const { handleToggleMenu } = useContext(ProductsContext)

  return (
    <header className='header container-75'>
      <img src={logo} alt='Logo' />
      {width > 1000 ? (
        <>
          <NavHeader />
          <HeaderCart />
        </>
      ) : (
        <>
          <button onClick={handleToggleMenu} className='btn-open-menu'>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <BurgerMenu />
        </>
      )}
      <ViewCart />
    </header>
  )
}

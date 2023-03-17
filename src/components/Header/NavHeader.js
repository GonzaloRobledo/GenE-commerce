import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { useScreenSize } from '../../hooks/useScreenSize'

export const NavHeader = () => {
  const { handleToggleMenu } = useContext(ProductsContext)
  const { width } = useScreenSize()

  const handleClickToggleMenu = () => {
    if (width < 1000) handleToggleMenu()
  }
  return (
    <nav className='navegation'>
      <ul>
        <li>
          <NavLink
            classnameactive='active'
            to='/'
            onClick={handleClickToggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={handleClickToggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' onClick={handleClickToggleMenu}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

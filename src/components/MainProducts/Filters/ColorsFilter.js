import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const ColorsFilter = () => {
  const { products, filters, setFilters } = useContext(ProductsContext)
  const [colors, setColors] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const listColors = products.map(el => el.colors)
      const colorsAux = new Set()
      listColors.forEach(colors =>
        colors.forEach(color => colorsAux.add(color))
      )
      setColors([...colorsAux])
    }
  }, [products])
  return (
    <div className='art-filters__form__colors'>
      <h4>Colors</h4>
      <div className='colors'>
        <p
          onClick={() => setFilters({ ...filters, color: 'all' })}
          className={`${filters.color == 'all' && 'markedColorAll'}`}
        >
          All
        </p>
        {colors.length > 0 ? (
          colors.map(el => (
            <div
              key={el}
              style={{ backgroundColor: el }}
              onClick={() => setFilters({ ...filters, color: el })}
            >
              {filters.color == el && (
                <span
                  className={`${
                    (el == 'white' || el == 'yellow') && 'blackStyle'
                  }`}
                >
                  &#10004;
                </span>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

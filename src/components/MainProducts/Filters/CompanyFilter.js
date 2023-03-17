import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

export const CompanyFilter = () => {
  const { products, filters, setFilters } = useContext(ProductsContext)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const listCompanies = new Set(products.map(el => el.company))
      setCompanies([...listCompanies])
    }
  }, [products])

  return (
    <div className='art-filters__form__company'>
      <h4>Company</h4>
      <select
        onChange={e => setFilters({ ...filters, company: e.target.value })}
      >
        <option>all</option>
        {companies.length > 0 &&
          companies.map(el => <option key={el}>{el}</option>)}
      </select>
    </div>
  )
}

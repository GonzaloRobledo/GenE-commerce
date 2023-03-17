import { createContext, useEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export const ProductsContext = createContext()

export const initialFilters = {
  search: '',
  color: 'all',
  company: 'all',
  category: 'all',
  price: null,
  free: false
}

export const ProductsProvider = ({ children }) => {
  const { products } = useFetch('products.JSON')
  const [cart, setCart] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [filters, setFilters] = useState(initialFilters)
  const [sortBy, setSortBy] = useState('')
  const [view, setView] = useState('grid')

  const refCart = useRef()
  const refMenu = useRef()

  useEffect(() => {
    if (products.length > 0) {
      setFilterProducts(products)
      setSortBy('Lowest')
    }
  }, [products])

  /**---------FILTERS------- */

  useEffect(() => {
    if (products.length > 0) filterAll()
  }, [filters])

  //filterAll se encarga de llamar a todas las funciones de filtro y ejecutarlas para que se pueda filtrar todo lo que se encuentre "activado"
  const filterAll = () => {
    let filter = products

    if (filters.search != '') filter = filterSearch(filter)
    if (filters.category != 'all') filter = filterCategory(filter)
    if (filters.company != 'all') filter = filterCompany(filter)
    if (filters.color != 'all') filter = filterColors(filter)
    if (filters.free) filter = filter = filterFreeShipping(filter)
    if (filters.price) filter = filterPrice(filter)

    setFilterProducts(filter)
  }

  //Filtra lo que ingrese en el input de Search y la retorna
  const filterSearch = filterProds =>
    filterProds.filter(el =>
      el.name.toLowerCase().includes(filters.search.toLowerCase())
    )

  //Filtra la categoria que se seleccione y la retorna
  const filterCategory = filterProds =>
    filterProds.filter(el => el.category == filters.category)

  //Filtra la compania que se seleccione y la retorna
  const filterCompany = filterProds =>
    filterProds.filter(el => el.company === filters.company)

  //Filtra todos los productos que se encuentren en el color seleccionado
  const filterColors = filterProds =>
    filterProds.filter(el => el.colors.includes(filters.color))

  //Filtra todos los productos que posean envio gratis
  const filterFreeShipping = filterProds =>
    filterProds.filter(el => el.freeShipping)

  //Filtra todos los productos con un precio menor o igual al seleccionado en el input de tipo range
  const filterPrice = filterProds =>
    filterProds.filter(el => el.price <= filters.price)

  //----------SORT BY-------------

  useEffect(() => {
    if (sortBy != '') handleSortBy()
  }, [sortBy])

  const orderProductsPer = attributeSort => {
    let min, aux
    for (let i = 0; i < filterProducts.length - 1; i++) {
      min = i
      for (let j = i + 1; j < filterProducts.length; j++) {
        if (
          filterProducts[min][attributeSort] > filterProducts[j][attributeSort]
        )
          min = j
      }
      if (min != i) {
        aux = filterProducts[i]
        filterProducts[i] = filterProducts[min]
        filterProducts[min] = aux
      }
    }
    return filterProducts
  }

  //Cuando hay un cambio en sortBy se llama a esta funcion que lo que hace es dependiendo el valor de sortBy ordena el array de filterProducts. Para eso llama a una funcion llamada orderProductsPer que lo que hace es ordenarlo de menor a mayor, y luego con un condicional dependiendo de si hay que ordenarlo de mayor a menor o al reves, lo unico que hago es usar un reverse o no para dar vuelta el array.
  const handleSortBy = () => {
    if (sortBy == 'Lowest' || sortBy == 'Highest') {
      setFilterProducts(
        sortBy == 'Lowest'
          ? [...orderProductsPer('price')]
          : [...orderProductsPer('price').reverse()]
      )
    } else {
      if (sortBy == 'A-Z' || sortBy == 'Z-A') {
        setFilterProducts(
          sortBy == 'A-Z'
            ? [...orderProductsPer('name')]
            : [...orderProductsPer('name').reverse()]
        )
      }
    }
  }

  /**------------ View ------------ */

  const handleView = e => setView(e.target.dataset.view)

  /**--------------SHOPPING CART----------- */

  const handleToggleCart = () => refCart.current.classList.toggle('translate-0')

  const addToCart = (product, quantityOrdered) => {
    const findProduct = cart.find(el => el.id == product.id)

    if (findProduct) {
      findProduct.quantityOrdered += quantityOrdered
      setCart([...cart])
    } else {
      const itemCart = {
        ...product,
        quantityOrdered
      }
      setCart([...cart, itemCart])
    }
  }

  const clearCart = () => setCart([])

  const deleteAllItemToCart = id => {
    const newCart = cart.filter(el => el.id !== id)
    setCart(newCart)
  }

  /**---------MENU-------- */

  const handleToggleMenu = () => refMenu.current.classList.toggle('translate-0')

  const data = {
    products,
    filterProducts,
    filters,
    view,
    cart,
    refCart,
    refMenu,
    handleToggleMenu,
    handleToggleCart,
    setSortBy,
    setFilters,
    handleView,
    addToCart,
    clearCart,
    deleteAllItemToCart
  }

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  )
}

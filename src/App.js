import { Header } from './components/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from 'react-router-dom'
import { MainHome } from './pages/MainHome'
import { MainProducts } from './pages/MainProducts'
import { MainAbout } from './pages/MainAbout'
import { Footer } from './components/Footer'
import { ProductsProvider } from './context/ProductsContext'
import { MainProduct } from './pages/MainProduct'

function App () {
  return (
    <>
      <ProductsProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/products' element={<MainProducts />} />
            <Route path='/about' element={<MainAbout />} />
            <Route path='/products/:name' element={<MainProduct />} />
          </Routes>
        </Router>
      </ProductsProvider>
      <Footer />
    </>
  )
}

export default App

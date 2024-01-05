import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/items/:filter?' element={<SearchResults/>} />
        <Route path='/item/:id?' element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

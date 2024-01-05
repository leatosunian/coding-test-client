import { useNavigate, useParams } from "react-router-dom"
import axiosReq from "../config/axios"
import { useEffect, useState } from 'react';
import HeaderSearch from "../components/HeaderSearch";
import Product from "../components/Product";

export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


const SearchResults = () => {
  const navigate = useNavigate()
  const {filter} = useParams()
  const [products, setProducts] = useState<product[]>([])
  const getProducts = async (filter: string | undefined) => {
    const products = await axiosReq.get(`http://localhost:4000/api/items/${filter}`)
    setProducts(products.data)
  }

  const handleProductClick = (product: product) => {
    navigate(`/item/${product.id}`)
  }

  useEffect(() => {
    getProducts(filter)
  }, [filter])
  
  return (
    <>
      <header>
        <HeaderSearch />
        <div className="subtitleCont">
          <span style={{fontWeight:'600'}}>
            Resultados de busqueda de "{filter}": {products.length}
          </span>
        </div>
      </header>

      { products.length > 0 && 
        <div className="productsListCont">
          { products.map((product) => {
            return (
              <Product product={product} propHandleProductClick={(product) => handleProductClick(product)}/>
            )
          })}
        </div>
      }

      { products.length <= 0 &&
        <div style={{width:'100%', textAlign:'center'}}>
          <h4 style={{color:"black"}}>No se encontraron productos.</h4>
        </div>
      }      

    </>
  )
}

export default SearchResults
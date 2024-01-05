import { useEffect, useState } from "react"
import axiosReq from "../config/axios"
import { product } from "./SearchResults"
import { useParams } from "react-router-dom"
import HeaderSearch from "../components/HeaderSearch"

const ProductDetail = () => {

  const [product, setProduct] = useState<product>()
  const {id} = useParams()

  const getProduct = async () => {
    console.log(id);
    
    const product = await axiosReq.get(`http://localhost:4000/api/item/${id}`)
    console.log(product);
    
    setProduct(product.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <header>
        <HeaderSearch/>
      </header>

      <div className="productCont">

        <div className="imgsCont">
          <div className="lgImgCont">
            <img src={product?.thumbnail} alt="" />
          </div>
          <div className="smImgCont">
            <img src={product?.images[0]} alt="" />
            <img src={product?.images[1]} alt="" />
            <img src={product?.images[2]} alt="" />
          </div>
        </div>   

        <div className="detailCont">
          <h4>{product?.title}</h4>
          <strong>${product?.price} USD</strong>
          <span>{product?.stock} disponibles</span>
          <p>{product?.description} </p>
          <button>Comprar</button>
        </div>

      </div>

    </>
  )
}

export default ProductDetail
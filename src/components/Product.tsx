import { product } from '../pages/SearchResults';

interface productProps {
    product: product;
    propHandleProductClick: (product:product) => void
}

const Product = ({product, propHandleProductClick}: productProps) => {
  return (
    <>
        <div className="card" onClick={() => propHandleProductClick(product)}>
            <div className="cardImgCont">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="cardInfoCont">
                <h4>{product.title}</h4>
                <p>{product.description.substring(0, 65)}{product.description.length >= 42 && '...'} </p>
                <strong>${product.price} USD</strong>
            </div>
        </div>
    </>
  )
}

export default Product
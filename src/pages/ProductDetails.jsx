import { useSearchParams } from "react-router-dom";
import productData from "../productData";
import ProductCard from "../components/ProductCard";
import pix from '../assets/pix.svg';
import card from '../assets/card.svg';

import "../css/productDetails/productDetails.css"

export default function ProductDetails() {

  const [searchParams] = useSearchParams();
  const params = searchParams.get("name");


  const product = productData.find((product) => product.name == params);

  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="product">
            <figure>
              <img src={`../`+product.img} alt="Produto" />
            </figure>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>Por apenas {product.price}</p>
              <br />
              <p>{product.description}</p>
              <button type="button" className="button-form" style={{ margin: "8px 0px", cursor: "pointer" }}>Comprar</button>
              <p>Formas de pagamento </p>
              <br />
              <div className="icones">
             <img src={pix} alt="pix" style={{ height: '30px', marginRight: '20px' }}></img>
             <img src={card} alt="card" style={{ height: '30px', marginRight: '20px' }}></img> 
             </div>
             <br />
             <p>45 unidades disponivel</p>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
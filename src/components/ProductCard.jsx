import "../css/home/ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className='product-card'>
      <img src={props.img}></img>
      <div>
        <p>{props.nome}</p>
        <hr></hr>
        <p>{props.price}</p>
      </div>
    </div>
  )
}
import { useState } from "react"

/* function Product({productName, price,  onClickHandler }) { */
function Product({product, onClickHandler}) {
/* function Product(props) { */

const [isInCart, setIsInCart] = useState(false);

  return (<div style={{
    width: "150px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    padding: "5px"
  }}>
    {/* <h2>Product Name</h2> */}
    {/* <h2>{productName}</h2> */}
    <h2>{product.name}</h2>
    {/* <h2>{props.product.name}</h2> */}
    {/* <div>Price CZK</div> */}
    {/* <div>{price}</div> */}
    <div>{product.price}</div>
    <div><img src={product.image} height = {150} width = {150}/></div>

    <div>{isInCart && "In Cart"}</div>

    {/* <div>{props.product.price}</div> */}
    {/* <button onClick = {onClickHandler(productName)}>Buy</button> */}
    <button onClick = {() => {
      setIsInCart(true);
      onClickHandler(product/* .name */)
    }}>Purchase</button>
    {/* <button onClick = {() => props.onClickHandler(props.product.name)}>Buy</button> */}
  </div>)
}

export default Product
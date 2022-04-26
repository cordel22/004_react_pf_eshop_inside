// function Product(productName, price/*,  onClickHandler */) {
function Product(props) {
  return (<div>
    {/* <h2>Product Name</h2> */}
    {/* <h2>{productName}</h2> */}
    <h2>{props.product.name}</h2>
    {/* <div>Price CZK</div> */}
    {/* <div>{price}</div> */}
    <div>{props.product.price}</div>
    {/* <button onClick = {onClickHandler}>Buy</button> */}
    <button onClick = {() => props.onClickHandler(props.product.name)}>Buy</button>
  </div>)
}

export default Product
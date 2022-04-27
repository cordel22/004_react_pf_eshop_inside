
import './App.css';
import Product from './product';
import { useState, useEffect } from "react"
import ProductForm from './product-form';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
/* import { Link } from "react-router-dom"; */  //  w3s but needs lso reactrouter

import ReactDOM from "react-dom/client";
/* import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage"; */   //  w3s
import { Link } from "react-router-dom";  // for reactrouter but used wiyh w3s too

function App() {

  /* const cart = []; */

  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  const onNewProductHandler = (product) => {
    const newData = [...data]
    newData.push(product)
    console.log(newData)
    setData(newData)
  }

  useEffect(() => {
    setTimeout(() => {
      /* console.log("Its On") */
    fetch('http://localhost:3001/products')
      .then(response => 
        {/* debugger; */
          if (response.ok) {
        return response.json()
          }
          throw new Error(`Unable to get data: ${response.statusText}`)
        })
        .then((json) => setData(json)) //  here we set data
          .catch((err) => setError(err/* or */.message))
            .finally(() => setIsPending(false))
    }, 2000)
     
  }, [])

/*   const handler = function(name) {
    console.log(name + ' Clicked')
  } */

  // const handler = function(product) {
  //   /* console.log(product + ' Clicked') */
  //   const newCart = [...cart]
  //   newCart.push(product)
  //   console.log(newCart)
  //   setCart(newCart)
  // }

  const addToCartHandler = function(product) {

    const newCart = [...cart]
    newCart.push(product)
    console.log(newCart)
    setCart(newCart)
  }

  const removeFromCartHandler = function(product) {
    const newCart = [...cart]
    const productIndex = cart.findIndex(item => item.id == product.id)
    
    newCart.splice(productIndex, 1)
    
    setCart(newCart)
  }

/*   const teslaProduct = {
    name: "Tesla",
    price: 8
  }

  const alcatelProduct = {
    name: "Alcatel",
    price: 9
  }

  const nokiaProduct = {
    name: "Nokia",
    price: 7
  }
 */
  /* const data = [
    {
      id: 1,
      name: "Tesla",
      price: 8
    },
   {
    id: 2,
      name: "Alcatel",
      price: 9
    },
   {
    id: 3,
      name: "Nokia",
      price: 7
    }
  ] */

  return (
/*     <Router> */
<>
{/* //  from w3s
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}    
    <div className="App">   {/* u need this line */}

    <div>
      <h1>App navigatin in App.js</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
        {/* <Link to="/cart">Cart</Link> */}
      </nav>
    </div>    {/* from reacrouter */}


{/*       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/edit-product">Edit Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path = "/cart">
          <h1>Shopping Cart</h1>
          {cart.map(item=> <div>{item.name} <button onClick = {removeFromCartHandler}>-</button></div>)}
        </Route>
        <Route path = "/edit-product">
          <ProductForm onNewProduct = {onNewProductHandler} />
        </Route>
        <Route path = "/">
        {<div>{cart.length}</div>}
      {isPending && "Loading Data..."}
      {error && <div>{error}</div>}
        <div style = {{
        display: "flex",
        flexWrap: "wrap",
        margin: "5px"
      }}> */}
{/*       {data.map((item) => <Product key={item.id} product = {item} onClickHandler = {addToCartHandler */}{/* handler */}{/* />)} */}
{/*       </div>
      
      <ProductForm onNewProduct = {onNewProductHandler}/>
        </Route>
      </Switch> */}

      {/* {<div>isPending && cart.length</div>} */}
      {<div>{cart.length}</div>}          {/* u need this line */}
      {isPending && "Loading Data..."}    {/* u need this line */}
      {error && <div>{error}</div>}       {/* u need this line */}

      <div style = {{
        display: "flex",
        flexWrap: "wrap",
        margin: "5px"
      }}>                                 {/* u need this line */}
      {data.map((item) => <Product key={item.id} product = {item} onClickHandler = {addToCartHandler/* handler */}/>)}    {/* u need this line */}
      </div>                              {/* u need this line */}
      {/* <Product product = {teslaProduct} onClickHandler = {handler}/>
      <Product product = {alcatelProduct} onClickHandler = {handler}/>
      <Product product = {nokiaProduct} onClickHandler = {handler}/> */}
      <ProductForm onNewProduct = {onNewProductHandler}/>                   {/* u need this line */}
    </div>                                                                  {/* u need this line */}

    <div>
    <h1>Shopping Cart</h1>
          {cart.map(item=> <div>{item.name} <button onClick = {removeFromCartHandler}>-</button></div>)}
    </div>
    </>
/*     </Router> */
  );
}

export default App;

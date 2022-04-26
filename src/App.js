
import './App.css';
import Product from './product';

function App() {

  const handler = function(name) {
    console.log(name + ' Clicked')
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
  const data = [
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
  ]

  return (
    <div className="App">
      {data.map((item) => <Product key={item.id} product = {item} onClickHandler = {handler}/>)}
      {/* <Product product = {teslaProduct} onClickHandler = {handler}/>
      <Product product = {alcatelProduct} onClickHandler = {handler}/>
      <Product product = {nokiaProduct} onClickHandler = {handler}/> */}
    </div>
  );
}

export default App;

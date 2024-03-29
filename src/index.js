import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
import { BrowserRouter,
  Routes,
  Route} from "react-router-dom";   //  from reactrouter.com
import { render } from "react-dom";   //  from reactrouter.com
import App from './App';
/* import reportWebVitals from './reportWebVitals'; */
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
/* import Cart from "./routes/cart"; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /*  <React.StrictMode>
    <App />
  </React.StrictMode> */
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      {/* <Route path="cart" element={<Cart />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartProvider";
import OrdersProvider from "./context/OrdersProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <OrdersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </OrdersProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import CartProvider from "./context/CartProvider";
// import OrdersProvider from "./context/OrdersProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <OrdersProvider>
//           <App />
//         </OrdersProvider>
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
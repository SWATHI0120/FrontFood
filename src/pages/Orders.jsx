import "../styles/Orders.css";
import { useContext } from "react";
import { OrdersContext } from "../context/OrdersProvider";

function Orders() {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>

          {/* ✅ STATUS UPDATES LIVE */}
          <p>
            Status:
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </p>

          {order.items.map(item => (
            <p key={item.id}>
              🍽 {item.name} – ₹{item.price}
            </p>
          ))}

          <h4>Total: ₹{order.totalAmount}</h4>
        </div>
      ))}
    </div>
  );
}

export default Orders;

// import "../styles/Orders.css";
// import { useContext } from "react";
// import { OrdersContext } from "../context/OrdersProvider";

// function Orders() {
//   const { orders } = useContext(OrdersContext);

//   return (
//     <div className="orders-container">
//       <h1 className="orders-title">Your Orders</h1>

//       {orders.length === 0 && <p>No orders yet</p>}

//       <div className="orders-list">
//         {orders.map((order) => (
//           <div key={order.id} className="order-card">
//             <h3>Order #{order.id}</h3>
//             <p>Date: {order.date}</p>
//             <p>Status: <b>{order.status}</b></p>

//             {Array.isArray(order.items) &&
//               order.items.map((item) => (
//                 <p key={item.id}>
//                   🍽 {item.name} – ₹{item.price}
//                 </p>
//               ))}

//             <h4>Total: ₹{order.totalAmount}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;
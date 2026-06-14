import { useContext, useState } from "react";
import { OrdersContext } from "../context/OrdersProvider";
import AdminNavbar from "./AdminNavbar";
import "./AdminPages.css";

const AdminOrders = () => {
  const { orders, updateOrderStatus } = useContext(OrdersContext);

  // Local state to hold selected status per order
  const [selectedStatus, setSelectedStatus] = useState({});

  const handleUpdate = (orderId) => {
    if (!selectedStatus[orderId]) return;
    updateOrderStatus(orderId, selectedStatus[orderId]);
  };

  return (
    <>
      {/* ✅ ADMIN NAVBAR */}
      <AdminNavbar />

      <div className="admin-page">
        <h2>Live Orders</h2>

        {orders.length === 0 ? (
          <p>No orders available</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="admin-order-card">
              <p><b>Order ID:</b> {order.id}</p>
              <p><b>Date:</b> {order.date}</p>

              {/* ✅ STATUS SELECT */}
              <label>
                Status:
                <select
                  className="status-dropdown"
                  value={selectedStatus[order.id] || order.status}
                  onChange={(e) =>
                    setSelectedStatus({
                      ...selectedStatus,
                      [order.id]: e.target.value,
                    })
                  }
                >
                  <option value="Placed">Placed</option>
                  <option value="Processing">Processing</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </label>

              {/* ✅ UPDATE BUTTON */}
              <button
                className="update-btn"
                onClick={() => handleUpdate(order.id)}
              >
                Update Status
              </button>

              <p><b>Total:</b> ₹{order.totalAmount}</p>

              <div className="admin-order-items">
                {order.items.map((item) => (
                  <p key={item.id}>
                    🍽 {item.name} – ₹{item.price}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminOrders;

// import { useContext } from "react";
// import { OrdersContext } from "../context/OrdersProvider";

// const AdminOrders = () => {
//   const { orders } = useContext(OrdersContext);

//   return (
//     <div>
//       <h2>Admin Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders available</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order.id} className="admin-order-card">
//             <p><b>Order ID:</b> {order.id}</p>
//             <p><b>Date:</b> {order.date}</p>
//             <p><b>Status:</b> {order.status}</p>
//             <p><b>Total:</b> ₹{order.totalAmount}</p>

//             <div>
//               {order.items.map((item) => (
//                 <p key={item.id}>
//                   🍽 {item.name} – ₹{item.price}
//                 </p>
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminOrders;

// import { useContext } from "react";
// import { OrdersContext } from "../context/OrdersProvider";

// const AdminOrders = () => {
//   const { orders } = useContext(OrdersContext);

//   return (
//     <div>
//       <h2>Admin Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders available</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={index}>
//             <p>Order ID: {order.id}</p>
//             <p>Total: ₹{order.total}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminOrders;
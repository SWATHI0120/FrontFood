import { useContext } from "react";
import { OrdersContext } from "../context/OrdersProvider";
import AdminNavbar from "./AdminNavbar";
import "./AdminPages.css";

function AdminHistory() {
  const { orders } = useContext(OrdersContext);

  const historyOrders = orders.filter(
    order => order.status === "Delivered" || order.status === "Cancelled"
  );

  return (
    <>
      <AdminNavbar />
      <div className="admin-page">
        <h2>Order History</h2>
        <p>Completed & cancelled orders.</p>

        {historyOrders.length === 0 ? (
          <p>No order history available</p>
        ) : (
          historyOrders.map(order => (
            <div key={order.id} className="order-card">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AdminHistory;
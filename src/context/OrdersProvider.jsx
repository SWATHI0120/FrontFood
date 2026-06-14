import { createContext, useEffect, useState } from "react";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
  // 🔁 Load from localStorage
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔁 Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add new order
  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: new Date().toLocaleString(),
        status: "Placed",
        ...order,
      },
    ]);
  };

  // Admin updates status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrdersContext.Provider>
  );
}

// import { createContext, useState } from "react";

// export const OrdersContext = createContext();

// export default function OrdersProvider({ children }) {
//   const [orders, setOrders] = useState([]);

//   // Add new order (from customer side)
//   const addOrder = (order) => {
//     setOrders((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         date: new Date().toLocaleString(),
//         status: "Placed",
//         ...order,
//       },
//     ]);
//   };

//   // ✅ ADMIN updates order status
//   const updateOrderStatus = (orderId, newStatus) => {
//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === orderId
//           ? { ...order, status: newStatus }
//           : order
//       )
//     );
//   };

//   return (
//     <OrdersContext.Provider
//       value={{ orders, addOrder, updateOrderStatus }}
//     >
//       {children}
//     </OrdersContext.Provider>
//   );
// }
// import { createContext, useState } from "react";

// export const OrdersContext = createContext();

// export default function OrdersProvider({ children }) {
//   const [orders, setOrders] = useState(() => {
//     const saved = localStorage.getItem("orders");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const addOrder = (order) => {
//     setOrders((prev) => {
//       const updated = [
//         ...prev,
//         {
//           id: Date.now(),
//           date: new Date().toLocaleString(),
//           status: "Placed",
//           ...order,
//         },
//       ];
//       localStorage.setItem("orders", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   // ✅ NEW: Update Order Status
//   const updateOrderStatus = (orderId, newStatus) => {
//     setOrders((prev) => {
//       const updated = prev.map((order) =>
//         order.id === orderId ? { ...order, status: newStatus } : order
//       );
//       localStorage.setItem("orders", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// }

// import { createContext, useEffect, useState } from "react";

// export const OrdersContext = createContext();

// export default function OrdersProvider({ children }) {
//   const [orders, setOrders] = useState(() => {
//     const savedOrders = localStorage.getItem("orders");
//     return savedOrders ? JSON.parse(savedOrders) : [];
//   });

//   const addOrder = (order) => {
//     setOrders((prev) => {
//       const updated = [
//         ...prev,
//         {
//           id: Date.now(),
//           date: new Date().toLocaleString(),
//           status: "Placed",
//           ...order,
//         },
//       ];
//       localStorage.setItem("orders", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// } 



// import { createContext, useState } from "react";

// export const OrdersContext = createContext();

// export function OrdersProvider({ children }) {
//   const [orders, setOrders] = useState([]);

//   const addOrder = (orderData) => {
//     const newOrder = {
//       id: Date.now(),
//       date: new Date().toLocaleString(),
//       status: "Placed",
//       ...orderData, // includes items, address, paymentMethod
//     };

//     setOrders((prev) => [...prev, newOrder]);
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// }
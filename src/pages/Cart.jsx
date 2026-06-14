import "../styles/Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import CartItem from "../components/CartItem";
import { OrdersContext } from "../context/OrdersProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {
const { cart, removeFromCart, clearCart } = useContext(CartContext);
const { addOrder } = useContext(OrdersContext);
const navigate = useNavigate();


  const [showPayment, setShowPayment] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  
  const handleMethodClick = (method) => {
    setSelectedMethod(method);
    setShowConfirm(true);
  };

  useEffect(() => {
  const openPayment = localStorage.getItem("openPayment");

  if (openPayment === "true") {
    setShowPayment(true);
    localStorage.removeItem("openPayment");
  }
}, []);

const handleConfirmPay = () => {
  setShowConfirm(false);
  setProcessing(true);

  const cartSnapshot = [...cart];

  setTimeout(() => {
    setProcessing(false);
    setSuccess(true);

    const addressData = localStorage.getItem("deliveryAddress");
    if (!addressData) {
      alert("Delivery address missing!");
      return;
    }

    const address = JSON.parse(addressData);

    addOrder({
      items: cartSnapshot,
      totalAmount,
      address,
      paymentMethod: selectedMethod,
    });

    clearCart();

    // ✅ REDIRECT TO ORDERS PAGE
    setTimeout(() => {
      setShowPayment(false);
      navigate("/orders");
    }, 1000);
  }, 2000);
};



  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="cart-total">Total: ₹{totalAmount}</h2>
        <button
  className="cart-checkout-btn"
  onClick={() => navigate("/address")}
>
  Checkout
</button>
        </>
      )}

      {/* MAIN PAYMENT MODAL */}
      {showPayment && (
        <div className="payment-overlay" onClick={() => setShowPayment(false)}>
          <div
            className="payment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setShowPayment(false)}>
              ✕
            </button>

            {!success ? (
              <>
                <h2>Select Payment Method</h2>
                <p className="pay-amount">Amount: ₹{totalAmount}</p>

                <div className="payment-options">
                  {[
                    {
                      name: "Google Pay",
                      img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
                    },
                    {
                      name: "PhonePe",
                      img: "https://freepnglogo.com/images/all_img/phone-pe-logo-9184.png",
                    },
                    {
                      name: "Paytm",
                      img: "https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png",
                    },
                    {
                      name: "UPI QR",
                      img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
                    },
                  ].map((method) => (
                    <div
                      key={method.name}
                      className="payment-card"
                      onClick={() => handleMethodClick(method.name)}
                    >
                      <img src={method.img} alt={method.name} />
                      <p>{method.name}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="payment-success">
                <h2>✅ Payment Successful</h2>
                <p>Paid using {selectedMethod}</p>
                <button className="done-btn" onClick={() => setShowPayment(false)}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CONFIRM PAYMENT POPUP */}
      {showConfirm && (
        <div className="payment-overlay">
          <div className="confirm-modal">
            <h3>Confirm Payment</h3>
            <p>
              Pay <b>₹{totalAmount}</b> using <b>{selectedMethod}</b>
            </p>

            <div className="confirm-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleConfirmPay}>
                Confirm Pay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROCESSING */}
      {processing && (
        <div className="payment-overlay">
          <div className="processing-modal">
            <h3>Processing Payment...</h3>
            <div className="loader"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

// import "../styles/Cart.css";
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartProvider";
// import CartItem from "../components/CartItem";

// function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const [showPayment, setShowPayment] = useState(false);

//   const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

//       {cart.map((item) => (
//         <CartItem
//           key={item.id}
//           item={item}
//           removeFromCart={removeFromCart}
//         />
//       ))}

//       {cart.length > 0 && (
//         <>
//           <h2 className="cart-total">Total: ₹{totalAmount}</h2>

//           <button
//             className="checkout-btn"
//             onClick={() => setShowPayment(true)}
//           >
//             Checkout
//           </button>
//         </>
//       )}

//       {/* PAYMENT POPUP */}
//       {showPayment && (
//         <div className="payment-overlay" onClick={() => setShowPayment(false)}>
//           <div
//             className="payment-modal"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="close-btn"
//               onClick={() => setShowPayment(false)}
//             >
//               ✕
//             </button>

//             <h2>Select Payment Method</h2>

//             <div className="payment-options">
//               <div className="payment-card">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
//                   alt="Google Pay"
//                 />
//                 <p>Google Pay</p>
//               </div>

//               <div className="payment-card">
//                 <img
//                   src="https://freepnglogo.com/images/all_img/phone-pe-logo-9184.png"
//                   alt="PhonePe"
//                 />
//                 <p>PhonePe</p>
//               </div>

//               <div className="payment-card">
//                 <img
//                   src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
//                   alt="Paytm"
//                 />
//                 <p>Paytm</p>
//               </div>

//               <div className="payment-card">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
//                   alt="QR Code"
//                 />
//                 <p>Scan QR</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
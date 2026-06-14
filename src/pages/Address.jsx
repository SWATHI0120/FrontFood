import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Address.css";


function Address() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    houseNo: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleMakePayment = () => {
    if (
      !address.name ||
      !address.phone ||
      !address.houseNo ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ Save address
    localStorage.setItem("deliveryAddress", JSON.stringify(address));

    // ✅ Flag to open payment modal
    localStorage.setItem("openPayment", "true");

    // ✅ Go back to Cart
    navigate("/cart");
  };

  return (
    <div className="address-page">
      <h2>Delivery Address</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="houseNo" placeholder="House / Flat No" onChange={handleChange} />
      <input name="street" placeholder="Street" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="pincode" placeholder="Pincode" onChange={handleChange} />

      <button onClick={handleMakePayment} className="checkout-btn">
        Make Payment
      </button>
    </div>
  );
}

export default Address;
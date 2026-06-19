import "../styles/FoodCard.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

function FoodCard({ food }) {
  const { addToCart, cart } = useContext(CartContext);

  // check if item already in cart
  const isAdded = cart.some((item) => item.id === food.id);

  const handleAdd = () => {
    if (!isAdded) {
      addToCart(food);
    }
  };

  return (
    <div className="food-card">
      <div className="food-image-wrapper">
        <img
          className="food-image"
          src={food.image}
          alt={food.name}
        />
      </div>

      <div className="food-content">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-price">₹{food.price}</p>

        <button
          className={`food-button ${isAdded ? "added" : ""}`}
          onClick={handleAdd}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

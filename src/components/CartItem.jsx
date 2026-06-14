import "../styles/CartItem.css";

function CartItem({ item, removeFromCart }) {

return(
<div className="cart-item">
<h3 className="cart-name">{item.name}</h3>
<p className="cart-price">₹{item.price}</p>
<button
className="cart-remove"
onClick={()=>removeFromCart(item.id)}
>
Remove
</button>

</div>

)

}

export default CartItem
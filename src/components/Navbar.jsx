import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">🍔 FoodExpress</h2>

      <div className="navbar-links">
        {/* Search icon */}
        <Link className="navbar-link" to="/search">🔍</Link>

        <Link className="navbar-link" to="/home">Home</Link>
        <Link className="navbar-link" to="/menu">Menu</Link>
        <Link className="navbar-link" to="/cart">Cart</Link>
        <Link className="navbar-link" to="/orders">Orders</Link>
        {/* <Link className="navbar-link" to="/">Login</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="admin-navbar">
      <h2 className="admin-logo">Admin Panel</h2>

      <div className="admin-links">
        <NavLink to="/admin/home">Home</NavLink>
        <NavLink to="/admin/order">Orders</NavLink>
        <NavLink to="/admin/history">History</NavLink>
        <NavLink to="/admin/track">Track</NavLink>
      </div>

      <button
        className="admin-logout"
        onClick={() => navigate("/login-method")}
      >
        Logout
      </button>
    </nav>
  );
}

export default AdminNavbar;
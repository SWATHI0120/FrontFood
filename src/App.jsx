import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

// CUSTOMER PAGES
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Search from "./pages/Search";
import Address from "./pages/Address";

// AUTH
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginMethod from "./pages/LoginMethod";

// ADMIN
import AdminHome from "./admin/AdminHome";
import AdminOrders from "./admin/AdminOrders";
import AdminHistory from "./admin/AdminHistory";
import AdminTrack from "./admin/AdminTrack";

function App() {
  const location = useLocation();

  // Hide navbar on auth & admin pages
  const hideNavbarRoutes = [
    "/login-method",
    "/login",
    "/register",
    "/admin/login",
    "/admin/register",
    "/admin/home",
    "/admin/order",
    "/admin/history",
    "/admin/track",
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login-method" />} />

        {/* LOGIN METHOD */}
        <Route path="/login-method" element={<LoginMethod />} />

        {/* CUSTOMER AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* CUSTOMER PAGES */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/search" element={<Search />} />
        <Route path="/address" element={<Address />} />

        {/* ADMIN AUTH */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />

        {/* ADMIN PAGES */}
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/order" element={<AdminOrders />} />
        <Route path="/admin/history" element={<AdminHistory />} />
        <Route path="/admin/track" element={<AdminTrack />} />
      </Routes>
    </>
  );
}

export default App;
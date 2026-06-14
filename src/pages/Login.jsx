import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation(); // 👈 detect route

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");

    // ✅ ADMIN vs CUSTOMER redirect
    if (location.pathname.startsWith("/admin")) {
      navigate("/admin/home"); // 👈 AdminHome
    } else {
      navigate("/home"); // 👈 Customer Home
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">
          {location.pathname.startsWith("/admin")
            ? "Admin Login"
            : "Customer Login"}
        </h2>

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button">Login</button>

        <p className="register-text">
          Don’t have an account?{" "}
          <Link
            to={
              location.pathname.startsWith("/admin")
                ? "/admin/register"
                : "/register"
            }
            className="register-link"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
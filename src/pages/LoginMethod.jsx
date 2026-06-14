import { useNavigate } from "react-router-dom";
import "../styles/LoginMethod.css";

function LoginMethod() {
  const navigate = useNavigate();

  return (
    <div className="login-method-container">
      <h1>Login As</h1>

      <div className="login-method-cards">
        <div
          className="login-card admin"
          onClick={() => navigate("/admin/login")}
        >
          <h2>Admin</h2>
          <p>Manage products & orders</p>
        </div>

        <div
          className="login-card customer"
          onClick={() => navigate("/login")}
        >
          <h2>Customer</h2>
          <p>Order food online</p>
        </div>
      </div>
    </div>
  );
}

export default LoginMethod;
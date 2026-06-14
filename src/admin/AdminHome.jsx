import AdminNavbar from "./AdminNavbar";
import "./AdminPages.css";

function AdminHome() {
  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <h1>Welcome to Admin Portal 👋</h1>
        <p>Manage orders, track deliveries, and view order history.</p>
      </div>
    </>
  );
}

export default AdminHome;
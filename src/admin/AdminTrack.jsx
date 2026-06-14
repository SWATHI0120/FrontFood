import AdminNavbar from "./AdminNavbar";
import "./AdminPages.css";

function AdminTrack() {
  return (
    <>
      <AdminNavbar />
      <div className="admin-page">
        <h2>Track Orders</h2>
        <p>Track delivery status in real-time.</p>
      </div>
    </>
  );
}

export default AdminTrack;
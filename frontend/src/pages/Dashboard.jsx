import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { logout } = useAuth();
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-2">
            Dashboard
          </h1>

          <p className="text-gray-600 mb-6">
            Welcome to your Document Management System.
          </p>

          <button
            onClick={() => {
  logout();
  navigate("/login");
}}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
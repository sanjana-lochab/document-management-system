import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DocumentList from "../components/DocumentList";

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">
                Dashboard
              </h1>

              <p className="text-gray-600">
                Welcome to your Document Management System.
              </p>
            </div>

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

          <div>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-semibold">
      My Documents
    </h2>
    <button
  onClick={() => navigate("/upload")}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  Upload Document
</button>
    <button
      onClick={() => navigate("/upload")}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Upload Document
    </button>
  </div>

  <DocumentList />
</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
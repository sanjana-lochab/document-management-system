import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">
        Document Management System
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="hover:text-gray-200"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="hover:text-gray-200"
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
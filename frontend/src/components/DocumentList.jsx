import { useEffect, useState } from "react";
import API_URL from "../services/api";
import { useAuth } from "../context/AuthContext";

function DocumentList() {
  const { token } = useAuth();

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchDocuments = async () => {
    try {
      const response = await fetch(`${API_URL}/documents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to fetch documents");
        return;
      }

      setDocuments(data.documents);
    } catch (error) {
      setMessage("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [token]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/documents/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to delete document");
        return;
      }

      setDocuments((currentDocuments) =>
        currentDocuments.filter((document) => document._id !== id)
      );

      setMessage("Document deleted successfully!");
    } catch (error) {
      setMessage("Unable to connect to the server");
    }
  };

  if (loading) {
    return <p>Loading documents...</p>;
  }

  if (message && documents.length === 0) {
    return <p>{message}</p>;
  }

  if (documents.length === 0) {
    return <p>No documents uploaded yet.</p>;
  }

  return (
    <div className="space-y-4">
      {message && (
        <p className="text-green-600 text-sm">
          {message}
        </p>
      )}

      {documents.map((document) => (
        <div
          key={document._id}
          className="bg-white p-4 rounded-lg shadow border"
        >
          <h3 className="text-lg font-semibold">
            {document.title}
          </h3>

          <p className="text-gray-600">
            {document.description || "No description"}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            File: {document.originalName}
          </p>

          <p className="text-sm text-gray-500">
            Size: {document.fileSize} bytes
          </p>

          <button
            onClick={() => handleDelete(document._id)}
            className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <a
  href={`http://localhost:5000${document.filePath}`}
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  View Document
</a>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
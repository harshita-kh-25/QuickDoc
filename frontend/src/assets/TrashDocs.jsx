import React, { useEffect, useState } from "react";
import axios from "axios";

function TrashDocs() {
  const [trashedDocs, setTrashedDocs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/documents/trash")
      .then((res) => setTrashedDocs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRestore = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/documents/restore/${id}`);
      setTrashedDocs((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error("Restore failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🗑️ Trash</h2>
      {trashedDocs.length === 0 ? (
        <p>No trashed documents.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trashedDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-4 border rounded-lg shadow-md bg-red-100"
            >
              <h3 className="text-lg font-semibold">{doc.filename}</h3>
              <p className="text-sm">Category: {doc.category}</p>
              <p className="text-sm">Deleted At: {doc.deleted_at}</p>
              <button
                onClick={() => handleRestore(doc.id)}
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Restore
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrashDocs;

import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import axios from "axios";

function Dashboard() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/documents")
      .then((res) => setDocs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleTrash = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/documents/${id}/trash`);
      setDocs((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
    } catch (error) {
      console.error("Error moving to trash:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📄 My Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {docs.map((doc) => (
          <DocumentCard
            key={doc.id}
            id={doc.id}
            filename={doc.filename}
            date={doc.created_at}
            category={doc.category}
            onTrash={handleTrash}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

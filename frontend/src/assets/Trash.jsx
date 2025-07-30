import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "./DocumentCard";
const Trash = () => {
  const [trashedDocs, setTrashedDocs] = useState([]);

  useEffect(() => {
    const fetchTrashedDocuments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/trashed-documents");
        setTrashedDocs(response.data);
      } catch (error) {
        console.error("Error fetching trashed documents:", error);
      }
    };

    fetchTrashedDocuments();
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
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Trash</h2>
      {trashedDocs.length === 0 ? (
        <p>No documents in trash.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trashedDocs.map((doc) => (
            <DocumentCard
              key={doc.id}
              id={doc.id}
              filename={doc.filename}
              content={doc.content}
              date={doc.created_at}
              isTrashed={true}
              onRestore={handleRestore}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trash;

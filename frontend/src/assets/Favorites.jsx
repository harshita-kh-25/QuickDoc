import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "./DocumentCard";

const Favorites = () => {
  const [favoriteDocs, setFavoriteDocs] = useState([]);

  useEffect(() => {
    fetchFavoriteDocuments();
  }, []);

  const fetchFavoriteDocuments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/favorite-documents");
      setFavoriteDocs(response.data);
    } catch (error) {
      console.error("Error fetching favorite documents:", error);
    }
  };

  const handleRemoveFavorite = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/documents/unfavorite/${id}`);
      setFavoriteDocs((prevDocs) => prevDocs.filter((doc) => doc.id !== id)); // removes from favorites
    } catch (error) {
      console.error("Unfavorite failed:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">❤️ Favorite Documents</h2>
      {favoriteDocs.length === 0 ? (
        <p>No favorite documents.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteDocs.map((doc) => (
            <DocumentCard
              key={doc.id}
              id={doc.id}
              filename={doc.filename}
              content={doc.content}
              date={doc.created_at}
              category={doc.category}
              isFavorite={true}
              onUnfavorite={handleRemoveFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

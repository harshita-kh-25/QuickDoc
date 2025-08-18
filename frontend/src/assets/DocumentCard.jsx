import React from "react";
import { FaTrash, FaHeart, FaRegHeart } from "react-icons/fa";

const DocumentCard = ({
  id,
  filename,
  content,
  date,
  category,
  isFavorite = false,
  isTrashed = false,
  onTrash,
  onFavorite,
  onUnfavorite,
  onRestore,
}) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onUnfavorite && onUnfavorite(id);
    } else {
      onFavorite && onFavorite(id);
    }
  };

  const handleRestoreClick = () => {
    onRestore && onRestore(id);
  };

  return (
    <div className="bg-white rounded shadow-md p-4 relative">
      <h3 className="text-lg font-semibold">{filename}</h3>
      {category && (
        <p className="text-sm text-gray-500 mb-1">Category: {category}</p>
      )}
      <p className="text-sm text-gray-500">{date}</p>

      <div className="absolute top-2 right-2 flex space-x-2">
        {(onFavorite || onUnfavorite) && !isTrashed && (
          <button onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400" />
            )}
          </button>
        )}

        {onTrash && !isTrashed && (
          <button onClick={() => onTrash(id)}>
            <FaTrash className="text-gray-500 hover:text-red-600" />
          </button>
        )}
      </div>

      {isTrashed && onRestore && (
        <button
          onClick={handleRestoreClick}
          className="mt-4 text-green-600 hover:text-green-800"
        >
          Restore
        </button>
      )}
    </div>
  );
};

export default DocumentCard;

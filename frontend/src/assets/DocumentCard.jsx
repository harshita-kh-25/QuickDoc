import React from "react";

const DocumentCard = ({
  id,
  filename,
  content,
  date,
  onTrash,
  onRestore,
  isTrashed = false,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold  mb-2">{filename}</h3>
      <p className="text-sm text-gray-600 mb-2">{content}</p>
      <p className="text-xs text-gray-400">{new Date(date).toLocaleString()}</p>
      <div className="flex justify-end mt-4">
        {isTrashed ? (
          <button
            onClick={() => onRestore(id)}
            className="text-green-600 hover:text-green-800"
            title="Restore"
          >
            ♻️ Restore
          </button>
        ) : (
          <button
            onClick={() => onTrash(id)}
            className="text-red-600 hover:text-red-800"
            title="Trash"
          >
            🗑️ Trash
          </button>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;

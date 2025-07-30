import { useState } from "react"
import axios from 'axios';


export default function Upload() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || !category) {
      setMessage(' Please select a file and category.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(' Upload successful!');
      setFile(null);
      setCategory('');
    } catch (err) {
      console.log("Upload failed:", err);
    
      if (err.response && err.response.data) {
        setMessage( err.response.data.message || 'Upload failed.');
      } else {
        setMessage(' Upload failed.');
      }
    }
    
  };

    return (
  <div>
      <h1 className="text-2xl font-bold mb-4">📤 Upload Document</h1>
      <form onSubmit={handleUpload} className="space-y-4 max-w-md">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Identity">Identity</option>
          <option value="Work">Work</option>
          <option value="Utility">Utility</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
   )
  }
  
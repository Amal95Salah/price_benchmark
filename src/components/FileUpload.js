import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ onUploadComplete, userEmail }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_email", userEmail);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload_csv/", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
      onUploadComplete(response.data); 
    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert("Failed to upload file.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Upload CSV</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Choose a file</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleUpload}
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        >
          Upload
        </button>
      </div>
      {file && (
        <div className="mt-4 text-sm text-gray-500">
          <p><strong>Selected File:</strong> {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const UploadDocument = ({ onUploadComplete, assignedAuditorID }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const storage = getStorage();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file to upload");

    setLoading(true); // Set loading to true during upload

    try {
      const storageRef = ref(storage, `documents/${selectedFile.name}`);

      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, selectedFile);

      // Get the download URL for the uploaded file
      const url = await getDownloadURL(storageRef);

      // Save document metadata to Firestore
      await addDoc(collection(db, 'documents'), {
        title: selectedFile.name,
        description: description || "Uploaded document",
        url,
        userID: "currentUserID", // Replace with actual user ID
        assignedTo: assignedAuditorID, // Assign the document to a specific auditor
        uploadedAt: new Date()
      });

      alert("Document uploaded successfully and assigned!");
      setSelectedFile(null);
      setDescription("");
      onUploadComplete(); // Trigger callback to refresh documents
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Failed to upload document. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Document</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Document description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-2 p-2 border rounded w-full mb-4"
      />
      <button 
        onClick={handleUpload} 
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable button while uploading
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadDocument;

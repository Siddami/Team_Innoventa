import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-toastify';

const UploadDocument = ({ onUploadComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [assignedAuditorID, setAssignedAuditorID] = useState("");
  const [auditors, setAuditors] = useState([]);
  const [loading, setLoading] = useState(false);
  const storage = getStorage();

  useEffect(() => {
    const fetchAuditors = async () => {
      try {
        const auditorsQuery = query(
          collection(db, 'users'), 
          where("userType", "==", "auditor")
        );
        const auditorsSnapshot = await getDocs(auditorsQuery);
        const auditorsList = auditorsSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setAuditors(auditorsList);
      } catch (error) {
        console.error("Error fetching auditors:", error.message);
        toast.error("Failed to load auditors.");
      }
    };
    fetchAuditors();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return toast.error("Please select a file to upload");
    if (!assignedAuditorID) return toast.error("Please select an auditor");

    setLoading(true);
    try {
      const storageRef = ref(storage, `documents/${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);
      const url = await getDownloadURL(storageRef);

      const userId = auth.currentUser ? auth.currentUser.uid : "anonymous";

      await addDoc(collection(db, 'documents'), {
        title: selectedFile.name,
        description: description || "Uploaded document",
        url,
        userId,
        assignedTo: assignedAuditorID,
        uploadedAt: new Date().toISOString()
      });

      toast.success("Document uploaded successfully and assigned!");
      setSelectedFile(null);
      setDescription("");
      setAssignedAuditorID("");
      onUploadComplete();
    } catch (error) {
      console.error("Error uploading document:", error.message);
      toast.error(`Failed to upload document. Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-customWhite p-8 rounded-lg shadow-lg space-y-6 max-w-lg mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary mb-6">Upload Document</h2>
      
      <div className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-customGrayLight p-3 rounded-lg text-customGray focus:border-customPrimary transition"
        />

        <input
          type="text"
          placeholder="Document description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-customGrayLight rounded-lg focus:border-customPrimary transition"
        />

        <select
          value={assignedAuditorID}
          onChange={(e) => setAssignedAuditorID(e.target.value)}
          className="w-full p-3 border border-customGrayLight rounded-lg focus:border-customPrimary transition"
        >
          <option value="">Select Auditor</option>
          {auditors.map((auditor) => (
            <option key={auditor.id} value={auditor.id}>
              {auditor.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleUpload}
        className={`w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primaryDark transition duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadDocument;

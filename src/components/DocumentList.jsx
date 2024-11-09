import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';

const DocumentsList = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userType, setUserType] = useState(null);
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const fetchUserTypeAndDocuments = async () => {
      setLoading(true);
      try {
        // Step 1: Fetch user type (organization or auditor)
        const userQuery = query(collection(db, 'users'), where('userId', '==', userId));
        const userSnapshot = await getDocs(userQuery);

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUserType(userData.userType);

          // Step 2: Fetch documents based on user type
          let documentsQuery;
          
          if (userData.userType === 'organization') {
            // Fetch documents uploaded by the organization
            documentsQuery = query(
              collection(db, 'documents'),
              where('userId', '==', userId)
            );
          } else if (userData.userType === 'auditor') {
            // Fetch documents assigned to the auditor
            documentsQuery = query(
              collection(db, 'documents'),
              where('assignedTo', '==', userId)
            );
          }

          if (documentsQuery) {
            const documentsSnapshot = await getDocs(documentsQuery);
            const documentsList = documentsSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setDocuments(documentsList);
          }
        } else {
          toast.error("User not found.");
          setError("User information could not be found.");
        }
      } catch (error) {
        console.error("Error fetching documents:", error.message);
        setError("Failed to load documents.");
        toast.error("Failed to load documents.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUserTypeAndDocuments();
  }, [userId]);

  if (loading) return <p className="text-center text-gray-600">Loading documents...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!documents.length) return <p className="text-center text-gray-500">No documents found.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Documents List</h2>
      <ul className="space-y-4">
        {documents.map(doc => (
          <li key={doc.id} className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">{doc.title}</h3>
              <span className="text-sm text-gray-500">{new Date(doc.uploadedAt).toLocaleDateString()}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 mb-2">{doc.description}</p>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200 underline text-sm"
            >
              View Document
            </a>
            <div className="mt-2 text-gray-500 text-xs">
              Assigned To: {doc.assignedTo ? doc.assignedTo : "Not assigned"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;

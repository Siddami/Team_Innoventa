import { useEffect, useState } from 'react';
import UploadDocument from './UploadDocument';
import Comments from './Comments';
import Notifications from './Notifications';
import RecentActivity from './RecentActivity';
import DocumentList from './DocumentList'; // Assuming DocumentList is also a separate component
import { db } from '../firebase'; // Import your firebase config
import { collection, getDocs } from 'firebase/firestore';

const RenderContent = ({ activeSection, userType, documentID, assignedAuditorID }) => {
  const [documents, setDocuments] = useState([]); // State to hold document list
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  const fetchDocuments = async () => {
    try {
      const documentsRef = collection(db, 'documents');
      const documentsSnapshot = await getDocs(documentsRef);
      const documentsList = documentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDocuments(documentsList);
    } catch (error) {
      console.error("Error fetching documents:", error);
      setError("Failed to fetch documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUploadComplete = () => {
    console.log("Document upload complete. Refreshing document list...");
    fetchDocuments(); // Refresh document list
  };

  switch (activeSection) {
    case 'recentActivity':
      return <RecentActivity />;

    case 'uploadDocument':
      if (userType === 'organization') {
        return <UploadDocument onUploadComplete={handleUploadComplete} assignedAuditorID={assignedAuditorID} />;
      }
      return null;

    case 'documentList':
      if (userType === 'auditor') {
        return (
          <DocumentList 
            documents={documents} 
            loading={loading} 
            error={error} // Pass error to DocumentList
          />
        );
      }
      return null;

    case 'comments':
      if (userType === 'auditor') {
        return <Comments documentID={documentID} assignedAuditorID={assignedAuditorID} />;
      }
      return null;

    case 'notifications':
      return <Notifications />;

    default:
      return null;
  }
};

export default RenderContent;


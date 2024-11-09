import { useEffect, useState } from 'react';
import UploadDocument from './UploadDocument';
import Comments from './Comments';
import Notifications from './Notifications';
import RecentActivity from './RecentActivity';
import DocumentList from './DocumentList';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const RenderContent = ({ activeSection, userType, documentID, assignedAuditorID }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDocuments = async () => {
    setLoading(true); // Ensure loading state is set before fetch
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
    fetchDocuments();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderContentBasedOnSection = () => {
    switch (activeSection) {
      case 'recentActivity':
        return <RecentActivity />;
      case 'uploadDocument':
        return userType === 'organization' ? (
          <UploadDocument onUploadComplete={handleUploadComplete} assignedAuditorID={assignedAuditorID} />
        ) : null;
      case 'documentList':
        return userType === 'auditor' ? (
          <DocumentList documents={documents} />
        ) : null;
      case 'comments':
        return userType === 'auditor' ? (
          <Comments documentID={documentID} assignedAuditorID={assignedAuditorID} />
        ) : null;
      case 'notifications':
        return <Notifications />;
      default:
        return null;
    }
  };

  return renderContentBasedOnSection();
};

export default RenderContent;

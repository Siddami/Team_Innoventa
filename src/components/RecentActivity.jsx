// RecentActivitySummary.js
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

const RecentActivity = () => {
  const [documents, setDocuments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [comments, setComments] = useState([]);

  // Fetching documents, notifications, and comments summaries
  useEffect(() => {
    fetchDocuments();
    fetchNotifications();
    fetchComments();
  }, []);

  const fetchDocuments = async () => {
    const docRef = collection(db, 'documents');
    const docSnapshots = await getDocs(query(docRef, orderBy('uploadedAt', 'desc'), limit(3)));
    setDocuments(docSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const fetchNotifications = async () => {
    const notificationsRef = collection(db, 'notifications');
    const notificationsSnapshots = await getDocs(query(notificationsRef, orderBy('timestamp', 'desc'), limit(3)));
    setNotifications(notificationsSnapshots.docs.map(notification => notification.data()));
  };

  const fetchComments = async () => {
    const commentsRef = collection(db, 'comments');
    const commentsSnapshots = await getDocs(query(commentsRef, orderBy('timestamp', 'desc'), limit(3)));
    setComments(commentsSnapshots.docs.map(comment => comment.data()));
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    // Convert timestamp string to a Date object
    const date = new Date(timestamp);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    return date.toLocaleString();
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Notifications Summary */}
      <div className="border p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index} className="text-sm mb-1">
                {notification.message}
                <p className="text-xs text-gray-500">Received on: {formatTimestamp(notification.timestamp)}</p>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No notifications available.</li>
          )}
        </ul>
      </div>

      {/* Latest Documents Summary */}
      <div className="border p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Latest Documents</h3>
        <ul>
          {documents.length > 0 ? (
            documents.map(doc => (
              <li key={doc.id} className="text-sm mb-2">
                <strong>{doc.title}</strong>
                <p>{doc.description}</p>
                <a href={doc.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Document</a>
                <p className="text-xs text-gray-500">Uploaded on: {formatTimestamp(doc.uploadedAt)}</p>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No documents available.</li>
          )}
        </ul>
      </div>

      {/* Recent Comments Summary */}
      <div className="border p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Recent Comments</h3>
        <ul>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index} className="text-sm mb-1">
                {comment.commentText}
                <p className="text-xs text-gray-500">Commented on: {formatTimestamp(comment.timestamp)}</p>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No comments available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;

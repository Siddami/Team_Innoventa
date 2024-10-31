import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from './Loader';

const Comments = ({ documentID, assignedAuditorID }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (documentID) {
      fetchComments(documentID);
    }
  }, [documentID]);

  const fetchComments = async (documentID) => {
    try {
      const commentsRef = collection(db, 'comments');
      const commentSnapshots = await getDocs(query(commentsRef, where('documentID', '==', documentID)));
      const fetchedComments = commentSnapshots.docs.map(comment => comment.data());

      // Optional: You can filter comments based on assignedAuditorID here if your comments have this field
      // const filteredComments = fetchedComments.filter(comment => comment.assignedAuditorID === assignedAuditorID);
      
      setComments(fetchedComments);
    } catch (err) {
      console.error("Error fetching comments: ", err);
      setError("Failed to fetch comments. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Comments</h2>
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="border p-2 mb-2">
              {comment.commentText}
            </li>
          ))
        ) : (
          !loading && <li>No comments available.</li>
        )}
      </ul>
    </div>
  );
};

export default Comments;

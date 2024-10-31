// src/Profile.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Loader from '../components/Loader';

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//   const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      try {
        const userDoc = doc(db, 'users', userId);
        const docSnap = await getDoc(userDoc);
        
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setError('No such user found!');
        }
      } catch (err) {
        setError('Failed to fetch user data.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, db]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
        {userData && (
          <div className="space-y-4">
            <p className="font-semibold">Name: <span className="font-normal">{userData.name}</span></p>
            <p>Email: <span className="font-normal">{userData.email}</span></p>
            <p>User Type: <span className="font-normal">{userData.userType}</span></p>
            <p>Specialization: <span className="font-normal">{userData.specialization}</span></p>
            <p>Verified: <span className="font-normal">{userData.verified ? 'Yes' : 'No'}</span></p>
            <p>
              Verification Documents: <a href={userData.verificationDocuments} className="text-blue-500 underline">View Document</a>
            </p>
          </div>
        )}
        <div className="mt-8 flex justify-around">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 transform hover:scale-105"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-textColor text-white px-6 py-2 rounded-md hover:bg-gray-400 transition duration-200 transform hover:scale-105"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

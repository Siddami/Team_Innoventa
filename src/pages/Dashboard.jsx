import { useEffect, useState } from 'react';
import { db, auth } from '../firebase'; // Ensure you have Firebase setup
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/Loader'
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import RenderContent from '../components/RenderContent'; // Import the RenderContent component

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [activeSection, setActiveSection] = useState('recentActivity');

  // Fetch current user's ID and data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set user ID from auth user
      } else {
        // Handle user not logged in (redirect or show message)
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Fetch user data, notifications, and recent activity
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          // Fetch user data
          const userDocRef = doc(db, 'users', userId);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());

            // Fetch notifications
            const notificationsRef = collection(db, 'notifications');
            const notificationsSnapshot = await getDocs(notificationsRef);
            const notificationsList = notificationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotifications(notificationsList);

            // Fetch recent activity based on user type
            const activityRef = collection(db, 'documents'); // Adjust as needed for your document structure
            const activitySnapshot = await getDocs(activityRef);
            const activityList = activitySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            if (userDocSnap.data().userType === 'auditor') {
              // Filter for auditor specific activities
              const assignedActivities = activityList.filter(doc => doc.assignedTo === userId); // Assuming 'assignedTo' is a field in your documents
              setRecentActivity(assignedActivities);
            } else {
              // Filter for organization specific activities
              const organizationActivities = activityList.filter(doc => doc.uploadedBy === userId); // Assuming 'uploadedBy' is a field
              setRecentActivity(organizationActivities);
            }
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dashboard-container flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="main-content w-3/4 p-6">
        {/* Top Navigation */}
        <div className="top-nav flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Welcome, {userData?.name || 'User'}</h1>
          <div className="user-details">
            <span className="text-gray-600">{userData?.email || 'Email'}</span>
            {/* Additional user details can go here */}
          </div>
        </div>

        {/* Content based on selected section */}
        <RenderContent
          activeSection={activeSection}
          recentActivity={recentActivity}
          notifications={notifications}
          userType={userData?.userType} // Pass userType to RenderContent
        />
      </main>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import RenderContent from '../components/RenderContent';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [activeSection, setActiveSection] = useState('recentActivity');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const userDocRef = doc(db, 'users', userId);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());

            const notificationsRef = collection(db, 'notifications');
            const notificationsSnapshot = await getDocs(notificationsRef);
            const notificationsList = notificationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotifications(notificationsList);

            const activityRef = collection(db, 'documents');
            const activitySnapshot = await getDocs(activityRef);
            const activityList = activitySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            if (userDocSnap.data().userType === 'auditor') {
              const assignedActivities = activityList.filter(doc => doc.assignedTo === userId);
              setRecentActivity(assignedActivities);
            } else {
              const organizationActivities = activityList.filter(doc => doc.uploadedBy === userId);
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

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarOptionClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 transform transition-transform bg-white shadow-md ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-64 xl:w-72`}
      >
        <Sidebar
          activeSection={activeSection}
          setActiveSection={handleSidebarOptionClick}
          userType={userData?.userType}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-60 xl:ml-64 flex flex-col">
        {/* Top Navigation Bar spanning full width */}
        <div className="w-full flex justify-between items-center p-4 sm:p-6 md:p-8 ">
          <button
            onClick={toggleSidebar}
            className="text-2xl lg:hidden focus:outline-none"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? (
              <i className="bx bx-chevron-left"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold flex-1 text-center lg:text-left">
            {userData?.name || 'User'}
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Home
            </button>
            <button
              onClick={handleLogout}
              className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${
                isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? 'Logging Out...' : 'Log Out'}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-8 overflow-auto">
          <RenderContent
            activeSection={activeSection}
            recentActivity={recentActivity}
            notifications={notifications}
            userType={userData?.userType}
          />
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && window.innerWidth <= 1024 && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Dashboard;

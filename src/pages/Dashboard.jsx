import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import RenderContent from '../components/RenderContent';
import DashboardNav from '../components/DashboardNav';

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
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData(data);

          const notificationsRef = collection(db, 'notifications');
          const notificationsSnapshot = await getDocs(notificationsRef);
          const notificationsList = notificationsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setNotifications(notificationsList);

          const activityRef = collection(db, 'documents');
          const activitySnapshot = await getDocs(activityRef);
          const activityList = activitySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          if (data.userType === 'auditor') {
            const assignedActivities = activityList.filter((doc) => doc.assignedTo === userId);
            setRecentActivity(assignedActivities);
          } else {
            const organizationActivities = activityList.filter((doc) => doc.uploadedBy === userId);
            setRecentActivity(organizationActivities);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-primary shadow-lg overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-96 z-10`}
      >
        {userData && (
          <Sidebar
            activeSection={activeSection}
            setActiveSection={handleSidebarOptionClick}
            userType={userData.userType}
          />
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'pl-96' : 'pl-0'
        } lg:pl-96`} // Adjust padding for sidebar state
      >
        {/* Top Navigation */}
        <DashboardNav
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          userData={userData}
          handleLogout={handleLogout}
          isLoggingOut={isLoggingOut}
        />

        <div className="p-4 sm:p-6 md:p-8 mt-20">
          <RenderContent
            activeSection={activeSection}
            notifications={notifications}
            recentActivity={recentActivity}
            userType={userData.userType}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

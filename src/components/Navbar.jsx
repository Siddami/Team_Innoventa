import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ isAuthenticated }) => {
  const [userId, setUserId] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate(); // Use useNavigate to redirect after logout

  useEffect(() => {
    const user = auth.currentUser; // Get the currently logged-in user
    if (user) {
      setUserId(user.uid); // Store userId in state
    }
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/'); // Redirect to the home page after logout
    } catch (error) {
      console.error('Logout failed:', error); // Handle any errors
    }
  };

  return (
    <nav className="bg-primary p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <NavLink to="/">AuditifyX</NavLink>
        </div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Dashboard
              </NavLink>
              {userId && ( // Ensure userId is available before rendering Profile link
                <NavLink
                  to={`/profile/${userId}`} // Link to Profile page with userId
                  className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
                >
                  Profile
                </NavLink>
              )}
              <button
                onClick={handleLogout} // Call handleLogout on button click
                className="text-white hover:bg-accent px-3 py-2 rounded"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/contact"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                About Us
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

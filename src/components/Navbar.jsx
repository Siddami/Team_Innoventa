import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ isAuthenticated }) => {
  const [userId, setUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu
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
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <NavLink to="/">AuditifyX</NavLink>
        </div>
        
        {/* Hamburger Button on the right */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white md:hidden focus:outline-none" // Only visible on small screens
        >
          {/* Hamburger Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>

        {/* Navigation Links - visible on larger screens */}
        <div className={`hidden md:flex md:justify-end space-x-4 ${isOpen ? 'flex flex-col mt-4' : 'hidden'}`}>
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Dashboard
              </NavLink>
              {userId && (
                <NavLink
                  to={`/profile/${userId}`} 
                  className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
                >
                  Profile
                </NavLink>
              )}
              <button
                onClick={handleLogout} 
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

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'flex flex-col mt-4' : 'hidden'}`}>
        <div className="flex flex-col space-y-2">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
              >
                Dashboard
              </NavLink>
              {userId && (
                <NavLink
                  to={`/profile/${userId}`} 
                  className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}
                >
                  Profile
                </NavLink>
              )}
              <button
                onClick={handleLogout} 
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

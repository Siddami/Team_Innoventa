/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-primary p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <NavLink to="/">AuditifyX</NavLink>
        </div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                Dashboard
              </NavLink>
              <NavLink to="/profile" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                Profile
              </NavLink>
              <NavLink to="/logout" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/contact" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                Contact Us
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/signup" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={({ isActive }) => `text-white hover:bg-accent px-3 py-2 rounded ${isActive ? 'bg-accent' : ''}`}>
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

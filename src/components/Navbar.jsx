import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">AuditifyX</Link>
        </div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:bg-accent px-3 py-2 rounded">
                Dashboard
              </Link>
              <Link to="/profile" className="text-white hover:bg-accent px-3 py-2 rounded">
                Profile
              </Link>
              <Link to="/logout" className="text-white hover:bg-accent px-3 py-2 rounded">
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/contact" className="text-white hover:bg-accent px-3 py-2 rounded">
                Contact Us
              </Link>
              <Link to="/about" className="text-white hover:bg-accent px-3 py-2 rounded">
                About Us
              </Link>
              <Link to="/signup" className="text-white hover:bg-accent px-3 py-2 rounded">
                Sign Up
              </Link>
              <Link to="/login" className="text-white hover:bg-accent px-3 py-2 rounded">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

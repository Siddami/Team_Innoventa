// src/Login.js
import { useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the path if necessary
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Assuming you’re using React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Authenticate the user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user data exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        // User data exists in Firestore
        navigate('/dashboard'); // Navigate to dashboard (adjust path if necessary)
      } else {
        // User data does not exist
        setMessage('Account not found. Please create an account.');
      }
    } catch (error) {
      // Handle specific Firebase Auth errors for better feedback
      if (error.code === 'auth/wrong-password') {
        setMessage('Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        setMessage('No account found with this email. Please create an account.');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
      console.error('Error during login:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackhome = async () => {
    navigate('/'); // Just navigate back without logging out
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          <p className='text-textColor hover:cursor-pointer' onClick={handleBackhome}>Back to home</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

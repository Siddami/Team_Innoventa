import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('auditor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Additional fields for organization and auditor
    organizationName: '',
    contactPerson: '',
    phoneNumber: '',
    licenseNumber: '',
    specialization: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, organizationName, contactPerson, phoneNumber, licenseNumber, specialization } = formData;

    try {
      // Check if the user already exists in the database
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('User with this email already exists.');
        return;
      }

      // Create the new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Prepare role-specific data for Firestore
      let userDocData = {
        name,
        email,
        userType,
      };

      if (userType === 'organization') {
        userDocData = {
          ...userDocData,
          organizationName,
          contactPerson,
          phoneNumber,
          documentUploadPermissions: true, // Organization-specific field
        };
      } else if (userType === 'auditor') {
        userDocData = {
          ...userDocData,
          licenseNumber,
          specialization,
          uploadVerificationDocuments: true, // Auditor-specific field
          verified: false, // Auditor-specific field
        };
      }

      // Save the user details in Firestore
      await setDoc(doc(db, 'users', user.uid), userDocData);

      console.log('User registered and data saved:', userDocData);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('Error during registration: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">User Type:</span>
            <select
              value={userType}
              onChange={handleUserTypeChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            >
              <option value="auditor">Auditor</option>
              <option value="organization">Organization</option>
            </select>
          </label>
          
          {/* Additional fields based on user type */}
          {userType === 'organization' && (
            <>
              <label className="block">
                <span className="text-gray-700">Organization Name:</span>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Contact Person:</span>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Phone Number:</span>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                />
              </label>
            </>
          )}
          {userType === 'auditor' && (
            <>
              <label className="block">
                <span className="text-gray-700">License Number:</span>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Specialization:</span>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                />
              </label>
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* Back Button */}
      <div className="mt-6">
          <Link to="/" className="flex items-center text-accent hover:text-primary transition">
              <box-icon name="arrow-back" color="#1D4E89" size="sm"></box-icon>
              <span className="ml-2 text-lg font-semibold text-primary">Back to Home</span>
          </Link>
      </div>
    </div>
  );
};

export default Signup;

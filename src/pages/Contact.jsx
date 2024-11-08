import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Loader from '../components/Loader'; // Import your loader component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(true); // State for loader

  // Simulate loading delay for 2 seconds (you can adjust as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        {/* Use your existing Loader component here */}
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-primary flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex flex-col items-center mt-20 space-y-12">
        
        {/* Contact Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-accent mb-4">Contact Us</h2>
          <p className="text-lg text-accent mb-6">
            We would love to hear from you! Please fill out the form below to get in touch.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-primary text-white shadow-lg rounded-2xl p-6 md:p-8 w-full md:w-2/3 lg:w-5/6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-white" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 rounded-md shadow-md hover:bg-primary transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <Link to="/" className="text-white hover:underline flex items-center justify-center space-x-2">
            <box-icon name="arrow-back" color="#fff" size="sm"></box-icon>
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

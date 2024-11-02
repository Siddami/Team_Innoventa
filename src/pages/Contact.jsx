import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <div className="min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-primary to-accent px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 md:p-8 transition transform hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-primary mb-4 animate-fadeIn">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6 animate-slideDown">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
          <div className="relative">
            <label className="text-gray-700 block mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
            />
          </div>
          <div className="relative">
            <label className="text-gray-700 block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
            />
          </div>
          <div className="relative">
            <label className="text-gray-700 block mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-transform duration-200 transform hover:scale-105 focus:scale-105"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-md shadow-md hover:bg-accent transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Back Button */}
      <div className="mt-6">
            <Link to="/" className="flex items-center text-accent hover:text-primary transition">
                  <box-icon name="arrow-back" color="#fff" size="sm"></box-icon>
                  <span className="ml-2 text-lg font-semibold text-white">Back to Home</span>
            </Link>
      </div>
    </div>
  );
};

export default Contact;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './auth/Login';
import { ToastContainer } from 'react-toastify';
import Signup from './auth/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';


const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

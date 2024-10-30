/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; // Ensure this is correctly imported

export const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started...");

    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Loading finished.");
    }, 1000); // Adjust time as needed

    return () => {
      clearTimeout(timer); // Clear timer on unmount
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar isAuthenticated={isAuthenticated} />
          <Hero />
          <MainContent />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; 
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import Loader from "../components/Loader"; 

export const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started...");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is signed in
      } else {
        setIsAuthenticated(false); // No user is signed in
      }
      setIsLoading(false); // Finished loading once we know the auth state
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
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

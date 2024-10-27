/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";

export const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
    return (
    <div>
        <Navbar isAuthenticated={isAuthenticated} />
        <Hero />
        <MainContent />
    </div>
  )
}

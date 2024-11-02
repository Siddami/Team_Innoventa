import { TypeAnimation } from "react-type-animation";
import HeroImage from '../assets/hero.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen w-full p-0 sm:p-4 bg-gray-900 text-white">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0 mt-2">
        <img
          src={HeroImage}
          alt="Audit experience illustration"
          className="w-[70%] sm:w-2/4 mt-2 md:w-3/4 lg:w-full xl:max-w-lg rounded-lg transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left px-4 sm:px-8 lg:px-12">
        <TypeAnimation
          sequence={[
            "Simplifying Your Audit Experience", // Initial text
            2000, // Display for 2 seconds
            "With Ease & Security", // New text
            2000, // Display for another 2 seconds
          ]}
          wrapper="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          repeat={Infinity} // Loop indefinitely
        />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mt-2">
          Effortlessly upload and manage your documents with our user-friendly platform.
        </p>
        <Link to="/signup" className="bg-primary hover:bg-accent hover:scale-95 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded transition duration-200 text-sm sm:text-base md:text-lg">Get Started</Link>
      </div>
    </section>
  );
};

export default Hero;

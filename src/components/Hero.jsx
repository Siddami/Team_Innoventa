import { TypeAnimation } from "react-type-animation";
import HeroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen p-8 bg-gray-900 text-white">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img
          src={HeroImage}
          alt="Audit experience illustration"
          className="max-w-full md:max-w-xl rounded-lg transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left p-8 bg-transparent bg-opacity-60 rounded-lg">
        <TypeAnimation
          sequence={[
            "Simplifying Your Audit Experience", // Initial text
            2000, // Display for 2 seconds
            "With Ease & Security", // New text
            2000, // Display for another 2 seconds
          ]}
          wrapper="h1"
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          repeat={Infinity} // Loop indefinitely
        />

        <p className="text-xl md:text-2xl mb-8 mt-4">
          Effortlessly upload and manage your documents with our user-friendly platform.
        </p>
        <a
          href="/signup"
          className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 rounded transition duration-200 text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import BackgroundVideo from '../assets/audit.mp4'; 
import BackgroundImage from '../assets/sort.jpg'; 

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-[75vh] w-full bg-primary text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={BackgroundImage}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary via-transparent to-accent opacity-70"></div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <TypeAnimation
          sequence={[
            "Simplifying Your Audit Experience",
            2000,
            "With Ease & Security",
            2000,
          ]}
          wrapper="h1"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slideIn"
          repeat={Infinity}
        />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mt-2 max-w-[80%]">
          Effortlessly upload and manage your documents with our user-friendly platform.
        </p>

        <Link
          to="/signup"
          className="bg-primary hover:bg-accent transform hover:scale-95 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded transition duration-200 text-sm sm:text-base md:text-lg"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;

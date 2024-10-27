const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simplifying Your Audit Experience
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Effortlessly upload and manage your documents with our user-friendly platform.
        </p>
        <a
          href="/signup"
          className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded transition duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;

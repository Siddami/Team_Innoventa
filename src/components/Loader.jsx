// Loader.js
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-24 h-24">
        <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-spin-slow border-t-transparent"></div>
        <div className="absolute w-full h-full border-4 border-purple-500 rounded-full animate-[spin_1.5s_linear_reverse_infinite] border-t-transparent"></div>
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;

import { motion } from 'framer-motion';

const FeatureCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }} // Scale on hover
    >
      <img src={image} alt={title} className="mb-4 rounded-md w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

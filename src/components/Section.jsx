import { motion } from "framer-motion";

const Section = ({ image, title, text, alt, reverse }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16 gap-6 lg:gap-10`}>
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <img src={image} alt={alt} className="rounded-lg shadow-lg max-w-full h-auto object-cover" />
      </motion.div>
  
      <motion.div
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6 md:space-y-8"
      >
        <h2 className="text-3xl font-bold text-accent">{title}</h2>
        <p className="text-lg text-gray-300">{text}</p>
      </motion.div>
    </div>
  );

export default Section;

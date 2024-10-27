import { motion } from 'framer-motion';

const MainContent = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="px-6 py-12 bg-gray-50">
      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img src="../assets/upload.png" alt="Easy Document Upload" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Easy Document Upload</h3>
            <p>
              Seamlessly upload all your auditing documents with our user-friendly interface.
            </p>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="../assets/collab.jpg" alt="Real-time Collaboration" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
            <p>
              Collaborate with auditors in real-time, ensuring a smooth auditing process.
            </p>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="../assets/secure.jpg" alt="Secure Access" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p>
              Your documents are secure and accessible only to authorized personnel, ensuring confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img src="/path/to/image4.jpg" alt="Streamlined Processes" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Streamlined Processes</h3>
            <p>
              Our platform simplifies the auditing process, reducing the time and effort needed to prepare and manage documents.
            </p>
          </motion.div>
          {/* Benefit 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="/path/to/image5.jpg" alt="Improved Compliance" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Improved Compliance</h3>
            <p>
              Stay compliant with auditing standards and regulations by using a platform designed for efficiency and accuracy.
            </p>
          </motion.div>
          {/* Benefit 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/path/to/image6.jpg" alt="Enhanced Transparency" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Enhanced Transparency</h3>
            <p>
              Our system promotes transparency in the auditing process, ensuring that all stakeholders have access to necessary information.
            </p>
          </motion.div>
          {/* Benefit 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/path/to/image7.jpg" alt="Cost-Effective Solution" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Cost-Effective Solution</h3>
            <p>
              Save money on auditing costs by leveraging our platform’s efficient document management and collaboration features.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

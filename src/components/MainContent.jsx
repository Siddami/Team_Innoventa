import upload from '../assets/upload.png';
import secure from '../assets/secure.jpg';
import collab from '../assets/collab.jpg';
import analysis from '../assets/analysis.jpg';
import audit from '../assets/audit.jpg';
import files from '../assets/files.jpg';
import account from '../assets/account.jpg';
import verify from '../assets/verify.png';
import hero from '../assets/hero.jpg';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="px-4 md:px-6 py-12 bg-white space-y-16">
      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fade-in">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard
            image={upload}
            title="Easy Document Upload"
            description="Seamlessly upload all your auditing documents with our user-friendly interface."
          />
          <FeatureCard
            image={collab}
            title="Real-time Collaboration"
            description="Collaborate with auditors in real-time, ensuring a smooth auditing process."
          />
          <FeatureCard
            image={secure}
            title="Secure Access"
            description="Your documents are secure and accessible only to authorized personnel, ensuring confidentiality."
          />
        </div>
      </section>

      {/* Auditor Verification Section */}
      <section className="bg-gray-100 py-12 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fade-in">Auditor Verification Process</h2>
        <div className="text-center max-w-2xl mx-auto mb-6 text-gray-700 leading-relaxed animate-slide-in">
          <p>Every auditor on our platform undergoes a rigorous verification process before approval, ensuring you work with trusted professionals. This includes:</p>
          <div className="flex justify-center mt-4 mb-8">
            {/* Image with reduced size */}
            <div className="w-full sm:w-2/3 h-40 sm:h-48 lg:h-60 bg-gray-300 rounded-md flex items-center justify-center overflow-hidden">
              <img src={verify} alt="Verification Process" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-600 text-center">
          <li className="bg-white p-4 rounded shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold">Identity Verification</h4>
            <p>Confirming auditors' true identities.</p>
          </li>
          <li className="bg-white p-4 rounded shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold">Certification Check</h4>
            <p>Only certified professionals are approved.</p>
          </li>
          <li className="bg-white p-4 rounded shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold">Ethical Compliance</h4>
            <p>Adherence to strict ethical guidelines.</p>
          </li>
          <li className="bg-white p-4 rounded shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="font-semibold">Background Check</h4>
            <p>Zero tolerance for prior misconduct.</p>
          </li>
        </ul>
      </section>

      {/* Platform Highlights Section */}
      <section className="bg-white py-12 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fade-in">Platform Highlights</h2>
        <div className="text-center max-w-2xl mx-auto mb-6 leading-relaxed animate-slide-in">
          <p>Discover why our platform stands out in providing efficient, secure, and transparent audit solutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <FeatureCard
            image={analysis}
            title="Streamlined Processes"
            description="Our platform simplifies the auditing process, reducing the time and effort needed to prepare and manage documents."
          />
          <FeatureCard
            image={files}
            title="Improved Compliance"
            description="Stay compliant with auditing standards and regulations by using a platform designed for efficiency and accuracy."
          />
          <FeatureCard
            image={account}
            title="Enhanced Transparency"
            description="Our system promotes transparency in the auditing process, ensuring that all stakeholders have access to necessary information."
          />
          <FeatureCard
            image={audit}
            title="Cost-Effective Solution"
            description="Save money on auditing costs by leveraging our platform’s efficient document management and collaboration features."
          />
        </div>
      </section>

      {/* Platform Information Section */}
      <section className="bg-primary text-white py-12 animate-slide-in">
        <h2 className="text-3xl font-bold text-center mb-6">Why AuditifyX?</h2>
        <p className="text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          AuditifyX provides a secure, reliable, and easy-to-use platform for managing audits. Experience auditing excellence with trusted professionals.
        </p>
        <div className="flex justify-center mb-8 p-2">
          {/* Image with reduced size */}
          <div className="w-full sm:w-2/3 lg:w-1/2 h-40 sm:h-48 lg:h-60 bg-gray-300 rounded-md flex items-center justify-center overflow-hidden">
            <img src={hero} alt="Auditing Image" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/about" className="bg-accent text-white px-6 py-3 rounded-md shadow-md hover:bg-primary transition duration-300">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

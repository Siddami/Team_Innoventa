import upload from '../assets/upload.png';
import secure from '../assets/secure.jpg';
import collab from '../assets/collab.jpg';
import analysis from '../assets/analysis.jpg';
import audit from '../assets/audit.jpg';
import files from '../assets/files.jpg';
import account from '../assets/account.jpg';
import FeatureCard from './FeatureCard';

const MainContent = () => {
  return (
    <main className="px-4 md:px-6 py-12 bg-white">
      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
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

      {/* Why Choose Our Platform Section */}
      <section className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our Platform?</h2>
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
    </main>
  );
};

export default MainContent;

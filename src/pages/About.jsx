import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Loader from '../components/Loader'; // Import your Loader component
import process from '../assets/sort.jpg';
import mission from '../assets/mission.jpg';
import service from '../assets/service.jpg';
import team from '../assets/team.jpg';
import encrypt from '../assets/encrpt.png';
import verisec from '../assets/verisec.png';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds (or your preferred delay)
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        {/* Use your existing Loader component here */}
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex flex-col items-center mt-20 space-y-12 gap-2">
        
        {/* About Section */}
        <Section
          image={process}
          title="About AuditifyX"
          text="Welcome to AuditifyX, where our mission is to streamline the auditing process and enhance compliance for organizations. Through our platform, we connect organizations with skilled auditors to manage and review documents, ensuring accuracy, transparency, and accountability."
          alt="Audit Process"
        />

        {/* Mission Section */}
        <Section
          image={mission}
          title="Our Mission"
          text="Our mission is to provide high-quality, reliable auditing solutions that help organizations make informed, data-driven decisions. AuditifyX empowers companies by prioritizing compliance and transparency, allowing them to focus on growth."
          alt="Our Mission"
          reverse
        />

        {/* Services Section */}
        <Section
          image={service}
          title="Our Services"
          text="AuditifyX offers a comprehensive suite of auditing tools, from document uploads to in-depth review capabilities and threaded comments. Our platform is designed to simplify auditing and enhance communication between organizations and auditors."
          alt="Our Services"
        />

        {/* Team Section */}
        <Section
          image={team}
          title="Meet Our Team"
          text="Our team consists of experienced auditors and industry experts who are passionate about delivering exceptional auditing services. Each team member brings unique skills to ensure your organization remains compliant and risk-free."
          alt="Our Team"
          reverse
        />

        {/* Workspace Encryption */}
        <Section
          image={encrypt}
          title="Encrypted Workspace for Enhanced Document Security"
          text="Our platform offers a secure, encrypted workspace for real-time collaboration. Auditors can work with documents directly on-site without downloading or capturing them, keeping sensitive information safe and strictly for audit use."
          alt="Encrypted Workspace"
        />

        {/* Auditor Verifiaction section */}
        <Section
          image={verisec}
          title="Verified Auditors for Trust and Security"
          text="Each auditor undergoes a thorough verification process, ensuring top safety and professionalism. This confirms they’re qualified, trustworthy, and experienced, giving organizations confidence that their documents are secure."
          alt="Verified Auditors for Trust and Security"
          reverse
        />

        {/* Back Button */}
        <Link to="/" className="text-white hover:underline mt-8">
          <span className="flex items-center space-x-2">
            <box-icon name="arrow-back" color="#fff" size="sm"></box-icon>
            <span>Back to Home</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default About;

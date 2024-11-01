import process from '../assets/sort.jpg';
import mission from '../assets/mission.jpg';
import service from '../assets/service.jpg';
import team from '../assets/team.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-primary">
            
            {/* Back Button */}
            <div className="mb-6">
                <Link to="/" className="flex items-center text-accent hover:text-accent-dark transition">
                    <box-icon name="arrow-back" color="#fff" size="sm"></box-icon>
                    <span className="ml-2 text-lg font-semibold text-white">Back to Home</span>
                </Link>
            </div>

            {/* Welcome Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md mb-6">
                <h1 className="text-3xl font-bold text-center mb-4 text-accent">About AuditifyX</h1>
                <p className="text-gray-700 text-lg text-center mb-6">
                    Welcome to <em className="text-accent">AuditifyX</em>, where our mission is to streamline the auditing process and enhance compliance for organizations. 
                    Through our platform, we connect organizations with skilled auditors to manage and review documents, ensuring accuracy, transparency, and accountability.
                </p>
                <div className="flex justify-center">
                    <img src={process} alt="Audit Process" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md mb-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-accent">Our Mission</h2>
                <p className="text-gray-700 text-lg text-center mb-6">
                    Our mission is to provide high-quality, reliable auditing solutions that help organizations make informed, data-driven decisions. 
                    AUDITFYX empowers companies by creating a platform where compliance and transparency are prioritized, and organizations can focus on growth.
                </p>
                <div className="flex justify-center">
                    <img src={mission} alt="Our Mission" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>

            {/* Our Services Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md mb-6">
                <h2 className="text-2xl font-bold text-center mb-4 text-accent">Our Services</h2>
                <p className="text-gray-700 text-lg text-center mb-6">
                    AUDITFYX offers a comprehensive suite of auditing tools, from document uploads to in-depth review capabilities and threaded comments, 
                    allowing for efficient and organized audits. Our platform is designed to simplify auditing and enhance communication between organizations and auditors.
                </p>
                <div className="flex justify-center">
                    <img src={service} alt="Our Services" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>

            {/* Our Team Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4 text-accent">Meet Our Team</h2>
                <p className="text-gray-700 text-lg text-center mb-6">
                    Our team consists of experienced auditors and industry experts who are passionate about delivering exceptional auditing services. 
                    Each team member brings a unique set of skills to ensure your organization remains compliant and risk-free.
                </p>
                <div className="flex justify-center">
                    <img src={team} alt="Our Team" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default About;

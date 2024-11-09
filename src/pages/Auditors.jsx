import { Link } from "react-router-dom";

const auditors = [
  {
    name: 'Chinedu Okafor',
    experience: '5 years in auditing',
    verified: true,
    active: true,
  },
  {
    name: 'Ngozi Iweala',
    experience: '8 years in financial analysis',
    verified: false,
    active: false,
  },
  {
    name: 'Tunde Adebayo',
    experience: '3 years in regulatory auditing',
    verified: true,
    active: true,
  },
  {
    name: 'Funke Adesola',
    experience: '10 years in forensic auditing',
    verified: true,
    active: false,
  },
  {
    name: 'Emeka Nwachukwu',
    experience: '6 years in corporate audits',
    verified: false,
    active: true,
  },
];

const Auditors = () => {
  return (
    <div className="min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8 transition transform hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-primary mb-6 animate-fadeIn">
          Auditors
        </h2>
        <p className="text-center text-gray-600 mb-8 animate-slideDown">
          Choose from our list of registered auditors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn">
          {auditors.map((auditor, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
                auditor.active ? 'bg-green-50' : 'bg-gray-100'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {auditor.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Experience:</span> {auditor.experience}
              </p>
              <p className="flex items-center mb-2">
                <span className="font-medium text-gray-700">Verified:</span>
                {auditor.verified ? (
                  <span className="ml-2 text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="ml-2 text-red-600 font-semibold">No</span>
                )}
              </p>
              <p className="flex items-center">
                <span className="font-medium text-gray-700">Status:</span>
                {auditor.active ? (
                  <span className="ml-2 text-green-600 font-semibold">Active</span>
                ) : (
                  <span className="ml-2 text-gray-400 font-semibold">Inactive</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Back Button */}
      <div className="mt-6">
        <Link to="/" className="flex items-center text-accent hover:text-primary transition">
          <box-icon name="arrow-back" color="#1D4E89" size="sm"></box-icon>
          <span className="ml-2 text-lg font-semibold text-primary">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Auditors;

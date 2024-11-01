const Sidebar = ({ activeSection, setActiveSection, userType }) => {
  return (
    <aside className="w-80 bg-primary text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">AuditifyX</h2>
      <ul className="flex flex-col gap-5">
        <li className="mb-2">
          <button
            className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor ${activeSection === 'recentActivity' ? 'font-bold text-textColor bg-secondary' : ''}`}
            onClick={() => setActiveSection('recentActivity')}
          >
            Recent Activity
          </button>
        </li>

        <li className="mb-2">
          <button
            className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor ${activeSection === 'documentList' ? 'font-bold text-textColor bg-secondary' : ''}`}
            onClick={() => setActiveSection('documentList')}
          >
            Documents List
          </button>
        </li>

        {userType === 'organization' && (
          <li className="mb-2">
            <button
              className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor ${activeSection === 'uploadDocument' ? 'font-bold text-textColor bg-secondary' : ''}`}
              onClick={() => setActiveSection('uploadDocument')}
            >
              Upload Document
            </button>
          </li>
        )}

        <li className="mb-2">
          <button
            className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor ${activeSection === 'comments' ? 'font-bold text-textColor bg-secondary' : ''}`}
            onClick={() => setActiveSection('comments')}
          >
            Access Document and Comment
          </button>
        </li>

        <li className="mb-2">
          <button
            className={`w-full text-left p-4 hover:bg-secondary hover:text-textColor ${activeSection === 'notifications' ? 'font-bold text-textColor bg-secondary' : ''}`}
            onClick={() => setActiveSection('notifications')}
          >
            Notifications
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="sidebar w-1/4 bg-gray-200 h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
      <ul>
        <li className="mb-2">
          <button
            className={`w-full text-left ${activeSection === 'recentActivity' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('recentActivity')}
          >
            Recent Activity
          </button>
        </li>
        <li className="mb-2">
          <button
            className={`w-full text-left ${activeSection === 'assignedDocuments' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('assignedDocuments')}
          >
            Assigned Documents
          </button>
        </li>
        <li className="mb-2">
          <button
            className={`w-full text-left ${activeSection === 'documentList' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('documentList')}
          >
            Documents List
          </button>
        </li>
        <li className="mb-2">
          <button
            className={`w-full text-left ${activeSection === 'comments' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('comments')}
          >
            Access Document and Comment
          </button>
        </li>
        <li className="mb-2">
          <button
            className={`w-full text-left ${activeSection === 'notifications' ? 'font-bold' : ''}`}
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

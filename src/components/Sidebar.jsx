import SidebarItem from './SidebarItem';

const Sidebar = ({ activeSection, setActiveSection, userType }) => {
  const renderSidebarItems = () => {
    return (
      <>
        <SidebarItem
          label="Recent Activity"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="recentActivity"
        />
        <SidebarItem
          label="Documents List"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="documentList"
        />
        {userType === 'organization' && (
          <SidebarItem
            label="Upload Document"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            section="uploadDocument"
          />
        )}
        <SidebarItem
          label="Access Document and Comment"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="comments"
        />
        <SidebarItem
          label="Notifications"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="notifications"
        />
      </>
    );
  };

  return (
    <aside className="w-80 bg-primary text-white h-screen fixed left-0 top-0 p-4 flex flex-col z-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">AuditifyX</h2>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <ul className="flex flex-col gap-5">
          {renderSidebarItems()}
        </ul>
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:block">
        <ul className="flex flex-col gap-5">
          {renderSidebarItems()}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

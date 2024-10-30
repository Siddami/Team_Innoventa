const RenderContent = ({ activeSection, recentActivity = [], notifications = [], userType }) => {
    const renderRecentActivity = () => (
      <div>
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <ul>
          {recentActivity.length > 0 ? (
            recentActivity.map(activity => (
              <li key={activity.id} className="border p-2 mb-2">
                <strong>{activity.title}</strong>
                <p>{activity.description}</p>
              </li>
            ))
          ) : (
            <li>No recent activity found.</li>
          )}
        </ul>
      </div>
    );
  
    const renderAssignedDocuments = () => (
      <div>
        <h2 className="text-xl font-semibold">Assigned Documents</h2>
        <ul>
          {recentActivity.length > 0 ? (
            recentActivity.map(doc => (
              <li key={doc.id} className="border p-2 mb-2">
                <strong>{doc.title}</strong>
                <p>{doc.description}</p>
              </li>
            ))
          ) : (
            <li>No assigned documents found.</li>
          )}
        </ul>
      </div>
    );
  
    const renderDocumentList = () => (
      <div>
        <h2 className="text-xl font-semibold">Documents List</h2>
        <ul>
          {recentActivity.length > 0 ? (
            recentActivity.map(doc => (
              <li key={doc.id} className="border p-2 mb-2">
                <strong>{doc.title}</strong>
                <p>{doc.description}</p>
              </li>
            ))
          ) : (
            <li>No documents available.</li>
          )}
        </ul>
      </div>
    );
  
    const renderComments = () => (
      <div>
        <h2 className="text-xl font-semibold">Comments</h2>
        <p>No comments available.</p>
      </div>
    );
  
    const renderNotifications = () => (
      <div>
        <h2 className="text-xl font-semibold">Notifications</h2>
        <ul>
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <li key={notification.id} className="border p-2 mb-2">
                {notification.message}
              </li>
            ))
          ) : (
            <li>No notifications.</li>
          )}
        </ul>
      </div>
    );
  
    switch (activeSection) {
      case 'recentActivity':
        return renderRecentActivity();
      case 'assignedDocuments':
        return userType === 'auditor' ? renderAssignedDocuments() : renderDocumentList();
      case 'documentList':
        return renderDocumentList();
      case 'comments':
        return renderComments();
      case 'notifications':
        return renderNotifications();
      default:
        return <div>No section selected.</div>;
    }
  };
  
  export default RenderContent;
  
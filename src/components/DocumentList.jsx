import Loader from './Loader';

const DocumentList = ({ documents, loading, error }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Documents List</h2>
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {documents.length > 0 ? (
          documents.map(doc => (
            <li key={doc.id}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.title}</a>
            </li>
          ))
        ) : (
          !loading && <li>No documents available.</li>
        )}
      </ul>
    </div>
  );
};

export default DocumentList;

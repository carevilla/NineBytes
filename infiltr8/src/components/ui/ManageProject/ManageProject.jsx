
import CreateProjectForm from './CreateProjectForm';
import AssessFiles from './AssessFiles';
import React, { useState, useEffect } from 'react';

import '../../../App.css';
import '../../../App.jsx';
import '../../../index.css';

//import EditIPAddresses from './ManageProject/EditIPAddresses'; // This component needs to be created.
//import OpenProject from './OpenProject'; // This component needs to be created.
//import DeleteProject from './DeleteProject'; // This component needs to be created.
//import ViewResults from './ViewResults'; // This component needs to be created.
import IngestReconnaissanceFiles from './IngestReconnaissanceFiles';
import VerifyScope from './VerifyScope';
//import SpecifyRequirements from './SpecifyRequirements'; // This component needs to be created.
//import EnumerateResults from './EnumerateResults'; // This component needs to be c


const ManageProject = () => {
  const [reconFiles, setReconFiles] = useState([]);
  const [activeAction, setActiveAction] = useState(null);

  // Mock data fetching for reconFiles
  useEffect(() => {
    // Mock data, replace with actual data fetching logic
    setReconFiles([{ id: 'file1', name: 'Recon File 1' }]);
  }, []);

  const renderActiveComponent = () => {
    switch (activeAction) {
      case 'create':
        return <CreateProjectForm />;
      case 'assess':
        return <AssessFiles />;
      case 'editIP':
        return <EditIPAddresses />;
      case 'open':
        return <OpenProject />;
      case 'delete':
        return <DeleteProject />;
      case 'viewResults':
        return <ViewResults />;
      case 'ingest':
        return <IngestReconnaissanceFiles />;
      case 'verify':
        return <VerifyScope />;
      case 'specify':
        return <SpecifyRequirements />;
      case 'enumerate':
        return <EnumerateResults />;
      default:
        return <div>Select an action to get started.</div>;
    }
  };

  return (
    <div className="manage-project">
      <h1>Manage Project</h1>
      {/* UI for selecting which action to perform */}
      <nav>
        <button onClick={() => setActiveSection('createProject')}>Create Project</button>
        <button onClick={() => setActiveSection('assessFiles')}>Assess Files</button>
        {/* ... other buttons for each action */}
      </nav>
      
      {/* The section for handling reconnaissance files */}
      <div className="recon-files-list">
        {reconFiles.length > 0 ? (
          reconFiles.map((file, index) => (
            <div key={index} className="recon-file">
              <span>{file.name}</span>
              <button onClick={() => handleInterpretation(file.id)}>Interpret File</button>
            </div>
          ))
        ) : (
          <p>No reconnaissance files to display.</p>
        )}
      </div>
      
      {/* Render the active section component */}
      {renderSection()}
    </div>
  );
};

export default ManageProject;

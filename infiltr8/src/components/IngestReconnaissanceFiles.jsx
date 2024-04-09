// IngestReconnaissanceFiles.jsx
import React, { useState } from 'react';

const IngestReconnaissanceFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFilesUpload = (event) => {
    // Create a FileReader to read files
    const uploadedFiles = event.target.files;
    const filesArray = [];

    for (let i = 0; i < uploadedFiles.length; i++) {
      // You might want to do some validation or processing of the files here
      filesArray.push(uploadedFiles[i]);
    }

    setFiles(filesArray);
    // TODO: Upload files to the server or further processing
  };

  return (
    <div className="ingest-recon-files">
      <h1>Import Reconnaissance Files</h1>
      <input type="file" multiple onChange={handleFilesUpload} />
      {files.length > 0 && (
        <div>
          <h2>Files to be ingested:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IngestReconnaissanceFiles;

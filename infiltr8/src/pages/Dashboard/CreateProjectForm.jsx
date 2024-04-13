import './createProject.css';
import React, { useState } from 'react';


const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [scope, setScope] = useState('');
  const [whiteListIP, setWhiteListIP] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [cyberAttacks, setCyberAttacks] = useState({
    portBypass: false,
    defaultCredentials: false,
    unpatchedSoftware: false,
    missingEncryption: false,
    weakPasswords: false,
  });
  const [reconnaissanceFile, setReconnaissanceFile] = useState(null);

  const attackLabels = {
    portBypass: 'Port Bypass',
    defaultCredentials: 'Default Credentials',
    unpatchedSoftware: 'Unpatched Software',
    missingEncryption: 'Missing Encryption',
    weakPasswords: 'Weak Passwords',
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setCyberAttacks({
        ...cyberAttacks,
        [value]: checked,
      });
    } else {
      switch (name) {
        case 'projectName':
          setProjectName(value);
          break;
        case 'scope':
          setScope(value);
          break;
        case 'whiteListIP':
          setWhiteListIP(value);
          break;
        case 'creationDate':
          setCreationDate(value);
          break;
        default:
          break;
      }
    }
  };

  const handleFileChange = (event) => {
    setReconnaissanceFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('scope', scope);
    formData.append('whiteListIP', whiteListIP);
    formData.append('creationDate', creationDate);
    Object.entries(cyberAttacks).forEach(([key, value]) => {
      formData.append(`cyberAttacks[${key}]`, value);
    });
    if (reconnaissanceFile) {
      formData.append('reconnaissanceFile', reconnaissanceFile);
    }

    // Placeholder for where you would typically handle the form submission
    // For example, an API call:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    console.log('Form Data:', formData);
    // Clear the form or provide a success message here
  };

  return (
    <form className="create-project-form" onSubmit={handleSubmit}>
      <h2>INFILTR8 Create Project</h2>
      <div className="form-group">
        <label htmlFor="projectName">Project Name</label>
        <input type="text" id="projectName" name="projectName" value={projectName} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="scope">Specify Scope</label>
        <input type="text" id="scope" name="scope" value={scope} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="whiteListIP">White-list IP</label>
        <input type="text" id="whiteListIP" name="whiteListIP" value={whiteListIP} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="creationDate">Creation Date</label>
        <input type="date" id="creationDate" name="creationDate" value={creationDate} onChange={handleInputChange} required />
      </div>
      <fieldset className="form-group">
        <legend>Cyber Attacks</legend>
        {Object.entries(cyberAttacks).map(([key, value]) => (
          <label key={key}>
            <input type="checkbox" name="cyberAttacks" value={key} checked={value} onChange={handleInputChange} />
            {attackLabels[key]}
          </label>
        ))}
      </fieldset>
      <div className="form-group">
        <label htmlFor="reconnaissanceFile">Ingest Reconnaissance File</label>
        <input type="file" id="reconnaissanceFile" name="reconnaissanceFile" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProjectForm;

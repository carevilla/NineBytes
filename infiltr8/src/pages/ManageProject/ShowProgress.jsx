import React from 'react';
import './ShowProgress.css';

const ShowProgress = () => {
  const progressBars = [
    { label: "Port Bypass", percentage: 50 },
    { label: "Unpatched Software", percentage: 75 },
    { label: "Missing Encryption", percentage: 100 },
    { label: "Weak Passwords", percentage: 100 }, // Example, adjust as needed
  ];

  return (
    <div className="show-progress-container">
      <h1>Show Progress</h1>
      <p>View the progress of the pen test.</p>
      {progressBars.map((bar, index) => (
        <div key={index} className="progress-bar-container">
          <label>{bar.label}</label>
          <div className="progress-bar-background">
            <div className={`progress-bar`} style={{ width: `${bar.percentage}%` }}>
              <span className="progress-percentage">{bar.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProgress;

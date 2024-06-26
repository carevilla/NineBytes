"use client"; // Place this outside of the function scope

import React, { useState } from 'react';
import './App.css';
import './index.css';
import { cn } from "@/utils/cn"
import ViewDashboard from './components/ViewDashboard';
import { Boxes } from './components/ui/background-boxes';
import { Tabs } from "./components/ui/tabs";
import CreateProjectForm  from './components/CreateProjectForm';
import ShowProgress from './components/ShowProgress';
import ManageProject from './components/ManageProject';
import AssessFiles from './components/AssessFiles';
import IngestReconnaissanceFiles from './components/IngestReconnaissanceFiles';
import VerifyScope from './components/VerifyScope';




function App() {
  

  const tabs = [
    {
      title: "View Dashboard",
      value: "view-dashboard",
      content:<ViewDashboard />
      
    },
    {
      title: "Show Progress",
      value: "show-progress",
      content: (
          <div className="tab-content">
            <ShowProgress />
          </div>
      ),
    },
    {
      title: "Manage Project",
      value: "manage-project",
      content: <ManageProject />
      
    },
      {
        title: "Create Project",
        value: "create-project",
        content: 
        <div>
          <CreateProject/>
        </div>
          
        
      },
      
    {
      title: "Ingest Reconnaissance Files",
      value: "ingest-files",
      content: <IngestReconnaissanceFiles />
    },
    {
      title: "Verify Scope",
      value: "verify-scope",
      content:<VerifyScope />
    },
    {
      title: "Delete Project",
      value: "delete-project",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Create Project</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Assess Files",
      value: "assess-files",
      content: <AssessFiles />
    },
  ];

  return (
    <div className="app-container">  {/* Ensure this container is relative if using absolute positioning */}
  
      <Boxes className="background-boxes" /> {/* Background boxes should be styled to be behind all content */}
      
      <Tabs tabs={tabs} className="tabs" /> {/* Tabs should not be nested within Boxes if they need to be on top */}
      
      
      
      
      {/* ...other components like cards and additional info */}
    </div>
  );
}


const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const ViewDash = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const CreateProject = () => {
 
  return (
    <CreateProjectForm />
  );
};

export default App;

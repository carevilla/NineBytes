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
      content: <ShowProgress />,
    },
    {
      title: "Manage Project",
      value: "manage-project",
      content: <ManageProject />,
    },
    // ...other tabs if necessary
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

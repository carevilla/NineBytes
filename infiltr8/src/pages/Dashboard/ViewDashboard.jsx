// ViewDashboard.jsx
import React from 'react';
import { Boxes } from '../../components/ui/background-boxes';
import { Tabs } from "../../components/ui/tabs";
import CreateProjectForm from './CreateProjectForm';
import ShowProgress from '../ManageProject/ShowProgress';
import ManageProject from '../ManageProject/ManageProject';
import { TypewriterEffect } from '../../components/ui/typewriter-effect';
import './ViewDashboard.css'; 
import AssessFiles from './AssessFiles';
const ViewDashboard = () => {
  const tabs = [
    {
    title: "Create Project",
      content: <CreateProjectForm />
    },
    {
      title: "Assess Files",
      content: <AssessFiles/>
    },
    {
      title: "Open Project",
      content: <ManageProject />
    },
    {
      title: "Delete Project",
      content: <ManageProject />
    },
    {
      title: "View Results",
      
    }
    // ...other tabs
  ];

  return (
    <div className="app-container relative">
  
    <TypewriterEffect
      words={[{ text: "Manage Project" }]}
      className="typewriter-effect"
    />
    <Tabs tabs={tabs}
    />
   
    
      
     
      {/* ...other components */}
    </div>
  );
};

export default ViewDashboard;

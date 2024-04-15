import React from 'react';
import { Boxes } from '../../components/ui/background-boxes';
import { Tabs } from "../../components/ui/tabs";
import CreateProjectForm from './CreateProjectForm';
import ShowProgress from '../ManageProject/ShowProgress';
import ManageProject from '../ManageProject/ManageProject';
import { TypewriterEffect } from '../../components/ui/typewriter-effect';
import './ViewDashboard.css'; 
import AssessFiles from './AssessFiles';
import { Navigation } from "../../components/NavigationButtons";


const ViewDashboard = () => {
  const tabs = [
    {
      title: "Create Project",
      content: <CreateProjectForm />
    },
    {
      title: "Assess Files",
      content: <AssessFiles />
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
      content: <div>Results content here</div> // Assuming you want to add content for this tab
    }
    // ...other tabs
  ];

  return (
    <div className="app-container relative">
      <Navigation />
  
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
     
        </p>
      </div>

      <TypewriterEffect
        words={[{ text: "Manage Project" }]}
        className="typewriter-effect"
      />
      <Tabs tabs={tabs} />
      {/* ...other components */}
      {/* Optionally, if Boxes are still part of your design, include them here */}
      {/* <Boxes className="background-boxes" /> */}
    </div>
  );
};

export default ViewDashboard;

import React from 'react';
import { Boxes } from '../../components/ui/background-boxes';
import { Tabs } from "../../components/ui/tabs";
import CreateProjectForm from './CreateProjectForm';
import ShowProgress from '../ManageProject/ShowProgress';
import ManageProject from '../ManageProject/ManageProject';
import { TypewriterEffect } from '../../components/ui/typewriter-effect';
import './ViewDashboard.css'; 
import AssessFiles from './AssessFiles';
import Navbar from '../../components/NavBar'; 


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
      title: "Edit IP Addresses",
      content: <div>Edit</div>
      
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
    },
    {
      title:"Accessibility Options",
      content: <div>Results content here</div> // Assuming you want to add content for this tab
    }
    // ...other tabs
  ];

  return (
    
    
    <div className="app-container relative pt-[4rem]"> {/* Added padding-top to avoid content overlap */}
       {/* This will be fixed at the top */}
       <div className='navbar'><Navbar /> </div>
       
      <div className="flex flex-col justify-center items-center space-y-4">
        <TypewriterEffect words={[{ text: "Manage Project" }]} className="typewriter-effect" />
        <Tabs tabs={tabs} />
        {/* ...other components */}
      </div>
      {/* Optionally, if you want to include Boxes as a background */}
    
    </div>
  );
};

export default ViewDashboard;

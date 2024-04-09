"use client"; // Place this outside of the function scope

import React, { useState } from 'react';
import './App.css';
import './index.css';
import NavigationButtons from './components/NavigationButtons';
import { Boxes } from './components/ui/background-boxes';
import { Tabs } from "./components/ui/tabs";
import CreateProjectForm  from './components/CreateProjectForm';
import ShowProgress from './components/ShowProgress';


function App() {
  const [count, setCount] = useState(0);

  const tabs = [
    {
      title: "View Dashboard",
      value: "view-dashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <ViewDash />
        </div>
      ),
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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Manage Project</p>
          <DummyContent />
        </div>
      ),
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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Ingest Reconnaissance Files</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Verify Scope",
      value: "verify-scope",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Create Project</p>
          <DummyContent />
        </div>
      ),
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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Create Project</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <Tabs tabs={tabs}>
      
      <Boxes>
        <NavigationButtons />


        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR updates.
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        </Boxes>
    </Tabs>
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

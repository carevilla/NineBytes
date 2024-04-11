// ViewDashboard.jsx
//import './ViewDashboard.css'; // Make sure you have a separate CSS file for ViewDashboard if needed
import { Boxes } from './ui/background-boxes';
import { Tabs } from "./ui/tabs";
import CreateProjectForm from './ui/ManageProject/CreateProjectForm';
import ShowProgress from './ShowProgress';
import ManageProject from './ui/ManageProject/ManageProject';

const ViewDashboard = () => {
  const tabs = [
    {
      title: "View Dashboard",
      value: "view-dashboard",
      content: <CreateProjectForm /> // Assuming CreateProjectForm represents the content for your dashboard
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
    // ...other tabs specific to the dashboard
  ];

  return (
    <div className="dashboard-container"> {/* Make sure this container is styled for your dashboard */}
      <Boxes className="background-boxes" /> {/* Background boxes if they are part of your dashboard */}
      <Tabs tabs={tabs} className="tabs" /> {/* Dashboard specific tabs */}
      {/* ...other components like cards and additional info specific to the dashboard */}
    </div>
  );
};

export default ViewDashboard;

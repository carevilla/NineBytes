import { Link } from 'react-router-dom';
import './NavigationButtons.css'; 

const NavigationButtons = () => {
  return (
    <div className="navbar">
      <Link to="/create-project"><button>Create Project</button></Link>
      <Link to="/assess-files"><button>Assess Files</button></Link>
      <Link to="/edit-ip"><button>Edit IP Addresses</button></Link>
      <Link to="/open-project"><button>Open Project</button></Link>
      <Link to="/delete-project"><button>Delete Project</button></Link>
      <Link to="/view-results"><button>View Results</button></Link>
      <Link to="/accessibility"><button>Accessibility Options</button></Link>
    </div>
  );
};

export default NavigationButtons;

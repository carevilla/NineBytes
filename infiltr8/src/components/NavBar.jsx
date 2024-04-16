import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<div className="topnav">
  <button className="active" href="#home">Dashboard</button>
  <button href="">ManageProject</button>

</div>
  );
};

export default Navbar;

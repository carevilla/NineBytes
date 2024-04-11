import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SparklesPreview from './components/SparklesPreview';
import ManageProject from './components/ui/ManageProject/ManageProject';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    // Perform your authentication logic here
    // If authentication is successful:
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={!isLoggedIn ? <SparklesPreview onLogin={handleLogin} /> : <Navigate to="/manage-project" />} />
          <Route path="/manage-project" element={isLoggedIn ? <ManageProject /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

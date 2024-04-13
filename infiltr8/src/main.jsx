import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewDashboard from "./pages/Dashboard/ViewDashboard";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<ViewDashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);

import React, { useState } from "react";
import { Boxes } from "./components/ui/background-boxes";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import { MultiStepLoader as Loader } from "./components/ui/multi-step-loader";
import { useNavigate } from "react-router-dom";  // Just use useNavigate
import "./App.css";
import "./index.css";

function App() {
  const loadingStates = [
    { text: "Checking Credentials" },
    { text: "Loading Modules" },
    { text: "Welcome to INFILTR8" },
  ];
  const [isJoining, setIsJoining] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    // Simulate a login process
    setTimeout(() => {
      setLoading(false);
      setIsJoining(true); // Set state indicating user has "logged in"
      navigate("/dashboard"); // Navigate to dashboard after "login"
    }, 3000); // Adjust this time as needed
  };

  return (
    <div className="app-container relative">
      <Boxes className="z-0" />
      <TypewriterEffect
        words={[{ text: "INFILTR8" }]}
        className="typewriter-effect"
      />

      {!isJoining ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <button
            className="join-button w-40 h-10 rounded-xl bg-black text-white text-sm"
            onClick={() => setIsJoining(true)}
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-white p-4 rounded-lg">
            <input
              type="text"
              placeholder="Username"
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-2 p-2 border rounded w-full"
            />
            <button
              onClick={handleLogin}
              className="w-full h-10 bg-blue-500 text-white rounded-lg"
            >
              Log In
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { MultiStepLoader as Loader } from "./components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Checking Credentials",
  },
  {
    text: "Loading Modules",
  },
  {
    text: "Welcome to INFILTR8",
  },
];
 
export function MultiStepLoaderLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    if (loading) {
      // Suppose loading takes 6 seconds in total, adjust as needed
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/dashboard'); // This will navigate to the Dashboard component after loading
      }, 6000); // The timeout should match the total loading duration

      return () => clearTimeout(timer); 
    }
  }, [loading, navigate]);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      
      <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{ boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset" }}
      >
        Login
      </button>
      
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}

"use client";

import { SparklesCore } from "./ui/sparkles";

import PropTypes from 'prop-types';
export function SparklesPreview({ onLogin }) {
  // Component code here
}

SparklesPreview.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
function SparklesPreview({ onLogin }) {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-7xl font-bold text-center text-white relative z-10">
        INFILTR8
      </h1>
      <div className="w-full h-full relative flex justify-center items-center">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute top-0 left-0 w-full h-full"
          particleColor="#FFFFFF"
        />
      
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute top-0 left-0 w-full h-full bg-black [mask-image:radial-gradient(at_top,transparent_20%,black_80%)]"></div>
        
        {/* Login Card */}
        <LoginButtonWithCard onLogin={onLogin} />
      </div>
    </div>
  );
}

export default SparklesPreview;

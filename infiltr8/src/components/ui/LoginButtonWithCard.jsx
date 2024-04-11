import React, { useState } from "react";

export default function LoginButtonWithCard() {
  const [showCard, setShowCard] = useState(false);

  const loginCard = (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center p-4 bg-white rounded-md shadow-lg z-10">
        <form className="w-full max-w-xs">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  const loginButton = (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
        onClick={() => setShowCard(true)}
      >
        Login
      </button>
    </div>
  );

  return (
    <div>
      {showCard ? loginCard : loginButton}
    </div>
  );
}

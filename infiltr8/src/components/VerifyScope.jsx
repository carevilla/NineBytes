// VerifyScope.jsx
import React, { useState } from 'react';

const VerifyScope = () => {
  const [scope, setScope] = useState('');

  const handleScopeChange = (event) => {
    setScope(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Verify the scope with the backend server or some validation logic
    alert(`Scope "${scope}" has been verified.`);
  };

  return (
    <div className="verify-scope">
      <h1>Verify Attack Scope</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="scope">Scope:</label>
        <input
          type="text"
          id="scope"
          name="scope"
          value={scope}
          onChange={handleScopeChange}
          placeholder="Enter IP range, URLs, etc."
        />
        <button type="submit">Verify Scope</button>
      </form>
    </div>
  );
};

export default VerifyScope;

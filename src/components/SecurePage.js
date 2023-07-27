// components/SecurePage.js
import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

const SecurePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace 'validUserId' and 'validPassword' with your predefined user ID and password.
    if (userId === "admin" && password === "admin123") {
      setLoggedIn(true);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  if (loggedIn) {
    return <EmployeeList />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SecurePage;

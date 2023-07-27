import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";

import SecurePage from "./components/SecurePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Employee Management App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/list">Employee List</Link>
            </li>
            <li>
              <Link to="/add">Add Employee</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Add Employee Page */}
          <Route path="/add" element={<EmployeeForm />} />

          {/* Employee List Page */}
          <Route path="/list" element={<SecurePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

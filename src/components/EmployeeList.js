/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/api/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <strong>Name:</strong> {employee.name} <br />
            <strong>Email:</strong> {employee.email} <br />
            <strong>Mobile:</strong> {employee.mobile} <br />
            <strong>Photos:</strong>
            <ul>
              {employee.photos.map((photo, index) => (
                <li key={index}>
                  {/* Apply CSS styles to set a fixed width and height for the images */}
                  <img
                    src={photo}
                    alt={`Employee ${employee._id} - Photo ${index + 1}`}
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

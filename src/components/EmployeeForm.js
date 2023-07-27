/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    photos.forEach((photo) => formData.append("photos", photo));
    try {
      const response = await axios.post("/api/employees", formData);
      toast.success("Employee added successfully!");

      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setMobile("");
      setPhotos([]);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </label>
        <label>
          Photos:
          <input type="file" multiple onChange={(e) => setPhotos([...e.target.files])} />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;

import React, { useEffect, useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import UserListComponent from './components/UserListComponent';
import axios from 'axios'; // Import the axios library

function App() {
  const [users, setUsers] = useState([]);

  // Handle form submission
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    try {
      // Send POST request using axios
      const response = await axios.post('http://localhost:8080/demo', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = response.data;
      console.log(data);
      getUsers(); // Update user list after submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Fetch users from the server
  const getUsers = async () => {
    try {
      // Send GET request using axios
      const response = await axios.get('http://localhost:8080/demo');
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app-container">
      <h1>React User Management</h1>
      <div className="form-container">
        <h2>Add User</h2>
        <FormComponent onSubmit={handleSubmit} />
      </div>
      <div className="user-list-container">
        <h2>User List</h2>
        <UserListComponent users={users} />
      </div>
    </div>
  );
}

export default App;

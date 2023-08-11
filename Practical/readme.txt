MERN Stack Overview:

MongoDB: A NoSQL database for storing data.
Express: A web application framework for building APIs.
React: A JavaScript library for building user interfaces.
Node.js: A runtime environment for executing JavaScript code on the server.

1.Create Project Directory:
Create a directory for your project. Open your terminal and run:

mkdir mern-crud-app
cd mern-crud-app

2. npm init = nitialize Node.js App

3.install Dependencies: = 
npm install express mongoose body-parser cors
npm install react react-dom react-scripts

4.Project Structure:
mern-crud-app/
├── backend/
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── api.js
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.js
│   │   │   └── ...
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── ...
├── package.json
└── ...


5.Backend - Express Server:

In the backend folder:

models/user.js: Define a basic user schema using Mongoose.
routes/api.js: Create API routes for handling user-related CRUD operations.
server.js: Set up the Express server, connect to MongoDB, and configure middleware.
Frontend - React App:

6. In the frontend folder:

src/components/LoginForm.js: Create a simple login form with username and password fields.
src/App.js: Set up the main React component, import the LoginForm, and render it.
src/index.js: Render the App component into the HTML root element.
Explanation:

7. MongoDB: MongoDB is used to store user data. 
 it stores user data with the help of Mongoose, which simplifies the interaction between the Node.js application and the MongoDB database. 
 The user schema and model are defined in the user.js.allowing us to create, read, update, and delete user records in the MongoDB collection.


//Older code
import React, { useEffect, useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import UserListComponent from './components/UserListComponent';

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    getUsers();
  };

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/demo', {
      method: 'GET'
    });
    const data = await response.json();
    setUsers(data);
  };

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

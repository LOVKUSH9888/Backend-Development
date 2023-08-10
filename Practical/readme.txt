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

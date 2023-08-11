// Import necessary modules
const express = require('express');
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
const bodyParser = require('body-parser'); // Parse JSON in request bodies
const mongoose = require('mongoose'); // MongoDB ODM
const demoRoutes = require('./routes/demoRoutes'); // Import demoRoutes for routing

// Asynchronous function to connect to the database
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern_crud_app'); // Connect to MongoDB
        console.log('Database connected'); // Log successful database connection
    } catch (error) {
        console.error('Database connection error:', error); // Log any database connection errors
    }
}

// Call the main function and handle any errors
main().catch(err => console.log(err));

// Create an instance of the Express server
const server = express();

// Enable Cross-Origin Resource Sharing for the server
server.use(cors());

// Parse JSON in request bodies
server.use(bodyParser.json());

// Use the demoRoutes for routes starting with '/demo'
server.use('/demo', demoRoutes);

// Start the server and listen on port 8080
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); // Log that the server has started
});

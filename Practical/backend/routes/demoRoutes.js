// Import the necessary modules
const express = require("express");
const User = require("../models/user"); // Import the User model

// Create a new router instance
const router = express.Router();

// Define a route to handle POST requests for creating a new user
router.post("/", async (req, res) => {
  try {
    // Create a new user instance based on the User model
    let user = new User();
    user.username = req.body.username; // Set the username from the request body
    user.password = req.body.password; // Set the password from the request body
    const doc = await user.save(); // Save the user to the database

    console.log(doc); // Log the saved user document
    res.json(doc); // Respond with the saved user document
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" }); // Handle errors with a 500 status response
  }
});

// Define a route to handle GET requests for fetching all users
router.get("/", async (req, res) => {
  try {
    const docs = await User.find({}); // Retrieve all users from the database
    res.json(docs); // Respond with the array of user documents
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" }); // Handle errors with a 500 status response
  }
});

// Export the router for use in other parts of the application
module.exports = router;

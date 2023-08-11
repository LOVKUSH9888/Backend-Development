// Import the mongoose library
const mongoose = require('mongoose');

// Define the user schema using mongoose.Schema
const userSchema = new mongoose.Schema({
    username: String,     // Field for storing the username as a string
    password: String      // Field for storing the password as a string
});

// Create a mongoose model named 'User' using the user schema
module.exports = mongoose.model('User', userSchema);

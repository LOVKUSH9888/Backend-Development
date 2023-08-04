const express = require('express');
const app = express();



//connecting the DB with the mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');



// setting the express sever
app.listen(3000, (req, res) => {
    console.log("server is running")
})
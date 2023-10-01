//Import Area 
const express = require("express");
const app = express();

//for parsing the Json
const bodyParser = require('body-parser');

//Importing the mongoose
const mongoose = require("mongoose");

//Importing the .env
require("dotenv").config();

//using the .env variable
const port = process.env.PORT || 5000;


//Using the JSON middleware
app.use(bodyParser.json());




//Adding the connection String
const dbUrl = `mongodb+srv://lky9888:Lov9888@crud.nnzgqii.mongodb.net/?retryWrites=true&w=majority`;

//Connecting to the database-server
mongoose
  .connect(dbUrl)
  .then((d) => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error");
  });


/*const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/

//Creating a Schema = Its a class creation
/* const taskSchema = mongoose.model('taskSchema', {
    title: String,
    description: String
}) */

//Now creating the Object from the above class 
const Task = mongoose.model('Task', {
    title: String,
    description: String
});


// Create a new task
app.post('/tasks', (req, res) => {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };
  
    Task.create(newTask, (err, task) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json(task);
      }
    });
  });
  



//Listening on port
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});



//Import Area 
const express = require("express");
const app = express();

//Importing the mongoose
const mongoose = require("mongoose");

//Importing the .env
require("dotenv").config();

//using the .env variable
const port = process.env.PORT || 5000;





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
const taskSchema = mongoose.model('TaskSchema', {
    title: String,
    description: String
})

//Now creating the Object from the above class 
const Task = mongoose.model('Task', taskSchema);





//Listening on port
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});



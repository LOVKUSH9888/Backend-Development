const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//Using Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connecting to MongoDB
mongoose
  .connect(`mongodb://127.0.0.1:27017/crud`)
  .then((d) => console.log("connected"))
  .catch((e) => console.log("error", e));

//Creating a Schema
// Create a schema for your data (e.g., a simple Task schema)
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Task = mongoose.model("Task", taskSchema);

// Create a new task
//object.method(string,function);
//app.method();

//Creating API-ENDPoints-Routes
app.get("/", function (req, res) {
  /* res.status(200)
  res.send('Hello World')*/
  //Or simply
  //res.status(200).send(("Lovkush"))
  res.status(200).json({ message: "Hello world again!", name: "Lovkush", Class: "10th" });
});

// Listening on port 5000 by default or a custom port from environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on port", port);
});

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
// ### Database Connection = By Connection String
// *** mongoose.connect('mongodb://127.0.0.1:27017/test'); Which returns a Promise
mongoose
  .connect(`mongodb://127.0.0.1:27017/crud`)
  .then((d) => console.log("connected"))
  .catch((e) => console.log("error", e));

// ### the save method, which returns a promise.
// *** kitty.save().then(() => console.log('meow')); */

//Creating a Schema

// ### Creating Object => const person = new Object();
// class Person {
//   constructor(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//   }
// }

// const person = new Person('testFirstName', 'testLastName');

// console.log(person.firstName); // testFirstName
// console.log(person.lastName); // testLastName

// *** const kitty = new Cat({ name: 'Zildjian' });
let studentSchema = new mongoose.Schema(
  {
    StudentId: Number,
    Name: String,
    Roll: Number,
    Birthday: Date,
    Address: String,
  },
  {
    timestamp: true,
  }
);

// ### Defining a Model: = Method.
// *** const Cat = mongoose.model('Cat', { name: String });
const Task = mongoose.model("Task", studentSchema);

//Testing
//object.method(string,function);
//app.method();
app.get("/test", (req, res) => {
  res.status(200).send("LOVKUSH");
});

//C = CREATE
app.get("/api/student/create", (req, res) => {
  console.log(req.query.Name);

  if (req.query.Name !== undefined) {
    let studentObject = new Student({
      StudentId: 1,
      Name: "Lovkush",
      Roll: 1,
      Birthday: 2000,
      Address: chandigarh,
    });
    studentObject
      .save()
      .then((d) => {
        console.log("Saved");
        res.status(201).json({
          msg: "Student Created",
        });
      })
      .catch((e) => {
        res.status(400).json({
          msg: "error",
          error: e,
        });
      });
  } else {
    res.status(400).json({
      msg: "Query Parameters are required",
    });
  }
});

//Creating API-ENDPoints-Routes
// app.get("/", function (req, res) {
//   /* res.status(200)
//   res.send('Hello World')*/
//   //Or simply
//   //res.status(200).send(("Lovkush"))
//   // console.log(req.query); //Object.propery = req.query
//   // console.log(req.query.name);
//   // console.log(req.query.surname);
//   res
//     .status(200)
//     .json({ message: "Hello world again!", name: "Lovkush", Class: "10th" });
// });

// Listening on port 5000 by default or a custom port from environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on port", port);
});

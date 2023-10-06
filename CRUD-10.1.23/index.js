const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// todo: Using Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connecting to MongoDB
// ### Database Connection = By Connection String
// mongoose.connect('mongodb://127.0.0.1:27017/test'); Which returns a Promise
mongoose
  .connect(`mongodb://127.0.0.1:27017/crud`)
  .then((d) => console.log("connected"))
  .catch((e) => console.log("error", e));

// ### the save method, which returns a promise.
// kitty.save().then(() => console.log('meow')); */

// Creating a Schema

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

// const kitty = new Cat({ name: 'Zildjian' });

///Model Schema
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
const Student = mongoose.model("Student", studentSchema);

//Testing-1
//object.method(string,function);
//app.method();
app.get("/test", (req, res) => {
  const name = req.query.name || "DefaultName"; // Provide a default value if 'name' is missing
  console.log(typeof name);
  res.status(200).send(name + " LOVKUSH");
});

//Testing 2 :-
app.post("/test2", function (req, res) {
  console.log(req.body.name);
  const name = req.body.name;
  res.status(200).send(name);
});

//FIXME: C = CREATE
// This code handles a GET request to the "/api/student/create" route
app.get("/api/student/create", (req, res) => {
  // Log the "Name" query parameter from the request
  console.log(req.query.Name);

  // Check if the "Name" query parameter is not undefined
  if (req.query.Name !== undefined) {
    // If the "Name" parameter is provided, create a new Student object
    let studentObject = new Student({
      StudentId: req.query.StudentId,
      Name: req.query.Name,
      Roll: req.query.Roll,
      Birthday: req.query.Birthday,
      Address: req.query.Address,
    });

    // Save the new student object to a database (assuming "Student" is a model or schema)
    studentObject
      .save()
      .then((d) => {
        // If the student is successfully saved, log a message and send a 201 (Created) response
        console.log("Saved");
        res.status(201).json({
          msg: "Student Created",
        });
      })
      .catch((e) => {
        // If there's an error while saving the student, send a 400 (Bad Request) response with an error message
        res.status(400).json({
          msg: "error",
          error: e,
        });
      });
  } else {
    // If the "Name" query parameter is missing, send a 400 (Bad Request) response with an error message
    res.status(400).json({
      msg: "Query Parameters are required",
    });
  }
});

// FIXME: READ = R

app.get("/api/getAllStudents", (req, res) => {
  //db.collection.find()
  //Model.find();

  //db.collection = Model

  Student.find()
    .then((d) => {
      res.status(200).json({
        mgs: "ok",
        data: d,
      });
    })
    .catch((e) => {
      res.status(400).json({
        mgs: "err" + e,
      });
    });
});

//FIXME: DELETE = D
app.delete("/api/student/:studentId", (req, res) => {

  console.log(req.params.studentId);
  res.status(200).json({
    name : "love"
  })
  
})

//Creating API-ENDPoints-Routes
// app.get("/", function (req, res) {
//   /* res.status(200)
// res.send('Hello World')
//Or simply
//res.status(200).send(("Lovkush"))
// console.log(req.query); //Object.propery = req.query
// console.log(req.query.name);
// console.log(req.query.surname);
//   res
//     .status(200)
//     .json({ message: "Hello world again!", name: "Lovkush", Class: "10th" });
// });

// Listening on port 5000 by default or a custom port from environment variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on port", port);
});

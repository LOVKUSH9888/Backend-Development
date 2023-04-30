const express = require('express');
const BodyParser = require('body-parser');


const app = express();



app.get('/', (req, res) => {
  res.send('This is the Home Page');
})

app.post('/', (req, res) => {
  res.send('Thanks for Posting man');
})

app.listen(3000, () => {
  console.log("Port are working");
})
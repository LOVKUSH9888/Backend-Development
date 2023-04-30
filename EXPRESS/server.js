const express = require('express')
const app = express();


app.get('/', (req, res) => {
  res.send('This is the Home Page');
})

app.get('/Contact', (req, res) => {
  res.send('This is the Contact Page');
})

app.get('/About', (req, res) => {
  res.send('This is the About Page');
})


app.listen(3000, () => {
  console.log("Port are working");
})


//revision
//solving - HaxkerEarth-Airbus ideathon  + Namha Yatri - 29.4.23 @ 8.46pm





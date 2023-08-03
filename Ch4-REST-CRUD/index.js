// app.js or index.js
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port


const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];


// GET endpoint/API to fetch all data
app.get('/api/data', (req, res) => {
    res.json(data);
  });




// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});




///result check - http://localhost:3000/api/data
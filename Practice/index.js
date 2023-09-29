const express = require('express')
const app = express()

require('dotenv').config();

app.post('/love', (req, res) => {
  res.json({"msg" : "ok"})
})

const port = process.env.PORT || 3000; // Use port 3000 if PORT is not defined in the environment

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

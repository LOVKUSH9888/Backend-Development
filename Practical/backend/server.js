const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const DB_URI = 'mongodb://localhost:27017/mern_crud_app';

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log("Server is running on port");
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

// Load middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up mongoose connection
const mongoURI = require('./config/keys').mongoURI;
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.log(error));

// Start server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

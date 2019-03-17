const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

// Load middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

// Set up mongoose connection
const mongoURI = require('./config/keys').mongoURI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(error => console.log(error));

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

// Start server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

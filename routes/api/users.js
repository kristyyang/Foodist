const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const crypto = require('crypto');
const mailer = require('../../utils/mailer');

const registrationValidation = require('../../validation/registration');
const loginValidation = require('../../validation/login');

const user = require('../../models/User');

router.post('/register', (req, res) => {
  const { errors, isValid } = registrationValidation(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });

      // Send a confirmation email
      newUser.token = crypto.randomBytes(64).toString('hex');
      const subject = 'Welcome to Foodist!!!';
      const text = 'Please verify your email address';
      const html = `
        Hi ${newUser.name}. Please confirm your email address to complete your Foodist account:
        <a href="http://localhost:5000/users/confirm">http://localhost:5000/confirm/${newUser.token}</a>
      `;
      mailer
        .sendMail(newUser.email, subject, text, html)
        .then(() => console.log(`Email sent to ${newUser.name} <${newUser.email}>`))
        .catch(err => console.log(err));
    }
  });
});

router.get('/login', (req, res) => {
  const { errors, isValid } = loginValidation(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
  });

  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      const payload = { id: user.id, name: user.name };
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: `Bearer ${token}`
        });
      });
    } else {
      errors.password = 'Password incorrect';
      return res.status(400).json(errors);
    }
  });
});

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;

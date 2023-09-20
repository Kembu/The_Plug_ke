// ...
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('../models/userModel');

// User registration route
app.post('/api/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Create a new user instance
      const newUser = new User({
        name,
        email,
        password,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
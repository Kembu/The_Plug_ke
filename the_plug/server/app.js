const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./db');

// Import the User model
const User = require('./models/userModel'); 
console.log('Anything');

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection URL
const mongourl = 'mongodb+srv://ThePlugKE:PlugKE@theplugke.bxcnytv.mongodb.net/';

app.listen(5000, () => {
  console.log("Server started");
});

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected");
  })
  .catch((e) => {
    console.log(e);
  });

// Define a route for /api/signup
app.post('/api/signup', async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, password } = req.body;

    // Perform any necessary validation (e.g., check for duplicate emails)
    
    // If validation passes, create a new user
    const newUser = new User({ name, email, password });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    // Handle errors (e.g., validation errors, database errors)
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
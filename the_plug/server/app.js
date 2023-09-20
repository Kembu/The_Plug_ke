const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import the User model
const User = require('./models/userModel'); 

// MongoDB connection URL
const mongourl = 'mongodb+srv://ThePlugKE:PlugKE@theplugke.bxcnytv.mongodb.net/';

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
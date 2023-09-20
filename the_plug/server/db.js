// Import the 'express' library and create an Express.js application.
const express = require('express');
const app = express();

// Import the 'mongoose' library for MongoDB integration.
const mongoose = require('mongoose');

// Use middleware to parse incoming JSON requests.
app.use(express.json());

// MongoDB connection URL. Replace with your actual MongoDB URL.
const mongourl = 'mongodb+srv://ThePlugKE:PlugKE@theplugke.bxcnytv.mongodb.net/';

// Connect to the MongoDB database.
mongoose
    .connect(mongourl, {
        useNewUrlParser: true,
    })
    .then(() => {
        // If the connection is successful, log a message to the console.
        console.log("Db connected");
    })
    .catch((e) => {
        // If there's an error during the connection, log the error to the console.
        console.log(e);
    });
    
// Start the Express.js server and make it listen on port 5000.
app.listen(5000, () => {
    // Once the server is started, log a message to the console.
    console.log("Server started");
});

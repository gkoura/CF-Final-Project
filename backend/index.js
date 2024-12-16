const express = require('express');
const mongoose = require('mongoose');

const port = 3000;

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(
        () => { console.log('Connection to MongoDB established')},
        err => { console.log('Failed to connect to MongoDB')}
    );

// Example route
app.get('/', (req, res) => {
    res.send('MongoDB is connected to Express!');
});

module.exports = app;

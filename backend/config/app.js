// app.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const registrationRoute = require('./routes/registrationRoute');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', registrationRoute);

module.exports = app;

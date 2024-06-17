const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const petRoute = require('./routes/pet');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/furr-fluff-spa', { useNewUrlParser: true, useUnifiedTopology: true });

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/user', userRoute);
app.use('/pet', petRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

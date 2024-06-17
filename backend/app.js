const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Use body-parser to parse JSON data
app.use(bodyParser.json());

// Import routes
const dataRoutes = require('./routes/dataRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Use routes
app.use('/api', dataRoutes);
app.use('/', viewRoutes);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

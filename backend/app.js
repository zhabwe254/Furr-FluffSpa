const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingController = require('./app/controllers/bookingController');
const customerController = require('./app/controllers/customerController');
const connectDB = require('./config/database');
const config = require('./config/config');

// Connect to the database
connectDB(config.db.uri);

// Enable CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use('/api/bookings', bookingController);
app.use('/api/customers', customerController);

// Start the server
const port = config.port;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;

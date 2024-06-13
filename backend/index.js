const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./app/routes/userRoute');
const petRoutes = require('./app/routes/petRoute');
const bookingRoutes = require('./app/routes/bookingRoute');
const customerRoutes = require('./app/routes/customerRoute');
const connectDB = require('./config/database');
const config = require('./config/config');

const app = express();

// Connect to the database
connectDB(config.db.uri);

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/customers', customerRoutes);

require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

// Database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});
// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

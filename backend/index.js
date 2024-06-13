require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const petRoutes = require('./routes/petRoute');
const bookingRoutes = require('./routes/bookingRoute');
const customerRoutes = require('./routes/customerRoute');
const connectDB = require('./config/database');

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/customers', customerRoutes);

// Database connection
const dbUri = process.env.DATABASE_URL;
if (!dbUri) {
    console.error('DATABASE_URL is not defined');
    process.exit(1);
}

connectDB(dbUri);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


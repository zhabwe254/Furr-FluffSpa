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

// Start the server
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const bookingRoute = require('./routes/bookingRoute');
const customerRoute = require('./routes/customerRoute');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/bookings', bookingRoute);
app.use('/api/customers', customerRoute);

// Route to serve the frontend index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

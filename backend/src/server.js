// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const petController = require('./controllers/petController');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userController);
app.use('/api/pets', petController);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

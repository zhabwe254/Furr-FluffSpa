# src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection string from environment variables
const mongoUrl = process.env.MONGO_URL || 'your_default_mongo_url_here';

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  console.log('Connected to the database');

  // Create index using createIndexes method
  const myCollection = mongoose.connection.collection('mycollection');
  myCollection.createIndex({ fieldName: 1 }, { unique: true }, (err, result) => {
    if (err) {
      console.error('Index creation error:', err);
    } else {
      console.log('Index created:', result);
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Add a simple route to verify the server is working
app.get('/', (req, res) => {
  res.send('Server is running');
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Update MongoDB URL to use mongodb+srv protocol
const mongoUrl = 'mongodb+srv://gmarkd:GKpmZZ9A5wJGT3lB@cluster0.jiyzrgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to the database');

  // Create index using createIndexes method
  const myCollection = mongoose.connection.collection('mycollection');
  myCollection.createIndexes({ fieldName: 1 }, { unique: true }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
});

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

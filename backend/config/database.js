const mongoose = require('mongoose');

const connectDB = (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to the database');
    });
};

module.exports = connectDB;

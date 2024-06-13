const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongosh "mongodb+srv://cluster0.jiyzrgy.mongodb.net/" --apiVersion 1 --username gmarkd --password GKmpZZ9A5wJGT3IB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection faild:', error.message);
    process.exit(1); // Exit process on connection failure
  }
};

module.exports = connectDB;

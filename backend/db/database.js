const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('DB_URI=mongodb://Tshepiso:%40Tshepiso1971@localhost:27017/mydatabase', {
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

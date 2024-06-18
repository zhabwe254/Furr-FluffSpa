const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  pet: {
    name: String,
    type: String,
    age: Number
  }
});

module.exports = mongoose.model('User', userSchema);

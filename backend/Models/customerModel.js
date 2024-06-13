// customerModel.js

// Schema definition for Customer model
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    // Define customer schema fields
});

module.exports = mongoose.model('Customer', customerSchema);

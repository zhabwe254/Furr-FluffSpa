const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Data', dataSchema);

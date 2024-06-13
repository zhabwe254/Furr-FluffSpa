const mongoose = require(&#39;mongoose&#39;);
const bookingSchema = new mongoose.Schema({
customerName: String,
serviceName: String,
date: Date,
time: String,
status: String
});
const Booking = mongoose.model(&#39;Booking&#39;, bookingSchema);
module.exports = Booking;

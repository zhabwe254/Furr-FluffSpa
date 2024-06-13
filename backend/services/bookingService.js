const Booking = require(&#39;../models/bookingModel&#39;);
class BookingService {
async getAllBookings() {
return Booking.find().exec();
}
async getBookingById(id) {
return Booking.findById(id).exec();
}
async createBooking(booking) {
return Booking.create(booking);
}
async updateBooking(id, booking) {

return Booking.findByIdAndUpdate(id, booking, { new: true }).exec();
}
async deleteBooking(id) {
return Booking.findByIdAndRemove(id).exec();
}
}
module.exports = BookingService;

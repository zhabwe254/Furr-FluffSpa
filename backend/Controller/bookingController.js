const express = require(&#39;express&#39;);
const router = express.Router();
const Booking = require(&#39;../models/bookingModel&#39;);
const bookingService = require(&#39;../services/bookingService&#39;);
// Get all bookings
router.get(&#39;/bookings&#39;, async (req, res) =&gt; {
try {
const bookings = await Booking.find().exec();
res.json(bookings);
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to retrieve bookings&#39; });
}

});
// Get a booking by ID
router.get(&#39;/bookings/:id&#39;, async (req, res) =&gt; {
try {
const id = req.params.id;
const booking = await Booking.findById(id).exec();
if (!booking) {
res.status(404).json({ message: &#39;Booking not found&#39; });
} else {
res.json(booking);
}
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to retrieve booking&#39; });
}
});
// Create a new booking
router.post(&#39;/bookings&#39;, async (req, res) =&gt; {
try {
const booking = new Booking(req.body);
await booking.save();
res.json(booking);
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to create booking&#39; });
}
});
// Update a booking
router.put(&#39;/bookings/:id&#39;, async (req, res) =&gt; {
try {
const id = req.params.id;
const booking = await Booking.findByIdAndUpdate(id, req.body, { new: true }).exec();
if (!booking) {
res.status(404).json({ message: &#39;Booking not found&#39; });
} else {
res.json(booking);
}
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to update booking&#39; });
}
});
// Delete a booking
router.delete(&#39;/bookings/:id&#39;, async (req, res) =&gt; {

try {
const id = req.params.id;
await Booking.findByIdAndRemove(id).exec();
res.json({ message: &#39;Booking deleted successfully&#39; });
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to delete booking&#39; });
}
});

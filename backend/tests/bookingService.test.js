const Booking = require('../app/models/bookingModel');
const bookingService = require('../app/services/bookingService');

describe('Booking Service', () => {
    let bookingId;

    beforeAll(async () => {
        const booking = new Booking({
            customerName: 'John Doe',
            serviceName: 'Grooming',
            date: new Date(),
            time: '10:00',
            status: 'Scheduled'
        });
        const savedBooking = await booking.save();
        bookingId = savedBooking._id;
    });

    afterAll(async () => {
        await Booking.deleteMany({});
    });

    it('should get all bookings', async () => {
        const bookings = await bookingService.getAllBookings();
        expect(bookings).toBeInstanceOf(Array);
    });

    it('should get a booking by ID', async () => {
        const booking = await bookingService.getBookingById(bookingId);
        expect(booking).toHaveProperty('customerName', 'John Doe');
    });

    it('should create a new booking', async () => {
        const booking = await bookingService.createBooking({
            customerName: 'Jane Doe',
            serviceName: 'Bathing',
            date: new Date(),
            time: '11:00',
            status: 'Scheduled'
        });
        expect(booking).toHaveProperty('customerName', 'Jane Doe');
    });

    it('should update a booking', async () => {
        const booking = await bookingService.updateBooking(bookingId, { status: 'Completed' });
        expect(booking).toHaveProperty('status', 'Completed');
    });

    it('should delete a booking', async () => {
        const result = await bookingService.deleteBooking(bookingId);
        expect(result).toHaveProperty('_id', bookingId);
    });
});

const Booking = require('../app/models/bookingModel');

describe('Booking Model', () => {
    it('should create a new booking', async () => {
        const booking = new Booking({
            customerName: 'John Doe',
            serviceName: 'Grooming',
            date: new Date(),
            time: '10:00',
            status: 'Scheduled'
        });
        const savedBooking = await booking.save();
        expect(savedBooking).toHaveProperty('customerName', 'John Doe');
    });

    it('should not create a booking without required fields', async () => {
        const booking = new Booking({});
        let err;
        try {
            await booking.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeDefined();
    });
});

const request = require('supertest');
const app = require('../app');
const Booking = require('../app/models/bookingModel');

describe('Booking Controller', () => {
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
        const res = await request(app).get('/api/bookings');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });

    it('should get a booking by ID', async () => {
        const res = await request(app).get(`/api/bookings/${bookingId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('customerName', 'John Doe');
    });

    it('should create a new booking', async () => {
        const res = await request(app)
            .post('/api/bookings')
            .send({
                customerName: 'Jane Doe',
                serviceName: 'Bathing',
                date: new Date(),
                time: '11:00',
                status: 'Scheduled'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('customerName', 'Jane Doe');
    });

    it('should update a booking', async () => {
        const res = await request(app)
            .put(`/api/bookings/${bookingId}`)
            .send({
                status: 'Completed'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'Completed');
    });

    it('should delete a booking', async () => {
        const res = await request(app).delete(`/api/bookings/${bookingId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Booking deleted successfully');
    });
});

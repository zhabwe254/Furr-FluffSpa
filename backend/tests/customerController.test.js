const request = require('supertest');
const app = require('../app');
const Customer = require('../app/models/customerModel');

describe('Customer Controller', () => {
    let customerId;

    beforeAll(async () => {
        const customer = new Customer({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890'
        });
        const savedCustomer = await customer.save();
        customerId = savedCustomer._id;
    });

    afterAll(async () => {
        await Customer.deleteMany({});
    });

    it('should get all customers', async () => {
        const res = await request(app).get('/api/customers');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });

    it('should get a customer by ID', async () => {
        const res = await request(app).get(`/api/customers/${customerId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'John Doe');
    });

    it('should create a new customer', async () => {
        const res = await request(app)
            .post('/api/customers')
            .send({
                name: 'Jane Doe',
                email: 'jane@example.com',
                phone: '0987654321'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Jane Doe');
    });

    it('should update a customer', async () => {
        const res = await request(app)
            .put(`/api/customers/${customerId}`)
            .send({
                phone: '1111111111'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('phone', '1111111111');
    });

    it('should delete a customer', async () => {
        const res = await request(app).delete(`/api/customers/${customerId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Customer deleted successfully');
    });
});

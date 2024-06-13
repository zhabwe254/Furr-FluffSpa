const Customer = require('../app/models/customerModel');

describe('Customer Model', () => {
    it('should create a new customer', async () => {
        const customer = new Customer({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890'
        });
        const savedCustomer = await customer.save();
        expect(savedCustomer).toHaveProperty('name', 'John Doe');
    });

    it('should not create a customer without required fields', async () => {
        const customer = new Customer({});
        let err;
        try {
            await customer.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeDefined();
    });
});

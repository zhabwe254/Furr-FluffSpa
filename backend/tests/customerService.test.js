const Customer = require('../app/models/customerModel');
const customerService = require('../app/services/customerService');

describe('Customer Service', () => {
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
        const customers = await customerService.getAllCustomers();
        expect(customers).toBeInstanceOf(Array);
    });

    it('should get a customer by ID', async () => {
        const customer = await customerService.getCustomerById(customerId);
        expect(customer).toHaveProperty('name', 'John Doe');
    });

    it('should create a new customer', async () => {
        const customer = await customerService.createCustomer({
            name: 'Jane Doe',
            email: 'jane@example.com',
            phone: '0987654321'
        });
        expect(customer).toHaveProperty('name', 'Jane Doe');
    });

    it('should update a customer', async () => {
        const customer = await customerService.updateCustomer(customerId, { phone: '1111111111' });
        expect(customer).toHaveProperty('phone', '1111111111');
    });

    it('should delete a customer', async () => {
        const result = await customerService.deleteCustomer(customerId);
        expect(result).toHaveProperty('_id', customerId);
    });
});

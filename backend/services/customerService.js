const Customer = require(&#39;../models/customerModel&#39;);
class CustomerService {
async getAllCustomers() {
return Customer.find().exec();
}
async getCustomerById(id) {
return Customer.findById(id).exec();
}
async createCustomer(customer) {
return Customer.create(customer);
}
async updateCustomer(id, customer) {
return Customer.findByIdAndUpdate(id, customer, { new: true }).exec();
}
async deleteCustomer(id) {
return Customer.findByIdAndRemove(id).exec();
}
}
module.exports = CustomerService;

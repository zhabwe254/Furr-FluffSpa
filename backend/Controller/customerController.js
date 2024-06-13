const express = require(&#39;express&#39;);
const router = express.Router();
const Customer = require(&#39;../models/customerModel&#39;);
const customerService = require(&#39;../services/customerService&#39;);
// Get all customers
router.get(&#39;/customers&#39;, async (req, res) =&gt; {
try {
const customers = await Customer.find().exec();
res.json(customers);
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to retrieve customers&#39; });
}
});
// Get a customer by ID
router.get(&#39;/customers/:id&#39;, async (req, res) =&gt; {
try {
const id = req.params.id;
const customer = await Customer.findById(id).exec();
if (!customer) {
res.status(404).json({ message: &#39;Customer not found&#39; });
} else {
res.json(customer);
}
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to retrieve customer&#39; });
}
});
// Create a new customer
router.post(&#39;/customers&#39;, async (req, res) =&gt; {
try {

const customer = new Customer(req.body);
await customer.save();
res.json(customer);
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to create customer&#39; });
}
});
// Update a customer
router.put(&#39;/customers/:id&#39;, async (req, res) =&gt; {
try {
const id = req.params.id;
const customer = await Customer.findByIdAndUpdate(id, req.body, { new: true }).exec();
if (!customer) {
res.status(404).json({ message: &#39;Customer not found&#39; });
} else {
res.json(customer);
}
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to update customer&#39; });
}
});
// Delete a customer
router.delete(&#39;/customers/:id&#39;, async (req, res) =&gt; {
try {
const id = req.params.id;
await Customer.findByIdAndRemove(id).exec();
res.json({ message: &#39;Customer deleted successfully&#39; });
} catch (error) {
console.error(error);
res.status(500).json({ message: &#39;Failed to delete customer&#39; });
}
});

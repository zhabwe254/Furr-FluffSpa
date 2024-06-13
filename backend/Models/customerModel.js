const mongoose = require(&#39;mongoose&#39;);
const customerSchema = new mongoose.Schema({
name: String,
email: String,
phone: String

});
const Customer = mongoose.model(&#39;Customer&#39;, customerSchema);
module.exports = Customer;

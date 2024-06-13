const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingController = require('./app/controllers/bookingController');
const customerController = require('./app/controllers/customerController');
const connectDB = require('./config/database');
const config = require('./config/config');

// Connect to the database
mongoose.connect(&#39;mongodb://localhost/furr-fluff-spa&#39;, { useNewUrlParser: true,
useUnifiedTopology: true });
// Enable CORS
app.use(cors());
// Set up routes
app.use(&#39;/api&#39;, bookingController);
app.use(&#39;/api&#39;, customerController);
// Start the server
const port = 3000;
app.listen(port, () =&gt; {
console.log(`Server started on port ${port}`);
});

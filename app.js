```javascript
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bookingController = require('./controllers/bookingController');
const customerController = require('./controllers/customerController');

// Connect to the database
mongoose.connect('mongodb://localhost/furr-fluff-spa', { useNewUrlParser: true, useUnifiedTopology: true });

// Enable CORS
app.use(cors());

// Set up routes
app.use('/api', bookingController);
app.use('/api', customerController);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

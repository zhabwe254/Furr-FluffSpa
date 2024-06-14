import dotenv from 'dotenv';
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URl, { useNewUrlParser: true, useUnifiedTopology: true });

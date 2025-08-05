const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

// const mongoURL = process.env.MONGO_URL_LOCAL
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
})

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
})

db.on('error', (err) => {
  console.log('MongoDB connectoin server error:', err);
})

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
})

module.exports = db;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./authController');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/authDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/auth', authController);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

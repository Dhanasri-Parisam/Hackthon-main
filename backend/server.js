// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/students');
const materialRoutes = require('./routes/materials');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

// public routes
app.use('/api/auth', authRoutes);

// protect specific routes by applying middleware.
// Example: require login for student and material operations.
// If you want only some student routes protected, move middleware to the router files instead.
app.use('/api/students', authMiddleware, studentRoutes);
app.use('/api/materials', authMiddleware, materialRoutes);

// example of a simple protected route (optional)
app.get('/api/secure-info', authMiddleware, (req, res) => {
  res.json({ ok: true, user: req.user });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hackathondb';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function() {
    console.log('Connected to MongoDB');
    app.listen(PORT, function() { console.log('Server running on port ' + PORT); });
  })
  .catch(function(err) {
    console.error('MongoDB connection error:', err);
  });

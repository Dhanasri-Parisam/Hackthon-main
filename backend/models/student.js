const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true, unique: true },
  batch: { type: String },
  department: { type: String },
  email: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', StudentSchema);

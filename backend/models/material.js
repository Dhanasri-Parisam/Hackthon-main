const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  year: { type: String },
  department: { type: String },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('material', MaterialSchema);

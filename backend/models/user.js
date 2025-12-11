// backend/models/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }, // hashed
  role: { type: String, default: 'student' }, // 'admin' or 'student'
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

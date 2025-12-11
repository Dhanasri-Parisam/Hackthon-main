// backend/routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.post('/', async (req, res) => {
  try {
    const { name, roll, batch, department, email } = req.body;
    if (!name || !roll) return res.status(400).json({ error: 'Name and roll required' });

    const student = await Student.findOneAndUpdate(
      { roll },
      { name, roll, batch, department, email },
      { upsert: true, new: true, runValidators: true }
    );

    res.json({ success: true, student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:roll', async (req, res) => {
  try {
    const student = await Student.findOne({ roll: req.params.roll });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

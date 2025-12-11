// backend/routes/materials.js
const express = require('express');
const router = express.Router();
const Material = require('../models/material');

// create material
router.post('/', async (req, res) => {
  try {
    const { year, department, subject, topic, link } = req.body;
    if (!subject || !topic || !link) return res.status(400).json({ error: 'subject, topic and link are required' });

    const m = await Material.create({ year, department, subject, topic, link });
    res.status(201).json({ success: true, material: m });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// get all materials
router.get('/', async (req, res) => {
  try {
    const list = await Material.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// get materials by year/department/subject (optional filters)
router.get('/search', async (req, res) => {
  try {
    const { year, department, subject } = req.query;
    const q = {};
    if (year) q.year = year;
    if (department) q.department = department;
    if (subject) q.subject = subject;
    const list = await Material.find(q).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

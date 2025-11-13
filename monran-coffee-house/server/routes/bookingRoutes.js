const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST /api/bookings — Create new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, message: "Booking confirmed!", booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/bookings — Get all bookings (for admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: "MonRan Coffee House API is running 🍵" });
});

app.listen(PORT, () => {
  console.log(`🚀 MonRan Server running on http://localhost:${PORT}`);
});
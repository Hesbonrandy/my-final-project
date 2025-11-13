import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '10:00',
    guests: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('✅ Booking confirmed! See you at MonRan Coffee House, Nairobi!');
      setFormData({ name: '', email: '', date: '', time: '10:00', guests: 1 });
    } catch (err) {
      alert('❌ Error: ' + (err.response?.data?.error || 'Please try again'));
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#6F4E37' }}>☕ MonRan Coffee House</h1>
        <p><em>Kinoo, Nairobi — Your Second Place</em></p>
      </header>

      <main>
        <h2>Book a Coworking Spot</h2>
        <p>Free Wi-Fi • Power Outlets • Quiet Zones • KSh 0 (just buy a drink!)</p>

        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <option value="10:00">10:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label>Guests: {formData.guests}</label><br/>
            <input
              name="guests"
              type="range"
              min="1"
              max="6"
              value={formData.guests}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.8rem',
              backgroundColor: '#6F4E37',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Book My Spot (KSh 0)
          </button>
        </form>

        <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
          <p>Kinoo, Waiyaki Way, Nairobi</p>
          <p>🕒 Mon–Fri: 7am–8pm | Sat–Sun: 8am–9pm</p>
          </footer>
      </main>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/styles.css';
import './css/menu.css';

const initMainJS = () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Newsletter forms
  const newsletterForms = document.querySelectorAll('#newsletter-form, #footer-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value.trim();
      if (!email) {
        alert('Please enter your email.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email.');
        return;
      }
      alert(`Welcome to the MonRan Crew, ${email}! Check your inbox for sweet perks ☕💌`);
      this.reset();
    });
  });

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// M E N U  P A G E
const MenuPage = () => {
  const [filter, setFilter] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: "Oat Milk Honey Latte ★",
      price: "KSh 750",
      desc: "Smooth espresso, house-made honey syrup, steamed oat milk.",
      category: "drinks vegan",
      img: "/images/drinks/oat_latte.jpg",
      tags: ["🌱", "★"]
    },
    {
      id: 2,
      name: "House Espresso",
      price: "KSh 450",
      desc: "Our signature dark roast, bold and balanced.",
      category: "drinks",
      img: "/images/drinks/espresso.jpg",
      tags: ["⚡"]
    },
    {
      id: 3,
      name: "Avocado Toast",
      price: "KSh 980",
      desc: "Sourdough, smashed avocado, chili flakes, microgreens.",
      category: "food vegan",
      img: "/images/food/avocado_toast.jpg",
      tags: ["🌱"]
    },
    {
      id: 4,
      name: "Croissant Trio",
      price: "KSh 1,040",
      desc: "Plain, Chocolate, Almond. Baked fresh daily.",
      category: "food",
      img: "/images/food/croissant_trio.jpg",
      tags: ["🥐"]
    },
    {
      id: 5,
      name: "Kahawa Chungi (Kenyan Filter)",
      price: "KSh 500",
      desc: "Locally sourced beans, slow-brewed, served with mandazi.",
      category: "drinks",
      img: "/images/drinks/kahawa.jpg",
      tags: ["🇰🇪"]
    }
  ];

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category.includes(filter));

  return (
    <>
      <main>
        <section className="hero-small">
          <h1>Our Menu</h1>
          <p>Designed to fuel your work, your creativity, and your cravings.</p>
          <a href="#" className="btn">Download PDF Menu</a>
        </section>

        <section className="menu-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'drinks' ? 'active' : ''} 
            onClick={() => setFilter('drinks')}
          >
            Drinks
          </button>
          <button 
            className={filter === 'food' ? 'active' : ''} 
            onClick={() => setFilter('food')}
          >
            Food
          </button>
          <button 
            className={filter === 'vegan' ? 'active' : ''} 
            onClick={() => setFilter('vegan')}
          >
            Vegan
          </button>
        </section>

        <section className="menu-grid container">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.img} alt={item.name} />
              <div className="item-info">
                <div className="header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
                <div className="tags">
                  {item.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div>
            <h4>Hours</h4>
            <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
          </div>
          <div>
            <h4>Find Us</h4>
            <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
          </div>
          <div className="newsletter">
            <h4>Join the Crew</h4>
            <form id="footer-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">☕ Subscribe</button>
            </form>
          </div>
        </div>
        <div className="social">
          <a href="#">Instagram</a> • <a href="#">Twitter</a> • <a href="#">TikTok</a>
        </div>
        <p>&copy; 2025 MonRan Coffee House. Brewed with love.</p>
      </footer>

      <button className="back-to-top">↑</button>
    </>
  );
};

// H O M E  P A G E 
const HomePage = () => (
  <>
    <main>
      <section className="hero">
        <h1>Brewing Community,<br />One Cup at a Time.</h1>
        <p>For remote workers, creatives, and neighbors in Kinoo who believe coffee tastes better together.</p>
        <div className="hero-btns">
          <Link to="/menu" className="btn">View Our Menu</Link>
          <Link to="/contact" className="btn secondary">Book a Spot</Link>
          <Link to="/events" className="btn">See Events</Link>
        </div>
      </section>

      <section className="featured-drink">
        <img src="/images/drinks/oat_latte.jpg" alt="Oat Milk Honey Latte" />
        <div>
          <span className="badge">Barista’s Pick</span>
          <h2>Oat Milk Honey Latte</h2>
          <p>Smooth espresso, house-made honey syrup, steamed oat milk. 🌱</p>
          <Link to="/menu" className="btn small">Try It Today — KSh 750</Link>
        </div>
      </section>

      <section className="testimonials">
        <h2>“MonRan is my second office.”</h2>
        <p>Monica, Freelance UX Designer in Kinoo</p>
      </section>
    </main>

    <footer>
      <div className="footer-grid">
        <div>
          <h4>Hours</h4>
          <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
        </div>
        <div>
          <h4>Find Us</h4>
          <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
        </div>
        <div className="newsletter">
          <h4>Join the Crew</h4>
          <form id="footer-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">☕ Subscribe</button>
          </form>
        </div>
      </div>
      <div className="social">
        <a href="#">Instagram</a> • <a href="#">Twitter</a> • <a href="#">TikTok</a>
      </div>
      <p>&copy; 2025 MonRan Coffee House. Brewed with love.</p>
    </footer>

    <button className="back-to-top">↑</button>
  </>
);

// A B O U T  P A G E
const AboutPage = () => (
  <>
    <main>
      <section className="hero-small">
        <h1>Welcome to MonRan</h1>
        <p>Your Second Place, After Home and Office</p>
      </section>

      <section className="story">
        <div className="container">
          <h2>Where Community Brews</h2>
          <p>Founded in 2023 in the heart of Kinoo by <strong>Monica and Randy</strong>, two Nairobi-based remote workers who missed the buzz of human connection, MonRan was born from a simple idea:</p>
          <blockquote>
            <p>“Why can’t work feel like home — but better?”</p>
          </blockquote>
          <p>What started as a dream over mandazi and Kenyan filter coffee is now a vibrant hub where freelancers, students, creatives, and neighbors gather — not just for coffee, but for conversation, collaboration, and belonging.</p>
        </div>
      </section>

      <section className="space-gallery">
        <div className="container">
          <h2>Our Space — A Place to Belong</h2>
          <p>Step into MonRan and feel the difference:</p>
          <div className="gallery-grid">
            <img src="/images/space/sofa-zone.jpg" alt="Cozy sofa zone" />
            <img src="/images/space/work-desks.jpg" alt="Wooden work desks" />
            <img src="/images/space/outdoor-patio.jpg" alt="Sunny outdoor patio" />
            <img src="/images/space/coffee-bar.jpg" alt="Artisan coffee bar" />
          </div>
          <p className="quote-center">“Here, work doesn’t have to be lonely.”</p>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-grid">
        <div>
          <h4>Hours</h4>
          <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
        </div>
        <div>
          <h4>Find Us</h4>
          <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
        </div>
        <div className="newsletter">
          <h4>Join the Crew</h4>
          <form id="footer-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">☕ Subscribe</button>
          </form>
        </div>
      </div>
      <div className="social">
        <a href="#">Instagram</a> • <a href="#">Twitter</a> • <a href="#">TikTok</a>
      </div>
      <p>&copy; 2025 MonRan Coffee House Nairobi. Your Coffee. Your Community.</p>
    </footer>

    <button className="back-to-top">↑</button>
  </>
);

// E V E N T S  P A G E 
const EventsPage = () => (
  <>
    <main>
      <section className="hero-small">
        <h1>Events & Space</h1>
      </section>
      <section className="coworking container">
        <h2>Your Office, But Better</h2>
        <ul className="perks-list">
          <li>✔️ Free high-speed Wi-Fi</li>
          <li>✔️ Ample outlets + USB ports</li>
          <li>✔️ Quiet zones + collaborative tables</li>
          <li>✔️ Free filtered water & tea refills</li>
        </ul>
      </section>
    </main>

    <footer>
      <div className="footer-grid">
        <div>
          <h4>Hours</h4>
          <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
        </div>
        <div>
          <h4>Find Us</h4>
          <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
        </div>
        <div className="newsletter">
          <h4>Join the Crew</h4>
          <form id="footer-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">☕ Subscribe</button>
          </form>
        </div>
      </div>
      <div className="social">
        <a href="#">Instagram</a> • <a href="#">Twitter</a> • <a href="#">TikTok</a>
      </div>
      <p>&copy; 2025 MonRan Coffee House. Brewed with love.</p>
    </footer>

    <button className="back-to-top">↑</button>
  </>
);

// C O N T A C T  P A G E
const ContactPage = () => (
  <>
    <main>
      <section className="hero-small">
        <h1>Visit Us</h1>
      </section>

      <section className="contact-grid container">
        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.386135574028!2d36.7632142!3d-1.2812372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f3d3b3e7a7%3A0x5d4a7f3a9b5c5c5d!2sWaiyaki%20Way%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1717000000000!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: '0', borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <address>
            <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
            <p>🅿️ Free 2-hour street parking + bike rack out front</p>
          </address>
          <div className="hours">
            <h3>Hours</h3>
            <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form id="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="How can we help? (e.g., Book table, event inquiry, wholesale)" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="newsletter">
            <h3>Join the MonRan Crew</h3>
            <form id="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">☕ Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-grid">
        <div>
          <h4>Hours</h4>
          <p>Mon–Fri: 7am–8pm<br />Sat–Sun: 8am–9pm</p>
        </div>
        <div>
          <h4>Find Us</h4>
          <p>Kinoo, Waiyaki Way<br />Nairobi, Kenya</p>
        </div>
        <div className="newsletter">
          <h4>Join the Crew</h4>
          <form id="footer-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">☕ Subscribe</button>
          </form>
        </div>
      </div>
      <div className="social">
        <a href="#">Instagram</a> • <a href="#">Twitter</a> • <a href="#">TikTok</a>
      </div>
      <p>&copy; 2025 MonRan Coffee House. Brewed with love.</p>
    </footer>

    <button className="back-to-top">↑</button>
  </>
);

//M A I N  A P P 
export default function App() {
  useEffect(() => {
    initMainJS();
  }, []);

  return (
    <Router>
      <header>
        <div className="logo">
          <img src="/images/MonRan Coffee House.png" alt="MonRan Coffee House Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/events">Events & Space</Link></li>
            <li><Link to="/contact">Visit</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
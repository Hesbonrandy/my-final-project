# ☕ MonRan Coffee House — Nairobi's Community Brew# ☕ MonRan Coffee House — Nairobi's Community Brew



A full-stack web application for a Nairobi-based coffee house designed for **remote workers, creatives, and local residents**. Features a responsive website with a modern MERN backend for event booking and management.A full-stack web application for a Nairobi-based coffee house designed for **remote workers, creatives, and local residents**. Features a responsive website with a modern MERN backend for event booking and management.



**Live Site:** [MonRan Coffee House](https://hesbonrandy.github.io/monran-coffee-house/)   

**Repository:** [GitHub - WK-8-final-project-and-deployment](https://github.com/Hesbonrandy/WK-8-final-project-and-deployment)



------



## 📋 Table of Contents## 📍 Pages & Features



- [Overview](#overview)### 🏠 Home

- [Features](#features)- Hero section with call-to-action buttons  

- [Tech Stack](#tech-stack)- Featured drink spotlight (KSh pricing)  

- [Project Structure](#project-structure)- Customer testimonials  

- [Installation & Setup](#installation--setup)

- [Usage](#usage)### 🧑‍🤝‍🧑 About

- [API Documentation](#api-documentation)- Brand story & mission  

- [Deployment](#deployment)- Founders section (Monica & Randy)  

- [Contributing](#contributing)- Team members in clean horizontal row  

- [License](#license)- Photo gallery of the space: lounge, patio, desks, coffee bar  



---### 📜 Menu

- Filterable drinks & food (Drinks / Food / Vegan)  

## 🎯 Overview- Prices in **Kenyan Shillings (KSh)**  

- Dietary icons (🌱 Vegan, ⚡ Caffeinated)  

MonRan Coffee House is a complete digital solution for a community coffee shop in Nairobi. The project combines:- “Download PDF Menu” button (saves as PDF via browser)  



- **Static Frontend**: A responsive, vanilla JavaScript website for browsing the menu, reading about the space, and viewing events### 📅 Events & Space

- **Dynamic Backend**: A MERN stack application handling event bookings, reservations, and data persistence- Coworking perks (Wi-Fi, outlets, quiet zones)  

- Upcoming events calendar *(Freelancer Fridays, Latte Art Sundays)*  

Whether you're a remote worker looking for a quiet space or someone interested in coffee culture events, MonRan provides an engaging digital experience.- Private event booking form  



---### 📍 Contact & Visit

- Embedded Google Maps  

## ✨ Features- Contact form with JS validation  

- Newsletter signup  

### 🌐 Website Pages- Nairobi address & hours  



| Page | Description |---

|------|-------------|

| **🏠 Home** | Hero section with CTAs, featured drinks, customer testimonials |## ✨ Tech Stack

| **🧑‍🤝‍🧑 About** | Brand story, founders (Monica & Randy), team gallery |- **HTML5** — Semantic structure  

| **📜 Menu** | Filterable menu (Drinks/Food/Vegan), prices in KSh, dietary icons |- **CSS3** — Flexbox, Grid, Responsive Design, Animations  

| **📅 Events** | Coworking perks, event calendar, booking form (integrated with backend) |- **JavaScript** — Interactive filters, form validation, smooth scroll, lightbox  

| **📍 Contact** | Google Maps, contact form, newsletter signup, Nairobi address & hours |- **No frameworks** — Vanilla frontend for maximum control and learning  

- **Mobile-first** — Fully responsive on all devices  

### ⚙️ Core Functionality

---

- ✅ **Responsive Design** — Mobile-first approach, works on all devices

- ✅ **Interactive Menu Filters** — Filter by category and dietary preferences## 💰 Pricing

- ✅ **Event Booking System** — Backend integration for event reservationsAll menu items and events are localized in **Kenyan Shillings (KSh)**.  

- ✅ **Contact Form Validation** — Client-side validation with server-side persistence

- ✅ **PDF Menu Export** — Download printable menu as PDF**Examples:**  

- ✅ **Newsletter Signup** — Collect subscriber emails- Oat Milk Honey Latte — KSh 750  

- ✅ **Smooth Animations** — Modern CSS transitions and effects- Avocado Toast — KSh 980  

- ✅ **Localized Pricing** — All prices in Kenyan Shillings (KSh)- Latte Art Class — KSh 2,000  



------



## 🛠️ Tech Stack## 🛠️ How to Use



### Frontend (Static Pages)### Run Locally

- **HTML5** — Semantic, accessible markup1. Clone or download this repo  

- **CSS3** — Flexbox, Grid, animations, responsive media queries2. Open `index.html` in your browser  

- **Vanilla JavaScript** — No dependencies, full control, lightweight

- **Bootstrap Icons** — SVG icons for semantic meaning### Deploy (GitHub Pages)

1. Push to your GitHub repo  

### Backend (MERN)2. Go to **Settings → Pages → Branch: main**  

- **Node.js & Express** — RESTful API server3. Your site will be live at: https://yourusername.github.io/monran-coffee-house/

- **MongoDB** — NoSQL database for bookings and data---

- **Mongoose** — ODM for MongoDB schema validation

- **React** — Interactive UI for admin/management features## 📂 Project Structure

- **React Router** — Client-side routing

- **Vite** — Modern build tool and dev server```markdown

- **Axios** — HTTP client for API requests/monran-coffee-house

- **CORS** — Cross-origin resource sharing├── [index.html](./index.html)

- **Dotenv** — Environment variable management├── [about.html](./about.html)

├── [menu.html](./menu.html)

### Development Tools├── [events.html](./events.html)

- **ESLint** — Code quality and linting├── [contact.html](./contact.html)

- **Nodemon** — Auto-restart Node.js on changes├── [menu-monran-kes.html](./menu-monran-kes.html)   ← Printable PDF menu (Save as PDF)

- **Git** — Version control├── css/

│   └── [style.css](./css/style.css)                 ← All styles (responsive, animations, layout)

---├── js/

│   └── [main.js](./js/main.js)                      ← Interactivity (filters, forms, scroll)

## 📂 Project Structure├── [images/](./images)                              ← All images used in the site



```
WK-8-July-final-project-and-deployment/
├── README.md                          ← You are here
├── index.html                         ← Home page
├── about.html                         ← About page
├── menu.html                          ← Menu page
├── events.html                        ← Events page
├── contact.html                       ← Contact page
│
├── css/
│   ├── styles.css                    ← Main stylesheet
│   └── menu.css                      ← Menu-specific styles
│
├── js/
│   └── main.js                       ← Vanilla JavaScript (filters, forms, interactions)
│
├── images/                           ← All image assets
│
└── monran-coffee-house/              ← MERN Full-Stack Application
    │
    ├── client/                       ← React Frontend
    │   ├── package.json
    │   ├── vite.config.js            ← Vite configuration
    │   ├── eslint.config.js          ← Linting rules
    │   ├── public/                   ← Static assets
    │   └── src/
    │       ├── main.jsx              ← React entry point
    │       ├── App.jsx               ← Main App component
    │       ├── App.css               ← App styles
    │       ├── index.css             ← Global styles
    │       └── assets/               ← Images, icons, etc.
    │
    └── server/                       ← Express Backend
        ├── package.json
        ├── server.js                 ← Express server entry point
        ├── config/
        │   └── db.js                 ← MongoDB connection
        ├── models/
        │   └── Booking.js            ← Booking data schema
        └── routes/
            └── bookingRoutes.js      ← Booking API endpoints
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Hesbonrandy/WK-8-final-project-and-deployment.git
cd WK-8-July-final-project-and-deployment
```

### Step 2: Setup Backend Server

```bash
cd monran-coffee-house/server

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/monran-coffee" > .env
echo "PORT=5000" >> .env
echo "NODE_ENV=development" >> .env

# Start the server (with auto-reload)
npm run dev
```

The server will run on `http://localhost:5000`

### Step 3: Setup React Frontend

```bash
cd ../client

# Install dependencies
npm install

# Start development server
npm run dev
```

The React app will run on `http://localhost:5173` (or the next available port)

### Step 4: View Static Website

Open the root HTML files in your browser:
```
file:///path/to/WK-8-July-final-project-and-deployment/index.html
```

Or use a local server:
```bash
# From project root
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 💻 Usage

### For Users
1. **Browse the Site** — Open `index.html` to explore the coffee house
2. **View Menu** — Check out drinks and food options on `menu.html`
3. **Book Events** — Fill out the booking form on `events.html`
4. **Contact & Subscribe** — Use the contact form to get in touch

### For Developers

#### Run Backend API
```bash
cd monran-coffee-house/server
npm run dev
# Starts on http://localhost:5000
```

#### Run React Admin Dashboard
```bash
cd monran-coffee-house/client
npm run dev
# Starts on http://localhost:5173
```

#### Build for Production
```bash
# Backend
cd server
npm start

# React Frontend
cd ../client
npm run build
npm run preview
```

#### Lint Code
```bash
cd client
npm run lint
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Booking Endpoints

#### Create a Booking
```http
POST /api/bookings
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2025-12-20",
  "time": "14:00",
  "guests": 4,
  "eventType": "Freelancer Friday",
  "message": "Looking forward to it!"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2025-12-20",
  "time": "14:00",
  "guests": 4,
  "eventType": "Freelancer Friday",
  "message": "Looking forward to it!",
  "createdAt": "2025-11-13T10:30:00Z"
}
```

#### Get All Bookings
```http
GET /api/bookings
```

#### Get Booking by ID
```http
GET /api/bookings/:id
```

#### Update Booking
```http
PUT /api/bookings/:id
Content-Type: application/json

{
  "status": "confirmed"
}
```

#### Delete Booking
```http
DELETE /api/bookings/:id
```

---

## 💰 Menu Pricing

All menu items and events are localized in **Kenyan Shillings (KSh)**.

### Sample Menu Prices
- Oat Milk Honey Latte — **KSh 750**
- Avocado Toast — **KSh 980**
- Latte Art Class — **KSh 2,000**
- Private Event Space (per hour) — **KSh 5,000**

---

## 🌍 Deployment

### Deploy Static Site (GitHub Pages)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings → Pages**
   - Select **Branch: main**
   - Your site will be live at: `https://hesbonrandy.github.io/monran-coffee-house/`

### Deploy Backend (Heroku/Railway)

1. **Set Environment Variables**
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=production
   ```

2. **Deploy**
   - Connect repository to Heroku/Railway
   - Deploy main branch
   - Server will be accessible via provided URL

3. **Update Frontend API Calls**
   ```javascript
   // Change API endpoint in React/JavaScript
   const API_URL = "https://your-backend-url.com/api";
   ```

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style
- Use **ESLint** for JavaScript consistency
- Follow **semantic HTML** structure
- Write **responsive CSS** with mobile-first approach
- Add **comments** for complex logic

---

## 📝 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## 📧 Contact & Support

**MonRan Coffee House**
- 📍 **Location**: Nairobi, Kenya
- 📧 **Email**: hello@monrancoffee.com
- 🔗 **Website**: [monrancoffee.com](https://hesbonrandy.github.io/monran-coffee-house/)
- 💼 **LinkedIn**: [@HesbanRandy](https://linkedin.com/in/hesbanrandy)
- 🐙 **GitHub**: [@Hesbonrandy](https://github.com/Hesbonrandy)

---

## 🙏 Acknowledgments

- **Monica & Randy** — Founders with a passion for community and quality coffee
- **Our Team** — Dedicated to creating a welcoming space for everyone
- **Customers** — Thank you for making MonRan a thriving community hub!

---

**Built with ☕ and ❤️ by the MonRan Team**

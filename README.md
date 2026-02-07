# ⭐ Google Review Collector

A mobile‑first SaaS tool that helps local businesses collect **more Google reviews** by sending **trackable WhatsApp review requests** and managing customer follow‑ups in one dashboard.

---

## 🚀 What This App Does

Small businesses often struggle to get customers to leave Google reviews.
This app solves that by making the process **one‑tap, personal, and trackable**.

With Google Review Collector, business owners can:

* Send Google review requests via **WhatsApp**
* Track **who received** the request
* Know **which requests are still pending**
* Manage customers in one place
* View analytics in real time

---

## 🧠 How It Works (Simple Flow)

1. Business owner logs in using **Google Auth**
2. Adds their **Business Name** and **Google Review Link**
3. Enters customer details (name + phone)
4. App generates a **tracked review link**
5. WhatsApp opens with a pre‑filled message
6. Customer clicks the link and is redirected to Google Reviews
7. Business owner tracks status from the dashboard

---

## ✨ Core Features

### 🔐 Authentication

* Google OAuth login
* Secure user‑specific data isolation

### 🏪 Business Profile

* Business name & Google review link
* Editable anytime
* Required before sending requests

### 📲 Review Requests

* WhatsApp deep‑link integration
* Unique tracking link per request
* Optional custom message
* Phone number normalization (India‑friendly)

### 🔗 Smart Redirect System

* Customer first lands on branded redirect page
* Redirect handled via Supabase Edge Function
* Enables tracking & future extensibility

### 📊 Dashboard

* Total requests sent
* Pending vs reviewed status
* Realtime updates

### 📈 Analytics

* Full request history
* Manual status updates
* Excel export
* Realtime syncing

### 👥 Customer Management

* Save customers for later
* Send review request anytime
* Clean separation between customers & requests

### 📱 Mobile‑First UI

* Responsive layout
* Mobile bottom navigation
* Desktop navbar support

---

## 🧰 Tech Stack

* **Frontend:** React + Vite
* **Routing:** React Router
* **Auth & Backend:** Supabase

  * Auth (Google OAuth)
  * Database
  * Realtime subscriptions
  * Edge Functions
* **UI:** Bootstrap + Custom CSS
* **PWA:** Service Worker enabled

---

## 🗂 Database Overview

* `profiles` → user & business details
* `customers` → saved customer list
* `review_requests` → sent review tracking

Each user only accesses their own data.

---

## 🧪 Current Status

* ✅ MVP complete
* ✅ Ready for real users
* ⚠️ Needs minor polish before public SaaS launch

---

## 🔮 Planned Improvements

* Review reminders
* Message templates
* Multi‑business support
* Branding customization
* Automated review detection (if possible)

---

## 📌 Ideal Use Cases

* Salons & spas
* Cafes & restaurants
* Gyms & fitness studios
* Clinics & local services
* Freelancers & agencies

---

## 🤝 Contributing

This project is currently a solo build.
Contributions, ideas, and feedback are welcome.

---

## 📄 License

MIT License

---

## 🙌 Author

Built with ❤️ by **Yogendra Singh Rathore**

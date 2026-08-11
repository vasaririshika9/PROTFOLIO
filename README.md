# Vasari Rishika - Personal Developer Portfolio

A complete, modern, recruiter-friendly personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript**. Designed with sleek dark/light mode themes, glassmorphism UI, smooth scroll animations, active scroll-spy navigation, and responsive layouts across all device screen sizes.

---

## 📁 Project Structure

```text
PROTFOLIO/
├── index.html          # Main single-page HTML structure with SEO & Open Graph meta tags
├── style.css           # Modern CSS design system (CSS variables, dark/light theme, keyframes, responsive grid)
├── script.js           # Vanilla JS (typing animation, theme toggle, mobile drawer, scroll-spy, cert modal)
├── README.md           # Documentation, customization guide, and deployment instructions
└── assets/
    ├── profile.jpg           # Developer profile picture
    ├── oracle-certificate.png# Oracle Certified Foundations Associate certificate image
    ├── resume.pdf            # Sample resume PDF file for View & Download functionality
    ├── finance-bot.png       # Project image preview for Finance Bot
    └── book-my-court.png     # Project image preview for Book My Court
```

---

## ✨ Features

- **Responsive Mobile Navigation**: Glassmorphism sticky navbar with hamburger menu drawer and locked scroll prevention.
- **Hero Section**: Photo card with ambient glow rings, animated dynamic typing effect (*Full-Stack Developer*, *Java Specialist*, etc.), and instant CTAs for **View Projects** and **Download Resume**.
- **About Me Section**: Developer highlights, statistics counters, and academic information (**MLR Institute of Technology**).
- **Skills Matrix**: Organized grid covering **Programming Languages** (Java, JavaScript, HTML, CSS), **Tools & Environment** (Git, GitHub, VS Code, REST APIs), and **Core Engineering Concepts** (OOP, Data Structures, Problem Solving, Web Dev).
- **Featured Projects**:
  - **Finance Bot**: Intelligent expense & budget tracker web app with features breakdown and links.
  - **Book My Court**: Sports facility slot booking system with interactive search UI preview and links.
- **Resume Hub**: Dedicated section with **View Resume** (`assets/resume.pdf` in new tab) and **Download Resume** buttons.
- **Contact Section**: Info cards with direct email (`24R21A0564@MLRIT.AC.IN`), LinkedIn, GitHub, and interactive contact form UI.
- **Dark / Light Theme Toggle**: Persistent theme switching with `localStorage`.
- **Back-to-Top Button**: Smooth floating action button appearing on scroll.

---

## 🛠️ Customization Instructions

### 1. Replacing Profile Picture
- Replace `assets/profile.jpg` with your updated image file (keep the filename as `assets/profile.jpg`).

### 2. Updating Resume PDF
- Replace `assets/resume.pdf` with your updated resume PDF file (keep the filename as `assets/resume.pdf`).

### 3. Replacing Project Images
- Place your project screenshots in `assets/`:
  - `assets/finance-bot.png`
  - `assets/book-my-court.png`

### 4. Updating Live Project URLs
In `index.html`, search for `[FINANCE_BOT_LIVE_URL]` and `[BOOK_MY_COURT_LIVE_URL]` and replace them with your live deployed project web URLs:
```html
<a href="https://your-finance-bot-demo.com" target="_blank" class="btn btn-primary btn-sm">
  <i class="fa-solid fa-external-link"></i> Live Demo
</a>
```

---

## 🚀 Running the Website Locally

You can open and view the website locally without any backend server:

### Option 1: Direct File Double-Click
Simply double-click `index.html` in your file manager to launch it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code Extension)
1. Open the project folder in VS Code.
2. Click **Go Live** in the bottom status bar or right-click `index.html` -> **Open with Live Server**.

### Option 3: Local Python HTTP Server
Run this terminal command inside the project directory:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to Free Web Hosting Services

### 1. Deploying on GitHub Pages
1. Push this project repository to your GitHub account: `https://github.com/vasaririshika9/portfolio`.
2. Go to repository **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your site will be published at `https://vasaririshika9.github.io/portfolio/` within minutes!

### 2. Deploying on Netlify
1. Log in to [Netlify.com](https://www.netlify.com/).
2. Click **Add new site** -> **Import an existing project** (or drag and drop the `PROTFOLIO` folder).
3. Connect your GitHub repository and click **Deploy Site**.

### 3. Deploying on Vercel
1. Log in to [Vercel.com](https://vercel.com/).
2. Click **Add New Project** -> Import your GitHub repository.
3. Keep default settings and click **Deploy**.

---

## 📄 License
This project is licensed under the MIT License - feel free to customize and use it for your personal developer portfolio!

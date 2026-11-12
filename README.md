# Dentistry 🦷

A modern, fast, and fully responsive dental clinic website built with **React 18**, **Vite**, and **Tailwind CSS**. Designed to give patients a seamless experience for learning about dental treatments, exploring clinic specialties, and booking appointments online.

---

## 🌟 Overview

**Dentistry** is dedicated to providing compassionate, state-of-the-art dental care for individuals and families. The website delivers an intuitive, accessible patient interface featuring comprehensive treatment details, clinic background, and flexible communication channels—including **primary and alternative contact lines** for regular inquiries and 24/7 emergency dental situations.

---

## 🚀 Key Features

- **Dentistry Branding & Modern UI:** Clean, medical-grade aesthetic utilizing Tailwind CSS, Poppins typography, and modern color palettes.
- **Sticky Responsive Navigation:**
  - Fast links to **Home**, **About**, and **Contact Us**.
  - Direct click-to-call quick action for immediate phone consultations.
  - Fully responsive mobile drawer powered by Headless UI.
- **Interactive Home Page:**
  - Welcoming Hero section with appointment booking CTA.
  - "Why Choose Dentistry" highlights (Advanced Technology, Personalized Care, Comfort First).
  - Four core dental service categories (Preventive, Cosmetic, Restorative, and Emergency Care).
  - Engaging Call-To-Action (CTA) section directing visitors to schedule visits online.
- **Detailed About Us Page:**
  - Clinic mission and patient-first philosophy.
  - Team spotlight featuring lead practitioner **Dr. Vikram Patel** with 14+ years of clinical experience.
  - Comprehensive breakdown of dental specialties and treatments.
- **Rich Contact & Booking Page:**
  - **Primary & Alternative Phone Numbers:** Standard inquiry line + 24/7 emergency dental hotline.
  - **Primary & Alternative Email Addresses:** General inquiries + dedicated patient care email.
  - **Multiple Clinic Locations:** Primary clinic address and alternative downtown branch.
  - **Interactive Appointment Form:** Allows patients to request an appointment, select their needed service, and provide an alternative contact number.
  - Interactive success notification upon form submission.
- **Comprehensive Footer:**
  - Multi-column footer displaying quick links, hours of operation, full primary and alternative contact information, and copyright.

---

## 📞 Clinic Contact Details

| Contact Channel | Primary Detail | Alternative / Emergency Detail |
| :--- | :--- | :--- |
| **Phone** | `+91 98765-43210` | `+91 91234-56789` *(24/7 Emergency Line)* |
| **Email** | `contact@dentistry.com` | `care@dentistry.com` |
| **Location** | 1456 Pearl Avenue, Suite 200, Wellness Nagar, Mumbai - 400001 | 42 Health Boulevard, Downtown Medical Center, Mumbai - 400020 |
| **Office Hours** | Monday – Friday: 9:00 AM – 5:00 PM<br>Saturday: 10:00 AM – 2:00 PM | Sunday: 24/7 Emergency Dental On-Call Assistance |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **UI Components & Icons:** [@headlessui/react](https://headlessui.com/) & [@heroicons/react](https://heroicons.com/)
- **Animation Support:** [@gsap/react](https://gsap.com/)

---

## 📁 Project Structure

```text
Dentistry/
├── public/
│   ├── bgContact.jpg         # Contact section background asset
│   ├── contactbg.webp        # WebP hero background
│   ├── logo.webp             # Dentistry brand logo
│   └── _redirects            # SPA client-side routing redirect rules
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Navbar.jsx    # Sticky navigation with brand & contact actions
│   │   └── Footer/
│   │       └── Footer.jsx    # Multi-column footer with contact details
│   ├── pages/
│   │   ├── 1.Home/
│   │   │   └── Home.jsx      # Landing page, services, & CTA
│   │   ├── 2.About/
│   │   │   └── About.jsx     # Clinic mission, doctor profile, & specialties
│   │   └── 3.Contact/
│   │       └── Contact.jsx   # Contact details (Primary/Alt) & booking form
│   ├── App.jsx               # App layout & React Router configuration
│   ├── index.css             # Tailwind directives & global styling
│   └── main.jsx              # React application entry point
├── index.html                # HTML template with Poppins font & Dentistry title
├── package.json              # Project dependencies & scripts
├── tailwind.config.js        # Tailwind CSS styling configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## 💻 Getting Started

Follow these steps to run Dentistry locally on your computer:

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### 2. Installation

1. Open your terminal in the project directory:
   ```bash
   cd Dentistry
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Development Server

Start the local Vite development server:
```bash
npm run dev
```

Open your browser and navigate to the local URL (typically `http://localhost:5173`).

---

## 📦 Available Scripts

- **`npm run dev`** - Launches the local development server with Hot Module Replacement (HMR).
- **`npm run build`** - Builds and optimizes the application for production inside the `dist/` directory.
- **`npm run preview`** - Previews the production build locally before deployment.
- **`npm run lint`** - Runs ESLint to check for code quality and syntax issues.

---

## 🌐 Deployment

The project is pre-configured for static hosting platforms:

- **Netlify:** Includes `public/_redirects` and `netlify.toml` for seamless React Router SPA client-side routing.
- **Vercel:** Works out of the box; set framework preset to `Vite` and output directory to `dist`.
- **GitHub Pages:** Pre-configured with the `deploy` script (`npm run deploy`) using `gh-pages`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

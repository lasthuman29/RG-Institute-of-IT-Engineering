# RG Institute of IT & Engineering — Website

A single-file, responsive institutional website for **RG Institute of IT & Engineering**, an authorised NIELIT Exam Centre located in Jhansi, Uttar Pradesh, India (est. 2010).

---

## 📁 File

```
rg-institute-updated.html
```

A self-contained HTML file — no build tools, no frameworks, no external dependencies beyond Google Fonts.

---

## 🌐 Live Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Full-screen banner with institute tagline, CTA buttons, and key stats |
| About | `#about` | Institute history, values grid, and 15+ years badge |
| Courses | `#courses` | Filterable course cards (Certificate, Diploma, Other, Projects) |
| Admissions | `#admission` | Step-by-step admission process + enquiry form |
| Gallery | `#gallery` | Visual grid layout showcasing campus/events |
| FAQs | `#faqs` | Accordion-style FAQ section (2-column grid) |
| Contact | `#contact` | Contact cards + message form |
| Footer | — | Quick links, course links, contact info, social links |

---

## 🎨 Design

- **Color Palette:**  
  - Navy `#0a1628` — primary background/text  
  - Royal Blue `#1a3a6e` — accents  
  - Gold `#c9a84c` / Light Gold `#f0d080` — highlights, CTAs  
  - Cream `#faf6ee` — page background  

- **Typography:**  
  - `Playfair Display` (serif) — headings, titles  
  - `DM Sans` (sans-serif) — body text, UI  
  - Both loaded via Google Fonts CDN

- **Layout:** CSS Grid and Flexbox throughout; fully responsive with media queries for mobile

---

## ⚙️ Features

- **Sticky header** with smooth scroll and active nav link highlighting on scroll
- **Dropdown navigation** with CSS hover animation (`dropIn` keyframe)
- **Mobile hamburger menu** (toggle via JS)
- **Course filter tabs** — dynamically show/hide course cards by category (`cert`, `dip`, `other`, `proj`)
- **FAQ accordion** — only one item open at a time
- **Floating hero cards** with CSS keyframe animations (`float1`, `float2`)
- **Enquiry form** and **Contact form** with JS `alert()` confirmation on submit
- **Gallery grid** with hover overlay effect

---

## 📦 Dependencies

| Resource | Purpose | Source |
|---|---|---|
| Playfair Display | Heading font | Google Fonts CDN |
| DM Sans | Body font | Google Fonts CDN |

No JavaScript libraries. No CSS frameworks. Vanilla HTML/CSS/JS only.

---

## 🚀 Usage

Simply open the file in any modern browser:

```bash
open rg-institute-updated.html
# or
double-click the file in your file explorer
```

No server required — the file runs entirely client-side.

To host it:
- Upload to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)
- Or place in the root of any web server

---

## 📋 Courses Offered

### Certificate Courses
- CCC (Course on Computer Concepts)
- BCC (Basic Computer Course)
- ECC (Expert Computer Course)
- Tally with GST
- DTP (Desktop Publishing)

### Diploma Courses
- NIELIT O Level
- PGDCA (Post Graduate Diploma in Computer Applications)
- DCA (Diploma in Computer Applications)

### Other Courses
- Web Design & Development
- Graphic Design
- MS Office & Internet

### Projects
- Student project development and guidance

---

## 📞 Contact Information

| Field | Details |
|---|---|
| Address | 1187/2, Shivaji Nagar, Jhansi, Uttar Pradesh |
| Phone | 6393 944 207 |
| Email | rgiite76@gmail.com |
| Hours | Mon–Sat: 8:00 AM – 6:00 PM |
| Facebook | [RG Institute Facebook](https://www.facebook.com/RG-Institute-of-Information-Technology-Engineering-535572580166663/) |
| Twitter | [@Nielitjhansi15](https://twitter.com/Nielitjhansi15) |

---

## 🗂️ Code Structure

```
rg-institute-updated.html
├── <head>
│   ├── Meta tags & viewport
│   ├── Google Fonts link
│   └── <style> — all CSS (~900 lines)
│       ├── CSS custom properties (:root)
│       ├── Top bar, Header, Nav, Dropdown
│       ├── Mobile menu
│       ├── Hero section
│       ├── About, Courses, Admission
│       ├── Gallery, FAQs, Contact
│       ├── Footer
│       └── Responsive media queries
├── <body>
│   ├── .top-bar
│   ├── <header> (sticky nav + hamburger)
│   ├── #home (hero)
│   ├── #about
│   ├── #courses
│   ├── #admission
│   ├── #gallery
│   ├── #faqs
│   ├── #contact
│   └── <footer>
└── <script> — vanilla JS (~65 lines)
    ├── setActive() — nav link state
    ├── toggleMenu() — mobile nav
    ├── toggleFaq() — accordion
    ├── filterCourses() — tab filter
    ├── submitForm() / sendMessage() — form alerts
    └── scroll listener — active nav on scroll
```

---

## 📝 Notes

- Form submissions currently trigger browser `alert()` dialogs — no backend integration. To make forms functional, wire them to an email service (e.g. Formspree, EmailJS) or a server endpoint.
- Gallery items use emoji placeholders and CSS gradient backgrounds — replace with actual `<img>` tags for real photos.
- The map placeholder in the Contact section is a static emoji — embed a Google Maps `<iframe>` for a real map.

# 🧱 PRD: Landing Page for Construction Business (Indonesia)

## 1. Overview

**Project Name:** Landing Page - Jasa Konstruksi Indonesia  
**Purpose:** Create a modern, professional landing page for an Indonesian construction company to showcase services, projects, and contact information.  
**Tech Stack:**

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Language:** Bahasa Indonesia
- **Layout Principle:** Mobile-first, no gradient, single-color background
- **Map:** Google Maps Embed for contact section

---

## 2. Goals & Objectives

### 🎯 Primary Goals

- Provide a clear and trustworthy online presence for the construction company.
- Generate leads through the contact form.
- Display portfolio (gallery) and list of services offered.

### 💡 Secondary Goals

- Build fast-loading, responsive website using modern web stack.
- Maintain visual consistency with shadcn UI components.

---

## 3. Design Guidelines

- **Visual Style:**
  - Clean, minimalist, no gradient backgrounds.
  - Single solid background color (e.g., white or light gray).
  - Accent color (e.g., dark blue or construction yellow) for buttons and headings.
  - No excessive shadows or animations — focus on professional feel.
- **Typography:**
  - Use system fonts or a neutral font such as `Inter` or `Poppins`.
- **UI Elements:**
  - All buttons and form elements use components from **shadcn/ui**.
  - Use icons from **lucide-react** if needed.
- **Responsiveness:**
  - Designed **mobile-first** with breakpoints for tablet and desktop.
- **Language:** Entire site in **Bahasa Indonesia**.

---

## 4. Page Structure & Content

### 4.1 Header

- Logo on the left.
- Navigation links: `Beranda`, `Layanan`, `Galeri`, `FAQ`, `Kontak`.
- Sticky on scroll.
- Responsive hamburger menu for mobile.

### 4.2 Hero Section

- Full-width hero image related to construction (e.g., workers, buildings, architecture).
- Overlay text:
  - **Heading:** “Solusi Konstruksi Profesional di Indonesia”
  - **Subheading:** “Melayani pembangunan gedung, rumah, dan infrastruktur dengan kualitas terbaik.”
  - **CTA Button:** “Hubungi Kami” (scrolls to contact section)

### 4.3 Services Section

- Section title: “Layanan Kami”
- 3–6 service cards (use shadcn Card component):
  - Example:
    - “Pembangunan Rumah”
    - “Renovasi Bangunan”
    - “Desain Arsitektur”
    - “Konstruksi Komersial”
- Each card: icon + title + short description.

### 4.4 Gallery Section

- Section title: “Galeri Proyek”
- Grid layout (2 columns on mobile, 4 on desktop).
- Each item shows project image (clickable to enlarge or modal view optional).

### 4.5 FAQ Section

- Section title: “Pertanyaan Umum”
- Use **Accordion component** from shadcn.
- Example questions:
  - “Berapa lama waktu pengerjaan proyek?”
  - “Apakah melayani area luar kota?”
  - “Bagaimana cara konsultasi awal?”
  - “Apakah menyediakan jasa desain?”

### 4.6 Contact Section

- Section title: “Hubungi Kami”
- **Contact Form:**
  - Fields: Nama, Email, Pesan (all from shadcn/ui form components)
  - Submit button: “Kirim Pesan”
- **Google Maps Embed:** showing company office location below the form.
- Company details:
  - Alamat
  - Nomor telepon
  - Email

### 4.7 Footer

- Simple footer with solid background.
- Include:
  - Company name and copyright.
  - Navigation links (optional).
  - Social media icons (optional).

---

## 5. Functional Requirements

| Feature           | Description                                         |
| ----------------- | --------------------------------------------------- |
| Navigation        | Smooth scroll to sections                           |
| Contact Form      | Uses shadcn form UI; submit action placeholder      |
| Google Maps       | Embedded via iframe                                 |
| Responsive Layout | Adjusts to mobile/tablet/desktop                    |
| Accessibility     | Semantic HTML and proper contrast                   |
| Deployment        | Vite production build, deployable on Netlify/Vercel |

---

## 6. Non-Functional Requirements

- **Performance:** Load under 2 seconds on mobile.
- **SEO:** Include meta tags, Open Graph, and descriptive titles.
- **Maintainability:** Clean, modular React components.
- **Security:** Sanitize contact form inputs.

---

## 7. Deliverables

- Source code (React + Vite + Tailwind + shadcn setup)
- Deployed live demo
- Documentation: installation and build guide

---

## 8. Timeline (Suggested)

| Phase | Task                                       | Duration |
| ----- | ------------------------------------------ | -------- |
| 1     | Wireframe & UI design                      | 2 days   |
| 2     | Component structure setup (React + shadcn) | 1 day    |
| 3     | Implement sections                         | 3–4 days |
| 4     | Responsive testing                         | 1 day    |
| 5     | Deployment                                 | 1 day    |

---

## 9. Future Enhancements

- Add blog/news section.
- Integrate WhatsApp chat widget.
- Add image lazy loading for gallery.

---

# Tulas International School — Homepage Redesign

A modern, responsive homepage redesign for Tulas International School, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Website

[View Live Website](https://tis-homepage-redesign-lilac.vercel.app/)

## GitHub Repository

[View Source Code](https://github.com/vishnu25832/tis-homepage-redesign)

---

## Overview

This project is a responsive homepage redesign for Tulas International School.

The website focuses on:

- Modern visual design
- Responsive layouts
- Smooth animations
- Clear navigation
- Academic information
- Campus life presentation
- Admissions call-to-actions
- Mobile-friendly interaction

---

## Features

### Hero Section

- Admissions announcement
- School introduction
- Primary admissions CTA
- Supporting campus statistics
- Responsive student visual
- Animated entrance effects
- Scroll indicator

### About Section

- Introduction to Tulas International School
- Academic and holistic development highlights
- Responsive layout
- Scroll-based reveal animations

### Academics Section

- CBSE curriculum information
- Critical thinking
- Innovative learning
- Technology-enhanced learning
- Experiential learning
- Interactive feature cards

### Campus Life Section

- Campus experience content
- Sports and extracurricular activities
- Student development
- Responsive visual presentation

### Navigation

- Desktop navigation
- Mobile hamburger menu
- Admissions CTA
- Phone contact link
- Smooth section navigation

### Footer

- School branding
- Navigation links
- Contact information
- Admissions link
- Official website link
- Back-to-top navigation

---

## Animations & Interactions

The website uses Framer Motion for:

- Scroll reveal animations
- Hero entrance animations
- Floating elements
- Hover interactions
- Scroll progress indicator
- Custom cursor effects

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint

---

## Project Structure

```text
tis-homepage-redesign/
│
├── public/
│   └── images/
│       ├── ladyInPink.png
│       └── tis-logo.png
│
├── src/
│   ├── app/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── animation/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ScrollReveal.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       ├── AcademicsSection.tsx
│   │       ├── CampusLifeSection.tsx
│   │       └── HeroSection.tsx
│   │
│   └── data/
│       ├── navigation.ts
│       └── site.ts
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
````

---

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd tis-homepage-redesign
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Build

To create a production build:

```bash
npm run build
```

The project currently builds successfully with Next.js.

---

## Deployment

The website is deployed using Vercel.

Every production deployment generates a publicly accessible URL.

**Live:** `https://tis-homepage-redesign-lilac.vercel.app/`

---

## Responsive Design

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation switches to a mobile menu on smaller screens, while the page sections adapt their layouts and typography responsively.

---

## Contact

**Tulas International School**

Dehradun, India

Official Website: [https://tis.edu.in/](https://tis.edu.in/)

Admissions: [https://admission.tis.edu.in/](https://admission.tis.edu.in/)

````
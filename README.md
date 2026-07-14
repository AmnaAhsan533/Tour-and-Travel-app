# Explore Pakistan — Responsive Travel Portal

A responsive, modular, and high-performance travel portal designed to showcase the diverse landscapes, cultural events, and heritage sites of Pakistan. Built using React, Vite, and styled with utility-first Tailwind CSS.

---

## 🚀 Live Demo
Deploy URL: (https://tour-and-travel-app-4pdb.vercel.app/)

---

## 🛠️ Technical Stack
* **Core:** React (Functional Components)
* **Build Tool:** Vite (For lightning-fast bundling & Hot Module Replacement)
* **Styling:** Tailwind CSS (Utility-first framework)
* **Routing:** React Router DOM (Client-side routing with active state tracking)
* **Icons:** Lucide React

---

## 🏗️ Architecture & Reusable Components
To avoid redundant code and ensure scalable maintenance, the layout has been broken down into granular, reusable React components:

1.  **`Navbar`**: Responsive header featuring a backdrop glassmorphism effect (`backdrop-blur`), active routing underlines using custom NavLink callbacks, and a mobile-toggle hamburger menu.
2.  **`Header`**: A reusable Hero section configured with an overlaid dark vignette to maintain high text-contrast and readability over changing photographic backgrounds.
3.  **`Features`**: A grid-based value proposition component ("Why Choose Us") using dynamic rendering.
4.  **`FeaturedDestination`**: A card matrix featuring top-tier travel packages, using local fallback error-handling for images.
5.  **`GalleryCard`**: A highly reusable UI card accepting props (`title`, `region`, `category`, `imageSrc`) featuring smooth scale-on-hover scale transforms and absolute-positioned details.
6.  **`Footer`**: Multi-column bottom layout integrating navigation, contact coordinates, and an interactive newsletter placeholder.

Mastering Modular Props Architecture

Instead of hardcoding six separate HTML blocks on the Gallery page, I designed a single, declarative `GalleryCard` component. This taught me how to decouple static layout designs from dynamic data arrays. The card accepts customizable parameters as props and dynamically generates cards using JavaScript’s `.map()` array helper:
```jsx
const GalleryCard = ({ title, region, category, imageSrc }) => { ... }

---

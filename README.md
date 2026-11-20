# 3arabety - Car Service & Parts Marketplace

![3arabety Logo](public/Logo.png)

## Overview

3arabety (عربيتي - "My Car" in Egyptian Arabic) is a bilingual (Arabic / English) car service platform and parts marketplace built with React. It connects car owners with a wide range of automotive services including mechanical repairs, emergency assistance, inspections, towing, car wash and specialty services, plus an online shop for parts and accessories.

## 🔗 Live Demo

Check out the live demo of 3arabety:
https://3arabety.vercel.app/

## 🚗 Features

- **Arabic & English**
  - Arabic (right-to-left) is the default language on the first visit
  - One-click language switch in the header; the choice is remembered
  - Full RTL layout, Arabic plural rules and localized prices (`ج.م` / `EGP`)
  - Search works with Arabic or English keywords on every page

- **Multiple Service Categories**
  - Mechanical Repairs
  - Emergency Assistance (24/7)
  - Inspection Services
  - Specialty Services
  - Towing Service
  - Car Wash & Care

- **Online Shop**
  - 55 products across 13 categories
  - Filtering by category, car brand and price range, with sorting and grid/list views
  - Shopping cart with optional installation service and VAT calculation
  - Multi-step checkout

- **Service Booking System**
  - Booking modal on every service and package
  - Date and time scheduling

- **Location Finder**
  - Interactive map of service centers in Alexandria
  - Live "open now" status (Cairo time), filters by type, distance and rating
  - Directions via Google Maps

- **Performance**
  - All images are bundled with the site as optimized WebP (no hot-linking to third-party hosts)
  - Self-hosted fonts (Poppins + Cairo), lazy-loaded images and route-level code splitting

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Routing**: React Router
- **Styling**: Tailwind CSS (logical properties for RTL support)
- **Internationalization**: lightweight built-in i18n layer (`src/i18n`)
- **Icons**: React Feather, React Icons
- **Maps**: Leaflet with React Leaflet
- **State Management**: React Context API

## 📋 Project Structure

```
src/
├── App.js                  # Routes (pages are lazy-loaded)
├── index.js                # Entry point, fonts and i18n provider
├── assets/images/          # Optimized WebP photos and SVG brand logos
├── components/
│   ├── common/             # Shared UI (ProductCard, BookingModal, search, cart...)
│   ├── home/               # Home page sections
│   ├── layout/             # Header and Footer
│   └── services/           # Building blocks shared by the service pages
├── context/                # Cart and booking state
├── data/                   # Products, services and locations
├── hooks/                  # Reusable hooks
├── i18n/
│   ├── index.js            # I18nProvider, useTranslation(), formatting helpers
│   └── locales/{ar,en}/    # Translations
├── pages/                  # Route pages (shop, checkout, locations, services...)
└── utils/                  # Bilingual search helpers
```

## 🌍 Translations

All user-facing text lives in `src/i18n/locales/ar` and `src/i18n/locales/en`. Inside a component:

```jsx
import { useTranslation } from '../i18n';

const Example = () => {
  const { t, formatPrice, language } = useTranslation();
  return <p>{t('shop.title')} - {formatPrice(1299.99)}</p>;
};
```

To add a product, add an entry to `src/data/products.js` (with its image in `src/assets/images/products`) and its name/description under `products` in both locale files.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omarhany04/3arabety
   cd 3arabety
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Scripts

- `npm start` - development server
- `npm test` - run the test suite
- `npm run build` - production build in `build/`

## 🔄 Workflow

1. **User Journey**:
   - Browse services or shop for parts
   - Select desired service or product
   - Make bookings or add items to cart
   - Complete checkout process
   - Track service status

2. **Admin Features** (Future Development):
   - Manage services and products
   - Handle bookings and orders
   - Customer management
   - Analytics and reporting

## 🔜 Roadmap

- User authentication system
- Service provider accounts
- Real-time booking status updates
- Mobile application
- Loyalty program
- Review and rating system

## 📄 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Leaflet](https://leafletjs.com/) and [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors
- [React Feather Icons](https://github.com/feathericons/react-feather)
- Product and service photos: [Unsplash](https://unsplash.com/license) contributors
- Car brand marks: [Simple Icons](https://simpleicons.org/) (CC0). All trademarks belong to their respective owners.
- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) and [Cairo](https://fonts.google.com/specimen/Cairo) (SIL Open Font License), self-hosted via Fontsource

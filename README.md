# 3arabety - Car Service & Parts Marketplace

![3arabety Logo](https://i.ibb.co/bRWCWmBm/Logo.png)

## Overview

3arabety (which means "My Car" in Arabic) is a comprehensive car service platform and parts marketplace built with React. The platform connects car owners with a wide range of automotive services including mechanical repairs, emergency assistance, car wash services, and a shop for purchasing car parts and accessories.

## 🔗 Live Demo
Check out the live demo of 3arabety:
https://3arabety.vercel.app/

## 🚗 Features

- **Multiple Service Categories**
  - Mechanical Repairs
  - Emergency Assistance (24/7)
  - Inspection Services
  - Specialty Services
  - Towing Service
  - Car Wash & Care

- **Online Shop**
  - Extensive catalog of car parts and accessories
  - Advanced filtering by category, brand, price range
  - Shopping cart functionality with installation options
  - Checkout process

- **Service Booking System**
  - Interactive booking forms
  - Service package selection
  - Date and time scheduling

- **Location Finder**
  - Interactive map with service center locations
  - Detailed information for each location
  - Filtering by service type, distance, and ratings

- **User Interface**
  - Responsive design for all devices
  - Modern, clean aesthetic with Tailwind CSS
  - Intuitive navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 
- **Routing**: React Router 
- **Styling**: Tailwind CSS 
- **Icons**: React Feather, React Icons
- **Maps**: Leaflet with React Leaflet
- **State Management**: React Context API
- **Animation**: CSS transitions and animations

## 📋 Project Structure

```
Directory structure:
└── ├── README.md
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        ├── setupTests.js
        ├── components/
        │   ├── common/
        │   │   ├── BookingModal.js
        │   │   ├── BookNowButton.js
        │   │   ├── ContactForm.js
        │   │   ├── FAQItem.js
        │   │   ├── ModernSearch.js
        │   │   ├── PricingCard.js
        │   │   ├── ProductCard.js
        │   │   ├── ScrollToTop.js
        │   │   ├── ServiceCard.js
        │   │   └── shop/
        │   │       ├── BrandFilter.js
        │   │       ├── Cart.js
        │   │       └── CartButton.js
        │   ├── home/
        │   │   ├── BrandsSection.js
        │   │   ├── ContactSection.js
        │   │   ├── Hero.js
        │   │   ├── SearchBar.js
        │   │   ├── ServicesOverview.js
        │   │   ├── ShopSection.js
        │   │   ├── Testimonials.js
        │   │   └── WhyChooseUs.js
        │   └── layout/
        │       ├── Footer.js
        │       ├── Header.js
        │       └── Navbar.js
        ├── context/
        │   ├── BookingContext.js
        │   └── CartContext.js
        └── pages/
            ├── Checkout.js
            ├── Contact.js
            ├── Home.js
            ├── Locations.js
            ├── SearchResults.js
            ├── Shop.js
            └── services/
                ├── CarWashCare.js
                ├── EmergencyAssistance.js
                ├── InspectionServices.js
                ├── MechanicalRepairs.js
                ├── SpecialtyServices.js
                └── TowingService.js

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omarhany04/3arabety
   cd 3arabety
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`


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
- Multi-language support

## 📄 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Leaflet](https://leafletjs.com/)
- [React Feather Icons](https://github.com/feathericons/react-feather)
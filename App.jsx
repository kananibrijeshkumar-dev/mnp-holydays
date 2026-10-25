import { useState, useEffect } from 'react';
import './App.css';

// --- PREMIUM 3D SVG VECTOR ICONS ---
export const IconPhone3D = () => (
  <svg viewBox="0 0 64 64" className="icon-3d-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="phoneGlow" cx="30%" cy="25%" r="75%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="45%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#075985" />
      </radialGradient>
      <linearGradient id="phoneShine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>
      <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0369A1" floodOpacity="0.5" />
      </filter>
    </defs>
    {/* Base Sphere */}
    <rect x="4" y="4" width="56" height="56" rx="28" fill="url(#phoneGlow)" filter="url(#phoneShadow)" />
    {/* 3D Glass Highlights */}
    <path d="M10 22C14 11 26 7 38 7C49 7 54 11 54 20C44 14 30 13 10 22Z" fill="url(#phoneShine)" />
    {/* Metallic Phone Receiver */}
    <path d="M22.5 19.5C21.6 19.5 20.8 19.8 20.2 20.4L18.2 22.4C16.8 23.8 16.4 25.8 17.2 27.7C19.3 32.4 23 37.2 27.7 41.5C32.2 45.6 37.3 48.9 42.2 50.4C44.1 51 46.1 50.4 47.5 48.9L49.5 46.9C50.7 45.7 50.7 43.8 49.5 42.6L44.5 37.6C43.3 36.4 41.4 36.4 40.2 37.6L38.4 39.4C37.9 39.2 36.4 38.4 34.3 36.6C32.1 34.5 31.2 33.1 30.9 32.5L32.8 30.6C34 29.4 34 27.5 32.8 26.3L27.8 21.3C26.4 19.9 24.3 19.5 22.5 19.5Z" fill="#FFFFFF" />
    {/* Sound Wave Accents */}
    <path d="M42 20C45 23 46.5 27 46.5 31" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
    <path d="M46.5 15.5C51 19.5 53 25 53 31" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const IconWhatsApp3D = () => (
  <svg viewBox="0 0 64 64" className="icon-3d-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="waGlow" cx="30%" cy="25%" r="75%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="45%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#128C7E" />
      </radialGradient>
      <linearGradient id="waShine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
      </linearGradient>
      <filter id="waShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#16A34A" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="28" fill="url(#waGlow)" filter="url(#waShadow)" />
    <path d="M10 22C14 11 26 7 38 7C49 7 54 11 54 20C44 14 30 13 10 22Z" fill="url(#waShine)" />
    {/* Chat Bubble */}
    <path d="M32 16C23.2 16 16 23.2 16 32C16 35.1 16.9 38 18.5 40.5L16.5 48L24.3 46C26.6 47.3 29.2 48 32 48C40.8 48 48 40.8 48 32C48 23.2 40.8 16 32 16Z" fill="#FFFFFF" />
    {/* Phone icon inside bubble */}
    <path d="M26.2 24.8C25.7 23.7 25.2 23.7 24.7 23.7C24.3 23.7 23.8 23.7 23.3 24.2C22.8 24.7 21.5 25.9 21.5 28.3C21.5 30.7 23.3 33 23.5 33.3C23.8 33.7 26.9 38.6 31.7 40.6C35.7 42.3 36.5 41.9 37.4 41.8C38.3 41.7 40.3 40.6 40.7 39.4C41.1 38.2 41.1 37.2 41 37C40.9 36.8 40.5 36.7 40 36.4C39.5 36.2 37 35 36.5 34.8C36.1 34.6 35.7 34.5 35.4 35C35 35.6 34 36.8 33.7 37.2C33.4 37.5 33.1 37.6 32.6 37.3C32.1 37.1 30.5 36.6 28.6 34.9C27.1 33.6 26.1 32 25.8 31.5C25.5 31 25.8 30.7 26 30.5C26.3 30.2 26.6 29.8 26.8 29.5C27.1 29.2 27.2 29 27.4 28.6C27.6 28.2 27.5 27.9 27.4 27.6C27.3 27.4 26.7 25.9 26.2 24.8Z" fill="#128C7E" />
  </svg>
);

// Official High-Precision WhatsApp Vector Icon
export const IconWhatsApp = ({ size = 18, color = "#FFFFFF", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    className={`wa-btn-icon ${className}`} 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.64 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.22 19.78 8.01 19.06L7.72 18.89L4.61 19.71L5.44 16.68L5.25 16.38C4.46 15.12 4.04 13.54 4.04 11.91C4.04 7.37 7.74 3.67 12.04 3.67ZM8.84 7.15C8.65 7.15 8.35 7.22 8.1 7.49C7.85 7.76 7.15 8.42 7.15 9.77C7.15 11.12 8.13 12.42 8.27 12.61C8.41 12.8 10.19 15.55 12.92 16.73C13.57 17.01 14.07 17.18 14.47 17.31C15.13 17.52 15.73 17.49 16.2 17.42C16.73 17.34 17.83 16.75 18.06 16.1C18.29 15.45 18.29 14.89 18.22 14.77C18.15 14.65 17.96 14.58 17.68 14.44C17.4 14.3 16.03 13.62 15.78 13.53C15.53 13.44 15.35 13.39 15.16 13.67C14.98 13.95 14.45 14.58 14.29 14.77C14.13 14.95 13.97 14.98 13.69 14.84C13.41 14.7 12.52 14.41 11.46 13.47C10.64 12.73 10.08 11.83 9.92 11.55C9.76 11.27 9.9 11.12 10.04 10.98C10.17 10.85 10.33 10.64 10.47 10.48C10.61 10.32 10.66 10.2 10.75 10.02C10.84 9.83 10.8 9.67 10.73 9.53C10.66 9.39 10.1 8.02 9.87 7.46C9.64 6.92 9.41 7 9.24 6.99C9.08 6.99 8.89 7.15 8.84 7.15Z" />
  </svg>
);

// Clean Vector Itinerary Document Icon
export const IconItinerary = ({ size = 16, color = "currentColor", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

export const IconInstagram3D = () => (
  <svg viewBox="0 0 64 64" className="icon-3d-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="igBase" cx="20%" cy="110%" r="120%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="70%" stopColor="#F56040" />
        <stop offset="85%" stopColor="#FD1D1D" />
        <stop offset="95%" stopColor="#E1306C" />
        <stop offset="100%" stopColor="#C13584" />
      </radialGradient>
      <radialGradient id="igGlowTop" cx="85%" cy="15%" r="75%">
        <stop offset="0%" stopColor="#833AB4" />
        <stop offset="60%" stopColor="#405DE6" stopOpacity="0.85" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="igShine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>
      <filter id="igShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#C13584" floodOpacity="0.5" />
      </filter>
    </defs>
    {/* 3D Curved Squircle */}
    <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#igBase)" filter="url(#igShadow)" />
    <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#igGlowTop)" />
    {/* Glass Top Curve */}
    <path d="M7 18C10 10 18 6 30 6C42 6 51 9 55 16C45 11 30 11 7 18Z" fill="url(#igShine)" />
    {/* Camera Body */}
    <rect x="17" y="17" width="30" height="30" rx="9" stroke="#FFFFFF" strokeWidth="3" fill="none" />
    {/* Camera Lens */}
    <circle cx="32" cy="32" r="7.5" stroke="#FFFFFF" strokeWidth="3" fill="none" />
    {/* Lens Flash */}
    <circle cx="40.5" cy="23.5" r="2" fill="#FFFFFF" />
  </svg>
);

export const IconFacebook3D = () => (
  <svg viewBox="0 0 64 64" className="icon-3d-svg" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="fbGlow" cx="30%" cy="25%" r="75%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#1877F2" />
        <stop offset="100%" stopColor="#0B52B0" />
      </radialGradient>
      <linearGradient id="fbShine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>
      <filter id="fbShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1877F2" floodOpacity="0.5" />
      </filter>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="28" fill="url(#fbGlow)" filter="url(#fbShadow)" />
    <path d="M10 22C14 11 26 7 38 7C49 7 54 11 54 20C44 14 30 13 10 22Z" fill="url(#fbShine)" />
    {/* Bold 3D 'f' Symbol */}
    <path d="M37.5 33.5L38.4 27.5H32.7V23.6C32.7 21.9 33.5 20.3 36.1 20.3H38.7V15.2C38.7 15.2 36.3 14.8 34.1 14.8C29.4 14.8 26.3 17.6 26.3 22.8V27.5H21V33.5H26.3V48H32.7V33.5H37.5Z" fill="#FFFFFF" />
  </svg>
);

// --- OFFICIAL MNP HOLIDAYS ALL 19 PROMOTIONAL FLYERS & BROCHURES ---
export const FLYERS_DATA = [
  {
    id: 'fl-1',
    title: 'Thailand Tour Package (4N/5D)',
    category: 'packages',
    tag: 'Official Package Flyer',
    price: '3★ ₹14,999 | 4★ ₹17,999',
    desc: 'Explore the Land of Smiles! Includes Coral Island with lunch, Pattaya City tour, Tiger Park, Sunset Yacht party with liqueur, breakfast & airport transfers. No fixed dates.',
    image: '/photos/mnp1.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-2',
    title: 'Singapore, Malaysia & Thailand Group Departure',
    category: 'departures',
    tag: 'Ex-Ahmedabad & Mumbai',
    price: '10 Nights / 11 Days',
    desc: 'Fixed departure dates (Dec 2026 to Apr 2027). Includes return flight tickets, daily breakfast and dinner, all transfer sightseeing tickets, and airport pickups.',
    image: '/photos/mnp2.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-3',
    title: 'Kumbhalgarh & Udaipur Top Hotels Booking',
    category: 'hotels',
    tag: 'Verified Resorts',
    price: 'Best Rates Guaranteed',
    desc: 'Booking available for 20+ top luxury resorts: Club Mahindra, Lemon Tree, Radisson Blu, Raajsa Resort, Sajjanbagh, Via Lakhela, and scenic valley stays.',
    image: '/photos/mnp3.jpeg',
    branches: 'Ahmedabad: 97122 04028 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-4',
    title: 'Tourist Visa / E-Visa Fast Assistance',
    category: 'visas',
    tag: '7 to 10 Working Days',
    price: 'Hassle-Free Processing',
    desc: 'Fast approvals for Singapore, Bali, Vietnam, Cambodia, Hong Kong, Azerbaijan, Kazakhstan, Georgia, and Uzbekistan.',
    image: '/photos/mnp4.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-5',
    title: 'Magical Udaipur Group Tour (2N/3D)',
    category: 'departures',
    tag: 'Fixed Group Tour',
    price: 'ONLY ₹7,999/- Per Person',
    desc: '13-14-15 November 2026 departure! Full 3-day itinerary: City Palace, Lake Pichola, Bahubali Hills, Shilpgram, cultural folk dance show, DJ party & Shrinathji Darshan.',
    image: '/photos/mnp5.jpeg',
    branches: 'Ahmedabad: 97122 04028'
  },
  {
    id: 'fl-6',
    title: 'Dubai Tourist Visa / E-Visa Assistance',
    category: 'visas',
    tag: 'Explore City of Dreams',
    price: '7 to 10 Working Days',
    desc: 'Safe, reliable & hassle-free Dubai visa processing with dedicated documentation assistance and fast approvals.',
    image: '/photos/mnp6.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-7',
    title: 'Family Tours - Cherish Every Moment',
    category: 'packages',
    tag: 'Family Holidays',
    price: 'Custom Family Plans',
    desc: 'Family-friendly vacations across Mountains, Beaches, Heritage forts, and scenic Road Trips with comfortable private transport and kid-friendly stays.',
    image: '/photos/mnp7.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-8',
    title: 'Corporate Tours & MICE Solutions',
    category: 'corporate',
    tag: 'Work Hard, Travel Smart',
    price: 'Custom Corporate Proposals',
    desc: 'Seamless corporate travel solutions: group flight bookings, luxury convention hotels, executive AC coaches, team building, and gala DJ nights.',
    image: '/photos/mnp8.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-9',
    title: 'Couple Tour - Romantic Escapes',
    category: 'packages',
    tag: 'Romantic Getaways',
    price: 'Better Together Deals',
    desc: 'Unforgettable couple vacations to Goa, Udaipur, Manali, and Andaman with candlelight beach dining and private luxury stays.',
    image: '/photos/mnp9.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-10',
    title: 'Visitor Visa Worldwide (USA, UK, Canada, Australia, Schengen)',
    category: 'visas',
    tag: 'Global Visa Desk',
    price: 'Document Assistance',
    desc: 'Tourist Visa, Family Visa, Business Visa, and Student Visa processing with complete documentation and expert file preparation.',
    image: '/photos/mnp10.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-11',
    title: 'Air Ticket Booking (Domestic & International)',
    category: 'services',
    tag: 'Best Airfares',
    price: 'Quick Confirmation',
    desc: 'Safe & secure flight bookings, exclusive airline deals, quick confirmation, and 24/7 flight customer support.',
    image: '/photos/mnp11.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-12',
    title: 'Hotel Booking (Domestic & International)',
    category: 'hotels',
    tag: 'Comfort & Luxury',
    price: 'Best Deals Guaranteed',
    desc: 'Stay in comfort, travel in style! Verified 3★, 4★, and 5★ hotels and heritage boutique resorts across India and worldwide.',
    image: '/photos/mnp12.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-13',
    title: 'Tourist Visa / E-Visa Destinations Showcase',
    category: 'visas',
    tag: 'Explore World Hassle-Free',
    price: '7 to 10 Working Days',
    desc: 'Comprehensive visa services for Singapore, Bali, Vietnam, Cambodia, Hong Kong, Azerbaijan, Kazakhstan, Georgia, and Uzbekistan.',
    image: '/photos/mnp13.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-14',
    title: 'International Tour Package (Paris, Santorini, Dubai, NY, Bali)',
    category: 'packages',
    tag: 'Global Dream Tours',
    price: 'From Dream to Destination',
    desc: 'World tour vacations with global destinations, hassle-free visa handling, premium verified hotels, and fully customized holiday plans.',
    image: '/photos/mnp14.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171 / 91367 74277'
  },
  {
    id: 'fl-15',
    title: 'Vietnam 3 Cities Package (6 Nights / 7 Days)',
    category: 'packages',
    tag: 'Bestseller Vietnam',
    price: '₹59,999/- without flight*',
    desc: 'Three Cities One Unforgettable Journey: 2N Hanoi (Flower Garden Hotel), 2N Da Nang (Cicilla Hotel), 2N Ho Chi Minh (Adora Art Hotel). Includes 6 buffet breakfasts, Ninh Binh, Ba Na Hills & Mekong Delta.',
    image: '/photos/mnp15.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-16',
    title: 'Vietnam Grand 5 Destinations (9 Nights / 10 Days)',
    category: 'packages',
    tag: 'Ha Long Bay Cruise & Phu Quoc',
    price: '₹89,999/- without flight*',
    desc: '5 Destinations One Amazing Journey: Hanoi, Da Nang, Ho Chi Minh, Phu Quoc Island & 1 Night Overnight on La Regina Royal Cruise (Ha Long Bay). 9 buffet breakfasts included.',
    image: '/photos/mnp16.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-17',
    title: 'Vietnam Phu Quoc Island Adventure (4 Nights / 5 Days)',
    category: 'packages',
    tag: 'Island & Safari',
    price: '₹49,999/- rate per adult',
    desc: '4 Nights Times Corner Amalfi Hotel Phu Quoc. Includes Grand World Venice water taxi, Vin Pearl Safari, 4 Island speedboat tour, Cable Car, Sunset Town & Kiss Bridge.',
    image: '/photos/mnp17.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 98251 79524 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-18',
    title: 'Vietnam Hanoi, Ha Long Bay Cruise & Da Nang (5 Nights / 6 Days)',
    category: 'packages',
    tag: 'Cruise & Culture',
    price: '₹54,999/- rate per adult',
    desc: '2N Flower Garden Hanoi, 1N La Regina Royal Cruise (Ha Long Bay), 2N Cicilla Hotel Da Nang. 5 buffet breakfasts, Ninh Binh, Marble Mountain, Hoi An lantern boat & Ba Na Hills.',
    image: '/photos/mnp18.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 98251 79524 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-19',
    title: 'Golden City Jaisalmer Desert Camp & Fort (3 Nights / 4 Days)',
    category: 'packages',
    tag: 'Rajasthan Desert Hit',
    price: '₹25,500/- Per Couple',
    desc: 'Arrival & Sam Sand Dunes Swiss luxury tent, camel safari, jeep dune bashing, Tanot Mata Temple, Longewala Border, Kuldhara abandoned village, Jaisalmer Fort & Patwon Ki Haveli.',
    image: '/photos/mnp19.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 98251 79524'
  }
];

// --- COMPREHENSIVE TOUR PACKAGES DATA (FEATURING OFFICIAL FLYERS) ---
const PACKAGES_DATA = [
  // ==========================================
  // 1. DOMESTIC INDIA TOURS
  // ==========================================
  {
    id: 'dom-1',
    category: 'domestic',
    title: 'Magical Udaipur Group Tour (Official Departure)',
    tag: 'Official Flyer Deal',
    duration: '3 Days / 2 Nights (13-15 Nov 2026)',
    desc: 'Experience royal Udaipur and Shrinathji! Highlights include City Palace, Lake Pichola, Bahubali Hills, Shilpgram, traditional Rajasthani culture show, DJ party, and full dining.',
    price: '₹7,999/- per person',
    location: 'Udaipur & Shrinathji, Rajasthan',
    rating: '★ 4.9 (Official Group Tour)',
    inclusions: ['City Palace & Jagdish Temple', 'Lake Pichola & Fateh Sagar Lake', 'Bahubali Hills & Shilpgram Tour', 'Rajasthani Culture Show & DJ Party', 'Shrinathji Darshan Sightseeing', 'All Meals (Breakfast, Lunch, Dinner)'],
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp5.jpeg'
  },
  {
    id: 'dom-kumbhalgarh',
    category: 'domestic',
    title: 'Kumbhalgarh & Udaipur Luxury Resorts & Fort Tour',
    tag: 'Official Flyer Booking',
    duration: 'Flexible 3D/2N or 4D/3N',
    desc: 'Booking available for over 20+ top luxury resorts: Club Mahindra, Radisson Blu, Lemon Tree, Raajsa Resort, Sajjanbagh, Via Lakhela, and scenic valley stays with Kumbhalgarh Fort Wall safari.',
    price: 'Best Rates Guaranteed',
    location: 'Kumbhalgarh & Udaipur, Rajasthan',
    rating: '★ 5.0 (20+ Top Resorts)',
    inclusions: ['20+ Verified Luxury Heritage Resorts', 'Kumbhalgarh Great Wall Excursion', 'Private AC Chauffeur Sedan / SUV', 'Daily Royal Buffet Breakfast & Dinner', 'Scenic Valley Views & Pool Access'],
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp3.jpeg'
  },
  {
    id: 'dom-7',
    category: 'domestic',
    title: 'Golden City Jaisalmer Desert Camp & Fort Package',
    tag: 'Official Flyer Deal',
    duration: '4 Days / 3 Nights',
    desc: 'Arrival welcome with tikka, aarti & dhol, luxury Swiss tent stay at Sam Sand Dunes, camel safari, jeep dune bashing, Tanot Mata Temple, Longewala Border, Kuldhara village & Jaisalmer Fort.',
    price: '₹25,500/- Per Couple',
    location: 'Jaisalmer & Sam Sand Dunes, Rajasthan',
    rating: '★ 5.0 (Desert Camp Special)',
    inclusions: ['Luxury Swiss Tent Stay at Sam Sand Dunes', 'Camel Safari & Sunset Jeep Dune Bashing', 'Tanot Mata Temple & Longewala Border Visit', 'Live Langa Music, Folk Dance & Fire Show', 'Jaisalmer Fort, Patwon Ki Haveli & Gadisar Lake', 'Delicious Rajasthani Meals Included'],
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp19.jpeg'
  },
  {
    id: 'dom-2',
    category: 'domestic',
    title: 'Enchanting Ooty & Coonoor Hills',
    tag: 'Trending Hill Station',
    duration: '5 Days / 4 Nights',
    desc: 'Board the historic UNESCO Nilgiri Toy Train, take misty walks across sprawling emerald tea gardens, marvel at Botanical Gardens, and catch sunset panoramas over Doddabetta Peak.',
    price: '₹18,500*',
    location: 'Ooty & Coonoor, Tamil Nadu',
    rating: '★ 4.8 (240+ reviews)',
    inclusions: ['Hillview Luxury Resort', 'Nilgiri Heritage Toy Train Ride', 'Tea Factory & Fresh Tasting Tour', 'Dedicated Sightseeing Cab', 'Daily Breakfast & Dinner'],
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dom-3',
    category: 'domestic',
    title: 'Heavenly Kashmir, Gulmarg & Pahalgam',
    tag: 'Crown of India',
    duration: '6 Days / 5 Nights',
    desc: 'Stay on a handcrafted cedar houseboat on Dal Lake, ride the world’s highest Gulmarg Gondola over snowy peaks, explore the saffron fields and Betaab Valley of Pahalgam.',
    price: '₹24,999*',
    location: 'Kashmir, India',
    rating: '★ 4.9 (480+ reviews)',
    inclusions: ['1 Night Luxury Houseboat', '4 Nights 4★ Hotel', 'Dal Lake Shikara Ride', 'Gulmarg Cable Car Assistance', 'Breakfast & Dinner (MAP Plan)'],
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dom-4',
    category: 'domestic',
    title: 'Vibrant Goa Beach & Watersports',
    tag: 'Top Beach Vacation',
    duration: '4 Days / 3 Nights',
    desc: 'Feel the ocean breeze on Calangute and Baga beaches, parasail over turquoise waves, experience a Mandovi River evening cruise with live Goan folk music, and visit Old Goa churches.',
    price: '₹14,500*',
    location: 'North & South Goa, India',
    rating: '★ 4.8 (390+ reviews)',
    inclusions: ['4★ Beachside Resort with Pool', 'Sunset River Cruise', 'Speedboat & Parasailing Combo', 'AC Sedan / SUV Transfers', 'Daily Breakfast Buffet'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dom-5',
    category: 'domestic',
    title: 'God’s Own Kerala, Munnar & Alleppey',
    tag: 'Nature & Wellness',
    duration: '5 Days / 4 Nights',
    desc: 'Drive through misty tea estates in Munnar, encounter elephants at Periyar sanctuary in Thekkady, and sleep aboard a private luxury houseboat cruising the palm backwaters of Alleppey.',
    price: '₹19,999*',
    location: 'Kerala, India',
    rating: '★ 4.9 (340+ reviews)',
    inclusions: ['Private Houseboat Cruise', 'Munnar 4★ Tea Valley Resort', 'Spice Plantation Guided Tour', 'Private Dedicated Vehicle', 'All Meals on Houseboat'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // 2. INTERNATIONAL TOURS
  // ==========================================
  {
    id: 'int-3',
    category: 'international',
    title: 'Thailand Tour Package (Pattaya, Coral Island & Yacht Party)',
    tag: 'Official Flyer Deal',
    duration: '5 Days / 4 Nights',
    desc: 'Explore the Land of Smiles! Coral Island with lunch, Pattaya City tour (Big Buddha, Gems Gallery, View Point), 1st day breakfast at Tiger Topia, Sunset Yacht party with liqueur & airport transfers.',
    price: '3★ ₹14,999 | 4★ ₹17,999',
    location: 'Bangkok & Pattaya, Thailand',
    rating: '★ 4.9 (MNP Bestseller)',
    inclusions: ['Airport Pickup & Drop Transfers', '1st Day Breakfast at Tiger Topia', 'Daily Buffet Breakfast', 'Coral Island Speedboat Tour with Lunch', 'Pattaya City Tour & View Point', 'Sunset Yacht Party with Liqueur', 'Visa on Arrival FREE for Indians'],
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp1.jpeg'
  },
  {
    id: 'int-5',
    category: 'international',
    title: 'Singapore, Malaysia & Thailand 10N/11D Group Departure',
    tag: 'Official Ex-Ahmedabad & Mumbai',
    duration: '11 Days / 10 Nights',
    desc: 'Specially planned group departure package ex-Ahmedabad & Mumbai! Dates: Dec 2026, Jan, Feb, Mar, Apr 2027. Includes flights, daily breakfast & dinner, all transfer sightseeing tickets, and airport pickups.',
    price: 'Special Group Departure Quote',
    location: 'Singapore, Malaysia & Thailand',
    rating: '★ 5.0 (Fixed Group Departure)',
    inclusions: ['Roundtrip International Flight Tickets', 'Daily Breakfast and Dinner Included', 'All Transfer Sightseeing with Entry Tickets', 'Airport Pickups and Drops Throughout', 'Universal Studios & Sentosa Access', 'Kuala Lumpur, Genting & Bangkok Highlights'],
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp2.jpeg'
  },
  {
    id: 'int-15',
    category: 'international',
    title: 'Vietnam 3 Cities Package (Hanoi, Da Nang & Ho Chi Minh)',
    tag: 'Official Flyer Deal',
    duration: '7 Days / 6 Nights',
    desc: 'Three Cities One Unforgettable Journey: 2N Flower Garden Hanoi Hotel, 2N Cicilla Hotel Da Nang, 2N Adora Art Hotel Ho Chi Minh. 6 Buffet breakfasts, Ninh Binh, Ba Na Hills & Mekong Delta.',
    price: '₹59,999/- without flight*',
    location: 'Hanoi, Da Nang & Ho Chi Minh, Vietnam',
    rating: '★ 4.9 (Popular Vietnam)',
    inclusions: ['2N Stay at Flower Garden Hanoi Hotel', '2N Stay at Cicilla Hotel Da Nang', '2N Stay at Adora Art Hotel Ho Chi Minh', '6 Daily Buffet Breakfasts', 'Hanoi 4 Hours City Tour + Ninh Binh Tour', 'Marble Mountain, Coconut Village & Basket Boat', 'Hoi An Lantern Boat & Ba Na Hills Tour', 'Cu Chi Tunnel & Mekong Delta Tour'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp15.jpeg'
  },
  {
    id: 'int-16',
    category: 'international',
    title: 'Vietnam Grand 5 Destinations (With Ha Long Bay Cruise & Phu Quoc)',
    tag: 'Official Flyer Deal',
    duration: '10 Days / 9 Nights',
    desc: '5 Destinations One Amazing Journey: Hanoi, Da Nang, Ho Chi Minh, Phu Quoc Island & 1 Night Luxury Overnight Cruise on La Regina Royal Cruise (Ha Long Bay). 9 buffet breakfasts included.',
    price: '₹89,999/- without flight*',
    location: 'Hanoi, Da Nang, Ho Chi Minh, Phu Quoc & Ha Long Bay',
    rating: '★ 5.0 (Luxury Cruise Special)',
    inclusions: ['1 Night Stay at La Regina Royal Cruise (Ha Long Bay)', '2N Flower Garden Hanoi + 2N Cicilla Da Nang', '2N Adora Art Hotel Ho Chi Minh', '2N Times Corner Amalfi Hotel Phu Quoc', 'Grand World Tour, Vin Pearl Safari & Speedboat Tour', 'Hanoi City, Ninh Binh & Ba Na Hills Golden Bridge', '9 Daily Buffet Breakfasts'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp16.jpeg'
  },
  {
    id: 'int-17',
    category: 'international',
    title: 'Vietnam Phu Quoc Island Adventure & Safari',
    tag: 'Official Flyer Deal',
    duration: '5 Days / 4 Nights',
    desc: 'Island, Adventure, Culture, Relax! 4 Nights Stay at Times Corner Amalfi Hotel Phu Quoc. Includes Grand World Venice water taxi, Vin Pearl Safari, 4 Island speedboat tour, Cable Car & Kiss Bridge.',
    price: '₹49,999/- rate per adult',
    location: 'Phu Quoc Island, Vietnam',
    rating: '★ 4.9 (Tropical Island)',
    inclusions: ['4 Nights at Times Corner Amalfi Hotel Phu Quoc', 'Grand World Tour with Venice Water Taxi', 'Vin Pearl Safari & Vin Wonder Pass', '4 Island Tour in South by Speedboat', 'One Way Cable Car, Sunset Town & Kiss Bridge', 'Kiss of The Sea Spectacular Show Pass', '4 Daily Buffet Breakfasts'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp17.jpeg'
  },
  {
    id: 'int-18',
    category: 'international',
    title: 'Vietnam Hanoi, Ha Long Bay Cruise & Da Nang',
    tag: 'Official Flyer Deal',
    duration: '6 Days / 5 Nights',
    desc: '2 Nights Flower Garden Hanoi Hotel, 1 Night Luxury La Regina Royal Cruise (Ha Long Bay), 2 Nights Cicilla Hotel Da Nang. 5 buffet breakfasts, Ninh Binh, Marble Mountain, Hoi An lantern boat & Ba Na Hills.',
    price: '₹54,999/- rate per adult',
    location: 'Hanoi, Ha Long Bay & Da Nang',
    rating: '★ 4.9 (Cruise & Heritage)',
    inclusions: ['2N Stay at Flower Garden Hanoi Hotel', '1N Stay on Luxury La Regina Royal Cruise (Ha Long Bay)', '2N Stay at Cicilla Hotel Da Nang', '5 Daily Buffet Breakfasts', 'Hanoi City Tour & Ninh Binh Day Tour', 'Marble Mountain & Coconut Village Basket Boat', 'Hoi An Ancient Town Lantern Boat & Ba Na Hills'],
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp18.jpeg'
  },
  {
    id: 'int-14',
    category: 'international',
    title: 'International Tour Packages (Paris, Santorini, Dubai, NY, Bali)',
    tag: 'Official Flyer Showcase',
    duration: 'Custom 5D to 10D',
    desc: 'From dream to destination, explore the world with our international tours! Global destinations, hassle-free visa handling, premium hotels, and customized packages tailored to you.',
    price: 'Best International Rates',
    location: 'Europe, UAE, Bali & Global',
    rating: '★ 5.0 (World Tour Special)',
    inclusions: ['Global Destinations Coverage', 'Hassle-Free Visa & E-Visa Processing', 'Premium 4★ & 5★ Accommodations', 'Airport Transfers & Guided Sightseeing', 'Customized Family & Group Itineraries'],
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp14.jpeg'
  },
  {
    id: 'int-2',
    category: 'international',
    title: 'Magical Bali Island & Nusa Penida',
    tag: 'Top Rated Tropical',
    duration: '6 Days / 5 Nights',
    desc: 'Soar on iconic swings over Ubud’s lush terraced hills, pray at sacred sea temples like Tanah Lot, ride speedboats to Nusa Penida’s T-Rex cliff, and sip cocktails at Seminyak beach clubs.',
    price: '₹32,500*',
    location: 'Bali, Indonesia',
    rating: '★ 4.9 (560+ reviews)',
    inclusions: ['4★ Ubud & Kuta Resorts', 'Nusa Penida West Island Tour & Boat', 'Bali Jungle Swing Pass', 'Private Chauffeur Daily', 'Airport Pickup & Drop'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'int-4',
    category: 'international',
    title: 'Dazzling Dubai & Abu Dhabi Grandeur',
    tag: 'Luxury Modern Marvel',
    duration: '5 Days / 4 Nights',
    desc: 'Gaze at the planet from Burj Khalifa’s 124th observation deck, thrill yourself with 4x4 desert dune bashing and BBQ belly dance show, and admire the white marble domes of Sheikh Zayed Mosque.',
    price: '₹28,900*',
    location: 'Dubai & Abu Dhabi, UAE',
    rating: '★ 4.9 (510+ reviews)',
    inclusions: ['4★ Luxury City Centre Hotel', 'Burj Khalifa 124th Floor Entry Ticket', 'Desert Safari with 4x4 & BBQ Dinner', 'Dubai Marina Dhow Dinner Cruise', 'UAE Tourist Visa Included'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp6.jpeg'
  },

  // ==========================================
  // 3. SPECIAL HONEYMOON PACKAGES
  // ==========================================
  {
    id: 'hny-flyer',
    category: 'honeymoon',
    title: 'Couple Tour - Romantic Escapes & Honeymoon Getaways',
    tag: 'Official Flyer Deal',
    duration: 'Custom 4D/3N to 6D/5N',
    desc: 'Romantic escapes, unforgettable moments, plan your couple’s getaway now! Romantic destinations in Goa, Udaipur, Manali, and Andaman with candlelight dinners and luxury stays.',
    price: 'Better Together Deals',
    location: 'Goa, Udaipur, Manali, Andaman & Global',
    rating: '★ 5.0 (Couple Specialist)',
    inclusions: ['Handpicked Romantic Resorts & Overwater Villas', 'Candlelight Beach Dinner Setup', 'Flower Bed Decoration & Honeymoon Cake', 'Couple Spa Rejuvenation Session', 'Private Chauffeur Sedan Car Throughout'],
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp9.jpeg'
  },
  {
    id: 'hny-1',
    category: 'honeymoon',
    title: 'Maldives Overwater Luxury Romance',
    tag: 'Pure Romantic Bliss',
    duration: '4 Days / 3 Nights',
    desc: 'Live in a private overwater villa perched directly over turquoise lagoons. Includes complimentary couple spa massage, floating breakfast, and private beach candlelight dinner.',
    price: '₹44,999*',
    location: 'Maldives Islands',
    rating: '★ 5.0 (380+ couples)',
    inclusions: ['Overwater Villa with Pool Access', 'Speedboat Airport Transfers', 'Candlelight 3-Course Beach Dinner', 'Snorkeling & Coral Reef Safari', 'All-Inclusive Dine Around Meals'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hny-2',
    category: 'honeymoon',
    title: 'Bali Romantic Private Pool Villa & Spa',
    tag: 'Signature Couple Getaway',
    duration: '6 Days / 5 Nights',
    desc: 'Unwind in your secluded private villa with fragrant flower petal baths, private clifftop Uluwatu sunset dinner with Kecak fire dance, and catamaran yacht cruise to Lembongan island.',
    price: '₹36,999*',
    location: 'Ubud & Seminyak, Bali',
    rating: '★ 4.9 (310+ couples)',
    inclusions: ['Private Pool Luxury Villa Stay', 'Flower Petal Bath & Couple Massage', 'Uluwatu Clifftop Sunset Dinner', 'Private Chauffeur Car Throughout', 'Honeymoon Cake & Room Setup'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // 4. CORPORATE & MICE TOURS
  // ==========================================
  {
    id: 'corp-flyer',
    category: 'corporate',
    title: 'Corporate Tour - Work Hard, Travel Smart',
    tag: 'Official Flyer Solutions',
    duration: 'Custom Corporate Itinerary',
    desc: 'Work hard, travel smart with seamless corporate travel solutions! Includes group flight bookings, luxury convention hotel reservations, ground luxury coaches, and dedicated corporate support.',
    price: 'Custom Corporate Proposals',
    location: 'Domestic & Global Sectors',
    rating: '★ 5.0 (Corporate Specialist)',
    inclusions: ['Group Flight Bookings & Seat Blocks', '5★ Hotel & Convention Reservations', 'Ground AC Volvo / Luxury Transportation', 'Curated Professional Team Building Facilitator', 'Dedicated 24/7 Corporate Travel Account Manager'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp8.jpeg'
  },
  {
    id: 'corp-1',
    category: 'corporate',
    title: 'Goa Corporate Offsite & Beach Gala Night',
    tag: 'Domestic MICE Specialist',
    duration: '3 Days / 2 Nights',
    desc: 'Energize your organization with a 5-star beachfront conference, customized beach volleyball and team-building challenges, private banquet hall with DJ sound setup, and gala cocktail dinner.',
    price: 'Custom Corporate Quote',
    location: 'North & South Goa, India',
    rating: '★ 4.9 (110+ Corporates)',
    inclusions: ['5★ Beachfront Resort Group Booking', 'State-of-art AC Conference Hall & AV/Projectors', 'Exclusive Gala Dinner & DJ Sound Setup', 'Curated Professional Team Building Facilitator', 'Airport AC Coach Transfers'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corp-2',
    category: 'corporate',
    title: 'Dubai Business, Incentive & Yacht Conclave',
    tag: 'International MICE',
    duration: '4 Days / 3 Nights',
    desc: 'Reward elite partners and top achievers with 5-star skyscraper suites, private luxury chartered mega-yacht networking along Dubai Marina, and desert gala conclave under Bedouin canopies.',
    price: 'Custom Corporate Quote',
    location: 'Dubai & Marina, UAE',
    rating: '★ 5.0 (85+ Corporates)',
    inclusions: ['5★ Sheikh Zayed Road Luxury Hotel', 'Private Chartered Yacht Party with Live DJ', 'Desert Safari Gala Dinner & Entertainment', 'Corporate Group Visa Expedited Processing', 'Dedicated MNP On-Ground Tour Manager'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // 5. SCHOOL & COLLEGE EDUCATIONAL TOURS
  // ==========================================
  {
    id: 'edu-1',
    category: 'educational',
    title: 'Golden Triangle Historical & Heritage Tour',
    tag: 'School & College Domestic',
    duration: '5 Days / 4 Nights',
    desc: 'An inspiring curriculum-aligned expedition exploring Mughal architecture at Delhi Red Fort & Qutub Minar, the timeless wonder of Taj Mahal in Agra, and Jaipur Jantar Mantar astronomy.',
    price: 'Special Institutional Rate',
    location: 'Delhi, Agra & Jaipur',
    rating: '★ 4.9 (160+ Schools)',
    inclusions: ['Student-Safe 3★/4★ Verified Hotels', 'Certified ASI Historian & Archeology Guides', 'All Monument Entries & Audio Guides', 'Nutritious Buffet Meals (Breakfast, Lunch, Dinner)', '24/7 Security Escorts & First Aid Trained Team'],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-2',
    category: 'educational',
    title: 'Singapore Space, Science & STEM Discovery',
    tag: 'International Educational',
    duration: '5 Days / 4 Nights',
    desc: 'Spark scientific curiosity with live STEM experiments at Singapore Science Centre, Omni-Theatre planetarium, Singapore NEWater sustainable water plant, and Universal Studios physics lessons.',
    price: 'Special Student Rate',
    location: 'Singapore',
    rating: '★ 5.0 (55+ Institutions)',
    inclusions: ['Singapore Science Centre & Omni-Theatre Pass', 'Universal Studios STEM Workshop Access', 'Group International Flights & Student Visas', 'Pure Hygienic Indian Meals Daily', 'Experienced Teacher Escorts & Medical Insurance'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // 6. FAMILY TOUR PACKAGES
  // ==========================================
  {
    id: 'fam-flyer',
    category: 'family',
    title: 'Family Tours - Cherish Every Moment, Explore Every Destination',
    tag: 'Official Flyer Deal',
    duration: 'Custom Family Holiday',
    desc: 'Family adventures await! Cherish every moment exploring mountains, pristine beaches, grand heritage palaces, and scenic road trips with safe transport and comfortable family suites.',
    price: 'Best Family Quote',
    location: 'Mountains, Beaches, Heritage & Road Trips',
    rating: '★ 5.0 (Family Specialist)',
    inclusions: ['Family-Friendly Verified Safe Hotels', 'Spacious AC Private Vehicles (Innova / Crysta)', 'Customized Relaxed Itineraries for All Ages', 'Daily Breakfast & Multi-Cuisine Meal Plans', '24/7 Family Assistance Support'],
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    flyer: '/photos/mnp7.jpeg'
  },
  {
    id: 'fam-1',
    category: 'family',
    title: 'Exotic Andaman Island Family Coral Wonder',
    tag: 'Family All-Inclusive',
    duration: '5 Days / 4 Nights',
    desc: 'Gaze at the sunset over Radhanagar Beach on Havelock Island, ride glass-bottom boats over vibrant coral reefs, watch the Cellular Jail light and sound saga, and snorkel with colorful fish.',
    price: '₹26,500*',
    location: 'Port Blair & Havelock Island',
    rating: '★ 4.9 (280+ Families)',
    inclusions: ['Catamaran Sea Cruise between Islands', 'Beachside Family Cottage Stay', 'Glass-Bottom Coral Boat Ride', 'Port Blair Airport Transfers', 'Daily Breakfast & Dinner'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  }
];


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const [flyerCategory, setFlyerCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', label: 'All Packages', icon: '🌟' },
    { id: 'domestic', label: 'Domestic India', icon: '🇮🇳' },
    { id: 'international', label: 'International', icon: '✈️' },
    { id: 'honeymoon', label: 'Honeymoon Special', icon: '💍' },
    { id: 'corporate', label: 'Corporate & MICE', icon: '💼' },
    { id: 'educational', label: 'School & College', icon: '🎓' },
    { id: 'family', label: 'Family Tours', icon: '👨‍👩‍👧‍👦' }
  ];

  const flyerTabs = [
    { id: 'all', label: 'All 19 Official Flyers', icon: '📁' },
    { id: 'packages', label: 'Tour Packages & Specials', icon: '🏝️' },
    { id: 'departures', label: 'Group Departures', icon: '✈️' },
    { id: 'visas', label: 'Visa & E-Visa Desk', icon: '🛂' },
    { id: 'hotels', label: 'Hotels & Resorts', icon: '🏨' },
    { id: 'services', label: 'Air Tickets', icon: '🎫' },
    { id: 'corporate', label: 'Corporate MICE', icon: '💼' }
  ];

  // Multi-token intelligent search across packages & flyers
  const searchTokens = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const allMatchingPackages = PACKAGES_DATA.filter((pkg) => {
    if (searchTokens.length === 0) return true;
    const searchableText = [
      pkg.title,
      pkg.location,
      pkg.tag,
      pkg.desc,
      pkg.duration,
      pkg.price,
      pkg.category,
      (pkg.inclusions || []).join(' ')
    ].join(' ').toLowerCase();

    return searchTokens.every((token) => searchableText.includes(token));
  });

  const filteredPackages = allMatchingPackages.filter((pkg) => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  const filteredFlyers = FLYERS_DATA.filter((flyer) => {
    const matchesCategory = flyerCategory === 'all' || flyer.category === flyerCategory;
    if (searchTokens.length === 0) return matchesCategory;

    const flyerText = [
      flyer.title,
      flyer.subtitle,
      flyer.desc,
      flyer.price,
      flyer.tag,
      flyer.category,
      (flyer.highlights || []).join(' ')
    ].join(' ').toLowerCase();

    const matchesSearch = searchTokens.every((token) => flyerText.includes(token));
    return matchesCategory && matchesSearch;
  });

  const handleBookOnWhatsApp = (pkgTitle, pkgPrice, pkgDuration) => {
    const message = `Hello MNP Holidays! I am interested in booking the "${pkgTitle}" package (${pkgDuration} - ${pkgPrice}). Please share the detailed itinerary, inclusions, and best quote.`;
    window.open(`https://wa.me/919825179624?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFlyerWhatsApp = (flyerTitle, flyerPrice) => {
    const message = `Hello MNP Holidays! I saw your official flyer for "${flyerTitle}" (${flyerPrice}). Please share full itinerary details, departure dates, and best quotation.`;
    window.open(`https://wa.me/919825179624?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Top Notification Bar with Branch Contacts */}
      <div className="top-banner">
        <div className="top-banner-container">
          <span className="top-banner-brand">
            ✨ MNP Holidays Pvt. Ltd. | Official Tour Operator (Ahmedabad & Mumbai)
          </span>
          <div className="top-banner-contacts">
            <span className="banner-branch-group">
              <span className="banner-branch-title">Ahmedabad:</span>
              <a href="tel:+919825179624" className="banner-contact-link">📞 +91 98251 79624</a>
              <span className="banner-dot">•</span>
              <a href="tel:+919712204028" className="banner-contact-link">+91 97122 04028</a>
            </span>
            <span className="banner-dot banner-dot-desktop">•</span>
            <span className="banner-branch-group">
              <span className="banner-branch-title">Mumbai:</span>
              <a href="tel:+919898083171" className="banner-contact-link">📞 +91 98980 83171</a>
            </span>
            <span className="banner-dot banner-dot-desktop">•</span>
            <a href="mailto:mnholidays88@gmail.com" className="banner-contact-link banner-email">
              ✉️ mnholidays88@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="MNP Holidays Home">
            <div className="logo-text-group">
              <span className="logo-accent">MNP</span>
              <span className="logo-name">Holidays</span>
            </div>
            <span className="logo-reg-tag">Pvt. Ltd.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#official-flyers" className="nav-link nav-link-special">
              <span className="flyer-cam-icon">📸</span>
              <span>Official Flyers</span>
              <span className="nav-count-badge">19</span>
            </a>
            <a href="#destinations" className="nav-link">Tour Packages</a>
            <a href="#special-services" className="nav-link">Corporate & Schools</a>
            <a href="#about" className="nav-link">Why Choose Us</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nav-wa"
            >
              <span className="wa-dot"></span>
              <span className="wa-icon">💬</span>
              <span className="wa-text">WhatsApp Desk</span>
            </a>
          </div>

          {/* Mobile & Tablet Quick Actions (WhatsApp & Hamburger) */}
          <div className="nav-mobile-controls">
            <a 
              href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nav-wa-mobile"
              aria-label="Instant WhatsApp Inquiry"
            >
              <span className="wa-dot"></span>
              <span className="wa-icon">💬</span>
              <span className="wa-mobile-text">WhatsApp</span>
            </a>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="mobile-menu-brand">MNP Holidays</span>
              <span className="mobile-menu-badge">Pvt. Ltd. • Official Tours</span>
            </div>
            
            <div className="mobile-nav-items">
              <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">🏠</span>
                <span>Home</span>
              </a>
              <a href="#official-flyers" className="mobile-nav-link mobile-nav-highlight" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">📸</span>
                <span>Official Promotional Flyers</span>
                <span className="mobile-flyer-badge">19 Offers</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">🌍</span>
                <span>All Tour Packages</span>
              </a>
              <a href="#special-services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">💼</span>
                <span>Corporate, Schools & Weddings</span>
              </a>
              <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">🏆</span>
                <span>Why Choose MNP Holidays</span>
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <span className="mobile-nav-icon">📍</span>
                <span>Branch Contact & Inquiry</span>
              </a>
            </div>

            <div className="mobile-branch-cards">
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Ahmedabad Head Office</div>
                <div className="mobile-branch-address">
                  Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad - 382350
                </div>
                <div className="mobile-branch-actions">
                  <a href="tel:+919825179624" className="mobile-branch-call-btn">📞 +91 98251 79624</a>
                  <a href="tel:+919712204028" className="mobile-branch-call-btn">📞 +91 97122 04028</a>
                </div>
              </div>
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Mumbai Branch Office</div>
                <div className="mobile-branch-address">
                  Shop No.8, Rangari Height, Samarth Hanuman Lane, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033
                </div>
                <div className="mobile-branch-actions">
                  <a href="tel:+919898083171" className="mobile-branch-call-btn">📞 +91 98980 83171</a>
                  <a href="tel:+919136774277" className="mobile-branch-call-btn">📞 +91 91367 74277</a>
                </div>
              </div>
            </div>

            <div className="mobile-cta-buttons">
              <a 
                href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20want%20to%20plan%20a%20trip" 
                target="_blank" 
                rel="noreferrer" 
                className="mobile-btn wa"
              >
                <span>💬 WhatsApp Instant Chat & Best Quotes</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enchanting Luxury Hero Section */}
      <section id="home" className="hero">
        <div className="hero-glow-orb hero-glow-1"></div>
        <div className="hero-glow-orb hero-glow-2"></div>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85" 
          alt="World-Class Travel with MNP Holidays" 
          className="hero-bg"
          loading="eager"
        />
        <div className="hero-overlay"></div>

        <div className="hero-content animate-fade-up">
          <div className="hero-badge-enchanting">
            <span className="badge-sparkle">✨</span>
            <span>WORLD-CLASS LUXURY TOURS • AHMEDABAD & MUMBAI HEADQUARTERS</span>
          </div>

          <h1 className="hero-title">
            Crafting Unforgettable Journeys Across <span className="hero-title-enchanted">India & The World</span>
          </h1>

          <p className="hero-subtitle">
            From royal heritage in <strong>Udaipur, Kumbhalgarh & Jaisalmer</strong> to international paradises in <strong>Vietnam, Thailand, Singapore, Bali & Europe</strong>. Verified 4★ & 5★ luxury stays, bespoke itineraries, and 24/7 dedicated human concierge.
          </p>

          {/* Quick Search Console */}
          <div className="hero-search-box">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Where is your dream vacation? (e.g. Udaipur, Thailand, Vietnam, Kashmir...)" 
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (val.trim() !== '') {
                    setSelectedCategory('all');
                    setFlyerCategory('all');
                  }
                }}
              />
              {searchQuery && (
                <button 
                  className="search-clear" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <a href="#destinations">
              <button className="btn-search-explore">✨ Explore Packages</button>
            </a>
          </div>

          {/* Trending Destination Quick Pills */}
          <div className="hero-trending-pills">
            <span className="hero-trending-label">Trending Now:</span>
            {[
              { name: 'Thailand', icon: '🏝️', label: 'Thailand 4N/5D (₹14,999)' },
              { name: 'Udaipur', icon: '🏰', label: 'Udaipur Royal Tour (₹7,999)' },
              { name: 'Vietnam', icon: '🏮', label: 'Vietnam 3 Cities (₹59,999)' },
              { name: 'Jaisalmer', icon: '🐪', label: 'Jaisalmer Desert Camp (₹25,500)' },
              { name: 'Goa', icon: '🌴', label: 'Goa Watersports' }
            ].map((item) => (
              <button
                key={item.name}
                className="hero-trending-pill-btn"
                onClick={() => {
                  setSearchQuery(item.name);
                  setSelectedCategory('all');
                  const el = document.getElementById('destinations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>

          {/* Enchanting Floating Highlights Ribbon */}
          <div className="hero-mini-showcase">
            <div 
              className="hero-mini-card"
              onClick={() => {
                setSearchQuery('Thailand');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=400&q=80" alt="Thailand" />
              <div className="hero-mini-info">
                <span className="mini-tag">🔥 BESTSELLER</span>
                <strong>Thailand Escapes</strong>
                <span>4N/5D • ₹14,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onClick={() => {
                setSearchQuery('Udaipur');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=400&q=80" alt="Udaipur" />
              <div className="hero-mini-info">
                <span className="mini-tag">👑 ROYAL TOUR</span>
                <strong>Udaipur & Shrinathji</strong>
                <span>3D/2N • ₹7,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onClick={() => {
                setSearchQuery('Vietnam');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80" alt="Vietnam" />
              <div className="hero-mini-info">
                <span className="mini-tag">🏮 POPULAR</span>
                <strong>Vietnam 3 Cities</strong>
                <span>7D/6N • ₹59,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onClick={() => {
                setSearchQuery('Jaisalmer');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=400&q=80" alt="Jaisalmer" />
              <div className="hero-mini-info">
                <span className="mini-tag">🐪 DESERT HIT</span>
                <strong>Jaisalmer Luxury Camp</strong>
                <span>4D/3N • ₹25,500/cpl</span>
              </div>
            </div>
          </div>

          {/* Trust Stats Bar */}
          <div className="trust-stats">
            <div className="stat-item">
              <strong>15,000+</strong>
              <span>Delighted Travelers</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>250+</strong>
              <span>Corporate & College Offsites</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>19+</strong>
              <span>Official MNP Flyers</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>4.9 ★</strong>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CURATED TOUR PACKAGES (WORLD-STANDARD SHOWCASE)
          ======================================================== */}
      <section id="destinations" className="destinations section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CURATED EXPERIENCES</span>
            <h2 className="section-title">World-Standard <span className="text-gradient">Tour Packages</span></h2>
            <p className="section-subtitle">
              Handcrafted itineraries with premium hotels, seamless transfers, personalized guides, and 24/7 on-tour support.
            </p>
          </div>

          {/* In-Section Live Search Bar & Quick Destination Chips */}
          <div className="section-search-container">
            <div className="section-search-bar">
              <span className="section-search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search packages by destination, city or keyword (e.g. Udaipur, Thailand, Vietnam, Goa, Kashmir...)" 
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (val.trim() !== '') {
                    setSelectedCategory('all');
                    setFlyerCategory('all');
                  }
                }}
              />
              {searchQuery && (
                <button 
                  className="section-search-clear" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Trending Destination Chips */}
            <div className="quick-search-chips">
              <span className="quick-chips-label">Popular Searches:</span>
              {[
                { name: 'Udaipur', icon: '🏰' },
                { name: 'Thailand', icon: '🏖️' },
                { name: 'Vietnam', icon: '🏮' },
                { name: 'Goa', icon: '🌴' },
                { name: 'Kashmir', icon: '🏔️' },
                { name: 'Bali', icon: '🌺' },
                { name: 'Dubai', icon: '🏙️' },
                { name: 'Kerala', icon: '🛶' }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`quick-chip ${searchQuery.toLowerCase() === item.name.toLowerCase() ? 'active' : ''}`}
                  onClick={() => {
                    setSearchQuery(item.name);
                    setSelectedCategory('all');
                  }}
                >
                  <span>{item.icon}</span> {item.name}
                </button>
              ))}
              {searchQuery && (
                <button 
                  className="quick-chip-reset" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters ↺
                </button>
              )}
            </div>
          </div>

          {/* Active Search & Filter Feedback Pill */}
          {searchQuery && (
            <div className="search-active-pill">
              <div className="search-active-info">
                <span className="search-active-badge">SEARCH ACTIVE</span>
                <span>
                  Found <strong>{filteredPackages.length}</strong> {filteredPackages.length === 1 ? 'package' : 'packages'} for "<strong>{searchQuery}</strong>"
                  {selectedCategory !== 'all' && (
                    <> in <em>{categories.find(c => c.id === selectedCategory)?.label}</em></>
                  )}
                </span>
              </div>
              <button 
                className="btn-clear-active-search"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Search ✕
              </button>
            </div>
          )}

          {/* Interactive Category Filter Pills with Live Matching Counters */}
          <div className="category-tabs" id="categories">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? allMatchingPackages.length 
                : allMatchingPackages.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                  <span className={`cat-count ${count === 0 ? 'zero' : ''}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Packages Grid */}
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-img-wrap">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    loading="lazy" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="package-tag">{pkg.tag}</div>
                  <div className="package-price-overlay">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{pkg.price}</span>
                  </div>
                  {pkg.flyer && (
                    <button 
                      className="btn-card-flyer-badge"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFlyer({
                          title: pkg.title,
                          image: pkg.flyer,
                          price: pkg.price,
                          desc: pkg.desc,
                          tag: pkg.tag,
                          branches: 'Ahmedabad: 98251 79624 / 97122 04028 | Mumbai: 98980 83171'
                        });
                      }}
                      title="Click to inspect official promotional brochure"
                    >
                      📄 Official Flyer
                    </button>
                  )}
                </div>

                <div className="package-info">
                  <div className="package-meta-header">
                    <span className="package-loc">📍 {pkg.location}</span>
                    <span className="package-rating">{pkg.rating}</span>
                  </div>
                  <h3 className="package-title">{pkg.title}</h3>
                  <span className="package-duration">⏱️ {pkg.duration}</span>
                  <p className="package-desc">{pkg.desc}</p>

                  <div className="inclusions-chips">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <span key={i} className="inc-pill">✓ {inc}</span>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className="inc-pill-more">+{pkg.inclusions.length - 3} more</span>
                    )}
                  </div>

                  <div className="package-card-actions">
                    <button 
                      className="btn-card-details"
                      onClick={() => setSelectedPackage(pkg)}
                      title={`View detailed itinerary for ${pkg.title}`}
                    >
                      <IconItinerary size={16} />
                      <span>View Itinerary</span>
                    </button>
                    <button 
                      className="btn-card-wa"
                      onClick={() => handleBookOnWhatsApp(pkg.title, pkg.price, pkg.duration)}
                      title={`Inquire on WhatsApp for ${pkg.title}`}
                    >
                      <IconWhatsApp size={18} color="#FFFFFF" />
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Context-Aware Empty State */}
          {filteredPackages.length === 0 && (
            <div className="empty-search-card">
              <div className="empty-search-icon">🔍</div>
              <h3>No matching packages in {categories.find(c => c.id === selectedCategory)?.label || 'this category'}</h3>
              
              {allMatchingPackages.length > 0 ? (
                <div className="empty-cross-category-notice">
                  <p>
                    Great news! We found <strong>{allMatchingPackages.length}</strong> matching tour package{allMatchingPackages.length === 1 ? '' : 's'} for "<strong>{searchQuery}</strong>" in other categories.
                  </p>
                  <button 
                    className="btn-show-all-cross-matches"
                    onClick={() => setSelectedCategory('all')}
                  >
                    ✨ View All {allMatchingPackages.length} Matching Packages (Switch to All)
                  </button>
                </div>
              ) : (
                <p className="empty-lead">
                  We couldn't find any packages matching "<strong>{searchQuery}</strong>". Try another keyword or explore our most booked destinations:
                </p>
              )}

              <div className="empty-popular-suggestions">
                <span className="empty-suggestions-label">Try one of these top destinations:</span>
                <div className="empty-suggestions-grid">
                  {[
                    { name: 'Udaipur', label: 'Udaipur & Kumbhalgarh' },
                    { name: 'Thailand', label: 'Thailand & Pattaya' },
                    { name: 'Vietnam', label: 'Vietnam 3 Cities' },
                    { name: 'Goa', label: 'Goa Watersports' },
                    { name: 'Kashmir', label: 'Kashmir Valley & Shikara' },
                    { name: 'Bali', label: 'Bali Tropical Island' },
                    { name: 'Dubai', label: 'Dubai & Abu Dhabi' }
                  ].map((sug) => (
                    <button
                      key={sug.name}
                      className="empty-suggestion-pill"
                      onClick={() => {
                        setSearchQuery(sug.name);
                        setSelectedCategory('all');
                      }}
                    >
                      📍 {sug.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="empty-card-actions">
                <button 
                  className="btn-empty-reset"
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                >
                  ↺ Reset All Filters & View All Packages
                </button>
                <a 
                  href={`https://wa.me/919825179624?text=${encodeURIComponent(`Hello MNP Holidays! I searched for "${searchQuery || 'Custom Destination'}" on your website and would like a custom itinerary & quotation.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-empty-whatsapp"
                >
                  <IconWhatsApp size={18} color="#FFFFFF" />
                  <span>Inquire on WhatsApp for Custom Tour</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          OFFICIAL PROMOTIONAL FLYERS & BROCHURES SHOWCASE (COMPACT CAROUSEL)
          ======================================================== */}
      <section id="official-flyers" className="official-flyers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: '#F59E0B' }}>SPECIAL DEALS & GROUP DEPARTURES</span>
            <h2 className="section-title">Official MNP <span className="text-gradient">Promo Brochures & Flyers</span></h2>
            <p className="section-subtitle">
              Browse our official promotional flyers, fixed group departure dates, and special packages. Swipe horizontally or tap any flyer for full high-resolution inspection.
            </p>
          </div>

          {/* Category Tabs for Flyers */}
          <div className="flyer-tabs-wrapper">
            {flyerTabs.map((tab) => (
              <button
                key={tab.id}
                className={`flyer-tab-btn ${flyerCategory === tab.id ? 'active' : ''}`}
                onClick={() => setFlyerCategory(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Swipe indicator for mobile */}
          <div className="flyers-swipe-hint">
            <span>👉 Swipe sideways to browse all flyers</span>
          </div>

          {/* 19 Official Flyers Carousel / Responsive Track */}
          <div className="flyers-carousel-track">
            {filteredFlyers.map((flyer) => (
              <div key={flyer.id} className="flyer-card">
                <div 
                  className="flyer-card-media" 
                  onClick={() => setSelectedFlyer(flyer)}
                  title="Click to view full high-res flyer"
                >
                  <img 
                    src={flyer.image} 
                    alt={flyer.title} 
                    loading="lazy" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="flyer-tag-badge">{flyer.tag}</div>
                  <div className="flyer-media-overlay">
                    <button className="btn-flyer-zoom">🔍 Full Size</button>
                  </div>
                </div>

                <div className="flyer-card-content">
                  <h3 className="flyer-title">{flyer.title}</h3>
                  <div className="flyer-price-chip">
                    💰 {flyer.price}
                  </div>
                  <p className="flyer-summary">{flyer.desc}</p>
                  <div className="flyer-branch-note">
                    🏢 {flyer.branches}
                  </div>

                  <div className="flyer-actions-row">
                    <button 
                      className="btn-flyer-view" 
                      onClick={() => setSelectedFlyer(flyer)}
                    >
                      🔍 Full Flyer
                    </button>
                    <button 
                      className="btn-flyer-wa" 
                      onClick={() => handleFlyerWhatsApp(flyer.title, flyer.price)}
                    >
                      <IconWhatsApp size={16} color="#FFFFFF" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Corporate & Institutional Services Banner */}
      <section id="special-services" className="special-services-section">
        <div className="container">
          <div className="services-grid">
            {/* Corporate MICE Card */}
            <div className="service-banner-card corporate-card">
              <div className="service-card-badge">BUSINESS & INCENTIVES</div>
              <h3>Corporate & MICE Tours (Domestic & Global)</h3>
              <p>
                From beachfront team-building retreats in <strong>Goa & Jim Corbett</strong> to international dealer conclaves and yacht galas in <strong>Dubai & Singapore</strong>. We provide end-to-end event planning, conference AV, gala dinners, and executive flight & hotel logistics.
              </p>
              <ul className="service-perks">
                <li>✓ 5★ Convention Resorts & Private Banquet Halls</li>
                <li>✓ Tailored Team-Building Facilitators & DJ Nights</li>
                <li>✓ GST Invoice Compliance & Flexible Payment Cycles</li>
                <li>✓ Dedicated Senior MNP Tour Director On-Ground</li>
              </ul>
              <a 
                href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20we%20want%20a%20custom%20quote%20for%20a%20Corporate/MICE%20Tour" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-service-cta corp"
              >
                💼 Request Corporate Proposal
              </a>
            </div>

            {/* School & College Educational Tours Card */}
            <div className="service-banner-card school-card">
              <div className="service-card-badge">EDUCATIONAL & EXPEDITION</div>
              <h3>School & College Educational Tours (Domestic & Global)</h3>
              <p>
                Enrich classroom learning with real-world heritage, science, and leadership adventures. Certified tours across <strong>Delhi-Agra-Jaipur</strong>, <strong>ISRO Bengaluru</strong>, adventure camps in <strong>Rishikesh</strong>, and international STEM explorations in <strong>Singapore & Dubai</strong>.
              </p>
              <ul className="service-perks">
                <li>✓ 100% Student-Safe Verified Hotels & Transport</li>
                <li>✓ Nutritious & Fresh Hygienic Meals (Jain/Veg options)</li>
                <li>✓ Free Faculty/Teacher Escort Packages</li>
                <li>✓ Comprehensive Student Medical & Travel Insurance</li>
              </ul>
              <a 
                href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20we%20want%20a%20quote%20for%20a%20School/College%20Educational%20Tour" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-service-cta edu"
              >
                🎓 Request Institutional Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MNP Holidays Section */}
      <section id="about" className="about section-padding">
        <div className="container about-grid">
          <div className="about-visual">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80" 
              alt="MNP Holidays Premium Travel" 
              className="about-img"
            />
            <div className="about-floating-badge">
              <span className="badge-number">12+</span>
              <span className="badge-text">Years of Travel Excellence in Gujarat</span>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-eyebrow">WORLD STANDARD QUALITY</span>
            <h2>Why Travelers Trust <span className="text-gradient">MNP Holidays</span></h2>
            <p className="lead-text">
              We are not just a travel agency; we are your personal journey architects. Based in Ahmedabad, we bring world-standard hospitality, verified hotels, transparent pricing, and genuine 24/7 human assistance.
            </p>
            <div className="about-features">
              <div className="feat-card">
                <span className="feat-icon">✈️</span>
                <div>
                  <h4>Zero-Hassle Visas, Flights & Transfers</h4>
                  <p>Complete documentation and visa guidance for Vietnam, Bali, Dubai, Singapore, Europe, and beyond.</p>
                </div>
              </div>
              <div className="feat-card">
                <span className="feat-icon">🏨</span>
                <div>
                  <h4>Handpicked 4★ & 5★ Accommodations</h4>
                  <p>Personally verified family resorts, romantic overwater villas, and corporate convention properties.</p>
                </div>
              </div>
              <div className="feat-card">
                <span className="feat-icon">🛡️</span>
                <div>
                  <h4>24/7 Dedicated On-Tour Manager</h4>
                  <p>Instant phone & WhatsApp assistance anytime, anywhere throughout your entire journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Instant Inquiry Section */}
      <section id="contact" className="contact section-padding">
        <div className="contact-blob"></div>
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow" style={{ color: '#F59E0B' }}>DIRECT ASSISTANCE</span>
            <h2>Let's Plan Your <span className="text-gradient">Next Masterpiece Trip</span></h2>
            <p>Our senior travel specialists in <strong>Ahmedabad & Mumbai</strong> are ready to craft custom packages tailored to your exact dates and budget.</p>
            
            {/* Dual Branch Office Cards: Ahmedabad & Mumbai */}
            <div className="branch-offices-container">
              {/* Ahmedabad Headquarters */}
              <div className="contact-card-box branch-box">
                <div className="branch-box-header">
                  <span className="branch-badge">HEADQUARTERS</span>
                  <h4>📍 Ahmedabad Head Office (Gujarat)</h4>
                </div>
                <p className="branch-full-address">
                  Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad, Gujarat - 382350
                </p>
                <div className="branch-phones-group">
                  <span className="branch-phone-label">Direct Lines:</span>
                  <div className="branch-chips-row">
                    <a href="tel:+919825179624" className="branch-phone-chip">📞 +91 98251 79624</a>
                    <a href="tel:+919712204028" className="branch-phone-chip">📞 +91 97122 04028</a>
                    <a href="tel:+919327371565" className="branch-phone-chip">+91 93273 71565</a>
                    <a href="tel:+919327130670" className="branch-phone-chip">+91 93271 30670</a>
                  </div>
                </div>
              </div>

              {/* Mumbai Branch */}
              <div className="contact-card-box branch-box mumbai-box">
                <div className="branch-box-header">
                  <span className="branch-badge mumbai-badge">MUMBAI BRANCH</span>
                  <h4>📍 Mumbai Branch Office (Maharashtra)</h4>
                </div>
                <p className="branch-full-address">
                  Shop No.8, Rangari Height, Samarth Hanuman Lane, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033
                </p>
                <div className="branch-phones-group">
                  <span className="branch-phone-label">Direct Lines:</span>
                  <div className="branch-chips-row">
                    <a href="tel:+919898083171" className="branch-phone-chip mumbai-chip">📞 +91 98980 83171</a>
                    <a href="tel:+919136774277" className="branch-phone-chip mumbai-chip">📞 +91 91367 74277</a>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Shop+No.8+Rangari+Height+Samarth+Hanuman+Lane+Dr.+A.B.Road+Lal+Baug+Kalachowki+Mumbai+400033" 
                      target="_blank" 
                      rel="noreferrer"
                      className="branch-maps-btn"
                    >
                      📍 Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card-box email-working-box">
              <p className="contact-email">
                ✉️ <strong>Official Email:</strong> <a href="mailto:mnholidays88@gmail.com">mnholidays88@gmail.com</a>
              </p>
              <p className="contact-hours" style={{ marginTop: '0.4rem', color: '#94A3B8', fontSize: '0.9rem' }}>
                ⏱️ <strong>Operating Hours:</strong> Monday – Saturday: 9:30 AM – 8:30 PM | Sunday: 10:00 AM – 2:00 PM
              </p>
            </div>

            {/* 3D Social & Contact Badges in Section */}
            <div className="social-links-container">
              <h4>Connect With Us Across Official Channels:</h4>
              <div className="social-3d-badges-row">
                <a 
                  href="tel:+919825179624" 
                  className="social-3d-btn"
                  title="Direct Phone Call"
                >
                  <IconPhone3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Calling Desk</span>
                    <span className="social-detail">+91 98251 79624</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-3d-btn"
                  title="WhatsApp Chat"
                >
                  <IconWhatsApp3D />
                  <div className="social-3d-meta">
                    <span className="social-name">WhatsApp</span>
                    <span className="social-detail">Instant Chat</span>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/mnpholidays/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-3d-btn"
                  title="Follow on Instagram"
                >
                  <IconInstagram3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Instagram</span>
                    <span className="social-detail">@mnpholidays</span>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/mnpholidays/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-3d-btn"
                  title="Follow on Facebook"
                >
                  <IconFacebook3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Facebook</span>
                    <span className="social-detail">/mnpholidays</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Interactive Inquiry Form */}
          <div className="glass-dark-panel inquiry-form-wrapper">
            <h3>Request a Custom Quote</h3>
            <p className="form-subtext">Share your travel preferences & receive custom itineraries directly on WhatsApp within 15 minutes!</p>
            
            <form 
              className="contact-form" 
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const dest = e.target.dest.value;
                const type = e.target.type.value;
                const travelers = e.target.travelers.value;
                const text = `Hi MNP Holidays! I am requesting a quote:\n\n• Name: ${name}\n• Phone: ${phone}\n• Destination: ${dest}\n• Tour Type: ${type}\n• Travelers: ${travelers}`;
                window.open(`https://wa.me/919825179624?text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              <div className="form-group">
                <label>Your Full Name</label>
                <input type="text" name="name" placeholder="e.g. Brijesh Patel" required />
              </div>
              <div className="form-group">
                <label>WhatsApp / Phone Number</label>
                <input type="tel" name="phone" placeholder="e.g. 98251 79624" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Tour Category</label>
                  <select name="type">
                    <option value="Domestic Trending (Udaipur, Ooty, Kashmir...)">Domestic India (Udaipur, Ooty...)</option>
                    <option value="International Holiday (Vietnam, Bali, Dubai...)">International (Vietnam, Bali...)</option>
                    <option value="Special Honeymoon Package">Honeymoon Special</option>
                    <option value="Corporate / MICE Tour">Corporate & MICE Tour</option>
                    <option value="School / College Tour">School / College Educational</option>
                    <option value="Family Holiday">Family Holiday</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Total Travelers</label>
                  <input type="number" name="travelers" placeholder="e.g. 2, 4, 30..." min="1" defaultValue="2" required />
                </div>
              </div>
              <div className="form-group">
                <label>Where do you want to travel?</label>
                <textarea name="dest" placeholder="Tell us destinations, preferred travel month, number of days, or special requests..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                ⚡ Request Instant Quote on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="modal-backdrop" onClick={() => setSelectedPackage(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPackage(null)}>✕</button>
            <div className="modal-img-wrap">
              <img src={selectedPackage.image} alt={selectedPackage.title} />
              <div className="modal-badge">{selectedPackage.tag}</div>
            </div>
            <div className="modal-body">
              <span className="modal-loc">📍 {selectedPackage.location}</span>
              <h2>{selectedPackage.title}</h2>
              <div className="modal-price-row">
                <span className="modal-duration">⏱️ {selectedPackage.duration}</span>
                <span className="modal-price">{selectedPackage.price}</span>
              </div>
              <p className="modal-desc">{selectedPackage.desc}</p>
              
              <h4>Package Inclusions:</h4>
              <ul className="modal-inclusions">
                {selectedPackage.inclusions.map((inc, idx) => (
                  <li key={idx}>✓ {inc}</li>
                ))}
              </ul>

              <div className="modal-actions">
                <button 
                  className="modal-btn-wa"
                  onClick={() => handleBookOnWhatsApp(selectedPackage.title, selectedPackage.price, selectedPackage.duration)}
                >
                  <IconWhatsApp size={18} color="#FFFFFF" />
                  <span>Inquire on WhatsApp</span>
                </button>
                <a href="tel:+919825179624" className="modal-btn-call">
                  📞 Call Desk (+91 98251 79624)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Official Flyer Full-Screen Lightbox Modal */}
      {selectedFlyer && (
        <div className="flyer-lightbox-backdrop" onClick={() => setSelectedFlyer(null)}>
          <div className="flyer-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="flyer-lightbox-close" onClick={() => setSelectedFlyer(null)} aria-label="Close Flyer">✕</button>
            <div className="flyer-lightbox-image-wrap">
              <img 
                src={selectedFlyer.image} 
                alt={selectedFlyer.title} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>
            <div className="flyer-lightbox-footer">
              <div className="flyer-lightbox-meta">
                <span className="flyer-tag-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '0.4rem' }}>
                  {selectedFlyer.tag}
                </span>
                <h3>{selectedFlyer.title}</h3>
                <p style={{ color: '#38BDF8', fontWeight: 700, fontSize: '1.05rem', margin: '0.2rem 0' }}>
                  💰 {selectedFlyer.price}
                </p>
                <p>{selectedFlyer.desc}</p>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.4rem' }}>
                  🏢 {selectedFlyer.branches}
                </div>
                <div style={{ fontSize: '0.80rem', color: '#7DD3FC', marginTop: '0.3rem' }}>
                  📍 Mumbai Office: Shop No.8, Rangari Height, Lal Baug, Kalachowki, Mumbai-400033
                </div>
              </div>
              <div className="flyer-lightbox-actions">
                <button 
                  className="btn-flyer-wa"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.95rem' }}
                  onClick={() => handleFlyerWhatsApp(selectedFlyer.title, selectedFlyer.price)}
                >
                  <IconWhatsApp size={18} color="#FFFFFF" />
                  <span>Inquire on WhatsApp</span>
                </button>
                <a 
                  href="tel:+919825179624" 
                  className="btn-flyer-view"
                  style={{ padding: '0.75rem 1.2rem', textDecoration: 'none' }}
                >
                  📞 Call Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          3D FLOATING DOCK (DIALER, WHATSAPP, INSTAGRAM, FACEBOOK)
          ======================================================= */}
      <aside className="floating-dock" aria-label="Quick 3D Contact and Social Dock">
        {/* Phone Dialer 3D Icon */}
        <a 
          href="tel:+919825179624" 
          className="dock-item" 
          title="Direct Phone Call: +91 98251 79624"
          aria-label="Call MNP Holidays"
        >
          <div className="dock-icon-wrapper">
            <IconPhone3D />
          </div>
          <span className="dock-tooltip">Call Desk (+91 98251 79624)</span>
        </a>

        {/* WhatsApp 3D Icon */}
        <a 
          href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20inquire%20about%20a%20tour" 
          target="_blank" 
          rel="noreferrer" 
          className="dock-item dock-pulse" 
          title="Instant WhatsApp: +91 98251 79624"
          aria-label="Chat on WhatsApp"
        >
          <div className="dock-icon-wrapper">
            <IconWhatsApp3D />
          </div>
          <span className="dock-tooltip">Chat on WhatsApp</span>
        </a>

        {/* Instagram 3D Icon */}
        <a 
          href="https://www.instagram.com/mnpholidays/" 
          target="_blank" 
          rel="noreferrer" 
          className="dock-item" 
          title="Follow us on Instagram"
          aria-label="Instagram Profile"
        >
          <div className="dock-icon-wrapper">
            <IconInstagram3D />
          </div>
          <span className="dock-tooltip">Follow on Instagram</span>
        </a>

        {/* Facebook 3D Icon */}
        <a 
          href="https://www.facebook.com/mnpholidays/" 
          target="_blank" 
          rel="noreferrer" 
          className="dock-item" 
          title="Follow us on Facebook"
          aria-label="Facebook Page"
        >
          <div className="dock-icon-wrapper">
            <IconFacebook3D />
          </div>
          <span className="dock-tooltip">Like on Facebook</span>
        </a>
      </aside>

      {/* =======================================================
          MOBILE PERSISTENT BOTTOM NAVIGATION BAR (FIXED ON SCROLL)
          ======================================================= */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <a href="#home" className="mobile-bottom-nav-item">
          <span className="bottom-nav-icon">🏠</span>
          <span className="bottom-nav-label">Home</span>
        </a>
        <a href="#destinations" className="mobile-bottom-nav-item">
          <span className="bottom-nav-icon">🌍</span>
          <span className="bottom-nav-label">Packages</span>
        </a>
        <a href="#official-flyers" className="mobile-bottom-nav-item">
          <span className="bottom-nav-icon">📸</span>
          <span className="bottom-nav-label">Flyers</span>
          <span className="bottom-nav-pill">19</span>
        </a>
        <a href="#contact" className="mobile-bottom-nav-item">
          <span className="bottom-nav-icon">📍</span>
          <span className="bottom-nav-label">Offices</span>
        </a>
        <a 
          href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
          target="_blank" 
          rel="noreferrer"
          className="mobile-bottom-nav-item mobile-bottom-wa"
        >
          <span className="bottom-nav-icon">💬</span>
          <span className="bottom-nav-label">WhatsApp</span>
        </a>
      </nav>

      {/* Footer */}
      <footer id="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <span className="logo-accent">MNP</span> Holidays Pvt. Ltd.
            <p>Your premier tour operator in Ahmedabad & Mumbai for Domestic trending tours, International vacations, Group Departures, Visas, Corporate MICE, School & College tours, and Honeymoons.</p>
          </div>

          <div className="footer-branches-grid">
            <div className="footer-branch-col">
              <h5>📍 Ahmedabad Head Office (Gujarat)</h5>
              <p>Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad - 382350</p>
              <div className="footer-branch-links">
                <a href="tel:+919825179624">📞 +91 98251 79624</a>
                <span>•</span>
                <a href="tel:+919712204028">+91 97122 04028</a>
              </div>
            </div>

            <div className="footer-branch-col">
              <h5>📍 Mumbai Branch Office (Maharashtra)</h5>
              <p>Shop No.8, Rangari Height, Samarth Hanuman Lane, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033</p>
              <div className="footer-branch-links">
                <a href="tel:+919898083171">📞 +91 98980 83171</a>
                <span>•</span>
                <a href="tel:+919136774277">+91 91367 74277</a>
                <span>•</span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Shop+No.8+Rangari+Height+Samarth+Hanuman+Lane+Dr.+A.B.Road+Lal+Baug+Kalachowki+Mumbai+400033" 
                  target="_blank" 
                  rel="noreferrer"
                  className="footer-branch-map-link"
                >
                  🗺️ Map Location
                </a>
              </div>
            </div>
          </div>

          <div className="footer-meta">
            <p className="footer-copy">&copy; {new Date().getFullYear()} MNP Holidays Private Limited. All rights reserved.</p>
            <p className="footer-links-row">
              ✉️ Official Email: <a href="mailto:mnholidays88@gmail.com">mnholidays88@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

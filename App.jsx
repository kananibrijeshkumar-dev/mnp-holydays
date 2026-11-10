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

// 3D Mini Badge Icon for WhatsApp Desk with specular shine and depth
export const IconWhatsApp3DBadge = ({ size = 22 }) => (
  <span className="wa-3d-badge" style={{ width: size, height: size }}>
    <svg viewBox="0 0 36 36" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className="wa-3d-svg" aria-hidden="true">
      <defs>
        <radialGradient id="waDeskGlow" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="35%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#0E755E" />
        </radialGradient>
        <linearGradient id="waDeskShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="waDeskShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#064E3B" floodOpacity="0.5" />
        </filter>
      </defs>
      <circle cx="18" cy="18" r="16" fill="url(#waDeskGlow)" filter="url(#waDeskShadow)" />
      <ellipse cx="18" cy="9" rx="9" ry="4" fill="url(#waDeskShine)" />
      {/* Official WhatsApp Chat Bubble */}
      <path d="M18 8C12.5 8 8 12.5 8 18C8 19.8 8.5 21.6 9.5 23.1L8.2 27.5L12.7 26.3C14.2 27.4 16.1 28 18 28C23.5 28 28 23.5 28 18C28 12.5 23.5 8 18 8Z" fill="#FFFFFF" />
      {/* Official WhatsApp Phone Receiver */}
      <path d="M14.6 13.5C14.3 12.9 14.1 12.9 13.8 12.9C13.5 12.9 13.2 12.9 13 13.2C12.7 13.5 12 14.1 12 15.4C12 16.7 12.9 18 13.1 18.2C13.2 18.4 15 21.2 17.6 22.3C20 23.3 20.4 23.1 20.9 23C21.4 22.9 22.5 22.3 22.8 21.5C23 20.8 23 20.2 22.9 20.1C22.8 20 22.6 19.9 22.3 19.8C22 19.6 20.7 19 20.4 18.9C20.2 18.8 20 18.7 19.8 19C19.6 19.4 19 20.1 18.8 20.3C18.6 20.5 18.4 20.6 18.1 20.4C17.8 20.3 16.9 20 15.8 19C15 18.3 14.4 17.4 14.2 17.1C14 16.8 14.2 16.6 14.3 16.5C14.5 16.3 14.7 16.1 14.8 15.9C15 15.7 15 15.6 15.1 15.4C15.2 15.2 15.1 15.1 15.1 14.9C15 14.8 14.8 13.9 14.6 13.5Z" fill="#128C7E" />
    </svg>
  </span>
);

// Official High-Precision WhatsApp Vector Icon
export const IconWhatsApp = ({ size = 18, color = "#FFFFFF", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`wa-btn-icon ${className}`} 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle', color }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.638A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.2 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.094h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.346zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.976c.002-4.114 3.349-7.461 7.465-7.461a7.417 7.417 0 0 1 5.276 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.46-7.462 7.467zm4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58 0.729-.711.879-.262.168-.486.056-.948-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.182-.438-.367-.378-.504-.385l-.43-.008c-.149 0-.393.056-.599.281s-.786.767-.786 1.872.805 2.171.917 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.066-.056-.093-.205-.15-.43-.262z" />
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
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp1.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-2',
    title: 'Singapore, Malaysia & Thailand Group Departure',
    category: 'departures',
    tag: 'Ex-Ahmedabad & Mumbai',
    price: '10 Nights / 11 Days',
    desc: 'Fixed departure dates (Dec 2026 to Apr 2027). Includes return flight tickets, daily breakfast and dinner, all transfer sightseeing tickets, and airport pickups.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp2.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-3',
    title: 'Kumbhalgarh & Udaipur Top Hotels Booking',
    category: 'hotels',
    tag: 'Verified Resorts',
    price: 'Best Rates Guaranteed',
    desc: 'Booking available for 20+ top luxury resorts: Club Mahindra, Lemon Tree, Radisson Blu, Raajsa Resort, Sajjanbagh, Via Lakhela, and scenic valley stays.',
    image: '/destinations/kumbhalgarh.jpg',
    flyer: '/photos/mnp3.jpeg',
    branches: 'Ahmedabad: 97122 04028 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-4',
    title: 'Tourist Visa / E-Visa Fast Assistance',
    category: 'visas',
    tag: '7 to 10 Working Days',
    price: 'Hassle-Free Processing',
    desc: 'Fast approvals for Singapore, Bali, Vietnam, Cambodia, Hong Kong, Azerbaijan, Kazakhstan, Georgia, and Uzbekistan.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp4.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-5',
    title: 'Magical Udaipur Group Tour (2N/3D)',
    category: 'departures',
    tag: 'Fixed Group Tour',
    price: 'ONLY ₹7,999/- Per Person',
    desc: '13-14-15 November 2026 departure! Full 3-day itinerary: City Palace, Lake Pichola, Bahubali Hills, Shilpgram, cultural folk dance show, DJ party & Shrinathji Darshan.',
    image: '/destinations/udaipur.jpg',
    flyer: '/photos/mnp5.jpeg',
    branches: 'Ahmedabad: 97122 04028'
  },
  {
    id: 'fl-6',
    title: 'Dubai Tourist Visa / E-Visa Assistance',
    category: 'visas',
    tag: 'Explore City of Dreams',
    price: '7 to 10 Working Days',
    desc: 'Safe, reliable & hassle-free Dubai visa processing with dedicated documentation assistance and fast approvals.',
    image: '/destinations/dubai.jpg',
    flyer: '/photos/mnp6.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-7',
    title: 'Family Tours - Cherish Every Moment',
    category: 'packages',
    tag: 'Family Holidays',
    price: 'Custom Family Plans',
    desc: 'Family-friendly vacations across Mountains, Beaches, Heritage forts, and scenic Road Trips with comfortable private transport and kid-friendly stays.',
    image: '/destinations/family_vacation.jpg',
    flyer: '/photos/mnp7.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-8',
    title: 'Corporate Tours & MICE Solutions',
    category: 'corporate',
    tag: 'Work Hard, Travel Smart',
    price: 'Custom Corporate Proposals',
    desc: 'Seamless corporate travel solutions: group flight bookings, luxury convention hotels, executive AC coaches, team building, and gala DJ nights.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp8.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-9',
    title: 'Couple Tour - Romantic Escapes',
    category: 'packages',
    tag: 'Romantic Getaways',
    price: 'Better Together Deals',
    desc: 'Unforgettable couple vacations to Goa, Udaipur, Manali, and Andaman with candlelight beach dining and private luxury stays.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp9.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-10',
    title: 'Visitor Visa Worldwide (USA, UK, Canada, Australia, Schengen)',
    category: 'visas',
    tag: 'Global Visa Desk',
    price: 'Document Assistance',
    desc: 'Tourist Visa, Family Visa, Business Visa, and Student Visa processing with complete documentation and expert file preparation.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp10.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-11',
    title: 'Air Ticket Booking (Domestic & International)',
    category: 'services',
    tag: 'Best Airfares',
    price: 'Quick Confirmation',
    desc: 'Safe & secure flight bookings, exclusive airline deals, quick confirmation, and 24/7 flight customer support.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp11.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-12',
    title: 'Hotel Booking (Domestic & International)',
    category: 'hotels',
    tag: 'Comfort & Luxury',
    price: 'Best Deals Guaranteed',
    desc: 'Stay in comfort, travel in style! Verified 3★, 4★, and 5★ hotels and heritage boutique resorts across India and worldwide.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp12.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-13',
    title: 'Tourist Visa / E-Visa Destinations Showcase',
    category: 'visas',
    tag: 'Explore World Hassle-Free',
    price: '7 to 10 Working Days',
    desc: 'Comprehensive visa services for Singapore, Bali, Vietnam, Cambodia, Hong Kong, Azerbaijan, Kazakhstan, Georgia, and Uzbekistan.',
    image: '/destinations/tourist_visa_showcase.jpg',
    flyer: '/photos/mnp13.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-14',
    title: 'International Tour Package (Paris, Santorini, Dubai, NY, Bali)',
    category: 'packages',
    tag: 'Global Dream Tours',
    price: 'From Dream to Destination',
    desc: 'World tour vacations with global destinations, hassle-free visa handling, premium verified hotels, and fully customized holiday plans.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp14.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-15',
    title: 'Vietnam 3 Cities Package (6 Nights / 7 Days)',
    category: 'packages',
    tag: 'Bestseller Vietnam',
    price: '₹59,999/- without flight*',
    desc: 'Three Cities One Unforgettable Journey: 2N Hanoi (Flower Garden Hotel), 2N Da Nang (Cicilla Hotel), 2N Ho Chi Minh (Adora Art Hotel). Includes 6 buffet breakfasts, Ninh Binh, Ba Na Hills & Mekong Delta.',
    image: '/destinations/vietnam_bridge.jpg',
    flyer: '/photos/mnp15.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-16',
    title: 'Vietnam Grand 5 Destinations (9 Nights / 10 Days)',
    category: 'packages',
    tag: 'Ha Long Bay Cruise & Phu Quoc',
    price: '₹89,999/- without flight*',
    desc: '5 Destinations One Amazing Journey: Hanoi, Da Nang, Ho Chi Minh, Phu Quoc Island & 1 Night Overnight on La Regina Royal Cruise (Ha Long Bay). 9 buffet breakfasts included.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp16.jpeg',
    branches: 'Ahmedabad: 93273 71565 / 93271 30670 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-17',
    title: 'Vietnam Phu Quoc Island Adventure (4 Nights / 5 Days)',
    category: 'packages',
    tag: 'Island & Safari',
    price: '₹49,999/- rate per adult',
    desc: '4 Nights Times Corner Amalfi Hotel Phu Quoc. Includes Grand World Venice water taxi, Vin Pearl Safari, 4 Island speedboat tour, Cable Car, Sunset Town & Kiss Bridge.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp17.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-18',
    title: 'Vietnam Hanoi, Ha Long Bay Cruise & Da Nang (5 Nights / 6 Days)',
    category: 'packages',
    tag: 'Cruise & Culture',
    price: '₹54,999/- rate per adult',
    desc: '2N Flower Garden Hanoi, 1N La Regina Royal Cruise (Ha Long Bay), 2N Cicilla Hotel Da Nang. 5 buffet breakfasts, Ninh Binh, Marble Mountain, Hoi An lantern boat & Ba Na Hills.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
    flyer: '/photos/mnp18.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 | Mumbai: 98980 83171'
  },
  {
    id: 'fl-19',
    title: 'Golden City Jaisalmer Desert Camp & Fort (3 Nights / 4 Days)',
    category: 'packages',
    tag: 'Rajasthan Desert Hit',
    price: '₹25,500/- Per Couple',
    desc: 'Arrival & Sam Sand Dunes Swiss luxury tent, camel safari, jeep dune bashing, Tanot Mata Temple, Longewala Border, Kuldhara abandoned village, Jaisalmer Fort & Patwon Ki Haveli.',
    image: '/destinations/jaisalmer_desert.jpg',
    flyer: '/photos/mnp19.jpeg',
    branches: 'Ahmedabad: 97122 04028 / 93273 71565 | Mumbai: 98980 83171'
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
    image: '/destinations/udaipur.jpg',
    gallery: [
      '/destinations/udaipur.jpg',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: '/destinations/kumbhalgarh.jpg',
    gallery: [
      '/destinations/kumbhalgarh.jpg',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: '/destinations/jaisalmer_desert.jpg',
    gallery: [
      '/destinations/jaisalmer_desert.jpg',
      '/destinations/jaisalmer_fort.jpg',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: '/destinations/kashmir.jpg',
    gallery: [
      '/destinations/kashmir.jpg',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: '/destinations/vietnam_bridge.jpg',
    gallery: [
      '/destinations/vietnam_bridge.jpg',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
      '/destinations/vietnam_bridge.jpg',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
      '/destinations/vietnam_bridge.jpg',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85',
      '/destinations/dubai.jpg',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: '/destinations/dubai.jpg',
    gallery: [
      '/destinations/dubai.jpg',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85',
      '/destinations/udaipur.jpg',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: '/destinations/dubai.jpg',
    gallery: [
      '/destinations/dubai.jpg',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: '/destinations/tajmahal.jpg',
    gallery: [
      '/destinations/tajmahal.jpg',
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85'
    ]
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
    image: '/destinations/family_vacation.jpg',
    gallery: [
      '/destinations/family_vacation.jpg',
      '/destinations/udaipur.jpg',
      '/destinations/andaman.jpg',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'
    ],
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
    image: '/destinations/andaman.jpg',
    gallery: [
      '/destinations/andaman.jpg',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

// --- AUTHENTIC MNP HOLIDAYS PRIVATE TRAVEL CRM LEAD DATA ---
const DEFAULT_MNP_LEADS = [
  {
    id: 'MNP-101',
    name: 'Rajesh Shah & Family',
    phone: '9825012345',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 4,
    travelMonth: 'Dec 2026',
    budget: 148000,
    status: 'new',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Inquired for 4 adults. Requested 4★ hotel near Ben Thanh market with vegetarian meal options.'
  },
  {
    id: 'MNP-102',
    name: 'Vikram Patel & Friends',
    phone: '9712098765',
    destination: 'Kashmir Dal Lake & Gulmarg (Flyer #3)',
    pax: 6,
    travelMonth: 'Jan 2027',
    budget: 120000,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'WhatsApp Desk',
    notes: 'Quotation sent for 6 pax with Gulmarg Gondola Phase 1 & 2 tickets included.'
  },
  {
    id: 'MNP-103',
    name: 'Hardik Mehta (Tech Solutions)',
    phone: '9898044321',
    destination: 'Udaipur Royal Heritage MICE Offsite',
    pax: 25,
    travelMonth: 'Nov 2026',
    budget: 550000,
    status: 'confirmed',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    source: 'Corporate Referral',
    notes: 'Confirmed 25 rooms with conference hall and DJ night setup. 50% advance token received.'
  },
  {
    id: 'MNP-104',
    name: 'Sanjay Joshi (Couple)',
    phone: '9920155678',
    destination: 'Bali 6D5N Luxury Pool Villa',
    pax: 2,
    travelMonth: 'Feb 2027',
    budget: 185000,
    status: 'visa',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Instagram Ad',
    notes: 'Honeymoon special. Visa on arrival assistance and private floating breakfast confirmed.'
  },
  {
    id: 'MNP-105',
    name: 'Neha Trivedi',
    phone: '9723011223',
    destination: 'Kerala Houseboat & Munnar (Flyer #12)',
    pax: 5,
    travelMonth: 'Dec 2026',
    budget: 165000,
    status: 'quote',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Pooja (Sales Executive)',
    source: 'Website Form (Live)',
    notes: 'Family trip. Requested private houseboat in Alleppey with Kerala Ayurvedic tour.'
  },
  {
    id: 'MNP-106',
    name: 'Bhavin Chauhan & Family',
    phone: '9879033445',
    destination: 'Dubai 5D4N Shopping Festival & Desert Safari',
    pax: 4,
    travelMonth: 'Jan 2027',
    budget: 317000,
    status: 'confirmed',
    branch: 'Mumbai (Lalbaug)',
    agent: 'Amit (Mumbai Branch)',
    source: 'Direct Walk-in',
    notes: 'Visas issued! Burj Khalifa 124th floor tickets booked. Balance payment on arrival.'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeModalImgIdx, setActiveModalImgIdx] = useState(0);
  const [selectedFlyer, setSelectedFlyer] = useState(null);
  const [flyerCategory, setFlyerCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedInclusions, setExpandedInclusions] = useState({});
  const [flyerModalView, setFlyerModalView] = useState('flyer');
  const [showAppPreview, setShowAppPreview] = useState(false);

  // --- MNP PRIVATE TRAVEL CRM STATE ---
  const [showCrmPortal, setShowCrmPortal] = useState(false);
  const [crmLoggedIn, setCrmLoggedIn] = useState(true); // Default accessible for instant use
  const [crmPinInput, setCrmPinInput] = useState('');
  const [crmPinError, setCrmPinError] = useState('');
  const [crmStageFilter, setCrmStageFilter] = useState('all');
  const [crmSearch, setCrmSearch] = useState('');
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showQuoteCalcModal, setShowQuoteCalcModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    phone: '',
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    pax: 2,
    travelMonth: 'Upcoming 2026/27',
    budget: '85000',
    branch: 'Ahmedabad (Nikol HQ)',
    agent: 'Brijesh Patel (Admin)',
    notes: ''
  });
  const [quoteCalcState, setQuoteCalcState] = useState({
    destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
    adults: 2,
    children: 0,
    hotelTier: '4star',
    includeFlight: true,
    includeVisa: true
  });

  const [crmLeads, setCrmLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('mnp_crm_leads_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_MNP_LEADS;
  });

  const saveLeads = (newLeads) => {
    setCrmLeads(newLeads);
    try {
      localStorage.setItem('mnp_crm_leads_v2', JSON.stringify(newLeads));
    } catch (e) {
      console.error(e);
    }
  };

  const addNewLeadToCrm = (lead) => {
    const updated = [lead, ...crmLeads];
    saveLeads(updated);
  };

  const updateLeadStatus = (id, newStatus) => {
    const updated = crmLeads.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead));
    saveLeads(updated);
  };

  const deleteLead = (id) => {
    if (window.confirm('Delete this travel lead from MNP CRM?')) {
      const updated = crmLeads.filter((lead) => lead.id !== id);
      saveLeads(updated);
    }
  };

  const exportLeadsToCsv = () => {
    const headers = ['Lead_ID,Client_Name,Phone,Destination,Pax,Travel_Month,Budget_INR,Stage_Status,Branch,Agent,Source,Remarks'];
    const rows = crmLeads.map((l) =>
      `"${l.id}","${l.name}","${l.phone}","${l.destination}","${l.pax}","${l.travelMonth}","${l.budget}","${l.status}","${l.branch}","${l.agent}","${l.source}","${(l.notes || '').replace(/"/g, '""')}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MNP_Holidays_CRM_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateLeadSubmit = (e) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.phone) return;
    const newLeadObj = {
      id: `MNP-${Date.now().toString().slice(-4)}`,
      name: newLeadForm.name,
      phone: newLeadForm.phone,
      destination: newLeadForm.destination,
      pax: parseInt(newLeadForm.pax) || 2,
      travelMonth: newLeadForm.travelMonth || 'Dec 2026',
      budget: parseInt(newLeadForm.budget) || 50000,
      status: 'new',
      branch: newLeadForm.branch,
      agent: newLeadForm.agent,
      source: 'Direct Intake (CRM)',
      notes: newLeadForm.notes || 'Inquiry logged manually by staff.'
    };
    addNewLeadToCrm(newLeadObj);
    setShowAddLeadModal(false);
    setNewLeadForm({
      name: '',
      phone: '',
      destination: 'Vietnam 3-Cities Deluxe (Flyer #1)',
      pax: 2,
      travelMonth: 'Upcoming 2026/27',
      budget: '85000',
      branch: 'Ahmedabad (Nikol HQ)',
      agent: 'Brijesh Patel (Admin)',
      notes: ''
    });
  };

  // Auto-launch CRM if visiting crm.mnpholidays.com or with ?crm=true
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isCrmSubdomain = window.location.hostname.startsWith('crm.');
      const hasCrmParam = window.location.search.includes('crm') || window.location.hash.includes('crm');
      if (isCrmSubdomain || hasCrmParam) {
        setShowCrmPortal(true);
      }
    }
  }, []);

  const openPackageModal = (pkg) => {
    setActiveModalImgIdx(0);
    setSelectedPackage(pkg);
  };

  const toggleInclusions = (id) => {
    setExpandedInclusions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPackage) return;
      const gallery = (selectedPackage.gallery && selectedPackage.gallery.length > 0)
        ? selectedPackage.gallery
        : [selectedPackage.image];

      if (e.key === 'Escape') {
        setSelectedPackage(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveModalImgIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveModalImgIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPackage]);

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
    window.open(`https://wa.me/919712204028?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFlyerWhatsApp = (flyerTitle, flyerPrice) => {
    const message = `Hello MNP Holidays! I saw your official flyer for "${flyerTitle}" (${flyerPrice}). Please share full itinerary details, departure dates, and best quotation.`;
    window.open(`https://wa.me/919712204028?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Ultra-Smooth 3D Perspective Tilt & Specular Light Reflection
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-10px) scale3d(1.025, 1.025, 1.025)`;
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleCardReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
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
              <a href="tel:+919712204028" className="banner-contact-link">📞 +91 97122 04028</a>
              <span className="banner-dot">•</span>
              <a href="tel:+919327371565" className="banner-contact-link">+91 93273 71565</a>
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
            <button 
              className="top-banner-crm-btn" 
              onClick={() => setShowCrmPortal(true)}
              title="Open Private MNP Travel CRM"
            >
              💼 MNP Travel CRM
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="MNP Holidays Home">
            <img src="/logo.png" alt="MNP Holidays Pvt. Ltd." className="brand-logo-img" />
            <div className="logo-text-group">
              <span className="logo-accent">MNP</span>
              <span className="logo-name">Holidays</span>
            </div>
            <span className="logo-reg-tag">Pvt. Ltd.</span>
            <span className="verified-luxury-badge">
              <span>👑</span> Verified Luxury Operator
            </span>
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
              href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nav-wa"
            >
              <span className="wa-dot"></span>
              <IconWhatsApp3DBadge size={22} />
              <span className="wa-text">WhatsApp Desk</span>
            </a>
            <button 
              className="nav-crm-btn"
              onClick={() => setShowCrmPortal(true)}
              title="MNP Travel Agent & Admin CRM"
            >
              🔐 CRM Portal <span className="nav-crm-badge">STAFF</span>
            </button>
          </div>

          {/* Mobile & Tablet Quick Actions (WhatsApp & Hamburger) */}
          <div className="nav-mobile-controls">
            <a 
              href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nav-wa-mobile"
              aria-label="Instant WhatsApp Inquiry"
            >
              <span className="wa-dot"></span>
              <IconWhatsApp3DBadge size={18} />
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
              <img src="/logo.png" alt="MNP Holidays" className="mobile-menu-logo" />
              <div className="mobile-menu-brand-info">
                <span className="mobile-menu-brand">MNP Holidays</span>
                <span className="mobile-menu-badge">Pvt. Ltd. • Official Luxury Tours</span>
              </div>
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
              <button 
                className="mobile-nav-link" 
                style={{ background: 'linear-gradient(135deg, #0F2557 0%, #1E3A8A 100%)', color: '#FFFFFF', border: '1px solid #FF6B00', marginTop: '0.4rem', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                onClick={() => { setMobileMenuOpen(false); setShowCrmPortal(true); }}
              >
                <span className="mobile-nav-icon">💼</span>
                <span>MNP Private Travel CRM</span>
                <span className="mobile-flyer-badge" style={{ background: '#FF6B00', color: '#FFFFFF' }}>STAFF</span>
              </button>
            </div>

            <div className="mobile-branch-cards">
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Ahmedabad Head Office</div>
                <div className="mobile-branch-address">
                  Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad - 382350
                </div>
                <div className="mobile-branch-actions">
                  <a href="tel:+919712204028" className="mobile-branch-call-btn">📞 +91 97122 04028</a>
                  <a href="tel:+919327371565" className="mobile-branch-call-btn">+91 93273 71565</a>
                  <a 
                    href="https://www.google.com/maps/dir/23.0447408,72.6387762/MNP+HOLIDAYS+PVT+LTD,+224,+Town+Plazza,+Raspan+Cross+Rd,+New+India+Colony,+Nicol+Gam,+Nik" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mobile-branch-call-btn"
                    style={{ borderColor: 'rgba(56, 189, 248, 0.5)', color: '#38BDF8' }}
                  >
                    📍 Map
                  </a>
                </div>
              </div>
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Mumbai Branch Office</div>
                <div className="mobile-branch-address">
                  Shop No.8, Rangari Height, Samarth Hanuman Lane, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033
                </div>
                <div className="mobile-branch-actions">
                  <a href="tel:+919898083171" className="mobile-branch-call-btn">📞 +91 98980 83171</a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Shop+No.8+Rangari+Height+Samarth+Hanuman+Lane+Dr.+A.B.Road+Lal+Baug+Kalachowki+Mumbai+400033" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mobile-branch-call-btn"
                    style={{ borderColor: 'rgba(56, 189, 248, 0.5)', color: '#38BDF8' }}
                  >
                    📍 Map
                  </a>
                </div>
              </div>
            </div>

            <div className="mobile-cta-buttons">
              <a 
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20want%20to%20plan%20a%20trip" 
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
        <video 
          className="hero-bg-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=90"
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        {/* 3D Floating Travel Accent Badges with Depth */}
        <div className="hero-3d-floating-elements" aria-hidden="true">
          <div className="float-badge float-badge-left-1">
            <span className="float-badge-icon">✈️</span>
            <div className="float-badge-text">
              <strong>Fixed Group Flights</strong>
              <span>Ahmedabad & Mumbai</span>
            </div>
          </div>
          <div className="float-badge float-badge-right-1">
            <span className="float-badge-icon">🏰</span>
            <div className="float-badge-text">
              <strong>20+ Royal Resorts</strong>
              <span>Kumbhalgarh & Udaipur</span>
            </div>
          </div>
          <div className="float-badge float-badge-left-2">
            <span className="float-badge-icon">🛂</span>
            <div className="float-badge-text">
              <strong>Fast E-Visa Desk</strong>
              <span>7-10 Days Worldwide</span>
            </div>
          </div>
          <div className="float-badge float-badge-right-2">
            <span className="float-badge-icon">🌟</span>
            <div className="float-badge-text">
              <strong>15,000+ Guests</strong>
              <span>★ 4.9 Verified Reviews</span>
            </div>
          </div>
        </div>

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
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              onClick={() => {
                setSearchQuery('Thailand');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=85" alt="Thailand" />
              <div className="hero-mini-info">
                <span className="mini-tag">🔥 BESTSELLER</span>
                <strong>Thailand Escapes</strong>
                <span>4N/5D • ₹14,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              onClick={() => {
                setSearchQuery('Udaipur');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="/destinations/udaipur.jpg" alt="Udaipur City Palace" />
              <div className="hero-mini-info">
                <span className="mini-tag">👑 ROYAL TOUR</span>
                <strong>Udaipur & Shrinathji</strong>
                <span>3D/2N • ₹7,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              onClick={() => {
                setSearchQuery('Vietnam');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="/destinations/vietnam_bridge.jpg" alt="Vietnam Golden Bridge" />
              <div className="hero-mini-info">
                <span className="mini-tag">🏮 POPULAR</span>
                <strong>Vietnam 3 Cities</strong>
                <span>7D/6N • ₹59,999</span>
              </div>
            </div>

            <div 
              className="hero-mini-card"
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              onClick={() => {
                setSearchQuery('Jaisalmer');
                setSelectedCategory('all');
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src="/destinations/jaisalmer_desert.jpg" alt="Jaisalmer Desert Camp" />
              <div className="hero-mini-info">
                <span className="mini-tag">🐪 DESERT HIT</span>
                <strong>Jaisalmer Luxury Camp</strong>
                <span>4D/3N • ₹25,500/cpl</span>
              </div>
            </div>
          </div>

          {/* Trust Stats Bar */}
          <div className="trust-stats">
            <div className="stat-item" onMouseMove={handleCardTilt} onMouseLeave={handleCardReset}>
              <strong>15,000+</strong>
              <span>Delighted Travelers</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item" onMouseMove={handleCardTilt} onMouseLeave={handleCardReset}>
              <strong>250+</strong>
              <span>Corporate & College Offsites</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item" onMouseMove={handleCardTilt} onMouseLeave={handleCardReset}>
              <strong>19+</strong>
              <span>Official MNP Flyers</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item" onMouseMove={handleCardTilt} onMouseLeave={handleCardReset}>
              <strong>4.9 ★</strong>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRIP.COM STYLE QUICK-HUB & EXCLUSIVE DEAL CONSOLE
          ======================================================== */}
      <section className="trip-hub-section">
        <div className="container">
          <div className="trip-hub-card">
            {/* Quick 8-Service Grid: 100% Authentic MNP Services */}
            <div className="trip-service-grid">
              {[
                { title: 'Tour Packages', icon: '🏖️', query: 'All-Inclusive Curated Tour Packages' },
                { title: 'Fixed Flights', icon: '✈️', query: 'Fixed Group Departure Flights (Singapore, Malaysia & Thailand)' },
                { title: 'Rajasthan', icon: '🏰', query: 'Udaipur, Kumbhalgarh & Jaisalmer Royal Tours' },
                { title: 'International', icon: '🌏', query: 'Thailand, Vietnam, Bali, Dubai & Europe Tours' },
                { title: 'Fast E-Visas', icon: '📋', query: 'Tourist Visa & E-Visa Fast Assistance (7-10 Days)' },
                { title: '19 Flyers', icon: '📸', query: '19 Official MNP Tour Flyers & Brochures' },
                { title: 'Corporate MICE', icon: '💼', query: 'Corporate MICE & Executive Team Building Offsites' },
                { title: 'College Tours', icon: '🎓', query: 'School & College Group Educational Expeditions' },
              ].map((svc) => (
                <a
                  key={svc.title}
                  href={`https://wa.me/919712204028?text=${encodeURIComponent('Hello MNP Holidays! I would like to inquire about: ' + svc.query)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="trip-service-item"
                >
                  <div className="trip-service-icon-wrap">
                    <span className="trip-service-icon">{svc.icon}</span>
                  </div>
                  <span className="trip-service-title">{svc.title}</span>
                </a>
              ))}
            </div>

            {/* Quick City Navigation Chips: Authentic MNP Destinations */}
            <div className="trip-tags-row">
              <span className="trip-tags-label">Popular Hubs:</span>
              {['All', 'Thailand', 'Udaipur', 'Vietnam', 'Dubai', 'Kashmir', 'Jaisalmer', 'Kumbhalgarh', 'Bali', 'Goa', 'Andaman'].map((city) => (
                <button
                  key={city}
                  className={`trip-tag-pill ${searchQuery.toLowerCase() === city.toLowerCase() || (city === 'All' && !searchQuery) ? 'active' : ''}`}
                  onClick={() => {
                    setSearchQuery(city === 'All' ? '' : city);
                    setSelectedCategory('all');
                    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {city}
                </button>
              ))}
              <a
                href="https://maps.google.com/?q=MNP+Holidays+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="trip-tag-pill trip-tag-map"
              >
                📍 Map
              </a>
            </div>

            {/* Trip.com Sub-Features Row: Authentic MNP Offerings */}
            <div className="trip-sub-features">
              {[
                { label: 'Deals', icon: '🏷️', link: '#destinations' },
                { label: '19 Flyers', icon: '📸', link: '#official-flyers' },
                { label: '20+ Resorts', icon: '🏰', link: 'https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20share%20Kumbhalgarh%20and%20Udaipur%20resort%20options' },
                { label: 'Fast Visas', icon: '📋', link: 'https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20need%20Fast%20Visa%20assistance' },
                { label: 'Custom Plan', icon: '🧭', link: 'https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20create%20a%20custom%20trip%20itinerary%20for%20me' },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.link}
                  target={f.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="trip-sub-feature-item"
                >
                  <div className="trip-sub-circle">{f.icon}</div>
                  <span className="trip-sub-label">{f.label}</span>
                </a>
              ))}
            </div>

            {/* Perforated Voucher Discounts Banner */}
            <div className="trip-voucher-banner">
              <div className="trip-voucher-header">
                <div className="trip-voucher-title-wrap">
                  <span className="trip-gift-emoji">🎁</span>
                  <strong>New Traveler Discounts Available</strong>
                  <span className="trip-voucher-sub">• Instant Savings on 2026-2027 Departures</span>
                </div>
                <a
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20claim%20all%20new%20user%20discount%20vouchers"
                  target="_blank"
                  rel="noreferrer"
                  className="trip-btn-claim-all"
                >
                  Claim All
                </a>
              </div>

              <div className="trip-tickets-row">
                <a
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20claim%203%25%20off%20flight%20departure%20coupon"
                  target="_blank"
                  rel="noreferrer"
                  className="trip-ticket-card flight-ticket"
                >
                  <div className="ticket-cutout top"></div>
                  <div className="ticket-cutout bottom"></div>
                  <div className="ticket-info">
                    <span className="ticket-type">✈️ Flights</span>
                    <strong className="ticket-val">3% off</strong>
                  </div>
                  <div className="ticket-divider"></div>
                  <span className="ticket-action">Use</span>
                </a>

                <a
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20claim%2010%25%20off%20hotel%20resort%20coupon"
                  target="_blank"
                  rel="noreferrer"
                  className="trip-ticket-card hotel-ticket"
                >
                  <div className="ticket-cutout top"></div>
                  <div className="ticket-cutout bottom"></div>
                  <div className="ticket-info">
                    <span className="ticket-type">🏨 Hotels</span>
                    <strong className="ticket-val">10% off</strong>
                  </div>
                  <div className="ticket-divider"></div>
                  <span className="ticket-action">Use</span>
                </a>

                <a
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20claim%2010%25%20off%20tour%20package%20coupon"
                  target="_blank"
                  rel="noreferrer"
                  className="trip-ticket-card tour-ticket"
                >
                  <div className="ticket-cutout top"></div>
                  <div className="ticket-cutout bottom"></div>
                  <div className="ticket-info">
                    <span className="ticket-type">🏖️ Tours</span>
                    <strong className="ticket-val">10% off</strong>
                  </div>
                  <div className="ticket-divider"></div>
                  <span className="ticket-action">Use</span>
                </a>
              </div>
            </div>

            {/* Dual Promotional Sale Banners (Side-by-Side) */}
            <div className="trip-dual-promo-grid">
              <a
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20want%20the%20Go%20Thailand%20Super%20Sale%2050%25%20off%20package"
                target="_blank"
                rel="noreferrer"
                className="trip-promo-banner banner-thailand"
              >
                <div className="promo-overlay"></div>
                <div className="promo-text-wrap">
                  <span className="promo-brand-tag">MNP.Holidays</span>
                  <h3 className="promo-headline">GO THAILAND</h3>
                  <p className="promo-highlight">Up to 50% off</p>
                  <span className="promo-pill-super">SUPER SALE</span>
                </div>
              </a>

              <a
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20want%20details%20for%20the%20Mega%20Sale%20of%20the%20Year%20Flights%20and%20Hotels"
                target="_blank"
                rel="noreferrer"
                className="trip-promo-banner banner-megasale"
              >
                <div className="promo-overlay"></div>
                <div className="promo-text-wrap">
                  <h3 className="promo-headline">MEGA SALE</h3>
                  <span className="promo-subhead">OF THE YEAR</span>
                  <span className="promo-dates">⏰ 11 NOV - 14 NOV</span>
                  <div className="promo-chips">
                    <span>✈️ Flights</span>
                    <span>🏨 Hotels</span>
                  </div>
                  <span className="promo-pill-white">UP TO 50% OFF</span>
                </div>
              </a>
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
              <div 
                key={pkg.id} 
                className="package-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
                <div 
                  className="package-img-wrap"
                  onClick={() => openPackageModal(pkg)}
                  title={`Click to view all 4 photos & details for ${pkg.title}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') openPackageModal(pkg); }}
                >
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
                  <div className="package-gallery-badge" title="4 High-Resolution Location Photos">
                    📸 4 Photos
                  </div>
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
                          branches: 'Ahmedabad: 97122 04028 / 93273 71565 | Mumbai: 98980 83171'
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
                    {(expandedInclusions[pkg.id] ? pkg.inclusions : pkg.inclusions.slice(0, 3)).map((inc, i) => (
                      <span key={i} className="inc-pill">✓ {inc}</span>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <button 
                        type="button"
                        className={`inc-pill-more ${expandedInclusions[pkg.id] ? 'expanded' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleInclusions(pkg.id);
                        }}
                        title={expandedInclusions[pkg.id] ? 'Click to show fewer inclusions' : `Click to view all ${pkg.inclusions.length} inclusions`}
                      >
                        {expandedInclusions[pkg.id] ? '▲ Show less' : `+${pkg.inclusions.length - 3} more`}
                      </button>
                    )}
                  </div>

                  <div className="package-card-actions">
                    <button 
                      className="btn-card-details"
                      onClick={() => openPackageModal(pkg)}
                      title={`View photos & detailed itinerary for ${pkg.title}`}
                    >
                      <IconItinerary size={16} />
                      <span>Photos & Plan</span>
                    </button>
                    <button 
                      className="btn-card-wa"
                      onClick={() => handleBookOnWhatsApp(pkg.title, pkg.price, pkg.duration)}
                      title={`Inquire on WhatsApp for ${pkg.title}`}
                    >
                      <IconWhatsApp3DBadge size={20} />
                      <span>WhatsApp</span>
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
                  href={`https://wa.me/919712204028?text=${encodeURIComponent(`Hello MNP Holidays! I searched for "${searchQuery || 'Custom Destination'}" on your website and would like a custom itinerary & quotation.`)}`}
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
              <div 
                key={flyer.id} 
                className="flyer-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={handleCardReset}
              >
                <div 
                  className="flyer-card-media" 
                  onClick={() => {
                    setFlyerModalView('flyer');
                    setSelectedFlyer(flyer);
                  }}
                  title="Click to view full high-res official brochure flyer"
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
                    <button className="btn-flyer-zoom">📄 View Official Flyer</button>
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
                      onClick={() => {
                        setFlyerModalView('flyer');
                        setSelectedFlyer(flyer);
                      }}
                    >
                      📄 Official Flyer
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
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20we%20want%20a%20custom%20quote%20for%20a%20Corporate/MICE%20Tour" 
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
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20we%20want%20a%20quote%20for%20a%20School/College%20Educational%20Tour" 
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
      <section id="about" className="about-section-dark section-padding">
        {/* Dynamic 3D Logo Animation Video Background (Replacing the white space) */}
        <div className="about-bg-video-wrapper" aria-hidden="true">
          <img 
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=90" 
            alt="World-Class Luxury Travel MNP Holidays" 
            className="about-bg-img"
            loading="lazy"
          />
          <div className="about-bg-overlay"></div>
        </div>

        <div className="container about-grid">
          <div className="about-visual">
            {/* High-Visibility 3D Stage Background */}
            <div className="about-3d-stage" aria-hidden="true">
              {/* Slanted 3D Backing Canvas Plate */}
              <div className="about-3d-backing-card">
                <div className="backing-card-grid"></div>
                <div className="backing-glow-orb backing-orb-1"></div>
                <div className="backing-glow-orb backing-orb-2"></div>
                <div className="backing-card-badge">
                  <span className="backing-badge-dot"></span>
                  <span>MNP LUXURY TRAVEL SUITE</span>
                </div>
              </div>

              {/* 3D Animated Orbital Rings */}
              <div className="about-3d-orbit ring-outer"></div>
              <div className="about-3d-orbit ring-inner"></div>
            </div>

            {/* Main Image Frame Elevated with 3D Depth */}
            <div className="about-img-frame">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80" 
                alt="MNP Holidays Premium Travel" 
                className="about-img"
              />
              
              <div className="about-floating-accent-badge accent-badge-top-left">
                <span className="accent-badge-icon">🌟</span>
                <span className="accent-badge-text">100% Verified Partners</span>
              </div>

              <div className="about-floating-accent-badge accent-badge-top-right">
                <span className="accent-badge-icon">✈️</span>
                <span className="accent-badge-text">Daily Flight Deals</span>
              </div>

              <div className="about-floating-badge">
                <span className="badge-number">12+</span>
                <span className="badge-text">Years of Travel Excellence in Gujarat</span>
              </div>
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
                    <a href="tel:+919712204028" className="branch-phone-chip">📞 +91 97122 04028</a>
                    <a href="tel:+919327371565" className="branch-phone-chip">+91 93273 71565</a>
                    <a href="tel:+919327130670" className="branch-phone-chip">+91 93271 30670</a>
                    <a 
                      href="https://www.google.com/maps/dir/23.0447408,72.6387762/MNP+HOLIDAYS+PVT+LTD,+224,+Town+Plazza,+Raspan+Cross+Rd,+New+India+Colony,+Nicol+Gam,+Nik" 
                      target="_blank" 
                      rel="noreferrer"
                      className="branch-maps-btn"
                    >
                      📍 Open in Google Maps
                    </a>
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
                  href="tel:+919712204028" 
                  className="social-3d-btn"
                  title="Direct Phone Call"
                >
                  <IconPhone3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Calling Desk</span>
                    <span className="social-detail">+91 97122 04028</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays" 
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
                  href="https://www.instagram.com/mnp_holidays/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-3d-btn"
                  title="Follow on Instagram"
                >
                  <IconInstagram3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Instagram</span>
                    <span className="social-detail">@mnp_holidays</span>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/profile.php?id=61570853468348" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-3d-btn"
                  title="Follow on Facebook"
                >
                  <IconFacebook3D />
                  <div className="social-3d-meta">
                    <span className="social-name">Facebook</span>
                    <span className="social-detail">MNP Holidays</span>
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

                // Automatically capture and sync into MNP Private Travel CRM
                const newLeadObj = {
                  id: `MNP-${Date.now().toString().slice(-4)}`,
                  name: name,
                  phone: phone,
                  destination: dest,
                  pax: parseInt(travelers) || 2,
                  travelMonth: 'Upcoming 2026/27',
                  budget: type.includes('International') ? 145000 : 75000,
                  status: 'new',
                  branch: 'Ahmedabad (Nikol HQ)',
                  agent: 'Pooja (Sales Executive)',
                  source: 'Website Form (Live)',
                  notes: `Live website quote request: ${dest} (${type}, ${travelers} pax). Needs immediate WhatsApp follow-up.`
                };
                addNewLeadToCrm(newLeadObj);

                const text = `Hi MNP Holidays! I am requesting a quote:\n\n• Name: ${name}\n• Phone: ${phone}\n• Destination: ${dest}\n• Tour Type: ${type}\n• Travelers: ${travelers}`;
                window.open(`https://wa.me/919712204028?text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              <div className="form-group">
                <label>Your Full Name</label>
                <input type="text" name="name" placeholder="e.g. Nikesh Prajapati" required />
              </div>
              <div className="form-group">
                <label>WhatsApp / Phone Number</label>
                <input type="tel" name="phone" placeholder="e.g. 97122 04028" required />
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

      {/* Package Detail Modal with 4-Photo Multi-Image Gallery */}
      {selectedPackage && (() => {
        const gallery = (selectedPackage.gallery && selectedPackage.gallery.length > 0)
          ? selectedPackage.gallery
          : [selectedPackage.image];
        const activeImg = gallery[activeModalImgIdx] || selectedPackage.image;

        const handlePrevImg = (e) => {
          e.stopPropagation();
          setActiveModalImgIdx((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
        };

        const handleNextImg = (e) => {
          e.stopPropagation();
          setActiveModalImgIdx((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
        };

        return (
          <div className="modal-backdrop" onClick={() => setSelectedPackage(null)}>
            <div className="modal-card modal-card-gallery" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={() => setSelectedPackage(null)}
                aria-label="Close modal"
              >✕</button>

              {/* Multi-Photo Gallery Showcase */}
              <div className="modal-gallery-wrapper">
                <div className="modal-gallery-main">
                  <img 
                    key={activeImg}
                    src={activeImg} 
                    alt={`${selectedPackage.title} - Photo ${activeModalImgIdx + 1}`} 
                    className="modal-gallery-active-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = selectedPackage.image || 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85';
                    }}
                  />
                  <div className="modal-badge">{selectedPackage.tag}</div>

                  {gallery.length > 1 && (
                    <>
                      <button 
                        type="button"
                        className="modal-gallery-arrow modal-gallery-prev" 
                        onClick={handlePrevImg}
                        aria-label="Previous photo"
                        title="Previous photo (or press ← Left Arrow)"
                      >
                        ‹
                      </button>
                      <button 
                        type="button"
                        className="modal-gallery-arrow modal-gallery-next" 
                        onClick={handleNextImg}
                        aria-label="Next photo"
                        title="Next photo (or press → Right Arrow)"
                      >
                        ›
                      </button>
                      <div className="modal-gallery-counter">
                        📸 {activeModalImgIdx + 1} / {gallery.length} Photos
                      </div>
                    </>
                  )}
                </div>

                {/* Clickable 4-Photo Thumbnail Strip */}
                {gallery.length > 1 && (
                  <div className="modal-thumbnails-strip" role="tablist" aria-label="Package photo thumbnails">
                    {gallery.map((thumbUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`modal-thumb-btn ${idx === activeModalImgIdx ? 'active' : ''}`}
                        onClick={() => setActiveModalImgIdx(idx)}
                        aria-label={`View photo ${idx + 1}`}
                        title={`View photo ${idx + 1} of ${gallery.length}`}
                      >
                        <img 
                          src={thumbUrl} 
                          alt={`Thumbnail ${idx + 1}`} 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = selectedPackage.image;
                          }}
                        />
                        <span className="thumb-idx-badge">{idx + 1}</span>
                      </button>
                    ))}
                  </div>
                )}
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
                    <IconWhatsApp3DBadge size={22} />
                    <span>Inquire on WhatsApp</span>
                  </button>
                  <a href="tel:+919712204028" className="modal-btn-call">
                    📞 Call Desk (+91 97122 04028)
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Official Flyer Full-Screen Lightbox Modal */}
      {selectedFlyer && (
        <div className="flyer-lightbox-backdrop" onClick={() => setSelectedFlyer(null)}>
          <div className="flyer-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="flyer-lightbox-close" onClick={() => setSelectedFlyer(null)} aria-label="Close Flyer">✕</button>
            {selectedFlyer.flyer && selectedFlyer.image && (
              <div className="flyer-modal-view-toggle">
                <button 
                  type="button"
                  className={`flyer-toggle-tab ${flyerModalView === 'flyer' ? 'active' : ''}`}
                  onClick={() => setFlyerModalView('flyer')}
                >
                  📄 Official Brochure Flyer
                </button>
                <button 
                  type="button"
                  className={`flyer-toggle-tab ${flyerModalView === 'destination' ? 'active' : ''}`}
                  onClick={() => setFlyerModalView('destination')}
                >
                  📷 Destination Photography
                </button>
              </div>
            )}
            <div className="flyer-lightbox-image-wrap">
              <img 
                src={flyerModalView === 'destination' ? selectedFlyer.image : (selectedFlyer.flyer || selectedFlyer.image)} 
                alt={selectedFlyer.title} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = selectedFlyer.image || selectedFlyer.flyer || 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80';
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
                  📍 Ahmedabad Head Office: SF 224, Townplaza, Raspan Cross Road, Nikol, Ahmedabad - 382350
                </div>
                <div style={{ fontSize: '0.80rem', color: '#7DD3FC', marginTop: '0.15rem' }}>
                  📍 Mumbai Office: Shop No.8, Rangari Height, Lal Baug, Kalachowki, Mumbai - 400033
                </div>
              </div>
              <div className="flyer-lightbox-actions">
                <button 
                  className="btn-flyer-wa"
                  style={{ padding: '0.75rem 1.4rem', fontSize: '0.95rem' }}
                  onClick={() => handleFlyerWhatsApp(selectedFlyer.title, selectedFlyer.price)}
                >
                  <IconWhatsApp3DBadge size={22} />
                  <span>Inquire on WhatsApp</span>
                </button>
                <a 
                  href="tel:+919712204028" 
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
          href="tel:+919712204028" 
          className="dock-item" 
          title="Direct Phone Call: +91 97122 04028"
          aria-label="Call MNP Holidays"
        >
          <div className="dock-icon-wrapper">
            <IconPhone3D />
          </div>
          <span className="dock-tooltip">Call Desk (+91 97122 04028)</span>
        </a>

        {/* WhatsApp 3D Icon */}
        <a 
          href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20inquire%20about%20a%20tour" 
          target="_blank" 
          rel="noreferrer" 
          className="dock-item dock-pulse" 
          title="Instant WhatsApp: +91 97122 04028"
          aria-label="Chat on WhatsApp"
        >
          <div className="dock-icon-wrapper">
            <IconWhatsApp3D />
          </div>
          <span className="dock-tooltip">Chat on WhatsApp</span>
        </a>

        {/* Instagram 3D Icon */}
        <a 
          href="https://www.instagram.com/mnp_holidays/" 
          target="_blank" 
          rel="noreferrer" 
          className="dock-item" 
          title="Follow us on Instagram (@mnp_holidays)"
          aria-label="Instagram Profile"
        >
          <div className="dock-icon-wrapper">
            <IconInstagram3D />
          </div>
          <span className="dock-tooltip">Follow @mnp_holidays</span>
        </a>

        {/* Facebook 3D Icon */}
        <a 
          href="https://www.facebook.com/profile.php?id=61570853468348" 
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

      {/* Footer */}
      <footer id="site-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="footer-brand-title-wrap">
              <img src="/logo.png" alt="MNP Holidays Pvt. Ltd." className="footer-logo-img" />
              <span className="footer-brand-title"><span className="logo-accent">MNP</span> Holidays Pvt. Ltd.</span>
            </div>
            <p>Your premier tour operator in Ahmedabad & Mumbai for Domestic trending tours, International vacations, Group Departures, Visas, Corporate MICE, School & College tours, and Honeymoons.</p>
          </div>

          <div className="footer-branches-grid">
            <div className="footer-branch-col">
              <h5>📍 Ahmedabad Head Office (Gujarat)</h5>
              <p>Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad - 382350</p>
              <div className="footer-branch-links">
                <a href="tel:+919712204028">📞 +91 97122 04028</a>
                <span>•</span>
                <a href="tel:+919327371565">+91 93273 71565</a>
                <span>•</span>
                <a 
                  href="https://www.google.com/maps/dir/23.0447408,72.6387762/MNP+HOLIDAYS+PVT+LTD,+224,+Town+Plazza,+Raspan+Cross+Rd,+New+India+Colony,+Nicol+Gam,+Nik" 
                  target="_blank" 
                  rel="noreferrer"
                  className="footer-branch-map-link"
                >
                  🗺️ Map Location
                </a>
              </div>
            </div>

            <div className="footer-branch-col">
              <h5>📍 Mumbai Branch Office (Maharashtra)</h5>
              <p>Shop No.8, Rangari Height, Samarth Hanuman Lane, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033</p>
              <div className="footer-branch-links">
                <a href="tel:+919898083171">📞 +91 98980 83171</a>
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

      {/* Trip.com Signature Mobile App Bottom Bar (5 Tabs) */}
      <nav className="mobile-bottom-nav trip-bottom-bar" aria-label="Mobile App Navigation">
        <a href="#home" className="mobile-bottom-tab active">
          <div className="tab-icon-wrap">
            <span className="bottom-tab-icon">🏠</span>
          </div>
          <span className="bottom-tab-label">Home</span>
          <span className="tab-active-dot"></span>
        </a>
        <a 
          href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20have%20an%20inquiry" 
          target="_blank" 
          rel="noreferrer" 
          className="mobile-bottom-tab"
        >
          <div className="tab-icon-wrap">
            <span className="bottom-tab-icon">✉️</span>
            <span className="tab-badge-unread">1</span>
          </div>
          <span className="bottom-tab-label">Messages</span>
        </a>
        <a href="#official-flyers" className="mobile-bottom-tab">
          <div className="tab-icon-wrap">
            <span className="bottom-tab-icon">👥</span>
          </div>
          <span className="bottom-tab-label">Community</span>
        </a>
        <a href="#destinations" className="mobile-bottom-tab">
          <div className="tab-icon-wrap">
            <span className="bottom-tab-icon">🧳</span>
          </div>
          <span className="bottom-tab-label">My Trips</span>
        </a>
        <a href="#contact" className="mobile-bottom-tab">
          <div className="tab-icon-wrap">
            <span className="bottom-tab-icon">👤</span>
          </div>
          <span className="bottom-tab-label">Sign In</span>
        </a>
      </nav>

      {/* Floating Mac App Preview Launcher Button */}
      <button 
        className="btn-mac-app-preview" 
        onClick={() => setShowAppPreview(true)}
        title="Preview Mobile App on Mac"
      >
        <span className="mac-preview-icon">📱</span>
        <span className="mac-preview-text">Preview Mobile App</span>
      </button>

      {/* Interactive Mac Phone Simulator Modal */}
      {showAppPreview && (
        <div className="simulator-modal-backdrop" onClick={() => setShowAppPreview(false)}>
          <div className="phone-simulator-frame" onClick={(e) => e.stopPropagation()}>
            {/* Phone Notch & Status Bar */}
            <div className="phone-notch-bar">
              <span className="phone-status-time">9:41</span>
              <div className="phone-notch"></div>
              <span className="phone-status-icons">5G 📶 🔋</span>
            </div>

            {/* Simulated Mobile App Window Header */}
            <div className="sim-app-header">
              <div className="sim-brand">
                <img src="/logo.png" alt="MNP Holidays" className="sim-logo" />
                <div>
                  <strong>MNP<span style={{ color: '#FF9800' }}>.Holidays</span></strong>
                  <span className="sim-sub">Official Tours</span>
                </div>
              </div>
              <div className="sim-header-right">
                <span className="sim-badge-coin">🪙 Deals</span>
                <a href="tel:+919712204028" className="sim-call-btn">📞</a>
                <button className="sim-close-btn" onClick={() => setShowAppPreview(false)} title="Close Preview">✕</button>
              </div>
            </div>

            {/* Scrollable Simulated Mobile Content */}
            <div className="sim-scroll-body">
              {/* Trip.com Pill Search Bar */}
              <div className="sim-search-bar">
                <span className="sim-search-icon">🔍</span>
                <input 
                  type="text" 
                  placeholder="Search destinations, hotels, flights..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="sim-btn-search">Search</button>
              </div>

              {/* 8-Service Grid: 100% Authentic MNP Services */}
              <div className="sim-service-grid">
                {[
                  { name: 'Packages', icon: '🏖️', query: 'Tour Packages' },
                  { name: 'Flights', icon: '✈️', query: 'Fixed Flight Group Departures' },
                  { name: 'Rajasthan', icon: '🏰', query: 'Rajasthan Heritage Tours' },
                  { name: 'International', icon: '🌏', query: 'International Tours' },
                  { name: 'E-Visas', icon: '📋', query: 'Tourist Visa / E-Visa Fast Assistance' },
                  { name: '19 Flyers', icon: '📸', query: '19 Official Flyers' },
                  { name: 'Corporate', icon: '💼', query: 'Corporate MICE & Offsites' },
                  { name: 'Colleges', icon: '🎓', query: 'School & College Group Expeditions' },
                ].map((s) => (
                  <div 
                    key={s.name} 
                    className="sim-service-item"
                    onClick={() => {
                      if (s.name === 'Packages' || s.name === 'Rajasthan' || s.name === 'International') {
                        setSearchQuery(s.name === 'Packages' ? '' : s.name);
                      } else {
                        window.open(`https://wa.me/919712204028?text=${encodeURIComponent('Hello MNP Holidays! I would like details about: ' + s.query)}`, '_blank');
                      }
                    }}
                  >
                    <div className="sim-icon-circle">{s.icon}</div>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>

              {/* Quick Tags: Authentic MNP Destinations */}
              <div className="sim-tags-scroll">
                {['All', 'Thailand', 'Udaipur', 'Vietnam', 'Dubai', 'Kashmir', 'Jaisalmer', 'Kumbhalgarh', 'Bali', 'Goa', 'Andaman'].map((t) => (
                  <span 
                    key={t} 
                    className={`sim-tag-pill ${searchQuery.toLowerCase() === t.toLowerCase() || (t === 'All' && !searchQuery) ? 'active' : ''}`}
                    onClick={() => setSearchQuery(t === 'All' ? '' : t)}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Vouchers Banner: Authentic MNP Special Offers */}
              <div className="sim-voucher-card">
                <div className="sim-voucher-top">
                  <span>🎁 New User Discounts Available</span>
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20claim%20all%20discount%20vouchers"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-claim-tag"
                  >
                    Claim All
                  </a>
                </div>
                <div className="sim-tickets-row">
                  <div className="sim-ticket">✈️ Flights <strong>3% off</strong></div>
                  <div className="sim-ticket red">🏨 Hotels <strong>10% off</strong></div>
                  <div className="sim-ticket green">🏖️ Tours <strong>10% off</strong></div>
                </div>
              </div>

              {/* Dual Promo Banners: Authentic MNP Top Deals */}
              <div className="sim-dual-banners">
                <a 
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20am%20interested%20in%20Thailand%204N/5D%20Tour%20Package%20for%20₹14,999"
                  target="_blank"
                  rel="noreferrer"
                  className="sim-promo-card thailand"
                >
                  <span className="sim-promo-tag">MNP.Holidays</span>
                  <h4>GO THAILAND</h4>
                  <p>4N/5D • ₹14,999</p>
                  <span className="sim-super-badge">SUPER SALE</span>
                </a>
                <a 
                  href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20am%20interested%20in%20Magical%20Udaipur%20Group%20Tour%20for%20₹7,999"
                  target="_blank"
                  rel="noreferrer"
                  className="sim-promo-card mega"
                >
                  <span className="sim-promo-tag">MAGICAL UDAIPUR</span>
                  <h4>2N/3D GROUP</h4>
                  <p>ONLY ₹7,999</p>
                  <span className="sim-white-badge">BESTSELLER</span>
                </a>
              </div>

              {/* Recommendations Title */}
              <div className="sim-feed-title">
                <strong>🔥 Popular Holiday Recommendations</strong>
                <span>Official MNP Tour Packages</span>
              </div>

              {/* 2-Column Waterfall Cards: Authentic MNP Packages & Real Photos */}
              <div className="sim-masonry-feed">
                <div className="sim-masonry-col">
                  {/* Thailand 4N/5D */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20details%20for%20Thailand%204N/5D%20Package%20(₹14,999)"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80" alt="Thailand Coral Island" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge orange">SUPER SALE</span>
                      <h5>Thailand 4N/5D Coral Island & Yacht</h5>
                      <span className="sim-author">📍 Pattaya & Bangkok</span>
                      <strong className="sim-price">₹14,999 <small>/person</small></strong>
                    </div>
                  </a>

                  {/* Udaipur Royal Heritage */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20details%20for%20Magical%20Udaipur%20Group%20Tour%20(₹7,999)"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="/destinations/udaipur.jpg" alt="Udaipur City Palace" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge gold">ROYAL HIT</span>
                      <h5>Magical Udaipur 2N/3D Group Tour</h5>
                      <span className="sim-author">📍 Udaipur & Shrinathji</span>
                      <strong className="sim-price">₹7,999 <small>/person</small></strong>
                    </div>
                  </a>

                  {/* Jaisalmer Desert Camp */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20details%20for%20Jaisalmer%20Desert%20Camp"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="/destinations/jaisalmer_desert.jpg" alt="Jaisalmer Thar Desert Camp" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge gold">DESERT HIT</span>
                      <h5>Jaisalmer Luxury Swiss Tent & Safari</h5>
                      <span className="sim-author">📍 Sam Sand Dunes, Thar</span>
                      <strong className="sim-price">₹25,500 <small>/couple</small></strong>
                    </div>
                  </a>
                </div>

                <div className="sim-masonry-col">
                  {/* Vietnam 3 Cities */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20details%20for%20Vietnam%203%20Cities%20Tour%20(₹59,999)"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="/destinations/vietnam_bridge.jpg" alt="Vietnam Ba Na Hills Golden Bridge" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge blue">TRENDING</span>
                      <h5>Vietnam 3 Cities: Hanoi, Da Nang & Saigon</h5>
                      <span className="sim-author">📍 Vietnam 7D/6N</span>
                      <strong className="sim-price">₹59,999 <small>/person</small></strong>
                    </div>
                  </a>

                  {/* Kashmir Paradise */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20details%20for%20Heavenly%20Kashmir%20Tour%20(₹18,999)"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="/destinations/kashmir.jpg" alt="Kashmir Dal Lake Houseboat" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge green">PARADISE</span>
                      <h5>Kashmir Dal Lake & Gulmarg Gondola</h5>
                      <span className="sim-author">📍 Srinagar & Gulmarg</span>
                      <strong className="sim-price">₹18,999 <small>/person</small></strong>
                    </div>
                  </a>

                  {/* Kumbhalgarh Resorts */}
                  <a 
                    href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20please%20send%20rates%20for%20Kumbhalgarh%20Top%20Luxury%20Resorts"
                    target="_blank"
                    rel="noreferrer"
                    className="sim-card"
                  >
                    <img src="/destinations/kumbhalgarh.jpg" alt="Kumbhalgarh Luxury Resorts" />
                    <div className="sim-card-info">
                      <span className="sim-card-badge gold">20+ RESORTS</span>
                      <h5>Kumbhalgarh Fort & Luxury Resorts</h5>
                      <span className="sim-author">📍 Kumbhalgarh Valley</span>
                      <strong className="sim-price">Best Rates <small>Guaranteed</small></strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Concierge Pill in Simulator */}
            <a 
              href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays,%20I%20am%20using%20the%20app%20and%20need%20assistance"
              target="_blank"
              rel="noreferrer"
              className="sim-floating-ai-pill"
            >
              <span className="sim-mic-icon">💬</span>
              <span>WhatsApp Concierge (97122 04028)</span>
            </a>

            {/* Phone Bottom Tab Bar: Authentic MNP Navigation */}
            <div className="sim-bottom-bar">
              <div className="sim-tab active" onClick={() => setSearchQuery('')}>
                <span>🏠</span>
                <label>Home</label>
                <div className="sim-dot"></div>
              </div>
              <a 
                href="https://wa.me/919712204028?text=Hello%20MNP%20Holidays"
                target="_blank"
                rel="noreferrer"
                className="sim-tab"
              >
                <span>✉️</span>
                <label>Messages</label>
              </a>
              <div 
                className="sim-tab"
                onClick={() => {
                  setShowAppPreview(false);
                  document.getElementById('official-flyers')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>📸</span>
                <label>19 Flyers</label>
              </div>
              <div 
                className="sim-tab"
                onClick={() => {
                  setShowAppPreview(false);
                  document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>🧳</span>
                <label>Packages</label>
              </div>
              <a 
                href="tel:+919712204028"
                className="sim-tab"
              >
                <span>👤</span>
                <label>Sign In</label>
              </a>
            </div>

            {/* Phone Bottom Home Bar */}
            <div className="phone-home-indicator"></div>
          </div>
        </div>
      )}

      {/* ========================================================
          MNP HOLIDAYS - PRIVATE TRAVEL CRM PORTAL MODAL
          Brand Colors: Deep Royal Blue, Travel Orange, Clean White
          ======================================================== */}
      {showCrmPortal && (
        <div 
          className="mnp-crm-overlay"
          onClick={(e) => {
            if (e.target.classList.contains('mnp-crm-overlay')) {
              setShowCrmPortal(false);
            }
          }}
        >
          <div className="mnp-crm-portal">
            {/* Top Navigation Bar */}
            <div className="mnp-crm-topbar">
              <div className="mnp-crm-brand-group">
                <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-logo-img" />
                <div className="mnp-crm-titles">
                  <h2>
                    <span>MNP Holidays</span>
                    <span style={{ color: '#FF6B00', fontSize: '0.85em' }}>CRM</span>
                  </h2>
                  <div className="mnp-crm-tagline">
                    <span>Travel Lead Command Center</span>
                    <span className="mnp-crm-branch-pill">Ahmedabad HQ & Mumbai Branch</span>
                  </div>
                </div>
              </div>

              {crmLoggedIn && (
                <div className="mnp-crm-search-box">
                  <span className="mnp-crm-search-icon">🔍</span>
                  <input 
                    type="text" 
                    className="mnp-crm-search-input"
                    placeholder="Search client name, phone, destination..."
                    value={crmSearch}
                    onChange={(e) => setCrmSearch(e.target.value)}
                  />
                </div>
              )}

              <div className="mnp-crm-actions-group">
                {crmLoggedIn ? (
                  <>
                    <button 
                      className="btn-crm-action primary"
                      onClick={() => setShowAddLeadModal(true)}
                    >
                      <span>➕</span>
                      <span>Add Lead</span>
                    </button>
                    <button 
                      className="btn-crm-action"
                      onClick={() => setShowQuoteCalcModal(true)}
                    >
                      <span>⚡</span>
                      <span>Quote Calc</span>
                    </button>
                    <button 
                      className="btn-crm-action"
                      onClick={exportLeadsToCsv}
                      title="Export all leads to Excel / CSV"
                    >
                      <span>📥</span>
                      <span>Export CSV</span>
                    </button>
                    <button 
                      className="btn-crm-action"
                      onClick={() => setCrmLoggedIn(false)}
                      title="Lock CRM"
                    >
                      <span>🔒</span>
                      <span>Lock</span>
                    </button>
                  </>
                ) : (
                  <button 
                    className="btn-crm-action primary"
                    onClick={() => setCrmLoggedIn(true)}
                  >
                    <span>⚡</span>
                    <span>Admin Unlock</span>
                  </button>
                )}
                <button 
                  className="btn-crm-close"
                  onClick={() => setShowCrmPortal(false)}
                  title="Close CRM"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Portal Body */}
            {!crmLoggedIn ? (
              /* Security PIN Lock Shield */
              <div className="mnp-crm-login-shield">
                <div className="mnp-crm-login-card">
                  <img src="/logo.png" alt="MNP Holidays" className="mnp-crm-login-logo" />
                  <div>
                    <h3 className="mnp-crm-login-title">Staff & Admin Access Required</h3>
                    <p className="mnp-crm-login-sub">Enter your 4-digit travel executive PIN to access MNP customer leads & bookings.</p>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (crmPinInput === '7777' || crmPinInput === '2026') {
                        setCrmLoggedIn(true);
                        setCrmPinError('');
                      } else {
                        setCrmPinError('Incorrect PIN. (Default PIN: 7777 or click Quick Login below)');
                      }
                    }}
                  >
                    <div className="mnp-crm-pin-box">
                      <input 
                        type="password" 
                        maxLength="4"
                        className="mnp-crm-pin-input"
                        placeholder="••••"
                        value={crmPinInput}
                        onChange={(e) => {
                          setCrmPinInput(e.target.value);
                          if (e.target.value === '7777' || e.target.value === '2026') {
                            setCrmLoggedIn(true);
                          }
                        }}
                        autoFocus
                      />
                    </div>
                    {crmPinError && (
                      <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '0.2rem 0' }}>{crmPinError}</p>
                    )}
                    <button type="submit" className="btn-crm-action primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                      Unlock CRM Dashboard
                    </button>
                  </form>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                    <button 
                      className="btn-crm-quick-login"
                      onClick={() => setCrmLoggedIn(true)}
                    >
                      <span>👑</span>
                      <span>Quick Login as Brijesh Patel (Owner)</span>
                    </button>
                    <small style={{ color: '#94A3B8', display: 'block', marginTop: '6px', fontSize: '0.7rem' }}>
                      Default Staff PIN: 7777 • Protected Multi-Tenant CRM
                    </small>
                  </div>
                </div>
              </div>
            ) : (
              /* Main CRM Dashboard Content */
              <div className="mnp-crm-body">
                {/* KPI Executive Summary Grid */}
                {(() => {
                  const totalPipelineVal = crmLeads.reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);
                  const confirmedCount = crmLeads.filter((l) => l.status === 'confirmed').length;
                  const confirmedVal = crmLeads.filter((l) => l.status === 'confirmed').reduce((acc, curr) => acc + (Number(curr.budget) || 0), 0);
                  const visaCount = crmLeads.filter((l) => l.status === 'visa').reduce((acc, curr) => acc + (Number(curr.pax) || 0), 0);
                  const newCount = crmLeads.filter((l) => l.status === 'new').length;

                  return (
                    <div className="mnp-crm-kpi-grid">
                      <div className="mnp-crm-kpi-card blue">
                        <div className="mnp-crm-kpi-icon">📈</div>
                        <div className="mnp-crm-kpi-details">
                          <span className="mnp-crm-kpi-label">Total Pipeline</span>
                          <span className="mnp-crm-kpi-value">₹{totalPipelineVal.toLocaleString('en-IN')}</span>
                          <span className="mnp-crm-kpi-subtext">Across {crmLeads.length} Total Leads</span>
                        </div>
                      </div>

                      <div className="mnp-crm-kpi-card orange">
                        <div className="mnp-crm-kpi-icon">⚡</div>
                        <div className="mnp-crm-kpi-details">
                          <span className="mnp-crm-kpi-label">New Inquiries</span>
                          <span className="mnp-crm-kpi-value">{newCount} Leads</span>
                          <span className="mnp-crm-kpi-subtext" style={{ color: '#FF6B00' }}>Awaiting Initial Quote</span>
                        </div>
                      </div>

                      <div className="mnp-crm-kpi-card green">
                        <div className="mnp-crm-kpi-icon">🎉</div>
                        <div className="mnp-crm-kpi-details">
                          <span className="mnp-crm-kpi-label">Confirmed & Paid</span>
                          <span className="mnp-crm-kpi-value">₹{confirmedVal.toLocaleString('en-IN')}</span>
                          <span className="mnp-crm-kpi-subtext">{confirmedCount} Successful Bookings</span>
                        </div>
                      </div>

                      <div className="mnp-crm-kpi-card purple">
                        <div className="mnp-crm-kpi-icon">🛂</div>
                        <div className="mnp-crm-kpi-details">
                          <span className="mnp-crm-kpi-label">Visas Processing</span>
                          <span className="mnp-crm-kpi-value">{visaCount} Travelers</span>
                          <span className="mnp-crm-kpi-subtext" style={{ color: '#8B5CF6' }}>Vietnam, Dubai & Bali</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Pipeline Stages Filter Bar */}
                <div className="mnp-crm-filter-bar">
                  {[
                    { id: 'all', label: 'All Inquiries', icon: '📁' },
                    { id: 'new', label: 'New Inquiries', icon: '⚡' },
                    { id: 'quote', label: 'Quote Sent', icon: '📄' },
                    { id: 'visa', label: 'Visa Processing', icon: '🛂' },
                    { id: 'confirmed', label: 'Confirmed & Paid', icon: '🎉' },
                    { id: 'followup', label: 'Follow-up Due', icon: '⏰' }
                  ].map((stage) => {
                    const count = stage.id === 'all' 
                      ? crmLeads.length 
                      : crmLeads.filter((l) => l.status === stage.id).length;

                    return (
                      <button
                        key={stage.id}
                        className={`mnp-crm-stage-chip ${crmStageFilter === stage.id ? 'active' : ''}`}
                        onClick={() => setCrmStageFilter(stage.id)}
                      >
                        <span>{stage.icon}</span>
                        <span>{stage.label}</span>
                        <span className="mnp-crm-chip-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Leads Grid & Cards */}
                {(() => {
                  const filtered = crmLeads.filter((lead) => {
                    const matchesStage = crmStageFilter === 'all' || lead.status === crmStageFilter;
                    if (!crmSearch.trim()) return matchesStage;
                    const q = crmSearch.toLowerCase();
                    const matchText = [
                      lead.name,
                      lead.phone,
                      lead.destination,
                      lead.branch,
                      lead.agent,
                      lead.notes
                    ].join(' ').toLowerCase();
                    return matchesStage && matchText.includes(q);
                  });

                  if (filtered.length === 0) {
                    return (
                      <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px dashed #CBD5E1' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏝️</div>
                        <h4 style={{ color: '#0F2557', margin: 0, fontWeight: 800 }}>No Leads Found</h4>
                        <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>Try switching stage filters or search keywords.</p>
                        <button 
                          className="btn-crm-action primary"
                          onClick={() => { setCrmStageFilter('all'); setCrmSearch(''); }}
                          style={{ marginTop: '0.5rem' }}
                        >
                          Reset Filters
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div className="mnp-crm-leads-grid">
                      {filtered.map((lead) => {
                        const waQuoteText = `Hello ${lead.name}! This is ${lead.agent} from MNP Holidays Pvt. Ltd.\n\nFollowing your inquiry for *${lead.destination}* (${lead.pax} travelers, ${lead.travelMonth}):\n\n✨ Estimated Package: ₹${Number(lead.budget).toLocaleString('en-IN')}\n🏨 4★/5★ Verified Luxury Hotels\n✈️ Flight & Tourist Visa Assistance\n🚗 Private Cab Sightseeing & Concierge\n\nMay we send the complete day-wise PDF itinerary to this number?`;

                        return (
                          <div key={lead.id} className="mnp-crm-lead-card">
                            <div className="mnp-crm-lead-header">
                              <div>
                                <h4 className="mnp-crm-cust-name">
                                  <span>👤</span>
                                  <span>{lead.name}</span>
                                </h4>
                                <span className="mnp-crm-lead-time">
                                  ID: {lead.id} • Source: {lead.source}
                                </span>
                              </div>
                              <select 
                                className={`mnp-crm-status-select ${lead.status}`}
                                value={lead.status}
                                onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                              >
                                <option value="new">⚡ New Lead</option>
                                <option value="quote">📄 Quote Sent</option>
                                <option value="visa">🛂 Visa In-Process</option>
                                <option value="confirmed">🎉 Confirmed & Paid</option>
                                <option value="followup">⏰ Follow-up Due</option>
                              </select>
                            </div>

                            <div className="mnp-crm-lead-info-box">
                              <div className="mnp-crm-info-row">
                                <span className="mnp-crm-info-label">📍 Destination</span>
                                <span className="mnp-crm-info-val" style={{ color: '#0284C7' }}>{lead.destination}</span>
                              </div>
                              <div className="mnp-crm-info-row">
                                <span className="mnp-crm-info-label">👨‍👩‍👧‍👦 Travelers</span>
                                <span className="mnp-crm-info-val">{lead.pax} Pax ({lead.travelMonth})</span>
                              </div>
                              <div className="mnp-crm-info-row">
                                <span className="mnp-crm-info-label">💰 Quotation</span>
                                <span className="mnp-crm-lead-quote">₹{Number(lead.budget).toLocaleString('en-IN')}</span>
                              </div>
                              <div className="mnp-crm-info-row">
                                <span className="mnp-crm-info-label">🏢 Branch & Agent</span>
                                <span className="mnp-crm-info-val" style={{ fontSize: '0.72rem', color: '#64748B' }}>{lead.agent} ({lead.branch})</span>
                              </div>
                            </div>

                            {lead.notes && (
                              <div className="mnp-crm-notes-box">
                                <strong>Remarks:</strong> {lead.notes}
                              </div>
                            )}

                            <div className="mnp-crm-card-actions">
                              <a 
                                href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(waQuoteText)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-crm-card-wa"
                                title="Send official itinerary & quote on WhatsApp"
                              >
                                <span>💬</span>
                                <span>WhatsApp Quote</span>
                              </a>
                              <a 
                                href={`tel:+91${lead.phone.replace(/\D/g, '')}`}
                                className="btn-crm-card-call"
                                title="Call customer"
                              >
                                <span>📞</span>
                                <span>Call ({lead.phone})</span>
                              </a>
                              <button 
                                className="btn-crm-card-del"
                                onClick={() => deleteLead(lead.id)}
                                title="Delete Lead"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Submodal 1: Manual Add Lead Intake */}
            {showAddLeadModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowAddLeadModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>➕ Add New Travel Inquiry</h3>
                    <button className="btn-crm-close" onClick={() => setShowAddLeadModal(false)}>✕</button>
                  </div>

                  <form onSubmit={handleCreateLeadSubmit} className="mnp-crm-form-grid">
                    <div className="mnp-crm-form-group">
                      <label>Client Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Nilesh Patel"
                        value={newLeadForm.name}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>WhatsApp / Phone</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="e.g. 98250 12345"
                        value={newLeadForm.phone}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Package / Destination</label>
                      <select 
                        value={newLeadForm.destination}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, destination: e.target.value })}
                      >
                        <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                        <option value="Thailand 3-Cities Mega Package (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                        <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                        <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                        <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                        <option value="Dubai 5D4N Shopping Festival & Safari">Dubai 5D4N Shopping Festival & Safari</option>
                        <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                        <option value="Goa Luxury Beachside Villa">Goa Luxury Beachside Villa</option>
                        <option value="Custom Corporate MICE / School Tour">Custom Corporate MICE / School Tour</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Total Pax</label>
                      <input 
                        type="number" 
                        min="1" 
                        value={newLeadForm.pax}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, pax: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Travel Month</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dec 2026, Diwali, Jan"
                        value={newLeadForm.travelMonth}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, travelMonth: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Estimated Budget (₹)</label>
                      <input 
                        type="number" 
                        value={newLeadForm.budget}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, budget: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group">
                      <label>Branch & Agent</label>
                      <select 
                        value={newLeadForm.agent}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, agent: e.target.value })}
                      >
                        <option value="Brijesh Patel (Admin)">Brijesh Patel (Admin HQ)</option>
                        <option value="Pooja (Sales Executive)">Pooja (Nikol Branch)</option>
                        <option value="Amit (Mumbai Branch)">Amit (Mumbai Lalbaug Branch)</option>
                      </select>
                    </div>
                    <div className="mnp-crm-form-group full">
                      <label>Customer Remarks / Notes</label>
                      <textarea 
                        rows="2"
                        placeholder="Hotel preferences, food requirements, flight timings..."
                        value={newLeadForm.notes}
                        onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                      />
                    </div>
                    <div className="mnp-crm-form-group full" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                      <button type="button" className="btn-crm-action" onClick={() => setShowAddLeadModal(false)}>Cancel</button>
                      <button type="submit" className="btn-crm-action primary">Save Lead to MNP CRM</button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Submodal 2: Quick Travel Quote Calculator */}
            {showQuoteCalcModal && (
              <div className="mnp-crm-submodal-overlay" onClick={() => setShowQuoteCalcModal(false)}>
                <div className="mnp-crm-submodal" onClick={(e) => e.stopPropagation()}>
                  <div className="mnp-crm-submodal-header">
                    <h3>⚡ Quick Travel Quote Calculator</h3>
                    <button className="btn-crm-close" onClick={() => setShowQuoteCalcModal(false)}>✕</button>
                  </div>

                  {(() => {
                    // Base pricing per destination
                    const rates = {
                      'Vietnam 3-Cities Deluxe (Flyer #1)': { base: 38999, flight: 26000, visa: 3500 },
                      'Thailand 3-Cities Mega (Flyer #2)': { base: 29999, flight: 22000, visa: 0 },
                      'Kashmir Dal Lake & Gulmarg (Flyer #3)': { base: 18999, flight: 14000, visa: 0 },
                      'Bali 6D5N Luxury Pool Villa': { base: 42999, flight: 34000, visa: 3000 },
                      'Dubai 5D4N Shopping Festival': { base: 36999, flight: 24000, visa: 6500 },
                      'Kerala Houseboat & Munnar (Flyer #12)': { base: 16999, flight: 12000, visa: 0 },
                      'Udaipur Royal Heritage Group Tour': { base: 9999, flight: 6000, visa: 0 }
                    };

                    const currentRate = rates[quoteCalcState.destination] || { base: 25000, flight: 15000, visa: 0 };
                    const adultCount = Number(quoteCalcState.adults) || 1;
                    const childCount = Number(quoteCalcState.children) || 0;
                    const hotelMult = quoteCalcState.hotelTier === '5star' ? 1.35 : 1.0;

                    const perAdultBase = Math.round(currentRate.base * hotelMult);
                    const perChildBase = Math.round(currentRate.base * 0.7 * hotelMult);
                    const flightCost = quoteCalcState.includeFlight ? (adultCount + childCount) * currentRate.flight : 0;
                    const visaCost = quoteCalcState.includeVisa ? (adultCount + childCount) * currentRate.visa : 0;

                    const totalEstimatedQuote = (adultCount * perAdultBase) + (childCount * perChildBase) + flightCost + visaCost;
                    const perPersonEstimated = Math.round(totalEstimatedQuote / (adultCount + childCount));

                    const shareQuoteText = `Hello! MNP Holidays Pvt. Ltd. Official Travel Quote:\n\n🌍 Destination: *${quoteCalcState.destination}*\n👥 Travelers: ${adultCount} Adults${childCount > 0 ? `, ${childCount} Children` : ''}\n🏨 Hotel Standard: ${quoteCalcState.hotelTier === '5star' ? '5★ Ultra Luxury' : '4★ Luxury'}\n✈️ Flights Included: ${quoteCalcState.includeFlight ? 'Yes' : 'No'}\n🛂 Visa Included: ${quoteCalcState.includeVisa ? 'Yes' : 'No'}\n\n💰 Total Package Price: *₹${totalEstimatedQuote.toLocaleString('en-IN')}*\n(Approx ₹${perPersonEstimated.toLocaleString('en-IN')} per traveler)\n\nIncludes verified hotels, private transfers, daily breakfast & 24/7 concierge assistance.\nCall Ahmedabad: +91 97122 04028 | Mumbai: +91 98980 83171`;

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div className="mnp-crm-form-group">
                          <label>Choose Tour Destination</label>
                          <select 
                            value={quoteCalcState.destination}
                            onChange={(e) => setQuoteCalcState({ ...quoteCalcState, destination: e.target.value })}
                          >
                            <option value="Vietnam 3-Cities Deluxe (Flyer #1)">Vietnam 3-Cities Deluxe (Flyer #1)</option>
                            <option value="Thailand 3-Cities Mega (Flyer #2)">Thailand 3-Cities Mega (Flyer #2)</option>
                            <option value="Kashmir Dal Lake & Gulmarg (Flyer #3)">Kashmir Dal Lake & Gulmarg (Flyer #3)</option>
                            <option value="Bali 6D5N Luxury Pool Villa">Bali 6D5N Luxury Pool Villa</option>
                            <option value="Dubai 5D4N Shopping Festival">Dubai 5D4N Shopping Festival</option>
                            <option value="Kerala Houseboat & Munnar (Flyer #12)">Kerala Houseboat & Munnar (Flyer #12)</option>
                            <option value="Udaipur Royal Heritage Group Tour">Udaipur Royal Heritage Group Tour</option>
                          </select>
                        </div>

                        <div className="mnp-crm-form-grid">
                          <div className="mnp-crm-form-group">
                            <label>Adult Travelers</label>
                            <input 
                              type="number" 
                              min="1" 
                              value={quoteCalcState.adults}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, adults: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Child Travelers</label>
                            <input 
                              type="number" 
                              min="0" 
                              value={quoteCalcState.children}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, children: e.target.value })}
                            />
                          </div>
                          <div className="mnp-crm-form-group">
                            <label>Hotel Category</label>
                            <select 
                              value={quoteCalcState.hotelTier}
                              onChange={(e) => setQuoteCalcState({ ...quoteCalcState, hotelTier: e.target.value })}
                            >
                              <option value="4star">4★ Verified Luxury</option>
                              <option value="5star">5★ Ultra Luxury Palace</option>
                            </select>
                          </div>
                          <div className="mnp-crm-form-group" style={{ justifyContent: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeFlight}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeFlight: e.target.checked })}
                              />
                              <span>Include Airfare</span>
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.8rem', marginTop: '4px' }}>
                              <input 
                                type="checkbox"
                                checked={quoteCalcState.includeVisa}
                                onChange={(e) => setQuoteCalcState({ ...quoteCalcState, includeVisa: e.target.checked })}
                              />
                              <span>Include Visa Fees</span>
                            </label>
                          </div>
                        </div>

                        {/* Resulting Quotation Card */}
                        <div className="mnp-crm-quote-result">
                          <div>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Instant Travel Quotation</span>
                            <div className="mnp-crm-quote-amount">₹{totalEstimatedQuote.toLocaleString('en-IN')}</div>
                            <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>≈ ₹{perPersonEstimated.toLocaleString('en-IN')} per traveler</span>
                          </div>
                          <a 
                            href={`https://wa.me/?text=${encodeURIComponent(shareQuoteText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-crm-action primary"
                            style={{ textDecoration: 'none' }}
                          >
                            <span>💬</span>
                            <span>Share Quote</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;


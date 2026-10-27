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
    <rect x="4" y="4" width="56" height="56" rx="28" fill="url(#phoneGlow)" filter="url(#phoneShadow)" />
    <path d="M10 22C14 11 26 7 38 7C49 7 54 11 54 20C44 14 30 13 10 22Z" fill="url(#phoneShine)" />
    <path d="M22.5 19.5C21.6 19.5 20.8 19.8 20.2 20.4L18.2 22.4C16.8 23.8 16.4 25.8 17.2 27.7C19.3 32.4 23 37.2 27.7 41.5C32.2 45.6 37.3 48.9 42.2 50.4C44.1 51 46.1 50.4 47.5 48.9L49.5 46.9C50.7 45.7 50.7 43.8 49.5 42.6L44.5 37.6C43.3 36.4 41.4 36.4 40.2 37.6L38.4 39.4C37.9 39.2 36.4 38.4 34.3 36.6C32.1 34.5 31.2 33.1 30.9 32.5L32.8 30.6C34 29.4 34 27.5 32.8 26.3L27.8 21.3C26.4 19.9 24.3 19.5 22.5 19.5Z" fill="#FFFFFF" />
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
    <path d="M32 16C23.2 16 16 23.2 16 32C16 35.1 16.9 38 18.5 40.5L16.5 48L24.3 46C26.6 47.3 29.2 48 32 48C40.8 48 48 40.8 48 32C48 23.2 40.8 16 32 16Z" fill="#FFFFFF" />
    <path d="M26.2 24.8C25.7 23.7 25.2 23.7 24.7 23.7C24.3 23.7 23.8 23.7 23.3 24.2C22.8 24.7 21.5 25.9 21.5 28.3C21.5 30.7 23.3 33 23.5 33.3C23.8 33.7 26.9 38.6 31.7 40.6C35.7 42.3 36.5 41.9 37.4 41.8C38.3 41.7 40.3 40.6 40.7 39.4C41.1 38.2 41.1 37.2 41 37C40.9 36.8 40.5 36.7 40 36.4C39.5 36.2 37 35 36.5 34.8C36.1 34.6 35.7 34.5 35.4 35C35 35.6 34 36.8 33.7 37.2C33.4 37.5 33.1 37.6 32.6 37.3C32.1 37.1 30.5 36.6 28.6 34.9C27.1 33.6 26.1 32 25.8 31.5C25.5 31 25.8 30.7 26 30.5C26.3 30.2 26.6 29.8 26.8 29.5C27.1 29.2 27.2 29 27.4 28.6C27.6 28.2 27.5 27.9 27.4 27.6C27.3 27.4 26.7 25.9 26.2 24.8Z" fill="#128C7E" />
  </svg>
);

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
    <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#igBase)" filter="url(#igShadow)" />
    <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#igGlowTop)" />
    <path d="M7 18C10 10 18 6 30 6C42 6 51 9 55 16C45 11 30 11 7 18Z" fill="url(#igShine)" />
    <rect x="17" y="17" width="30" height="30" rx="9" stroke="#FFFFFF" strokeWidth="3" fill="none" />
    <circle cx="32" cy="32" r="7.5" stroke="#FFFFFF" strokeWidth="3" fill="none" />
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
    <path d="M37.5 33.5L38.4 27.5H32.7V23.6C32.7 21.9 33.5 20.3 36.1 20.3H38.7V15.2C38.7 15.2 36.3 14.8 34.1 14.8C29.4 14.8 26.3 17.6 26.3 22.8V27.5H21V33.5H26.3V48H32.7V33.5H37.5Z" fill="#FFFFFF" />
  </svg>
);

// --- COMPREHENSIVE CURATED TOUR PACKAGES DATA (FEATURING BESPOKE HD PHOTOGRAPHY) ---
export const PACKAGES_DATA = [
  // ==========================================
  // 1. DOMESTIC INDIA TOURS
  // ==========================================
  {
    id: 'dom-1',
    category: 'domestic',
    title: 'Magical Udaipur & Shrinathji Royal Tour',
    tag: 'Bestseller Heritage',
    duration: '3 Days / 2 Nights',
    desc: 'Experience royal Udaipur and Shrinathji! Highlights include City Palace, Lake Pichola, Bahubali Hills, Shilpgram, traditional Rajasthani culture show, DJ party, and full royal dining.',
    price: '₹7,999/- per person',
    location: 'Udaipur & Shrinathji, Rajasthan',
    rating: '★ 4.9 (Official Tour)',
    inclusions: ['City Palace & Jagdish Temple Entry', 'Lake Pichola & Fateh Sagar Sightseeing', 'Bahubali Hills & Shilpgram Cultural Tour', 'Rajasthani Folk Dance & DJ Night', 'Shrinathji Darshan Excursion', 'All Meals (Breakfast, Lunch, Dinner)'],
    image: '/images/udaipur.jpg'
  },
  {
    id: 'dom-kumbhalgarh',
    category: 'domestic',
    title: 'Kumbhalgarh & Udaipur Luxury Heritage Resorts',
    tag: 'Luxury Heritage Stay',
    duration: '4 Days / 3 Nights',
    desc: 'Stay at premier luxury heritage resorts: Club Mahindra, Radisson Blu, Lemon Tree, Raajsa Resort, and Via Lakhela with private chauffeur and Kumbhalgarh Fort Great Wall safari.',
    price: 'Best Rates Guaranteed',
    location: 'Kumbhalgarh & Udaipur, Rajasthan',
    rating: '★ 5.0 (20+ Top Resorts)',
    inclusions: ['Verified Luxury Heritage Resort Stay', 'Kumbhalgarh Great Wall Safari Excursion', 'Private AC Chauffeur Sedan / SUV', 'Daily Royal Buffet Breakfast & Dinner', 'Scenic Valley Views & Swimming Pool Access'],
    image: '/images/kumbhalgarh.jpg'
  },
  {
    id: 'dom-7',
    category: 'domestic',
    title: 'Golden City Jaisalmer Desert Camp & Fort Tour',
    tag: 'Desert Camp Special',
    duration: '4 Days / 3 Nights',
    desc: 'Traditional welcome with tikka, aarti & dhol, luxury Swiss tent stay at Sam Sand Dunes, camel safari, sunset jeep dune bashing, Tanot Mata Temple, Longewala Border & Jaisalmer Fort.',
    price: '₹25,500/- Per Couple',
    location: 'Jaisalmer & Sam Sand Dunes, Rajasthan',
    rating: '★ 5.0 (Couples & Families)',
    inclusions: ['Luxury Swiss Tent Stay at Sam Sand Dunes', 'Camel Safari & Sunset Jeep Dune Bashing', 'Tanot Mata Temple & Longewala Border Visit', 'Live Langa Folk Music, Dance & Fire Show', 'Jaisalmer Fort, Patwon Ki Haveli & Gadisar Lake', 'Delicious Rajasthani Traditional Meals'],
    image: '/images/jaisalmer.jpg'
  },
  {
    id: 'dom-3',
    category: 'domestic',
    title: 'Heavenly Kashmir, Dal Lake, Gulmarg & Pahalgam',
    tag: 'Crown of India',
    duration: '6 Days / 5 Nights',
    desc: 'Stay on a handcrafted cedar houseboat on Dal Lake, ride the world’s highest Gulmarg Gondola over snowy peaks, and explore the saffron fields and Betaab Valley of Pahalgam.',
    price: '₹24,999/- per person',
    location: 'Srinagar, Gulmarg & Pahalgam, Kashmir',
    rating: '★ 4.9 (480+ Reviews)',
    inclusions: ['1 Night Luxury Cedar Houseboat Stay', '4 Nights 4★ Valley-View Hotel', 'Dal Lake Shikara Boat Ride with Flowers', 'Gulmarg Cable Car Gondola Pass Assistance', 'Breakfast & Dinner (MAP Plan)'],
    image: '/images/kashmir.jpg'
  },
  {
    id: 'dom-4',
    category: 'domestic',
    title: 'Vibrant Goa Beach, Luxury Cabana & Watersports',
    tag: 'Top Beach Vacation',
    duration: '4 Days / 3 Nights',
    desc: 'Feel the ocean breeze on Calangute, Baga & South Goa beaches. Parasail over turquoise waves, experience a Mandovi River evening cruise with live Goan folk music, and visit historic churches.',
    price: '₹14,500/- per person',
    location: 'North & South Goa, India',
    rating: '★ 4.8 (390+ Reviews)',
    inclusions: ['4★ Beachside Luxury Resort with Pool', 'Sunset River Cruise on Mandovi', 'Speedboat, Bumper & Parasailing Combo', 'AC Private Sedan / SUV Transfers', 'Daily Multi-Cuisine Breakfast Buffet'],
    image: '/images/goa.jpg'
  },
  {
    id: 'dom-5',
    category: 'domestic',
    title: 'God’s Own Kerala, Munnar Hills & Alleppey Houseboat',
    tag: 'Nature & Serenity',
    duration: '5 Days / 4 Nights',
    desc: 'Drive through misty emerald tea estates in Munnar, encounter elephants at Periyar sanctuary in Thekkady, and sleep aboard a private luxury houseboat cruising the palm backwaters of Alleppey.',
    price: '₹19,999/- per person',
    location: 'Munnar, Thekkady & Alleppey, Kerala',
    rating: '★ 4.9 (340+ Reviews)',
    inclusions: ['Private Luxury Houseboat Cruise & Overnight', 'Munnar 4★ Tea Valley Luxury Resort', 'Spice Plantation Guided Nature Tour', 'Private Dedicated Vehicle Throughout', 'All Meals Included on Houseboat'],
    image: '/images/kerala.jpg'
  },

  // ==========================================
  // 2. INTERNATIONAL TOURS
  // ==========================================
  {
    id: 'int-3',
    category: 'international',
    title: 'Thailand Escapes (Bangkok, Pattaya & Sunset Yacht)',
    tag: 'Bestseller International',
    duration: '5 Days / 4 Nights',
    desc: 'Explore the Land of Smiles! Coral Island speedboat tour with lunch, Pattaya City tour (Big Buddha, Gems Gallery, View Point), breakfast at Tiger Topia, Sunset Yacht party with drinks & transfers.',
    price: '3★ ₹14,999 | 4★ ₹17,999',
    location: 'Bangkok & Pattaya, Thailand',
    rating: '★ 4.9 (MNP Bestseller)',
    inclusions: ['Airport Pickup & Drop Transfers in AC Coach', '1st Day Welcome Breakfast at Tiger Topia', 'Daily Buffet Breakfast at 3★/4★ Hotel', 'Coral Island Speedboat Tour with Lunch', 'Pattaya City Tour & View Point Panorama', 'Sunset Yacht Cruise Party with Drinks', 'Visa on Arrival FREE for Indians'],
    image: '/images/thailand.jpg'
  },
  {
    id: 'int-15',
    category: 'international',
    title: 'Vietnam 3 Cities (Hanoi, Da Nang & Ho Chi Minh)',
    tag: 'Top Rated Vietnam',
    duration: '7 Days / 6 Nights',
    desc: 'Three Cities One Unforgettable Journey: 2N Flower Garden Hanoi, 2N Cicilla Hotel Da Nang, 2N Adora Art Hotel Ho Chi Minh. Includes 6 buffet breakfasts, Ninh Binh, Ba Na Hills & Mekong Delta.',
    price: '₹59,999/- per person',
    location: 'Hanoi, Da Nang & Ho Chi Minh, Vietnam',
    rating: '★ 4.9 (Popular Vietnam)',
    inclusions: ['2N Stay at Flower Garden Hanoi Hotel', '2N Stay at Cicilla Hotel Da Nang', '2N Stay at Adora Art Hotel Ho Chi Minh', '6 Daily International Buffet Breakfasts', 'Hanoi City Tour & Ninh Binh Boat Cruise', 'Marble Mountain, Coconut Village Basket Boat', 'Hoi An Lantern Boat & Ba Na Hills Golden Bridge', 'Cu Chi Tunnels & Mekong Delta Excursion'],
    image: '/images/vietnam_bridge.jpg'
  },
  {
    id: 'int-16',
    category: 'international',
    title: 'Vietnam Grand 5 Destinations & Ha Long Bay Cruise',
    tag: 'Luxury Cruise Special',
    duration: '10 Days / 9 Nights',
    desc: '5 Destinations One Amazing Journey: Hanoi, Da Nang, Ho Chi Minh, Phu Quoc Island & 1 Night Luxury Overnight Cruise on La Regina Royal Cruise in Ha Long Bay. 9 buffet breakfasts included.',
    price: '₹89,999/- per person',
    location: 'Hanoi, Da Nang, Ho Chi Minh, Phu Quoc & Ha Long Bay',
    rating: '★ 5.0 (Luxury Cruise Special)',
    inclusions: ['1 Night Stay at La Regina Royal Cruise (Ha Long Bay)', '2N Flower Garden Hanoi + 2N Cicilla Da Nang', '2N Adora Art Hotel Ho Chi Minh', '2N Times Corner Amalfi Hotel Phu Quoc', 'Grand World Tour, Vin Pearl Safari & Speedboat Tour', 'Hanoi City, Ninh Binh & Ba Na Hills Golden Bridge', '9 Daily International Buffet Breakfasts'],
    image: '/images/vietnam.jpg'
  },
  {
    id: 'int-5',
    category: 'international',
    title: 'Singapore, Malaysia & Thailand Grand Departure',
    tag: 'Fixed Group Departure',
    duration: '11 Days / 10 Nights',
    desc: 'Specially planned group departure package ex-Ahmedabad & Mumbai! Includes return flights, daily breakfast & dinner, all transfer sightseeing tickets, and airport pickups throughout.',
    price: 'Special Group Departure Quote',
    location: 'Singapore, Kuala Lumpur & Bangkok',
    rating: '★ 5.0 (Ex-Ahmedabad & Mumbai)',
    inclusions: ['Roundtrip International Flight Tickets', 'Daily Breakfast and Dinner Included', 'All Transfer Sightseeing with Entry Tickets', 'Airport Pickups and Drops Throughout', 'Universal Studios Singapore & Sentosa Island', 'Kuala Lumpur, Genting Highlands & Bangkok'],
    image: '/images/singapore.jpg'
  },
  {
    id: 'int-2',
    category: 'international',
    title: 'Magical Bali Island, Ubud Terraces & Nusa Penida',
    tag: 'Tropical Island Paradise',
    duration: '6 Days / 5 Nights',
    desc: 'Soar on iconic jungle swings over Ubud’s lush terraced hills, pray at sacred sea temples like Tanah Lot, ride speedboats to Nusa Penida’s T-Rex cliff, and sip cocktails at Seminyak beach clubs.',
    price: '₹32,500/- per person',
    location: 'Ubud, Nusa Penida & Kuta, Bali',
    rating: '★ 4.9 (560+ Reviews)',
    inclusions: ['4★ Ubud Rainforest & Kuta Beach Resorts', 'Nusa Penida West Island Tour & Speedboat', 'Bali Jungle Swing Pass & Rice Terrace Walk', 'Private Chauffeur Sedan Daily', 'Airport Pickup & Drop Transfers'],
    image: '/images/bali.jpg'
  },
  {
    id: 'int-4',
    category: 'international',
    title: 'Dazzling Dubai & Abu Dhabi Grandeur',
    tag: 'Modern Luxury Marvel',
    duration: '5 Days / 4 Nights',
    desc: 'Gaze at the planet from Burj Khalifa’s 124th observation deck, thrill yourself with 4x4 desert dune bashing and BBQ belly dance show, and admire the white marble domes of Sheikh Zayed Mosque.',
    price: '₹28,900/- per person',
    location: 'Dubai Marina & Abu Dhabi, UAE',
    rating: '★ 4.9 (510+ Reviews)',
    inclusions: ['4★ Luxury City Centre / Marina Hotel', 'Burj Khalifa 124th Floor Entry Ticket', 'Desert Safari with 4x4 Dune Bashing & BBQ Dinner', 'Dubai Marina Luxury Dhow Dinner Cruise', 'UAE Tourist Visa Processing Included'],
    image: '/images/dubai.jpg'
  },

  // ==========================================
  // 3. HONEYMOON SPECIALS
  // ==========================================
  {
    id: 'hny-1',
    category: 'honeymoon',
    title: 'Maldives Overwater Luxury Lagoon Villa',
    tag: 'Pure Romantic Bliss',
    duration: '4 Days / 3 Nights',
    desc: 'Live in a private overwater villa perched directly over turquoise lagoons. Includes complimentary couple spa massage, floating breakfast, and private beach candlelight dinner.',
    price: '₹44,999/- per person',
    location: 'Maldives Private Island Atoll',
    rating: '★ 5.0 (380+ Couples)',
    inclusions: ['Overwater Villa with Direct Lagoon Access', 'Speedboat / Seaplane Airport Transfers', 'Candlelight 3-Course Beachside Dinner', 'Snorkeling & Coral Reef Safari Pass', 'All-Inclusive Dine Around Meals & Drinks'],
    image: '/images/maldives.jpg'
  },
  {
    id: 'hny-2',
    category: 'honeymoon',
    title: 'Bali Romantic Private Pool Villa & Clifftop Spa',
    tag: 'Signature Couple Getaway',
    duration: '6 Days / 5 Nights',
    desc: 'Unwind in your secluded private pool villa with fragrant flower petal baths, private clifftop Uluwatu sunset dinner with Kecak fire dance, and catamaran yacht cruise to Lembongan island.',
    price: '₹36,999/- per person',
    location: 'Ubud & Seminyak, Bali',
    rating: '★ 4.9 (310+ Couples)',
    inclusions: ['Private Pool Luxury Villa Stay', 'Flower Petal Bath & Couple Aromatherapy Massage', 'Uluwatu Clifftop Sunset Dinner Setup', 'Private Chauffeur Car Throughout', 'Honeymoon Cake & Romantic Room Decor'],
    image: '/images/bali_honeymoon.jpg'
  },

  // ==========================================
  // 4. CORPORATE & MICE TOURS
  // ==========================================
  {
    id: 'corp-1',
    category: 'corporate',
    title: 'Goa Corporate Offsite, Conference & Beachfront Gala',
    tag: 'Domestic MICE Specialist',
    duration: '3 Days / 2 Nights',
    desc: 'Energize your organization with a 5-star beachfront conference, customized beach volleyball and team-building challenges, private banquet hall with DJ sound setup, and gala cocktail dinner.',
    price: 'Custom Corporate Proposals',
    location: 'North & South Goa Beach Resorts',
    rating: '★ 4.9 (110+ Corporates)',
    inclusions: ['5★ Beachfront Resort Group Room Booking', 'State-of-art AC Conference Hall & Projectors', 'Exclusive Beach Gala Dinner & DJ Sound Setup', 'Curated Professional Team Building Facilitator', 'Airport AC Volvo / Luxury Coach Transfers'],
    image: '/images/corporate.jpg'
  },
  {
    id: 'corp-2',
    category: 'corporate',
    title: 'Dubai Business Conclave & Luxury Mega-Yacht Gala',
    tag: 'International MICE',
    duration: '4 Days / 3 Nights',
    desc: 'Reward elite partners and top achievers with 5-star skyscraper suites, private luxury chartered mega-yacht networking along Dubai Marina, and desert gala conclave under Bedouin canopies.',
    price: 'Custom Corporate Proposals',
    location: 'Dubai Marina & Sheikh Zayed Road, UAE',
    rating: '★ 5.0 (85+ Corporates)',
    inclusions: ['5★ Luxury Hotel Booking in Downtown Dubai', 'Private Chartered Yacht Party with Live DJ & Bar', 'Desert Safari Gala Dinner & Entertainment', 'Corporate Group Visa Expedited Processing', 'Dedicated MNP On-Ground Tour Director'],
    image: '/images/dubai_corporate.jpg'
  },

  // ==========================================
  // 5. GROUP TOURS (SCHOOL, COLLEGE & FAMILY)
  // ==========================================
  {
    id: 'grp-edu',
    category: 'group-tours',
    title: 'School & College Educational, STEM & Industrial Tours',
    tag: 'Institutional Specialist',
    duration: '3 to 7 Days (Customized)',
    desc: 'Certified educational expeditions for schools, universities, and colleges across Gujarat & Maharashtra. Real-world learning at ISRO, Science City, Delhi-Agra heritage, Rishikesh adventure camps, and Singapore/Dubai STEM study tours.',
    price: 'Special Student Rates (Contact Office)',
    location: 'Pan-India (ISRO, Delhi, Manali) & Global (Singapore, Dubai)',
    rating: '★ 5.0 (60+ Institutions)',
    requiresOfficeContact: true,
    keywords: 'school college student educational industrial iv isro science city camp study youth university institutional teachers education',
    inclusions: [
      '100% Student-Safe Police-Verified AC Luxury Coaches',
      'Faculty / Teachers Escort Passes 100% Complimentary',
      'Hygienic Pure Veg & Jain Freshly Prepared Student Meals',
      'Industrial Plant Visits, Science Centers & Historical Guides',
      'Adventure Camps: Bonfire, Trekking, Rafting & Leadership Games',
      'Comprehensive Student Travel Insurance & 24/7 Doctor On-Call'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'grp-family',
    category: 'group-tours',
    title: 'Grand Family Group Tours (Private AC Coach & Jain/Veg Chef)',
    tag: 'Family Group Departure',
    duration: '4 to 12 Days (Family Pace)',
    desc: 'The ultimate holiday for large joint families, silver jubilees, and family reunions. Enjoy dedicated private luxury coaches, relaxed elder-friendly timings, and warm home-style Maharaj (chef) food throughout.',
    price: 'Custom Family Quote (Contact Office)',
    location: 'Rajasthan, Kashmir, Kerala & Char Dham',
    rating: '★ 5.0 (320+ Families)',
    requiresOfficeContact: true,
    keywords: 'family group tour joint family private coach jain food gujarati marwari chef senior citizen kids reunion wedding holiday relatives gujarat',
    inclusions: [
      'Dedicated Private AC Volvo / Coach Exclusively for Your Family',
      'On-Demand Gujarati / Marwari / Jain Maharaj (Chef) Cooking Team',
      'Elder-Friendly Sightseeing with Minimal Walking & Wheelchair Support',
      'Child-Friendly Itineraries & Connecting Family Suite Rooms',
      'Evening Family Antakshari, Music & Cultural Folk Evenings',
      'Doorstep Pickup & Drop Options in Ahmedabad, Surat & Mumbai'
    ],
    image: '/images/gujarati_family.jpg'
  },

  // ==========================================
  // 6. EUROPE & BESPOKE CUSTOM DESTINATIONS
  // ==========================================
  {
    id: 'intl-europe',
    category: 'international',
    searchOnly: true,
    title: 'Grand Europe & Swiss Alpine Panorama (Multi-Country Customized Tour)',
    tag: 'Bespoke European Tour',
    duration: '10 to 15 Days (Customized Itinerary)',
    desc: 'Experience Paris, Swiss Alps, Venice canals, and Rome. Due to Schengen biometric visa appointment availability and seasonal flight variations, this package is 100% customized for families and couples through MNP Ahmedabad & Mumbai offices.',
    price: 'Custom Quote (Contact MNP Office)',
    location: 'Switzerland, France, Italy, Austria & Germany',
    rating: '★ 4.9 (Official Tour Operator)',
    requiresOfficeContact: true,
    keywords: 'europe schengen switzerland swiss paris france italy rome venice austria germany london uk alps bespoke euro tour',
    inclusions: [
      'Schengen Tourist Visa Application & VFS Slot Guidance',
      'Handpicked 4★ & 5★ Hotels near City Centres',
      'Swiss Travel Pass / Eurail Pass / Private AC Coach',
      'Mount Titlis, Jungfraujoch, Eiffel Tower & Colosseum Entry Pass Assistance',
      'Daily Indian / Continental Breakfast & Verified Indian Dinners',
      '24/7 Dedicated MNP On-Tour Concierge & Schengen Travel Insurance'
    ],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80'
  },

  // ==========================================
  // 7. WORLDWIDE VISA ASSISTANCE SERVICES
  // ==========================================
  {
    id: 'visa-schengen',
    category: 'visa',
    searchOnly: true,
    title: 'All-Europe Schengen Tourist & Business Visa Assistance',
    tag: 'Official Visa Service',
    duration: 'Express Appointment & File Preparation',
    desc: 'Complete hassle-free Schengen visa processing for Gujarat & Maharashtra travelers. MNP Holidays verifies your financial files, books biometric slots, and prepares rock-solid documentation to maximize visa approval rates.',
    price: 'Visa Documentation & Slot Booking (Contact Office)',
    location: '29 Schengen Countries (France, Switzerland, Germany, Italy, Spain, etc.)',
    rating: '★ 5.0 (99.2% Visa Approval)',
    requiresOfficeContact: true,
    keywords: 'europe visa schengen visa switzerland visa france visa vfs biometric appointment visa assistance passport documentation vfs global germany visa italy visa spain visa europe embassy slot booking',
    inclusions: [
      'VFS / Embassy Biometric Appointment Scheduling Assistance',
      'Complete Document Checklist & Financial Dossier Review',
      'Custom Day-by-Day Travel Itinerary & Cover Letter Drafting',
      'Confirmed Hotel Booking & Verifiable Flight Reservation for Visa',
      'Mandatory €30,000+ Schengen-Approved Travel Medical Insurance',
      'Mock Interview & Biometrics Preparation Guidance'
    ],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-usa',
    category: 'visa',
    searchOnly: true,
    title: 'USA B1/B2 Tourist & Visitor Visa Assistance + Custom Holidays',
    tag: 'US Visa & Tour Specialist',
    duration: '7 to 21 Days (Customized Family Itineraries)',
    desc: 'Turn your American dream into reality. From meticulous DS-160 filing, OFC biometric slot assistance, and 1-on-1 consular interview preparation to custom East Coast & West Coast holiday planning.',
    price: 'Customized Proposal (Contact MNP Office)',
    location: 'New York, Orlando, Las Vegas, San Francisco & Los Angeles, USA',
    rating: '★ 4.9 (High Approval Record)',
    requiresOfficeContact: true,
    keywords: 'us usa united states america new york orlando b1/b2 us visa ds-160 us embassy visa appointment florida california las vegas san francisco miami ofc slot interview',
    inclusions: [
      'DS-160 Online Visa Application Form Accurate Submission',
      'US Embassy / OFC Biometric & Interview Appointment Slot Assistance',
      '1-on-1 Mock Consular Interview Preparation with Visa Experts',
      'Custom US Holiday Itinerary (East Coast / West Coast / Florida)',
      'Domestic US Flights & Verified Hotel Bookings',
      'Disneyland, Universal Studios & Grand Canyon Guided Excursions'
    ],
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-canada',
    category: 'visa',
    searchOnly: true,
    title: 'Canada Visitor Visa Assistance & Canadian Rockies Vacation',
    tag: 'Canada Visa & Tour Specialist',
    duration: '8 to 14 Days (Bespoke Family Itineraries)',
    desc: 'Planning to visit family or explore the breathtaking Canadian Rockies and Niagara Falls? Our Ahmedabad & Mumbai visa desks provide end-to-end IRCC portal filing, biometric scheduling, and custom holiday logistics.',
    price: 'Customized Proposal (Contact MNP Office)',
    location: 'Toronto, Niagara Falls, Vancouver, Banff & Jasper, Canada',
    rating: '★ 4.9 (IRCC Portal Filing)',
    requiresOfficeContact: true,
    keywords: 'canada canada visa visitor visa ircc vancouver toronto niagara banff canadian rockies calgary montreal biometrics vfs canada family visitor visa',
    inclusions: [
      'IRCC Canada Portal Visa Filing & Biometric Appointment Setup',
      'Invitation Letter & Purpose of Travel Statement Drafting',
      'Verified Canadian Hotel Vouchers & Roundtrip Flight Itinerary',
      'Banff National Park, Lake Louise & Columbia Icefield Glacier Tour',
      'Niagara Falls Hornblower Boat Cruise & CN Tower Entry',
      'Mandatory Travel Medical Insurance Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-uk',
    category: 'visa',
    searchOnly: true,
    title: 'UK Standard Visitor Visa Assistance & London-Scotland Highlights',
    tag: 'UK Visa & Tour Specialist',
    duration: '7 to 12 Days (Custom Itinerary)',
    desc: 'Fast-track UK tourist visa filing and bespoke Great Britain holidays. Experience London theatre, Big Ben, Oxford colleges, and majestic Scottish castles with MNP Holidays dedicated coordination.',
    price: 'Custom Quote (Contact MNP Office)',
    location: 'London, Manchester, Edinburgh & Scottish Highlands, UK',
    rating: '★ 4.9 (UKVI Authorized Assistance)',
    requiresOfficeContact: true,
    keywords: 'uk united kingdom london scotland uk visa standard visitor visa ukvi edinburgh manchester england vfs uk britain british visa london tour',
    inclusions: [
      'UKVI Visa Application Submission & Priority Appointment Booking',
      'Financial Evidence & Tax Document Organization',
      'Central London 4★ Hotel Stay near Underground Stations',
      'London Eye, Madame Tussauds & Tower Bridge Fast-Track Passes',
      'Scenic Edinburgh Castle & Loch Ness Scottish Highlands Tour',
      'Comprehensive UK Travel Insurance Coverage'
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-australia',
    category: 'visa',
    searchOnly: true,
    title: 'Australia & New Zealand Scenic Splendour & Tourist Visa Service',
    tag: 'Australia & NZ Specialist',
    duration: '10 to 16 Days (Customizable)',
    desc: 'Discover Sydney Harbour, kangaroo wildlife sanctuaries, and New Zealand fjords. Our visa desk processes Australian and NZ tourist visas seamlessly from Gujarat & Mumbai offices.',
    price: 'Custom Quote (Contact MNP Office)',
    location: 'Sydney, Melbourne, Gold Coast, Cairns & Queenstown',
    rating: '★ 5.0 (Online Subclass 600 Filing)',
    requiresOfficeContact: true,
    keywords: 'australia new zealand sydney melbourne gold coast queenstown australia visa subclass 600 nz visa great barrier reef auckland visa assistance',
    inclusions: [
      'Australia Subclass 600 / New Zealand Tourist Visa Online Filing',
      'Sydney Opera House, Harbour Cruise & Blue Mountains Excursion',
      'Great Barrier Reef Snorkeling & Helicopter Scenic Flight Options',
      'Melbourne Great Ocean Road & Phillip Island Penguin Parade',
      'New Zealand Milford Sound & Rotorua Geothermal Exploration',
      'End-to-End Flight & 4★/5★ Hotel Accommodations'
    ],
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-dubai-fast',
    category: 'visa',
    searchOnly: true,
    title: 'Dubai / UAE Express Tourist Visa (14/30/60 Days) 24-48 Hr Service',
    tag: 'Instant Visa Service',
    duration: '14 Days / 30 Days / 60 Days Multiple/Single Entry',
    desc: 'Get your Dubai tourist visa within 24 to 48 hours with minimal documents. Contact our Ahmedabad or Mumbai office for instant issuance, family visas, and special transit visas.',
    price: 'Express Best Rates (Contact Office)',
    location: 'Dubai, Abu Dhabi & Sharjah, UAE',
    rating: '★ 5.0 (24-48 Hr Guarantee)',
    requiresOfficeContact: true,
    keywords: 'dubai visa uae visa express visa abu dhabi visa 30 days visa 60 days visa ok to board visa 24 hours urgent dubai visa',
    inclusions: [
      'Fast 24 to 48 Hour UAE Visa Issuance Guarantee',
      'Only Passport Front/Back Copy & Passport Photo Required',
      'Free "OK to Board" Airline Update Assistance',
      'Optionally Bundle with 4★/5★ Dubai Marina & Deira Hotels',
      'Burj Khalifa, Desert Safari & Yacht Party Tickets at Discount',
      'COVID/Emergency Travel Insurance Included'
    ],
    image: '/images/dubai.jpg'
  },
  {
    id: 'visa-worldwide',
    category: 'visa',
    searchOnly: true,
    title: 'Worldwide Tourist & Business Visa Assistance (50+ Countries)',
    tag: 'All-Country Visa Desk',
    duration: 'Document Verification & Fast Filing',
    desc: 'Don’t risk visa rejections. MNP Holidays has a dedicated visa desk with over a decade of experience ensuring 99%+ approval rates for tourist, visitor, and business visas worldwide.',
    price: 'Official Consultation (Contact Office)',
    location: 'Global (Japan, Singapore, Turkey, Egypt, Georgia, Baku, Russia, etc.)',
    rating: '★ 5.0 (Ahmedabad & Mumbai Visa Desks)',
    requiresOfficeContact: true,
    keywords: 'visa visa service visa assistance all visa global visa embassy vfs document verification tourist visa business visa passport appointment japan visa singapore visa turkey visa baku visa georgia visa',
    inclusions: [
      'Embassy Form Filling, Cover Letter Drafting & Notarization Advice',
      'Confirmed Flight Itineraries & Hotel Proof for Visa Processing',
      'Travel Insurance Issuance up to $500,000 Coverage',
      'Financial File Structuring (ITR, Bank Statement, CA Net Worth)',
      'Special Express Visas for Baku, Georgia, Kazakhstan, Turkey, Japan',
      'Physical Document Pickup & Passport Handover in Ahmedabad & Mumbai'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState('all'); // 'all', 'international', 'domestic', 'group-tours', 'corporate', 'honeymoon', 'visa', 'about', 'contact'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedInclusions, setExpandedInclusions] = useState({});

  const toggleInclusions = (id, e) => {
    e.stopPropagation();
    setExpandedInclusions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main Page Navigation Tabs
  const pagesList = [
    { id: 'all', label: 'All Packages', icon: '🌟', badge: '16' },
    { id: 'international', label: 'International Tours', icon: '✈️', badge: '7' },
    { id: 'domestic', label: 'Domestic India', icon: '🇮🇳', badge: '6' },
    { id: 'group-tours', label: 'School & Family Groups', icon: '👨‍👩‍👧‍👦', badge: 'Popular' },
    { id: 'corporate', label: 'Corporate & MICE', icon: '💼', badge: '2' },
    { id: 'honeymoon', label: 'Honeymoon Specials', icon: '💍', badge: '2' },
    { id: 'visa', label: 'Visa Assistance Desk', icon: '🛂', badge: '50+ Countries' },
    { id: 'about', label: 'Why Choose Us', icon: '🏆', badge: '12+ Yrs' },
    { id: 'contact', label: 'Offices & Contact', icon: '📍', badge: '2 HQ' }
  ];

  // Multi-token intelligent search across packages & visa requirements
  const searchTokens = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const isSearching = searchTokens.length > 0;

  // Check if search query matches Visa services or custom office consultation destinations
  const isVisaOrCustomQuery = isSearching && searchTokens.some((t) =>
    [
      'europe', 'schengen', 'switzerland', 'swiss', 'france', 'paris', 'italy', 'rome', 'germany',
      'us', 'usa', 'america', 'canada', 'uk', 'london', 'scotland', 'australia', 'zealand',
      'visa', 'visas', 'embassy', 'vfs', 'passport', 'appointment', 'japan', 'turkey', 'baku',
      'school', 'college', 'student', 'students', 'family', 'group', 'groups'
    ].some((keyword) => keyword.includes(t) || t.includes(keyword))
  );

  const allMatchingPackages = PACKAGES_DATA.filter((pkg) => {
    if (!isSearching) {
      // When browsing 'all' without search, hide pure searchOnly visa packages to preserve clean layout
      if (pkg.searchOnly && activePage === 'all') return false;
      return true;
    }
    const searchableText = [
      pkg.title,
      pkg.location,
      pkg.tag,
      pkg.desc,
      pkg.duration,
      pkg.price,
      pkg.category,
      pkg.keywords || '',
      (pkg.inclusions || []).join(' ')
    ].join(' ').toLowerCase();

    return searchTokens.every((token) => searchableText.includes(token));
  });

  const filteredPackages = allMatchingPackages.filter((pkg) => {
    // When actively searching, return all matched results across all categories
    if (isSearching) return true;
    if (activePage === 'all' || activePage === 'about' || activePage === 'contact') return true;
    return pkg.category === activePage;
  });

  const handleBookOnWhatsApp = (pkgTitle, pkgPrice, pkgDuration, requiresOfficeContact = false) => {
    const message = requiresOfficeContact
      ? `Hello MNP Holidays! I would like to consult your office regarding "${pkgTitle}". Please provide the complete document checklist, visa requirements, and personalized quotation.`
      : `Hello MNP Holidays! I am interested in booking the "${pkgTitle}" package (${pkgDuration} - ${pkgPrice}). Please share the detailed itinerary, inclusions, and best quotation.`;
    window.open(`https://wa.me/919825179624?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePageSwitch = (pageId) => {
    setActivePage(pageId);
    setSearchQuery('');
    setMobileMenuOpen(false);
    if (pageId === 'about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (pageId === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
              <span className="banner-branch-title">Ahmedabad HQ:</span>
              <a href="tel:+919825179624" className="banner-contact-link">📞 +91 98251 79624</a>
              <span className="banner-dot">•</span>
              <a href="tel:+919712204028" className="banner-contact-link">+91 97122 04028</a>
            </span>
            <span className="banner-dot banner-dot-desktop">•</span>
            <span className="banner-branch-group">
              <span className="banner-branch-title">Mumbai:</span>
              <a href="tel:+919898083171" className="banner-contact-link">📞 +91 98980 83171</a>
              <span className="banner-dot">•</span>
              <a href="tel:+919136774277" className="banner-contact-link">+91 91367 74277</a>
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
          <a href="#home" className="logo" aria-label="MNP Holidays Home" onClick={() => setActivePage('all')}>
            <div className="logo-text-group">
              <span className="logo-accent">MNP</span>
              <span className="logo-name">Holidays</span>
            </div>
            <span className="logo-reg-tag">Pvt. Ltd.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#home" className={`nav-link ${activePage === 'all' ? 'active' : ''}`} onClick={() => setActivePage('all')}>Home</a>
            <a href="#destinations" className={`nav-link ${activePage === 'international' ? 'active' : ''}`} onClick={() => handlePageSwitch('international')}>International</a>
            <a href="#destinations" className={`nav-link ${activePage === 'domestic' ? 'active' : ''}`} onClick={() => handlePageSwitch('domestic')}>Domestic</a>
            <a href="#destinations" className={`nav-link ${activePage === 'group-tours' ? 'active' : ''}`} onClick={() => handlePageSwitch('group-tours')}>Group Tours</a>
            <a href="#destinations" className={`nav-link ${activePage === 'visa' ? 'active' : ''}`} onClick={() => handlePageSwitch('visa')}>Visa Desk</a>
            <a href="#contact" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`} onClick={() => handlePageSwitch('contact')}>Contact</a>
            
            <a 
              href="https://wa.me/919825179624?text=Hello%20MNP%20Holidays,%20I%20would%20like%20to%20plan%20a%20tour" 
              target="_blank" 
              rel="noreferrer"
              className="btn-nav-wa"
              title="Chat directly with MNP Holidays Senior Tour Expert"
            >
              <span className="wa-dot"></span>
              <span className="wa-icon">💬</span>
              <span className="wa-text">WhatsApp Desk</span>
            </a>

            <button 
              type="button"
              className="btn-nav-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Full Navigation Menu"
              title="Open all pages, destinations & branch directory"
            >
              <span className="menu-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
              <span className="menu-text">Menu</span>
            </button>
          </div>

          {/* Mobile & Tablet Quick Actions */}
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
              <span className="mobile-menu-badge">Pvt. Ltd. • Luxury Tours</span>
            </div>
            
            <div className="mobile-nav-items">
              <a href="#home" className="mobile-nav-link" onClick={() => { setActivePage('all'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">🏠</span>
                <span>Home Page</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('international'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">✈️</span>
                <span>International Tours</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('domestic'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">🇮🇳</span>
                <span>Domestic India Tours</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('group-tours'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">👨‍👩‍👧‍👦</span>
                <span>School, College & Family Groups</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('corporate'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">💼</span>
                <span>Corporate & MICE Tours</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('visa'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">🛂</span>
                <span>Visa Assistance Desk</span>
              </a>
              <a href="#destinations" className="mobile-nav-link" onClick={() => { handlePageSwitch('honeymoon'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">💍</span>
                <span>Honeymoon Specials</span>
              </a>
              <a href="#about" className="mobile-nav-link" onClick={() => { handlePageSwitch('about'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">🏆</span>
                <span>Why Choose MNP Holidays</span>
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => { handlePageSwitch('contact'); setMobileMenuOpen(false); }}>
                <span className="mobile-nav-icon">📍</span>
                <span>Ahmedabad & Mumbai Offices</span>
              </a>
            </div>

            <div className="mobile-branch-cards">
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Ahmedabad Head Office</div>
                <div className="mobile-branch-address">
                  SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad - 382350
                </div>
                <div className="mobile-branch-actions">
                  <a href="tel:+919825179624" className="mobile-branch-call-btn">📞 +91 98251 79624</a>
                  <a href="tel:+919712204028" className="mobile-branch-call-btn">📞 +91 97122 04028</a>
                </div>
              </div>
              <div className="mobile-branch-card">
                <div className="mobile-branch-label">📍 Mumbai Branch Office</div>
                <div className="mobile-branch-address">
                  Shop No.8, Rangari Height, Dr. A.B.Road, Lal Baug, Kalachowki, Mumbai - 400033
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
                <span>💬 WhatsApp Instant Chat & Quotes</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ========================================================
          SLEEK & SIMPLE LUXURY HERO SECTION (BESPOKE HD PHOTOGRAPHY)
          ======================================================== */}
      <section id="home" className="hero">
        <div className="hero-glow-orb hero-glow-1"></div>
        <div className="hero-glow-orb hero-glow-2"></div>
        <img 
          src="/images/hero_luxury.jpg" 
          alt="Luxury Travel with MNP Holidays" 
          className="hero-bg"
          loading="eager"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85';
          }}
        />
        <div className="hero-overlay"></div>

        <div className="hero-content animate-fade-up">
          <div className="hero-badge-enchanting">
            <span className="badge-sparkle">✨</span>
            <span>WORLD-CLASS LUXURY HOLIDAYS • AHMEDABAD & MUMBAI</span>
          </div>

          <h1 className="hero-title">
            Where Will Your Next <span className="hero-title-enchanted">Journey Take You?</span>
          </h1>

          <p className="hero-subtitle">
            Handcrafted luxury holidays across India & the World with verified 4★ & 5★ stays, private chauffeurs, and 24/7 dedicated concierge assistance.
          </p>

          {/* Sleek Search Console */}
          <div className="hero-search-box">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search destinations or services (e.g. Europe, Canada, USA, Visa, School Tour, Udaipur, Vietnam...)" 
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                }}
              />
              {searchQuery && (
                <button 
                  className="search-clear" 
                  onClick={() => setSearchQuery('')}
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

          {/* Minimalist Trending Destination Quick Pills */}
          <div className="hero-trending-pills">
            <span className="trending-label">Trending Now:</span>
            {[
              { name: 'Europe', icon: '🏰', label: 'Europe & Schengen' },
              { name: 'Canada', icon: '🍁', label: 'Canada & US Visa' },
              { name: 'Visa', icon: '🛂', label: 'Visa Assistance' },
              { name: 'School', icon: '🎓', label: 'School & College' },
              { name: 'Family', icon: '👨‍👩‍👧‍👦', label: 'Family Group Tour' },
              { name: 'Udaipur', icon: '🏰', label: 'Udaipur Royal Tour' },
              { name: 'Thailand', icon: '🏝️', label: 'Thailand Escapes' },
              { name: 'Vietnam', icon: '🏮', label: 'Vietnam 3 Cities' },
              { name: 'Dubai', icon: '🏙️', label: 'Dubai Marina' },
              { name: 'Bali', icon: '🌺', label: 'Bali Paradise' },
              { name: 'Kashmir', icon: '🏔️', label: 'Kashmir Valley' },
              { name: 'Goa', icon: '🌴', label: 'Goa Beach Resort' }
            ].map((item) => (
              <button
                key={item.name}
                className="hero-trending-pill-btn"
                onClick={() => {
                  setSearchQuery(item.name);
                  setActivePage('all');
                  const el = document.getElementById('destinations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>

          {/* Sleek Minimalist Trust Metrics Bar */}
          <div className="trust-stats">
            <div className="stat-item">
              <strong>15,000+</strong>
              <span>Happy Travelers</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>250+</strong>
              <span>Corporate Offsites</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>50+</strong>
              <span>Global Destinations</span>
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
          SLEEK PAGES & DESTINATION HUB NAVIGATION BAR
          ======================================================== */}
      <section className="pages-nav-bar-section">
        <div className="container">
          <div className="pages-bar-wrapper">
            <span className="pages-bar-title">EXPLORE PAGES:</span>
            <div className="pages-pills-row">
              {pagesList.map((pg) => (
                <button
                  key={pg.id}
                  className={`page-pill-btn ${activePage === pg.id ? 'active' : ''}`}
                  onClick={() => handlePageSwitch(pg.id)}
                >
                  <span className="page-pill-icon">{pg.icon}</span>
                  <span className="page-pill-label">{pg.label}</span>
                  <span className="page-pill-badge">{pg.badge}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CURATED TOUR PACKAGES SECTION (SLEEK HD PHOTO CARDS)
          ======================================================== */}
      <section id="destinations" className="destinations section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              {activePage === 'international' && 'INTERNATIONAL LUXURY GETAWAYS'}
              {activePage === 'domestic' && 'ROYAL & TROPICAL INCREDIBLE INDIA'}
              {activePage === 'group-tours' && 'SCHOOL, COLLEGE & FAMILY GROUP EXPEDITIONS'}
              {activePage === 'corporate' && 'EXECUTIVE CORPORATE & MICE SOLUTIONS'}
              {activePage === 'honeymoon' && 'ROMANTIC HONEYMOON EXPERIENCES'}
              {activePage === 'visa' && 'OFFICIAL VISA ASSISTANCE & EMBASSY DESK'}
              {(activePage === 'all' || activePage === 'about' || activePage === 'contact') && 'CURATED EXPERIENCES'}
            </span>
            <h2 className="section-title">
              {activePage === 'international' && <>International <span className="text-gradient">Dream Vacations</span></>}
              {activePage === 'domestic' && <>Incredible India <span className="text-gradient">Heritage & Hills</span></>}
              {activePage === 'group-tours' && <>School, College & <span className="text-gradient">Family Group Tours</span></>}
              {activePage === 'corporate' && <>Corporate <span className="text-gradient">MICE & Offsites</span></>}
              {activePage === 'honeymoon' && <>Romantic <span className="text-gradient">Honeymoon Escapes</span></>}
              {activePage === 'visa' && <>Worldwide Visa & <span className="text-gradient">Embassy Assistance</span></>}
              {(activePage === 'all' || activePage === 'about' || activePage === 'contact') && (
                <>World-Standard <span className="text-gradient">Tour Packages</span></>
              )}
            </h2>
            <p className="section-subtitle">
              All packages feature handpicked 4★ & 5★ hotels, verified luxury transport, private chauffeurs, and 24/7 on-tour human concierge.
            </p>
          </div>

          {/* In-Section Live Search Bar */}
          <div className="section-search-container">
            <div className="section-search-bar">
              <span className="section-search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search packages, countries or visa services (e.g. Europe, Canada, USA, Visa, School Tour, Udaipur, Vietnam, Bali...)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="section-search-clear" 
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Destination & Service Chips */}
            <div className="quick-search-chips">
              <span className="quick-chips-label">Popular Filters:</span>
              {[
                { name: 'Europe & Schengen', icon: '🏰', query: 'Europe' },
                { name: 'Canada & US Visa', icon: '🍁', query: 'Canada' },
                { name: 'All Visa Services', icon: '🛂', query: 'Visa' },
                { name: 'School & College', icon: '🎓', query: 'School' },
                { name: 'Family Group Tours', icon: '👨‍👩‍👧‍👦', query: 'Family' },
                { name: 'Udaipur', icon: '🏰', query: 'Udaipur' },
                { name: 'Thailand', icon: '🏖️', query: 'Thailand' },
                { name: 'Vietnam', icon: '🏮', query: 'Vietnam' },
                { name: 'Dubai', icon: '🏙️', query: 'Dubai' },
                { name: 'Bali', icon: '🌺', query: 'Bali' },
                { name: 'Kashmir', icon: '🏔️', query: 'Kashmir' },
                { name: 'Goa', icon: '🌴', query: 'Goa' }
              ].map((item) => (
                <button
                  key={item.name}
                  className={`quick-chip ${searchQuery.toLowerCase() === item.query.toLowerCase() ? 'active' : ''}`}
                  onClick={() => {
                    setSearchQuery(item.query);
                    setActivePage('all');
                  }}
                >
                  <span>{item.icon}</span> {item.name}
                </button>
              ))}
              {searchQuery && (
                <button 
                  className="quick-chip-reset" 
                  onClick={() => setSearchQuery('')}
                >
                  Clear Filters ↺
                </button>
              )}
            </div>
          </div>

          {/* Active Search Pill */}
          {searchQuery && (
            <div className="search-active-pill">
              <div className="search-active-info">
                <span className="search-active-badge">SEARCH ACTIVE</span>
                <span>
                  Found <strong>{filteredPackages.length}</strong> {filteredPackages.length === 1 ? 'service/package' : 'services/packages'} for "<strong>{searchQuery}</strong>"
                </span>
              </div>
              <button 
                className="btn-clear-active-search"
                onClick={() => setSearchQuery('')}
              >
                Clear Search ✕
              </button>
            </div>
          )}

          {/* Specialized Office Consultation & Visa Desk Alert Banner */}
          {isVisaOrCustomQuery && (
            <div className="search-office-consultation-banner animate-fade-up">
              <div className="consult-banner-top">
                <div className="consult-banner-badge">
                  <span>🏛️ MNP OFFICIAL VISA & BESPOKE TOUR DESK</span>
                </div>
                <span className="consult-banner-branch-tag">📍 AHMEDABAD HQ & MUMBAI BRANCH</span>
              </div>
              <div className="consult-banner-content">
                <div className="consult-banner-text">
                  <h3>Specialized Guidance & Visa Processing for "{searchQuery}"</h3>
                  <p>
                    For <strong>Europe (Schengen), USA (B1/B2), Canada, UK, Australia</strong>, and <strong>Embassy Visa Services</strong>, consular biometric appointment slots (VFS/Embassy) and airline rates vary based on traveler profiles and seasonal dates. Our certified specialists in Ahmedabad and Mumbai provide personalized document file preparation, slot booking, and custom quotations.
                  </p>
                </div>
                <div className="consult-banner-ctas">
                  <a 
                    href={`https://wa.me/919825179624?text=${encodeURIComponent(`Hello MNP Holidays! I would like to consult your office regarding custom holiday packages & visa requirements for "${searchQuery}". Please guide me with requirements and appointment booking.`)}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-consult-wa"
                  >
                    <IconWhatsApp size={18} color="#FFFFFF" />
                    <span>Chat with Visa Specialist (WhatsApp)</span>
                  </a>
                  <a href="tel:+919825179624" className="btn-consult-call">
                    📞 Ahmedabad HQ (+91 98251 79624)
                  </a>
                  <a href="tel:+919898083171" className="btn-consult-call">
                    📞 Mumbai Office (+91 98980 83171)
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Packages Grid (With Crisp HD Images) */}
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.requiresOfficeContact ? 'office-contact-card' : ''}`}>
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
                  <div className={`package-tag ${pkg.requiresOfficeContact ? 'office-tag' : ''}`}>
                    {pkg.requiresOfficeContact ? `🏛️ ${pkg.tag}` : pkg.tag}
                  </div>
                  <div className="package-price-overlay">
                    <span className="price-label">
                      {pkg.requiresOfficeContact ? 'Category' : 'Starting from'}
                    </span>
                    <span className="price-value">{pkg.price}</span>
                  </div>
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
                        className={`inc-pill-more inc-pill-toggle ${expandedInclusions[pkg.id] ? 'expanded' : ''}`}
                        onClick={(e) => toggleInclusions(pkg.id, e)}
                        title={expandedInclusions[pkg.id] ? "Collapse inclusions" : `Tap to view all ${pkg.inclusions.length} inclusions`}
                        aria-expanded={!!expandedInclusions[pkg.id]}
                      >
                        {expandedInclusions[pkg.id] ? '▴ Show less' : `+${pkg.inclusions.length - 3} more (Tap to view)`}
                      </button>
                    )}
                  </div>

                  <div className="package-card-actions">
                    <button 
                      className="btn-card-details"
                      onClick={() => setSelectedPackage(pkg)}
                      title={`View detailed itinerary & requirements for ${pkg.title}`}
                    >
                      <IconItinerary size={16} />
                      <span>{pkg.requiresOfficeContact ? 'Requirements' : 'View Details'}</span>
                    </button>
                    <button 
                      className={`btn-card-wa ${pkg.requiresOfficeContact ? 'btn-office-wa' : ''}`}
                      onClick={() => handleBookOnWhatsApp(pkg.title, pkg.price, pkg.duration, pkg.requiresOfficeContact)}
                      title={pkg.requiresOfficeContact ? `Consult Office for ${pkg.title}` : `Inquire on WhatsApp for ${pkg.title}`}
                    >
                      <IconWhatsApp size={17} color="#FFFFFF" />
                      <span>{pkg.requiresOfficeContact ? 'Consult Office' : 'Inquire on WA'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Search State with Custom Office Consultation CTA */}
          {filteredPackages.length === 0 && (
            <div className="empty-search-card">
              <div className="empty-search-icon">🌍</div>
              <h3>Custom Travel & Visa Assistance for "{searchQuery}"</h3>
              <p className="empty-lead">
                We organize custom tour packages, corporate retreats, and visa applications for <strong>50+ countries worldwide</strong>. Even if not listed in our ready catalog, our specialists in Ahmedabad & Mumbai will prepare a tailor-made proposal for you!
              </p>

              <div className="empty-custom-banner">
                <span className="empty-custom-tag">✨ 100% PERSONALIZED ITINERARY & EMBASSY FILING</span>
                <p>Connect directly with our senior holiday and visa managers for instant quotation and official documentation guidance.</p>
                <div className="empty-custom-ctas">
                  <a 
                    href={`https://wa.me/919825179624?text=${encodeURIComponent(`Hello MNP Holidays! I am looking for custom holiday packages / visa assistance for "${searchQuery}". Please provide guidance and best quotation.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-empty-whatsapp"
                  >
                    <IconWhatsApp size={18} color="#FFFFFF" />
                    <span>Inquire for "{searchQuery}" on WhatsApp</span>
                  </a>
                  <a href="tel:+919825179624" className="btn-empty-call">
                    📞 Call Ahmedabad HQ (+91 98251 79624)
                  </a>
                  <a href="tel:+919898083171" className="btn-empty-call">
                    📞 Call Mumbai Office (+91 98980 83171)
                  </a>
                </div>
              </div>

              <div className="empty-popular-suggestions">
                <span className="empty-suggestions-label">Or explore these trending destinations & services:</span>
                <div className="empty-suggestions-grid">
                  {[
                    { name: 'Europe', label: 'Europe & Schengen Tour' },
                    { name: 'Canada', label: 'Canada Visa & Rockies' },
                    { name: 'USA', label: 'USA B1/B2 Visa & Holidays' },
                    { name: 'Visa', label: 'All Visa Assistance' },
                    { name: 'School', label: 'School & College Tours' },
                    { name: 'Family', label: 'Family Group Tours' },
                    { name: 'Udaipur', label: 'Udaipur Royal Tour' },
                    { name: 'Thailand', label: 'Thailand Escapes' },
                    { name: 'Vietnam', label: 'Vietnam 3 Cities' },
                    { name: 'Dubai', label: 'Dubai & Abu Dhabi' },
                    { name: 'Bali', label: 'Bali Tropical Island' }
                  ].map((sug) => (
                    <button
                      key={sug.name}
                      className="empty-suggestion-pill"
                      onClick={() => {
                        setSearchQuery(sug.name);
                        setActivePage('all');
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
                  onClick={() => { setActivePage('all'); setSearchQuery(''); }}
                >
                  ↺ Reset All Filters & View All Packages
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SPECIAL CORPORATE & INSTITUTIONAL MICE SECTION
          ======================================================== */}
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
              <h3>School & College Educational Tours</h3>
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

      {/* ========================================================
          WHY CHOOSE MNP HOLIDAYS SECTION
          ======================================================== */}
      <section id="about" className="about section-padding">
        <div className="container about-grid">
          <div className="about-visual">
            <img 
              src="/images/bali.jpg" 
              alt="MNP Holidays Premium Travel" 
              className="about-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80';
              }}
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
              We are not just a travel agency; we are your personal journey architects. Based in Ahmedabad & Mumbai, we bring world-standard hospitality, verified hotels, transparent pricing, and genuine 24/7 human assistance.
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

      {/* ========================================================
          OFFICES & CONTACT SECTION
          ======================================================== */}
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
                <p className="branch-full-address address-compact" style={{ fontSize: '0.78rem', lineHeight: '1.38', color: '#94A3B8', margin: '0.15rem 0 0.35rem 0' }}>
                  Shop 467/1, TP No. 11, FP 109/1, SF 224, Townplaza, Near Raspan Cross Road, Nikol, Ahmedabad, Gujarat - 382350
                </p>
                <div className="branch-phones-group">
                  <span className="branch-phone-label">Direct Lines:</span>
                  <div className="branch-chips-row">
                    <a href="tel:+919825179624" className="branch-phone-chip">📞 +91 98251 79624</a>
                    <a href="tel:+919712204028" className="branch-phone-chip">📞 +91 97122 04028</a>
                    <a href="tel:+919327371565" className="branch-phone-chip">📞 +91 93273 71565</a>
                    <a href="tel:+919327130670" className="branch-phone-chip">📞 +91 93271 30670</a>
                    <a 
                      href="https://www.google.com/maps/place/MNP+HOLIDAYS+PVT+LTD/@23.0496116,72.6696688,17z/data=!3m1!4b1!4m6!3m5!1s0x395e870001ffdd23:0x3d0e56e3789502df!8m2!3d23.0496067!4d72.6722437!16s%2Fg%2F11v_3hb51r?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
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
                <p className="branch-full-address address-compact" style={{ fontSize: '0.78rem', lineHeight: '1.38', color: '#94A3B8', margin: '0.15rem 0 0.35rem 0' }}>
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

            {/* 3D Social & Contact Badges */}
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
                    <option value="Domestic India (Udaipur, Kashmir, Kerala...)">Domestic India (Udaipur, Kashmir...)</option>
                    <option value="International Holiday (Vietnam, Thailand, Bali...)">International (Vietnam, Bali...)</option>
                    <option value="Special Honeymoon Package">Honeymoon Special</option>
                    <option value="Corporate / MICE Tour">Corporate & MICE Tour</option>
                    <option value="School / College Tour">School / College Educational</option>
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

      {/* ========================================================
          PACKAGE DETAIL MODAL (HIGH RESOLUTION & ITINERARY)
          ======================================================== */}
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

              {selectedPackage.requiresOfficeContact && (
                <div className="modal-office-notice">
                  <div className="modal-office-notice-title">🏛️ DIRECT OFFICE CONSULTATION REQUIRED</div>
                  <p>
                    Due to variable consular biometric appointments (VFS / Embassy), individual financial documentation, and seasonal airline fares, this destination / visa category is processed through direct consultation at our <strong>Ahmedabad Head Office</strong> or <strong>Mumbai Branch</strong>.
                  </p>
                </div>
              )}
              
              <h4>{selectedPackage.requiresOfficeContact ? 'Documentation & Service Inclusions:' : 'Package Inclusions:'}</h4>
              <ul className="modal-inclusions">
                {selectedPackage.inclusions.map((inc, idx) => (
                  <li key={idx}>✓ {inc}</li>
                ))}
              </ul>

              <div className="modal-actions">
                <button 
                  className={`modal-btn-wa ${selectedPackage.requiresOfficeContact ? 'modal-btn-office-wa' : ''}`}
                  onClick={() => handleBookOnWhatsApp(selectedPackage.title, selectedPackage.price, selectedPackage.duration, selectedPackage.requiresOfficeContact)}
                >
                  <IconWhatsApp size={18} color="#FFFFFF" />
                  <span>{selectedPackage.requiresOfficeContact ? 'Consult Visa Specialist (WhatsApp)' : 'Inquire on WhatsApp'}</span>
                </button>
                <a href="tel:+919825179624" className="modal-btn-call">
                  📞 Ahmedabad (+91 98251 79624)
                </a>
                <a href="tel:+919898083171" className="modal-btn-call">
                  📞 Mumbai (+91 98980 83171)
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
          MOBILE PERSISTENT BOTTOM NAVIGATION BAR
          ======================================================= */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <a href="#home" className="mobile-bottom-nav-item" onClick={() => setActivePage('all')}>
          <span className="bottom-nav-icon">🏠</span>
          <span className="bottom-nav-label">Home</span>
        </a>
        <a href="#destinations" className="mobile-bottom-nav-item" onClick={() => handlePageSwitch('all')}>
          <span className="bottom-nav-icon">🌍</span>
          <span className="bottom-nav-label">Packages</span>
        </a>
        <a href="#special-services" className="mobile-bottom-nav-item">
          <span className="bottom-nav-icon">💼</span>
          <span className="bottom-nav-label">Corporate</span>
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
                <span>•</span>
                <a 
                  href="https://www.google.com/maps/place/MNP+HOLIDAYS+PVT+LTD/@23.0496116,72.6696688,17z/data=!3m1!4b1!4m6!3m5!1s0x395e870001ffdd23:0x3d0e56e3789502df!8m2!3d23.0496067!4d72.6722437!16s%2Fg%2F11v_3hb51r?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D" 
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

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    {
      id: 1,
      title: 'Amazing Thailand',
      duration: '5 Days / 4 Nights',
      desc: 'Explore the vibrant streets of Bangkok and the beautiful beaches of Pattaya.',
      price: '₹25,999*',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Bali Getaway',
      duration: '6 Days / 5 Nights',
      desc: 'Experience the spiritual culture, lush terraces, and stunning sunsets of Bali.',
      price: '₹32,500*',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Dubai Extravaganza',
      duration: '4 Days / 3 Nights',
      desc: 'Discover luxury shopping, ultramodern architecture, and desert safaris.',
      price: '₹28,900*',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">MNP Holidays</a>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <img 
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2000&q=80" 
          alt="Beautiful beach scenery" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-up">
          <h1 className="hero-title">Explore The World With <span className="text-gradient">MNP Holidays</span></h1>
          <p className="hero-subtitle">Your trusted travel partner in Ahmedabad for premium international tours, unforgettable memories, and seamless travel experiences.</p>
          <a href="#destinations"><button className="btn-book" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>View Packages</button></a>
        </div>
      </section>

      <section id="destinations" className="destinations section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular <span className="text-gradient">Destinations</span></h2>
            <p>Handpicked international tour packages crafted just for you.</p>
          </div>
          
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-img-wrapper">
                  <img src={pkg.image} alt={pkg.title} className="package-img" />
                  <div className="package-price">{pkg.price}</div>
                </div>
                <div className="package-info">
                  <span className="package-duration">{pkg.duration}</span>
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="package-desc">{pkg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about section-padding container">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80" 
          alt="Travel planning" 
          className="about-img"
        />
        <div className="about-content">
          <h2>Why Choose <span className="text-gradient">Us?</span></h2>
          <p>Located in the heart of Ahmedabad, MNP Holidays is an active and dynamic travel agency specializing in international tour operations.</p>
          <p>Led by Maulik Rajeshbhai Patel and Nikeshkumar Devchandbhai Prajapati, our mission is to provide hassle-free, premium travel experiences. From booking your flights to curating the perfect itinerary in Thailand or Bali, we handle every detail so you can focus on making memories.</p>
          <button className="btn-book" style={{ marginTop: '1rem' }}>Learn More</button>
        </div>
      </section>

      <section id="contact" className="contact section-padding">
        <div className="contact-blob"></div>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Ready to <span className="text-gradient">Travel?</span></h2>
            <p>Get in touch with us to plan your next dream vacation.</p>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Visit Our Office</h4>
              <p>Shop 467/1, TP No. 11, FP 109/1, SF 224<br/>Townplaza, Near Raspan, Nikol<br/>Ahmedabad, Gujarat 382350</p>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Contact Info</h4>
              <p>Email: booking@mnpholidays.com<br/>Phone: +91 98765 43210</p>
            </div>
          </div>
          
          <div className="glass-dark-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send an Inquiry</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Where do you want to travel?" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Request Quote</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MNP Holidays Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

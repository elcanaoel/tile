"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  const testimonials = [
    {
      text: "PremiumTile transformed our kitchen with stunning marble tiles. The craftsmanship was exceptional and the team was professional throughout the process.",
      author: "Sarah Johnson",
      project: "Kitchen Remodel"
    },
    {
      text: "We hired PremiumTile for our bathroom renovation and couldn't be happier. The attention to detail and quality of work exceeded our expectations.",
      author: "Michael Chen",
      project: "Bathroom Renovation"
    },
    {
      text: "The team at PremiumTile installed beautiful porcelain tiles in our living room. They were efficient, clean, and the results are stunning!",
      author: "Emma Rodriguez",
      project: "Living Room Flooring"
    }
  ];

  useEffect(() => {
    // Handle preloader
    const preloaderTimeout = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 500);

    // Handle scroll events for header and animations
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Animation on scroll for elements
      const elements = document.querySelectorAll('.service-card, .gallery-item, .about-image, .about-text, .testimonial-card');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Testimonial slider
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => {
      const typedItem = item as HTMLElement;
      item.addEventListener('mouseenter', function(this: HTMLElement) {
        this.style.transform = 'scale(1.03)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      });
      
      item.addEventListener('mouseleave', function(this: HTMLElement) {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow)';
      });
    });

    // Scroll to top button visibility
    const handleScrollTopVisibility = () => {
      const scrollTopButton = document.querySelector('.scroll-top');
      if (scrollTopButton) {
        if (window.scrollY > 300) {
          scrollTopButton.classList.add('show');
        } else {
          scrollTopButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScrollTopVisibility);
    handleScrollTopVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollTopVisibility);
      clearTimeout(preloaderTimeout);
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    // Reset form if needed
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    // Reset form if needed
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div>
      {/* Preloader */}
      {isPreloaderVisible && (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      )}
      
      {/* Header Section */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2>Premium<span>Tile</span></h2>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </nav>
            <div className="header-btn">
              <button className="btn btn-primary">Get Quote</button>
            </div>
            <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Space With Premium Tile Designs</h1>
            <p className="hero-subtitle">Luxury tiling solutions for residential and commercial spaces. Expert installation, premium materials, and unmatched craftsmanship.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('gallery')}>View Our Work</button>
              <button className="btn btn-secondary">Free Consultation</button>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Premium tiling solutions for every space</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Residential Tiling</h3>
              <p>Beautiful tile installations for kitchens, bathrooms, and living spaces with premium materials and expert craftsmanship.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Commercial Tiling</h3>
              <p>Durable and stylish tiling solutions for offices, retail spaces, restaurants, and other commercial environments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shower"></i>
              </div>
              <h3>Bathroom Remodeling</h3>
              <p>Complete bathroom transformations with waterproofing, custom designs, and premium tile selections.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Kitchen Backsplashes</h3>
              <p>Stunning backsplash installations that enhance your kitchen's aesthetic and protect your walls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>Our Gallery</h2>
            <p>Explore our recent tiling projects</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Modern Kitchen Tiling" />
              <div className="gallery-overlay">
                <h3>Modern Kitchen</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600132865031-25d3076209a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Luxury Bathroom" />
              <div className="gallery-overlay">
                <h3>Luxury Bathroom</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1598928992983-9003fe8f3531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Living Room Flooring" />
              <div className="gallery-overlay">
                <h3>Living Room Flooring</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1554368777-65db019b61d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Commercial Space" />
              <div className="gallery-overlay">
                <h3>Commercial Space</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600132771092-87429b7b62e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Marble Flooring" />
              <div className="gallery-overlay">
                <h3>Marble Flooring</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Outdoor Patio" />
              <div className="gallery-overlay">
                <h3>Outdoor Patio</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Subway Tiles" />
              <div className="gallery-overlay">
                <h3>Subway Tiles</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600132725032-14285d2dac2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Feature Wall" />
              <div className="gallery-overlay">
                <h3>Feature Wall</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1603712725032-14285d2dac2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Our Team" />
            </div>
            <div className="about-text">
              <h2>Why Choose PremiumTile?</h2>
              <p>With over 15 years of experience in the tiling industry, we bring unparalleled expertise and craftsmanship to every project.</p>
              <ul className="about-list">
                <li><i className="fas fa-check-circle"></i> Premium quality materials from top suppliers</li>
                <li><i className="fas fa-check-circle"></i> Expert installation with attention to detail</li>
                <li><i className="fas fa-check-circle"></i> Competitive pricing and transparent quotes</li>
                <li><i className="fas fa-check-circle"></i> Professional team with extensive experience</li>
                <li><i className="fas fa-check-circle"></i> Satisfaction guarantee on all projects</li>
              </ul>
              <button className="btn btn-primary">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our customers say about us</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonials[currentTestimonial].text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].author}</h4>
                  <p>{testimonials[currentTestimonial].project}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get a free quote for your tiling project</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location</h3>
                  <p>123 Design Street, Creative City, CC 10001</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@premiumtile.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Working Hours</h3>
                  <p>Monday-Friday: 8AM-6PM</p>
                  <p>Saturday: 9AM-4PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project" rows={5}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>Premium<span>Tile</span></h3>
              <p>Transforming spaces with premium tiling solutions since 2008. We bring creativity, quality, and expertise to every project.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
                <a href="#"><i className="fab fa-houzz"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Residential Tiling</a></li>
                <li><a href="#">Commercial Tiling</a></li>
                <li><a href="#">Bathroom Remodeling</a></li>
                <li><a href="#">Kitchen Backsplashes</a></li>
                <li><a href="#">Tile Repair</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p>Subscribe to get special offers and updates</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Your Email" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 PremiumTile. All Rights Reserved.</p>
            <p className="designer-credit">Site created and designed by Joel</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}
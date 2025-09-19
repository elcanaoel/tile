// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Show message function
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    // Add styles
    messageElement.style.position = 'fixed';
    messageElement.style.top = '20px';
    messageElement.style.right = '20px';
    messageElement.style.padding = '15px 25px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.color = 'white';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.zIndex = '9999';
    messageElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    messageElement.style.transform = 'translateX(200%)';
    messageElement.style.transition = 'transform 0.5s ease';
    
    if (type === 'success') {
        messageElement.style.backgroundColor = '#27ae60';
    } else {
        messageElement.style.backgroundColor = '#e74c3c';
    }
    
    // Add to document
    document.body.appendChild(messageElement);
    
    // Animate in
    setTimeout(() => {
        messageElement.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageElement.style.transform = 'translateX(200%)';
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 3000);
}

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        
        // Show success message
        showMessage('Thank you for your message! We will contact you soon.', 'success');
        this.reset();
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Show success message
        showMessage('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    });
}

// Testimonial slider
let currentTestimonial = 0;
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

function updateTestimonial() {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard && testimonials[currentTestimonial]) {
        testimonialCard.style.opacity = '0';
        testimonialCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            testimonialCard.innerHTML = `
                <div class="testimonial-content">
                    <p>"${testimonials[currentTestimonial].text}"</p>
                    <div class="testimonial-author">
                        <h4>${testimonials[currentTestimonial].author}</h4>
                        <p>${testimonials[currentTestimonial].project}</p>
                    </div>
                </div>
            `;
            
            testimonialCard.style.opacity = '1';
            testimonialCard.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Initialize testimonial slider
if (document.querySelector('.testimonials')) {
    updateTestimonial();
    
    // Change testimonial every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
}

// Gallery filtering functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryFilter = document.querySelector('.gallery-filter');

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .gallery-item, .about-image, .about-text, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .about-image, .about-text, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    // Trigger initial check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initialize gallery items with animation properties
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Scroll to top button
const scrollTopButton = document.createElement('div');
scrollTopButton.className = 'scroll-top';
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation classes to elements on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('PremiumTile website loaded successfully!');
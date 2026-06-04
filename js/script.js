// ============================================
// Navigation Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav link on page load
    updateActiveNavLink();
});

// Update active nav link based on current page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Contact Form Handling
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message (in a real app, this would send to a server)
                alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}`);
                contactForm.reset();
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});

// ============================================
// Smooth Scroll Behavior
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            const offsetTop = element.offsetTop - 80; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Animation - Fade in elements on scroll
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill cards and project cards
    document.querySelectorAll('.skill-category, .project-card, .info-group').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// Add scroll effect to navbar
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// Mobile Menu CSS (injected for better responsiveness)
// ============================================
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            left: 0;
            top: 60px;
            width: 100%;
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            flex-direction: column;
            display: none;
            gap: 0;
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-item {
            width: 100%;
        }

        .nav-link {
            display: block;
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(10px, 10px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

console.log('Portfolio script loaded successfully!');

// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-text > *', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    interval: 200,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
});

ScrollReveal().reveal('.reveal-up', {
    distance: '60px',
    origin: 'bottom',
    duration: 1200,
    interval: 200,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
});

ScrollReveal().reveal('.reveal-left', {
    distance: '60px',
    origin: 'left',
    duration: 1200,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
});

ScrollReveal().reveal('.reveal-right', {
    distance: '60px',
    origin: 'right',
    duration: 1200,
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Toggle icon between menu and x
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

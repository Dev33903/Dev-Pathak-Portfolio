/**
 * Dev Pixel Portfolio - Main JavaScript
 * Scroll-triggered animations using Intersection Observer
 */

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initNavigation();
    initSkillBars();
    initContactForm();
    initSmoothScroll();
    console.log('🎨 Dev Pixel Portfolio loaded!');
});

/**
 * Scroll-Triggered Animations
 */
function initScrollAnimations() {
    // Get all elements with .animate class
    const animatedElements = document.querySelectorAll('.animate');

    // Also add these elements
    const additionalElements = document.querySelectorAll('.skills-category, .training-card, .timeline-item, .project-card, .featured-card, .contact-form, .contact-info');

    // Create Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Get delay from data attribute or default to 0
                const delay = entry.target.dataset.delay || 0;

                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, delay);

                // Stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    // Observe animated elements
    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    // Observe additional elements
    additionalElements.forEach(function (el) {
        observer.observe(el);
    });
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    // Set the CSS variable for each skill bar
    skillBars.forEach(function (bar) {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--skill-width', progress + '%');
    });
}

/**
 * Navigation
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when clicking links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const subject = form.querySelector('#subject').value;
        const message = form.querySelector('#message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Success feedback
        const submitBtn = form.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';

        form.reset();

        setTimeout(function () {
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.background = '';
        }, 3000);
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

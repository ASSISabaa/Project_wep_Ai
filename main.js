// Quantum AI - Main JavaScript

// Navigation scroll effect
const nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', checkReveal);
checkReveal();

// Pricing toggle
const pricingToggle = document.getElementById('pricingToggle');
if (pricingToggle) {
    const priceValues = document.querySelectorAll('.price-value[data-monthly]');
    pricingToggle.addEventListener('click', () => {
        pricingToggle.classList.toggle('active');
        const isYearly = pricingToggle.classList.contains('active');
        priceValues.forEach(el => {
            el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
        });
        document.querySelectorAll('.pricing-toggle > span:not(.pricing-save)').forEach((span, i) => {
            span.classList.toggle('active', i === (isYearly ? 1 : 0));
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!this.id || this.id === 'contactForm' || this.id === 'loginForm' || this.id === 'ctaForm') {
            e.preventDefault();
            const formType = this.id || 'form';
            alert('Thank you! Your submission has been received.');
            this.reset();
        }
    });
});

console.log('Quantum AI - Ready');

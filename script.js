// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const toggleBtns = document.querySelectorAll('.price-toggle .toggle-btn');
    const membershipCards = document.querySelectorAll('.membership-card');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const chevron = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherChevron = otherItem.querySelector('.faq-question i');
                    otherAnswer.style.maxHeight = null;
                    otherChevron.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
                chevron.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                chevron.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Pricing toggle logic
    function updatePrices(period) {
        membershipCards.forEach(card => {
            const amountEl = card.querySelector('.amount');
            const periodEl = card.querySelector('.price .period') || card.querySelector('.price .session');
            if (!amountEl || !periodEl) return;
            const dataAttr = period === 'session' ? 'day' : period; // map Per Session to data-day
            const value = card.getAttribute(`data-${dataAttr}`);
            if (value) {
                amountEl.textContent = value;
                periodEl.textContent = `/${period}`;
            }
        });
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const period = btn.getAttribute('data-period');
            toggleBtns.forEach(b => {
                b.classList.toggle('active', b === btn);
                b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
            });
            updatePrices(period);
        });
    });
});

// Smooth scrolling for navigation links

// Navbar scroll effect
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
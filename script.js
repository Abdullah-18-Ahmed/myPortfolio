// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Download CV button (fake download)
document.getElementById('downloadCV').addEventListener('click', function() {
    alert('CV download feature coming soon!');
});

// Contact form submission (no backend, just a message)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for reaching out! I will get back to you soon.';
    this.reset();
}); 
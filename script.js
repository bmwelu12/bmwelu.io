// Blur functionality for sections (visual effect only, doesn't block navigation)
function initBlurOnClick() {
    // Only apply blur effect on home page link cards
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        return;
    }

    // Get only link cards on home page (not navbar links)
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Blur all other cards on hover
            linkCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.add('section-blurred');
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            // Remove blur when mouse leaves
            linkCards.forEach(otherCard => {
                otherCard.classList.remove('section-blurred');
            });
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Set cover images for link cards
function setCoverImages() {
    const linkCards = document.querySelectorAll('.link-card[data-image]');
    linkCards.forEach((card, index) => {
        const imageUrl = card.getAttribute('data-image');
        if (imageUrl) {
            // Add unique class and create style
            const uniqueClass = `link-card-img-${index}`;
            card.classList.add(uniqueClass);
            
            // Create or update style element
            let styleEl = document.getElementById('link-card-images');
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'link-card-images';
                document.head.appendChild(styleEl);
            }
            
            // Append style for this card
            styleEl.textContent += `.${uniqueClass}::before { background-image: url(${imageUrl}); }\n`;
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set cover images
    setCoverImages();
    
    // Initialize blur functionality
    initBlurOnClick();

    // Animate elements for fade-in
    const animatedElements = document.querySelectorAll(
        '.link-card, .project-card, .award-item, .publication-item, .media-item, .experience-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animate page headers
    const pageHeaders = document.querySelectorAll('.page-header');
    pageHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 200);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.7)';
        }
    }
});

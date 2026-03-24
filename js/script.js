/**
 * VOGEL.HAUS - EXACT CLONE
 * JavaScript for animations and interactions
 */

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroCanvasAnimations();
    initScrollAnimations();
    initCarousel();
    initNavigation();
});

/**
 * Hero canvas animations (gradient background effects)
 */
function initHeroCanvasAnimations() {
    const canvas1 = document.querySelector('.hero-canvas-1');
    const canvas2 = document.querySelector('.hero-canvas-2');
    const canvas3 = document.querySelector('.hero-canvas-3');

    if (!canvas1 || !canvas2 || !canvas3) return;

    // Canvas 1 - Top gradient animation
    const ctx1 = canvas1.getContext('2d');
    animateGradient(ctx1, canvas1, 0);

    // Canvas 2 - Middle gradient animation
    const ctx2 = canvas2.getContext('2d');
    animateGradient(ctx2, canvas2, 1000);

    // Canvas 3 - Bottom gradient animation
    const ctx3 = canvas3.getContext('2d');
    animateGradient(ctx3, canvas3, 2000);
}

/**
 * Animate gradient on canvas
 */
function animateGradient(ctx, canvas, delay) {
    let time = 0;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function render() {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Create animated gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);

        const offset1 = (Math.sin(time * 0.001) + 1) / 2;
        const offset2 = (Math.cos(time * 0.0008) + 1) / 2;

        gradient.addColorStop(0, `rgba(158, 151, 255, ${0.3 * offset1})`);
        gradient.addColorStop(0.5, `rgba(21, 115, 255, ${0.2 * offset2})`);
        gradient.addColorStop(1, `rgba(255, 156, 94, ${0.15 * offset1})`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        time += 16;
        requestAnimationFrame(render);
    }

    setTimeout(() => {
        resize();
        window.addEventListener('resize', resize);
        render();
    }, delay);
}

/**
 * Scroll-based animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe cards
    const cards = document.querySelectorAll('.app-card, .review-card, .service-card, .tech-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

/**
 * Carousel animation
 */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    // Clone items for infinite scroll
    const items = track.querySelectorAll('.carousel-item');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

/**
 * Navigation interactions
 */
function initNavigation() {
    const nav = document.querySelector('.nav-bar');
    if (!nav) return;

    let lastScroll = 0;
    const navContainer = nav.querySelector('.nav-container');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add background on scroll
        if (currentScroll > 100) {
            navContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navContainer.style.backdropFilter = 'blur(10px)';
            navContainer.style.webkitBackdropFilter = 'blur(10px)';
            navContainer.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navContainer.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            navContainer.style.backdropFilter = 'blur(0px)';
            navContainer.style.webkitBackdropFilter = 'blur(0px)';
            navContainer.style.boxShadow = 'none';
        }

        // Hide/show nav on scroll
        if (currentScroll > lastScroll && currentScroll > 300) {
            nav.style.transform = 'translateX(-50%) translateY(-100%)';
            nav.style.opacity = '0';
        } else {
            nav.style.transform = 'translateX(-50%) translateY(0)';
            nav.style.opacity = '1';
        }

        lastScroll = currentScroll;
    });

    // Smooth transitions
    nav.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
}

/**
 * Newsletter form submission
 */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        console.log('Newsletter subscription:', email);

        // Show success message
        alert('Thank you for subscribing!');
        this.reset();
    });
}

/**
 * Parallax effect for hero elements
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Parallax for logo stars
    const logoStars = document.querySelector('.logo-stars');
    if (logoStars) {
        logoStars.style.transform = `translateX(-50%) translateY(${scrolled * 0.5}px)`;
    }

    // Parallax for polaroids
    const clemens = document.querySelector('.clemens-polaroid');
    const florian = document.querySelector('.florian-polaroid');
    const letter = document.querySelector('.letter-card');

    if (clemens) {
        clemens.style.transform = `translate(-50%, -50%) translateX(30px) translateY(${50 + scrolled * 0.1}px) scale(0.9) rotate(-7deg)`;
    }
    if (florian) {
        florian.style.transform = `translate(-50%, -50%) translateX(-30px) translateY(${50 + scrolled * 0.1}px) scale(0.9) rotate(14deg)`;
    }
    if (letter) {
        letter.style.transform = `translate(-50%, -50%) translateY(${50 + scrolled * 0.05}px) scale(0.7) rotate(7deg)`;
    }
});

/**
 * Hover effects for interactive elements
 */
const interactiveElements = document.querySelectorAll('.app-card, .tech-card, .service-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
    });

    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
});

/**
 * Lazy loading for images
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Add smooth reveal animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .app-card, .review-card, .service-card, .tech-card {
        opacity: 0;
        animation: fadeInUp 0.6s ease forwards;
    }

    .app-card:nth-child(1) { animation-delay: 0.1s; }
    .app-card:nth-child(2) { animation-delay: 0.2s; }
    .app-card:nth-child(3) { animation-delay: 0.3s; }

    .review-card:nth-child(1) { animation-delay: 0.1s; }
    .review-card:nth-child(2) { animation-delay: 0.2s; }
    .review-card:nth-child(3) { animation-delay: 0.3s; }

    .service-card:nth-child(1) { animation-delay: 0.1s; }
    .service-card:nth-child(2) { animation-delay: 0.15s; }
    .service-card:nth-child(3) { animation-delay: 0.2s; }
    .service-card:nth-child(4) { animation-delay: 0.25s; }
    .service-card:nth-child(5) { animation-delay: 0.3s; }
    .service-card:nth-child(6) { animation-delay: 0.35s; }

    .tech-card:nth-child(1) { animation-delay: 0.1s; }
    .tech-card:nth-child(2) { animation-delay: 0.2s; }
    .tech-card:nth-child(3) { animation-delay: 0.3s; }
    .tech-card:nth-child(4) { animation-delay: 0.4s; }
    .tech-card:nth-child(5) { animation-delay: 0.5s; }
`;
document.head.appendChild(style);

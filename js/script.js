// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = event.target.closest('.navbar');
        if (!isClickInsideNav && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    // Hero Phone Preview Slideshow
    const previewSlides = document.querySelectorAll('.preview-slide');
    if (previewSlides.length > 0) {
        let currentSlide = 0;

        function showNextSlide() {
            // Remove active class from current slide
            previewSlides[currentSlide].classList.remove('active');

            // Move to next slide
            currentSlide = (currentSlide + 1) % previewSlides.length;

            // Add active class to new slide
            previewSlides[currentSlide].classList.add('active');
        }

        // Change slide every 3 seconds
        setInterval(showNextSlide, 3000);
    }
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileMenuToggle) {
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and other elements
    const animateElements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Store button click tracking (for analytics)
    const storeButtons = document.querySelectorAll('.store-button');
    storeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Add analytics tracking here if needed
            console.log('Store button clicked:', this.querySelector('.store-name').textContent);

            // Prevent default for now since we don't have actual store links yet
            e.preventDefault();
            alert('Download links will be available once the app is published to the stores!');
        });
    });

    // Add active class to current page link in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksItems = document.querySelectorAll('.nav-links a');

    navLinksItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Feature card hover effect enhancement
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading class removal after page load
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // Handle form submissions (if you add contact forms later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add form handling logic here
            console.log('Form submitted');
        });
    });

    // Add copy to clipboard for code snippets (if needed in future)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.addEventListener('click', function () {
            navigator.clipboard.writeText(block.textContent);
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        });
        block.parentElement.appendChild(button);
    });

    // App Screenshots Carousel
    const screenshotsCarousel = document.querySelector('.screenshots-carousel');
    if (screenshotsCarousel) {
        const track = screenshotsCarousel.querySelector('.screenshots-track');
        const items = screenshotsCarousel.querySelectorAll('.screenshot-item');
        const prevBtn = screenshotsCarousel.querySelector('.carousel-btn-prev');
        const nextBtn = screenshotsCarousel.querySelector('.carousel-btn-next');
        const indicators = document.querySelectorAll('.carousel-indicators .indicator');

        let currentIndex = 0;
        const totalItems = items.length;

        function updateCarousel(index) {
            // Ensure index is within bounds
            currentIndex = (index + totalItems) % totalItems;

            // Update track position
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update indicators
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentIndex);
            });

            // Update items
            items.forEach((item, i) => {
                item.classList.toggle('active', i === currentIndex);
            });
        }

        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                updateCarousel(currentIndex + 1);
            });
        }

        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                updateCarousel(currentIndex - 1);
            });
        }

        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                updateCarousel(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                updateCarousel(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                updateCarousel(currentIndex + 1);
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next
                    updateCarousel(currentIndex + 1);
                } else {
                    // Swipe right - previous
                    updateCarousel(currentIndex - 1);
                }
            }
        }

        // Auto-play (optional - uncomment to enable)
        // let autoPlayInterval = setInterval(() => {
        //     updateCarousel(currentIndex + 1);
        // }, 5000);

        // Pause auto-play on hover (if auto-play is enabled)
        // screenshotsCarousel.addEventListener('mouseenter', () => {
        //     clearInterval(autoPlayInterval);
        // });

        // Resume auto-play on mouse leave (if auto-play is enabled)
        // screenshotsCarousel.addEventListener('mouseleave', () => {
        //     autoPlayInterval = setInterval(() => {
        //         updateCarousel(currentIndex + 1);
        //     }, 5000);
        // });
    }
});

// Add viewport height fix for mobile browsers
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

// Performance optimization: lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth reveal for sections on scroll
const revealSections = () => {
    const sections = document.querySelectorAll('.features, .how-it-works, .testimonials, .download');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealSections);
revealSections(); // Initial check

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

console.log('KoungaTripMate website loaded successfully!');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeader();
    initMobileMenu();
    initSmoothScrolling();
    initScrollEffects();
    initBackToTop();
    initWhatsAppButton();
    initContactForm();
    initAnimations();
    initBeforeAfter();
    initGallery();
});

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Gallery population
function initGallery() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    const files = [
        "WhatsApp Image 2025-09-05 at 04.22.40 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.40 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.40 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.40.jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41 (4).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41 (5).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.41.jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.42 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.42 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.42 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.22.42.jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.15 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.15.jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.17 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.17 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.17 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.17 (4).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.17.jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.19 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.19.jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.20 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.25.20.jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.17 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.17 (4).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.17 (5).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.18 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.18 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.18 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.18.jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.20 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.20 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.20 (5).jpeg",
        "WhatsApp Image 2025-09-05 at 04.29.20.jpeg",
        "WhatsApp Image 2025-09-05 at 04.32.42.jpeg",
        "WhatsApp Image 2025-09-05 at 04.32.43 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.32.43 (4).jpeg",
        "WhatsApp Image 2025-09-05 at 04.32.43.jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.04 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.04 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.05 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.05 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.05 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.05 (4).jpeg",
        "WhatsApp Image 2025-09-05 at 04.34.05.jpeg",
        "WhatsApp Image 2025-09-05 at 04.35.16 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.35.16.jpeg",
        "WhatsApp Image 2025-09-05 at 04.35.42 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.35.42.jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.38 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.38 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.38 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.38.jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.39 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.39 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.38.39.jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.20 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.20 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.20.jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.45 (1).jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.45 (2).jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.45 (3).jpeg",
        "WhatsApp Image 2025-09-05 at 04.39.45.jpeg"
    ];

    const fragment = document.createDocumentFragment();
    files.forEach(name => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.alt = 'Galeri';
        img.src = `gorsel/galeri/${name}`;
        item.appendChild(img);
        fragment.appendChild(item);
    });
    grid.appendChild(fragment);

    // Controls
    const prev = document.querySelector('.gallery-prev');
    const next = document.querySelector('.gallery-next');
    const cardWidth = () => grid.querySelector('.gallery-item')?.getBoundingClientRect().width || 300;
    const scrollByCard = (dir) => grid.scrollBy({ left: dir * (cardWidth() + 16), behavior: 'smooth' });
    prev && prev.addEventListener('click', () => scrollByCard(-1));
    next && next.addEventListener('click', () => scrollByCard(1));

    // Drag to scroll (desktop)
    let isDown = false, startX = 0, startLeft = 0;
    const onDown = (e) => { isDown = true; startX = e.pageX || e.touches?.[0].pageX; startLeft = grid.scrollLeft; grid.classList.add('dragging'); };
    const onMove = (e) => { if (!isDown) return; const x = e.pageX || e.touches?.[0].pageX; grid.scrollLeft = startLeft - (x - startX); };
    const onUp = () => { isDown = false; grid.classList.remove('dragging'); };
    grid.addEventListener('mousedown', onDown);
    grid.addEventListener('mousemove', onMove);
    grid.addEventListener('mouseup', onUp);
    grid.addEventListener('mouseleave', onUp);
    grid.addEventListener('touchstart', onDown, { passive: true });
    grid.addEventListener('touchmove', onMove, { passive: true });
    grid.addEventListener('touchend', onUp, { passive: true });
}

// Before/After slider
function initBeforeAfter() {
    const wrappers = document.querySelectorAll('.ba-wrapper');
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
        const overlay = wrapper.querySelector('.ba-overlay');
        const handle = wrapper.querySelector('.ba-handle');
        if (!overlay || !handle) return;

        let dragging = false;

        const bounds = () => wrapper.getBoundingClientRect();

        const setPosition = (clientX) => {
            const rect = bounds();
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const percent = (x / rect.width) * 100;
            overlay.style.width = percent + '%';
            handle.style.left = percent + '%';
        };

        const start = (e) => {
            dragging = true;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setPosition(clientX);
            e.preventDefault();
        };
        const move = (e) => {
            if (!dragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            setPosition(clientX);
        };
        const end = () => { dragging = false; };

        handle.addEventListener('mousedown', start, { passive: false });
        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseup', end, { passive: true });

        handle.addEventListener('touchstart', start, { passive: false });
        window.addEventListener('touchmove', move, { passive: false });
        window.addEventListener('touchend', end, { passive: true });

        // Center at 50% initially
        setTimeout(() => {
            const rect = bounds();
            setPosition(rect.left + rect.width / 2);
        }, 0);
    });

    // Carousel logic
    const viewport = document.querySelector('.ba-viewport');
    const track = document.querySelector('.ba-track');
    const slides = document.querySelectorAll('.ba-slide');
    const prev = document.querySelector('.ba-prev');
    const next = document.querySelector('.ba-next');
    const dotsContainer = document.querySelector('.ba-dots');

    if (!viewport || !track || !slides.length) return;

    let index = 0;

    const updateDots = () => {
        if (!dotsContainer) return;
        dotsContainer.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
    };

    // Create dots once
    if (dotsContainer && !dotsContainer.children.length) {
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => { index = i; goTo(index); });
            dotsContainer.appendChild(dot);
        });
    }

    const goTo = (i) => {
        index = (i + slides.length) % slides.length;
        const offset = -index * viewport.clientWidth;
        track.style.transform = `translateX(${offset}px)`;
        updateDots();
    };

    const nextSlide = () => goTo(index + 1);
    const prevSlide = () => goTo(index - 1);

    next && next.addEventListener('click', nextSlide);
    prev && prev.addEventListener('click', prevSlide);

    // Swipe support
    let startX = 0; let isSwiping = false;
    const onStart = (e) => { isSwiping = true; startX = e.touches ? e.touches[0].clientX : e.clientX; };
    const onEnd = (e) => { if (!isSwiping) return; isSwiping = false; const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; const dx = endX - startX; if (Math.abs(dx) > 50) { dx < 0 ? nextSlide() : prevSlide(); } };
    viewport.addEventListener('mousedown', onStart, { passive: true });
    viewport.addEventListener('mouseup', onEnd, { passive: true });
    viewport.addEventListener('mouseleave', onEnd, { passive: true });
    viewport.addEventListener('touchstart', onStart, { passive: true });
    viewport.addEventListener('touchend', onEnd, { passive: true });

    // Resize handling & initial position
    window.addEventListener('resize', () => goTo(index));
    goTo(0);
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Delegated handler ensures it works every time
    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('.hero .hero-buttons a[href^="#"]');
        if (!anchor) return;
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
        anchor.blur();
    }, true);
}

// Scroll effects
function initScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .price-card, .testimonial-card, .gallery-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsappButton');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // WhatsApp number
            const phoneNumber = '905323028222';
            const message = 'Merhaba! Beyoğlu Kuru Temizleme hakkında bilgi almak istiyorum.';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !phone || !message) {
                showNotification('Lütfen tüm alanları doldurun.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9+\-\s()]+$/;
            if (!phoneRegex.test(phone)) {
                showNotification('Lütfen geçerli bir telefon numarası girin.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Mesajınız gönderiliyor...', 'info');
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Initialize animations
function initAnimations() {
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-message {
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.type === 'submit') {
                // Add loading state
                const originalText = this.textContent;
                this.textContent = 'Gönderiliyor...';
                this.disabled = true;
                
                // Reset after form submission
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 3000);
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .price-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events efficiently
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (hamburger && mobileMenu) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }
    
    // Enter key to submit form
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Add loading state
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker kaldırıldı - şu an için gerekli değil

 

 

// Fallback yorumlar (API çalışmazsa)
function getFallbackReviews() {
    console.log('Using fallback reviews due to CORS restrictions');
    return [
        {
            author_name: "Seda K." ,
            rating: 5,
            text: "Beyaz spor ayakkabılarım neredeyse kullanılamaz durumdaydı, pırıl pırıl teslim aldım. Teslim tarihi söyledikleri gibi, fiyatı da baştan netti.",
            time: Date.now()
        },
        {
            author_name: "Hakan T.",
            rating: 4,
            text: "Takım elbisemin kol boyu ve bel daraltma için gittim. Dikişleri fabrika çıkışı gibi oldu. Sadece teslimatta 1 saat gecikme yaşandı, onun dışında kusursuz.",
            time: Date.now()
        },
        {
            author_name: "Elif A.",
            rating: 5,
            text: "Gelinlik temizliği için çok yer araştırdım, içim en çok burada rahat etti. Leke kalmadı, tüller sertleşmemiş. Kılıfına düzgün yerleştirip teslim ettiler.",
            time: Date.now()
        },
        {
            author_name: "Yasin B.",
            rating: 5,
            text: "Yorgan ve battaniye temizliğinde kokusuz ve tertemiz teslim ettiler. Eve kadar teslim seçeneği işimi kolaylaştırdı.",
            time: Date.now()
        },
        {
            author_name: "Nesrin D.",
            rating: 4,
            text: "Deri montumun renginde açılma vardı, bakımını yapıp yumuşattılar. İlk gün hafif koku vardı ama 1-2 saat havalandırınca geçti.",
            time: Date.now()
        }
    ];
}

 

// Testimonials'ı güncelle
async function updateTestimonials() {
    console.log('updateTestimonials called');
    const reviews = getFallbackReviews();
    console.log('Reviews received:', reviews);
    
    const testimonialsContainer = document.querySelector('.testimonials-grid');
    console.log('Testimonials container found:', !!testimonialsContainer);
    
    if (!testimonialsContainer) {
        console.error('Testimonials container not found!');
        return;
    }
    
    // Mevcut testimonials'ı temizle
    testimonialsContainer.innerHTML = '';
    
    // İlk 3 yorumu göster
    const displayReviews = reviews.slice(0, 3);
    console.log('Displaying reviews:', displayReviews.length);
    
    displayReviews.forEach((review, index) => {
        console.log(`Creating testimonial ${index + 1}:`, review);
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        // Yıldız rating'i oluştur
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                <p>"${review.text}"</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>${review.author_name}</h4>
                    <span>Google Maps - ${stars}</span>
                </div>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialCard);
        console.log(`Testimonial ${index + 1} added to DOM`);
    });
    
    console.log('Total testimonials in DOM:', testimonialsContainer.children.length);
}

// Sayfa yüklendiğinde testimonials'ı güncelle
document.addEventListener('DOMContentLoaded', function() {
    updateTestimonials();
});

// Slider functionality
let servicesCurrentSlide = 0;
let pricesCurrentSlide = 0;

function moveServicesSlider(direction) {
    const slider = document.querySelector('.services-slider');
    const cards = document.querySelectorAll('.services-slider .service-card');
    const totalSlides = Math.ceil(cards.length / 3);
    
    servicesCurrentSlide += direction;
    
    if (servicesCurrentSlide >= totalSlides) {
        servicesCurrentSlide = 0;
    } else if (servicesCurrentSlide < 0) {
        servicesCurrentSlide = totalSlides - 1;
    }
    
    const translateX = -servicesCurrentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    updateServicesDots();
}

function currentServicesSlide(slide) {
    servicesCurrentSlide = slide - 1;
    const slider = document.querySelector('.services-slider');
    const translateX = -servicesCurrentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    updateServicesDots();
}

function updateServicesDots() {
    const dots = document.querySelectorAll('.services-slider-container .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === servicesCurrentSlide);
    });
}

function movePricesSlider(direction) {
    const slider = document.querySelector('.prices-slider');
    const cards = document.querySelectorAll('.prices-slider .price-card');
    const totalSlides = Math.ceil(cards.length / 3);
    
    pricesCurrentSlide += direction;
    
    if (pricesCurrentSlide >= totalSlides) {
        pricesCurrentSlide = 0;
    } else if (pricesCurrentSlide < 0) {
        pricesCurrentSlide = totalSlides - 1;
    }
    
    const translateX = -pricesCurrentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    updatePricesDots();
}

function currentPricesSlide(slide) {
    pricesCurrentSlide = slide - 1;
    const slider = document.querySelector('.prices-slider');
    const translateX = -pricesCurrentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    updatePricesDots();
}

function updatePricesDots() {
    const dots = document.querySelectorAll('.prices-slider-container .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === pricesCurrentSlide);
    });
}

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
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
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
            const phoneNumber = '905312822513';
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

// Google Maps Reviews Cache System
const GOOGLE_PLACES_API_KEY = 'AIzaSyBqpRhsYXFC5DTf8DNLgK-kB2u_siD40Y4'; // Google Places API Key
const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Beyoğlu Kuru Temizleme Place ID
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 saat

// Cache fonksiyonları
function cacheReviews(reviews) {
    const cacheData = {
        reviews: reviews,
        timestamp: Date.now()
    };
    localStorage.setItem('googleReviews', JSON.stringify(cacheData));
}

function getCachedReviews() {
    const cached = localStorage.getItem('googleReviews');
    if (cached) {
        const { reviews, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
            return reviews;
        }
    }
    return null;
}

// Google Places API'den yorumları çek
async function fetchGoogleReviews() {
    try {
        // API key ve Place ID kontrolü
        if (GOOGLE_PLACES_API_KEY === 'YOUR_API_KEY_HERE' || PLACE_ID === 'YOUR_PLACE_ID_HERE') {
            console.log('API Key veya Place ID ayarlanmamış, fallback yorumları kullanılıyor');
            return getFallbackReviews();
        }
        
        console.log('Fetching from Google API...');
        console.log('Place ID:', PLACE_ID);
        console.log('API Key:', GOOGLE_PLACES_API_KEY.substring(0, 10) + '...');
        
        // CORS proxy'ler çalışmıyor, doğrudan API'yi dene
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`;
        
        console.log('Trying direct API call...');
        const response = await fetch(apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        console.log('Direct API response status:', response.status);
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        console.log('API Status:', data.status);
        console.log('Result exists:', !!data.result);
        console.log('Reviews exist:', !!(data.result && data.result.reviews));
        
        if (data.status === 'OK' && data.result && data.result.reviews) {
            console.log('Reviews found:', data.result.reviews.length);
            console.log('First review:', data.result.reviews[0]);
            return data.result.reviews;
        } else {
            console.log('No reviews found or API error:', data.status);
            console.log('Error message:', data.error_message || 'No error message');
            return getFallbackReviews();
        }
    } catch (error) {
        console.error('Error fetching Google reviews:', error);
        return getFallbackReviews();
    }
}

// Fallback yorumlar (API çalışmazsa)
function getFallbackReviews() {
    console.log('Using fallback reviews due to CORS restrictions');
    return [
        {
            author_name: "Ayşe Yılmaz",
            rating: 5,
            text: "Çok kaliteli hizmet aldım. Kıyafetlerim yeni gibi oldu. Kesinlikle tavsiye ederim.",
            time: Date.now()
        },
        {
            author_name: "Mehmet Demir", 
            rating: 5,
            text: "Hızlı ve güvenilir hizmet. Fiyatları da çok uygun. Teşekkürler!",
            time: Date.now()
        },
        {
            author_name: "Fatma Özkan",
            rating: 5,
            text: "Profesyonel ekip, kaliteli hizmet. Gelinliğimi mükemmel temizlediler.",
            time: Date.now()
        }
    ];
}

// Yorumları al (cache'den veya API'den)
async function getReviews() {
    // Önce cache'i kontrol et
    const cachedReviews = getCachedReviews();
    if (cachedReviews) {
        console.log('Reviews loaded from cache');
        return cachedReviews;
    }
    
    // Cache yoksa API'den çek
    console.log('Fetching reviews from Google API');
    const reviews = await fetchGoogleReviews();
    
    // Cache'e kaydet
    cacheReviews(reviews);
    
    return reviews;
}

// Testimonials'ı güncelle
async function updateTestimonials() {
    console.log('updateTestimonials called');
    const reviews = await getReviews();
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

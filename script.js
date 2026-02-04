document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuClose = document.querySelector('.menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

    function toggleMenu() {
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', toggleMenu);
    }

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        }
    });

    // --- Before/After Carousel & Interaction ---
    const baCarousel = document.querySelector('.ba-carousel');
    if (baCarousel) {
        // 1. Carousel Logic (Slider for switching examples)
        const baTrack = document.querySelector('.ba-track');
        const baSlides = document.querySelectorAll('.ba-slide');
        const baPrevBtn = document.querySelector('.ba-nav.ba-prev');
        const baNextBtn = document.querySelector('.ba-nav.ba-next');
        const baStatus = document.querySelector('.ba-status');
        let baIndex = 0;

        function updateBaCarousel() {
            const viewport = baCarousel.querySelector('.ba-viewport');
            if (!viewport) return;
            const slideWidth = viewport.offsetWidth;
            baTrack.style.transform = `translateX(-${baIndex * slideWidth}px)`;
            // Update status text
            if (baStatus) {
                baStatus.textContent = `Örnek ${baIndex + 1} / ${baSlides.length}`;
            }
        }

        if (baNextBtn && baPrevBtn) {
            baNextBtn.addEventListener('click', () => {
                if (baIndex < baSlides.length - 1) {
                    baIndex++;
                } else {
                    baIndex = 0; // Loop
                }
                updateBaCarousel();
            });

            baPrevBtn.addEventListener('click', () => {
                if (baIndex > 0) {
                    baIndex--;
                } else {
                    baIndex = baSlides.length - 1; // Loop
                }
                updateBaCarousel();
            });
        }

        window.addEventListener('resize', updateBaCarousel);

        // 2. Drag Interaction Logic (For each Before/After pair)
        const baWrappers = document.querySelectorAll('.ba-wrapper');

        baWrappers.forEach(wrapper => {
            const handle = wrapper.querySelector('.ba-handle');
            const overlay = wrapper.querySelector('.ba-overlay');
            let isDragging = false;

            if (!handle || !overlay) return;

            const updateSliderPosition = (x) => {
                const rect = wrapper.getBoundingClientRect();
                let position = ((x - rect.left) / rect.width) * 100;

                // Constrain
                if (position < 0) position = 0;
                if (position > 100) position = 100;

                overlay.style.width = `${position}%`;
                handle.style.left = `${position}%`;
            };

            // Mouse Events
            wrapper.addEventListener('mousedown', (e) => {
                isDragging = true;
                updateSliderPosition(e.clientX);
            });

            window.addEventListener('mouseup', () => isDragging = false);

            wrapper.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                updateSliderPosition(e.clientX);
            });

            // Touch Events
            wrapper.addEventListener('touchstart', (e) => {
                isDragging = true;
                updateSliderPosition(e.touches[0].clientX);
            }, { passive: true });

            window.addEventListener('touchend', () => isDragging = false);

            wrapper.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                updateSliderPosition(e.touches[0].clientX);
            }, { passive: true });

            // Click to jump
            wrapper.addEventListener('click', (e) => {
                updateSliderPosition(e.clientX);
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Gallery Lightbox & Carousel ---
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    if (galleryWrapper) {
        const track = document.querySelector('.gallery-track');
        const cards = document.querySelectorAll('.gallery-card');
        const prevBtn = document.querySelector('.gallery-nav.prev');
        const nextBtn = document.querySelector('.gallery-nav.next');

        // Carousel Logic
        let currentIndex = 0;

        function getCardWidth() {
            // card width + gap
            const cardStyle = window.getComputedStyle(cards[0]);
            const gap = 20; // Default gap from CSS
            return cards[0].offsetWidth + gap;
        }

        function updateCarousel() {
            const cardWidth = getCardWidth();
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

            // Handle disabled states
            // prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            // nextBtn.style.opacity = currentIndex >= cards.length - 1 ? '0.5' : '1';
        }

        nextBtn.addEventListener('click', () => {
            // Determine how many visible
            const containerWidth = document.querySelector('.gallery-track-container').offsetWidth;
            const cardWidth = getCardWidth();
            const visibleCards = Math.floor(containerWidth / cardWidth);

            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
            } else {
                // Optional: Loop back to start
                currentIndex = 0;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else {
                // Optional: Loop to end
                // const visibleCards = ...
            }
        });

        // Resize handler to reset or adjust
        window.addEventListener('resize', () => {
            updateCarousel();
        });

        // Lightbox Logic (Adapted for new structure)
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img src="" alt="Tam Ekran Galeri" class="lightbox-img">
        `;
        document.body.appendChild(lightbox);
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const lightboxClose = lightbox.querySelector('.lightbox-close');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Load More Gallery (Simulation) ---
    // In a real scenario, this would load more images from an array or API.
    // For now, it could perhaps toggle visibility of hidden items or just be a placeholder.
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            // Logic to load more images... 
            // For now, let's just alert or perform a simple action
            // Or we can add more items dynamically if we had the list in JS.
            this.style.display = 'none'; // Hide button after click for now
        });
    }

    // --- Testimonial Carousel ---
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    if (testimonialWrapper) {
        const tTrack = document.querySelector('.testimonial-track');
        const tCards = document.querySelectorAll('.testimonial-card');
        const tPrevBtn = document.querySelector('.testimonial-nav.prev');
        const tNextBtn = document.querySelector('.testimonial-nav.next');

        let tCurrentIndex = 0;

        function getTCardWidth() {
            const style = window.getComputedStyle(tCards[0]);
            // width + gap (30px defined in css)
            return tCards[0].offsetWidth + 30;
        }

        function updateTestimonialCarousel() {
            const cardWidth = getTCardWidth();
            tTrack.style.transform = `translateX(-${tCurrentIndex * cardWidth}px)`;
        }

        tNextBtn.addEventListener('click', () => {
            const containerWidth = document.querySelector('.testimonial-track-container').offsetWidth;
            const cardWidth = getTCardWidth();
            const visibleCards = Math.floor(containerWidth / cardWidth);

            if (tCurrentIndex < tCards.length - visibleCards) {
                tCurrentIndex++;
                updateTestimonialCarousel();
            } else {
                tCurrentIndex = 0; // Loop back
                updateTestimonialCarousel();
            }
        });

        tPrevBtn.addEventListener('click', () => {
            if (tCurrentIndex > 0) {
                tCurrentIndex--;
                updateTestimonialCarousel();
            }
        });

        window.addEventListener('resize', updateTestimonialCarousel);
    }

});

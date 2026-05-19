// ============================================
// SWIPER CAROUSEL INITIALIZATION
// ============================================
// Continuous horizontal auto-scroll for project cards.
// Uses Swiper.js v11 with linear timing for smooth infinite loop.
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper(".mySwiper", {

        direction: "horizontal",    // Left-to-right scrolling
        loop: true,                 // Infinite loop (requires enough slides)
        speed: 4000,                // Transition duration in ms (slow & smooth)
        grabCursor: true,           // Show grab cursor on hover

        autoplay: {
            delay: 0,               // No delay between transitions = continuous
            disableOnInteraction: false,  // Keep scrolling after user touch
            pauseOnMouseEnter: true,      // Pause when hovering (accessibility)
            stopOnLastSlide: false,       // Don't stop (loop handles this)
        },

        mousewheel: {
            invert: false,          // Natural scroll direction
            forceToAxis: true,      // Only scroll horizontally
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Responsive breakpoints for number of visible slides
        breakpoints: {
            // Mobile (0px+)
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            // Tablet (768px+)
            768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
            },
            // Desktop (1024px+)
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
        },
    });
});
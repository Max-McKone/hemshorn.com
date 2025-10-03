// Simple JavaScript for basic functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    showSlide(currentSlideIndex);
    
    // Auto-advance carousel every 5 seconds
    setInterval(function() {
        changeSlide(1);
    }, 5000);
    
    // Smooth scroll for back to top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.style.display = 'inline-block';
            } else {
                backToTop.style.display = 'none';
            }
        }
    });
});

// Carousel Functions
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

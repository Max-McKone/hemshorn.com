// Modern Carousel JavaScript
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    if (slides.length > 0) {
        // Initialize hero background to show on first slide
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('show-background');
        }
        
        showSlide(currentSlideIndex);
        startAutoSlide();
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.modern-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopAutoSlide);
            carousel.addEventListener('mouseleave', startAutoSlide);
        }
    }
    
    // Initialize hamburger menu
    initializeHamburgerMenu();
    
    // Handle dropdown clicks (desktop and mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        const link = item.querySelector('a');
        const hasDropdown = item.querySelector('.dropdown-menu');
        
        if (link && hasDropdown) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                navItems.forEach(function(otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle this dropdown
                item.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking on dropdown sub-links
    const allDropdownLinks = document.querySelectorAll('.dropdown-menu a');
    allDropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const isNavItem = e.target.closest('.nav-item');
        const isHamburger = e.target.closest('.hamburger');
        const isNavigation = e.target.closest('.navigation');
        
        if (!isNavItem && !isHamburger && !isNavigation) {
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });
        }
    });
    
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
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    if (slides.length > 0) {
        const carousel = document.querySelector('.modern-carousel');
        if (carousel) {
            carousel.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
            });
            
            carousel.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
        }
    }
    
    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                changeSlide(1);
            } else {
                // Swipe right - previous slide
                changeSlide(-1);
            }
        }
    }
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
    
    // Toggle hero background visibility based on slide index
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        if (index === 0) {
            heroSection.classList.add('show-background');
        } else {
            heroSection.classList.remove('show-background');
        }
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
    restartAutoSlide();
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    restartAutoSlide();
}

function startAutoSlide() {
    if (slides.length > 1) {
        autoSlideInterval = setInterval(function() {
            changeSlide(1);
        }, 10000); // 10 seconds
    }
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Hamburger Menu Functions
function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (hamburger && navigation) {
        // Toggle menu
        hamburger.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // Close menu when clicking backdrop
        if (menuBackdrop) {
            menuBackdrop.addEventListener('click', function() {
                closeMobileMenu();
            });
        }
        
        // Close menu when clicking on dropdown sub-links
        const dropdownLinks = navigation.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        });
    }
}

function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    
    if (hamburger && navigation) {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
        
        if (menuBackdrop) {
            menuBackdrop.classList.toggle('active');
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
    }
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    
    if (hamburger && navigation) {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
        
        if (menuBackdrop) {
            menuBackdrop.classList.remove('active');
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Close any open dropdowns
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
        });
    }
}

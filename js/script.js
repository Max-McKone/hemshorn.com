// Modern Carousel JavaScript
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;

// Force scroll to top on page load/reload
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Add fade-in animations to elements
    initializeFadeInAnimations();
    
    // Initialize scroll-triggered animations
    initializeScrollAnimations();
    
    // Initialize language switcher with correct page mapping
    initializeLanguageSwitcher();
    
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
    // Also add scroll effect to sticky navbar with hide on scroll down
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentScrollY = window.scrollY;
                
                // Back to top button
                if (backToTop) {
                    if (currentScrollY > 300) {
                        backToTop.style.display = 'inline-block';
                    } else {
                        backToTop.style.display = 'none';
                    }
                }
                
                // Header scroll behavior
                if (header) {
                    // Add scrolled class for enhanced shadow
                    if (currentScrollY > 10) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    
                    // Hide/show based on scroll direction
                    // Only apply hide behavior after scrolling past 100px
                    if (currentScrollY > 100) {
                        if (currentScrollY > lastScrollY) {
                            // Scrolling down - hide navbar
                            header.classList.add('hidden');
                        } else {
                            // Scrolling up - show navbar
                            header.classList.remove('hidden');
                        }
                    } else {
                        // Always show navbar near top of page
                        header.classList.remove('hidden');
                    }
                }
                
                lastScrollY = currentScrollY;
                ticking = false;
            });
            
            ticking = true;
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
        
        // Close menu when clicking backdrop (but not on navigation menu)
        if (menuBackdrop) {
            menuBackdrop.addEventListener('click', function(e) {
                // Only close if clicking on the backdrop itself, not on navigation elements
                if (e.target === menuBackdrop) {
                    closeMobileMenu();
                }
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

// Fade-in Animation Function
function initializeFadeInAnimations() {
    const topBar = document.querySelector('.top-bar');
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const mainContent = document.querySelector('.main-content');
    
    // Add fade-in classes with staggered delays
    if (topBar) {
        topBar.classList.add('fade-in-element', 'delay-1');
    }
    
    if (header) {
        header.classList.add('fade-in-element', 'delay-2');
    }
    
    if (hero) {
        hero.classList.add('fade-in-element', 'delay-3');
    }
    
    if (mainContent) {
        mainContent.classList.add('fade-in-element', 'delay-4');
    }
}

// Collapsible Section Toggle
function toggleCollapsible(contentId) {
    const content = document.getElementById(contentId);
    const header = document.querySelector(`[onclick*="${contentId}"]`);
    
    if (content) {
        content.classList.toggle('active');
    }
    
    if (header) {
        header.classList.toggle('active');
    }
}

// Language Switcher with Page Mapping
function initializeLanguageSwitcher() {
    // Map of page names across languages
    // Format: { de: 'german-page.html', en: 'english-page.html', es: 'spanish-page.html' }
    const pageMapping = {
        'index.html': { de: 'index.html', en: 'index.html', es: 'index.html' },
        'coaching.html': { de: 'coaching.html', en: 'coaching.html', es: 'coaching.html' },
        'kontakt.html': { de: 'kontakt.html', en: 'contact.html', es: 'contacto.html' },
        'contact.html': { de: 'kontakt.html', en: 'contact.html', es: 'contacto.html' },
        'contacto.html': { de: 'kontakt.html', en: 'contact.html', es: 'contacto.html' },
        'profil.html': { de: 'profil.html', en: 'profile.html', es: 'perfil.html' },
        'profile.html': { de: 'profil.html', en: 'profile.html', es: 'perfil.html' },
        'perfil.html': { de: 'profil.html', en: 'profile.html', es: 'perfil.html' },
        'leistungen.html': { de: 'leistungen.html', en: 'services.html', es: 'servicios.html' },
        'services.html': { de: 'leistungen.html', en: 'services.html', es: 'servicios.html' },
        'servicios.html': { de: 'leistungen.html', en: 'services.html', es: 'servicios.html' },
        'training.html': { de: 'training.html', en: 'training.html', es: 'entrenamiento.html' },
        'entrenamiento.html': { de: 'training.html', en: 'training.html', es: 'entrenamiento.html' },
        'moderation.html': { de: 'moderation.html', en: 'moderation.html', es: 'moderacion.html' },
        'moderacion.html': { de: 'moderation.html', en: 'moderation.html', es: 'moderacion.html' },
        'personalentwicklung.html': { de: 'personalentwicklung.html', en: 'hr-development.html', es: 'desarrollo-rrhh.html' },
        'hr-development.html': { de: 'personalentwicklung.html', en: 'hr-development.html', es: 'desarrollo-rrhh.html' },
        'desarrollo-rrhh.html': { de: 'personalentwicklung.html', en: 'hr-development.html', es: 'desarrollo-rrhh.html' },
        'better-up-life.html': { de: 'better-up-life.html', en: 'better-up-life.html', es: 'index.html' } // Spanish doesn't have this page
    };
    
    // Get current page filename
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    // Detect current language from path
    let currentLang = 'de'; // default
    if (currentPath.includes('/en/')) {
        currentLang = 'en';
    } else if (currentPath.includes('/es/')) {
        currentLang = 'es';
    } else if (currentPath.includes('/de/')) {
        currentLang = 'de';
    }
    
    // Get the page mapping for current page
    const mapping = pageMapping[currentPage];
    
    // Find language switcher dropdown more reliably
    const navItems = document.querySelectorAll('.nav-item');
    let languageSwitcher = null;
    
    navItems.forEach(function(item) {
        const dropdown = item.querySelector('.dropdown-menu');
        if (dropdown) {
            const hasLangLinks = dropdown.querySelector('a[href*="/de/"]') || 
                                dropdown.querySelector('a[href*="/en/"]') || 
                                dropdown.querySelector('a[href*="/es/"]');
            if (hasLangLinks) {
                languageSwitcher = item;
            }
        }
    });
    
    if (languageSwitcher && mapping) {
        const dropdown = languageSwitcher.querySelector('.dropdown-menu');
        const deLink = dropdown.querySelector('a[href*="/de/"]');
        const enLink = dropdown.querySelector('a[href*="/en/"]');
        const esLink = dropdown.querySelector('a[href*="/es/"]');
        
        // Determine the base path (../ if in language folder, or language folder name if at root)
        const isInLangFolder = currentPath.includes('/de/') || currentPath.includes('/en/') || currentPath.includes('/es/');
        const basePath = isInLangFolder ? '../' : '';
        
        if (deLink) {
            deLink.href = basePath + 'de/' + mapping.de;
        }
        if (enLink) {
            enLink.href = basePath + 'en/' + mapping.en;
        }
        if (esLink) {
            esLink.href = basePath + 'es/' + mapping.es;
        }
    } else if (!mapping && languageSwitcher) {
        // If no mapping found, default to index.html for safety
        const dropdown = languageSwitcher.querySelector('.dropdown-menu');
        const deLink = dropdown.querySelector('a[href*="/de/"]');
        const enLink = dropdown.querySelector('a[href*="/en/"]');
        const esLink = dropdown.querySelector('a[href*="/es/"]');
        
        const isInLangFolder = currentPath.includes('/de/') || currentPath.includes('/en/') || currentPath.includes('/es/');
        const basePath = isInLangFolder ? '../' : '';
        
        if (deLink) deLink.href = basePath + 'de/index.html';
        if (enLink) enLink.href = basePath + 'en/index.html';
        if (esLink) esLink.href = basePath + 'es/index.html';
    }
}

// Initialize scroll-triggered animations
function initializeScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-fade-in');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
    });
    
    // Observe all scroll fade-in elements
    scrollElements.forEach(element => {
        observer.observe(element);
    });
}

// Logo Carousel Mobile Touch Enhancement
function initializeLogoCarousel() {
    const logoCarousel = document.querySelector('.logos-carousel');
    const logoItems = document.querySelectorAll('.logo-item');
    
    if (!logoCarousel || logoItems.length === 0) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    let isPaused = false;
    
    // Handle touch start
    logoCarousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        isPaused = true;
        logoCarousel.style.animationPlayState = 'paused';
    }, { passive: true });
    
    // Handle touch end
    logoCarousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        
        // Resume animation after a short delay
        setTimeout(() => {
            if (isPaused) {
                logoCarousel.style.animationPlayState = 'running';
                isPaused = false;
            }
        }, 300);
    }, { passive: true });
    
    // Add touch feedback for individual logo items
    logoItems.forEach(logoItem => {
        logoItem.addEventListener('touchstart', function() {
            this.style.transition = 'transform 0.1s ease, opacity 0.1s ease';
        }, { passive: true });
        
        logoItem.addEventListener('touchend', function() {
            this.style.transition = 'all 0.3s ease';
        }, { passive: true });
    });
}

// Initialize logo carousel when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeLogoCarousel();
});

// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav_list a');
    
    // Toggle burger menu
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu on window resize to large screen
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 750) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize with 'all' filter
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.click();
    }
});

// Phone number validation
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('number');
    if (input) {
        input.addEventListener('input', () => {
            const regex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
            if (!regex.test(input.value)) {
                input.setCustomValidity("Numéro invalide. Veuillez saisir un numéro valide à 10 chiffres.");
            } else {
                input.setCustomValidity("");
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const mobileMenuButton = document.querySelector('[aria-label="menu"]');
    const mainNavigation = document.querySelector('nav[role="navigation"]');

    function isMobile() {
        return window.innerWidth < 768;
    }

    if (mobileMenuButton && mainNavigation) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (mainNavigation.classList.contains('hidden')) {
                mainNavigation.classList.remove('hidden');
                mainNavigation.classList.add('flex');
            } else {
                mainNavigation.classList.add('hidden');
                mainNavigation.classList.remove('flex');
            }
        });
    }

    // Dropdown toggle for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (!toggle || !menu) return; // Skip if elements are missing

            const links = menu.querySelectorAll('a');

            function hideMenu() {
                menu.style.display = 'none';
                menu.style.opacity = '0';
            }
            
            function showMenu() {
                menu.style.display = 'block';
                setTimeout(() => {
                    menu.style.opacity = '1';
                }, 10);
            }

            // Only toggle on mobile
            toggle.addEventListener('click', function(e) {
                if (!isMobile()) return;
                if (e.target !== toggle) return;
                e.preventDefault();
                e.stopPropagation();
                if (menu.style.display === 'block') {
                    hideMenu();
                } else {
                    showMenu();
                }
            });

            // Hide dropdown when clicking outside (mobile only)
            document.addEventListener('click', function(e) {
                if (!isMobile()) return;
                if (toggle.contains(e.target)) return;
                if (!dropdown.contains(e.target)) {
                    hideMenu();
                }
            });

            // Allow links inside dropdown to work normally
            links.forEach(link => {
                link.addEventListener('click', function() {
                    hideMenu();
                });
            });

            // Reset on resize
            window.addEventListener('resize', function() {
                if (!isMobile()) {
                    menu.style.display = '';
                    menu.style.opacity = '';
                } else {
                    hideMenu();
                }
            });

            // Initial state
            if (isMobile()) hideMenu();
        });
    }
});

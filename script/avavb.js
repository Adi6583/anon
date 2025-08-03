document.addEventListener('DOMContentLoaded', function() {
    // Services dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownToggle && dropdownMenu) {
        // Mobile tap functionality
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle visibility and opacity
            if (dropdownMenu.classList.contains('hidden') || dropdownMenu.style.opacity === '0') {
                dropdownMenu.classList.remove('hidden');
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
            } else {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    dropdownMenu.classList.add('hidden');
                    dropdownMenu.style.display = 'none';
                }, 200);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    dropdownMenu.classList.add('hidden');
                    dropdownMenu.style.display = 'none';
                }, 200);
            }
        });
    }
    
    // Accordion functionality - target existing accordion-like structures
    const accordionSections = document.querySelectorAll('.items-stretch.bg-white.box-border.flex-col');
    
    accordionSections.forEach(section => {
        const header = section.querySelector('.items-center.box-border.gap-x-6.flex.justify-between');
        const content = section.querySelector('[class*="h-0"][class*="overflow-hidden"]');
        
        if (header && content) {
            // Add cursor pointer to header
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', function() {
                // Toggle current accordion
                if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                    content.style.maxHeight = '0px';
                    content.style.height = '0px';
                } else {
                    content.style.maxHeight = '1000px';
                    content.style.height = 'auto';
                }
                
                // Close other accordions
                accordionSections.forEach(otherSection => {
                    if (otherSection !== section) {
                        const otherContent = otherSection.querySelector('[class*="h-0"][class*="overflow-hidden"]');
                        if (otherContent) {
                            otherContent.style.maxHeight = '0px';
                            otherContent.style.height = '0px';
                        }
                    }
                });
            });
        }
    });
});
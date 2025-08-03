document.addEventListener('DOMContentLoaded', function() {
    // Services dropdown functionality
    const servicesDropdown = document.querySelector('nav[role="navigation"] .relative.text-lg');
    const dropdownToggle = servicesDropdown?.querySelector('[role="button"]');
    const dropdownMenu = servicesDropdown?.querySelector('nav');
    
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isHidden = dropdownMenu.classList.contains('hidden');
            
            if (isHidden) {
                dropdownMenu.classList.remove('hidden');
                dropdownMenu.style.opacity = '1';
            } else {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    dropdownMenu.classList.add('hidden');
                }, 200);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!servicesDropdown.contains(e.target)) {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    dropdownMenu.classList.add('hidden');
                }, 200);
            }
        });
    }
    
    // Accordion functionality for FAQ sections
    const accordionSections = document.querySelectorAll('.items-stretch.bg-white.box-border.flex-col.justify-start');
    
    accordionSections.forEach(section => {
        const header = section.querySelector('.items-center.box-border.gap-x-6.flex.justify-between');
        const content = section.querySelector('.box-border.h-0.w-full.overflow-hidden');
        
        if (header && content) {
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', function() {
                const isExpanded = content.style.height !== '0px' && content.style.height !== '';
                
                if (isExpanded) {
                    content.style.height = '0px';
                    content.style.paddingTop = '0px';
                    content.style.paddingBottom = '0px';
                } else {
                    content.style.height = 'auto';
                    content.style.paddingTop = '';
                    content.style.paddingBottom = '';
                }
                
                // Close other accordions
                accordionSections.forEach(otherSection => {
                    if (otherSection !== section) {
                        const otherContent = otherSection.querySelector('.box-border.h-0.w-full.overflow-hidden');
                        if (otherContent) {
                            otherContent.style.height = '0px';
                            otherContent.style.paddingTop = '0px';
                            otherContent.style.paddingBottom = '0px';
                        }
                    }
                });
            });
        }
    });
});
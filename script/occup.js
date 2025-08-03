
        // Make accordions clickable
        document.addEventListener('DOMContentLoaded', function() {
            // Handle accordions
            const accordions = document.querySelectorAll('.items-stretch.bg-white.box-border.flex-col.justify-start');
            
            accordions.forEach(accordion => {
                const header = accordion.querySelector('.items-center.box-border.gap-x-6.flex.justify-between');
                const content = accordion.querySelector('.box-border.h-0.w-full.overflow-hidden');
                const icon = accordion.querySelector('img[src*="icon-"]');
                
                if (header && content) {
                    header.style.cursor = 'pointer';
                    
                    header.addEventListener('click', function() {
                        // Toggle content visibility
                        if (content.style.height === 'auto') {
                            content.style.height = '0';
                            content.style.padding = '0';
                            if (icon) {
                                icon.style.transform = 'rotate(0deg)';
                            }
                        } else {
                            content.style.height = 'auto';
                            content.style.padding = '1rem';
                            if (icon) {
                                icon.style.transform = 'rotate(180deg)';
                                icon.style.transition = 'transform 0.3s ease';
                            }
                        }
                    });
                }
            });
            
            // Handle services dropdown
            const servicesButton = document.querySelector('div.relative.text-lg div[role="button"]');
            const servicesNav = document.querySelector('nav.static.text-lg.bg-zinc-300');
            const servicesContainer = document.querySelector('div.relative.text-lg');
            
            if (servicesButton && servicesNav && servicesContainer) {
                servicesButton.style.cursor = 'pointer';
                
                function toggleServices() {
                    if (servicesNav.classList.contains('hidden')) {
                        servicesNav.classList.remove('hidden');
                        servicesNav.style.height = 'auto';
                        servicesNav.style.opacity = '1';
                    } else {
                        servicesNav.classList.add('hidden');
                        servicesNav.style.height = '0';
                        servicesNav.style.opacity = '0';
                    }
                }
                
                servicesButton.addEventListener('click', toggleServices);
                servicesButton.addEventListener('touchstart', toggleServices);
                
                servicesContainer.addEventListener('mouseenter', function() {
                    servicesNav.classList.remove('hidden');
                    servicesNav.style.height = 'auto';
                    servicesNav.style.opacity = '1';
                });
                
                servicesContainer.addEventListener('mouseleave', function() {
                    servicesNav.classList.add('hidden');
                    servicesNav.style.height = '0';
                    servicesNav.style.opacity = '0';
                });
            }
            
            // Handle language dropdown
            const languageButton = document.querySelector('div[role="button"].relative.text-neutral-800');
            const languageNav = document.querySelector('nav.absolute.text-base.bg-zinc-300');
            const languageContainer = languageButton?.parentElement;
            
            if (languageButton && languageNav && languageContainer) {
                languageButton.style.cursor = 'pointer';
                
                function toggleLanguage() {
                    if (languageNav.classList.contains('hidden')) {
                        languageNav.classList.remove('hidden');
                        languageNav.classList.add('block');
                    } else {
                        languageNav.classList.add('hidden');
                        languageNav.classList.remove('block');
                    }
                }
                
                languageButton.addEventListener('click', toggleLanguage);
                languageButton.addEventListener('touchstart', toggleLanguage);
                
                languageContainer.addEventListener('mouseenter', function() {
                    languageNav.classList.remove('hidden');
                    languageNav.classList.add('block');
                });
                
                languageContainer.addEventListener('mouseleave', function() {
                    languageNav.classList.add('hidden');
                    languageNav.classList.remove('block');
                });
            }
        });
    
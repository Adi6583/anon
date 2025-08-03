
            document.addEventListener('DOMContentLoaded', function() {
                
                
                // Services dropdown - in main navigation
                const servicesContainer = document.querySelector('.relative.text-lg.box-border.inline-block');
                const servicesBtn = servicesContainer?.querySelector('[role="button"]');
                const servicesNav = servicesContainer?.querySelector('nav');
                
                function toggle(nav) {
                    nav?.classList.toggle('hidden');
                }
                
                function show(nav) {
                    nav?.classList.remove('hidden');
                }
                
                function hide(nav) {
                    nav?.classList.add('hidden');
                }
                
               
                
                // Services dropdown events
                servicesBtn?.addEventListener('mouseenter', () => show(servicesNav));
                servicesBtn?.addEventListener('mouseleave', () => hide(servicesNav));
                servicesNav?.addEventListener('mouseenter', () => show(servicesNav));
                servicesNav?.addEventListener('mouseleave', () => hide(servicesNav));
                servicesBtn?.addEventListener('click', () => toggle(servicesNav));
            });
       
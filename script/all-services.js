
            function toggleServicesMenu() {
                const menu = document.getElementById('servicesMenu');
                menu.classList.toggle('hidden');
            }

            function toggleMobileMenu() {
                const menu = document.getElementById('mobileMenu');
                const isHidden = menu.classList.contains('hidden');
                
                if (isHidden) {
                    menu.classList.remove('hidden');
                    menu.classList.add('block');
                } else {
                    menu.classList.add('hidden');
                    menu.classList.remove('block');
                }
            }

            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                const servicesMenu = document.getElementById('servicesMenu');
                const servicesButton = event.target.closest('[onclick="toggleServicesMenu()"]');
                
                if (!servicesButton && !servicesMenu.contains(event.target)) {
                    servicesMenu.classList.add('hidden');
                }
            });
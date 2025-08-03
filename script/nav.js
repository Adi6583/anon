document.addEventListener('DOMContentLoaded', function() {
  // Services dropdown menu toggle
  const servicesButton = document.querySelector('.services-dropdown > div[role="button"]');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (servicesButton && dropdownMenu) {
    // For mobile devices
    servicesButton.addEventListener('click', function(e) {
      if (window.innerWidth < 768) { // Mobile view
        e.preventDefault();
        dropdownMenu.classList.toggle('active');
      }
    });
    
    // For desktop - hover effect is handled by CSS
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth < 768 && !servicesButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
      }
    });
  }
});
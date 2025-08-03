document.addEventListener('DOMContentLoaded', function() {
  const servicesDropdown = document.querySelector('.services-dropdown');
  const servicesButton = servicesDropdown?.querySelector('[role="button"]');
  const servicesMenu = servicesDropdown?.querySelector('.services-menu');
  
  if (servicesButton && servicesMenu) {
    servicesButton.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        servicesMenu.classList.toggle('active');
      }
    });
    
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && !servicesDropdown.contains(e.target)) {
        servicesMenu.classList.remove('active');
      }
    });
  }
});

// Video Modal Functions
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  
  if (modal && video) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Auto-detect and set video orientation
    setVideoOrientation();
    
    // Play video
    video.play().catch(e => console.log('Video play failed:', e));
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  
  if (modal && video) {
    modal.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = 'auto';
  }
}

function setVideoOrientation() {
  const video = document.getElementById('modalVideo');
  const container = document.getElementById('videoContainer');
  
  if (!video || !container) return;
  
  // Wait for video metadata to load
  video.addEventListener('loadedmetadata', function() {
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Determine if device is mobile
    const isMobile = screenWidth <= 768;
    
    // Auto-detect orientation based on video dimensions and device
    if (isMobile) {
      // Mobile: Force portrait mode
      video.style.width = '90vw';
      video.style.height = 'auto';
      video.style.maxHeight = '80vh';
    } else {
      // Desktop: Use landscape mode
      if (videoWidth > videoHeight) {
        // Landscape video
        video.style.width = '80vw';
        video.style.height = 'auto';
        video.style.maxHeight = '80vh';
      } else {
        // Portrait video on desktop
        video.style.height = '80vh';
        video.style.width = 'auto';
        video.style.maxWidth = '60vw';
      }
    }
  });
}

// Initialize modal events
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('closeBtn');
  
  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  
  // Click outside video to close
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeVideoModal();
      }
    });
  }
  
  // Escape key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeVideoModal();
    }
  });
  
  // Handle orientation change
  window.addEventListener('orientationchange', function() {
    setTimeout(setVideoOrientation, 100);
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (!document.getElementById('videoModal').classList.contains('hidden')) {
      setVideoOrientation();
    }
  });
});
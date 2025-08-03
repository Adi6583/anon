
            document.addEventListener('DOMContentLoaded', function() {
                const accordionButtons = document.querySelectorAll('.accordion-button');
                
                accordionButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const accordionItem = this.closest('.accordion-item');
                        const accordionContent = accordionItem.querySelector('.accordion-content');
                        const arrow = this.querySelector('svg');
                        
                        // Toggle the active class
                        accordionContent.classList.toggle('active');
                        
                        // Rotate arrow
                        if (accordionContent.classList.contains('active')) {
                            arrow.style.transform = 'rotate(180deg)';
                        } else {
                            arrow.style.transform = 'rotate(0deg)';
                        }
                    });
                });
            });
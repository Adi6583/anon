
            document.addEventListener('DOMContentLoaded', function() {
                const accordionItems = document.querySelectorAll('.items-stretch.bg-white');
                
                accordionItems.forEach(item => {
                    const header = item.querySelector('.items-center.box-border.gap-x-6.flex.justify-between');
                    const content = item.querySelector('.box-border.h-0.w-full.overflow-hidden');
                    const icon = header.querySelector('img');
                    
                    if (header && content) {
                        header.style.cursor = 'pointer';
                        
                        header.addEventListener('click', function() {
                            const isOpen = content.style.height !== '0px' && content.style.height !== '';
                            
                            if (isOpen) {
                                content.style.height = '0px';
                                content.style.paddingBottom = '0px';
                                if (icon) icon.style.transform = 'rotate(0deg)';
                            } else {
                                content.style.height = content.scrollHeight + 'px';
                                content.style.paddingBottom = '16px';
                                if (icon) icon.style.transform = 'rotate(180deg)';
                            }
                        });
                        
                        if (icon) {
                            icon.style.transition = 'transform 0.3s ease';
                        }
                        content.style.transition = 'height 0.3s ease, padding-bottom 0.3s ease';
                    }
                });
            });
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger-menu');
    const mainNavigation = document.querySelector('#main-navigation');  

     
    menuButton.addEventListener('click', () => {
        mainNavigation.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

     
    mainNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNavigation.classList.contains('active')) {
                mainNavigation.classList.remove('active');
                menuButton.classList.remove('active');
            }
        });
    });
    
     
});


document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video[data-poster-srcset]');
    
    videos.forEach(video => {
        const srcset = video.getAttribute('data-poster-srcset');
        
        if (srcset) {
            const tempImage = new Image();
            tempImage.srcset = srcset;
            video.poster = tempImage.currentSrc || video.poster;
        }
    });
});
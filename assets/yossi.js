const header                = document.getElementById('masthead');
const menuDrawerButton      = document.getElementById('menu-drawer-button');
const menuDrawerButtonSpans = document.querySelectorAll("#menu-drawer-button span");
const menuDrawer            = document.getElementById('menu-drawer');
const allVideos             = document.querySelectorAll('.video-wrapper');
const isHomePage            = document.querySelector('.is-home-page');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.remove("text-white", "bg-transparent");
        header.classList.add("text-black", "bg-white");
        menuDrawerButtonSpans.forEach((span) => {
            span.classList.remove("bg-white");
            span.classList.add("bg-black");
        })

    } else {
        if (!menuDrawer.classList.contains('menu-open')) {
                header.classList.remove("bg-white");
                header.classList.add("bg-transparent");
            // if (isHomePage){
            //     header.classList.remove("text-black", "bg-white");
            //     header.classList.add("text-white", "bg-transparent");
        
            //     menuDrawerButtonSpans.forEach((span) => {
            //         span.classList.remove("bg-black");
            //         span.classList.add("bg-white");
            //     })
            // } else {
            //     header.classList.remove("bg-white");
            //     header.classList.add("bg-transparent");
            // }
        }
    }
} 

if (menuDrawerButton) {
    menuDrawerButton.addEventListener('click', event => {

        if (menuDrawer.classList.contains('menu-open')) {
            menuDrawer.classList.add('menu-fade-out');
            menuDrawer.classList.remove('menu-fade-in');
    
            menuDrawerButtonSpans.forEach((span, index) => {
    
    
                if (index === 0) {
                    span.classList.remove('translate-y-[6px]','rotate-45');
                }
        
                if (index == 1) {
                    span.classList.remove('opacity-0');
                }
        
                if (index === 2) {
                    span.classList.remove('-translate-y-[6px]', '-rotate-45');
                }
            })
    
        } else {
            menuDrawer.classList.add('menu-fade-in');
            menuDrawer.classList.remove('menu-fade-out');
    
            menuDrawerButtonSpans.forEach((span, index) => {
     
    
                if (index === 0) {
                    span.classList.add('translate-y-[6px]','rotate-45');
                }
        
                if (index == 1) {
                    span.classList.add('opacity-0');
                }
        
                if (index === 2) {
                    span.classList.add('-translate-y-[6px]', '-rotate-45');
                }
            })
        }
        menuDrawer.classList.toggle('menu-open');
        
    
        if (header.classList.contains('bg-white')) {
            // if (document.documentElement.scrollTop < 50) {
            //     header.classList.add("text-white", "bg-transparent");
            //     header.classList.remove("text-black", "bg-white");
        
            //     menuDrawerButtonSpans.forEach((span) => {
            //         span.classList.remove("bg-black");
            //         span.classList.add("bg-white");
            //     })
            // }
        } else {
            header.classList.remove("text-white", "bg-transparent");
            header.classList.add("text-black", "bg-white");
    
            menuDrawerButtonSpans.forEach((span) => {
                span.classList.add("bg-black");
                span.classList.remove("bg-white");
            })
        }
        // header.classList.toggle("text-black");
        // header.classList.toggle("bg-white");
        // header.classList.toggle("text-white");
        // header.classList.toggle("bg-transparent");
    
        // menuDrawerButtonSpans.forEach((span) => {
        //     span.classList.toggle("bg-black");
        //     span.classList.toggle("bg-white");
        // })
    });
}

if (allVideos) {
    allVideos.forEach((videoWrapper , index) => {
        const video         = videoWrapper.querySelector('video');
        const playButton    = videoWrapper.querySelector('.play-button');
        const soundButton   = videoWrapper.querySelector('.sound-button');
    
        const playIcon      = videoWrapper.querySelector('.play');
        const pauseIcon     = videoWrapper.querySelector('.pause');
        const soundIcon     = videoWrapper.querySelector('.sound');
        const mutedIcon     = videoWrapper.querySelector('.muted');
    
        playButton.addEventListener('click', event => {
           
            video.paused ? video.play() : video.pause();
            playIcon.classList.toggle('hidden',);
            pauseIcon.classList.toggle('hidden');
            console.log(video, index);
    
        });
    
        soundButton.addEventListener('click', event => {
            video.muted ? video.muted = false : video.muted = true;
            soundIcon.classList.toggle('hidden');
            mutedIcon.classList.toggle('hidden');
        });
    })
}


ScrollReveal().reveal('.reveal-fade-in', {
    duration: 1100,
    interval: 400,
    easing: 'ease-in'
});
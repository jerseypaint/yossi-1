const header                = document.getElementById('masthead');
const menuDrawerButton      = document.getElementById('menu-drawer-button');
const menuDrawerButtonSpans = document.querySelectorAll("#menu-drawer-button span");
const menuDrawer            = document.getElementById('menu-drawer');
const allVideos             = document.querySelectorAll('.video-wrapper');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.remove("text-white", "bg-transparent");
        header.classList.add("text-black", "bg-white");
        menuDrawerButtonSpans.forEach(span => {
            span.classList.remove("bg-white");
            span.classList.add("bg-black");
        })

    } else {
        header.classList.remove("text-black", "bg-white");
        header.classList.add("text-white", "bg-transparent");

        menuDrawerButtonSpans.forEach(span => {
            span.classList.remove("bg-black");
            span.classList.add("bg-white");
        })

    }
} 

menuDrawerButton.addEventListener('click', event => {
    menuDrawer.classList.toggle('drawer-open');
});

allVideos.forEach(videoWrapper => {
    video         = videoWrapper.querySelector('video');
    playButton    = videoWrapper.querySelector('.play-button');
    soundButton   = videoWrapper.querySelector('.sound-button');

    playIcon      = videoWrapper.querySelector('.play');
    pauseIcon     = videoWrapper.querySelector('.pause');
    soundIcon     = videoWrapper.querySelector('.sound');
    mutedIcon     = videoWrapper.querySelector('.muted');

    playButton.addEventListener('click', event => {
        video.paused ? video.play() : video.pause();
        playIcon.classList.toggle('hidden',);
        pauseIcon.classList.toggle('hidden');
    });

    soundButton.addEventListener('click', event => {
        video.muted ? video.muted = true : video.muted = false;
        soundIcon.classList.toggle('hidden');
        mutedIcon.classList.toggle('hidden');
    });
})
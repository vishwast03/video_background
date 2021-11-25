const preloader = document.querySelector('.preloader');
const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});

switchBtn.addEventListener('click', () => {
    if(!switchBtn.classList.contains('pause')) {
        switchBtn.classList.add('pause');
        video.pause();
    }
    else {
        switchBtn.classList.remove('pause');
        video.play();
    }
});
let heroSlideButtonPrev = document.getElementById('hero-slide__button-prev');
let heroSlideButtonNext = document.getElementById('hero-slide__button-next');
let dotsBody = document.querySelector('.hero-slide__dots');

let heroSlideIndex = 1;
heroSlideShow(heroSlideIndex);

heroSlideButtonNext.onclick = function() {
    heroSlideShow(heroSlideIndex += 1);
}

heroSlideButtonPrev.onclick = function() {
    heroSlideShow(heroSlideIndex -= 1);
}

dotsBody.onclick = function(e){ 
    heroSlideShow(heroSlideIndex = +(e.target).innerHTML[1]);
};

function heroSlideShow(n) {
    let i;
    let heroSlideList = document.getElementsByClassName('hero-slide__body');
    let heroSlideListDots = document.getElementsByClassName('hero-slide__dots-item');
    if (n > heroSlideList.length) {heroSlideIndex = 1}
    if (n < 1) {heroSlideIndex = heroSlideList.length}
    for (i = 0; i < heroSlideList.length; i++) {
        heroSlideList[i].style.display = "none";
    }
    for (i = 0; i < heroSlideListDots.length; i++) {
        heroSlideListDots[i].className = heroSlideListDots[i].className.replace(" _active_dots", "");
    }
    heroSlideList[heroSlideIndex - 1].style.display = "block";
    heroSlideListDots[heroSlideIndex - 1].className += " _active_dots";
}
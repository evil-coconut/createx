const carouselTrendingButtonNext = document.querySelector('.carousel-trending__button-next');
const carouselTrendingButtonPrev = document.querySelector('.carousel-trending__button-prev');

const carouselTrendingList = document.querySelector('.carousel-trending__carousel-list');

let carouselTrendingOffset = 0;

carouselTrendingButtonNext.addEventListener('click', function() {
    carouselTrendingOffset += 1260;
    if(carouselTrendingOffset > 2520) {
        carouselTrendingOffset = 0;
    };
    carouselTrendingList.style.left = -carouselTrendingOffset + 'px';
});

carouselTrendingButtonPrev.addEventListener('click', function() {
    carouselTrendingOffset -= 1260;
    if(carouselTrendingOffset < 0) {
        carouselTrendingOffset = 2520;
    };
    carouselTrendingList.style.left = -carouselTrendingOffset + 'px';
});

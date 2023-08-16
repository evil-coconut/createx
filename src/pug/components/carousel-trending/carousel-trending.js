import {carousel} from '../../../js/carousel.js'

const carouselTrendingButtonNext = document.querySelector('.carousel-trending__button-next');
const carouselTrendingButtonPrev = document.querySelector('.carousel-trending__button-prev');

const carouselTrendingBody = document.querySelector('.carousel-trending__carousel');
const carouselTrendingList = document.querySelector('.carousel-trending__carousel-list');

const carouselTrendingListChildren = carouselTrendingList.children;

carousel(carouselTrendingListChildren, carouselTrendingBody, carouselTrendingList, carouselTrendingButtonNext, carouselTrendingButtonPrev, 1230, 1230, 30);

window.addEventListener('resize', () => {
    carousel(carouselTrendingListChildren, carouselTrendingBody, carouselTrendingList, carouselTrendingButtonNext, carouselTrendingButtonPrev, +window.innerWidth, 1230, 30);
})
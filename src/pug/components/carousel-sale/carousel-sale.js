import {carousel} from '../../../js/carousel.js'

const carouselSaleButtonNext = document.querySelector('.carousel-sale__button-next');
const carouselSaleButtonPrev = document.querySelector('.carousel-sale__button-prev');

const carouselSaleBody = document.querySelector('.carousel-sale__carousel');
const carouselSaleList = document.querySelector('.carousel-sale__carousel-list');

const carouselSaleListChildren = carouselSaleList.children;

carousel(carouselSaleListChildren, carouselSaleBody, carouselSaleList, carouselSaleButtonNext, carouselSaleButtonPrev, 1230, 1230, 30);

window.addEventListener('resize', () => {
    carousel(carouselSaleListChildren, carouselSaleBody, carouselSaleList, carouselSaleButtonNext, carouselSaleButtonPrev, +window.innerWidth, 1230, 30);
})

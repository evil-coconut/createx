const carouselSaleButtonNext = document.querySelector('.carousel-sale__button-next');
const carouselSaleButtonPrev = document.querySelector('.carousel-sale__button-prev');

const carouselSaleList = document.querySelector('.carousel-sale__carousel-list');

let carouselSaleOffset = 0;

carouselSaleButtonNext.addEventListener('click', function() {
    carouselSaleOffset += 1260;
    if(carouselSaleOffset > 2520) {
        carouselSaleOffset = 0;
    };
    carouselSaleList.style.left = -carouselSaleOffset + 'px';
});

carouselSaleButtonPrev.addEventListener('click', function() {
    carouselSaleOffset -= 1260;
    if(carouselSaleOffset < 0) {
        carouselSaleOffset = 2520;
    };
    carouselSaleList.style.left = -carouselSaleOffset + 'px';
});

const carouselArrivals = document.querySelector('.carousel-arrivals__list');
const carouselArrivalsDots = document.getElementsByClassName('carousel-arrivals__dot-item');
let isDown = false;
let startX;
let scrollLeft;

carouselArrivals.addEventListener('mousedown', e => {
    isDown = true;
    carouselArrivals.classList.add('carousel-arrivals-active');
    startX = e.pageX - carouselArrivals.offsetLeft;
    scrollLeft = carouselArrivals.scrollLeft;
});
carouselArrivals.addEventListener('mouseleave', _ => {
    isDown = false;
    carouselArrivals.classList.remove('carousel-arrivals-active');
});
carouselArrivals.addEventListener('mouseup', _ => {
    isDown = false;
    carouselArrivals.classList.remove('carousel-arrivals-active');
});
carouselArrivals.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselArrivals.offsetLeft;
    const SCROLL_SPEED = 2;
    const walk = (x - startX) * SCROLL_SPEED;
    carouselArrivals.scrollLeft = scrollLeft - walk;
    for(let i = 0; i < carouselArrivalsDots.length; i++) {
        carouselArrivalsDots[i].className = carouselArrivalsDots[i].className.replace(" carousel-arrivals__dot-item_active", "");
    }
    let i = 0;
    if(carouselArrivals.scrollLeft >= 1600) i++;
    carouselArrivalsDots[i].className += " carousel-arrivals__dot-item_active";
});
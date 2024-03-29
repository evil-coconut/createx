const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 6,
    watchOverflow: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        915: {
            slidesPerView: 3
        },
        1230: {
            slidesPerView: 4
        },
        1545: {
            slidesPerView: 5
        },
        1860: {
            slidesPerView: 6
        }
    }
});
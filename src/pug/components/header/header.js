let btn = document.querySelector('.top-header__text-number');
let body = document.querySelector('.top-header__inner-media');
let close = body.querySelector('.top-header__close-button');

btn.addEventListener('click', () => {
    body.style.height = "100%";
})

close.addEventListener('click', () => {
    body.style.height = "0%";
})

let iconBurger = document.getElementById('icon-nav');
let bodyNav = document.querySelector('.middle-header__content');

iconBurger.addEventListener('click', () => {
    iconBurger.classList.toggle('_active-header');
    bodyNav.classList.toggle('middle-header__active-nav');
})
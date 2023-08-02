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
    let arr = document.querySelectorAll('.megamenu');
    let arrLink = document.querySelectorAll('._menu-link');
    for(let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('megamenu__active');
        arrLink[i].classList.remove('_menu-link-primary');
    }
})

// megamenu
let menu = document.querySelector('.menu__content');
let child = Array.from(menu.children).map(item => item = item.classList[0].slice(6));

menu.addEventListener('click', e => {
    if(!(e.target.closest('.megamenu') || e.target == menu.querySelector('.menu__sale-link'))) {
        let a = (e.target).innerHTML.toLowerCase();
        for(let char of child) {
            if(char != 'sale' && char != a) {
                document.querySelector('.megamenu-' + char).classList.remove('megamenu__active');
                document.querySelector('.menu__' + char + '-link').classList.remove('_menu-link-primary');
            }
        }
        document.querySelector('.megamenu-' + a).classList.toggle('megamenu__active');
        document.querySelector('.menu__' + a + '-link').classList.toggle('_menu-link-primary');
    }
})
let menuWomenLink = document.getElementById('menu-women');
let menuWomenLinkBody = document.getElementsByClassName('menu__women-link')
let megamenu = document.getElementsByClassName('header__megamenu');

menuWomenLink.onclick = function() {
    megamenu[0].classList.toggle("_active");
    menuWomenLinkBody[0].classList.toggle("_menu-link-primary");
}

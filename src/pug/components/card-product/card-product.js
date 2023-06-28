/*const cardProductRightButton = document.querySelector('.card-product__right-chevron_large');
const cardProductLeftButton = document.querySelector('.card-product__left-chevron_large');

let cardProductIndex = 1;
cardProductSlider(cardProductIndex);

cardProductRightButton.onclick = function() {
    cardProductSlider(cardProductIndex += 1);
}

cardProductLeftButton.onclick = function() {
    cardProductSlider(cardProductIndex -= 1);
}

function cardProductSlider(n) {
    let i;
    const cardProductListImg = document.querySelectorAll('.card-product__img-item');
    if (n > cardProductListImg.length) {cardProductIndex = 1}
    if (n < 1) {cardProductIndex = cardProductListImg.length}
    for (i = 0; i < cardProductListImg.length; i++) {
        cardProductListImg[i].style.display = "none";
    }
    cardProductListImg[cardProductIndex - 1].style.display = "block";
}*/
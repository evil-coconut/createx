export function carousel(elems, body, list, buttonNext, buttonPrev, widthCarouselWindow, widthMax, gap) {
    let carouselOffset = 0;
    let widthCarousel = widthMax > widthCarouselWindow ? widthCarouselWindow: widthMax;
    let widthEl = elems[0].offsetWidth; // получаем ширину элемента в карусели
    let sumWidth = widthEl * elems.length + gap * (elems.length - 1); // вычисляем полную ширину для контейнера элементов
    let showEl = Math.floor((widthCarousel - 50) / widthEl); // количество элементов для показа
    let widthElToShow = showEl * widthEl + gap * (showEl - 1); // ширина карусели с учетом количества
    list.style.width = sumWidth + 'px';
    body.style.width = widthElToShow + 'px';
    buttonNext.addEventListener('click', () => {
        carouselOffset += widthElToShow + gap;
        if(carouselOffset > (sumWidth - widthElToShow)) carouselOffset = 0;
        list.style.left = -carouselOffset + 'px';
    })
    buttonPrev.addEventListener('click', () => {
        carouselOffset -= widthElToShow + gap;
        if(carouselOffset < 0) carouselOffset = sumWidth - widthElToShow;
        list.style.left = -carouselOffset + 'px';
    })
}
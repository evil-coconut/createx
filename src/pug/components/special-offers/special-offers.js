let buttonNextSO = document.querySelector('.special-offers__right-chevron');
let buttonPrevSO = document.querySelector('.special-offers__left-chevron');
let bodySO = document.querySelector('.special-offers__list');
let listSO = document.querySelectorAll('.special-offers__list-item');

let positionSO = 0;
let countSO = 0;

let arrWidthListSO = [];
for(let char of listSO) {
    arrWidthListSO.push(char.offsetWidth);
}
bodySO.style.width = arrWidthListSO[0] + 'px';

buttonNextSO.addEventListener('click', () => {
    positionSO += arrWidthListSO[countSO];
    countSO++;
    if(positionSO >= arrWidthListSO.reduce((sum, current) => sum + current, 0)) {
        positionSO = 0;
        countSO = 0;
    };
    bodySO.style.width = arrWidthListSO[countSO] + 'px';
    bodySO.style.left = -positionSO + 'px';
})

buttonPrevSO.addEventListener('click', () => {
    positionSO -= arrWidthListSO[countSO - 1];
    countSO--;
    if(countSO < 0) {
        positionSO = arrWidthListSO.reduce((sum, current) => sum + current, 0) - arrWidthListSO[arrWidthListSO.length - 1];
        countSO = listSO.length - 1;
    };
    bodySO.style.width = arrWidthListSO[countSO] + 'px';
    bodySO.style.left = -positionSO + 'px';
})
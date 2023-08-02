//special-offers script
let widthSO = 217;
let countSO = 1;

let listSO = document.getElementsByClassName('special-offers__list-body');
let listElemsSO = document.getElementsByClassName('special-offers__list-item');

let positionSO = 0;

let buttonPrevSO = document.getElementById('special-offers__prev');
let buttonNextSO = document.getElementById('special-offers__next');

buttonPrevSO.onclick = function() {
    positionSO += widthSO * countSO;
    positionSO = Math.min(positionSO, 0);
    listSO[0].style.marginLeft = positionSO + 'px';
};

buttonNextSO.onclick = function() {
    positionSO -= widthSO * countSO;
    positionSO = Math.max(positionSO, -widthSO * (listElemsSO.length - countSO));
    listSO[0].style.marginLeft = positionSO + 'px';
};

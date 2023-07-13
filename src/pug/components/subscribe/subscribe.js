const sexElems = document.querySelector('.subscribe__info_sex').children;
let itemsToSend = [];

for(let i = 0; i < sexElems.length; i++) {
    sexElems[i].addEventListener('click', () => {
        sexElems[i].classList.toggle('subscribe__info_sex-active'); 
        let elemAtr = sexElems[i].innerHTML;
        selectButton(elemAtr);
    })
}

function selectButton(btn) {
    let index = itemsToSend.indexOf(btn);
        
    if(index === -1) {
        itemsToSend.push(btn);
    } else {
        itemsToSend.splice(index, 1);
    }
}

document.querySelector('.input__button').addEventListener('click', () => {
    let input = document.querySelector('.input__input');
    let inputEmail = input.value;

    if(inputEmail.includes('@gmail.com') || inputEmail.includes('@yandex.ru')) {
        (document.querySelector('.input__danger')).classList.remove('input__active');
        input.classList.remove('input__input_danger');
        (document.querySelector('.input__success')).classList.add('input__active');
    } else {
        (document.querySelector('.input__success')).classList.remove('input__active');
        (document.querySelector('.input__danger')).classList.add('input__active');
        input.classList.add('input__input_danger');
    }
})

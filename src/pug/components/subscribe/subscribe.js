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
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

document.querySelector('.subscribe-button').addEventListener('click', () => {
    let inputSubscribe = document.getElementById('subscribe-email');
    let inputEmailSubscribe = inputSubscribe.value;
    let subscribeContainer = document.querySelector('.subscribe__info_email');
    if(validateEmail(inputEmailSubscribe)) {
        (subscribeContainer.querySelector('.input__danger')).classList.remove('input__active');
        inputSubscribe.classList.remove('input__input_danger');
        (subscribeContainer.querySelector('.input__success')).classList.add('input__active');
    } else {
        (subscribeContainer.querySelector('.input__success')).classList.remove('input__active');
        (subscribeContainer.querySelector('.input__danger')).classList.add('input__active');
        inputSubscribe.classList.add('input__input_danger');
    }
})

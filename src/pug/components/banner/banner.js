const bannerCountdown = new Date(document.getElementById('limited-countdown').innerHTML);
let bannerX = bannerCountdown.getTime();


let countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = bannerX - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.banner__limited-countdown_days').innerHTML = days;
    document.querySelector('.banner__limited-countdown_hours').innerHTML = hours;
    document.querySelector('.banner__limited-countdown_mins').innerHTML =  minutes;
    document.querySelector('.banner__limited-countdown_sec').innerHTML = seconds;

    if(distance < 0) {
        clearInterval(countdown);
        document.querySelector('.banner__limited-countdown').innerHTML = 'EXPIRED';
    }
}, 1000)

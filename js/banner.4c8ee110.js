(()=>{let e=new Date(document.getElementById("limited-countdown").innerHTML).getTime(),n=setInterval((function(){let t=(new Date).getTime(),o=e-t,r=Math.floor(o/864e5),i=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),d=Math.floor(o%6e4/1e3);document.querySelector(".banner__limited-countdown_days").innerHTML=r,document.querySelector(".banner__limited-countdown_hours").innerHTML=i,document.querySelector(".banner__limited-countdown_mins").innerHTML=a,document.querySelector(".banner__limited-countdown_sec").innerHTML=d,o<0&&(clearInterval(n),document.querySelector(".banner__limited-countdown").innerHTML="EXPIRED")}),1e3);document.querySelector(".banner-button").addEventListener("click",(()=>{let e=document.getElementById("banner-email"),n=e.value;String(n).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?e.classList.remove("input__input_danger"):e.classList.add("input__input_danger")}))})();
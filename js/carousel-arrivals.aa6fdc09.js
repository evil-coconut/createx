(()=>{const e=document.querySelector(".carousel-arrivals__list"),s=document.getElementsByClassName("carousel-arrivals__dot-item");let a,t,l=!1;e.addEventListener("mousedown",(s=>{l=!0,e.classList.add("carousel-arrivals-active"),a=s.pageX-e.offsetLeft,t=e.scrollLeft})),e.addEventListener("mouseleave",(s=>{l=!1,e.classList.remove("carousel-arrivals-active")})),e.addEventListener("mouseup",(s=>{l=!1,e.classList.remove("carousel-arrivals-active")})),e.addEventListener("mousemove",(r=>{if(!l)return;r.preventDefault();const o=2*(r.pageX-e.offsetLeft-a);e.scrollLeft=t-o;for(let e=0;e<s.length;e++)s[e].className=s[e].className.replace(" carousel-arrivals__dot-item_active","");let c=0;e.scrollLeft>=1600&&c++,s[c].className+=" carousel-arrivals__dot-item_active"}))})();
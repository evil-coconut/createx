(()=>{"use strict";var e={836:(e,t,r)=>{function o(e,t,r,o,l,n,s,c){let a=0,u=s>n?n:s,i=e[0].offsetWidth,d=i*e.length+c*(e.length-1),p=Math.floor((u-50)/i),y=p*i+c*(p-1);r.style.width=d+"px",t.style.width=y+"px",o.addEventListener("click",(()=>{a+=y+c,a>d-y&&(a=0),r.style.left=-a+"px"})),l.addEventListener("click",(()=>{a-=y+c,a<0&&(a=d-y),r.style.left=-a+"px"}))}r.d(t,{carousel:()=>o})}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(836);const t=document.querySelector(".carousel-sale__button-next"),o=document.querySelector(".carousel-sale__button-prev"),l=document.querySelector(".carousel-sale__carousel"),n=document.querySelector(".carousel-sale__carousel-list"),s=n.children;(0,e.carousel)(s,l,n,t,o,1230,1230,30),window.addEventListener("resize",(()=>{(0,e.carousel)(s,l,n,t,o,+window.innerWidth,1230,30)}))})()})();
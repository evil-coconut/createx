(()=>{"use strict";var e={836:(e,t,r)=>{function o(e,t,r,o,n,l,c,s){let i=0,d=c>l?l:c,u=e[0].offsetWidth,a=u*e.length+s*(e.length-1),p=Math.floor((d-50)/u),y=p*u+s*(p-1);r.style.width=a+"px",t.style.width=y+"px",o.addEventListener("click",(()=>{i+=y+s,i>a-y&&(i=0),r.style.left=-i+"px"})),n.addEventListener("click",(()=>{i-=y+s,i<0&&(i=a-y),r.style.left=-i+"px"}))}r.d(t,{carousel:()=>o})}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(836);const t=document.querySelector(".carousel-trending__button-next"),o=document.querySelector(".carousel-trending__button-prev"),n=document.querySelector(".carousel-trending__carousel"),l=document.querySelector(".carousel-trending__carousel-list"),c=l.children;(0,e.carousel)(c,n,l,t,o,1230,1230,30),window.addEventListener("resize",(()=>{(0,e.carousel)(c,n,l,t,o,+window.innerWidth,1230,30)}))})()})();
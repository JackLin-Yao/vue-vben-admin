import{r as o,cN as t,f as r,Z as a}from"./index.9ddc54c2.js";import{r as s}from"./animation.e52d0262.js";function n({el:n,to:c,duration:l=500,callback:e}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;l=t(l)?500:l;const d=function(){if(!r(i))return;p+=20;const o=(t=p,c=u,m=f,(t/=l/2)<1?m/2*t*t+c:-m/2*(--t*(t-2)-1)+c);var t,c,m;((o,t)=>{o.scrollTop=t})(n,o),p<l&&r(i)?s(d):e&&a(e)&&e()};return{start:()=>{i.value=!0,d()},stop:()=>{i.value=!1}}}export{n as u};
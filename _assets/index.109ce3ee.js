import{cr as t,r as e,c$ as n,f as s,a as c,X as a,o as i,j as o,K as r,N as u}from"./index.9ddc54c2.js";var d=c({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(c,{emit:i}){const o=e(null);return function(c,a,i="click"){if(t)return;const o=e(!1);function r(t){if("touchend"===t.type&&(o.value=!0),"click"===t.type&&s(o))return;const e=c.value;e&&t.target&&!e.contains(t.target)&&a(t)}n({el:document,name:"touchend",listener:r,options:!0}),n({el:document,name:i,listener:r,options:!0})}(o,(()=>{i("clickOutside")})),a((()=>{i("mounted")})),{wrap:o}}});const l={ref:"wrap"};d.render=function(t,e,n,s,c,a){return i(),o("div",l,[r(t.$slots,"default")],512)},u(d);export{d as s};
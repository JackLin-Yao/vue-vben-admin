import{r as e,f as t,bF as r,cD as a,a as o,i as n,o as s,j as i,k as l,w as d,p as c}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import{a as m}from"./index.a5990709.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";const p=Symbol("watermark-dom");var u=o({components:{CollapseContainer:m},setup(){const o=e(null),{setWatermark:n,clear:s}=function(o=e(document.body)){let n=()=>{};const s=p.toString(),i=()=>{const e=document.getElementById(s);if(e){const r=t(o);r&&r.removeChild(e)}window.removeEventListener("resize",n)},l=e=>{i();const r=document.createElement("canvas");r.width=300,r.height=240;const a=r.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(e,r.width/20,r.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+r.toDataURL("image/png")+") left top repeat";const l=t(o);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),a()&&r((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:o}}});const f={class:"p-4"},x=c(" Create "),h=c("Clear"),g=c(" Reset ");u.render=function(e,t,r,a,o,c){const m=n("a-button"),p=n("CollapseContainer");return s(),i("div",f,[l(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[l(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[x])),_:1}),l(m,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[h])),_:1},8,["onClick"]),l(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[g])),_:1})])),_:1})])};export default u;
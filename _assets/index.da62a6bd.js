import{a as e,aR as o,u as t,i,o as s,j as r,k as n,w as a}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import{T as c}from"./index.90fcf243.js";import"./index.a5990709.js";import"./CloseOutlined.7bc225a7.js";import"./FullscreenOutlined.cb05ecf3.js";import{L as m}from"./LockOutlined.ddfabf12.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./useAttrs.ffe3ac1b.js";import{a as l}from"./index.c53a78c4.js";import"./useWindowSizeFn.0112e3aa.js";var p=e({name:"FullScreen",components:{LockOutlined:m,Tooltip:c,LockAction:o((()=>import("./LockModal.c871b785.js")))},setup(){const{t:e}=t(),[o,{openModal:i}]=l();return{t:e,register:o,handleLock:function(){i(!0)}}}});p.render=function(e,o,t,c,m,l){const p=i("LockOutlined"),d=i("Tooltip"),u=i("LockAction");return s(),r("span",{onClick:o[1]||(o[1]=(...o)=>e.handleLock&&e.handleLock(...o))},[n(d,{title:e.t("layout.header.tooltipLock"),placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[n(p)])),_:1},8,["title","mouseEnterDelay"]),n(u,{onRegister:e.register},null,8,["onRegister"])])};export default p;
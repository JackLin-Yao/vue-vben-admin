let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aY as i,I as s,i as a,o as n,j as r,k as d,n as o,J as l,bi as p}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.02c7a5b0.js";import"./index.fe650d27.js";import"./index.a5990709.js";import"./index.8a812caa.js";import"./RightOutlined.b735e334.js";import"./SettingOutlined.70b40013.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./useAttrs.ffe3ac1b.js";import"./useHeaderSetting.9288c498.js";import{b as c}from"./index.7b835f91.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const j=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),r("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=j,u.__scopeId="data-v-6110ac28";export default u;